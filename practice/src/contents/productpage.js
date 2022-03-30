import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import {  } from "./store";
import axios from "axios";
import Navbar from "./navbar";
const ProductPage = () => {
    const params = useParams()
    const [productData, setProductData] = useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`).then(res=>setProductData(res.data))
    },[])
    console.log(productData)
    return (
        <>
        <Navbar/>
        <div className="product-page">
            <div className="product-img">
                <img src={productData.image} alt="d"/>    
            </div>
            <div className="product-information">
                <h1>{productData.title}</h1>
                <h3>{productData.price}$</h3>
                <p>{productData.description}</p>    
            </div>
        </div>
        </>
    )

}
  export default ProductPage;