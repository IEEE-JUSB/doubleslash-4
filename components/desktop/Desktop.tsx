"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Documents from "./tabs/Documents";
import Sponsors from "./tabs/Sponsors";
import Tracks from "./tabs/Tracks";
import Timeline from "./tabs/Timeline";
import FAQ from "./tabs/FAQ";
import Contact from "./tabs/Contact";
import Register from "./tabs/Register";
import Submit from "./tabs/Submit";
import Whatsapp from "./tabs/Whatsapp";
import Link from "next/link";
import Community_Partner from "./tabs/Community_Partner";
import Figma_Workshop from "./tabs/Figma_Workshop";

const MODAL_COMPONENTS = {
	"": <></>,
	"Register": <Register />,
	"Documents": <Documents />,
	"Sponsors": <Sponsors />,
	"Tracks": <Tracks />,
	"Timeline": <Timeline />,
	"FAQ": <FAQ />,
	"Contact": <Contact />,
	"Submit": <Submit />,
	"Whatsapp": <Whatsapp />,
	"Community Partner": <Community_Partner />,
	"Workshop": <Figma_Workshop />
} as const;

export default function WindowsDesktop() {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [modalContent, setModalContent] = useState<keyof typeof MODAL_COMPONENTS>("");
	const [countdown, setCountdown] = useState('00:00:00');

	useEffect(() => {
		const deadline = new Date('2026-02-20T23:59:59').getTime(); // set yiour deadline here

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = deadline - now;

			if (distance < 0) {
				setCountdown('00:00:00');
				clearInterval(interval);
				return;
			}

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setCountdown(
				`${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
			);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const handleShowModal = (content: keyof typeof MODAL_COMPONENTS) => {
		dialogRef.current?.showModal();
		if (content === "Submit") {
			window.open("https://glittery-mallow-ca5.notion.site/DoubleSlash-4-0-1d042d6d80c2809ea10ff6055de02e9f", "_blank", "noopener,noreferrer");
		} else if (content === "Register") {
			window.open("https://doubleslash4.devfolio.co/", "_blank", "noopener,noreferrer");
		} else if (content === "Whatsapp") {
			window.open("https://chat.whatsapp.com/FL2csyu6FjE5Wzf8m20qdo", "_blank", "noopener,noreferrer");
		} else {
			setModalContent(content);
			dialogRef.current?.showModal();
		}
	};

	return (
		<section className="w-full h-full flex flex-col bg-[url(/imgs/DoubleSlashDithered.png)] bg-contain bg-center bg-no-repeat bg-[#0001] pointer-events-auto">
			<ul className="flex pt-5 p-2 px-0 md:p-4 gap-2 md:gap-4">
				<li className="grid place-items-start">
					<Link
						href={"https://doubleslash4.devfolio.co/"}
						target="_blank"
						className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
					>
						<Image
							className="block pt-1"
							src="/logos/devfolio.png"
							alt="register for the hackathon"
							width={28}
							height={28}
						/>
						<p className="">Register</p>
					</Link>
					<Link
						href={"https://chat.whatsapp.com/FL2csyu6FjE5Wzf8m20qdo"}
						target="_blank"
						className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
					>
						<Image
							className="block"
							src="/logos/whatsapp.png"
							alt="Click to join the Whatsapp group"
							width={34}
							height={34}
						/>
						<p className="">Whatsapp</p>
					</Link>
				</li>
				<li className="grid place-items-start">
					<div className="flex flex-col items-center cursor-not-allowed z-20">
						<Image
							className="block invert-100"
							src="/logos/clock.png"
							alt="Idea submission deadline"
							width={37}
							height={37}
						/>
						<div className="text-[10px] text-center px-1 rounded tracking-wider leading-tight">
							<p className="mb-0">Deadline:</p>
							<p className="text-[13px] ">
								{countdown}
							</p>
						</div>
					</div>
				</li>
				<li className="grid place-items-center">
					<button
						onClick={() => handleShowModal("Community Partner")}
						className="flex flex-col items-center max-w-10 cursor-pointer z-20 transition hover:scale-105"
					>
						<Image
							className="block"
							src="/icons/folder-new.png"
							alt="community_partner"
							width={36}
							height={36}
						/>
						<p className="leading-3 pt-1 px-0 text-[15px]">Community Partner</p>
					</button>
					<button
						onClick={() => handleShowModal("Workshop")}
						className="flex flex-col w-fit justify-center items-center max-w-10 cursor-pointer z-20 transition hover:scale-105"
					>
						<Image
							className="block"
							src="/icons/figma-logo-final.png"
							alt="figma_workshop"
							width={36}
							height={36}
						/>
						<p className="leading-3 pt-1 px-0 text-[15px]">Figma Workshop</p>
					</button>
				</li>
				<li className="grid place-items-center ml-auto mr-8 md:mr-0">
					<button
						onClick={() => handleShowModal("Sponsors")}
						className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
					>
						<Image
							className="block"
							src="/icons/folder-new.png"
							alt="sponsors"
							width={36}
							height={36}
						/>
						<p className="">Sponsors</p>
					</button>
					<Link
						href={
							"https://glittery-mallow-ca5.notion.site/DoubleSlash-4-0-1d042d6d80c2809ea10ff6055de02e9f"
						}
						target="_blank"
						className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
					>
						<Image
							className="block filter-[hue-rotate(130deg)]"
							src="/icons/folder-new.png"
							alt="submit"
							width={36}
							height={36}
						/>
						<p className="">Submit</p>
					</Link>
				</li>
			</ul>

			<div className="w-full mt-auto grid place-items-center">
				<ul className="flex w-fit gap-4 p-4 pb-5 items-center justify-center relative after:w-full after:h-[calc(67.7%-18px)] after:absolute after:top-1/3 after:left-0 after:rounded-md after:bg-white after:opacity-10 mr-6 md:mr-0">
					<li className="grid place-items-center">
						<button
							onClick={() => handleShowModal("Documents")}
							className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
						>
							<Image
								className="block"
								src="/icons/folder-new.png"
								alt="tracks"
								width={26}
								height={26}
							/>
							<p className="text-[13px]">Documents</p>
						</button>
					</li>
					<li className="grid place-items-center">
						<button
							onClick={() => handleShowModal("Tracks")}
							className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
						>
							<Image
								className="block"
								src="/icons/notepad.png"
								alt="tracks"
								width={24}
								height={24}
							/>
							<p className="text-[13px]">Tracks</p>
						</button>
					</li>
					<li className="grid place-items-center">
						<button
							onClick={() => handleShowModal("Timeline")}
							className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
						>
							<Image
								className="block"
								src="/icons/calender.png"
								alt="timeline"
								width={24}
								height={24}
							/>
							<p className="text-[13px]">Timeline</p>
						</button>
					</li>
					<li className="grid place-items-center">
						<button
							onClick={() => handleShowModal("FAQ")}
							className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
						>
							<Image
								className="block"
								src="/imgs/root-sit.png"
								alt="faq"
								width={19}
								height={19}
							/>
							<p className="leading-4 text-[13px]">FAQ</p>
						</button>
					</li>
					<li className="grid place-items-center">
						<button
							onClick={() => handleShowModal("Contact")}
							className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
						>
							<Image
								className="block"
								src="/icons/telephone.png"
								alt="contact"
								width={20}
								height={20}
							/>
							<p className="text-[13px]">Contact</p>
						</button>
					</li>
				</ul>
				<dialog
					ref={dialogRef}
					className="backdrop:bg-gray-800/80 bg-light-yellow outline-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-2/3 w-4/5 lg:w-1/3 h-4/5 lg:h-3/5 z-300 pointer-events-none"
				>
					<div className="flex flex-col text-xl h-full scanlines">
						<nav className="flex flex-col w-full">
							<div className="flex justify-between pl-4 bg-ochre">
								<h3 className="text-2xl">{modalContent}</h3>
								<button
									onClick={() => dialogRef.current?.close()}
									className="outline-none bg-brown px-2 text-light-yellow pointer-events-auto cursor-pointer"
								>
									X
								</button>
							</div>
							<div className="grid grid-cols-4 bg-orange pointer-events-auto">
								<button onClick={() => setModalContent("Documents")} className="cursor-pointer border-r-2 border-r-gray-600 px-3">Documents</button>
								<button onClick={() => setModalContent("Tracks")} className="cursor-pointer border-r-2 border-r-gray-600 px-3">Tracks</button>
								<button onClick={() => setModalContent("Timeline")} className="cursor-pointer px-3 border-r-2 border-r-gray-600">Timeline</button>
								<button onClick={() => setModalContent("Contact")} className="cursor-pointer px-3">Contact</button>
							</div>
						</nav>
						<div className="sm:p-2 overflow-y-auto pointer-events-auto h-full">
							{MODAL_COMPONENTS[modalContent]}
						</div>
					</div>
				</dialog>
			</div>
		</section>
	);
}
