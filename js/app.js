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
