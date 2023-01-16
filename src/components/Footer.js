import React from "react";
import {FaInstagram} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://www.instagram.com/cere_0/" target="_blank"><FaInstagram /></a>
            <a href="https://github.com/Cerecero" target="_blank"><FaGithubSquare /></a>
            <a href="https://twitter.com/ReyesCere0" target="_blank"><FaTwitterSquare /></a>
        </div>
    );
}