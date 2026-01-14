"use client";

import { usePower } from "$/contexts/powerContext";
import LogoAnimation from "$/components/dvd-animation/animation";

export default function HomePage() {
	const { togglePower } = usePower();

	return (
		<div className="text-white">
			{/* the entire div container is this one, use conditional formatting for On and Off states */}
			{togglePower ? 
				<div className="pl-3"> {/* When screen is ON */}
					Screen is on
				</div>
				:
				<div> {/* When screen is OFF */}
					<LogoAnimation />
				</div>
			}
		</div>
	);
}
