/* let url = "data.json";
const myList = document.querySelector(".WorkExperience");

async function getmyList() {
  let response = await fetch(url);

  if (response.ok) {
    let data = response.json();
    console.log(data);
    console.log(data.tomyList[0].myList);
    let myList = data.myList;
    console.log(typeof data);

    for (let)


  }
} */
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
