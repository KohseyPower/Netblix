import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from "./pages/Home";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import './App.css';
import LoginScreen from "./pages/LoginScreen";


function App() {
    const auth = false;

    return (
        <div>
            <style>
                {`
            @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
          `}
            </style>
            {auth ? (
                <>
                    <Navigation />
                    <Routes>
                        <Route path="/Netblix" element={<Home />} />
                        <Route path="/tvshows" element={<TVShows />} />
                        <Route path="/movies" element={<Movies />} />
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route path="/Netblix" element={<LoginScreen />} />
                </Routes>
            )}
        </div>
    );
}

export default App;