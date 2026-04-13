import React, { useEffect, useRef } from "react";
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BufferGeometry,
    BufferAttribute,
    Points,
    ShaderMaterial,
    AdditiveBlending,
    Color,
    Group,
    Clock,
} from "three";

// Fibonacci sphere — evenly distributed points across a unit sphere
function fibonacciSphere(samples, radius) {
    const positions = new Float32Array(samples * 3);
    const colors = new Float32Array(samples * 3);
    const phi = Math.PI * (3 - Math.sqrt(5));

    const top = new Color("#6366f1");    // indigo
    const mid = new Color("#a855f7");    // violet
    const bot = new Color("#ec4899");    // pink

    for (let i = 0; i < samples; i++) {
        const y = 1 - (i / (samples - 1)) * 2;
        const rAtY = Math.sqrt(1 - y * y);
        const theta = phi * i;
        const x = Math.cos(theta) * rAtY;
        const z = Math.sin(theta) * rAtY;

        positions[i * 3] = x * radius;
        positions[i * 3 + 1] = y * radius;
        positions[i * 3 + 2] = z * radius;

        // vertical gradient: top → mid → bot
        const t = (y + 1) / 2; // 0..1
        const c = new Color();
        if (t > 0.5) c.copy(top).lerp(mid, (1 - t) * 2);
        else c.copy(mid).lerp(bot, (0.5 - t) * 2);

        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
}

export default function Globe() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const scene = new Scene();
        const rect = canvas.getBoundingClientRect();
        const w = rect.width || 600;
        const h = rect.height || 600;

        const camera = new PerspectiveCamera(45, w / h, 0.1, 100);
        camera.position.z = 5;

        const renderer = new WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(w, h, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const group = new Group();
        scene.add(group);

        // --- Outer dotted shell
        const outer = fibonacciSphere(3200, 1.7);
        const outerGeom = new BufferGeometry();
        outerGeom.setAttribute("position", new BufferAttribute(outer.positions, 3));
        outerGeom.setAttribute("color", new BufferAttribute(outer.colors, 3));

        const dotMaterial = new ShaderMaterial({
            transparent: true,
            depthWrite: false,
            blending: AdditiveBlending,
            vertexColors: true,
            uniforms: {
                uSize: { value: 6.0 * Math.min(window.devicePixelRatio, 2) },
            },
            vertexShader: `
                attribute vec3 color;
                varying vec3 vColor;
                varying float vDepth;
                uniform float uSize;
                void main() {
                    vColor = color;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    vDepth = -mvPosition.z;
                    gl_PointSize = uSize * (1.6 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                varying float vDepth;
                void main() {
                    vec2 c = gl_PointCoord - vec2(0.5);
                    float d = length(c);
                    if (d > 0.5) discard;
                    float alpha = smoothstep(0.5, 0.15, d);
                    // fade back-hemisphere for depth
                    float front = clamp((6.5 - vDepth) / 3.0, 0.25, 1.0);
                    gl_FragColor = vec4(vColor, alpha * front * 0.95);
                }
            `,
        });

        const outerPoints = new Points(outerGeom, dotMaterial);
        group.add(outerPoints);

        // --- Inner fainter shell for depth
        const inner = fibonacciSphere(1400, 1.35);
        const innerGeom = new BufferGeometry();
        innerGeom.setAttribute("position", new BufferAttribute(inner.positions, 3));
        innerGeom.setAttribute("color", new BufferAttribute(inner.colors, 3));

        const innerMaterial = dotMaterial.clone();
        innerMaterial.uniforms = {
            uSize: { value: 3.5 * Math.min(window.devicePixelRatio, 2) },
        };
        const innerPoints = new Points(innerGeom, innerMaterial);
        innerPoints.material.opacity = 0.5;
        group.add(innerPoints);

        const clock = new Clock();
        let raf;
        let mx = 0, my = 0, tx = 0, ty = 0;

        const onMove = (e) => {
            const r = canvas.getBoundingClientRect();
            const nx = (e.clientX - r.left) / r.width - 0.5;
            const ny = (e.clientY - r.top) / r.height - 0.5;
            tx = nx * 0.4;
            ty = ny * 0.3;
        };
        window.addEventListener("mousemove", onMove);

        const tick = () => {
            const dt = clock.getDelta();
            mx += (tx - mx) * 0.05;
            my += (ty - my) * 0.05;

            group.rotation.y += dt * 0.18;
            group.rotation.x = my * 0.6;
            group.position.x = mx * 0.15;

            renderer.render(scene, camera);
            raf = requestAnimationFrame(tick);
        };
        tick();

        const onResize = () => {
            const r = canvas.getBoundingClientRect();
            if (!r.width || !r.height) return;
            renderer.setSize(r.width, r.height, false);
            camera.aspect = r.width / r.height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", onMove);
            renderer.dispose();
            outerGeom.dispose();
            innerGeom.dispose();
            dotMaterial.dispose();
            innerMaterial.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} className="globe-canvas" />;
}
