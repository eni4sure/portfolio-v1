import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<title>Eniola Osabiya - @eni4sure</title>
				<meta name="title" content="Eniola Osabiya - @eni4sure" />
				<meta name="description" content="17yo FullStack Dev, #TeensInTech Advocate, DevOps Engineer" />

				{/* Favicon */}
				<link rel="icon" type="image/png" href="/favicon.ico" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://eniolaosabiya.com/" />
				<meta property="og:title" content="Eniola Osabiya - @eni4sure" />
				<meta property="og:description" content="17yo FullStack Dev, #TeensInTech Advocate, DevOps Engineer" />
				{/* <meta property="og:image" content="https://eniolaosabiya.com/assets/images/" /> */}

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://eniolaosabiya.com/" />
				<meta property="twitter:title" content="Eniola Osabiya - @eni4sure" />
				<meta property="twitter:description" content="17yo FullStack Dev, #TeensInTech Advocate, DevOps Engineer" />
				{/* <meta property="twitter:image" content="https://eniolaosabiya.com/assets/images/" /> */}
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
