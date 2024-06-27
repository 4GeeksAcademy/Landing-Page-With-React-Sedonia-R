import React from "react";
import placeholderImg from "../../img/500x325.png";

export const CardElements = () => {
	return (
		<div className="row cardContainer">
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
            <Cards/>
            <Cards/>
		</div>
	);
};

function Cards() {
	return (
		<div className="card col-3" style={{width:"18rem"}}>
			<img src={placeholderImg} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
				<a href="#" className="btn btn-primary">Check Out More!</a>
			</div>
		</div>
	);
};
