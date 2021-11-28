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
    songName: "Noor E Khuda",
    filePath: "./songs/02. Noor E Khuda.mp3",
  },
  {
    songName: "Bhar Do Jholi Meri - Bajrangi Bhaijaan",
    filePath:
      "./songs/03 - Bhar Do Jholi Meri - Bajrangi Bhaijaan (ApniISP.Com).mp3",
  },
  {
    songName: "Tajdar-e-Haram",
    filePath: "./songs/04_-_Tajdar-e-Haram_-_S08E01.mp3",
  },
  {
    songName: "Arziyan",
    filePath: "./songs/10. Arziyan.mp3",
  },
  {
    songName: "Kal Ho Naa Ho",
    filePath: "./songs/Kal_Ho_Naa_Ho_-_(HindiMp3.Mobi).mp3",
  },
  {
    songName: "Kun Faya Kun Dailymaza",
    filePath: "./songs/Kun_Faya_Kun_Dailymaza_128kbps_-_Songspkred.co.mp3",
  },
  {
    songName: "What A Wonderful World",
    filePath: "./songs/Louis Armstrong - What A Wonderful World.mp3",
  },
  {
    songName: "Mitti Di Khushboo",
    filePath:
      "./songs/Mitti_Di_Khushboo_(Ayushmann_Khurrana)_(DjPunjab.Com).mp3",
  },
  {
    songName: "Always on My Mind",
    filePath:
      "./songs/musicbossorg_Elvis_Presley_-_Always_on_My_Mind_47857700.mp3",
  },
  {
    songName:
      "Cant Help Falling in Love",
    filePath:
      "./songs/musicbossorg_Elvis_Presley_-_Cant_Help_Falling_in_Love_56229806.mp3",
  },
  {
    songName: "Love Me Tender",
    filePath:
      "./songs/musicbossorg_Elvis_Presley_-_Love_Me_Tender_1956_53682001.mp3",
  },
  {
    songName: "Stand",
    filePath: "./songs/_Stand By Me-Ben E. King.mp3",
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
