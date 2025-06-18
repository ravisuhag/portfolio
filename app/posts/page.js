import Header from "../../components/header";
import List from "../../components/list";
import { getAllPostList } from "../../lib/posts";

export const metadata = {
	title: "Ravi Suhag",
	description: "Ravi Suhag's personal homepage",
};

export default async function Posts() {
	const list = await getAllPostList();
	return (
		<div className="container">
			<Header />
			<main className="main">
				<h1>Posts</h1>
				<p>
					I indulge in writing, mostly about my work to share my understanding
					and thoughts, highlighting the process and choices that went into a
					particular project. The remaining are thought-centric about my
					perspective and opinions.
				</p>
				<List contents={list} />
			</main>
		</div>
	);
}
