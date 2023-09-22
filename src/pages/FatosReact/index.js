import React from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button/index';
import './style.css'

export function FatosReact() {
    return (
        <>
            <Navbar />

            <div className='navbar-main'>
                <h1 className='navbar-title'>Fatos interessantes <br /> sobre React</h1>
                <nav className='navbar-list'>
                    <ol>
                        <li>Foi lançado em 2013</li>
                        <li>Foi criado por Jordan Walke</li>
                        <li>Tem mais de 200 mil estrelas no GitHub</li>
                        <li>É mantido pelo facebook</li>
                        <li>Usando em milhares de aplicações corporativas, incluindo aplicativos móveis</li>
                    </ol>
                </nav>
            </div>
            <Button />
        </>
    );
}