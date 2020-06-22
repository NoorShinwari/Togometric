import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import BusinessIcon from "@material-ui/icons/Business";
import PlaceIcon from "@material-ui/icons/Place";
import StarIcon from "@material-ui/icons/Star";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ScheduleIcon from "@material-ui/icons/Schedule";
const Card = () => {
  return (
    <div className="container  ">
      <div className="card ">
        <div className="row">
          <div className="col-5 text-left">
            <div className="card-body">
              <h5 className="card-title">RACCOGLITORE</h5>
              <p className="card-text">
                <PersonIcon />
                Raccoglitore
              </p>
              <div className="row">
                <div className="col text-left">
                  <BusinessIcon />
                  MultiSpa
                </div>
                <div className="col text-left">
                  <PlaceIcon />
                  Rimini
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 text-right">
            <div className="card-body">
              <a href="#" className="btn btn-primary rounded-pill">
                CANDIDATI
              </a>
              <StarIcon />
              <p className="card-text">
                <DateRangeIcon />
                Da oggi fino a 20.07.2020
              </p>
              <div className="row">
                <div className="col text-right">
                  <ScheduleIcon />
                  Oggi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
