var aud = document.querySelector("#audio");
var pused = document.querySelector(".play");
var isOff = true;

var mp3 = [
    { "srcs": "mp3/1.mp3" },
    { "srcs": "mp3/2.mp3" },
]

var index = 0;
aud.play();

aud.onended = function () {
    if (index == (mp3.length - 1)) {
        aud.src = mp3[index].srcs;
        aud.play();
        index = 0;
    } else {
        aud.src = mp3[index].srcs;
        aud.play();
        index++;
    }
};

pused.onclick = function(){
    if(isOff){
        console.log(this);
        this.style.backgroundImage = "url('img/center/music130.png')";
        this.classList.add("pused");
        this.classList.remove("rotate");
        aud.pause();
        isOff = false;
    }else{
        console.log(this);
        this.style.backgroundImage = "url('img/center/music131.png')";
        this.classList.remove("pused");
        this.classList.add("rotate");
        aud.play();
        isOff = true; 
    }
   
}

