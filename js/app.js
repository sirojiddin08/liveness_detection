(function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
            i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
            s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
function pp(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var hp = {
    exports: {}
}
    , Jo = {}
    , mp = {
        exports: {}
    }
    , B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us = Symbol.for("react.element")
    , Gg = Symbol.for("react.portal")
    , Yg = Symbol.for("react.fragment")
    , Xg = Symbol.for("react.strict_mode")
    , Jg = Symbol.for("react.profiler")
    , ey = Symbol.for("react.provider")
    , ty = Symbol.for("react.context")
    , ny = Symbol.for("react.forward_ref")
    , ry = Symbol.for("react.suspense")
    , iy = Symbol.for("react.memo")
    , sy = Symbol.for("react.lazy")
    , Jc = Symbol.iterator;
function oy(t) {
    return t === null || typeof t != "object" ? null : (t = Jc && t[Jc] || t["@@iterator"],
        typeof t == "function" ? t : null)
}
var gp = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
}
    , yp = Object.assign
    , vp = {};
function Kr(t, e, n) {
    this.props = t,
        this.context = e,
        this.refs = vp,
        this.updater = n || gp
}
Kr.prototype.isReactComponent = {};
Kr.prototype.setState = function (t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
    ;
Kr.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
    ;
function _p() { }
_p.prototype = Kr.prototype;
function Ll(t, e, n) {
    this.props = t,
        this.context = e,
        this.refs = vp,
        this.updater = n || gp
}
var Ml = Ll.prototype = new _p;
Ml.constructor = Ll;
yp(Ml, Kr.prototype);
Ml.isPureReactComponent = !0;
var ef = Array.isArray
    , wp = Object.prototype.hasOwnProperty
    , jl = {
        current: null
    }
    , Sp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function Ep(t, e, n) {
    var r, i = {}, s = null, o = null;
    if (e != null)
        for (r in e.ref !== void 0 && (o = e.ref),
            e.key !== void 0 && (s = "" + e.key),
            e)
            wp.call(e, r) && !Sp.hasOwnProperty(r) && (i[r] = e[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var u = Array(a), l = 0; l < a; l++)
            u[l] = arguments[l + 2];
        i.children = u
    }
    if (t && t.defaultProps)
        for (r in a = t.defaultProps,
            a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: us,
        type: t,
        key: s,
        ref: o,
        props: i,
        _owner: jl.current
    }
}
function ay(t, e) {
    return {
        $$typeof: us,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}
function Fl(t) {
    return typeof t == "object" && t !== null && t.$$typeof === us
}
function uy(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function (n) {
        return e[n]
    })
}
var tf = /\/+/g;
function Na(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? uy("" + t.key) : e.toString(36)
}
function Ws(t, e, n, r, i) {
    var s = typeof t;
    (s === "undefined" || s === "boolean") && (t = null);
    var o = !1;
    if (t === null)
        o = !0;
    else
        switch (s) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (t.$$typeof) {
                    case us:
                    case Gg:
                        o = !0
                }
        }
    if (o)
        return o = t,
            i = i(o),
            t = r === "" ? "." + Na(o, 0) : r,
            ef(i) ? (n = "",
                t != null && (n = t.replace(tf, "$&/") + "/"),
                Ws(i, e, n, "", function (l) {
                    return l
                })) : i != null && (Fl(i) && (i = ay(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(tf, "$&/") + "/") + t)),
                    e.push(i)),
            1;
    if (o = 0,
        r = r === "" ? "." : r + ":",
        ef(t))
        for (var a = 0; a < t.length; a++) {
            s = t[a];
            var u = r + Na(s, a);
            o += Ws(s, e, n, u, i)
        }
    else if (u = oy(t),
        typeof u == "function")
        for (t = u.call(t),
            a = 0; !(s = t.next()).done;)
            s = s.value,
                u = r + Na(s, a++),
                o += Ws(s, e, n, u, i);
    else if (s === "object")
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function ws(t, e, n) {
    if (t == null)
        return t;
    var r = []
        , i = 0;
    return Ws(t, r, "", "", function (s) {
        return e.call(n, s, i++)
    }),
        r
}
function ly(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(),
            e.then(function (n) {
                (t._status === 0 || t._status === -1) && (t._status = 1,
                    t._result = n)
            }, function (n) {
                (t._status === 0 || t._status === -1) && (t._status = 2,
                    t._result = n)
            }),
            t._status === -1 && (t._status = 0,
                t._result = e)
    }
    if (t._status === 1)
        return t._result.default;
    throw t._result
}
var Fe = {
    current: null
}
    , Zs = {
        transition: null
    }
    , cy = {
        ReactCurrentDispatcher: Fe,
        ReactCurrentBatchConfig: Zs,
        ReactCurrentOwner: jl
    };
function kp() {
    throw Error("act(...) is not supported in production builds of React.")
}
B.Children = {
    map: ws,
    forEach: function (t, e, n) {
        ws(t, function () {
            e.apply(this, arguments)
        }, n)
    },
    count: function (t) {
        var e = 0;
        return ws(t, function () {
            e++
        }),
            e
    },
    toArray: function (t) {
        return ws(t, function (e) {
            return e
        }) || []
    },
    only: function (t) {
        if (!Fl(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
B.Component = Kr;
B.Fragment = Yg;
B.Profiler = Jg;
B.PureComponent = Ll;
B.StrictMode = Xg;
B.Suspense = ry;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cy;
B.act = kp;
B.cloneElement = function (t, e, n) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = yp({}, t.props)
        , i = t.key
        , s = t.ref
        , o = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (s = e.ref,
            o = jl.current),
            e.key !== void 0 && (i = "" + e.key),
            t.type && t.type.defaultProps)
            var a = t.type.defaultProps;
        for (u in e)
            wp.call(e, u) && !Sp.hasOwnProperty(u) && (r[u] = e[u] === void 0 && a !== void 0 ? a[u] : e[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var l = 0; l < u; l++)
            a[l] = arguments[l + 2];
        r.children = a
    }
    return {
        $$typeof: us,
        type: t.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
    ;
B.createContext = function (t) {
    return t = {
        $$typeof: ty,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
        t.Provider = {
            $$typeof: ey,
            _context: t
        },
        t.Consumer = t
}
    ;
B.createElement = Ep;
B.createFactory = function (t) {
    var e = Ep.bind(null, t);
    return e.type = t,
        e
}
    ;
B.createRef = function () {
    return {
        current: null
    }
}
    ;
B.forwardRef = function (t) {
    return {
        $$typeof: ny,
        render: t
    }
}
    ;
B.isValidElement = Fl;
B.lazy = function (t) {
    return {
        $$typeof: sy,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: ly
    }
}
    ;
B.memo = function (t, e) {
    return {
        $$typeof: iy,
        type: t,
        compare: e === void 0 ? null : e
    }
}
    ;
B.startTransition = function (t) {
    var e = Zs.transition;
    Zs.transition = {};
    try {
        t()
    } finally {
        Zs.transition = e
    }
}
    ;
B.unstable_act = kp;
B.useCallback = function (t, e) {
    return Fe.current.useCallback(t, e)
}
    ;
B.useContext = function (t) {
    return Fe.current.useContext(t)
}
    ;
B.useDebugValue = function () { }
    ;
B.useDeferredValue = function (t) {
    return Fe.current.useDeferredValue(t)
}
    ;
B.useEffect = function (t, e) {
    return Fe.current.useEffect(t, e)
}
    ;
B.useId = function () {
    return Fe.current.useId()
}
    ;
B.useImperativeHandle = function (t, e, n) {
    return Fe.current.useImperativeHandle(t, e, n)
}
    ;
B.useInsertionEffect = function (t, e) {
    return Fe.current.useInsertionEffect(t, e)
}
    ;
B.useLayoutEffect = function (t, e) {
    return Fe.current.useLayoutEffect(t, e)
}
    ;
B.useMemo = function (t, e) {
    return Fe.current.useMemo(t, e)
}
    ;
B.useReducer = function (t, e, n) {
    return Fe.current.useReducer(t, e, n)
}
    ;
B.useRef = function (t) {
    return Fe.current.useRef(t)
}
    ;
B.useState = function (t) {
    return Fe.current.useState(t)
}
    ;
B.useSyncExternalStore = function (t, e, n) {
    return Fe.current.useSyncExternalStore(t, e, n)
}
    ;
B.useTransition = function () {
    return Fe.current.useTransition()
}
    ;
B.version = "18.3.1";
mp.exports = B;
var K = mp.exports;
const ot = pp(K);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fy = K
    , dy = Symbol.for("react.element")
    , py = Symbol.for("react.fragment")
    , hy = Object.prototype.hasOwnProperty
    , my = fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
    , gy = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function xp(t, e, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
        e.key !== void 0 && (s = "" + e.key),
        e.ref !== void 0 && (o = e.ref);
    for (r in e)
        hy.call(e, r) && !gy.hasOwnProperty(r) && (i[r] = e[r]);
    if (t && t.defaultProps)
        for (r in e = t.defaultProps,
            e)
            i[r] === void 0 && (i[r] = e[r]);
    return {
        $$typeof: dy,
        type: t,
        key: s,
        ref: o,
        props: i,
        _owner: my.current
    }
}
Jo.Fragment = py;
Jo.jsx = xp;
Jo.jsxs = xp;
hp.exports = Jo;
var j = hp.exports
    , Cp = {
        exports: {}
    }
    , Ye = {}
    , bp = {
        exports: {}
    }
    , Tp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (t) {
    function e(E, I) {
        var L = E.length;
        E.push(I);
        e: for (; 0 < L;) {
            var V = L - 1 >>> 1
                , de = E[V];
            if (0 < i(de, I))
                E[V] = I,
                    E[L] = de,
                    L = V;
            else
                break e
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0]
    }
    function r(E) {
        if (E.length === 0)
            return null;
        var I = E[0]
            , L = E.pop();
        if (L !== I) {
            E[0] = L;
            e: for (var V = 0, de = E.length, vs = de >>> 1; V < vs;) {
                var Rn = 2 * (V + 1) - 1
                    , Oa = E[Rn]
                    , In = Rn + 1
                    , _s = E[In];
                if (0 > i(Oa, L))
                    In < de && 0 > i(_s, Oa) ? (E[V] = _s,
                        E[In] = L,
                        V = In) : (E[V] = Oa,
                            E[Rn] = L,
                            V = Rn);
                else if (In < de && 0 > i(_s, L))
                    E[V] = _s,
                        E[In] = L,
                        V = In;
                else
                    break e
            }
        }
        return I
    }
    function i(E, I) {
        var L = E.sortIndex - I.sortIndex;
        return L !== 0 ? L : E.id - I.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        t.unstable_now = function () {
            return s.now()
        }
    } else {
        var o = Date
            , a = o.now();
        t.unstable_now = function () {
            return o.now() - a
        }
    }
    var u = []
        , l = []
        , c = 1
        , f = null
        , p = 3
        , g = !1
        , y = !1
        , v = !1
        , C = typeof setTimeout == "function" ? setTimeout : null
        , h = typeof clearTimeout == "function" ? clearTimeout : null
        , d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(E) {
        for (var I = n(l); I !== null;) {
            if (I.callback === null)
                r(l);
            else if (I.startTime <= E)
                r(l),
                    I.sortIndex = I.expirationTime,
                    e(u, I);
            else
                break;
            I = n(l)
        }
    }
    function _(E) {
        if (v = !1,
            m(E),
            !y)
            if (n(u) !== null)
                y = !0,
                    me(k);
            else {
                var I = n(l);
                I !== null && Je(_, I.startTime - E)
            }
    }
    function k(E, I) {
        y = !1,
            v && (v = !1,
                h(P),
                P = -1),
            g = !0;
        var L = p;
        try {
            for (m(I),
                f = n(u); f !== null && (!(f.expirationTime > I) || E && !ve());) {
                var V = f.callback;
                if (typeof V == "function") {
                    f.callback = null,
                        p = f.priorityLevel;
                    var de = V(f.expirationTime <= I);
                    I = t.unstable_now(),
                        typeof de == "function" ? f.callback = de : f === n(u) && r(u),
                        m(I)
                } else
                    r(u);
                f = n(u)
            }
            if (f !== null)
                var vs = !0;
            else {
                var Rn = n(l);
                Rn !== null && Je(_, Rn.startTime - I),
                    vs = !1
            }
            return vs
        } finally {
            f = null,
                p = L,
                g = !1
        }
    }
    var b = !1
        , N = null
        , P = -1
        , X = 5
        , z = -1;
    function ve() {
        return !(t.unstable_now() - z < X)
    }
    function Z() {
        if (N !== null) {
            var E = t.unstable_now();
            z = E;
            var I = !0;
            try {
                I = N(!0, E)
            } finally {
                I ? Ce() : (b = !1,
                    N = null)
            }
        } else
            b = !1
    }
    var Ce;
    if (typeof d == "function")
        Ce = function () {
            d(Z)
        }
            ;
    else if (typeof MessageChannel < "u") {
        var be = new MessageChannel
            , ft = be.port2;
        be.port1.onmessage = Z,
            Ce = function () {
                ft.postMessage(null)
            }
    } else
        Ce = function () {
            C(Z, 0)
        }
            ;
    function me(E) {
        N = E,
            b || (b = !0,
                Ce())
    }
    function Je(E, I) {
        P = C(function () {
            E(t.unstable_now())
        }, I)
    }
    t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function (E) {
            E.callback = null
        }
        ,
        t.unstable_continueExecution = function () {
            y || g || (y = !0,
                me(k))
        }
        ,
        t.unstable_forceFrameRate = function (E) {
            0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < E ? Math.floor(1e3 / E) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function () {
            return p
        }
        ,
        t.unstable_getFirstCallbackNode = function () {
            return n(u)
        }
        ,
        t.unstable_next = function (E) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var I = 3;
                    break;
                default:
                    I = p
            }
            var L = p;
            p = I;
            try {
                return E()
            } finally {
                p = L
            }
        }
        ,
        t.unstable_pauseExecution = function () { }
        ,
        t.unstable_requestPaint = function () { }
        ,
        t.unstable_runWithPriority = function (E, I) {
            switch (E) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    E = 3
            }
            var L = p;
            p = E;
            try {
                return I()
            } finally {
                p = L
            }
        }
        ,
        t.unstable_scheduleCallback = function (E, I, L) {
            var V = t.unstable_now();
            switch (typeof L == "object" && L !== null ? (L = L.delay,
                L = typeof L == "number" && 0 < L ? V + L : V) : L = V,
            E) {
                case 1:
                    var de = -1;
                    break;
                case 2:
                    de = 250;
                    break;
                case 5:
                    de = 1073741823;
                    break;
                case 4:
                    de = 1e4;
                    break;
                default:
                    de = 5e3
            }
            return de = L + de,
                E = {
                    id: c++,
                    callback: I,
                    priorityLevel: E,
                    startTime: L,
                    expirationTime: de,
                    sortIndex: -1
                },
                L > V ? (E.sortIndex = L,
                    e(l, E),
                    n(u) === null && E === n(l) && (v ? (h(P),
                        P = -1) : v = !0,
                        Je(_, L - V))) : (E.sortIndex = de,
                            e(u, E),
                            y || g || (y = !0,
                                me(k))),
                E
        }
        ,
        t.unstable_shouldYield = ve,
        t.unstable_wrapCallback = function (E) {
            var I = p;
            return function () {
                var L = p;
                p = I;
                try {
                    return E.apply(this, arguments)
                } finally {
                    p = L
                }
            }
        }
}
)(Tp);
bp.exports = Tp;
var yy = bp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vy = K
    , Ge = yy;
function w(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Op = new Set
    , Ri = {};
function nr(t, e) {
    Ar(t, e),
        Ar(t + "Capture", e)
}
function Ar(t, e) {
    for (Ri[t] = e,
        t = 0; t < e.length; t++)
        Op.add(e[t])
}
var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , pu = Object.prototype.hasOwnProperty
    , _y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
    , nf = {}
    , rf = {};
function wy(t) {
    return pu.call(rf, t) ? !0 : pu.call(nf, t) ? !1 : _y.test(t) ? rf[t] = !0 : (nf[t] = !0,
        !1)
}
function Sy(t, e, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof e) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
                t !== "data-" && t !== "aria-");
        default:
            return !1
    }
}
function Ey(t, e, n, r) {
    if (e === null || typeof e > "u" || Sy(t, e, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !e;
            case 4:
                return e === !1;
            case 5:
                return isNaN(e);
            case 6:
                return isNaN(e) || 1 > e
        }
    return !1
}
function ze(t, e, n, r, i, s, o) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
        this.attributeName = r,
        this.attributeNamespace = i,
        this.mustUseProperty = n,
        this.propertyName = t,
        this.type = e,
        this.sanitizeURL = s,
        this.removeEmptyString = o
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (t) {
    xe[t] = new ze(t, 0, !1, t, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (t) {
    var e = t[0];
    xe[e] = new ze(e, 1, !1, t[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
    xe[t] = new ze(t, 2, !1, t.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (t) {
    xe[t] = new ze(t, 2, !1, t, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (t) {
    xe[t] = new ze(t, 3, !1, t.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (t) {
    xe[t] = new ze(t, 3, !0, t, null, !1, !1)
});
["capture", "download"].forEach(function (t) {
    xe[t] = new ze(t, 4, !1, t, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (t) {
    xe[t] = new ze(t, 6, !1, t, null, !1, !1)
});
["rowSpan", "start"].forEach(function (t) {
    xe[t] = new ze(t, 5, !1, t.toLowerCase(), null, !1, !1)
});
var zl = /[\-:]([a-z])/g;
function $l(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (t) {
    var e = t.replace(zl, $l);
    xe[e] = new ze(e, 1, !1, t, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (t) {
    var e = t.replace(zl, $l);
    xe[e] = new ze(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
    var e = t.replace(zl, $l);
    xe[e] = new ze(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (t) {
    xe[t] = new ze(t, 1, !1, t.toLowerCase(), null, !1, !1)
});
xe.xlinkHref = new ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (t) {
    xe[t] = new ze(t, 1, !1, t.toLowerCase(), null, !0, !0)
});
function Ul(t, e, n, r) {
    var i = xe.hasOwnProperty(e) ? xe[e] : null;
    (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (Ey(e, n, i, r) && (n = null),
        r || i === null ? wy(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName,
            r = i.attributeNamespace,
            n === null ? t.removeAttribute(e) : (i = i.type,
                n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
                r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var Yt = vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    , Ss = Symbol.for("react.element")
    , cr = Symbol.for("react.portal")
    , fr = Symbol.for("react.fragment")
    , Bl = Symbol.for("react.strict_mode")
    , hu = Symbol.for("react.profiler")
    , Np = Symbol.for("react.provider")
    , Pp = Symbol.for("react.context")
    , Vl = Symbol.for("react.forward_ref")
    , mu = Symbol.for("react.suspense")
    , gu = Symbol.for("react.suspense_list")
    , ql = Symbol.for("react.memo")
    , nn = Symbol.for("react.lazy")
    , Rp = Symbol.for("react.offscreen")
    , sf = Symbol.iterator;
function ni(t) {
    return t === null || typeof t != "object" ? null : (t = sf && t[sf] || t["@@iterator"],
        typeof t == "function" ? t : null)
}
var le = Object.assign, Pa;
function pi(t) {
    if (Pa === void 0)
        try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            Pa = e && e[1] || ""
        }
    return `
` + Pa + t
}
var Ra = !1;
function Ia(t, e) {
    if (!t || Ra)
        return "";
    Ra = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function () {
                throw Error()
            }
                ,
                Object.defineProperty(e.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (l) {
                    var r = l
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (l) {
                    r = l
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (l) {
                r = l
            }
            t()
        }
    } catch (l) {
        if (l && r && typeof l.stack == "string") {
            for (var i = l.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a];)
                a--;
            for (; 1 <= o && 0 <= a; o--,
                a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                                a--,
                                0 > a || i[o] !== s[a]) {
                                var u = `
` + i[o].replace(" at new ", " at ");
                                return t.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", t.displayName)),
                                    u
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Ra = !1,
            Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? pi(t) : ""
}
function ky(t) {
    switch (t.tag) {
        case 5:
            return pi(t.type);
        case 16:
            return pi("Lazy");
        case 13:
            return pi("Suspense");
        case 19:
            return pi("SuspenseList");
        case 0:
        case 2:
        case 15:
            return t = Ia(t.type, !1),
                t;
        case 11:
            return t = Ia(t.type.render, !1),
                t;
        case 1:
            return t = Ia(t.type, !0),
                t;
        default:
            return ""
    }
}
function yu(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
        case fr:
            return "Fragment";
        case cr:
            return "Portal";
        case hu:
            return "Profiler";
        case Bl:
            return "StrictMode";
        case mu:
            return "Suspense";
        case gu:
            return "SuspenseList"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
            case Pp:
                return (t.displayName || "Context") + ".Consumer";
            case Np:
                return (t._context.displayName || "Context") + ".Provider";
            case Vl:
                var e = t.render;
                return t = t.displayName,
                    t || (t = e.displayName || e.name || "",
                        t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                    t;
            case ql:
                return e = t.displayName || null,
                    e !== null ? e : yu(t.type) || "Memo";
            case nn:
                e = t._payload,
                    t = t._init;
                try {
                    return yu(t(e))
                } catch { }
        }
    return null
}
function xy(t) {
    var e = t.type;
    switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (e.displayName || "Context") + ".Consumer";
        case 10:
            return (e._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return t = e.render,
                t = t.displayName || t.name || "",
                e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return e;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return yu(e);
        case 8:
            return e === Bl ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof e == "function")
                return e.displayName || e.name || null;
            if (typeof e == "string")
                return e
    }
    return null
}
function Sn(t) {
    switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
    }
}
function Ip(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function Cy(t) {
    var e = Ip(t) ? "checked" : "value"
        , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
        , r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
            , s = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function () {
                return i.call(this)
            },
            set: function (o) {
                r = "" + o,
                    s.call(this, o)
            }
        }),
            Object.defineProperty(t, e, {
                enumerable: n.enumerable
            }),
        {
            getValue: function () {
                return r
            },
            setValue: function (o) {
                r = "" + o
            },
            stopTracking: function () {
                t._valueTracker = null,
                    delete t[e]
            }
        }
    }
}
function Es(t) {
    t._valueTracker || (t._valueTracker = Cy(t))
}
function Ap(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var n = e.getValue()
        , r = "";
    return t && (r = Ip(t) ? t.checked ? "true" : "false" : t.value),
        t = r,
        t !== n ? (e.setValue(t),
            !0) : !1
}
function ho(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
        return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
function vu(t, e) {
    var n = e.checked;
    return le({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked
    })
}
function of(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue
        , r = e.checked != null ? e.checked : e.defaultChecked;
    n = Sn(e.value != null ? e.value : n),
        t._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
        }
}
function Dp(t, e) {
    e = e.checked,
        e != null && Ul(t, "checked", e, !1)
}
function _u(t, e) {
    Dp(t, e);
    var n = Sn(e.value)
        , r = e.type;
    if (n != null)
        r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? wu(t, e.type, n) : e.hasOwnProperty("defaultValue") && wu(t, e.type, Sn(e.defaultValue)),
        e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}
function af(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + t._wrapperState.initialValue,
            n || e === t.value || (t.value = e),
            t.defaultValue = e
    }
    n = t.name,
        n !== "" && (t.name = ""),
        t.defaultChecked = !!t._wrapperState.initialChecked,
        n !== "" && (t.name = n)
}
function wu(t, e, n) {
    (e !== "number" || ho(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var hi = Array.isArray;
function kr(t, e, n, r) {
    if (t = t.options,
        e) {
        e = {};
        for (var i = 0; i < n.length; i++)
            e["$" + n[i]] = !0;
        for (n = 0; n < t.length; n++)
            i = e.hasOwnProperty("$" + t[n].value),
                t[n].selected !== i && (t[n].selected = i),
                i && r && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + Sn(n),
            e = null,
            i = 0; i < t.length; i++) {
            if (t[i].value === n) {
                t[i].selected = !0,
                    r && (t[i].defaultSelected = !0);
                return
            }
            e !== null || t[i].disabled || (e = t[i])
        }
        e !== null && (e.selected = !0)
    }
}
function Su(t, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(w(91));
    return le({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}
function uf(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children,
            e = e.defaultValue,
            n != null) {
            if (e != null)
                throw Error(w(92));
            if (hi(n)) {
                if (1 < n.length)
                    throw Error(w(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""),
            n = e
    }
    t._wrapperState = {
        initialValue: Sn(n)
    }
}
function Lp(t, e) {
    var n = Sn(e.value)
        , r = Sn(e.defaultValue);
    n != null && (n = "" + n,
        n !== t.value && (t.value = n),
        e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
        r != null && (t.defaultValue = "" + r)
}
function lf(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}
function Mp(t) {
    switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}
function Eu(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Mp(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var ks, jp = function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (e, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i)
        })
    }
        : t
}(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
        t.innerHTML = e;
    else {
        for (ks = ks || document.createElement("div"),
            ks.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
            e = ks.firstChild; t.firstChild;)
            t.removeChild(t.firstChild);
        for (; e.firstChild;)
            t.appendChild(e.firstChild)
    }
});
function Ii(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var Ei = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
    , by = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ei).forEach(function (t) {
    by.forEach(function (e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1),
            Ei[e] = Ei[t]
    })
});
function Fp(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || Ei.hasOwnProperty(t) && Ei[t] ? ("" + e).trim() : e + "px"
}
function zp(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
                , i = Fp(n, e[n], r);
            n === "float" && (n = "cssFloat"),
                r ? t.setProperty(n, i) : t[n] = i
        }
}
var Ty = le({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ku(t, e) {
    if (e) {
        if (Ty[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(w(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(w(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML))
                throw Error(w(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(w(62))
    }
}
function xu(t, e) {
    if (t.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Cu = null;
function Hl(t) {
    return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
}
var bu = null
    , xr = null
    , Cr = null;
function cf(t) {
    if (t = fs(t)) {
        if (typeof bu != "function")
            throw Error(w(280));
        var e = t.stateNode;
        e && (e = ia(e),
            bu(t.stateNode, t.type, e))
    }
}
function $p(t) {
    xr ? Cr ? Cr.push(t) : Cr = [t] : xr = t
}
function Up() {
    if (xr) {
        var t = xr
            , e = Cr;
        if (Cr = xr = null,
            cf(t),
            e)
            for (t = 0; t < e.length; t++)
                cf(e[t])
    }
}
function Bp(t, e) {
    return t(e)
}
function Vp() { }
var Aa = !1;
function qp(t, e, n) {
    if (Aa)
        return t(e, n);
    Aa = !0;
    try {
        return Bp(t, e, n)
    } finally {
        Aa = !1,
            (xr !== null || Cr !== null) && (Vp(),
                Up())
    }
}
function Ai(t, e) {
    var n = t.stateNode;
    if (n === null)
        return null;
    var r = ia(n);
    if (r === null)
        return null;
    n = r[e];
    e: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (t = t.type,
                r = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
                t = !r;
            break e;
        default:
            t = !1
    }
    if (t)
        return null;
    if (n && typeof n != "function")
        throw Error(w(231, e, typeof n));
    return n
}
var Tu = !1;
if (Wt)
    try {
        var ri = {};
        Object.defineProperty(ri, "passive", {
            get: function () {
                Tu = !0
            }
        }),
            window.addEventListener("test", ri, ri),
            window.removeEventListener("test", ri, ri)
    } catch {
        Tu = !1
    }
function Oy(t, e, n, r, i, s, o, a, u) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, l)
    } catch (c) {
        this.onError(c)
    }
}
var ki = !1
    , mo = null
    , go = !1
    , Ou = null
    , Ny = {
        onError: function (t) {
            ki = !0,
                mo = t
        }
    };
function Py(t, e, n, r, i, s, o, a, u) {
    ki = !1,
        mo = null,
        Oy.apply(Ny, arguments)
}
function Ry(t, e, n, r, i, s, o, a, u) {
    if (Py.apply(this, arguments),
        ki) {
        if (ki) {
            var l = mo;
            ki = !1,
                mo = null
        } else
            throw Error(w(198));
        go || (go = !0,
            Ou = l)
    }
}
function rr(t) {
    var e = t
        , n = t;
    if (t.alternate)
        for (; e.return;)
            e = e.return;
    else {
        t = e;
        do
            e = t,
                e.flags & 4098 && (n = e.return),
                t = e.return;
        while (t)
    }
    return e.tag === 3 ? n : null
}
function Hp(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
            return e.dehydrated
    }
    return null
}
function ff(t) {
    if (rr(t) !== t)
        throw Error(w(188))
}
function Iy(t) {
    var e = t.alternate;
    if (!e) {
        if (e = rr(t),
            e === null)
            throw Error(w(188));
        return e !== t ? null : t
    }
    for (var n = t, r = e; ;) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
                r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s;) {
                if (s === n)
                    return ff(i),
                        t;
                if (s === r)
                    return ff(i),
                        e;
                s = s.sibling
            }
            throw Error(w(188))
        }
        if (n.return !== r.return)
            n = i,
                r = s;
        else {
            for (var o = !1, a = i.child; a;) {
                if (a === n) {
                    o = !0,
                        n = i,
                        r = s;
                    break
                }
                if (a === r) {
                    o = !0,
                        r = i,
                        n = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a;) {
                    if (a === n) {
                        o = !0,
                            n = s,
                            r = i;
                        break
                    }
                    if (a === r) {
                        o = !0,
                            r = s,
                            n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(w(189))
            }
        }
        if (n.alternate !== r)
            throw Error(w(190))
    }
    if (n.tag !== 3)
        throw Error(w(188));
    return n.stateNode.current === n ? t : e
}
function Wp(t) {
    return t = Iy(t),
        t !== null ? Zp(t) : null
}
function Zp(t) {
    if (t.tag === 5 || t.tag === 6)
        return t;
    for (t = t.child; t !== null;) {
        var e = Zp(t);
        if (e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var Qp = Ge.unstable_scheduleCallback
    , df = Ge.unstable_cancelCallback
    , Ay = Ge.unstable_shouldYield
    , Dy = Ge.unstable_requestPaint
    , fe = Ge.unstable_now
    , Ly = Ge.unstable_getCurrentPriorityLevel
    , Wl = Ge.unstable_ImmediatePriority
    , Kp = Ge.unstable_UserBlockingPriority
    , yo = Ge.unstable_NormalPriority
    , My = Ge.unstable_LowPriority
    , Gp = Ge.unstable_IdlePriority
    , ea = null
    , Ot = null;
function jy(t) {
    if (Ot && typeof Ot.onCommitFiberRoot == "function")
        try {
            Ot.onCommitFiberRoot(ea, t, void 0, (t.current.flags & 128) === 128)
        } catch { }
}
var vt = Math.clz32 ? Math.clz32 : $y
    , Fy = Math.log
    , zy = Math.LN2;
function $y(t) {
    return t >>>= 0,
        t === 0 ? 32 : 31 - (Fy(t) / zy | 0) | 0
}
var xs = 64
    , Cs = 4194304;
function mi(t) {
    switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t
    }
}
function vo(t, e) {
    var n = t.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
        , i = t.suspendedLanes
        , s = t.pingedLanes
        , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = mi(a) : (s &= o,
            s !== 0 && (r = mi(s)))
    } else
        o = n & ~i,
            o !== 0 ? r = mi(o) : s !== 0 && (r = mi(s));
    if (r === 0)
        return 0;
    if (e !== 0 && e !== r && !(e & i) && (i = r & -r,
        s = e & -e,
        i >= s || i === 16 && (s & 4194240) !== 0))
        return e;
    if (r & 4 && (r |= n & 16),
        e = t.entangledLanes,
        e !== 0)
        for (t = t.entanglements,
            e &= r; 0 < e;)
            n = 31 - vt(e),
                i = 1 << n,
                r |= t[n],
                e &= ~i;
    return r
}
function Uy(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}
function By(t, e) {
    for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, s = t.pendingLanes; 0 < s;) {
        var o = 31 - vt(s)
            , a = 1 << o
            , u = i[o];
        u === -1 ? (!(a & n) || a & r) && (i[o] = Uy(a, e)) : u <= e && (t.expiredLanes |= a),
            s &= ~a
    }
}
function Nu(t) {
    return t = t.pendingLanes & -1073741825,
        t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function Yp() {
    var t = xs;
    return xs <<= 1,
        !(xs & 4194240) && (xs = 64),
        t
}
function Da(t) {
    for (var e = [], n = 0; 31 > n; n++)
        e.push(t);
    return e
}
function ls(t, e, n) {
    t.pendingLanes |= e,
        e !== 536870912 && (t.suspendedLanes = 0,
            t.pingedLanes = 0),
        t = t.eventTimes,
        e = 31 - vt(e),
        t[e] = n
}
function Vy(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.expiredLanes &= e,
        t.mutableReadLanes &= e,
        t.entangledLanes &= e,
        e = t.entanglements;
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n;) {
        var i = 31 - vt(n)
            , s = 1 << i;
        e[i] = 0,
            r[i] = -1,
            t[i] = -1,
            n &= ~s
    }
}
function Zl(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n;) {
        var r = 31 - vt(n)
            , i = 1 << r;
        i & e | t[r] & e && (t[r] |= e),
            n &= ~i
    }
}
var Y = 0;
function Xp(t) {
    return t &= -t,
        1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Jp, Ql, eh, th, nh, Pu = !1, bs = [], dn = null, pn = null, hn = null, Di = new Map, Li = new Map, an = [], qy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function pf(t, e) {
    switch (t) {
        case "focusin":
        case "focusout":
            dn = null;
            break;
        case "dragenter":
        case "dragleave":
            pn = null;
            break;
        case "mouseover":
        case "mouseout":
            hn = null;
            break;
        case "pointerover":
        case "pointerout":
            Di.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Li.delete(e.pointerId)
    }
}
function ii(t, e, n, r, i, s) {
    return t === null || t.nativeEvent !== s ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
        e !== null && (e = fs(e),
            e !== null && Ql(e)),
        t) : (t.eventSystemFlags |= r,
            e = t.targetContainers,
            i !== null && e.indexOf(i) === -1 && e.push(i),
            t)
}
function Hy(t, e, n, r, i) {
    switch (e) {
        case "focusin":
            return dn = ii(dn, t, e, n, r, i),
                !0;
        case "dragenter":
            return pn = ii(pn, t, e, n, r, i),
                !0;
        case "mouseover":
            return hn = ii(hn, t, e, n, r, i),
                !0;
        case "pointerover":
            var s = i.pointerId;
            return Di.set(s, ii(Di.get(s) || null, t, e, n, r, i)),
                !0;
        case "gotpointercapture":
            return s = i.pointerId,
                Li.set(s, ii(Li.get(s) || null, t, e, n, r, i)),
                !0
    }
    return !1
}
function rh(t) {
    var e = Ln(t.target);
    if (e !== null) {
        var n = rr(e);
        if (n !== null) {
            if (e = n.tag,
                e === 13) {
                if (e = Hp(n),
                    e !== null) {
                    t.blockedOn = e,
                        nh(t.priority, function () {
                            eh(n)
                        });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}
function Qs(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
        var n = Ru(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type, n);
            Cu = r,
                n.target.dispatchEvent(r),
                Cu = null
        } else
            return e = fs(n),
                e !== null && Ql(e),
                t.blockedOn = n,
                !1;
        e.shift()
    }
    return !0
}
function hf(t, e, n) {
    Qs(t) && n.delete(e)
}
function Wy() {
    Pu = !1,
        dn !== null && Qs(dn) && (dn = null),
        pn !== null && Qs(pn) && (pn = null),
        hn !== null && Qs(hn) && (hn = null),
        Di.forEach(hf),
        Li.forEach(hf)
}
function si(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
        Pu || (Pu = !0,
            Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, Wy)))
}
function Mi(t) {
    function e(i) {
        return si(i, t)
    }
    if (0 < bs.length) {
        si(bs[0], t);
        for (var n = 1; n < bs.length; n++) {
            var r = bs[n];
            r.blockedOn === t && (r.blockedOn = null)
        }
    }
    for (dn !== null && si(dn, t),
        pn !== null && si(pn, t),
        hn !== null && si(hn, t),
        Di.forEach(e),
        Li.forEach(e),
        n = 0; n < an.length; n++)
        r = an[n],
            r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < an.length && (n = an[0],
        n.blockedOn === null);)
        rh(n),
            n.blockedOn === null && an.shift()
}
var br = Yt.ReactCurrentBatchConfig
    , _o = !0;
function Zy(t, e, n, r) {
    var i = Y
        , s = br.transition;
    br.transition = null;
    try {
        Y = 1,
            Kl(t, e, n, r)
    } finally {
        Y = i,
            br.transition = s
    }
}
function Qy(t, e, n, r) {
    var i = Y
        , s = br.transition;
    br.transition = null;
    try {
        Y = 4,
            Kl(t, e, n, r)
    } finally {
        Y = i,
            br.transition = s
    }
}
function Kl(t, e, n, r) {
    if (_o) {
        var i = Ru(t, e, n, r);
        if (i === null)
            qa(t, e, r, wo, n),
                pf(t, r);
        else if (Hy(i, t, e, n, r))
            r.stopPropagation();
        else if (pf(t, r),
            e & 4 && -1 < qy.indexOf(t)) {
            for (; i !== null;) {
                var s = fs(i);
                if (s !== null && Jp(s),
                    s = Ru(t, e, n, r),
                    s === null && qa(t, e, r, wo, n),
                    s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            qa(t, e, r, null, n)
    }
}
var wo = null;
function Ru(t, e, n, r) {
    if (wo = null,
        t = Hl(r),
        t = Ln(t),
        t !== null)
        if (e = rr(t),
            e === null)
            t = null;
        else if (n = e.tag,
            n === 13) {
            if (t = Hp(e),
                t !== null)
                return t;
            t = null
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else
            e !== t && (t = null);
    return wo = t,
        null
}
function ih(t) {
    switch (t) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Ly()) {
                case Wl:
                    return 1;
                case Kp:
                    return 4;
                case yo:
                case My:
                    return 16;
                case Gp:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var cn = null
    , Gl = null
    , Ks = null;
function sh() {
    if (Ks)
        return Ks;
    var t, e = Gl, n = e.length, r, i = "value" in cn ? cn.value : cn.textContent, s = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++)
        ;
    var o = n - t;
    for (r = 1; r <= o && e[n - r] === i[s - r]; r++)
        ;
    return Ks = i.slice(t, 1 < r ? 1 - r : void 0)
}
function Gs(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
}
function Ts() {
    return !0
}
function mf() {
    return !1
}
function Xe(t) {
    function e(n, r, i, s, o) {
        this._reactName = n,
            this._targetInst = i,
            this.type = r,
            this.nativeEvent = s,
            this.target = o,
            this.currentTarget = null;
        for (var a in t)
            t.hasOwnProperty(a) && (n = t[a],
                this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ts : mf,
            this.isPropagationStopped = mf,
            this
    }
    return le(e.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Ts)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Ts)
        },
        persist: function () { },
        isPersistent: Ts
    }),
        e
}
var Gr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Yl = Xe(Gr), cs = le({}, Gr, {
    view: 0,
    detail: 0
}), Ky = Xe(cs), La, Ma, oi, ta = le({}, cs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Xl,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function (t) {
        return "movementX" in t ? t.movementX : (t !== oi && (oi && t.type === "mousemove" ? (La = t.screenX - oi.screenX,
            Ma = t.screenY - oi.screenY) : Ma = La = 0,
            oi = t),
            La)
    },
    movementY: function (t) {
        return "movementY" in t ? t.movementY : Ma
    }
}), gf = Xe(ta), Gy = le({}, ta, {
    dataTransfer: 0
}), Yy = Xe(Gy), Xy = le({}, cs, {
    relatedTarget: 0
}), ja = Xe(Xy), Jy = le({}, Gr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), ev = Xe(Jy), tv = le({}, Gr, {
    clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData
    }
}), nv = Xe(tv), rv = le({}, Gr, {
    data: 0
}), yf = Xe(rv), iv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, sv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, ov = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function av(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = ov[t]) ? !!e[t] : !1
}
function Xl() {
    return av
}
var uv = le({}, cs, {
    key: function (t) {
        if (t.key) {
            var e = iv[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = Gs(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? sv[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xl,
    charCode: function (t) {
        return t.type === "keypress" ? Gs(t) : 0
    },
    keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function (t) {
        return t.type === "keypress" ? Gs(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
    , lv = Xe(uv)
    , cv = le({}, ta, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
    , vf = Xe(cv)
    , fv = le({}, cs, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Xl
    })
    , dv = Xe(fv)
    , pv = le({}, Gr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
    , hv = Xe(pv)
    , mv = le({}, ta, {
        deltaX: function (t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
        },
        deltaY: function (t) {
            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
    , gv = Xe(mv)
    , yv = [9, 13, 27, 32]
    , Jl = Wt && "CompositionEvent" in window
    , xi = null;
Wt && "documentMode" in document && (xi = document.documentMode);
var vv = Wt && "TextEvent" in window && !xi
    , oh = Wt && (!Jl || xi && 8 < xi && 11 >= xi)
    , _f = " "
    , wf = !1;
function ah(t, e) {
    switch (t) {
        case "keyup":
            return yv.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}
function uh(t) {
    return t = t.detail,
        typeof t == "object" && "data" in t ? t.data : null
}
var dr = !1;
function _v(t, e) {
    switch (t) {
        case "compositionend":
            return uh(e);
        case "keypress":
            return e.which !== 32 ? null : (wf = !0,
                _f);
        case "textInput":
            return t = e.data,
                t === _f && wf ? null : t;
        default:
            return null
    }
}
function wv(t, e) {
    if (dr)
        return t === "compositionend" || !Jl && ah(t, e) ? (t = sh(),
            Ks = Gl = cn = null,
            dr = !1,
            t) : null;
    switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return oh && e.locale !== "ko" ? null : e.data;
        default:
            return null
    }
}
var Sv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Sf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Sv[t.type] : e === "textarea"
}
function lh(t, e, n, r) {
    $p(r),
        e = So(e, "onChange"),
        0 < e.length && (n = new Yl("onChange", "change", null, n, r),
            t.push({
                event: n,
                listeners: e
            }))
}
var Ci = null
    , ji = null;
function Ev(t) {
    wh(t, 0)
}
function na(t) {
    var e = mr(t);
    if (Ap(e))
        return t
}
function kv(t, e) {
    if (t === "change")
        return e
}
var ch = !1;
if (Wt) {
    var Fa;
    if (Wt) {
        var za = "oninput" in document;
        if (!za) {
            var Ef = document.createElement("div");
            Ef.setAttribute("oninput", "return;"),
                za = typeof Ef.oninput == "function"
        }
        Fa = za
    } else
        Fa = !1;
    ch = Fa && (!document.documentMode || 9 < document.documentMode)
}
function kf() {
    Ci && (Ci.detachEvent("onpropertychange", fh),
        ji = Ci = null)
}
function fh(t) {
    if (t.propertyName === "value" && na(ji)) {
        var e = [];
        lh(e, ji, t, Hl(t)),
            qp(Ev, e)
    }
}
function xv(t, e, n) {
    t === "focusin" ? (kf(),
        Ci = e,
        ji = n,
        Ci.attachEvent("onpropertychange", fh)) : t === "focusout" && kf()
}
function Cv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return na(ji)
}
function bv(t, e) {
    if (t === "click")
        return na(e)
}
function Tv(t, e) {
    if (t === "input" || t === "change")
        return na(e)
}
function Ov(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var Et = typeof Object.is == "function" ? Object.is : Ov;
function Fi(t, e) {
    if (Et(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var n = Object.keys(t)
        , r = Object.keys(e);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!pu.call(e, i) || !Et(t[i], e[i]))
            return !1
    }
    return !0
}
function xf(t) {
    for (; t && t.firstChild;)
        t = t.firstChild;
    return t
}
function Cf(t, e) {
    var n = xf(t);
    t = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = t + n.textContent.length,
                t <= e && r >= e)
                return {
                    node: n,
                    offset: e - t
                };
            t = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = xf(n)
    }
}
function dh(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? dh(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function ph() {
    for (var t = window, e = ho(); e instanceof t.HTMLIFrameElement;) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            t = e.contentWindow;
        else
            break;
        e = ho(t.document)
    }
    return e
}
function ec(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function Nv(t) {
    var e = ph()
        , n = t.focusedElem
        , r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && dh(n.ownerDocument.documentElement, n)) {
        if (r !== null && ec(n)) {
            if (e = r.start,
                t = r.end,
                t === void 0 && (t = e),
                "selectionStart" in n)
                n.selectionStart = e,
                    n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window,
                t.getSelection) {
                t = t.getSelection();
                var i = n.textContent.length
                    , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                    !t.extend && s > r && (i = r,
                        r = s,
                        s = i),
                    i = Cf(n, s);
                var o = Cf(n, r);
                i && o && (t.rangeCount !== 1 || t.anchorNode !== i.node || t.anchorOffset !== i.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && (e = e.createRange(),
                    e.setStart(i.node, i.offset),
                    t.removeAllRanges(),
                    s > r ? (t.addRange(e),
                        t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset),
                            t.addRange(e)))
            }
        }
        for (e = [],
            t = n; t = t.parentNode;)
            t.nodeType === 1 && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
            n = 0; n < e.length; n++)
            t = e[n],
                t.element.scrollLeft = t.left,
                t.element.scrollTop = t.top
    }
}
var Pv = Wt && "documentMode" in document && 11 >= document.documentMode
    , pr = null
    , Iu = null
    , bi = null
    , Au = !1;
function bf(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Au || pr == null || pr !== ho(r) || (r = pr,
        "selectionStart" in r && ec(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
            r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }),
        bi && Fi(bi, r) || (bi = r,
            r = So(Iu, "onSelect"),
            0 < r.length && (e = new Yl("onSelect", "select", null, e, n),
                t.push({
                    event: e,
                    listeners: r
                }),
                e.target = pr)))
}
function Os(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(),
        n["Webkit" + t] = "webkit" + e,
        n["Moz" + t] = "moz" + e,
        n
}
var hr = {
    animationend: Os("Animation", "AnimationEnd"),
    animationiteration: Os("Animation", "AnimationIteration"),
    animationstart: Os("Animation", "AnimationStart"),
    transitionend: Os("Transition", "TransitionEnd")
}
    , $a = {}
    , hh = {};
Wt && (hh = document.createElement("div").style,
    "AnimationEvent" in window || (delete hr.animationend.animation,
        delete hr.animationiteration.animation,
        delete hr.animationstart.animation),
    "TransitionEvent" in window || delete hr.transitionend.transition);
function ra(t) {
    if ($a[t])
        return $a[t];
    if (!hr[t])
        return t;
    var e = hr[t], n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in hh)
            return $a[t] = e[n];
    return t
}
var mh = ra("animationend")
    , gh = ra("animationiteration")
    , yh = ra("animationstart")
    , vh = ra("transitionend")
    , _h = new Map
    , Tf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function On(t, e) {
    _h.set(t, e),
        nr(e, [t])
}
for (var Ua = 0; Ua < Tf.length; Ua++) {
    var Ba = Tf[Ua]
        , Rv = Ba.toLowerCase()
        , Iv = Ba[0].toUpperCase() + Ba.slice(1);
    On(Rv, "on" + Iv)
}
On(mh, "onAnimationEnd");
On(gh, "onAnimationIteration");
On(yh, "onAnimationStart");
On("dblclick", "onDoubleClick");
On("focusin", "onFocus");
On("focusout", "onBlur");
On(vh, "onTransitionEnd");
Ar("onMouseEnter", ["mouseout", "mouseover"]);
Ar("onMouseLeave", ["mouseout", "mouseover"]);
Ar("onPointerEnter", ["pointerout", "pointerover"]);
Ar("onPointerLeave", ["pointerout", "pointerover"]);
nr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
nr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
nr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
nr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , Av = new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));
function Of(t, e, n) {
    var r = t.type || "unknown-event";
    t.currentTarget = n,
        Ry(r, e, void 0, t),
        t.currentTarget = null
}
function wh(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var r = t[n]
            , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (e)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                        , u = a.instance
                        , l = a.currentTarget;
                    if (a = a.listener,
                        u !== s && i.isPropagationStopped())
                        break e;
                    Of(i, a, l),
                        s = u
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                        u = a.instance,
                        l = a.currentTarget,
                        a = a.listener,
                        u !== s && i.isPropagationStopped())
                        break e;
                    Of(i, a, l),
                        s = u
                }
        }
    }
    if (go)
        throw t = Ou,
        go = !1,
        Ou = null,
        t
}
function re(t, e) {
    var n = e[Fu];
    n === void 0 && (n = e[Fu] = new Set);
    var r = t + "__bubble";
    n.has(r) || (Sh(e, t, 2, !1),
        n.add(r))
}
function Va(t, e, n) {
    var r = 0;
    e && (r |= 4),
        Sh(n, t, r, e)
}
var Ns = "_reactListening" + Math.random().toString(36).slice(2);
function zi(t) {
    if (!t[Ns]) {
        t[Ns] = !0,
            Op.forEach(function (n) {
                n !== "selectionchange" && (Av.has(n) || Va(n, !1, t),
                    Va(n, !0, t))
            });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Ns] || (e[Ns] = !0,
            Va("selectionchange", !1, e))
    }
}
function Sh(t, e, n, r) {
    switch (ih(e)) {
        case 1:
            var i = Zy;
            break;
        case 4:
            i = Qy;
            break;
        default:
            i = Kl
    }
    n = i.bind(null, e, n, t),
        i = void 0,
        !Tu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0),
        r ? i !== void 0 ? t.addEventListener(e, n, {
            capture: !0,
            passive: i
        }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
            passive: i
        }) : t.addEventListener(e, n, !1)
}
function qa(t, e, n, r, i) {
    var s = r;
    if (!(e & 1) && !(e & 2) && r !== null)
        e: for (; ;) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null;) {
                        var u = o.tag;
                        if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo,
                            u === i || u.nodeType === 8 && u.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; a !== null;) {
                    if (o = Ln(a),
                        o === null)
                        return;
                    if (u = o.tag,
                        u === 5 || u === 6) {
                        r = s = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    qp(function () {
        var l = s
            , c = Hl(n)
            , f = [];
        e: {
            var p = _h.get(t);
            if (p !== void 0) {
                var g = Yl
                    , y = t;
                switch (t) {
                    case "keypress":
                        if (Gs(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        g = lv;
                        break;
                    case "focusin":
                        y = "focus",
                            g = ja;
                        break;
                    case "focusout":
                        y = "blur",
                            g = ja;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = ja;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = gf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = Yy;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = dv;
                        break;
                    case mh:
                    case gh:
                    case yh:
                        g = ev;
                        break;
                    case vh:
                        g = hv;
                        break;
                    case "scroll":
                        g = Ky;
                        break;
                    case "wheel":
                        g = gv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = nv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = vf
                }
                var v = (e & 4) !== 0
                    , C = !v && t === "scroll"
                    , h = v ? p !== null ? p + "Capture" : null : p;
                v = [];
                for (var d = l, m; d !== null;) {
                    m = d;
                    var _ = m.stateNode;
                    if (m.tag === 5 && _ !== null && (m = _,
                        h !== null && (_ = Ai(d, h),
                            _ != null && v.push($i(d, _, m)))),
                        C)
                        break;
                    d = d.return
                }
                0 < v.length && (p = new g(p, y, null, n, c),
                    f.push({
                        event: p,
                        listeners: v
                    }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (p = t === "mouseover" || t === "pointerover",
                    g = t === "mouseout" || t === "pointerout",
                    p && n !== Cu && (y = n.relatedTarget || n.fromElement) && (Ln(y) || y[Zt]))
                    break e;
                if ((g || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window,
                    g ? (y = n.relatedTarget || n.toElement,
                        g = l,
                        y = y ? Ln(y) : null,
                        y !== null && (C = rr(y),
                            y !== C || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null,
                                y = l),
                    g !== y)) {
                    if (v = gf,
                        _ = "onMouseLeave",
                        h = "onMouseEnter",
                        d = "mouse",
                        (t === "pointerout" || t === "pointerover") && (v = vf,
                            _ = "onPointerLeave",
                            h = "onPointerEnter",
                            d = "pointer"),
                        C = g == null ? p : mr(g),
                        m = y == null ? p : mr(y),
                        p = new v(_, d + "leave", g, n, c),
                        p.target = C,
                        p.relatedTarget = m,
                        _ = null,
                        Ln(c) === l && (v = new v(h, d + "enter", y, n, c),
                            v.target = m,
                            v.relatedTarget = C,
                            _ = v),
                        C = _,
                        g && y)
                        t: {
                            for (v = g,
                                h = y,
                                d = 0,
                                m = v; m; m = ur(m))
                                d++;
                            for (m = 0,
                                _ = h; _; _ = ur(_))
                                m++;
                            for (; 0 < d - m;)
                                v = ur(v),
                                    d--;
                            for (; 0 < m - d;)
                                h = ur(h),
                                    m--;
                            for (; d--;) {
                                if (v === h || h !== null && v === h.alternate)
                                    break t;
                                v = ur(v),
                                    h = ur(h)
                            }
                            v = null
                        }
                    else
                        v = null;
                    g !== null && Nf(f, p, g, v, !1),
                        y !== null && C !== null && Nf(f, C, y, v, !0)
                }
            }
            e: {
                if (p = l ? mr(l) : window,
                    g = p.nodeName && p.nodeName.toLowerCase(),
                    g === "select" || g === "input" && p.type === "file")
                    var k = kv;
                else if (Sf(p))
                    if (ch)
                        k = Tv;
                    else {
                        k = Cv;
                        var b = xv
                    }
                else
                    (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (k = bv);
                if (k && (k = k(t, l))) {
                    lh(f, k, n, c);
                    break e
                }
                b && b(t, p, l),
                    t === "focusout" && (b = p._wrapperState) && b.controlled && p.type === "number" && wu(p, "number", p.value)
            }
            switch (b = l ? mr(l) : window,
            t) {
                case "focusin":
                    (Sf(b) || b.contentEditable === "true") && (pr = b,
                        Iu = l,
                        bi = null);
                    break;
                case "focusout":
                    bi = Iu = pr = null;
                    break;
                case "mousedown":
                    Au = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Au = !1,
                        bf(f, n, c);
                    break;
                case "selectionchange":
                    if (Pv)
                        break;
                case "keydown":
                case "keyup":
                    bf(f, n, c)
            }
            var N;
            if (Jl)
                e: {
                    switch (t) {
                        case "compositionstart":
                            var P = "onCompositionStart";
                            break e;
                        case "compositionend":
                            P = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            P = "onCompositionUpdate";
                            break e
                    }
                    P = void 0
                }
            else
                dr ? ah(t, n) && (P = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (oh && n.locale !== "ko" && (dr || P !== "onCompositionStart" ? P === "onCompositionEnd" && dr && (N = sh()) : (cn = c,
                Gl = "value" in cn ? cn.value : cn.textContent,
                dr = !0)),
                b = So(l, P),
                0 < b.length && (P = new yf(P, t, null, n, c),
                    f.push({
                        event: P,
                        listeners: b
                    }),
                    N ? P.data = N : (N = uh(n),
                        N !== null && (P.data = N)))),
                (N = vv ? _v(t, n) : wv(t, n)) && (l = So(l, "onBeforeInput"),
                    0 < l.length && (c = new yf("onBeforeInput", "beforeinput", null, n, c),
                        f.push({
                            event: c,
                            listeners: l
                        }),
                        c.data = N))
        }
        wh(f, e)
    })
}
function $i(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}
function So(t, e) {
    for (var n = e + "Capture", r = []; t !== null;) {
        var i = t
            , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
            s = Ai(t, n),
            s != null && r.unshift($i(t, s, i)),
            s = Ai(t, e),
            s != null && r.push($i(t, s, i))),
            t = t.return
    }
    return r
}
function ur(t) {
    if (t === null)
        return null;
    do
        t = t.return;
    while (t && t.tag !== 5);
    return t || null
}
function Nf(t, e, n, r, i) {
    for (var s = e._reactName, o = []; n !== null && n !== r;) {
        var a = n
            , u = a.alternate
            , l = a.stateNode;
        if (u !== null && u === r)
            break;
        a.tag === 5 && l !== null && (a = l,
            i ? (u = Ai(n, s),
                u != null && o.unshift($i(n, u, a))) : i || (u = Ai(n, s),
                    u != null && o.push($i(n, u, a)))),
            n = n.return
    }
    o.length !== 0 && t.push({
        event: e,
        listeners: o
    })
}
var Dv = /\r\n?/g
    , Lv = /\u0000|\uFFFD/g;
function Pf(t) {
    return (typeof t == "string" ? t : "" + t).replace(Dv, `
`).replace(Lv, "")
}
function Ps(t, e, n) {
    if (e = Pf(e),
        Pf(t) !== e && n)
        throw Error(w(425))
}
function Eo() { }
var Du = null
    , Lu = null;
function Mu(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var ju = typeof setTimeout == "function" ? setTimeout : void 0
    , Mv = typeof clearTimeout == "function" ? clearTimeout : void 0
    , Rf = typeof Promise == "function" ? Promise : void 0
    , jv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rf < "u" ? function (t) {
        return Rf.resolve(null).then(t).catch(Fv)
    }
        : ju;
function Fv(t) {
    setTimeout(function () {
        throw t
    })
}
function Ha(t, e) {
    var n = e
        , r = 0;
    do {
        var i = n.nextSibling;
        if (t.removeChild(n),
            i && i.nodeType === 8)
            if (n = i.data,
                n === "/$") {
                if (r === 0) {
                    t.removeChild(i),
                        Mi(e);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Mi(e)
}
function mn(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data,
                e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return t
}
function If(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0)
                    return t;
                e--
            } else
                n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var Yr = Math.random().toString(36).slice(2)
    , bt = "__reactFiber$" + Yr
    , Ui = "__reactProps$" + Yr
    , Zt = "__reactContainer$" + Yr
    , Fu = "__reactEvents$" + Yr
    , zv = "__reactListeners$" + Yr
    , $v = "__reactHandles$" + Yr;
function Ln(t) {
    var e = t[bt];
    if (e)
        return e;
    for (var n = t.parentNode; n;) {
        if (e = n[Zt] || n[bt]) {
            if (n = e.alternate,
                e.child !== null || n !== null && n.child !== null)
                for (t = If(t); t !== null;) {
                    if (n = t[bt])
                        return n;
                    t = If(t)
                }
            return e
        }
        t = n,
            n = t.parentNode
    }
    return null
}
function fs(t) {
    return t = t[bt] || t[Zt],
        !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function mr(t) {
    if (t.tag === 5 || t.tag === 6)
        return t.stateNode;
    throw Error(w(33))
}
function ia(t) {
    return t[Ui] || null
}
var zu = []
    , gr = -1;
function Nn(t) {
    return {
        current: t
    }
}
function ie(t) {
    0 > gr || (t.current = zu[gr],
        zu[gr] = null,
        gr--)
}
function te(t, e) {
    gr++,
        zu[gr] = t.current,
        t.current = e
}
var En = {}
    , Pe = Nn(En)
    , Be = Nn(!1)
    , Vn = En;
function Dr(t, e) {
    var n = t.type.contextTypes;
    if (!n)
        return En;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = e[s];
    return r && (t = t.stateNode,
        t.__reactInternalMemoizedUnmaskedChildContext = e,
        t.__reactInternalMemoizedMaskedChildContext = i),
        i
}
function Ve(t) {
    return t = t.childContextTypes,
        t != null
}
function ko() {
    ie(Be),
        ie(Pe)
}
function Af(t, e, n) {
    if (Pe.current !== En)
        throw Error(w(168));
    te(Pe, e),
        te(Be, n)
}
function Eh(t, e, n) {
    var r = t.stateNode;
    if (e = e.childContextTypes,
        typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in e))
            throw Error(w(108, xy(t) || "Unknown", i));
    return le({}, n, r)
}
function xo(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || En,
        Vn = Pe.current,
        te(Pe, t),
        te(Be, Be.current),
        !0
}
function Df(t, e, n) {
    var r = t.stateNode;
    if (!r)
        throw Error(w(169));
    n ? (t = Eh(t, e, Vn),
        r.__reactInternalMemoizedMergedChildContext = t,
        ie(Be),
        ie(Pe),
        te(Pe, t)) : ie(Be),
        te(Be, n)
}
var zt = null
    , sa = !1
    , Wa = !1;
function kh(t) {
    zt === null ? zt = [t] : zt.push(t)
}
function Uv(t) {
    sa = !0,
        kh(t)
}
function Pn() {
    if (!Wa && zt !== null) {
        Wa = !0;
        var t = 0
            , e = Y;
        try {
            var n = zt;
            for (Y = 1; t < n.length; t++) {
                var r = n[t];
                do
                    r = r(!0);
                while (r !== null)
            }
            zt = null,
                sa = !1
        } catch (i) {
            throw zt !== null && (zt = zt.slice(t + 1)),
            Qp(Wl, Pn),
            i
        } finally {
            Y = e,
                Wa = !1
        }
    }
    return null
}
var yr = []
    , vr = 0
    , Co = null
    , bo = 0
    , et = []
    , tt = 0
    , qn = null
    , Ut = 1
    , Bt = "";
function An(t, e) {
    yr[vr++] = bo,
        yr[vr++] = Co,
        Co = t,
        bo = e
}
function xh(t, e, n) {
    et[tt++] = Ut,
        et[tt++] = Bt,
        et[tt++] = qn,
        qn = t;
    var r = Ut;
    t = Bt;
    var i = 32 - vt(r) - 1;
    r &= ~(1 << i),
        n += 1;
    var s = 32 - vt(e) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
            r >>= o,
            i -= o,
            Ut = 1 << 32 - vt(e) + i | n << i | r,
            Bt = s + t
    } else
        Ut = 1 << s | n << i | r,
            Bt = t
}
function tc(t) {
    t.return !== null && (An(t, 1),
        xh(t, 1, 0))
}
function nc(t) {
    for (; t === Co;)
        Co = yr[--vr],
            yr[vr] = null,
            bo = yr[--vr],
            yr[vr] = null;
    for (; t === qn;)
        qn = et[--tt],
            et[tt] = null,
            Bt = et[--tt],
            et[tt] = null,
            Ut = et[--tt],
            et[tt] = null
}
var Qe = null
    , We = null
    , se = !1
    , gt = null;
function Ch(t, e) {
    var n = it(5, null, null, 0);
    n.elementType = "DELETED",
        n.stateNode = e,
        n.return = t,
        e = t.deletions,
        e === null ? (t.deletions = [n],
            t.flags |= 16) : e.push(n)
}
function Lf(t, e) {
    switch (t.tag) {
        case 5:
            var n = t.type;
            return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
                e !== null ? (t.stateNode = e,
                    Qe = t,
                    We = mn(e.firstChild),
                    !0) : !1;
        case 6:
            return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
                e !== null ? (t.stateNode = e,
                    Qe = t,
                    We = null,
                    !0) : !1;
        case 13:
            return e = e.nodeType !== 8 ? null : e,
                e !== null ? (n = qn !== null ? {
                    id: Ut,
                    overflow: Bt
                } : null,
                    t.memoizedState = {
                        dehydrated: e,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    n = it(18, null, null, 0),
                    n.stateNode = e,
                    n.return = t,
                    t.child = n,
                    Qe = t,
                    We = null,
                    !0) : !1;
        default:
            return !1
    }
}
function $u(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function Uu(t) {
    if (se) {
        var e = We;
        if (e) {
            var n = e;
            if (!Lf(t, e)) {
                if ($u(t))
                    throw Error(w(418));
                e = mn(n.nextSibling);
                var r = Qe;
                e && Lf(t, e) ? Ch(r, n) : (t.flags = t.flags & -4097 | 2,
                    se = !1,
                    Qe = t)
            }
        } else {
            if ($u(t))
                throw Error(w(418));
            t.flags = t.flags & -4097 | 2,
                se = !1,
                Qe = t
        }
    }
}
function Mf(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;)
        t = t.return;
    Qe = t
}
function Rs(t) {
    if (t !== Qe)
        return !1;
    if (!se)
        return Mf(t),
            se = !0,
            !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
        e = e !== "head" && e !== "body" && !Mu(t.type, t.memoizedProps)),
        e && (e = We)) {
        if ($u(t))
            throw bh(),
            Error(w(418));
        for (; e;)
            Ch(t, e),
                e = mn(e.nextSibling)
    }
    if (Mf(t),
        t.tag === 13) {
        if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
            throw Error(w(317));
        e: {
            for (t = t.nextSibling,
                e = 0; t;) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            We = mn(t.nextSibling);
                            break e
                        }
                        e--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            We = null
        }
    } else
        We = Qe ? mn(t.stateNode.nextSibling) : null;
    return !0
}
function bh() {
    for (var t = We; t;)
        t = mn(t.nextSibling)
}
function Lr() {
    We = Qe = null,
        se = !1
}
function rc(t) {
    gt === null ? gt = [t] : gt.push(t)
}
var Bv = Yt.ReactCurrentBatchConfig;
function ai(t, e, n) {
    if (t = n.ref,
        t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner,
                n) {
                if (n.tag !== 1)
                    throw Error(w(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(w(147, t));
            var i = r
                , s = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === s ? e.ref : (e = function (o) {
                var a = i.refs;
                o === null ? delete a[s] : a[s] = o
            }
                ,
                e._stringRef = s,
                e)
        }
        if (typeof t != "string")
            throw Error(w(284));
        if (!n._owner)
            throw Error(w(290, t))
    }
    return t
}
function Is(t, e) {
    throw t = Object.prototype.toString.call(e),
    Error(w(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function jf(t) {
    var e = t._init;
    return e(t._payload)
}
function Th(t) {
    function e(h, d) {
        if (t) {
            var m = h.deletions;
            m === null ? (h.deletions = [d],
                h.flags |= 16) : m.push(d)
        }
    }
    function n(h, d) {
        if (!t)
            return null;
        for (; d !== null;)
            e(h, d),
                d = d.sibling;
        return null
    }
    function r(h, d) {
        for (h = new Map; d !== null;)
            d.key !== null ? h.set(d.key, d) : h.set(d.index, d),
                d = d.sibling;
        return h
    }
    function i(h, d) {
        return h = _n(h, d),
            h.index = 0,
            h.sibling = null,
            h
    }
    function s(h, d, m) {
        return h.index = m,
            t ? (m = h.alternate,
                m !== null ? (m = m.index,
                    m < d ? (h.flags |= 2,
                        d) : m) : (h.flags |= 2,
                            d)) : (h.flags |= 1048576,
                                d)
    }
    function o(h) {
        return t && h.alternate === null && (h.flags |= 2),
            h
    }
    function a(h, d, m, _) {
        return d === null || d.tag !== 6 ? (d = Ja(m, h.mode, _),
            d.return = h,
            d) : (d = i(d, m),
                d.return = h,
                d)
    }
    function u(h, d, m, _) {
        var k = m.type;
        return k === fr ? c(h, d, m.props.children, _, m.key) : d !== null && (d.elementType === k || typeof k == "object" && k !== null && k.$$typeof === nn && jf(k) === d.type) ? (_ = i(d, m.props),
            _.ref = ai(h, d, m),
            _.return = h,
            _) : (_ = ro(m.type, m.key, m.props, null, h.mode, _),
                _.ref = ai(h, d, m),
                _.return = h,
                _)
    }
    function l(h, d, m, _) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = eu(m, h.mode, _),
            d.return = h,
            d) : (d = i(d, m.children || []),
                d.return = h,
                d)
    }
    function c(h, d, m, _, k) {
        return d === null || d.tag !== 7 ? (d = $n(m, h.mode, _, k),
            d.return = h,
            d) : (d = i(d, m),
                d.return = h,
                d)
    }
    function f(h, d, m) {
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return d = Ja("" + d, h.mode, m),
                d.return = h,
                d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case Ss:
                    return m = ro(d.type, d.key, d.props, null, h.mode, m),
                        m.ref = ai(h, null, d),
                        m.return = h,
                        m;
                case cr:
                    return d = eu(d, h.mode, m),
                        d.return = h,
                        d;
                case nn:
                    var _ = d._init;
                    return f(h, _(d._payload), m)
            }
            if (hi(d) || ni(d))
                return d = $n(d, h.mode, m, null),
                    d.return = h,
                    d;
            Is(h, d)
        }
        return null
    }
    function p(h, d, m, _) {
        var k = d !== null ? d.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return k !== null ? null : a(h, d, "" + m, _);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ss:
                    return m.key === k ? u(h, d, m, _) : null;
                case cr:
                    return m.key === k ? l(h, d, m, _) : null;
                case nn:
                    return k = m._init,
                        p(h, d, k(m._payload), _)
            }
            if (hi(m) || ni(m))
                return k !== null ? null : c(h, d, m, _, null);
            Is(h, m)
        }
        return null
    }
    function g(h, d, m, _, k) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return h = h.get(m) || null,
                a(d, h, "" + _, k);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
                case Ss:
                    return h = h.get(_.key === null ? m : _.key) || null,
                        u(d, h, _, k);
                case cr:
                    return h = h.get(_.key === null ? m : _.key) || null,
                        l(d, h, _, k);
                case nn:
                    var b = _._init;
                    return g(h, d, m, b(_._payload), k)
            }
            if (hi(_) || ni(_))
                return h = h.get(m) || null,
                    c(d, h, _, k, null);
            Is(d, _)
        }
        return null
    }
    function y(h, d, m, _) {
        for (var k = null, b = null, N = d, P = d = 0, X = null; N !== null && P < m.length; P++) {
            N.index > P ? (X = N,
                N = null) : X = N.sibling;
            var z = p(h, N, m[P], _);
            if (z === null) {
                N === null && (N = X);
                break
            }
            t && N && z.alternate === null && e(h, N),
                d = s(z, d, P),
                b === null ? k = z : b.sibling = z,
                b = z,
                N = X
        }
        if (P === m.length)
            return n(h, N),
                se && An(h, P),
                k;
        if (N === null) {
            for (; P < m.length; P++)
                N = f(h, m[P], _),
                    N !== null && (d = s(N, d, P),
                        b === null ? k = N : b.sibling = N,
                        b = N);
            return se && An(h, P),
                k
        }
        for (N = r(h, N); P < m.length; P++)
            X = g(N, h, P, m[P], _),
                X !== null && (t && X.alternate !== null && N.delete(X.key === null ? P : X.key),
                    d = s(X, d, P),
                    b === null ? k = X : b.sibling = X,
                    b = X);
        return t && N.forEach(function (ve) {
            return e(h, ve)
        }),
            se && An(h, P),
            k
    }
    function v(h, d, m, _) {
        var k = ni(m);
        if (typeof k != "function")
            throw Error(w(150));
        if (m = k.call(m),
            m == null)
            throw Error(w(151));
        for (var b = k = null, N = d, P = d = 0, X = null, z = m.next(); N !== null && !z.done; P++,
            z = m.next()) {
            N.index > P ? (X = N,
                N = null) : X = N.sibling;
            var ve = p(h, N, z.value, _);
            if (ve === null) {
                N === null && (N = X);
                break
            }
            t && N && ve.alternate === null && e(h, N),
                d = s(ve, d, P),
                b === null ? k = ve : b.sibling = ve,
                b = ve,
                N = X
        }
        if (z.done)
            return n(h, N),
                se && An(h, P),
                k;
        if (N === null) {
            for (; !z.done; P++,
                z = m.next())
                z = f(h, z.value, _),
                    z !== null && (d = s(z, d, P),
                        b === null ? k = z : b.sibling = z,
                        b = z);
            return se && An(h, P),
                k
        }
        for (N = r(h, N); !z.done; P++,
            z = m.next())
            z = g(N, h, P, z.value, _),
                z !== null && (t && z.alternate !== null && N.delete(z.key === null ? P : z.key),
                    d = s(z, d, P),
                    b === null ? k = z : b.sibling = z,
                    b = z);
        return t && N.forEach(function (Z) {
            return e(h, Z)
        }),
            se && An(h, P),
            k
    }
    function C(h, d, m, _) {
        if (typeof m == "object" && m !== null && m.type === fr && m.key === null && (m = m.props.children),
            typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ss:
                    e: {
                        for (var k = m.key, b = d; b !== null;) {
                            if (b.key === k) {
                                if (k = m.type,
                                    k === fr) {
                                    if (b.tag === 7) {
                                        n(h, b.sibling),
                                            d = i(b, m.props.children),
                                            d.return = h,
                                            h = d;
                                        break e
                                    }
                                } else if (b.elementType === k || typeof k == "object" && k !== null && k.$$typeof === nn && jf(k) === b.type) {
                                    n(h, b.sibling),
                                        d = i(b, m.props),
                                        d.ref = ai(h, b, m),
                                        d.return = h,
                                        h = d;
                                    break e
                                }
                                n(h, b);
                                break
                            } else
                                e(h, b);
                            b = b.sibling
                        }
                        m.type === fr ? (d = $n(m.props.children, h.mode, _, m.key),
                            d.return = h,
                            h = d) : (_ = ro(m.type, m.key, m.props, null, h.mode, _),
                                _.ref = ai(h, d, m),
                                _.return = h,
                                h = _)
                    }
                    return o(h);
                case cr:
                    e: {
                        for (b = m.key; d !== null;) {
                            if (d.key === b)
                                if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                                    n(h, d.sibling),
                                        d = i(d, m.children || []),
                                        d.return = h,
                                        h = d;
                                    break e
                                } else {
                                    n(h, d);
                                    break
                                }
                            else
                                e(h, d);
                            d = d.sibling
                        }
                        d = eu(m, h.mode, _),
                            d.return = h,
                            h = d
                    }
                    return o(h);
                case nn:
                    return b = m._init,
                        C(h, d, b(m._payload), _)
            }
            if (hi(m))
                return y(h, d, m, _);
            if (ni(m))
                return v(h, d, m, _);
            Is(h, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
            d !== null && d.tag === 6 ? (n(h, d.sibling),
                d = i(d, m),
                d.return = h,
                h = d) : (n(h, d),
                    d = Ja(m, h.mode, _),
                    d.return = h,
                    h = d),
            o(h)) : n(h, d)
    }
    return C
}
var Mr = Th(!0)
    , Oh = Th(!1)
    , To = Nn(null)
    , Oo = null
    , _r = null
    , ic = null;
function sc() {
    ic = _r = Oo = null
}
function oc(t) {
    var e = To.current;
    ie(To),
        t._currentValue = e
}
function Bu(t, e, n) {
    for (; t !== null;) {
        var r = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
            t === n)
            break;
        t = t.return
    }
}
function Tr(t, e) {
    Oo = t,
        ic = _r = null,
        t = t.dependencies,
        t !== null && t.firstContext !== null && (t.lanes & e && (Ue = !0),
            t.firstContext = null)
}
function lt(t) {
    var e = t._currentValue;
    if (ic !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
            _r === null) {
            if (Oo === null)
                throw Error(w(308));
            _r = t,
                Oo.dependencies = {
                    lanes: 0,
                    firstContext: t
                }
        } else
            _r = _r.next = t;
    return e
}
var Mn = null;
function ac(t) {
    Mn === null ? Mn = [t] : Mn.push(t)
}
function Nh(t, e, n, r) {
    var i = e.interleaved;
    return i === null ? (n.next = n,
        ac(e)) : (n.next = i.next,
            i.next = n),
        e.interleaved = n,
        Qt(t, r)
}
function Qt(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e),
        n = t,
        t = t.return; t !== null;)
        t.childLanes |= e,
            n = t.alternate,
            n !== null && (n.childLanes |= e),
            n = t,
            t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var rn = !1;
function uc(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Ph(t, e) {
    t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            effects: t.effects
        })
}
function Vt(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function gn(t, e, n) {
    var r = t.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
        W & 2) {
        var i = r.pending;
        return i === null ? e.next = e : (e.next = i.next,
            i.next = e),
            r.pending = e,
            Qt(t, n)
    }
    return i = r.interleaved,
        i === null ? (e.next = e,
            ac(r)) : (e.next = i.next,
                i.next = e),
        r.interleaved = e,
        Qt(t, n)
}
function Ys(t, e, n) {
    if (e = e.updateQueue,
        e !== null && (e = e.shared,
            (n & 4194240) !== 0)) {
        var r = e.lanes;
        r &= t.pendingLanes,
            n |= r,
            e.lanes = n,
            Zl(t, n)
    }
}
function Ff(t, e) {
    var n = t.updateQueue
        , r = t.alternate;
    if (r !== null && (r = r.updateQueue,
        n === r)) {
        var i = null
            , s = null;
        if (n = n.firstBaseUpdate,
            n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                    n = n.next
            } while (n !== null);
            s === null ? i = s = e : s = s.next = e
        } else
            i = s = e;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
            t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate,
        t === null ? n.firstBaseUpdate = e : t.next = e,
        n.lastBaseUpdate = e
}
function No(t, e, n, r) {
    var i = t.updateQueue;
    rn = !1;
    var s = i.firstBaseUpdate
        , o = i.lastBaseUpdate
        , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var u = a
            , l = u.next;
        u.next = null,
            o === null ? s = l : o.next = l,
            o = u;
        var c = t.alternate;
        c !== null && (c = c.updateQueue,
            a = c.lastBaseUpdate,
            a !== o && (a === null ? c.firstBaseUpdate = l : a.next = l,
                c.lastBaseUpdate = u))
    }
    if (s !== null) {
        var f = i.baseState;
        o = 0,
            c = l = u = null,
            a = s;
        do {
            var p = a.lane
                , g = a.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = {
                    eventTime: g,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = t
                        , v = a;
                    switch (p = e,
                    g = n,
                    v.tag) {
                        case 1:
                            if (y = v.payload,
                                typeof y == "function") {
                                f = y.call(g, f, p);
                                break e
                            }
                            f = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = v.payload,
                                p = typeof y == "function" ? y.call(g, f, p) : y,
                                p == null)
                                break e;
                            f = le({}, f, p);
                            break e;
                        case 2:
                            rn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (t.flags |= 64,
                    p = i.effects,
                    p === null ? i.effects = [a] : p.push(a))
            } else
                g = {
                    eventTime: g,
                    lane: p,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                    c === null ? (l = c = g,
                        u = f) : c = c.next = g,
                    o |= p;
            if (a = a.next,
                a === null) {
                if (a = i.shared.pending,
                    a === null)
                    break;
                p = a,
                    a = p.next,
                    p.next = null,
                    i.lastBaseUpdate = p,
                    i.shared.pending = null
            }
        } while (!0);
        if (c === null && (u = f),
            i.baseState = u,
            i.firstBaseUpdate = l,
            i.lastBaseUpdate = c,
            e = i.shared.interleaved,
            e !== null) {
            i = e;
            do
                o |= i.lane,
                    i = i.next;
            while (i !== e)
        } else
            s === null && (i.shared.lanes = 0);
        Wn |= o,
            t.lanes = o,
            t.memoizedState = f
    }
}
function zf(t, e, n) {
    if (t = e.effects,
        e.effects = null,
        t !== null)
        for (e = 0; e < t.length; e++) {
            var r = t[e]
                , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                    r = n,
                    typeof i != "function")
                    throw Error(w(191, i));
                i.call(r)
            }
        }
}
var ds = {}
    , Nt = Nn(ds)
    , Bi = Nn(ds)
    , Vi = Nn(ds);
function jn(t) {
    if (t === ds)
        throw Error(w(174));
    return t
}
function lc(t, e) {
    switch (te(Vi, e),
    te(Bi, t),
    te(Nt, ds),
    t = e.nodeType,
    t) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : Eu(null, "");
            break;
        default:
            t = t === 8 ? e.parentNode : e,
                e = t.namespaceURI || null,
                t = t.tagName,
                e = Eu(e, t)
    }
    ie(Nt),
        te(Nt, e)
}
function jr() {
    ie(Nt),
        ie(Bi),
        ie(Vi)
}
function Rh(t) {
    jn(Vi.current);
    var e = jn(Nt.current)
        , n = Eu(e, t.type);
    e !== n && (te(Bi, t),
        te(Nt, n))
}
function cc(t) {
    Bi.current === t && (ie(Nt),
        ie(Bi))
}
var ae = Nn(0);
function Po(t) {
    for (var e = t; e !== null;) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
                e = e.child;
            continue
        }
        if (e === t)
            break;
        for (; e.sibling === null;) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
            e = e.sibling
    }
    return null
}
var Za = [];
function fc() {
    for (var t = 0; t < Za.length; t++)
        Za[t]._workInProgressVersionPrimary = null;
    Za.length = 0
}
var Xs = Yt.ReactCurrentDispatcher
    , Qa = Yt.ReactCurrentBatchConfig
    , Hn = 0
    , ue = null
    , ge = null
    , _e = null
    , Ro = !1
    , Ti = !1
    , qi = 0
    , Vv = 0;
function Te() {
    throw Error(w(321))
}
function dc(t, e) {
    if (e === null)
        return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!Et(t[n], e[n]))
            return !1;
    return !0
}
function pc(t, e, n, r, i, s) {
    if (Hn = s,
        ue = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        Xs.current = t === null || t.memoizedState === null ? Zv : Qv,
        t = n(r, i),
        Ti) {
        s = 0;
        do {
            if (Ti = !1,
                qi = 0,
                25 <= s)
                throw Error(w(301));
            s += 1,
                _e = ge = null,
                e.updateQueue = null,
                Xs.current = Kv,
                t = n(r, i)
        } while (Ti)
    }
    if (Xs.current = Io,
        e = ge !== null && ge.next !== null,
        Hn = 0,
        _e = ge = ue = null,
        Ro = !1,
        e)
        throw Error(w(300));
    return t
}
function hc() {
    var t = qi !== 0;
    return qi = 0,
        t
}
function Ct() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return _e === null ? ue.memoizedState = _e = t : _e = _e.next = t,
        _e
}
function ct() {
    if (ge === null) {
        var t = ue.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = ge.next;
    var e = _e === null ? ue.memoizedState : _e.next;
    if (e !== null)
        _e = e,
            ge = t;
    else {
        if (t === null)
            throw Error(w(310));
        ge = t,
            t = {
                memoizedState: ge.memoizedState,
                baseState: ge.baseState,
                baseQueue: ge.baseQueue,
                queue: ge.queue,
                next: null
            },
            _e === null ? ue.memoizedState = _e = t : _e = _e.next = t
    }
    return _e
}
function Hi(t, e) {
    return typeof e == "function" ? e(t) : e
}
function Ka(t) {
    var e = ct()
        , n = e.queue;
    if (n === null)
        throw Error(w(311));
    n.lastRenderedReducer = t;
    var r = ge
        , i = r.baseQueue
        , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
                s.next = o
        }
        r.baseQueue = i = s,
            n.pending = null
    }
    if (i !== null) {
        s = i.next,
            r = r.baseState;
        var a = o = null
            , u = null
            , l = s;
        do {
            var c = l.lane;
            if ((Hn & c) === c)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: l.action,
                    hasEagerState: l.hasEagerState,
                    eagerState: l.eagerState,
                    next: null
                }),
                    r = l.hasEagerState ? l.eagerState : t(r, l.action);
            else {
                var f = {
                    lane: c,
                    action: l.action,
                    hasEagerState: l.hasEagerState,
                    eagerState: l.eagerState,
                    next: null
                };
                u === null ? (a = u = f,
                    o = r) : u = u.next = f,
                    ue.lanes |= c,
                    Wn |= c
            }
            l = l.next
        } while (l !== null && l !== s);
        u === null ? o = r : u.next = a,
            Et(r, e.memoizedState) || (Ue = !0),
            e.memoizedState = r,
            e.baseState = o,
            e.baseQueue = u,
            n.lastRenderedState = r
    }
    if (t = n.interleaved,
        t !== null) {
        i = t;
        do
            s = i.lane,
                ue.lanes |= s,
                Wn |= s,
                i = i.next;
        while (i !== t)
    } else
        i === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}
function Ga(t) {
    var e = ct()
        , n = e.queue;
    if (n === null)
        throw Error(w(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch
        , i = n.pending
        , s = e.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = t(s, o.action),
                o = o.next;
        while (o !== i);
        Et(s, e.memoizedState) || (Ue = !0),
            e.memoizedState = s,
            e.baseQueue === null && (e.baseState = s),
            n.lastRenderedState = s
    }
    return [s, r]
}
function Ih() { }
function Ah(t, e) {
    var n = ue
        , r = ct()
        , i = e()
        , s = !Et(r.memoizedState, i);
    if (s && (r.memoizedState = i,
        Ue = !0),
        r = r.queue,
        mc(Mh.bind(null, n, r, t), [t]),
        r.getSnapshot !== e || s || _e !== null && _e.memoizedState.tag & 1) {
        if (n.flags |= 2048,
            Wi(9, Lh.bind(null, n, r, i, e), void 0, null),
            we === null)
            throw Error(w(349));
        Hn & 30 || Dh(n, e, i)
    }
    return i
}
function Dh(t, e, n) {
    t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: n
        },
        e = ue.updateQueue,
        e === null ? (e = {
            lastEffect: null,
            stores: null
        },
            ue.updateQueue = e,
            e.stores = [t]) : (n = e.stores,
                n === null ? e.stores = [t] : n.push(t))
}
function Lh(t, e, n, r) {
    e.value = n,
        e.getSnapshot = r,
        jh(e) && Fh(t)
}
function Mh(t, e, n) {
    return n(function () {
        jh(e) && Fh(t)
    })
}
function jh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !Et(t, n)
    } catch {
        return !0
    }
}
function Fh(t) {
    var e = Qt(t, 1);
    e !== null && _t(e, t, 1, -1)
}
function $f(t) {
    var e = Ct();
    return typeof t == "function" && (t = t()),
        e.memoizedState = e.baseState = t,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Hi,
            lastRenderedState: t
        },
        e.queue = t,
        t = t.dispatch = Wv.bind(null, ue, t),
        [e.memoizedState, t]
}
function Wi(t, e, n, r) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: r,
        next: null
    },
        e = ue.updateQueue,
        e === null ? (e = {
            lastEffect: null,
            stores: null
        },
            ue.updateQueue = e,
            e.lastEffect = t.next = t) : (n = e.lastEffect,
                n === null ? e.lastEffect = t.next = t : (r = n.next,
                    n.next = t,
                    t.next = r,
                    e.lastEffect = t)),
        t
}
function zh() {
    return ct().memoizedState
}
function Js(t, e, n, r) {
    var i = Ct();
    ue.flags |= t,
        i.memoizedState = Wi(1 | e, n, void 0, r === void 0 ? null : r)
}
function oa(t, e, n, r) {
    var i = ct();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (ge !== null) {
        var o = ge.memoizedState;
        if (s = o.destroy,
            r !== null && dc(r, o.deps)) {
            i.memoizedState = Wi(e, n, s, r);
            return
        }
    }
    ue.flags |= t,
        i.memoizedState = Wi(1 | e, n, s, r)
}
function Uf(t, e) {
    return Js(8390656, 8, t, e)
}
function mc(t, e) {
    return oa(2048, 8, t, e)
}
function $h(t, e) {
    return oa(4, 2, t, e)
}
function Uh(t, e) {
    return oa(4, 4, t, e)
}
function Bh(t, e) {
    if (typeof e == "function")
        return t = t(),
            e(t),
            function () {
                e(null)
            }
            ;
    if (e != null)
        return t = t(),
            e.current = t,
            function () {
                e.current = null
            }
}
function Vh(t, e, n) {
    return n = n != null ? n.concat([t]) : null,
        oa(4, 4, Bh.bind(null, e, t), n)
}
function gc() { }
function qh(t, e) {
    var n = ct();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && dc(e, r[1]) ? r[0] : (n.memoizedState = [t, e],
        t)
}
function Hh(t, e) {
    var n = ct();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && dc(e, r[1]) ? r[0] : (t = t(),
        n.memoizedState = [t, e],
        t)
}
function Wh(t, e, n) {
    return Hn & 21 ? (Et(n, e) || (n = Yp(),
        ue.lanes |= n,
        Wn |= n,
        t.baseState = !0),
        e) : (t.baseState && (t.baseState = !1,
            Ue = !0),
            t.memoizedState = n)
}
function qv(t, e) {
    var n = Y;
    Y = n !== 0 && 4 > n ? n : 4,
        t(!0);
    var r = Qa.transition;
    Qa.transition = {};
    try {
        t(!1),
            e()
    } finally {
        Y = n,
            Qa.transition = r
    }
}
function Zh() {
    return ct().memoizedState
}
function Hv(t, e, n) {
    var r = vn(t);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
        Qh(t))
        Kh(e, n);
    else if (n = Nh(t, e, n, r),
        n !== null) {
        var i = Me();
        _t(n, t, r, i),
            Gh(n, e, r)
    }
}
function Wv(t, e, n) {
    var r = vn(t)
        , i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Qh(t))
        Kh(e, i);
    else {
        var s = t.alternate;
        if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer,
            s !== null))
            try {
                var o = e.lastRenderedState
                    , a = s(o, n);
                if (i.hasEagerState = !0,
                    i.eagerState = a,
                    Et(a, o)) {
                    var u = e.interleaved;
                    u === null ? (i.next = i,
                        ac(e)) : (i.next = u.next,
                            u.next = i),
                        e.interleaved = i;
                    return
                }
            } catch { } finally { }
        n = Nh(t, e, i, r),
            n !== null && (i = Me(),
                _t(n, t, r, i),
                Gh(n, e, r))
    }
}
function Qh(t) {
    var e = t.alternate;
    return t === ue || e !== null && e === ue
}
function Kh(t, e) {
    Ti = Ro = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next,
        n.next = e),
        t.pending = e
}
function Gh(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        r &= t.pendingLanes,
            n |= r,
            e.lanes = n,
            Zl(t, n)
    }
}
var Io = {
    readContext: lt,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1
}
    , Zv = {
        readContext: lt,
        useCallback: function (t, e) {
            return Ct().memoizedState = [t, e === void 0 ? null : e],
                t
        },
        useContext: lt,
        useEffect: Uf,
        useImperativeHandle: function (t, e, n) {
            return n = n != null ? n.concat([t]) : null,
                Js(4194308, 4, Bh.bind(null, e, t), n)
        },
        useLayoutEffect: function (t, e) {
            return Js(4194308, 4, t, e)
        },
        useInsertionEffect: function (t, e) {
            return Js(4, 2, t, e)
        },
        useMemo: function (t, e) {
            var n = Ct();
            return e = e === void 0 ? null : e,
                t = t(),
                n.memoizedState = [t, e],
                t
        },
        useReducer: function (t, e, n) {
            var r = Ct();
            return e = n !== void 0 ? n(e) : e,
                r.memoizedState = r.baseState = e,
                t = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: e
                },
                r.queue = t,
                t = t.dispatch = Hv.bind(null, ue, t),
                [r.memoizedState, t]
        },
        useRef: function (t) {
            var e = Ct();
            return t = {
                current: t
            },
                e.memoizedState = t
        },
        useState: $f,
        useDebugValue: gc,
        useDeferredValue: function (t) {
            return Ct().memoizedState = t
        },
        useTransition: function () {
            var t = $f(!1)
                , e = t[0];
            return t = qv.bind(null, t[1]),
                Ct().memoizedState = t,
                [e, t]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (t, e, n) {
            var r = ue
                , i = Ct();
            if (se) {
                if (n === void 0)
                    throw Error(w(407));
                n = n()
            } else {
                if (n = e(),
                    we === null)
                    throw Error(w(349));
                Hn & 30 || Dh(r, e, n)
            }
            i.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: e
            };
            return i.queue = s,
                Uf(Mh.bind(null, r, s, t), [t]),
                r.flags |= 2048,
                Wi(9, Lh.bind(null, r, s, n, e), void 0, null),
                n
        },
        useId: function () {
            var t = Ct()
                , e = we.identifierPrefix;
            if (se) {
                var n = Bt
                    , r = Ut;
                n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n,
                    e = ":" + e + "R" + n,
                    n = qi++,
                    0 < n && (e += "H" + n.toString(32)),
                    e += ":"
            } else
                n = Vv++,
                    e = ":" + e + "r" + n.toString(32) + ":";
            return t.memoizedState = e
        },
        unstable_isNewReconciler: !1
    }
    , Qv = {
        readContext: lt,
        useCallback: qh,
        useContext: lt,
        useEffect: mc,
        useImperativeHandle: Vh,
        useInsertionEffect: $h,
        useLayoutEffect: Uh,
        useMemo: Hh,
        useReducer: Ka,
        useRef: zh,
        useState: function () {
            return Ka(Hi)
        },
        useDebugValue: gc,
        useDeferredValue: function (t) {
            var e = ct();
            return Wh(e, ge.memoizedState, t)
        },
        useTransition: function () {
            var t = Ka(Hi)[0]
                , e = ct().memoizedState;
            return [t, e]
        },
        useMutableSource: Ih,
        useSyncExternalStore: Ah,
        useId: Zh,
        unstable_isNewReconciler: !1
    }
    , Kv = {
        readContext: lt,
        useCallback: qh,
        useContext: lt,
        useEffect: mc,
        useImperativeHandle: Vh,
        useInsertionEffect: $h,
        useLayoutEffect: Uh,
        useMemo: Hh,
        useReducer: Ga,
        useRef: zh,
        useState: function () {
            return Ga(Hi)
        },
        useDebugValue: gc,
        useDeferredValue: function (t) {
            var e = ct();
            return ge === null ? e.memoizedState = t : Wh(e, ge.memoizedState, t)
        },
        useTransition: function () {
            var t = Ga(Hi)[0]
                , e = ct().memoizedState;
            return [t, e]
        },
        useMutableSource: Ih,
        useSyncExternalStore: Ah,
        useId: Zh,
        unstable_isNewReconciler: !1
    };
function pt(t, e) {
    if (t && t.defaultProps) {
        e = le({}, e),
            t = t.defaultProps;
        for (var n in t)
            e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}
function Vu(t, e, n, r) {
    e = t.memoizedState,
        n = n(r, e),
        n = n == null ? e : le({}, e, n),
        t.memoizedState = n,
        t.lanes === 0 && (t.updateQueue.baseState = n)
}
var aa = {
    isMounted: function (t) {
        return (t = t._reactInternals) ? rr(t) === t : !1
    },
    enqueueSetState: function (t, e, n) {
        t = t._reactInternals;
        var r = Me()
            , i = vn(t)
            , s = Vt(r, i);
        s.payload = e,
            n != null && (s.callback = n),
            e = gn(t, s, i),
            e !== null && (_t(e, t, i, r),
                Ys(e, t, i))
    },
    enqueueReplaceState: function (t, e, n) {
        t = t._reactInternals;
        var r = Me()
            , i = vn(t)
            , s = Vt(r, i);
        s.tag = 1,
            s.payload = e,
            n != null && (s.callback = n),
            e = gn(t, s, i),
            e !== null && (_t(e, t, i, r),
                Ys(e, t, i))
    },
    enqueueForceUpdate: function (t, e) {
        t = t._reactInternals;
        var n = Me()
            , r = vn(t)
            , i = Vt(n, r);
        i.tag = 2,
            e != null && (i.callback = e),
            e = gn(t, i, r),
            e !== null && (_t(e, t, r, n),
                Ys(e, t, r))
    }
};
function Bf(t, e, n, r, i, s, o) {
    return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, s, o) : e.prototype && e.prototype.isPureReactComponent ? !Fi(n, r) || !Fi(i, s) : !0
}
function Yh(t, e, n) {
    var r = !1
        , i = En
        , s = e.contextType;
    return typeof s == "object" && s !== null ? s = lt(s) : (i = Ve(e) ? Vn : Pe.current,
        r = e.contextTypes,
        s = (r = r != null) ? Dr(t, i) : En),
        e = new e(n, s),
        t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
        e.updater = aa,
        t.stateNode = e,
        e._reactInternals = t,
        r && (t = t.stateNode,
            t.__reactInternalMemoizedUnmaskedChildContext = i,
            t.__reactInternalMemoizedMaskedChildContext = s),
        e
}
function Vf(t, e, n, r) {
    t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r),
        e.state !== t && aa.enqueueReplaceState(e, e.state, null)
}
function qu(t, e, n, r) {
    var i = t.stateNode;
    i.props = n,
        i.state = t.memoizedState,
        i.refs = {},
        uc(t);
    var s = e.contextType;
    typeof s == "object" && s !== null ? i.context = lt(s) : (s = Ve(e) ? Vn : Pe.current,
        i.context = Dr(t, s)),
        i.state = t.memoizedState,
        s = e.getDerivedStateFromProps,
        typeof s == "function" && (Vu(t, e, s, n),
            i.state = t.memoizedState),
        typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state,
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            e !== i.state && aa.enqueueReplaceState(i, i.state, null),
            No(t, n, i, r),
            i.state = t.memoizedState),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)
}
function Fr(t, e) {
    try {
        var n = ""
            , r = e;
        do
            n += ky(r),
                r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: t,
        source: e,
        stack: i,
        digest: null
    }
}
function Ya(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}
function Hu(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var Gv = typeof WeakMap == "function" ? WeakMap : Map;
function Xh(t, e, n) {
    n = Vt(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
    var r = e.value;
    return n.callback = function () {
        Do || (Do = !0,
            tl = r),
            Hu(t, e)
    }
        ,
        n
}
function Jh(t, e, n) {
    n = Vt(-1, n),
        n.tag = 3;
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = e.value;
        n.payload = function () {
            return r(i)
        }
            ,
            n.callback = function () {
                Hu(t, e)
            }
    }
    var s = t.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function () {
        Hu(t, e),
            typeof r != "function" && (yn === null ? yn = new Set([this]) : yn.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
        n
}
function qf(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
        r = t.pingCache = new Gv;
        var i = new Set;
        r.set(e, i)
    } else
        i = r.get(e),
            i === void 0 && (i = new Set,
                r.set(e, i));
    i.has(n) || (i.add(n),
        t = c_.bind(null, t, e, n),
        e.then(t, t))
}
function Hf(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState,
            e = e !== null ? e.dehydrated !== null : !0),
            e)
            return t;
        t = t.return
    } while (t !== null);
    return null
}
function Wf(t, e, n, r, i) {
    return t.mode & 1 ? (t.flags |= 65536,
        t.lanes = i,
        t) : (t === e ? t.flags |= 65536 : (t.flags |= 128,
            n.flags |= 131072,
            n.flags &= -52805,
            n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Vt(-1, 1),
                e.tag = 2,
                gn(n, e, 1))),
            n.lanes |= 1),
            t)
}
var Yv = Yt.ReactCurrentOwner
    , Ue = !1;
function De(t, e, n, r) {
    e.child = t === null ? Oh(e, null, n, r) : Mr(e, t.child, n, r)
}
function Zf(t, e, n, r, i) {
    n = n.render;
    var s = e.ref;
    return Tr(e, i),
        r = pc(t, e, n, r, s, i),
        n = hc(),
        t !== null && !Ue ? (e.updateQueue = t.updateQueue,
            e.flags &= -2053,
            t.lanes &= ~i,
            Kt(t, e, i)) : (se && n && tc(e),
                e.flags |= 1,
                De(t, e, r, i),
                e.child)
}
function Qf(t, e, n, r, i) {
    if (t === null) {
        var s = n.type;
        return typeof s == "function" && !xc(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15,
            e.type = s,
            em(t, e, s, r, i)) : (t = ro(n.type, null, r, e, e.mode, i),
                t.ref = e.ref,
                t.return = e,
                e.child = t)
    }
    if (s = t.child,
        !(t.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
            n = n !== null ? n : Fi,
            n(o, r) && t.ref === e.ref)
            return Kt(t, e, i)
    }
    return e.flags |= 1,
        t = _n(s, r),
        t.ref = e.ref,
        t.return = e,
        e.child = t
}
function em(t, e, n, r, i) {
    if (t !== null) {
        var s = t.memoizedProps;
        if (Fi(s, r) && t.ref === e.ref)
            if (Ue = !1,
                e.pendingProps = r = s,
                (t.lanes & i) !== 0)
                t.flags & 131072 && (Ue = !0);
            else
                return e.lanes = t.lanes,
                    Kt(t, e, i)
    }
    return Wu(t, e, n, r, i)
}
function tm(t, e, n) {
    var r = e.pendingProps
        , i = r.children
        , s = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                te(Sr, He),
                He |= n;
        else {
            if (!(n & 1073741824))
                return t = s !== null ? s.baseLanes | n : n,
                    e.lanes = e.childLanes = 1073741824,
                    e.memoizedState = {
                        baseLanes: t,
                        cachePool: null,
                        transitions: null
                    },
                    e.updateQueue = null,
                    te(Sr, He),
                    He |= t,
                    null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                r = s !== null ? s.baseLanes : n,
                te(Sr, He),
                He |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
            e.memoizedState = null) : r = n,
            te(Sr, He),
            He |= r;
    return De(t, e, i, n),
        e.child
}
function nm(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512,
        e.flags |= 2097152)
}
function Wu(t, e, n, r, i) {
    var s = Ve(n) ? Vn : Pe.current;
    return s = Dr(e, s),
        Tr(e, i),
        n = pc(t, e, n, r, s, i),
        r = hc(),
        t !== null && !Ue ? (e.updateQueue = t.updateQueue,
            e.flags &= -2053,
            t.lanes &= ~i,
            Kt(t, e, i)) : (se && r && tc(e),
                e.flags |= 1,
                De(t, e, n, i),
                e.child)
}
function Kf(t, e, n, r, i) {
    if (Ve(n)) {
        var s = !0;
        xo(e)
    } else
        s = !1;
    if (Tr(e, i),
        e.stateNode === null)
        eo(t, e),
            Yh(e, n, r),
            qu(e, n, r, i),
            r = !0;
    else if (t === null) {
        var o = e.stateNode
            , a = e.memoizedProps;
        o.props = a;
        var u = o.context
            , l = n.contextType;
        typeof l == "object" && l !== null ? l = lt(l) : (l = Ve(n) ? Vn : Pe.current,
            l = Dr(e, l));
        var c = n.getDerivedStateFromProps
            , f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || u !== l) && Vf(e, o, r, l),
            rn = !1;
        var p = e.memoizedState;
        o.state = p,
            No(e, r, o, i),
            u = e.memoizedState,
            a !== r || p !== u || Be.current || rn ? (typeof c == "function" && (Vu(e, n, c, r),
                u = e.memoizedState),
                (a = rn || Bf(e, n, a, r, p, u, l)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
                    typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
                        e.memoizedProps = r,
                        e.memoizedState = u),
                o.props = r,
                o.state = u,
                o.context = l,
                r = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
                    r = !1)
    } else {
        o = e.stateNode,
            Ph(t, e),
            a = e.memoizedProps,
            l = e.type === e.elementType ? a : pt(e.type, a),
            o.props = l,
            f = e.pendingProps,
            p = o.context,
            u = n.contextType,
            typeof u == "object" && u !== null ? u = lt(u) : (u = Ve(n) ? Vn : Pe.current,
                u = Dr(e, u));
        var g = n.getDerivedStateFromProps;
        (c = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || p !== u) && Vf(e, o, r, u),
            rn = !1,
            p = e.memoizedState,
            o.state = p,
            No(e, r, o, i);
        var y = e.memoizedState;
        a !== f || p !== y || Be.current || rn ? (typeof g == "function" && (Vu(e, n, g, r),
            y = e.memoizedState),
            (l = rn || Bf(e, n, l, r, p, y, u) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, u),
                typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, u)),
                typeof o.componentDidUpdate == "function" && (e.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && p === t.memoizedState || (e.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && p === t.memoizedState || (e.flags |= 1024),
                    e.memoizedProps = r,
                    e.memoizedState = y),
            o.props = r,
            o.state = y,
            o.context = u,
            r = l) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && p === t.memoizedState || (e.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && p === t.memoizedState || (e.flags |= 1024),
                r = !1)
    }
    return Zu(t, e, n, r, s, i)
}
function Zu(t, e, n, r, i, s) {
    nm(t, e);
    var o = (e.flags & 128) !== 0;
    if (!r && !o)
        return i && Df(e, n, !1),
            Kt(t, e, s);
    r = e.stateNode,
        Yv.current = e;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return e.flags |= 1,
        t !== null && o ? (e.child = Mr(e, t.child, null, s),
            e.child = Mr(e, null, a, s)) : De(t, e, a, s),
        e.memoizedState = r.state,
        i && Df(e, n, !0),
        e.child
}
function rm(t) {
    var e = t.stateNode;
    e.pendingContext ? Af(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Af(t, e.context, !1),
        lc(t, e.containerInfo)
}
function Gf(t, e, n, r, i) {
    return Lr(),
        rc(i),
        e.flags |= 256,
        De(t, e, n, r),
        e.child
}
var Qu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ku(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}
function im(t, e, n) {
    var r = e.pendingProps, i = ae.current, s = !1, o = (e.flags & 128) !== 0, a;
    if ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
        a ? (s = !0,
            e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1),
        te(ae, i & 1),
        t === null)
        return Uu(e),
            t = e.memoizedState,
            t !== null && (t = t.dehydrated,
                t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
                    null) : (o = r.children,
                        t = r.fallback,
                        s ? (r = e.mode,
                            s = e.child,
                            o = {
                                mode: "hidden",
                                children: o
                            },
                            !(r & 1) && s !== null ? (s.childLanes = 0,
                                s.pendingProps = o) : s = ca(o, r, 0, null),
                            t = $n(t, r, n, null),
                            s.return = e,
                            t.return = e,
                            s.sibling = t,
                            e.child = s,
                            e.child.memoizedState = Ku(n),
                            e.memoizedState = Qu,
                            t) : yc(e, o));
    if (i = t.memoizedState,
        i !== null && (a = i.dehydrated,
            a !== null))
        return Xv(t, e, o, r, a, i, n);
    if (s) {
        s = r.fallback,
            o = e.mode,
            i = t.child,
            a = i.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && e.child !== i ? (r = e.child,
            r.childLanes = 0,
            r.pendingProps = u,
            e.deletions = null) : (r = _n(i, u),
                r.subtreeFlags = i.subtreeFlags & 14680064),
            a !== null ? s = _n(a, s) : (s = $n(s, o, n, null),
                s.flags |= 2),
            s.return = e,
            r.return = e,
            r.sibling = s,
            e.child = r,
            r = s,
            s = e.child,
            o = t.child.memoizedState,
            o = o === null ? Ku(n) : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions
            },
            s.memoizedState = o,
            s.childLanes = t.childLanes & ~n,
            e.memoizedState = Qu,
            r
    }
    return s = t.child,
        t = s.sibling,
        r = _n(s, {
            mode: "visible",
            children: r.children
        }),
        !(e.mode & 1) && (r.lanes = n),
        r.return = e,
        r.sibling = null,
        t !== null && (n = e.deletions,
            n === null ? (e.deletions = [t],
                e.flags |= 16) : n.push(t)),
        e.child = r,
        e.memoizedState = null,
        r
}
function yc(t, e) {
    return e = ca({
        mode: "visible",
        children: e
    }, t.mode, 0, null),
        e.return = t,
        t.child = e
}
function As(t, e, n, r) {
    return r !== null && rc(r),
        Mr(e, t.child, null, n),
        t = yc(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
}
function Xv(t, e, n, r, i, s, o) {
    if (n)
        return e.flags & 256 ? (e.flags &= -257,
            r = Ya(Error(w(422))),
            As(t, e, o, r)) : e.memoizedState !== null ? (e.child = t.child,
                e.flags |= 128,
                null) : (s = r.fallback,
                    i = e.mode,
                    r = ca({
                        mode: "visible",
                        children: r.children
                    }, i, 0, null),
                    s = $n(s, i, o, null),
                    s.flags |= 2,
                    r.return = e,
                    s.return = e,
                    r.sibling = s,
                    e.child = r,
                    e.mode & 1 && Mr(e, t.child, null, o),
                    e.child.memoizedState = Ku(o),
                    e.memoizedState = Qu,
                    s);
    if (!(e.mode & 1))
        return As(t, e, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
            r)
            var a = r.dgst;
        return r = a,
            s = Error(w(419)),
            r = Ya(s, r, void 0),
            As(t, e, o, r)
    }
    if (a = (o & t.childLanes) !== 0,
        Ue || a) {
        if (r = we,
            r !== null) {
            switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
                i !== 0 && i !== s.retryLane && (s.retryLane = i,
                    Qt(t, i),
                    _t(r, t, i, -1))
        }
        return kc(),
            r = Ya(Error(w(421))),
            As(t, e, o, r)
    }
    return i.data === "$?" ? (e.flags |= 128,
        e.child = t.child,
        e = f_.bind(null, t),
        i._reactRetry = e,
        null) : (t = s.treeContext,
            We = mn(i.nextSibling),
            Qe = e,
            se = !0,
            gt = null,
            t !== null && (et[tt++] = Ut,
                et[tt++] = Bt,
                et[tt++] = qn,
                Ut = t.id,
                Bt = t.overflow,
                qn = e),
            e = yc(e, r.children),
            e.flags |= 4096,
            e)
}
function Yf(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e),
        Bu(t.return, e, n)
}
function Xa(t, e, n, r, i) {
    var s = t.memoizedState;
    s === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = e,
        s.rendering = null,
        s.renderingStartTime = 0,
        s.last = r,
        s.tail = n,
        s.tailMode = i)
}
function sm(t, e, n) {
    var r = e.pendingProps
        , i = r.revealOrder
        , s = r.tail;
    if (De(t, e, r.children, n),
        r = ae.current,
        r & 2)
        r = r & 1 | 2,
            e.flags |= 128;
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null;) {
                if (t.tag === 13)
                    t.memoizedState !== null && Yf(t, n, e);
                else if (t.tag === 19)
                    Yf(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                        t = t.child;
                    continue
                }
                if (t === e)
                    break e;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e)
                        break e;
                    t = t.return
                }
                t.sibling.return = t.return,
                    t = t.sibling
            }
        r &= 1
    }
    if (te(ae, r),
        !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = e.child,
                    i = null; n !== null;)
                    t = n.alternate,
                        t !== null && Po(t) === null && (i = n),
                        n = n.sibling;
                n = i,
                    n === null ? (i = e.child,
                        e.child = null) : (i = n.sibling,
                            n.sibling = null),
                    Xa(e, !1, i, n, s);
                break;
            case "backwards":
                for (n = null,
                    i = e.child,
                    e.child = null; i !== null;) {
                    if (t = i.alternate,
                        t !== null && Po(t) === null) {
                        e.child = i;
                        break
                    }
                    t = i.sibling,
                        i.sibling = n,
                        n = i,
                        i = t
                }
                Xa(e, !0, n, null, s);
                break;
            case "together":
                Xa(e, !1, null, null, void 0);
                break;
            default:
                e.memoizedState = null
        }
    return e.child
}
function eo(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null,
        e.alternate = null,
        e.flags |= 2)
}
function Kt(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies),
        Wn |= e.lanes,
        !(n & e.childLanes))
        return null;
    if (t !== null && e.child !== t.child)
        throw Error(w(153));
    if (e.child !== null) {
        for (t = e.child,
            n = _n(t, t.pendingProps),
            e.child = n,
            n.return = e; t.sibling !== null;)
            t = t.sibling,
                n = n.sibling = _n(t, t.pendingProps),
                n.return = e;
        n.sibling = null
    }
    return e.child
}
function Jv(t, e, n) {
    switch (e.tag) {
        case 3:
            rm(e),
                Lr();
            break;
        case 5:
            Rh(e);
            break;
        case 1:
            Ve(e.type) && xo(e);
            break;
        case 4:
            lc(e, e.stateNode.containerInfo);
            break;
        case 10:
            var r = e.type._context
                , i = e.memoizedProps.value;
            te(To, r._currentValue),
                r._currentValue = i;
            break;
        case 13:
            if (r = e.memoizedState,
                r !== null)
                return r.dehydrated !== null ? (te(ae, ae.current & 1),
                    e.flags |= 128,
                    null) : n & e.child.childLanes ? im(t, e, n) : (te(ae, ae.current & 1),
                        t = Kt(t, e, n),
                        t !== null ? t.sibling : null);
            te(ae, ae.current & 1);
            break;
        case 19:
            if (r = (n & e.childLanes) !== 0,
                t.flags & 128) {
                if (r)
                    return sm(t, e, n);
                e.flags |= 128
            }
            if (i = e.memoizedState,
                i !== null && (i.rendering = null,
                    i.tail = null,
                    i.lastEffect = null),
                te(ae, ae.current),
                r)
                break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0,
                tm(t, e, n)
    }
    return Kt(t, e, n)
}
var om, Gu, am, um;
om = function (t, e) {
    for (var n = e.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6)
            t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
                n = n.child;
            continue
        }
        if (n === e)
            break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
            n = n.sibling
    }
}
    ;
Gu = function () { }
    ;
am = function (t, e, n, r) {
    var i = t.memoizedProps;
    if (i !== r) {
        t = e.stateNode,
            jn(Nt.current);
        var s = null;
        switch (n) {
            case "input":
                i = vu(t, i),
                    r = vu(t, r),
                    s = [];
                break;
            case "select":
                i = le({}, i, {
                    value: void 0
                }),
                    r = le({}, r, {
                        value: void 0
                    }),
                    s = [];
                break;
            case "textarea":
                i = Su(t, i),
                    r = Su(t, r),
                    s = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = Eo)
        }
        ku(n, r);
        var o;
        n = null;
        for (l in i)
            if (!r.hasOwnProperty(l) && i.hasOwnProperty(l) && i[l] != null)
                if (l === "style") {
                    var a = i[l];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                            n[o] = "")
                } else
                    l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Ri.hasOwnProperty(l) ? s || (s = []) : (s = s || []).push(l, null));
        for (l in r) {
            var u = r[l];
            if (a = i != null ? i[l] : void 0,
                r.hasOwnProperty(l) && u !== a && (u != null || a != null))
                if (l === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}),
                                n[o] = "");
                        for (o in u)
                            u.hasOwnProperty(o) && a[o] !== u[o] && (n || (n = {}),
                                n[o] = u[o])
                    } else
                        n || (s || (s = []),
                            s.push(l, n)),
                            n = u;
                else
                    l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                        a = a ? a.__html : void 0,
                        u != null && a !== u && (s = s || []).push(l, u)) : l === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(l, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (Ri.hasOwnProperty(l) ? (u != null && l === "onScroll" && re("scroll", t),
                            s || a === u || (s = [])) : (s = s || []).push(l, u))
        }
        n && (s = s || []).push("style", n);
        var l = s;
        (e.updateQueue = l) && (e.flags |= 4)
    }
}
    ;
um = function (t, e, n, r) {
    n !== r && (e.flags |= 4)
}
    ;
function ui(t, e) {
    if (!se)
        switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null;)
                    e.alternate !== null && (n = e),
                        e = e.sibling;
                n === null ? t.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = t.tail;
                for (var r = null; n !== null;)
                    n.alternate !== null && (r = n),
                        n = n.sibling;
                r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
        }
}
function Oe(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
        , n = 0
        , r = 0;
    if (e)
        for (var i = t.child; i !== null;)
            n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags & 14680064,
                r |= i.flags & 14680064,
                i.return = t,
                i = i.sibling;
    else
        for (i = t.child; i !== null;)
            n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags,
                r |= i.flags,
                i.return = t,
                i = i.sibling;
    return t.subtreeFlags |= r,
        t.childLanes = n,
        e
}
function e_(t, e, n) {
    var r = e.pendingProps;
    switch (nc(e),
    e.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Oe(e),
                null;
        case 1:
            return Ve(e.type) && ko(),
                Oe(e),
                null;
        case 3:
            return r = e.stateNode,
                jr(),
                ie(Be),
                ie(Pe),
                fc(),
                r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                (t === null || t.child === null) && (Rs(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
                    gt !== null && (il(gt),
                        gt = null))),
                Gu(t, e),
                Oe(e),
                null;
        case 5:
            cc(e);
            var i = jn(Vi.current);
            if (n = e.type,
                t !== null && e.stateNode != null)
                am(t, e, n, r, i),
                    t.ref !== e.ref && (e.flags |= 512,
                        e.flags |= 2097152);
            else {
                if (!r) {
                    if (e.stateNode === null)
                        throw Error(w(166));
                    return Oe(e),
                        null
                }
                if (t = jn(Nt.current),
                    Rs(e)) {
                    r = e.stateNode,
                        n = e.type;
                    var s = e.memoizedProps;
                    switch (r[bt] = e,
                    r[Ui] = s,
                    t = (e.mode & 1) !== 0,
                    n) {
                        case "dialog":
                            re("cancel", r),
                                re("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            re("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < gi.length; i++)
                                re(gi[i], r);
                            break;
                        case "source":
                            re("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            re("error", r),
                                re("load", r);
                            break;
                        case "details":
                            re("toggle", r);
                            break;
                        case "input":
                            of(r, s),
                                re("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            },
                                re("invalid", r);
                            break;
                        case "textarea":
                            uf(r, s),
                                re("invalid", r)
                    }
                    ku(n, s),
                        i = null;
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var a = s[o];
                            o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Ps(r.textContent, a, t),
                                i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Ps(r.textContent, a, t),
                                    i = ["children", "" + a]) : Ri.hasOwnProperty(o) && a != null && o === "onScroll" && re("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Es(r),
                                af(r, s, !0);
                            break;
                        case "textarea":
                            Es(r),
                                lf(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = Eo)
                    }
                    r = i,
                        e.updateQueue = r,
                        r !== null && (e.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument,
                        t === "http://www.w3.org/1999/xhtml" && (t = Mp(n)),
                        t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = o.createElement("div"),
                            t.innerHTML = "<script><\/script>",
                            t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = o.createElement(n, {
                                is: r.is
                            }) : (t = o.createElement(n),
                                n === "select" && (o = t,
                                    r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : t = o.createElementNS(t, n),
                        t[bt] = e,
                        t[Ui] = r,
                        om(t, e, !1, !1),
                        e.stateNode = t;
                    e: {
                        switch (o = xu(n, r),
                        n) {
                            case "dialog":
                                re("cancel", t),
                                    re("close", t),
                                    i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                re("load", t),
                                    i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < gi.length; i++)
                                    re(gi[i], t);
                                i = r;
                                break;
                            case "source":
                                re("error", t),
                                    i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                re("error", t),
                                    re("load", t),
                                    i = r;
                                break;
                            case "details":
                                re("toggle", t),
                                    i = r;
                                break;
                            case "input":
                                of(t, r),
                                    i = vu(t, r),
                                    re("invalid", t);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                t._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                    i = le({}, r, {
                                        value: void 0
                                    }),
                                    re("invalid", t);
                                break;
                            case "textarea":
                                uf(t, r),
                                    i = Su(t, r),
                                    re("invalid", t);
                                break;
                            default:
                                i = r
                        }
                        ku(n, i),
                            a = i;
                        for (s in a)
                            if (a.hasOwnProperty(s)) {
                                var u = a[s];
                                s === "style" ? zp(t, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                                    u != null && jp(t, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Ii(t, u) : typeof u == "number" && Ii(t, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ri.hasOwnProperty(s) ? u != null && s === "onScroll" && re("scroll", t) : u != null && Ul(t, s, u, o))
                            }
                        switch (n) {
                            case "input":
                                Es(t),
                                    af(t, r, !1);
                                break;
                            case "textarea":
                                Es(t),
                                    lf(t);
                                break;
                            case "option":
                                r.value != null && t.setAttribute("value", "" + Sn(r.value));
                                break;
                            case "select":
                                t.multiple = !!r.multiple,
                                    s = r.value,
                                    s != null ? kr(t, !!r.multiple, s, !1) : r.defaultValue != null && kr(t, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (t.onclick = Eo)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (e.flags |= 4)
                }
                e.ref !== null && (e.flags |= 512,
                    e.flags |= 2097152)
            }
            return Oe(e),
                null;
        case 6:
            if (t && e.stateNode != null)
                um(t, e, t.memoizedProps, r);
            else {
                if (typeof r != "string" && e.stateNode === null)
                    throw Error(w(166));
                if (n = jn(Vi.current),
                    jn(Nt.current),
                    Rs(e)) {
                    if (r = e.stateNode,
                        n = e.memoizedProps,
                        r[bt] = e,
                        (s = r.nodeValue !== n) && (t = Qe,
                            t !== null))
                        switch (t.tag) {
                            case 3:
                                Ps(r.nodeValue, n, (t.mode & 1) !== 0);
                                break;
                            case 5:
                                t.memoizedProps.suppressHydrationWarning !== !0 && Ps(r.nodeValue, n, (t.mode & 1) !== 0)
                        }
                    s && (e.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                        r[bt] = e,
                        e.stateNode = r
            }
            return Oe(e),
                null;
        case 13:
            if (ie(ae),
                r = e.memoizedState,
                t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (se && We !== null && e.mode & 1 && !(e.flags & 128))
                    bh(),
                        Lr(),
                        e.flags |= 98560,
                        s = !1;
                else if (s = Rs(e),
                    r !== null && r.dehydrated !== null) {
                    if (t === null) {
                        if (!s)
                            throw Error(w(318));
                        if (s = e.memoizedState,
                            s = s !== null ? s.dehydrated : null,
                            !s)
                            throw Error(w(317));
                        s[bt] = e
                    } else
                        Lr(),
                            !(e.flags & 128) && (e.memoizedState = null),
                            e.flags |= 4;
                    Oe(e),
                        s = !1
                } else
                    gt !== null && (il(gt),
                        gt = null),
                        s = !0;
                if (!s)
                    return e.flags & 65536 ? e : null
            }
            return e.flags & 128 ? (e.lanes = n,
                e) : (r = r !== null,
                    r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192,
                        e.mode & 1 && (t === null || ae.current & 1 ? ye === 0 && (ye = 3) : kc())),
                    e.updateQueue !== null && (e.flags |= 4),
                    Oe(e),
                    null);
        case 4:
            return jr(),
                Gu(t, e),
                t === null && zi(e.stateNode.containerInfo),
                Oe(e),
                null;
        case 10:
            return oc(e.type._context),
                Oe(e),
                null;
        case 17:
            return Ve(e.type) && ko(),
                Oe(e),
                null;
        case 19:
            if (ie(ae),
                s = e.memoizedState,
                s === null)
                return Oe(e),
                    null;
            if (r = (e.flags & 128) !== 0,
                o = s.rendering,
                o === null)
                if (r)
                    ui(s, !1);
                else {
                    if (ye !== 0 || t !== null && t.flags & 128)
                        for (t = e.child; t !== null;) {
                            if (o = Po(t),
                                o !== null) {
                                for (e.flags |= 128,
                                    ui(s, !1),
                                    r = o.updateQueue,
                                    r !== null && (e.updateQueue = r,
                                        e.flags |= 4),
                                    e.subtreeFlags = 0,
                                    r = n,
                                    n = e.child; n !== null;)
                                    s = n,
                                        t = r,
                                        s.flags &= 14680066,
                                        o = s.alternate,
                                        o === null ? (s.childLanes = 0,
                                            s.lanes = t,
                                            s.child = null,
                                            s.subtreeFlags = 0,
                                            s.memoizedProps = null,
                                            s.memoizedState = null,
                                            s.updateQueue = null,
                                            s.dependencies = null,
                                            s.stateNode = null) : (s.childLanes = o.childLanes,
                                                s.lanes = o.lanes,
                                                s.child = o.child,
                                                s.subtreeFlags = 0,
                                                s.deletions = null,
                                                s.memoizedProps = o.memoizedProps,
                                                s.memoizedState = o.memoizedState,
                                                s.updateQueue = o.updateQueue,
                                                s.type = o.type,
                                                t = o.dependencies,
                                                s.dependencies = t === null ? null : {
                                                    lanes: t.lanes,
                                                    firstContext: t.firstContext
                                                }),
                                        n = n.sibling;
                                return te(ae, ae.current & 1 | 2),
                                    e.child
                            }
                            t = t.sibling
                        }
                    s.tail !== null && fe() > zr && (e.flags |= 128,
                        r = !0,
                        ui(s, !1),
                        e.lanes = 4194304)
                }
            else {
                if (!r)
                    if (t = Po(o),
                        t !== null) {
                        if (e.flags |= 128,
                            r = !0,
                            n = t.updateQueue,
                            n !== null && (e.updateQueue = n,
                                e.flags |= 4),
                            ui(s, !0),
                            s.tail === null && s.tailMode === "hidden" && !o.alternate && !se)
                            return Oe(e),
                                null
                    } else
                        2 * fe() - s.renderingStartTime > zr && n !== 1073741824 && (e.flags |= 128,
                            r = !0,
                            ui(s, !1),
                            e.lanes = 4194304);
                s.isBackwards ? (o.sibling = e.child,
                    e.child = o) : (n = s.last,
                        n !== null ? n.sibling = o : e.child = o,
                        s.last = o)
            }
            return s.tail !== null ? (e = s.tail,
                s.rendering = e,
                s.tail = e.sibling,
                s.renderingStartTime = fe(),
                e.sibling = null,
                n = ae.current,
                te(ae, r ? n & 1 | 2 : n & 1),
                e) : (Oe(e),
                    null);
        case 22:
        case 23:
            return Ec(),
                r = e.memoizedState !== null,
                t !== null && t.memoizedState !== null !== r && (e.flags |= 8192),
                r && e.mode & 1 ? He & 1073741824 && (Oe(e),
                    e.subtreeFlags & 6 && (e.flags |= 8192)) : Oe(e),
                null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(w(156, e.tag))
}
function t_(t, e) {
    switch (nc(e),
    e.tag) {
        case 1:
            return Ve(e.type) && ko(),
                t = e.flags,
                t & 65536 ? (e.flags = t & -65537 | 128,
                    e) : null;
        case 3:
            return jr(),
                ie(Be),
                ie(Pe),
                fc(),
                t = e.flags,
                t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
                    e) : null;
        case 5:
            return cc(e),
                null;
        case 13:
            if (ie(ae),
                t = e.memoizedState,
                t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(w(340));
                Lr()
            }
            return t = e.flags,
                t & 65536 ? (e.flags = t & -65537 | 128,
                    e) : null;
        case 19:
            return ie(ae),
                null;
        case 4:
            return jr(),
                null;
        case 10:
            return oc(e.type._context),
                null;
        case 22:
        case 23:
            return Ec(),
                null;
        case 24:
            return null;
        default:
            return null
    }
}
var Ds = !1
    , Ne = !1
    , n_ = typeof WeakSet == "function" ? WeakSet : Set
    , O = null;
function wr(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ce(t, e, r)
            }
        else
            n.current = null
}
function Yu(t, e, n) {
    try {
        n()
    } catch (r) {
        ce(t, e, r)
    }
}
var Xf = !1;
function r_(t, e) {
    if (Du = _o,
        t = ph(),
        ec(t)) {
        if ("selectionStart" in t)
            var n = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        else
            e: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                        , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                            s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                        , a = -1
                        , u = -1
                        , l = 0
                        , c = 0
                        , f = t
                        , p = null;
                    t: for (; ;) {
                        for (var g; f !== n || i !== 0 && f.nodeType !== 3 || (a = o + i),
                            f !== s || r !== 0 && f.nodeType !== 3 || (u = o + r),
                            f.nodeType === 3 && (o += f.nodeValue.length),
                            (g = f.firstChild) !== null;)
                            p = f,
                                f = g;
                        for (; ;) {
                            if (f === t)
                                break t;
                            if (p === n && ++l === i && (a = o),
                                p === s && ++c === r && (u = o),
                                (g = f.nextSibling) !== null)
                                break;
                            f = p,
                                p = f.parentNode
                        }
                        f = g
                    }
                    n = a === -1 || u === -1 ? null : {
                        start: a,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Lu = {
        focusedElem: t,
        selectionRange: n
    },
        _o = !1,
        O = e; O !== null;)
        if (e = O,
            t = e.child,
            (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e,
                O = t;
        else
            for (; O !== null;) {
                e = O;
                try {
                    var y = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var v = y.memoizedProps
                                        , C = y.memoizedState
                                        , h = e.stateNode
                                        , d = h.getSnapshotBeforeUpdate(e.elementType === e.type ? v : pt(e.type, v), C);
                                    h.__reactInternalSnapshotBeforeUpdate = d
                                }
                                break;
                            case 3:
                                var m = e.stateNode.containerInfo;
                                m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(w(163))
                        }
                } catch (_) {
                    ce(e, e.return, _)
                }
                if (t = e.sibling,
                    t !== null) {
                    t.return = e.return,
                        O = t;
                    break
                }
                O = e.return
            }
    return y = Xf,
        Xf = !1,
        y
}
function Oi(t, e, n) {
    var r = e.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
        r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & t) === t) {
                var s = i.destroy;
                i.destroy = void 0,
                    s !== void 0 && Yu(e, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function ua(t, e) {
    if (e = e.updateQueue,
        e = e !== null ? e.lastEffect : null,
        e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== e)
    }
}
function Xu(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
            case 5:
                t = n;
                break;
            default:
                t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}
function lm(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
        lm(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
            e !== null && (delete e[bt],
                delete e[Ui],
                delete e[Fu],
                delete e[zv],
                delete e[$v])),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
}
function cm(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function Jf(t) {
    e: for (; ;) {
        for (; t.sibling === null;) {
            if (t.return === null || cm(t.return))
                return null;
            t = t.return
        }
        for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
            if (t.flags & 2 || t.child === null || t.tag === 4)
                continue e;
            t.child.return = t,
                t = t.child
        }
        if (!(t.flags & 2))
            return t.stateNode
    }
}
function Ju(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
            e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode,
                e.insertBefore(t, n)) : (e = n,
                    e.appendChild(t)),
                n = n._reactRootContainer,
                n != null || e.onclick !== null || (e.onclick = Eo));
    else if (r !== 4 && (t = t.child,
        t !== null))
        for (Ju(t, e, n),
            t = t.sibling; t !== null;)
            Ju(t, e, n),
                t = t.sibling
}
function el(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
            e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && (t = t.child,
        t !== null))
        for (el(t, e, n),
            t = t.sibling; t !== null;)
            el(t, e, n),
                t = t.sibling
}
var Se = null
    , ht = !1;
function Jt(t, e, n) {
    for (n = n.child; n !== null;)
        fm(t, e, n),
            n = n.sibling
}
function fm(t, e, n) {
    if (Ot && typeof Ot.onCommitFiberUnmount == "function")
        try {
            Ot.onCommitFiberUnmount(ea, n)
        } catch { }
    switch (n.tag) {
        case 5:
            Ne || wr(n, e);
        case 6:
            var r = Se
                , i = ht;
            Se = null,
                Jt(t, e, n),
                Se = r,
                ht = i,
                Se !== null && (ht ? (t = Se,
                    n = n.stateNode,
                    t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : Se.removeChild(n.stateNode));
            break;
        case 18:
            Se !== null && (ht ? (t = Se,
                n = n.stateNode,
                t.nodeType === 8 ? Ha(t.parentNode, n) : t.nodeType === 1 && Ha(t, n),
                Mi(t)) : Ha(Se, n.stateNode));
            break;
        case 4:
            r = Se,
                i = ht,
                Se = n.stateNode.containerInfo,
                ht = !0,
                Jt(t, e, n),
                Se = r,
                ht = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ne && (r = n.updateQueue,
                r !== null && (r = r.lastEffect,
                    r !== null))) {
                i = r = r.next;
                do {
                    var s = i
                        , o = s.destroy;
                    s = s.tag,
                        o !== void 0 && (s & 2 || s & 4) && Yu(n, e, o),
                        i = i.next
                } while (i !== r)
            }
            Jt(t, e, n);
            break;
        case 1:
            if (!Ne && (wr(n, e),
                r = n.stateNode,
                typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                        r.state = n.memoizedState,
                        r.componentWillUnmount()
                } catch (a) {
                    ce(n, e, a)
                }
            Jt(t, e, n);
            break;
        case 21:
            Jt(t, e, n);
            break;
        case 22:
            n.mode & 1 ? (Ne = (r = Ne) || n.memoizedState !== null,
                Jt(t, e, n),
                Ne = r) : Jt(t, e, n);
            break;
        default:
            Jt(t, e, n)
    }
}
function ed(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new n_),
            e.forEach(function (r) {
                var i = d_.bind(null, t, r);
                n.has(r) || (n.add(r),
                    r.then(i, i))
            })
    }
}
function dt(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = t
                    , o = e
                    , a = o;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Se = a.stateNode,
                                ht = !1;
                            break e;
                        case 3:
                            Se = a.stateNode.containerInfo,
                                ht = !0;
                            break e;
                        case 4:
                            Se = a.stateNode.containerInfo,
                                ht = !0;
                            break e
                    }
                    a = a.return
                }
                if (Se === null)
                    throw Error(w(160));
                fm(s, o, i),
                    Se = null,
                    ht = !1;
                var u = i.alternate;
                u !== null && (u.return = null),
                    i.return = null
            } catch (l) {
                ce(i, e, l)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null;)
            dm(e, t),
                e = e.sibling
}
function dm(t, e) {
    var n = t.alternate
        , r = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (dt(e, t),
                xt(t),
                r & 4) {
                try {
                    Oi(3, t, t.return),
                        ua(3, t)
                } catch (v) {
                    ce(t, t.return, v)
                }
                try {
                    Oi(5, t, t.return)
                } catch (v) {
                    ce(t, t.return, v)
                }
            }
            break;
        case 1:
            dt(e, t),
                xt(t),
                r & 512 && n !== null && wr(n, n.return);
            break;
        case 5:
            if (dt(e, t),
                xt(t),
                r & 512 && n !== null && wr(n, n.return),
                t.flags & 32) {
                var i = t.stateNode;
                try {
                    Ii(i, "")
                } catch (v) {
                    ce(t, t.return, v)
                }
            }
            if (r & 4 && (i = t.stateNode,
                i != null)) {
                var s = t.memoizedProps
                    , o = n !== null ? n.memoizedProps : s
                    , a = t.type
                    , u = t.updateQueue;
                if (t.updateQueue = null,
                    u !== null)
                    try {
                        a === "input" && s.type === "radio" && s.name != null && Dp(i, s),
                            xu(a, o);
                        var l = xu(a, s);
                        for (o = 0; o < u.length; o += 2) {
                            var c = u[o]
                                , f = u[o + 1];
                            c === "style" ? zp(i, f) : c === "dangerouslySetInnerHTML" ? jp(i, f) : c === "children" ? Ii(i, f) : Ul(i, c, f, l)
                        }
                        switch (a) {
                            case "input":
                                _u(i, s);
                                break;
                            case "textarea":
                                Lp(i, s);
                                break;
                            case "select":
                                var p = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!s.multiple;
                                var g = s.value;
                                g != null ? kr(i, !!s.multiple, g, !1) : p !== !!s.multiple && (s.defaultValue != null ? kr(i, !!s.multiple, s.defaultValue, !0) : kr(i, !!s.multiple, s.multiple ? [] : "", !1))
                        }
                        i[Ui] = s
                    } catch (v) {
                        ce(t, t.return, v)
                    }
            }
            break;
        case 6:
            if (dt(e, t),
                xt(t),
                r & 4) {
                if (t.stateNode === null)
                    throw Error(w(162));
                i = t.stateNode,
                    s = t.memoizedProps;
                try {
                    i.nodeValue = s
                } catch (v) {
                    ce(t, t.return, v)
                }
            }
            break;
        case 3:
            if (dt(e, t),
                xt(t),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Mi(e.containerInfo)
                } catch (v) {
                    ce(t, t.return, v)
                }
            break;
        case 4:
            dt(e, t),
                xt(t);
            break;
        case 13:
            dt(e, t),
                xt(t),
                i = t.child,
                i.flags & 8192 && (s = i.memoizedState !== null,
                    i.stateNode.isHidden = s,
                    !s || i.alternate !== null && i.alternate.memoizedState !== null || (wc = fe())),
                r & 4 && ed(t);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null,
                t.mode & 1 ? (Ne = (l = Ne) || c,
                    dt(e, t),
                    Ne = l) : dt(e, t),
                xt(t),
                r & 8192) {
                if (l = t.memoizedState !== null,
                    (t.stateNode.isHidden = l) && !c && t.mode & 1)
                    for (O = t,
                        c = t.child; c !== null;) {
                        for (f = O = c; O !== null;) {
                            switch (p = O,
                            g = p.child,
                            p.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Oi(4, p, p.return);
                                    break;
                                case 1:
                                    wr(p, p.return);
                                    var y = p.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        r = p,
                                            n = p.return;
                                        try {
                                            e = r,
                                                y.props = e.memoizedProps,
                                                y.state = e.memoizedState,
                                                y.componentWillUnmount()
                                        } catch (v) {
                                            ce(r, n, v)
                                        }
                                    }
                                    break;
                                case 5:
                                    wr(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        nd(f);
                                        continue
                                    }
                            }
                            g !== null ? (g.return = p,
                                O = g) : nd(f)
                        }
                        c = c.sibling
                    }
                e: for (c = null,
                    f = t; ;) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                i = f.stateNode,
                                    l ? (s = i.style,
                                        typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode,
                                            u = f.memoizedProps.style,
                                            o = u != null && u.hasOwnProperty("display") ? u.display : null,
                                            a.style.display = Fp("display", o))
                            } catch (v) {
                                ce(t, t.return, v)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null)
                            try {
                                f.stateNode.nodeValue = l ? "" : f.memoizedProps
                            } catch (v) {
                                ce(t, t.return, v)
                            }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === t) && f.child !== null) {
                        f.child.return = f,
                            f = f.child;
                        continue
                    }
                    if (f === t)
                        break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === t)
                            break e;
                        c === f && (c = null),
                            f = f.return
                    }
                    c === f && (c = null),
                        f.sibling.return = f.return,
                        f = f.sibling
                }
            }
            break;
        case 19:
            dt(e, t),
                xt(t),
                r & 4 && ed(t);
            break;
        case 21:
            break;
        default:
            dt(e, t),
                xt(t)
    }
}
function xt(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null;) {
                    if (cm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(w(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Ii(i, ""),
                        r.flags &= -33);
                    var s = Jf(t);
                    el(t, s, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo
                        , a = Jf(t);
                    Ju(t, a, o);
                    break;
                default:
                    throw Error(w(161))
            }
        } catch (u) {
            ce(t, t.return, u)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function i_(t, e, n) {
    O = t,
        pm(t)
}
function pm(t, e, n) {
    for (var r = (t.mode & 1) !== 0; O !== null;) {
        var i = O
            , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Ds;
            if (!o) {
                var a = i.alternate
                    , u = a !== null && a.memoizedState !== null || Ne;
                a = Ds;
                var l = Ne;
                if (Ds = o,
                    (Ne = u) && !l)
                    for (O = i; O !== null;)
                        o = O,
                            u = o.child,
                            o.tag === 22 && o.memoizedState !== null ? rd(i) : u !== null ? (u.return = o,
                                O = u) : rd(i);
                for (; s !== null;)
                    O = s,
                        pm(s),
                        s = s.sibling;
                O = i,
                    Ds = a,
                    Ne = l
            }
            td(t)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
                O = s) : td(t)
    }
}
function td(t) {
    for (; O !== null;) {
        var e = O;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ne || ua(5, e);
                            break;
                        case 1:
                            var r = e.stateNode;
                            if (e.flags & 4 && !Ne)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var i = e.elementType === e.type ? n.memoizedProps : pt(e.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var s = e.updateQueue;
                            s !== null && zf(e, s, r);
                            break;
                        case 3:
                            var o = e.updateQueue;
                            if (o !== null) {
                                if (n = null,
                                    e.child !== null)
                                    switch (e.child.tag) {
                                        case 5:
                                            n = e.child.stateNode;
                                            break;
                                        case 1:
                                            n = e.child.stateNode
                                    }
                                zf(e, o, n)
                            }
                            break;
                        case 5:
                            var a = e.stateNode;
                            if (n === null && e.flags & 4) {
                                n = a;
                                var u = e.memoizedProps;
                                switch (e.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        u.src && (n.src = u.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (e.memoizedState === null) {
                                var l = e.alternate;
                                if (l !== null) {
                                    var c = l.memoizedState;
                                    if (c !== null) {
                                        var f = c.dehydrated;
                                        f !== null && Mi(f)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(w(163))
                    }
                Ne || e.flags & 512 && Xu(e)
            } catch (p) {
                ce(e, e.return, p)
            }
        }
        if (e === t) {
            O = null;
            break
        }
        if (n = e.sibling,
            n !== null) {
            n.return = e.return,
                O = n;
            break
        }
        O = e.return
    }
}
function nd(t) {
    for (; O !== null;) {
        var e = O;
        if (e === t) {
            O = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return,
                O = n;
            break
        }
        O = e.return
    }
}
function rd(t) {
    for (; O !== null;) {
        var e = O;
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var n = e.return;
                    try {
                        ua(4, e)
                    } catch (u) {
                        ce(e, n, u)
                    }
                    break;
                case 1:
                    var r = e.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = e.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            ce(e, i, u)
                        }
                    }
                    var s = e.return;
                    try {
                        Xu(e)
                    } catch (u) {
                        ce(e, s, u)
                    }
                    break;
                case 5:
                    var o = e.return;
                    try {
                        Xu(e)
                    } catch (u) {
                        ce(e, o, u)
                    }
            }
        } catch (u) {
            ce(e, e.return, u)
        }
        if (e === t) {
            O = null;
            break
        }
        var a = e.sibling;
        if (a !== null) {
            a.return = e.return,
                O = a;
            break
        }
        O = e.return
    }
}
var s_ = Math.ceil
    , Ao = Yt.ReactCurrentDispatcher
    , vc = Yt.ReactCurrentOwner
    , at = Yt.ReactCurrentBatchConfig
    , W = 0
    , we = null
    , pe = null
    , ke = 0
    , He = 0
    , Sr = Nn(0)
    , ye = 0
    , Zi = null
    , Wn = 0
    , la = 0
    , _c = 0
    , Ni = null
    , $e = null
    , wc = 0
    , zr = 1 / 0
    , Mt = null
    , Do = !1
    , tl = null
    , yn = null
    , Ls = !1
    , fn = null
    , Lo = 0
    , Pi = 0
    , nl = null
    , to = -1
    , no = 0;
function Me() {
    return W & 6 ? fe() : to !== -1 ? to : to = fe()
}
function vn(t) {
    return t.mode & 1 ? W & 2 && ke !== 0 ? ke & -ke : Bv.transition !== null ? (no === 0 && (no = Yp()),
        no) : (t = Y,
            t !== 0 || (t = window.event,
                t = t === void 0 ? 16 : ih(t.type)),
            t) : 1
}
function _t(t, e, n, r) {
    if (50 < Pi)
        throw Pi = 0,
        nl = null,
        Error(w(185));
    ls(t, n, r),
        (!(W & 2) || t !== we) && (t === we && (!(W & 2) && (la |= n),
            ye === 4 && un(t, ke)),
            qe(t, r),
            n === 1 && W === 0 && !(e.mode & 1) && (zr = fe() + 500,
                sa && Pn()))
}
function qe(t, e) {
    var n = t.callbackNode;
    By(t, e);
    var r = vo(t, t === we ? ke : 0);
    if (r === 0)
        n !== null && df(n),
            t.callbackNode = null,
            t.callbackPriority = 0;
    else if (e = r & -r,
        t.callbackPriority !== e) {
        if (n != null && df(n),
            e === 1)
            t.tag === 0 ? Uv(id.bind(null, t)) : kh(id.bind(null, t)),
                jv(function () {
                    !(W & 6) && Pn()
                }),
                n = null;
        else {
            switch (Xp(r)) {
                case 1:
                    n = Wl;
                    break;
                case 4:
                    n = Kp;
                    break;
                case 16:
                    n = yo;
                    break;
                case 536870912:
                    n = Gp;
                    break;
                default:
                    n = yo
            }
            n = Sm(n, hm.bind(null, t))
        }
        t.callbackPriority = e,
            t.callbackNode = n
    }
}
function hm(t, e) {
    if (to = -1,
        no = 0,
        W & 6)
        throw Error(w(327));
    var n = t.callbackNode;
    if (Or() && t.callbackNode !== n)
        return null;
    var r = vo(t, t === we ? ke : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & t.expiredLanes || e)
        e = Mo(t, r);
    else {
        e = r;
        var i = W;
        W |= 2;
        var s = gm();
        (we !== t || ke !== e) && (Mt = null,
            zr = fe() + 500,
            zn(t, e));
        do
            try {
                u_();
                break
            } catch (a) {
                mm(t, a)
            }
        while (!0);
        sc(),
            Ao.current = s,
            W = i,
            pe !== null ? e = 0 : (we = null,
                ke = 0,
                e = ye)
    }
    if (e !== 0) {
        if (e === 2 && (i = Nu(t),
            i !== 0 && (r = i,
                e = rl(t, i))),
            e === 1)
            throw n = Zi,
            zn(t, 0),
            un(t, r),
            qe(t, fe()),
            n;
        if (e === 6)
            un(t, r);
        else {
            if (i = t.current.alternate,
                !(r & 30) && !o_(i) && (e = Mo(t, r),
                    e === 2 && (s = Nu(t),
                        s !== 0 && (r = s,
                            e = rl(t, s))),
                    e === 1))
                throw n = Zi,
                zn(t, 0),
                un(t, r),
                qe(t, fe()),
                n;
            switch (t.finishedWork = i,
            t.finishedLanes = r,
            e) {
                case 0:
                case 1:
                    throw Error(w(345));
                case 2:
                    Dn(t, $e, Mt);
                    break;
                case 3:
                    if (un(t, r),
                        (r & 130023424) === r && (e = wc + 500 - fe(),
                            10 < e)) {
                        if (vo(t, 0) !== 0)
                            break;
                        if (i = t.suspendedLanes,
                            (i & r) !== r) {
                            Me(),
                                t.pingedLanes |= t.suspendedLanes & i;
                            break
                        }
                        t.timeoutHandle = ju(Dn.bind(null, t, $e, Mt), e);
                        break
                    }
                    Dn(t, $e, Mt);
                    break;
                case 4:
                    if (un(t, r),
                        (r & 4194240) === r)
                        break;
                    for (e = t.eventTimes,
                        i = -1; 0 < r;) {
                        var o = 31 - vt(r);
                        s = 1 << o,
                            o = e[o],
                            o > i && (i = o),
                            r &= ~s
                    }
                    if (r = i,
                        r = fe() - r,
                        r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * s_(r / 1960)) - r,
                        10 < r) {
                        t.timeoutHandle = ju(Dn.bind(null, t, $e, Mt), r);
                        break
                    }
                    Dn(t, $e, Mt);
                    break;
                case 5:
                    Dn(t, $e, Mt);
                    break;
                default:
                    throw Error(w(329))
            }
        }
    }
    return qe(t, fe()),
        t.callbackNode === n ? hm.bind(null, t) : null
}
function rl(t, e) {
    var n = Ni;
    return t.current.memoizedState.isDehydrated && (zn(t, e).flags |= 256),
        t = Mo(t, e),
        t !== 2 && (e = $e,
            $e = n,
            e !== null && il(e)),
        t
}
function il(t) {
    $e === null ? $e = t : $e.push.apply($e, t)
}
function o_(t) {
    for (var e = t; ;) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores,
                n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                        , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Et(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child,
            e.subtreeFlags & 16384 && n !== null)
            n.return = e,
                e = n;
        else {
            if (e === t)
                break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
                e = e.sibling
        }
    }
    return !0
}
function un(t, e) {
    for (e &= ~_c,
        e &= ~la,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        t = t.expirationTimes; 0 < e;) {
        var n = 31 - vt(e)
            , r = 1 << n;
        t[n] = -1,
            e &= ~r
    }
}
function id(t) {
    if (W & 6)
        throw Error(w(327));
    Or();
    var e = vo(t, 0);
    if (!(e & 1))
        return qe(t, fe()),
            null;
    var n = Mo(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = Nu(t);
        r !== 0 && (e = r,
            n = rl(t, r))
    }
    if (n === 1)
        throw n = Zi,
        zn(t, 0),
        un(t, e),
        qe(t, fe()),
        n;
    if (n === 6)
        throw Error(w(345));
    return t.finishedWork = t.current.alternate,
        t.finishedLanes = e,
        Dn(t, $e, Mt),
        qe(t, fe()),
        null
}
function Sc(t, e) {
    var n = W;
    W |= 1;
    try {
        return t(e)
    } finally {
        W = n,
            W === 0 && (zr = fe() + 500,
                sa && Pn())
    }
}
function Zn(t) {
    fn !== null && fn.tag === 0 && !(W & 6) && Or();
    var e = W;
    W |= 1;
    var n = at.transition
        , r = Y;
    try {
        if (at.transition = null,
            Y = 1,
            t)
            return t()
    } finally {
        Y = r,
            at.transition = n,
            W = e,
            !(W & 6) && Pn()
    }
}
function Ec() {
    He = Sr.current,
        ie(Sr)
}
function zn(t, e) {
    t.finishedWork = null,
        t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1,
        Mv(n)),
        pe !== null)
        for (n = pe.return; n !== null;) {
            var r = n;
            switch (nc(r),
            r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                        r != null && ko();
                    break;
                case 3:
                    jr(),
                        ie(Be),
                        ie(Pe),
                        fc();
                    break;
                case 5:
                    cc(r);
                    break;
                case 4:
                    jr();
                    break;
                case 13:
                    ie(ae);
                    break;
                case 19:
                    ie(ae);
                    break;
                case 10:
                    oc(r.type._context);
                    break;
                case 22:
                case 23:
                    Ec()
            }
            n = n.return
        }
    if (we = t,
        pe = t = _n(t.current, null),
        ke = He = e,
        ye = 0,
        Zi = null,
        _c = la = Wn = 0,
        $e = Ni = null,
        Mn !== null) {
        for (e = 0; e < Mn.length; e++)
            if (n = Mn[e],
                r = n.interleaved,
                r !== null) {
                n.interleaved = null;
                var i = r.next
                    , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                        r.next = o
                }
                n.pending = r
            }
        Mn = null
    }
    return t
}
function mm(t, e) {
    do {
        var n = pe;
        try {
            if (sc(),
                Xs.current = Io,
                Ro) {
                for (var r = ue.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                        r = r.next
                }
                Ro = !1
            }
            if (Hn = 0,
                _e = ge = ue = null,
                Ti = !1,
                qi = 0,
                vc.current = null,
                n === null || n.return === null) {
                ye = 1,
                    Zi = e,
                    pe = null;
                break
            }
            e: {
                var s = t
                    , o = n.return
                    , a = n
                    , u = e;
                if (e = ke,
                    a.flags |= 32768,
                    u !== null && typeof u == "object" && typeof u.then == "function") {
                    var l = u
                        , c = a
                        , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue,
                            c.memoizedState = p.memoizedState,
                            c.lanes = p.lanes) : (c.updateQueue = null,
                                c.memoizedState = null)
                    }
                    var g = Hf(o);
                    if (g !== null) {
                        g.flags &= -257,
                            Wf(g, o, a, s, e),
                            g.mode & 1 && qf(s, l, e),
                            e = g,
                            u = l;
                        var y = e.updateQueue;
                        if (y === null) {
                            var v = new Set;
                            v.add(u),
                                e.updateQueue = v
                        } else
                            y.add(u);
                        break e
                    } else {
                        if (!(e & 1)) {
                            qf(s, l, e),
                                kc();
                            break e
                        }
                        u = Error(w(426))
                    }
                } else if (se && a.mode & 1) {
                    var C = Hf(o);
                    if (C !== null) {
                        !(C.flags & 65536) && (C.flags |= 256),
                            Wf(C, o, a, s, e),
                            rc(Fr(u, a));
                        break e
                    }
                }
                s = u = Fr(u, a),
                    ye !== 4 && (ye = 2),
                    Ni === null ? Ni = [s] : Ni.push(s),
                    s = o;
                do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536,
                                e &= -e,
                                s.lanes |= e;
                            var h = Xh(s, u, e);
                            Ff(s, h);
                            break e;
                        case 1:
                            a = u;
                            var d = s.type
                                , m = s.stateNode;
                            if (!(s.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (yn === null || !yn.has(m)))) {
                                s.flags |= 65536,
                                    e &= -e,
                                    s.lanes |= e;
                                var _ = Jh(s, a, e);
                                Ff(s, _);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            vm(n)
        } catch (k) {
            e = k,
                pe === n && n !== null && (pe = n = n.return);
            continue
        }
        break
    } while (!0)
}
function gm() {
    var t = Ao.current;
    return Ao.current = Io,
        t === null ? Io : t
}
function kc() {
    (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
        we === null || !(Wn & 268435455) && !(la & 268435455) || un(we, ke)
}
function Mo(t, e) {
    var n = W;
    W |= 2;
    var r = gm();
    (we !== t || ke !== e) && (Mt = null,
        zn(t, e));
    do
        try {
            a_();
            break
        } catch (i) {
            mm(t, i)
        }
    while (!0);
    if (sc(),
        W = n,
        Ao.current = r,
        pe !== null)
        throw Error(w(261));
    return we = null,
        ke = 0,
        ye
}
function a_() {
    for (; pe !== null;)
        ym(pe)
}
function u_() {
    for (; pe !== null && !Ay();)
        ym(pe)
}
function ym(t) {
    var e = wm(t.alternate, t, He);
    t.memoizedProps = t.pendingProps,
        e === null ? vm(t) : pe = e,
        vc.current = null
}
function vm(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return,
            e.flags & 32768) {
            if (n = t_(n, e),
                n !== null) {
                n.flags &= 32767,
                    pe = n;
                return
            }
            if (t !== null)
                t.flags |= 32768,
                    t.subtreeFlags = 0,
                    t.deletions = null;
            else {
                ye = 6,
                    pe = null;
                return
            }
        } else if (n = e_(n, e, He),
            n !== null) {
            pe = n;
            return
        }
        if (e = e.sibling,
            e !== null) {
            pe = e;
            return
        }
        pe = e = t
    } while (e !== null);
    ye === 0 && (ye = 5)
}
function Dn(t, e, n) {
    var r = Y
        , i = at.transition;
    try {
        at.transition = null,
            Y = 1,
            l_(t, e, n, r)
    } finally {
        at.transition = i,
            Y = r
    }
    return null
}
function l_(t, e, n, r) {
    do
        Or();
    while (fn !== null);
    if (W & 6)
        throw Error(w(327));
    n = t.finishedWork;
    var i = t.finishedLanes;
    if (n === null)
        return null;
    if (t.finishedWork = null,
        t.finishedLanes = 0,
        n === t.current)
        throw Error(w(177));
    t.callbackNode = null,
        t.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Vy(t, s),
        t === we && (pe = we = null,
            ke = 0),
        !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ls || (Ls = !0,
            Sm(yo, function () {
                return Or(),
                    null
            })),
        s = (n.flags & 15990) !== 0,
        n.subtreeFlags & 15990 || s) {
        s = at.transition,
            at.transition = null;
        var o = Y;
        Y = 1;
        var a = W;
        W |= 4,
            vc.current = null,
            r_(t, n),
            dm(n, t),
            Nv(Lu),
            _o = !!Du,
            Lu = Du = null,
            t.current = n,
            i_(n),
            Dy(),
            W = a,
            Y = o,
            at.transition = s
    } else
        t.current = n;
    if (Ls && (Ls = !1,
        fn = t,
        Lo = i),
        s = t.pendingLanes,
        s === 0 && (yn = null),
        jy(n.stateNode),
        qe(t, fe()),
        e !== null)
        for (r = t.onRecoverableError,
            n = 0; n < e.length; n++)
            i = e[n],
                r(i.value, {
                    componentStack: i.stack,
                    digest: i.digest
                });
    if (Do)
        throw Do = !1,
        t = tl,
        tl = null,
        t;
    return Lo & 1 && t.tag !== 0 && Or(),
        s = t.pendingLanes,
        s & 1 ? t === nl ? Pi++ : (Pi = 0,
            nl = t) : Pi = 0,
        Pn(),
        null
}
function Or() {
    if (fn !== null) {
        var t = Xp(Lo)
            , e = at.transition
            , n = Y;
        try {
            if (at.transition = null,
                Y = 16 > t ? 16 : t,
                fn === null)
                var r = !1;
            else {
                if (t = fn,
                    fn = null,
                    Lo = 0,
                    W & 6)
                    throw Error(w(331));
                var i = W;
                for (W |= 4,
                    O = t.current; O !== null;) {
                    var s = O
                        , o = s.child;
                    if (O.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var l = a[u];
                                for (O = l; O !== null;) {
                                    var c = O;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Oi(8, c, s)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                            O = f;
                                    else
                                        for (; O !== null;) {
                                            c = O;
                                            var p = c.sibling
                                                , g = c.return;
                                            if (lm(c),
                                                c === l) {
                                                O = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = g,
                                                    O = p;
                                                break
                                            }
                                            O = g
                                        }
                                }
                            }
                            var y = s.alternate;
                            if (y !== null) {
                                var v = y.child;
                                if (v !== null) {
                                    y.child = null;
                                    do {
                                        var C = v.sibling;
                                        v.sibling = null,
                                            v = C
                                    } while (v !== null)
                                }
                            }
                            O = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                            O = o;
                    else
                        e: for (; O !== null;) {
                            if (s = O,
                                s.flags & 2048)
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Oi(9, s, s.return)
                                }
                            var h = s.sibling;
                            if (h !== null) {
                                h.return = s.return,
                                    O = h;
                                break e
                            }
                            O = s.return
                        }
                }
                var d = t.current;
                for (O = d; O !== null;) {
                    o = O;
                    var m = o.child;
                    if (o.subtreeFlags & 2064 && m !== null)
                        m.return = o,
                            O = m;
                    else
                        e: for (o = d; O !== null;) {
                            if (a = O,
                                a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ua(9, a)
                                    }
                                } catch (k) {
                                    ce(a, a.return, k)
                                }
                            if (a === o) {
                                O = null;
                                break e
                            }
                            var _ = a.sibling;
                            if (_ !== null) {
                                _.return = a.return,
                                    O = _;
                                break e
                            }
                            O = a.return
                        }
                }
                if (W = i,
                    Pn(),
                    Ot && typeof Ot.onPostCommitFiberRoot == "function")
                    try {
                        Ot.onPostCommitFiberRoot(ea, t)
                    } catch { }
                r = !0
            }
            return r
        } finally {
            Y = n,
                at.transition = e
        }
    }
    return !1
}
function sd(t, e, n) {
    e = Fr(n, e),
        e = Xh(t, e, 1),
        t = gn(t, e, 1),
        e = Me(),
        t !== null && (ls(t, 1, e),
            qe(t, e))
}
function ce(t, e, n) {
    if (t.tag === 3)
        sd(t, t, n);
    else
        for (; e !== null;) {
            if (e.tag === 3) {
                sd(e, t, n);
                break
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (yn === null || !yn.has(r))) {
                    t = Fr(n, t),
                        t = Jh(e, t, 1),
                        e = gn(e, t, 1),
                        t = Me(),
                        e !== null && (ls(e, 1, t),
                            qe(e, t));
                    break
                }
            }
            e = e.return
        }
}
function c_(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e),
        e = Me(),
        t.pingedLanes |= t.suspendedLanes & n,
        we === t && (ke & n) === n && (ye === 4 || ye === 3 && (ke & 130023424) === ke && 500 > fe() - wc ? zn(t, 0) : _c |= n),
        qe(t, e)
}
function _m(t, e) {
    e === 0 && (t.mode & 1 ? (e = Cs,
        Cs <<= 1,
        !(Cs & 130023424) && (Cs = 4194304)) : e = 1);
    var n = Me();
    t = Qt(t, e),
        t !== null && (ls(t, e, n),
            qe(t, n))
}
function f_(t) {
    var e = t.memoizedState
        , n = 0;
    e !== null && (n = e.retryLane),
        _m(t, n)
}
function d_(t, e) {
    var n = 0;
    switch (t.tag) {
        case 13:
            var r = t.stateNode
                , i = t.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = t.stateNode;
            break;
        default:
            throw Error(w(314))
    }
    r !== null && r.delete(e),
        _m(t, n)
}
var wm;
wm = function (t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || Be.current)
            Ue = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return Ue = !1,
                    Jv(t, e, n);
            Ue = !!(t.flags & 131072)
        }
    else
        Ue = !1,
            se && e.flags & 1048576 && xh(e, bo, e.index);
    switch (e.lanes = 0,
    e.tag) {
        case 2:
            var r = e.type;
            eo(t, e),
                t = e.pendingProps;
            var i = Dr(e, Pe.current);
            Tr(e, n),
                i = pc(null, e, r, t, i, n);
            var s = hc();
            return e.flags |= 1,
                typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1,
                    e.memoizedState = null,
                    e.updateQueue = null,
                    Ve(r) ? (s = !0,
                        xo(e)) : s = !1,
                    e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
                    uc(e),
                    i.updater = aa,
                    e.stateNode = i,
                    i._reactInternals = e,
                    qu(e, r, t, n),
                    e = Zu(null, e, r, !0, s, n)) : (e.tag = 0,
                        se && s && tc(e),
                        De(null, e, i, n),
                        e = e.child),
                e;
        case 16:
            r = e.elementType;
            e: {
                switch (eo(t, e),
                t = e.pendingProps,
                i = r._init,
                r = i(r._payload),
                e.type = r,
                i = e.tag = h_(r),
                t = pt(r, t),
                i) {
                    case 0:
                        e = Wu(null, e, r, t, n);
                        break e;
                    case 1:
                        e = Kf(null, e, r, t, n);
                        break e;
                    case 11:
                        e = Zf(null, e, r, t, n);
                        break e;
                    case 14:
                        e = Qf(null, e, r, pt(r.type, t), n);
                        break e
                }
                throw Error(w(306, r, ""))
            }
            return e;
        case 0:
            return r = e.type,
                i = e.pendingProps,
                i = e.elementType === r ? i : pt(r, i),
                Wu(t, e, r, i, n);
        case 1:
            return r = e.type,
                i = e.pendingProps,
                i = e.elementType === r ? i : pt(r, i),
                Kf(t, e, r, i, n);
        case 3:
            e: {
                if (rm(e),
                    t === null)
                    throw Error(w(387));
                r = e.pendingProps,
                    s = e.memoizedState,
                    i = s.element,
                    Ph(t, e),
                    No(e, r, null, n);
                var o = e.memoizedState;
                if (r = o.element,
                    s.isDehydrated)
                    if (s = {
                        element: r,
                        isDehydrated: !1,
                        cache: o.cache,
                        pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                        transitions: o.transitions
                    },
                        e.updateQueue.baseState = s,
                        e.memoizedState = s,
                        e.flags & 256) {
                        i = Fr(Error(w(423)), e),
                            e = Gf(t, e, r, n, i);
                        break e
                    } else if (r !== i) {
                        i = Fr(Error(w(424)), e),
                            e = Gf(t, e, r, n, i);
                        break e
                    } else
                        for (We = mn(e.stateNode.containerInfo.firstChild),
                            Qe = e,
                            se = !0,
                            gt = null,
                            n = Oh(e, null, r, n),
                            e.child = n; n;)
                            n.flags = n.flags & -3 | 4096,
                                n = n.sibling;
                else {
                    if (Lr(),
                        r === i) {
                        e = Kt(t, e, n);
                        break e
                    }
                    De(t, e, r, n)
                }
                e = e.child
            }
            return e;
        case 5:
            return Rh(e),
                t === null && Uu(e),
                r = e.type,
                i = e.pendingProps,
                s = t !== null ? t.memoizedProps : null,
                o = i.children,
                Mu(r, i) ? o = null : s !== null && Mu(r, s) && (e.flags |= 32),
                nm(t, e),
                De(t, e, o, n),
                e.child;
        case 6:
            return t === null && Uu(e),
                null;
        case 13:
            return im(t, e, n);
        case 4:
            return lc(e, e.stateNode.containerInfo),
                r = e.pendingProps,
                t === null ? e.child = Mr(e, null, r, n) : De(t, e, r, n),
                e.child;
        case 11:
            return r = e.type,
                i = e.pendingProps,
                i = e.elementType === r ? i : pt(r, i),
                Zf(t, e, r, i, n);
        case 7:
            return De(t, e, e.pendingProps, n),
                e.child;
        case 8:
            return De(t, e, e.pendingProps.children, n),
                e.child;
        case 12:
            return De(t, e, e.pendingProps.children, n),
                e.child;
        case 10:
            e: {
                if (r = e.type._context,
                    i = e.pendingProps,
                    s = e.memoizedProps,
                    o = i.value,
                    te(To, r._currentValue),
                    r._currentValue = o,
                    s !== null)
                    if (Et(s.value, o)) {
                        if (s.children === i.children && !Be.current) {
                            e = Kt(t, e, n);
                            break e
                        }
                    } else
                        for (s = e.child,
                            s !== null && (s.return = e); s !== null;) {
                            var a = s.dependencies;
                            if (a !== null) {
                                o = s.child;
                                for (var u = a.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (s.tag === 1) {
                                            u = Vt(-1, n & -n),
                                                u.tag = 2;
                                            var l = s.updateQueue;
                                            if (l !== null) {
                                                l = l.shared;
                                                var c = l.pending;
                                                c === null ? u.next = u : (u.next = c.next,
                                                    c.next = u),
                                                    l.pending = u
                                            }
                                        }
                                        s.lanes |= n,
                                            u = s.alternate,
                                            u !== null && (u.lanes |= n),
                                            Bu(s.return, n, e),
                                            a.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (s.tag === 10)
                                o = s.type === e.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (o = s.return,
                                    o === null)
                                    throw Error(w(341));
                                o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    Bu(o, n, e),
                                    o = s.sibling
                            } else
                                o = s.child;
                            if (o !== null)
                                o.return = s;
                            else
                                for (o = s; o !== null;) {
                                    if (o === e) {
                                        o = null;
                                        break
                                    }
                                    if (s = o.sibling,
                                        s !== null) {
                                        s.return = o.return,
                                            o = s;
                                        break
                                    }
                                    o = o.return
                                }
                            s = o
                        }
                De(t, e, i.children, n),
                    e = e.child
            }
            return e;
        case 9:
            return i = e.type,
                r = e.pendingProps.children,
                Tr(e, n),
                i = lt(i),
                r = r(i),
                e.flags |= 1,
                De(t, e, r, n),
                e.child;
        case 14:
            return r = e.type,
                i = pt(r, e.pendingProps),
                i = pt(r.type, i),
                Qf(t, e, r, i, n);
        case 15:
            return em(t, e, e.type, e.pendingProps, n);
        case 17:
            return r = e.type,
                i = e.pendingProps,
                i = e.elementType === r ? i : pt(r, i),
                eo(t, e),
                e.tag = 1,
                Ve(r) ? (t = !0,
                    xo(e)) : t = !1,
                Tr(e, n),
                Yh(e, r, i),
                qu(e, r, i, n),
                Zu(null, e, r, !0, t, n);
        case 19:
            return sm(t, e, n);
        case 22:
            return tm(t, e, n)
    }
    throw Error(w(156, e.tag))
}
    ;
function Sm(t, e) {
    return Qp(t, e)
}
function p_(t, e, n, r) {
    this.tag = t,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
}
function it(t, e, n, r) {
    return new p_(t, e, n, r)
}
function xc(t) {
    return t = t.prototype,
        !(!t || !t.isReactComponent)
}
function h_(t) {
    if (typeof t == "function")
        return xc(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof,
            t === Vl)
            return 11;
        if (t === ql)
            return 14
    }
    return 2
}
function _n(t, e) {
    var n = t.alternate;
    return n === null ? (n = it(t.tag, e, t.key, t.mode),
        n.elementType = t.elementType,
        n.type = t.type,
        n.stateNode = t.stateNode,
        n.alternate = t,
        t.alternate = n) : (n.pendingProps = e,
            n.type = t.type,
            n.flags = 0,
            n.subtreeFlags = 0,
            n.deletions = null),
        n.flags = t.flags & 14680064,
        n.childLanes = t.childLanes,
        n.lanes = t.lanes,
        n.child = t.child,
        n.memoizedProps = t.memoizedProps,
        n.memoizedState = t.memoizedState,
        n.updateQueue = t.updateQueue,
        e = t.dependencies,
        n.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        n.sibling = t.sibling,
        n.index = t.index,
        n.ref = t.ref,
        n
}
function ro(t, e, n, r, i, s) {
    var o = 2;
    if (r = t,
        typeof t == "function")
        xc(t) && (o = 1);
    else if (typeof t == "string")
        o = 5;
    else
        e: switch (t) {
            case fr:
                return $n(n.children, i, s, e);
            case Bl:
                o = 8,
                    i |= 8;
                break;
            case hu:
                return t = it(12, n, e, i | 2),
                    t.elementType = hu,
                    t.lanes = s,
                    t;
            case mu:
                return t = it(13, n, e, i),
                    t.elementType = mu,
                    t.lanes = s,
                    t;
            case gu:
                return t = it(19, n, e, i),
                    t.elementType = gu,
                    t.lanes = s,
                    t;
            case Rp:
                return ca(n, i, s, e);
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                        case Np:
                            o = 10;
                            break e;
                        case Pp:
                            o = 9;
                            break e;
                        case Vl:
                            o = 11;
                            break e;
                        case ql:
                            o = 14;
                            break e;
                        case nn:
                            o = 16,
                                r = null;
                            break e
                    }
                throw Error(w(130, t == null ? t : typeof t, ""))
        }
    return e = it(o, n, e, i),
        e.elementType = t,
        e.type = r,
        e.lanes = s,
        e
}
function $n(t, e, n, r) {
    return t = it(7, t, r, e),
        t.lanes = n,
        t
}
function ca(t, e, n, r) {
    return t = it(22, t, r, e),
        t.elementType = Rp,
        t.lanes = n,
        t.stateNode = {
            isHidden: !1
        },
        t
}
function Ja(t, e, n) {
    return t = it(6, t, null, e),
        t.lanes = n,
        t
}
function eu(t, e, n) {
    return e = it(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = n,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
}
function m_(t, e, n, r, i) {
    this.tag = e,
        this.containerInfo = t,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Da(0),
        this.expirationTimes = Da(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Da(0),
        this.identifierPrefix = r,
        this.onRecoverableError = i,
        this.mutableSourceEagerHydrationData = null
}
function Cc(t, e, n, r, i, s, o, a, u) {
    return t = new m_(t, e, n, a, u),
        e === 1 ? (e = 1,
            s === !0 && (e |= 8)) : e = 0,
        s = it(3, null, null, e),
        t.current = s,
        s.stateNode = t,
        s.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        uc(s),
        t
}
function g_(t, e, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: cr,
        key: r == null ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n
    }
}
function Em(t) {
    if (!t)
        return En;
    t = t._reactInternals;
    e: {
        if (rr(t) !== t || t.tag !== 1)
            throw Error(w(170));
        var e = t;
        do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context;
                    break e;
                case 1:
                    if (Ve(e.type)) {
                        e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            e = e.return
        } while (e !== null);
        throw Error(w(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Ve(n))
            return Eh(t, n, e)
    }
    return e
}
function km(t, e, n, r, i, s, o, a, u) {
    return t = Cc(n, r, !0, t, i, s, o, a, u),
        t.context = Em(null),
        n = t.current,
        r = Me(),
        i = vn(n),
        s = Vt(r, i),
        s.callback = e ?? null,
        gn(n, s, i),
        t.current.lanes = i,
        ls(t, i, r),
        qe(t, r),
        t
}
function fa(t, e, n, r) {
    var i = e.current
        , s = Me()
        , o = vn(i);
    return n = Em(n),
        e.context === null ? e.context = n : e.pendingContext = n,
        e = Vt(s, o),
        e.payload = {
            element: t
        },
        r = r === void 0 ? null : r,
        r !== null && (e.callback = r),
        t = gn(i, e, o),
        t !== null && (_t(t, i, o, s),
            Ys(t, i, o)),
        o
}
function jo(t) {
    if (t = t.current,
        !t.child)
        return null;
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode
    }
}
function od(t, e) {
    if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}
function bc(t, e) {
    od(t, e),
        (t = t.alternate) && od(t, e)
}
function y_() {
    return null
}
var xm = typeof reportError == "function" ? reportError : function (t) {
    console.error(t)
}
    ;
function Tc(t) {
    this._internalRoot = t
}
da.prototype.render = Tc.prototype.render = function (t) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(w(409));
    fa(t, e, null, null)
}
    ;
da.prototype.unmount = Tc.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Zn(function () {
            fa(null, t, null, null)
        }),
            e[Zt] = null
    }
}
    ;
function da(t) {
    this._internalRoot = t
}
da.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
        var e = th();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < an.length && e !== 0 && e < an[n].priority; n++)
            ;
        an.splice(n, 0, t),
            n === 0 && rh(t)
    }
}
    ;
function Oc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function pa(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}
function ad() { }
function v_(t, e, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function () {
                var l = jo(o);
                s.call(l)
            }
        }
        var o = km(e, r, t, 0, null, !1, !1, "", ad);
        return t._reactRootContainer = o,
            t[Zt] = o.current,
            zi(t.nodeType === 8 ? t.parentNode : t),
            Zn(),
            o
    }
    for (; i = t.lastChild;)
        t.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var l = jo(u);
            a.call(l)
        }
    }
    var u = Cc(t, 0, !1, null, null, !1, !1, "", ad);
    return t._reactRootContainer = u,
        t[Zt] = u.current,
        zi(t.nodeType === 8 ? t.parentNode : t),
        Zn(function () {
            fa(e, u, n, r)
        }),
        u
}
function ha(t, e, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var u = jo(o);
                a.call(u)
            }
        }
        fa(e, o, t, i)
    } else
        o = v_(n, e, t, i, r);
    return jo(o)
}
Jp = function (t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
                var n = mi(e.pendingLanes);
                n !== 0 && (Zl(e, n | 1),
                    qe(e, fe()),
                    !(W & 6) && (zr = fe() + 500,
                        Pn()))
            }
            break;
        case 13:
            Zn(function () {
                var r = Qt(t, 1);
                if (r !== null) {
                    var i = Me();
                    _t(r, t, 1, i)
                }
            }),
                bc(t, 1)
    }
}
    ;
Ql = function (t) {
    if (t.tag === 13) {
        var e = Qt(t, 134217728);
        if (e !== null) {
            var n = Me();
            _t(e, t, 134217728, n)
        }
        bc(t, 134217728)
    }
}
    ;
eh = function (t) {
    if (t.tag === 13) {
        var e = vn(t)
            , n = Qt(t, e);
        if (n !== null) {
            var r = Me();
            _t(n, t, e, r)
        }
        bc(t, e)
    }
}
    ;
th = function () {
    return Y
}
    ;
nh = function (t, e) {
    var n = Y;
    try {
        return Y = t,
            e()
    } finally {
        Y = n
    }
}
    ;
bu = function (t, e, n) {
    switch (e) {
        case "input":
            if (_u(t, n),
                e = n.name,
                n.type === "radio" && e != null) {
                for (n = t; n.parentNode;)
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
                    e = 0; e < n.length; e++) {
                    var r = n[e];
                    if (r !== t && r.form === t.form) {
                        var i = ia(r);
                        if (!i)
                            throw Error(w(90));
                        Ap(r),
                            _u(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Lp(t, n);
            break;
        case "select":
            e = n.value,
                e != null && kr(t, !!n.multiple, e, !1)
    }
}
    ;
Bp = Sc;
Vp = Zn;
var __ = {
    usingClientEntryPoint: !1,
    Events: [fs, mr, ia, $p, Up, Sc]
}
    , li = {
        findFiberByHostInstance: Ln,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
    , w_ = {
        bundleType: li.bundleType,
        version: li.version,
        rendererPackageName: li.rendererPackageName,
        rendererConfig: li.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Yt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (t) {
            return t = Wp(t),
                t === null ? null : t.stateNode
        },
        findFiberByHostInstance: li.findFiberByHostInstance || y_,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ms = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ms.isDisabled && Ms.supportsFiber)
        try {
            ea = Ms.inject(w_),
                Ot = Ms
        } catch { }
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = __;
Ye.createPortal = function (t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Oc(e))
        throw Error(w(200));
    return g_(t, e, null, n)
}
    ;
Ye.createRoot = function (t, e) {
    if (!Oc(t))
        throw Error(w(299));
    var n = !1
        , r = ""
        , i = xm;
    return e != null && (e.unstable_strictMode === !0 && (n = !0),
        e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
        e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        e = Cc(t, 1, !1, null, null, n, !1, r, i),
        t[Zt] = e.current,
        zi(t.nodeType === 8 ? t.parentNode : t),
        new Tc(e)
}
    ;
Ye.findDOMNode = function (t) {
    if (t == null)
        return null;
    if (t.nodeType === 1)
        return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(w(188)) : (t = Object.keys(t).join(","),
            Error(w(268, t)));
    return t = Wp(e),
        t = t === null ? null : t.stateNode,
        t
}
    ;
Ye.flushSync = function (t) {
    return Zn(t)
}
    ;
Ye.hydrate = function (t, e, n) {
    if (!pa(e))
        throw Error(w(200));
    return ha(null, t, e, !0, n)
}
    ;
Ye.hydrateRoot = function (t, e, n) {
    if (!Oc(t))
        throw Error(w(405));
    var r = n != null && n.hydratedSources || null
        , i = !1
        , s = ""
        , o = xm;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        e = km(e, null, t, 1, n ?? null, i, !1, s, o),
        t[Zt] = e.current,
        zi(t),
        r)
        for (t = 0; t < r.length; t++)
            n = r[t],
                i = n._getVersion,
                i = i(n._source),
                e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(n, i);
    return new da(e)
}
    ;
Ye.render = function (t, e, n) {
    if (!pa(e))
        throw Error(w(200));
    return ha(null, t, e, !1, n)
}
    ;
Ye.unmountComponentAtNode = function (t) {
    if (!pa(t))
        throw Error(w(40));
    return t._reactRootContainer ? (Zn(function () {
        ha(null, null, t, !1, function () {
            t._reactRootContainer = null,
                t[Zt] = null
        })
    }),
        !0) : !1
}
    ;
Ye.unstable_batchedUpdates = Sc;
Ye.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
    if (!pa(n))
        throw Error(w(200));
    if (t == null || t._reactInternals === void 0)
        throw Error(w(38));
    return ha(t, e, n, !1, r)
}
    ;
Ye.version = "18.3.1-next-f1338f8080-20240426";
function Cm() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cm)
        } catch (t) {
            console.error(t)
        }
}
Cm(),
    Cp.exports = Ye;
var bm = Cp.exports;
const S_ = pp(bm);
var Tm, ud = bm;
Tm = ud.createRoot,
    ud.hydrateRoot;
const Om = K.createContext(null);
function E_(t) {
    const { children: e } = t
        , [n, r] = K.useState(null);
    return K.useEffect(() => {
        const i = navigator.mediaDevices.getUserMedia({
            video: {
                aspectRatio: 1,
                width: {
                    max: 1080
                },
                height: {
                    max: 1080
                },
                facingMode: "user"
            },
            audio: !0
        }).then(s => (r(s),
            s));
        return () => {
            i.then(s => {
                s.getTracks().forEach(o => o.stop())
            }
            )
        }
    }
        , []),
        j.jsx(Om.Provider, {
            value: n,
            children: e
        })
}
function Nc() {
    return K.useContext(Om)
}
var H;
(function (t) {
    t.assertEqual = i => i;
    function e(i) { }
    t.assertIs = e;
    function n(i) {
        throw new Error
    }
    t.assertNever = n,
        t.arrayToEnum = i => {
            const s = {};
            for (const o of i)
                s[o] = o;
            return s
        }
        ,
        t.getValidEnumValues = i => {
            const s = t.objectKeys(i).filter(a => typeof i[i[a]] != "number")
                , o = {};
            for (const a of s)
                o[a] = i[a];
            return t.objectValues(o)
        }
        ,
        t.objectValues = i => t.objectKeys(i).map(function (s) {
            return i[s]
        }),
        t.objectKeys = typeof Object.keys == "function" ? i => Object.keys(i) : i => {
            const s = [];
            for (const o in i)
                Object.prototype.hasOwnProperty.call(i, o) && s.push(o);
            return s
        }
        ,
        t.find = (i, s) => {
            for (const o of i)
                if (s(o))
                    return o
        }
        ,
        t.isInteger = typeof Number.isInteger == "function" ? i => Number.isInteger(i) : i => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
    function r(i, s = " | ") {
        return i.map(o => typeof o == "string" ? `'${o}'` : o).join(s)
    }
    t.joinValues = r,
        t.jsonStringifyReplacer = (i, s) => typeof s == "bigint" ? s.toString() : s
}
)(H || (H = {}));
var sl;
(function (t) {
    t.mergeShapes = (e, n) => ({
        ...e,
        ...n
    })
}
)(sl || (sl = {}));
const T = H.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
    , ln = t => {
        switch (typeof t) {
            case "undefined":
                return T.undefined;
            case "string":
                return T.string;
            case "number":
                return isNaN(t) ? T.nan : T.number;
            case "boolean":
                return T.boolean;
            case "function":
                return T.function;
            case "bigint":
                return T.bigint;
            case "symbol":
                return T.symbol;
            case "object":
                return Array.isArray(t) ? T.array : t === null ? T.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? T.promise : typeof Map < "u" && t instanceof Map ? T.map : typeof Set < "u" && t instanceof Set ? T.set : typeof Date < "u" && t instanceof Date ? T.date : T.object;
            default:
                return T.unknown
        }
    }
    , S = H.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"])
    , k_ = t => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Ke extends Error {
    constructor(e) {
        super(),
            this.issues = [],
            this.addIssue = r => {
                this.issues = [...this.issues, r]
            }
            ,
            this.addIssues = (r = []) => {
                this.issues = [...this.issues, ...r]
            }
            ;
        const n = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n,
            this.name = "ZodError",
            this.issues = e
    }
    get errors() {
        return this.issues
    }
    format(e) {
        const n = e || function (s) {
            return s.message
        }
            , r = {
                _errors: []
            }
            , i = s => {
                for (const o of s.issues)
                    if (o.code === "invalid_union")
                        o.unionErrors.map(i);
                    else if (o.code === "invalid_return_type")
                        i(o.returnTypeError);
                    else if (o.code === "invalid_arguments")
                        i(o.argumentsError);
                    else if (o.path.length === 0)
                        r._errors.push(n(o));
                    else {
                        let a = r
                            , u = 0;
                        for (; u < o.path.length;) {
                            const l = o.path[u];
                            u === o.path.length - 1 ? (a[l] = a[l] || {
                                _errors: []
                            },
                                a[l]._errors.push(n(o))) : a[l] = a[l] || {
                                    _errors: []
                                },
                                a = a[l],
                                u++
                        }
                    }
            }
            ;
        return i(this),
            r
    }
    static assert(e) {
        if (!(e instanceof Ke))
            throw new Error(`Not a ZodError: ${e}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, H.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e = n => n.message) {
        const n = {}
            , r = [];
        for (const i of this.issues)
            i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [],
                n[i.path[0]].push(e(i))) : r.push(e(i));
        return {
            formErrors: r,
            fieldErrors: n
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
Ke.create = t => new Ke(t);
const $r = (t, e) => {
    let n;
    switch (t.code) {
        case S.invalid_type:
            t.received === T.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
            break;
        case S.invalid_literal:
            n = `Invalid literal value, expected ${JSON.stringify(t.expected, H.jsonStringifyReplacer)}`;
            break;
        case S.unrecognized_keys:
            n = `Unrecognized key(s) in object: ${H.joinValues(t.keys, ", ")}`;
            break;
        case S.invalid_union:
            n = "Invalid input";
            break;
        case S.invalid_union_discriminator:
            n = `Invalid discriminator value. Expected ${H.joinValues(t.options)}`;
            break;
        case S.invalid_enum_value:
            n = `Invalid enum value. Expected ${H.joinValues(t.options)}, received '${t.received}'`;
            break;
        case S.invalid_arguments:
            n = "Invalid function arguments";
            break;
        case S.invalid_return_type:
            n = "Invalid function return type";
            break;
        case S.invalid_date:
            n = "Invalid date";
            break;
        case S.invalid_string:
            typeof t.validation == "object" ? "includes" in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`,
                typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : H.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
            break;
        case S.too_small:
            t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
            break;
        case S.too_big:
            t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
            break;
        case S.custom:
            n = "Invalid input";
            break;
        case S.invalid_intersection_types:
            n = "Intersection results could not be merged";
            break;
        case S.not_multiple_of:
            n = `Number must be a multiple of ${t.multipleOf}`;
            break;
        case S.not_finite:
            n = "Number must be finite";
            break;
        default:
            n = e.defaultError,
                H.assertNever(t)
    }
    return {
        message: n
    }
}
    ;
let Nm = $r;
function x_(t) {
    Nm = t
}
function Fo() {
    return Nm
}
const zo = t => {
    const { data: e, path: n, errorMaps: r, issueData: i } = t
        , s = [...n, ...i.path || []]
        , o = {
            ...i,
            path: s
        };
    if (i.message !== void 0)
        return {
            ...i,
            path: s,
            message: i.message
        };
    let a = "";
    const u = r.filter(l => !!l).slice().reverse();
    for (const l of u)
        a = l(o, {
            data: e,
            defaultError: a
        }).message;
    return {
        ...i,
        path: s,
        message: a
    }
}
    , C_ = [];
function x(t, e) {
    const n = Fo()
        , r = zo({
            issueData: e,
            data: t.data,
            path: t.path,
            errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, n, n === $r ? void 0 : $r].filter(i => !!i)
        });
    t.common.issues.push(r)
}
class Re {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(e, n) {
        const r = [];
        for (const i of n) {
            if (i.status === "aborted")
                return D;
            i.status === "dirty" && e.dirty(),
                r.push(i.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
    static async mergeObjectAsync(e, n) {
        const r = [];
        for (const i of n) {
            const s = await i.key
                , o = await i.value;
            r.push({
                key: s,
                value: o
            })
        }
        return Re.mergeObjectSync(e, r)
    }
    static mergeObjectSync(e, n) {
        const r = {};
        for (const i of n) {
            const { key: s, value: o } = i;
            if (s.status === "aborted" || o.status === "aborted")
                return D;
            s.status === "dirty" && e.dirty(),
                o.status === "dirty" && e.dirty(),
                s.value !== "__proto__" && (typeof o.value < "u" || i.alwaysSet) && (r[s.value] = o.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
}
const D = Object.freeze({
    status: "aborted"
})
    , Er = t => ({
        status: "dirty",
        value: t
    })
    , je = t => ({
        status: "valid",
        value: t
    })
    , ol = t => t.status === "aborted"
    , al = t => t.status === "dirty"
    , Qi = t => t.status === "valid"
    , Ki = t => typeof Promise < "u" && t instanceof Promise;
function $o(t, e, n, r) {
    if (typeof e == "function" ? t !== e || !r : !e.has(t))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return e.get(t)
}
function Pm(t, e, n, r, i) {
    if (typeof e == "function" ? t !== e || !i : !e.has(t))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return e.set(t, n),
        n
}
var R;
(function (t) {
    t.errToObj = e => typeof e == "string" ? {
        message: e
    } : e || {},
        t.toString = e => typeof e == "string" ? e : e == null ? void 0 : e.message
}
)(R || (R = {}));
var yi, vi;
class Rt {
    constructor(e, n, r, i) {
        this._cachedPath = [],
            this.parent = e,
            this.data = n,
            this._path = r,
            this._key = i
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
    }
}
const ld = (t, e) => {
    if (Qi(e))
        return {
            success: !0,
            data: e.value
        };
    if (!t.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const n = new Ke(t.common.issues);
            return this._error = n,
                this._error
        }
    }
}
    ;
function F(t) {
    if (!t)
        return {};
    const { errorMap: e, invalid_type_error: n, required_error: r, description: i } = t;
    if (e && (n || r))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
        errorMap: e,
        description: i
    } : {
        errorMap: (o, a) => {
            var u, l;
            const { message: c } = t;
            return o.code === "invalid_enum_value" ? {
                message: c ?? a.defaultError
            } : typeof a.data > "u" ? {
                message: (u = c ?? r) !== null && u !== void 0 ? u : a.defaultError
            } : o.code !== "invalid_type" ? {
                message: a.defaultError
            } : {
                message: (l = c ?? n) !== null && l !== void 0 ? l : a.defaultError
            }
        }
        ,
        description: i
    }
}
class U {
    constructor(e) {
        this.spa = this.safeParseAsync,
            this._def = e,
            this.parse = this.parse.bind(this),
            this.safeParse = this.safeParse.bind(this),
            this.parseAsync = this.parseAsync.bind(this),
            this.safeParseAsync = this.safeParseAsync.bind(this),
            this.spa = this.spa.bind(this),
            this.refine = this.refine.bind(this),
            this.refinement = this.refinement.bind(this),
            this.superRefine = this.superRefine.bind(this),
            this.optional = this.optional.bind(this),
            this.nullable = this.nullable.bind(this),
            this.nullish = this.nullish.bind(this),
            this.array = this.array.bind(this),
            this.promise = this.promise.bind(this),
            this.or = this.or.bind(this),
            this.and = this.and.bind(this),
            this.transform = this.transform.bind(this),
            this.brand = this.brand.bind(this),
            this.default = this.default.bind(this),
            this.catch = this.catch.bind(this),
            this.describe = this.describe.bind(this),
            this.pipe = this.pipe.bind(this),
            this.readonly = this.readonly.bind(this),
            this.isNullable = this.isNullable.bind(this),
            this.isOptional = this.isOptional.bind(this)
    }
    get description() {
        return this._def.description
    }
    _getType(e) {
        return ln(e.data)
    }
    _getOrReturnCtx(e, n) {
        return n || {
            common: e.parent.common,
            data: e.data,
            parsedType: ln(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new Re,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: ln(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        const n = this._parse(e);
        if (Ki(n))
            throw new Error("Synchronous parse encountered promise.");
        return n
    }
    _parseAsync(e) {
        const n = this._parse(e);
        return Promise.resolve(n)
    }
    parse(e, n) {
        const r = this.safeParse(e, n);
        if (r.success)
            return r.data;
        throw r.error
    }
    safeParse(e, n) {
        var r;
        const i = {
            common: {
                issues: [],
                async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
                contextualErrorMap: n == null ? void 0 : n.errorMap
            },
            path: (n == null ? void 0 : n.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: ln(e)
        }
            , s = this._parseSync({
                data: e,
                path: i.path,
                parent: i
            });
        return ld(i, s)
    }
    async parseAsync(e, n) {
        const r = await this.safeParseAsync(e, n);
        if (r.success)
            return r.data;
        throw r.error
    }
    async safeParseAsync(e, n) {
        const r = {
            common: {
                issues: [],
                contextualErrorMap: n == null ? void 0 : n.errorMap,
                async: !0
            },
            path: (n == null ? void 0 : n.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: ln(e)
        }
            , i = this._parse({
                data: e,
                path: r.path,
                parent: r
            })
            , s = await (Ki(i) ? i : Promise.resolve(i));
        return ld(r, s)
    }
    refine(e, n) {
        const r = i => typeof n == "string" || typeof n > "u" ? {
            message: n
        } : typeof n == "function" ? n(i) : n;
        return this._refinement((i, s) => {
            const o = e(i)
                , a = () => s.addIssue({
                    code: S.custom,
                    ...r(i)
                });
            return typeof Promise < "u" && o instanceof Promise ? o.then(u => u ? !0 : (a(),
                !1)) : o ? !0 : (a(),
                    !1)
        }
        )
    }
    refinement(e, n) {
        return this._refinement((r, i) => e(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n),
            !1))
    }
    _refinement(e) {
        return new kt({
            schema: this,
            typeName: A.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    optional() {
        return Pt.create(this, this._def)
    }
    nullable() {
        return bn.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return wt.create(this, this._def)
    }
    promise() {
        return Br.create(this, this._def)
    }
    or(e) {
        return Ji.create([this, e], this._def)
    }
    and(e) {
        return es.create(this, e, this._def)
    }
    transform(e) {
        return new kt({
            ...F(this._def),
            schema: this,
            typeName: A.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        })
    }
    default(e) {
        const n = typeof e == "function" ? e : () => e;
        return new ss({
            ...F(this._def),
            innerType: this,
            defaultValue: n,
            typeName: A.ZodDefault
        })
    }
    brand() {
        return new Pc({
            typeName: A.ZodBranded,
            type: this,
            ...F(this._def)
        })
    }
    catch(e) {
        const n = typeof e == "function" ? e : () => e;
        return new os({
            ...F(this._def),
            innerType: this,
            catchValue: n,
            typeName: A.ZodCatch
        })
    }
    describe(e) {
        const n = this.constructor;
        return new n({
            ...this._def,
            description: e
        })
    }
    pipe(e) {
        return ps.create(this, e)
    }
    readonly() {
        return as.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const b_ = /^c[^\s-]{8,}$/i
    , T_ = /^[0-9a-z]+$/
    , O_ = /^[0-9A-HJKMNP-TV-Z]{26}$/
    , N_ = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
    , P_ = /^[a-z0-9_-]{21}$/i
    , R_ = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
    , I_ = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
    , A_ = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let tu;
const D_ = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
    , L_ = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/
    , M_ = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
    , Rm = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
    , j_ = new RegExp(`^${Rm}$`);
function Im(t) {
    let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`),
        e
}
function F_(t) {
    return new RegExp(`^${Im(t)}$`)
}
function Am(t) {
    let e = `${Rm}T${Im(t)}`;
    const n = [];
    return n.push(t.local ? "Z?" : "Z"),
        t.offset && n.push("([+-]\\d{2}:?\\d{2})"),
        e = `${e}(${n.join("|")})`,
        new RegExp(`^${e}$`)
}
function z_(t, e) {
    return !!((e === "v4" || !e) && D_.test(t) || (e === "v6" || !e) && L_.test(t))
}
class yt extends U {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== T.string) {
            const s = this._getOrReturnCtx(e);
            return x(s, {
                code: S.invalid_type,
                expected: T.string,
                received: s.parsedType
            }),
                D
        }
        const r = new Re;
        let i;
        for (const s of this._def.checks)
            if (s.kind === "min")
                e.data.length < s.value && (i = this._getOrReturnCtx(e, i),
                    x(i, {
                        code: S.too_small,
                        minimum: s.value,
                        type: "string",
                        inclusive: !0,
                        exact: !1,
                        message: s.message
                    }),
                    r.dirty());
            else if (s.kind === "max")
                e.data.length > s.value && (i = this._getOrReturnCtx(e, i),
                    x(i, {
                        code: S.too_big,
                        maximum: s.value,
                        type: "string",
                        inclusive: !0,
                        exact: !1,
                        message: s.message
                    }),
                    r.dirty());
            else if (s.kind === "length") {
                const o = e.data.length > s.value
                    , a = e.data.length < s.value;
                (o || a) && (i = this._getOrReturnCtx(e, i),
                    o ? x(i, {
                        code: S.too_big,
                        maximum: s.value,
                        type: "string",
                        inclusive: !0,
                        exact: !0,
                        message: s.message
                    }) : a && x(i, {
                        code: S.too_small,
                        minimum: s.value,
                        type: "string",
                        inclusive: !0,
                        exact: !0,
                        message: s.message
                    }),
                    r.dirty())
            } else if (s.kind === "email")
                I_.test(e.data) || (i = this._getOrReturnCtx(e, i),
                    x(i, {
                        validation: "email",
                        code: S.invalid_string,
                        message: s.message
                    }),
                    r.dirty());
            else if (s.kind === "emoji")
                tu || (tu = new RegExp(A_, "u")),
                    tu.test(e.data) || (i = this._getOrReturnCtx(e, i),
                        x(i, {
                            validation: "emoji",
                            code: S.invalid_string,
                            message: s.message
                        }),
                        r.dirty());
            else if (s.kind === "uuid")
                N_.test(e.data) || (i = this._getOrReturnCtx(e, i),
                    x(i, {
                        validation: "uuid",
                        code: S.invalid_string,
                        message: s.message
                    }),
                    r.dirty());
            else if (s.kind === "nanoid")
                P_.test(e.data) || (i = this._getOrReturnCtx(e, i),
                    x(i, {
                        validation: "nanoid",
                        code: S.invalid_string,
                        message: s.message
                    }),
                    r.dirty());
            else if (s.kind === "cuid")
                b_.test(e.data) || (i = this._getOrReturnCtx(e, i),
                    x(i, {
                        validation: "cuid",
                        code: S.invalid_string,
                        message: s.message
                    }),
                    r.dirty());
            else if (s.kind === "cuid2")
                T_.test(e.data) || (i = this._getOrReturnCtx(e, i),
                    x(i, {
                        validation: "cuid2",
                        code: S.invalid_string,
                        message: s.message
                    }),
                    r.dirty());
            else if (s.kind === "ulid")
                O_.test(e.data) || (i = this._getOrReturnCtx(e, i),
                    x(i, {
                        validation: "ulid",
                        code: S.invalid_string,
                        message: s.message
                    }),
                    r.dirty());
            else if (s.kind === "url")
                try {
                    new URL(e.data)
                } catch {
                    i = this._getOrReturnCtx(e, i),
                        x(i, {
                            validation: "url",
                            code: S.invalid_string,
                            message: s.message
                        }),
                        r.dirty()
                }
            else
                s.kind === "regex" ? (s.regex.lastIndex = 0,
                    s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i),
                        x(i, {
                            validation: "regex",
                            code: S.invalid_string,
                            message: s.message
                        }),
                        r.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i),
                            x(i, {
                                code: S.invalid_string,
                                validation: {
                                    includes: s.value,
                                    position: s.position
                                },
                                message: s.message
                            }),
                            r.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i),
                                x(i, {
                                    code: S.invalid_string,
                                    validation: {
                                        startsWith: s.value
                                    },
                                    message: s.message
                                }),
                                r.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i),
                                    x(i, {
                                        code: S.invalid_string,
                                        validation: {
                                            endsWith: s.value
                                        },
                                        message: s.message
                                    }),
                                    r.dirty()) : s.kind === "datetime" ? Am(s).test(e.data) || (i = this._getOrReturnCtx(e, i),
                                        x(i, {
                                            code: S.invalid_string,
                                            validation: "datetime",
                                            message: s.message
                                        }),
                                        r.dirty()) : s.kind === "date" ? j_.test(e.data) || (i = this._getOrReturnCtx(e, i),
                                            x(i, {
                                                code: S.invalid_string,
                                                validation: "date",
                                                message: s.message
                                            }),
                                            r.dirty()) : s.kind === "time" ? F_(s).test(e.data) || (i = this._getOrReturnCtx(e, i),
                                                x(i, {
                                                    code: S.invalid_string,
                                                    validation: "time",
                                                    message: s.message
                                                }),
                                                r.dirty()) : s.kind === "duration" ? R_.test(e.data) || (i = this._getOrReturnCtx(e, i),
                                                    x(i, {
                                                        validation: "duration",
                                                        code: S.invalid_string,
                                                        message: s.message
                                                    }),
                                                    r.dirty()) : s.kind === "ip" ? z_(e.data, s.version) || (i = this._getOrReturnCtx(e, i),
                                                        x(i, {
                                                            validation: "ip",
                                                            code: S.invalid_string,
                                                            message: s.message
                                                        }),
                                                        r.dirty()) : s.kind === "base64" ? M_.test(e.data) || (i = this._getOrReturnCtx(e, i),
                                                            x(i, {
                                                                validation: "base64",
                                                                code: S.invalid_string,
                                                                message: s.message
                                                            }),
                                                            r.dirty()) : H.assertNever(s);
        return {
            status: r.value,
            value: e.data
        }
    }
    _regex(e, n, r) {
        return this.refinement(i => e.test(i), {
            validation: n,
            code: S.invalid_string,
            ...R.errToObj(r)
        })
    }
    _addCheck(e) {
        return new yt({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...R.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...R.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...R.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...R.errToObj(e)
        })
    }
    nanoid(e) {
        return this._addCheck({
            kind: "nanoid",
            ...R.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...R.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...R.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...R.errToObj(e)
        })
    }
    base64(e) {
        return this._addCheck({
            kind: "base64",
            ...R.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...R.errToObj(e)
        })
    }
    datetime(e) {
        var n, r;
        return typeof e == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
            offset: (n = e == null ? void 0 : e.offset) !== null && n !== void 0 ? n : !1,
            local: (r = e == null ? void 0 : e.local) !== null && r !== void 0 ? r : !1,
            ...R.errToObj(e == null ? void 0 : e.message)
        })
    }
    date(e) {
        return this._addCheck({
            kind: "date",
            message: e
        })
    }
    time(e) {
        return typeof e == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: e
        }) : this._addCheck({
            kind: "time",
            precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
            ...R.errToObj(e == null ? void 0 : e.message)
        })
    }
    duration(e) {
        return this._addCheck({
            kind: "duration",
            ...R.errToObj(e)
        })
    }
    regex(e, n) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...R.errToObj(n)
        })
    }
    includes(e, n) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: n == null ? void 0 : n.position,
            ...R.errToObj(n == null ? void 0 : n.message)
        })
    }
    startsWith(e, n) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...R.errToObj(n)
        })
    }
    endsWith(e, n) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...R.errToObj(n)
        })
    }
    min(e, n) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...R.errToObj(n)
        })
    }
    max(e, n) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...R.errToObj(n)
        })
    }
    length(e, n) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...R.errToObj(n)
        })
    }
    nonempty(e) {
        return this.min(1, R.errToObj(e))
    }
    trim() {
        return new yt({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new yt({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new yt({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e => e.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(e => e.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(e => e.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(e => e.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(e => e.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(e => e.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(e => e.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(e => e.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(e => e.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(e => e.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(e => e.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(e => e.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(e => e.kind === "ip")
    }
    get isBase64() {
        return !!this._def.checks.find(e => e.kind === "base64")
    }
    get minLength() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
}
yt.create = t => {
    var e;
    return new yt({
        checks: [],
        typeName: A.ZodString,
        coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
        ...F(t)
    })
}
    ;
function $_(t, e) {
    const n = (t.toString().split(".")[1] || "").length
        , r = (e.toString().split(".")[1] || "").length
        , i = n > r ? n : r
        , s = parseInt(t.toFixed(i).replace(".", ""))
        , o = parseInt(e.toFixed(i).replace(".", ""));
    return s % o / Math.pow(10, i)
}
class kn extends U {
    constructor() {
        super(...arguments),
            this.min = this.gte,
            this.max = this.lte,
            this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)),
            this._getType(e) !== T.number) {
            const s = this._getOrReturnCtx(e);
            return x(s, {
                code: S.invalid_type,
                expected: T.number,
                received: s.parsedType
            }),
                D
        }
        let r;
        const i = new Re;
        for (const s of this._def.checks)
            s.kind === "int" ? H.isInteger(e.data) || (r = this._getOrReturnCtx(e, r),
                x(r, {
                    code: S.invalid_type,
                    expected: "integer",
                    received: "float",
                    message: s.message
                }),
                i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r),
                    x(r, {
                        code: S.too_small,
                        minimum: s.value,
                        type: "number",
                        inclusive: s.inclusive,
                        exact: !1,
                        message: s.message
                    }),
                    i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r),
                        x(r, {
                            code: S.too_big,
                            maximum: s.value,
                            type: "number",
                            inclusive: s.inclusive,
                            exact: !1,
                            message: s.message
                        }),
                        i.dirty()) : s.kind === "multipleOf" ? $_(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r),
                            x(r, {
                                code: S.not_multiple_of,
                                multipleOf: s.value,
                                message: s.message
                            }),
                            i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r),
                                x(r, {
                                    code: S.not_finite,
                                    message: s.message
                                }),
                                i.dirty()) : H.assertNever(s);
        return {
            status: i.value,
            value: e.data
        }
    }
    gte(e, n) {
        return this.setLimit("min", e, !0, R.toString(n))
    }
    gt(e, n) {
        return this.setLimit("min", e, !1, R.toString(n))
    }
    lte(e, n) {
        return this.setLimit("max", e, !0, R.toString(n))
    }
    lt(e, n) {
        return this.setLimit("max", e, !1, R.toString(n))
    }
    setLimit(e, n, r, i) {
        return new kn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: n,
                inclusive: r,
                message: R.toString(i)
            }]
        })
    }
    _addCheck(e) {
        return new kn({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: R.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: R.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: R.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: R.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: R.toString(e)
        })
    }
    multipleOf(e, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: R.toString(n)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: R.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: R.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: R.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && H.isInteger(e.value))
    }
    get isFinite() {
        let e = null
            , n = null;
        for (const r of this._def.checks) {
            if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
                return !0;
            r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value)
        }
        return Number.isFinite(n) && Number.isFinite(e)
    }
}
kn.create = t => new kn({
    checks: [],
    typeName: A.ZodNumber,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...F(t)
});
class xn extends U {
    constructor() {
        super(...arguments),
            this.min = this.gte,
            this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce && (e.data = BigInt(e.data)),
            this._getType(e) !== T.bigint) {
            const s = this._getOrReturnCtx(e);
            return x(s, {
                code: S.invalid_type,
                expected: T.bigint,
                received: s.parsedType
            }),
                D
        }
        let r;
        const i = new Re;
        for (const s of this._def.checks)
            s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r),
                x(r, {
                    code: S.too_small,
                    type: "bigint",
                    minimum: s.value,
                    inclusive: s.inclusive,
                    message: s.message
                }),
                i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r),
                    x(r, {
                        code: S.too_big,
                        type: "bigint",
                        maximum: s.value,
                        inclusive: s.inclusive,
                        message: s.message
                    }),
                    i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r),
                        x(r, {
                            code: S.not_multiple_of,
                            multipleOf: s.value,
                            message: s.message
                        }),
                        i.dirty()) : H.assertNever(s);
        return {
            status: i.value,
            value: e.data
        }
    }
    gte(e, n) {
        return this.setLimit("min", e, !0, R.toString(n))
    }
    gt(e, n) {
        return this.setLimit("min", e, !1, R.toString(n))
    }
    lte(e, n) {
        return this.setLimit("max", e, !0, R.toString(n))
    }
    lt(e, n) {
        return this.setLimit("max", e, !1, R.toString(n))
    }
    setLimit(e, n, r, i) {
        return new xn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: n,
                inclusive: r,
                message: R.toString(i)
            }]
        })
    }
    _addCheck(e) {
        return new xn({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: R.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: R.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: R.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: R.toString(e)
        })
    }
    multipleOf(e, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: R.toString(n)
        })
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
}
xn.create = t => {
    var e;
    return new xn({
        checks: [],
        typeName: A.ZodBigInt,
        coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
        ...F(t)
    })
}
    ;
class Gi extends U {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== T.boolean) {
            const r = this._getOrReturnCtx(e);
            return x(r, {
                code: S.invalid_type,
                expected: T.boolean,
                received: r.parsedType
            }),
                D
        }
        return je(e.data)
    }
}
Gi.create = t => new Gi({
    typeName: A.ZodBoolean,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...F(t)
});
class Qn extends U {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== T.date) {
            const s = this._getOrReturnCtx(e);
            return x(s, {
                code: S.invalid_type,
                expected: T.date,
                received: s.parsedType
            }),
                D
        }
        if (isNaN(e.data.getTime())) {
            const s = this._getOrReturnCtx(e);
            return x(s, {
                code: S.invalid_date
            }),
                D
        }
        const r = new Re;
        let i;
        for (const s of this._def.checks)
            s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i),
                x(i, {
                    code: S.too_small,
                    message: s.message,
                    inclusive: !0,
                    exact: !1,
                    minimum: s.value,
                    type: "date"
                }),
                r.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i),
                    x(i, {
                        code: S.too_big,
                        message: s.message,
                        inclusive: !0,
                        exact: !1,
                        maximum: s.value,
                        type: "date"
                    }),
                    r.dirty()) : H.assertNever(s);
        return {
            status: r.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(e) {
        return new Qn({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    min(e, n) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: R.toString(n)
        })
    }
    max(e, n) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: R.toString(n)
        })
    }
    get minDate() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e != null ? new Date(e) : null
    }
    get maxDate() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e != null ? new Date(e) : null
    }
}
Qn.create = t => new Qn({
    checks: [],
    coerce: (t == null ? void 0 : t.coerce) || !1,
    typeName: A.ZodDate,
    ...F(t)
});
class Uo extends U {
    _parse(e) {
        if (this._getType(e) !== T.symbol) {
            const r = this._getOrReturnCtx(e);
            return x(r, {
                code: S.invalid_type,
                expected: T.symbol,
                received: r.parsedType
            }),
                D
        }
        return je(e.data)
    }
}
Uo.create = t => new Uo({
    typeName: A.ZodSymbol,
    ...F(t)
});
class Yi extends U {
    _parse(e) {
        if (this._getType(e) !== T.undefined) {
            const r = this._getOrReturnCtx(e);
            return x(r, {
                code: S.invalid_type,
                expected: T.undefined,
                received: r.parsedType
            }),
                D
        }
        return je(e.data)
    }
}
Yi.create = t => new Yi({
    typeName: A.ZodUndefined,
    ...F(t)
});
class Xi extends U {
    _parse(e) {
        if (this._getType(e) !== T.null) {
            const r = this._getOrReturnCtx(e);
            return x(r, {
                code: S.invalid_type,
                expected: T.null,
                received: r.parsedType
            }),
                D
        }
        return je(e.data)
    }
}
Xi.create = t => new Xi({
    typeName: A.ZodNull,
    ...F(t)
});
class Ur extends U {
    constructor() {
        super(...arguments),
            this._any = !0
    }
    _parse(e) {
        return je(e.data)
    }
}
Ur.create = t => new Ur({
    typeName: A.ZodAny,
    ...F(t)
});
class Un extends U {
    constructor() {
        super(...arguments),
            this._unknown = !0
    }
    _parse(e) {
        return je(e.data)
    }
}
Un.create = t => new Un({
    typeName: A.ZodUnknown,
    ...F(t)
});
class Gt extends U {
    _parse(e) {
        const n = this._getOrReturnCtx(e);
        return x(n, {
            code: S.invalid_type,
            expected: T.never,
            received: n.parsedType
        }),
            D
    }
}
Gt.create = t => new Gt({
    typeName: A.ZodNever,
    ...F(t)
});
class Bo extends U {
    _parse(e) {
        if (this._getType(e) !== T.undefined) {
            const r = this._getOrReturnCtx(e);
            return x(r, {
                code: S.invalid_type,
                expected: T.void,
                received: r.parsedType
            }),
                D
        }
        return je(e.data)
    }
}
Bo.create = t => new Bo({
    typeName: A.ZodVoid,
    ...F(t)
});
class wt extends U {
    _parse(e) {
        const { ctx: n, status: r } = this._processInputParams(e)
            , i = this._def;
        if (n.parsedType !== T.array)
            return x(n, {
                code: S.invalid_type,
                expected: T.array,
                received: n.parsedType
            }),
                D;
        if (i.exactLength !== null) {
            const o = n.data.length > i.exactLength.value
                , a = n.data.length < i.exactLength.value;
            (o || a) && (x(n, {
                code: o ? S.too_big : S.too_small,
                minimum: a ? i.exactLength.value : void 0,
                maximum: o ? i.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: i.exactLength.message
            }),
                r.dirty())
        }
        if (i.minLength !== null && n.data.length < i.minLength.value && (x(n, {
            code: S.too_small,
            minimum: i.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: i.minLength.message
        }),
            r.dirty()),
            i.maxLength !== null && n.data.length > i.maxLength.value && (x(n, {
                code: S.too_big,
                maximum: i.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: i.maxLength.message
            }),
                r.dirty()),
            n.common.async)
            return Promise.all([...n.data].map((o, a) => i.type._parseAsync(new Rt(n, o, n.path, a)))).then(o => Re.mergeArray(r, o));
        const s = [...n.data].map((o, a) => i.type._parseSync(new Rt(n, o, n.path, a)));
        return Re.mergeArray(r, s)
    }
    get element() {
        return this._def.type
    }
    min(e, n) {
        return new wt({
            ...this._def,
            minLength: {
                value: e,
                message: R.toString(n)
            }
        })
    }
    max(e, n) {
        return new wt({
            ...this._def,
            maxLength: {
                value: e,
                message: R.toString(n)
            }
        })
    }
    length(e, n) {
        return new wt({
            ...this._def,
            exactLength: {
                value: e,
                message: R.toString(n)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
wt.create = (t, e) => new wt({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: A.ZodArray,
    ...F(e)
});
function lr(t) {
    if (t instanceof oe) {
        const e = {};
        for (const n in t.shape) {
            const r = t.shape[n];
            e[n] = Pt.create(lr(r))
        }
        return new oe({
            ...t._def,
            shape: () => e
        })
    } else
        return t instanceof wt ? new wt({
            ...t._def,
            type: lr(t.element)
        }) : t instanceof Pt ? Pt.create(lr(t.unwrap())) : t instanceof bn ? bn.create(lr(t.unwrap())) : t instanceof It ? It.create(t.items.map(e => lr(e))) : t
}
class oe extends U {
    constructor() {
        super(...arguments),
            this._cached = null,
            this.nonstrict = this.passthrough,
            this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const e = this._def.shape()
            , n = H.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: n
        }
    }
    _parse(e) {
        if (this._getType(e) !== T.object) {
            const l = this._getOrReturnCtx(e);
            return x(l, {
                code: S.invalid_type,
                expected: T.object,
                received: l.parsedType
            }),
                D
        }
        const { status: r, ctx: i } = this._processInputParams(e)
            , { shape: s, keys: o } = this._getCached()
            , a = [];
        if (!(this._def.catchall instanceof Gt && this._def.unknownKeys === "strip"))
            for (const l in i.data)
                o.includes(l) || a.push(l);
        const u = [];
        for (const l of o) {
            const c = s[l]
                , f = i.data[l];
            u.push({
                key: {
                    status: "valid",
                    value: l
                },
                value: c._parse(new Rt(i, f, i.path, l)),
                alwaysSet: l in i.data
            })
        }
        if (this._def.catchall instanceof Gt) {
            const l = this._def.unknownKeys;
            if (l === "passthrough")
                for (const c of a)
                    u.push({
                        key: {
                            status: "valid",
                            value: c
                        },
                        value: {
                            status: "valid",
                            value: i.data[c]
                        }
                    });
            else if (l === "strict")
                a.length > 0 && (x(i, {
                    code: S.unrecognized_keys,
                    keys: a
                }),
                    r.dirty());
            else if (l !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const l = this._def.catchall;
            for (const c of a) {
                const f = i.data[c];
                u.push({
                    key: {
                        status: "valid",
                        value: c
                    },
                    value: l._parse(new Rt(i, f, i.path, c)),
                    alwaysSet: c in i.data
                })
            }
        }
        return i.common.async ? Promise.resolve().then(async () => {
            const l = [];
            for (const c of u) {
                const f = await c.key
                    , p = await c.value;
                l.push({
                    key: f,
                    value: p,
                    alwaysSet: c.alwaysSet
                })
            }
            return l
        }
        ).then(l => Re.mergeObjectSync(r, l)) : Re.mergeObjectSync(r, u)
    }
    get shape() {
        return this._def.shape()
    }
    strict(e) {
        return R.errToObj,
            new oe({
                ...this._def,
                unknownKeys: "strict",
                ...e !== void 0 ? {
                    errorMap: (n, r) => {
                        var i, s, o, a;
                        const u = (o = (s = (i = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(i, n, r).message) !== null && o !== void 0 ? o : r.defaultError;
                        return n.code === "unrecognized_keys" ? {
                            message: (a = R.errToObj(e).message) !== null && a !== void 0 ? a : u
                        } : {
                            message: u
                        }
                    }
                } : {}
            })
    }
    strip() {
        return new oe({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new oe({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(e) {
        return new oe({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...e
            })
        })
    }
    merge(e) {
        return new oe({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...e._def.shape()
            }),
            typeName: A.ZodObject
        })
    }
    setKey(e, n) {
        return this.augment({
            [e]: n
        })
    }
    catchall(e) {
        return new oe({
            ...this._def,
            catchall: e
        })
    }
    pick(e) {
        const n = {};
        return H.objectKeys(e).forEach(r => {
            e[r] && this.shape[r] && (n[r] = this.shape[r])
        }
        ),
            new oe({
                ...this._def,
                shape: () => n
            })
    }
    omit(e) {
        const n = {};
        return H.objectKeys(this.shape).forEach(r => {
            e[r] || (n[r] = this.shape[r])
        }
        ),
            new oe({
                ...this._def,
                shape: () => n
            })
    }
    deepPartial() {
        return lr(this)
    }
    partial(e) {
        const n = {};
        return H.objectKeys(this.shape).forEach(r => {
            const i = this.shape[r];
            e && !e[r] ? n[r] = i : n[r] = i.optional()
        }
        ),
            new oe({
                ...this._def,
                shape: () => n
            })
    }
    required(e) {
        const n = {};
        return H.objectKeys(this.shape).forEach(r => {
            if (e && !e[r])
                n[r] = this.shape[r];
            else {
                let s = this.shape[r];
                for (; s instanceof Pt;)
                    s = s._def.innerType;
                n[r] = s
            }
        }
        ),
            new oe({
                ...this._def,
                shape: () => n
            })
    }
    keyof() {
        return Dm(H.objectKeys(this.shape))
    }
}
oe.create = (t, e) => new oe({
    shape: () => t,
    unknownKeys: "strip",
    catchall: Gt.create(),
    typeName: A.ZodObject,
    ...F(e)
});
oe.strictCreate = (t, e) => new oe({
    shape: () => t,
    unknownKeys: "strict",
    catchall: Gt.create(),
    typeName: A.ZodObject,
    ...F(e)
});
oe.lazycreate = (t, e) => new oe({
    shape: t,
    unknownKeys: "strip",
    catchall: Gt.create(),
    typeName: A.ZodObject,
    ...F(e)
});
class Ji extends U {
    _parse(e) {
        const { ctx: n } = this._processInputParams(e)
            , r = this._def.options;
        function i(s) {
            for (const a of s)
                if (a.result.status === "valid")
                    return a.result;
            for (const a of s)
                if (a.result.status === "dirty")
                    return n.common.issues.push(...a.ctx.common.issues),
                        a.result;
            const o = s.map(a => new Ke(a.ctx.common.issues));
            return x(n, {
                code: S.invalid_union,
                unionErrors: o
            }),
                D
        }
        if (n.common.async)
            return Promise.all(r.map(async s => {
                const o = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await s._parseAsync({
                        data: n.data,
                        path: n.path,
                        parent: o
                    }),
                    ctx: o
                }
            }
            )).then(i);
        {
            let s;
            const o = [];
            for (const u of r) {
                const l = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                }
                    , c = u._parseSync({
                        data: n.data,
                        path: n.path,
                        parent: l
                    });
                if (c.status === "valid")
                    return c;
                c.status === "dirty" && !s && (s = {
                    result: c,
                    ctx: l
                }),
                    l.common.issues.length && o.push(l.common.issues)
            }
            if (s)
                return n.common.issues.push(...s.ctx.common.issues),
                    s.result;
            const a = o.map(u => new Ke(u));
            return x(n, {
                code: S.invalid_union,
                unionErrors: a
            }),
                D
        }
    }
    get options() {
        return this._def.options
    }
}
Ji.create = (t, e) => new Ji({
    options: t,
    typeName: A.ZodUnion,
    ...F(e)
});
const Lt = t => t instanceof ns ? Lt(t.schema) : t instanceof kt ? Lt(t.innerType()) : t instanceof rs ? [t.value] : t instanceof Cn ? t.options : t instanceof is ? H.objectValues(t.enum) : t instanceof ss ? Lt(t._def.innerType) : t instanceof Yi ? [void 0] : t instanceof Xi ? [null] : t instanceof Pt ? [void 0, ...Lt(t.unwrap())] : t instanceof bn ? [null, ...Lt(t.unwrap())] : t instanceof Pc || t instanceof as ? Lt(t.unwrap()) : t instanceof os ? Lt(t._def.innerType) : [];
class ma extends U {
    _parse(e) {
        const { ctx: n } = this._processInputParams(e);
        if (n.parsedType !== T.object)
            return x(n, {
                code: S.invalid_type,
                expected: T.object,
                received: n.parsedType
            }),
                D;
        const r = this.discriminator
            , i = n.data[r]
            , s = this.optionsMap.get(i);
        return s ? n.common.async ? s._parseAsync({
            data: n.data,
            path: n.path,
            parent: n
        }) : s._parseSync({
            data: n.data,
            path: n.path,
            parent: n
        }) : (x(n, {
            code: S.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [r]
        }),
            D)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(e, n, r) {
        const i = new Map;
        for (const s of n) {
            const o = Lt(s.shape[e]);
            if (!o.length)
                throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const a of o) {
                if (i.has(a))
                    throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
                i.set(a, s)
            }
        }
        return new ma({
            typeName: A.ZodDiscriminatedUnion,
            discriminator: e,
            options: n,
            optionsMap: i,
            ...F(r)
        })
    }
}
function ul(t, e) {
    const n = ln(t)
        , r = ln(e);
    if (t === e)
        return {
            valid: !0,
            data: t
        };
    if (n === T.object && r === T.object) {
        const i = H.objectKeys(e)
            , s = H.objectKeys(t).filter(a => i.indexOf(a) !== -1)
            , o = {
                ...t,
                ...e
            };
        for (const a of s) {
            const u = ul(t[a], e[a]);
            if (!u.valid)
                return {
                    valid: !1
                };
            o[a] = u.data
        }
        return {
            valid: !0,
            data: o
        }
    } else if (n === T.array && r === T.array) {
        if (t.length !== e.length)
            return {
                valid: !1
            };
        const i = [];
        for (let s = 0; s < t.length; s++) {
            const o = t[s]
                , a = e[s]
                , u = ul(o, a);
            if (!u.valid)
                return {
                    valid: !1
                };
            i.push(u.data)
        }
        return {
            valid: !0,
            data: i
        }
    } else
        return n === T.date && r === T.date && +t == +e ? {
            valid: !0,
            data: t
        } : {
            valid: !1
        }
}
class es extends U {
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e)
            , i = (s, o) => {
                if (ol(s) || ol(o))
                    return D;
                const a = ul(s.value, o.value);
                return a.valid ? ((al(s) || al(o)) && n.dirty(),
                {
                    status: n.value,
                    value: a.data
                }) : (x(r, {
                    code: S.invalid_intersection_types
                }),
                    D)
            }
            ;
        return r.common.async ? Promise.all([this._def.left._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        })]).then(([s, o]) => i(s, o)) : i(this._def.left._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }))
    }
}
es.create = (t, e, n) => new es({
    left: t,
    right: e,
    typeName: A.ZodIntersection,
    ...F(n)
});
class It extends U {
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== T.array)
            return x(r, {
                code: S.invalid_type,
                expected: T.array,
                received: r.parsedType
            }),
                D;
        if (r.data.length < this._def.items.length)
            return x(r, {
                code: S.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
                D;
        !this._def.rest && r.data.length > this._def.items.length && (x(r, {
            code: S.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
            n.dirty());
        const s = [...r.data].map((o, a) => {
            const u = this._def.items[a] || this._def.rest;
            return u ? u._parse(new Rt(r, o, r.path, a)) : null
        }
        ).filter(o => !!o);
        return r.common.async ? Promise.all(s).then(o => Re.mergeArray(n, o)) : Re.mergeArray(n, s)
    }
    get items() {
        return this._def.items
    }
    rest(e) {
        return new It({
            ...this._def,
            rest: e
        })
    }
}
It.create = (t, e) => {
    if (!Array.isArray(t))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new It({
        items: t,
        typeName: A.ZodTuple,
        rest: null,
        ...F(e)
    })
}
    ;
class ts extends U {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== T.object)
            return x(r, {
                code: S.invalid_type,
                expected: T.object,
                received: r.parsedType
            }),
                D;
        const i = []
            , s = this._def.keyType
            , o = this._def.valueType;
        for (const a in r.data)
            i.push({
                key: s._parse(new Rt(r, a, r.path, a)),
                value: o._parse(new Rt(r, r.data[a], r.path, a)),
                alwaysSet: a in r.data
            });
        return r.common.async ? Re.mergeObjectAsync(n, i) : Re.mergeObjectSync(n, i)
    }
    get element() {
        return this._def.valueType
    }
    static create(e, n, r) {
        return n instanceof U ? new ts({
            keyType: e,
            valueType: n,
            typeName: A.ZodRecord,
            ...F(r)
        }) : new ts({
            keyType: yt.create(),
            valueType: e,
            typeName: A.ZodRecord,
            ...F(n)
        })
    }
}
class Vo extends U {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== T.map)
            return x(r, {
                code: S.invalid_type,
                expected: T.map,
                received: r.parsedType
            }),
                D;
        const i = this._def.keyType
            , s = this._def.valueType
            , o = [...r.data.entries()].map(([a, u], l) => ({
                key: i._parse(new Rt(r, a, r.path, [l, "key"])),
                value: s._parse(new Rt(r, u, r.path, [l, "value"]))
            }));
        if (r.common.async) {
            const a = new Map;
            return Promise.resolve().then(async () => {
                for (const u of o) {
                    const l = await u.key
                        , c = await u.value;
                    if (l.status === "aborted" || c.status === "aborted")
                        return D;
                    (l.status === "dirty" || c.status === "dirty") && n.dirty(),
                        a.set(l.value, c.value)
                }
                return {
                    status: n.value,
                    value: a
                }
            }
            )
        } else {
            const a = new Map;
            for (const u of o) {
                const l = u.key
                    , c = u.value;
                if (l.status === "aborted" || c.status === "aborted")
                    return D;
                (l.status === "dirty" || c.status === "dirty") && n.dirty(),
                    a.set(l.value, c.value)
            }
            return {
                status: n.value,
                value: a
            }
        }
    }
}
Vo.create = (t, e, n) => new Vo({
    valueType: e,
    keyType: t,
    typeName: A.ZodMap,
    ...F(n)
});
class Kn extends U {
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== T.set)
            return x(r, {
                code: S.invalid_type,
                expected: T.set,
                received: r.parsedType
            }),
                D;
        const i = this._def;
        i.minSize !== null && r.data.size < i.minSize.value && (x(r, {
            code: S.too_small,
            minimum: i.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: i.minSize.message
        }),
            n.dirty()),
            i.maxSize !== null && r.data.size > i.maxSize.value && (x(r, {
                code: S.too_big,
                maximum: i.maxSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: i.maxSize.message
            }),
                n.dirty());
        const s = this._def.valueType;
        function o(u) {
            const l = new Set;
            for (const c of u) {
                if (c.status === "aborted")
                    return D;
                c.status === "dirty" && n.dirty(),
                    l.add(c.value)
            }
            return {
                status: n.value,
                value: l
            }
        }
        const a = [...r.data.values()].map((u, l) => s._parse(new Rt(r, u, r.path, l)));
        return r.common.async ? Promise.all(a).then(u => o(u)) : o(a)
    }
    min(e, n) {
        return new Kn({
            ...this._def,
            minSize: {
                value: e,
                message: R.toString(n)
            }
        })
    }
    max(e, n) {
        return new Kn({
            ...this._def,
            maxSize: {
                value: e,
                message: R.toString(n)
            }
        })
    }
    size(e, n) {
        return this.min(e, n).max(e, n)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
Kn.create = (t, e) => new Kn({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: A.ZodSet,
    ...F(e)
});
class Nr extends U {
    constructor() {
        super(...arguments),
            this.validate = this.implement
    }
    _parse(e) {
        const { ctx: n } = this._processInputParams(e);
        if (n.parsedType !== T.function)
            return x(n, {
                code: S.invalid_type,
                expected: T.function,
                received: n.parsedType
            }),
                D;
        function r(a, u) {
            return zo({
                data: a,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Fo(), $r].filter(l => !!l),
                issueData: {
                    code: S.invalid_arguments,
                    argumentsError: u
                }
            })
        }
        function i(a, u) {
            return zo({
                data: a,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Fo(), $r].filter(l => !!l),
                issueData: {
                    code: S.invalid_return_type,
                    returnTypeError: u
                }
            })
        }
        const s = {
            errorMap: n.common.contextualErrorMap
        }
            , o = n.data;
        if (this._def.returns instanceof Br) {
            const a = this;
            return je(async function (...u) {
                const l = new Ke([])
                    , c = await a._def.args.parseAsync(u, s).catch(g => {
                        throw l.addIssue(r(u, g)),
                        l
                    }
                    )
                    , f = await Reflect.apply(o, this, c);
                return await a._def.returns._def.type.parseAsync(f, s).catch(g => {
                    throw l.addIssue(i(f, g)),
                    l
                }
                )
            })
        } else {
            const a = this;
            return je(function (...u) {
                const l = a._def.args.safeParse(u, s);
                if (!l.success)
                    throw new Ke([r(u, l.error)]);
                const c = Reflect.apply(o, this, l.data)
                    , f = a._def.returns.safeParse(c, s);
                if (!f.success)
                    throw new Ke([i(c, f.error)]);
                return f.data
            })
        }
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...e) {
        return new Nr({
            ...this._def,
            args: It.create(e).rest(Un.create())
        })
    }
    returns(e) {
        return new Nr({
            ...this._def,
            returns: e
        })
    }
    implement(e) {
        return this.parse(e)
    }
    strictImplement(e) {
        return this.parse(e)
    }
    static create(e, n, r) {
        return new Nr({
            args: e || It.create([]).rest(Un.create()),
            returns: n || Un.create(),
            typeName: A.ZodFunction,
            ...F(r)
        })
    }
}
class ns extends U {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        const { ctx: n } = this._processInputParams(e);
        return this._def.getter()._parse({
            data: n.data,
            path: n.path,
            parent: n
        })
    }
}
ns.create = (t, e) => new ns({
    getter: t,
    typeName: A.ZodLazy,
    ...F(e)
});
class rs extends U {
    _parse(e) {
        if (e.data !== this._def.value) {
            const n = this._getOrReturnCtx(e);
            return x(n, {
                received: n.data,
                code: S.invalid_literal,
                expected: this._def.value
            }),
                D
        }
        return {
            status: "valid",
            value: e.data
        }
    }
    get value() {
        return this._def.value
    }
}
rs.create = (t, e) => new rs({
    value: t,
    typeName: A.ZodLiteral,
    ...F(e)
});
function Dm(t, e) {
    return new Cn({
        values: t,
        typeName: A.ZodEnum,
        ...F(e)
    })
}
class Cn extends U {
    constructor() {
        super(...arguments),
            yi.set(this, void 0)
    }
    _parse(e) {
        if (typeof e.data != "string") {
            const n = this._getOrReturnCtx(e)
                , r = this._def.values;
            return x(n, {
                expected: H.joinValues(r),
                received: n.parsedType,
                code: S.invalid_type
            }),
                D
        }
        if ($o(this, yi) || Pm(this, yi, new Set(this._def.values)),
            !$o(this, yi).has(e.data)) {
            const n = this._getOrReturnCtx(e)
                , r = this._def.values;
            return x(n, {
                received: n.data,
                code: S.invalid_enum_value,
                options: r
            }),
                D
        }
        return je(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    get Values() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    get Enum() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    extract(e, n = this._def) {
        return Cn.create(e, {
            ...this._def,
            ...n
        })
    }
    exclude(e, n = this._def) {
        return Cn.create(this.options.filter(r => !e.includes(r)), {
            ...this._def,
            ...n
        })
    }
}
yi = new WeakMap;
Cn.create = Dm;
class is extends U {
    constructor() {
        super(...arguments),
            vi.set(this, void 0)
    }
    _parse(e) {
        const n = H.getValidEnumValues(this._def.values)
            , r = this._getOrReturnCtx(e);
        if (r.parsedType !== T.string && r.parsedType !== T.number) {
            const i = H.objectValues(n);
            return x(r, {
                expected: H.joinValues(i),
                received: r.parsedType,
                code: S.invalid_type
            }),
                D
        }
        if ($o(this, vi) || Pm(this, vi, new Set(H.getValidEnumValues(this._def.values))),
            !$o(this, vi).has(e.data)) {
            const i = H.objectValues(n);
            return x(r, {
                received: r.data,
                code: S.invalid_enum_value,
                options: i
            }),
                D
        }
        return je(e.data)
    }
    get enum() {
        return this._def.values
    }
}
vi = new WeakMap;
is.create = (t, e) => new is({
    values: t,
    typeName: A.ZodNativeEnum,
    ...F(e)
});
class Br extends U {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        const { ctx: n } = this._processInputParams(e);
        if (n.parsedType !== T.promise && n.common.async === !1)
            return x(n, {
                code: S.invalid_type,
                expected: T.promise,
                received: n.parsedType
            }),
                D;
        const r = n.parsedType === T.promise ? n.data : Promise.resolve(n.data);
        return je(r.then(i => this._def.type.parseAsync(i, {
            path: n.path,
            errorMap: n.common.contextualErrorMap
        })))
    }
}
Br.create = (t, e) => new Br({
    type: t,
    typeName: A.ZodPromise,
    ...F(e)
});
class kt extends U {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === A.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e)
            , i = this._def.effect || null
            , s = {
                addIssue: o => {
                    x(r, o),
                        o.fatal ? n.abort() : n.dirty()
                }
                ,
                get path() {
                    return r.path
                }
            };
        if (s.addIssue = s.addIssue.bind(s),
            i.type === "preprocess") {
            const o = i.transform(r.data, s);
            if (r.common.async)
                return Promise.resolve(o).then(async a => {
                    if (n.value === "aborted")
                        return D;
                    const u = await this._def.schema._parseAsync({
                        data: a,
                        path: r.path,
                        parent: r
                    });
                    return u.status === "aborted" ? D : u.status === "dirty" || n.value === "dirty" ? Er(u.value) : u
                }
                );
            {
                if (n.value === "aborted")
                    return D;
                const a = this._def.schema._parseSync({
                    data: o,
                    path: r.path,
                    parent: r
                });
                return a.status === "aborted" ? D : a.status === "dirty" || n.value === "dirty" ? Er(a.value) : a
            }
        }
        if (i.type === "refinement") {
            const o = a => {
                const u = i.refinement(a, s);
                if (r.common.async)
                    return Promise.resolve(u);
                if (u instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return a
            }
                ;
            if (r.common.async === !1) {
                const a = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return a.status === "aborted" ? D : (a.status === "dirty" && n.dirty(),
                    o(a.value),
                {
                    status: n.value,
                    value: a.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(a => a.status === "aborted" ? D : (a.status === "dirty" && n.dirty(),
                    o(a.value).then(() => ({
                        status: n.value,
                        value: a.value
                    }))))
        }
        if (i.type === "transform")
            if (r.common.async === !1) {
                const o = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                if (!Qi(o))
                    return o;
                const a = i.transform(o.value, s);
                if (a instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: n.value,
                    value: a
                }
            } else
                return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(o => Qi(o) ? Promise.resolve(i.transform(o.value, s)).then(a => ({
                    status: n.value,
                    value: a
                })) : o);
        H.assertNever(i)
    }
}
kt.create = (t, e, n) => new kt({
    schema: t,
    typeName: A.ZodEffects,
    effect: e,
    ...F(n)
});
kt.createWithPreprocess = (t, e, n) => new kt({
    schema: e,
    effect: {
        type: "preprocess",
        transform: t
    },
    typeName: A.ZodEffects,
    ...F(n)
});
class Pt extends U {
    _parse(e) {
        return this._getType(e) === T.undefined ? je(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
Pt.create = (t, e) => new Pt({
    innerType: t,
    typeName: A.ZodOptional,
    ...F(e)
});
class bn extends U {
    _parse(e) {
        return this._getType(e) === T.null ? je(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
bn.create = (t, e) => new bn({
    innerType: t,
    typeName: A.ZodNullable,
    ...F(e)
});
class ss extends U {
    _parse(e) {
        const { ctx: n } = this._processInputParams(e);
        let r = n.data;
        return n.parsedType === T.undefined && (r = this._def.defaultValue()),
            this._def.innerType._parse({
                data: r,
                path: n.path,
                parent: n
            })
    }
    removeDefault() {
        return this._def.innerType
    }
}
ss.create = (t, e) => new ss({
    innerType: t,
    typeName: A.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...F(e)
});
class os extends U {
    _parse(e) {
        const { ctx: n } = this._processInputParams(e)
            , r = {
                ...n,
                common: {
                    ...n.common,
                    issues: []
                }
            }
            , i = this._def.innerType._parse({
                data: r.data,
                path: r.path,
                parent: {
                    ...r
                }
            });
        return Ki(i) ? i.then(s => ({
            status: "valid",
            value: s.status === "valid" ? s.value : this._def.catchValue({
                get error() {
                    return new Ke(r.common.issues)
                },
                input: r.data
            })
        })) : {
            status: "valid",
            value: i.status === "valid" ? i.value : this._def.catchValue({
                get error() {
                    return new Ke(r.common.issues)
                },
                input: r.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
os.create = (t, e) => new os({
    innerType: t,
    typeName: A.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...F(e)
});
class qo extends U {
    _parse(e) {
        if (this._getType(e) !== T.nan) {
            const r = this._getOrReturnCtx(e);
            return x(r, {
                code: S.invalid_type,
                expected: T.nan,
                received: r.parsedType
            }),
                D
        }
        return {
            status: "valid",
            value: e.data
        }
    }
}
qo.create = t => new qo({
    typeName: A.ZodNaN,
    ...F(t)
});
const U_ = Symbol("zod_brand");
class Pc extends U {
    _parse(e) {
        const { ctx: n } = this._processInputParams(e)
            , r = n.data;
        return this._def.type._parse({
            data: r,
            path: n.path,
            parent: n
        })
    }
    unwrap() {
        return this._def.type
    }
}
class ps extends U {
    _parse(e) {
        const { status: n, ctx: r } = this._processInputParams(e);
        if (r.common.async)
            return (async () => {
                const s = await this._def.in._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return s.status === "aborted" ? D : s.status === "dirty" ? (n.dirty(),
                    Er(s.value)) : this._def.out._parseAsync({
                        data: s.value,
                        path: r.path,
                        parent: r
                    })
            }
            )();
        {
            const i = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return i.status === "aborted" ? D : i.status === "dirty" ? (n.dirty(),
            {
                status: "dirty",
                value: i.value
            }) : this._def.out._parseSync({
                data: i.value,
                path: r.path,
                parent: r
            })
        }
    }
    static create(e, n) {
        return new ps({
            in: e,
            out: n,
            typeName: A.ZodPipeline
        })
    }
}
class as extends U {
    _parse(e) {
        const n = this._def.innerType._parse(e)
            , r = i => (Qi(i) && (i.value = Object.freeze(i.value)),
                i);
        return Ki(n) ? n.then(i => r(i)) : r(n)
    }
    unwrap() {
        return this._def.innerType
    }
}
as.create = (t, e) => new as({
    innerType: t,
    typeName: A.ZodReadonly,
    ...F(e)
});
function Lm(t, e = {}, n) {
    return t ? Ur.create().superRefine((r, i) => {
        var s, o;
        if (!t(r)) {
            const a = typeof e == "function" ? e(r) : typeof e == "string" ? {
                message: e
            } : e
                , u = (o = (s = a.fatal) !== null && s !== void 0 ? s : n) !== null && o !== void 0 ? o : !0
                , l = typeof a == "string" ? {
                    message: a
                } : a;
            i.addIssue({
                code: "custom",
                ...l,
                fatal: u
            })
        }
    }
    ) : Ur.create()
}
const B_ = {
    object: oe.lazycreate
};
var A;
(function (t) {
    t.ZodString = "ZodString",
        t.ZodNumber = "ZodNumber",
        t.ZodNaN = "ZodNaN",
        t.ZodBigInt = "ZodBigInt",
        t.ZodBoolean = "ZodBoolean",
        t.ZodDate = "ZodDate",
        t.ZodSymbol = "ZodSymbol",
        t.ZodUndefined = "ZodUndefined",
        t.ZodNull = "ZodNull",
        t.ZodAny = "ZodAny",
        t.ZodUnknown = "ZodUnknown",
        t.ZodNever = "ZodNever",
        t.ZodVoid = "ZodVoid",
        t.ZodArray = "ZodArray",
        t.ZodObject = "ZodObject",
        t.ZodUnion = "ZodUnion",
        t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
        t.ZodIntersection = "ZodIntersection",
        t.ZodTuple = "ZodTuple",
        t.ZodRecord = "ZodRecord",
        t.ZodMap = "ZodMap",
        t.ZodSet = "ZodSet",
        t.ZodFunction = "ZodFunction",
        t.ZodLazy = "ZodLazy",
        t.ZodLiteral = "ZodLiteral",
        t.ZodEnum = "ZodEnum",
        t.ZodEffects = "ZodEffects",
        t.ZodNativeEnum = "ZodNativeEnum",
        t.ZodOptional = "ZodOptional",
        t.ZodNullable = "ZodNullable",
        t.ZodDefault = "ZodDefault",
        t.ZodCatch = "ZodCatch",
        t.ZodPromise = "ZodPromise",
        t.ZodBranded = "ZodBranded",
        t.ZodPipeline = "ZodPipeline",
        t.ZodReadonly = "ZodReadonly"
}
)(A || (A = {}));
const V_ = (t, e = {
    message: `Input not instance of ${t.name}`
}) => Lm(n => n instanceof t, e)
    , Mm = yt.create
    , jm = kn.create
    , q_ = qo.create
    , H_ = xn.create
    , Fm = Gi.create
    , W_ = Qn.create
    , Z_ = Uo.create
    , Q_ = Yi.create
    , K_ = Xi.create
    , G_ = Ur.create
    , Y_ = Un.create
    , X_ = Gt.create
    , J_ = Bo.create
    , e0 = wt.create
    , t0 = oe.create
    , n0 = oe.strictCreate
    , r0 = Ji.create
    , i0 = ma.create
    , s0 = es.create
    , o0 = It.create
    , a0 = ts.create
    , u0 = Vo.create
    , l0 = Kn.create
    , c0 = Nr.create
    , f0 = ns.create
    , d0 = rs.create
    , p0 = Cn.create
    , h0 = is.create
    , m0 = Br.create
    , cd = kt.create
    , g0 = Pt.create
    , y0 = bn.create
    , v0 = kt.createWithPreprocess
    , _0 = ps.create
    , w0 = () => Mm().optional()
    , S0 = () => jm().optional()
    , E0 = () => Fm().optional()
    , k0 = {
        string: t => yt.create({
            ...t,
            coerce: !0
        }),
        number: t => kn.create({
            ...t,
            coerce: !0
        }),
        boolean: t => Gi.create({
            ...t,
            coerce: !0
        }),
        bigint: t => xn.create({
            ...t,
            coerce: !0
        }),
        date: t => Qn.create({
            ...t,
            coerce: !0
        })
    }
    , x0 = D;
var $t = Object.freeze({
    __proto__: null,
    defaultErrorMap: $r,
    setErrorMap: x_,
    getErrorMap: Fo,
    makeIssue: zo,
    EMPTY_PATH: C_,
    addIssueToContext: x,
    ParseStatus: Re,
    INVALID: D,
    DIRTY: Er,
    OK: je,
    isAborted: ol,
    isDirty: al,
    isValid: Qi,
    isAsync: Ki,
    get util() {
        return H
    },
    get objectUtil() {
        return sl
    },
    ZodParsedType: T,
    getParsedType: ln,
    ZodType: U,
    datetimeRegex: Am,
    ZodString: yt,
    ZodNumber: kn,
    ZodBigInt: xn,
    ZodBoolean: Gi,
    ZodDate: Qn,
    ZodSymbol: Uo,
    ZodUndefined: Yi,
    ZodNull: Xi,
    ZodAny: Ur,
    ZodUnknown: Un,
    ZodNever: Gt,
    ZodVoid: Bo,
    ZodArray: wt,
    ZodObject: oe,
    ZodUnion: Ji,
    ZodDiscriminatedUnion: ma,
    ZodIntersection: es,
    ZodTuple: It,
    ZodRecord: ts,
    ZodMap: Vo,
    ZodSet: Kn,
    ZodFunction: Nr,
    ZodLazy: ns,
    ZodLiteral: rs,
    ZodEnum: Cn,
    ZodNativeEnum: is,
    ZodPromise: Br,
    ZodEffects: kt,
    ZodTransformer: kt,
    ZodOptional: Pt,
    ZodNullable: bn,
    ZodDefault: ss,
    ZodCatch: os,
    ZodNaN: qo,
    BRAND: U_,
    ZodBranded: Pc,
    ZodPipeline: ps,
    ZodReadonly: as,
    custom: Lm,
    Schema: U,
    ZodSchema: U,
    late: B_,
    get ZodFirstPartyTypeKind() {
        return A
    },
    coerce: k0,
    any: G_,
    array: e0,
    bigint: H_,
    boolean: Fm,
    date: W_,
    discriminatedUnion: i0,
    effect: cd,
    enum: p0,
    function: c0,
    instanceof: V_,
    intersection: s0,
    lazy: f0,
    literal: d0,
    map: u0,
    nan: q_,
    nativeEnum: h0,
    never: X_,
    null: K_,
    nullable: y0,
    number: jm,
    object: t0,
    oboolean: E0,
    onumber: S0,
    optional: g0,
    ostring: w0,
    pipeline: _0,
    preprocess: v0,
    promise: m0,
    record: a0,
    set: l0,
    strictObject: n0,
    string: Mm,
    symbol: Z_,
    transformer: cd,
    tuple: o0,
    undefined: Q_,
    union: r0,
    unknown: Y_,
    void: J_,
    NEVER: x0,
    ZodIssueCode: S,
    quotelessJson: k_,
    ZodError: Ke
});
const C0 = async (t, e) => {
    const { initData: n } = window.Telegram.WebApp;
    return fetch("https://jonlichat-backend-wvuqe.ondigitalocean.app/" + t, {
        ...e,
        headers: {
            ...e == null ? void 0 : e.headers,
            Authorization: `Bearer ${n}`
        }
    }).then(r => r.json())
}
    ;
async function b0() {
    const t = T0();
    if (t)
        return t;
    const e = await C0("turn/credentials")
        , n = $m.parse(e);
    return O0(n),
        n
}
function T0() {
    const t = localStorage.getItem(zm);
    if (!t)
        return;
    const e = JSON.parse(t)
        , { data: n, success: r } = I0.safeParse(e);
    if (!(!n || !r || N0(new Date(n.expiresOn))))
        return n.value
}
function O0(t) {
    localStorage.setItem(zm, JSON.stringify({
        value: t,
        expiresOn: P0(1).toISOString()
    }))
}
function N0(t) {
    return t < new Date
}
function P0(t) {
    const e = new Date(Date.now());
    return new Date(e.getTime() + R0(t))
}
function R0(t) {
    return t * 60 * 60 * 1e3
}
const zm = "tc"
    , $m = $t.object({
        iceServers: $t.object({
            urls: $t.array($t.string()),
            username: $t.string(),
            credential: $t.string()
        })
    })
    , I0 = $t.object({
        value: $m,
        expiresOn: $t.string()
    }).or($t.null())
    , At = Object.create(null);
At.open = "0";
At.close = "1";
At.ping = "2";
At.pong = "3";
At.message = "4";
At.upgrade = "5";
At.noop = "6";
const io = Object.create(null);
Object.keys(At).forEach(t => {
    io[At[t]] = t
}
);
const ll = {
    type: "error",
    data: "parser error"
}
    , Um = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
    , Bm = typeof ArrayBuffer == "function"
    , Vm = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer
    , Rc = ({ type: t, data: e }, n, r) => Um && e instanceof Blob ? n ? r(e) : fd(e, r) : Bm && (e instanceof ArrayBuffer || Vm(e)) ? n ? r(e) : fd(new Blob([e]), r) : r(At[t] + (e || ""))
    , fd = (t, e) => {
        const n = new FileReader;
        return n.onload = function () {
            const r = n.result.split(",")[1];
            e("b" + (r || ""))
        }
            ,
            n.readAsDataURL(t)
    }
    ;
function dd(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
}
let nu;
function A0(t, e) {
    if (Um && t.data instanceof Blob)
        return t.data.arrayBuffer().then(dd).then(e);
    if (Bm && (t.data instanceof ArrayBuffer || Vm(t.data)))
        return e(dd(t.data));
    Rc(t, !1, n => {
        nu || (nu = new TextEncoder),
            e(nu.encode(n))
    }
    )
}
const pd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    , _i = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < pd.length; t++)
    _i[pd.charCodeAt(t)] = t;
const D0 = t => {
    let e = t.length * .75, n = t.length, r, i = 0, s, o, a, u;
    t[t.length - 1] === "=" && (e--,
        t[t.length - 2] === "=" && e--);
    const l = new ArrayBuffer(e)
        , c = new Uint8Array(l);
    for (r = 0; r < n; r += 4)
        s = _i[t.charCodeAt(r)],
            o = _i[t.charCodeAt(r + 1)],
            a = _i[t.charCodeAt(r + 2)],
            u = _i[t.charCodeAt(r + 3)],
            c[i++] = s << 2 | o >> 4,
            c[i++] = (o & 15) << 4 | a >> 2,
            c[i++] = (a & 3) << 6 | u & 63;
    return l
}
    , L0 = typeof ArrayBuffer == "function"
    , Ic = (t, e) => {
        if (typeof t != "string")
            return {
                type: "message",
                data: qm(t, e)
            };
        const n = t.charAt(0);
        return n === "b" ? {
            type: "message",
            data: M0(t.substring(1), e)
        } : io[n] ? t.length > 1 ? {
            type: io[n],
            data: t.substring(1)
        } : {
            type: io[n]
        } : ll
    }
    , M0 = (t, e) => {
        if (L0) {
            const n = D0(t);
            return qm(n, e)
        } else
            return {
                base64: !0,
                data: t
            }
    }
    , qm = (t, e) => {
        switch (e) {
            case "blob":
                return t instanceof Blob ? t : new Blob([t]);
            case "arraybuffer":
            default:
                return t instanceof ArrayBuffer ? t : t.buffer
        }
    }
    , Hm = ""
    , j0 = (t, e) => {
        const n = t.length
            , r = new Array(n);
        let i = 0;
        t.forEach((s, o) => {
            Rc(s, !1, a => {
                r[o] = a,
                    ++i === n && e(r.join(Hm))
            }
            )
        }
        )
    }
    , F0 = (t, e) => {
        const n = t.split(Hm)
            , r = [];
        for (let i = 0; i < n.length; i++) {
            const s = Ic(n[i], e);
            if (r.push(s),
                s.type === "error")
                break
        }
        return r
    }
    ;
function z0() {
    return new TransformStream({
        transform(t, e) {
            A0(t, n => {
                const r = n.length;
                let i;
                if (r < 126)
                    i = new Uint8Array(1),
                        new DataView(i.buffer).setUint8(0, r);
                else if (r < 65536) {
                    i = new Uint8Array(3);
                    const s = new DataView(i.buffer);
                    s.setUint8(0, 126),
                        s.setUint16(1, r)
                } else {
                    i = new Uint8Array(9);
                    const s = new DataView(i.buffer);
                    s.setUint8(0, 127),
                        s.setBigUint64(1, BigInt(r))
                }
                t.data && typeof t.data != "string" && (i[0] |= 128),
                    e.enqueue(i),
                    e.enqueue(n)
            }
            )
        }
    })
}
let ru;
function js(t) {
    return t.reduce((e, n) => e + n.length, 0)
}
function Fs(t, e) {
    if (t[0].length === e)
        return t.shift();
    const n = new Uint8Array(e);
    let r = 0;
    for (let i = 0; i < e; i++)
        n[i] = t[0][r++],
            r === t[0].length && (t.shift(),
                r = 0);
    return t.length && r < t[0].length && (t[0] = t[0].slice(r)),
        n
}
function $0(t, e) {
    ru || (ru = new TextDecoder);
    const n = [];
    let r = 0
        , i = -1
        , s = !1;
    return new TransformStream({
        transform(o, a) {
            for (n.push(o); ;) {
                if (r === 0) {
                    if (js(n) < 1)
                        break;
                    const u = Fs(n, 1);
                    s = (u[0] & 128) === 128,
                        i = u[0] & 127,
                        i < 126 ? r = 3 : i === 126 ? r = 1 : r = 2
                } else if (r === 1) {
                    if (js(n) < 2)
                        break;
                    const u = Fs(n, 2);
                    i = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0),
                        r = 3
                } else if (r === 2) {
                    if (js(n) < 8)
                        break;
                    const u = Fs(n, 8)
                        , l = new DataView(u.buffer, u.byteOffset, u.length)
                        , c = l.getUint32(0);
                    if (c > Math.pow(2, 21) - 1) {
                        a.enqueue(ll);
                        break
                    }
                    i = c * Math.pow(2, 32) + l.getUint32(4),
                        r = 3
                } else {
                    if (js(n) < i)
                        break;
                    const u = Fs(n, i);
                    a.enqueue(Ic(s ? u : ru.decode(u), e)),
                        r = 0
                }
                if (i === 0 || i > t) {
                    a.enqueue(ll);
                    break
                }
            }
        }
    })
}
const Wm = 4;
function he(t) {
    if (t)
        return U0(t)
}
function U0(t) {
    for (var e in he.prototype)
        t[e] = he.prototype[e];
    return t
}
he.prototype.on = he.prototype.addEventListener = function (t, e) {
    return this._callbacks = this._callbacks || {},
        (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
        this
}
    ;
he.prototype.once = function (t, e) {
    function n() {
        this.off(t, n),
            e.apply(this, arguments)
    }
    return n.fn = e,
        this.on(t, n),
        this
}
    ;
he.prototype.off = he.prototype.removeListener = he.prototype.removeAllListeners = he.prototype.removeEventListener = function (t, e) {
    if (this._callbacks = this._callbacks || {},
        arguments.length == 0)
        return this._callbacks = {},
            this;
    var n = this._callbacks["$" + t];
    if (!n)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + t],
            this;
    for (var r, i = 0; i < n.length; i++)
        if (r = n[i],
            r === e || r.fn === e) {
            n.splice(i, 1);
            break
        }
    return n.length === 0 && delete this._callbacks["$" + t],
        this
}
    ;
he.prototype.emit = function (t) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++)
        e[r - 1] = arguments[r];
    if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; r < i; ++r)
            n[r].apply(this, e)
    }
    return this
}
    ;
he.prototype.emitReserved = he.prototype.emit;
he.prototype.listeners = function (t) {
    return this._callbacks = this._callbacks || {},
        this._callbacks["$" + t] || []
}
    ;
he.prototype.hasListeners = function (t) {
    return !!this.listeners(t).length
}
    ;
const ga = typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, n) => n(e, 0)
    , nt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
    , B0 = "arraybuffer";
function Zm(t, ...e) {
    return e.reduce((n, r) => (t.hasOwnProperty(r) && (n[r] = t[r]),
        n), {})
}
const V0 = nt.setTimeout
    , q0 = nt.clearTimeout;
function ya(t, e) {
    e.useNativeTimers ? (t.setTimeoutFn = V0.bind(nt),
        t.clearTimeoutFn = q0.bind(nt)) : (t.setTimeoutFn = nt.setTimeout.bind(nt),
            t.clearTimeoutFn = nt.clearTimeout.bind(nt))
}
const H0 = 1.33;
function W0(t) {
    return typeof t == "string" ? Z0(t) : Math.ceil((t.byteLength || t.size) * H0)
}
function Z0(t) {
    let e = 0
        , n = 0;
    for (let r = 0, i = t.length; r < i; r++)
        e = t.charCodeAt(r),
            e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++,
                n += 4);
    return n
}
function Qm() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function Q0(t) {
    let e = "";
    for (let n in t)
        t.hasOwnProperty(n) && (e.length && (e += "&"),
            e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
    return e
}
function K0(t) {
    let e = {}
        , n = t.split("&");
    for (let r = 0, i = n.length; r < i; r++) {
        let s = n[r].split("=");
        e[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
    }
    return e
}
class G0 extends Error {
    constructor(e, n, r) {
        super(e),
            this.description = n,
            this.context = r,
            this.type = "TransportError"
    }
}
class Ac extends he {
    constructor(e) {
        super(),
            this.writable = !1,
            ya(this, e),
            this.opts = e,
            this.query = e.query,
            this.socket = e.socket,
            this.supportsBinary = !e.forceBase64
    }
    onError(e, n, r) {
        return super.emitReserved("error", new G0(e, n, r)),
            this
    }
    open() {
        return this.readyState = "opening",
            this.doOpen(),
            this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
            this.onClose()),
            this
    }
    send(e) {
        this.readyState === "open" && this.write(e)
    }
    onOpen() {
        this.readyState = "open",
            this.writable = !0,
            super.emitReserved("open")
    }
    onData(e) {
        const n = Ic(e, this.socket.binaryType);
        this.onPacket(n)
    }
    onPacket(e) {
        super.emitReserved("packet", e)
    }
    onClose(e) {
        this.readyState = "closed",
            super.emitReserved("close", e)
    }
    pause(e) { }
    createUri(e, n = {}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(n)
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(e) {
        const n = Q0(e);
        return n.length ? "?" + n : ""
    }
}
class Y0 extends Ac {
    constructor() {
        super(...arguments),
            this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(e) {
        this.readyState = "pausing";
        const n = () => {
            this.readyState = "paused",
                e()
        }
            ;
        if (this._polling || !this.writable) {
            let r = 0;
            this._polling && (r++,
                this.once("pollComplete", function () {
                    --r || n()
                })),
                this.writable || (r++,
                    this.once("drain", function () {
                        --r || n()
                    }))
        } else
            n()
    }
    _poll() {
        this._polling = !0,
            this.doPoll(),
            this.emitReserved("poll")
    }
    onData(e) {
        const n = r => {
            if (this.readyState === "opening" && r.type === "open" && this.onOpen(),
                r.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                    !1;
            this.onPacket(r)
        }
            ;
        F0(e, this.socket.binaryType).forEach(n),
            this.readyState !== "closed" && (this._polling = !1,
                this.emitReserved("pollComplete"),
                this.readyState === "open" && this._poll())
    }
    doClose() {
        const e = () => {
            this.write([{
                type: "close"
            }])
        }
            ;
        this.readyState === "open" ? e() : this.once("open", e)
    }
    write(e) {
        this.writable = !1,
            j0(e, n => {
                this.doWrite(n, () => {
                    this.writable = !0,
                        this.emitReserved("drain")
                }
                )
            }
            )
    }
    uri() {
        const e = this.opts.secure ? "https" : "http"
            , n = this.query || {};
        return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Qm()),
            !this.supportsBinary && !n.sid && (n.b64 = 1),
            this.createUri(e, n)
    }
}
let Km = !1;
try {
    Km = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch { }
const X0 = Km;
function J0() { }
class e1 extends Y0 {
    constructor(e) {
        if (super(e),
            typeof location < "u") {
            const n = location.protocol === "https:";
            let r = location.port;
            r || (r = n ? "443" : "80"),
                this.xd = typeof location < "u" && e.hostname !== location.hostname || r !== e.port
        }
    }
    doWrite(e, n) {
        const r = this.request({
            method: "POST",
            data: e
        });
        r.on("success", n),
            r.on("error", (i, s) => {
                this.onError("xhr post error", i, s)
            }
            )
    }
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)),
            e.on("error", (n, r) => {
                this.onError("xhr poll error", n, r)
            }
            ),
            this.pollXhr = e
    }
}
let Pr = class so extends he {
    constructor(e, n, r) {
        super(),
            this.createRequest = e,
            ya(this, r),
            this._opts = r,
            this._method = r.method || "GET",
            this._uri = n,
            this._data = r.data !== void 0 ? r.data : null,
            this._create()
    }
    _create() {
        var e;
        const n = Zm(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        n.xdomain = !!this._opts.xd;
        const r = this._xhr = this.createRequest(n);
        try {
            r.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
                    for (let i in this._opts.extraHeaders)
                        this._opts.extraHeaders.hasOwnProperty(i) && r.setRequestHeader(i, this._opts.extraHeaders[i])
                }
            } catch { }
            if (this._method === "POST")
                try {
                    r.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch { }
            try {
                r.setRequestHeader("Accept", "*/*")
            } catch { }
            (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(r),
                "withCredentials" in r && (r.withCredentials = this._opts.withCredentials),
                this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout),
                r.onreadystatechange = () => {
                    var i;
                    r.readyState === 3 && ((i = this._opts.cookieJar) === null || i === void 0 || i.parseCookies(r.getResponseHeader("set-cookie"))),
                        r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
                            this._onError(typeof r.status == "number" ? r.status : 0)
                        }
                            , 0))
                }
                ,
                r.send(this._data)
        } catch (i) {
            this.setTimeoutFn(() => {
                this._onError(i)
            }
                , 0);
            return
        }
        typeof document < "u" && (this._index = so.requestsCount++,
            so.requests[this._index] = this)
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr),
            this._cleanup(!0)
    }
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = J0,
                e)
                try {
                    this._xhr.abort()
                } catch { }
            typeof document < "u" && delete so.requests[this._index],
                this._xhr = null
        }
    }
    _onLoad() {
        const e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e),
            this.emitReserved("success"),
            this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
    ;
Pr.requestsCount = 0;
Pr.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", hd);
    else if (typeof addEventListener == "function") {
        const t = "onpagehide" in nt ? "pagehide" : "unload";
        addEventListener(t, hd, !1)
    }
}
function hd() {
    for (let t in Pr.requests)
        Pr.requests.hasOwnProperty(t) && Pr.requests[t].abort()
}
const t1 = function () {
    const t = Gm({
        xdomain: !1
    });
    return t && t.responseType !== null
}();
class n1 extends e1 {
    constructor(e) {
        super(e);
        const n = e && e.forceBase64;
        this.supportsBinary = t1 && !n
    }
    request(e = {}) {
        return Object.assign(e, {
            xd: this.xd
        }, this.opts),
            new Pr(Gm, this.uri(), e)
    }
}
function Gm(t) {
    const e = t.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || X0))
            return new XMLHttpRequest
    } catch { }
    if (!e)
        try {
            return new nt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch { }
}
const Ym = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class r1 extends Ac {
    get name() {
        return "websocket"
    }
    doOpen() {
        const e = this.uri()
            , n = this.opts.protocols
            , r = Ym ? {} : Zm(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, n, r)
        } catch (i) {
            return this.emitReserved("error", i)
        }
        this.ws.binaryType = this.socket.binaryType,
            this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
                this.onOpen()
        }
            ,
            this.ws.onclose = e => this.onClose({
                description: "websocket connection closed",
                context: e
            }),
            this.ws.onmessage = e => this.onData(e.data),
            this.ws.onerror = e => this.onError("websocket error", e)
    }
    write(e) {
        this.writable = !1;
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
                , i = n === e.length - 1;
            Rc(r, this.supportsBinary, s => {
                try {
                    this.doWrite(r, s)
                } catch { }
                i && ga(() => {
                    this.writable = !0,
                        this.emitReserved("drain")
                }
                    , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.close(),
            this.ws = null)
    }
    uri() {
        const e = this.opts.secure ? "wss" : "ws"
            , n = this.query || {};
        return this.opts.timestampRequests && (n[this.opts.timestampParam] = Qm()),
            this.supportsBinary || (n.b64 = 1),
            this.createUri(e, n)
    }
}
const iu = nt.WebSocket || nt.MozWebSocket;
class i1 extends r1 {
    createSocket(e, n, r) {
        return Ym ? new iu(e, n, r) : n ? new iu(e, n) : new iu(e)
    }
    doWrite(e, n) {
        this.ws.send(n)
    }
}
class s1 extends Ac {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name])
        } catch (e) {
            return this.emitReserved("error", e)
        }
        this._transport.closed.then(() => {
            this.onClose()
        }
        ).catch(e => {
            this.onError("webtransport error", e)
        }
        ),
            this._transport.ready.then(() => {
                this._transport.createBidirectionalStream().then(e => {
                    const n = $0(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                        , r = e.readable.pipeThrough(n).getReader()
                        , i = z0();
                    i.readable.pipeTo(e.writable),
                        this._writer = i.writable.getWriter();
                    const s = () => {
                        r.read().then(({ done: a, value: u }) => {
                            a || (this.onPacket(u),
                                s())
                        }
                        ).catch(a => { }
                        )
                    }
                        ;
                    s();
                    const o = {
                        type: "open"
                    };
                    this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`),
                        this._writer.write(o).then(() => this.onOpen())
                }
                )
            }
            )
    }
    write(e) {
        this.writable = !1;
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
                , i = n === e.length - 1;
            this._writer.write(r).then(() => {
                i && ga(() => {
                    this.writable = !0,
                        this.emitReserved("drain")
                }
                    , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close()
    }
}
const o1 = {
    websocket: i1,
    webtransport: s1,
    polling: n1
}
    , a1 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    , u1 = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function cl(t) {
    if (t.length > 8e3)
        throw "URI too long";
    const e = t
        , n = t.indexOf("[")
        , r = t.indexOf("]");
    n != -1 && r != -1 && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
    let i = a1.exec(t || "")
        , s = {}
        , o = 14;
    for (; o--;)
        s[u1[o]] = i[o] || "";
    return n != -1 && r != -1 && (s.source = e,
        s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"),
        s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
        s.ipv6uri = !0),
        s.pathNames = l1(s, s.path),
        s.queryKey = c1(s, s.query),
        s
}
function l1(t, e) {
    const n = /\/{2,9}/g
        , r = e.replace(n, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1),
        e.slice(-1) == "/" && r.splice(r.length - 1, 1),
        r
}
function c1(t, e) {
    const n = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, i, s) {
        i && (n[i] = s)
    }),
        n
}
const fl = typeof addEventListener == "function" && typeof removeEventListener == "function"
    , oo = [];
fl && addEventListener("offline", () => {
    oo.forEach(t => t())
}
    , !1);
class wn extends he {
    constructor(e, n) {
        if (super(),
            this.binaryType = B0,
            this.writeBuffer = [],
            this._prevBufferLen = 0,
            this._pingInterval = -1,
            this._pingTimeout = -1,
            this._maxPayload = -1,
            this._pingTimeoutTime = 1 / 0,
            e && typeof e == "object" && (n = e,
                e = null),
            e) {
            const r = cl(e);
            n.hostname = r.host,
                n.secure = r.protocol === "https" || r.protocol === "wss",
                n.port = r.port,
                r.query && (n.query = r.query)
        } else
            n.host && (n.hostname = cl(n.host).host);
        ya(this, n),
            this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:",
            n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
            this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"),
            this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
            this.transports = [],
            this._transportsByName = {},
            n.transports.forEach(r => {
                const i = r.prototype.name;
                this.transports.push(i),
                    this._transportsByName[i] = r
            }
            ),
            this.opts = Object.assign({
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: {
                    threshold: 1024
                },
                transportOptions: {},
                closeOnBeforeunload: !1
            }, n),
            this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
            typeof this.opts.query == "string" && (this.opts.query = K0(this.opts.query)),
            fl && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
                this.transport && (this.transport.removeAllListeners(),
                    this.transport.close())
            }
                ,
                addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
                this.hostname !== "localhost" && (this._offlineEventListener = () => {
                    this._onClose("transport close", {
                        description: "network connection lost"
                    })
                }
                    ,
                    oo.push(this._offlineEventListener))),
            this.opts.withCredentials && (this._cookieJar = void 0),
            this._open()
    }
    createTransport(e) {
        const n = Object.assign({}, this.opts.query);
        n.EIO = Wm,
            n.transport = e,
            this.id && (n.sid = this.id);
        const r = Object.assign({}, this.opts, {
            query: n,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](r)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available")
            }
                , 0);
            return
        }
        const e = this.opts.rememberUpgrade && wn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const n = this.createTransport(e);
        n.open(),
            this.setTransport(n)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(),
            this.transport = e,
            e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", n => this._onClose("transport close", n))
    }
    onOpen() {
        this.readyState = "open",
            wn.priorWebsocketSuccess = this.transport.name === "websocket",
            this.emitReserved("open"),
            this.flush()
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", e),
            this.emitReserved("heartbeat"),
            e.type) {
                case "open":
                    this.onHandshake(JSON.parse(e.data));
                    break;
                case "ping":
                    this._sendPacket("pong"),
                        this.emitReserved("ping"),
                        this.emitReserved("pong"),
                        this._resetPingTimeout();
                    break;
                case "error":
                    const n = new Error("server error");
                    n.code = e.data,
                        this._onError(n);
                    break;
                case "message":
                    this.emitReserved("data", e.data),
                        this.emitReserved("message", e.data);
                    break
            }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e),
            this.id = e.sid,
            this.transport.query.sid = e.sid,
            this._pingInterval = e.pingInterval,
            this._pingTimeout = e.pingTimeout,
            this._maxPayload = e.maxPayload,
            this.onOpen(),
            this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e,
            this._pingTimeoutTimer = this.setTimeoutFn(() => {
                this._onClose("ping timeout")
            }
                , e),
            this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen),
            this._prevBufferLen = 0,
            this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this._getWritablePackets();
            this.transport.send(e),
                this._prevBufferLen = e.length,
                this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
        let n = 1;
        for (let r = 0; r < this.writeBuffer.length; r++) {
            const i = this.writeBuffer[r].data;
            if (i && (n += W0(i)),
                r > 0 && n > this._maxPayload)
                return this.writeBuffer.slice(0, r);
            n += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return !0;
        const e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0,
            ga(() => {
                this._onClose("ping timeout")
            }
                , this.setTimeoutFn)),
            e
    }
    write(e, n, r) {
        return this._sendPacket("message", e, n, r),
            this
    }
    send(e, n, r) {
        return this._sendPacket("message", e, n, r),
            this
    }
    _sendPacket(e, n, r, i) {
        if (typeof n == "function" && (i = n,
            n = void 0),
            typeof r == "function" && (i = r,
                r = null),
            this.readyState === "closing" || this.readyState === "closed")
            return;
        r = r || {},
            r.compress = r.compress !== !1;
        const s = {
            type: e,
            data: n,
            options: r
        };
        this.emitReserved("packetCreate", s),
            this.writeBuffer.push(s),
            i && this.once("flush", i),
            this.flush()
    }
    close() {
        const e = () => {
            this._onClose("forced close"),
                this.transport.close()
        }
            , n = () => {
                this.off("upgrade", n),
                    this.off("upgradeError", n),
                    e()
            }
            , r = () => {
                this.once("upgrade", n),
                    this.once("upgradeError", n)
            }
            ;
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
            this.writeBuffer.length ? this.once("drain", () => {
                this.upgrading ? r() : e()
            }
            ) : this.upgrading ? r() : e()),
            this
    }
    _onError(e) {
        if (wn.priorWebsocketSuccess = !1,
            this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
            return this.transports.shift(),
                this._open();
        this.emitReserved("error", e),
            this._onClose("transport error", e)
    }
    _onClose(e, n) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer),
                this.transport.removeAllListeners("close"),
                this.transport.close(),
                this.transport.removeAllListeners(),
                fl && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
                    this._offlineEventListener)) {
                const r = oo.indexOf(this._offlineEventListener);
                r !== -1 && oo.splice(r, 1)
            }
            this.readyState = "closed",
                this.id = null,
                this.emitReserved("close", e, n),
                this.writeBuffer = [],
                this._prevBufferLen = 0
        }
    }
}
wn.protocol = Wm;
class f1 extends wn {
    constructor() {
        super(...arguments),
            this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
            this.readyState === "open" && this.opts.upgrade)
            for (let e = 0; e < this._upgrades.length; e++)
                this._probe(this._upgrades[e])
    }
    _probe(e) {
        let n = this.createTransport(e)
            , r = !1;
        wn.priorWebsocketSuccess = !1;
        const i = () => {
            r || (n.send([{
                type: "ping",
                data: "probe"
            }]),
                n.once("packet", f => {
                    if (!r)
                        if (f.type === "pong" && f.data === "probe") {
                            if (this.upgrading = !0,
                                this.emitReserved("upgrading", n),
                                !n)
                                return;
                            wn.priorWebsocketSuccess = n.name === "websocket",
                                this.transport.pause(() => {
                                    r || this.readyState !== "closed" && (c(),
                                        this.setTransport(n),
                                        n.send([{
                                            type: "upgrade"
                                        }]),
                                        this.emitReserved("upgrade", n),
                                        n = null,
                                        this.upgrading = !1,
                                        this.flush())
                                }
                                )
                        } else {
                            const p = new Error("probe error");
                            p.transport = n.name,
                                this.emitReserved("upgradeError", p)
                        }
                }
                ))
        }
            ;
        function s() {
            r || (r = !0,
                c(),
                n.close(),
                n = null)
        }
        const o = f => {
            const p = new Error("probe error: " + f);
            p.transport = n.name,
                s(),
                this.emitReserved("upgradeError", p)
        }
            ;
        function a() {
            o("transport closed")
        }
        function u() {
            o("socket closed")
        }
        function l(f) {
            n && f.name !== n.name && s()
        }
        const c = () => {
            n.removeListener("open", i),
                n.removeListener("error", o),
                n.removeListener("close", a),
                this.off("close", u),
                this.off("upgrading", l)
        }
            ;
        n.once("open", i),
            n.once("error", o),
            n.once("close", a),
            this.once("close", u),
            this.once("upgrading", l),
            this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
                r || n.open()
            }
                , 200) : n.open()
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades),
            super.onHandshake(e)
    }
    _filterUpgrades(e) {
        const n = [];
        for (let r = 0; r < e.length; r++)
            ~this.transports.indexOf(e[r]) && n.push(e[r]);
        return n
    }
}
let d1 = class extends f1 {
    constructor(e, n = {}) {
        const r = typeof e == "object" ? e : n;
        (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map(i => o1[i]).filter(i => !!i)),
            super(e, r)
    }
}
    ;
function p1(t, e = "", n) {
    let r = t;
    n = n || typeof location < "u" && location,
        t == null && (t = n.protocol + "//" + n.host),
        typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t),
            /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t),
            r = cl(t)),
        r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
        r.path = r.path || "/";
    const s = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
    return r.id = r.protocol + "://" + s + ":" + r.port + e,
        r.href = r.protocol + "://" + s + (n && n.port === r.port ? "" : ":" + r.port),
        r
}
const h1 = typeof ArrayBuffer == "function"
    , m1 = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
    , Xm = Object.prototype.toString
    , g1 = typeof Blob == "function" || typeof Blob < "u" && Xm.call(Blob) === "[object BlobConstructor]"
    , y1 = typeof File == "function" || typeof File < "u" && Xm.call(File) === "[object FileConstructor]";
function Dc(t) {
    return h1 && (t instanceof ArrayBuffer || m1(t)) || g1 && t instanceof Blob || y1 && t instanceof File
}
function ao(t, e) {
    if (!t || typeof t != "object")
        return !1;
    if (Array.isArray(t)) {
        for (let n = 0, r = t.length; n < r; n++)
            if (ao(t[n]))
                return !0;
        return !1
    }
    if (Dc(t))
        return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
        return ao(t.toJSON(), !0);
    for (const n in t)
        if (Object.prototype.hasOwnProperty.call(t, n) && ao(t[n]))
            return !0;
    return !1
}
function v1(t) {
    const e = []
        , n = t.data
        , r = t;
    return r.data = dl(n, e),
        r.attachments = e.length,
    {
        packet: r,
        buffers: e
    }
}
function dl(t, e) {
    if (!t)
        return t;
    if (Dc(t)) {
        const n = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(t),
            n
    } else if (Array.isArray(t)) {
        const n = new Array(t.length);
        for (let r = 0; r < t.length; r++)
            n[r] = dl(t[r], e);
        return n
    } else if (typeof t == "object" && !(t instanceof Date)) {
        const n = {};
        for (const r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = dl(t[r], e));
        return n
    }
    return t
}
function _1(t, e) {
    return t.data = pl(t.data, e),
        delete t.attachments,
        t
}
function pl(t, e) {
    if (!t)
        return t;
    if (t && t._placeholder === !0) {
        if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
            return e[t.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(t))
        for (let n = 0; n < t.length; n++)
            t[n] = pl(t[n], e);
    else if (typeof t == "object")
        for (const n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (t[n] = pl(t[n], e));
    return t
}
const w1 = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"]
    , S1 = 5;
var q;
(function (t) {
    t[t.CONNECT = 0] = "CONNECT",
        t[t.DISCONNECT = 1] = "DISCONNECT",
        t[t.EVENT = 2] = "EVENT",
        t[t.ACK = 3] = "ACK",
        t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR",
        t[t.BINARY_EVENT = 5] = "BINARY_EVENT",
        t[t.BINARY_ACK = 6] = "BINARY_ACK"
}
)(q || (q = {}));
class E1 {
    constructor(e) {
        this.replacer = e
    }
    encode(e) {
        return (e.type === q.EVENT || e.type === q.ACK) && ao(e) ? this.encodeAsBinary({
            type: e.type === q.EVENT ? q.BINARY_EVENT : q.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)]
    }
    encodeAsString(e) {
        let n = "" + e.type;
        return (e.type === q.BINARY_EVENT || e.type === q.BINARY_ACK) && (n += e.attachments + "-"),
            e.nsp && e.nsp !== "/" && (n += e.nsp + ","),
            e.id != null && (n += e.id),
            e.data != null && (n += JSON.stringify(e.data, this.replacer)),
            n
    }
    encodeAsBinary(e) {
        const n = v1(e)
            , r = this.encodeAsString(n.packet)
            , i = n.buffers;
        return i.unshift(r),
            i
    }
}
function md(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
class Lc extends he {
    constructor(e) {
        super(),
            this.reviver = e
    }
    add(e) {
        let n;
        if (typeof e == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            n = this.decodeString(e);
            const r = n.type === q.BINARY_EVENT;
            r || n.type === q.BINARY_ACK ? (n.type = r ? q.EVENT : q.ACK,
                this.reconstructor = new k1(n),
                n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n)
        } else if (Dc(e) || e.base64)
            if (this.reconstructor)
                n = this.reconstructor.takeBinaryData(e),
                    n && (this.reconstructor = null,
                        super.emitReserved("decoded", n));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + e)
    }
    decodeString(e) {
        let n = 0;
        const r = {
            type: Number(e.charAt(0))
        };
        if (q[r.type] === void 0)
            throw new Error("unknown packet type " + r.type);
        if (r.type === q.BINARY_EVENT || r.type === q.BINARY_ACK) {
            const s = n + 1;
            for (; e.charAt(++n) !== "-" && n != e.length;)
                ;
            const o = e.substring(s, n);
            if (o != Number(o) || e.charAt(n) !== "-")
                throw new Error("Illegal attachments");
            r.attachments = Number(o)
        }
        if (e.charAt(n + 1) === "/") {
            const s = n + 1;
            for (; ++n && !(e.charAt(n) === "," || n === e.length);)
                ;
            r.nsp = e.substring(s, n)
        } else
            r.nsp = "/";
        const i = e.charAt(n + 1);
        if (i !== "" && Number(i) == i) {
            const s = n + 1;
            for (; ++n;) {
                const o = e.charAt(n);
                if (o == null || Number(o) != o) {
                    --n;
                    break
                }
                if (n === e.length)
                    break
            }
            r.id = Number(e.substring(s, n + 1))
        }
        if (e.charAt(++n)) {
            const s = this.tryParse(e.substr(n));
            if (Lc.isPayloadValid(r.type, s))
                r.data = s;
            else
                throw new Error("invalid payload")
        }
        return r
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(e, n) {
        switch (e) {
            case q.CONNECT:
                return md(n);
            case q.DISCONNECT:
                return n === void 0;
            case q.CONNECT_ERROR:
                return typeof n == "string" || md(n);
            case q.EVENT:
            case q.BINARY_EVENT:
                return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && w1.indexOf(n[0]) === -1);
            case q.ACK:
            case q.BINARY_ACK:
                return Array.isArray(n)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
            this.reconstructor = null)
    }
}
class k1 {
    constructor(e) {
        this.packet = e,
            this.buffers = [],
            this.reconPack = e
    }
    takeBinaryData(e) {
        if (this.buffers.push(e),
            this.buffers.length === this.reconPack.attachments) {
            const n = _1(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
                n
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
            this.buffers = []
    }
}
const x1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: Lc,
    Encoder: E1,
    get PacketType() {
        return q
    },
    protocol: S1
}, Symbol.toStringTag, {
    value: "Module"
}));
function mt(t, e, n) {
    return t.on(e, n),
        function () {
            t.off(e, n)
        }
}
const C1 = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class Jm extends he {
    constructor(e, n, r) {
        super(),
            this.connected = !1,
            this.recovered = !1,
            this.receiveBuffer = [],
            this.sendBuffer = [],
            this._queue = [],
            this._queueSeq = 0,
            this.ids = 0,
            this.acks = {},
            this.flags = {},
            this.io = e,
            this.nsp = n,
            r && r.auth && (this.auth = r.auth),
            this._opts = Object.assign({}, r),
            this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        const e = this.io;
        this.subs = [mt(e, "open", this.onopen.bind(this)), mt(e, "packet", this.onpacket.bind(this)), mt(e, "error", this.onerror.bind(this)), mt(e, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
            this.io._reconnecting || this.io.open(),
            this.io._readyState === "open" && this.onopen(),
            this)
    }
    open() {
        return this.connect()
    }
    send(...e) {
        return e.unshift("message"),
            this.emit.apply(this, e),
            this
    }
    emit(e, ...n) {
        var r, i, s;
        if (C1.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name');
        if (n.unshift(e),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(n),
                this;
        const o = {
            type: q.EVENT,
            data: n
        };
        if (o.options = {},
            o.options.compress = this.flags.compress !== !1,
            typeof n[n.length - 1] == "function") {
            const c = this.ids++
                , f = n.pop();
            this._registerAckCallback(c, f),
                o.id = c
        }
        const a = (i = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || i === void 0 ? void 0 : i.writable
            , u = this.connected && !(!((s = this.io.engine) === null || s === void 0) && s._hasPingExpired());
        return this.flags.volatile && !a || (u ? (this.notifyOutgoingListeners(o),
            this.packet(o)) : this.sendBuffer.push(o)),
            this.flags = {},
            this
    }
    _registerAckCallback(e, n) {
        var r;
        const i = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
        if (i === void 0) {
            this.acks[e] = n;
            return
        }
        const s = this.io.setTimeoutFn(() => {
            delete this.acks[e];
            for (let a = 0; a < this.sendBuffer.length; a++)
                this.sendBuffer[a].id === e && this.sendBuffer.splice(a, 1);
            n.call(this, new Error("operation has timed out"))
        }
            , i)
            , o = (...a) => {
                this.io.clearTimeoutFn(s),
                    n.apply(this, a)
            }
            ;
        o.withError = !0,
            this.acks[e] = o
    }
    emitWithAck(e, ...n) {
        return new Promise((r, i) => {
            const s = (o, a) => o ? i(o) : r(a);
            s.withError = !0,
                n.push(s),
                this.emit(e, ...n)
        }
        )
    }
    _addToQueue(e) {
        let n;
        typeof e[e.length - 1] == "function" && (n = e.pop());
        const r = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push((i, ...s) => r !== this._queue[0] ? void 0 : (i !== null ? r.tryCount > this._opts.retries && (this._queue.shift(),
            n && n(i)) : (this._queue.shift(),
                n && n(null, ...s)),
            r.pending = !1,
            this._drainQueue())),
            this._queue.push(r),
            this._drainQueue()
    }
    _drainQueue(e = !1) {
        if (!this.connected || this._queue.length === 0)
            return;
        const n = this._queue[0];
        n.pending && !e || (n.pending = !0,
            n.tryCount++,
            this.flags = n.flags,
            this.emit.apply(this, n.args))
    }
    packet(e) {
        e.nsp = this.nsp,
            this.io._packet(e)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(e => {
            this._sendConnectPacket(e)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(e) {
        this.packet({
            type: q.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        })
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e)
    }
    onclose(e, n) {
        this.connected = !1,
            delete this.id,
            this.emitReserved("disconnect", e, n),
            this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(e => {
            if (!this.sendBuffer.some(r => String(r.id) === e)) {
                const r = this.acks[e];
                delete this.acks[e],
                    r.withError && r.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(e) {
        if (e.nsp === this.nsp)
            switch (e.type) {
                case q.CONNECT:
                    e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                    break;
                case q.EVENT:
                case q.BINARY_EVENT:
                    this.onevent(e);
                    break;
                case q.ACK:
                case q.BINARY_ACK:
                    this.onack(e);
                    break;
                case q.DISCONNECT:
                    this.ondisconnect();
                    break;
                case q.CONNECT_ERROR:
                    this.destroy();
                    const r = new Error(e.data.message);
                    r.data = e.data.data,
                        this.emitReserved("connect_error", r);
                    break
            }
    }
    onevent(e) {
        const n = e.data || [];
        e.id != null && n.push(this.ack(e.id)),
            this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n))
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const r of n)
                r.apply(this, e)
        }
        super.emit.apply(this, e),
            this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
    }
    ack(e) {
        const n = this;
        let r = !1;
        return function (...i) {
            r || (r = !0,
                n.packet({
                    type: q.ACK,
                    id: e,
                    data: i
                }))
        }
    }
    onack(e) {
        const n = this.acks[e.id];
        typeof n == "function" && (delete this.acks[e.id],
            n.withError && e.data.unshift(null),
            n.apply(this, e.data))
    }
    onconnect(e, n) {
        this.id = e,
            this.recovered = n && this._pid === n,
            this._pid = n,
            this.connected = !0,
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0)
    }
    emitBuffered() {
        this.receiveBuffer.forEach(e => this.emitEvent(e)),
            this.receiveBuffer = [],
            this.sendBuffer.forEach(e => {
                this.notifyOutgoingListeners(e),
                    this.packet(e)
            }
            ),
            this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
            this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(e => e()),
            this.subs = void 0),
            this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: q.DISCONNECT
        }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
    }
    close() {
        return this.disconnect()
    }
    compress(e) {
        return this.flags.compress = e,
            this
    }
    get volatile() {
        return this.flags.volatile = !0,
            this
    }
    timeout(e) {
        return this.flags.timeout = e,
            this
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [],
            this._anyListeners.push(e),
            this
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [],
            this._anyListeners.unshift(e),
            this
    }
    offAny(e) {
        if (!this._anyListeners)
            return this;
        if (e) {
            const n = this._anyListeners;
            for (let r = 0; r < n.length; r++)
                if (e === n[r])
                    return n.splice(r, 1),
                        this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
            this._anyOutgoingListeners.push(e),
            this
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
            this._anyOutgoingListeners.unshift(e),
            this
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners)
            return this;
        if (e) {
            const n = this._anyOutgoingListeners;
            for (let r = 0; r < n.length; r++)
                if (e === n[r])
                    return n.splice(r, 1),
                        this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const r of n)
                r.apply(this, e.data)
        }
    }
}
function Xr(t) {
    t = t || {},
        this.ms = t.min || 100,
        this.max = t.max || 1e4,
        this.factor = t.factor || 2,
        this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
        this.attempts = 0
}
Xr.prototype.duration = function () {
    var t = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random()
            , n = Math.floor(e * this.jitter * t);
        t = Math.floor(e * 10) & 1 ? t + n : t - n
    }
    return Math.min(t, this.max) | 0
}
    ;
Xr.prototype.reset = function () {
    this.attempts = 0
}
    ;
Xr.prototype.setMin = function (t) {
    this.ms = t
}
    ;
Xr.prototype.setMax = function (t) {
    this.max = t
}
    ;
Xr.prototype.setJitter = function (t) {
    this.jitter = t
}
    ;
class hl extends he {
    constructor(e, n) {
        var r;
        super(),
            this.nsps = {},
            this.subs = [],
            e && typeof e == "object" && (n = e,
                e = void 0),
            n = n || {},
            n.path = n.path || "/socket.io",
            this.opts = n,
            ya(this, n),
            this.reconnection(n.reconnection !== !1),
            this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(n.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
            this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : .5),
            this.backoff = new Xr({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
            }),
            this.timeout(n.timeout == null ? 2e4 : n.timeout),
            this._readyState = "closed",
            this.uri = e;
        const i = n.parser || x1;
        this.encoder = new i.Encoder,
            this.decoder = new i.Decoder,
            this._autoConnect = n.autoConnect !== !1,
            this._autoConnect && this.open()
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e,
            e || (this.skipReconnect = !0),
            this) : this._reconnection
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e,
            this)
    }
    reconnectionDelay(e) {
        var n;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e,
            (n = this.backoff) === null || n === void 0 || n.setMin(e),
            this)
    }
    randomizationFactor(e) {
        var n;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e,
            (n = this.backoff) === null || n === void 0 || n.setJitter(e),
            this)
    }
    reconnectionDelayMax(e) {
        var n;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e,
            (n = this.backoff) === null || n === void 0 || n.setMax(e),
            this)
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e,
            this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(e) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new d1(this.uri, this.opts);
        const n = this.engine
            , r = this;
        this._readyState = "opening",
            this.skipReconnect = !1;
        const i = mt(n, "open", function () {
            r.onopen(),
                e && e()
        })
            , s = a => {
                this.cleanup(),
                    this._readyState = "closed",
                    this.emitReserved("error", a),
                    e ? e(a) : this.maybeReconnectOnOpen()
            }
            , o = mt(n, "error", s);
        if (this._timeout !== !1) {
            const a = this._timeout
                , u = this.setTimeoutFn(() => {
                    i(),
                        s(new Error("timeout")),
                        n.close()
                }
                    , a);
            this.opts.autoUnref && u.unref(),
                this.subs.push(() => {
                    this.clearTimeoutFn(u)
                }
                )
        }
        return this.subs.push(i),
            this.subs.push(o),
            this
    }
    connect(e) {
        return this.open(e)
    }
    onopen() {
        this.cleanup(),
            this._readyState = "open",
            this.emitReserved("open");
        const e = this.engine;
        this.subs.push(mt(e, "ping", this.onping.bind(this)), mt(e, "data", this.ondata.bind(this)), mt(e, "error", this.onerror.bind(this)), mt(e, "close", this.onclose.bind(this)), mt(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(e) {
        try {
            this.decoder.add(e)
        } catch (n) {
            this.onclose("parse error", n)
        }
    }
    ondecoded(e) {
        ga(() => {
            this.emitReserved("packet", e)
        }
            , this.setTimeoutFn)
    }
    onerror(e) {
        this.emitReserved("error", e)
    }
    socket(e, n) {
        let r = this.nsps[e];
        return r ? this._autoConnect && !r.active && r.connect() : (r = new Jm(this, e, n),
            this.nsps[e] = r),
            r
    }
    _destroy(e) {
        const n = Object.keys(this.nsps);
        for (const r of n)
            if (this.nsps[r].active)
                return;
        this._close()
    }
    _packet(e) {
        const n = this.encoder.encode(e);
        for (let r = 0; r < n.length; r++)
            this.engine.write(n[r], e.options)
    }
    cleanup() {
        this.subs.forEach(e => e()),
            this.subs.length = 0,
            this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
            this._reconnecting = !1,
            this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(e, n) {
        var r;
        this.cleanup(),
            (r = this.engine) === null || r === void 0 || r.close(),
            this.backoff.reset(),
            this._readyState = "closed",
            this.emitReserved("close", e, n),
            this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
                this.emitReserved("reconnect_failed"),
                this._reconnecting = !1;
        else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const r = this.setTimeoutFn(() => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                    !e.skipReconnect && e.open(i => {
                        i ? (e._reconnecting = !1,
                            e.reconnect(),
                            this.emitReserved("reconnect_error", i)) : e.onreconnect()
                    }
                    ))
            }
                , n);
            this.opts.autoUnref && r.unref(),
                this.subs.push(() => {
                    this.clearTimeoutFn(r)
                }
                )
        }
    }
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1,
            this.backoff.reset(),
            this.emitReserved("reconnect", e)
    }
}
const ci = {};
function uo(t, e) {
    typeof t == "object" && (e = t,
        t = void 0),
        e = e || {};
    const n = p1(t, e.path || "/socket.io")
        , r = n.source
        , i = n.id
        , s = n.path
        , o = ci[i] && s in ci[i].nsps
        , a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
    let u;
    return a ? u = new hl(r, e) : (ci[i] || (ci[i] = new hl(r, e)),
        u = ci[i]),
        n.query && !e.query && (e.query = n.queryKey),
        u.socket(n.path, e)
}
Object.assign(uo, {
    Manager: hl,
    Socket: Jm,
    io: uo,
    connect: uo
});
const Mc = uo("https://jonlichat-backend-wvuqe.ondigitalocean.app/", {
    transports: ["websocket"]
})
    , eg = () => Mc
    , wi = (t, e) => Mc.emit(t, {
        ...e
    })
    , b1 = (t, e) => Mc.emit(t, {
        ...e,
        initData: window.Telegram.WebApp.initData
    })
    , tg = (t, e) => {
        const n = eg();
        K.useEffect(() => (n.on(t, e),
            () => {
                n.off(t, e)
            }
        ), [n, t, e])
    }
    , ng = (t, e) => {
        const [n, r] = K.useState(e);
        return tg(t, i => {
            r(i)
        }
        ),
            n
    }
    , T1 = (t, e) => {
        K.useEffect(() => {
            wi(t, e)
        }
            , [])
    }
    ;
function O1() {
    const [t, e] = K.useState("idle")
        , [n, r] = K.useState(null)
        , i = Nc()
        , s = eg()
        , [o, a] = K.useState(null)
        , u = K.useCallback(() => {
            e("idle"),
                n && (n.getTracks().forEach(f => f.stop()),
                    r(null)),
                o && (o.close(),
                    a(null))
        }
            , [o, n]);
    K.useEffect(() => {
        o && o.addEventListener("track", async f => {
            r(f.streams[0]),
                e("paired")
        }
        )
    }
        , [o]),
        K.useEffect(() => {
            !o || !i || i == null || i.getTracks().forEach(f => {
                o == null || o.addTrack(f, i)
            }
            )
        }
            , [i, o]),
        K.useEffect(() => {
            const f = async () => {
                if (!o)
                    return;
                const p = await o.createOffer();
                await o.setLocalDescription(p),
                    wi("offer", {
                        offer: p
                    })
            }
                ;
            return s.on("send-offer", f),
                () => {
                    s.off("send-offer", f)
                }
        }
            , [s, o]),
        K.useEffect(() => {
            const f = async ({ offer: p }) => {
                if (console.log("receive-offer", o),
                    !o)
                    return;
                o.setRemoteDescription(new RTCSessionDescription(p));
                const g = await o.createAnswer();
                await o.setLocalDescription(g),
                    wi("answer", {
                        answer: g
                    })
            }
                ;
            return s.on("receive-offer", f),
                () => {
                    s.off("receive-offer", f)
                }
        }
            , [s, o]),
        K.useEffect(() => {
            const f = async ({ answer: p }) => {
                if (!o)
                    return;
                const g = new RTCSessionDescription(p);
                await o.setRemoteDescription(g)
            }
                ;
            return s.on("receive-answer", f),
                () => {
                    s.off("receive-answer", f)
                }
        }
            , [s, o]),
        K.useEffect(() => {
            if (!o)
                return;
            const f = g => {
                g.candidate && wi("ice-candidate", {
                    candidate: g.candidate
                })
            }
                ;
            o.addEventListener("icecandidate", f);
            const p = ({ candidate: g }) => {
                o.addIceCandidate(new RTCIceCandidate(g))
            }
                ;
            return s.on("ice-candidate", p),
                () => {
                    o.removeEventListener("icecandidate", f),
                        s.off("ice-candidate", f)
                }
        }
            , [s, o]);
    const l = K.useCallback(async () => {
        if (t === "pairing")
            return;
        u();
        const f = new RTCPeerConnection({
            iceServers: [(await b0()).iceServers]
        });
        a(f),
            wi("join"),
            e("pairing")
    }
        , [u, t]);
    return tg("unpaired", () => {
        l()
    }
    ),
        K.useMemo(() => ({
            status: t,
            joinChat: l,
            localStream: i,
            remoteStream: n
        }), [t, l, i, n])
}
const jc = "-"
    , N1 = t => {
        const e = R1(t)
            , { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = t;
        return {
            getClassGroupId: o => {
                const a = o.split(jc);
                return a[0] === "" && a.length !== 1 && a.shift(),
                    rg(a, e) || P1(o)
            }
            ,
            getConflictingClassGroupIds: (o, a) => {
                const u = n[o] || [];
                return a && r[o] ? [...u, ...r[o]] : u
            }
        }
    }
    , rg = (t, e) => {
        var o;
        if (t.length === 0)
            return e.classGroupId;
        const n = t[0]
            , r = e.nextPart.get(n)
            , i = r ? rg(t.slice(1), r) : void 0;
        if (i)
            return i;
        if (e.validators.length === 0)
            return;
        const s = t.join(jc);
        return (o = e.validators.find(({ validator: a }) => a(s))) == null ? void 0 : o.classGroupId
    }
    , gd = /^\[(.+)\]$/
    , P1 = t => {
        if (gd.test(t)) {
            const e = gd.exec(t)[1]
                , n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
            if (n)
                return "arbitrary.." + n
        }
    }
    , R1 = t => {
        const { theme: e, prefix: n } = t
            , r = {
                nextPart: new Map,
                validators: []
            };
        return A1(Object.entries(t.classGroups), n).forEach(([s, o]) => {
            ml(o, r, s, e)
        }
        ),
            r
    }
    , ml = (t, e, n, r) => {
        t.forEach(i => {
            if (typeof i == "string") {
                const s = i === "" ? e : yd(e, i);
                s.classGroupId = n;
                return
            }
            if (typeof i == "function") {
                if (I1(i)) {
                    ml(i(r), e, n, r);
                    return
                }
                e.validators.push({
                    validator: i,
                    classGroupId: n
                });
                return
            }
            Object.entries(i).forEach(([s, o]) => {
                ml(o, yd(e, s), n, r)
            }
            )
        }
        )
    }
    , yd = (t, e) => {
        let n = t;
        return e.split(jc).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }),
                n = n.nextPart.get(r)
        }
        ),
            n
    }
    , I1 = t => t.isThemeGetter
    , A1 = (t, e) => e ? t.map(([n, r]) => {
        const i = r.map(s => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([o, a]) => [e + o, a])) : s);
        return [n, i]
    }
    ) : t
    , D1 = t => {
        if (t < 1)
            return {
                get: () => { }
                ,
                set: () => { }
            };
        let e = 0
            , n = new Map
            , r = new Map;
        const i = (s, o) => {
            n.set(s, o),
                e++,
                e > t && (e = 0,
                    r = n,
                    n = new Map)
        }
            ;
        return {
            get(s) {
                let o = n.get(s);
                if (o !== void 0)
                    return o;
                if ((o = r.get(s)) !== void 0)
                    return i(s, o),
                        o
            },
            set(s, o) {
                n.has(s) ? n.set(s, o) : i(s, o)
            }
        }
    }
    , ig = "!"
    , L1 = t => {
        const { separator: e, experimentalParseClassName: n } = t
            , r = e.length === 1
            , i = e[0]
            , s = e.length
            , o = a => {
                const u = [];
                let l = 0, c = 0, f;
                for (let C = 0; C < a.length; C++) {
                    let h = a[C];
                    if (l === 0) {
                        if (h === i && (r || a.slice(C, C + s) === e)) {
                            u.push(a.slice(c, C)),
                                c = C + s;
                            continue
                        }
                        if (h === "/") {
                            f = C;
                            continue
                        }
                    }
                    h === "[" ? l++ : h === "]" && l--
                }
                const p = u.length === 0 ? a : a.substring(c)
                    , g = p.startsWith(ig)
                    , y = g ? p.substring(1) : p
                    , v = f && f > c ? f - c : void 0;
                return {
                    modifiers: u,
                    hasImportantModifier: g,
                    baseClassName: y,
                    maybePostfixModifierPosition: v
                }
            }
            ;
        return n ? a => n({
            className: a,
            parseClassName: o
        }) : o
    }
    , M1 = t => {
        if (t.length <= 1)
            return t;
        const e = [];
        let n = [];
        return t.forEach(r => {
            r[0] === "[" ? (e.push(...n.sort(), r),
                n = []) : n.push(r)
        }
        ),
            e.push(...n.sort()),
            e
    }
    , j1 = t => ({
        cache: D1(t.cacheSize),
        parseClassName: L1(t),
        ...N1(t)
    })
    , F1 = /\s+/
    , z1 = (t, e) => {
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i } = e
            , s = []
            , o = t.trim().split(F1);
        let a = "";
        for (let u = o.length - 1; u >= 0; u -= 1) {
            const l = o[u]
                , { modifiers: c, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: g } = n(l);
            let y = !!g
                , v = r(y ? p.substring(0, g) : p);
            if (!v) {
                if (!y) {
                    a = l + (a.length > 0 ? " " + a : a);
                    continue
                }
                if (v = r(p),
                    !v) {
                    a = l + (a.length > 0 ? " " + a : a);
                    continue
                }
                y = !1
            }
            const C = M1(c).join(":")
                , h = f ? C + ig : C
                , d = h + v;
            if (s.includes(d))
                continue;
            s.push(d);
            const m = i(v, y);
            for (let _ = 0; _ < m.length; ++_) {
                const k = m[_];
                s.push(h + k)
            }
            a = l + (a.length > 0 ? " " + a : a)
        }
        return a
    }
    ;
function Fc() {
    let t = 0, e, n, r = "";
    for (; t < arguments.length;)
        (e = arguments[t++]) && (n = sg(e)) && (r && (r += " "),
            r += n);
    return r
}
const sg = t => {
    if (typeof t == "string")
        return t;
    let e, n = "";
    for (let r = 0; r < t.length; r++)
        t[r] && (e = sg(t[r])) && (n && (n += " "),
            n += e);
    return n
}
    ;
function $1(t, ...e) {
    let n, r, i, s = o;
    function o(u) {
        const l = e.reduce((c, f) => f(c), t());
        return n = j1(l),
            r = n.cache.get,
            i = n.cache.set,
            s = a,
            a(u)
    }
    function a(u) {
        const l = r(u);
        if (l)
            return l;
        const c = z1(u, n);
        return i(u, c),
            c
    }
    return function () {
        return s(Fc.apply(null, arguments))
    }
}
const ne = t => {
    const e = n => n[t] || [];
    return e.isThemeGetter = !0,
        e
}
    , og = /^\[(?:([a-z-]+):)?(.+)\]$/i
    , U1 = /^\d+\/\d+$/
    , B1 = new Set(["px", "full", "screen"])
    , V1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
    , q1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
    , H1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
    , W1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
    , Z1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
    , Dt = t => Rr(t) || B1.has(t) || U1.test(t)
    , en = t => Jr(t, "length", tw)
    , Rr = t => !!t && !Number.isNaN(Number(t))
    , su = t => Jr(t, "number", Rr)
    , fi = t => !!t && Number.isInteger(Number(t))
    , Q1 = t => t.endsWith("%") && Rr(t.slice(0, -1))
    , $ = t => og.test(t)
    , tn = t => V1.test(t)
    , K1 = new Set(["length", "size", "percentage"])
    , G1 = t => Jr(t, K1, ag)
    , Y1 = t => Jr(t, "position", ag)
    , X1 = new Set(["image", "url"])
    , J1 = t => Jr(t, X1, rw)
    , ew = t => Jr(t, "", nw)
    , di = () => !0
    , Jr = (t, e, n) => {
        const r = og.exec(t);
        return r ? r[1] ? typeof e == "string" ? r[1] === e : e.has(r[1]) : n(r[2]) : !1
    }
    , tw = t => q1.test(t) && !H1.test(t)
    , ag = () => !1
    , nw = t => W1.test(t)
    , rw = t => Z1.test(t)
    , iw = () => {
        const t = ne("colors")
            , e = ne("spacing")
            , n = ne("blur")
            , r = ne("brightness")
            , i = ne("borderColor")
            , s = ne("borderRadius")
            , o = ne("borderSpacing")
            , a = ne("borderWidth")
            , u = ne("contrast")
            , l = ne("grayscale")
            , c = ne("hueRotate")
            , f = ne("invert")
            , p = ne("gap")
            , g = ne("gradientColorStops")
            , y = ne("gradientColorStopPositions")
            , v = ne("inset")
            , C = ne("margin")
            , h = ne("opacity")
            , d = ne("padding")
            , m = ne("saturate")
            , _ = ne("scale")
            , k = ne("sepia")
            , b = ne("skew")
            , N = ne("space")
            , P = ne("translate")
            , X = () => ["auto", "contain", "none"]
            , z = () => ["auto", "hidden", "clip", "visible", "scroll"]
            , ve = () => ["auto", $, e]
            , Z = () => [$, e]
            , Ce = () => ["", Dt, en]
            , be = () => ["auto", Rr, $]
            , ft = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
            , me = () => ["solid", "dashed", "dotted", "double", "none"]
            , Je = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
            , E = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
            , I = () => ["", "0", $]
            , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
            , V = () => [Rr, $];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [di],
                spacing: [Dt, en],
                blur: ["none", "", tn, $],
                brightness: V(),
                borderColor: [t],
                borderRadius: ["none", "", "full", tn, $],
                borderSpacing: Z(),
                borderWidth: Ce(),
                contrast: V(),
                grayscale: I(),
                hueRotate: V(),
                invert: I(),
                gap: Z(),
                gradientColorStops: [t],
                gradientColorStopPositions: [Q1, en],
                inset: ve(),
                margin: ve(),
                opacity: V(),
                padding: Z(),
                saturate: V(),
                scale: V(),
                sepia: I(),
                skew: V(),
                space: Z(),
                translate: Z()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", $]
                }],
                container: ["container"],
                columns: [{
                    columns: [tn]
                }],
                "break-after": [{
                    "break-after": L()
                }],
                "break-before": [{
                    "break-before": L()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...ft(), $]
                }],
                overflow: [{
                    overflow: z()
                }],
                "overflow-x": [{
                    "overflow-x": z()
                }],
                "overflow-y": [{
                    "overflow-y": z()
                }],
                overscroll: [{
                    overscroll: X()
                }],
                "overscroll-x": [{
                    "overscroll-x": X()
                }],
                "overscroll-y": [{
                    "overscroll-y": X()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [v]
                }],
                "inset-x": [{
                    "inset-x": [v]
                }],
                "inset-y": [{
                    "inset-y": [v]
                }],
                start: [{
                    start: [v]
                }],
                end: [{
                    end: [v]
                }],
                top: [{
                    top: [v]
                }],
                right: [{
                    right: [v]
                }],
                bottom: [{
                    bottom: [v]
                }],
                left: [{
                    left: [v]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", fi, $]
                }],
                basis: [{
                    basis: ve()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", $]
                }],
                grow: [{
                    grow: I()
                }],
                shrink: [{
                    shrink: I()
                }],
                order: [{
                    order: ["first", "last", "none", fi, $]
                }],
                "grid-cols": [{
                    "grid-cols": [di]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", fi, $]
                    }, $]
                }],
                "col-start": [{
                    "col-start": be()
                }],
                "col-end": [{
                    "col-end": be()
                }],
                "grid-rows": [{
                    "grid-rows": [di]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [fi, $]
                    }, $]
                }],
                "row-start": [{
                    "row-start": be()
                }],
                "row-end": [{
                    "row-end": be()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", $]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", $]
                }],
                gap: [{
                    gap: [p]
                }],
                "gap-x": [{
                    "gap-x": [p]
                }],
                "gap-y": [{
                    "gap-y": [p]
                }],
                "justify-content": [{
                    justify: ["normal", ...E()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...E(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...E(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [d]
                }],
                px: [{
                    px: [d]
                }],
                py: [{
                    py: [d]
                }],
                ps: [{
                    ps: [d]
                }],
                pe: [{
                    pe: [d]
                }],
                pt: [{
                    pt: [d]
                }],
                pr: [{
                    pr: [d]
                }],
                pb: [{
                    pb: [d]
                }],
                pl: [{
                    pl: [d]
                }],
                m: [{
                    m: [C]
                }],
                mx: [{
                    mx: [C]
                }],
                my: [{
                    my: [C]
                }],
                ms: [{
                    ms: [C]
                }],
                me: [{
                    me: [C]
                }],
                mt: [{
                    mt: [C]
                }],
                mr: [{
                    mr: [C]
                }],
                mb: [{
                    mb: [C]
                }],
                ml: [{
                    ml: [C]
                }],
                "space-x": [{
                    "space-x": [N]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [N]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", $, e]
                }],
                "min-w": [{
                    "min-w": [$, e, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [$, e, "none", "full", "min", "max", "fit", "prose", {
                        screen: [tn]
                    }, tn]
                }],
                h: [{
                    h: [$, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [$, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [$, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [$, e, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", tn, en]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", su]
                }],
                "font-family": [{
                    font: [di]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", $]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", Rr, su]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Dt, $]
                }],
                "list-image": [{
                    "list-image": ["none", $]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", $]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [t]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [h]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [t]
                }],
                "text-opacity": [{
                    "text-opacity": [h]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...me(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", Dt, en]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", Dt, $]
                }],
                "text-decoration-color": [{
                    decoration: [t]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: Z()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", $]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", $]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [h]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...ft(), Y1]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", G1]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, J1]
                }],
                "bg-color": [{
                    bg: [t]
                }],
                "gradient-from-pos": [{
                    from: [y]
                }],
                "gradient-via-pos": [{
                    via: [y]
                }],
                "gradient-to-pos": [{
                    to: [y]
                }],
                "gradient-from": [{
                    from: [g]
                }],
                "gradient-via": [{
                    via: [g]
                }],
                "gradient-to": [{
                    to: [g]
                }],
                rounded: [{
                    rounded: [s]
                }],
                "rounded-s": [{
                    "rounded-s": [s]
                }],
                "rounded-e": [{
                    "rounded-e": [s]
                }],
                "rounded-t": [{
                    "rounded-t": [s]
                }],
                "rounded-r": [{
                    "rounded-r": [s]
                }],
                "rounded-b": [{
                    "rounded-b": [s]
                }],
                "rounded-l": [{
                    "rounded-l": [s]
                }],
                "rounded-ss": [{
                    "rounded-ss": [s]
                }],
                "rounded-se": [{
                    "rounded-se": [s]
                }],
                "rounded-ee": [{
                    "rounded-ee": [s]
                }],
                "rounded-es": [{
                    "rounded-es": [s]
                }],
                "rounded-tl": [{
                    "rounded-tl": [s]
                }],
                "rounded-tr": [{
                    "rounded-tr": [s]
                }],
                "rounded-br": [{
                    "rounded-br": [s]
                }],
                "rounded-bl": [{
                    "rounded-bl": [s]
                }],
                "border-w": [{
                    border: [a]
                }],
                "border-w-x": [{
                    "border-x": [a]
                }],
                "border-w-y": [{
                    "border-y": [a]
                }],
                "border-w-s": [{
                    "border-s": [a]
                }],
                "border-w-e": [{
                    "border-e": [a]
                }],
                "border-w-t": [{
                    "border-t": [a]
                }],
                "border-w-r": [{
                    "border-r": [a]
                }],
                "border-w-b": [{
                    "border-b": [a]
                }],
                "border-w-l": [{
                    "border-l": [a]
                }],
                "border-opacity": [{
                    "border-opacity": [h]
                }],
                "border-style": [{
                    border: [...me(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [a]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [a]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [h]
                }],
                "divide-style": [{
                    divide: me()
                }],
                "border-color": [{
                    border: [i]
                }],
                "border-color-x": [{
                    "border-x": [i]
                }],
                "border-color-y": [{
                    "border-y": [i]
                }],
                "border-color-s": [{
                    "border-s": [i]
                }],
                "border-color-e": [{
                    "border-e": [i]
                }],
                "border-color-t": [{
                    "border-t": [i]
                }],
                "border-color-r": [{
                    "border-r": [i]
                }],
                "border-color-b": [{
                    "border-b": [i]
                }],
                "border-color-l": [{
                    "border-l": [i]
                }],
                "divide-color": [{
                    divide: [i]
                }],
                "outline-style": [{
                    outline: ["", ...me()]
                }],
                "outline-offset": [{
                    "outline-offset": [Dt, $]
                }],
                "outline-w": [{
                    outline: [Dt, en]
                }],
                "outline-color": [{
                    outline: [t]
                }],
                "ring-w": [{
                    ring: Ce()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [t]
                }],
                "ring-opacity": [{
                    "ring-opacity": [h]
                }],
                "ring-offset-w": [{
                    "ring-offset": [Dt, en]
                }],
                "ring-offset-color": [{
                    "ring-offset": [t]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", tn, ew]
                }],
                "shadow-color": [{
                    shadow: [di]
                }],
                opacity: [{
                    opacity: [h]
                }],
                "mix-blend": [{
                    "mix-blend": [...Je(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": Je()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [u]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", tn, $]
                }],
                grayscale: [{
                    grayscale: [l]
                }],
                "hue-rotate": [{
                    "hue-rotate": [c]
                }],
                invert: [{
                    invert: [f]
                }],
                saturate: [{
                    saturate: [m]
                }],
                sepia: [{
                    sepia: [k]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [u]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [l]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [c]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [f]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [h]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [m]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [k]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [o]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [o]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [o]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", $]
                }],
                duration: [{
                    duration: V()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", $]
                }],
                delay: [{
                    delay: V()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", $]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [_]
                }],
                "scale-x": [{
                    "scale-x": [_]
                }],
                "scale-y": [{
                    "scale-y": [_]
                }],
                rotate: [{
                    rotate: [fi, $]
                }],
                "translate-x": [{
                    "translate-x": [P]
                }],
                "translate-y": [{
                    "translate-y": [P]
                }],
                "skew-x": [{
                    "skew-x": [b]
                }],
                "skew-y": [{
                    "skew-y": [b]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", $]
                }],
                accent: [{
                    accent: ["auto", t]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", $]
                }],
                "caret-color": [{
                    caret: [t]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": Z()
                }],
                "scroll-mx": [{
                    "scroll-mx": Z()
                }],
                "scroll-my": [{
                    "scroll-my": Z()
                }],
                "scroll-ms": [{
                    "scroll-ms": Z()
                }],
                "scroll-me": [{
                    "scroll-me": Z()
                }],
                "scroll-mt": [{
                    "scroll-mt": Z()
                }],
                "scroll-mr": [{
                    "scroll-mr": Z()
                }],
                "scroll-mb": [{
                    "scroll-mb": Z()
                }],
                "scroll-ml": [{
                    "scroll-ml": Z()
                }],
                "scroll-p": [{
                    "scroll-p": Z()
                }],
                "scroll-px": [{
                    "scroll-px": Z()
                }],
                "scroll-py": [{
                    "scroll-py": Z()
                }],
                "scroll-ps": [{
                    "scroll-ps": Z()
                }],
                "scroll-pe": [{
                    "scroll-pe": Z()
                }],
                "scroll-pt": [{
                    "scroll-pt": Z()
                }],
                "scroll-pr": [{
                    "scroll-pr": Z()
                }],
                "scroll-pb": [{
                    "scroll-pb": Z()
                }],
                "scroll-pl": [{
                    "scroll-pl": Z()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", $]
                }],
                fill: [{
                    fill: [t, "none"]
                }],
                "stroke-w": [{
                    stroke: [Dt, en, su]
                }],
                stroke: [{
                    stroke: [t, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    }
    , Vr = $1(iw);
function vd(t) {
    const { stream: e, className: n, ...r } = t
        , i = K.useRef(null);
    return K.useLayoutEffect(() => {
        i.current && e && (i.current.srcObject = e)
    }
        , [e]),
        j.jsx("div", {
            className: Vr("overflow-hidden relative", n),
            children: j.jsx("video", {
                ref: i,
                autoPlay: !0,
                playsInline: !0,
                controls: !1,
                className: Vr("w-full h-full absolute top-1/2 -translate-y-1/2 object-cover -scale-x-[1]"),
                ...r
            })
        })
}
function sw(t) {
    const { className: e, ...n } = t;
    return j.jsx("p", {
        className: Vr(e, "p-2 rounded-xl bg-orange-400/10 text-orange-400 border border-orange-400 text-center"),
        ...n
    })
}
const ow = "/assets/static-BxuoCg2I.mp4";
function aw(t) {
    const { className: e, ...n } = t;
    return j.jsx("video", {
        src: ow,
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        controls: !1,
        className: Vr("object-cover", e),
        ...n
    })
}
var ug = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
    , _d = ot.createContext && ot.createContext(ug)
    , uw = ["attr", "size", "title"];
function lw(t, e) {
    if (t == null)
        return {};
    var n = cw(t, e), r, i;
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        for (i = 0; i < s.length; i++)
            r = s[i],
                !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r])
    }
    return n
}
function cw(t, e) {
    if (t == null)
        return {};
    var n = {};
    for (var r in t)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
            if (e.indexOf(r) >= 0)
                continue;
            n[r] = t[r]
        }
    return n
}
function Ho() {
    return Ho = Object.assign ? Object.assign.bind() : function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }
        ,
        Ho.apply(this, arguments)
}
function wd(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function (i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable
        })),
            n.push.apply(n, r)
    }
    return n
}
function Wo(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? wd(Object(n), !0).forEach(function (r) {
            fw(t, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wd(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return t
}
function fw(t, e, n) {
    return e = dw(e),
        e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
}
function dw(t) {
    var e = pw(t, "string");
    return typeof e == "symbol" ? e : e + ""
}
function pw(t, e) {
    if (typeof t != "object" || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(t, e || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}
function lg(t) {
    return t && t.map((e, n) => ot.createElement(e.tag, Wo({
        key: n
    }, e.attr), lg(e.child)))
}
function hs(t) {
    return e => ot.createElement(hw, Ho({
        attr: Wo({}, t.attr)
    }, e), lg(t.child))
}
function hw(t) {
    var e = n => {
        var { attr: r, size: i, title: s } = t, o = lw(t, uw), a = i || n.size || "1em", u;
        return n.className && (u = n.className),
            t.className && (u = (u ? u + " " : "") + t.className),
            ot.createElement("svg", Ho({
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0"
            }, n.attr, r, o, {
                className: u,
                style: Wo(Wo({
                    color: t.color || n.color
                }, n.style), t.style),
                height: a,
                width: a,
                xmlns: "http://www.w3.org/2000/svg"
            }), s && ot.createElement("title", null, s), t.children)
    }
        ;
    return _d !== void 0 ? ot.createElement(_d.Consumer, null, n => e(n)) : e(ug)
}
function mw(t) {
    return hs({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M18 21a8 8 0 0 0-16 0"
            },
            child: []
        }, {
            tag: "circle",
            attr: {
                cx: "10",
                cy: "8",
                r: "5"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"
            },
            child: []
        }]
    })(t)
}
function gw() {
    T1("users-online");
    const t = ng("users-online", null);
    return t ? j.jsxs("div", {
        className: "flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full text-sm text-white",
        children: [j.jsx(mw, {}), " ", t.toLocaleString()]
    }) : null
}
function yw(t) {
    return hs({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M8.014 12.135c.074 2.062 1.789 3.777 3.851 3.851l-3.851-3.851z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M4 20h11.879l-2-2H4V8.121L2.144 6.265A1.976 1.976 0 0 0 2 7v11c0 1.103.897 2 2 2zM20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.997.997 0 0 0-.707.293L6.586 5h-.172L3.707 2.293 2.293 3.707l18 18 1.414-1.414-.626-.626A1.98 1.98 0 0 0 22 18V7c0-1.103-.897-2-2-2zm-6.081 7.505-2.424-2.425c.163-.046.331-.08.505-.08 1.065 0 2 .935 2 2 0 .174-.033.342-.081.505zm1.502 1.501A3.881 3.881 0 0 0 16 12c0-2.168-1.832-4-4-4-.729 0-1.412.22-2.007.579L7.914 6.5l2.5-2.5h3.172l2.707 2.707A.996.996 0 0 0 17 7l3-.001V18h-.586l-3.993-3.994z"
            },
            child: []
        }]
    })(t)
}
function vw(t) {
    return hs({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"
            },
            child: []
        }]
    })(t)
}
function _w(t) {
    return hs({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "m21.707 20.293-3.388-3.388A7.942 7.942 0 0 0 20 12.021h-2a5.95 5.95 0 0 1-1.109 3.456l-1.452-1.452c.348-.591.561-1.27.561-2.004v-6C16 3.804 14.215 2 12.021 2c-.07 0-.14.009-.209.025A4.005 4.005 0 0 0 8 6.021v.565L3.707 2.293 2.293 3.707l18 18 1.414-1.414zM10 6.021c0-1.103.897-2 2-2a.918.918 0 0 0 .164-.015C13.188 4.08 14 4.956 14 6.021v6c0 .172-.029.335-.071.494L10 8.586V6.021zm-4 6H4c0 4.072 3.06 7.436 7 7.931v2.069h2v-2.07a7.993 7.993 0 0 0 2.218-.611l-1.558-1.558a5.979 5.979 0 0 1-1.66.239c-3.309 0-6-2.692-6-6z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M8.011 12.132a3.993 3.993 0 0 0 3.877 3.877l-3.877-3.877z"
            },
            child: []
        }]
    })(t)
}
function ww(t) {
    return hs({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M16 12V6c0-2.217-1.785-4.021-3.979-4.021a.933.933 0 0 0-.209.025A4.006 4.006 0 0 0 8 6v6c0 2.206 1.794 4 4 4s4-1.794 4-4zm-6 0V6c0-1.103.897-2 2-2a.89.89 0 0 0 .163-.015C13.188 4.06 14 4.935 14 6v6c0 1.103-.897 2-2 2s-2-.897-2-2z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M6 12H4c0 4.072 3.061 7.436 7 7.931V22h2v-2.069c3.939-.495 7-3.858 7-7.931h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6z"
            },
            child: []
        }]
    })(t)
}
function Sw() {
    return j.jsxs("div", {
        className: "top-1/2 -translate-y-1/2 right-3 absolute z-10 flex flex-col gap-3",
        children: [j.jsx(Ew, {}), j.jsx(kw, {})]
    })
}
function cg(t) {
    const { icon: e, className: n, ...r } = t;
    return j.jsx("button", {
        className: Vr("flex items-center justify-center h-14 w-14 rounded-full bg-black/25 backdrop-blur-md px-2 text-white text-xl", n),
        ...r,
        children: e
    })
}
function Ew() {
    const t = Nc()
        , [e, n] = K.useState(!0)
        , r = () => {
            if (t) {
                const a = !e;
                t.getVideoTracks().forEach(u => u.enabled = a),
                    n(a)
            }
        }
        , o = e ? j.jsx(vw, {}) : j.jsx(yw, {});
    return j.jsx(cg, {
        icon: o,
        onClick: r,
        className: Fc(!e && "bg-red-500/25")
    })
}
function kw() {
    const t = Nc()
        , [e, n] = K.useState(!0)
        , r = () => {
            if (t) {
                const a = !e;
                t.getAudioTracks().forEach(u => u.enabled = a),
                    n(a)
            }
        }
        , o = e ? j.jsx(ww, {}) : j.jsx(_w, {});
    return j.jsx(cg, {
        icon: o,
        onClick: r,
        className: Fc(!e && "bg-red-500/25")
    })
}
const Sd = "data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2764_97)'%3e%3cpath%20d='M209.137%20258.307C209.137%20213.418%20172.747%20177.027%20127.858%20177.027C82.9683%20177.027%2046.5781%20213.418%2046.5781%20258.307H209.137Z'%20fill='white'/%3e%3cpath%20d='M127.863%20163.274C151.687%20163.274%20171%20143.961%20171%20120.137C171%2096.313%20151.687%2077%20127.863%2077C104.04%2077%2084.7266%2096.313%2084.7266%20120.137C84.7266%20143.961%20104.04%20163.274%20127.863%20163.274Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2764_97'%3e%3crect%20width='256'%20height='256'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
function xw() {
    const t = ng("user-info", null);
    return t ? j.jsxs("div", {
        className: "flex items-center gap-3",
        children: [j.jsx("img", {
            src: t.photo_url ?? Sd,
            onError: e => {
                e.currentTarget.src = Sd
            }
            ,
            className: "h-12 w-12 object-cover rounded-full bg-black/25 backdrop-blur-md"
        }), j.jsx("div", {
            className: "max-w-48 truncate font-semibold",
            style: {
                textShadow: "0px 2px 4px #00000033"
            },
            children: t.name
        })]
    }) : null
}
function Cw(t) {
    const { children: e, className: n, loading: r = !1, block: i = !1, disabled: s = !1, ...o } = t;
    return j.jsx("button", {
        className: Vr("rounded-lg p-3 bg-black/25 text-white backdrop-blur-lg font-semibold text-base", r && "animate-pulse", i && "w-full block", n),
        disabled: s || r,
        ...o,
        children: e
    })
}
function bw() {
    const { status: t, localStream: e, remoteStream: n, joinChat: r } = O1();
    let i = "Start";
    return t === "pairing" && (i = "Looking for a chat..."),
        t === "paired" && (i = "Next chat"),
        K.useLayoutEffect(() => {
            document.body.style.overflow = "hidden"
        }
            , []),
        K.useEffect(() => {
            t === "paired" && b1("user-info")
        }
            , [t]),
        e ? j.jsxs(Ed, {
            children: [j.jsxs(Tw, {
                children: [t === "paired" ? j.jsx(xw, {}) : j.jsx("div", {}), j.jsx(gw, {})]
            }), j.jsxs("div", {
                className: "relative flex-1 h-full flex flex-col",
                children: [j.jsxs("div", {
                    className: "flex-1 flex flex-col",
                    children: [t !== "paired" && j.jsx(aw, {
                        muted: !0,
                        className: "flex-1"
                    }), t === "paired" && n && j.jsx(vd, {
                        stream: n,
                        className: "flex-1"
                    })]
                }), j.jsxs("div", {
                    className: "relative flex-1 flex flex-col",
                    children: [j.jsx(Sw, {}), j.jsx(vd, {
                        stream: e,
                        muted: !0,
                        className: "flex-1"
                    })]
                })]
            }), j.jsx(Ow, {
                children: j.jsx(Cw, {
                    onClick: r,
                    loading: t === "pairing",
                    block: !0,
                    className: "max-w-60",
                    children: i
                })
            })]
        }) : j.jsx(Ed, {
            children: j.jsx(sw, {
                children: "Please permit usage of camera and microphone to continue"
            })
        })
}
function Ed(t) {
    const { children: e } = t;
    return j.jsx("div", {
        className: "px-0 h-svh flex flex-col",
        children: e
    })
}
function Tw(t) {
    const { children: e } = t;
    return j.jsx("div", {
        className: "absolute z-10 p-3 top-[var--tg-safe-area-inset-top] left-[var(--tg-safe-area-inset-left)] right-[var(--tg-safe-area-inset-right)] w-full flex items-center justify-between",
        children: e
    })
}
function Ow(t) {
    const { children: e } = t;
    return j.jsx("div", {
        className: "absolute w-full bottom-[var(--tg-safe-area-inset-bottom,_.5rem)] px-5 left-[var(--tg-safe-area-inset-left)] right-[var(--tg-safe-area-inset-right)] flex items-center justify-center",
        children: e
    })
}
function gl(t, e) {
    return gl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (n, r) {
        return n.__proto__ = r,
            n
    }
        ,
        gl(t, e)
}
function va(t, e) {
    t.prototype = Object.create(e.prototype),
        t.prototype.constructor = t,
        gl(t, e)
}
var _a = function () {
    function t() {
        this.listeners = []
    }
    var e = t.prototype;
    return e.subscribe = function (r) {
        var i = this
            , s = r || function () { }
            ;
        return this.listeners.push(s),
            this.onSubscribe(),
            function () {
                i.listeners = i.listeners.filter(function (o) {
                    return o !== s
                }),
                    i.onUnsubscribe()
            }
    }
        ,
        e.hasListeners = function () {
            return this.listeners.length > 0
        }
        ,
        e.onSubscribe = function () { }
        ,
        e.onUnsubscribe = function () { }
        ,
        t
}();
function G() {
    return G = Object.assign ? Object.assign.bind() : function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                ({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }
        ,
        G.apply(null, arguments)
}
var fg = typeof window > "u";
function Ae() { }
function Nw(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Pw(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function Zo(t) {
    return Array.isArray(t) ? t : [t]
}
function Rw(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function ou(t, e, n) {
    return wa(t) ? typeof e == "function" ? G({}, n, {
        queryKey: t,
        queryFn: e
    }) : G({}, e, {
        queryKey: t
    }) : t
}
function sn(t, e, n) {
    return wa(t) ? [G({}, e, {
        queryKey: t
    }), n] : [t || {}, e]
}
function Iw(t, e) {
    if (t === !0 && e === !0 || t == null && e == null)
        return "all";
    if (t === !1 && e === !1)
        return "none";
    var n = t ?? !e;
    return n ? "active" : "inactive"
}
function kd(t, e) {
    var n = t.active
        , r = t.exact
        , i = t.fetching
        , s = t.inactive
        , o = t.predicate
        , a = t.queryKey
        , u = t.stale;
    if (wa(a)) {
        if (r) {
            if (e.queryHash !== zc(a, e.options))
                return !1
        } else if (!Qo(e.queryKey, a))
            return !1
    }
    var l = Iw(n, s);
    if (l === "none")
        return !1;
    if (l !== "all") {
        var c = e.isActive();
        if (l === "active" && !c || l === "inactive" && c)
            return !1
    }
    return !(typeof u == "boolean" && e.isStale() !== u || typeof i == "boolean" && e.isFetching() !== i || o && !o(e))
}
function xd(t, e) {
    var n = t.exact
        , r = t.fetching
        , i = t.predicate
        , s = t.mutationKey;
    if (wa(s)) {
        if (!e.options.mutationKey)
            return !1;
        if (n) {
            if (Fn(e.options.mutationKey) !== Fn(s))
                return !1
        } else if (!Qo(e.options.mutationKey, s))
            return !1
    }
    return !(typeof r == "boolean" && e.state.status === "loading" !== r || i && !i(e))
}
function zc(t, e) {
    var n = (e == null ? void 0 : e.queryKeyHashFn) || Fn;
    return n(t)
}
function Fn(t) {
    var e = Zo(t);
    return Aw(e)
}
function Aw(t) {
    return JSON.stringify(t, function (e, n) {
        return yl(n) ? Object.keys(n).sort().reduce(function (r, i) {
            return r[i] = n[i],
                r
        }, {}) : n
    })
}
function Qo(t, e) {
    return dg(Zo(t), Zo(e))
}
function dg(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some(function (n) {
        return !dg(t[n], e[n])
    }) : !1
}
function pg(t, e) {
    if (t === e)
        return t;
    var n = Array.isArray(t) && Array.isArray(e);
    if (n || yl(t) && yl(e)) {
        for (var r = n ? t.length : Object.keys(t).length, i = n ? e : Object.keys(e), s = i.length, o = n ? [] : {}, a = 0, u = 0; u < s; u++) {
            var l = n ? u : i[u];
            o[l] = pg(t[l], e[l]),
                o[l] === t[l] && a++
        }
        return r === s && a === r ? t : o
    }
    return e
}
function yl(t) {
    if (!Cd(t))
        return !1;
    var e = t.constructor;
    if (typeof e > "u")
        return !0;
    var n = e.prototype;
    return !(!Cd(n) || !n.hasOwnProperty("isPrototypeOf"))
}
function Cd(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function wa(t) {
    return typeof t == "string" || Array.isArray(t)
}
function Dw(t) {
    return new Promise(function (e) {
        setTimeout(e, t)
    }
    )
}
function bd(t) {
    Promise.resolve().then(t).catch(function (e) {
        return setTimeout(function () {
            throw e
        })
    })
}
function hg() {
    if (typeof AbortController == "function")
        return new AbortController
}
var Lw = function (t) {
    va(e, t);
    function e() {
        var r;
        return r = t.call(this) || this,
            r.setup = function (i) {
                var s;
                if (!fg && ((s = window) != null && s.addEventListener)) {
                    var o = function () {
                        return i()
                    };
                    return window.addEventListener("visibilitychange", o, !1),
                        window.addEventListener("focus", o, !1),
                        function () {
                            window.removeEventListener("visibilitychange", o),
                                window.removeEventListener("focus", o)
                        }
                }
            }
            ,
            r
    }
    var n = e.prototype;
    return n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup)
    }
        ,
        n.onUnsubscribe = function () {
            if (!this.hasListeners()) {
                var i;
                (i = this.cleanup) == null || i.call(this),
                    this.cleanup = void 0
            }
        }
        ,
        n.setEventListener = function (i) {
            var s, o = this;
            this.setup = i,
                (s = this.cleanup) == null || s.call(this),
                this.cleanup = i(function (a) {
                    typeof a == "boolean" ? o.setFocused(a) : o.onFocus()
                })
        }
        ,
        n.setFocused = function (i) {
            this.focused = i,
                i && this.onFocus()
        }
        ,
        n.onFocus = function () {
            this.listeners.forEach(function (i) {
                i()
            })
        }
        ,
        n.isFocused = function () {
            return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState)
        }
        ,
        e
}(_a)
    , lo = new Lw
    , Mw = function (t) {
        va(e, t);
        function e() {
            var r;
            return r = t.call(this) || this,
                r.setup = function (i) {
                    var s;
                    if (!fg && ((s = window) != null && s.addEventListener)) {
                        var o = function () {
                            return i()
                        };
                        return window.addEventListener("online", o, !1),
                            window.addEventListener("offline", o, !1),
                            function () {
                                window.removeEventListener("online", o),
                                    window.removeEventListener("offline", o)
                            }
                    }
                }
                ,
                r
        }
        var n = e.prototype;
        return n.onSubscribe = function () {
            this.cleanup || this.setEventListener(this.setup)
        }
            ,
            n.onUnsubscribe = function () {
                if (!this.hasListeners()) {
                    var i;
                    (i = this.cleanup) == null || i.call(this),
                        this.cleanup = void 0
                }
            }
            ,
            n.setEventListener = function (i) {
                var s, o = this;
                this.setup = i,
                    (s = this.cleanup) == null || s.call(this),
                    this.cleanup = i(function (a) {
                        typeof a == "boolean" ? o.setOnline(a) : o.onOnline()
                    })
            }
            ,
            n.setOnline = function (i) {
                this.online = i,
                    i && this.onOnline()
            }
            ,
            n.onOnline = function () {
                this.listeners.forEach(function (i) {
                    i()
                })
            }
            ,
            n.isOnline = function () {
                return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine
            }
            ,
            e
    }(_a)
    , co = new Mw;
function jw(t) {
    return Math.min(1e3 * Math.pow(2, t), 3e4)
}
function Ko(t) {
    return typeof (t == null ? void 0 : t.cancel) == "function"
}
var mg = function (e) {
    this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
};
function au(t) {
    return t instanceof mg
}
var gg = function (e) {
    var n = this, r = !1, i, s, o, a;
    this.abort = e.abort,
        this.cancel = function (p) {
            return i == null ? void 0 : i(p)
        }
        ,
        this.cancelRetry = function () {
            r = !0
        }
        ,
        this.continueRetry = function () {
            r = !1
        }
        ,
        this.continue = function () {
            return s == null ? void 0 : s()
        }
        ,
        this.failureCount = 0,
        this.isPaused = !1,
        this.isResolved = !1,
        this.isTransportCancelable = !1,
        this.promise = new Promise(function (p, g) {
            o = p,
                a = g
        }
        );
    var u = function (g) {
        n.isResolved || (n.isResolved = !0,
            e.onSuccess == null || e.onSuccess(g),
            s == null || s(),
            o(g))
    }
        , l = function (g) {
            n.isResolved || (n.isResolved = !0,
                e.onError == null || e.onError(g),
                s == null || s(),
                a(g))
        }
        , c = function () {
            return new Promise(function (g) {
                s = g,
                    n.isPaused = !0,
                    e.onPause == null || e.onPause()
            }
            ).then(function () {
                s = void 0,
                    n.isPaused = !1,
                    e.onContinue == null || e.onContinue()
            })
        }
        , f = function p() {
            if (!n.isResolved) {
                var g;
                try {
                    g = e.fn()
                } catch (y) {
                    g = Promise.reject(y)
                }
                i = function (v) {
                    if (!n.isResolved && (l(new mg(v)),
                        n.abort == null || n.abort(),
                        Ko(g)))
                        try {
                            g.cancel()
                        } catch { }
                }
                    ,
                    n.isTransportCancelable = Ko(g),
                    Promise.resolve(g).then(u).catch(function (y) {
                        var v, C;
                        if (!n.isResolved) {
                            var h = (v = e.retry) != null ? v : 3
                                , d = (C = e.retryDelay) != null ? C : jw
                                , m = typeof d == "function" ? d(n.failureCount, y) : d
                                , _ = h === !0 || typeof h == "number" && n.failureCount < h || typeof h == "function" && h(n.failureCount, y);
                            if (r || !_) {
                                l(y);
                                return
                            }
                            n.failureCount++,
                                e.onFail == null || e.onFail(n.failureCount, y),
                                Dw(m).then(function () {
                                    if (!lo.isFocused() || !co.isOnline())
                                        return c()
                                }).then(function () {
                                    r ? l(y) : p()
                                })
                        }
                    })
            }
        };
    f()
}
    , Fw = function () {
        function t() {
            this.queue = [],
                this.transactions = 0,
                this.notifyFn = function (n) {
                    n()
                }
                ,
                this.batchNotifyFn = function (n) {
                    n()
                }
        }
        var e = t.prototype;
        return e.batch = function (r) {
            var i;
            this.transactions++;
            try {
                i = r()
            } finally {
                this.transactions--,
                    this.transactions || this.flush()
            }
            return i
        }
            ,
            e.schedule = function (r) {
                var i = this;
                this.transactions ? this.queue.push(r) : bd(function () {
                    i.notifyFn(r)
                })
            }
            ,
            e.batchCalls = function (r) {
                var i = this;
                return function () {
                    for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
                        o[a] = arguments[a];
                    i.schedule(function () {
                        r.apply(void 0, o)
                    })
                }
            }
            ,
            e.flush = function () {
                var r = this
                    , i = this.queue;
                this.queue = [],
                    i.length && bd(function () {
                        r.batchNotifyFn(function () {
                            i.forEach(function (s) {
                                r.notifyFn(s)
                            })
                        })
                    })
            }
            ,
            e.setNotifyFunction = function (r) {
                this.notifyFn = r
            }
            ,
            e.setBatchNotifyFunction = function (r) {
                this.batchNotifyFn = r
            }
            ,
            t
    }()
    , Ee = new Fw
    , yg = console;
function vg() {
    return yg
}
function zw(t) {
    yg = t
}
var $w = function () {
    function t(n) {
        this.abortSignalConsumed = !1,
            this.hadObservers = !1,
            this.defaultOptions = n.defaultOptions,
            this.setOptions(n.options),
            this.observers = [],
            this.cache = n.cache,
            this.queryKey = n.queryKey,
            this.queryHash = n.queryHash,
            this.initialState = n.state || this.getDefaultState(this.options),
            this.state = this.initialState,
            this.meta = n.meta,
            this.scheduleGc()
    }
    var e = t.prototype;
    return e.setOptions = function (r) {
        var i;
        this.options = G({}, this.defaultOptions, r),
            this.meta = r == null ? void 0 : r.meta,
            this.cacheTime = Math.max(this.cacheTime || 0, (i = this.options.cacheTime) != null ? i : 5 * 60 * 1e3)
    }
        ,
        e.setDefaultOptions = function (r) {
            this.defaultOptions = r
        }
        ,
        e.scheduleGc = function () {
            var r = this;
            this.clearGcTimeout(),
                Pw(this.cacheTime) && (this.gcTimeout = setTimeout(function () {
                    r.optionalRemove()
                }, this.cacheTime))
        }
        ,
        e.clearGcTimeout = function () {
            this.gcTimeout && (clearTimeout(this.gcTimeout),
                this.gcTimeout = void 0)
        }
        ,
        e.optionalRemove = function () {
            this.observers.length || (this.state.isFetching ? this.hadObservers && this.scheduleGc() : this.cache.remove(this))
        }
        ,
        e.setData = function (r, i) {
            var s, o, a = this.state.data, u = Nw(r, a);
            return (s = (o = this.options).isDataEqual) != null && s.call(o, a, u) ? u = a : this.options.structuralSharing !== !1 && (u = pg(a, u)),
                this.dispatch({
                    data: u,
                    type: "success",
                    dataUpdatedAt: i == null ? void 0 : i.updatedAt
                }),
                u
        }
        ,
        e.setState = function (r, i) {
            this.dispatch({
                type: "setState",
                state: r,
                setStateOptions: i
            })
        }
        ,
        e.cancel = function (r) {
            var i, s = this.promise;
            return (i = this.retryer) == null || i.cancel(r),
                s ? s.then(Ae).catch(Ae) : Promise.resolve()
        }
        ,
        e.destroy = function () {
            this.clearGcTimeout(),
                this.cancel({
                    silent: !0
                })
        }
        ,
        e.reset = function () {
            this.destroy(),
                this.setState(this.initialState)
        }
        ,
        e.isActive = function () {
            return this.observers.some(function (r) {
                return r.options.enabled !== !1
            })
        }
        ,
        e.isFetching = function () {
            return this.state.isFetching
        }
        ,
        e.isStale = function () {
            return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function (r) {
                return r.getCurrentResult().isStale
            })
        }
        ,
        e.isStaleByTime = function (r) {
            return r === void 0 && (r = 0),
                this.state.isInvalidated || !this.state.dataUpdatedAt || !Rw(this.state.dataUpdatedAt, r)
        }
        ,
        e.onFocus = function () {
            var r, i = this.observers.find(function (s) {
                return s.shouldFetchOnWindowFocus()
            });
            i && i.refetch(),
                (r = this.retryer) == null || r.continue()
        }
        ,
        e.onOnline = function () {
            var r, i = this.observers.find(function (s) {
                return s.shouldFetchOnReconnect()
            });
            i && i.refetch(),
                (r = this.retryer) == null || r.continue()
        }
        ,
        e.addObserver = function (r) {
            this.observers.indexOf(r) === -1 && (this.observers.push(r),
                this.hadObservers = !0,
                this.clearGcTimeout(),
                this.cache.notify({
                    type: "observerAdded",
                    query: this,
                    observer: r
                }))
        }
        ,
        e.removeObserver = function (r) {
            this.observers.indexOf(r) !== -1 && (this.observers = this.observers.filter(function (i) {
                return i !== r
            }),
                this.observers.length || (this.retryer && (this.retryer.isTransportCancelable || this.abortSignalConsumed ? this.retryer.cancel({
                    revert: !0
                }) : this.retryer.cancelRetry()),
                    this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
                this.cache.notify({
                    type: "observerRemoved",
                    query: this,
                    observer: r
                }))
        }
        ,
        e.getObserversCount = function () {
            return this.observers.length
        }
        ,
        e.invalidate = function () {
            this.state.isInvalidated || this.dispatch({
                type: "invalidate"
            })
        }
        ,
        e.fetch = function (r, i) {
            var s = this, o, a, u;
            if (this.state.isFetching) {
                if (this.state.dataUpdatedAt && (i != null && i.cancelRefetch))
                    this.cancel({
                        silent: !0
                    });
                else if (this.promise) {
                    var l;
                    return (l = this.retryer) == null || l.continueRetry(),
                        this.promise
                }
            }
            if (r && this.setOptions(r),
                !this.options.queryFn) {
                var c = this.observers.find(function (d) {
                    return d.options.queryFn
                });
                c && this.setOptions(c.options)
            }
            var f = Zo(this.queryKey)
                , p = hg()
                , g = {
                    queryKey: f,
                    pageParam: void 0,
                    meta: this.meta
                };
            Object.defineProperty(g, "signal", {
                enumerable: !0,
                get: function () {
                    if (p)
                        return s.abortSignalConsumed = !0,
                            p.signal
                }
            });
            var y = function () {
                return s.options.queryFn ? (s.abortSignalConsumed = !1,
                    s.options.queryFn(g)) : Promise.reject("Missing queryFn")
            }
                , v = {
                    fetchOptions: i,
                    options: this.options,
                    queryKey: f,
                    state: this.state,
                    fetchFn: y,
                    meta: this.meta
                };
            if ((o = this.options.behavior) != null && o.onFetch) {
                var C;
                (C = this.options.behavior) == null || C.onFetch(v)
            }
            if (this.revertState = this.state,
                !this.state.isFetching || this.state.fetchMeta !== ((a = v.fetchOptions) == null ? void 0 : a.meta)) {
                var h;
                this.dispatch({
                    type: "fetch",
                    meta: (h = v.fetchOptions) == null ? void 0 : h.meta
                })
            }
            return this.retryer = new gg({
                fn: v.fetchFn,
                abort: p == null || (u = p.abort) == null ? void 0 : u.bind(p),
                onSuccess: function (m) {
                    s.setData(m),
                        s.cache.config.onSuccess == null || s.cache.config.onSuccess(m, s),
                        s.cacheTime === 0 && s.optionalRemove()
                },
                onError: function (m) {
                    au(m) && m.silent || s.dispatch({
                        type: "error",
                        error: m
                    }),
                        au(m) || (s.cache.config.onError == null || s.cache.config.onError(m, s),
                            vg().error(m)),
                        s.cacheTime === 0 && s.optionalRemove()
                },
                onFail: function () {
                    s.dispatch({
                        type: "failed"
                    })
                },
                onPause: function () {
                    s.dispatch({
                        type: "pause"
                    })
                },
                onContinue: function () {
                    s.dispatch({
                        type: "continue"
                    })
                },
                retry: v.options.retry,
                retryDelay: v.options.retryDelay
            }),
                this.promise = this.retryer.promise,
                this.promise
        }
        ,
        e.dispatch = function (r) {
            var i = this;
            this.state = this.reducer(this.state, r),
                Ee.batch(function () {
                    i.observers.forEach(function (s) {
                        s.onQueryUpdate(r)
                    }),
                        i.cache.notify({
                            query: i,
                            type: "queryUpdated",
                            action: r
                        })
                })
        }
        ,
        e.getDefaultState = function (r) {
            var i = typeof r.initialData == "function" ? r.initialData() : r.initialData
                , s = typeof r.initialData < "u"
                , o = s ? typeof r.initialDataUpdatedAt == "function" ? r.initialDataUpdatedAt() : r.initialDataUpdatedAt : 0
                , a = typeof i < "u";
            return {
                data: i,
                dataUpdateCount: 0,
                dataUpdatedAt: a ? o ?? Date.now() : 0,
                error: null,
                errorUpdateCount: 0,
                errorUpdatedAt: 0,
                fetchFailureCount: 0,
                fetchMeta: null,
                isFetching: !1,
                isInvalidated: !1,
                isPaused: !1,
                status: a ? "success" : "idle"
            }
        }
        ,
        e.reducer = function (r, i) {
            var s, o;
            switch (i.type) {
                case "failed":
                    return G({}, r, {
                        fetchFailureCount: r.fetchFailureCount + 1
                    });
                case "pause":
                    return G({}, r, {
                        isPaused: !0
                    });
                case "continue":
                    return G({}, r, {
                        isPaused: !1
                    });
                case "fetch":
                    return G({}, r, {
                        fetchFailureCount: 0,
                        fetchMeta: (s = i.meta) != null ? s : null,
                        isFetching: !0,
                        isPaused: !1
                    }, !r.dataUpdatedAt && {
                        error: null,
                        status: "loading"
                    });
                case "success":
                    return G({}, r, {
                        data: i.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: (o = i.dataUpdatedAt) != null ? o : Date.now(),
                        error: null,
                        fetchFailureCount: 0,
                        isFetching: !1,
                        isInvalidated: !1,
                        isPaused: !1,
                        status: "success"
                    });
                case "error":
                    var a = i.error;
                    return au(a) && a.revert && this.revertState ? G({}, this.revertState) : G({}, r, {
                        error: a,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        isFetching: !1,
                        isPaused: !1,
                        status: "error"
                    });
                case "invalidate":
                    return G({}, r, {
                        isInvalidated: !0
                    });
                case "setState":
                    return G({}, r, i.state);
                default:
                    return r
            }
        }
        ,
        t
}()
    , Uw = function (t) {
        va(e, t);
        function e(r) {
            var i;
            return i = t.call(this) || this,
                i.config = r || {},
                i.queries = [],
                i.queriesMap = {},
                i
        }
        var n = e.prototype;
        return n.build = function (i, s, o) {
            var a, u = s.queryKey, l = (a = s.queryHash) != null ? a : zc(u, s), c = this.get(l);
            return c || (c = new $w({
                cache: this,
                queryKey: u,
                queryHash: l,
                options: i.defaultQueryOptions(s),
                state: o,
                defaultOptions: i.getQueryDefaults(u),
                meta: s.meta
            }),
                this.add(c)),
                c
        }
            ,
            n.add = function (i) {
                this.queriesMap[i.queryHash] || (this.queriesMap[i.queryHash] = i,
                    this.queries.push(i),
                    this.notify({
                        type: "queryAdded",
                        query: i
                    }))
            }
            ,
            n.remove = function (i) {
                var s = this.queriesMap[i.queryHash];
                s && (i.destroy(),
                    this.queries = this.queries.filter(function (o) {
                        return o !== i
                    }),
                    s === i && delete this.queriesMap[i.queryHash],
                    this.notify({
                        type: "queryRemoved",
                        query: i
                    }))
            }
            ,
            n.clear = function () {
                var i = this;
                Ee.batch(function () {
                    i.queries.forEach(function (s) {
                        i.remove(s)
                    })
                })
            }
            ,
            n.get = function (i) {
                return this.queriesMap[i]
            }
            ,
            n.getAll = function () {
                return this.queries
            }
            ,
            n.find = function (i, s) {
                var o = sn(i, s)
                    , a = o[0];
                return typeof a.exact > "u" && (a.exact = !0),
                    this.queries.find(function (u) {
                        return kd(a, u)
                    })
            }
            ,
            n.findAll = function (i, s) {
                var o = sn(i, s)
                    , a = o[0];
                return Object.keys(a).length > 0 ? this.queries.filter(function (u) {
                    return kd(a, u)
                }) : this.queries
            }
            ,
            n.notify = function (i) {
                var s = this;
                Ee.batch(function () {
                    s.listeners.forEach(function (o) {
                        o(i)
                    })
                })
            }
            ,
            n.onFocus = function () {
                var i = this;
                Ee.batch(function () {
                    i.queries.forEach(function (s) {
                        s.onFocus()
                    })
                })
            }
            ,
            n.onOnline = function () {
                var i = this;
                Ee.batch(function () {
                    i.queries.forEach(function (s) {
                        s.onOnline()
                    })
                })
            }
            ,
            e
    }(_a)
    , Bw = function () {
        function t(n) {
            this.options = G({}, n.defaultOptions, n.options),
                this.mutationId = n.mutationId,
                this.mutationCache = n.mutationCache,
                this.observers = [],
                this.state = n.state || Vw(),
                this.meta = n.meta
        }
        var e = t.prototype;
        return e.setState = function (r) {
            this.dispatch({
                type: "setState",
                state: r
            })
        }
            ,
            e.addObserver = function (r) {
                this.observers.indexOf(r) === -1 && this.observers.push(r)
            }
            ,
            e.removeObserver = function (r) {
                this.observers = this.observers.filter(function (i) {
                    return i !== r
                })
            }
            ,
            e.cancel = function () {
                return this.retryer ? (this.retryer.cancel(),
                    this.retryer.promise.then(Ae).catch(Ae)) : Promise.resolve()
            }
            ,
            e.continue = function () {
                return this.retryer ? (this.retryer.continue(),
                    this.retryer.promise) : this.execute()
            }
            ,
            e.execute = function () {
                var r = this, i, s = this.state.status === "loading", o = Promise.resolve();
                return s || (this.dispatch({
                    type: "loading",
                    variables: this.options.variables
                }),
                    o = o.then(function () {
                        r.mutationCache.config.onMutate == null || r.mutationCache.config.onMutate(r.state.variables, r)
                    }).then(function () {
                        return r.options.onMutate == null ? void 0 : r.options.onMutate(r.state.variables)
                    }).then(function (a) {
                        a !== r.state.context && r.dispatch({
                            type: "loading",
                            context: a,
                            variables: r.state.variables
                        })
                    })),
                    o.then(function () {
                        return r.executeMutation()
                    }).then(function (a) {
                        i = a,
                            r.mutationCache.config.onSuccess == null || r.mutationCache.config.onSuccess(i, r.state.variables, r.state.context, r)
                    }).then(function () {
                        return r.options.onSuccess == null ? void 0 : r.options.onSuccess(i, r.state.variables, r.state.context)
                    }).then(function () {
                        return r.options.onSettled == null ? void 0 : r.options.onSettled(i, null, r.state.variables, r.state.context)
                    }).then(function () {
                        return r.dispatch({
                            type: "success",
                            data: i
                        }),
                            i
                    }).catch(function (a) {
                        return r.mutationCache.config.onError == null || r.mutationCache.config.onError(a, r.state.variables, r.state.context, r),
                            vg().error(a),
                            Promise.resolve().then(function () {
                                return r.options.onError == null ? void 0 : r.options.onError(a, r.state.variables, r.state.context)
                            }).then(function () {
                                return r.options.onSettled == null ? void 0 : r.options.onSettled(void 0, a, r.state.variables, r.state.context)
                            }).then(function () {
                                throw r.dispatch({
                                    type: "error",
                                    error: a
                                }),
                                a
                            })
                    })
            }
            ,
            e.executeMutation = function () {
                var r = this, i;
                return this.retryer = new gg({
                    fn: function () {
                        return r.options.mutationFn ? r.options.mutationFn(r.state.variables) : Promise.reject("No mutationFn found")
                    },
                    onFail: function () {
                        r.dispatch({
                            type: "failed"
                        })
                    },
                    onPause: function () {
                        r.dispatch({
                            type: "pause"
                        })
                    },
                    onContinue: function () {
                        r.dispatch({
                            type: "continue"
                        })
                    },
                    retry: (i = this.options.retry) != null ? i : 0,
                    retryDelay: this.options.retryDelay
                }),
                    this.retryer.promise
            }
            ,
            e.dispatch = function (r) {
                var i = this;
                this.state = qw(this.state, r),
                    Ee.batch(function () {
                        i.observers.forEach(function (s) {
                            s.onMutationUpdate(r)
                        }),
                            i.mutationCache.notify(i)
                    })
            }
            ,
            t
    }();
function Vw() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        isPaused: !1,
        status: "idle",
        variables: void 0
    }
}
function qw(t, e) {
    switch (e.type) {
        case "failed":
            return G({}, t, {
                failureCount: t.failureCount + 1
            });
        case "pause":
            return G({}, t, {
                isPaused: !0
            });
        case "continue":
            return G({}, t, {
                isPaused: !1
            });
        case "loading":
            return G({}, t, {
                context: e.context,
                data: void 0,
                error: null,
                isPaused: !1,
                status: "loading",
                variables: e.variables
            });
        case "success":
            return G({}, t, {
                data: e.data,
                error: null,
                status: "success",
                isPaused: !1
            });
        case "error":
            return G({}, t, {
                data: void 0,
                error: e.error,
                failureCount: t.failureCount + 1,
                isPaused: !1,
                status: "error"
            });
        case "setState":
            return G({}, t, e.state);
        default:
            return t
    }
}
var Hw = function (t) {
    va(e, t);
    function e(r) {
        var i;
        return i = t.call(this) || this,
            i.config = r || {},
            i.mutations = [],
            i.mutationId = 0,
            i
    }
    var n = e.prototype;
    return n.build = function (i, s, o) {
        var a = new Bw({
            mutationCache: this,
            mutationId: ++this.mutationId,
            options: i.defaultMutationOptions(s),
            state: o,
            defaultOptions: s.mutationKey ? i.getMutationDefaults(s.mutationKey) : void 0,
            meta: s.meta
        });
        return this.add(a),
            a
    }
        ,
        n.add = function (i) {
            this.mutations.push(i),
                this.notify(i)
        }
        ,
        n.remove = function (i) {
            this.mutations = this.mutations.filter(function (s) {
                return s !== i
            }),
                i.cancel(),
                this.notify(i)
        }
        ,
        n.clear = function () {
            var i = this;
            Ee.batch(function () {
                i.mutations.forEach(function (s) {
                    i.remove(s)
                })
            })
        }
        ,
        n.getAll = function () {
            return this.mutations
        }
        ,
        n.find = function (i) {
            return typeof i.exact > "u" && (i.exact = !0),
                this.mutations.find(function (s) {
                    return xd(i, s)
                })
        }
        ,
        n.findAll = function (i) {
            return this.mutations.filter(function (s) {
                return xd(i, s)
            })
        }
        ,
        n.notify = function (i) {
            var s = this;
            Ee.batch(function () {
                s.listeners.forEach(function (o) {
                    o(i)
                })
            })
        }
        ,
        n.onFocus = function () {
            this.resumePausedMutations()
        }
        ,
        n.onOnline = function () {
            this.resumePausedMutations()
        }
        ,
        n.resumePausedMutations = function () {
            var i = this.mutations.filter(function (s) {
                return s.state.isPaused
            });
            return Ee.batch(function () {
                return i.reduce(function (s, o) {
                    return s.then(function () {
                        return o.continue().catch(Ae)
                    })
                }, Promise.resolve())
            })
        }
        ,
        e
}(_a);
function Ww() {
    return {
        onFetch: function (e) {
            e.fetchFn = function () {
                var n, r, i, s, o, a, u = (n = e.fetchOptions) == null || (r = n.meta) == null ? void 0 : r.refetchPage, l = (i = e.fetchOptions) == null || (s = i.meta) == null ? void 0 : s.fetchMore, c = l == null ? void 0 : l.pageParam, f = (l == null ? void 0 : l.direction) === "forward", p = (l == null ? void 0 : l.direction) === "backward", g = ((o = e.state.data) == null ? void 0 : o.pages) || [], y = ((a = e.state.data) == null ? void 0 : a.pageParams) || [], v = hg(), C = v == null ? void 0 : v.signal, h = y, d = !1, m = e.options.queryFn || function () {
                    return Promise.reject("Missing queryFn")
                }
                    , _ = function (be, ft, me, Je) {
                        return h = Je ? [ft].concat(h) : [].concat(h, [ft]),
                            Je ? [me].concat(be) : [].concat(be, [me])
                    }, k = function (be, ft, me, Je) {
                        if (d)
                            return Promise.reject("Cancelled");
                        if (typeof me > "u" && !ft && be.length)
                            return Promise.resolve(be);
                        var E = {
                            queryKey: e.queryKey,
                            signal: C,
                            pageParam: me,
                            meta: e.meta
                        }
                            , I = m(E)
                            , L = Promise.resolve(I).then(function (de) {
                                return _(be, me, de, Je)
                            });
                        if (Ko(I)) {
                            var V = L;
                            V.cancel = I.cancel
                        }
                        return L
                    }, b;
                if (!g.length)
                    b = k([]);
                else if (f) {
                    var N = typeof c < "u"
                        , P = N ? c : Td(e.options, g);
                    b = k(g, N, P)
                } else if (p) {
                    var X = typeof c < "u"
                        , z = X ? c : Zw(e.options, g);
                    b = k(g, X, z, !0)
                } else
                    (function () {
                        h = [];
                        var Ce = typeof e.options.getNextPageParam > "u"
                            , be = u && g[0] ? u(g[0], 0, g) : !0;
                        b = be ? k([], Ce, y[0]) : Promise.resolve(_([], y[0], g[0]));
                        for (var ft = function (E) {
                            b = b.then(function (I) {
                                var L = u && g[E] ? u(g[E], E, g) : !0;
                                if (L) {
                                    var V = Ce ? y[E] : Td(e.options, I);
                                    return k(I, Ce, V)
                                }
                                return Promise.resolve(_(I, y[E], g[E]))
                            })
                        }, me = 1; me < g.length; me++)
                            ft(me)
                    }
                    )();
                var ve = b.then(function (Ce) {
                    return {
                        pages: Ce,
                        pageParams: h
                    }
                })
                    , Z = ve;
                return Z.cancel = function () {
                    d = !0,
                        v == null || v.abort(),
                        Ko(b) && b.cancel()
                }
                    ,
                    ve
            }
        }
    }
}
function Td(t, e) {
    return t.getNextPageParam == null ? void 0 : t.getNextPageParam(e[e.length - 1], e)
}
function Zw(t, e) {
    return t.getPreviousPageParam == null ? void 0 : t.getPreviousPageParam(e[0], e)
}
var Qw = function () {
    function t(n) {
        n === void 0 && (n = {}),
            this.queryCache = n.queryCache || new Uw,
            this.mutationCache = n.mutationCache || new Hw,
            this.defaultOptions = n.defaultOptions || {},
            this.queryDefaults = [],
            this.mutationDefaults = []
    }
    var e = t.prototype;
    return e.mount = function () {
        var r = this;
        this.unsubscribeFocus = lo.subscribe(function () {
            lo.isFocused() && co.isOnline() && (r.mutationCache.onFocus(),
                r.queryCache.onFocus())
        }),
            this.unsubscribeOnline = co.subscribe(function () {
                lo.isFocused() && co.isOnline() && (r.mutationCache.onOnline(),
                    r.queryCache.onOnline())
            })
    }
        ,
        e.unmount = function () {
            var r, i;
            (r = this.unsubscribeFocus) == null || r.call(this),
                (i = this.unsubscribeOnline) == null || i.call(this)
        }
        ,
        e.isFetching = function (r, i) {
            var s = sn(r, i)
                , o = s[0];
            return o.fetching = !0,
                this.queryCache.findAll(o).length
        }
        ,
        e.isMutating = function (r) {
            return this.mutationCache.findAll(G({}, r, {
                fetching: !0
            })).length
        }
        ,
        e.getQueryData = function (r, i) {
            var s;
            return (s = this.queryCache.find(r, i)) == null ? void 0 : s.state.data
        }
        ,
        e.getQueriesData = function (r) {
            return this.getQueryCache().findAll(r).map(function (i) {
                var s = i.queryKey
                    , o = i.state
                    , a = o.data;
                return [s, a]
            })
        }
        ,
        e.setQueryData = function (r, i, s) {
            var o = ou(r)
                , a = this.defaultQueryOptions(o);
            return this.queryCache.build(this, a).setData(i, s)
        }
        ,
        e.setQueriesData = function (r, i, s) {
            var o = this;
            return Ee.batch(function () {
                return o.getQueryCache().findAll(r).map(function (a) {
                    var u = a.queryKey;
                    return [u, o.setQueryData(u, i, s)]
                })
            })
        }
        ,
        e.getQueryState = function (r, i) {
            var s;
            return (s = this.queryCache.find(r, i)) == null ? void 0 : s.state
        }
        ,
        e.removeQueries = function (r, i) {
            var s = sn(r, i)
                , o = s[0]
                , a = this.queryCache;
            Ee.batch(function () {
                a.findAll(o).forEach(function (u) {
                    a.remove(u)
                })
            })
        }
        ,
        e.resetQueries = function (r, i, s) {
            var o = this
                , a = sn(r, i, s)
                , u = a[0]
                , l = a[1]
                , c = this.queryCache
                , f = G({}, u, {
                    active: !0
                });
            return Ee.batch(function () {
                return c.findAll(u).forEach(function (p) {
                    p.reset()
                }),
                    o.refetchQueries(f, l)
            })
        }
        ,
        e.cancelQueries = function (r, i, s) {
            var o = this
                , a = sn(r, i, s)
                , u = a[0]
                , l = a[1]
                , c = l === void 0 ? {} : l;
            typeof c.revert > "u" && (c.revert = !0);
            var f = Ee.batch(function () {
                return o.queryCache.findAll(u).map(function (p) {
                    return p.cancel(c)
                })
            });
            return Promise.all(f).then(Ae).catch(Ae)
        }
        ,
        e.invalidateQueries = function (r, i, s) {
            var o, a, u, l = this, c = sn(r, i, s), f = c[0], p = c[1], g = G({}, f, {
                active: (o = (a = f.refetchActive) != null ? a : f.active) != null ? o : !0,
                inactive: (u = f.refetchInactive) != null ? u : !1
            });
            return Ee.batch(function () {
                return l.queryCache.findAll(f).forEach(function (y) {
                    y.invalidate()
                }),
                    l.refetchQueries(g, p)
            })
        }
        ,
        e.refetchQueries = function (r, i, s) {
            var o = this
                , a = sn(r, i, s)
                , u = a[0]
                , l = a[1]
                , c = Ee.batch(function () {
                    return o.queryCache.findAll(u).map(function (p) {
                        return p.fetch(void 0, G({}, l, {
                            meta: {
                                refetchPage: u == null ? void 0 : u.refetchPage
                            }
                        }))
                    })
                })
                , f = Promise.all(c).then(Ae);
            return l != null && l.throwOnError || (f = f.catch(Ae)),
                f
        }
        ,
        e.fetchQuery = function (r, i, s) {
            var o = ou(r, i, s)
                , a = this.defaultQueryOptions(o);
            typeof a.retry > "u" && (a.retry = !1);
            var u = this.queryCache.build(this, a);
            return u.isStaleByTime(a.staleTime) ? u.fetch(a) : Promise.resolve(u.state.data)
        }
        ,
        e.prefetchQuery = function (r, i, s) {
            return this.fetchQuery(r, i, s).then(Ae).catch(Ae)
        }
        ,
        e.fetchInfiniteQuery = function (r, i, s) {
            var o = ou(r, i, s);
            return o.behavior = Ww(),
                this.fetchQuery(o)
        }
        ,
        e.prefetchInfiniteQuery = function (r, i, s) {
            return this.fetchInfiniteQuery(r, i, s).then(Ae).catch(Ae)
        }
        ,
        e.cancelMutations = function () {
            var r = this
                , i = Ee.batch(function () {
                    return r.mutationCache.getAll().map(function (s) {
                        return s.cancel()
                    })
                });
            return Promise.all(i).then(Ae).catch(Ae)
        }
        ,
        e.resumePausedMutations = function () {
            return this.getMutationCache().resumePausedMutations()
        }
        ,
        e.executeMutation = function (r) {
            return this.mutationCache.build(this, r).execute()
        }
        ,
        e.getQueryCache = function () {
            return this.queryCache
        }
        ,
        e.getMutationCache = function () {
            return this.mutationCache
        }
        ,
        e.getDefaultOptions = function () {
            return this.defaultOptions
        }
        ,
        e.setDefaultOptions = function (r) {
            this.defaultOptions = r
        }
        ,
        e.setQueryDefaults = function (r, i) {
            var s = this.queryDefaults.find(function (o) {
                return Fn(r) === Fn(o.queryKey)
            });
            s ? s.defaultOptions = i : this.queryDefaults.push({
                queryKey: r,
                defaultOptions: i
            })
        }
        ,
        e.getQueryDefaults = function (r) {
            var i;
            return r ? (i = this.queryDefaults.find(function (s) {
                return Qo(r, s.queryKey)
            })) == null ? void 0 : i.defaultOptions : void 0
        }
        ,
        e.setMutationDefaults = function (r, i) {
            var s = this.mutationDefaults.find(function (o) {
                return Fn(r) === Fn(o.mutationKey)
            });
            s ? s.defaultOptions = i : this.mutationDefaults.push({
                mutationKey: r,
                defaultOptions: i
            })
        }
        ,
        e.getMutationDefaults = function (r) {
            var i;
            return r ? (i = this.mutationDefaults.find(function (s) {
                return Qo(r, s.mutationKey)
            })) == null ? void 0 : i.defaultOptions : void 0
        }
        ,
        e.defaultQueryOptions = function (r) {
            if (r != null && r._defaulted)
                return r;
            var i = G({}, this.defaultOptions.queries, this.getQueryDefaults(r == null ? void 0 : r.queryKey), r, {
                _defaulted: !0
            });
            return !i.queryHash && i.queryKey && (i.queryHash = zc(i.queryKey, i)),
                i
        }
        ,
        e.defaultQueryObserverOptions = function (r) {
            return this.defaultQueryOptions(r)
        }
        ,
        e.defaultMutationOptions = function (r) {
            return r != null && r._defaulted ? r : G({}, this.defaultOptions.mutations, this.getMutationDefaults(r == null ? void 0 : r.mutationKey), r, {
                _defaulted: !0
            })
        }
        ,
        e.clear = function () {
            this.queryCache.clear(),
                this.mutationCache.clear()
        }
        ,
        t
}()
    , Kw = S_.unstable_batchedUpdates;
Ee.setBatchNotifyFunction(Kw);
var Gw = console;
zw(Gw);
var Od = ot.createContext(void 0)
    , Yw = ot.createContext(!1);
function Xw(t) {
    return t && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Od),
        window.ReactQueryClientContext) : Od
}
var Jw = function (e) {
    var n = e.client
        , r = e.contextSharing
        , i = r === void 0 ? !1 : r
        , s = e.children;
    ot.useEffect(function () {
        return n.mount(),
            function () {
                n.unmount()
            }
    }, [n]);
    var o = Xw(i);
    return ot.createElement(Yw.Provider, {
        value: i
    }, ot.createElement(o.Provider, {
        value: n
    }, s))
};
const J = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
    , Bn = "8.50.0"
    , Q = globalThis;
function Sa(t, e, n) {
    const r = Q
        , i = r.__SENTRY__ = r.__SENTRY__ || {}
        , s = i[Bn] = i[Bn] || {};
    return s[t] || (s[t] = e())
}
const ir = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
    , eS = "Sentry Logger "
    , vl = ["debug", "info", "warn", "error", "log", "assert", "trace"]
    , Go = {};
function sr(t) {
    if (!("console" in Q))
        return t();
    const e = Q.console
        , n = {}
        , r = Object.keys(Go);
    r.forEach(i => {
        const s = Go[i];
        n[i] = e[i],
            e[i] = s
    }
    );
    try {
        return t()
    } finally {
        r.forEach(i => {
            e[i] = n[i]
        }
        )
    }
}
function tS() {
    let t = !1;
    const e = {
        enable: () => {
            t = !0
        }
        ,
        disable: () => {
            t = !1
        }
        ,
        isEnabled: () => t
    };
    return ir ? vl.forEach(n => {
        e[n] = (...r) => {
            t && sr(() => {
                Q.console[n](`${eS}[${n}]:`, ...r)
            }
            )
        }
    }
    ) : vl.forEach(n => {
        e[n] = () => { }
    }
    ),
        e
}
const M = Sa("logger", tS)
    , _g = 50
    , Gn = "?"
    , Nd = /\(error: (.*)\)/
    , Pd = /captureMessage|captureException/;
function wg(...t) {
    const e = t.sort((n, r) => n[0] - r[0]).map(n => n[1]);
    return (n, r = 0, i = 0) => {
        const s = []
            , o = n.split(`
`);
        for (let a = r; a < o.length; a++) {
            const u = o[a];
            if (u.length > 1024)
                continue;
            const l = Nd.test(u) ? u.replace(Nd, "$1") : u;
            if (!l.match(/\S*Error: /)) {
                for (const c of e) {
                    const f = c(l);
                    if (f) {
                        s.push(f);
                        break
                    }
                }
                if (s.length >= _g + i)
                    break
            }
        }
        return rS(s.slice(i))
    }
}
function nS(t) {
    return Array.isArray(t) ? wg(...t) : t
}
function rS(t) {
    if (!t.length)
        return [];
    const e = Array.from(t);
    return /sentryWrapped/.test(zs(e).function || "") && e.pop(),
        e.reverse(),
        Pd.test(zs(e).function || "") && (e.pop(),
            Pd.test(zs(e).function || "") && e.pop()),
        e.slice(0, _g).map(n => ({
            ...n,
            filename: n.filename || zs(e).filename,
            function: n.function || Gn
        }))
}
function zs(t) {
    return t[t.length - 1] || {}
}
const uu = "<anonymous>";
function Tn(t) {
    try {
        return !t || typeof t != "function" ? uu : t.name || uu
    } catch {
        return uu
    }
}
function Rd(t) {
    const e = t.exception;
    if (e) {
        const n = [];
        try {
            return e.values.forEach(r => {
                r.stacktrace.frames && n.push(...r.stacktrace.frames)
            }
            ),
                n
        } catch {
            return
        }
    }
}
const fo = {}
    , Id = {};
function or(t, e) {
    fo[t] = fo[t] || [],
        fo[t].push(e)
}
function ar(t, e) {
    if (!Id[t]) {
        Id[t] = !0;
        try {
            e()
        } catch (n) {
            ir && M.error(`Error while instrumenting ${t}`, n)
        }
    }
}
function St(t, e) {
    const n = t && fo[t];
    if (n)
        for (const r of n)
            try {
                r(e)
            } catch (i) {
                ir && M.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Tn(r)}
Error:`, i)
            }
}
let lu = null;
function iS(t) {
    const e = "error";
    or(e, t),
        ar(e, sS)
}
function sS() {
    lu = Q.onerror,
        Q.onerror = function (t, e, n, r, i) {
            return St("error", {
                column: r,
                error: i,
                line: n,
                msg: t,
                url: e
            }),
                lu ? lu.apply(this, arguments) : !1
        }
        ,
        Q.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let cu = null;
function oS(t) {
    const e = "unhandledrejection";
    or(e, t),
        ar(e, aS)
}
function aS() {
    cu = Q.onunhandledrejection,
        Q.onunhandledrejection = function (t) {
            return St("unhandledrejection", t),
                cu ? cu.apply(this, arguments) : !0
        }
        ,
        Q.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}
function Ea() {
    return $c(Q),
        Q
}
function $c(t) {
    const e = t.__SENTRY__ = t.__SENTRY__ || {};
    return e.version = e.version || Bn,
        e[Bn] = e[Bn] || {}
}
const Sg = Object.prototype.toString;
function Uc(t) {
    switch (Sg.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object WebAssembly.Exception]":
            return !0;
        default:
            return Yn(t, Error)
    }
}
function ei(t, e) {
    return Sg.call(t) === `[object ${e}]`
}
function Eg(t) {
    return ei(t, "ErrorEvent")
}
function Ad(t) {
    return ei(t, "DOMError")
}
function uS(t) {
    return ei(t, "DOMException")
}
function qt(t) {
    return ei(t, "String")
}
function Bc(t) {
    return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t
}
function Vc(t) {
    return t === null || Bc(t) || typeof t != "object" && typeof t != "function"
}
function qr(t) {
    return ei(t, "Object")
}
function ka(t) {
    return typeof Event < "u" && Yn(t, Event)
}
function lS(t) {
    return typeof Element < "u" && Yn(t, Element)
}
function cS(t) {
    return ei(t, "RegExp")
}
function xa(t) {
    return !!(t && t.then && typeof t.then == "function")
}
function fS(t) {
    return qr(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
}
function Yn(t, e) {
    try {
        return t instanceof e
    } catch {
        return !1
    }
}
function kg(t) {
    return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue))
}
const qc = Q
    , dS = 80;
function xg(t, e = {}) {
    if (!t)
        return "<unknown>";
    try {
        let n = t;
        const r = 5
            , i = [];
        let s = 0
            , o = 0;
        const a = " > "
            , u = a.length;
        let l;
        const c = Array.isArray(e) ? e : e.keyAttrs
            , f = !Array.isArray(e) && e.maxStringLength || dS;
        for (; n && s++ < r && (l = pS(n, c),
            !(l === "html" || s > 1 && o + i.length * u + l.length >= f));)
            i.push(l),
                o += l.length,
                n = n.parentNode;
        return i.reverse().join(a)
    } catch {
        return "<unknown>"
    }
}
function pS(t, e) {
    const n = t
        , r = [];
    if (!n || !n.tagName)
        return "";
    if (qc.HTMLElement && n instanceof HTMLElement && n.dataset) {
        if (n.dataset.sentryComponent)
            return n.dataset.sentryComponent;
        if (n.dataset.sentryElement)
            return n.dataset.sentryElement
    }
    r.push(n.tagName.toLowerCase());
    const i = e && e.length ? e.filter(o => n.getAttribute(o)).map(o => [o, n.getAttribute(o)]) : null;
    if (i && i.length)
        i.forEach(o => {
            r.push(`[${o[0]}="${o[1]}"]`)
        }
        );
    else {
        n.id && r.push(`#${n.id}`);
        const o = n.className;
        if (o && qt(o)) {
            const a = o.split(/\s+/);
            for (const u of a)
                r.push(`.${u}`)
        }
    }
    const s = ["aria-label", "type", "name", "title", "alt"];
    for (const o of s) {
        const a = n.getAttribute(o);
        a && r.push(`[${o}="${a}"]`)
    }
    return r.join("")
}
function hS() {
    try {
        return qc.document.location.href
    } catch {
        return ""
    }
}
function mS(t) {
    if (!qc.HTMLElement)
        return null;
    let e = t;
    const n = 5;
    for (let r = 0; r < n; r++) {
        if (!e)
            return null;
        if (e instanceof HTMLElement) {
            if (e.dataset.sentryComponent)
                return e.dataset.sentryComponent;
            if (e.dataset.sentryElement)
                return e.dataset.sentryElement
        }
        e = e.parentNode
    }
    return null
}
function Ir(t, e = 0) {
    return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0, e)}...`
}
function Dd(t, e) {
    if (!Array.isArray(t))
        return "";
    const n = [];
    for (let r = 0; r < t.length; r++) {
        const i = t[r];
        try {
            kg(i) ? n.push("[VueViewModel]") : n.push(String(i))
        } catch {
            n.push("[value cannot be serialized]")
        }
    }
    return n.join(e)
}
function gS(t, e, n = !1) {
    return qt(t) ? cS(e) ? e.test(t) : qt(e) ? n ? t === e : t.includes(e) : !1 : !1
}
function Ca(t, e = [], n = !1) {
    return e.some(r => gS(t, r, n))
}
function Ze(t, e, n) {
    if (!(e in t))
        return;
    const r = t[e]
        , i = n(r);
    typeof i == "function" && Cg(i, r);
    try {
        t[e] = i
    } catch {
        ir && M.log(`Failed to replace method "${e}" in object`, t)
    }
}
function Xn(t, e, n) {
    try {
        Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0
        })
    } catch {
        ir && M.log(`Failed to add non-enumerable property "${e}" to object`, t)
    }
}
function Cg(t, e) {
    try {
        const n = e.prototype || {};
        t.prototype = e.prototype = n,
            Xn(t, "__sentry_original__", e)
    } catch { }
}
function Hc(t) {
    return t.__sentry_original__
}
function bg(t) {
    if (Uc(t))
        return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...Md(t)
        };
    if (ka(t)) {
        const e = {
            type: t.type,
            target: Ld(t.target),
            currentTarget: Ld(t.currentTarget),
            ...Md(t)
        };
        return typeof CustomEvent < "u" && Yn(t, CustomEvent) && (e.detail = t.detail),
            e
    } else
        return t
}
function Ld(t) {
    try {
        return lS(t) ? xg(t) : Object.prototype.toString.call(t)
    } catch {
        return "<unknown>"
    }
}
function Md(t) {
    if (typeof t == "object" && t !== null) {
        const e = {};
        for (const n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    } else
        return {}
}
function yS(t, e = 40) {
    const n = Object.keys(bg(t));
    n.sort();
    const r = n[0];
    if (!r)
        return "[object has no keys]";
    if (r.length >= e)
        return Ir(r, e);
    for (let i = n.length; i > 0; i--) {
        const s = n.slice(0, i).join(", ");
        if (!(s.length > e))
            return i === n.length ? s : Ir(s, e)
    }
    return ""
}
function st(t) {
    return _l(t, new Map)
}
function _l(t, e) {
    if (vS(t)) {
        const n = e.get(t);
        if (n !== void 0)
            return n;
        const r = {};
        e.set(t, r);
        for (const i of Object.getOwnPropertyNames(t))
            typeof t[i] < "u" && (r[i] = _l(t[i], e));
        return r
    }
    if (Array.isArray(t)) {
        const n = e.get(t);
        if (n !== void 0)
            return n;
        const r = [];
        return e.set(t, r),
            t.forEach(i => {
                r.push(_l(i, e))
            }
            ),
            r
    }
    return t
}
function vS(t) {
    if (!qr(t))
        return !1;
    try {
        const e = Object.getPrototypeOf(t).constructor.name;
        return !e || e === "Object"
    } catch {
        return !0
    }
}
const Tg = 1e3;
function ms() {
    return Date.now() / Tg
}
function _S() {
    const { performance: t } = Q;
    if (!t || !t.now)
        return ms;
    const e = Date.now() - t.now()
        , n = t.timeOrigin == null ? e : t.timeOrigin;
    return () => (n + t.now()) / Tg
}
const Ht = _S();
(() => {
    const { performance: t } = Q;
    if (!t || !t.now)
        return;
    const e = 3600 * 1e3
        , n = t.now()
        , r = Date.now()
        , i = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e
        , s = i < e
        , o = t.timing && t.timing.navigationStart
        , u = typeof o == "number" ? Math.abs(o + n - r) : e
        , l = u < e;
    return s || l ? i <= u ? t.timeOrigin : o : r
}
)();
function ut() {
    const t = Q
        , e = t.crypto || t.msCrypto;
    let n = () => Math.random() * 16;
    try {
        if (e && e.randomUUID)
            return e.randomUUID().replace(/-/g, "");
        e && e.getRandomValues && (n = () => {
            const r = new Uint8Array(1);
            return e.getRandomValues(r),
                r[0]
        }
        )
    } catch { }
    return ("10000000100040008000" + 1e11).replace(/[018]/g, r => (r ^ (n() & 15) >> r / 4).toString(16))
}
function Og(t) {
    return t.exception && t.exception.values ? t.exception.values[0] : void 0
}
function on(t) {
    const { message: e, event_id: n } = t;
    if (e)
        return e;
    const r = Og(t);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
}
function wl(t, e, n) {
    const r = t.exception = t.exception || {}
        , i = r.values = r.values || []
        , s = i[0] = i[0] || {};
    s.value || (s.value = e || ""),
        s.type || (s.type = "Error")
}
function Hr(t, e) {
    const n = Og(t);
    if (!n)
        return;
    const r = {
        type: "generic",
        handled: !0
    }
        , i = n.mechanism;
    if (n.mechanism = {
        ...r,
        ...i,
        ...e
    },
        e && "data" in e) {
        const s = {
            ...i && i.data,
            ...e.data
        };
        n.mechanism.data = s
    }
}
function jd(t) {
    if (wS(t))
        return !0;
    try {
        Xn(t, "__sentry_captured__", !0)
    } catch { }
    return !1
}
function wS(t) {
    try {
        return t.__sentry_captured__
    } catch { }
}
var jt;
(function (t) {
    t[t.PENDING = 0] = "PENDING";
    const n = 1;
    t[t.RESOLVED = n] = "RESOLVED";
    const r = 2;
    t[t.REJECTED = r] = "REJECTED"
}
)(jt || (jt = {}));
function Jn(t) {
    return new rt(e => {
        e(t)
    }
    )
}
function Yo(t) {
    return new rt((e, n) => {
        n(t)
    }
    )
}
class rt {
    constructor(e) {
        rt.prototype.__init.call(this),
            rt.prototype.__init2.call(this),
            rt.prototype.__init3.call(this),
            rt.prototype.__init4.call(this),
            this._state = jt.PENDING,
            this._handlers = [];
        try {
            e(this._resolve, this._reject)
        } catch (n) {
            this._reject(n)
        }
    }
    then(e, n) {
        return new rt((r, i) => {
            this._handlers.push([!1, s => {
                if (!e)
                    r(s);
                else
                    try {
                        r(e(s))
                    } catch (o) {
                        i(o)
                    }
            }
                , s => {
                    if (!n)
                        i(s);
                    else
                        try {
                            r(n(s))
                        } catch (o) {
                            i(o)
                        }
                }
            ]),
                this._executeHandlers()
        }
        )
    }
    catch(e) {
        return this.then(n => n, e)
    }
    finally(e) {
        return new rt((n, r) => {
            let i, s;
            return this.then(o => {
                s = !1,
                    i = o,
                    e && e()
            }
                , o => {
                    s = !0,
                        i = o,
                        e && e()
                }
            ).then(() => {
                if (s) {
                    r(i);
                    return
                }
                n(i)
            }
            )
        }
        )
    }
    __init() {
        this._resolve = e => {
            this._setResult(jt.RESOLVED, e)
        }
    }
    __init2() {
        this._reject = e => {
            this._setResult(jt.REJECTED, e)
        }
    }
    __init3() {
        this._setResult = (e, n) => {
            if (this._state === jt.PENDING) {
                if (xa(n)) {
                    n.then(this._resolve, this._reject);
                    return
                }
                this._state = e,
                    this._value = n,
                    this._executeHandlers()
            }
        }
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === jt.PENDING)
                return;
            const e = this._handlers.slice();
            this._handlers = [],
                e.forEach(n => {
                    n[0] || (this._state === jt.RESOLVED && n[1](this._value),
                        this._state === jt.REJECTED && n[2](this._value),
                        n[0] = !0)
                }
                )
        }
    }
}
function SS(t) {
    const e = Ht()
        , n = {
            sid: ut(),
            init: !0,
            timestamp: e,
            started: e,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () => kS(n)
        };
    return t && Wr(n, t),
        n
}
function Wr(t, e = {}) {
    if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
        !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)),
        t.timestamp = e.timestamp || Ht(),
        e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
        e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
        e.sid && (t.sid = e.sid.length === 32 ? e.sid : ut()),
        e.init !== void 0 && (t.init = e.init),
        !t.did && e.did && (t.did = `${e.did}`),
        typeof e.started == "number" && (t.started = e.started),
        t.ignoreDuration)
        t.duration = void 0;
    else if (typeof e.duration == "number")
        t.duration = e.duration;
    else {
        const n = t.timestamp - t.started;
        t.duration = n >= 0 ? n : 0
    }
    e.release && (t.release = e.release),
        e.environment && (t.environment = e.environment),
        !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
        !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
        typeof e.errors == "number" && (t.errors = e.errors),
        e.status && (t.status = e.status)
}
function ES(t, e) {
    let n = {};
    t.status === "ok" && (n = {
        status: "exited"
    }),
        Wr(t, n)
}
function kS(t) {
    return st({
        sid: `${t.sid}`,
        init: t.init,
        started: new Date(t.started * 1e3).toISOString(),
        timestamp: new Date(t.timestamp * 1e3).toISOString(),
        status: t.status,
        errors: t.errors,
        did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : void 0,
        duration: t.duration,
        abnormal_mechanism: t.abnormal_mechanism,
        attrs: {
            release: t.release,
            environment: t.environment,
            ip_address: t.ipAddress,
            user_agent: t.userAgent
        }
    })
}
function Fd() {
    return ut()
}
function Sl() {
    return ut().substring(16)
}
function ba(t, e, n = 2) {
    if (!e || typeof e != "object" || n <= 0)
        return e;
    if (t && e && Object.keys(e).length === 0)
        return t;
    const r = {
        ...t
    };
    for (const i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (r[i] = ba(r[i], e[i], n - 1));
    return r
}
const El = "_sentrySpan";
function zd(t, e) {
    e ? Xn(t, El, e) : delete t[El]
}
function $d(t) {
    return t[El]
}
const xS = 100;
class Wc {
    constructor() {
        this._notifyingListeners = !1,
            this._scopeListeners = [],
            this._eventProcessors = [],
            this._breadcrumbs = [],
            this._attachments = [],
            this._user = {},
            this._tags = {},
            this._extra = {},
            this._contexts = {},
            this._sdkProcessingMetadata = {},
            this._propagationContext = {
                traceId: Fd(),
                spanId: Sl()
            }
    }
    clone() {
        const e = new Wc;
        return e._breadcrumbs = [...this._breadcrumbs],
            e._tags = {
                ...this._tags
            },
            e._extra = {
                ...this._extra
            },
            e._contexts = {
                ...this._contexts
            },
            this._contexts.flags && (e._contexts.flags = {
                values: [...this._contexts.flags.values]
            }),
            e._user = this._user,
            e._level = this._level,
            e._session = this._session,
            e._transactionName = this._transactionName,
            e._fingerprint = this._fingerprint,
            e._eventProcessors = [...this._eventProcessors],
            e._requestSession = this._requestSession,
            e._attachments = [...this._attachments],
            e._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata
            },
            e._propagationContext = {
                ...this._propagationContext
            },
            e._client = this._client,
            e._lastEventId = this._lastEventId,
            zd(e, $d(this)),
            e
    }
    setClient(e) {
        this._client = e
    }
    setLastEventId(e) {
        this._lastEventId = e
    }
    getClient() {
        return this._client
    }
    lastEventId() {
        return this._lastEventId
    }
    addScopeListener(e) {
        this._scopeListeners.push(e)
    }
    addEventProcessor(e) {
        return this._eventProcessors.push(e),
            this
    }
    setUser(e) {
        return this._user = e || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
        },
            this._session && Wr(this._session, {
                user: e
            }),
            this._notifyScopeListeners(),
            this
    }
    getUser() {
        return this._user
    }
    getRequestSession() {
        return this._requestSession
    }
    setRequestSession(e) {
        return this._requestSession = e,
            this
    }
    setTags(e) {
        return this._tags = {
            ...this._tags,
            ...e
        },
            this._notifyScopeListeners(),
            this
    }
    setTag(e, n) {
        return this._tags = {
            ...this._tags,
            [e]: n
        },
            this._notifyScopeListeners(),
            this
    }
    setExtras(e) {
        return this._extra = {
            ...this._extra,
            ...e
        },
            this._notifyScopeListeners(),
            this
    }
    setExtra(e, n) {
        return this._extra = {
            ...this._extra,
            [e]: n
        },
            this._notifyScopeListeners(),
            this
    }
    setFingerprint(e) {
        return this._fingerprint = e,
            this._notifyScopeListeners(),
            this
    }
    setLevel(e) {
        return this._level = e,
            this._notifyScopeListeners(),
            this
    }
    setTransactionName(e) {
        return this._transactionName = e,
            this._notifyScopeListeners(),
            this
    }
    setContext(e, n) {
        return n === null ? delete this._contexts[e] : this._contexts[e] = n,
            this._notifyScopeListeners(),
            this
    }
    setSession(e) {
        return e ? this._session = e : delete this._session,
            this._notifyScopeListeners(),
            this
    }
    getSession() {
        return this._session
    }
    update(e) {
        if (!e)
            return this;
        const n = typeof e == "function" ? e(this) : e
            , [r, i] = n instanceof er ? [n.getScopeData(), n.getRequestSession()] : qr(n) ? [e, e.requestSession] : []
            , { tags: s, extra: o, user: a, contexts: u, level: l, fingerprint: c = [], propagationContext: f } = r || {};
        return this._tags = {
            ...this._tags,
            ...s
        },
            this._extra = {
                ...this._extra,
                ...o
            },
            this._contexts = {
                ...this._contexts,
                ...u
            },
            a && Object.keys(a).length && (this._user = a),
            l && (this._level = l),
            c.length && (this._fingerprint = c),
            f && (this._propagationContext = f),
            i && (this._requestSession = i),
            this
    }
    clear() {
        return this._breadcrumbs = [],
            this._tags = {},
            this._extra = {},
            this._user = {},
            this._contexts = {},
            this._level = void 0,
            this._transactionName = void 0,
            this._fingerprint = void 0,
            this._requestSession = void 0,
            this._session = void 0,
            zd(this, void 0),
            this._attachments = [],
            this.setPropagationContext({
                traceId: Fd()
            }),
            this._notifyScopeListeners(),
            this
    }
    addBreadcrumb(e, n) {
        const r = typeof n == "number" ? n : xS;
        if (r <= 0)
            return this;
        const i = {
            timestamp: ms(),
            ...e
        }
            , s = this._breadcrumbs;
        return s.push(i),
            this._breadcrumbs = s.length > r ? s.slice(-r) : s,
            this._notifyScopeListeners(),
            this
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [],
            this._notifyScopeListeners(),
            this
    }
    addAttachment(e) {
        return this._attachments.push(e),
            this
    }
    clearAttachments() {
        return this._attachments = [],
            this
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: $d(this)
        }
    }
    setSDKProcessingMetadata(e) {
        return this._sdkProcessingMetadata = ba(this._sdkProcessingMetadata, e, 2),
            this
    }
    setPropagationContext(e) {
        return this._propagationContext = {
            spanId: Sl(),
            ...e
        },
            this
    }
    getPropagationContext() {
        return this._propagationContext
    }
    captureException(e, n) {
        const r = n && n.event_id ? n.event_id : ut();
        if (!this._client)
            return M.warn("No client configured on scope - will not capture exception!"),
                r;
        const i = new Error("Sentry syntheticException");
        return this._client.captureException(e, {
            originalException: e,
            syntheticException: i,
            ...n,
            event_id: r
        }, this),
            r
    }
    captureMessage(e, n, r) {
        const i = r && r.event_id ? r.event_id : ut();
        if (!this._client)
            return M.warn("No client configured on scope - will not capture message!"),
                i;
        const s = new Error(e);
        return this._client.captureMessage(e, n, {
            originalException: e,
            syntheticException: s,
            ...r,
            event_id: i
        }, this),
            i
    }
    captureEvent(e, n) {
        const r = n && n.event_id ? n.event_id : ut();
        return this._client ? (this._client.captureEvent(e, {
            ...n,
            event_id: r
        }, this),
            r) : (M.warn("No client configured on scope - will not capture event!"),
                r)
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0,
            this._scopeListeners.forEach(e => {
                e(this)
            }
            ),
            this._notifyingListeners = !1)
    }
}
const er = Wc;
function CS() {
    return Sa("defaultCurrentScope", () => new er)
}
function bS() {
    return Sa("defaultIsolationScope", () => new er)
}
class TS {
    constructor(e, n) {
        let r;
        e ? r = e : r = new er;
        let i;
        n ? i = n : i = new er,
            this._stack = [{
                scope: r
            }],
            this._isolationScope = i
    }
    withScope(e) {
        const n = this._pushScope();
        let r;
        try {
            r = e(n)
        } catch (i) {
            throw this._popScope(),
            i
        }
        return xa(r) ? r.then(i => (this._popScope(),
            i), i => {
                throw this._popScope(),
                i
            }
        ) : (this._popScope(),
            r)
    }
    getClient() {
        return this.getStackTop().client
    }
    getScope() {
        return this.getStackTop().scope
    }
    getIsolationScope() {
        return this._isolationScope
    }
    getStackTop() {
        return this._stack[this._stack.length - 1]
    }
    _pushScope() {
        const e = this.getScope().clone();
        return this._stack.push({
            client: this.getClient(),
            scope: e
        }),
            e
    }
    _popScope() {
        return this._stack.length <= 1 ? !1 : !!this._stack.pop()
    }
}
function Zr() {
    const t = Ea()
        , e = $c(t);
    return e.stack = e.stack || new TS(CS(), bS())
}
function OS(t) {
    return Zr().withScope(t)
}
function NS(t, e) {
    const n = Zr();
    return n.withScope(() => (n.getStackTop().scope = t,
        e(t)))
}
function Ud(t) {
    return Zr().withScope(() => t(Zr().getIsolationScope()))
}
function PS() {
    return {
        withIsolationScope: Ud,
        withScope: OS,
        withSetScope: NS,
        withSetIsolationScope: (t, e) => Ud(e),
        getCurrentScope: () => Zr().getScope(),
        getIsolationScope: () => Zr().getIsolationScope()
    }
}
function Zc(t) {
    const e = $c(t);
    return e.acs ? e.acs : PS()
}
function Xt() {
    const t = Ea();
    return Zc(t).getCurrentScope()
}
function ti() {
    const t = Ea();
    return Zc(t).getIsolationScope()
}
function RS() {
    return Sa("globalScope", () => new er)
}
function IS(...t) {
    const e = Ea()
        , n = Zc(e);
    if (t.length === 2) {
        const [r, i] = t;
        return r ? n.withSetScope(r, i) : n.withScope(i)
    }
    return n.withScope(t[0])
}
function Ie() {
    return Xt().getClient()
}
function AS(t) {
    const e = t.getPropagationContext()
        , { traceId: n, spanId: r, parentSpanId: i } = e;
    return st({
        trace_id: n,
        span_id: r,
        parent_span_id: i
    })
}
const DS = "_sentryMetrics";
function LS(t) {
    const e = t[DS];
    if (!e)
        return;
    const n = {};
    for (const [, [r, i]] of e)
        (n[r] || (n[r] = [])).push(st(i));
    return n
}
const MS = "sentry.source"
    , jS = "sentry.sample_rate"
    , FS = "sentry.op"
    , zS = "sentry.origin"
    , $S = 0
    , US = 1
    , BS = "sentry-"
    , VS = /^sentry-/;
function qS(t) {
    const e = HS(t);
    if (!e)
        return;
    const n = Object.entries(e).reduce((r, [i, s]) => {
        if (i.match(VS)) {
            const o = i.slice(BS.length);
            r[o] = s
        }
        return r
    }
        , {});
    if (Object.keys(n).length > 0)
        return n
}
function HS(t) {
    if (!(!t || !qt(t) && !Array.isArray(t)))
        return Array.isArray(t) ? t.reduce((e, n) => {
            const r = Bd(n);
            return Object.entries(r).forEach(([i, s]) => {
                e[i] = s
            }
            ),
                e
        }
            , {}) : Bd(t)
}
function Bd(t) {
    return t.split(",").map(e => e.split("=").map(n => decodeURIComponent(n.trim()))).reduce((e, [n, r]) => (n && r && (e[n] = r),
        e), {})
}
const WS = 1;
let Vd = !1;
function ZS(t) {
    const { spanId: e, traceId: n, isRemote: r } = t.spanContext()
        , i = r ? e : Qc(t).parent_span_id
        , s = r ? Sl() : e;
    return st({
        parent_span_id: i,
        span_id: s,
        trace_id: n
    })
}
function qd(t) {
    return typeof t == "number" ? Hd(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? Hd(t.getTime()) : Ht()
}
function Hd(t) {
    return t > 9999999999 ? t / 1e3 : t
}
function Qc(t) {
    if (KS(t))
        return t.getSpanJSON();
    try {
        const { spanId: e, traceId: n } = t.spanContext();
        if (QS(t)) {
            const { attributes: r, startTime: i, name: s, endTime: o, parentSpanId: a, status: u } = t;
            return st({
                span_id: e,
                trace_id: n,
                data: r,
                description: s,
                parent_span_id: a,
                start_timestamp: qd(i),
                timestamp: qd(o) || void 0,
                status: YS(u),
                op: r[FS],
                origin: r[zS],
                _metrics_summary: LS(t)
            })
        }
        return {
            span_id: e,
            trace_id: n
        }
    } catch {
        return {}
    }
}
function QS(t) {
    const e = t;
    return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
}
function KS(t) {
    return typeof t.getSpanJSON == "function"
}
function GS(t) {
    const { traceFlags: e } = t.spanContext();
    return e === WS
}
function YS(t) {
    if (!(!t || t.code === $S))
        return t.code === US ? "ok" : t.message || "unknown_error"
}
const XS = "_sentryRootSpan";
function Ng(t) {
    return t[XS] || t
}
function JS() {
    Vd || (sr(() => {
        console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.")
    }
    ),
        Vd = !0)
}
function eE(t) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__)
        return !1;
    const e = Ie()
        , n = e && e.getOptions();
    return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
}
const Kc = "production"
    , tE = "_frozenDsc";
function Pg(t, e) {
    const n = e.getOptions()
        , { publicKey: r } = e.getDsn() || {}
        , i = st({
            environment: n.environment || Kc,
            release: n.release,
            public_key: r,
            trace_id: t
        });
    return e.emit("createDsc", i),
        i
}
function nE(t, e) {
    const n = e.getPropagationContext();
    return n.dsc || Pg(n.traceId, t)
}
function rE(t) {
    const e = Ie();
    if (!e)
        return {};
    const n = Ng(t)
        , r = n[tE];
    if (r)
        return r;
    const i = n.spanContext().traceState
        , s = i && i.get("sentry.dsc")
        , o = s && qS(s);
    if (o)
        return o;
    const a = Pg(t.spanContext().traceId, e)
        , u = Qc(n)
        , l = u.data || {}
        , c = l[jS];
    c != null && (a.sample_rate = `${c}`);
    const f = l[MS]
        , p = u.description;
    return f !== "url" && p && (a.transaction = p),
        eE() && (a.sampled = String(GS(n))),
        e.emit("createDsc", a, n),
        a
}
function iE(t) {
    if (typeof t == "boolean")
        return Number(t);
    const e = typeof t == "string" ? parseFloat(t) : t;
    if (typeof e != "number" || isNaN(e) || e < 0 || e > 1) {
        J && M.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`);
        return
    }
    return e
}
const sE = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function oE(t) {
    return t === "http" || t === "https"
}
function Ta(t, e = !1) {
    const { host: n, path: r, pass: i, port: s, projectId: o, protocol: a, publicKey: u } = t;
    return `${a}://${u}${e && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${r && `${r}/`}${o}`
}
function aE(t) {
    const e = sE.exec(t);
    if (!e) {
        sr(() => {
            console.error(`Invalid Sentry Dsn: ${t}`)
        }
        );
        return
    }
    const [n, r, i = "", s = "", o = "", a = ""] = e.slice(1);
    let u = ""
        , l = a;
    const c = l.split("/");
    if (c.length > 1 && (u = c.slice(0, -1).join("/"),
        l = c.pop()),
        l) {
        const f = l.match(/^\d+/);
        f && (l = f[0])
    }
    return Rg({
        host: s,
        pass: i,
        path: u,
        projectId: l,
        port: o,
        protocol: n,
        publicKey: r
    })
}
function Rg(t) {
    return {
        protocol: t.protocol,
        publicKey: t.publicKey || "",
        pass: t.pass || "",
        host: t.host,
        port: t.port || "",
        path: t.path || "",
        projectId: t.projectId
    }
}
function uE(t) {
    if (!ir)
        return !0;
    const { port: e, projectId: n, protocol: r } = t;
    return ["protocol", "publicKey", "host", "projectId"].find(o => t[o] ? !1 : (M.error(`Invalid Sentry Dsn: ${o} missing`),
        !0)) ? !1 : n.match(/^\d+$/) ? oE(r) ? e && isNaN(parseInt(e, 10)) ? (M.error(`Invalid Sentry Dsn: Invalid port ${e}`),
            !1) : !0 : (M.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),
                !1) : (M.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
                    !1)
}
function lE(t) {
    const e = typeof t == "string" ? aE(t) : Rg(t);
    if (!(!e || !uE(e)))
        return e
}
function cE() {
    const t = typeof WeakSet == "function"
        , e = t ? new WeakSet : [];
    function n(i) {
        if (t)
            return e.has(i) ? !0 : (e.add(i),
                !1);
        for (let s = 0; s < e.length; s++)
            if (e[s] === i)
                return !0;
        return e.push(i),
            !1
    }
    function r(i) {
        if (t)
            e.delete(i);
        else
            for (let s = 0; s < e.length; s++)
                if (e[s] === i) {
                    e.splice(s, 1);
                    break
                }
    }
    return [n, r]
}
function Ft(t, e = 100, n = 1 / 0) {
    try {
        return kl("", t, e, n)
    } catch (r) {
        return {
            ERROR: `**non-serializable** (${r})`
        }
    }
}
function Ig(t, e = 3, n = 100 * 1024) {
    const r = Ft(t, e);
    return hE(r) > n ? Ig(t, e - 1, n) : r
}
function kl(t, e, n = 1 / 0, r = 1 / 0, i = cE()) {
    const [s, o] = i;
    if (e == null || ["boolean", "string"].includes(typeof e) || typeof e == "number" && Number.isFinite(e))
        return e;
    const a = fE(t, e);
    if (!a.startsWith("[object "))
        return a;
    if (e.__sentry_skip_normalization__)
        return e;
    const u = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : n;
    if (u === 0)
        return a.replace("object ", "");
    if (s(e))
        return "[Circular ~]";
    const l = e;
    if (l && typeof l.toJSON == "function")
        try {
            const g = l.toJSON();
            return kl("", g, u - 1, r, i)
        } catch { }
    const c = Array.isArray(e) ? [] : {};
    let f = 0;
    const p = bg(e);
    for (const g in p) {
        if (!Object.prototype.hasOwnProperty.call(p, g))
            continue;
        if (f >= r) {
            c[g] = "[MaxProperties ~]";
            break
        }
        const y = p[g];
        c[g] = kl(g, y, u - 1, r, i),
            f++
    }
    return o(e),
        c
}
function fE(t, e) {
    try {
        if (t === "domain" && e && typeof e == "object" && e._events)
            return "[Domain]";
        if (t === "domainEmitter")
            return "[DomainEmitter]";
        if (typeof global < "u" && e === global)
            return "[Global]";
        if (typeof window < "u" && e === window)
            return "[Window]";
        if (typeof document < "u" && e === document)
            return "[Document]";
        if (kg(e))
            return "[VueViewModel]";
        if (fS(e))
            return "[SyntheticEvent]";
        if (typeof e == "number" && !Number.isFinite(e))
            return `[${e}]`;
        if (typeof e == "function")
            return `[Function: ${Tn(e)}]`;
        if (typeof e == "symbol")
            return `[${String(e)}]`;
        if (typeof e == "bigint")
            return `[BigInt: ${String(e)}]`;
        const n = dE(e);
        return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
    } catch (n) {
        return `**non-serializable** (${n})`
    }
}
function dE(t) {
    const e = Object.getPrototypeOf(t);
    return e ? e.constructor.name : "null prototype"
}
function pE(t) {
    return ~-encodeURI(t).split(/%..|./).length
}
function hE(t) {
    return pE(JSON.stringify(t))
}
function gs(t, e = []) {
    return [t, e]
}
function mE(t, e) {
    const [n, r] = t;
    return [n, [...r, e]]
}
function Wd(t, e) {
    const n = t[1];
    for (const r of n) {
        const i = r[0].type;
        if (e(r, i))
            return !0
    }
    return !1
}
function xl(t) {
    return Q.__SENTRY__ && Q.__SENTRY__.encodePolyfill ? Q.__SENTRY__.encodePolyfill(t) : new TextEncoder().encode(t)
}
function gE(t) {
    const [e, n] = t;
    let r = JSON.stringify(e);
    function i(s) {
        typeof r == "string" ? r = typeof s == "string" ? r + s : [xl(r), s] : r.push(typeof s == "string" ? xl(s) : s)
    }
    for (const s of n) {
        const [o, a] = s;
        if (i(`
${JSON.stringify(o)}
`),
            typeof a == "string" || a instanceof Uint8Array)
            i(a);
        else {
            let u;
            try {
                u = JSON.stringify(a)
            } catch {
                u = JSON.stringify(Ft(a))
            }
            i(u)
        }
    }
    return typeof r == "string" ? r : yE(r)
}
function yE(t) {
    const e = t.reduce((i, s) => i + s.length, 0)
        , n = new Uint8Array(e);
    let r = 0;
    for (const i of t)
        n.set(i, r),
            r += i.length;
    return n
}
function vE(t) {
    const e = typeof t.data == "string" ? xl(t.data) : t.data;
    return [st({
        type: "attachment",
        length: e.length,
        filename: t.filename,
        content_type: t.contentType,
        attachment_type: t.attachmentType
    }), e]
}
const _E = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket",
    raw_security: "security"
};
function Zd(t) {
    return _E[t]
}
function Ag(t) {
    if (!t || !t.sdk)
        return;
    const { name: e, version: n } = t.sdk;
    return {
        name: e,
        version: n
    }
}
function wE(t, e, n, r) {
    const i = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: t.event_id,
        sent_at: new Date().toISOString(),
        ...e && {
            sdk: e
        },
        ...!!n && r && {
            dsn: Ta(r)
        },
        ...i && {
            trace: st({
                ...i
            })
        }
    }
}
function SE(t, e) {
    return e && (t.sdk = t.sdk || {},
        t.sdk.name = t.sdk.name || e.name,
        t.sdk.version = t.sdk.version || e.version,
        t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []],
        t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]),
        t
}
function EE(t, e, n, r) {
    const i = Ag(n)
        , s = {
            sent_at: new Date().toISOString(),
            ...i && {
                sdk: i
            },
            ...!!r && e && {
                dsn: Ta(e)
            }
        }
        , o = "aggregates" in t ? [{
            type: "sessions"
        }, t] : [{
            type: "session"
        }, t.toJSON()];
    return gs(s, [o])
}
function kE(t, e, n, r) {
    const i = Ag(n)
        , s = t.type && t.type !== "replay_event" ? t.type : "event";
    SE(t, n && n.sdk);
    const o = wE(t, i, r, e);
    return delete t.sdkProcessingMetadata,
        gs(o, [[{
            type: s
        }, t]])
}
function Cl(t, e, n, r = 0) {
    return new rt((i, s) => {
        const o = t[r];
        if (e === null || typeof o != "function")
            i(e);
        else {
            const a = o({
                ...e
            }, n);
            J && o.id && a === null && M.log(`Event processor "${o.id}" dropped event`),
                xa(a) ? a.then(u => Cl(t, u, n, r + 1).then(i)).then(null, s) : Cl(t, a, n, r + 1).then(i).then(null, s)
        }
    }
    )
}
let $s, Qd, Us;
function xE(t) {
    const e = Q._sentryDebugIds;
    if (!e)
        return {};
    const n = Object.keys(e);
    return Us && n.length === Qd || (Qd = n.length,
        Us = n.reduce((r, i) => {
            $s || ($s = {});
            const s = $s[i];
            if (s)
                r[s[0]] = s[1];
            else {
                const o = t(i);
                for (let a = o.length - 1; a >= 0; a--) {
                    const u = o[a]
                        , l = u && u.filename
                        , c = e[i];
                    if (l && c) {
                        r[l] = c,
                            $s[i] = [l, c];
                        break
                    }
                }
            }
            return r
        }
            , {})),
        Us
}
function CE(t, e) {
    const { fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: s } = e;
    bE(t, e),
        r && NE(t, r),
        PE(t, n),
        TE(t, i),
        OE(t, s)
}
function Kd(t, e) {
    const { extra: n, tags: r, user: i, contexts: s, level: o, sdkProcessingMetadata: a, breadcrumbs: u, fingerprint: l, eventProcessors: c, attachments: f, propagationContext: p, transactionName: g, span: y } = e;
    Bs(t, "extra", n),
        Bs(t, "tags", r),
        Bs(t, "user", i),
        Bs(t, "contexts", s),
        t.sdkProcessingMetadata = ba(t.sdkProcessingMetadata, a, 2),
        o && (t.level = o),
        g && (t.transactionName = g),
        y && (t.span = y),
        u.length && (t.breadcrumbs = [...t.breadcrumbs, ...u]),
        l.length && (t.fingerprint = [...t.fingerprint, ...l]),
        c.length && (t.eventProcessors = [...t.eventProcessors, ...c]),
        f.length && (t.attachments = [...t.attachments, ...f]),
        t.propagationContext = {
            ...t.propagationContext,
            ...p
        }
}
function Bs(t, e, n) {
    t[e] = ba(t[e], n, 1)
}
function bE(t, e) {
    const { extra: n, tags: r, user: i, contexts: s, level: o, transactionName: a } = e
        , u = st(n);
    u && Object.keys(u).length && (t.extra = {
        ...u,
        ...t.extra
    });
    const l = st(r);
    l && Object.keys(l).length && (t.tags = {
        ...l,
        ...t.tags
    });
    const c = st(i);
    c && Object.keys(c).length && (t.user = {
        ...c,
        ...t.user
    });
    const f = st(s);
    f && Object.keys(f).length && (t.contexts = {
        ...f,
        ...t.contexts
    }),
        o && (t.level = o),
        a && t.type !== "transaction" && (t.transaction = a)
}
function TE(t, e) {
    const n = [...t.breadcrumbs || [], ...e];
    t.breadcrumbs = n.length ? n : void 0
}
function OE(t, e) {
    t.sdkProcessingMetadata = {
        ...t.sdkProcessingMetadata,
        ...e
    }
}
function NE(t, e) {
    t.contexts = {
        trace: ZS(e),
        ...t.contexts
    },
        t.sdkProcessingMetadata = {
            dynamicSamplingContext: rE(e),
            ...t.sdkProcessingMetadata
        };
    const n = Ng(e)
        , r = Qc(n).description;
    r && !t.transaction && t.type === "transaction" && (t.transaction = r)
}
function PE(t, e) {
    t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [],
        e && (t.fingerprint = t.fingerprint.concat(e)),
        t.fingerprint && !t.fingerprint.length && delete t.fingerprint
}
function RE(t, e, n, r, i, s) {
    const { normalizeDepth: o = 3, normalizeMaxBreadth: a = 1e3 } = t
        , u = {
            ...e,
            event_id: e.event_id || n.event_id || ut(),
            timestamp: e.timestamp || ms()
        }
        , l = n.integrations || t.integrations.map(C => C.name);
    IE(u, t),
        LE(u, l),
        i && i.emit("applyFrameMetadata", e),
        e.type === void 0 && AE(u, t.stackParser);
    const c = jE(r, n.captureContext);
    n.mechanism && Hr(u, n.mechanism);
    const f = i ? i.getEventProcessors() : []
        , p = RS().getScopeData();
    if (s) {
        const C = s.getScopeData();
        Kd(p, C)
    }
    if (c) {
        const C = c.getScopeData();
        Kd(p, C)
    }
    const g = [...n.attachments || [], ...p.attachments];
    g.length && (n.attachments = g),
        CE(u, p);
    const y = [...f, ...p.eventProcessors];
    return Cl(y, u, n).then(C => (C && DE(C),
        typeof o == "number" && o > 0 ? ME(C, o, a) : C))
}
function IE(t, e) {
    const { environment: n, release: r, dist: i, maxValueLength: s = 250 } = e;
    t.environment = t.environment || n || Kc,
        !t.release && r && (t.release = r),
        !t.dist && i && (t.dist = i),
        t.message && (t.message = Ir(t.message, s));
    const o = t.exception && t.exception.values && t.exception.values[0];
    o && o.value && (o.value = Ir(o.value, s));
    const a = t.request;
    a && a.url && (a.url = Ir(a.url, s))
}
function AE(t, e) {
    const n = xE(e);
    try {
        t.exception.values.forEach(r => {
            r.stacktrace.frames.forEach(i => {
                n && i.filename && (i.debug_id = n[i.filename])
            }
            )
        }
        )
    } catch { }
}
function DE(t) {
    const e = {};
    try {
        t.exception.values.forEach(r => {
            r.stacktrace.frames.forEach(i => {
                i.debug_id && (i.abs_path ? e[i.abs_path] = i.debug_id : i.filename && (e[i.filename] = i.debug_id),
                    delete i.debug_id)
            }
            )
        }
        )
    } catch { }
    if (Object.keys(e).length === 0)
        return;
    t.debug_meta = t.debug_meta || {},
        t.debug_meta.images = t.debug_meta.images || [];
    const n = t.debug_meta.images;
    Object.entries(e).forEach(([r, i]) => {
        n.push({
            type: "sourcemap",
            code_file: r,
            debug_id: i
        })
    }
    )
}
function LE(t, e) {
    e.length > 0 && (t.sdk = t.sdk || {},
        t.sdk.integrations = [...t.sdk.integrations || [], ...e])
}
function ME(t, e, n) {
    if (!t)
        return null;
    const r = {
        ...t,
        ...t.breadcrumbs && {
            breadcrumbs: t.breadcrumbs.map(i => ({
                ...i,
                ...i.data && {
                    data: Ft(i.data, e, n)
                }
            }))
        },
        ...t.user && {
            user: Ft(t.user, e, n)
        },
        ...t.contexts && {
            contexts: Ft(t.contexts, e, n)
        },
        ...t.extra && {
            extra: Ft(t.extra, e, n)
        }
    };
    return t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace,
        t.contexts.trace.data && (r.contexts.trace.data = Ft(t.contexts.trace.data, e, n))),
        t.spans && (r.spans = t.spans.map(i => ({
            ...i,
            ...i.data && {
                data: Ft(i.data, e, n)
            }
        }))),
        t.contexts && t.contexts.flags && r.contexts && (r.contexts.flags = Ft(t.contexts.flags, 3, n)),
        r
}
function jE(t, e) {
    if (!e)
        return t;
    const n = t ? t.clone() : new er;
    return n.update(e),
        n
}
function FE(t, e) {
    return Xt().captureException(t, void 0)
}
function Dg(t, e) {
    return Xt().captureEvent(t, e)
}
function zE(t, e) {
    ti().setContext(t, e)
}
function Gd(t) {
    const e = Ie()
        , n = ti()
        , r = Xt()
        , { release: i, environment: s = Kc } = e && e.getOptions() || {}
        , { userAgent: o } = Q.navigator || {}
        , a = SS({
            release: i,
            environment: s,
            user: r.getUser() || n.getUser(),
            ...o && {
                userAgent: o
            },
            ...t
        })
        , u = n.getSession();
    return u && u.status === "ok" && Wr(u, {
        status: "exited"
    }),
        Lg(),
        n.setSession(a),
        r.setSession(a),
        a
}
function Lg() {
    const t = ti()
        , e = Xt()
        , n = e.getSession() || t.getSession();
    n && ES(n),
        Mg(),
        t.setSession(),
        e.setSession()
}
function Mg() {
    const t = ti()
        , e = Xt()
        , n = Ie()
        , r = e.getSession() || t.getSession();
    r && n && n.captureSession(r)
}
function Yd(t = !1) {
    if (t) {
        Lg();
        return
    }
    Mg()
}
const $E = "7";
function UE(t) {
    const e = t.protocol ? `${t.protocol}:` : ""
        , n = t.port ? `:${t.port}` : "";
    return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`
}
function BE(t) {
    return `${UE(t)}${t.projectId}/envelope/`
}
function VE(t, e) {
    const n = {
        sentry_version: $E
    };
    return t.publicKey && (n.sentry_key = t.publicKey),
        e && (n.sentry_client = `${e.name}/${e.version}`),
        new URLSearchParams(n).toString()
}
function qE(t, e, n) {
    return e || `${BE(t)}?${VE(t, n)}`
}
const Xd = [];
function HE(t) {
    const e = {};
    return t.forEach(n => {
        const { name: r } = n
            , i = e[r];
        i && !i.isDefaultInstance && n.isDefaultInstance || (e[r] = n)
    }
    ),
        Object.values(e)
}
function WE(t) {
    const e = t.defaultIntegrations || []
        , n = t.integrations;
    e.forEach(o => {
        o.isDefaultInstance = !0
    }
    );
    let r;
    if (Array.isArray(n))
        r = [...e, ...n];
    else if (typeof n == "function") {
        const o = n(e);
        r = Array.isArray(o) ? o : [o]
    } else
        r = e;
    const i = HE(r)
        , s = i.findIndex(o => o.name === "Debug");
    if (s > -1) {
        const [o] = i.splice(s, 1);
        i.push(o)
    }
    return i
}
function ZE(t, e) {
    const n = {};
    return e.forEach(r => {
        r && jg(t, r, n)
    }
    ),
        n
}
function Jd(t, e) {
    for (const n of e)
        n && n.afterAllSetup && n.afterAllSetup(t)
}
function jg(t, e, n) {
    if (n[e.name]) {
        J && M.log(`Integration skipped because it was already installed: ${e.name}`);
        return
    }
    if (n[e.name] = e,
        Xd.indexOf(e.name) === -1 && typeof e.setupOnce == "function" && (e.setupOnce(),
            Xd.push(e.name)),
        e.setup && typeof e.setup == "function" && e.setup(t),
        typeof e.preprocessEvent == "function") {
        const r = e.preprocessEvent.bind(e);
        t.on("preprocessEvent", (i, s) => r(i, s, t))
    }
    if (typeof e.processEvent == "function") {
        const r = e.processEvent.bind(e)
            , i = Object.assign((s, o) => r(s, o, t), {
                id: e.name
            });
        t.addEventProcessor(i)
    }
    J && M.log(`Integration installed: ${e.name}`)
}
function QE(t, e, n) {
    const r = [{
        type: "client_report"
    }, {
        timestamp: ms(),
        discarded_events: t
    }];
    return gs(e ? {
        dsn: e
    } : {}, [r])
}
class Tt extends Error {
    constructor(e, n = "warn") {
        super(e),
            this.message = e,
            this.name = new.target.prototype.constructor.name,
            Object.setPrototypeOf(this, new.target.prototype),
            this.logLevel = n
    }
}
const ep = "Not capturing exception because it's already been captured.";
class KE {
    constructor(e) {
        if (this._options = e,
            this._integrations = {},
            this._numProcessing = 0,
            this._outcomes = {},
            this._hooks = {},
            this._eventProcessors = [],
            e.dsn ? this._dsn = lE(e.dsn) : J && M.warn("No DSN provided, client will not send events."),
            this._dsn) {
            const i = qE(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: i
            })
        }
        const r = ["enableTracing", "tracesSampleRate", "tracesSampler"].find(i => i in e && e[i] == null);
        r && sr(() => {
            console.warn(`[Sentry] Deprecation warning: \`${r}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`)
        }
        )
    }
    captureException(e, n, r) {
        const i = ut();
        if (jd(e))
            return J && M.log(ep),
                i;
        const s = {
            event_id: i,
            ...n
        };
        return this._process(this.eventFromException(e, s).then(o => this._captureEvent(o, s, r))),
            s.event_id
    }
    captureMessage(e, n, r, i) {
        const s = {
            event_id: ut(),
            ...r
        }
            , o = Bc(e) ? e : String(e)
            , a = Vc(e) ? this.eventFromMessage(o, n, s) : this.eventFromException(e, s);
        return this._process(a.then(u => this._captureEvent(u, s, i))),
            s.event_id
    }
    captureEvent(e, n, r) {
        const i = ut();
        if (n && n.originalException && jd(n.originalException))
            return J && M.log(ep),
                i;
        const s = {
            event_id: i,
            ...n
        }
            , a = (e.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(e, s, a || r)),
            s.event_id
    }
    captureSession(e) {
        typeof e.release != "string" ? J && M.warn("Discarded session because of missing or non-string release") : (this.sendSession(e),
            Wr(e, {
                init: !1
            }))
    }
    getDsn() {
        return this._dsn
    }
    getOptions() {
        return this._options
    }
    getSdkMetadata() {
        return this._options._metadata
    }
    getTransport() {
        return this._transport
    }
    flush(e) {
        const n = this._transport;
        return n ? (this.emit("flush"),
            this._isClientDoneProcessing(e).then(r => n.flush(e).then(i => r && i))) : Jn(!0)
    }
    close(e) {
        return this.flush(e).then(n => (this.getOptions().enabled = !1,
            this.emit("close"),
            n))
    }
    getEventProcessors() {
        return this._eventProcessors
    }
    addEventProcessor(e) {
        this._eventProcessors.push(e)
    }
    init() {
        (this._isEnabled() || this._options.integrations.some(({ name: e }) => e.startsWith("Spotlight"))) && this._setupIntegrations()
    }
    getIntegrationByName(e) {
        return this._integrations[e]
    }
    addIntegration(e) {
        const n = this._integrations[e.name];
        jg(this, e, this._integrations),
            n || Jd(this, [e])
    }
    sendEvent(e, n = {}) {
        this.emit("beforeSendEvent", e, n);
        let r = kE(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (const s of n.attachments || [])
            r = mE(r, vE(s));
        const i = this.sendEnvelope(r);
        i && i.then(s => this.emit("afterSendEvent", e, s), null)
    }
    sendSession(e) {
        const n = EE(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(n)
    }
    recordDroppedEvent(e, n, r) {
        if (this._options.sendClientReports) {
            const i = typeof r == "number" ? r : 1
                , s = `${e}:${n}`;
            J && M.log(`Recording outcome: "${s}"${i > 1 ? ` (${i} times)` : ""}`),
                this._outcomes[s] = (this._outcomes[s] || 0) + i
        }
    }
    on(e, n) {
        const r = this._hooks[e] = this._hooks[e] || [];
        return r.push(n),
            () => {
                const i = r.indexOf(n);
                i > -1 && r.splice(i, 1)
            }
    }
    emit(e, ...n) {
        const r = this._hooks[e];
        r && r.forEach(i => i(...n))
    }
    sendEnvelope(e) {
        return this.emit("beforeEnvelope", e),
            this._isEnabled() && this._transport ? this._transport.send(e).then(null, n => (J && M.error("Error while sending envelope:", n),
                n)) : (J && M.error("Transport disabled"),
                    Jn({}))
    }
    _setupIntegrations() {
        const { integrations: e } = this._options;
        this._integrations = ZE(this, e),
            Jd(this, e)
    }
    _updateSessionFromEvent(e, n) {
        let r = !1
            , i = !1;
        const s = n.exception && n.exception.values;
        if (s) {
            i = !0;
            for (const u of s) {
                const l = u.mechanism;
                if (l && l.handled === !1) {
                    r = !0;
                    break
                }
            }
        }
        const o = e.status === "ok";
        (o && e.errors === 0 || o && r) && (Wr(e, {
            ...r && {
                status: "crashed"
            },
            errors: e.errors || Number(i || r)
        }),
            this.captureSession(e))
    }
    _isClientDoneProcessing(e) {
        return new rt(n => {
            let r = 0;
            const i = 1
                , s = setInterval(() => {
                    this._numProcessing == 0 ? (clearInterval(s),
                        n(!0)) : (r += i,
                            e && r >= e && (clearInterval(s),
                                n(!1)))
                }
                    , i)
        }
        )
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._transport !== void 0
    }
    _prepareEvent(e, n, r = Xt(), i = ti()) {
        const s = this.getOptions()
            , o = Object.keys(this._integrations);
        return !n.integrations && o.length > 0 && (n.integrations = o),
            this.emit("preprocessEvent", e, n),
            e.type || i.setLastEventId(e.event_id || n.event_id),
            RE(s, e, n, r, this, i).then(a => {
                if (a === null)
                    return a;
                a.contexts = {
                    trace: AS(r),
                    ...a.contexts
                };
                const u = nE(this, r);
                return a.sdkProcessingMetadata = {
                    dynamicSamplingContext: u,
                    ...a.sdkProcessingMetadata
                },
                    a
            }
            )
    }
    _captureEvent(e, n = {}, r) {
        return this._processEvent(e, n, r).then(i => i.event_id, i => {
            if (J) {
                const s = i;
                s.logLevel === "log" ? M.log(s.message) : M.warn(s)
            }
        }
        )
    }
    _processEvent(e, n, r) {
        const i = this.getOptions()
            , { sampleRate: s } = i
            , o = zg(e)
            , a = Fg(e)
            , u = e.type || "error"
            , l = `before send for type \`${u}\``
            , c = typeof s > "u" ? void 0 : iE(s);
        if (a && typeof c == "number" && Math.random() > c)
            return this.recordDroppedEvent("sample_rate", "error", e),
                Yo(new Tt(`Discarding event because it's not included in the random sample (sampling rate = ${s})`, "log"));
        const f = u === "replay_event" ? "replay" : u
            , g = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(e, n, r, g).then(y => {
            if (y === null)
                throw this.recordDroppedEvent("event_processor", f, e),
                new Tt("An event processor returned `null`, will not send event.", "log");
            if (n.data && n.data.__sentry__ === !0)
                return y;
            const C = YE(this, i, y, n);
            return GE(C, l)
        }
        ).then(y => {
            if (y === null) {
                if (this.recordDroppedEvent("before_send", f, e),
                    o) {
                    const d = 1 + (e.spans || []).length;
                    this.recordDroppedEvent("before_send", "span", d)
                }
                throw new Tt(`${l} returned \`null\`, will not send event.`, "log")
            }
            const v = r && r.getSession();
            if (!o && v && this._updateSessionFromEvent(v, y),
                o) {
                const h = y.sdkProcessingMetadata && y.sdkProcessingMetadata.spanCountBeforeProcessing || 0
                    , d = y.spans ? y.spans.length : 0
                    , m = h - d;
                m > 0 && this.recordDroppedEvent("before_send", "span", m)
            }
            const C = y.transaction_info;
            if (o && C && y.transaction !== e.transaction) {
                const h = "custom";
                y.transaction_info = {
                    ...C,
                    source: h
                }
            }
            return this.sendEvent(y, n),
                y
        }
        ).then(null, y => {
            throw y instanceof Tt ? y : (this.captureException(y, {
                data: {
                    __sentry__: !0
                },
                originalException: y
            }),
                new Tt(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${y}`))
        }
        )
    }
    _process(e) {
        this._numProcessing++,
            e.then(n => (this._numProcessing--,
                n), n => (this._numProcessing--,
                    n))
    }
    _clearOutcomes() {
        const e = this._outcomes;
        return this._outcomes = {},
            Object.entries(e).map(([n, r]) => {
                const [i, s] = n.split(":");
                return {
                    reason: i,
                    category: s,
                    quantity: r
                }
            }
            )
    }
    _flushOutcomes() {
        J && M.log("Flushing outcomes...");
        const e = this._clearOutcomes();
        if (e.length === 0) {
            J && M.log("No outcomes to send");
            return
        }
        if (!this._dsn) {
            J && M.log("No dsn provided, will not send outcomes");
            return
        }
        J && M.log("Sending outcomes:", e);
        const n = QE(e, this._options.tunnel && Ta(this._dsn));
        this.sendEnvelope(n)
    }
}
function GE(t, e) {
    const n = `${e} must return \`null\` or a valid event.`;
    if (xa(t))
        return t.then(r => {
            if (!qr(r) && r !== null)
                throw new Tt(n);
            return r
        }
            , r => {
                throw new Tt(`${e} rejected with ${r}`)
            }
        );
    if (!qr(t) && t !== null)
        throw new Tt(n);
    return t
}
function YE(t, e, n, r) {
    const { beforeSend: i, beforeSendTransaction: s, beforeSendSpan: o } = e;
    if (Fg(n) && i)
        return i(n, r);
    if (zg(n)) {
        if (n.spans && o) {
            const a = [];
            for (const u of n.spans) {
                const l = o(u);
                l ? a.push(l) : (JS(),
                    t.recordDroppedEvent("before_send", "span"))
            }
            n.spans = a
        }
        if (s) {
            if (n.spans) {
                const a = n.spans.length;
                n.sdkProcessingMetadata = {
                    ...n.sdkProcessingMetadata,
                    spanCountBeforeProcessing: a
                }
            }
            return s(n, r)
        }
    }
    return n
}
function Fg(t) {
    return t.type === void 0
}
function zg(t) {
    return t.type === "transaction"
}
function XE(t, e) {
    e.debug === !0 && (J ? M.enable() : sr(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
    }
    )),
        Xt().update(e.initialScope);
    const r = new t(e);
    return JE(r),
        r.init(),
        r
}
function JE(t) {
    Xt().setClient(t)
}
function ek(t) {
    const e = [];
    function n() {
        return t === void 0 || e.length < t
    }
    function r(o) {
        return e.splice(e.indexOf(o), 1)[0] || Promise.resolve(void 0)
    }
    function i(o) {
        if (!n())
            return Yo(new Tt("Not adding Promise because buffer limit was reached."));
        const a = o();
        return e.indexOf(a) === -1 && e.push(a),
            a.then(() => r(a)).then(null, () => r(a).then(null, () => { }
            )),
            a
    }
    function s(o) {
        return new rt((a, u) => {
            let l = e.length;
            if (!l)
                return a(!0);
            const c = setTimeout(() => {
                o && o > 0 && a(!1)
            }
                , o);
            e.forEach(f => {
                Jn(f).then(() => {
                    --l || (clearTimeout(c),
                        a(!0))
                }
                    , u)
            }
            )
        }
        )
    }
    return {
        $: e,
        add: i,
        drain: s
    }
}
const tk = 60 * 1e3;
function nk(t, e = Date.now()) {
    const n = parseInt(`${t}`, 10);
    if (!isNaN(n))
        return n * 1e3;
    const r = Date.parse(`${t}`);
    return isNaN(r) ? tk : r - e
}
function rk(t, e) {
    return t[e] || t.all || 0
}
function ik(t, e, n = Date.now()) {
    return rk(t, e) > n
}
function sk(t, { statusCode: e, headers: n }, r = Date.now()) {
    const i = {
        ...t
    }
        , s = n && n["x-sentry-rate-limits"]
        , o = n && n["retry-after"];
    if (s)
        for (const a of s.trim().split(",")) {
            const [u, l, , , c] = a.split(":", 5)
                , f = parseInt(u, 10)
                , p = (isNaN(f) ? 60 : f) * 1e3;
            if (!l)
                i.all = r + p;
            else
                for (const g of l.split(";"))
                    g === "metric_bucket" ? (!c || c.split(";").includes("custom")) && (i[g] = r + p) : i[g] = r + p
        }
    else
        o ? i.all = r + nk(o, r) : e === 429 && (i.all = r + 60 * 1e3);
    return i
}
const ok = 64;
function ak(t, e, n = ek(t.bufferSize || ok)) {
    let r = {};
    const i = o => n.drain(o);
    function s(o) {
        const a = [];
        if (Wd(o, (f, p) => {
            const g = Zd(p);
            if (ik(r, g)) {
                const y = tp(f, p);
                t.recordDroppedEvent("ratelimit_backoff", g, y)
            } else
                a.push(f)
        }
        ),
            a.length === 0)
            return Jn({});
        const u = gs(o[0], a)
            , l = f => {
                Wd(u, (p, g) => {
                    const y = tp(p, g);
                    t.recordDroppedEvent(f, Zd(g), y)
                }
                )
            }
            , c = () => e({
                body: gE(u)
            }).then(f => (f.statusCode !== void 0 && (f.statusCode < 200 || f.statusCode >= 300) && J && M.warn(`Sentry responded with status code ${f.statusCode} to sent event.`),
                r = sk(r, f),
                f), f => {
                    throw l("network_error"),
                    f
                }
            );
        return n.add(c).then(f => f, f => {
            if (f instanceof Tt)
                return J && M.error("Skipped sending event because buffer is full."),
                    l("queue_overflow"),
                    Jn({});
            throw f
        }
        )
    }
    return {
        send: s,
        flush: i
    }
}
function tp(t, e) {
    if (!(e !== "event" && e !== "transaction"))
        return Array.isArray(t) ? t[1] : void 0
}
function $g(t, e, n = [e], r = "npm") {
    const i = t._metadata || {};
    i.sdk || (i.sdk = {
        name: `sentry.javascript.${e}`,
        packages: n.map(s => ({
            name: `${r}:@sentry/${s}`,
            version: Bn
        })),
        version: Bn
    }),
        t._metadata = i
}
const uk = 100;
function tr(t, e) {
    const n = Ie()
        , r = ti();
    if (!n)
        return;
    const { beforeBreadcrumb: i = null, maxBreadcrumbs: s = uk } = n.getOptions();
    if (s <= 0)
        return;
    const a = {
        timestamp: ms(),
        ...t
    }
        , u = i ? sr(() => i(a, e)) : a;
    u !== null && (n.emit && n.emit("beforeAddBreadcrumb", u, e),
        r.addBreadcrumb(u, s))
}
let np;
const lk = "FunctionToString"
    , rp = new WeakMap
    , ck = () => ({
        name: lk,
        setupOnce() {
            np = Function.prototype.toString;
            try {
                Function.prototype.toString = function (...t) {
                    const e = Hc(this)
                        , n = rp.has(Ie()) && e !== void 0 ? e : this;
                    return np.apply(n, t)
                }
            } catch { }
        },
        setup(t) {
            rp.set(t, !0)
        }
    })
    , fk = ck
    , dk = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/]
    , pk = "InboundFilters"
    , hk = (t = {}) => ({
        name: pk,
        processEvent(e, n, r) {
            const i = r.getOptions()
                , s = gk(t, i);
            return yk(e, s) ? null : e
        }
    })
    , mk = hk;
function gk(t = {}, e = {}) {
    return {
        allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
        denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
        ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : dk],
        ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || []],
        ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
    }
}
function yk(t, e) {
    return e.ignoreInternal && kk(t) ? (J && M.warn(`Event dropped due to being internal Sentry Error.
Event: ${on(t)}`),
        !0) : vk(t, e.ignoreErrors) ? (J && M.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${on(t)}`),
            !0) : Ck(t) ? (J && M.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${on(t)}`),
                !0) : _k(t, e.ignoreTransactions) ? (J && M.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${on(t)}`),
                    !0) : wk(t, e.denyUrls) ? (J && M.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${on(t)}.
Url: ${Xo(t)}`),
                        !0) : Sk(t, e.allowUrls) ? !1 : (J && M.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${on(t)}.
Url: ${Xo(t)}`),
                            !0)
}
function vk(t, e) {
    return t.type || !e || !e.length ? !1 : Ek(t).some(n => Ca(n, e))
}
function _k(t, e) {
    if (t.type !== "transaction" || !e || !e.length)
        return !1;
    const n = t.transaction;
    return n ? Ca(n, e) : !1
}
function wk(t, e) {
    if (!e || !e.length)
        return !1;
    const n = Xo(t);
    return n ? Ca(n, e) : !1
}
function Sk(t, e) {
    if (!e || !e.length)
        return !0;
    const n = Xo(t);
    return n ? Ca(n, e) : !0
}
function Ek(t) {
    const e = [];
    t.message && e.push(t.message);
    let n;
    try {
        n = t.exception.values[t.exception.values.length - 1]
    } catch { }
    return n && n.value && (e.push(n.value),
        n.type && e.push(`${n.type}: ${n.value}`)),
        e
}
function kk(t) {
    try {
        return t.exception.values[0].type === "SentryError"
    } catch { }
    return !1
}
function xk(t = []) {
    for (let e = t.length - 1; e >= 0; e--) {
        const n = t[e];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
            return n.filename || null
    }
    return null
}
function Xo(t) {
    try {
        let e;
        try {
            e = t.exception.values[0].stacktrace.frames
        } catch { }
        return e ? xk(e) : null
    } catch {
        return J && M.error(`Cannot extract url for event ${on(t)}`),
            null
    }
}
function Ck(t) {
    return t.type || !t.exception || !t.exception.values || t.exception.values.length === 0 ? !1 : !t.message && !t.exception.values.some(e => e.stacktrace || e.type && e.type !== "Error" || e.value)
}
function bk(t, e, n = 250, r, i, s, o) {
    if (!s.exception || !s.exception.values || !o || !Yn(o.originalException, Error))
        return;
    const a = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
    a && (s.exception.values = Tk(bl(t, e, i, o.originalException, r, s.exception.values, a, 0), n))
}
function bl(t, e, n, r, i, s, o, a) {
    if (s.length >= n + 1)
        return s;
    let u = [...s];
    if (Yn(r[i], Error)) {
        ip(o, a);
        const l = t(e, r[i])
            , c = u.length;
        sp(l, i, c, a),
            u = bl(t, e, n, r[i], i, [l, ...u], l, c)
    }
    return Array.isArray(r.errors) && r.errors.forEach((l, c) => {
        if (Yn(l, Error)) {
            ip(o, a);
            const f = t(e, l)
                , p = u.length;
            sp(f, `errors[${c}]`, p, a),
                u = bl(t, e, n, l, i, [f, ...u], f, p)
        }
    }
    ),
        u
}
function ip(t, e) {
    t.mechanism = t.mechanism || {
        type: "generic",
        handled: !0
    },
        t.mechanism = {
            ...t.mechanism,
            ...t.type === "AggregateError" && {
                is_exception_group: !0
            },
            exception_id: e
        }
}
function sp(t, e, n, r) {
    t.mechanism = t.mechanism || {
        type: "generic",
        handled: !0
    },
        t.mechanism = {
            ...t.mechanism,
            type: "chained",
            source: e,
            exception_id: n,
            parent_id: r
        }
}
function Tk(t, e) {
    return t.map(n => (n.value && (n.value = Ir(n.value, e)),
        n))
}
function fu(t) {
    if (!t)
        return {};
    const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e)
        return {};
    const n = e[6] || ""
        , r = e[8] || "";
    return {
        host: e[4],
        path: e[5],
        protocol: e[2],
        search: n,
        hash: r,
        relative: e[5] + n + r
    }
}
function Ok(t) {
    const e = "console";
    or(e, t),
        ar(e, Nk)
}
function Nk() {
    "console" in Q && vl.forEach(function (t) {
        t in Q.console && Ze(Q.console, t, function (e) {
            return Go[t] = e,
                function (...n) {
                    St("console", {
                        args: n,
                        level: t
                    });
                    const i = Go[t];
                    i && i.apply(Q.console, n)
                }
        })
    })
}
function Pk(t) {
    return t === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(t) ? t : "log"
}
const Rk = "Dedupe"
    , Ik = () => {
        let t;
        return {
            name: Rk,
            processEvent(e) {
                if (e.type)
                    return e;
                try {
                    if (Dk(e, t))
                        return J && M.warn("Event dropped due to being a duplicate of previously captured event."),
                            null
                } catch { }
                return t = e
            }
        }
    }
    , Ak = Ik;
function Dk(t, e) {
    return e ? !!(Lk(t, e) || Mk(t, e)) : !1
}
function Lk(t, e) {
    const n = t.message
        , r = e.message;
    return !(!n && !r || n && !r || !n && r || n !== r || !Bg(t, e) || !Ug(t, e))
}
function Mk(t, e) {
    const n = op(e)
        , r = op(t);
    return !(!n || !r || n.type !== r.type || n.value !== r.value || !Bg(t, e) || !Ug(t, e))
}
function Ug(t, e) {
    let n = Rd(t)
        , r = Rd(e);
    if (!n && !r)
        return !0;
    if (n && !r || !n && r || (n = n,
        r = r,
        r.length !== n.length))
        return !1;
    for (let i = 0; i < r.length; i++) {
        const s = r[i]
            , o = n[i];
        if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function)
            return !1
    }
    return !0
}
function Bg(t, e) {
    let n = t.fingerprint
        , r = e.fingerprint;
    if (!n && !r)
        return !0;
    if (n && !r || !n && r)
        return !1;
    n = n,
        r = r;
    try {
        return n.join("") === r.join("")
    } catch {
        return !1
    }
}
function op(t) {
    return t.exception && t.exception.values && t.exception.values[0]
}
function Vg(t) {
    if (t !== void 0)
        return t >= 400 && t < 500 ? "warning" : t >= 500 ? "error" : void 0
}
const Tl = Q;
function qg() {
    if (!("fetch" in Tl))
        return !1;
    try {
        return new Headers,
            new Request("http://www.example.com"),
            new Response,
            !0
    } catch {
        return !1
    }
}
function Ol(t) {
    return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
}
function jk() {
    if (typeof EdgeRuntime == "string")
        return !0;
    if (!qg())
        return !1;
    if (Ol(Tl.fetch))
        return !0;
    let t = !1;
    const e = Tl.document;
    if (e && typeof e.createElement == "function")
        try {
            const n = e.createElement("iframe");
            n.hidden = !0,
                e.head.appendChild(n),
                n.contentWindow && n.contentWindow.fetch && (t = Ol(n.contentWindow.fetch)),
                e.head.removeChild(n)
        } catch (n) {
            ir && M.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
        }
    return t
}
function Fk(t, e) {
    const n = "fetch";
    or(n, t),
        ar(n, () => zk(void 0, e))
}
function zk(t, e = !1) {
    e && !jk() || Ze(Q, "fetch", function (n) {
        return function (...r) {
            const i = new Error
                , { method: s, url: o } = $k(r)
                , a = {
                    args: r,
                    fetchData: {
                        method: s,
                        url: o
                    },
                    startTimestamp: Ht() * 1e3,
                    virtualError: i
                };
            return St("fetch", {
                ...a
            }),
                n.apply(Q, r).then(async u => (St("fetch", {
                    ...a,
                    endTimestamp: Ht() * 1e3,
                    response: u
                }),
                    u), u => {
                        throw St("fetch", {
                            ...a,
                            endTimestamp: Ht() * 1e3,
                            error: u
                        }),
                        Uc(u) && u.stack === void 0 && (u.stack = i.stack,
                            Xn(u, "framesToPop", 1)),
                        u
                    }
                )
        }
    })
}
function Nl(t, e) {
    return !!t && typeof t == "object" && !!t[e]
}
function ap(t) {
    return typeof t == "string" ? t : t ? Nl(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
}
function $k(t) {
    if (t.length === 0)
        return {
            method: "GET",
            url: ""
        };
    if (t.length === 2) {
        const [n, r] = t;
        return {
            url: ap(n),
            method: Nl(r, "method") ? String(r.method).toUpperCase() : "GET"
        }
    }
    const e = t[0];
    return {
        url: ap(e),
        method: Nl(e, "method") ? String(e.method).toUpperCase() : "GET"
    }
}
function Uk() {
    return "npm"
}
const Vs = Q;
function Bk() {
    const t = Vs.chrome
        , e = t && t.app && t.app.runtime
        , n = "history" in Vs && !!Vs.history.pushState && !!Vs.history.replaceState;
    return !e && n
}
const ee = Q;
let Pl = 0;
function Hg() {
    return Pl > 0
}
function Vk() {
    Pl++,
        setTimeout(() => {
            Pl--
        }
        )
}
function Qr(t, e = {}) {
    function n(i) {
        return typeof i == "function"
    }
    if (!n(t))
        return t;
    try {
        const i = t.__sentry_wrapped__;
        if (i)
            return typeof i == "function" ? i : t;
        if (Hc(t))
            return t
    } catch {
        return t
    }
    const r = function (...i) {
        try {
            const s = i.map(o => Qr(o, e));
            return t.apply(this, s)
        } catch (s) {
            throw Vk(),
            IS(o => {
                o.addEventProcessor(a => (e.mechanism && (wl(a, void 0),
                    Hr(a, e.mechanism)),
                    a.extra = {
                        ...a.extra,
                        arguments: i
                    },
                    a)),
                    FE(s)
            }
            ),
            s
        }
    };
    try {
        for (const i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i])
    } catch { }
    Cg(r, t),
        Xn(t, "__sentry_wrapped__", r);
    try {
        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
            get() {
                return t.name
            }
        })
    } catch { }
    return r
}
const ys = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function Gc(t, e) {
    const n = Yc(t, e)
        , r = {
            type: Qk(e),
            value: Kk(e)
        };
    return n.length && (r.stacktrace = {
        frames: n
    }),
        r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"),
        r
}
function qk(t, e, n, r) {
    const i = Ie()
        , s = i && i.getOptions().normalizeDepth
        , o = ex(e)
        , a = {
            __serialized__: Ig(e, s)
        };
    if (o)
        return {
            exception: {
                values: [Gc(t, o)]
            },
            extra: a
        };
    const u = {
        exception: {
            values: [{
                type: ka(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                value: Xk(e, {
                    isUnhandledRejection: r
                })
            }]
        },
        extra: a
    };
    if (n) {
        const l = Yc(t, n);
        l.length && (u.exception.values[0].stacktrace = {
            frames: l
        })
    }
    return u
}
function du(t, e) {
    return {
        exception: {
            values: [Gc(t, e)]
        }
    }
}
function Yc(t, e) {
    const n = e.stacktrace || e.stack || ""
        , r = Wk(e)
        , i = Zk(e);
    try {
        return t(n, r, i)
    } catch { }
    return []
}
const Hk = /Minified React error #\d+;/i;
function Wk(t) {
    return t && Hk.test(t.message) ? 1 : 0
}
function Zk(t) {
    return typeof t.framesToPop == "number" ? t.framesToPop : 0
}
function Wg(t) {
    return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u" ? t instanceof WebAssembly.Exception : !1
}
function Qk(t) {
    const e = t && t.name;
    return !e && Wg(t) ? t.message && Array.isArray(t.message) && t.message.length == 2 ? t.message[0] : "WebAssembly.Exception" : e
}
function Kk(t) {
    const e = t && t.message;
    return e ? e.error && typeof e.error.message == "string" ? e.error.message : Wg(t) && Array.isArray(t.message) && t.message.length == 2 ? t.message[1] : e : "No error message"
}
function Gk(t, e, n, r) {
    const i = n && n.syntheticException || void 0
        , s = Xc(t, e, i, r);
    return Hr(s),
        s.level = "error",
        n && n.event_id && (s.event_id = n.event_id),
        Jn(s)
}
function Yk(t, e, n = "info", r, i) {
    const s = r && r.syntheticException || void 0
        , o = Rl(t, e, s, i);
    return o.level = n,
        r && r.event_id && (o.event_id = r.event_id),
        Jn(o)
}
function Xc(t, e, n, r, i) {
    let s;
    if (Eg(e) && e.error)
        return du(t, e.error);
    if (Ad(e) || uS(e)) {
        const o = e;
        if ("stack" in e)
            s = du(t, e);
        else {
            const a = o.name || (Ad(o) ? "DOMError" : "DOMException")
                , u = o.message ? `${a}: ${o.message}` : a;
            s = Rl(t, u, n, r),
                wl(s, u)
        }
        return "code" in o && (s.tags = {
            ...s.tags,
            "DOMException.code": `${o.code}`
        }),
            s
    }
    return Uc(e) ? du(t, e) : qr(e) || ka(e) ? (s = qk(t, e, n, i),
        Hr(s, {
            synthetic: !0
        }),
        s) : (s = Rl(t, e, n, r),
            wl(s, `${e}`),
            Hr(s, {
                synthetic: !0
            }),
            s)
}
function Rl(t, e, n, r) {
    const i = {};
    if (r && n) {
        const s = Yc(t, n);
        s.length && (i.exception = {
            values: [{
                value: e,
                stacktrace: {
                    frames: s
                }
            }]
        }),
            Hr(i, {
                synthetic: !0
            })
    }
    if (Bc(e)) {
        const { __sentry_template_string__: s, __sentry_template_values__: o } = e;
        return i.logentry = {
            message: s,
            params: o
        },
            i
    }
    return i.message = e,
        i
}
function Xk(t, { isUnhandledRejection: e }) {
    const n = yS(t)
        , r = e ? "promise rejection" : "exception";
    return Eg(t) ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\`` : ka(t) ? `Event \`${Jk(t)}\` (type=${t.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
}
function Jk(t) {
    try {
        const e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : void 0
    } catch { }
}
function ex(t) {
    for (const e in t)
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            const n = t[e];
            if (n instanceof Error)
                return n
        }
}
function tx(t, { metadata: e, tunnel: n, dsn: r }) {
    const i = {
        event_id: t.event_id,
        sent_at: new Date().toISOString(),
        ...e && e.sdk && {
            sdk: {
                name: e.sdk.name,
                version: e.sdk.version
            }
        },
        ...!!n && !!r && {
            dsn: Ta(r)
        }
    }
        , s = nx(t);
    return gs(i, [s])
}
function nx(t) {
    return [{
        type: "user_report"
    }, t]
}
class rx extends KE {
    constructor(e) {
        const n = {
            parentSpanIsAlwaysRootSpan: !0,
            ...e
        }
            , r = ee.SENTRY_SDK_SOURCE || Uk();
        $g(n, "browser", ["browser"], r),
            super(n),
            n.sendClientReports && ee.document && ee.document.addEventListener("visibilitychange", () => {
                ee.document.visibilityState === "hidden" && this._flushOutcomes()
            }
            )
    }
    eventFromException(e, n) {
        return Gk(this._options.stackParser, e, n, this._options.attachStacktrace)
    }
    eventFromMessage(e, n = "info", r) {
        return Yk(this._options.stackParser, e, n, r, this._options.attachStacktrace)
    }
    captureUserFeedback(e) {
        if (!this._isEnabled()) {
            ys && M.warn("SDK not enabled, will not capture user feedback.");
            return
        }
        const n = tx(e, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        this.sendEnvelope(n)
    }
    _prepareEvent(e, n, r) {
        return e.platform = e.platform || "javascript",
            super._prepareEvent(e, n, r)
    }
}
const ix = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
    , Le = Q
    , sx = 1e3;
let up, Il, Al;
function ox(t) {
    const e = "dom";
    or(e, t),
        ar(e, ax)
}
function ax() {
    if (!Le.document)
        return;
    const t = St.bind(null, "dom")
        , e = lp(t, !0);
    Le.document.addEventListener("click", e, !1),
        Le.document.addEventListener("keypress", e, !1),
        ["EventTarget", "Node"].forEach(n => {
            const i = Le[n]
                , s = i && i.prototype;
            !s || !s.hasOwnProperty || !s.hasOwnProperty("addEventListener") || (Ze(s, "addEventListener", function (o) {
                return function (a, u, l) {
                    if (a === "click" || a == "keypress")
                        try {
                            const c = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}
                                , f = c[a] = c[a] || {
                                    refCount: 0
                                };
                            if (!f.handler) {
                                const p = lp(t);
                                f.handler = p,
                                    o.call(this, a, p, l)
                            }
                            f.refCount++
                        } catch { }
                    return o.call(this, a, u, l)
                }
            }),
                Ze(s, "removeEventListener", function (o) {
                    return function (a, u, l) {
                        if (a === "click" || a == "keypress")
                            try {
                                const c = this.__sentry_instrumentation_handlers__ || {}
                                    , f = c[a];
                                f && (f.refCount--,
                                    f.refCount <= 0 && (o.call(this, a, f.handler, l),
                                        f.handler = void 0,
                                        delete c[a]),
                                    Object.keys(c).length === 0 && delete this.__sentry_instrumentation_handlers__)
                            } catch { }
                        return o.call(this, a, u, l)
                    }
                }))
        }
        )
}
function ux(t) {
    if (t.type !== Il)
        return !1;
    try {
        if (!t.target || t.target._sentryId !== Al)
            return !1
    } catch { }
    return !0
}
function lx(t, e) {
    return t !== "keypress" ? !1 : !e || !e.tagName ? !0 : !(e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable)
}
function lp(t, e = !1) {
    return n => {
        if (!n || n._sentryCaptured)
            return;
        const r = cx(n);
        if (lx(n.type, r))
            return;
        Xn(n, "_sentryCaptured", !0),
            r && !r._sentryId && Xn(r, "_sentryId", ut());
        const i = n.type === "keypress" ? "input" : n.type;
        ux(n) || (t({
            event: n,
            name: i,
            global: e
        }),
            Il = n.type,
            Al = r ? r._sentryId : void 0),
            clearTimeout(up),
            up = Le.setTimeout(() => {
                Al = void 0,
                    Il = void 0
            }
                , sx)
    }
}
function cx(t) {
    try {
        return t.target
    } catch {
        return null
    }
}
let qs;
function Zg(t) {
    const e = "history";
    or(e, t),
        ar(e, fx)
}
function fx() {
    if (!Bk())
        return;
    const t = Le.onpopstate;
    Le.onpopstate = function (...n) {
        const r = Le.location.href
            , i = qs;
        if (qs = r,
            St("history", {
                from: i,
                to: r
            }),
            t)
            try {
                return t.apply(this, n)
            } catch { }
    }
        ;
    function e(n) {
        return function (...r) {
            const i = r.length > 2 ? r[2] : void 0;
            if (i) {
                const s = qs
                    , o = String(i);
                qs = o,
                    St("history", {
                        from: s,
                        to: o
                    })
            }
            return n.apply(this, r)
        }
    }
    Ze(Le.history, "pushState", e),
        Ze(Le.history, "replaceState", e)
}
const po = {};
function dx(t) {
    const e = po[t];
    if (e)
        return e;
    let n = Le[t];
    if (Ol(n))
        return po[t] = n.bind(Le);
    const r = Le.document;
    if (r && typeof r.createElement == "function")
        try {
            const i = r.createElement("iframe");
            i.hidden = !0,
                r.head.appendChild(i);
            const s = i.contentWindow;
            s && s[t] && (n = s[t]),
                r.head.removeChild(i)
        } catch (i) {
            ix && M.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, i)
        }
    return n && (po[t] = n.bind(Le))
}
function cp(t) {
    po[t] = void 0
}
const Si = "__sentry_xhr_v3__";
function px(t) {
    const e = "xhr";
    or(e, t),
        ar(e, hx)
}
function hx() {
    if (!Le.XMLHttpRequest)
        return;
    const t = XMLHttpRequest.prototype;
    t.open = new Proxy(t.open, {
        apply(e, n, r) {
            const i = new Error
                , s = Ht() * 1e3
                , o = qt(r[0]) ? r[0].toUpperCase() : void 0
                , a = mx(r[1]);
            if (!o || !a)
                return e.apply(n, r);
            n[Si] = {
                method: o,
                url: a,
                request_headers: {}
            },
                o === "POST" && a.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
            const u = () => {
                const l = n[Si];
                if (l && n.readyState === 4) {
                    try {
                        l.status_code = n.status
                    } catch { }
                    const c = {
                        endTimestamp: Ht() * 1e3,
                        startTimestamp: s,
                        xhr: n,
                        virtualError: i
                    };
                    St("xhr", c)
                }
            }
                ;
            return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange, {
                apply(l, c, f) {
                    return u(),
                        l.apply(c, f)
                }
            }) : n.addEventListener("readystatechange", u),
                n.setRequestHeader = new Proxy(n.setRequestHeader, {
                    apply(l, c, f) {
                        const [p, g] = f
                            , y = c[Si];
                        return y && qt(p) && qt(g) && (y.request_headers[p.toLowerCase()] = g),
                            l.apply(c, f)
                    }
                }),
                e.apply(n, r)
        }
    }),
        t.send = new Proxy(t.send, {
            apply(e, n, r) {
                const i = n[Si];
                if (!i)
                    return e.apply(n, r);
                r[0] !== void 0 && (i.body = r[0]);
                const s = {
                    startTimestamp: Ht() * 1e3,
                    xhr: n
                };
                return St("xhr", s),
                    e.apply(n, r)
            }
        })
}
function mx(t) {
    if (qt(t))
        return t;
    try {
        return t.toString()
    } catch { }
}
function gx(t, e = dx("fetch")) {
    let n = 0
        , r = 0;
    function i(s) {
        const o = s.body.length;
        n += o,
            r++;
        const a = {
            body: s.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            keepalive: n <= 6e4 && r < 15,
            ...t.fetchOptions
        };
        if (!e)
            return cp("fetch"),
                Yo("No fetch implementation available");
        try {
            return e(t.url, a).then(u => (n -= o,
                r--,
            {
                statusCode: u.status,
                headers: {
                    "x-sentry-rate-limits": u.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": u.headers.get("Retry-After")
                }
            }))
        } catch (u) {
            return cp("fetch"),
                n -= o,
                r--,
                Yo(u)
        }
    }
    return ak(t, i)
}
const yx = 30
    , vx = 50;
function Dl(t, e, n, r) {
    const i = {
        filename: t,
        function: e === "<anonymous>" ? Gn : e,
        in_app: !0
    };
    return n !== void 0 && (i.lineno = n),
        r !== void 0 && (i.colno = r),
        i
}
const _x = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i
    , wx = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
    , Sx = /\((\S*)(?::(\d+))(?::(\d+))\)/
    , Ex = t => {
        const e = _x.exec(t);
        if (e) {
            const [, r, i, s] = e;
            return Dl(r, Gn, +i, +s)
        }
        const n = wx.exec(t);
        if (n) {
            if (n[2] && n[2].indexOf("eval") === 0) {
                const o = Sx.exec(n[2]);
                o && (n[2] = o[1],
                    n[3] = o[2],
                    n[4] = o[3])
            }
            const [i, s] = Qg(n[1] || Gn, n[2]);
            return Dl(s, i, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
        }
    }
    , kx = [yx, Ex]
    , xx = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
    , Cx = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
    , bx = t => {
        const e = xx.exec(t);
        if (e) {
            if (e[3] && e[3].indexOf(" > eval") > -1) {
                const s = Cx.exec(e[3]);
                s && (e[1] = e[1] || "eval",
                    e[3] = s[1],
                    e[4] = s[2],
                    e[5] = "")
            }
            let r = e[3]
                , i = e[1] || Gn;
            return [i, r] = Qg(i, r),
                Dl(r, i, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
        }
    }
    , Tx = [vx, bx]
    , Ox = [kx, Tx]
    , Nx = wg(...Ox)
    , Qg = (t, e) => {
        const n = t.indexOf("safari-extension") !== -1
            , r = t.indexOf("safari-web-extension") !== -1;
        return n || r ? [t.indexOf("@") !== -1 ? t.split("@")[0] : Gn, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
    }
    , Hs = 1024
    , Px = "Breadcrumbs"
    , Rx = (t = {}) => {
        const e = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...t
        };
        return {
            name: Px,
            setup(n) {
                e.console && Ok(Lx(n)),
                    e.dom && ox(Dx(n, e.dom)),
                    e.xhr && px(Mx(n)),
                    e.fetch && Fk(jx(n)),
                    e.history && Zg(Fx(n)),
                    e.sentry && n.on("beforeSendEvent", Ax(n))
            }
        }
    }
    , Ix = Rx;
function Ax(t) {
    return function (n) {
        Ie() === t && tr({
            category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
            event_id: n.event_id,
            level: n.level,
            message: on(n)
        }, {
            event: n
        })
    }
}
function Dx(t, e) {
    return function (r) {
        if (Ie() !== t)
            return;
        let i, s, o = typeof e == "object" ? e.serializeAttribute : void 0, a = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
        a && a > Hs && (ys && M.warn(`\`dom.maxStringLength\` cannot exceed ${Hs}, but a value of ${a} was configured. Sentry will use ${Hs} instead.`),
            a = Hs),
            typeof o == "string" && (o = [o]);
        try {
            const l = r.event
                , c = zx(l) ? l.target : l;
            i = xg(c, {
                keyAttrs: o,
                maxStringLength: a
            }),
                s = mS(c)
        } catch {
            i = "<unknown>"
        }
        if (i.length === 0)
            return;
        const u = {
            category: `ui.${r.name}`,
            message: i
        };
        s && (u.data = {
            "ui.component_name": s
        }),
            tr(u, {
                event: r.event,
                name: r.name,
                global: r.global
            })
    }
}
function Lx(t) {
    return function (n) {
        if (Ie() !== t)
            return;
        const r = {
            category: "console",
            data: {
                arguments: n.args,
                logger: "console"
            },
            level: Pk(n.level),
            message: Dd(n.args, " ")
        };
        if (n.level === "assert")
            if (n.args[0] === !1)
                r.message = `Assertion failed: ${Dd(n.args.slice(1), " ") || "console.assert"}`,
                    r.data.arguments = n.args.slice(1);
            else
                return;
        tr(r, {
            input: n.args,
            level: n.level
        })
    }
}
function Mx(t) {
    return function (n) {
        if (Ie() !== t)
            return;
        const { startTimestamp: r, endTimestamp: i } = n
            , s = n.xhr[Si];
        if (!r || !i || !s)
            return;
        const { method: o, url: a, status_code: u, body: l } = s
            , c = {
                method: o,
                url: a,
                status_code: u
            }
            , f = {
                xhr: n.xhr,
                input: l,
                startTimestamp: r,
                endTimestamp: i
            }
            , p = Vg(u);
        tr({
            category: "xhr",
            data: c,
            type: "http",
            level: p
        }, f)
    }
}
function jx(t) {
    return function (n) {
        if (Ie() !== t)
            return;
        const { startTimestamp: r, endTimestamp: i } = n;
        if (i && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST"))
            if (n.error) {
                const s = n.fetchData
                    , o = {
                        data: n.error,
                        input: n.args,
                        startTimestamp: r,
                        endTimestamp: i
                    };
                tr({
                    category: "fetch",
                    data: s,
                    level: "error",
                    type: "http"
                }, o)
            } else {
                const s = n.response
                    , o = {
                        ...n.fetchData,
                        status_code: s && s.status
                    }
                    , a = {
                        input: n.args,
                        response: s,
                        startTimestamp: r,
                        endTimestamp: i
                    }
                    , u = Vg(o.status_code);
                tr({
                    category: "fetch",
                    data: o,
                    type: "http",
                    level: u
                }, a)
            }
    }
}
function Fx(t) {
    return function (n) {
        if (Ie() !== t)
            return;
        let r = n.from
            , i = n.to;
        const s = fu(ee.location.href);
        let o = r ? fu(r) : void 0;
        const a = fu(i);
        (!o || !o.path) && (o = s),
            s.protocol === a.protocol && s.host === a.host && (i = a.relative),
            s.protocol === o.protocol && s.host === o.host && (r = o.relative),
            tr({
                category: "navigation",
                data: {
                    from: r,
                    to: i
                }
            })
    }
}
function zx(t) {
    return !!t && !!t.target
}
const $x = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
    , Ux = "BrowserApiErrors"
    , Bx = (t = {}) => {
        const e = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...t
        };
        return {
            name: Ux,
            setupOnce() {
                e.setTimeout && Ze(ee, "setTimeout", fp),
                    e.setInterval && Ze(ee, "setInterval", fp),
                    e.requestAnimationFrame && Ze(ee, "requestAnimationFrame", qx),
                    e.XMLHttpRequest && "XMLHttpRequest" in ee && Ze(XMLHttpRequest.prototype, "send", Hx);
                const n = e.eventTarget;
                n && (Array.isArray(n) ? n : $x).forEach(Wx)
            }
        }
    }
    , Vx = Bx;
function fp(t) {
    return function (...e) {
        const n = e[0];
        return e[0] = Qr(n, {
            mechanism: {
                data: {
                    function: Tn(t)
                },
                handled: !1,
                type: "instrument"
            }
        }),
            t.apply(this, e)
    }
}
function qx(t) {
    return function (e) {
        return t.apply(this, [Qr(e, {
            mechanism: {
                data: {
                    function: "requestAnimationFrame",
                    handler: Tn(t)
                },
                handled: !1,
                type: "instrument"
            }
        })])
    }
}
function Hx(t) {
    return function (...e) {
        const n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(i => {
            i in n && typeof n[i] == "function" && Ze(n, i, function (s) {
                const o = {
                    mechanism: {
                        data: {
                            function: i,
                            handler: Tn(s)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }
                    , a = Hc(s);
                return a && (o.mechanism.data.handler = Tn(a)),
                    Qr(s, o)
            })
        }
        ),
            t.apply(this, e)
    }
}
function Wx(t) {
    const n = ee[t]
        , r = n && n.prototype;
    !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (Ze(r, "addEventListener", function (i) {
        return function (s, o, a) {
            try {
                Zx(o) && (o.handleEvent = Qr(o.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: Tn(o),
                            target: t
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }))
            } catch { }
            return i.apply(this, [s, Qr(o, {
                mechanism: {
                    data: {
                        function: "addEventListener",
                        handler: Tn(o),
                        target: t
                    },
                    handled: !1,
                    type: "instrument"
                }
            }), a])
        }
    }),
        Ze(r, "removeEventListener", function (i) {
            return function (s, o, a) {
                try {
                    const u = o.__sentry_wrapped__;
                    u && i.call(this, s, u, a)
                } catch { }
                return i.call(this, s, o, a)
            }
        }))
}
function Zx(t) {
    return typeof t.handleEvent == "function"
}
const Qx = () => ({
    name: "BrowserSession",
    setupOnce() {
        if (typeof ee.document > "u") {
            ys && M.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
            return
        }
        Gd({
            ignoreDuration: !0
        }),
            Yd(),
            Zg(({ from: t, to: e }) => {
                t !== void 0 && t !== e && (Gd({
                    ignoreDuration: !0
                }),
                    Yd())
            }
            )
    }
})
    , Kx = "GlobalHandlers"
    , Gx = (t = {}) => {
        const e = {
            onerror: !0,
            onunhandledrejection: !0,
            ...t
        };
        return {
            name: Kx,
            setupOnce() {
                Error.stackTraceLimit = 50
            },
            setup(n) {
                e.onerror && (Xx(n),
                    dp("onerror")),
                    e.onunhandledrejection && (Jx(n),
                        dp("onunhandledrejection"))
            }
        }
    }
    , Yx = Gx;
function Xx(t) {
    iS(e => {
        const { stackParser: n, attachStacktrace: r } = Kg();
        if (Ie() !== t || Hg())
            return;
        const { msg: i, url: s, line: o, column: a, error: u } = e
            , l = nC(Xc(n, u || i, void 0, r, !1), s, o, a);
        l.level = "error",
            Dg(l, {
                originalException: u,
                mechanism: {
                    handled: !1,
                    type: "onerror"
                }
            })
    }
    )
}
function Jx(t) {
    oS(e => {
        const { stackParser: n, attachStacktrace: r } = Kg();
        if (Ie() !== t || Hg())
            return;
        const i = eC(e)
            , s = Vc(i) ? tC(i) : Xc(n, i, void 0, r, !0);
        s.level = "error",
            Dg(s, {
                originalException: i,
                mechanism: {
                    handled: !1,
                    type: "onunhandledrejection"
                }
            })
    }
    )
}
function eC(t) {
    if (Vc(t))
        return t;
    try {
        if ("reason" in t)
            return t.reason;
        if ("detail" in t && "reason" in t.detail)
            return t.detail.reason
    } catch { }
    return t
}
function tC(t) {
    return {
        exception: {
            values: [{
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(t)}`
            }]
        }
    }
}
function nC(t, e, n, r) {
    const i = t.exception = t.exception || {}
        , s = i.values = i.values || []
        , o = s[0] = s[0] || {}
        , a = o.stacktrace = o.stacktrace || {}
        , u = a.frames = a.frames || []
        , l = r
        , c = n
        , f = qt(e) && e.length > 0 ? e : hS();
    return u.length === 0 && u.push({
        colno: l,
        filename: f,
        function: Gn,
        in_app: !0,
        lineno: c
    }),
        t
}
function dp(t) {
    ys && M.log(`Global Handler attached: ${t}`)
}
function Kg() {
    const t = Ie();
    return t && t.getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}
const rC = () => ({
    name: "HttpContext",
    preprocessEvent(t) {
        if (!ee.navigator && !ee.location && !ee.document)
            return;
        const e = t.request && t.request.url || ee.location && ee.location.href
            , { referrer: n } = ee.document || {}
            , { userAgent: r } = ee.navigator || {}
            , i = {
                ...t.request && t.request.headers,
                ...n && {
                    Referer: n
                },
                ...r && {
                    "User-Agent": r
                }
            }
            , s = {
                ...t.request,
                ...e && {
                    url: e
                },
                headers: i
            };
        t.request = s
    }
})
    , iC = "cause"
    , sC = 5
    , oC = "LinkedErrors"
    , aC = (t = {}) => {
        const e = t.limit || sC
            , n = t.key || iC;
        return {
            name: oC,
            preprocessEvent(r, i, s) {
                const o = s.getOptions();
                bk(Gc, o.stackParser, o.maxValueLength, n, e, r, i)
            }
        }
    }
    , uC = aC;
function lC(t) {
    const e = [mk(), fk(), Vx(), Ix(), Yx(), uC(), Ak(), rC()];
    return t.autoSessionTracking !== !1 && e.push(Qx()),
        e
}
function cC(t = {}) {
    const e = {
        defaultIntegrations: lC(t),
        release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : ee.SENTRY_RELEASE && ee.SENTRY_RELEASE.id ? ee.SENTRY_RELEASE.id : void 0,
        autoSessionTracking: !0,
        sendClientReports: !0
    };
    return t.defaultIntegrations == null && delete t.defaultIntegrations,
    {
        ...e,
        ...t
    }
}
function fC() {
    const t = typeof ee.window < "u" && ee;
    if (!t)
        return !1;
    const e = t.chrome ? "chrome" : "browser"
        , n = t[e]
        , r = n && n.runtime && n.runtime.id
        , i = ee.location && ee.location.href || ""
        , s = ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"]
        , o = !!r && ee === ee.top && s.some(u => i.startsWith(`${u}//`))
        , a = typeof t.nw < "u";
    return !!r && !o && !a
}
function dC(t = {}) {
    const e = cC(t);
    if (!e.skipBrowserExtensionCheck && fC()) {
        sr(() => {
            console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
        }
        );
        return
    }
    ys && (qg() || M.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));
    const n = {
        ...e,
        stackParser: nS(e.stackParser || Nx),
        integrations: WE(e),
        transport: e.transport || gx
    };
    return XE(rx, n)
}
function pC(t) {
    const e = {
        ...t
    };
    return $g(e, "react"),
        zE("react", {
            version: K.version
        }),
        dC(e)
}
pC({
    dsn: "https://a76010447b9ced85ae52c2f380de3d45@o1370399.ingest.us.sentry.io/4508355228729344",
    integrations: []
});
const hC = new Qw;
Tm(document.getElementById("root")).render(j.jsx(K.StrictMode, {
    children: j.jsx(Jw, {
        client: hC,
        children: j.jsx(E_, {
            children: j.jsx(bw, {})
        })
    })
}));
