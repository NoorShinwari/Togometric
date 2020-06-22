import React from "react";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import HotelIcon from "@material-ui/icons/Hotel";
import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";

const Annuncio = () => {
  return (
    <div
      className="card "
      style={{
        borderRadius: "20px 20px",
        margin: "10px 10px",
        padding: "20px 20px",
        width: "60%",
      }}
    >
      <div className="row">
        <div className="col">
          <div className="col">
            <h4>Annuncio</h4>
            <p>Attivita Raccoglitore</p>
            <p>Orario di lavoro Full-time</p>
            <p>Orario settimanale Settimana di 5 giorni</p>
          </div>
          <div className="col">
            <h4>Requisiti</h4>
            <p>Non sono richieste qualifiche</p>
          </div>
        </div>
        <div className="col">
          <div className="col">
            <h4>Vito e Alloggio</h4>
            <p>
              <RestaurantIcon style={{ color: "#06559D" }} />
              Previsto pranzo e cena
            </p>
            <p className="mb-5">
              <HotelIcon style={{ color: "#06559D" }} />
              Previsto posto letto
            </p>
          </div>
          <div className="col">
            <h4>Competenze Linguistiche</h4>
            <p>Dovresti comprendere almeno una di queste lingue</p>
            <LanguageRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Annuncio;
