import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BulidControls}>
      {controls.map((e) => (
        <BuildControl type={e.type} label={e.label} key={e.label} />
      ))}
    </div>
  );
};

export default BuildControls;
