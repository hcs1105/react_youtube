import React from 'react';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet;

  return (
    <li>
      <img src={thumbnails.medium.url} className="w-full" alt="" />    
      <h2 className="font-bold my-2 line-clamp-2">{title}</h2>
      <p className="text-sm opacity-75">{channelTitle}</p>
      <p className="text-sm opacity-75">{formatAgo(publishedAt, 'ko')}</p>
    </li>
  );
}