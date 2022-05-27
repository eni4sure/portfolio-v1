import Head from "next/head";
import Image from "next/image";
import { TopNavigationBar, Footer } from "../app/components";

import EniolaOsabiyaNFT from "../public/assets/images/my-nft.png";
import debugSvgIcon from "../public/assets/images/services-icon/services-debug.svg";
import apiSvgIcon from "../public/assets/images/services-icon/services-api.svg";
import deploySvgIcon from "../public/assets/images/services-icon/services-deploy.svg";

export default function About({ pageViews }) {
	return (
		<>
			<Head>
				<title>About &mdash; Eniola Osabiya || @eni4sure</title>
			</Head>

			<TopNavigationBar />

			<div className="about-section-wrapper">
				<div className="about-content">
					<div className="about-header">
						About <span className="color">Me</span>
						<span className="header-caption">
							Get to Know <span className="color"> me.</span>
						</span>
					</div>
					<div className="about-main">
						<div className="first-paragraph">
							<span className="first-line">
								I&#39;m a Full Stack Dev. &amp; Cloud Engineer
							</span>
							<br />
							<span className="second-line">
								I started my coding journey in 2016, when I was 12yrs Old. I learnt how to code from my church (
								<a href="https://mfmteens.org/" target="_blank" rel="noreferrer">
									MFM
								</a>
								).
								<br />
								Over the years I&#39;ve successfully developed custom solutions to solve challenges and engineered designs to meet predetermined functionality goals.
								<br />
								&mdash; Strengths: Debugging, Writing Logic, Abstraction.
								<br />
								Coding and Tech is so fun and I looveeeee debugging and fixing bugs.
							</span>
							<div className="cv">
								<a href="https://www.linkedin.com/in/eniola-osabiya/" rel="noreferrer" target="_blank">
									<button>Go to CV</button>
								</a>
							</div>
						</div>
						<div className="about-img">
							<div className="img-container">
								<Image src={EniolaOsabiyaNFT} placeholder="blur" alt="eniola-osabiya" />
							</div>
						</div>
					</div>
				</div>
				<div className="services">
					<div className="services-heading">
						<span className="color">My</span> Services
					</div>
					<div className="services-content-wrapper">
						<div className="service">
							<div className="service-img">
								<div className="img-container">
									<Image src={debugSvgIcon} width={80} height={80} alt="debugging-service" />
								</div>
							</div>
							<div className="service-description">
								<h2>Debugging</h2>
								<p>Debugging is the process of detecting and removing of existing and potential errors (bugs) in a software code that can cause it to behave unexpectedly or crash.</p>
							</div>
						</div>
						<div className="service">
							<div className="service-img">
								<div className="img-container">
									<Image src={apiSvgIcon} width={80} height={80} alt="api-development-service" />
								</div>
							</div>
							<div className="service-description">
								<h2>API Development</h2>
								<p>
									API (Application Programming Interface software) is a set of instructions, standards or requirements that enables a software or app to employ features/services of
									another app,
								</p>
							</div>
						</div>
						<div className="service">
							<div className="service-img">
								<div className="img-container">
									<Image src={deploySvgIcon} width={80} height={80} alt="deployment-service" />
								</div>
							</div>
							<div className="service-description">
								<h2>Deployment</h2>
								<p>Deploying projects/sites and apps to live servers using tools like Docker, AWS, Heroku, Netlify, Vercel, Google Play Console</p>
							</div>
						</div>
					</div>
				</div>
				<div className="skills">
					<div className="skills-header">
						My <span className="color"> Skills</span>
					</div>
					<div className="skills-content">
						<div className="skill">
							<div className="skill-text">
								<div className="skill-text-inner">HTML/CSS</div>
							</div>
							<div className="progress-wrapper">
								<div className="progress-inner" style={{ width: "85%" }}>
									95%
								</div>
							</div>
						</div>
						<div className="skill">
							<div className="skill-text">
								<div className="skill-text-inner">Javascript / NodeJS</div>
							</div>
							<div className="progress-wrapper">
								<div className="progress-inner" style={{ width: "90%" }}>
									92%
								</div>
							</div>
						</div>
						<div className="skill">
							<div className="skill-text">
								<div className="skill-text-inner">PHP / Laravel</div>
							</div>
							<div className="progress-wrapper">
								<div className="progress-inner" style={{ width: "92%" }}>
									92%
								</div>
							</div>
						</div>
						<div className="skill">
							<div className="skill-text">
								<div className="skill-text-inner">MySQL</div>
							</div>
							<div className="progress-wrapper">
								<div className="progress-inner" style={{ width: "88%" }}>
									88%
								</div>
							</div>
						</div>
						<div className="skill">
							<div className="skill-text">
								<div className="skill-text-inner">MongoDB</div>
							</div>
							<div className="progress-wrapper">
								<div className="progress-inner" style={{ width: "86%" }}>
									90%
								</div>
							</div>
						</div>
						<div className="skill">
							<div className="skill-text">
								<div className="skill-text-inner">Docker</div>
							</div>
							<div className="progress-wrapper">
								<div className="progress-inner" style={{ width: "80%" }}>
									80%
								</div>
							</div>
						</div>
						<div className="skill">
							<div className="skill-text">
								<div className="skill-text-inner">Linux</div>
							</div>
							<div className="progress-wrapper">
								<div className="progress-inner" style={{ width: "91%" }}>
									91%
								</div>
							</div>
						</div>
						<div className="skill">
							<div className="skill-text">
								<div className="skill-text-inner">React / NextJS</div>
							</div>
							<div className="progress-wrapper">
								<div className="progress-inner" style={{ width: "90%" }}>
									90%
								</div>
							</div>
						</div>
						<div className="skill">
							<div className="skill-text">
								<div className="skill-text-inner">Documentation</div>
							</div>
							<div className="progress-wrapper">
								<div className="progress-inner" style={{ width: "87%" }}>
									88%
								</div>
							</div>
						</div>
						<div className="skill">
							<div className="skill-text">
								<div className="skill-text-inner">Git / GitHub</div>
							</div>
							<div className="progress-wrapper">
								<div className="progress-inner" style={{ width: "97%" }}>
									97%
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
