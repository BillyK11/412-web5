//Preloader

var preloader = document.getElementById("preloader");

window.addEventListener('load', function(){
  preloader.style.display = 'none';
})

//Modal 1
 
  function openModal1() {
    document.getElementById("modalOverlay1").style.display = "grid";
  }

  function closeModal1() {
    document.getElementById("modalOverlay1").style.display = "none";
  }

  window.onclick = function(event) {
    var modalOverlay1 = document.getElementById("modalOverlay1");
    if (event.target === modalOverlay1) {
      modalOverlay1.style.display = "none";
    }
}

//Modal 2
  
  function openModal2() {
    document.getElementById("modalOverlay2").style.display = "grid";
  }

  function closeModal2() {
    document.getElementById("modalOverlay2").style.display = "none";
  }

  window.onclick = function(event) {
    var modalOverlay2 = document.getElementById("modalOverlay2");
    if (event.target === modalOverlay2) {
      modalOverlay2.style.display = "none";
    }
}
  
//Modal 3
  
  function openModal3() {
    document.getElementById("modalOverlay3").style.display = "grid";
  }

  function closeModal3() {
    document.getElementById("modalOverlay3").style.display = "none";
  }

  window.onclick = function(event) {
    var modalOverlay3 = document.getElementById("modalOverlay3");
    if (event.target === modalOverlay3) {
      modalOverlay3.style.display = "none";
    }
}