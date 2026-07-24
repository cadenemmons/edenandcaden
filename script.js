const musicPlayer = document.createElement("musicPlayer");
musicPlayer.src = "./Hopelessly Devoted to You.mp3";

window.addEventListener('scroll', () => {
    const playAudio = document.querySelector("#playAudio audio");
    if(window.scrollY > 932) {
        playAudio.play();
    }
})
