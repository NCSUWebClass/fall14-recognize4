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



function getAnswerChoices(questionImage, images) {
	var choices = [];
	var randPos = randomNumber(0, images.length);
	choices.push(questionImage);
	while(choices.length < 3) {
		var choice = images[randomNumber(0, images.length)];
		var newPos = randomNumber(0, images.length);
		if(choice != questionImage) {
			choices.push(choice);
		}
	}
	return choices
}
