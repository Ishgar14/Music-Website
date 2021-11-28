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
    songName: "Phir Bhi Tumko Chaahunga",
    filePath: "./songs/04_-_Phir_Bhi_Tumko_Chaahunga_-_DownloadMing.SE.mp3",
  },
  {
    songName: "Baton ko teri",
    filePath: "./songs/Baton_ko_teri.mp3",
  },
  {
    songName: "DARKHAAST",
    filePath:
      "./songs/DARKHAAST Full Audio Song SHIVAAY Arijit Singh _ Sunidhi Chauhan Ajay Devgn T-Series.mp3",
  },
  {
    songName: "Luka Chuppi",
    filePath: "./songs/Duniyaa_-_Luka_Chuppi.mp3",
  },
  {
    songName: "Tell me that you love me",
    filePath: "./songs/james-smith-tell-me-that-you-love-me.mp3",
  },
  {
    songName: "If The World Was Ending",
    filePath: "./songs/JP Saxe, Julia Michaels - If The World Was Ending.mp3",
  },
  {
    songName: "All I Want",
    filePath: "./songs/Kodaline - All I Want.mp3",
  },
  {
    songName: "Before You Go",
    filePath: "./songs/Lewis Capaldi - Before You Go.mp3",
  },
  {
    songName: "Someone You Loved",
    filePath: "./songs/Lewis Capaldi - Someone You Loved.mp3",
  },
  {
    songName: "Memories",
    filePath: "./songs/Maroon_5_-_Memories_talkglitz.tv.mp3",
  },
  {
    songName: "Qaafirana",
    filePath:
      "./songs/Qaafirana - Kedarnath Sushant S Rajput Sara Ali Khan Arijit Singh _ Nikhita Amit T.mp3",
  },
  {
    songName: "Could I Love You Any More",
    filePath:
      "./songs/Reneé Dominique feat. Jason Mraz - Could I Love You Any More.mp3",
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
