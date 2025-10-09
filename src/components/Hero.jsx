import React, { useEffect, useRef } from "react";
import "../styles/Hero.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
	const root = useRef();

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			gsap.from(".hero-content", { opacity: 0, y: 40, duration: 1 });
		}, root);

		return () => ctx.revert();
	}, []);

	return (
		<header className="hero" id="home" ref={root}>
			<div className="overlay" />
			<div className="hero-content container">
				<h1>Kintegra</h1>
				<p className="tagline">Knowledge integration &amp; Transdiciplinary</p>
				<a className="btn" href="#about">
					Discover More
				</a>
			</div>
		</header>
	);
}
