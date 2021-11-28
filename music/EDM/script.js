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
    songName: "Titanium",
    filePath: "./songs/20155-titanium-david-guetta-feat-sia--1411570439.mp3",
  },
  {
    songName: "Ignite",
    filePath:
      "./songs/Alan Walker _ K-391 - Ignite ft. Julie Bergan _ Seungri.mp3",
  },
  {
    songName: "On My Way",
    filePath: "./songs/Alan-Walker-Sabrina-Carpenter-Farruko-On-My-Way.mp3",
  },
  {
    songName: "Alone",
    filePath: "./songs/Alan_Walker_-_Alone.mp3",
  },
  {
    songName: "Sing Me To Sleep",
    filePath: "./songs/Alan_Walker_-_Sing_Me_To_Sleep_-_Copy.mp3",
  },
  {
    songName: "The Spectre",
    filePath: "./songs/Alan_Walker_-_The_Spectre_(128__kbps).mp3",
  },
  {
    songName: "Darkside",
    filePath: "./songs/Darkside (Alan Walker) 320Kbps-(BigMusic.In).mp3",
  },
  {
    songName: "Magenta",
    filePath: "./songs/Magenta_Riddim-Songspkhero.com.mp3",
  },
  {
    songName: "Sage",
    filePath:
      "./songs/Ritviz - Sage [Official Music Video] (320  kbps) (ytmp3s.me).mp3",
  },
  {
    songName: "Ved",
    filePath:
      "./songs/Ritviz - Ved [Official Audio] (320  kbps) (ytmp3s.me).mp3",
  },
  {
    songName: "Trumpets",
    filePath: "./songs/Trumpets_(ft_Sean_Paul)(MixMusic.in).mp3",
  },
  {
    songName: "Udd Gaye",
    filePath:
      "./songs/Udd_Gaye_by_Ritviz____#BacardiHousePartySession_(320__kbps).mp3",
  },
  {
    songName: "PARIS",
    filePath: "./songs/WILLY WILLIAM FEAT CRIS CAB -PARIS.mp3",
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
