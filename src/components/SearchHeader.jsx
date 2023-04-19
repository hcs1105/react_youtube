import React, { useEffect, useState } from 'react';
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const { keyword } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }; 

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <header>
      <h1>
        <Link to='/'>
          <AiFillYoutube />
          <span>Youtube</span>
        </Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit"><AiOutlineSearch /></button>
      </form>
    </header>
  );
}