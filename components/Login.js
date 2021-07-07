import { signIn } from "next-auth/client";
import Image from "next/image";

const Login = () => {
	return (
		<div className="h-100 grid place-items-center bg-black ">
			<Image
				src="https://i.ibb.co/ZgX0Xtk/pngegg.png"
				height={400}
				width={400}
				objectFit="contain"
			/>
			<h1
				className="p-5 bg-pink-600 rounded-full text-black text-center w-1/6 cursor-pointer"
				onClick={signIn}
			>
				SIGN IN
			</h1>
		</div>
	);
};

export default Login;
