let url = "data.json";
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
}

var modal = document.getElementById(".img-slide");

var li = document.getElementById(".slide");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
