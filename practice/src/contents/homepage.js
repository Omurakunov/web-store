import Navbar from './navbar';
import Delivery from '../icons/delivery.svg'
import Turkey from '../icons/fromTurkey.svg'
import Price from '../icons/cheap.svg'
import Quality from '../icons/quality.svg'
import { useState, useEffect} from 'react'

const Home = () => {
 
  return ( 
    <><Navbar/>
    
    <div className='home'>
      <div className="category-home">
      <div className="intro">
        <a href="/store"><div className="womens-category"><p>WOMEN</p></div></a>
      </div>
      <div className="intro">
        <a href="/store"><div className="kids-category"><p>KID</p></div></a>
      </div>
      </div>
      
      <div className='information'>
        <div className='btns'>
        <input type='checkbox' id='btn1'></input>
        <input type='checkbox' id='btn3'></input>
        <input type='checkbox' id='btn4'></input>
        <input type='checkbox' id='btn2'></input>
        </div>
        

        <div className='info-block'>
          <img src={Delivery} alt='' className='first'></img>
          <p>Free delivery to any point in Bishkek</p>
        </div>
        <div className='info-block'>
          <img src={Price} alt='' className='second'></img>
          <p>Best prices ever</p>
        </div>
        <div className='info-block' >
          <img src={Turkey} alt='' className='third'></img>
          <p>Clothes directly from Turkey</p>
        </div>
        <div className='info-block'>
          <img src={Quality} alt='' className='forth'></img>
          <p>Best quality that you can ever find</p>
        </div>
      </div>
    </div>
    </>
   );
}
 
export default Home;  