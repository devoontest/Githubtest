/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0A1224AF-6C1E-4224-BB82-8D045EB360DA"}
 */
var html = "<!doctype html>                        \
<html>                                             \
<head>                                             \
<meta charset='UTF-8'>                             \
<title>Untitled Document</title>                   \
</head>                                            \
                                                   \
<style>                                            \
html {                                             \
	width:100%;                                    \
	height:100%;                                   \
}                                                  \
body {                                             \
	width:100%;                                    \
	height:100%;                                   \
}                                                  \
.centerblock {                                     \
	width:128px;                                   \
	height:auto;                                   \
	text-align:center;                             \
	margin:auto;                                   \
	border:3px solid blue;                         \
	color:blue;                                    \
}                                                  \
</style>                                           \
<body>                                             \
	<div class='centerblock'>                      \
		<p>Hallo ik ben een tekt in een div.</p>   \
		<p>Ik ben de tweede regel in die div.</p>  \
		<br>                                       \
		<p>Dit is het einde van de div</p>         \
	</div>                                         \
</body>                                            \
</html>                                            \
";

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"539D7C68-0BF2-4D2E-87EF-49F05EAD73A5"}
 */
function onAction(event) {
	application.output("hello there")
}