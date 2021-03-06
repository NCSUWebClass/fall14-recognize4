//javascript file to put commonly used functions between webpages in.


//Generates a random number between min (inclusive) and max (exclusive) 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//function for determining if an image was correctly chosen
function isCorrect(choice, correctAnswer) {
	if(choice === correctAnswer) {
	
		alert("Good Job! 10 pts");
		return 10;
	}		
	alert("Whoops Try again!");
	return 0;
	
}

//Gets JSON data from our website
//Based on http://stackoverflow.com/questions/955217/synchronous-jquery-json-request
function getJSON(specifiedAlbum) {
	var images = [];
	$.ajax({
    	async: false,
   		url: "http://recognize.bitbutt.io/json/albums/",
   		success: function(data) {
			for(var i = 0; i < data.albums.length; i++) {
				for(var j = 0; j < data.albums[i].images.length; j++) {
					if(specifiedAlbum === data.albums[i].title) {
						images.push(data.albums[i].images[j]);
					}
				}
			}
    	}	
	});
	return images;
}


//Gets 3 random answer choices for a question image.
function getAnswerChoices(questionImage, images) {
	if(images.length < 3) {
		var answerChoices = [];
		answerChoices.push(questionImage);
		return answerChoices;
	}
	var answerChoices = [];
	var randPos = randomNumber(0, images.length);
	answerChoices.push(questionImage);
	var counter = 1;
	while(counter < 3) {
		console.log(counter);
		var choice = images[randomNumber(0, images.length)];
		if(choice != questionImage && contains(answerChoices, choice) === false) {
			answerChoices.push(choice);
			counter++;
		}
	}
	answerChoices = randomize(answerChoices);
	return answerChoices;
}



//checks whether an array contains a value.
function contains(array, value) {
	for(var i = 0; i < array.length; i++) {
		if(array[i] === value) {
			return true;
		}
	}
	return false;
}

//Source: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
//Randomizes the contents of an array.
function randomize(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;


}









