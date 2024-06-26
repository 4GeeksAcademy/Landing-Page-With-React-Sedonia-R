import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

// create your first component

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Start Bootstrap</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				<div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link active" aria-current="page" href="#">Home</a>
						<a className="nav-link" href="#">About</a>
						<a className="nav-link" href="#">Services</a>
						<a className="nav-link" href="#">Contact</a>
					</div>
				</div>
			</div>
		</nav>
	);
};



export const Header = () => {
	return (
	<div className="row py-lg-5 container-fluid">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">A Warm Welcome!</h1>
        <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>
          <a href="#" className="btn btn-primary my-2">Call to action!</a>
        </p>
      </div>
    </div>
	);
};

export const Cards = () => {
	return (
		<div className="row container-fluid cards-holder">
			<div className="card col-3" style="width:18rem;">
				<img src="./src/img/500x325.png" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
					<a href="#" className="btn btn-primary">Check Out More!</a>
				</div>
			</div>
		</div>
	);
};

export const Footer = () => {
	return (
		<div className="card-footer text-body-white bg-dark">
			Copyright @ Your Website 2024
		</div>
	);
};
