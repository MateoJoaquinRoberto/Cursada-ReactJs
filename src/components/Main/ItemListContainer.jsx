import { useEffect,useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../../mock/products";
import {useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items,setItems] = useState([]);


    
    
  const {categoryName}= useParams();
    
  useEffect(() => { 
      getProducts(categoryName)
          .then((res)=>{
              setItems(res)
          })
          .catch((error)=>{
              console.log(error);
          });
  }, [categoryName]);      

  return (
    <div className="container">
     <ItemList items={items}/>
    </div>
  );
};

export default ItemListContainer