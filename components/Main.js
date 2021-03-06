import Link from 'next/link';
import Head from 'next/head';

export function Main({ children, title="next app" }) {
  return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="keywords" content="next.js, react, java script"/>
       	<meta charSet="utf=8"/>
			</Head>
			<nav>
				<Link href={'/'}>
					<a>Home</a>
				</Link>
				<Link href={'/about'}>
					<a>About</a>
				</Link>
				<Link href={`/posts`}>
					<a>Post</a>
				</Link>
			</nav>
			<main>
				{children}
			</main>

			<style jsx global>
				{`
					nav {
						position: fixed;
						height: 60px;
						left: 0;
						top: 0;
						right: 0;
						background: darkblue;
						display: flex;
						justify-content: space-around;
						align-items: center;
					}

					nav a {
						color: #fff;
						text-decoration: none;
					}

					main {
						margin-top: 60px;
						padding: 1rem;
					}
				`}
			</style>
		</>
	);
}