// let pickup = document.querySelector("#pick_up");

// pickup.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const webFormData = new FormData(pickup);

//   // const formDataObject = {};
//   // webFormData.forEach((value, key) => {
//   //   formDataObject[key] = value;
//   // });

//   fetch("php/insert.php", { body: webFormData, method: "POST" })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.log(err));
// });

// let viewFormData = document.querySelector("#viewFormData");

// function selectData() {
//   fetch("php/select.php")
//     .then((res) => res.json())
//     .then((data) => {
//       for (const item of data) {
//         let singleItem = document.createElement("article");
//         for (const prop in item) {
//           let singleProp = document.createElement("section");
//           singleProp.innerHTML = `${prop} : ${item[prop]}`;
//           singleItem.appendChild(singleProp);
//         }
//         viewFormData.appendChild(singleItem);
//       }
//     })
//     .catch((err) => console.log(err));
// }

// run once on page load
// selectData();

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none"; 
    } else {
      x.style.display = "block";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}