import { useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../mock/products";

const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    
    useState(() => { 
        const getProducts = () =>{  
           return new Promise ((res,rej) =>{ 
                setTimeout(()=>{
                    res(products);
                },2000)
           });
        };
        getProducts()
            .then((res)=>{
                setItems(res)
            })
            .catch((error)=>{

            });
    },  []);      

  return (
    <div id="container">
     <ItemList items={items}/>
    </div>
  );
};

export default ItemListContainer