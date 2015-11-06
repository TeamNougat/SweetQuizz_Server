var express = require('express');
var router = express.Router();

var myJson = [{"quizz" : [{"text":"Quelle est la couleur du cheval blanc d\'Henri IV ?","answers":[{"text" : "Bleu", "isTrue" : "false"},{"text" : "Blanc", "isTrue" : "true"}]},{"text":"Quelle est le sens de la vie ?","answers":[{"text" : "42", "isTrue" : "true"},{"text" : "Aller à l\'ISEN", "isTrue" : "false"},{"text" : "Manger de la choucroute", "isTrue" : "true"}]}],"desc" : "Ceci est un quizz de test lambda, il est vraiment nul en vrai","name" : "first", "theme":"hist", "time" : 60},{"quizz":[{"text":"Pourquoi ?","answers":[{"text":"Oui","isTrue":"false"},{"text":"Non","isTrue":"true"}]},{"text":"Une autre ?","answers":[{"text":"42","isTrue":"true"},{"text":"Manger de la choucroute","isTrue":"true"}]}],"desc":"OSEF","name":"second", "theme" : "music", "time" : 59}]

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
					{name : myJson[i].name, desc : myJson[i].desc}
				);
			}
		}
}); //*/

/* GET all description. */ //*
router.get('/desc', function(request, response, next) {
	var size = myJson.length;
	var myarray = [];
	for(var i = 0; i < size; i++){
		myarray.push({name : myJson[i].name, desc : myJson[i].desc});
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
			myQuizz.push({name : myJson[i].name, desc : myJson[i].desc});
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

