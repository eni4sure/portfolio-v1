import Head from "next/head";
import Image from "next/image";
import { TopNavigationBar, Footer } from "../app/components";

import mywebsitev1PreviewImage from "../public/assets/images/portfolio/portfolio-mywebsitev1.png";
import zurichatPreviewImage from "../public/assets/images/portfolio/portfolio-zurichat.png";
import zurichessPreviewImage from "../public/assets/images/portfolio/portfolio-zurichess.png";
import fixlancerPreviewImage from "../public/assets/images/portfolio/portfolio-fixlancer.png";
import reliantgadgetsPreviewImage from "../public/assets/images/portfolio/portfolio-reliantgadgets.png";
import medicreenPreviewImage from "../public/assets/images/portfolio/portfolio-medicreen.png";
import tertPreviewImage from "../public/assets/images/portfolio/portfolio-tert.png";
import customerpaymePreviewImage from "../public/assets/images/portfolio/portfolio-customerpayme.png";
// import mysvotePreviewImage from "../public/assets/images/portfolio/portfolio-mysvote.png";
import nuledgePreviewImage from "../public/assets/images/portfolio/portfolio-nuledge.png";
import oricertPreviewImage from "../public/assets/images/portfolio/portfolio-oricert.png";
import dryjokesPreviewImage from "../public/assets/images/portfolio/portfolio-dryjokes.png";
import nanadaycarePreviewImage from "../public/assets/images/portfolio/portfolio-nanadaycare.png";
import edsoftaPreviewImage from "../public/assets/images/portfolio/portfolio-edsofta.png";
import domathzPreviewImage from "../public/assets/images/portfolio/portfolio-domathz.png";
import covidchatbotPreviewImage from "../public/assets/images/portfolio/portfolio-covidchatbot.png";
import mfmteensPreviewImage from "../public/assets/images/portfolio/portfolio-mfmteens.png";
import papayaexPreviewImage from "../public/assets/images/portfolio/portfolio-papayaex.png";
import facedetectorPreviewImage from "../public/assets/images/portfolio/portfolio-facedetector.png";
import lmsPreviewImage from "../public/assets/images/portfolio/portfolio-lms.png";

export default function Portfolio({ pageViews }) {
	return (
		<>
			<Head>
				<title>Portfolio &mdash; Eniola Osabiya || @eni4sure</title>
			</Head>

			<TopNavigationBar />

			<div className="portfolio-section-wrapper">
				<div className="portfolio-header">
					<span className="color"> My </span> Portfolio
					<span className="header-caption">
						Some Of the <span className="color"> Works / Projects</span> I&#39;ve done.
					</span>
				</div>
				<div className="portfolio-content">
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={mywebsitev1PreviewImage} placeholder="blur" alt="zurichat-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>Eniola Osabiya - v1</h2>
							<p>This is my personal portfolio website (v1). Built with NextJS 😊</p>
							<div className="button-wrapper">
								<a href="https://www.eniolaosabiya.com" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={zurichatPreviewImage} placeholder="blur" alt="zurichat-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>ZuriChat</h2>
							<p>
								Zuri Chat is Slack for Africa made by Africans. Zuri Chat is a language agnostic application that makes communicating with your team or organization faster, easier and
								more fun.
							</p>
							<div className="button-wrapper">
								<a href="https://zuri.chat/" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={zurichessPreviewImage} placeholder="blur" alt="zurichess-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>ZuriChat - Chess Plugin</h2>
							<p>Chess is a board game played between two players. I worked on a language agnostic chess plugin for zuri.chat with realtime communications and game updates.</p>
							<div className="button-wrapper">
								<a href="https://chess.zuri.chat/chess" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={fixlancerPreviewImage} placeholder="blur" alt="fixlancer-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>Fixlancer</h2>
							<p>Fixlancer is the Fiverr for Nigerians. Fixlancer is an online outsource marketplace that connects buyers and sellers across Nigeria together.</p>
							<div className="button-wrapper">
								<a href="https://fixlancer.com/" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={reliantgadgetsPreviewImage} placeholder="blur" alt="medicreen-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>Reliant Gadgets</h2>
							<p>Reliant Gadgets is a one-stop online techstore to get gadgets, e.g Phones, Laptops, Accessories, Tablets, Cameras, and more.</p>
							<div className="button-wrapper">
								<a href="https://reliantgadgets.com/" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={medicreenPreviewImage} placeholder="blur" alt="medicreen-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>Medicreen</h2>
							<p>
								Medicreen is an AI-powered chatbot that helps you create a medical diagnosis report and a map locator to help locate the closest health facilities (Hospital, Pharmacy)
								to your location.
							</p>
							<div className="button-wrapper">
								<a href="https://medicreen.netlify.app/" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={tertPreviewImage} placeholder="blur" alt="tert-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>Tert</h2>
							<p>Tert is a personal student assistant! Tert has multiple submodules in it, e.g TertClss - for managing a classroom, TertCalc - for calculating CGPA, etc..</p>
							<div className="button-wrapper">
								<a href="https://tert.me" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={customerpaymePreviewImage} placeholder="blur" alt="tert-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>CustomerPay Me</h2>
							<p>
								CustomerPayMe is a debt tracking web/mobile app. CustomerPayMe helps you to keep track of your debtors and sends automatic reminders to remind them to pay their debt.
							</p>
							<div className="button-wrapper">
								<a href="https://customerpay.me/" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* <div class="portfolio">
						<div class="portfolio-image">
							<div class="img-container">
								<Image src={mysvotePreviewImage} placeholder="blur" alt="mysvote-porject-preview-image">
							</div>
						</div>
						<div class="portfolio-text">
							<h2>MySVote</h2>
							<p>
								MySVote is a voting system for individuals and organizations to create, host, organize and
								monitor polls for their personal needs.
							</p>
							<div class="button-wrapper">
								<a href="https://mysvote.com" target="_blank" rel="noreferrer">
									<button>
										<span class="index"> View Project<i class="gg-arrow-right"></i></span>
									</button>
								</a>
							</div>
						</div>
					</div> */}
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={nuledgePreviewImage} placeholder="blur" alt="nuledge-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>Nuledge</h2>
							<p>
								Nuledge is an all-in-one platform to handle school processes without stress. Nuledge can be used to create websites and manage all admin operations of a school online
								with an easy-to-use interface.
							</p>
							<div className="button-wrapper">
								<a href="https://nuledge.com" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={oricertPreviewImage} placeholder="blur" alt="oricert-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>OriCert</h2>
							<p>OriCert is a certificate uploading and verification platform for Organisations and Nigerian Universities. I built this for a freelance project.</p>
							<div className="button-wrapper">
								<a href="https://oricert-ng.000webhostapp.com/" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={dryjokesPreviewImage} placeholder="blur" alt="dryjokes-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>Dry Jokes</h2>
							<p>A simple web app that gives a random &ldquo;dry&rdquo; joke using third-party API services.</p>
							<div className="button-wrapper">
								<a href="https://eni4sure.github.io/dryjokes/" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={nanadaycarePreviewImage} placeholder="blur" alt="nanadaycare-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>Nurturing Minds Daycare</h2>
							<p>
								Nurturing Minds Daycare is a project I worked on while working at Parmz Technologies. It&#39;s a web app to used to manage the curriculum and admin day-to-day
								activities for running a daycare.
							</p>
							<div className="button-wrapper">
								<a href="https://nanadaycare.org/" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={edsoftaPreviewImage} placeholder="blur" alt="edsofta-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>EdSofta</h2>
							<p>
								EdSofta is an app used to prepare for exams like JAMB UTME, WAEC SSCE, and Junior and Senior Secondary School exams in Nigeria. I worked on the Landing Pages during the
								early stage of the startup.
							</p>
							<div className="button-wrapper">
								<a href="https://edsofta.com" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={domathzPreviewImage} placeholder="blur" alt="domathz-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>DoMathz</h2>
							<p>
								Domathz is a math-solver for students all over the world to help them solve mathematical problems and as well provide solutions to the questions to help them understand
								and love Mathematics.
							</p>
							<div className="button-wrapper">
								<a href="https://domathz.web.app" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={covidchatbotPreviewImage} placeholder="blur" alt="covidchatbot-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>Covid-19 ChatBot</h2>
							<p>A covid 19 chatbot I built to get the latest COVID-19 updates using third-party API services with commands.</p>
							<div className="button-wrapper">
								<a href="https://eni4sure.github.io/covid19-chatbot/" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={mfmteensPreviewImage} placeholder="blur" alt="mfmteens-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>MFM Teenage Church HQ</h2>
							<p>I redesigned and built a new website for the Mountain of Fire and Miracles Ministries, Teenage Church HeadQuaters.</p>
							<div className="button-wrapper">
								<a href="https://mfmteens.org/" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={papayaexPreviewImage} placeholder="blur" alt="papayaex-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>A website for @papaya_ex</h2>
							<p>A website built for an instagram influencer @papaya_ex</p>
							<div className="button-wrapper">
								<a href="https://eni4sure.github.io/papaya-ex/" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={facedetectorPreviewImage} placeholder="blur" alt="facedetector-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>A face Expression Detector</h2>
							<p>A web app using FaceApi.js to detect face expression/mood of a person.</p>
							<div className="button-wrapper">
								<a href="https://eni4sure.github.io/face-expression-detector/" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio">
						<div className="portfolio-image">
							<div className="img-container">
								<Image src={lmsPreviewImage} placeholder="blur" alt="lms-porject-preview-image" />
							</div>
						</div>
						<div className="portfolio-text">
							<h2>Library Management System</h2>
							<p>
								This Library Management is a management system for libraries which is to help make the library accessible, easier and fast to use as well as help the librarians manage
								and track the borrowing, stock and receiving of books.
							</p>
							<div className="button-wrapper">
								<a href="https://mfmteens.org/library" target="_blank" rel="noreferrer">
									<button>
										<span className="index">
											View Project
											<i className="gg-arrow-right" />
										</span>
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer pageViews={pageViews} />
		</>
	);
}
