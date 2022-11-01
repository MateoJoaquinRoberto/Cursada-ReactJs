import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({producto}) => {
  return (
    <div><img src={producto.img} width="200px"  alt={producto.id} />
    <article>
        <h2>{producto.title}</h2>
        <h3>${producto.price}</h3>
    </article>
    <Link to={`/detail/${producto.id}`}>Ver producto</Link>
    </div>

  )
}

export default Item

