// For Scroll Up
let up_button = document.getElementById("btn_back_up");

window.onscroll = function () {
  scroll();
};

function scroll() {
  if ( document.body.scrollTop > 5 || document.documentElement.scrollTop > 5 ) {
    up_button.style.display = "block";
  } else {
    up_button.style.display = "none";
  }
}

up_button.addEventListener("click", balikkeatas);

function balikkeatas() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// For Modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
