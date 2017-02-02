var pug = require('pug');
var fs = require('fs');
var watch = require('watch');
var glob = require('glob');
var array;

array = glob.sync('dev/!(_)*.pug');
//console.log(array);
var createPathDestiny = function(string){
	var arr = string.split('/');
	arr.shift();
	var aux = arr.join("").split(".");
	aux.pop();
	var myString = aux.join("");

	var newPath = "prod/" + myString + ".html";
	//console.log(newPath);
	return newPath;
};

var createFile = function( originPath ){
	var html = pug.renderFile( originPath , {
		pretty:true
	});

	var pathCompiled = createPathDestiny(originPath);

	fs.writeFileSync( pathCompiled, html, "utf8");
}

var getCompiledFiles = function(){
	array.forEach(function( item, index ){
		createFile(item);
	})
}

// getCompiledFiles();

// watch.watchTree( './dev',(fn, curr, prev)=>{
// 	var current = fn;
// 	getCompiledFiles(current);
// 	console.log("[ Function ]", fn);
// })


/*experiment*/
var html = pug.render('p #{name}s Pug source code!');
//console.log(html);

// var fn = pug.compile('p #{name}s Pug source code!');
// console.log(fn({
// 	name:'Janet'
// }));

var fun = pug.compileClient('p #{name}s Pug source code!');
console.log(fun);
// Render the function
//console.log(html1);

// => '<string>of pug</string>'
var jsFunction = pug.compileFileClient('./template.pug',{
	name:'myTemplate'
})

fs.writeFileSync( "template.js", jsFunction);