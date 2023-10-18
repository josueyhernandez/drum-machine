import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [key, setKey] = useState("")

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      name: "Heater 1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      name: "Heater 2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      name: "Heater 3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      name: "Heater 4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      name: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      name: "Open HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      name: "Kick n' Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      name: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      name: "Closed HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  function playAudio(sound) {
    const audio = document.getElementById(sound)
    audio.play()
    setKey(sound)
  }

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playAudio(event.key.toUpperCase())
    })
  }, [])


  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{key}</div>
        <div class="drum-pads">
        {drumPads.map((drumPad) => (
          <div onClick={() => {playAudio(drumPad.text)}} className="drum-pad" id={drumPad.src}>{drumPad.text}
          <audio src={drumPad.src} className="clip" id={drumPad.text}></audio>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
