import React from 'react';
import { Button } from '../FatosReact/components/Button/index'
import  HeaderIcon from '../../assets/mundo-icon.svg'
import { BlogCard } from './components/BlogCard/index'
import  Localizacao from '../../assets/localizacao.svg'
import './style.css'

export function Blog() {
    return (
        <div className='blog-body'>
            <div className='header'>
                <img className='icon-header' src={ HeaderIcon } alt='Foto do globo' title='Foto do globo' />
                <p className='header-title'>Meu Blog de Viagens</p>
            </div>

                <BlogCard 
                    imageSrc='https://source.unsplash.com/WLxQvbMyfas'
                    locationIcon = { Localizacao }
                    location='JAPÃO'
                    googleMapsLink='https://maps.google.com/'
                    maps = 'Ver no Google Maps'
                    title='Monte Fugi'
                    date='12 Jan, 2021 - 24 Jan, 2021'
                    text='O Monte Fuji é a montanha mais alta do Japão, com 3.776 metros (12.380 pés). 
                    O Monte Fuji é o local turístico mais popular do Japão, tanto para turistas japoneses 
                    quanto estrangeiros.'
                />

                <BlogCard 
                    imageSrc='https://source.unsplash.com/JmuyB_LibRo'
                    locationIcon = { Localizacao }
                    location='AUSTRÁLIA'
                    googleMapsLink='https://maps.google.com/'
                    maps = 'Ver no Google Maps'
                    title='Sydney Opera House'
                    date='27 May, 2021 - 8 Jun, 2021'
                    text='A Sydney Opera House é um centro de artes cênicas com vários locais em Sydney. 
                    Localizado às margens do porto de Sydney, é frequentemente considerado um dos edifícios 
                    mais famosos e distintos do século XX.'
                />

                <BlogCard 
                    imageSrc='https://source.unsplash.com/3PeSjpLVtLg'
                    locationIcon = { Localizacao }
                    location='NORUEGA'
                    googleMapsLink='https://maps.google.com/'
                    maps = 'Ver no Google Maps'
                    title='Geirangerfjord'
                    date='01 Out, 2021 - 18 Nov, 2021'
                    text='O Fiorde de Geiranger é um fiorde na região de Sunnmøre, 
                    no condado de Møre og Romsdal, na Noruega. Está localizado inteiramente no município de 
                    Stranda.'
                />

                <div className='blog-button-home'>
                    <Button />
                </div>
        </div>
    );
}