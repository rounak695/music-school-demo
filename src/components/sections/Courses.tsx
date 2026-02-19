"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const GOLD = "#c8a24e";
const GOLD_LIGHT = "#e8c97a";
const MUTED = "#888";
const BG = "#0a0a0a";
const FG = "#ededed";
const SURFACE = "#141414";
const BORDER = "#2a2a2a";

const courses = [
    {
        title: "Acoustic Foundations",
        level: "Beginner",
        duration: "3 Months",
        price: "₹6,000/mo",
        description: "Build rock-solid fundamentals. From basic chords to fingerpicking patterns, get comfortable with your instrument.",
        features: ["Open Chords & Strumming", "Basic Music Theory", "Fingerpicking Basics", "Bollywood Song Repertoire"],
        popular: false,
        accent: "rgba(59,130,246,0.08)",
    },
    {
        title: "Raga Guitar",
        level: "Intermediate",
        duration: "6 Months",
        price: "₹8,500/mo",
        description: "Explore the intersection of Indian classical music and guitar. Learn to play ragas, meend, gamak on the guitar.",
        features: ["Indian Scale Systems", "Raga Improvisation", "Taal & Rhythm Patterns", "Fusion Composition"],
        popular: true,
        accent: "rgba(200,162,78,0.08)",
    },
    {
        title: "Electric Shredding",
        level: "Advanced",
        duration: "6 Months",
        price: "₹10,000/mo",
        description: "Master lead guitar, advanced techniques, and tone shaping. From blues licks to metal shredding.",
        features: ["Advanced Lead Techniques", "Sweep Picking & Tapping", "Tone & Effects Mastery", "Live Performance Training"],
        popular: false,
        accent: "rgba(239,68,68,0.07)",
    },
    {
        title: "Songwriting Studio",
        level: "All Levels",
        duration: "4 Months",
        price: "₹7,000/mo",
        description: "Learn to write and produce your own songs. From lyric writing to arranging and basic recording.",
        features: ["Song Structure & Form", "Lyric Writing in Hindi/English", "Home Recording Basics", "Music Production Intro"],
        popular: false,
        accent: "rgba(16,185,129,0.07)",
    },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
});

export default function Courses() {
    return (
        <section id="courses" style={{ padding: "7rem 0", background: SURFACE, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", background: "rgba(200,162,78,0.03)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

            <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
                {/* Header */}
                <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                        <div style={{ width: "3rem", height: "1px", background: GOLD }} />
                        <span style={{ color: GOLD, fontSize: "0.8rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2em" }}>Programs</span>
                        <div style={{ width: "3rem", height: "1px", background: GOLD }} />
                    </div>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: FG, margin: "0 0 1rem" }}>
                        Find Your <span className="gradient-text">Sound</span>
                    </h2>
                    <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: "36rem", margin: "0 auto", lineHeight: 1.7 }}>
                        Structured programs designed for every stage of your guitar journey. From your first chord to the concert stage.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                    {courses.map((course, i) => (
                        <motion.div
                            key={course.title}
                            {...fadeUp(i * 0.08)}
                            style={{
                                position: "relative",
                                borderRadius: "1rem",
                                border: `1px solid ${BORDER}`,
                                padding: "2rem",
                                background: course.accent,
                                display: "flex",
                                flexDirection: "column",
                                transition: "border-color 0.3s",
                            }}
                        >
                            {course.popular && (
                                <div style={{ position: "absolute", top: "1rem", right: "1rem", padding: "0.25rem 0.75rem", background: GOLD, color: BG, fontSize: "0.7rem", fontWeight: 700, borderRadius: "9999px" }}>
                                    Most Popular
                                </div>
                            )}

                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: GOLD, textTransform: "uppercase", letterSpacing: "0.1em" }}>{course.level}</span>
                                <span style={{ color: MUTED, fontSize: "0.75rem" }}>•</span>
                                <span style={{ fontSize: "0.75rem", color: MUTED }}>{course.duration}</span>
                            </div>

                            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: FG, marginBottom: "0.75rem" }}>{course.title}</h3>
                            <p style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", flexGrow: 0 }}>{course.description}</p>

                            {/* Feature list - no height truncation */}
                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                {course.features.map(f => (
                                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", color: MUTED }}>
                                        <svg width="16" height="16" fill="none" stroke={GOLD} strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", gap: "0.75rem" }}>
                                <span style={{ fontSize: "1.35rem", fontWeight: 700, color: FG, minWidth: 0 }}>{course.price}</span>
                                <Link href="#contact" style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap", flexShrink: 0, padding: "0.6rem 1.25rem", background: "rgba(255,255,255,0.07)", color: FG, borderRadius: "9999px", fontSize: "0.85rem", fontWeight: 500, textDecoration: "none", transition: "all 0.3s" }}>
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div {...fadeUp(0.3)} style={{ textAlign: "center", marginTop: "3.5rem" }}>
                    <p style={{ color: MUTED, marginBottom: "0.75rem" }}>Not sure which course is right for you?</p>
                    <Link href="#contact" style={{ color: GOLD, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                        Book a Free Trial Class →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
