// fetch
const getInfo = async () => {

  const request = new Request('/data.json');
  //fetch() starts a request and returns a promise. When the request completes, the promise is resolved with the Response object. 
  //If the request fails due to some network problems, the promise is rejected.


  const response = await fetch(request);
 // await fetch('/cvjson') starts an HTTP request to '/movies' URL. Because the await keyword is present, 
 //the asynchronous function is paused until the request completes.
  const cvObj = await response.json();
  //response.json() is a method on the Response object that lets you extract a JSON object from the response. 
  //The method returns a promise, so you have to wait for the JSON: await response.json().
  
  //console.log(cvObj)
  return cvObj;
  
}


const populateCv = (cvObj) => {
  let employmentHtml = '';

  cvObj.employment.forEach((element) => {
    const listItem = `
    <li>
      <h4>${element.time}</h4>
      <p>
        <span>${element.location}</span><br>
        <span>${element.jobTitle}</span>
      </p>
    </li>`;

    employmentHtml += listItem;
  });

  document.getElementById('employmentList').innerHTML = employmentHtml;

  let educationHtml = '';
  cvObj.education.forEach((element) => {
    const listItem = `
    <li>
      <h4>${element.time}</h4>
      <p>
        <span>${element.school}</span><br>
        <span>${element.subject}</span>
      </p>
    </li>`;
    educationHtml += listItem;
  });

  document.getElementById('educationList').innerHTML = educationHtml;
}


/* let internshipsHtml = ``;
cvObj.internships.forEach(element => {
  let listItem = `<li>
  <p>
  <span >${element.companyName}</span>
  <span>${element.text}</span><br>
  </p>
  </li>`;

  internshipsHtml +=listItem
  console.log(cvObj.internships);
});
document.getElementById('internshipsList').innerHTML = internshipsHtml;
} */

const cvObj = await getInfo();
populateCv(cvObj);

/* var modal = document.getElementById("myModal");

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
}; */
