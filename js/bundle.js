!function(t) {
    var e = {};
    function n(o) {
        if (e[o])
            return e[o].exports;
        var i = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 0)
}([function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(1)
      , i = (n.n(o),
    n(2))
      , r = (n.n(i),
    n(3));
    new (n.n(r).a)({
        trigger: {
            once: !1,
            offset: {
                element: {
                    y: .4
                }
            },
            toggle: {
                class: {
                    in: "active",
                    out: "inactive"
                }
            }
        }
    }).add("[data-trigger]")/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */
    ;
    var s = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }
      , l = function(t) {
        return "IMG" === t.tagName
    }
      , c = function(t) {
        return t && 1 === t.nodeType
    }
      , a = function(t) {
        return ".svg" === (t.currentSrc || t.src).substr(-4).toLowerCase()
    }
      , u = function(t) {
        try {
            return Array.isArray(t) ? t.filter(l) : function(t) {
                return NodeList.prototype.isPrototypeOf(t)
            }(t) ? [].slice.call(t).filter(l) : c(t) ? [t].filter(l) : "string" == typeof t ? [].slice.call(document.querySelectorAll(t)).filter(l) : []
        } catch (t) {
            throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")
        }
    }
      , h = function(t, e) {
        var n = s({
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        }, e);
        if ("function" == typeof window.CustomEvent)
            return new CustomEvent(t,n);
        var o = document.createEvent("CustomEvent");
        return o.initCustomEvent(t, n.bubbles, n.cancelable, n.detail),
        o
    }
      , d = function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , o = window.Promise || function(t) {
            function e() {}
            t(e, e)
        }
          , i = function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            var o = e.reduce(function(t, e) {
                return [].concat(t, u(e))
            }, []);
            return o.filter(function(t) {
                return -1 === f.indexOf(t)
            }).forEach(function(t) {
                f.push(t),
                t.classList.add("medium-zoom-image")
            }),
            m.forEach(function(t) {
                var e = t.type
                  , n = t.listener
                  , i = t.options;
                o.forEach(function(t) {
                    t.addEventListener(e, n, i)
                })
            }),
            w
        }
          , r = function() {
            var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).target
              , e = function() {
                var t = {
                    width: screen.width,
                    height: screen.height,
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
                  , e = void 0
                  , n = void 0;
                if (v.container)
                    if (v.container instanceof Object)
                        e = (t = s({}, t, v.container)).width - t.left - t.right - 2 * v.margin,
                        n = t.height - t.top - t.bottom - 2 * v.margin;
                    else {
                        var o = (c(v.container) ? v.container : document.querySelector(v.container)).getBoundingClientRect()
                          , i = o.width
                          , r = o.height
                          , l = o.left
                          , u = o.top;
                        t = s({}, t, {
                            width: i,
                            height: r,
                            left: l,
                            top: u
                        })
                    }
                e = e || t.width - 2 * v.margin,
                n = n || t.height - 2 * v.margin;
                var h = y.zoomedHd || y.original
                  , d = a(h) ? e : h.naturalWidth || e
                  , f = a(h) ? n : h.naturalHeight || n
                  , m = h.getBoundingClientRect()
                  , g = m.top
                  , p = m.left
                  , b = m.width
                  , w = m.height
                  , _ = Math.min(d, e) / b
                  , E = Math.min(f, n) / w
                  , k = Math.min(_, E)
                  , z = "scale(" + k + ") translate3d(" + ((e - b) / 2 - p + v.margin + t.left) / k + "px, " + ((n - w) / 2 - g + v.margin + t.top) / k + "px, 0)";
                y.zoomed.style.transform = z,
                y.zoomedHd && (y.zoomedHd.style.transform = z)
            };
            return new o(function(n) {
                if (t && -1 === f.indexOf(t))
                    n(w);
                else {
                    if (y.zoomed)
                        n(w);
                    else {
                        if (t)
                            y.original = t;
                        else {
                            if (!(f.length > 0))
                                return void n(w);
                            var o = f;
                            y.original = o[0]
                        }
                        if (y.original.dispatchEvent(h("medium-zoom:open", {
                            detail: {
                                zoom: w
                            }
                        })),
                        p = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                        g = !0,
                        y.zoomed = function(t) {
                            var e = t.getBoundingClientRect()
                              , n = e.top
                              , o = e.left
                              , i = e.width
                              , r = e.height
                              , s = t.cloneNode()
                              , l = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                              , c = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
                            return s.removeAttribute("id"),
                            s.style.position = "absolute",
                            s.style.top = n + l + "px",
                            s.style.left = o + c + "px",
                            s.style.width = i + "px",
                            s.style.height = r + "px",
                            s.style.transform = "",
                            s
                        }(y.original),
                        document.body.appendChild(b),
                        v.template) {
                            var i = c(v.template) ? v.template : document.querySelector(v.template);
                            y.template = document.createElement("div"),
                            y.template.appendChild(i.content.cloneNode(!0)),
                            document.body.appendChild(y.template)
                        }
                        if (document.body.appendChild(y.zoomed),
                        window.requestAnimationFrame(function() {
                            document.body.classList.add("medium-zoom--opened")
                        }),
                        y.original.classList.add("medium-zoom-image--hidden"),
                        y.zoomed.classList.add("medium-zoom-image--opened"),
                        y.zoomed.addEventListener("click", l),
                        y.zoomed.addEventListener("transitionend", function t() {
                            g = !1,
                            y.zoomed.removeEventListener("transitionend", t),
                            y.original.dispatchEvent(h("medium-zoom:opened", {
                                detail: {
                                    zoom: w
                                }
                            })),
                            n(w)
                        }),
                        y.original.getAttribute("data-zoom-src")) {
                            y.zoomedHd = y.zoomed.cloneNode(),
                            y.zoomedHd.removeAttribute("srcset"),
                            y.zoomedHd.removeAttribute("sizes"),
                            y.zoomedHd.src = y.zoomed.getAttribute("data-zoom-src"),
                            y.zoomedHd.onerror = function() {
                                clearInterval(r),
                                console.warn("Unable to reach the zoom image target " + y.zoomedHd.src),
                                y.zoomedHd = null,
                                e()
                            }
                            ;
                            var r = setInterval(function() {
                                y.zoomedHd.complete && (clearInterval(r),
                                y.zoomedHd.classList.add("medium-zoom-image--opened"),
                                y.zoomedHd.addEventListener("click", l),
                                document.body.appendChild(y.zoomedHd),
                                e())
                            }, 10)
                        } else if (y.original.hasAttribute("srcset")) {
                            y.zoomedHd = y.zoomed.cloneNode(),
                            y.zoomedHd.removeAttribute("sizes"),
                            y.zoomedHd.removeAttribute("loading");
                            var s = y.zoomedHd.addEventListener("load", function() {
                                y.zoomedHd.removeEventListener("load", s),
                                y.zoomedHd.classList.add("medium-zoom-image--opened"),
                                y.zoomedHd.addEventListener("click", l),
                                document.body.appendChild(y.zoomedHd),
                                e()
                            })
                        } else
                            e()
                    }
                }
            }
            )
        }
          , l = function() {
            return new o(function(t) {
                if (!g && y.original) {
                    g = !0,
                    document.body.classList.remove("medium-zoom--opened"),
                    y.zoomed.style.transform = "",
                    y.zoomedHd && (y.zoomedHd.style.transform = ""),
                    y.template && (y.template.style.transition = "opacity 150ms",
                    y.template.style.opacity = 0),
                    y.original.dispatchEvent(h("medium-zoom:close", {
                        detail: {
                            zoom: w
                        }
                    })),
                    y.zoomed.addEventListener("transitionend", function e() {
                        y.original.classList.remove("medium-zoom-image--hidden"),
                        document.body.removeChild(y.zoomed),
                        y.zoomedHd && document.body.removeChild(y.zoomedHd),
                        document.body.removeChild(b),
                        y.zoomed.classList.remove("medium-zoom-image--opened"),
                        y.template && document.body.removeChild(y.template),
                        g = !1,
                        y.zoomed.removeEventListener("transitionend", e),
                        y.original.dispatchEvent(h("medium-zoom:closed", {
                            detail: {
                                zoom: w
                            }
                        })),
                        y.original = null,
                        y.zoomed = null,
                        y.zoomedHd = null,
                        y.template = null,
                        t(w)
                    })
                } else
                    t(w)
            }
            )
        }
          , d = function() {
            var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).target;
            return y.original ? l() : r({
                target: t
            })
        }
          , f = []
          , m = []
          , g = !1
          , p = 0
          , v = n
          , y = {
            original: null,
            zoomed: null,
            zoomedHd: null,
            template: null
        };
        "[object Object]" === Object.prototype.toString.call(e) ? v = e : (e || "string" == typeof e) && i(e);
        var b = function(t) {
            var e = document.createElement("div");
            return e.classList.add("medium-zoom-overlay"),
            e.style.background = t,
            e
        }((v = s({
            margin: 0,
            background: "#fff",
            scrollOffset: 40,
            container: null,
            template: null
        }, v)).background);
        document.addEventListener("click", function(t) {
            var e = t.target;
            e !== b ? -1 !== f.indexOf(e) && d({
                target: e
            }) : l()
        }),
        document.addEventListener("keyup", function(t) {
            var e = t.key || t.keyCode;
            "Escape" !== e && "Esc" !== e && 27 !== e || l()
        }),
        document.addEventListener("scroll", function() {
            if (!g && y.original) {
                var t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                Math.abs(p - t) > v.scrollOffset && setTimeout(l, 150)
            }
        }),
        window.addEventListener("resize", l);
        var w = {
            open: r,
            close: l,
            toggle: d,
            update: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = t;
                if (t.background && (b.style.background = t.background),
                t.container && t.container instanceof Object && (e.container = s({}, v.container, t.container)),
                t.template) {
                    var n = c(t.template) ? t.template : document.querySelector(t.template);
                    e.template = n
                }
                return v = s({}, v, e),
                f.forEach(function(t) {
                    t.dispatchEvent(h("medium-zoom:update", {
                        detail: {
                            zoom: w
                        }
                    }))
                }),
                w
            },
            clone: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t(s({}, v, e))
            },
            attach: i,
            detach: function() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                y.zoomed && l();
                var o = e.length > 0 ? e.reduce(function(t, e) {
                    return [].concat(t, u(e))
                }, []) : f;
                return o.forEach(function(t) {
                    t.classList.remove("medium-zoom-image"),
                    t.dispatchEvent(h("medium-zoom:detach", {
                        detail: {
                            zoom: w
                        }
                    }))
                }),
                f = f.filter(function(t) {
                    return -1 === o.indexOf(t)
                }),
                w
            },
            on: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return f.forEach(function(o) {
                    o.addEventListener("medium-zoom:" + t, e, n)
                }),
                m.push({
                    type: "medium-zoom:" + t,
                    listener: e,
                    options: n
                }),
                w
            },
            off: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return f.forEach(function(o) {
                    o.removeEventListener("medium-zoom:" + t, e, n)
                }),
                m = m.filter(function(n) {
                    return !(n.type === "medium-zoom:" + t && n.listener.toString() === e.toString())
                }),
                w
            },
            getOptions: function() {
                return v
            },
            getImages: function() {
                return f
            },
            getZoomedImage: function() {
                return y.original
            }
        };
        return w
    };
    !function(t, e) {
        void 0 === e && (e = {});
        var n = e.insertAt;
        if (t && "undefined" != typeof document) {
            var o = document.head || document.getElementsByTagName("head")[0]
              , i = document.createElement("style");
            i.type = "text/css",
            "top" === n && o.firstChild ? o.insertBefore(i, o.firstChild) : o.appendChild(i),
            i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
        }
    }(".medium-zoom-overlay{position:fixed;;z-index:60;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .6s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;z-index:70;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),
    e.default = d;
    const f = document.querySelector(".scroll-top");
    f.addEventListener("click", function() {
        window.scrollTo(0, 0)
    });
    let m = window.scrollY;
    const g = screen.height;
    window.addEventListener("scroll", function() {
        (m = window.scrollY) >= g ? f.classList.add("scale-90") : f.classList.remove("scale-90")
    });
    new LazyLoad({});
    d("[data-zoomable]", {
        margin: 100,
        background: "#1d1e21",
        scrollOffset: 160
    }),
    document.querySelectorAll(".ticker").forEach(t=>{
        var e = t.querySelector(".ticker-list").cloneNode(!0);
        t.append(e)
    }
    ),
    function() {
        var t = document.getElementsByClassName("card-flip")
          , e = null;
        !function n() {
            e && e.classList.toggle("hover");
            var o = Math.floor(Math.random() * (t.length - 1)) + 0
              , i = t[o];
            i.classList.toggle("hover"),
            e = i,
            setTimeout(n, 5e3)
        }()
    }()
}
, function(t, e) {}
, function(t, e) {
    !function() {
        "use strict";
        if ("object" == typeof window)
            if ("IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype)
                "isIntersecting"in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                });
            else {
                var t = function(t) {
                    for (var e = window.document, n = i(e); n; )
                        n = i(e = n.ownerDocument);
                    return e
                }()
                  , e = []
                  , n = null
                  , o = null;
                s.prototype.THROTTLE_TIMEOUT = 100,
                s.prototype.POLL_INTERVAL = null,
                s.prototype.USE_MUTATION_OBSERVER = !0,
                s._setupCrossOriginUpdater = function() {
                    return n || (n = function(t, n) {
                        o = t && n ? d(t, n) : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        },
                        e.forEach(function(t) {
                            t._checkForIntersections()
                        })
                    }
                    ),
                    n
                }
                ,
                s._resetCrossOriginUpdater = function() {
                    n = null,
                    o = null
                }
                ,
                s.prototype.observe = function(t) {
                    if (!this._observationTargets.some(function(e) {
                        return e.element == t
                    })) {
                        if (!t || 1 != t.nodeType)
                            throw new Error("target must be an Element");
                        this._registerInstance(),
                        this._observationTargets.push({
                            element: t,
                            entry: null
                        }),
                        this._monitorIntersections(t.ownerDocument),
                        this._checkForIntersections()
                    }
                }
                ,
                s.prototype.unobserve = function(t) {
                    this._observationTargets = this._observationTargets.filter(function(e) {
                        return e.element != t
                    }),
                    this._unmonitorIntersections(t.ownerDocument),
                    0 == this._observationTargets.length && this._unregisterInstance()
                }
                ,
                s.prototype.disconnect = function() {
                    this._observationTargets = [],
                    this._unmonitorAllIntersections(),
                    this._unregisterInstance()
                }
                ,
                s.prototype.takeRecords = function() {
                    var t = this._queuedEntries.slice();
                    return this._queuedEntries = [],
                    t
                }
                ,
                s.prototype._initThresholds = function(t) {
                    var e = t || [0];
                    return Array.isArray(e) || (e = [e]),
                    e.sort().filter(function(t, e, n) {
                        if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                            throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return t !== n[e - 1]
                    })
                }
                ,
                s.prototype._parseRootMargin = function(t) {
                    var e = (t || "0px").split(/\s+/).map(function(t) {
                        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                        if (!e)
                            throw new Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(e[1]),
                            unit: e[2]
                        }
                    });
                    return e[1] = e[1] || e[0],
                    e[2] = e[2] || e[0],
                    e[3] = e[3] || e[1],
                    e
                }
                ,
                s.prototype._monitorIntersections = function(e) {
                    var n = e.defaultView;
                    if (n && -1 == this._monitoringDocuments.indexOf(e)) {
                        var o = this._checkForIntersections
                          , r = null
                          , s = null;
                        if (this.POLL_INTERVAL ? r = n.setInterval(o, this.POLL_INTERVAL) : (l(n, "resize", o, !0),
                        l(e, "scroll", o, !0),
                        this.USE_MUTATION_OBSERVER && "MutationObserver"in n && (s = new n.MutationObserver(o)).observe(e, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })),
                        this._monitoringDocuments.push(e),
                        this._monitoringUnsubscribes.push(function() {
                            var t = e.defaultView;
                            t && (r && t.clearInterval(r),
                            c(t, "resize", o, !0)),
                            c(e, "scroll", o, !0),
                            s && s.disconnect()
                        }),
                        e != (this.root && this.root.ownerDocument || t)) {
                            var a = i(e);
                            a && this._monitorIntersections(a.ownerDocument)
                        }
                    }
                }
                ,
                s.prototype._unmonitorIntersections = function(e) {
                    var n = this._monitoringDocuments.indexOf(e);
                    if (-1 != n) {
                        var o = this.root && this.root.ownerDocument || t;
                        if (!this._observationTargets.some(function(t) {
                            var n = t.element.ownerDocument;
                            if (n == e)
                                return !0;
                            for (; n && n != o; ) {
                                var r = i(n);
                                if ((n = r && r.ownerDocument) == e)
                                    return !0
                            }
                            return !1
                        })) {
                            var r = this._monitoringUnsubscribes[n];
                            if (this._monitoringDocuments.splice(n, 1),
                            this._monitoringUnsubscribes.splice(n, 1),
                            r(),
                            e != o) {
                                var s = i(e);
                                s && this._unmonitorIntersections(s.ownerDocument)
                            }
                        }
                    }
                }
                ,
                s.prototype._unmonitorAllIntersections = function() {
                    var t = this._monitoringUnsubscribes.slice(0);
                    this._monitoringDocuments.length = 0,
                    this._monitoringUnsubscribes.length = 0;
                    for (var e = 0; e < t.length; e++)
                        t[e]()
                }
                ,
                s.prototype._checkForIntersections = function() {
                    if (this.root || !n || o) {
                        var t = this._rootIsInDom()
                          , e = t ? this._getRootRect() : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        };
                        this._observationTargets.forEach(function(o) {
                            var i = o.element
                              , s = u(i)
                              , l = this._rootContainsTarget(i)
                              , c = o.entry
                              , a = t && l && this._computeTargetAndRootIntersection(i, s, e)
                              , h = o.entry = new r({
                                time: window.performance && performance.now && performance.now(),
                                target: i,
                                boundingClientRect: s,
                                rootBounds: n && !this.root ? null : e,
                                intersectionRect: a
                            });
                            c ? t && l ? this._hasCrossedThreshold(c, h) && this._queuedEntries.push(h) : c && c.isIntersecting && this._queuedEntries.push(h) : this._queuedEntries.push(h)
                        }, this),
                        this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }
                }
                ,
                s.prototype._computeTargetAndRootIntersection = function(e, i, r) {
                    if ("none" != window.getComputedStyle(e).display) {
                        for (var s = i, l = m(e), c = !1; !c && l; ) {
                            var h = null
                              , f = 1 == l.nodeType ? window.getComputedStyle(l) : {};
                            if ("none" == f.display)
                                return null;
                            if (l == this.root || 9 == l.nodeType)
                                if (c = !0,
                                l == this.root || l == t)
                                    n && !this.root ? !o || 0 == o.width && 0 == o.height ? (l = null,
                                    h = null,
                                    s = null) : h = o : h = r;
                                else {
                                    var g = m(l)
                                      , p = g && u(g)
                                      , v = g && this._computeTargetAndRootIntersection(g, p, r);
                                    p && v ? (l = g,
                                    h = d(p, v)) : (l = null,
                                    s = null)
                                }
                            else {
                                var y = l.ownerDocument;
                                l != y.body && l != y.documentElement && "visible" != f.overflow && (h = u(l))
                            }
                            if (h && (s = a(h, s)),
                            !s)
                                break;
                            l = l && m(l)
                        }
                        return s
                    }
                }
                ,
                s.prototype._getRootRect = function() {
                    var e;
                    if (this.root)
                        e = u(this.root);
                    else {
                        var n = t.documentElement
                          , o = t.body;
                        e = {
                            top: 0,
                            left: 0,
                            right: n.clientWidth || o.clientWidth,
                            width: n.clientWidth || o.clientWidth,
                            bottom: n.clientHeight || o.clientHeight,
                            height: n.clientHeight || o.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(e)
                }
                ,
                s.prototype._expandRectByRootMargin = function(t) {
                    var e = this._rootMarginValues.map(function(e, n) {
                        return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                    })
                      , n = {
                        top: t.top - e[0],
                        right: t.right + e[1],
                        bottom: t.bottom + e[2],
                        left: t.left - e[3]
                    };
                    return n.width = n.right - n.left,
                    n.height = n.bottom - n.top,
                    n
                }
                ,
                s.prototype._hasCrossedThreshold = function(t, e) {
                    var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1
                      , o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                    if (n !== o)
                        for (var i = 0; i < this.thresholds.length; i++) {
                            var r = this.thresholds[i];
                            if (r == n || r == o || r < n != r < o)
                                return !0
                        }
                }
                ,
                s.prototype._rootIsInDom = function() {
                    return !this.root || f(t, this.root)
                }
                ,
                s.prototype._rootContainsTarget = function(e) {
                    return f(this.root || t, e) && (!this.root || this.root.ownerDocument == e.ownerDocument)
                }
                ,
                s.prototype._registerInstance = function() {
                    e.indexOf(this) < 0 && e.push(this)
                }
                ,
                s.prototype._unregisterInstance = function() {
                    var t = e.indexOf(this);
                    -1 != t && e.splice(t, 1)
                }
                ,
                window.IntersectionObserver = s,
                window.IntersectionObserverEntry = r
            }
        function i(t) {
            try {
                return t.defaultView && t.defaultView.frameElement || null
            } catch (t) {
                return null
            }
        }
        function r(t) {
            this.time = t.time,
            this.target = t.target,
            this.rootBounds = h(t.rootBounds),
            this.boundingClientRect = h(t.boundingClientRect),
            this.intersectionRect = h(t.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }),
            this.isIntersecting = !!t.intersectionRect;
            var e = this.boundingClientRect
              , n = e.width * e.height
              , o = this.intersectionRect
              , i = o.width * o.height;
            this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
        }
        function s(t, e) {
            var n = e || {};
            if ("function" != typeof t)
                throw new Error("callback must be a function");
            if (n.root && 1 != n.root.nodeType)
                throw new Error("root must be an Element");
            this._checkForIntersections = function(t, e) {
                var n = null;
                return function() {
                    n || (n = setTimeout(function() {
                        t(),
                        n = null
                    }, e))
                }
            }(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT),
            this._callback = t,
            this._observationTargets = [],
            this._queuedEntries = [],
            this._rootMarginValues = this._parseRootMargin(n.rootMargin),
            this.thresholds = this._initThresholds(n.threshold),
            this.root = n.root || null,
            this.rootMargin = this._rootMarginValues.map(function(t) {
                return t.value + t.unit
            }).join(" "),
            this._monitoringDocuments = [],
            this._monitoringUnsubscribes = []
        }
        function l(t, e, n, o) {
            "function" == typeof t.addEventListener ? t.addEventListener(e, n, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
        }
        function c(t, e, n, o) {
            "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
        }
        function a(t, e) {
            var n = Math.max(t.top, e.top)
              , o = Math.min(t.bottom, e.bottom)
              , i = Math.max(t.left, e.left)
              , r = Math.min(t.right, e.right)
              , s = r - i
              , l = o - n;
            return s >= 0 && l >= 0 && {
                top: n,
                bottom: o,
                left: i,
                right: r,
                width: s,
                height: l
            } || null
        }
        function u(t) {
            var e;
            try {
                e = t.getBoundingClientRect()
            } catch (t) {}
            return e ? (e.width && e.height || (e = {
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.right - e.left,
                height: e.bottom - e.top
            }),
            e) : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }
        }
        function h(t) {
            return !t || "x"in t ? t : {
                top: t.top,
                y: t.top,
                bottom: t.bottom,
                left: t.left,
                x: t.left,
                right: t.right,
                width: t.width,
                height: t.height
            }
        }
        function d(t, e) {
            var n = e.top - t.top
              , o = e.left - t.left;
            return {
                top: n,
                left: o,
                height: e.height,
                width: e.width,
                bottom: n + e.height,
                right: o + e.width
            }
        }
        function f(t, e) {
            for (var n = e; n; ) {
                if (n == t)
                    return !0;
                n = m(n)
            }
            return !1
        }
        function m(e) {
            var n = e.parentNode;
            return 9 == e.nodeType && e != t ? i(e) : n && 11 == n.nodeType && n.host ? n.host : n && n.assignedSlot ? n.assignedSlot.parentNode : n
        }
    }()
}
, function(t, e, n) {
    !function(e, n) {
        t.exports = n()
    }(window, function() {
        return function(t) {
            var e = {};
            function n(o) {
                if (e[o])
                    return e[o].exports;
                var i = e[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return t[o].call(i.exports, i, i.exports, n),
                i.l = !0,
                i.exports
            }
            return n.m = t,
            n.c = e,
            n.d = function(t, e, o) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: o
                })
            }
            ,
            n.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(t, e) {
                if (1 & e && (t = n(t)),
                8 & e)
                    return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var o = Object.create(null);
                if (n.r(o),
                Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var i in t)
                        n.d(o, i, function(e) {
                            return t[e]
                        }
                        .bind(null, i));
                return o
            }
            ,
            n.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return n.d(e, "a", e),
                e
            }
            ,
            n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            n.p = "",
            n(n.s = 2)
        }([function(t, e) {
            /*!
 * object-extend
 * A well-tested function to deep extend (or merge) JavaScript objects without further dependencies.
 *
 * http://github.com/bernhardw
 *
 * Copyright 2013, Bernhard Wanger <mail@bernhardwanger.com>
 * Released under the MIT license.
 *
 * Date: 2013-04-10
 */
            t.exports = function t(e, n) {
                return null == e || null == n ? e : (Object.keys(n).forEach(function(o) {
                    "[object Object]" == Object.prototype.toString.call(n[o]) ? "[object Object]" != Object.prototype.toString.call(e[o]) ? e[o] = n[o] : e[o] = t(e[o], n[o]) : e[o] = n[o]
                }),
                e)
            }
        }
        , function(t, e) {
            Array.prototype.each = function(t) {
                for (var e = this.length, n = 0; n < e; n++) {
                    var o = this[n];
                    o && t(o, n)
                }
            }
            ,
            NodeList.prototype.each = Array.prototype.each,
            NodeList.prototype.filter = Array.prototype.filter
        }
        , function(t, e, n) {
            "use strict";
            n.r(e);
            var o = function() {
                this.trigger = {
                    once: !1,
                    offset: {
                        viewport: {
                            x: 0,
                            y: 0
                        },
                        element: {
                            x: 0,
                            y: 0
                        }
                    },
                    toggle: {
                        class: {
                            in: "visible",
                            out: "invisible"
                        },
                        callback: {
                            in: null,
                            visible: null,
                            out: null
                        }
                    }
                },
                this.scroll = {
                    sustain: 300,
                    element: window,
                    callback: function() {},
                    start: function() {},
                    stop: function() {},
                    directionChange: function() {}
                }
            }
              , i = n(0)
              , r = n.n(i);
            n(1);
            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            function l(t) {
                return Number(t) === t && t % 1 == 0
            }
            function c(t) {
                return Number(t) === t && t % 1 != 0
            }
            var a = function() {
                function t(e, n) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.element = e,
                    n = r()((new o).trigger, n),
                    this.offset = n.offset,
                    this.toggle = n.toggle,
                    this.once = n.once,
                    this.visible = null,
                    this.active = !0
                }
                return function(t, e, n) {
                    e && s(t.prototype, e),
                    n && s(t, n)
                }(t, [{
                    key: "checkVisibility",
                    value: function(t, e) {
                        if (!this.active)
                            return this.visible;
                        var n = {
                            w: t.offsetWidth || t.innerWidth || 0,
                            h: t.offsetHeight || t.innerHeight || 0
                        }
                          , o = this.getBounds()
                          , i = this._checkVisibility(o, n, e);
                        if (i !== this.visible) {
                            this.visible = i;
                            var r = this._toggleCallback();
                            r instanceof Promise ? r.then(this._toggleClass.bind(this)).catch(function(t) {
                                console.error("Trigger promise failed"),
                                console.error(t)
                            }) : this._toggleClass(),
                            this.visible && this.once && (this.active = !1)
                        } else if (i && "function" == typeof this.toggle.callback.visible)
                            return this.toggle.callback.visible.call(this.element, this);
                        return i
                    }
                }, {
                    key: "getBounds",
                    value: function() {
                        return this.element.getBoundingClientRect()
                    }
                }, {
                    key: "_getElementOffset",
                    value: function(t, e) {
                        var n = {
                            x: 0,
                            y: 0
                        };
                        return "function" == typeof this.offset.element.x ? n.x = t.width * this.offset.element.x(this, t, e) : c(this.offset.element.x) ? n.x = t.width * this.offset.element.x : l(this.offset.element.x) && (n.x = this.offset.element.x),
                        "function" == typeof this.offset.element.y ? n.y = t.height * this.offset.element.y(this, t, e) : c(this.offset.element.y) ? n.y = t.height * this.offset.element.y : l(this.offset.element.y) && (n.y = this.offset.element.y),
                        n
                    }
                }, {
                    key: "_getViewportOffset",
                    value: function(t, e) {
                        var n = {
                            x: 0,
                            y: 0
                        };
                        return "function" == typeof this.offset.viewport.x ? n.x = t.w * this.offset.viewport.x(this, t, e) : c(this.offset.viewport.x) ? n.x = t.w * this.offset.viewport.x : l(this.offset.viewport.x) && (n.x = this.offset.viewport.x),
                        "function" == typeof this.offset.viewport.y ? n.y = t.h * this.offset.viewport.y(this, t, e) : c(this.offset.viewport.y) ? n.y = t.h * this.offset.viewport.y : l(this.offset.viewport.y) && (n.y = this.offset.viewport.y),
                        n
                    }
                }, {
                    key: "_checkVisibility",
                    value: function(t, e, n) {
                        var o = this._getElementOffset(t, n)
                          , i = this._getViewportOffset(e, n)
                          , r = !0;
                        return t.left - i.x < -(t.width - o.x) && (r = !1),
                        t.left + i.x > e.w - o.x && (r = !1),
                        t.top - i.y < -(t.height - o.y) && (r = !1),
                        t.top + i.y > e.h - o.y && (r = !1),
                        r
                    }
                }, {
                    key: "_toggleClass",
                    value: function() {
                        var t = this;
                        if (this.visible)
                            return Array.isArray(this.toggle.class.in) ? this.toggle.class.in.each(function(e) {
                                t.element.classList.add(e)
                            }) : this.element.classList.add(this.toggle.class.in),
                            void (Array.isArray(this.toggle.class.out) ? this.toggle.class.out.each(function(e) {
                                t.element.classList.remove(e)
                            }) : this.element.classList.remove(this.toggle.class.out));
                        Array.isArray(this.toggle.class.in) ? this.toggle.class.in.each(function(e) {
                            t.element.classList.remove(e)
                        }) : this.element.classList.remove(this.toggle.class.in),
                        Array.isArray(this.toggle.class.out) ? this.toggle.class.out.each(function(e) {
                            t.element.classList.add(e)
                        }) : this.element.classList.add(this.toggle.class.out)
                    }
                }, {
                    key: "_toggleCallback",
                    value: function() {
                        if (this.visible) {
                            if ("function" == typeof this.toggle.callback.in)
                                return this.toggle.callback.in.call(this.element, this)
                        } else if ("function" == typeof this.toggle.callback.out)
                            return this.toggle.callback.out.call(this.element, this)
                    }
                }]),
                t
            }();
            function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var h = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.triggers = e instanceof Array ? e : []
                }
                return function(t, e, n) {
                    e && u(t.prototype, e),
                    n && u(t, n)
                }(t, [{
                    key: "add",
                    value: function(t) {
                        var e = this;
                        if (t instanceof a)
                            return this.triggers.push(t);
                        t.each(function(t) {
                            t instanceof a ? e.triggers.push(t) : console.error("Object added to TriggerCollection is not a Trigger. Object: ", t)
                        })
                    }
                }, {
                    key: "remove",
                    value: function(t) {
                        t instanceof a && (t = [t]),
                        this.triggers = this.triggers.filter(function(e) {
                            var n = !1;
                            return t.each(function(t) {
                                t == e && (n = !0)
                            }),
                            !n
                        })
                    }
                }, {
                    key: "query",
                    value: function(t) {
                        return this.triggers.filter(function(e) {
                            var n = e.element
                              , o = n.parentNode;
                            return [].slice.call(o.querySelectorAll(t)).indexOf(n) > -1
                        })
                    }
                }, {
                    key: "search",
                    value: function(t) {
                        var e = this.triggers.filter(function(e) {
                            if (t instanceof NodeList || Array.isArray(t)) {
                                var n = !1;
                                return t.each(function(t) {
                                    e.element == t && (n = !0)
                                }),
                                n
                            }
                            return e.element == t
                        });
                        return 0 == e.length ? null : e.length > 1 ? e : e[0]
                    }
                }, {
                    key: "call",
                    value: function(t) {
                        this.triggers.each(t)
                    }
                }]),
                t
            }();
            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var f = function() {
                function t(e, n) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this._parseOptions(e),
                    "function" == typeof n && (this.callback = n),
                    this.direction = "none",
                    this.position = this.getPosition(),
                    this.lastAction = this._getTimestamp(),
                    this._startRun(),
                    this._boundListener = this._didScroll.bind(this),
                    this.element.addEventListener("scroll", this._boundListener)
                }
                return function(t, e, n) {
                    e && d(t.prototype, e),
                    n && d(t, n)
                }(t, [{
                    key: "_parseOptions",
                    value: function(t) {
                        var e = (new o).scroll;
                        "function" != typeof t ? (e.callback = function() {}
                        ,
                        e = r()(e, t)) : e.callback = t,
                        this.element = e.element,
                        this.sustain = e.sustain,
                        this.callback = e.callback,
                        this.startCallback = e.start,
                        this.stopCallback = e.stop,
                        this.directionChange = e.directionChange
                    }
                }, {
                    key: "_didScroll",
                    value: function() {
                        var t = this.getPosition();
                        if (this.position !== t) {
                            var e = this.direction;
                            (e = t.x !== this.position.x ? t.x > this.position.x ? "right" : "left" : t.y !== this.position.y ? t.y > this.position.y ? "bottom" : "top" : "none") !== this.direction && (this.direction = e,
                            "function" == typeof this.directionChange && this.directionChange(this.direction)),
                            this.position = t,
                            this.lastAction = this._getTimestamp()
                        } else
                            this.direction = "none";
                        this.running || this._startRun()
                    }
                }, {
                    key: "_startRun",
                    value: function() {
                        this.running = !0,
                        "function" == typeof this.startCallback && this.startCallback(),
                        this._loop()
                    }
                }, {
                    key: "_stopRun",
                    value: function() {
                        this.running = !1,
                        "function" == typeof this.stopCallback && this.stopCallback()
                    }
                }, {
                    key: "getPosition",
                    value: function() {
                        return {
                            x: this.element.pageXOffset || this.element.scrollLeft || document.documentElement.scrollLeft || 0,
                            y: this.element.pageYOffset || this.element.scrollTop || document.documentElement.scrollTop || 0
                        }
                    }
                }, {
                    key: "_getTimestamp",
                    value: function() {
                        return Number(Date.now())
                    }
                }, {
                    key: "_tick",
                    value: function() {
                        this.callback(this.position, this.direction),
                        this._getTimestamp() - this.lastAction > this.sustain && this._stopRun(),
                        this.running && this._loop()
                    }
                }, {
                    key: "_loop",
                    value: function() {
                        (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
                            setTimeout(t, 1e3 / 60)
                        }
                        )(this._tick.bind(this))
                    }
                }, {
                    key: "kill",
                    value: function() {
                        this.running = !1,
                        this.element.removeEventListener("scroll", this._boundListener)
                    }
                }]),
                t
            }();
            function m(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            n.d(e, "Trigger", function() {
                return g
            }),
            n.d(e, "TriggerCollection", function() {
                return p
            }),
            n.d(e, "ScrollAnimationLoop", function() {
                return v
            }),
            n.d(e, "default", function() {
                return y
            });
            /*!
 * ScrollTrigger
 *
 *
 * http://github.com/terwanerik
 *
 * Copyright 2017, Erik Terwan <erik@erikterwan.com>
 * Released under the MIT license.
 *
 * Date: 2017-07-09
 */
            var g = a
              , p = h
              , v = f
              , y = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this._parseOptions(e),
                    this._initCollection(),
                    this._initLoop()
                }
                return function(t, e, n) {
                    e && m(t.prototype, e),
                    n && m(t, n)
                }(t, [{
                    key: "_parseOptions",
                    value: function(t) {
                        t = r()(new o, t),
                        this.defaultTrigger = t.trigger,
                        this.scrollOptions = t.scroll
                    }
                }, {
                    key: "_initCollection",
                    value: function() {
                        var t = document.querySelectorAll("[data-scroll]")
                          , e = [];
                        t.length > 0 && (e = this.createTriggers(t)),
                        this.collection = new p(e)
                    }
                }, {
                    key: "_initLoop",
                    value: function() {
                        var t = this;
                        this.loop = new v({
                            sustain: this.scrollOptions.sustain,
                            element: this.scrollOptions.element,
                            callback: function(e, n) {
                                t._scrollCallback(e, n)
                            },
                            start: function() {
                                t._scrollStart()
                            },
                            stop: function() {
                                t._scrollStop()
                            },
                            directionChange: function(e) {
                                t._scrollDirectionChange(e)
                            }
                        })
                    }
                }, {
                    key: "_scrollCallback",
                    value: function(t, e) {
                        var n = this;
                        this.collection.call(function(t) {
                            t.checkVisibility(n.scrollOptions.element, e)
                        }),
                        this.scrollOptions.callback(t, e)
                    }
                }, {
                    key: "_scrollStart",
                    value: function() {
                        this.scrollOptions.start()
                    }
                }, {
                    key: "_scrollStop",
                    value: function() {
                        this.scrollOptions.stop()
                    }
                }, {
                    key: "_scrollDirectionChange",
                    value: function(t) {
                        this.scrollOptions.directionChange(t)
                    }
                }, {
                    key: "createTrigger",
                    value: function(t, e) {
                        return new g(t,r()(this.defaultTrigger, e))
                    }
                }, {
                    key: "createTriggers",
                    value: function(t, e) {
                        var n = this
                          , o = [];
                        return t.each(function(t) {
                            o.push(n.createTrigger(t, e))
                        }),
                        o
                    }
                }, {
                    key: "add",
                    value: function(t, e) {
                        return t instanceof HTMLElement ? (this.collection.add(this.createTrigger(t, e)),
                        this) : t instanceof g ? (this.collection.add(t),
                        this) : t instanceof NodeList ? (this.collection.add(this.createTriggers(t, e)),
                        this) : Array.isArray(t) && t.length && t[0]instanceof g ? (this.collection.add(t),
                        this) : Array.isArray(t) && t.length && t[0]instanceof HTMLElement ? (this.collection.add(this.createTriggers(t, e)),
                        this) : (this.collection.add(this.createTriggers(document.querySelectorAll(t), e)),
                        this)
                    }
                }, {
                    key: "remove",
                    value: function(t) {
                        return t instanceof g ? (this.collection.remove(t),
                        this) : Array.isArray(t) && t.length && t[0]instanceof g ? (this.collection.remove(t),
                        this) : t instanceof HTMLElement ? (this.collection.remove(this.search(t)),
                        this) : Array.isArray(t) && t.length && t[0]instanceof HTMLElement ? (this.collection.remove(this.search(t)),
                        this) : t instanceof NodeList ? (this.collection.remove(this.search(t)),
                        this) : Array.isArray(t) && t.length && t[0]instanceof g ? (this.collection.remove(t),
                        this) : (this.collection.remove(this.query(t.toString())),
                        this)
                    }
                }, {
                    key: "query",
                    value: function(t) {
                        return this.collection.query(t)
                    }
                }, {
                    key: "search",
                    value: function(t) {
                        return this.collection.search(t)
                    }
                }, {
                    key: "listen",
                    value: function() {
                        this.loop || this._initLoop()
                    }
                }, {
                    key: "kill",
                    value: function() {
                        this.loop.kill(),
                        this.loop = null
                    }
                }]),
                t
            }()
        }
        ])
    })
}
]);
