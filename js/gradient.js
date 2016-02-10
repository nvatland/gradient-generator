//set standard color
var hex1 = 'ffffff';
var hex2 = '98d8e3';
//set standard position
var cbpos1 = 0; 
var cbpos2 = 100;
//set standard direction
var direction = "left";
var toDirect = "to right";
var webkitDirect = "right";

//buttons
$('#left').on('click', function(event) {
	direction = "right";
	toDirect = "to left";
	webkitDirect = "left";
	console.log(direction);
	$('#gradient').css({
			background: '-moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%)',
			background: '-webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + '))',
			background: '-webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: 'linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)'
		});
	$("#code-output").html(
			'background: -moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%);  '  + '<br>' +
			'background: -webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + ')); ' + '<br>' +
			'background: -webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ');

});

$('#right').on('click', function(event) {
	direction = "left";
	toDirect = "to right";
	webkitDirect = "right";
	console.log(direction);
	$('#gradient').css({
			background: '-moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%)',
			background: '-webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + '))',
			background: '-webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: 'linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)'
		});
	$("#code-output").html(
			'background: -moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%);  '  + '<br>' +
			'background: -webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + ')); ' + '<br>' +
			'background: -webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ');

});

$('#down').on('click', function(event) {
	direction = "bottom";
	toDirect = "to top";
	webkitDirect = "top";
	console.log(direction);
	$('#gradient').css({
			background: '-moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%)',
			background: '-webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + '))',
			background: '-webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: 'linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)'
		});
	$("#code-output").html(
			'background: -moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%);  '  + '<br>' +
			'background: -webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + ')); ' + '<br>' +
			'background: -webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ');


});

$('#up').on('click', function(event) {
	direction = "top";
	toDirect = "to bottom";
	webkitDirect = "bottom";
	console.log(direction);
	$('#gradient').css({
			background: '-moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%)',
			background: '-webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + '))',
			background: '-webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: 'linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)'
		});
	$("#code-output").html(
			'background: -moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%);  '  + '<br>' +
			'background: -webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + ')); ' + '<br>' +
			'background: -webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ');

});

//activate colorpicker - first color box
$('#cb1').colpick({
	colorScheme:'dark',
	layout:'rgbhex',
	color:'ffffff',
	submit: 0,
	onChange:function(hsb,hex,rgb,el) {
		$(el).css('background-color', '#'+hex);
		hex1 = hex;
		//change background color
		$('#gradient').css({
			background: '-moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%)',
			background: '-webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + '))',
			background: '-webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: 'linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)'
		});
		//update code output
		$("#code-output").html(
			'background: -moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%);  '  + '<br>' +
			'background: -webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + ')); ' + '<br>' +
			'background: -webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ');
		}}).css('background-color', '#ffffff');
//activate color picker - second color box
$('#cb2').colpick({
	colorScheme:'dark',
	layout:'rgbhex',
	color:'98d8e3',
	submit: 0,
	onChange:function(hsb,hex,rgb,el) {
		$(el).css('background-color', '#'+ hex);
		hex2 = hex;
		//change background color
		$('#gradient').css({
			background: '-moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%)',
			background: '-webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + '))',
			background: '-webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-ms-linear-gradient(' + direction + '  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: 'linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)'
		});
		//update code output
		$("#code-output").html(
			'background: -moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%);  '  + '<br>' +
			'background: -webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + ')); ' + '<br>' +
			'background: -webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ');
		}}).css('background-color', '#98d8e3');
//make first color box draggable
$('#cb1').draggable({
	axis: "x",
	containment: $("#colorselect"),
	zIndex: 100,
	drag: function(event, ui) {
		//set the position to be a percentage of the width of the container
		var position = $('#cb1').position();
		var scope = $('body').width();
		scope -= 500;
		scope *= .5;
		console.log(scope);
		var width = $("#colorselect").width();
		position = Math.abs(position.left - scope);
		console.log(position);
		cbpos1 = ((position / width) * 100);//weird glitch with this being the work around. where does the 38 come from?
		if (cbpos1 > 90) {cbpos1 += 6};//weird glitch with this being the work around. where does the 38 come from?
		cbpos1 = cbpos1.toFixed(0);
		//change background color
		$('#gradient').css({
			background: '-moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%)',
			background: '-webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + '))',
			background: '-webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: 'linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)'
		});
		//update code output
		$("#code-output").html(
			'background: -moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%);  '  + '<br>' +
			'background: -webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + ')); ' + '<br>' +
			'background: -webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ');
		
	}
});
$('#cb2').draggable({
	axis: "x",
	containment: $("#colorselect"),
	zIndex: 100,
	drag: function(event, ui) {
		//set the position to be a percentage of the width of the container
		var position = $('#cb2').position();
		var scope = $('body').width();
		scope -= 500;
		scope *= .5;
		var width = $("#colorselect").width();
		position = Math.abs(position.left - scope);
		cbpos2 = ((position / width) * 100);//weird glitch with this being the work around. where does the 38 come from?
		if (cbpos2 > 90) {cbpos2 += 6}; //weird glitch with this being the work around. where does the 38 come from?
		cbpos2 = cbpos2.toFixed(0);
		//change background color
		$('#gradient').css({
			background: '-moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%)',
			background: '-webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + '))',
			background: '-webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: '-ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)',
			background: 'linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%)'
		});
		//update code output
		$("#code-output").html(
			'background: -moz-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%, #' + hex2 + ' ' + cbpos2 + '%);  '  + '<br>' +
			'background: -webkit-gradient(linear, ' + direction + ', ' + webkitDirect + ', color-stop(' + cbpos1 + '%,#' + hex1 + '), color-stop(' + cbpos2 + '%,#' + hex2 + ')); ' + '<br>' +
			'background: -webkit-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -o-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: -ms-linear-gradient(' + direction + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ' + '<br>' +
			'background: linear-gradient(' + toDirect + ',  #' + hex1 + ' ' + cbpos1 + '%,#' + hex2 + ' ' + cbpos2 + '%); ');
		
	}
});