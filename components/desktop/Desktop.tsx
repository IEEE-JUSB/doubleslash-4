"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Documents from "./tabs/Documents";
import Sponsors from "./tabs/Sponsors";
import Tracks from "./tabs/Tracks";
import Timeline from "./tabs/Timeline";
import FAQ from "./tabs/FAQ";
import Contact from "./tabs/Contact";
import Register from "./tabs/Register";
import Submit from "./tabs/Submit";
import Link from "next/link";

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
} as const;

export default function WindowsDesktop() {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [modalContent, setModalContent] = useState<keyof typeof MODAL_COMPONENTS>("");

	const handleShowModal = (content: keyof typeof MODAL_COMPONENTS) => {
		dialogRef.current?.showModal();
		if (content === "Submit") {
			window.open(
				"https://glittery-mallow-ca5.notion.site/DoubleSlash-4-0-1d042d6d80c2809ea10ff6055de02e9f",
				"_blank",
				"noopener,noreferrer",
			);
		}
		if (content === "Register") {
			window.open("https://doubleslash4.devfolio.co/", "_blank", "noopener,noreferrer");
		} else {
			setModalContent(content);
			dialogRef.current?.showModal();
		}
	};

	return (
		<section className="w-full h-full flex flex-col bg-[url(/imgs/DoubleSlashDithered.png)] bg-contain bg-center bg-no-repeat bg-[#0001] pointer-events-auto">
			<ul className="flex p-4 gap-4">
				<li className="grid place-items-start">
					<Link
						href={"https://doubleslash4.devfolio.co/"}
						target="_blank"
						className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
					>
						<Image
							className="block"
							src="/logos/register.png"
							alt="register for the hackathon"
							width={36}
							height={36}
						/>
						<p className="">Register</p>
					</Link>
				</li>
				<li className="grid place-items-start">
					<button
						onClick={() => handleShowModal("Documents")}
						className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
					>
						<Image
							className="block"
							src="/logos/folder.png"
							alt="documents"
							width={36}
							height={36}
						/>
						<p className="">Documents</p>
					</button>
				</li>
				<li className="ml-auto flex flex-col gap-4 items-center">
					<button
						onClick={() => handleShowModal("Sponsors")}
						className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
					>
						<Image
							className="block"
							src="/logos/folder.png"
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
							src="/logos/folder.png"
							alt="submit"
							width={36}
							height={36}
						/>
						<p className="">Submit</p>
					</Link>
				</li>
			</ul>

			<div className="w-full mt-auto grid place-items-center">
				<ul className="flex w-fit gap-4 p-4 pb-5 items-center justify-center relative after:w-full after:h-[calc(67.7%-18px)] after:absolute after:top-1/3 after:left-0 after:rounded-md after:bg-white after:opacity-10">
					<li className="grid place-items-center">
						<button
							onClick={() => handleShowModal("Tracks")}
							className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
						>
							<Image
								className="block"
								src="/logos/register.png"
								alt="tracks"
								width={36}
								height={36}
							/>
							<p className="">Tracks</p>
						</button>
					</li>
					<li className="grid place-items-center">
						<button
							onClick={() => handleShowModal("Timeline")}
							className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
						>
							<Image
								className="block"
								src="/logos/register.png"
								alt="timeline"
								width={36}
								height={36}
							/>
							<p className="">Timeline</p>
						</button>
					</li>
					<li className="grid place-items-center">
						<button
							onClick={() => handleShowModal("FAQ")}
							className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
						>
							<Image className="block" src="/logos/register.png" alt="faq" width={36} height={36} />
							<p className="">FAQ</p>
						</button>
					</li>
					<li className="grid place-items-center">
						<button
							onClick={() => handleShowModal("Contact")}
							className="flex flex-col items-center cursor-pointer z-20 transition hover:scale-105"
						>
							<Image
								className="block"
								src="/logos/register.png"
								alt="contact"
								width={36}
								height={36}
							/>
							<p className="">Contact</p>
						</button>
					</li>
				</ul>
				<dialog
					ref={dialogRef}
					className="backdrop:bg-gray-800/80 bg-light-yellow outline-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:-translate-y-2/3 w-4/5 sm:w-1/4 h-4/5 sm:h-2/5 z-300 pointer-events-none"
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
								<button onClick={()=>setModalContent("Documents")} className="cursor-pointer border-r-2 border-r-gray-600 px-3">Documents</button>
								<button onClick={()=>setModalContent("Tracks")} className="cursor-pointer border-r-2 border-r-gray-600 px-3">Tracks</button>
								<button onClick={()=>setModalContent("Timeline")} className="cursor-pointer px-3 border-r-2 border-r-gray-600">Timeline</button>
								<button onClick={()=>setModalContent("Contact")} className="cursor-pointer px-3">Contact</button>
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
