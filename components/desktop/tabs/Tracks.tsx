import { Book, FolderLock, Globe, HeartPulse, HouseWifi, ShieldUser, Sprout } from "lucide-react";
import Image from "next/image";
import React from "react";

function Tracks() {
	return (
		<div className="p-4 flex flex-col items-center gap-10">
			<div className="flex justify-between items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <Globe size={48} />
          <h3>Web3</h3>
        </div>
        <p className="text-right leading-none">Explore the future of application development by creating blockchain-powered systems that are secure, transparent, and decentralized.</p>
      </div>
			<div className="flex justify-between items-center gap-8">
        <p className="text-left leading-none">Build digital solutions that connect minds, remove barriers, and open pathways to the future of education accessibility.</p>
        <div className="flex flex-col items-center gap-1">
          <Book size={48} />
          <h3>Education</h3>
        </div>
      </div>
			<div className="flex justify-between items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <Sprout size={48} />
          <h3 className="leading-none text-center">Green Technology</h3>
        </div>
        <p className="text-right leading-none">Create tools that optimise innovation which promises a cleaner and greener future.</p>
      </div>
			<div className="flex justify-between items-center gap-8">
        <p className="text-left leading-none">Empower healthcare facilities with smarter systems and advanced technology that support better outcomes and well-being.</p>
        <div className="flex flex-col items-center gap-1">
          <HeartPulse size={48} />
          <h3>Healthcare</h3>
        </div>
      </div>
			<div className="flex justify-between items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <ShieldUser size={48} />
          <h3 className="leading-none text-center">Women Safety</h3>
        </div>
        <p className="text-right leading-none">Design technology that reinforces security and prioritize a secure world for everyone. </p>
      </div>
			<div className="flex justify-between items-center gap-8">
        <p className="text-left leading-none">Address emerging threats through resilient systems that safeguard information and user rights.</p>
        <div className="flex flex-col items-center gap-1">
          <FolderLock size={48} />
          <h3 className="text-center leading-none">Cyber Security</h3>
        </div>
      </div>
			<div className="flex justify-between items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <HouseWifi size={48} />
          <h3 className="leading-none text-center">Internet Of Things</h3>
        </div>
        <p className="text-right leading-none">Build innovative IoT systems that strengthen connectivity and enhance experiences. </p>
      </div>
			<div className="flex justify-between items-center gap-8">
        <p className="text-left leading-none">Address emerging threats through resilient systems that safeguard information and user rights.</p>
        <div className="flex flex-col items-center gap-1">
          <Image src={"/logos/DoubleSlash_Crest_Inverted.png"} alt="DoubleSlash Logo" width={48} height={48} />
          <h3 className="text-center leading-none">Slash (Open)</h3>
        </div>
      </div>
		</div>
	);
}

export default Tracks;
