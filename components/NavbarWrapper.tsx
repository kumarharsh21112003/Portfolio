"use client";

import { TubelightNavbar } from "@/components/ui/TubelightNavbar";
import { Home, Briefcase, Code, GraduationCap, Mail, Folder, Award } from "lucide-react";

interface NavbarWrapperProps {
    isLoading?: boolean;
}

export default function NavbarWrapper({ isLoading = false }: NavbarWrapperProps) {
    const navItems = [
        { name: "Home", url: "#home", icon: Home },
        { name: "Skills", url: "#skills", icon: Code },
        { name: "Work", url: "#work", icon: Folder },
        { name: "Experience", url: "#experience", icon: Briefcase },
        { name: "Education", url: "#education", icon: GraduationCap },
        { name: "Certifications", url: "#certifications", icon: Award },
        { name: "Contact", url: "#contact", icon: Mail },
    ];

    // Hide navbar during loading
    if (isLoading) return null;

    return <TubelightNavbar items={navItems} />;
}
