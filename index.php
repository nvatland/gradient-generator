<!DOCTYPE html>
<html lang="en" ng-app="gradients">

  <head>
    <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>Gradients</title>
              <link rel="stylesheet" type="text/css" href="css/style.css">
        <link href="css/toaster.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/colpick.css">
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <script src="js/vendor/jquery-1.11.2.min.js"></script>
              </head>

  <body ng-controller="authCtrl">
      <nav class="menu">
            <ul>
                <a href="#/" rel="gradients"><li><span>Gradients</span></li></a><!--
                --><a href="#/dashboard" rel="dashboard"><li><span>My Profile</span></li></a><!--
                --><a href="#/login" rel="login"><li class="last-li"><span>Log in</span></li></a><!--
                --><!--<a href="#/logout" ><li class="last-li"><span>Log Out</span></li></a>-->
            </ul>
        </nav>

        <div id="container">
        <div ng-view></div>
    </div>
      </div>
    </body>
  <toaster-container toaster-options="{'time-out': 3000}"></toaster-container>
  <!-- Libs -->
  <script src="js/angular.min.js"></script>
  <script type="text/javascript" src="js/colpick.js"></script>
  <script type="text/javascript" src="js/jquery-ui.js"></script>
  <!-- <script type="text/javascript" src="js/ng-confirm-click.js"></script>-->
  <script src="js/angular-route.min.js"></script>
  <script src="js/angular-animate.min.js" ></script>
  <script src="js/toaster.js"></script>
  <script src="app/app.js"></script>
  <script src="app/data.js"></script>
  <script src="app/directives.js"></script>
  <script src="app/authCtrl.js"></script>
</html>

