import React from "react";
import Search from "./Search";
import { useHistory } from "react-router-dom";
let Next = () => {
  const history = useHistory();
  const location = history.location;
  let data = location.state;
  console.log(`${data} Next`);
  return (
    <div>
      <Search />
    </div>
  );
};
export default Next;
