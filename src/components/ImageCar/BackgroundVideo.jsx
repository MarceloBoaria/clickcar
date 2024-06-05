import React from 'react';
import './BackgroundVideo.css'; // Importe o arquivo de estilo CSS

// https://hype4.academy/tools/glassmorphism-generator
const BackgroundVideo = ({children}) => {
  return (
    <>
    <div className="video-background">
      <video autoPlay muted loop id="background-video">
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
    </div>
    {children}
    </>
  );
};

export default BackgroundVideo;
