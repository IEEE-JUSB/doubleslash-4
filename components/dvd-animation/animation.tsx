"use client";

import { useEffect, useRef, useState } from "react";

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
}

export default function LogoAnimation() {
    const isMd = useMediaQuery("(min-width: 768px)");

    const logo_width = isMd ? 60 : 50;
    const logo_height = isMd ? 60 : 50;

    const BOUNDARY_X = isMd ? 390: 365; 
    const BOUNDARY_Y = isMd ? 270 : 270;

    const DIFF_BOUND_X = isMd ? 0: 33;

    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: 100, y: 100 });
    const vel = useRef({ x: 0.7, y: 0.7 });

    useEffect(() => {
        let animationFrameId: number;

        const updatePosition = () => {
            if (!containerRef.current || !logoRef.current) return;

            pos.current.x += vel.current.x;
            pos.current.y += vel.current.y;

            if (pos.current.x + logo_width >= BOUNDARY_X || pos.current.x <= DIFF_BOUND_X) {
                vel.current.x *= -1;
                pos.current.x = Math.max(10, Math.min(pos.current.x, BOUNDARY_X - logo_width));
            }

            if (pos.current.y + logo_height >= BOUNDARY_Y || pos.current.y <= 10) {
                vel.current.y *= -1;
                pos.current.y = Math.max(10, Math.min(pos.current.y, BOUNDARY_Y - logo_height));
            }

            logoRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
            animationFrameId = requestAnimationFrame(updatePosition);
        };

        animationFrameId = requestAnimationFrame(updatePosition);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isMd, logo_width, logo_height, BOUNDARY_X, BOUNDARY_Y]); 

    return (
        <div ref={containerRef} className="w-full h-full relative">
            <div
                ref={logoRef}
                className="absolute top-0 left-0 will-change-transform"
                style={{ width: logo_width, height: logo_height }}
            >
                <img 
                    src="/logos/DoubleSlash_Crest.png" 
                    alt="Bouncing Logo"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
}
