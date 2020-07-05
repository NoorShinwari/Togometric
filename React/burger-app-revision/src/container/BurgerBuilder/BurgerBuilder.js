import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/ReactAux";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
  };

  render() {
    const { ingredients } = this.state;
    return (
      <Aux>
        <Burger ingredients={ingredients} />
        <div>Build Control</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
