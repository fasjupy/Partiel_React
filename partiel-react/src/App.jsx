import React from "react";
import "./index.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <NavBar />
                <Router />
            </div>
        </BrowserRouter>
    );
}

export default App;
