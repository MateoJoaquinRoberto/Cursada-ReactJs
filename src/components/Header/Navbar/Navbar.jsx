import React from 'react';
import {CartWidget, OtroCart} from '../../CartWidget';
import estilos from './navbar.module.css';

const Navbar = () =>{
    return(
    <nav className={estilos.navbar}>
        <h1>Huesos M.R</h1>
            <ul>
                <li><OtroCart/>Lista de precios</li>
                <li><CartWidget />Puntos de venta</li>
                
            </ul>
    </nav>
                
    );
};
export default Navbar