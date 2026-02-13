import Image from "next/image"

export default function Community_Partner() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Image
                src="/tabs/community_partner/gdg_hitk_black.png"
                height={350}
                width={350}
                alt="GDG_HITK"
                className="cursor-pointer transition hover:scale-102"
            />
            <Image
                src="/tabs/community_partner/gdg_uemk.png"
                height={350}
                width={350}
                alt="GDG_UEMK"
                className="cursor-pointer transition hover:scale-102"
            />
            <Image
                src="/tabs/community_partner/react-kolkata copy.png"
                height={250}
                width={250}
                alt="React_Kol"
                className="cursor-pointer transition hover:scale-102"
            />
            <Image
                src="/tabs/community_partner/fof_transparent.png"
                height={200}
                width={200}
                alt="FOF_Transparent"
                className="cursor-pointer transition hover:scale-102"
            />
            <Image
                src="/tabs/community_partner/lnc_community.png"
                height={300}
                width={300}
                alt="LNC_Community"
                className="cursor-pointer transition hover:scale-102"
            />
            <Image
                src="/tabs/community_partner/the_dev_army.png"
                height={200}
                width={200}
                alt="The-Dev-Army"
                className="cursor-pointer transition hover:scale-102"
            />
        </div>
    )
}