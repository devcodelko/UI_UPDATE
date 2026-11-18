/**
 * Diwali Dhamaka Fireworks & Particle Engine
 * 100% Smooth Continuous Physics - No Freezing, No Ghost Trails, Full 60 FPS
 */

class FireworksEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        // Alpha must be true so the canvas can overlay transparently and clear cleanly
        this.ctx = this.canvas.getContext('2d');
        this.rockets = [];
        this.particles = [];
        this.sparklers = [];
        this.chakris = [];
        this.floatingEmbers = [];
        this.isRunning = true;
        this.autoLaunchTimer = 0;
        this.sparklerActive = true;
        this.lastSparklerTime = 0;
        
        this.colorPalettes = [
            ['#ffd700', '#ff6600', '#ff0055', '#ffffff', '#ffaa00'], // Gold & Fire
            ['#00ffff', '#00bfff', '#ff00ea', '#ffffff', '#7b00ff'], // Neon Cosmic
            ['#00ff88', '#76ff03', '#ffff00', '#ffffff', '#00e676'], // Festive Green & Gold
            ['#ff1744', '#ff4081', '#ffd700', '#ffffff', '#f50057'], // Ruby & Rose
            ['#ffd700', '#ffea00', '#fff3a8', '#ffffff', '#ff9900'], // Royal Golden Willow
            ['#ff3d00', '#ff9100', '#ffea00', '#ffffff', '#ff1744'], // Deep Sunset Glow
        ];

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.createEmbers(20);
        this.setupEvents();
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    createEmbers(count) {
        this.floatingEmbers = [];
        for (let i = 0; i < count; i++) {
            this.floatingEmbers.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 1.5 + 0.8,
                color: Math.random() > 0.4 ? 'rgba(255, 215, 0, ' : 'rgba(255, 120, 0, ',
                alpha: Math.random() * 0.7 + 0.2,
                vx: (Math.random() - 0.5) * 0.35,
                vy: -Math.random() * 0.45 - 0.2,
                pulse: Math.random() * Math.PI
            });
        }
    }

    setupEvents() {
        // Throttled mouse sparklers
        const onMove = (x, y) => {
            const now = performance.now();
            if (this.sparklerActive && (now - this.lastSparklerTime > 30)) {
                this.addSparkler(x, y);
                this.lastSparklerTime = now;
                if (window.diwaliAudio && Math.random() > 0.88) {
                    window.diwaliAudio.playSparkler();
                }
            }
        };

        window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                onMove(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        // Click to launch rocket toward target
        window.addEventListener('click', (e) => {
            if (e.target.closest('button, input, a, .interactive-card, .greeting-form, .bottom-diya-dock')) {
                return;
            }
            this.launchTargetRocket(e.clientX, e.clientY);
        });
    }

    launchTargetRocket(targetX, targetY) {
        const startX = this.width * 0.2 + Math.random() * (this.width * 0.6);
        const startY = this.height;
        const color = this.getRandomPalette();

        if (window.diwaliAudio) {
            window.diwaliAudio.playRocketLaunch();
        }

        this.rockets.push(new Rocket(startX, startY, targetX, targetY, color, () => {
            this.explode(targetX, targetY, color);
        }));
    }

    launchRandomRocket() {
        const targetX = this.width * 0.15 + Math.random() * (this.width * 0.7);
        const targetY = this.height * 0.12 + Math.random() * (this.height * 0.42);
        this.launchTargetRocket(targetX, targetY);
    }

    explode(x, y, palette, forcedType = null) {
        if (window.diwaliAudio) {
            window.diwaliAudio.playExplosion(1.0);
        }

        const types = ['peony', 'willow', 'ring', 'heart'];
        const type = forcedType || types[Math.floor(Math.random() * types.length)];
        const count = type === 'willow' ? 55 : (type === 'ring' ? 45 : 50);

        for (let i = 0; i < count; i++) {
            let vx, vy;

            if (type === 'ring') {
                const angle = (i / count) * Math.PI * 2;
                const r = 4.2 + Math.random() * 0.8;
                vx = Math.cos(angle) * r;
                vy = Math.sin(angle) * r;
            } else if (type === 'heart') {
                const t = (i / count) * Math.PI * 2;
                vx = (16 * Math.pow(Math.sin(t), 3)) * 0.22;
                vy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * 0.22;
                vx += (Math.random() - 0.5) * 0.3;
                vy += (Math.random() - 0.5) * 0.3;
            } else if (type === 'willow') {
                const angle = Math.random() * Math.PI * 2;
                const spd = Math.random() * 4.5 + 2.0;
                vx = Math.cos(angle) * spd;
                vy = Math.sin(angle) * spd - 1.0; // slight initial upward burst
            } else {
                const angle = Math.random() * Math.PI * 2;
                const spd = Math.random() * 5.5 + 2.0;
                vx = Math.cos(angle) * spd;
                vy = Math.sin(angle) * spd;
            }

            const pColor = palette[i % palette.length];
            this.particles.push(new FireworkParticle(x, y, vx, vy, pColor, type));
        }

        // Mini crackle sparks that flash white/gold
        for (let c = 0; c < 14; c++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = Math.random() * 6.5 + 1.5;
            this.particles.push(new FireworkParticle(
                x, y,
                Math.cos(angle) * spd,
                Math.sin(angle) * spd,
                '#ffffff',
                'spark'
            ));
        }
    }

    addSparkler(x, y) {
        for (let i = 0; i < 2; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 2.8 + 1;
            this.sparklers.push(new SparklerParticle(
                x, y,
                Math.cos(angle) * speed,
                Math.sin(angle) * speed
            ));
        }
    }

    spawnChakri(x, y) {
        if (window.diwaliAudio) {
            window.diwaliAudio.playChakriSound();
        }
        this.chakris.push(new GroundChakri(x, y));
    }

    triggerMegaDhamaka() {
        const count = 5;
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const tx = (this.width / (count + 1)) * (i + 1) + (Math.random() - 0.5) * 60;
                const ty = this.height * 0.16 + Math.random() * (this.height * 0.28);
                this.launchTargetRocket(tx, ty);
            }, i * 200);
        }
    }

    getRandomPalette() {
        return this.colorPalettes[Math.floor(Math.random() * this.colorPalettes.length)];
    }

    animate() {
        if (!this.isRunning) return;

        // Clean trail decay: smoothly erases previous frame alpha with zero ghost residue
        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Additive blending for luminous firecracker glow
        this.ctx.globalCompositeOperation = 'lighter';

        // 1. Floating Embers
        for (let i = 0; i < this.floatingEmbers.length; i++) {
            const ember = this.floatingEmbers[i];
            ember.y += ember.vy;
            ember.x += ember.vx + Math.sin(ember.pulse) * 0.25;
            ember.pulse += 0.03;

            if (ember.y < -10) {
                ember.y = this.height + 10;
                ember.x = Math.random() * this.width;
            }

            const currentAlpha = ember.alpha * (0.6 + 0.4 * Math.sin(ember.pulse));
            this.ctx.globalAlpha = currentAlpha;
            this.ctx.fillStyle = ember.color + currentAlpha + ')';
            this.ctx.beginPath();
            this.ctx.arc(ember.x, ember.y, ember.radius, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // 2. Rockets
        for (let i = this.rockets.length - 1; i >= 0; i--) {
            const r = this.rockets[i];
            r.update();
            r.draw(this.ctx);
            if (r.exploded) {
                this.rockets.splice(i, 1);
            }
        }

        // 3. Firework Particles (Smooth Continuous Streaks)
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.update();
            p.draw(this.ctx);
            if (p.isDead()) {
                this.particles.splice(i, 1);
            }
        }

        // 4. Sparklers (Cursor / Touch)
        for (let i = this.sparklers.length - 1; i >= 0; i--) {
            const s = this.sparklers[i];
            s.update();
            s.draw(this.ctx);
            if (s.isDead()) {
                this.sparklers.splice(i, 1);
            }
        }

        // 5. Ground Chakris
        for (let i = this.chakris.length - 1; i >= 0; i--) {
            const c = this.chakris[i];
            c.update(this);
            c.draw(this.ctx);
            if (c.isDead()) {
                this.chakris.splice(i, 1);
            }
        }

        // Ambient occasional rocket
        this.autoLaunchTimer++;
        if (this.autoLaunchTimer > 160) {
            this.launchRandomRocket();
            this.autoLaunchTimer = Math.floor(Math.random() * 40);
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Rocket Class (Smooth Ascending Fire Tail)
class Rocket {
    constructor(startX, startY, targetX, targetY, palette, onExplode) {
        this.x = startX;
        this.y = startY;
        this.targetX = targetX;
        this.targetY = targetY;
        this.palette = palette;
        this.onExplode = onExplode;
        this.exploded = false;

        const dx = targetX - startX;
        const dy = targetY - startY;
        this.angle = Math.atan2(dy, dx);
        this.speed = 14 + Math.random() * 2;
        this.history = [];
        this.maxHistory = 6;
    }

    update() {
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxHistory) {
            this.history.shift();
        }

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.y <= this.targetY || Math.hypot(this.targetX - this.x, this.targetY - this.y) < 22) {
            this.exploded = true;
            this.onExplode();
        }
    }

    draw(ctx) {
        if (this.history.length === 0) return;

        ctx.globalAlpha = 0.9;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#ffd700';

        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
            ctx.lineTo(this.history[i].x, this.history[i].y);
        }
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        // White hot tip
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Firework Particle Class (Continuous Flowing Streak - NEVER Freezes!)
class FireworkParticle {
    constructor(x, y, vx, vy, color, type = 'peony') {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.type = type;
        this.alpha = 1;

        // Tuned decay and gravity for graceful continuous arching water-fall
        if (type === 'willow') {
            this.decay = 0.016 + Math.random() * 0.006;
            this.gravity = 0.13; // Continuous downward gravitational pull
            this.friction = 0.972;
            this.maxHistory = 5;
        } else if (type === 'spark') {
            this.decay = 0.038;
            this.gravity = 0.08;
            this.friction = 0.95;
            this.maxHistory = 3;
        } else {
            this.decay = 0.022 + Math.random() * 0.008;
            this.gravity = 0.11;
            this.friction = 0.968;
            this.maxHistory = 4;
        }

        this.history = [];
    }

    update() {
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxHistory) {
            this.history.shift();
        }

        // Apply friction and continuous gravity so particles gracefully curve downwards and never freeze
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;

        this.alpha -= this.decay;
    }

    draw(ctx) {
        if (this.alpha <= 0 || this.history.length === 0) return;

        // Towards the end of life, add slight twinkle
        const displayAlpha = (this.alpha < 0.35 && Math.random() > 0.4) ? this.alpha * 0.6 : this.alpha;
        ctx.globalAlpha = displayAlpha;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.type === 'willow' ? 1.8 : 2.2;
        ctx.lineCap = 'round';

        // Draw continuous smooth flowing motion streak
        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
            ctx.lineTo(this.history[i].x, this.history[i].y);
        }
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        // Bright spark tip
        ctx.fillStyle = (this.alpha > 0.4) ? '#ffffff' : this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
    }

    isDead() {
        return this.alpha <= 0;
    }
}

// Sparkler Particle for Mouse & Touch Trail
class SparklerParticle {
    constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.alpha = 1;
        this.decay = 0.05 + Math.random() * 0.03;
        this.color = ['#ffffff', '#fff275', '#ff9f1c', '#ffd700'][Math.floor(Math.random() * 4)];
        this.prevX = x;
        this.prevY = y;
    }

    update() {
        this.prevX = this.x;
        this.prevY = this.y;
        this.vy += 0.12;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
    }

    draw(ctx) {
        if (this.alpha <= 0) return;
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(this.prevX, this.prevY);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
    }

    isDead() {
        return this.alpha <= 0;
    }
}

// Ground Chakri (Spinning Wheel of Fire)
class GroundChakri {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.speed = 0.38;
        this.life = 90;
        this.radius = 16;
    }

    update(engine) {
        this.angle += this.speed;
        this.life--;

        if (this.life > 0) {
            for (let arm = 0; arm < 3; arm++) {
                const curAngle = this.angle + (arm * (Math.PI * 2 / 3));
                const sparkX = this.x + Math.cos(curAngle) * this.radius;
                const sparkY = this.y + Math.sin(curAngle) * this.radius;
                const spd = Math.random() * 4 + 2.5;
                const tangentAngle = curAngle + Math.PI / 2 + (Math.random() - 0.5) * 0.3;

                engine.particles.push(new FireworkParticle(
                    sparkX, sparkY,
                    Math.cos(tangentAngle) * spd,
                    Math.sin(tangentAngle) * spd,
                    Math.random() > 0.4 ? '#ffd700' : '#ff5500',
                    'spark'
                ));
            }
        }
    }

    draw(ctx) {
        if (this.life <= 0) return;
        ctx.globalAlpha = Math.min(1, this.life / 20);

        // Core wheel
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ff8800';
        ctx.fill();

        // Spokes
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        for (let i = 0; i < 3; i++) {
            const a = this.angle + (i * Math.PI * 2 / 3);
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + Math.cos(a) * this.radius, this.y + Math.sin(a) * this.radius);
            ctx.stroke();
        }
    }

    isDead() {
        return this.life <= 0;
    }
}

window.FireworksEngine = FireworksEngine;
