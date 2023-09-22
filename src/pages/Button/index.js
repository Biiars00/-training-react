import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../FatosReact/components/Button/index'
import './style.css'

export function ButtonHover() {
    return (
        <div>
            <h1>Event Button</h1>
            <Link to="/">retornar a página inicial</Link>
            <Button />
        </div>
    );
}