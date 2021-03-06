import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

export default function Home({ session }) {
	if (!session) return <Login />;

	return (
		<div>
			<Head>
				<title>Social Network</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>
				<Sidebar />
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	//get the user
	const session = await getSession(context);
	return {
		props: { session },
	};
}
