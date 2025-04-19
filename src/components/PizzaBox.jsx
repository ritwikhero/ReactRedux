import React from "react";
import { orderPizza } from "./redux";
import { connect } from "react-redux";
function PizzaBox(props) {
  console.log(props);

  return (
    <div className="container">
      <h2 className="text">
        {" "}
        Number of pizza base available - {props.pizzaBase}
      </h2>
      <button className="btn" onClick={props.orderPizza}>
        orderPizza
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pizzaBase: state.pizzaBase,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderPizza: () => dispatch(orderPizza()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox); // PizzaBox;
