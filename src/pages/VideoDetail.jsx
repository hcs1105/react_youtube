import React from 'react';
import { useLocation } from 'react-router-dom';
import ChanneInfo from '../components/ChanneInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const { state: { video } } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
 
  return (
    <div>
      {/* 비디오 상세 보기 */}
      <section>
        {/* eslint-disable-next-line */}
        <iframe 
          id="player" 
          type="text/html" 
          width="100%" 
          height="640" 
          src={`http://www.youtube.com/embed/${video.id}`} 
          frameBorder="0" 
          title="" />
        <h1>{ title }</h1>
        <ChanneInfo name={channelTitle} id={channelId} />
        <pre>{description}</pre>
      </section>
      {/* 연관 비디오 목록 */}
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </div> 
  );
}