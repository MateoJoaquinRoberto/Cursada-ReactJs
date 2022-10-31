import { useState } from "react";

const Contador = ({stock}) => {
    const [cantidad,setCantidad]=useState(50);
    let x =50
    const sumar = () =>{
        if(cantidad<stock){ 
       setCantidad(cantidad + 50);
    }
    };

    const resta = () =>{
        
        setCantidad( cantidad - 50);
    
    }
    return (
    <div 
        style={{ 
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh"
        }}
    >
    <button disabled={cantidad=== 50} onClick={resta}>-</button>    
    <p>{cantidad}</p>
    <button disabled={cantidad=== stock} onClick={sumar}>+</button>
    </div>
  )
}

export default Contador