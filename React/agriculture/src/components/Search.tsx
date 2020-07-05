import React from "react";
import Card from "./Card";
import { useHistory } from "react-router-dom";
let Search = () => {
  const history = useHistory();
  const location = history.location;
  let data = location.state;
  console.log(data);
  return (
    <div>
      <Card />
      <Card />
    </div>
  );
};
export default Search;
