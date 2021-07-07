const HeaderIcon = ({ Icon, active }) => {
	return (
		<div
			className="flex items-center cursor-pointer 
        md:px-10 sm:h-12 md:hover:bg-pink-100 rounded-xl 
        active:border-b-2 active:border-black
        "
		>
			<Icon
				className={`h-5 text-pink-600 group-hover:text-green-600 ${
					active && "text-green-600"
				}`}
			/>
		</div>
	);
};

export default HeaderIcon;
