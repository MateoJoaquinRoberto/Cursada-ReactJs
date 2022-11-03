import { useState } from "react";

const Contador = ({stock,onAdd}) => {
    const [cantidad,setCantidad]=useState(50);
    
    const sumar = () =>{
        if(cantidad<stock){ 
       setCantidad(cantidad + 50);
    }
    };

    const resta = () =>{
        
        setCantidad( cantidad - 50);
    
    }

    const agregar =() =>{
        onAdd(cantidad);
    };

    return (
    <div className="counter"> 
        <section>   
            <p>{cantidad}</p>
    <div>              
    <button disabled={cantidad=== 50} onClick={resta}>-</button>    
    <button disabled={cantidad=== stock} onClick={sumar}>+</button>
    </div>
    </section>
        <div>
            <button className="add" onClick={agregar}>
                Agregar al carrito
            </button>
        </div>
    </div>
  )
}

export default Contador