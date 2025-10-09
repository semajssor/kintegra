import React from "react";
import "../styles/Navbar.scss";

export default function Navbar() {
	return (
		<nav className="site-nav">
			<div className="nav-inner container">
				<a className="brand" href="#">
					KINTEGRA
				</a>
				<ul className="nav-links">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#blog">Blog</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
