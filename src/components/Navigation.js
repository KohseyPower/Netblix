import './Navigation.css';
import netblixLogo from "../img/netflix-logo.png";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <div class="right-nav">
                <div class="netblix-logo-container">
                    <img class="netblix-logo" src={netblixLogo} alt="react logo" />
                </div>
                <ul>
                    <li className="section-li-balise"><Link to="/">Home</Link></li>
                    <li className="section-li-balise"><Link to="/tvshows">TV Shows</Link></li>
                    <li className="section-li-balise"><Link to="/movies">Movies</Link></li>
                    <li className="section-li-balise"><a className="section-a-balise" href="#">New & Popular</a></li>
                    <li className="section-li-balise"><a className="section-a-balise" href="#">My List</a></li>
                    <li className="section-li-balise"><a className="section-a-balise" href="#">Browse by Languages</a></li>
                </ul>
            </div>
            <div class="left-nav">
                <ul>
                    <li className="section-li-balise"><a className="section-a-balise" href="#">search</a></li>
                    <li className="section-li-balise"><a className="section-a-balise" href="#">notifications</a></li>
                    <li className="section-li-balise"><a className="section-a-balise" href="#">account</a><a href="#" className="section-a-balise">triangle</a></li>
                </ul>
            </div>
        </nav>
    );
}