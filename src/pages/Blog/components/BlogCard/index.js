import React from 'react';
import './style.css'

export function BlogCard({ imageSrc, location, locationIcon, googleMapsLink, maps, title, date, text }) {
  return (
    <div className='blog-main'>
      <div className='container'>
        <img className='foto-viagem' src={imageSrc} alt='Foto do globo' title='Foto do globo' />
        <div>
          <div className='container-local'>
            <img className='container-local-icon' src={locationIcon} alt='Localização' title='Localização' />
            <p className='container-local-local'>{location}</p>
            <p className='container-local-maps'><a className='container-local-maps' href={googleMapsLink} target="_blank" rel="noopener noreferrer">{maps}</a></p>
          </div>
          <div className='container-text'>
            <h1 className='container-text-title'>{title}</h1>
            <p className='container-text-date'>{date}</p>
            <p className='container-text-text'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}