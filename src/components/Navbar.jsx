/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg pt-5 ps-2 ps-lg-4 fixed-top">
				<div className="container-fluid" id="containerNav">
					<button className="navbar-toggler mb-5" id="btnHamburger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<i className="bi bi-list fs-3"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Our service
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About us
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact us
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Blog
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Sign up
								</a>
							</li>
							<li className="nav-item pe-0">
								<a className="nav-link ps-3" id="btnSign-in" href="#" role="button">
									<i className="bi bi-person-circle"></i> Sign in
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
