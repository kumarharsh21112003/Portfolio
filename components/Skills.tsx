"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
    SiPython,
    SiCplusplus,
    SiJavascript,
    SiTypescript,
    SiKotlin,
    SiAmazonwebservices,
    SiDocker,
    SiKubernetes,
    SiTerraform,
    SiLinux,
    SiGit,
    SiTensorflow,
    SiPytorch,
    SiOpencv,
    SiNumpy,
    SiPandas,
    SiReact,
    SiNodedotjs,
    SiFlask,
    SiDjango,
    SiFirebase,
    SiAndroid,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiSqlite,
    SiRedis,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

interface Skill {
    name: string;
    icon: JSX.Element;
    color: string;
}

const CLOUD_SKILLS: Skill[] = [
    { name: "AWS", icon: <SiAmazonwebservices />, color: "#FF9900" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
    { name: "Terraform", icon: <SiTerraform />, color: "#7B42BC" },
    { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
];

const ML_SKILLS: Skill[] = [
    { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
    { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
    { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8" },
    { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
    { name: "Pandas", icon: <SiPandas />, color: "#150458" },
];

const DEV_SKILLS: Skill[] = [
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Kotlin", icon: <SiKotlin />, color: "#7F52FF" },
    { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Flask", icon: <SiFlask />, color: "#FFFFFF" },
    { name: "Django", icon: <SiDjango />, color: "#092E20" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Android", icon: <SiAndroid />, color: "#3DDC84" },
];

const DB_SKILLS: Skill[] = [
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "SQLite", icon: <SiSqlite />, color: "#003B57" },
    { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
];

type TabType = "cloud" | "ml" | "dev" | "db";

export default function Skills() {
    const { ref, inView } = useScrollReveal();
    const [activeTab, setActiveTab] = useState<TabType>("cloud");

    const getSkills = () => {
        switch (activeTab) {
            case "cloud": return CLOUD_SKILLS;
            case "ml": return ML_SKILLS;
            case "dev": return DEV_SKILLS;
            case "db": return DB_SKILLS;
        }
    };

    const currentSkills = getSkills();

    return (
        <section id="skills" className="relative">
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
                            My <span className="gradient-text">Skills</span>
                        </h2>
                        <p className="text-lg text-white/60">Tools and technologies I work with</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <button
                            onClick={() => setActiveTab("cloud")}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "cloud"
                                ? "bg-[#cc1a3e] text-white glow-pink"
                                : "glass border border-white/20 text-white/70 hover:text-white hover:border-white/40"
                                }`}
                        >
                            Cloud & DevOps
                        </button>
                        <button
                            onClick={() => setActiveTab("ml")}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "ml"
                                ? "bg-[#cc1a3e] text-white glow-pink"
                                : "glass border border-white/20 text-white/70 hover:text-white hover:border-white/40"
                                }`}
                        >
                            ML / AI
                        </button>
                        <button
                            onClick={() => setActiveTab("dev")}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "dev"
                                ? "bg-[#cc1a3e] text-white glow-pink"
                                : "glass border border-white/20 text-white/70 hover:text-white hover:border-white/40"
                                }`}
                        >
                            Development
                        </button>
                        <button
                            onClick={() => setActiveTab("db")}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "db"
                                ? "bg-[#cc1a3e] text-white glow-pink"
                                : "glass border border-white/20 text-white/70 hover:text-white hover:border-white/40"
                                }`}
                        >
                            Databases
                        </button>
                    </div>

                    {/* Skills Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                        >
                            {currentSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="glass-strong rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
                                >
                                    {/* Glow effect on hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                                        style={{ background: skill.color }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center gap-3">
                                        {/* Icon */}
                                        <div
                                            className="text-5xl transition-all duration-300 group-hover:scale-110"
                                            style={{ color: skill.color }}
                                        >
                                            {skill.icon}
                                        </div>

                                        {/* Name */}
                                        <h3 className="text-sm font-semibold text-center text-white/90 group-hover:text-white transition-colors">
                                            {skill.name}
                                        </h3>
                                    </div>

                                    {/* Badge shine effect */}
                                    <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
