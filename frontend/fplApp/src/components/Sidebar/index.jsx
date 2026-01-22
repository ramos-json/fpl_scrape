import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import LogoPL from '../../assets/logo.png'
import './index.scss'

const Sidebar = () =>{
    return(
        <div className='nav-bar'>
            <Link className = "logo" to="/"> 
                <img src = {LogoPL} alt="logo" />
            </Link>
            <nav className='mobile-show'>
                <NavLink exact="true" activeclassname = "active" to="/">
                    Home
                </NavLink>
                <NavLink exact="true" activeclassname = "active"  to="/teams">
                    Teams
                </NavLink>
                <NavLink exact="true" activeclassname = "active"  to="/position">
                    Position
                </NavLink>
                <NavLink exact="true" activeclassname = "active"  to="/search">
                    Search
                </NavLink>
            </nav>
        </div>
    )
}
export default Sidebar