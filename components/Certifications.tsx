"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { 
    SiAmazonwebservices
} from "react-icons/si";
import { 
    FaShieldAlt, 
    FaCode, 
    FaGraduationCap, 
    FaHospital, 
    FaUsers,
    FaCertificate,
    FaCloud
} from "react-icons/fa";

interface Certification {
    name: string;
    issuer: string;
    icon: JSX.Element;
    color: string;
}

const CERTIFICATIONS: Certification[] = [
    {
        name: "AWS Cloud Foundations",
        issuer: "Amazon Web Services",
        icon: <SiAmazonwebservices />,
        color: "#FF9900",
    },
    {
        name: "AWS Cloud Architecting",
        issuer: "Amazon Web Services",
        icon: <SiAmazonwebservices />,
        color: "#FF9900",
    },
    {
        name: "IBM Cloud Essentials V3",
        issuer: "IBM",
        icon: <FaCloud />,
        color: "#0F62FE",
    },
    {
        name: "Cybersecurity Analyst Job Simulation",
        issuer: "Tata Consultancy Services",
        icon: <FaShieldAlt />,
        color: "#0076CE",
    },
    {
        name: "Software Engineering Job Simulation",
        issuer: "Wells Fargo",
        icon: <FaCode />,
        color: "#D71E28",
    },
    {
        name: "Introduction to Cyber Security",
        issuer: "Infosys",
        icon: <FaShieldAlt />,
        color: "#007CC3",
    },
    {
        name: "Cyber Security Awareness Program",
        issuer: "NIELIT",
        icon: <FaShieldAlt />,
        color: "#00A651",
    },
    {
        name: "Health System Development Policy & Research",
        issuer: "Imperial College London",
        icon: <FaHospital />,
        color: "#003E74",
    },
    {
        name: "Health System Development Introduction",
        issuer: "Imperial College London",
        icon: <FaHospital />,
        color: "#003E74",
    },
    {
        name: "Preparing to Manage Human Resources",
        issuer: "University of Minnesota",
        icon: <FaUsers />,
        color: "#7A0019",
    },
    {
        name: "Managing Employee Performance",
        issuer: "University of Minnesota",
        icon: <FaUsers />,
        color: "#7A0019",
    },
    {
        name: "Introduction to GitOps (LFS169)",
        issuer: "The Linux Foundation",
        icon: <FaCode />,
        color: "#003366",
    },
];

export default function Certifications() {
    const { ref, inView } = useScrollReveal();

    return (
        <section id="certifications" className="relative py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4">
                            My <span className="gradient-text">Certifications</span>
                        </h2>
                        <p className="text-lg text-white/60">Professional certifications and achievements</p>
                    </div>

                    {/* Certifications Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {CERTIFICATIONS.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="glass-strong rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
                            >
                                {/* Glow effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"
                                    style={{ background: cert.color }}
                                />

                                {/* Content */}
                                <div className="relative z-10 flex items-start gap-4">
                                    {/* Icon */}
                                    <div
                                        className="text-3xl flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                        style={{ color: cert.color }}
                                    >
                                        {cert.icon}
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h3 className="text-base font-semibold text-white/90 group-hover:text-white transition-colors mb-1">
                                            {cert.name}
                                        </h3>
                                        <p className="text-sm text-white/50">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                </div>

                                {/* Badge shine effect */}
                                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
