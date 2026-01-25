"use client";
import { useEffect, useState } from "react";

import { usePower } from "$/contexts/powerContext";
import LogoAnimation from "$/components/dvd-animation/animation";
import DosTerminal from "$/components/dos-screen-animation/page";
import Desktop from "$/components/desktop/Desktop";
import RetroLoader from "$/components/LoaderAnimation";

export default function HomePage() {
	const { togglePower } = usePower();

	const [homeOnScreen, setHomeOnScreen] = useState(false);
	const showHome = () => setHomeOnScreen(true);

	return (
		<>
			{togglePower ? (
				<div className="w-full h-full pl-13 pr-5 pt-4 md:pl-8 md:pt-5 text-white z-20">
					{homeOnScreen ? <Desktop /> : <DosTerminal onComplete={showHome} />}
				</div>
			) : (
				<div>
					<LogoAnimation />
				</div>
			)}
		</>
	);
}
