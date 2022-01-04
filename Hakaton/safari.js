
var synth = window.speechSynthesis;
let data=[];



fetch('speak.json')
  .then(response => response.json())
  .then(dataJason => data=dataJason);
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

window.onload = (event) => {
    let id=5;
    while(id<7){
        if(id==5){
            var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
            synth.speak(toSpeak);
            setInterval(function () { }, 10000);
            id++;
        }  
        if(id==6){
            var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
            synth.speak(toSpeak);
            setInterval(function () { }, 10000);
            id++;
        }

    }  
};
