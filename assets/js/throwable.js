! function($) {
    "use strict";
    const restArguments = function(t, e) {
        return e = null == e ? t.length - 1 : +e,
            function(i, s) {
                for (var n = Math.max(arguments.length - e, 0), o = Array(n), a = 0; a < n; a++) o[a] = arguments[a + e];
                switch (e) {
                    case 0:
                        return t.call(this, o);
                    case 1:
                        return t.call(this, i, o);
                    case 2:
                        return t.call(this, i, s, o)
                }
                var l = Array(e + 1);
                for (a = 0; a < e; a++) l[a] = arguments[a];
                return l[e] = o, t.apply(this, l)
            }
    },
    tpDelay = restArguments((function(t, e, i) {
        return setTimeout((function() {
            return t.apply(null, i)
        }), e)
    }));
    window.tpDebounce = function(t, e, i) {
        var s, n, o = function(e, i) {
                s = null, i && (n = t.apply(e, i))
            },
            a = restArguments((function(a) {
                if (s && clearTimeout(s), i) {
                    var l = !s;
                    s = setTimeout(o, e), l && (n = t.apply(this, a))
                } else s = tpDelay(o, e, this, a);
                return n
            }));
        return a.cancel = function() {
            clearTimeout(s), s = null
        }, a
    };

    const t = "tpThrowable";
    let e = {
        roundness: "pill",
        scrollGravity: !1
    };
    class i {
        constructor(i, s) {
            this._defaults = e, this._name = t, this.options = {
                ...e,
                ...s
            }, this.DOM = {}, this.DOM.element = i, this.DOM.$element = $(i), this.DOM.throwables = this.DOM.element.querySelectorAll("[data-tp-throwable-el]"), this.onWindowResize = tpDebounce(this.onWindowResize.bind(this), 250), this.bodies = [], this.init()
        }
        init() {
            this.createWorld(), this.createBoundries(), this.createBodies(), this.enableRunner(), this.makeItRain(), this.bindResize()
        }
        enableRunner() {
            this.runnerObserver = new IntersectionObserver((([t]) => {
                this.runner.enabled = t.isIntersecting
            })).observe(this.DOM.element)
        }
        makeItRain() {
            new IntersectionObserver((([t], e) => {
                t.isIntersecting && (this.DOM.throwables.forEach((t => {
                    gsap.to(t, {
                        opacity: 1,
                        duration: .35,
                    })
                })), this.startRain(), e.disconnect())
            })).observe(this.DOM.element)
        }
        bindResize() {
            window.addEventListener("resize", this.onWindowResize)
        }
        createWorld() {
            this.height = this.DOM.element.offsetHeight || 520;
            this.width = this.DOM.element.offsetWidth || (this.DOM.element.parentElement ? this.DOM.element.parentElement.offsetWidth : 450);
            this.engine = Matter.Engine.create();
            this.runner = Matter.Runner.create();
            this.mouse = Matter.Mouse.create(this.DOM.element);
            this.DOM.element.removeEventListener("mousewheel", this.mouse.mousewheel);
            this.DOM.element.addEventListener("mouseleave", this.mouse.mouseup);
            this.mouseConstraint = Matter.MouseConstraint.create(this.engine, {
                mouse: this.mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: !1
                    }
                }
            });
            this.engine.gravity.y = .65;
            Matter.Composite.add(this.engine.world, [this.mouseConstraint]);
            Matter.Runner.start(this.runner, this.engine);
            Matter.Events.on(this.mouseConstraint, "mousedown", (() => {
                this.DOM.element.style.pointerEvents = "auto"
            }));
            Matter.Events.on(this.mouseConstraint, "mouseup", (() => {
                this.DOM.element.style.pointerEvents = ""
            }));
            this.runner.enabled = !1;
        }
        createBoundries() {
            const pad = 6;
            this.boundStart = Matter.Bodies.rectangle(-250 + pad, this.height / 2, 500, 4 * this.height, {
                isStatic: !0
            });
            this.boundEnd = Matter.Bodies.rectangle(this.width + 250 - pad, this.height / 2, 500, 4 * this.height, {
                isStatic: !0
            });
            this.boundBottom = Matter.Bodies.rectangle(this.width / 2, this.height + 250 - pad, this.width + 1000, 500, {
                isStatic: !0
            });
            Matter.Composite.add(this.engine.world, [this.boundBottom, this.boundStart, this.boundEnd]);
        }
        createBodies() {
            this.DOM.throwables.forEach(((t, e) => {
                const i = t.querySelector("span , div , img") || t,
                    s = t.getBoundingClientRect(),
                    w = (i.offsetWidth && i.offsetWidth > 10 ? i.offsetWidth : s.width) || 120,
                    h = (i.offsetHeight && i.offsetHeight > 10 ? i.offsetHeight : s.height) || 44,
                    n = gsap.quickSetter(t, "x", "px"),
                    o = gsap.quickSetter(t, "y", "px"),
                    angle = gsap.utils.random(-0.15 * Math.PI, 0.15 * Math.PI),
                    minX = w / 2 + 15,
                    maxX = Math.max(minX, this.width - w / 2 - 15),
                    r = gsap.utils.random(minX, maxX),
                    a = -w - (e * (h + 15) + 30),
                    radius = "sharp" === this.options.roundness ? 0 : Math.min(w, h) / 2,
                    u = Matter.Bodies.rectangle(r, a, w, h, {
                        chamfer: {
                            radius: radius
                        },
                        angle: angle,
                        isStatic: !0,
                        restitution: .45,
                        friction: 0.1,
                        frictionAir: 0.01
                    });
                this.bodies.push(u);
                Matter.Composite.add(this.engine.world, [u]);
                Matter.Events.on(this.runner, "tick", (() => {
                    if (this.runner.enabled) {
                        i.style.transform = "translate(-50%, -50%) rotate(" + u.angle.toFixed(2) + "rad)";
                        o(u.position.y.toFixed(1));
                        n(u.position.x.toFixed(1));
                    }
                }));
            }));
        }
        createTopBound() {
            if (this.boundTop) return;
            this.boundTop = Matter.Bodies.rectangle(this.width / 2, -250, this.width + 1000, 500, {
                isStatic: !0
            });
            Matter.Composite.add(this.engine.world, [this.boundTop]);
        }
        makeScrollGravity() {
            let t = 0;
            Matter.Events.on(this.runner, "tick", (() => {
                const e = document.documentElement.scrollTop - document.documentElement.clientTop,
                    i = e - t;
                this.engine.gravity.y = .65 - gsap.utils.clamp(-2, 4, .1 * i), t = e
            }))
        }
        updateBoundries() {
            const pad = 6;
            if (this.boundTop) {
                Matter.Body.setPosition(this.boundTop, {
                    x: this.width / 2,
                    y: -250
                });
                Matter.Body.setVertices(this.boundTop, Matter.Bodies.rectangle(this.width / 2, -250, this.width + 1000, 500, {
                    isStatic: !0
                }).vertices);
            }
            if (this.boundStart) {
                Matter.Body.setPosition(this.boundStart, {
                    x: -250 + pad,
                    y: this.height / 2
                });
                Matter.Body.setVertices(this.boundStart, Matter.Bodies.rectangle(-250 + pad, this.height / 2, 500, 4 * this.height, {
                    isStatic: !0
                }).vertices);
            }
            if (this.boundEnd) {
                Matter.Body.setPosition(this.boundEnd, {
                    x: this.width + 250 - pad,
                    y: this.height / 2
                });
                Matter.Body.setVertices(this.boundEnd, Matter.Bodies.rectangle(this.width + 250 - pad, this.height / 2, 500, 4 * this.height, {
                    isStatic: !0
                }).vertices);
            }
            if (this.boundBottom) {
                Matter.Body.setPosition(this.boundBottom, {
                    x: this.width / 2,
                    y: this.height + 250 - pad
                });
                Matter.Body.setVertices(this.boundBottom, Matter.Bodies.rectangle(this.width / 2, this.height + 250 - pad, this.width + 1000, 500, {
                    isStatic: !0
                }).vertices);
            }
        }
        updateBodies() {
            this.DOM.throwables.forEach(((t, e) => {
                const i = this.bodies[e];
                if (!i) return;
                const inner = t.querySelector("span , div , img") || t;
                const w = (inner.offsetWidth && inner.offsetWidth > 10 ? inner.offsetWidth : 120);
                const h = (inner.offsetHeight && inner.offsetHeight > 10 ? inner.offsetHeight : 44);
                const radius = "sharp" === this.options.roundness ? 0 : Math.min(w, h) / 2;
                const o = Matter.Bodies.rectangle(i.position.x, i.position.y, w, h, {
                    chamfer: {
                        radius: radius
                    },
                    angle: i.angle
                });
                Matter.Body.setVertices(i, o.vertices);
                if (i.position.y > this.height - h / 2) {
                    Matter.Body.setPosition(i, {
                        y: this.height - h / 2 - 10,
                        x: i.position.x
                    });
                }
                if (i.position.x > this.width - w / 2) {
                    const randX = gsap.utils.random(w / 2 + 15, Math.max(w / 2 + 15, this.width - w / 2 - 15));
                    Matter.Body.setPosition(i, {
                        y: i.position.y,
                        x: randX
                    });
                }
            }));
        }
        startRain() {
            this.bodies.forEach(((t, e) => {
                const i = setTimeout((() => {
                    Matter.Body.setStatic(t, !1), clearTimeout(i)
                }), 80 * e)
            }));
            let t = !1;
            Matter.Events.on(this.runner, "tick", (() => {
                if (!t && this.bodies.length > 0) {
                    const lastBody = this.bodies[this.bodies.length - 1];
                    if (lastBody.position.y > this.DOM.element.offsetHeight / 3) {
                        this.createTopBound();
                        if (this.options.scrollGravity) this.makeScrollGravity();
                        t = !0;
                    }
                }
            }));
        }
        refresh() {
            const newH = this.DOM.element.offsetHeight;
            const newW = this.DOM.element.offsetWidth;
            if (newH === 0 || newW === 0) return !1;
            if (this.height === newH && this.width === newW) return !1;
            this.height = newH;
            this.width = newW;
            const t = setTimeout((() => {
                this.updateBoundries();
                this.updateBodies();
                clearTimeout(t);
            }), 50);
        }
        onWindowResize() {
            this.refresh()
        }
        destroy() {
            this.runner.enabled = !1, Matter.Runner.stop(this.runner), window.removeEventListener("resize", this.onWindowResize)
        }
    }
    $.fn[t] = function(e) {
        return this.each((function() {
            const s = {
                ...$(this).data("throwable-options"),
                ...e
            };
            $.data(this, "plugin_" + t) || $.data(this, "plugin_" + t, new i(this, s))
        }))
    }
}(jQuery), jQuery(document).ready((function($) {
    $("[data-tp-throwable-scene]").tpThrowable();
    window.addEventListener("load", function() {
        $("[data-tp-throwable-scene]").each(function() {
            var plugin = $.data(this, "plugin_tpThrowable");
            if (plugin) plugin.refresh();
        });
    });
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function() {
            $("[data-tp-throwable-scene]").each(function() {
                var plugin = $.data(this, "plugin_tpThrowable");
                if (plugin) plugin.refresh();
            });
        });
    }
}));
