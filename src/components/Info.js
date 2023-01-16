import React from 'react';
import portraitPlaceholder from '../images/portrait-placeholder.png';
import {FaLinkedin} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';

export default function Info() {
    return (
        <header className="info">
            <img src={portraitPlaceholder} alt="placeholder" className="portrait"/>
            <h1 className="name">Alejandro Reyes</h1>
            <p className="title">Fullstack Developer</p>
            <p className="github-link">Github Page here</p>
            <div className="info-buttons">
                <button className="button email"><FaEnvelope /> E-mail</button>
                <button className="button linkedin"><FaLinkedin /> Linkedin</button>
            </div>
        </header>
    );
}
