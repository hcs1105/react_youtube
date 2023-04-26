import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi(); 
  const { 
    isLoading, 
    error, 
    data: videos, 
  } = useQuery(['related', id], () => 
    youtube.relatedVideos(id)
  );

  return (
    <>
      <h2>The list of related videos</h2>
      {isLoading && <p>Loading</p>}
      {error && <p>Something is wrong.</p>}
      {videos && 
        <ul>
          { videos.map(video => <VideoCard key={video.id} video={video} />)}
        </ul>
      }
    </>
  );
}