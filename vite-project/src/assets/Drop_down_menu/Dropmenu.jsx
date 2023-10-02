import React, {useState, useEffect, useRef} from 'react';
import menuImg from '../drop_menu_img/dmenu';
const Dropmenu = () => {
    const [open, setOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
            setOpen(false);
       
          }      
        };
    
        document.addEventListener("mousedown", handler);
        
    
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
    
      });
    
    return (
        <>
            <div className="App">
                <div className='menu-container' ref={menuRef}>
                    <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
                        <img src="https://i.ytimg.com/vi/0LYkBRL6vLo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBcfVaTAilRFEEIPVzdhD0STHh0jQ"></img>
                    </div>

                    <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                        <h3>username<br/><span>new</span></h3>
                        <ul>
                            <DropdownItem img="/" text={"My Profile"} />
                            <DropdownItem img={menuImg[0].url} text={"About"} />
                            <DropdownItem img="/" text={"Logout"} />
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
    function DropdownItem(props){
        return(
          <li className = 'dropdownItem'>
            <img src={props.img}></img>
            <a> {props.text} </a>
          </li>
        );
      }
}
export default Dropmenu;