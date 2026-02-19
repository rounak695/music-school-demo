"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const GOLD = "#c8a24e";
const GOLD_LIGHT = "#e8c97a";
const MUTED = "#888";
const BG = "#0a0a0a";
const FG = "#ededed";
const BORDER = "#2a2a2a";

export default function Hero() {
    return (
        <section
            id="home"
            style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}
        >
            {/* Background Image */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <Image
                    src="/images/hero.png"
                    alt="Guitarist playing in studio"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,1) 100%)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.85), transparent 60%)" }} />
            </div>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "80rem", margin: "0 auto", padding: "8rem 1.5rem 4rem" }}>
                <div style={{ maxWidth: "42rem" }}>

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}
                    >
                        <div style={{ width: "3rem", height: "1px", background: GOLD }} />
                        <span style={{ color: GOLD, fontSize: "0.8rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2em" }}>
                            Est. 2024 — Bangalore, India
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", color: FG, margin: 0 }}
                    >
                        Master the
                        <br />
                        <span className="gradient-text" style={{ fontStyle: "italic", fontFamily: "var(--font-serif, serif)" }}>
                            Fretboard.
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        style={{ marginTop: "1.5rem", fontSize: "1.1rem", color: MUTED, maxWidth: "32rem", lineHeight: 1.7 }}
                    >
                        Where traditional raga meets modern technique. A premium guitar
                        education experience designed for the passionate musician in you.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.65 }}
                        style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}
                    >
                        <Link
                            href="#courses"
                            style={{
                                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                                padding: "0.9rem 2rem", background: GOLD, color: BG,
                                fontWeight: 600, borderRadius: "9999px", textDecoration: "none",
                                fontSize: "0.95rem", transition: "all 0.3s",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = GOLD_LIGHT)}
                            onMouseLeave={e => (e.currentTarget.style.background = GOLD)}
                        >
                            Explore Courses
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            href="#about"
                            style={{
                                display: "inline-flex", alignItems: "center",
                                padding: "0.9rem 2rem", border: `1px solid ${BORDER}`, color: FG,
                                fontWeight: 600, borderRadius: "9999px", textDecoration: "none",
                                fontSize: "0.95rem", transition: "all 0.3s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = FG; }}
                        >
                            Our Story
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        style={{ marginTop: "3.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", maxWidth: "20rem" }}
                    >
                        {[{ n: "500+", l: "Students" }, { n: "15+", l: "Courses" }, { n: "8+", l: "Years" }].map(s => (
                            <div key={s.l}>
                                <div style={{ fontSize: "1.75rem", fontWeight: 700, color: GOLD }}>{s.n}</div>
                                <div style={{ fontSize: "0.7rem", color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.25rem" }}>{s.l}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", zIndex: 10 }}
            >
                <span style={{ fontSize: "0.65rem", color: MUTED, textTransform: "uppercase", letterSpacing: "0.2em" }}>Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ width: "1.25rem", height: "2rem", border: `2px solid ${MUTED}`, borderRadius: "9999px", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "0.25rem" }}
                >
                    <div style={{ width: "0.25rem", height: "0.5rem", background: GOLD, borderRadius: "9999px" }} />
                </motion.div>
            </motion.div>
        </section>
    );
}
