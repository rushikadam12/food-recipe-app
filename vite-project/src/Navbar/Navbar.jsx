import {Link} from "react-router-dom";
import IMG from "../Home/Img/Img";
const Navbar=()=>{
    return(
        <>
          <div className="Top_border">

            </div>
        <div className='nav_container'>
            <div className="Title_container">
            <p><img src={IMG[2].URL}/>Fast prep</p>
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Help</Link>
            </nav>
            </div>
        </>
    )
}
export default Navbar;