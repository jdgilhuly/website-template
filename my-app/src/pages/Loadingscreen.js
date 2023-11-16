import React, { useEffect, useState } from 'react';

function LoadingScreen() {
  const [showEffects, setShowEffects] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const effectsTimer = setTimeout(() => {
      setShowEffects(true);
    }, 2000); // Timing for other effects

    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 3500); // Delay for showing the startup message

    return () => {
      clearTimeout(effectsTimer);
      clearTimeout(messageTimer);
    };
  }, []);

  return (
    <div className="loading-container">
      <div className="screen-on"></div>
      {showEffects && (
        <>
          <div className="tv-noise"></div>
          {showMessage && <div className="startup_message">Reading Disk. . .</div>}
        </>
      )}
    </div>
  );
}

export default LoadingScreen;
