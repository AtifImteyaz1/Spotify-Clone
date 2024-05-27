console.log("Welcome to Spotify");

//initialize the varible
let songIndex = 0;
let audioElement =  new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Tere Hawale", filepath: "songs/1.mp3", coverpath: "covers/t.jpg"},
    {songName: "Kesariya", filepath: "songs/2.mp3", coverpath: "covers/kesariya.jpeg"},
    {songName: "Heroine", filepath: "songs/3.mp3", coverpath: "covers/heroine.jpeg"},
    {songName: "Jo tere sang", filepath: "songs/4.mp3", coverpath: "covers/jo tere sang.jpeg"},
    {songName: "Maahi", filepath: "songs/5.mp3", coverpath: "covers/Maahi.jpeg"},
    {songName: "Tum hi ho", filepath: "songs/6.mp3", coverpath: "covers/tum hi ho.jpeg"},
    {songName: "Heeriye", filepath: "songs/7.mp3", coverpath: "covers/heeeriye.jpeg"},
    {songName: "Meri Aashiqui", filepath: "songs/8.mp3", coverpath: "covers/Meri Aashiqui.jpeg"},
    {songName: "Zaroori tha", filepath: "songs/9.mp3", coverpath: "covers/Zaroori tha.jpeg"},
    {songName: "Dil to Bachha hai Ji", filepath: "songs/10.mp3", coverpath: "covers/Dil to Bachha hai ji.jpeg"},
    {songName: "Malang Sajna", filepath: "songs/11.mp3", coverpath: "covers/malang Sajna.jpeg"},

]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=11){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=1){
            songIndex = 0
        }
        else{
            songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })