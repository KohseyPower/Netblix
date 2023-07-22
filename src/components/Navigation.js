import './Navigation.css';
import netblixLogo from "../img/netflix-logo.png";

export default function Navigation() {
    return (
        <nav>
            <div class="right-nav">
                <div class="netblix-logo-container">
                    <img class="netblix-logo" src={netblixLogo} alt="react logo" />
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">TV Shows</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">New & Popular</a></li>
                    <li><a href="#">My List</a></li>
                    <li><a href="#">Browse by Languages</a></li>
                </ul>
            </div>
            <div class="left-nav">
                <ul>
                    <li><a href="#">search</a></li>
                    <li><a href="#">notifications</a></li>
                    <li><a href="#">account</a><a href="#">triangle</a></li>
                </ul>
            </div>
        </nav>);
}