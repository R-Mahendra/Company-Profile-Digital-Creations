/* eslint-disable no-unused-vars */
import React from "react";

const Home = () => {
	return (
		<>
			<section className="home" id="home">
				<div className="container pt-5">
					<div className="row">
						<div className="col-lg-9 position-relative">
							<div className="homekontent ">
								<h1>
									<p className="wlc">WELCOME</p>
									<p className="dgt">Digital Creating Trends</p>
									<p className="lds">
										Lead the <span>changes</span>
									</p>
								</h1>
								<div className="cyr"></div>
							</div>
							<div className="text py-5">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur corrupti itaque laudantium voluptatibus eveniet laboriosam, reprehenderit quaerat! Voluptatibus et saepe accusantium unde fugiat natus modi dolorem.
								</p>
							</div>
							<div className="Boxsosmed">
								<a href="#">
									<i className="bi bi-twitter"></i>
								</a>
								<a href="#">
									<i className="bi bi-instagram"></i>
								</a>
								<a href="#">
									<i className="bi bi-facebook"></i>
								</a>
								<a href="#">
									<i className="bi bi-youtube"></i>
								</a>
							</div>
							<div className="cyr2"></div>
						</div>
						<div className="col-lg-6 d-flex py-5" id="boxBtn">
							<div className="Boxbtncontact me-3">
								<button type="button" className="btn btn-home" id="btnContact">
									Contact us <i className="bi bi-arrow-right d-flex justify-content-center align-items-center mt-2 ms-2"></i>
								</button>
							</div>
							<div className="Boxbtncontact">
								<button type="button" className="btn btn-home" id="btnsService">
									Our service
								</button>
							</div>
						</div>
						<div className="col-lg-4 d-flex justify-content-center align-items-center position-relative">
							<h2 className="num">01</h2>
							<span className="numkotak"></span>
						</div>
					</div>

					<div className="row d-flex justify-content-center align-items-center" id="ServiceCard">
						<div className="col-lg-4 px-0">
							<div className="cardFirst">
								<div className="icons-cardFirst m-auto">
									<i className="bi bi-megaphone-fill"></i>
									<div className="cyrcle">
										<div className="twet">
											<i className="bi bi-twitter"></i>
										</div>
										<div className="ig">
											<i className="bi bi-instagram"></i>
										</div>
										<div className="fb">
											<i className="bi bi-facebook"></i>
										</div>
										<div className="yt">
											<i className="bi bi-youtube"></i>
										</div>
									</div>
								</div>
								<div className="text p-3">
									<h2>Digital Marketing</h2>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi numquam ut esse consequuntur quis similique odit nam quidem, dolore debitis voluptas eligendi, suscipit eveniet!</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 px-0">
							<div className="cardSecond">
								<div className="icons-cardSecond m-auto">
									<i className="bi bi-chat-square-text"></i>
									<div className="user">
										<i className="bi bi-person-fill"></i>
									</div>
								</div>
								<div className="text p-3">
									<h2>Beyond Consulting</h2>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi numquam ut esse consequuntur quis similique odit nam quidem, dolore debitis voluptas eligendi, suscipit eveniet!</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 px-0">
							<div className="cardThrid">
								<div className="icons-cardThrid m-auto">
									<i className="bi bi-bezier"></i>
									<div className="pen">
										<i className="bi bi-vector-pen"></i>
									</div>
								</div>
								<div className="text p-3">
									<h2>Graphic Design</h2>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi numquam ut esse consequuntur quis similique odit nam quidem, dolore debitis voluptas eligendi, suscipit eveniet!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
