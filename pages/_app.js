import React from "react";
import Head from "next/head";
import Script from "next/script";
import Router from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const [isLoading, setIsLoading] = React.useState(true);
	const [pageViews, setPageViews] = React.useState(0);

	const removeLoading = () => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	React.useEffect(() => {
		removeLoading();
		Router.events.on("routeChangeStart", () => setIsLoading(true));
		Router.events.on("routeChangeComplete", () => removeLoading());
		Router.events.on("routeChangeError", () => removeLoading());

		// Count page views
		const fetchPageViews = async () => {
			const res = await fetch("https://api.countapi.xyz/hit/eniolaosabiya.com");
			const json = await res.json();
			setPageViews(json.value);
		};
		fetchPageViews();
	}, []);

	return (
		<>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<title>Eniola Osabiya || @eni4sure</title>
				<meta name="title" content="Eniola Osabiya || @eni4sure" />
				<meta name="description" content="17yo FullStack Dev, #TeensInTech Advocate, DevOps Engineer" />

				{/* Favicon */}
				<link rel="icon" type="image/png" href="/favicon.ico" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.eniolaosabiya.com/" />
				<meta property="og:title" content="Eniola Osabiya || @eni4sure" />
				<meta property="og:description" content="17yo FullStack Dev, #TeensInTech Advocate, DevOps Engineer" />
				<meta property="og:image" content="https://www.eniolaosabiya.com/assets/site-preview.png" />
				<meta property="og:updated_time" content="2021-12-06T09:23:21.056Z" />
				{/* <meta property="og:updated_time" content={new Date().toISOString()} /> */}

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.eniolaosabiya.com/" />
				<meta property="twitter:title" content="Eniola Osabiya || @eni4sure" />
				<meta property="twitter:description" content="17yo FullStack Dev, #TeensInTech Advocate, DevOps Engineer" />
				<meta property="twitter:image" content="https://www.eniolaosabiya.com/assets/site-preview.png" />
			</Head>

			<>{isLoading ? <div className="page-switch-animation" /> : <Component pageViews={pageViews} {...pageProps} />}</>

			<Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-KHBCY4MPXZ" />
			<Script strategy="lazyOnload" src="/assets/js/analytics.js" />
		</>
	);
}

export default MyApp;
