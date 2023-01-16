import React from 'react';
import portraitPlaceholder from '../images/portrait-placeholder.png';

export default function Info() {
    return (
        <header className="info">
            <img src={portraitPlaceholder} alt="placeholder" className="portrait"/>
            <h1>Alejandro Reyes</h1>
            <p className="title">Fullstack Developer</p>
            <p className="github-link">Github Page here</p>
            <div className="info-buttons">
                <button className="button email">E-mail</button>
                <button className="button linkedin">Linkedin</button>
            </div>
        </header>
    );
}