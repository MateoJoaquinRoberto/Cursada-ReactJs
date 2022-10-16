import React from 'react';
import CartWidget from '../../CartWidget';
import estilos from './navbar.module.css';

const Navbar = () =>{
    return(
    <nav className={estilos.navbar}>
        <h1>Huesos M.R</h1>
            <ul>
                <li>Lista de precios</li>
                <li><CartWidget />Puntos de venta</li>
                
            </ul>
    </nav>
                
    );
};
export default Navbar