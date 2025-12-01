import React, { useEffect, useRef } from "react";
import "../styles/Hero.scss";
import { gsap } from "gsap";

export default function Hero() {
	const root = useRef(null);

	useEffect(() => {
		let ctx; // Déclaration de ctx en dehors du scope de la promesse

		// Importation dynamique de ScrollTrigger, s'assurant qu'elle se fait
		// UNIQUEMENT lorsque le composant est monté (côté client/navigateur)
		import("gsap/ScrollTrigger")
			.then((module) => {
				const ScrollTrigger = module.ScrollTrigger;
				gsap.registerPlugin(ScrollTrigger);

				// Initialisation de gsap.context() après l'enregistrement
				ctx = gsap.context(() => {
					gsap.from(".hero-content", {
						opacity: 0,
						y: 40,
						duration: 1,
						ease: "power2.out",
					});
				}, root);
			})
			.catch((error) => {
				console.error("Erreur lors du chargement de ScrollTrigger:", error);
			});

		return () => {
			if (ctx) {
				ctx.revert();
			}
		};
	}, []);

	return (
		<header className="hero" id="home" ref={root}>
			<div className="overlay" />
			<div className="hero-content container">
				<h1>Kintegra</h1>
				<p className="tagline">Knowledge integration &amp; Transdisciplinary</p>
				<a className="btn" href="#about">
					Discover More
				</a>
			</div>
		</header>
	);
}
