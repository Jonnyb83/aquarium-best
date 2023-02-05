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

// Scroll up CLICK HOME

let myHome = document.getElementById("Home");

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
  };

// Add active class

// Add active class to the current button (highlight it)
var header = document.getElementById("myNav");
var btns = header.getElementsByClassName("navLine");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}