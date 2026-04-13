import React from "react";
import { motion } from "framer-motion";
import Globe from "./Globe";
import ChapterVisual from "./ChapterVisual";
import mePhoto from "./img/me.jpg";

const GH = "https://github.com/AyushPradhan9";

const chapters = [
    {
        id: 1,
        year: "2019",
        era: "The Spark",
        title: "First lines of code",
        visual: "spark",
        body:
            "Started at VIT Bhopal with C++ and Java. HackerRank problems at 2am. Calculators, tribute pages, survey forms. Every tutorial I could find. I wasn't trying to ship anything. I was trying to understand what it meant to tell a machine what to do.",
        tech: ["C++", "Java", "HTML / CSS", "JavaScript"],
        repos: [
            { name: "calculator", url: `${GH}/calculator` },
            { name: "Tribute-Web-Page", url: `${GH}/Tribute-Web-Page` },
        ],
    },
    {
        id: 2,
        year: "2020",
        era: "End to End",
        title: "First real systems",
        visual: "loop",
        body:
            "Java Swing GUIs wired into MySQL. A library management system with real CRUD. A dynamic eCommerce site in PHP. The projects were clunky, but they were end-to-end. Frontend, backend, database, deployment. The full loop.",
        tech: ["Java", "MySQL", "PHP", "Swing"],
        repos: [
            {
                name: "Integrated-Library-Management-System",
                url: `${GH}/Integrated-Library-Management-System`,
            },
            { name: "aSmile-Dynamic-eCommerce", url: `${GH}/aSmile-Dynamic-eCommerce` },
        ],
    },
    {
        id: 3,
        year: "2021",
        era: "Tools & Side Quests",
        title: "Python, sockets, and a DSA repo",
        visual: "hex",
        body:
            "A file sorter that organized my downloads by extension. An app profiler that launched bundled workspaces. A desktop group-chat app over raw Java sockets, modeled on Reddit's community structure. And I started curating NeoAlgo, a DSA repository for the community.",
        tech: ["Python", "Java Sockets", "C++", "Open Source"],
        repos: [
            { name: "winFileSorter", url: `${GH}/winFileSorter` },
            { name: "appProfiler", url: `${GH}/appProfiler` },
            { name: "reddiTalk", url: `${GH}/reddiTalk` },
            { name: "NeoAlgo", url: `${GH}/NeoAlgo` },
        ],
    },
    {
        id: 4,
        year: "2021",
        era: "First Users",
        title: "Code on strangers' phones",
        visual: "phone",
        body:
            "My first internship. I built a React product page and shipped features for a React Native app live on the App Store and Play Store, wiring Redux for state. For the first time, code I wrote ran on devices I'd never touch. Around the same time I launched Opportunity Calendar, a one-stop aggregator for tech jobs, internships and hackathons.",
        tech: ["React", "React Native", "Redux", "JavaScript"],
        repos: [
            {
                name: "Opportunity-Calendar-Frontend",
                url: `${GH}/Opportunity-Calendar-Frontend`,
            },
            { name: "task-manager", url: `${GH}/task-manager` },
        ],
    },
    {
        id: 5,
        year: "2022",
        era: "Full-Stack Fluency",
        title: "Ending college, building bigger",
        visual: "stack",
        body:
            "Final-year projects got serious. E-Stock-Market in Java, EduHub as a JavaScript learning platform, and the second iteration of this portfolio. I was no longer learning frameworks. I was learning how to pick them. How to architect. How to ship.",
        tech: ["Java", "Spring", "React", "Node.js"],
        repos: [
            { name: "E-Stock-Market", url: `${GH}/E-Stock-Market` },
            { name: "EduHub", url: `${GH}/EduHub` },
            { name: "PortfolioV2", url: `${GH}/PortfolioV2` },
        ],
    },
    {
        id: 6,
        year: "2022 → 2024",
        era: "Enterprise Rigor",
        title: "Systems that banks run on",
        visual: "chart",
        body:
            "Joined a global bank out of college. Led full-stack development of a data transformation platform in Spring Boot + Angular, migrating legacy workloads into big-data pipelines across Oracle, PostgreSQL, and HDFS. Decoupled LLDs with creational patterns. 95%+ test coverage under TDD, enforced via SonarQube + Jenkins.",
        tech: ["Spring Boot", "Angular", "Oracle", "PostgreSQL", "HDFS", "TDD"],
        badge: "1st Prize · Internal Prodathon",
    },
    {
        id: 7,
        year: "2024",
        era: "Platforms",
        title: "A CDN across six regions",
        visual: "regions",
        body:
            "Designed a multi-region CDN on AWS ECS + Nginx serving 25+ enterprise micro-frontends across 5 AWS regions, cutting latency by 70% and reliably handling 10,000+ daily requests. Built automation frameworks, internal Python SDKs, and Nginx cache observability that teams across the org now depend on.",
        tech: ["AWS", "ECS", "Nginx", "Python", "Observability"],
        badge: "Regional Impact Award · APAC",
    },
    {
        id: 8,
        year: "2025",
        era: "Intelligence",
        title: "AI agents, orchestrated",
        visual: "network",
        body:
            "Architected a multi-project AI Agent Orchestration platform in FastAPI supporting LangChain, Google ADK, and CrewAI through a factory-based framework, with chain-of-thought observability via Arize Phoenix. Built a Flask + ElasticSearch + LLM discovery service delivering ChatGPT-like enterprise search.",
        tech: [
            "FastAPI",
            "LangChain",
            "Google ADK",
            "CrewAI",
            "Arize Phoenix",
            "ElasticSearch",
        ],
    },
    {
        id: 9,
        year: "Now",
        era: "Building in the Open",
        title: "MockMesh, under Noctivant",
        visual: "code",
        body:
            "A Python library that intercepts outbound calls to AWS, Azure, GCP, Kafka, RabbitMQ, MongoDB, Redis, SQL, and any HTTP endpoint, returning configurable mock responses automatically. One initialize() call, and your code runs identically on your laptop and in production. No Docker, no credentials, no if ENV == \"local\" scattered through your codebase.",
        tech: ["Python", "PyPI", "Open Source"],
        links: [
            { label: "mockmesh.netlify.app", url: "https://mockmesh.netlify.app" },
            { label: "PyPI", url: "https://pypi.org/project/mockmesh/" },
        ],
        featured: true,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

function ChapterCard({ c, index }) {
    const anchorId = c.featured ? "building" : `chapter-${c.id}`;
    return (
        <motion.article
            id={anchorId}
            className={`chapter ${c.featured ? "chapter-featured" : ""}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            <aside className="chapter-rail">
                <span className="chapter-num">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <span className="chapter-rail-line" />
                <span className="chapter-year">{c.year}</span>
            </aside>

            <div className="glass chapter-card">
                <ChapterVisual kind={c.visual} />
                <div className="chapter-text">
                <div className="chapter-era">{c.era}</div>
                <h2 className="chapter-title">{c.title}</h2>
                <p className="chapter-body">{c.body}</p>

                {c.badge && <div className="chapter-badge">✦ {c.badge}</div>}

                <div className="chip-row">
                    {c.tech.map((t) => (
                        <span className="chip" key={t}>
                            {t}
                        </span>
                    ))}
                </div>

                {(c.repos || c.links) && (
                    <div className="chapter-links">
                        {c.repos &&
                            c.repos.map((r) => (
                                <a
                                    key={r.name}
                                    href={r.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="repo-link"
                                >
                                    <span className="repo-icon">◆</span>
                                    <span className="repo-name">{r.name}</span>
                                    <span className="repo-arrow">↗</span>
                                </a>
                            ))}
                        {c.links &&
                            c.links.map((l) => (
                                <a
                                    key={l.url}
                                    href={l.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="repo-link primary"
                                >
                                    <span className="repo-icon">↗</span>
                                    <span className="repo-name">{l.label}</span>
                                </a>
                            ))}
                    </div>
                )}
                </div>
            </div>
        </motion.article>
    );
}

export default function Journey() {
    return (
        <main className="journey">
            {/* ---------- HERO ---------- */}
            <section id="hero" className="hero">
                <div className="hero-bg">
                    <div className="hero-blob hb-1" />
                    <div className="hero-blob hb-2" />
                    <div className="hero-blob hb-3" />
                    <div className="hero-grid" />
                </div>

                <div className="hero-inner">
                    <motion.div
                        className="hero-copy"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="glass profile-card">
                            <div className="profile-photo">
                                <img src={mePhoto} alt="Ayush Pradhan" />
                                <span className="profile-status" />
                            </div>
                            <div className="profile-info">
                                <div className="profile-name">Ayush Pradhan</div>
                                <div className="profile-role">
                                    Software Engineer · AI &amp; Platforms
                                </div>
                            </div>
                        </div>
                        <h1 className="hero-title">
                            A journey
                            <br />
                            <span className="hero-title-grad">through code.</span>
                        </h1>
                        <p className="hero-lede">
                            I'm <strong>Ayush Pradhan</strong>, a software engineer building
                            AI platforms, multi-region infrastructure, and developer tools.
                            This site isn't a résumé. It's a timeline, from my first C++ file
                            in 2019 to the systems I'm shipping today.
                        </p>

                        <div className="hero-ctas">
                            <a href="#chapter-1" className="btn-primary">
                                Start the journey
                                <span className="btn-arrow">↓</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/AyushPradhan"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-ghost"
                            >
                                LinkedIn
                            </a>
                        </div>

                        <div className="hero-meta">
                            <div className="meta-item">
                                <span className="meta-k">7+</span>
                                <span className="meta-v">Years writing code</span>
                            </div>
                            <div className="meta-dot" />
                            <div className="meta-item">
                                <span className="meta-k">9</span>
                                <span className="meta-v">Chapters ahead</span>
                            </div>
                            <div className="meta-dot" />
                            <div className="meta-item">
                                <span className="meta-k">25+</span>
                                <span className="meta-v">Public repos</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-globe-wrap"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        <div className="globe-ring r1" />
                        <div className="globe-ring r2" />
                        <div className="globe-halo" />
                        <Globe />

                        <div className="globe-orbit chip-tl glass">
                            <span className="orbit-k">AI Agents</span>
                            <span className="orbit-v">LangChain · ADK · CrewAI</span>
                        </div>
                        <div className="globe-orbit chip-tr glass">
                            <span className="orbit-k">CDN</span>
                            <span className="orbit-v">5 AWS regions · 70% faster</span>
                        </div>
                        <div className="globe-orbit chip-bl glass">
                            <span className="orbit-k">MockMesh</span>
                            <span className="orbit-v">open source · PyPI</span>
                        </div>
                        <div className="globe-orbit chip-br glass">
                            <span className="orbit-k">95%+</span>
                            <span className="orbit-v">test coverage · TDD</span>
                        </div>

                        <div className="globe-tag glass">
                            <span className="globe-tag-dot" />
                            building in {`{ real_time }`}
                        </div>
                    </motion.div>
                </div>

                <div className="hero-scroll-hint">
                    <span>scroll</span>
                    <span className="hero-scroll-line" />
                </div>
            </section>

            {/* ---------- CHAPTERS INTRO ---------- */}
            <section className="chapters-intro">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p className="eyebrow">the timeline</p>
                    <h2 className="chapters-intro-title">
                        Nine chapters. <span className="muted">One long conversation with the machine.</span>
                    </h2>
                </motion.div>
            </section>

            {/* ---------- CHAPTERS ---------- */}
            <section className="chapters">
                {chapters.map((c, i) => (
                    <ChapterCard c={c} index={i} key={c.id} />
                ))}
            </section>

            {/* ---------- CONTACT ---------- */}
            <section id="contact" className="contact">
                <motion.div
                    className="glass contact-card"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className="eyebrow">the road ahead</p>
                    <h2 className="contact-title">
                        Let's build the next <span className="hero-title-grad">chapter</span>.
                    </h2>
                    <p className="contact-body">
                        I'm most interested in AI platforms, developer tooling, and
                        infrastructure that scales quietly. If you're building in that
                        space, or just want to trade notes, my inbox is open.
                    </p>

                    <div className="contact-links">
                        <a
                            href="mailto:ayushpradhan0209@gmail.com"
                            className="btn-primary contact-email"
                        >
                            <span className="contact-email-icon">✉</span>
                            ayushpradhan0209@gmail.com
                            <span className="btn-arrow">→</span>
                        </a>
                        <a
                            href="https://github.com/AyushPradhan9"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-ghost"
                        >
                            GitHub ↗
                        </a>
                        <a
                            href="https://www.linkedin.com/in/AyushPradhan"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-ghost"
                        >
                            LinkedIn ↗
                        </a>
                    </div>

                    <div className="contact-foot">
                        <span>Designed &amp; engineered by Ayush Pradhan</span>
                        <span className="contact-foot-dot" />
                        <span>© 2026</span>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
