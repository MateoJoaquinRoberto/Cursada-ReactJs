import { useEffect,useState } from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from "react-router-dom"
import { getProduct } from './ItemList'

const ItemDetailContainer = () => {
    const [item,setItem] = useState({})
    const {idProd} = useParams()
       
    useEffect(() => {
        getProduct(idProd).then(item => {
            setItem(item)
        }).catch((error) => {
            console.log(error)
        })
    }, [idProd])
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