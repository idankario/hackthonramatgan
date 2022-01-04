
var synth = window.speechSynthesis;
let data=[];



fetch('speak.json')
  .then(response => response.json())
  .then(dataJason => data=dataJason);
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

window.onload = (event) => {
    let id=4;
    while(id==4){
        var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
        synth.speak(toSpeak);
        setInterval(function () { }, 10000);
        id++;
    }  
};


