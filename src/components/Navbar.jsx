import { NavLink } from 'react-router-dom'
import "../App.css"


const Navbar = () => {
  return (
    <nav className="nav">
        <ul className="nav_ul">
            <li>
               <NavLink to={"/"}>H O M E</NavLink>
            </li>
            <li>
               <NavLink to={"/post_page"}>P A G I N A T I O N</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar