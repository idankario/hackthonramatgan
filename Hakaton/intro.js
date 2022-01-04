
var synth = window.speechSynthesis;
let data=[];



fetch('speak.json')
  .then(response => response.json())
  .then(dataJason => data=dataJason);
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

window.onload = (event) => {
    let id=0;
    while(id<4){

    if(id==0){
        var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
        synth.speak(toSpeak);
        setInterval(function () { }, 10000);
        id++;
    }  
    if(id==1){
        var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
        synth.speak(toSpeak);
        setInterval(function () { }, 10000);
        id++;
    }
    if(id==2){
        var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
        synth.speak(toSpeak);
        setInterval(function () { }, 10000);
        id++;
    }
    if(id==3){
        var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
        synth.speak(toSpeak);
        setInterval(function () { }, 10000);
        id++;
    }
       

    }
};


