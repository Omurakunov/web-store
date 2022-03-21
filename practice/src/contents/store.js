/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react'
import axios from 'axios'
import search from '../icons/search.svg'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
const Store = (props) => {
 const [products, setProducts] = useState([])
 const [allProducts, setAllProducts] = useState([])
  useEffect(()=>{
    axios
    .get('https://fakestoreapi.com/products')
    .then(res=>{
      setProducts(res.data)
      setAllProducts(res.data)
    })
  },[])
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories').then(res=>{setCategories(res.data)})
  },[])
  const [searchString, setSearchString] = useState('')
  const [searchCategory, setSearchCategory] = useState('')
  let searchFilter = () =>{
    if(searchString !== ''){
        setProducts(
            [...products].filter(p => p.title.toLowerCase().includes(searchString.toLowerCase()) || p.category.toLowerCase().includes(searchString.toLowerCase()))
        );
    } else {
        setProducts(allProducts)
    }
}
  useEffect(()=>{
    categoryFilter()
  },[searchCategory])
  let categoryFilter = () =>{
    if(searchCategory !== ""){
      setProducts(allProducts.filter(p => p.category === searchCategory))
    }else{
      setProducts(allProducts)
    }
  }
  let submit = (e) =>{
    e.preventDefault()
    searchFilter()
  }
  let handleInputChange = (e) =>{
    setSearchString(e.target.value)
  }
  let handleCategoryChange = (e) => { 
    console.log(e.target.value)
    setSearchCategory(e.target.value)
    console.log(searchCategory)
  }
  return ( 
    <>
  <Navbar/>
    <div className='store'>
      <div className='store-nav'>
      <form onSubmit={submit}>
          <button className='search-butt'><img src={search} alt=''></img></button>
          <input className='search-box' type='search' placeholder='Search...' value={searchString} onChange={handleInputChange}></input>
        </form>
        <div className='category-filter'>
            {
            categories.map((category, index)=>(
              <button value={category} onClick={handleCategoryChange} key={index}>{category.toUpperCase()}</button>
            ))
            }
            <button onClick={()=> setSearchCategory('')}>ALL PRODUCTS</button>
          </div>
        </div>
      <div className='store-catalog'>
        <div className="products">
          {products.map((product) => (
            <Link to={`/store/${product.id}`}>
              <div className="product-card" key={product.id} >
                <div className="product-card-img">
                <img src={product.image} alt=""/>
              </div>
                <div className="product-card-text">
                  <p href="s">{product.title}</p>
                  <p className="price">{product.price}$</p>
                </div>
          </div></Link>))}
        </div>
      </div>
    </div>
    </>
   );
}

export default Store;