import Link from "next/link";
import classes from '../styles/error.module.scss';

export default function ErrorPage() {
  return (
		<div className={classes.error_wrap}>
			<h1 className={classes.error_title}>Erro 404</h1>
			<p>Please <Link href={'/'}><a>go back</a></Link> to previys page</p>
		</div>
	);
} 