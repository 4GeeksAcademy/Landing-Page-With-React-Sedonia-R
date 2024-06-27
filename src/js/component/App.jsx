import React from "react";

//include images into your bundle

// create your first component

import {Header} from "./Header.jsx";
import {Navbar} from "./Navbar.jsx";
import {CardElements} from "./CardElements.jsx";
import {Footer} from "./Footer.jsx";

export const App = () => {
    return (<>
		<Navbar/>
        <Header/>
        <CardElements/>
        <Footer/>
    </>);
};