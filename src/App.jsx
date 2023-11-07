import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from "./pages/Home";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import SignUp from "./pages/SignUp";
import './App.css';
import LoginScreen from "./pages/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";



function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                // Logged in
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email,
                }));
            } else {
                // Logged out
                dispatch(logout()); // Call the logout action creator
            }
        });

        return unsubscribe;
    }, [dispatch]); // Add dispatch as a dependency

    return (
        <div>
            <style>
                {`
            @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
          `}
            </style>
            {user ? (
                <>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tvshows" element={<TVShows />} />
                        <Route path="/movies" element={<Movies />} />
                    </Routes>
                </>
            ) : (
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            )}
        </div>
    );
}

export default App;
