import Anime from './anime'
import Background from '../icons/Vector.svg'
const Slider = () => {
  return ( 
    
    <div className='intro'>
      <img src={Background} alt='' className='bc'></img>
      <div className='animation'>
        <Anime/>
       </div>
      <div className='intro_text'> 
        <p>Do you need stylish clothes that suits you?<br/><span>Find it here!</span></p>
        <div className='buttons'>
        <button>Get It!</button>
        </div>
      </div>
    </div>
     
   );
}
 
export default Slider;  