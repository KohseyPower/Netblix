import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    React.StrictMode >
    <
    BrowserRouter >
    <
    body >
    <
    App / >
    <
    /body> <
    /BrowserRouter> <
    /React.StrictMode>
);