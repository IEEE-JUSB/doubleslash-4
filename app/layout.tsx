import type { Metadata } from "next";
import { Geist, Geist_Mono, VT323 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { PowerProvider } from "$/contexts/powerContext";
import { LayoutContent } from "$/components/base-layout";
import LoaderWrapper from "$/components/Loader";

import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const vt323 = VT323({
	variable: "--font-vt323",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "DoubleSlash 4.0",
	description:
		"Official website for DoubleSlash 4.0, an offline hackathon organised by IEEE Jadavpur University Student Branch.",
	applicationName: "DoubleSlash 4.0",
	keywords: [
		"doubleslash 4.0",
		"double slash 4.0",
		"double slash4.0",
		"doubleslash",
		"hackathon",
		"jadavpur",
		"jadavpur university",
		"kolkata",
		"coding",
		"programming",
		"software",
	],
	openGraph: {
		title: "DoubleSlash 4.0 | 36-Hour Offline Hackathon at Jadavpur University",
		description:
			"DoubleSlash 4.0 is a 36-hour offline hackathon organised by IEEE Jadavpur University Student Branch in Kolkata.Build, compete, and win exciting prizes.",
		url: "https://doubleslash4.ieee-jaduniv.in",
		siteName: "DoubleSlash 4.0",
		type: "website",
	},
	alternates: {
		canonical: "https://doubleslash4.ieee-jaduniv.in",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${vt323.variable} antialiased bg-cover bg-[url(/imgs/background-wide.jpeg)] h-screen`}
			>
				<div className="backdrop-blur-3xl w-full h-full absolute top-0 left-0 -z-10"></div>

				<PowerProvider>
					<LoaderWrapper>
						<LayoutContent>
							{children}
							<Analytics />
						</LayoutContent>
					</LoaderWrapper>
				</PowerProvider>
			</body>
		</html>
	);
}
