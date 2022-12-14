import React, { useState } from 'react';

const BeepButton = (props) => {
  // Create a new AudioContext for generating the beep sound
  const audioCtx = new AudioContext();

  // Define a function that generates the beep sound when called
  const generateBeep = () => {
    // Create an oscillator for generating the beep sound
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);

    // Create a gain node for controlling the beep sound's volume
    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);

    // Connect the oscillator and gain node to the AudioContext
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // Start the oscillator to generate the beep sound
    oscillator.start();

    // Return the oscillator so we can stop it later
    return oscillator;
  }

  // Define a function that stops the beep sound when called
  const stopBeep = (oscillator) => {
    // Stop the oscillator to stop the beep sound
    oscillator.stop();
  }

  // Create a new state variable for tracking the beep sound's oscillator
  const [oscillator, setOscillator] = useState(null);

  return (
    <button
      onMouseDown={() => {
        // Generate the beep sound when the button is pressed
        const newOscillator = generateBeep();
        setOscillator(newOscillator)
      }}
      onMouseUp={() => {
        // Stops the beep sound when the button is released
        stopBeep(oscillator)
      }}

      {...props}
    />
  )
}

export default BeepButton