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
<video src="https://www.youtube.com/watch?v=K30yHXasgMM" width="320" height="240" controls>
Video not supported
</video>