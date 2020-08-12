import React, { Fragment } from "react";
import Mainmenu from "./layouts/Mainmenu";
import Home from "./components/Home";

function App() {
  return (
    <Fragment>
      <Mainmenu></Mainmenu>
      <Home></Home>
    </Fragment>
  );
}

export default App;
