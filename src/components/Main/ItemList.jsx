import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
    return (
        <div> 
            {items.map((producto) =>(  
                <Item producto={producto}  />
            ))}
            
        </div>
        
    )
}    


export default ItemList
