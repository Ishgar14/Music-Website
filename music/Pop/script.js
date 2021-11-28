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
    songName: "Dynamite",
    filePath: "./songs/08_-_taio_cruz_-_dynamite.mp3",
  },
  {
    songName: "I Like Me Better",
    filePath: "./songs/33._Lauv_-_I_Like_Me_Better.mp3",
  },
  {
    songName: "The Nights",
    filePath: "./songs/Avicii - The Nights.mp3",
  },
  {
    songName: "Bom Diggy",
    filePath: "./songs/Bom_Diggy-(Mr-Jatt.com).mp3",
  },
  {
    songName: "Fikar Not",
    filePath: "./songs/Fikar Not - Chhichhore.mp3",
  },
  {
    songName: "Swalla",
    filePath:
      "./songs/Jason_Derulo_-_Swalla_feat._Nicki_Minaj_Ty_Dolla_ign_(mp3.pm).mp3",
  },
  {
    songName: "Despacito",
    filePath:
      "./songs/Luis_Fonsi_Ft_Daddy_Yankee_-_Despacito_(WWW.LACOQUILLITA.COM).mp3",
  },
  {
    songName: "Machayenge",
    filePath: "./songs/Machayenge(VVIPJatt.Com).mp3",
  },
  {
    songName: "Badshah",
    filePath: "./songs/Mercy_-_Badshah_(Lady_Bee_Remix)_320Kbps.mp3",
  },
  {
    songName: "Mi Gente",
    filePath: "./songs/Mi_Gente_1.mp3",
  },
  {
    songName: "Rockstar",
    filePath: "./songs/Post Malone - rockstar ft. 21 Savage.mp3",
  },
  {
    songName: "Sunflower",
    filePath:
      "./songs/Post Malone, Swae Lee - Sunflower (Spider-Man Into the Spider-Verse).mp3",
  },
  {
    songName: "She Move It Like",
    filePath: "./songs/She_Move_It_Like_-_Badshah.mp3",
  },
  {
    songName: "Taki Taki",
    filePath: "./songs/Taki_Taki_192Kbps-(Dj-Music.in).mp3",
  },
  {
    songName: "Dance Monkey",
    filePath: "./songs/Tones and I - Dance Monkey (Lyrics) (192  kbps).mp3",
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
      console.log(songIndex);
      event.target.classList.remove("fa-play-circle");
      event.target.classList.add("fa-pause-circle");
      audioElement.src = songs[songIndex].filePath;
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
  // audioElement.src = songs[songIndex+1].filePath;
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
