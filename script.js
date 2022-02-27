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

var myModal;



// for (j < 12; j++) {
// 	// Get the modal
// 	myModal = modal + [j];
// }
// console.log("myModal");

// var j = 0;

// // -----  Modal  -------------------------------------------
// modal[0] = querySelector(modal-1);
// modal[1] = querySelector(modal-2);
// modal[2] = querySelector(modal-3);
// modal[3] = querySelector(modal-4);
// modal[4] = querySelector(modal-5);
// modal[5] = querySelector(modal-6);
// modal[6] = querySelector(modal-7);
// modal[7] = querySelector(modal-8);
// modal[8] = querySelector(modal-9);
// modal[9] = querySelector(modal-10);
// modal[10] = querySelector(modal-11);
// modal[11] = querySelector(modal-12);

var modal = document.getElementsByClassName("modal")[0];
var span = document.getElementsByClassName("close");

var modal1 = document.getElementById("modal-1");

document.querySelector("#btn-1").addEventListener
('click', function () {
  modal1.style.display = "block";
});

var modal2 = document.getElementById("modal-2");

document.querySelector("#btn-2").addEventListener
('click', function () {
  modal2.style.display = "block";
});

var modal3 = document.getElementById("modal-3");

document.querySelector("#btn-3").addEventListener
('click', function () {
  modal3.style.display = "block";
});

var modal4 = document.getElementById("modal-4");

document.querySelector("#btn-4").addEventListener
('click', function () {
  modal4.style.display = "block";
});

document.querySelector(".close").addEventListener
('click', function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
  }












  
// var modal1 = document.getElementById("modal-1");

// // Get the button that opens the modal
// var btn1 = document.getElementById("btn-1");

// // Get the <span> element that closes the modal
// var span1 = document.getElementsById("close-1")[0];

// btn1.addEventListener("click", function() {
//   modal1.style.display = "block";
// }

// // When the user clicks on the button, open the modal
// btn1.onclick = function() {
//   modal1.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span1.onclick = function() {
//   modal1.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
// }

// // ---------------------------------------------------------------------------
// var modal2 = document.getElementById("modal-2");

// // Get the button that opens the modal
// var btn2 = document.getElementById("btn-2");

// // Get the <span> element that closes the modal
// // var span2 = document.getElementsByClassName("close");

// var span2 = document.getElementsById("close-2")[0];

// // When the user clicks on the button, open the modal
// btn2.onclick = function() {
//   modal2.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span2.onclick = function() {
//   modal2.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }

// // ---------------------------------------------------------------------------
// var modal3 = document.getElementById("modal-3");

// // Get the button that opens the modal
// var btn3 = document.getElementById("btn-3");

// // Get the <span> element that closes the modal
// var span3 = document.getElementsById("close-3")[0];

// // When the user clicks on the button, open the modal
// btn3.onclick = function() {
//   modal3.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span3.onclick = function() {
//   modal3.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal3) {
//     modal3.style.display = "none";
//   }
// }

// // ---------------------------------------------------------------------------
// var modal4 = document.getElementById("modal-4");

// // Get the button that opens the modal
// var btn4 = document.getElementById("btn-4");

// // Get the <span> element that closes the modal
// var span4 = document.getElementsById("close-4")[0];

// // When the user clicks on the button, open the modal
// btn4.onclick = function() {
//   modal4.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span4.onclick = function() {
//   modal4.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal4) {
//     modal4.style.display = "none";
//   }
// }

// ------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------
// // Get the modal
// var modal = document.getElementById("modal1");

// // Get the button that opens the modal
// var btn = document.getElementById("btn1");

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
// }




// Scroll down in JS

// const 


// var element = document.getElementById("#Aquarium_Fish");



// onclick.element.scrollTo({
// 	top: 100,
// 	left: 100,
// 	behavior: 'smooth'
// });














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