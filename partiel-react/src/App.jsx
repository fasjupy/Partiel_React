import React from "react";
import "./index.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./router/Router.jsx";

function App() {
    return (
        <div className="app-container">
            <NavBar />
            <AppRouter />
        </div>
    );
}

export default App;
