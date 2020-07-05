import React from "react";
import classes from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-top":
      return (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
    case "bread-bottom":
      return <div className={classes.BreadBottom}></div>;
    case "salad":
      return <div className={classes.Salad}></div>;
    case "meat":
      return <div className={classes.Meat}></div>;
    case "bacon":
      return <div className={classes.Bacon}></div>;
    case "cheese":
      return <div className={classes.Cheese}></div>;
    default:
      return ingredient;
  }
};

BurgerIngredient.protoTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
