import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChanneInfo({ name, id }) {
  const { youtube } = useYoutubeApi(); 
  const { 
    data: url, 
  } = useQuery(['channel', id], () => youtube.channelImgUrl(id), { 
    staleTime : 1000 * 60 * 5,
  });

  return (
    <div className="flex my-4 items-center">
      {url && <img src={url} className="w-10 h-10 rounded-full" alt="" />}
      <p className="text-lg font-medium ml-4">{name}</p>
    </div>
  );
}