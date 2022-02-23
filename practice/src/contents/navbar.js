
import Inst from "../icons/instagram.svg";
import Facebook from "../icons/facebook.svg";
import Messenger from "../icons/messenger.svg";
const Navbar = () => {
  return (  
    <div className="navbar">
    
      <div className="nav-list">
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/store">Shop</a></li>
        <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="logo">
        <h1><a href="/">NURAYIM</a></h1>
        
      </div>
      <div className="links">
        <a href="a"><img src={Inst} alt="sd"></img></a>
        <a href="a"><img src={Facebook} alt="sd"></img></a>
        <a href="a"><img src={Messenger} alt="sd"></img></a>
      </div>
    
    </div>
  );
}
 
export default Navbar;                              