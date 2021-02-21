const container = document.getElementById('container'),
 text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5; 

function breathAnimation() {
  text.innerText = 'Breathe In';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out';
    }, holdTime);
  }, breatheTime);
}
breathAnimation();
setInterval(breathAnimation, totalTime);