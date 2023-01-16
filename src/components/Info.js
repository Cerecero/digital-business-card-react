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
            <p className="github-link">https://github.com/Cerecero</p>
            <div className="info-buttons">
                {/* <form href="#" target="_blank"  action="https://stackoverflow.com/questions/57234823/link-in-react-doesnt-forward-to-a-new-page"> */}
                    <a href='mailto:ale.rey.cer@gmail.com' type='button'>
                        <button className="button email" ><FaEnvelope /> E-mail</button>
                    </a>
                {/* </form> */}
                <form href="#" target="_blank"  action="https://www.linkedin.com/in/alejandro-reyes-cerecero/">
                    <button className="button linkedin"><FaLinkedin /> Linkedin</button>
                </form>
            </div>
        </header>
    );
}
