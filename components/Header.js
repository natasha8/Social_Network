import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

const Header = () => {
	return (
		<div>
			{/*Left*/}
			<div>
				<Image
					src="https://i.ibb.co/ZgX0Xtk/pngegg.png"
					width={160}
					height={140}
					layout="fixed"
				/>
				<div>
					<SearchIcon />
					<input type="text" placeholder="Search music" />
				</div>
			</div>
			{/*Center*/}
			{/*Right*/}
		</div>
	);
};

export default Header;
