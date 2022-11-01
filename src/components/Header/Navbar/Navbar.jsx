import React from 'react';
import {CartWidget, OtroCart,OtroCarro} from '../../CartWidget';
import estilos from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
    <nav className={estilos.navbar}>
        <h1>
            <Link className='links' to='/'>Huesos M.R</Link>      
            </h1>
            <ul>
                <Link className='links' to='/category/pequeños'><OtroCart/>Pequeños</Link>
                <Link className='links' to='/category/medianos'><CartWidget />Medianos</Link>
                <Link className='links' to='/category/grandes'><CartWidget />Grandes</Link>
            </ul>
            <Link className='links' to='/cart'><OtroCarro/></Link>
    </nav>
                
    );
};
export default Navbar