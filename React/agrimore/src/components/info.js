import React from "react";
import LocalLibraryRoundedIcon from "@material-ui/icons/LocalLibraryRounded";
import PhoneIphoneRoundedIcon from "@material-ui/icons/PhoneIphoneRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";

const Info = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="body">
          <h4 className="card-title">INFO DI CONTATTO</h4>
          <div className="row-3">
            <div className="col-5">
              <LocalLibraryRoundedIcon style={{ fontSize: "50" }} />
            </div>
            <div className="col-7">
              <p>Riferimento</p>
              <p>Jason Sratam</p>
            </div>
          </div>
          <div className="row-3">
            <div className="col">
              <PhoneIphoneRoundedIcon style={{ fontSize: "50" }} />
            </div>
            <div className="col">
              <p>Numero di telefono</p>
              <p>+39 349 42 27 209</p>
            </div>
          </div>
          <div className="row-3 ">
            <div className="col">
              <MailOutlineRoundedIcon style={{ fontSize: "50" }} />
            </div>
            <div className="col">
              <p>Email</p>
              <p>Jason@statam.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
