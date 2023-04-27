import React from 'react';
import { useLocation } from 'react-router-dom';
import ChanneInfo from '../components/ChanneInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const { state: { video } } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
 
  return (
    <div className="flex flex-col lg:flex-row">
      {/* 비디오 상세 보기 */}
      <section className="basis-4/6">
        {/* eslint-disable-next-line */}
        <iframe 
          id="player" 
          type="text/html" 
          width="100%" 
          height="640" 
          src={`http://www.youtube.com/embed/${video.id}`} 
          frameBorder="0" 
          title="" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChanneInfo name={channelTitle} id={channelId} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </section>
      {/* 연관 비디오 목록 */}
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </div> 
  );
}