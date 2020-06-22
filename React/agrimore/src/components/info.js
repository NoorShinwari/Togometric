import React from "react";
import LocalLibraryRoundedIcon from "@material-ui/icons/LocalLibraryRounded";
import PhoneIphoneRoundedIcon from "@material-ui/icons/PhoneIphoneRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";

const Info = () => {
  return (
    <div
      className="card w-30"
      style={{
        borderRadius: "20px 20px",
        margin: "10px 10px",
        padding: "20px 20px",
        width: "36%",
      }}
    >
      <h4 className="card-title">INFO DI CONTATTO</h4>
      <div className="col">
        <div className="row">
          <LocalLibraryRoundedIcon style={{ fontSize: "60" }} />

          <div className="col">
            <p>Riferimento</p>
            <p>Jason Sratam</p>
          </div>
        </div>

        <div className="row">
          <PhoneIphoneRoundedIcon style={{ fontSize: "60" }} />

          <div className="col">
            <p>Numero di telefono</p>
            <p>+39 349 42 27 209</p>
          </div>
        </div>
        <div className="row ">
          <MailOutlineRoundedIcon style={{ fontSize: "60" }} />

          <div className="col">
            <p>Email</p>
            <p style={{ fontWeight: "bold", color: "#06559D" }}>
              Jason@statam.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
