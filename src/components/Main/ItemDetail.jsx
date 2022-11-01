import React from 'react';
import Contador from './Contador';

const ItemDetail = ({item}) => {
    const onAdd = (qty) => console.log(qty);
  return (
    <div>
        <img src={item.img} alt={item.title} />
        <div>
            <h2>{item.title}</h2>
             <h3>${item.price}</h3>
             <Contador stock={item.stocl} onAdd={onAdd}/> 
        </div>
    </div>
  );
};

export default ItemDetail