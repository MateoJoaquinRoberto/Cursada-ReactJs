import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contex/CartContext';
import Contador from './Contador';

const ItemDetail = ({item}) => {
    const [show, setShow] = useState(true);

    const { addToCart, cantidadDeProducto } = useContext(CartContext);

    const onAdd = (qty) => {
        setShow(false);
        addToCart(item, qty);
    };

    const cantidad = cantidadDeProducto(item.id);
  return (
    <div className="detail">
    <img src={item.img} alt={item.title} />
    <article>
        <h2>{item.title}</h2>
        <h3>${item.price}.-</h3>

        {show ? (
            <Contador
                stock={item.stock}
                onAdd={onAdd}
                initial={cantidad}
            />
        ) : (
            <Link to="/cart">Ir al carrito</Link>
        )}
    </article>
</div>
);
};

export default ItemDetail;
