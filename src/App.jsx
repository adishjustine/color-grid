import { useState, useEffect } from 'react';
import clickSound from './assets/clicksound.wav';

// Custom bright marshmallow color palette
const colorPalette = [
  '#00A5E3', 
  '#8DD7DF',
  '#FF96C5', 
  '#FF5768', 
  '#FFD872', 
  '#CFF800',
  '#4DD091', 
  '#FFEC59', 
  '#FF6F68', 
];

function GridItem({ audio }) {
  const [color, setColor] = useState('#ccc');

  const handleClick = () => {
    // Play preloaded audio
    audio.currentTime = 0;
    audio.play();

    // Change the color using a random color from the marshmallow palette
    const newColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    setColor(newColor);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-center rounded-lg transition-colors duration-200 cursor-pointer"
      style={{ backgroundColor: color }}
    ></div>
  );
}

function App() {
  const [audio] = useState(new Audio(clickSound));

  useEffect(() => {
    audio.load(); // Preload the audio file when the component mounts
  }, [audio]);

  return (
    <div className="grid grid-cols-4 grid-rows-10 gap-2 p-4 h-screen w-screen">
      {Array(40).fill().map((_, i) => (
        <GridItem key={i} audio={audio} />
      ))}
    </div>
  );
}

export default App;
