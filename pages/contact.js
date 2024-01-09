import React from "react";
import Head from "next/head";
import Image from "next/image";
import { TopNavigationBar, Footer } from "../app/components";

import nameContactIcon from "../public/assets/images/contact-page/icon-name.png";
import locationContactIcon from "../public/assets/images/contact-page/icon-location.png";
import emailContactIcon from "../public/assets/images/contact-page/icon-email.png";

export default function Contact({ pageViews }) {
	const [contactFormData, setContactFormData] = React.useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [formState, setFormState] = React.useState({
		submitted: false,
		success: false,
		message: null,
	});

	const handleContactFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(contactFormData),
			});

			if (response.status === 200) {
				setFormState({ submitted: true, success: true });
				setContactFormData({ name: "", email: "", subject: "", message: "" });
				window.alert("Message sent successfully");
			}
		} catch (error) {
			window.alert("Error Sending Message");
			setFormState({ submitted: true, success: false, message: error.message });
		}
	};

	return (
		<>
			<Head>
				<title>Contact &mdash; Eniola Osabiya || @eni4sure</title>{" "}
			</Head>

			<TopNavigationBar />

			<div className="contact-section-wrapper">
				<div className="contact-header">
					Contact <span className="color"> Me</span>
					<div className="contact-header-caption">
						<span className="color"> Get</span> In Touch.
					</div>
				</div>
				<div className="contact-content">
					<div className="contact-form">
						<div className="form-header">Message Me</div>
						<form className="myForm" onSubmit={handleContactFormSubmit}>
							<div className="input-line">
								<input
									type="text"
									name="name"
									required
									placeholder="Enter your Name"
									value={contactFormData.name}
									onChange={(e) =>
										setContactFormData({
											...contactFormData,
											name: e.target.value,
										})
									}
									className="input-name"
								/>
								<input
									type="email"
									name="email"
									required
									placeholder="Enter your Email"
									value={contactFormData.email}
									onChange={(e) =>
										setContactFormData({
											...contactFormData,
											email: e.target.value,
										})
									}
									className="input-name"
								/>
							</div>
							<input
								type="text"
								name="subject"
								required
								placeholder="Subject of message"
								value={contactFormData.subject}
								onChange={(e) =>
									setContactFormData({
										...contactFormData,
										subject: e.target.value,
									})
								}
								className="input-subject"
							/>
							<textarea
								name="message"
								className="input-textarea"
								required
								placeholder="Enter your message..."
								value={contactFormData.message}
								onChange={(e) =>
									setContactFormData({
										...contactFormData,
										message: e.target.value,
									})
								}
							/>
							<button type="submit" id="submit">
								Submit
							</button>
						</form>
					</div>
					<div className="contact-info" style={{ backgroundImage: "url('assets/images/contact-page/contact-info-banner.svg')" }}>
						<div className="contact-info-header">Contact Info</div>
						<div>
							<div className="contect-info-content-line">
								<div className="icon">
									<Image src={nameContactIcon} width={52} height={52} alt="name-icon" />
								</div>
								<div className="contact-info-icon-text">
									<h6>Name</h6>
									<p>Eniola Osabiya</p>
								</div>
							</div>

							<div className="contect-info-content-line">
								<div className="icon">
									<Image src={emailContactIcon} width={52} height={52} alt="email-icon" />
								</div>
								<div className="contact-info-icon-text">
									<h6>Email</h6>
									<p>
										<a href="mailto:eosabiya@gmail.com">hey@eniolaosabiya.com</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer pageViews={pageViews} />
		</>
	);
}
