//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";
import { App } from "./component/App";

//import your own components


ReactDOM.createRoot(document.querySelector('#app')).render(<App/>);
