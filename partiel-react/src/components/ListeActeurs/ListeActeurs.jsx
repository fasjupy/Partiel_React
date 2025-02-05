import React from "react";
import "./ListeActeurs.css";

function ListeActeurs() {
    const actors = [
        { id: 1, name: "Tom Holland", role: "Spider-Man", img: "https://via.placeholder.com/100" },
        { id: 2, name: "Zendaya", role: "MJ", img: "https://via.placeholder.com/100" },
        { id: 3, name: "Benedict Cumberbatch", role: "Dr. Strange", img: "https://via.placeholder.com/100" },
    ];

    return (
        <div className="liste-acteurs">
            <h2>Acteurs</h2>
            <div className="acteurs-container">
                {actors.map((actor) => (
                    <div key={actor.id} className="acteur">
                        <img src={actor.img} alt={actor.name} />
                        <p>{actor.name}</p>
                        <span>{actor.role}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListeActeurs;
