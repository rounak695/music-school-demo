"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const GOLD = "#c8a24e";
const GOLD_LIGHT = "#e8c97a";
const MUTED = "#888";
const BG = "#141414";
const BG2 = "#0a0a0a";
const FG = "#ededed";
const BORDER = "#2a2a2a";
const SURFACE = "#1a1a1a";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <section id="contact" style={{ padding: "7rem 0", background: BG }}>
            <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }} viewport={{ once: true }}
                    style={{ marginBottom: "3.5rem" }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                        <div style={{ width: "3rem", height: "1px", background: GOLD }} />
                        <span style={{ color: GOLD, fontSize: "0.8rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2em" }}>Get In Touch</span>
                    </div>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: FG, margin: "0 0 1rem" }}>
                        Start Your <span className="gradient-text">Musical Journey</span>
                    </h2>
                    <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: "36rem", lineHeight: 1.7 }}>
                        Ready to pick up the guitar? Book your free trial class and meet your instructor.
                    </p>
                </motion.div>

                {/* Two-column layout */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "start" }}>

                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }} viewport={{ once: true }}
                        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                    >
                        {[
                            {
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                        <circle cx="12" cy="9" r="2.5" />
                                    </svg>
                                ),
                                label: "Address", value: "12, Indiranagar 12th Main\nBangalore, Karnataka 560038"
                            },
                            {
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1.19h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1a16 16 0 0 0 5.91 5.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
                                    </svg>
                                ),
                                label: "Phone", value: "+91 98765 43210"
                            },
                            {
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="M2 7l10 7 10-7" />
                                    </svg>
                                ),
                                label: "Email", value: "hello@abstractguitar.in"
                            },
                            {
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="9" />
                                        <polyline points="12 7 12 12 15.5 15.5" />
                                    </svg>
                                ),
                                label: "Hours", value: "Mon–Sat: 10 AM – 8 PM IST\nSunday: 11 AM – 5 PM IST"
                            },
                        ].map(item => (
                            <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                <div style={{
                                    width: "2.75rem", height: "2.75rem", borderRadius: "0.625rem",
                                    background: "linear-gradient(135deg, #1e1e1e, #141414)",
                                    border: "1px solid rgba(200,162,78,0.15)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    flexShrink: 0, boxShadow: "0 2px 12px rgba(200,162,78,0.05)",
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.78rem", color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>{item.label}</div>
                                    <div style={{ color: FG, fontSize: "0.95rem", lineHeight: 1.7, whiteSpace: "pre-line" }}>{item.value}</div>
                                </div>
                            </div>
                        ))}

                        {/* Social icons */}
                        <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                            {/* Instagram */}
                            <a href="#" title="Instagram" style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all 0.3s" }}>
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="5" />
                                    <circle cx="17.5" cy="6.5" r="1" fill={MUTED} stroke="none" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="#" title="YouTube" style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all 0.3s" }}>
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill={MUTED} stroke="none" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" title="Facebook" style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all 0.3s" }}>
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}
                    >
                        <div style={{ padding: "2.5rem", borderRadius: "1.25rem", background: BG2, border: `1px solid ${BORDER}` }}>
                            {/* Form header */}
                            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: FG, marginBottom: "0.5rem" }}>
                                Book a Free Trial Class
                            </h3>
                            <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                                Fill out the form below and we&apos;ll get in touch within 24 hours.
                            </p>

                            {submitted ? (
                                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                                        <div style={{ width: "4rem", height: "4rem", borderRadius: "50%", background: "linear-gradient(135deg, rgba(200,162,78,0.15), rgba(200,162,78,0.05))", border: "1px solid rgba(200,162,78,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 18V5l12-2v13" />
                                                <circle cx="6" cy="18" r="3" />
                                                <circle cx="18" cy="16" r="3" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h4 style={{ color: GOLD, fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>You&apos;re on the list!</h4>
                                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>Our team will reach out to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    {/* Row 1: Name */}
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                                            <label style={{ fontSize: "0.8rem", color: MUTED, fontWeight: 500 }}>First Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Rahul"
                                                style={{ padding: "0.75rem 1rem", background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "0.5rem", color: FG, fontSize: "0.9rem", outline: "none", width: "100%" }}
                                            />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                                            <label style={{ fontSize: "0.8rem", color: MUTED, fontWeight: 500 }}>Last Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Sharma"
                                                style={{ padding: "0.75rem 1rem", background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "0.5rem", color: FG, fontSize: "0.9rem", outline: "none", width: "100%" }}
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                                        <label style={{ fontSize: "0.8rem", color: MUTED, fontWeight: 500 }}>Email</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="rahul@example.com"
                                            style={{ padding: "0.75rem 1rem", background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "0.5rem", color: FG, fontSize: "0.9rem", outline: "none", width: "100%" }}
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                                        <label style={{ fontSize: "0.8rem", color: MUTED, fontWeight: 500 }}>Phone</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            style={{ padding: "0.75rem 1rem", background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "0.5rem", color: FG, fontSize: "0.9rem", outline: "none", width: "100%" }}
                                        />
                                    </div>

                                    {/* Course */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                                        <label style={{ fontSize: "0.8rem", color: MUTED, fontWeight: 500 }}>Interested In</label>
                                        <select
                                            style={{ padding: "0.75rem 1rem", background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "0.5rem", color: FG, fontSize: "0.9rem", outline: "none", width: "100%" }}
                                        >
                                            <option value="">Select a course...</option>
                                            <option>Acoustic Foundations</option>
                                            <option>Raga Guitar</option>
                                            <option>Electric Shredding</option>
                                            <option>Songwriting Studio</option>
                                            <option>Not sure yet</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                                        <label style={{ fontSize: "0.8rem", color: MUTED, fontWeight: 500 }}>Message (Optional)</label>
                                        <textarea
                                            rows={3}
                                            placeholder="Tell us a bit about your musical background..."
                                            style={{ padding: "0.75rem 1rem", background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "0.5rem", color: FG, fontSize: "0.9rem", outline: "none", width: "100%", resize: "vertical", fontFamily: "inherit" }}
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        style={{ marginTop: "0.5rem", padding: "0.9rem 2rem", background: GOLD, color: "#0a0a0a", fontWeight: 700, fontSize: "1rem", borderRadius: "9999px", border: "none", cursor: "pointer", transition: "all 0.3s", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                                        onMouseEnter={e => (e.currentTarget.style.background = GOLD_LIGHT)}
                                        onMouseLeave={e => (e.currentTarget.style.background = GOLD)}
                                    >
                                        Book My Free Trial
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
