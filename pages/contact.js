import Head from "next/head";
import Image from "next/image";
import { TopNavigationBar, Footer } from "../app/components";

import nameContactIcon from "../public/assets/images/contact-page/icon-name.png";
import locationContactIcon from "../public/assets/images/contact-page/icon-location.png";
import emailContactIcon from "../public/assets/images/contact-page/icon-email.png";

export default function Contact() {
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
						<form className="myForm" onSubmit={(e) => e.preventDefault()}>
							<div className="input-line">
								<input type="text" name="name" placeholder="Enter your Name" className="input-name" />
								<input type="email" name="email" placeholder="Enter your Email" className="input-name" />
							</div>
							<input type="text" name="subject" placeholder="Subject of message" className="input-subject" />
							<textarea name="message" className="input-textarea" placeholder="Enter your message..." />
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
									<Image src={locationContactIcon} width={52} height={52} alt="location-icon" />
								</div>
								<div className="contact-info-icon-text">
									<h6>Location</h6>
									<p>Lagos State, Nigeria.</p>
								</div>
							</div>
							<div className="contect-info-content-line">
								<div className="icon">
									<Image src={emailContactIcon} width={52} height={52} alt="email-icon" />
								</div>
								<div className="contact-info-icon-text">
									<h6>Email</h6>
									<p>
										<a href="mailto:eosabiya@gmail.com">eosabiya@gmail.com</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
