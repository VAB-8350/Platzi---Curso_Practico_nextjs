import '@styles/global.css';
import Header from '@components/Header';
import Script from 'next/script';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

function MyApp({ Component, pageProps }) {
	const initialState = useInitialState();

	return (
		<AppContext.Provider value={initialState}>
			<Header>
				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-2BP5QG48WL"></Script>
				<Script
					id="google-analytics"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2BP5QG48WL');`,
					}}
				/>
			</Header>
			<Component {...pageProps} />
		</AppContext.Provider>
	);
}

export default MyApp;
