import logo from '../../assets/PL.webp'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import './index.css'
const Home = () =>{

    return(
        <>
        <div className = "container home-page">
            <div className="text-zone">
                <Link to="/teams" className="flat-button">GET STARTED</Link>
            </div>
        </div>
        <Loader type="pacman" />
      </>

    )
}
export default Home