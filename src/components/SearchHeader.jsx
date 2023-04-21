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
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <h1 className="flex items-center font-bold mr-2">
        <Link className="flex items-center" to='/'>
          <AiFillYoutube className="text-brand mr-1" />
          <span>Youtube</span>
        </Link>
      </h1>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input type="text" className="w-7/12 p-2 bg-black text-gray-50" placeholder="Search" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit" className="bg-zinc-600 px-4"><AiOutlineSearch /></button>
      </form>
    </header>
  );
}