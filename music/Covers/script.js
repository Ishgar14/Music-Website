console.log("Welcome to Singlong");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Aankhein Khuli Ho Ya Ho Band",
    filePath: "./songs/Aankhein Khuli Ho Ya Ho Band (Unplugged Version) Karan Nawani 320Kbps(MoviesSong.In).mp3",
  },
  {
    songName: "Agar Tum Saath Ho",
    filePath: "./songs/Agar_Tum_Saath_Ho(WellMp3.Com).mp3",
  },
  {
    songName: "Bin Tere",
    filePath: "./songs/Bin_Tere_(Unplugged)_(TwinStrings).mp3",
  },
  {
    songName: "Chand Chhupa",
    filePath: "./songs/Chand_Chhupa_(RaagJatt.com).mp3",
  },
  {
    songName: "Chhukar Mere Man Ko",
    filePath: "./songs/Chhukar_Mere_Man_Ko_The_Unwind_Mix__[Pagalworlds.Me]_[128].mp3",
  },
  {
    songName: "Dil Ibadat",
    filePath: "./songs/Dil_Ibadat_(Unplugged_Cover)_Adnan_Ahmad_320kbps(OkMp3.In).mp3",
  },
  {
    songName: "Ek Ajnabee Haseena Se",
    filePath: "./songs/Ek_Ajnabee_Haseena_Se_(Cover)_(Suryaveer).mp3",
  },
  {
    songName: "Ek Pyar Ka Nagma Hai",
    filePath: "./songs/Ek_Pyar_Ka_Nagma_Hai_Unplugged_-_Nabeel_Shaukat(Mp3Masti.In).mp3",
  },
  {
    songName: "Kaise Mujhe Tum",
    filePath: "./songs/Kaise_Mujhe_Tum_-_T-Series_Acoustics-(Mr-Song.Com).mp3",
  },
  {
    songName: "Kajra Mohabbat Wala",
    filePath: "./songs/Kajra_Mohabbat_Wala_(Studio_Version).mp3",
  },
  {
    songName: "Kya Hua Tera Wada",
    filePath: "./songs/Kya Hua Tera Wada Unplugged Cover by Pranav Chandran(DLSongs.In).mp3",
  },
  {
    songName: "Kya Mujhe Pyaar Hai",
    filePath: "./songs/Kya Mujhe Pyaar Hai (Unplugged Cover) Vicky Singh(WebMusicMp3Song.In).mp3",
  },
  {
    songName: "Udd Ja Kaale Kanwan",
    filePath: "./songs/Udd_Ja_Kaale_Kanwan_Cover_Vicky_Singh_320-(Mp3Sun.Com).mp3",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (event) => {
      makeAllPlays();
      songIndex = parseInt(event.target.id);
      event.target.classList.remove("fa-play-circle");
      event.target.classList.add("fa-pause-circle");
      audioElement.src = songs[songIndex+1].filePath;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = songs[songIndex+1].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = songs[songIndex+1].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
