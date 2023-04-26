import React from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoDetail() {
  const { state: { video } } = useLocation();

  return (
    // eslint-disable-next-line 
    <iframe 
      id="player" 
      type="text/html" 
      width="100%" 
      height="640" 
      src={`http://www.youtube.com/embed/${video.id}`} 
      frameBorder="0" 
      title="" />
  );
}