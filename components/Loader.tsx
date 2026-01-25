"use client";

import { useState, useEffect } from 'react';
import RetroLoader from './LoaderAnimation';

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 7000); // 5 seconds

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) {
            document.body.classList.add('backdrop-blur-3xl');
        } else {
            document.body.classList.remove('backdrop-blur-3xl');
        }
    }, [loading]);

    if (loading) {
        return (
            <RetroLoader/>
        );
    }

    return <>{children}</>;
}