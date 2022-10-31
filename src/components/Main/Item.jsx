import React from 'react'
const Item = ({producto}) => {
  return (
    <div><img src={producto.img} alt={producto.id} />
    <article>
        <h2>{producto.title}</h2>
        <h3>${producto.price}</h3>
    </article>
    </div>

  )
}

export default Item

