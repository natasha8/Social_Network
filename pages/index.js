import Head from "next/head";
import Header from "../components/Header";
export default function Home() {
	return (
		<div className="min-h-screen py-2">
			<Head>
				<title>Social Network</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			{/* <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">SOCIAL NETWORK</h1>
			</main>

			<footer className="flex items-center justify-center w-full h-24 border-t">
				<a
					className="flex items-center justify-center"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by INCPTD
				</a>
			</footer> */}
		</div>
	);
}

export async function getServerSideProps(contex) {
	//get the user
	const session = await getSession(context);
}
