"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface NavBarProps {
    items: NavItem[]
    className?: string
}

export function TubelightNavbar({ items, className }: NavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0].name)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Scroll spy - automatically update active tab based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = items.map(item => {
                const id = item.url.replace('#', '')
                return {
                    name: item.name,
                    element: document.getElementById(id)
                }
            }).filter(section => section.element !== null)

            // Find which section is currently in view
            const scrollPosition = window.scrollY + window.innerHeight / 3

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section.element && section.element.offsetTop <= scrollPosition) {
                    setActiveTab(section.name)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Call once to set initial state

        return () => window.removeEventListener('scroll', handleScroll)
    }, [items])

    // Scroll to section on click
    const handleClick = (url: string, name: string) => {
        setActiveTab(name)
        if (url.startsWith('#')) {
            const element = document.querySelector(url)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <div
            className={cn(
                "fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[90vw] md:max-w-fit px-2 md:px-0",
                className,
            )}
        >
            <div className="flex items-center justify-center gap-1 md:gap-3 glass-strong border border-white/20 backdrop-blur-lg py-2.5 md:py-3 px-3 md:px-4 rounded-full shadow-2xl">
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name

                    return (
                        <button
                            key={item.name}
                            onClick={() => handleClick(item.url, item.name)}
                            className={cn(
                                "relative cursor-pointer text-sm font-semibold px-2.5 md:px-6 py-2 rounded-full transition-colors whitespace-nowrap",
                                "text-white/70 hover:text-white",
                                isActive && "text-white",
                            )}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">
                                <Icon size={18} strokeWidth={2.5} />
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-[#cc1a3e]/20 rounded-full -z-10"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    {/* Tubelight glow effect - upward on both mobile and desktop */}
                                    <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 w-8 md:w-12 h-1 md:h-1.5 bg-[#cc1a3e] rounded-full">
                                        <div className="absolute w-12 md:w-16 h-6 md:h-10 bg-[#cc1a3e]/40 rounded-full blur-lg -top-3 md:-top-5 -left-2" />
                                        <div className="absolute w-8 md:w-12 h-4 md:h-8 bg-[#cc1a3e]/50 rounded-full blur-md -top-2 md:-top-4 left-0" />
                                    </div>
                                </motion.div>
                            )}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default TubelightNavbar;
