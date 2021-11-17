var video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});



document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector('#volume').innerHTML = document.querySelector('#slider').value +'%'
});

document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});


document.querySelector('#slower').addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log('New speed is ' + video.playbackRate);
});

document.querySelector('#faster').addEventListener("click", function() {
	video.playbackRate *= 1/0.95;
	console.log('New speed is ' + video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function() {
	console.log('Original location is '+ video.currentTime);
	video.currentTime += 15;
	if (video.currentTime >= 67){
		video.currentTime = 0
		console.log('New location is ' + video.currentTime)
	}
	else{
		console.log('New location is ' + video.currentTime);
	}
	
});

document.querySelector('#mute').addEventListener("click", function() {
	if 	(document.getElementById('mute').innerHTML=='Mute'){
		video.muted = true;
		document.getElementById('mute').innerHTML='Unmute'
	}
	else{
		video.muted = false;
		document.getElementById('mute').innerHTML='Mute'
	}
});

document.querySelector('#slider').addEventListener("input", function() {
	document.querySelector('#volume').innerHTML = document.querySelector('#slider').value +'%';
	video.volume = document.querySelector('#slider').value/100;
	console.log(document.querySelector('#slider').value/100)
});

document.querySelector('#vintage').addEventListener("click", function() {
	video.classList.add('oldSchool')
})

document.querySelector('#orig').addEventListener("click", function() {
	video.classList.remove("oldSchool")
})
