"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GOLD = "#c8a24e";
const MUTED = "#888";
const BG = "#0a0a0a";
const FG = "#ededed";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay },
    viewport: { once: true },
});

export default function About() {
    return (
        <section id="about" style={{ padding: "7rem 0", background: BG, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "24rem", height: "24rem", background: "rgba(200,162,78,0.04)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

            <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
                {/* Header */}
                <motion.div {...fadeUp(0)} style={{ marginBottom: "4rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                        <div style={{ width: "3rem", height: "1px", background: GOLD }} />
                        <span style={{ color: GOLD, fontSize: "0.8rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2em" }}>Our Philosophy</span>
                    </div>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.15, color: FG, margin: 0 }}>
                        Music is not just notes.
                        <br />
                        <span style={{ color: MUTED }}>It&apos;s a language of the soul.</span>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "center" }}>
                    {/* Image */}
                    <motion.div {...fadeUp(0.1)} style={{ position: "relative" }}>
                        <div style={{ position: "relative", borderRadius: "1rem", overflow: "hidden", aspectRatio: "4/5" }}>
                            <Image src="/images/closeup.png" alt="Guitar playing" fill className="object-cover" />
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.6), transparent)" }} />
                        </div>
                        {/* Floating card */}
                        <motion.div
                            {...fadeUp(0.3)}
                            className="glass"
                            style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", padding: "1.5rem", borderRadius: "1rem", maxWidth: "16rem" }}
                        >
                            <div style={{ fontSize: "2rem", fontWeight: 700, color: GOLD }}>98%</div>
                            <div style={{ fontSize: "0.85rem", color: MUTED, marginTop: "0.25rem", lineHeight: 1.5 }}>
                                of our students continue playing guitar beyond the course
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text */}
                    <motion.div {...fadeUp(0.15)}>
                        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
                            At Abstract Guitar School, we believe that learning guitar goes beyond chords and scales. Our teaching
                            methodology blends India&apos;s rich musical heritage — from classical ragas to Bollywood melodies —
                            with contemporary Western techniques.
                        </p>
                        <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, marginBottom: "3rem" }}>
                            Founded in Bangalore, our school has grown into a community of passionate musicians who approach music
                            with curiosity, discipline, and joy. Every student&apos;s journey is unique, and our personalized
                            approach ensures they reach their musical potential.
                        </p>

                        {/* Features */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            {[
                                {
                                    icon: (
                                        // Crosshair / personalized target
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="9" />
                                            <circle cx="12" cy="12" r="4" />
                                            <line x1="12" y1="2" x2="12" y2="5" />
                                            <line x1="12" y1="19" x2="12" y2="22" />
                                            <line x1="2" y1="12" x2="5" y2="12" />
                                            <line x1="19" y1="12" x2="22" y2="12" />
                                        </svg>
                                    ),
                                    title: "Personalized Curriculum",
                                    desc: "Tailored learning paths based on your goals, pace, and musical interests.",
                                },
                                {
                                    icon: (
                                        // Audio waveform / fusion
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="2,12 5,12 7,4 9,20 11,10 13,16 15,8 17,14 19,12 22,12" />
                                        </svg>
                                    ),
                                    title: "Raga-to-Rock Fusion",
                                    desc: "Unique methodology blending Indian classical with modern guitar styles.",
                                },
                                {
                                    icon: (
                                        // Microphone stand / performance
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="9" y="2" width="6" height="10" rx="3" />
                                            <path d="M5 10a7 7 0 0 0 14 0" />
                                            <line x1="12" y1="17" x2="12" y2="22" />
                                            <line x1="8" y1="22" x2="16" y2="22" />
                                        </svg>
                                    ),
                                    title: "Performance Ready",
                                    desc: "Regular jam sessions, open mics, and recitals to build confidence.",
                                },
                            ].map((f, i) => (
                                <motion.div key={f.title} {...fadeUp(0.2 + i * 0.1)} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                    <div style={{
                                        width: "3rem", height: "3rem", borderRadius: "0.625rem",
                                        background: "linear-gradient(135deg, #1e1e1e, #141414)",
                                        border: "1px solid rgba(200,162,78,0.15)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0,
                                        boxShadow: "0 2px 12px rgba(200,162,78,0.06)",
                                    }}>
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ fontWeight: 600, color: FG, marginBottom: "0.25rem" }}>{f.title}</h3>
                                        <p style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.6 }}>{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
