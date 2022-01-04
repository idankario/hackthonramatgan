var btnSpeak = document.querySelector('#choseCard');
var synth = window.speechSynthesis;
let data=[];
let id=0;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';
mic.start()
mic.onresult = event => {
  const transcript = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
  console.log(transcript)
  setNote(transcript)
  mic.onerror = event => {
    console.log(event.error)
  }
}
btnSpeak.addEventListener('click', ()=> {
    id++;
    if(id==15)
        id=0;
    var toSpeak = new SpeechSynthesisUtterance(btnSpeak.innerText);
    synth.speak(toSpeak);
});