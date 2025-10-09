import React, { useState } from "react";
import "../styles/ContactForm.scss";

// To use, create a new form on https://formspree.io/forms and copy your form ID.
// Example endpoint: https://formspree.io/f/yourFormId

export default function ContactForm() {
	const [status, setStatus] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;

		// Honeypot check
		if (form.honeypot.value !== "") {
			return; // bot detected
		}

		const data = new FormData(form);
		try {
			const response = await fetch("https://formspree.io/f/xnngzkzz", {
				method: "POST",
				body: data,
				headers: {
					Accept: "application/json",
				},
			});

			if (response.ok) {
				setStatus("SUCCESS");
				form.reset();
			} else {
				setStatus("ERROR");
			}
		} catch (error) {
			setStatus("ERROR");
		}
	};

	return (
		<form className="contact-form" onSubmit={handleSubmit}>
			<label>
				Name
				<input name="name" required />
			</label>
			<label>
				Email
				<input name="email" type="email" required />
			</label>
			<label>
				Message
				<textarea name="message" required></textarea>
			</label>

			{/* Honeypot field (hidden) */}
			<input
				type="text"
				name="honeypot"
				className="hidden-field"
				tabIndex="-1"
				autoComplete="off"
			/>

			<button type="submit" className="btn">
				Send
			</button>

			{status === "SUCCESS" && <p className="success">Thank you! Message sent.</p>}
			{status === "ERROR" && <p className="error">Oops! Something went wrong.</p>}
		</form>
	);
}
