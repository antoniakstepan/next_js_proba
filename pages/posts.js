import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Main } from '../components/Main';
import Link from 'next/link';

export default function Post({ posts: serverPost }) {
	const router = useRouter();
  const [posts, setPosts] = useState(serverPost);

  useEffect(() => {
    async function load() {
			const response = await fetch(`http://localhost:4200/posts`);
			const data = await response.json();
    
			setPosts(data)
		}

		if(!serverPost) {
			load()
		}
  }, []);


  if (!posts) {
		return (
			<Main>
				<p>LOading posts</p>
			</Main>
		);
	}

  return  (
    <Main title="Post page">
      <h1>
        Post
      </h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${router.query.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Main>
  )
}

Post.getInitialProps = async ({req}) => {
  if (!req) {
    return {posts: null}
  }
  const response = await fetch('http://localhost:4200/posts');
  const posts = await response.json()

  return {
    posts
  }
}