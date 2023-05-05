import './App.css';
import netblixLogo from "./img/netflix-logo.png";

function App() {
  return (
    <nav>
      <div class="right-nav">
        <div class="netblix-logo-container">
          <img class="netblix-logo" src={netblixLogo} alt="react logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div class="left-nav">
      </div>
    </nav>
  )
}

export default App;
