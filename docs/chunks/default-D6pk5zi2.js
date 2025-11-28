import { i as e, t } from "./dark-DZf-Ed9p.js";
import { I as l } from "./iconify-DqZr0ymk.js";
import {
    d as a,
    o as n,
    c as r,
    f as o,
    g as i,
    S as s,
    h as u,
    u as c,
    i as d,
    j as p,
    k as b,
    l as v,
    w as m,
    e as g,
    F as x,
    m as f,
    t as h,
    n as y,
    p as k,
    b as w,
    q as _,
    s as C,
    v as M,
    x as j,
    y as T,
    z as P,
    A as z,
    B as D,
    C as I,
    r as L,
    D as E,
    E as A,
    G as B,
    T as R,
    H,
} from "../assets/app-C1iy-c1N.js";
import { u as N } from "./musicPlayer-B76I5vQU.js";
import { c as $ } from "./index-BjNs7pmh.js";
const S = a({
        __name: "DarkToggle",
        setup: (a) => (a, s) => (
            n(),
            r(
                "button",
                {
                    class: "!outline-none",
                    onClick:
                        s[0] ||
                        (s[0] = (...e) =>
                            ("toggleDark" in a ? a.toggleDark : o(t)) &&
                            ("toggleDark" in a ? a.toggleDark : o(t))(...e)),
                },
                [
                    ("isDark" in a ? a.isDark : o(e))
                        ? (n(),
                          i(o(l), {
                              key: 0,
                              class: "h-[16px] w-[16px]",
                              icon: "carbon-moon",
                          }))
                        : (n(),
                          i(o(l), {
                              key: 1,
                              class: "h-[16px] w-[16px]",
                              icon: "carbon-sun",
                          })),
                ],
            )
        ),
    }),
    F = ["title"],
    G = a({
        __name: "Logo",
        setup: (e) => (e, t) => (
            n(),
            r(
                "img",
                {
                    class: "mt-[0px] block h-[40px] w-[40px] md:mt-0 md:h-[56px] md:w-[56px]",
                    src: "/logo.png",
                    alt: "",
                    title: o(s).title,
                },
                null,
                8,
                F,
            )
        ),
    }),
    W = (e) => (T("data-v-4845e879"), (e = e()), P(), e),
    q = { id: "pc-nav", class: "nav-container" },
    K = ["onClick", "onMouseenter", "onMouseleave"],
    O = { class: "mr-1.5" },
    Q = ["onMouseenter", "onMouseleave"],
    U = { class: "flex flex-col items-start p-2" },
    V = ["onClick"],
    J = { class: "mr-1.5" },
    X = {
        key: 0,
        class: "ml-auto w-4 h-4 opacity-70 flex items-center justify-center",
    },
    Y = { class: "mr-1.5" },
    Z = W(() => g("div", { class: "triangle-indicator" }, null, -1)),
    ee = { class: "flex flex-col items-start p-2" },
    te = ["onClick"],
    le = { class: "mr-1.5" },
    ae = {
        key: 0,
        class: "ml-auto w-4 h-4 opacity-70 flex items-center justify-center",
    },
    ne = { id: "mobile-nav", class: "nav-container" },
    re = { class: "flex justify-end items-center p-3" },
    oe = { class: "text-xl text-white" },
    ie = {
        class: "p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center",
    },
    se = W(() =>
        g(
            "h3",
            { class: "font-semibold text-gray-800 dark:text-white" },
            " 天渺studio的小站 ",
            -1,
        ),
    ),
    ue = { class: "text-xl" },
    ce = { class: "py-4" },
    de = ["onClick"],
    pe = { class: "mr-3" },
    be = { class: "ml-auto text-gray-400" },
    ve = ["onClick"],
    me = { class: "mr-3" },
    ge = { key: 2, class: "pl-8 py-2" },
    xe = ["onClick"],
    fe = { class: "mr-2" },
    he = { class: "text-gray-700 dark:text-white" },
    ye = {
        key: 0,
        class: "ml-auto w-4 h-4 opacity-70 flex items-center justify-center",
    },
    ke = z(
        a({
            __name: "Nav",
            setup(e) {
                const t = [
                        {
                            label: "首页",
                            route: "/",
                            icon: "🏠",
                            children: [],
                            title: "首页",
                        },
                        {
                            label: "文章",
                            icon: "📝",
                            children: [
                                {
                                    label: "技术文章",
                                    route: "https://blog.tianmiao.site",
                                    title: "技术博客",
                                    target: "_self",
                                    icon: "📝",
                                    children: [],
                                },
                                {
                                    label: "随笔杂文",
                                    route: "https://blog.tianmiao.site",
                                    title: "非技术文章",
                                    target: "_self",
                                    icon: "💭",
                                    children: [],
                                },
                            ],
                            title: "我的文章",
                        },
                        {
                            label: "动态",
                            route: "/muttering",
                            icon: "☕",
                            children: [],
                            title: "碎碎念",
                        },
                        {
                            label: "项目",
                            route: "/project",
                            icon: "🎯",
                            children: [],
                            title: "项目展示",
                        },
                        {
                            label: "AI",
                            route: "/ai",
                            icon: "🤖️",
                            children: [],
                            title: "AI探索",
                        },
                        {
                            label: "关于",
                            route: "/about",
                            icon: "😊",
                            children: [],
                            title: "关于",
                        },
                        {
                            label: "更多",
                            icon: "✨",
                            children: [
                                {
                                    label: "友链",
                                    route: "/friend",
                                    icon: "🔗",
                                    title: "友情链接",
                                    children: [],
                                },
                                {
                                    label: "资源收录",
                                    route: "/record",
                                    icon: "📚",
                                    title: "资源收录库",
                                    children: [],
                                },
                                {
                                    label: "视频推荐",
                                    route: "/video",
                                    icon: "⏯️",
                                    title: "精选视频",
                                    children: [],
                                },
                                {
                                    label: "每日名言",
                                    route: "/sentence",
                                    icon: "💬",
                                    title: "每日一句",
                                    children: [],
                                },
                                {
                                    label: "Web3.0",
                                    route: "/web3",
                                    icon: "💎",
                                    children: [],
                                    title: "Web3.0探索",
                                },
                                {
                                    label: "服务器推荐",
                                    route: "/server",
                                    icon: "💻",
                                    children: [],
                                    title: "服务器推荐",
                                },
                            ],
                        },
                    ],
                    a = u(),
                    i = c(),
                    s = d(!1),
                    T = d(-1),
                    P = d(!1),
                    z = d(null),
                    D = d(!1),
                    I = d(!1),
                    L = d({});
                let E = null;
                const A = 100,
                    B = p(() => ({
                        width: `${A}px`,
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(8px)",
                        boxShadow:
                            "0 0 0 2px rgba(59, 130, 246, 0.3), 0 4px 12px rgba(0, 0, 0, 0.08)",
                        color: "#333333",
                    })),
                    R = p(() => ({ width: `${A}px` }));
                function H(e) {
                    for (let l = 0; l < t.length; l++) {
                        if (t[l].route === e) return l;
                        for (let a = 0; a < t[l].children.length; a++)
                            if (t[l].children[a].route === e)
                                return 100 * l + a;
                    }
                    return -1;
                }
                function N(e) {
                    for (const l of t) {
                        if (l.route === e) return l.title || l.label;
                        for (const t of l.children)
                            if (t.route === e) return t.title || t.label;
                    }
                    return "天渺studio的小站";
                }
                function $(e) {
                    if (null == e ? void 0 : e.route) {
                        if ((_e(), "_blank" === e.target))
                            window.open(e.route, "_blank");
                        else {
                            /^https?:\/\//.test(e.route)
                                ? (window.location.href = e.route)
                                : i.push(e.route);
                        }
                        s.value = !1;
                    }
                }
                function S(e) {
                    ((L.value[e] = !L.value[e]), (I.value = L.value[e]));
                }
                function F(e) {
                    (e.stopPropagation(),
                        clearTimeout(E),
                        (P.value = !P.value),
                        (I.value = P.value),
                        (D.value = P.value));
                }
                function G() {
                    (clearTimeout(E),
                        I.value || ((D.value = !0), (P.value = !0)));
                }
                function W() {
                    I.value ||
                        (E = setTimeout(() => {
                            ((D.value = !1), (P.value = !1));
                        }, 300));
                }
                function ke(e) {
                    (clearTimeout(E), I.value || (L.value[e] = !0));
                }
                function we(e) {
                    I.value ||
                        (E = setTimeout(() => {
                            L.value[e] = !1;
                        }, 300));
                }
                function _e() {
                    ((P.value = !1),
                        (D.value = !1),
                        (I.value = !1),
                        (L.value = {}),
                        E && clearTimeout(E));
                }
                function Ce(e) {
                    T.value = H(e);
                }
                function Me() {
                    s.value = !s.value;
                }
                function je() {
                    s.value = !1;
                }
                return (
                    b(() => {
                        Ce(a.path);
                        const e = N(a.path);
                        ((document.title = `${e} - 天渺studio的小站`),
                            document.addEventListener("click", _e));
                    }),
                    v(() => {
                        (E && clearTimeout(E),
                            document.removeEventListener("click", _e));
                    }),
                    m(
                        () => a.path,
                        (e) => {
                            (_e(), Ce(e));
                            const t = N(e);
                            document.title = `${t} - 天渺studio的小站`;
                        },
                    ),
                    (e, a) => (
                        n(),
                        r(
                            x,
                            null,
                            [
                                g("div", q, [
                                    (n(),
                                    r(
                                        x,
                                        null,
                                        f(t, (e, t) =>
                                            g(
                                                "div",
                                                {
                                                    key: e.label,
                                                    class: "relative group",
                                                },
                                                [
                                                    "更多" !== e.label
                                                        ? (n(),
                                                          r(
                                                              x,
                                                              { key: 0 },
                                                              [
                                                                  g(
                                                                      "div",
                                                                      {
                                                                          class: y(
                                                                              [
                                                                                  "nav-item flex items-center justify-center h-[36px] px-3 rounded-full transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 cursor-pointer",
                                                                                  [
                                                                                      T.value ===
                                                                                      t
                                                                                          ? "text-blue-600 dark:text-blue-400 active-item"
                                                                                          : "",
                                                                                  ],
                                                                              ],
                                                                          ),
                                                                          style: C(
                                                                              T.value ===
                                                                                  t
                                                                                  ? B.value
                                                                                  : R.value,
                                                                          ),
                                                                          onClick:
                                                                              (
                                                                                  l,
                                                                              ) =>
                                                                                  e
                                                                                      .children
                                                                                      .length >
                                                                                  0
                                                                                      ? S(
                                                                                            t,
                                                                                        )
                                                                                      : $(
                                                                                            e,
                                                                                        ),
                                                                          onMouseenter:
                                                                              (
                                                                                  e,
                                                                              ) =>
                                                                                  ke(
                                                                                      t,
                                                                                  ),
                                                                          onMouseleave:
                                                                              (
                                                                                  e,
                                                                              ) =>
                                                                                  we(
                                                                                      t,
                                                                                  ),
                                                                      },
                                                                      [
                                                                          g(
                                                                              "span",
                                                                              O,
                                                                              h(
                                                                                  e.icon,
                                                                              ),
                                                                              1,
                                                                          ),
                                                                          M(
                                                                              " " +
                                                                                  h(
                                                                                      e.label,
                                                                                  ) +
                                                                                  " ",
                                                                              1,
                                                                          ),
                                                                          e
                                                                              .children
                                                                              .length >
                                                                          0
                                                                              ? (n(),
                                                                                r(
                                                                                    "span",
                                                                                    {
                                                                                        key: 0,
                                                                                        class: y(
                                                                                            [
                                                                                                "ml-2 submenu-icon transition-transform duration-300",
                                                                                                {
                                                                                                    "rotate-180":
                                                                                                        L
                                                                                                            .value[
                                                                                                            t
                                                                                                        ],
                                                                                                },
                                                                                            ],
                                                                                        ),
                                                                                    },
                                                                                    "▼",
                                                                                    2,
                                                                                ))
                                                                              : _(
                                                                                    "",
                                                                                    !0,
                                                                                ),
                                                                      ],
                                                                      46,
                                                                      K,
                                                                  ),
                                                                  e.children
                                                                      .length >
                                                                      0 &&
                                                                  L.value[t]
                                                                      ? (n(),
                                                                        r(
                                                                            "div",
                                                                            {
                                                                                key: 0,
                                                                                class: "absolute top-full left-0 mt-2 w-[180px] rounded-lg shadow-md z-50 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-200 opacity-100 visible",
                                                                                onMouseenter:
                                                                                    (
                                                                                        e,
                                                                                    ) =>
                                                                                        ke(
                                                                                            t,
                                                                                        ),
                                                                                onMouseleave:
                                                                                    (
                                                                                        e,
                                                                                    ) =>
                                                                                        we(
                                                                                            t,
                                                                                        ),
                                                                            },
                                                                            [
                                                                                g(
                                                                                    "div",
                                                                                    U,
                                                                                    [
                                                                                        (n(
                                                                                            !0,
                                                                                        ),
                                                                                        r(
                                                                                            x,
                                                                                            null,
                                                                                            f(
                                                                                                (null ==
                                                                                                e
                                                                                                    ? void 0
                                                                                                    : e.children) ||
                                                                                                    [],
                                                                                                (
                                                                                                    e,
                                                                                                ) => (
                                                                                                    n(),
                                                                                                    r(
                                                                                                        "div",
                                                                                                        {
                                                                                                            key: e.label,
                                                                                                            class: y(
                                                                                                                [
                                                                                                                    "option-item w-full py-2 px-3 rounded-md cursor-pointer transition-all duration-200 flex items-center text-gray-600 dark:text-gray-300",
                                                                                                                    [
                                                                                                                        H(
                                                                                                                            e.route ||
                                                                                                                                "",
                                                                                                                        ) ===
                                                                                                                        T.value
                                                                                                                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 active"
                                                                                                                            : "",
                                                                                                                    ],
                                                                                                                ],
                                                                                                            ),
                                                                                                            onClick:
                                                                                                                (
                                                                                                                    t,
                                                                                                                ) =>
                                                                                                                    $(
                                                                                                                        e,
                                                                                                                    ),
                                                                                                        },
                                                                                                        [
                                                                                                            g(
                                                                                                                "span",
                                                                                                                J,
                                                                                                                h(
                                                                                                                    e.icon,
                                                                                                                ),
                                                                                                                1,
                                                                                                            ),
                                                                                                            M(
                                                                                                                " " +
                                                                                                                    h(
                                                                                                                        e.label,
                                                                                                                    ) +
                                                                                                                    " ",
                                                                                                                1,
                                                                                                            ),
                                                                                                            e.route &&
                                                                                                            /^https?:\/\//.test(
                                                                                                                e.route,
                                                                                                            )
                                                                                                                ? (n(),
                                                                                                                  r(
                                                                                                                      "span",
                                                                                                                      X,
                                                                                                                      "⤴",
                                                                                                                  ))
                                                                                                                : _(
                                                                                                                      "",
                                                                                                                      !0,
                                                                                                                  ),
                                                                                                        ],
                                                                                                        10,
                                                                                                        V,
                                                                                                    )
                                                                                                ),
                                                                                            ),
                                                                                            128,
                                                                                        )),
                                                                                    ],
                                                                                ),
                                                                            ],
                                                                            40,
                                                                            Q,
                                                                        ))
                                                                      : _(
                                                                            "",
                                                                            !0,
                                                                        ),
                                                              ],
                                                              64,
                                                          ))
                                                        : _("", !0),
                                                    "更多" === e.label
                                                        ? (n(),
                                                          r(
                                                              "div",
                                                              {
                                                                  key: 1,
                                                                  ref_for: !0,
                                                                  ref_key:
                                                                      "moreMenuRef",
                                                                  ref: z,
                                                                  class: "relative",
                                                                  onMouseenter:
                                                                      G,
                                                                  onMouseleave:
                                                                      W,
                                                              },
                                                              [
                                                                  g(
                                                                      "div",
                                                                      {
                                                                          class: y(
                                                                              [
                                                                                  "nav-item flex items-center justify-center h-[36px] px-3 rounded-full transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 cursor-pointer",
                                                                                  [
                                                                                      T.value ===
                                                                                      t
                                                                                          ? "text-blue-600 dark:text-blue-400"
                                                                                          : "",
                                                                                  ],
                                                                              ],
                                                                          ),
                                                                          style: C(
                                                                              T.value ===
                                                                                  t
                                                                                  ? B.value
                                                                                  : R.value,
                                                                          ),
                                                                          onClick:
                                                                              F,
                                                                      },
                                                                      [
                                                                          g(
                                                                              "span",
                                                                              Y,
                                                                              h(
                                                                                  e.icon,
                                                                              ),
                                                                              1,
                                                                          ),
                                                                          M(
                                                                              " " +
                                                                                  h(
                                                                                      e.label,
                                                                                  ) +
                                                                                  " ",
                                                                              1,
                                                                          ),
                                                                          g(
                                                                              "span",
                                                                              {
                                                                                  class: y(
                                                                                      [
                                                                                          "ml-2 submenu-icon transition-transform duration-300",
                                                                                          {
                                                                                              "rotate-180":
                                                                                                  P.value,
                                                                                          },
                                                                                      ],
                                                                                  ),
                                                                              },
                                                                              "▼",
                                                                              2,
                                                                          ),
                                                                      ],
                                                                      6,
                                                                  ),
                                                                  P.value
                                                                      ? (n(),
                                                                        r(
                                                                            "div",
                                                                            {
                                                                                key: 0,
                                                                                class: "absolute top-full left-0 mt-2 w-[180px] rounded-lg shadow-md z-50 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-200",
                                                                                onMouseenter:
                                                                                    G,
                                                                                onMouseleave:
                                                                                    W,
                                                                            },
                                                                            [
                                                                                Z,
                                                                                g(
                                                                                    "div",
                                                                                    ee,
                                                                                    [
                                                                                        (n(
                                                                                            !0,
                                                                                        ),
                                                                                        r(
                                                                                            x,
                                                                                            null,
                                                                                            f(
                                                                                                (null ==
                                                                                                e
                                                                                                    ? void 0
                                                                                                    : e.children) ||
                                                                                                    [],
                                                                                                (
                                                                                                    e,
                                                                                                ) => (
                                                                                                    n(),
                                                                                                    r(
                                                                                                        "div",
                                                                                                        {
                                                                                                            key: e.label,
                                                                                                            class: y(
                                                                                                                [
                                                                                                                    "option-item w-full py-2 px-3 rounded-md cursor-pointer transition-all duration-200 flex items-center text-gray-600 dark:text-gray-300",
                                                                                                                    [
                                                                                                                        H(
                                                                                                                            e.route ||
                                                                                                                                "",
                                                                                                                        ) ===
                                                                                                                        T.value
                                                                                                                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 active"
                                                                                                                            : "",
                                                                                                                    ],
                                                                                                                ],
                                                                                                            ),
                                                                                                            onClick:
                                                                                                                (
                                                                                                                    t,
                                                                                                                ) =>
                                                                                                                    $(
                                                                                                                        e,
                                                                                                                    ),
                                                                                                        },
                                                                                                        [
                                                                                                            g(
                                                                                                                "span",
                                                                                                                le,
                                                                                                                h(
                                                                                                                    e.icon,
                                                                                                                ),
                                                                                                                1,
                                                                                                            ),
                                                                                                            M(
                                                                                                                " " +
                                                                                                                    h(
                                                                                                                        e.label,
                                                                                                                    ) +
                                                                                                                    " ",
                                                                                                                1,
                                                                                                            ),
                                                                                                            e.route &&
                                                                                                            /^https?:\/\//.test(
                                                                                                                e.route,
                                                                                                            )
                                                                                                                ? (n(),
                                                                                                                  r(
                                                                                                                      "span",
                                                                                                                      ae,
                                                                                                                      "⤴",
                                                                                                                  ))
                                                                                                                : _(
                                                                                                                      "",
                                                                                                                      !0,
                                                                                                                  ),
                                                                                                        ],
                                                                                                        10,
                                                                                                        te,
                                                                                                    )
                                                                                                ),
                                                                                            ),
                                                                                            128,
                                                                                        )),
                                                                                    ],
                                                                                ),
                                                                            ],
                                                                            32,
                                                                        ))
                                                                      : _(
                                                                            "",
                                                                            !0,
                                                                        ),
                                                              ],
                                                              544,
                                                          ))
                                                        : _("", !0),
                                                ],
                                            ),
                                        ),
                                        64,
                                    )),
                                ]),
                                g("div", ne, [
                                    g("div", re, [
                                        g(
                                            "div",
                                            {
                                                class: "cursor-pointer",
                                                onClick: Me,
                                            },
                                            [
                                                g(
                                                    "span",
                                                    oe,
                                                    h(s.value ? "✕" : "☰"),
                                                    1,
                                                ),
                                            ],
                                        ),
                                    ]),
                                ]),
                                s.value
                                    ? (n(),
                                      r(
                                          "div",
                                          {
                                              key: 0,
                                              class: y([
                                                  "mobile-nav-div fixed inset-0 z-50 flex",
                                                  {
                                                      "translate-x-0": s.value,
                                                      "translate-x-[100%]":
                                                          !s.value,
                                                  },
                                              ]),
                                              onKeydown: k(je, ["escape"]),
                                          },
                                          [
                                              g(
                                                  "div",
                                                  {
                                                      class: y([
                                                          "nav-menu w-4/5 bg-white dark:bg-gray-800 h-full shadow-2xl transform transition-all duration-300 ease-in-out",
                                                          s.value
                                                              ? "translate-x-0"
                                                              : "translate-x-full",
                                                      ]),
                                                  },
                                                  [
                                                      g("div", ie, [
                                                          se,
                                                          g(
                                                              "button",
                                                              { onClick: je },
                                                              [
                                                                  g(
                                                                      "span",
                                                                      ue,
                                                                      [
                                                                          w(
                                                                              o(
                                                                                  l,
                                                                              ),
                                                                              {
                                                                                  icon: "mdi:close",
                                                                                  width: "24",
                                                                                  height: "24",
                                                                              },
                                                                          ),
                                                                      ],
                                                                  ),
                                                              ],
                                                          ),
                                                      ]),
                                                      g("div", ce, [
                                                          (n(),
                                                          r(
                                                              x,
                                                              null,
                                                              f(t, (e, t) =>
                                                                  g(
                                                                      "div",
                                                                      {
                                                                          key: e.label,
                                                                          class: "border-b border-gray-200 dark:border-gray-700",
                                                                      },
                                                                      [
                                                                          e
                                                                              .children
                                                                              .length >
                                                                          0
                                                                              ? (n(),
                                                                                r(
                                                                                    "div",
                                                                                    {
                                                                                        key: 0,
                                                                                        class: y(
                                                                                            [
                                                                                                "nav-menu-link flex items-center py-3 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer",
                                                                                                {
                                                                                                    "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20":
                                                                                                        T.value ===
                                                                                                        t,
                                                                                                },
                                                                                            ],
                                                                                        ),
                                                                                        onClick:
                                                                                            j(
                                                                                                (
                                                                                                    e,
                                                                                                ) =>
                                                                                                    S(
                                                                                                        t,
                                                                                                    ),
                                                                                                [
                                                                                                    "stop",
                                                                                                ],
                                                                                            ),
                                                                                    },
                                                                                    [
                                                                                        g(
                                                                                            "span",
                                                                                            pe,
                                                                                            h(
                                                                                                e.icon,
                                                                                            ),
                                                                                            1,
                                                                                        ),
                                                                                        M(
                                                                                            " " +
                                                                                                h(
                                                                                                    e.label,
                                                                                                ) +
                                                                                                " ",
                                                                                            1,
                                                                                        ),
                                                                                        g(
                                                                                            "span",
                                                                                            be,
                                                                                            [
                                                                                                w(
                                                                                                    o(
                                                                                                        l,
                                                                                                    ),
                                                                                                    {
                                                                                                        icon: "mdi:chevron-right",
                                                                                                        class: y(
                                                                                                            {
                                                                                                                "rotate-90":
                                                                                                                    L
                                                                                                                        .value[
                                                                                                                        t
                                                                                                                    ],
                                                                                                            },
                                                                                                        ),
                                                                                                    },
                                                                                                    null,
                                                                                                    8,
                                                                                                    [
                                                                                                        "class",
                                                                                                    ],
                                                                                                ),
                                                                                            ],
                                                                                        ),
                                                                                    ],
                                                                                    10,
                                                                                    de,
                                                                                ))
                                                                              : (n(),
                                                                                r(
                                                                                    "div",
                                                                                    {
                                                                                        key: 1,
                                                                                        class: y(
                                                                                            [
                                                                                                "nav-menu-link flex items-center py-3 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer",
                                                                                                {
                                                                                                    "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20":
                                                                                                        T.value ===
                                                                                                        t,
                                                                                                },
                                                                                            ],
                                                                                        ),
                                                                                        onClick:
                                                                                            (
                                                                                                t,
                                                                                            ) =>
                                                                                                $(
                                                                                                    e,
                                                                                                ),
                                                                                    },
                                                                                    [
                                                                                        g(
                                                                                            "span",
                                                                                            me,
                                                                                            h(
                                                                                                e.icon,
                                                                                            ),
                                                                                            1,
                                                                                        ),
                                                                                        M(
                                                                                            " " +
                                                                                                h(
                                                                                                    e.label,
                                                                                                ),
                                                                                            1,
                                                                                        ),
                                                                                    ],
                                                                                    10,
                                                                                    ve,
                                                                                )),
                                                                          e
                                                                              .children
                                                                              .length >
                                                                              0 &&
                                                                          L
                                                                              .value[
                                                                              t
                                                                          ]
                                                                              ? (n(),
                                                                                r(
                                                                                    "div",
                                                                                    ge,
                                                                                    [
                                                                                        (n(
                                                                                            !0,
                                                                                        ),
                                                                                        r(
                                                                                            x,
                                                                                            null,
                                                                                            f(
                                                                                                (null ==
                                                                                                e
                                                                                                    ? void 0
                                                                                                    : e.children) ||
                                                                                                    [],
                                                                                                (
                                                                                                    e,
                                                                                                ) => (
                                                                                                    n(),
                                                                                                    r(
                                                                                                        "div",
                                                                                                        {
                                                                                                            key: e.label,
                                                                                                            class: y(
                                                                                                                [
                                                                                                                    "flex items-center py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer",
                                                                                                                    {
                                                                                                                        "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20":
                                                                                                                            H(
                                                                                                                                e.route ||
                                                                                                                                    "",
                                                                                                                            ) ===
                                                                                                                            T.value,
                                                                                                                    },
                                                                                                                ],
                                                                                                            ),
                                                                                                            onClick:
                                                                                                                (
                                                                                                                    t,
                                                                                                                ) =>
                                                                                                                    $(
                                                                                                                        e,
                                                                                                                    ),
                                                                                                        },
                                                                                                        [
                                                                                                            g(
                                                                                                                "span",
                                                                                                                fe,
                                                                                                                h(
                                                                                                                    e.icon,
                                                                                                                ),
                                                                                                                1,
                                                                                                            ),
                                                                                                            g(
                                                                                                                "span",
                                                                                                                he,
                                                                                                                h(
                                                                                                                    e.label,
                                                                                                                ),
                                                                                                                1,
                                                                                                            ),
                                                                                                            e.route &&
                                                                                                            /^https?:\/\//.test(
                                                                                                                e.route,
                                                                                                            )
                                                                                                                ? (n(),
                                                                                                                  r(
                                                                                                                      "span",
                                                                                                                      ye,
                                                                                                                      "⤴",
                                                                                                                  ))
                                                                                                                : _(
                                                                                                                      "",
                                                                                                                      !0,
                                                                                                                  ),
                                                                                                        ],
                                                                                                        10,
                                                                                                        xe,
                                                                                                    )
                                                                                                ),
                                                                                            ),
                                                                                            128,
                                                                                        )),
                                                                                    ],
                                                                                ))
                                                                              : _(
                                                                                    "",
                                                                                    !0,
                                                                                ),
                                                                      ],
                                                                  ),
                                                              ),
                                                              64,
                                                          )),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                              g("div", {
                                                  class: "flex-1 bg-black/50 backdrop-blur-sm",
                                                  onClick: je,
                                              }),
                                          ],
                                          34,
                                      ))
                                    : _("", !0),
                            ],
                            64,
                        )
                    )
                );
            },
        }),
        [["__scopeId", "data-v-4845e879"]],
    ),
    we = { class: "top-bar-music-player" },
    _e = { key: 0, class: "text-red-500 text-xs absolute top-10 left-0" },
    Ce = z(
        a({
            __name: "TopBarMusicPlayer",
            setup(e, { expose: t }) {
                const a = N(),
                    i = d(null);
                return (
                    b(() => {
                        !(async function () {
                            try {
                                (a.ensureInitialized(), (i.value = null));
                            } catch (e) {
                                ((i.value = "播放器初始化失败"),
                                    console.error(
                                        "Top bar music player initialization error:",
                                        e,
                                    ));
                            }
                        })();
                    }),
                    t({ togglePlay: a.togglePlay }),
                    (e, t) => (
                        n(),
                        r("div", we, [
                            i.value
                                ? (n(), r("div", _e, h(i.value), 1))
                                : _("", !0),
                            g(
                                "button",
                                {
                                    class: "play-btn !outline-none",
                                    onClick:
                                        t[0] ||
                                        (t[0] = (...e) =>
                                            o(a).togglePlay &&
                                            o(a).togglePlay(...e)),
                                },
                                [
                                    g(
                                        "div",
                                        {
                                            class: y([
                                                "flex items-center",
                                                {
                                                    "animate-slow-spin":
                                                        o(a).isPlaying,
                                                },
                                            ]),
                                        },
                                        [
                                            w(o(l), {
                                                icon: "carbon:music",
                                                width: "16",
                                                height: "16",
                                            }),
                                        ],
                                        2,
                                    ),
                                ],
                            ),
                        ])
                    )
                );
            },
        }),
        [["__scopeId", "data-v-070987ba"]],
    ),
    Me = {
        id: "nav-bg",
        class: "fixed left-0 top-0 z-[2] h-fit w-full flex flex-row items-center justify-between px-[3.5vw] py-[18px] md:h-[80px] md:py-unset",
    },
    je = { class: "flex items-center" },
    Te = { class: "flex-grow flex justify-center" },
    Pe = { class: "flex items-center gap-3 p-3 md:p-0" },
    ze = { class: "grid h-[40px] w-[40px] place-items-center text-white" },
    De = z(
        a({
            __name: "index",
            setup: (e) => (e, t) => {
                const l = S;
                return (
                    n(),
                    r("div", Me, [
                        g("div", je, [w(G)]),
                        g("div", Te, [w(ke)]),
                        g("div", Pe, [w(Ce), g("div", ze, [w(l)])]),
                    ])
                );
            },
        }),
        [["__scopeId", "data-v-70428123"]],
    ),
    Ie = g(
        "div",
        { class: "absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-black:30" },
        null,
        -1,
    ),
    Le = ["src", "alt"],
    Ee = a({
        __name: "default",
        setup(e) {
            const t = u(),
                l = ["/blog/content-sidebar"],
                a = p(() => l.includes(t.path)),
                s = D("(min-width: 720px)"),
                c = d();
            return (
                I("click", async (e) => {
                    const t = Array.from(e.composedPath()),
                        l = t[0];
                    if (!(l instanceof HTMLElement)) return;
                    if ("IMG" !== l.tagName) return;
                    if (l.classList.contains("no-preview")) return;
                    if (
                        t.some(
                            (e) =>
                                e instanceof HTMLElement &&
                                ["A", "BUTTON"].includes(e.tagName),
                        )
                    )
                        return;
                    if (
                        !t.some(
                            (e) =>
                                e instanceof HTMLElement &&
                                e.classList.contains("prose"),
                        )
                    )
                        return;
                    const a = l.getBoundingClientRect();
                    await new Promise((e) => setTimeout(e, 50));
                    const n = l.getBoundingClientRect();
                    a.left === n.left && a.top === n.top && (c.value = l);
                }),
                (e, t) => {
                    const l = De,
                        u = L("RouterView"),
                        d = L("client-only");
                    return (
                        n(),
                        r(
                            "main",
                            {
                                id: "main-root",
                                class: y([
                                    "",
                                    o(a)
                                        ? ""
                                        : "pt-[100px] pb-20 px-[10px] md:px-5 overflow-x-hidden min-h-screen md:pt-[112px] ",
                                ]),
                            },
                            [
                                E(w(l, null, null, 512), [[A, !o(s) || !o(a)]]),
                                w(u, null, {
                                    default: B(({ Component: e }) => [
                                        w(
                                            R,
                                            {
                                                name: o($) || "page",
                                                mode: "out-in",
                                            },
                                            {
                                                default: B(() => [
                                                    (n(), i(H(e))),
                                                ]),
                                                _: 2,
                                            },
                                            1032,
                                            ["name"],
                                        ),
                                    ]),
                                    _: 1,
                                }),
                                w(
                                    R,
                                    { name: "fade" },
                                    {
                                        default: B(() => [
                                            o(c)
                                                ? (n(),
                                                  r(
                                                      "div",
                                                      {
                                                          key: 0,
                                                          class: "fixed bottom-0 left-0 right-0 top-0 z-[500] backdrop-blur",
                                                          onClick:
                                                              t[0] ||
                                                              (t[0] = (e) =>
                                                                  (c.value =
                                                                      void 0)),
                                                      },
                                                      [
                                                          Ie,
                                                          g(
                                                              "img",
                                                              {
                                                                  class: "mx-auto h-[calc(100%_-_20px)] mt-[10px] w-[calc(100%_-_20px)] object-contain",
                                                                  src: o(c).src,
                                                                  alt: o(c).alt,
                                                              },
                                                              null,
                                                              8,
                                                              Le,
                                                          ),
                                                      ],
                                                  ))
                                                : _("", !0),
                                        ]),
                                        _: 1,
                                    },
                                ),
                                w(d),
                            ],
                            2,
                        )
                    );
                }
            );
        },
    });
export { Ee as default };
