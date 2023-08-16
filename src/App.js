

import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  )
}

export default App;
