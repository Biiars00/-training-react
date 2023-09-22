import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../FatosReact/components/Button/index'
import './style.css'

export function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <Link to="/">retornar a página inicial</Link>
            <Button />
        </div>
    );
}