"use client";

import DvdLogo from "./logo";
import { useEffect, useRef, useState } from "react";

const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff", "#ffffff"];
const logo_width = 90;
const logo_height = 40;

export default function LogoAnimation() {
    const [color, setColor] = useState(colors[2]);

    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    const pos = useRef({ x: 100, y: 100 });
    const vel = useRef({ x: 0.6, y: 0.6 });

    useEffect(() => {
        let animationFrameId: number;

        const updatePosition = () => {
            if (!containerRef.current || !logoRef.current) return;

            const { clientWidth: parentWidth, clientHeight: parentHeight } = containerRef.current;

            pos.current.x += vel.current.x;
            pos.current.y += vel.current.y;

            if (pos.current.x + logo_width >= 382 || pos.current.x <= 10) {
                vel.current.x *= -1;
                changeColor();
            }

            if (pos.current.y + logo_height >= 265 || pos.current.y <= 10) {
                vel.current.y *= -1;
                changeColor();
            }

            logoRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;

            animationFrameId = requestAnimationFrame(updatePosition);
        };

        const changeColor = () => {
            setColor((prev) => {
                let newColor = prev;
                while (newColor === prev) {
                    newColor = colors[Math.floor(Math.random() * colors.length)];
                }
                return newColor;
            });
        };

        animationFrameId = requestAnimationFrame(updatePosition);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div ref={containerRef} className="w-full h-screen bg-black overflow-hidden relative">
            <div
                ref={logoRef}
                className="absolute top-0 left-0 will-change-transform"
                style={{ width: logo_width, height: logo_height }}
            >
                <DvdLogo color={color} className="w-full h-full" />
            </div>
        </div>
    );
}