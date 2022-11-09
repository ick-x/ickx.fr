const src = "./sound/backgroundMusic.mp3";
const audioElm = document.createElement("audio");
audioElm.autoplay = true;
audioElm.loop = true;
audioElm.load();
audioElm.onLoad = () => audioElm.play();
audioElm.src = src;     