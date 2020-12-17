const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
	  img.alt = "Cute doggo";
	  img.className = "dog-image"
	//   doggos.appendChild(img);
      doggos.insertBefore(img, doggos.childNodes[0]);
    });
}

// addNewDoggo();
// addNewDoggo();
// addNewDoggo();
// addNewDoggo();
// addNewDoggo();
// addNewDoggo();
// addNewDoggo();
// addNewDoggo();
// addNewDoggo();
// addNewDoggo();
// addNewDoggo();
// addNewDoggo();
// addNewDoggo();
// addNewDoggo();
// addNewDoggo();
// addNewDoggo();


// window.onscroll = function(ev) {
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight ) {
// 		addNewDoggo();
// 		addNewDoggo();
// 		addNewDoggo();
// 		addNewDoggo();
//     }
// };

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
// document.querySelector(".load").onshow = addNewDoggo();
// window.onscroll = function() {addNewDoggo()};

