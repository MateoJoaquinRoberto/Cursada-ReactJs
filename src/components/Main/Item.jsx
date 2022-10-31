import React from 'react'
import { products } from '../../mock/products'
const Item = () => {
  return (
    <div><img src={products.img} alt={products.id} />
    <article>
        <h2>{products.title}</h2>
        <h3>${products.price}</h3>
    </article>
    </div>

  )
}

export default Item
