import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/ReactAux";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((key) => ingredients[key])
      .reduce((sum, el) => sum + el, 0);
    console.log(sum + "sum");
    this.setState({
      purchasable: sum > 0,
    });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCounted = oldCount + 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = updateCounted;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updateIngredients);
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCounted = oldCount - 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = updateCounted;
    const priceDeduction = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updateIngredients);
  };

  render() {
    const { ingredients, totalPrice, purchasable } = this.state;

    const disabledInfo = { ...ingredients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={ingredients} />
        <BuildControls
          price={totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
