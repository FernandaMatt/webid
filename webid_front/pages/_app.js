import '../styles/global.css';
import MainContainer from '/components/mainContainer.js';

function MyApp({ Component, pageProps}) {
	return (
		<MainContainer>
			<Component {...pageProps} />
		</MainContainer>
	);
}

export default MyApp
