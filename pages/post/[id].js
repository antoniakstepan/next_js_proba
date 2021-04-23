import { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Main } from '../../components/Main';


export default function Post({ post: serverPost }) {
  const router = useRouter()

	const [post, setPost] = useState(serverPost);

	useEffect(() => {
		async function load() {
			const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
			const data = await response.json();
			console.log(data)
			setPost(data)
		}

		if(!serverPost) {
			load()
		}
	}, [])

	if (!post) {
		return (
			<Main>
				<p>LOading...</p>
			</Main>
		);
	}
	return (
		<Main>
			<h1>{post.title}</h1>
			<hr/>
			<p>{post.body}</p>

			<Link href={'/posts'}>
				<a>Back to posts</a>
			</Link>
		</Main>
	);
}

Post.getInitialProps = async ({ query, req }) => {
	if (!req) {
		return { post: null }
	}
	const response = await fetch(`http://localhost:4200/posts/${query.id}`);
	const post = await response.json()

	return {
		post
	}
}

// export async function getServerSideProps({query, req}) {
// 	if (!req) {
// 		return { post: null }
// 	}
// 	const response = await fetch(`http://localhost:4200/posts/${query.id}`);
// 	const post = await response.json()

// 	console.log(post)
// 	return {props: {post}}
// }