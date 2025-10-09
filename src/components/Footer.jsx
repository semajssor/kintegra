import React from "react";
import "../styles/Footer.scss";

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container">
				<p>© {new Date().getFullYear()} Kintegra. All rights reserved.</p>
			</div>
		</footer>
	);
}
