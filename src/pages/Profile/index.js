import React from 'react';
import { Button } from '../FatosReact/components/Button/index'
import photo from '../../assets/photo.png'
import './style.css'
import { ButtonContact } from './components/Button/index';
import { Footer } from './components/Footer/index';

export function Profile() {
    return (
        <div className='div-body'>
            <div className='nav-button'>
                <Button />
            </div>
            <div className='main'>
                <div>
                    <img className='icon-photo' src={ photo } alt='Foto de Beatriz' title='Foto de Beatriz' />
                </div>
                <div className='text'>
                    <h1>Beatriz Ribeiro</h1>
                    <p className='dev'>Fullstack Developer</p>
                    <p className='contato'>biiaribeiro60@gmail.com</p>
                </div>

                <ButtonContact />

                <div className='text-apresentacao'>
                    <h2 className='text-sobre'>Sobre</h2>
                    <p className='text-text'>Sou estudante de Análise e Desenvolvimento de Sistemas, tenho experiência com front e back-end.
                        Sou curiosa e extremamente apaixonada por aprender coisas novas, 
                        tenho interesse em simplificar as coisas e automatizar tarefas diárias.</p>
                    <h2 className='text-sobre'>Interesses</h2>
                    <p className='text-text'>Leitora assídua. Fanática pela Internet e por café. Mãe de pet.</p>
                </div>

                <Footer />

            </div>
        </div>
    );
}