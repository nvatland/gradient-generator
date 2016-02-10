<?php 
$app->get('/session', function() {
    $db = new DbHandler();
    $session = $db->getSession();
    $response["uid"] = $session['uid'];
    $response["email"] = $session['email'];
    $response["name"] = $session['name'];
    echoResponse(200, $session);
});

$app->post('/login', function() use ($app) {
    require_once 'passwordHash.php';
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('email', 'password'),$r->user);
    $response = array();
    $db = new DbHandler();
    $password = $r->user->password;
    $email = $r->user->email;
    $user = $db->getOneRecord("select uid,name,password,email from p3_users where email='$email'");
    if ($user != NULL) {
        if(passwordHash::check_password($user['password'],$password)){
        $response['status'] = "success";
        $response['message'] = 'Logged in successfully.';
        $response['name'] = $user['name'];
        $response['uid'] = $user['uid'];
        $response['email'] = $user['email'];
        if (!isset($_SESSION)) {
            session_start();
        }
        $_SESSION['uid'] = $user['uid'];
        $_SESSION['email'] = $email;
        $_SESSION['name'] = $user['name'];
        } else {
            $response['status'] = "error";
            $response['message'] = 'Login failed. Incorrect credentials';
        }
    }else {
            $response['status'] = "error";
            $response['message'] = 'No such user is registered';
        }
    echoResponse(200, $response);
});
$app->post('/signUp', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('email', 'name', 'password'),$r->user);
    require_once 'passwordHash.php';
    $db = new DbHandler();
    $name = $r->user->name;
    $email = $r->user->email;
    $password = $r->user->password;
    $isUserExists = $db->getOneRecord("select 1 from p3_users where email='$email'");
    if(!$isUserExists){
        $r->user->password = passwordHash::hash($password);
        $tabble_name = "p3_users";
        $column_names = array('name', 'email', 'password');
        $result = $db->insertIntoTable($r->user, $column_names, $tabble_name);
        if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "User account created successfully";
            $response["name"] = $name;
            $response["uid"] = $result;
            if (!isset($_SESSION)) {
                session_start();
            }
            $_SESSION['uid'] = $response["uid"];
            $_SESSION['name'] = $name;
            $_SESSION['email'] = $email;
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to create user. Please try again";
            echoResponse(201, $response);
        }            
    }else{
        $response["status"] = "error";
        $response["message"] = "A user with the provided email exists!";
        echoResponse(201, $response);
    }
});
$app->get('/logout', function() {
    $db = new DbHandler();
    $session = $db->destroySession();
    $response["status"] = "info";
    $response["message"] = "Logged out successfully";
    $_SESSION = '';
    echoResponse(200, $response);
});
$app->post('/snippets', function() {
    // $response = array();
    $request = \Slim\Slim::getInstance()->request();
    $snippet = json_decode($request->getBody());
    $test = array($snippet->snippet->name, $snippet->snippet->description, $snippet->snippet->code, $snippet->snippet->uid);
    $uid = $snippet->snippet->uid;
    $name = $snippet->snippet->name;
    $description = $snippet->snippet->description;
    $css = $snippet->snippet->code;
    $sql = "INSERT INTO p3_snippets (`name`, `description`, `css`, `user_id`) VALUES (:name, :description, :css, :user_id)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("name", $name);
        $stmt->bindParam("description", $description);
        $stmt->bindParam("css", $css);
        $stmt->bindParam("user_id", $uid);
        $stmt->execute();
        $snippet->id = $db->lastInsertId();      
        $db = null;
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }


    if ($snippet->id != NULL) {
        $response['status'] = "success";
        $response["message"] = "Snippet added successfully";
        echoResponse(200, $response);
    } else {
        $response["status"] = "error";
        $response["message"] = "Could not create snippet";
        echoResponse(201, $response);
    }

});
$app->get('/snippets/:uid', function($uid) {
    $sql = "SELECT * FROM p3_snippets WHERE user_id=:uid";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("uid", $uid);
        $stmt->execute();
        $snippets= $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo '{"snippets": ' . json_encode($snippets) . '}';
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

});

// $app->delete('/snippets/snippet/:id', function($id) {
//     $sql = "DELETE FROM p3_snippets WHERE id=:id";
//     try {
//         $db = getConnection();
//         $stmt = $db->prepare($sql);
//         $stmt->bindParam("id", $id);
//         $stmt->execute();
//         $db = null;
//         echo '{"snippets": ' . json_encode($snippets) . '}';
//     } catch(PDOException $e) {
//         echo '{"error":{"text":'. $e->getMessage() .'}}';
//     }

// });

function getConnection() {
    $dbhost="";
    $dbuser="";
    $dbpass="";
    $dbname="";
    $db = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
}
?>