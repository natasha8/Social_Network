import React from "react";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	HomeIcon,
	UserGroupIcon,
	ViewGridIcon,
} from "@heroicons/react/solid";
import {
	FlagIcon,
	PlayIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
	return (
		<div className="sticky top-0 z-50 bg-black flex items-center p-2 lg:px-5 shadow-md">
			{/*Left*/}
			<div className="flex items-center ">
				<Image
					src="https://i.ibb.co/ZgX0Xtk/pngegg.png"
					width={80}
					height={60}
					layout="fixed"
				/>
				<div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
					<SearchIcon className="h-6 text-pink-600" />
					<input
						className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-pink-600"
						type="text"
						placeholder="Search music"
					/>
				</div>
			</div>
			{/*Center*/}

			<div className="flex justify-center flex-grow">
				<div className="flex space-x-6 md:space-x-2 bg-transparent rounded-full">
					<HeaderIcon Icon={HomeIcon} />
					<HeaderIcon Icon={FlagIcon} />
					<HeaderIcon Icon={PlayIcon} />
					<HeaderIcon Icon={ShoppingCartIcon} />
					<HeaderIcon Icon={UserGroupIcon} />
				</div>
			</div>
			{/*Right*/}
			<div className="flex items-center sm:space-x-2 justify-end">
				<p className="whitespace-nowrap font-semibold pr-3 text-pink-600">
					Natasha Parisella
				</p>

				<ViewGridIcon className=" hidden xl:inline-flex p-2 h-10 w-10 text-pink-600 hover:bg-pink-300 hover:text-black rounded-full" />
				<ChatIcon className="hidden xl:inline-flex p-2 h-10 w-10 text-pink-600 hover:bg-pink-300 hover:text-black rounded-full" />
				<BellIcon className="hidden xl:inline-flex p-2 h-10 w-10 text-pink-600 hover:bg-pink-300 hover:text-black rounded-full" />
				<ChevronDownIcon className="hidden xl:inline-flex p-2 h-10 w-10 text-pink-600 hover:bg-pink-300 hover:text-black rounded-full" />
			</div>
		</div>
	);
};

export default Header;
