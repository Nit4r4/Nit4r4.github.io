/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world !';

document.querySelector('html').addEventListener('click', function() {
    alert('Aïe, arrêtez de cliquer !!');
});*/

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'img/fox.png') {
      myImage.setAttribute('src', 'img/foxzoom.png');
    } else {
      myImage.setAttribute('src', 'img/fox.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Bienvenue sur la page,  ' + myName;
}

if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Bienvenue sur la page,  ' + storedName;
  }

  myButton.addEventListener('click', function() {
    setUserName();
  });