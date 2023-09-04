import './Navigation.css';
import netblixLogo from "../img/netflix-logo.png";
import { Link } from "react-router-dom";

export default function Navigation() {
    return ( <
        nav >
        <
        div class = "right-nav" >
        <
        div class = "netblix-logo-container" >
        <
        img class = "netblix-logo"
        src = { netblixLogo }
        alt = "react logo" / >
        <
        /div> <
        ul >
        <
        li className = "section-li-balise" > < Link to = "/" > < div class = "inner-link-balise" > Home < /div></Link > < /li> <
        li className = "section-li-balise" > < Link to = "/tvshows" > < div class = "inner-link-balise" > TV Shows < /div></Link > < /li> <
        li className = "section-li-balise" > < Link to = "/movies" > < div class = "inner-link-balise" > Movies < /div></Link > < /li> <
        li className = "section-li-balise" > < a className = "section-a-balise"
        href = { null } > New & Popular < /a></li >
        <
        li className = "section-li-balise" > < a className = "section-a-balise"
        href = { null } > My List < /a></li >
        <
        li className = "section-li-balise" > < a className = "section-a-balise"
        href = { null } > Browse by Languages < /a></li >
        <
        /ul> <
        /div> <
        div class = "left-nav" >
        <
        ul >
        <
        li className = "section-li-balise" > < a className = "section-a-balise"
        href = { null } > search < /a></li >
        <
        li className = "section-li-balise" > < a className = "section-a-balise"
        href = { null } > notifications < /a></li >
        <
        li className = "section-li-balise" > < a className = "section-a-balise"
        href = { null } > account < /a><a href={null} className="section-a-balise">triangle</a > < /li> <
        /ul> <
        /div> <
        /nav>
    );
}