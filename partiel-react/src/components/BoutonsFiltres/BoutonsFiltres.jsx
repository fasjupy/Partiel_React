import React from "react";
import "./BoutonsFiltres.css";

function BoutonsFiltres() {
    return (
        <div className="boutons-filtres">
            <button className="filtre actif">Aujourd’hui</button>
            <button className="filtre">Cette semaine</button>
        </div>
    );
}

export default BoutonsFiltres;
