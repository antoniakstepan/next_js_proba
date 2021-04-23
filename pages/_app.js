import '../styles/main.css'

export default function myApp({ Component, pageProps}) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}