import Link from "next/link";
import Image from "next/image";

const GOLD = "#c8a24e";
const MUTED = "#888";
const BG = "#0a0a0a";
const FG = "#ededed";
const BORDER = "#1e1e1e";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer style={{ background: BG, borderTop: `1px solid ${BORDER}`, padding: "4rem 0 2rem" }}>
            <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
                {/* Top row */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
                    {/* Brand */}
                    <div>
                        <Link href="#home" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", marginBottom: "1rem" }}>
                            <Image
                                src="/logo.png"
                                alt="Abstract Guitar School logo"
                                width={30}
                                height={30}
                                style={{ filter: "invert(1) sepia(1) saturate(3) hue-rotate(5deg) brightness(0.9)", objectFit: "contain" }}
                            />
                            <div>
                                <div style={{ fontWeight: 800, color: FG, fontSize: "0.9rem" }}>Abstract</div>
                                <div style={{ fontSize: "0.55rem", color: GOLD, letterSpacing: "0.2em", textTransform: "uppercase" }}>Guitar School</div>
                            </div>
                        </Link>
                        <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "18rem" }}>
                            Bangalore&apos;s premier guitar school. Where raga meets rock and every student finds their sound.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ color: FG, fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Navigate</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                            {["About", "Courses", "Faculty", "Gallery", "Contact"].map(l => (
                                <Link key={l} href={`#${l.toLowerCase()}`} style={{ color: MUTED, fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}>
                                    {l}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 style={{ color: FG, fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Programs</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                            {["Acoustic Foundations", "Raga Guitar", "Electric Shredding", "Songwriting Studio"].map(p => (
                                <Link key={p} href="#courses" style={{ color: MUTED, fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}>
                                    {p}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: FG, fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Contact</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6 }}>12, Indiranagar 12th Main<br />Bangalore 560038</p>
                            <a href="tel:+919876543210" style={{ color: MUTED, fontSize: "0.875rem", textDecoration: "none" }}>+91 98765 43210</a>
                            <a href="mailto:hello@abstractguitar.in" style={{ color: MUTED, fontSize: "0.875rem", textDecoration: "none" }}>hello@abstractguitar.in</a>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                    <p style={{ color: MUTED, fontSize: "0.82rem" }}>© {year} Abstract Guitar School. All rights reserved.</p>
                    <p style={{ color: MUTED, fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                        Crafted with
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
                        </svg>
                        in Bangalore, India
                    </p>
                </div>
            </div>
        </footer>
    );
}
