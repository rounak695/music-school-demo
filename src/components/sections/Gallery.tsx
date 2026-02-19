"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GOLD = "#c8a24e";
const MUTED = "#888";
const BG = "#141414";
const FG = "#ededed";

// Free Unsplash stock images — guitar / music themes
const images = [
    {
        src: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&q=80&auto=format&fit=crop",
        alt: "Guitar lesson in progress",
        colSpan: 2,
        rowSpan: 2,
    },
    {
        src: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=800&q=80&auto=format&fit=crop",
        alt: "Guitarist playing acoustic",
        colSpan: 1,
        rowSpan: 1,
    },
    {
        src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80&auto=format&fit=crop",
        alt: "Live guitar performance",
        colSpan: 1,
        rowSpan: 1,
    },
    {
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80&auto=format&fit=crop",
        alt: "Guitarist on stage",
        colSpan: 1,
        rowSpan: 2,
    },
    {
        src: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&q=80&auto=format&fit=crop",
        alt: "Guitar fretboard closeup",
        colSpan: 1,
        rowSpan: 1,
    },
];

export default function Gallery() {
    return (
        <section id="gallery" style={{ padding: "7rem 0", background: BG }}>
            <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                        <div style={{ width: "3rem", height: "1px", background: GOLD }} />
                        <span style={{ color: GOLD, fontSize: "0.8rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2em" }}>
                            Life at Abstract
                        </span>
                        <div style={{ width: "3rem", height: "1px", background: GOLD }} />
                    </div>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: FG, margin: "0 0 1rem" }}>
                        The <span className="gradient-text">Vibe</span>
                    </h2>
                    <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: "36rem", margin: "0 auto", lineHeight: 1.7 }}>
                        More than a school — a community of passionate musicians creating something beautiful together.
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridTemplateRows: "repeat(3, 220px)",
                        gap: "1rem",
                    }}
                >
                    {images.map((img, i) => (
                        <motion.div
                            key={img.alt}
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.55, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            style={{
                                position: "relative",
                                borderRadius: "0.75rem",
                                overflow: "hidden",
                                cursor: "pointer",
                                gridColumn: `span ${img.colSpan}`,
                                gridRow: `span ${img.rowSpan}`,
                            }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ transition: "transform 0.5s ease" }}
                                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
                                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                            />
                            {/* Hover overlay */}
                            <div
                                style={{
                                    position: "absolute", inset: 0,
                                    background: "linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 60%)",
                                    opacity: 0, transition: "opacity 0.3s",
                                }}
                                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                                onMouseLeave={e => (e.currentTarget.style.opacity = "0")}
                            />
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}
