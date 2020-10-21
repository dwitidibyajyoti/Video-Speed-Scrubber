const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function HandaleUpdate(e) {
  const y = e.pageY - this.offsetTop;
  const persent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(persent * 100) + "%";
  bar.style.height = height;
  const playBackrate = persent * (max - min) + min;
  bar.textContent = playBackrate.toFixed(2) + "x";
  video.playbackRate = playBackrate;
}

speed.addEventListener("mousemove", HandaleUpdate);
