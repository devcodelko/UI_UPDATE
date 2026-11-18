/**
 * Diwali Dhamaka - Interactive Application Logic (jQuery & Vanilla JS)
 * Handles Audio, Confetti, Animations, Wish Generator & Diya Interactions
 */

$(document).ready(function () {
    // 1. Initialize Fireworks Canvas Engine
    const fireworks = new FireworksEngine('fireworksCanvas');

    // 2. Automatic Continuous Audio System (Zero UI buttons needed)
    let audioInitialized = false;

    function startAutoAudio() {
        if (!audioInitialized && window.diwaliAudio) {
            window.diwaliAudio.init();
            window.diwaliAudio.playFestiveMelody();
            audioInitialized = true;
        } else if (window.diwaliAudio && window.diwaliAudio.ctx && window.diwaliAudio.ctx.state === 'suspended') {
            window.diwaliAudio.ctx.resume();
        }
    }

    // Attempt to start immediately
    startAutoAudio();

    // Ensure audio starts seamlessly on any interaction or mouse movement
    $(window).one('click touchstart mousemove keydown', function () {
        startAutoAudio();
    });

    // 3. Automated Sequential Festive Show Engine (महा धमाका -> चकरी -> दीपोत्सव -> फूलों की बारिश)
    function triggerMegaDhamaka() {
        fireworks.triggerMegaDhamaka();
        if (window.confetti) {
            confetti({
                particleCount: 35,
                spread: 90,
                origin: { y: 0.55 },
                colors: ['#ffd700', '#ff5500', '#ff0055', '#ffffff']
            });
        }
    }

    function triggerChakri() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        fireworks.spawnChakri(w * 0.22, h * 0.82);
        setTimeout(() => {
            fireworks.spawnChakri(w * 0.5, h * 0.84);
        }, 350);
        setTimeout(() => {
            fireworks.spawnChakri(w * 0.78, h * 0.82);
        }, 700);
    }

    function triggerDeepotsav() {
        const diyas = $('.interactive-diya');
        diyas.each(function (index) {
            const $this = $(this);
            setTimeout(() => {
                $this.removeClass('unlit').addClass('lit');
                $this.css({ transform: 'scale(1.22) translateY(-3px)', filter: 'drop-shadow(0 0 10px #ffd700)' });
                setTimeout(() => {
                    $this.css({ transform: '', filter: '' });
                }, 300);

                if (window.diwaliAudio) {
                    window.diwaliAudio.playDiyaChime(1.0 + index * 0.08);
                }
            }, index * 80);
        });

        // Golden sparkles shower (optimized count for 60fps)
        if (window.confetti) {
            confetti({
                particleCount: 28,
                spread: 75,
                origin: { y: 0.72 },
                colors: ['#ffd700', '#ffaa00', '#fff3a8', '#ff7700']
            });
        }
    }

    function triggerPetals() {
        if (window.diwaliAudio) {
            window.diwaliAudio.playDiyaChime(1.2);
        }

        if (window.confetti) {
            const end = Date.now() + 2.0 * 1000;
            const colors = ['#ff8c00', '#ffd700', '#ff0055', '#d81b60', '#ffeb3b'];

            (function frame() {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 50,
                    origin: { x: 0 },
                    colors: colors
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 50,
                    origin: { x: 1 },
                    colors: colors
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        }
    }

    // Automated Deepotsav Effect (Runs automatically every 5 seconds)
    setTimeout(() => {
        triggerDeepotsav();
        setInterval(triggerDeepotsav, 5000);
    }, 2000);

    // =========================================================================
    // Automatic Fullscreen Engine (Auto-Enter on Page Load & First Interaction)
    // =========================================================================
    let userHasManuallyExitedFullscreen = false;

    function isFullscreen() {
        return !!(
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        );
    }

    function enterFullscreen() {
        if (isFullscreen() || userHasManuallyExitedFullscreen) return Promise.resolve();
        const docEl = document.documentElement;
        const requestMethod = docEl.requestFullscreen ||
                              docEl.webkitRequestFullscreen ||
                              docEl.mozRequestFullScreen ||
                              docEl.msRequestFullscreen;
        if (requestMethod) {
            try {
                const res = requestMethod.call(docEl);
                if (res && res.catch) {
                    return res.catch(() => {});
                }
            } catch (e) {}
        }
        return Promise.resolve();
    }

    function exitFullscreen() {
        if (!isFullscreen()) return Promise.resolve();
        const exitMethod = document.exitFullscreen ||
                           document.webkitExitFullscreen ||
                           document.mozCancelFullScreen ||
                           document.msExitFullscreen;
        if (exitMethod) {
            try {
                const res = exitMethod.call(document);
                if (res && res.catch) {
                    return res.catch(() => {});
                }
            } catch (e) {}
        }
        return Promise.resolve();
    }

    function toggleFullscreen() {
        if (!isFullscreen()) {
            userHasManuallyExitedFullscreen = false;
            enterFullscreen();
        } else {
            userHasManuallyExitedFullscreen = true;
            exitFullscreen();
        }
    }

    function updateFullscreenIcon() {
        const icon = $('#fullscreenIcon');
        const btn = $('#fullscreenToggleBtn');
        if (isFullscreen()) {
            icon.removeClass('fa-expand').addClass('fa-compress');
            btn.attr('title', 'फुल स्क्रीन से बाहर निकलें (Exit Fullscreen)');
        } else {
            icon.removeClass('fa-compress').addClass('fa-expand');
            btn.attr('title', 'फुल स्क्रीन मोड (Toggle Fullscreen)');
        }
    }

    // 1. Attempt automatic fullscreen immediately upon loading
    enterFullscreen();
    $(window).on('load', function () {
        enterFullscreen();
    });

    // 2. Browser Security Policy Fallback:
    // Most modern browsers (Chrome/Edge/Firefox) block automatic fullscreen without user interaction.
    // This seamlessly triggers fullscreen on the very first click, tap, or keypress anywhere on screen.
    $(window).one('click pointerdown touchstart keydown', function () {
        enterFullscreen();
    });

    // Manual Fullscreen Button Toggle
    $('#fullscreenToggleBtn').on('click', function (e) {
        e.stopPropagation();
        startAutoAudio();
        toggleFullscreen();
    });

    $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function () {
        updateFullscreenIcon();
        if (!isFullscreen()) {
            userHasManuallyExitedFullscreen = true;
        }
    });

    // Automated Celebration Loop: Run each effect automatically in sequence
    function startAutoFestiveLoop() {
        function runCycle() {
            // Step 1: महा धमाका (Rocket Blast)
            triggerMegaDhamaka();

            // Step 2: चकरी चलाएं (Spin Chakri) 5 seconds later
            setTimeout(() => {
                triggerChakri();
            }, 5000);

            // Step 3: दीपोत्सव (Light All Diyas) 10 seconds later
            setTimeout(() => {
                triggerDeepotsav();
            }, 10000);

            // Step 4: फूलों की बारिश (Petal Shower) 15 seconds later
            setTimeout(() => {
                triggerPetals();
            }, 15000);
        }

        // Start first cycle after brief initial delay
        setTimeout(() => {
            runCycle();
            // Continuously repeat every 20 seconds
            setInterval(runCycle, 20000);
        }, 1500);
    }

    startAutoFestiveLoop();

    // Kinetic Entrance Assembly Fanfare (When flying letters lock into place)
    setTimeout(() => {
        if (window.confetti) {
            confetti({
                particleCount: 40,
                spread: 110,
                origin: { y: 0.38 },
                colors: ['#ffd700', '#ff9900', '#ff0055', '#ffffff']
            });
        }
        if (window.diwaliAudio) {
            window.diwaliAudio.playDiyaChime(1.5);
        }
    }, 1800);

    // 4. Hero Title Click Celebration & Replay Flight
    $('.main-title').on('click', function (e) {
        e.stopPropagation();
        startAutoAudio();
        if (window.confetti) {
            confetti({
                particleCount: 50,
                spread: 120,
                origin: { y: 0.38 },
                colors: ['#ffd700', '#ff9900', '#ff0055', '#ffffff']
            });
        }
        if (window.diwaliAudio) {
            window.diwaliAudio.playRocketWhistle();
        }

        // Replay the flying text intro animation!
        const b = document.body;
        b.classList.remove('fly-active');
        void b.offsetWidth; // Force CSS reflow
        b.classList.add('fly-active');
    });

    // Hero Grand Diya Click Effect
    $('#mainHeroDiya').on('click', function (e) {
        e.stopPropagation();
        startAutoAudio();
        const rect = this.getBoundingClientRect();
        const targetX = rect.left + rect.width / 2;
        const targetY = rect.top;

        // Burst a heart or golden willow right above it
        fireworks.explode(targetX, targetY - 60, ['#ffd700', '#ffaa00', '#ff3300', '#ffffff'], 'heart');
        if (window.diwaliAudio) {
            window.diwaliAudio.playDiyaChime(1.4);
        }
    });

    // 5. Dynamic Diya Parade in Bottom Dock (9 Interactive Diyas)
    const diyaStrip = $('#diyaStrip');
    const diyaSvgTemplate = `
        <svg viewBox="0 0 100 80" class="diya-svg">
            <defs>
                <linearGradient id="stripClayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ff7b00" />
                    <stop offset="100%" stop-color="#7a1c00" />
                </linearGradient>
                <linearGradient id="stripFlameGrad" x1="50%" y1="100%" x2="50%" y2="0%">
                    <stop offset="0%" stop-color="#ff0000" />
                    <stop offset="50%" stop-color="#ff9900" />
                    <stop offset="100%" stop-color="#ffffff" />
                </linearGradient>
            </defs>
            <!-- Flame Group -->
            <g class="diya-flame">
                <circle cx="50" cy="22" r="14" fill="#ffd700" opacity="0.4" filter="blur(2px)"/>
                <path d="M50,4 C56,15 60,24 58,32 C56,38 52,40 50,40 C48,40 44,38 42,32 C40,24 44,15 50,4 Z" fill="url(#stripFlameGrad)"/>
            </g>
            <!-- Clay Body -->
            <path d="M12,45 Q50,78 88,45 C85,68 68,76 50,76 C32,76 15,68 12,45 Z" fill="url(#stripClayGrad)" stroke="#ffd700" stroke-width="1.5"/>
            <ellipse cx="50" cy="45" rx="38" ry="9" fill="#ff9900" stroke="#ffd700" stroke-width="1.5"/>
        </svg>
    `;

    for (let i = 0; i < 9; i++) {
        const diyaElem = $(`<div class="interactive-diya lit" data-index="${i}" title="दीप पर क्लिक करके जलाएं या बुझाएं">${diyaSvgTemplate}</div>`);
        diyaStrip.append(diyaElem);
    }

    // Toggle individual diya on click
    $('.interactive-diya').on('click', function (e) {
        e.stopPropagation();
        startAutoAudio();
        const $this = $(this);
        const idx = $this.data('index');

        if ($this.hasClass('lit')) {
            $this.removeClass('lit').addClass('unlit');
        } else {
            $this.removeClass('unlit').addClass('lit');
            if (window.diwaliAudio) {
                window.diwaliAudio.playDiyaChime(0.9 + idx * 0.1);
            }
            // Burst small sparkles at diya location
            const rect = this.getBoundingClientRect();
            fireworks.addSparkler(rect.left + rect.width / 2, rect.top);
        }
    });

    // Clean initial startup (Choreographed sequence runs automatically)
});

