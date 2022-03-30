import Navbar from './navbar';
import Delivery from '../icons/delivery.svg'
import Turkey from '../icons/fromTurkey.svg'
import Price from '../icons/cheap.svg'
import Quality from '../icons/quality.svg'
import { useState, useEffect} from 'react'
import{ Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCube } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () =>{
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
      <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCube]}
          effect='flip'
          navigation
          pagination={{clickable: true}}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{delay: 2000}}
          loop={true}
          
        >
          <SwiperSlide>
            <img src={Delivery} alt='slide'></img>
            <p>Free delivery to any point in Bishkek</p>
            </SwiperSlide>
          <SwiperSlide>
            <img src={Price} alt='slide'></img>
            <p>Free delivery to any point in Bishkek</p>
            </SwiperSlide>
          <SwiperSlide>
            <img src={Turkey} alt='slide'></img>
            <p>Free delivery to any point in Bishkek</p>
            </SwiperSlide>
          <SwiperSlide>
            <img src={Quality} alt='slide'></img>
            <p>Free delivery to any point in Bishkek</p>
            </SwiperSlide>
        </Swiper>

        
      
    </div>
    </>
   );
}
 
export default Home;  