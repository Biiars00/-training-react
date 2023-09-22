import React from 'react';
import Logo from '../../../../assets/reactjs-icon.svg'
import './style.css'

export function Navbar() {
  return (
    <div className='navbar'>
      <img className='logo-navbar' src={ Logo } alt='Logo da home' title='Logo da home' />
      <p className='navbar-text-logo'>FatosReact</p>
      <p className='navbar-text'>Fast-Projeto 1</p>
    </div>
  );
}