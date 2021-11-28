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
    songName: "Love Story",
    filePath: "./songs/1.Love_Story_-_From_Love_Story.mp3",
  },
  {
    songName: "Love Theme (from Romeo and Juliet)",
    filePath: "./songs/1.Love_Theme_(from_Romeo_and_Juliet).mp3",
  },
  {
    songName: "My Way",
    filePath: "./songs/1.My_Way.mp3",
  },
  {
    songName: "Theme From Schindlers List",
    filePath: "./songs/1.Theme_From_Schindlers_List.mp3",
  },
  {
    songName: "Time",
    filePath: "./songs/12.Time.mp3",
  },
  {
    songName: "Romance",
    filePath: "./songs/15.Romance_(from_The_Gadfly).mp3",
  },
  {
    songName: "Honor Him",
    filePath: "./songs/16.Honor_Him.mp3",
  },
  {
    songName: "Oogway Ascends",
    filePath: "./songs/16.Oogway_Ascends.mp3",
  },
  {
    songName: "The Wolf and the Moon",
    filePath: "./songs/5.The_Wolf_and_the_Moon.mp3",
  },
  {
    songName: "The Evening Fog",
    filePath: "./songs/6.The_Evening_Fog.mp3",
  },
  {
    songName: "The Rose",
    filePath: "./songs/6.The_Rose_ARV_10.mp3",
  },
  {
    songName: "Murrons Burial",
    filePath: "./songs/7.Murrons_Burial.mp3",
  },
  {
    songName: "Ballade pour Adeline",
    filePath: "./songs/Ballade pour Adeline - André Rieu.mp3",
  },
  {
    songName: "The Lonely Shepherd",
    filePath: "./songs/The Lonely Shepherd - André Rieu _ Gheorghe Zamfir.mp3",
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
