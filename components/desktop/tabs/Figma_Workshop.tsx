function Figma_Workshop() {
	return (
		<div className="p-2 h-full grid justify-items-center items-start gap-6">
			<img
				className="border border-gray-400"
				src="imgs/figma_workshop.jpeg"
				alt="The figma workshop poster"
			/>
			<a
				href="https://forms.gle/FpkydmLX7LCmEvGf7"
				className="bg-blue-500 border-none text-gray-900 font-bold grid place-items-center py-3 px-6 text-center w-full max-w-48 min-w-40 relative -rotate-2 focus:outline-0 after:content-[''] after:absolute after:border after:border-black after:bottom-1 after:left-1 after:w-[calc(100%-1px)] after:h-[calc(100%-1px)] hover:after:bottom-0.5 hover:after:left-0.5"
			>
				Register now!
			</a>
      <div className="h-0 -mt-6">_</div>
		</div>
	);
}

export default Figma_Workshop;
