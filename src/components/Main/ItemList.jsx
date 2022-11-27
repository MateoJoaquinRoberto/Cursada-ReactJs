import React from 'react'
import Item from './Item'
import { products } from '../../mock/products'

const ItemList = ({items}) => {
    return (
        <div> 
            {items.map((producto) =>(  
                <Item key={producto.id} producto={producto}  />
            ))}
            
        </div>
        
    )
}    
export const getProduct = (id) => {
    return new Promise(( res ) => {
        const  product = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
             res ( product )
        }, 200)
    })
}

export default ItemList
