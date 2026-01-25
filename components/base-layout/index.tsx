"use client";

import { usePower } from "$/contexts/powerContext";
import { useSound } from "$/hooks/useSound";

import DevfolioButton from "$/components/devfolio";

export function LayoutContent({ children }: { children: React.ReactNode }) {
	const { playSound } = useSound("/sounds/button-press.mp3");
	const { togglePower, setTogglePower } = usePower();

	const turnOn = () => {
		setTogglePower((togglePower) => !togglePower);
		playSound();
	};

	return (
		<div
			className={`bg-[url(/imgs/background-narrow.jpeg)] md:bg-[url(/imgs/background-wide.jpeg)] bg-center bg-no-repeat bg-size-[700px_1214px] md:bg-size-[1439px_809px] h-full relative overflow-hidden transition-transform duration-700 lg:scale-107 after:block after:absolute after:h-[710px] after:w-[1224px] md:after:h-[819px] md:after:w-[1449px] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:inset-0 after:[background:radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] after:blur-2xl after:overflow-hidden ${togglePower && "scale-120 lg:scale-160 xl:scale-160"}`}
		>
			<div className="absolute left-[calc(50%-160px)] bottom-[calc(100%-180px)] z-500" >
				{/* <p className="text-white">
					USE THIS TO CHECK IF THE POSITION IS RIGHT IN DEV
				</p> */}
				<DevfolioButton />
			</div>
			<div className={`absolute font-sans text-sm left-[calc(50%-180px)] sm:left-[calc(50%-210px)] bottom-[calc(50%-125px)] w-40 text-light-yellow origin-[50%_50%] opacity-0 transition-opacity duration-700 ${!togglePower && "opacity-100"}`}
			>
				Click here!
			</div>
			{/* <img
				src="/imgs/point-to-power-arrow.png"
				alt="Power button pointer"
				className={`absolute left-[calc(50%-240px)] bottom-[calc(50%-300px)] w-40 animate-pointer-cycle origin-[50%_50%] opacity-0 transition-opacity duration-700 ${!togglePower && "opacity-100"}`}
			/> */}
			<button
				type="button"
				className={`absolute left-[calc(50%-165px)] md:left-[calc(50%-190px)] bottom-[calc(50%-139px)] border z-10 h-3 w-5 ${togglePower ? "border-green-500/80 bg-green-500/60" : "bg-red-600 border-red-500/40 animate-[pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite]"} transition-opacity duration-700 cursor-pointer ${togglePower && "opacity-35"}`}
				onClick={turnOn}
			></button>
			<div className="absolute bottom-[calc(50%+36px)] right-[calc(50%+6px)] translate-x-1/2 translate-y-1/2 clip-monitor h-[268px] w-[392px] bg-[#121010fa] animate-[crtFlicker_0.15s_infinite] z-10">
				<div
					className={`relative w-full h-full clip-monitor overflow-hidden after:absolute after:top-0 after:left-0 after:bg-[#121010fa] after:opacity-0 after:z-20 before:absolute before:top-0 before:left-0 before:z-20 before:bg-size-[100%_2px,3px_100%] before:bg-(--flicker-gradient) scanlines pointer-events-none`}
				>
					{children}
				</div>
			</div>
		</div>
	);
}
