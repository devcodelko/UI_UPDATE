// Procedural Web Audio API Sound Generator for Diwali Dhamaka
// Zero external dependencies, works 100% reliably in any modern browser!

class DiwaliAudioEngine {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.bgMusicPlaying = false;
        this.bgOscillators = [];
        this.gainNode = null;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            this.gainNode = this.ctx.createGain();
            this.gainNode.connect(this.ctx.destination);
            this.gainNode.gain.value = 0.8;

            // Pre-cache white noise buffer once to eliminate runtime garbage collection & CPU freezes
            const bufferSize = this.ctx.sampleRate * 0.85;
            this.cachedNoiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const output = this.cachedNoiseBuffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                output[i] = Math.random() * 2 - 1;
            }
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.init();
        this.isMuted = !this.isMuted;
        if (this.gainNode) {
            this.gainNode.gain.setValueAtTime(this.isMuted ? 0 : 0.8, this.ctx.currentTime);
        }
        if (this.isMuted && this.bgMusicPlaying) {
            this.stopFestiveMelody();
        } else if (!this.isMuted && !this.bgMusicPlaying) {
            this.playFestiveMelody();
        }
        return this.isMuted;
    }

    // 1. Firework Launch Whistle
    playRocketLaunch() {
        if (this.isMuted) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(250, now);
        osc.frequency.exponentialRampToValueAtTime(1100, now + 0.65);

        // Filter for whoosh
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(600, now);
        filter.frequency.exponentialRampToValueAtTime(1400, now + 0.65);
        filter.Q.value = 3;

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.2, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.gainNode);

        osc.start(now);
        osc.stop(now + 0.7);
    }

    // 2. Big Firework Blast (Dhamaka)
    playExplosion(intensity = 1.0) {
        if (this.isMuted) return;
        this.init();
        const now = this.ctx.currentTime;

        // Sub bass punch
        const subOsc = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(140 * intensity, now);
        subOsc.frequency.exponentialRampToValueAtTime(25, now + 0.45);

        subGain.gain.setValueAtTime(0.7 * intensity, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

        subOsc.connect(subGain);
        subGain.connect(this.gainNode);
        subOsc.start(now);
        subOsc.stop(now + 0.5);

        // White noise explosion burst (Using pre-cached buffer for 0% CPU allocation)
        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = this.cachedNoiseBuffer;

        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.setValueAtTime(1200 * intensity, now);
        noiseFilter.frequency.exponentialRampToValueAtTime(60, now + 0.85);

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.85 * intensity, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

        whiteNoise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.gainNode);

        whiteNoise.start(now);
        whiteNoise.stop(now + 0.9);

        // Crackling sparks in burst
        setTimeout(() => {
            this.playCrackle();
        }, 150);
    }

    // 3. Crackling Sparks (Chatak-Matak)
    playCrackle() {
        if (this.isMuted) return;
        this.init();
        const now = this.ctx.currentTime;
        const count = 7 + Math.floor(Math.random() * 8);

        for (let i = 0; i < count; i++) {
            const time = now + Math.random() * 0.45;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(1800 + Math.random() * 2400, time);

            gain.gain.setValueAtTime(0.08, time);
            gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.04);

            osc.connect(gain);
            gain.connect(this.gainNode);
            osc.start(time);
            osc.stop(time + 0.05);
        }
    }

    // 4. Sparkler / Phuljhadi Sizzle (Mouse trail or button)
    playSparkler() {
        if (this.isMuted) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(2800 + Math.random() * 1200, now);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc.connect(gain);
        gain.connect(this.gainNode);
        osc.start(now);
        osc.stop(now + 0.08);
    }

    // 5. Diya Lighting Divine Temple Bell Chime
    playDiyaChime(pitchMultiplier = 1.0) {
        if (this.isMuted) return;
        this.init();
        const now = this.ctx.currentTime;
        const harmonics = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C Major Pentatonic harmony

        harmonics.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq * pitchMultiplier, now + idx * 0.04);

            gain.gain.setValueAtTime(0.15 / (idx + 1), now + idx * 0.04);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2 + idx * 0.1);

            osc.connect(gain);
            gain.connect(this.gainNode);

            osc.start(now + idx * 0.04);
            osc.stop(now + 1.5 + idx * 0.1);
        });
    }

    // 6. Whirling Chakri Sound
    playChakriSound() {
        if (this.isMuted) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(450, now + 0.8);
        osc.frequency.linearRampToValueAtTime(120, now + 1.8);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);
        filter.frequency.linearRampToValueAtTime(1400, now + 0.8);
        filter.frequency.linearRampToValueAtTime(300, now + 1.8);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0.2, now + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.gainNode);

        osc.start(now);
        osc.stop(now + 1.8);

        // Crackling accompanying chakri
        for (let t = 0; t < 6; t++) {
            setTimeout(() => {
                this.playCrackle();
            }, t * 250);
        }
    }

    // 7. Ambient Festive Tanpura / Drone & Chimes (Gentle Loop)
    playFestiveMelody() {
        if (this.isMuted || this.bgMusicPlaying) return;
        this.init();
        this.bgMusicPlaying = true;

        const now = this.ctx.currentTime;
        // Warm meditative Indian root notes (Sa - Pa: D & A harmonic drone)
        const notes = [146.83, 220.00, 293.66]; // D3, A3, D4

        notes.forEach(f => {
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(f, now);

            // Subtle vibrato
            const lfo = this.ctx.createOscillator();
            lfo.frequency.value = 0.5;
            const lfoGain = this.ctx.createGain();
            lfoGain.gain.value = 1.2;
            lfo.connect(osc.frequency);
            lfo.start(now);

            g.gain.setValueAtTime(0.001, now);
            g.gain.linearRampToValueAtTime(0.025, now + 3);

            osc.connect(g);
            g.connect(this.gainNode);
            osc.start(now);

            this.bgOscillators.push({ osc, gain: g, lfo });
        });

        // Periodic gentle bell notes
        this.bgChimeInterval = setInterval(() => {
            if (!this.isMuted && this.bgMusicPlaying) {
                const pentatonic = [587.33, 659.25, 739.99, 880.00, 1046.50, 1174.66];
                const note = pentatonic[Math.floor(Math.random() * pentatonic.length)];
                const nTime = this.ctx.currentTime;
                const bOsc = this.ctx.createOscillator();
                const bGain = this.ctx.createGain();
                bOsc.type = 'sine';
                bOsc.frequency.setValueAtTime(note, nTime);
                bGain.gain.setValueAtTime(0.03, nTime);
                bGain.gain.exponentialRampToValueAtTime(0.0001, nTime + 2.5);
                bOsc.connect(bGain);
                bGain.connect(this.gainNode);
                bOsc.start(nTime);
                bOsc.stop(nTime + 2.6);
            }
        }, 3200);
    }

    stopFestiveMelody() {
        this.bgMusicPlaying = false;
        if (this.bgChimeInterval) {
            clearInterval(this.bgChimeInterval);
        }
        if (this.bgOscillators.length > 0) {
            const now = this.ctx.currentTime;
            this.bgOscillators.forEach(item => {
                item.gain.gain.linearRampToValueAtTime(0.0001, now + 1);
                setTimeout(() => {
                    try {
                        item.osc.stop();
                        item.lfo.stop();
                    } catch (e) {}
                }, 1100);
            });
            this.bgOscillators = [];
        }
    }
}

window.diwaliAudio = new DiwaliAudioEngine();

