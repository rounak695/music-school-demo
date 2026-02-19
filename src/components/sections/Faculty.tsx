"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GOLD = "#c8a24e";
const MUTED = "#888";
const BG = "#0a0a0a";
const FG = "#ededed";

const faculty = [
    {
        name: "Arjun Menon",
        role: "Founder & Lead Instructor",
        specialization: "Acoustic & Indian Classical Guitar",
        bio: "15+ years of teaching experience. Trained under Pandit Vishwa Mohan Bhatt. Performs nationally and internationally.",
        image: "/images/instructor.png",
    },
    {
        name: "Priya Sharma",
        role: "Electric Guitar Faculty",
        specialization: "Rock, Blues & Metal",
        bio: "Session guitarist for multiple Bollywood productions. 10+ years of performance and teaching experience.",
        image: "/images/performer.png",
    },
    {
        name: "Rahul Desai",
        role: "Theory & Composition",
        specialization: "Music Theory & Songwriting",
        bio: "Berklee College of Music alumnus. Published songwriter with multiple chart appearances. Passionate educator.",
        image: "/images/hero.png",
    },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
});

export default function Faculty() {
    return (
        <section id="faculty" style={{ padding: "7rem 0", background: BG, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "24rem", height: "24rem", background: "rgba(200,162,78,0.04)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

            <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
                {/* Header */}
                <motion.div {...fadeUp(0)} style={{ marginBottom: "4rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                        <div style={{ width: "3rem", height: "1px", background: GOLD }} />
                        <span style={{ color: GOLD, fontSize: "0.8rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2em" }}>Meet The Team</span>
                    </div>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: FG, margin: "0 0 1rem" }}>
                        Learn from the <span className="gradient-text">Best</span>
                    </h2>
                    <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: "36rem", lineHeight: 1.7 }}>
                        Our instructors are not just teachers — they are performing artists, session musicians, and passionate mentors.
                    </p>
                </motion.div>

                {/* Faculty Cards */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2.5rem" }}>
                    {faculty.map((member, i) => (
                        <motion.div key={member.name} {...fadeUp(i * 0.12)} style={{ display: "flex", flexDirection: "column" }}>
                            {/* Image */}
                            <div style={{ position: "relative", borderRadius: "1rem", overflow: "hidden", aspectRatio: "3/4", marginBottom: "1.25rem" }}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    style={{ transition: "transform 0.7s" }}
                                />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.1) 60%)" }} />
                                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem" }}>
                                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: GOLD, textTransform: "uppercase", letterSpacing: "0.1em" }}>{member.specialization}</span>
                                </div>
                            </div>

                            {/* Text - not clipped */}
                            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: FG, marginBottom: "0.25rem" }}>{member.name}</h3>
                            <p style={{ fontSize: "0.85rem", color: GOLD, marginBottom: "0.75rem" }}>{member.role}</p>
                            <p style={{ fontSize: "0.88rem", color: MUTED, lineHeight: 1.7 }}>{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
