"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DEV_PROJECTS } from "@/lib/constants";
import ProjectCard from "./ProjectCard";

export default function Work() {
    const { ref, inView } = useScrollReveal();

    return (
        <section id="work" className="relative">
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
                            My <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-lg text-white/60">Cloud, ML, and Full Stack applications I&apos;ve built</p>
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {DEV_PROJECTS.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
