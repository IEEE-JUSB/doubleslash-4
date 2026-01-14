"use client";

import { PowerProvider, usePower } from "$/contexts/powerContext";
import { useSound } from "../hooks/useSound";

function LayoutContent({ children }: { children: React.ReactNode }) {
	const { playSound } = useSound("/sounds/button-press.mp3");

	const { togglePower, setTogglePower } = usePower();

	const turnOn = () => {
		setTogglePower((togglePower) => !togglePower);
		playSound();
	};

	return (
		<div
			className={`bg-[url(/imgs/background-narrow.jpeg)] md:bg-[url(/imgs/background-wide.jpeg)] bg-cover bg-center h-full relative overflow-hidden transition-transform duration-700 ${togglePower && "scale-120 lg:scale-160 xl:scale-180"}`}
		>
			<div className="" />
			{/* <img
				src="/imgs/point-to-power.png"
				alt="Power button pointer"
				className={`absolute left-[calc(50%-250px)] bottom-[calc(50%-340px)] w-80 animate-pointer-cycle origin-[50%_50%] opacity-0 transition-opacity duration-700 ${!togglePower && "opacity-100"}`}
			/> */}
			<button
				type="button"
				className={`absolute left-[calc(50%-225px)] bottom-[calc(50%-180px)] w-12 h-12 border border-red-500 after:absolute after:-top-1 after:-right-1 after:w-12 after:h-12 after:border after:border-red-400 transition-opacity duration-700 ${togglePower && "opacity-35"}`}
				onClick={turnOn}
			></button>
			<div className="absolute bottom-[calc(50%+36px)] right-[calc(50%+6px)] translate-x-1/2 translate-y-1/2 clip-monitor h-[268px] w-[392px] bg-[#121010fa] animate-[crtFlicker_0.15s_infinite]">
				<div
					className={`relative w-full h-full clip-monitor overflow-hidden after:absolute after:top-0 after:left-0 after:bg-[#121010fa] after:opacity-0 after:z-2 before:absolute before:top-0 before:left-0 before:z-2 before:bg-size-[100%_2px,3px_100%] before:bg-(--flicker-gradient) scanlines `}
				>
					{children}
				</div>
			</div>
		</div>
	);
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<PowerProvider>
			<LayoutContent>{children}</LayoutContent>
		</PowerProvider>
	);
}
