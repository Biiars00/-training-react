import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/REACT.png'
import './style.css'

export function Home() {
  return (
    <>
      <h1 className='home-title'>Home</h1>
      <div className="home-button">
        <button className="button"> 
          <Link className="btn-name" to="/fatosreact">FATOS REACT</Link>
        </button>
        <button className="button"> 
          <Link className="btn-name" to="/blog">BLOG</Link>
        </button>
        <button className="button"> 
          <Link className="btn-name" to="/button">EVENT BUTTON</Link>
        </button>
        <button className="button"> 
          <Link className="btn-name" to="/profile">PROFILE</Link>
        </button>
      </div>
      <div className='logo-img'>
        <img className='logo-home' src={ Logo } alt='Logo da home' title='Logo da home' />
      </div>
    </>
  );
}
