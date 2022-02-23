import Navbar from './navbar';
import Delivery from '../icons/service.png'
import Turkey from '../icons/fromTurkey.png'
import Price from '../icons/price.png'
import Return from '../icons/giveback.png'
import Quality from '../icons/quality.png'
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
        <div className='info-block'>
          <img src={Delivery} alt=''></img>
          <p>Free delivery to any point in Bishkek</p>
        </div>
        <div className='info-block'>
          <img src={Price} alt=''></img>
          <p>Best prices ever</p>
        </div>
        <div className='info-block'>
          <img src={Turkey} alt=''></img>
          <p>Clothes directly from Turkey</p>
        </div>
        <div className='info-block'>
          <img src={Return} alt=''></img>
          <p>Purchase returns</p>
        </div>
        <div className='info-block'>
          <img src={Quality} alt=''></img>
          <p>Best quality that you can ever find</p>
        </div>
      </div>
    </div>
    </>
   );
}
 
export default Home;  