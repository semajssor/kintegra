import React, { useEffect, useRef } from "react";
import "./ScrollSection.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection({ id, title, children }) {
	const ref = useRef();

	useEffect(() => {
		const el = ref.current;
		const ctx = gsap.context(() => {
			gsap.from(el.querySelectorAll(".container > *"), {
				y: 30,
				opacity: 0,
				duration: 0.8,
				stagger: 0.12,
				ease: "power2.out",
				scrollTrigger: {
					trigger: el,
					start: "top 80%",
				},
			});
		}, el);

		return () => ctx.revert();
	}, []);

	return (
		<section id={id} className="scroll-section" ref={ref}>
			<div className="section-header container">
				<h2>{title}</h2>
			</div>
			{children}
		</section>
	);
}
