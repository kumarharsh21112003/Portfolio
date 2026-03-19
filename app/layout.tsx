import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plus-jakarta",
    weight: ["300", "400", "500", "600", "700", "800"],
});

// Using Plus Jakarta Sans for both until General Sans is provided
const generalSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-general-sans",
    weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Kumar Harsh - Cloud & ML Engineer",
    description: "Portfolio of Kumar Harsh - CSE student at KIIT University, Cloud Computing, Machine Learning, and Full Stack Development. AWS and Google internship experience.",
    keywords: ["Kumar Harsh", "Portfolio", "Cloud Engineer", "ML Engineer", "Full Stack Developer", "KIIT University", "AWS", "Google"],
    authors: [{ name: "Kumar Harsh" }],
    openGraph: {
        title: "Kumar Harsh - Cloud & ML Engineer",
        description: "Portfolio showcasing Cloud, ML, and Full Stack development projects",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${plusJakarta.variable} ${generalSans.variable}`}>
            <body className="antialiased" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
