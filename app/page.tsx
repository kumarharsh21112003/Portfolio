"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import NavbarWrapper from "@/components/NavbarWrapper";
import HandsOn from "@/components/HandsOn";

import Education from "@/components/Education";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            {loading && <Preloader />}
            <NavbarWrapper isLoading={loading} />
            <main className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
                <Hero />
                <HandsOn />
                <Skills />
                <Work />
                <Experience />
                <Education />
                <Certifications />
                <Contact />
            </main>
        </>
    );
}
