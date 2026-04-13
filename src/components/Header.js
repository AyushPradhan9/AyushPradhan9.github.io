import React, { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Start" },
  { href: "#chapter-1", label: "Chapters" },
  { href: "#building", label: "Building" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`nav-pill ${scrolled ? "is-scrolled" : ""}`}>
            <a href="#hero" className="nav-brand" aria-label="Home">
                <span className="nav-brand-orb" />
            </a>
            <nav className="nav-links">
                {links.map((l) => (
                    <a key={l.href} href={l.href} className="nav-link">
                        {l.label}
                    </a>
                ))}
            </nav>
            <a
                href="https://github.com/AyushPradhan9"
                target="_blank"
                rel="noreferrer"
                className="nav-cta"
            >
                GitHub
                <span className="nav-cta-arrow">↗</span>
            </a>
        </header>
    );
}
