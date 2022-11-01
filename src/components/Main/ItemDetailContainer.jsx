import { useEffect,useState } from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from "react-router-dom"
import { products } from '../../mock/products'

const ItemDetailContainer = () => {
    const [item,setItem] = useState({})
    const {idProd} = useParams()
       
    useEffect(()=>{
        const getProducts= () =>{
            return new Promise ((res,rej)=>{
                const product = products.find((prod)=>prod.id===3)
                setTimeout(()=>{},2000)
                res(product)
            })
        }
        getProducts.then((res)=>{ 
            setItem(res);

        }).catch((error)=>{
            console.log(error)
        })
    })
  return (
        <div 
            style={{
                margin: "10px", 
                border:"2px solid black", 
                padding:"10px"
            }}
        >
        
            <ItemDetail item={item}/>
        </div>
  )
}

export default ItemDetailContainer