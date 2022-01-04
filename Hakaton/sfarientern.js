
var synth = window.speechSynthesis;
let data=[];



fetch('speak.json')
  .then(response => response.json())
  .then(dataJason => data=dataJason);
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

window.onload = (event) => {
    let id=7;
    while(id<15){
        if(id==7){
            var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
            synth.speak(toSpeak);
            setInterval(function () { }, 10000);
            id++;
        }  
        if(id==8){
            var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
            synth.speak(toSpeak);
            setInterval(function () { }, 10000);
            id++;
        }
        if(id==9){
            var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
            synth.speak(toSpeak);
            setInterval(function () { }, 10000);
            id++;
        }
        if(id==10){
            var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
            synth.speak(toSpeak);
            setInterval(function () { }, 10000);
            id++;
        }
        if(id==11){
            var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
            synth.speak(toSpeak);
            setInterval(function () { }, 10000);
            id++;
        }
        if(id==12){
            var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
            synth.speak(toSpeak);
            setInterval(function () { }, 10000);
            id++;
        }
        if(id==13){
            var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
            synth.speak(toSpeak);
            setInterval(function () { }, 10000);
            id++;
        }
        if(id==14){
            var toSpeak = new SpeechSynthesisUtterance(data[id].speak);
            synth.speak(toSpeak);
            setInterval(function () { }, 10000);
            id++;
        }

    }  
};
