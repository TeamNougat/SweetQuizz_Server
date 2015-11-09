// Music, History, Movies, Geography

var express = require('express');
var router = express.Router();

var myJson = [{"quizz":[{"text":"Pink Floyd a réalisé le disque le plus vendu de l'histoire du rock. Quel est le titre de cet album ?","answers":[{"text" : "Wish you were here", "isTrue" : "false"},{"text" : "The dark side of the moon", "isTrue" : "true"},{"text" : "The wall", "isTrue" : "false"}]},{"text":"En quelle année est sorti cet album mythique ?","answers":[{"text" : "1973", "isTrue" : "true"},{"text" : "1975", "isTrue" : "false"},{"text" : "1979", "isTrue" : "false"}]},{"text":"Quel est le tube incontournable qu'il comprend ?","answers":[{"text" : "Another brick in the wall", "isTrue" : "false"},	{"text" : "Wish you were here", "isTrue" : "false"},{"text" : "Money", "isTrue" : "true"}]},{"text":"Qui fut le tout 1er leader du groupe ?","answers":[{"text" : "Roger Waters", "isTrue" : "false"},{"text" : "Syd Barrett", "isTrue" : "true"},{"text" : "David Gilmour", "isTrue" : "false"}]},{"text":"Pendant quel mois Pink Floyd compta cinq membres ?","answers":[{"text" : "Février 1968", "isTrue" : "true"},{"text" : "Novembre 1968", "isTrue" : "false"},{"text" : "Avril 1972", "isTrue" : "false"}]},{"text":"Quel fut le 1er 45 tours de Pink Floyd ?","answers":[{"text" : "See Emily play", "isTrue" : "false"},{"text" : "Arnold Layne", "isTrue" : "true"},{"text" : "Apple and oranges", "isTrue" : "false"}]},{"text":"Quel animal gonflable aux yeux lumineux sera suspendu au-dessus de la scène pendant la tournée d''Animals' ?","answers":[{"text" : "Un cochon", "isTrue" : "true"},{"text" : "Un mouton", "isTrue" : "false"},{"text" : "Un chien", "isTrue" : "false"}]},{"text":"Qui composa la quasi intégralité du double album 'The Wall' ?","answers":[{"text" : "Rick Wright", "isTrue" : "false"},{"text" : "Roger Waters", "isTrue" : "true"},{"text" : "David Gilmour", "isTrue" : "false"}]},{"text":"Ce disque fait référence ?","answers":[{"text" : " Au rideau de fer et au mur de Berlin", "isTrue" : "false"},{"text" : "A l'adolescence de l'auteur", "isTrue" : "true"},{"text" : "Au mur qui empêche les humains de communiquer avec l'Au-delà", "isTrue" : "false"}]},{"text":"Dans quel lieu étrange et désert fut enregistré le live de 1971-72 ?","answers":[{"text" : "A Stonehenge", "isTrue" : "false"},{"text" : "Au château de Chantilly", "isTrue" : "true"},{"text" : "A Pompéi", "isTrue" : "false"}]}],"desc" : "Vous êtes incollable sur l'un des plus grands groupes de l'histoire du rock ? C'est ce que l'on va voir. . .","name" : "Pink Floyd, un groupe de légende", "theme":"music","time" : 60}]

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

