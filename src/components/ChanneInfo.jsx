import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChanneInfo({ name, id }) {
  const { youtube } = useYoutubeApi(); 
  const { 
    data: url, 
  } = useQuery(['channel', id], () => youtube.channelImgUrl(id));

  return (
    <div>
      {url && <img src={url} alt="" />}
      <p>{name}</p>
    </div>
  );
}