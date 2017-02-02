var pug = require('pug');
var fs = require('fs');
var glob = require('glob');

glob('dev/!(_)*.pug', function( er, files){
	files.forEach(function( item, index){

		var arr = item.split('/');
		arr.shift();
		var aux = arr.join("").split(".");
		aux.pop();
		var myString = aux.join("");

		var fileCompiled = "prod/" + myString + ".html";

		var html = pug.renderFile(item, {
			pretty:true
		});

		console.log(fileCompiled);
		fs.writeFileSync( fileCompiled , html , "utf8");
	})
})
