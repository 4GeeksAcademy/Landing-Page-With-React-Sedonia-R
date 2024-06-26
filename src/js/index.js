//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import {Navbar, Header, Cards, Footer} from "./component/home.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('navBar')).render(<Navbar/>);
ReactDOM.createRoot(document.getElementById('header')).render(<Header/>);
ReactDOM.createRoot(document.getElementsById('cards')).render(<Cards/>);
ReactDOM.createRoot(document.getElementsById('footer')).render(<Footer/>);

// const commentDomNode = document.getElementById('comments');
// const commentRoot = createRoot(commentDomNode); 
// commentRoot.render(<Comments />);