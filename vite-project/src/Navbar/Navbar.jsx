import {Link} from "react-router-dom";
import IMG from "../Home/Img/Img";
import Dropmenu from "../assets/Drop_down_menu/Dropmenu";
const Navbar=()=>{
    return(
        <>
          <div className="Top_border">

            </div>
        <div className='nav_container'>
            <div className="Title_container">
            <img src={IMG[2].URL}/>
            <p>Cookfast</p>
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Help</Link>
            </nav>
            <Dropmenu/>
            </div>
        </>
    )
}
export default Navbar;