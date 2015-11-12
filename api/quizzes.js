var express = require('express');
var router = express.Router();
var fs = require('fs');

var contenu;
var nbElement = JSON.parse(fs.readFileSync("json/nbElement.json", "UTF-8"));
console.log(nbElement.nb);
var myJson = [];

for(var i = 0; i<nbElement.nb;++i){
	myJson.push(JSON.parse(fs.readFileSync("json/"+i+".json", "UTF-8")));
}
/*
var files = ['1.json', '2.json'];
files.forEach(function(element){
	myJson.push(JSON.parse(fs.readFileSync("json/"+element, "UTF-8")));
});//*/

/* GET quizzes listing. */
router.get('/quizz/', function(request, response, next) {
	//myJson = JSON.stringify(JSON.parse(myJson))
	response.send(
		myJson
	);
});

/* GET description by name. */ //*
router.get('/desc/name:id', function(resquest, reponse, next) {
	var size =  myJson.length;
	for(var i = 0; i < size; i++){
		if(":"+myJson[i].name == resquest.params.id){
			reponse.send(
				{name : myJson[i].name, screenName : myJson[i].screenName}
			);
		}
	}
}); //*/

/* GET all description. */ //*
router.get('/desc', function(request, response, next) {
	var size = myJson.length;
	var myarray = [];
	for(var i = 0; i < size; i++){
		myarray.push({name : myJson[i].name, screenName : myJson[i].screenName});
	}
	response.send(
		myarray
	);
}); //*/

/* Get quizz by name */ //*
router.get('/quizz/name:id', function(resquest,response, next) {
	var size = myJson.length;
	for(var i = 0; i < size; i++){
		if(":"+myJson[i].name == resquest.params.id){
			response.send(
				myJson[i]
			);
		}
	}
});
//*/

/* Get theme by name. */ //*
router.get('/theme/name:id', function(resquest, reponse, next){
	var size = myJson.length;
	var myQuizz = []
	for(var i = 0; i < size; i++){
		if(":"+myJson[i].theme == resquest.params.id){
			myQuizz.push({name : myJson[i].name, screenName : myJson[i].screenName});
		}
	}
	reponse.send(
		myQuizz
	);
}); //*/

/* Get all themes  */ /*
 router.get('/theme/', function(resquest, response, next) {
 var size = myJson.length;
 var themeArray = []
 for(var i = 0; i < size; i++){
 themeArray.push(myJson[i].theme)
 }
 response.send(
 themeArray
 );
 }); //*/

/* Get all themes  */ //*
router.get('/theme/', function(resquest, response, next) {
	var size = myJson.length;
	var themeArray = [];
	for(var i = 0; i < size; i++){
		isIn = themeArray.filter(function(element){
			return element == myJson[i].theme
		});
		if(isIn.length == 0){
			themeArray.push(myJson[i].theme)
		}
	}
	response.send(
		themeArray
	);
}); //*/

module.exports = router;

