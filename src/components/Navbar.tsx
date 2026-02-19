"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const GOLD = "#c8a24e";
const BG = "#0a0a0a";
const FG = "#ededed";

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Faculty", href: "#faculty" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav
            style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                transition: "background 0.4s, border-color 0.4s",
                background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
                backdropFilter: scrolled ? "blur(16px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(200,162,78,0.15)" : "1px solid transparent",
            }}
        >
            <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem", height: "4.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {/* Logo */}
                <Link href="#home" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
                    <Image
                        src="/logo.png"
                        alt="Abstract Guitar School logo"
                        width={36}
                        height={36}
                        style={{ filter: "invert(1) sepia(1) saturate(3) hue-rotate(5deg) brightness(0.9)", objectFit: "contain" }}
                    />
                    <div>
                        <div style={{ fontWeight: 800, color: FG, fontSize: "1rem", lineHeight: 1.2, letterSpacing: "0.02em" }}>Abstract</div>
                        <div style={{ fontSize: "0.6rem", color: GOLD, letterSpacing: "0.25em", textTransform: "uppercase" }}>Guitar School</div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
                    {NAV_LINKS.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{ color: "rgba(237,237,237,0.7)", fontSize: "0.9rem", textDecoration: "none", transition: "color 0.3s", fontWeight: 500 }}
                            onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
                            onMouseLeave={e => (e.currentTarget.style.color = "rgba(237,237,237,0.7)")}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        style={{ padding: "0.55rem 1.4rem", background: GOLD, color: BG, fontWeight: 700, borderRadius: "9999px", textDecoration: "none", fontSize: "0.875rem", transition: "all 0.3s" }}
                    >
                        Enroll Now
                    </Link>
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{ display: "none", flexDirection: "column", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
                    className="show-mobile"
                    aria-label="Menu"
                >
                    {[0, 1, 2].map(i => (
                        <span key={i} style={{ display: "block", width: "22px", height: "2px", background: FG, borderRadius: "2px" }} />
                    ))}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div style={{ background: "rgba(10,10,10,0.98)", borderTop: "1px solid rgba(200,162,78,0.1)", padding: "1.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                style={{ color: FG, fontSize: "1rem", textDecoration: "none", fontWeight: 500, padding: "0.5rem 0" }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            style={{ marginTop: "0.5rem", padding: "0.75rem 1.5rem", background: GOLD, color: BG, fontWeight: 700, borderRadius: "9999px", textDecoration: "none", fontSize: "0.95rem", textAlign: "center" }}
                        >
                            Enroll Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
