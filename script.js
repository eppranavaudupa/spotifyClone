let songindex=0;
let audioelement= new Audio('media/1.mp3');
let masterplay=document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let songitems=Array.from(document.getElementsByClassName("songitem"));


let songs=[
    {songname:"never give up",filepath:"media/1.mp3",coverpath:"media/1.jpg"},
    {songname:"just an ordinary person",filepath:"media/1.mp3",coverpath:"media/2.jpg"},
    {songname:"hunter",filepath:"media/1.mp3",coverpath:"media/3.jpg"},
    {songname:"rose",filepath:"media/1.mp3",coverpath:"media/4.jpg"},
    {songname:"belliver",filepath:"media/1.mp3",coverpath:"media/5.jpg"},
    {songname:"let melove you",filepath:"media/1.mp3",coverpath:"media/7.jpg"},
    {songname:"OGM(From Ghost)",filepath:"media/1.mp3",coverpath:"media/8.jpg"},
    {songname:"Beggin",filepath:"media/1.mp3",coverpath:"media/9.jpg"},
    {songname:"Rudra Shiva",filepath:"media/1.mp3",coverpath:"media/10.jpg"},
];
songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname
})
//handle play pause listen
masterplay.addEventListener("click", () => {
    console.log('play pause btn is clicked');
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        if (!audioelement.paused) {
            console.log('audio is playing');
        } else {
            console.log('audio not playing');
        }
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    } else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
});
//pranava udupa
    audioelement.addEventListener('timeupdate', () => {
        const progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
        
        myprogressbar.value = progress;
    });
    myprogressbar.addEventListener("change",()=>{
        audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
    });
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.addEventListener('click', (e) => {
            // makeAllPlays();
            songindex=parseInt(e.target.id)
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioelement.currentTime=0;
            audioelement.src=`media/${songindex+1}.mp3`;
            audioelement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
        });
    });
    //next btn operating
    document.getElementById('next').addEventListener('click',()=>{
        if(songindex>=9){
            songindex=0
        }else{
            songindex+=1;
        }
        audioelement.src=`media/${songindex+1}.mp3`;
            audioelement.play();
            audioelement.currentTime=0;
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
    });
    //previous btn operating
    document.getElementById('previous').addEventListener('click',()=>{
        if(songindex<=0){
            songindex=0
        }else{
            songindex-=1;
        }
        audioelement.src=`media/${songindex+1}.mp3`;
            audioelement.play();
            audioelement.currentTime=0;
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
    })
    

    
