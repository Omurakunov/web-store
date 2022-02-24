/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react'
import axios from 'axios'
import search from '../icons/search.svg'
import Navbar from './navbar'
const Store = () => {
 const [products, setProducts] = useState([])
  useEffect(()=>{
    axios
    .get('https://fakestoreapi.com/products')
    .then(res=>{
      setProducts(res.data)
    })
  },[])
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories').then(res=>{setCategories(res.data)})
  },[])
  const [searchString, setSearchString] = useState('')
  const [searchCategory, setSearchCategory] = useState([])
  let searchFilter = () =>{
    if(searchString !== ''){
        setProducts(
            [...products].filter(p => p.title.toLowerCase().includes(searchString.toLowerCase()) || p.category.toLowerCase().includes(searchString.toLowerCase()))
        );
    } else {
        setProducts(products)
    }
}
  let categoryFilter = () =>{
    setProducts(products.filter((product) => {
      if (searchCategory === []) {
         return product 
      }else if(searchCategory.includes(product.category)){
        return product
      }
    }))
  }
  let submit = (e) =>{
    e.preventDefault()
    searchFilter()
  }
  let handleInputChange = (e) =>{
    setSearchString(e.target.value)
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
              <button>{category.toUpperCase()}</button>              
            ))
            }
          </div>
        </div>
      <div className='store-catalog'>
        <div className="products">
          {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-card-img">
              <a href="a"><img src={product.image} alt=""></img></a>
            </div>
            <div className="product-card-text">
              <a href="s">{product.title}</a>
              <p className="price">{product.price}$</p>
            </div>
          </div>))}
        </div>
      </div>
    </div>
    </>
   );
}
 
export default Store;       