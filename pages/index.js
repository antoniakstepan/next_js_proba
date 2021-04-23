import Link from "next/link";
import { Main } from "../components/Main";

export default function Home() {
  return (
		<Main>
			<h1>Home page</h1>
			<Link href={`/posts`}><a>Go to Posts</a></Link>
		</Main>
	);
}