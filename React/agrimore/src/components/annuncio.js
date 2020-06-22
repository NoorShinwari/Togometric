import React from "react";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import HotelIcon from "@material-ui/icons/Hotel";
import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";

const Annuncio = () => {
  return (
    <div className="container">
      <div className="card">
        <div>
          <div className="row">
            <div className="col text-left">
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

            <div className="col text-left">
              <div className="col">
                <h4>Vito e Alloggio</h4>
                <p>
                  <RestaurantIcon />
                  Previsto pranzo e cena
                </p>
                <p>
                  <HotelIcon />
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
      </div>
    </div>
  );
};

export default Annuncio;
