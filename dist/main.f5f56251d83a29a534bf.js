(() => {
    "use strict";
    const e = [
        {
            icon: "sunIcon",
            bgImage: "./assets/summer-bg.jpg",
            music: "./assets/sounds/summer.mp3",
            color: "rgb(255, 119, 0)",
        },
        {
            icon: "rainIcon",
            bgImage: "./assets/rainy-bg.jpg",
            music: "./assets/sounds/rain.mp3",
            color: "rgb(22, 45, 218)",
        },
        {
            icon: "snowIcon",
            bgImage: "./assets/winter-bg.jpg",
            music: "./assets/sounds/winter.mp3",
            color: "rgb(82, 94, 80)",
        },
    ];
    function t(t) {
        var n = t.index,
            o = t.defaultButtonActive,
            a = document.createElement("input");
        (a.className = "volumeMusic"),
            (a.id = "volume" + n),
            (a.className = "volume"),
            (a.type = "range"),
            (a.min = 0),
            (a.max = 1),
            (a.step = 0.01),
            (a.value = 0.5),
            (a.style.opacity = n === o ? 1 : 0);
        var c = (function (t) {
            var n = document.createElement("audio");
            return (n.src = e[t].music), (n.id = "audio" + t), (n.loop = "loop"), n;
        })(n);
        return a.appendChild(c), a;
    }
    var n = document.querySelector("#app"),
        o = document.querySelector(".background"),
        a = document.createElement("h1"),
        c = document.createElement("div"),
        u = 0;
    function r(t) {
        t.preventDefault();
        var n = t.target.id,
            c = (function (e) {
                var t = document.querySelectorAll("audio"),
                    n = "audio" + [e.target.id],
                    o = document.getElementById(n);
                return (
                    t.forEach(function (e) {
                        e !== o && e.pause();
                    }),
                    (null == o ? void 0 : o.paused)
                        ? o.play()
                        : (null == o ? void 0 : o.paused) || o.pause(),
                    null == o ? void 0 : o.paused
                );
            })(t);
        !(function (e) {
            document.querySelectorAll(".volume").forEach(function (e) {
                e.style.opacity = 0;
            });
            var t = "volume" + [e.target.id];
            document.getElementById(t).style.opacity = 1;
        })(t),
            (function (e) {
                var t = e.audioState,
                    n = e.currentId;
                document.querySelectorAll(".toggleIcon").forEach(function (e) {
                    e.classList.remove("pauseIcon"),
                        t && e.id === n && e.classList.add("pauseIcon");
                });
            })({ audioState: c, currentId: n }),
            (o.style.backgroundImage = "url(".concat(e[n].bgImage, ")")),
            (a.style.color = e[n].color);
    }
    function l(n, o) {
        var a = document.createElement("div");
        a.className = "toggleWrapper";
        var c = (function (t) {
            var n = document.createElement("div");
            return (
                (n.id = t),
                (n.style.backgroundImage = "url(".concat(e[t].bgImage, ")")),
                (n.className = "toggleMusic"),
                n
            );
        })(o);
        (c.onclick = function (e) {
            return r(e);
        }),
            a.appendChild(c);
        var l = t({ index: o, defaultButtonActive: u });
        (l.oninput = function (e) {
            return (function (e) {
                e.target.childNodes[0].volume = e.target.value;
            })(e);
        }),
            a.appendChild(l);
        var s = (function (t) {
            var n = document.createElement("div");
            return (n.id = t), n.classList.add("toggleIcon", e[t].icon), n;
        })(o);
        return c.appendChild(s), a;
    }
    (o.style.backgroundImage = "url(".concat(e[u].bgImage, ")")),
        (a.textContent = "Weather sounds"),
        (a.className = "title"),
        (a.style.color = e[u].color),
        n.appendChild(a),
        (c.className = "togglePanel"),
        n.appendChild(c),
        e.forEach(function (e, t) {
            var n = l(0, t);
            c.appendChild(n);
        });
})();
//# sourceMappingURL=main.f5f56251d83a29a534bf.js.map
