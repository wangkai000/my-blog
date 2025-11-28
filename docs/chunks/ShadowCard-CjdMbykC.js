import {
    A as r,
    o,
    c as s,
    e as a,
    a0 as d,
    q as e,
} from "../assets/app-C1iy-c1N.js";
const t = {
        class: "card-outer border-0 dark:border-[5px] dark:border-[var(--card-border)] dark:border-solid",
    },
    c = { class: "card-content" },
    i = { key: 0, class: "card-footer" };
const l = r({}, [
    [
        "render",
        function (r, l) {
            return (
                o(),
                s("div", t, [
                    a("div", c, [d(r.$slots, "default", {}, void 0, !0)]),
                    r.$slots.footer
                        ? (o(),
                          s("div", i, [d(r.$slots, "footer", {}, void 0, !0)]))
                        : e("", !0),
                ])
            );
        },
    ],
    ["__scopeId", "data-v-9b9069f7"],
]);
export { l as U };
