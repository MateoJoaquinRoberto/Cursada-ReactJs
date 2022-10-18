import React from 'react';

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h2 className='h2-tel' style={{ color: 'black', fontSize:35 }}>WPP: 1121683764{greeting}</h2>
        <h2 className='h2-tel' style={{ color: 'black', fontSize:35 }}>IG: Huesos_M.R{greeting}</h2>
    </div>
  )
}

export default ItemListContainer;