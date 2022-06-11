 // Run function when page loads
window.onload=changeImg;

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 4000;	// Time Between Switch
	 
// Image List
images[0] = "./img/aquarium-01.jpg";
images[1] = "./img/aquarium-02.jpg";
images[2] = "./img/aquarium-03.jpg";
images[3] = "./img/aquarium-06.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Test JS to fix Modal window open when needed --------------------

var modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function(btn) {
	btn.onclick = function() {
		var modal = btn.getAttribute("data-modal");
		document.getElementById(modal).style.display = "block";
	};
});

var closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function(btn) {
	btn.onclick = function() {
		var modal = btn.closest(".modal").style.display = 'none'
	};
});

window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none"
	}
  };


// // Get the modal
// var modal1 = document.getElementById("modal1");

// // Get the button that opens the modal
// var btn1 = document.getElementById("btn1");

// // // Get the modal
// // var modal2 = document.getElementById("modal2");

// // // Get the button that opens the modal
// // var btn2 = document.getElementById("btn2");

// // // Get the modal
// // var modal3 = document.getElementById("modal3");

// // // Get the button that opens the modal
// // var btn3 = document.getElementById("btn3");
// // // Get the modal
// // var modal4 = document.getElementById("modal4");

// // // Get the button that opens the modal
// // var btn4 = document.getElementById("btn4");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
















// // var Slide = function(params){
// //   this.element = params.element;
 
// //   // since the options get passed through directly
// //   // from the main instance you can use whatever
// //   // options suit your transition
// //   this.options = params.options;
// // };
 
// // Slide.prototype.hide = function(instant, direction){
// //   this.element.style.display = 'none';
// // };
 
// // Slide.prototype.show = function(instant, direction){
// //   this.elment.style.display = 'block';
// // };
 
// // var Slides = require('slides-js');
// // new Slides(document.querySelector('.slides'), {
// //   transition: Slide
// // });


// // something else
// // 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '390',
//     width: '640',
//     videoId: 'M7lc1UVf-VE',
//     playerVars: {
//       'playsinline': 1
//     },
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }