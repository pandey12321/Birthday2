let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrl = document.getElementById("ctrl");
let playPause = document.getElementById("playPause");

song.onloadeddata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

ctrl.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
  } else {
    song.pause();
    playPause.classList.add("fa-play");
    playPause.classList.remove("fa-pause");
  }
});
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  song.play();
  playPause.classList.remove("fa-play");
  playPause.classList.add("fa-pause");
};

// all songs
let songs = [
  { song: "Happy Birthday.mp3", src: "dipty1.jpg" },
  { song: "Disha.mp3", src: "Disha.jpg" },
  { song: "1 August.mp3", src: "dipty2.jpg" },
  { song: "Lawyer.mp3", src: "lawyer.jpg" },
  { song: "From My Eyes.mp3", src: "dipty3.jpg" },
  { song: "Bhojpuri.mp3", src: "dipty4.jpg" },
];
let songNumber = 0;

let songName = document.getElementById("sname");
let image = document.getElementById("img");

// Next Song play Function

function nextSong(){
  songNumber = (songNumber + 1) % songs.length;
  song.src = songs[songNumber].song;
  image.src = songs[songNumber].src;
  // changing name of song
  songName.innerText = songs[songNumber].song;

  playPause.classList.remove("fa-play");
  playPause.classList.add("fa-pause");
  song.play();
}

// adding function to addEventListener
let next = document.getElementById("next");

next.addEventListener("click", nextSong);

//previous song function
function prevSong(){
  songNumber = (songNumber - 1 + songs.length) % songs.length;
  song.src = songs[songNumber].song;
  image.src = songs[songNumber].src;
  // changing name of song
  songName.innerText = songs[songNumber].song;

  playPause.classList.remove("fa-play");
  playPause.classList.add("fa-pause");
  song.play();
}

// adding function to addEventListener
let prev = document.getElementById("prev");

prev.addEventListener("click",prevSong);

// automatic play next song when song end
song.addEventListener("ended",nextSong);

// password validation

/* let password = document.getElementById("password");
let submit = document.getElementById("submit");
let popUp = document.getElementById("popUp");
let player = document.getElementById("player");

submit.addEventListener("click",()=>{
  if(password.value=="Mayank"){
    popUp.classList.add("hidden");
    player.classList.remove("hidden");
  }else{
    alert("Enter Correct Password");
  }
}) */