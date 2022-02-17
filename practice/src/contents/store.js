/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react'
import axios from 'axios'
import search from '../icons/search.svg'

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
  return ( 
    <div className='store'>
      <div className='store-nav'>
        <button className='search-butt'><img src={search} alt=''></img></button>
        <input className='search-box' type='search' placeholder='Search...' onChange={(e)=>{
          setSearchString(e.target.value)
        }}></input>
      </div>
      <div className='store-catalog'>
        <div className='filter-sidebar'>
          <div className='price-filter'>
            <div>
              <p>От:</p>
              <input type="number" className='min'></input>
            </div>
            <div>
              <p>До:</p>
              <input type="number" className='max'></input>
            </div>
          </div>
          <div className='category-filter'>
            
            {
            categories.map((category, index)=>(
              <div className='category-block' key={index}>
                <button value={category} onClick={(e)=>{
                  if(searchCategory.includes(e.target.value)){
                    setSearchCategory([...searchCategory])
                  }else{
                    setSearchCategory([...searchCategory,{
                      id:searchCategory.length,
                      value:e.target.value
                    }])
                  }
                  
                  console.log(searchCategory)
                }}>+</button>
                <p>{category}</p>
              </div>
            ))
            }
          </div>
        </div>
        <div className="products">
          {products.filter((product) => {
            if (searchString === ""){
              return product
            }else if(product.title.toLowerCase().includes(searchString.toLowerCase()) || product.category.toLowerCase().includes(searchString.toLowerCase())){
              return product
            }
          }).map((product) => (
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
   );
}
 
export default Store;       