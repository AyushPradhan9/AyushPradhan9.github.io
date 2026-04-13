import React from "react";

/* Nine themed chapter artifacts. Each one is built to fill the panel
   edge-to-edge with a left motif + right decorative payload. */

function Spark() {
    return (
        <div className="cv cv-spark">
            <div className="cv-terminal">
                <div className="cv-term-bar">
                    <span className="cv-dot red" />
                    <span className="cv-dot yellow" />
                    <span className="cv-dot green" />
                    <span className="cv-term-title">~/vit/hello.cpp</span>
                </div>
                <div className="cv-term-body">
                    <div className="cv-term-line">
                        <span className="cv-term-prompt">$</span> g++ hello.cpp -o hello
                    </div>
                    <div className="cv-term-line d1">
                        <span className="cv-term-prompt">$</span> ./hello
                    </div>
                    <div className="cv-term-line d2 out">&gt; Hello, world!</div>
                    <div className="cv-term-line d3">
                        <span className="cv-term-prompt">$</span>
                        <span className="cv-term-caret" />
                    </div>
                </div>
            </div>
            <div className="cv-spark-side">
                <div className="cv-file-chip">
                    <span className="cv-file-icon">{"</>"}</span>
                    <span>hello.cpp</span>
                </div>
                <div className="cv-file-chip delay">
                    <span className="cv-file-icon">{"{ }"}</span>
                    <span>main.java</span>
                </div>
                <div className="cv-file-chip delay2">
                    <span className="cv-file-icon">#</span>
                    <span>hackerrank</span>
                </div>
            </div>
        </div>
    );
}

function Loop() {
    const nodes = [
        { x: 90,  label: "UI" },
        { x: 260, label: "API" },
        { x: 430, label: "DB" },
    ];
    return (
        <div className="cv cv-loop">
            <svg className="cv-loop-svg" viewBox="0 0 520 150" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id="lg-loop" x1="0" x2="1">
                        <stop offset="0"   stopColor="#6366f1" />
                        <stop offset="0.5" stopColor="#a855f7" />
                        <stop offset="1"   stopColor="#ec4899" />
                    </linearGradient>
                </defs>

                {/* decorative return arc */}
                <path
                    d="M430 95 Q 500 95 500 118 Q 500 138 460 138 L 60 138 Q 20 138 20 115 Q 20 95 90 95"
                    fill="none"
                    stroke="url(#lg-loop)"
                    strokeWidth="1.2"
                    strokeDasharray="3 5"
                    className="cv-loop-path d2"
                />

                {/* primary flow line — single continuous line the ball travels */}
                <line
                    x1="135" y1="70"
                    x2="385" y2="70"
                    stroke="url(#lg-loop)"
                    strokeWidth="1.6"
                    strokeDasharray="4 6"
                    className="cv-loop-path"
                />

                {/* ball drawn BEFORE nodes — passes behind each node */}
                <circle r="4.5" fill="#ec4899" className="cv-loop-ball">
                    <animateMotion
                        dur="3.2s"
                        repeatCount="indefinite"
                        path="M135 70 L385 70"
                        keyPoints="0;0.5;0.5;1;1"
                        keyTimes="0;0.45;0.55;0.95;1"
                        calcMode="linear"
                    />
                </circle>

                {/* nodes on top */}
                {nodes.map((n) => (
                    <g key={n.label}>
                        <rect
                            x={n.x - 46} y={52}
                            width="92" height="36" rx="11"
                            fill="rgba(255,255,255,0.95)"
                            stroke="rgba(168,85,247,0.3)"
                            strokeWidth="1"
                            className="cv-loop-rect"
                        />
                        <circle cx={n.x - 26} cy="70" r="4.5" fill="url(#lg-loop)" />
                        <text
                            x={n.x + 8} y="75"
                            textAnchor="middle"
                            fontFamily="SFMono-Regular, Consolas, monospace"
                            fontSize="13"
                            fontWeight="700"
                            fill="#0a0e27"
                        >
                            {n.label}
                        </text>
                    </g>
                ))}
            </svg>
        </div>
    );
}

function HexGrid() {
    const hexes = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 11; col++) {
            const x = col * 30 + (row % 2 ? 15 : 0) + 20;
            const y = row * 26 + 18;
            const delay = ((row + col) % 7) * 0.2;
            hexes.push(
                <polygon
                    key={`${row}-${col}`}
                    points="0,-14 12,-7 12,7 0,14 -12,7 -12,-7"
                    transform={`translate(${x} ${y})`}
                    className="cv-hex"
                    style={{ animationDelay: `${delay}s` }}
                />
            );
        }
    }
    return (
        <div className="cv cv-hex-wrap">
            <svg viewBox="0 0 360 150" className="cv-hex-svg" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <radialGradient id="hex-core" cx="50%" cy="50%">
                        <stop offset="0" stopColor="#a855f7" stopOpacity="0.45" />
                        <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
                    </radialGradient>
                </defs>
                <circle cx="180" cy="75" r="110" fill="url(#hex-core)" className="cv-hex-pulse" />
                {hexes}
            </svg>
        </div>
    );
}

function Phone() {
    return (
        <div className="cv cv-phone-wrap">
            <div className="cv-phone">
                <div className="cv-phone-notch" />
                <div className="cv-phone-screen">
                    <div className="cv-phone-head">
                        <span className="cv-phone-title">Discover</span>
                        <span className="cv-phone-bell" />
                    </div>
                    {[0, 1, 2].map((i) => (
                        <div className="cv-phone-row" key={i} style={{ animationDelay: `${i * 0.25}s` }}>
                            <span className="cv-phone-avatar" />
                            <span className="cv-phone-lines">
                                <span className="cv-phone-bar w1" />
                                <span className="cv-phone-bar w2" />
                            </span>
                            <span className="cv-phone-heart">♥</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cv-phone-side">
                <div className="cv-float-card">
                    <div className="cv-stars">★★★★★</div>
                    <div className="cv-float-small">4.9 · 2.1k reviews</div>
                </div>
                <div className="cv-float-card delay">
                    <div className="cv-float-big">10k+</div>
                    <div className="cv-float-small">daily active</div>
                </div>
                <div className="cv-float-card delay2 pill">
                    <span className="cv-dot-small" />
                    live on App Store
                </div>
            </div>
        </div>
    );
}

function Stack() {
    const layers = [
        { name: "Frontend", chip: "React" },
        { name: "API", chip: "Express" },
        { name: "Service", chip: "Java" },
        { name: "Database", chip: "Postgres" },
    ];
    return (
        <div className="cv cv-stack">
            <div className="cv-stack-col">
                {layers.map((l, i) => (
                    <div className="cv-stack-tile" key={l.name} style={{ animationDelay: `${i * 0.2}s` }}>
                        <span className="cv-stack-icon">◆</span>
                        <span className="cv-stack-label">{l.name}</span>
                        <span className="cv-stack-chip">{l.chip}</span>
                    </div>
                ))}
            </div>
            <svg className="cv-stack-flow" viewBox="0 0 80 180" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="stk-grad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#6366f1" />
                        <stop offset="1" stopColor="#ec4899" />
                    </linearGradient>
                </defs>
                <line x1="40" y1="10" x2="40" y2="170" stroke="url(#stk-grad)" strokeWidth="1.4" strokeDasharray="3 5" className="cv-loop-path" />
                {[30, 70, 110, 150].map((y, i) => (
                    <circle key={i} cx="40" cy={y} r="4" fill="#a855f7" className="cv-stack-pin" style={{ animationDelay: `${i * 0.3}s` }} />
                ))}
            </svg>
        </div>
    );
}

function Chart() {
    const bars = [28, 46, 60, 75, 86, 94];
    return (
        <div className="cv cv-chart">
            <div className="cv-chart-left">
                <div className="cv-chart-head">
                    <span className="cv-chart-label">coverage.xml</span>
                    <span className="cv-chart-val">95%+</span>
                </div>
                <div className="cv-chart-bars">
                    {bars.map((h, i) => (
                        <span
                            key={i}
                            className="cv-chart-bar"
                            style={{ "--h": `${h}%`, animationDelay: `${i * 0.1}s` }}
                        />
                    ))}
                </div>
                <div className="cv-chart-check">✓ passing · TDD · SonarQube</div>
            </div>
            <div className="cv-gauge">
                <svg viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="gauge-grad" x1="0" x2="1">
                            <stop offset="0" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(12,14,40,0.08)" strokeWidth="6" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gauge-grad)" strokeWidth="6" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="251.2" className="cv-gauge-ring" transform="rotate(-90 50 50)" />
                </svg>
                <div className="cv-gauge-text">
                    <span className="cv-gauge-num">95%</span>
                    <span className="cv-gauge-sub">covered</span>
                </div>
            </div>
        </div>
    );
}

function Regions() {
    // 5 AWS regions spread across 400x140 (roughly geographic)
    const pts = [
        { x: 70,  y: 58, label: "us-east-1"      },
        { x: 170, y: 44, label: "eu-west-1"      },
        { x: 200, y: 62, label: "eu-west-2"      },
        { x: 270, y: 70, label: "ap-south-1"     },
        { x: 340, y: 82, label: "ap-southeast-1" },
    ];
    return (
        <div className="cv cv-regions">
            <svg viewBox="0 0 400 140" className="cv-regions-svg" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id="arc-grad" x1="0" x2="1">
                        <stop offset="0"   stopColor="#6366f1" />
                        <stop offset="0.5" stopColor="#a855f7" />
                        <stop offset="1"   stopColor="#ec4899" />
                    </linearGradient>
                    <radialGradient id="rg-core" cx="50%" cy="50%">
                        <stop offset="0" stopColor="#a855f7" stopOpacity="0.15" />
                        <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
                    </radialGradient>
                </defs>
                <ellipse cx="200" cy="70" rx="180" ry="60" fill="url(#rg-core)" />
                {pts.slice(0, -1).map((p, i) => {
                    const n = pts[i + 1];
                    const mx = (p.x + n.x) / 2;
                    const my = Math.min(p.y, n.y) - 22;
                    return (
                        <path
                            key={i}
                            d={`M${p.x} ${p.y} Q ${mx} ${my} ${n.x} ${n.y}`}
                            fill="none"
                            stroke="url(#arc-grad)"
                            strokeWidth="1.3"
                            strokeDasharray="3 5"
                            className="cv-regions-arc"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        />
                    );
                })}
                {pts.map((p, i) => (
                    <g key={i}>
                        <circle cx={p.x} cy={p.y} r="6" className="cv-regions-ping"
                                style={{ animationDelay: `${i * 0.35}s` }} />
                        <circle cx={p.x} cy={p.y} r="3" className="cv-regions-dot" />
                        <text x={p.x} y={p.y + 18} className="cv-regions-label">{p.label}</text>
                    </g>
                ))}
            </svg>
        </div>
    );
}

function Network() {
    const layers = [
        [24, 52, 80, 108],
        [38, 66, 94],
        [52, 80],
        [66],
    ];
    const xStep = 90;
    const x0 = 40;
    const nodes = [];
    const edges = [];
    layers.forEach((layer, li) => {
        layer.forEach((y, ni) => {
            nodes.push({ x: li * xStep + x0, y, li, ni });
        });
    });
    layers.forEach((layer, li) => {
        if (li === layers.length - 1) return;
        const next = layers[li + 1];
        layer.forEach((y1, i1) => {
            next.forEach((y2, i2) => {
                edges.push({
                    x1: li * xStep + x0,
                    y1,
                    x2: (li + 1) * xStep + x0,
                    y2,
                    key: `${li}-${i1}-${i2}`,
                });
            });
        });
    });
    return (
        <div className="cv cv-network">
            <svg viewBox="0 0 400 140" className="cv-network-svg" preserveAspectRatio="xMidYMid meet">
                {edges.map((e, i) => (
                    <line key={e.key} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
                          className="cv-net-edge"
                          style={{ animationDelay: `${(i % 8) * 0.15}s` }} />
                ))}
                {nodes.map((n, i) => (
                    <circle key={i} cx={n.x} cy={n.y} r="5"
                            className="cv-net-node"
                            style={{ animationDelay: `${n.li * 0.2 + n.ni * 0.08}s` }} />
                ))}
                <text x="40"  y="132" className="cv-net-label">Input</text>
                <text x="300" y="132" className="cv-net-label">Output</text>
            </svg>
        </div>
    );
}

function Code() {
    const services = [
        { label: "AWS S3",   delay: 0 },
        { label: "Kafka",    delay: 0.3 },
        { label: "Redis",    delay: 0.6 },
        { label: "Postgres", delay: 0.9 },
        { label: "MongoDB",  delay: 1.2 },
    ];
    return (
        <div className="cv cv-code">
            <div className="cv-terminal cv-code-term">
                <div className="cv-term-bar">
                    <span className="cv-dot red" />
                    <span className="cv-dot yellow" />
                    <span className="cv-dot green" />
                    <span className="cv-term-title">app.py</span>
                </div>
                <pre className="cv-code-body">
                    <code>
                        <span className="tk-kw">import</span>{" "}
                        <span className="tk-id">mockmesh</span>
                        {"\n"}
                        <span className="tk-id">mockmesh</span>.
                        <span className="tk-fn">initialize</span>(){"\n\n"}
                        <span className="tk-kw">import</span>{" "}
                        <span className="tk-id">boto3</span>
                        {"\n"}s3 = <span className="tk-id">boto3</span>.
                        <span className="tk-fn">client</span>(
                        <span className="tk-str">"s3"</span>){"\n"}
                        s3.<span className="tk-fn">put_object</span>(…){"\n\n"}
                        <span className="tk-cm"># runs on laptop &amp; prod</span>
                    </code>
                </pre>
            </div>
            <div className="cv-code-side">
                <div className="cv-code-arrow">
                    <svg viewBox="0 0 60 40">
                        <defs>
                            <linearGradient id="ca-grad" x1="0" x2="1">
                                <stop offset="0" stopColor="#6366f1" />
                                <stop offset="1" stopColor="#ec4899" />
                            </linearGradient>
                        </defs>
                        <path d="M0 20 L50 20" stroke="url(#ca-grad)" strokeWidth="1.5"
                              strokeDasharray="3 4" className="cv-loop-path" />
                        <polygon points="50,14 60,20 50,26" fill="#ec4899" />
                    </svg>
                    <span className="cv-code-arrow-label">intercept</span>
                </div>
                <div className="cv-service-col">
                    {services.map((s) => (
                        <div
                            className="cv-service-chip"
                            key={s.label}
                            style={{ animationDelay: `${s.delay}s` }}
                        >
                            <span className="cv-service-dot" />
                            {s.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const VISUALS = {
    spark: Spark,
    loop: Loop,
    hex: HexGrid,
    phone: Phone,
    stack: Stack,
    chart: Chart,
    regions: Regions,
    network: Network,
    code: Code,
};

export default function ChapterVisual({ kind }) {
    const V = VISUALS[kind] || Spark;
    return (
        <div className="chapter-visual">
            <div className="chapter-visual-inner glass">
                <V />
                <div className="chapter-visual-glow" />
            </div>
        </div>
    );
}
