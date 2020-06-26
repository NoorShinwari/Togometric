import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import BusinessIcon from "@material-ui/icons/Business";
import PlaceIcon from "@material-ui/icons/Place";
import StarsIcon from "@material-ui/icons/Stars";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ScheduleIcon from "@material-ui/icons/Schedule";

const Card2 = () => {
  return (
    <div
      className="card"
      style={{
        borderRadius: "20px 20px",
        margin: "10px 10px",
        padding: "20px 20px",
      }}
    >
      <div className="row ">
        <div className="col ">
          <div className="card-body text-left">
            <h5 className="card-title">RACCOGLITORE</h5>
            <div className="card-text ">
              <div className="row">
                <div className="col mb-2">
                  <span>
                    <PersonIcon style={{ color: "#06559D" }} />
                  </span>
                  Raccoglitore
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <span>
                    <BusinessIcon style={{ color: "#06559D" }} />
                  </span>
                  MultiSpa
                </div>
                <div className="col">
                  <span>
                    <PlaceIcon style={{ color: "#F1BA10" }} />
                  </span>
                  Rimini
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-body text-right ">
            <h5 className="card-title">
              <a
                href="#"
                className="btn btn-primary btn-sm rounded-pill"
                style={{ backgroundColor: "#06559D" }}
              >
                CANDIDATI
              </a>
              <span>
                <StarsIcon style={{ color: "#F1BA10" }} />
              </span>
            </h5>
            <div className="card-text">
              <div className="row ">
                <div className="col">
                  <span>
                    <DateRangeIcon style={{ color: "#06559D" }} />
                  </span>
                  Da oggi fino a 20.07.2020
                </div>
              </div>
              <div className="row">
                <div className="col ">
                  <span>
                    <ScheduleIcon style={{ color: "#06559D" }} />
                  </span>
                  Oggi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
