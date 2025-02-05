import React from "react";
import "./Home.css";
import Banniere from "../components/Banniere/Banniere";
import ListeFilm from "../components/ListeFilm/ListeFilm";

function Home() {
    return (
        <div className="home-container">
            <Banniere />
            <ListeFilm />
        </div>
    );
}

export default Home;
