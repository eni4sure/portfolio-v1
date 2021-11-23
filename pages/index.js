import Image from "next/image";
import Typewriter from "typewriter-effect";
import { TopNavigationBar } from "../app/components";

import EniolaOsabiyaImage from "../public/assets/images/eniola-osabiya.png";
import instagramSvgIcon from "../public/assets/images/social-icon/social-icon-instagram.svg";
import githubSvgIcon from "../public/assets/images/social-icon/social-icon-github.svg";
import linkedinSvgIcon from "../public/assets/images/social-icon/social-icon-linkedin.svg";
import twitterSvgIcon from "../public/assets/images/social-icon/social-icon-twitter.svg";
import contactSendEmailSvgIcon from "../public/assets/images/contact-icons/contact-send-email.svg";

export default function Home({ pageViews }) {
	return (
		<>
			<TopNavigationBar />

			<div className="home-section-wrapper">
				<div className="social-media-links">
					<a href="https://instagram.com/eni4sure" target="_blank" rel="noreferrer" className="social-media">
						<Image src={instagramSvgIcon} width={30} height={30} alt="instagram-logo" />
					</a>
					<a href="https://github.com/eni4sure" target="_blank" rel="noreferrer" className="social-media">
						<Image src={githubSvgIcon} width={30} height={30} alt="instagram-logo" />
					</a>
					<a href="https://linkedin.com/in/eniola-osabiya" target="_blank" rel="noreferrer" className="social-media">
						<Image src={linkedinSvgIcon} width={30} height={30} alt="instagram-logo" />
					</a>
					<a href="https://twitter.com/eni4sure" target="_blank" rel="noreferrer" className="social-media">
						<Image src={twitterSvgIcon} width={30} height={30} alt="instagram-logo" />
					</a>
				</div>
				<div className="home-content">
					<div className="home-content-box">
						<div className="firstline">
							<span className="color">Eniola </span>Osabiya
						</div>
						<div className="secondline">
							I&#39;m{" "}
							<span className="txt-rotate color" style={{ display: "inline-flex" }}>
								<Typewriter
									className="color"
									options={{ strings: [" a FullStack Dev.", " 17yrs Old.", " a #TeensInTech Advocate."], autoStart: true, loop: true, changeDelay: 0.01 }}
								/>
							</span>
						</div>
						<div className="contact-icons">
							<a href="mailto:eosabiya@gmail.com" className="contactpic">
								<Image src={contactSendEmailSvgIcon} width={25} height={25} alt="email-pic" />
							</a>
						</div>
					</div>
				</div>
				<div className="home-image">
					<div className="img-container">
						<Image src={EniolaOsabiyaImage} placeholder="blur" alt="Eniola Osabiya" />
					</div>
				</div>
			</div>
		</>
	);
}
