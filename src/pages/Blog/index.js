import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../FatosReact/components/Button/index'
import './style.css'

export function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <Link to="/">retornar a página inicial</Link>
            <Button />
        </div>
    );
}