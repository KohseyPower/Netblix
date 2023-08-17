import mainAnounce from "../img/home-main-image.webp";
import "./Home.css";

export default function Home() {
    return (
        <main>
            <div className="main-img-container">
                <img className="main-img-anounce" src={mainAnounce} alt="main anounce"></img>
            </div>
        </main>
    )
}