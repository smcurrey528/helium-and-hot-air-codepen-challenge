window.onload = function() {
  const body = document.body;

function createBird () {
  const div = document.createElement('div')
  div.classList.add('bird')
  body.appendChild(div);


  function moveBird () {
div.style.left = (Math.random() * window.innerWidth) + 'px'
div.style.top = (Math.random() * window.innerHeight) + 'px'
  }

  moveBird();

function second () {

setInterval(function() {
  moveBird();
}, 1000)
}
second();


  }

  for (let i=0; i < 1; i++) {
    createBird();
  }
}
