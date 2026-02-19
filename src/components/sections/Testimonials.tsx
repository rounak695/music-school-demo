"use client";

import { motion } from "framer-motion";

const GOLD = "#c8a24e";
const MUTED = "#888";
const BG = "#0a0a0a";
const FG = "#ededed";
const SURFACE = "#141414";
const BORDER = "#2a2a2a";

const testimonials = [
    {
        quote: "Abstract Guitar School changed the way I think about music. The raga-meets-rock approach is unlike anything I've experienced before.",
        name: "Sneha Iyer",
        role: "Student, Raga Guitar Program",
        rating: 5,
    },
    {
        quote: "Arjun sir's patience and depth of knowledge made me go from zero to performing at open mics in just 6 months. Truly grateful.",
        name: "Vikram Reddy",
        role: "Student, Acoustic Foundations",
        rating: 5,
    },
    {
        quote: "The best investment I made in my creative journey. The songwriting studio program helped me write and record my first EP.",
        name: "Ananya Das",
        role: "Student, Songwriting Studio",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section style={{ padding: "7rem 0", background: BG, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", background: "rgba(200,162,78,0.03)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

            <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }} viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                        <div style={{ width: "3rem", height: "1px", background: GOLD }} />
                        <span style={{ color: GOLD, fontSize: "0.8rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2em" }}>Student Stories</span>
                        <div style={{ width: "3rem", height: "1px", background: GOLD }} />
                    </div>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: FG, margin: 0 }}>
                        Hear From Our <span className="gradient-text">Musicians</span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                padding: "2rem",
                                borderRadius: "1rem",
                                border: `1px solid ${BORDER}`,
                                background: SURFACE,
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}
                        >
                            {/* Stars */}
                            <div style={{ display: "flex", gap: "0.25rem" }}>
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <svg key={j} width="16" height="16" fill={GOLD} viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote - no height capping */}
                            <p style={{ fontSize: "0.95rem", color: FG, lineHeight: 1.75, fontStyle: "italic", margin: 0 }}>
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Attribution */}
                            <div style={{ marginTop: "auto" }}>
                                <div style={{ fontWeight: 600, color: FG, fontSize: "0.95rem" }}>{t.name}</div>
                                <div style={{ fontSize: "0.8rem", color: MUTED, marginTop: "0.2rem" }}>{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
