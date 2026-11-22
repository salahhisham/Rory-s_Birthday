const Music = new Audio("music.mp3");
const MusicBtn = document.querySelector(".btn");
const stickers = document.querySelectorAll(".stik img");

MusicBtn.addEventListener("click", function () {
  if (Music.paused) {
    Music.play();
    MusicBtn.textContent = "stop";
    stickers.forEach((img) => img.classList.add("active-dance"));
  } else {
    Music.pause();
    MusicBtn.textContent = "play";
    stickers.forEach((img) => img.classList.remove("active-dance"));
  }
});
BTNN=document.querySelector(".BTN22");
BTNN.addEventListener("click",function(){
    window.location.href="Candles.html"
});