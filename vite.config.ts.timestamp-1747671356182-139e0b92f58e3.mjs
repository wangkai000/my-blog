// vite.config.ts
import path, { resolve } from "node:path";
import { defineConfig } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite@5.3.4_@types+node@20.14.11_terser@5.31.3/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__vue@3.4.33_typescript@5.5.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import generateSitemap from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-ssg-sitemap@0.6.1/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__vue-router@4.4._pys5xjr3bp55ggpbunlmvr2mja/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.24.8_@nuxt+kit@3.12.4_rollup@4.19.0__rollup@4._dzhxtinnkngnwnc46pa3y2bacu/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-auto-import@0.17.8_@nuxt+kit@3.12.4_rollup@4.19.0__@vueuse+core@10.11.0_vue@3.4.33_t_olgyfgjnvgotnbc477tuvgbude/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-markdown@0.26.2_rollup@4.19.0_vite@5.3.4_@types+node@20.14.11_terser@5.31.3_/node_modules/unplugin-vue-markdown/dist/vite.js";
import VueI18n from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@intlify+unplugin-vue-i18n@4.0.0_rollup@4.19.0_vue-i18n@9.13.1_vue@3.4.33_typescript@5.5.3__/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-pwa@0.19.8_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__workbox-build@7.1.1_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
import LinkAttributes from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import WebfontDownload from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-webfont-dl@3.9.4_vite@5.3.4_@types+node@20.14.11_terser@5.31.3_/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import VueRouter from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.19.0_vue-router@4.4.0_vue@3.4.33_typescript@5.5.3___vue@3.4.33_typescript@5.5.3_/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.19.0_vue-router@4.4.0_vue@3.4.33_typescript@5.5.3___vue@3.4.33_typescript@5.5.3_/node_modules/unplugin-vue-router/dist/index.mjs";
import Pages from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-pages@0.32.3_@vue+compiler-sfc@3.4.33_vite@5.3.4_@types+node@20.14.11_terser@5.31_h7hk4h6exsyeqfeqpifytludnm/node_modules/vite-plugin-pages/dist/index.js";
import fs from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/fs-extra@11.2.0/node_modules/fs-extra/lib/index.js";
import matter from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js";
import MarkdownItShiki from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@shikijs+markdown-it@1.10.3/node_modules/@shikijs/markdown-it/dist/index.mjs";
import {
    rendererRich,
    transformerTwoslash,
} from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@shikijs+twoslash@1.10.3_typescript@5.5.3/node_modules/@shikijs/twoslash/dist/index.mjs";
import tailwind from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/tailwindcss@3.4.6/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/autoprefixer@10.4.19_postcss@8.4.39/node_modules/autoprefixer/lib/autoprefixer.js";
import GitHubAlerts from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/markdown-it-github-alerts@0.3.0_markdown-it@14.1.0/node_modules/markdown-it-github-alerts/dist/index.mjs";

// plugins/operate-blog.ts
import { execSync } from "node:child_process";
import { URL } from "node:url";
import process from "node:process";
import fse from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/fs-extra@11.2.0/node_modules/fs-extra/lib/index.js";
function operateBlogPlugin() {
    return {
        name: "operate-blog-plugin",
        configureServer(server) {
            if (process.env.NODE_ENV !== "development") {
                return;
            }
            server.middlewares.use(async (req, res, next) => {
                if (
                    req.url?.startsWith("/createMd") ||
                    req.url?.startsWith("/deleteMd")
                ) {
                    const action = req.url.startsWith("/createMd")
                        ? "create"
                        : "delete";
                    const { searchParams } = new URL(
                        `http://${req.headers.host}${req.url}`,
                    );
                    const name = searchParams.get("name");
                    const type = searchParams.get("type");
                    if (type !== "post" && type !== "weekly") return;
                    let command = "";
                    if (action === "create") {
                        command =
                            process.platform !== "win32"
                                ? `touch blog/${type}/${name}.md`
                                : `echo. > blog/${type}/${name}.md`;
                    } else {
                        command = `rimraf blog/${type}/${name}.md`;
                    }
                    execSync(command);
                }
                if (req.url?.startsWith("/updateMd")) {
                    if (fse.existsSync(`blog/post/test.md`)) {
                        const content = await fse.readFile(
                            `blog/post/test.md`,
                            "utf-8",
                        );
                        fse.writeFile(
                            `blog/post/test.md`,
                            JSON.stringify("777"),
                        );
                    }
                }
                next();
            });
        },
    };
}

// vite.config.ts
var __vite_injected_original_dirname =
    "/Users/Shared/Previously Relocated Items/Security/myProjiect/my_blog/my-blog";
var vite_config_default = defineConfig({
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    resolve: {
        alias: {
            "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`,
            "@/": `${path.resolve(__vite_injected_original_dirname, "src")}/`,
        },
    },
    build: {
        target: "es2019",
        // 1 browsers can handle the latest ES features
        outDir: "docs",
        // 打包后生成的静态资源名（[name] 会被替换为文件名，[hash] 是内容的 hash 值）
        assetsDir: "assets",
        // 打包后生成的 HTML 入口文件名
        entryFileNames: "assets/[name]-[hash].js",
        // 打包后生成的 CSS 文件名
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                // 自定义打包后的 chunk 文件名
                chunkFileNames: "chunks/[name]-[hash].js",
                // 自定义打包后的 CSS 文件名
                assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
                // manualChunks: {
                // vue vue-router合并打包
                // vue: ['vue', 'vue-router'],
                // },
            },
        },
        // 启用/配置压缩
        minify: "terser",
        // 使用 terser 压缩 JS
        // terserOptions: {}, // 你可以在这里配置 terser 的选项
        // 启用/禁用 source map
        sourcemap: false,
        // 启用/禁用构建后的清理（删除 outDir 目录）
        cleanCss: true,
        // 启用/禁用构建后的文件大小报告
        brotliSize: false,
        // 启用 Brotli 压缩大小报告
        chunkSizeWarningLimit: 2e3,
        // 警告的 chunk 大小限制（以 KB 为单位）
    },
    plugins: [
        operateBlogPlugin(),
        // visualizer({
        //   open: false, // 构建完成后自动打开报告
        //   filename: 'stats.html', // 报告文件的名称
        //   gzipSize: true, // 收集gzip大小并显示
        //   brotliSize: true, // 收集brotli大小并显示
        //   // 其他可选配置...
        // }),
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Pages({
            extensions: ["vue", "md"],
            dirs: [
                { dir: "src/pages", baseRoute: "" },
                // features dir for pages
                { dir: "blog", baseRoute: "blog" },
            ],
            extendRoute(route) {
                const path2 = resolve(
                    __vite_injected_original_dirname,
                    route.component.slice(1),
                );
                if (!path2.includes("projects.md") && path2.endsWith(".md")) {
                    const md = fs.readFileSync(path2, "utf-8");
                    const { data } = matter(md);
                    route.meta = Object.assign(route.meta || {}, {
                        frontmatter: {
                            ...data,
                            description: data.desc,
                        },
                    });
                }
                return route;
            },
        }),
        // https://github.com/posva/unplugin-vue-router
        VueRouter({
            extensions: [".vue", ".md"],
            dts: "src/typings/typed-router.d.ts",
        }),
        // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
        Layouts(),
        // https://github.com/antfu/unplugin-auto-import
        AutoImport({
            imports: [
                "vue",
                "vue-i18n",
                "@vueuse/head",
                "@vueuse/core",
                VueRouterAutoImports,
                {
                    // add any other imports you were relying on
                    "vue-router/auto": ["useLink"],
                },
            ],
            dts: "src/typings/auto-imports.d.ts",
            dirs: ["src/composables", "src/stores"],
            vueTemplate: true,
        }),
        // https://github.com/antfu/unplugin-vue-components
        Components({
            // allow auto load markdown components under `./src/components/`
            extensions: ["vue", "md"],
            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            dts: "src/typings/components.d.ts",
        }),
        // https://github.com/unplugin/unplugin-vue-markdown
        Markdown({
            wrapperComponent: (id) =>
                id.includes("/demo/") ? "WrapperDemo" : "WrapperPost",
            wrapperClasses: (id, code) =>
                code.includes("@layout-full-width")
                    ? ""
                    : "prose m-auto slide-enter-content",
            headEnabled: true,
            async markdownItSetup(md) {
                md.use(
                    await MarkdownItShiki({
                        themes: {
                            dark: "github-dark",
                            light: "catppuccin-latte",
                        },
                        defaultColor: false,
                        cssVariablePrefix: "--s-",
                        transformers: [
                            transformerTwoslash({
                                explicitTrigger: true,
                                renderer: rendererRich(),
                            }),
                        ],
                    }),
                );
                md.use(LinkAttributes, {
                    matcher: (link) => /^https?:\/\//.test(link),
                    attrs: {
                        target: "_blank",
                        rel: "noopener",
                    },
                });
                md.use(GitHubAlerts);
            },
            // frontmatterPreprocess(frontmatter, options, id, defaults) {
            //   (() => {
            //     if (!id.endsWith('.md'))
            //       return
            //     const route = basename(id, '.md')
            //     if (
            //       route === 'index'
            //       || frontmatter.image
            //       || !frontmatter.title
            //     ) {
            //       return
            //     }
            //     const path = `og/${route}.png`
            //     promises.push(
            //       fs.existsSync(`${id.slice(0, -3)}.png`)
            //         ? fs.copy(
            //                             `${id.slice(0, -3)}.png`,
            //                             `public/${path}`,
            //         )
            //         : generateOg(
            //           frontmatter.title!.trim(),
            //                             `public/${path}`,
            //                             frontmatter.date as string,
            //         ),
            //     )
            //     frontmatter.image = `https://mmeme.me/${encodeURIComponent(path)}`
            //     frontmatter.description
            //                   = (frontmatter?.desc as string) || ''
            //   })()
            //   const head = defaults(frontmatter, options)
            //   return { head, frontmatter }
            // },
        }),
        // https://github.com/antfu/vite-plugin-pwa
        VitePWA({
            selfDestroying: true,
            // 禁用了
            registerType: "autoUpdate",
            includeAssets: ["favicon.svg"],
            manifest: {
                name: "\u5929\u6E3A\u5DE5\u4F5C\u5BA4\u7684\u5C0F\u7AD9",
                short_name: "\u5929\u6E3Astudio\u7684\u5C0F\u7AD9",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "/pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
            },
        }),
        // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
        VueI18n({
            runtimeOnly: true,
            compositionOnly: true,
            fullInstall: true,
            include: [
                path.resolve(__vite_injected_original_dirname, "locales/**"),
            ],
        }),
        // https://github.com/feat-agency/vite-plugin-webfont-dl
        WebfontDownload(),
    ],
    // https://github.com/antfu/vite-ssg
    ssgOptions: {
        script: "async",
        formatting: "minify",
        crittersOptions: {
            reduceInlineStyles: false,
        },
        onFinished() {
            generateSitemap();
        },
    },
    ssr: {
        // TODO: workaround until they support native ESM
        noExternal: ["workbox-window", /vue-i18n/],
    },
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGx1Z2lucy9vcGVyYXRlLWJsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHkgUmVsb2NhdGVkIEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHkgUmVsb2NhdGVkIEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSUyMFJlbG9jYXRlZCUyMEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGgsIHsgYmFzZW5hbWUsIGRpcm5hbWUsIHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tICdub2RlOmJ1ZmZlcidcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBnZW5lcmF0ZVNpdGVtYXAgZnJvbSAndml0ZS1zc2ctc2l0ZW1hcCdcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAndW5wbHVnaW4tdnVlLW1hcmtkb3duL3ZpdGUnXG5pbXBvcnQgVnVlSTE4biBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcbmltcG9ydCBMaW5rQXR0cmlidXRlcyBmcm9tICdtYXJrZG93bi1pdC1saW5rLWF0dHJpYnV0ZXMnXG5pbXBvcnQgV2ViZm9udERvd25sb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLXdlYmZvbnQtZGwnXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcbmltcG9ydCB7IFZ1ZVJvdXRlckF1dG9JbXBvcnRzIH0gZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlcidcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xuXG5pbXBvcnQgTWFya2Rvd25JdFNoaWtpIGZyb20gJ0BzaGlraWpzL21hcmtkb3duLWl0J1xuaW1wb3J0IHsgcmVuZGVyZXJSaWNoLCB0cmFuc2Zvcm1lclR3b3NsYXNoIH0gZnJvbSAnQHNoaWtpanMvdHdvc2xhc2gnXG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAndGFpbHdpbmRjc3MnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCBhbmNob3IgZnJvbSAnbWFya2Rvd24taXQtYW5jaG9yJ1xuaW1wb3J0IEdpdEh1YkFsZXJ0cyBmcm9tICdtYXJrZG93bi1pdC1naXRodWItYWxlcnRzJ1xuXG5pbXBvcnQgVE9DIGZyb20gJ21hcmtkb3duLWl0LXRhYmxlLW9mLWNvbnRlbnRzJ1xuaW1wb3J0IHNoYXJwIGZyb20gJ3NoYXJwJ1xuLy8gaW1wb3J0IHsgc2x1Z2lmeSB9IGZyb20gJy4vc2NyaXB0cy9zbHVnaWZ5J1xuaW1wb3J0IG9wZXJhdGVCbG9nUGx1Z2luIGZyb20gJy4vcGx1Z2lucy9vcGVyYXRlLWJsb2cnXG5pbXBvcnQgeyBTSVRFIH0gZnJvbSAnQC9jb25maWcvcGFyYW0nXG5cbmNvbnN0IHByb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZCgpLCBhdXRvcHJlZml4ZXIoKV0sXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnfi8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXG4gICAgICAnQC8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlczIwMTknLCAvLyAxIGJyb3dzZXJzIGNhbiBoYW5kbGUgdGhlIGxhdGVzdCBFUyBmZWF0dXJlc1xuICAgIG91dERpcjogJ2RvY3MnLFxuICAgIC8vIFx1NjI1M1x1NTMwNVx1NTQwRVx1NzUxRlx1NjIxMFx1NzY4NFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NTQwRFx1RkYwOFtuYW1lXSBcdTRGMUFcdTg4QUJcdTY2RkZcdTYzNjJcdTRFM0FcdTY1ODdcdTRFRjZcdTU0MERcdUZGMENbaGFzaF0gXHU2NjJGXHU1MTg1XHU1QkI5XHU3Njg0IGhhc2ggXHU1MDNDXHVGRjA5XG4gICAgYXNzZXRzRGlyOiAnYXNzZXRzJyxcbiAgICAvLyBcdTYyNTNcdTUzMDVcdTU0MEVcdTc1MUZcdTYyMTBcdTc2ODQgSFRNTCBcdTUxNjVcdTUzRTNcdTY1ODdcdTRFRjZcdTU0MERcbiAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAvLyBcdTYyNTNcdTUzMDVcdTU0MEVcdTc1MUZcdTYyMTBcdTc2ODQgQ1NTIFx1NjU4N1x1NEVGNlx1NTQwRFxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2MjUzXHU1MzA1XHU1NDBFXHU3Njg0IGNodW5rIFx1NjU4N1x1NEVGNlx1NTQwRFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2NodW5rcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2MjUzXHU1MzA1XHU1NDBFXHU3Njg0IENTUyBcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW2V4dF0vW25hbWVdLVtoYXNoXS5bZXh0XScsXG4gICAgICAgIC8vIG1hbnVhbENodW5rczoge1xuICAgICAgICAvLyB2dWUgdnVlLXJvdXRlclx1NTQwOFx1NUU3Nlx1NjI1M1x1NTMwNVxuICAgICAgICAvLyB2dWU6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInXSxcbiAgICAgICAgLy8gfSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIFx1NTQyRlx1NzUyOC9cdTkxNERcdTdGNkVcdTUzOEJcdTdGMjlcbiAgICBtaW5pZnk6ICd0ZXJzZXInLCAvLyBcdTRGN0ZcdTc1MjggdGVyc2VyIFx1NTM4Qlx1N0YyOSBKU1xuICAgIC8vIHRlcnNlck9wdGlvbnM6IHt9LCAvLyBcdTRGNjBcdTUzRUZcdTRFRTVcdTU3MjhcdThGRDlcdTkxQ0NcdTkxNERcdTdGNkUgdGVyc2VyIFx1NzY4NFx1OTAwOVx1OTg3OVxuXG4gICAgLy8gXHU1NDJGXHU3NTI4L1x1Nzk4MVx1NzUyOCBzb3VyY2UgbWFwXG4gICAgc291cmNlbWFwOiBmYWxzZSxcblxuICAgIC8vIFx1NTQyRlx1NzUyOC9cdTc5ODFcdTc1MjhcdTY3ODRcdTVFRkFcdTU0MEVcdTc2ODRcdTZFMDVcdTc0MDZcdUZGMDhcdTUyMjBcdTk2NjQgb3V0RGlyIFx1NzZFRVx1NUY1NVx1RkYwOVxuICAgIGNsZWFuQ3NzOiB0cnVlLFxuXG4gICAgLy8gXHU1NDJGXHU3NTI4L1x1Nzk4MVx1NzUyOFx1Njc4NFx1NUVGQVx1NTQwRVx1NzY4NFx1NjU4N1x1NEVGNlx1NTkyN1x1NUMwRlx1NjJBNVx1NTQ0QVxuICAgIGJyb3RsaVNpemU6IGZhbHNlLCAvLyBcdTU0MkZcdTc1MjggQnJvdGxpIFx1NTM4Qlx1N0YyOVx1NTkyN1x1NUMwRlx1NjJBNVx1NTQ0QVxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjAwMCwgLy8gXHU4QjY2XHU1NDRBXHU3Njg0IGNodW5rIFx1NTkyN1x1NUMwRlx1OTY1MFx1NTIzNlx1RkYwOFx1NEVFNSBLQiBcdTRFM0FcdTUzNTVcdTRGNERcdUZGMDlcbiAgfSxcblxuICBwbHVnaW5zOiBbXG4gICAgb3BlcmF0ZUJsb2dQbHVnaW4oKSxcbiAgICAvLyB2aXN1YWxpemVyKHtcbiAgICAvLyAgIG9wZW46IGZhbHNlLCAvLyBcdTY3ODRcdTVFRkFcdTVCOENcdTYyMTBcdTU0MEVcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTYyQTVcdTU0NEFcbiAgICAvLyAgIGZpbGVuYW1lOiAnc3RhdHMuaHRtbCcsIC8vIFx1NjJBNVx1NTQ0QVx1NjU4N1x1NEVGNlx1NzY4NFx1NTQwRFx1NzlGMFxuICAgIC8vICAgZ3ppcFNpemU6IHRydWUsIC8vIFx1NjUzNlx1OTZDNmd6aXBcdTU5MjdcdTVDMEZcdTVFNzZcdTY2M0VcdTc5M0FcbiAgICAvLyAgIGJyb3RsaVNpemU6IHRydWUsIC8vIFx1NjUzNlx1OTZDNmJyb3RsaVx1NTkyN1x1NUMwRlx1NUU3Nlx1NjYzRVx1NzkzQVxuICAgIC8vICAgLy8gXHU1MTc2XHU0RUQ2XHU1M0VGXHU5MDA5XHU5MTREXHU3RjZFLi4uXG4gICAgLy8gfSksXG4gICAgVnVlKHtcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC5tZCQvXSxcbiAgICB9KSxcblxuICAgIFBhZ2VzKHtcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgICBkaXJzOiBbXG4gICAgICAgIHsgZGlyOiAnc3JjL3BhZ2VzJywgYmFzZVJvdXRlOiAnJyB9LFxuICAgICAgICAvLyBmZWF0dXJlcyBkaXIgZm9yIHBhZ2VzXG4gICAgICAgIHsgZGlyOiAnYmxvZycsIGJhc2VSb3V0ZTogJ2Jsb2cnIH0sXG4gICAgICBdLFxuICAgICAgZXh0ZW5kUm91dGUocm91dGUpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHJlc29sdmUoX19kaXJuYW1lLCByb3V0ZS5jb21wb25lbnQuc2xpY2UoMSkpXG5cbiAgICAgICAgaWYgKCFwYXRoLmluY2x1ZGVzKCdwcm9qZWN0cy5tZCcpICYmIHBhdGguZW5kc1dpdGgoJy5tZCcpKSB7XG4gICAgICAgICAgY29uc3QgbWQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgJ3V0Zi04JylcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IG1hdHRlcihtZClcbiAgICAgICAgICByb3V0ZS5tZXRhID0gT2JqZWN0LmFzc2lnbihyb3V0ZS5tZXRhIHx8IHt9LCB7XG4gICAgICAgICAgICBmcm9udG1hdHRlcjoge1xuICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvdXRlXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bvc3ZhL3VucGx1Z2luLXZ1ZS1yb3V0ZXJcbiAgICBWdWVSb3V0ZXIoe1xuICAgICAgZXh0ZW5zaW9uczogWycudnVlJywgJy5tZCddLFxuICAgICAgZHRzOiAnc3JjL3R5cGluZ3MvdHlwZWQtcm91dGVyLmQudHMnLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0pvaG5DYW1waW9uSnIvdml0ZS1wbHVnaW4tdnVlLWxheW91dHNcbiAgICBMYXlvdXRzKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtaTE4bicsXG4gICAgICAgICdAdnVldXNlL2hlYWQnLFxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICAgVnVlUm91dGVyQXV0b0ltcG9ydHMsXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBhZGQgYW55IG90aGVyIGltcG9ydHMgeW91IHdlcmUgcmVseWluZyBvblxuICAgICAgICAgICd2dWUtcm91dGVyL2F1dG8nOiBbJ3VzZUxpbmsnXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBkdHM6ICdzcmMvdHlwaW5ncy9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb3NhYmxlcycsICdzcmMvc3RvcmVzJ10sXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgLy8gYWxsb3cgYXV0byBsb2FkIG1hcmtkb3duIGNvbXBvbmVudHMgdW5kZXIgYC4vc3JjL2NvbXBvbmVudHMvYFxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcbiAgICAgIC8vIGFsbG93IGF1dG8gaW1wb3J0IGFuZCByZWdpc3RlciBjb21wb25lbnRzIHVzZWQgaW4gbWFya2Rvd25cbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXG4gICAgICBkdHM6ICdzcmMvdHlwaW5ncy9jb21wb25lbnRzLmQudHMnLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3VucGx1Z2luL3VucGx1Z2luLXZ1ZS1tYXJrZG93blxuICAgIE1hcmtkb3duKHtcbiAgICAgIHdyYXBwZXJDb21wb25lbnQ6IGlkID0+XG4gICAgICAgIGlkLmluY2x1ZGVzKCcvZGVtby8nKSA/ICdXcmFwcGVyRGVtbycgOiAnV3JhcHBlclBvc3QnLFxuICAgICAgd3JhcHBlckNsYXNzZXM6IChpZCwgY29kZSkgPT5cbiAgICAgICAgY29kZS5pbmNsdWRlcygnQGxheW91dC1mdWxsLXdpZHRoJylcbiAgICAgICAgICA/ICcnXG4gICAgICAgICAgOiAncHJvc2UgbS1hdXRvIHNsaWRlLWVudGVyLWNvbnRlbnQnLFxuXG4gICAgICBoZWFkRW5hYmxlZDogdHJ1ZSxcbiAgICAgIGFzeW5jIG1hcmtkb3duSXRTZXR1cChtZCkge1xuICAgICAgICAvLyBodHRwczovL3NoaWtpLnN0eWxlL2d1aWRlL1xuICAgICAgICBtZC51c2UoXG4gICAgICAgICAgYXdhaXQgTWFya2Rvd25JdFNoaWtpKHtcbiAgICAgICAgICAgIHRoZW1lczoge1xuICAgICAgICAgICAgICBkYXJrOiAnZ2l0aHViLWRhcmsnLFxuICAgICAgICAgICAgICBsaWdodDogJ2NhdHBwdWNjaW4tbGF0dGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmF1bHRDb2xvcjogZmFsc2UsXG4gICAgICAgICAgICBjc3NWYXJpYWJsZVByZWZpeDogJy0tcy0nLFxuICAgICAgICAgICAgdHJhbnNmb3JtZXJzOiBbXG4gICAgICAgICAgICAgIHRyYW5zZm9ybWVyVHdvc2xhc2goe1xuICAgICAgICAgICAgICAgIGV4cGxpY2l0VHJpZ2dlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjogcmVuZGVyZXJSaWNoKCksXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIG1kLnVzZShhbmNob3IsIHtcbiAgICAgICAgLy8gICBzbHVnaWZ5LFxuICAgICAgICAvLyAgIHBlcm1hbGluazogYW5jaG9yLnBlcm1hbGluay5saW5rSW5zaWRlSGVhZGVyKHtcbiAgICAgICAgLy8gICAgIHN5bWJvbDogJyMnLFxuICAgICAgICAvLyAgICAgcmVuZGVyQXR0cnM6ICgpID0+ICh7ICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9KSxcbiAgICAgICAgLy8gICB9KSxcbiAgICAgICAgLy8gfSlcblxuICAgICAgICBtZC51c2UoTGlua0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgICBtYXRjaGVyOiAobGluazogc3RyaW5nKSA9PiAvXmh0dHBzPzpcXC9cXC8vLnRlc3QobGluayksXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgICAgICByZWw6ICdub29wZW5lcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBtZC51c2UoVE9DLCB7XG4gICAgICAgIC8vICAgaW5jbHVkZUxldmVsOiBbMSwgMiwgMywgNF0sXG4gICAgICAgIC8vICAgc2x1Z2lmeSxcbiAgICAgICAgLy8gICBjb250YWluZXJIZWFkZXJIdG1sOiBgXG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzPVwidGFibGUtb2YtY29udGVudHMtYW5jaG9yIGhpZGRlblwiPlxuICAgICAgICAvLyAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMyA0aDE4djJIM3ptMCA3aDEydjJIM3ptMCA3aDE4djJIM3pcIi8+PC9zdmc+XG4gICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICBgLFxuICAgICAgICAvLyB9KVxuXG4gICAgICAgIG1kLnVzZShHaXRIdWJBbGVydHMpXG4gICAgICB9LFxuICAgICAgLy8gZnJvbnRtYXR0ZXJQcmVwcm9jZXNzKGZyb250bWF0dGVyLCBvcHRpb25zLCBpZCwgZGVmYXVsdHMpIHtcbiAgICAgIC8vICAgKCgpID0+IHtcbiAgICAgIC8vICAgICBpZiAoIWlkLmVuZHNXaXRoKCcubWQnKSlcbiAgICAgIC8vICAgICAgIHJldHVyblxuICAgICAgLy8gICAgIGNvbnN0IHJvdXRlID0gYmFzZW5hbWUoaWQsICcubWQnKVxuICAgICAgLy8gICAgIGlmIChcbiAgICAgIC8vICAgICAgIHJvdXRlID09PSAnaW5kZXgnXG4gICAgICAvLyAgICAgICB8fCBmcm9udG1hdHRlci5pbWFnZVxuICAgICAgLy8gICAgICAgfHwgIWZyb250bWF0dGVyLnRpdGxlXG4gICAgICAvLyAgICAgKSB7XG4gICAgICAvLyAgICAgICByZXR1cm5cbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgICAgY29uc3QgcGF0aCA9IGBvZy8ke3JvdXRlfS5wbmdgXG4gICAgICAvLyAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgIC8vICAgICAgIGZzLmV4aXN0c1N5bmMoYCR7aWQuc2xpY2UoMCwgLTMpfS5wbmdgKVxuICAgICAgLy8gICAgICAgICA/IGZzLmNvcHkoXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7aWQuc2xpY2UoMCwgLTMpfS5wbmdgLFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBwdWJsaWMvJHtwYXRofWAsXG4gICAgICAvLyAgICAgICAgIClcbiAgICAgIC8vICAgICAgICAgOiBnZW5lcmF0ZU9nKFxuICAgICAgLy8gICAgICAgICAgIGZyb250bWF0dGVyLnRpdGxlIS50cmltKCksXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHB1YmxpYy8ke3BhdGh9YCxcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9udG1hdHRlci5kYXRlIGFzIHN0cmluZyxcbiAgICAgIC8vICAgICAgICAgKSxcbiAgICAgIC8vICAgICApXG4gICAgICAvLyAgICAgZnJvbnRtYXR0ZXIuaW1hZ2UgPSBgaHR0cHM6Ly9tbWVtZS5tZS8ke2VuY29kZVVSSUNvbXBvbmVudChwYXRoKX1gXG4gICAgICAvLyAgICAgZnJvbnRtYXR0ZXIuZGVzY3JpcHRpb25cbiAgICAgIC8vICAgICAgICAgICAgICAgICAgID0gKGZyb250bWF0dGVyPy5kZXNjIGFzIHN0cmluZykgfHwgJydcbiAgICAgIC8vICAgfSkoKVxuICAgICAgLy8gICBjb25zdCBoZWFkID0gZGVmYXVsdHMoZnJvbnRtYXR0ZXIsIG9wdGlvbnMpXG4gICAgICAvLyAgIHJldHVybiB7IGhlYWQsIGZyb250bWF0dGVyIH1cbiAgICAgIC8vIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tcHdhXG4gICAgVml0ZVBXQSh7XG4gICAgICBzZWxmRGVzdHJveWluZzogdHJ1ZSwgLy8gXHU3OTgxXHU3NTI4XHU0RTg2XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdcdTU5MjlcdTZFM0FcdTVERTVcdTRGNUNcdTVCQTRcdTc2ODRcdTVDMEZcdTdBRDknLFxuICAgICAgICBzaG9ydF9uYW1lOiAnXHU1OTI5XHU2RTNBc3R1ZGlvXHU3Njg0XHU1QzBGXHU3QUQ5JyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTE5MngxOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnRsaWZ5L2J1bmRsZS10b29scy90cmVlL21haW4vcGFja2FnZXMvdW5wbHVnaW4tdnVlLWkxOG5cbiAgICBWdWVJMThuKHtcbiAgICAgIHJ1bnRpbWVPbmx5OiB0cnVlLFxuICAgICAgY29tcG9zaXRpb25Pbmx5OiB0cnVlLFxuICAgICAgZnVsbEluc3RhbGw6IHRydWUsXG4gICAgICBpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2xvY2FsZXMvKionKV0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmVhdC1hZ2VuY3kvdml0ZS1wbHVnaW4td2ViZm9udC1kbFxuICAgIFdlYmZvbnREb3dubG9hZCgpLFxuICBdLFxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXNzZ1xuICBzc2dPcHRpb25zOiB7XG4gICAgc2NyaXB0OiAnYXN5bmMnLFxuICAgIGZvcm1hdHRpbmc6ICdtaW5pZnknLFxuICAgIGNyaXR0ZXJzT3B0aW9uczoge1xuICAgICAgcmVkdWNlSW5saW5lU3R5bGVzOiBmYWxzZSxcbiAgICB9LFxuICAgIG9uRmluaXNoZWQoKSB7XG4gICAgICBnZW5lcmF0ZVNpdGVtYXAoKVxuICAgIH0sXG4gIH0sXG5cbiAgc3NyOiB7XG4gICAgLy8gVE9ETzogd29ya2Fyb3VuZCB1bnRpbCB0aGV5IHN1cHBvcnQgbmF0aXZlIEVTTVxuICAgIG5vRXh0ZXJuYWw6IFsnd29ya2JveC13aW5kb3cnLCAvdnVlLWkxOG4vXSxcbiAgfSxcbn0pXG5cbi8vIGNvbnN0IG9nU1ZnID0gZnMucmVhZEZpbGVTeW5jKCcuL3NjcmlwdHMvb2ctdGVtcGxhdGUuc3ZnJywgJ3V0Zi04JylcblxuLy8gYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVPZyh0aXRsZTogc3RyaW5nLCBvdXRwdXQ6IHN0cmluZywgZGF0ZTogc3RyaW5nKSB7XG4vLyAgIGlmIChmcy5leGlzdHNTeW5jKG91dHB1dCkpXG4vLyAgICAgcmV0dXJuXG5cbi8vICAgYXdhaXQgZnMubWtkaXIoZGlybmFtZShvdXRwdXQpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuLy8gICAvLyBicmVha2xpbmUgZXZlcnkgMjUgY2hhcnNcbi8vICAgY29uc3QgbGluZXMgPSB0aXRsZVxuLy8gICAgIC50cmltKClcbi8vICAgICAuc3BsaXQoLyguezAsMjV9KSg/Olxcc3wkKS9nKVxuLy8gICAgIC5maWx0ZXIoQm9vbGVhbilcblxuLy8gICBjb25zdCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuLy8gICAgIGxpbmUxOiBsaW5lc1swXSxcbi8vICAgICBsaW5lMjogbGluZXNbMV0gfHwgZGF0ZSxcbi8vICAgICBsaW5lMzogbGluZXNbMl0gfHwgZGF0ZSxcbi8vICAgfVxuLy8gICBjb25zdCBzdmcgPSBvZ1NWZy5yZXBsYWNlKFxuLy8gICAgIC9cXHtcXHsoW159XSspXFx9XFx9L2csXG4vLyAgICAgKF8sIG5hbWUpID0+IGRhdGFbbmFtZV0gfHwgJycsXG4vLyAgIClcblxuLy8gICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuLy8gICBjb25zb2xlLmxvZyhgR2VuZXJhdGluZyAke291dHB1dH1gKVxuLy8gICB0cnkge1xuLy8gICAgIGF3YWl0IHNoYXJwKEJ1ZmZlci5mcm9tKHN2ZykpXG4vLyAgICAgICAucmVzaXplKDEyMDAgKiAxLjEsIDYzMCAqIDEuMSlcbi8vICAgICAgIC5wbmcoKVxuLy8gICAgICAgLnRvRmlsZShvdXRwdXQpXG4vLyAgIH1cbi8vICAgY2F0Y2ggKGUpIHtcbi8vICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZ2VuZXJhdGUgb2cgaW1hZ2UnLCBlKVxuLy8gICB9XG4vLyB9XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvbXlQcm9qaWVjdC9teV9ibG9nL215LWJsb2cvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5IFJlbG9jYXRlZCBJdGVtcy9TZWN1cml0eS9teVByb2ppZWN0L215X2Jsb2cvbXktYmxvZy9wbHVnaW5zL29wZXJhdGUtYmxvZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHklMjBSZWxvY2F0ZWQlMjBJdGVtcy9TZWN1cml0eS9teVByb2ppZWN0L215X2Jsb2cvbXktYmxvZy9wbHVnaW5zL29wZXJhdGUtYmxvZy50c1wiO2ltcG9ydCB7IGV4ZWNTeW5jIH0gZnJvbSBcIm5vZGU6Y2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0IHsgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5pbXBvcnQgcHJvY2VzcyBmcm9tIFwibm9kZTpwcm9jZXNzXCI7XG5pbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZnNlIGZyb20gXCJmcy1leHRyYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcGVyYXRlQmxvZ1BsdWdpbigpOiBQbHVnaW5PcHRpb24ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IFwib3BlcmF0ZS1ibG9nLXBsdWdpblwiLFxuICAgICAgICBjb25maWd1cmVTZXJ2ZXIoc2VydmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgICAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NEUwRFx1NjYyRlx1NUYwMFx1NTNEMVx1NkEyMVx1NUYwRlx1RkYwQ1x1NTIxOVx1NzZGNFx1NjNBNVx1OEZENFx1NTZERVx1RkYwQ1x1NEUwRFx1NUU5NFx1NzUyOFx1NjNEMlx1NEVGNlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VydmVyLm1pZGRsZXdhcmVzLnVzZShhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHJlcS51cmw/LnN0YXJ0c1dpdGgoXCIvY3JlYXRlTWRcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgcmVxLnVybD8uc3RhcnRzV2l0aChcIi9kZWxldGVNZFwiKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSByZXEudXJsLnN0YXJ0c1dpdGgoXCIvY3JlYXRlTWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImRlbGV0ZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKFxuICAgICAgICAgICAgICAgICAgICAgICAgYGh0dHA6Ly8ke3JlcS5oZWFkZXJzLmhvc3R9JHtyZXEudXJsfWAsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ0eXBlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlICE9PSBcInBvc3RcIiAmJiB0eXBlICE9PSBcIndlZWtseVwiKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbW1hbmQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSBcImNyZWF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLnBsYXRmb3JtICE9PSBcIndpbjMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgdG91Y2ggYmxvZy8ke3R5cGV9LyR7bmFtZX0ubWRgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYGVjaG8uID4gYmxvZy8ke3R5cGV9LyR7bmFtZX0ubWRgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZCA9IGByaW1yYWYgYmxvZy8ke3R5cGV9LyR7bmFtZX0ubWRgO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZXhlY1N5bmMoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcS51cmw/LnN0YXJ0c1dpdGgoXCIvdXBkYXRlTWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZzZS5leGlzdHNTeW5jKGBibG9nL3Bvc3QvdGVzdC5tZGApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgZnNlLnJlYWRGaWxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBibG9nL3Bvc3QvdGVzdC5tZGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1dGYtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZzZS53cml0ZUZpbGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGJsb2cvcG9zdC90ZXN0Lm1kYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcIjc3N1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwWixPQUFPLFFBQTJCLGVBQWU7QUFFM2MsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGNBQWM7QUFDckIsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsZUFBZTtBQUN4QixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGVBQWU7QUFDdEIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sUUFBUTtBQUNmLE9BQU8sWUFBWTtBQUduQixPQUFPLHFCQUFxQjtBQUM1QixTQUFTLGNBQWMsMkJBQTJCO0FBQ2xELE9BQU8sY0FBYztBQUNyQixPQUFPLGtCQUFrQjtBQUV6QixPQUFPLGtCQUFrQjs7O0FDekIyWixTQUFTLGdCQUFnQjtBQUM3YyxTQUFTLFdBQVc7QUFDcEIsT0FBTyxhQUFhO0FBRXBCLE9BQU8sU0FBUztBQUVELFNBQVIsb0JBQW1EO0FBQ3RELFNBQU87QUFBQSxJQUNILE1BQU07QUFBQSxJQUNOLGdCQUFnQixRQUFRO0FBQ3BCLFVBQUksUUFBUSxJQUFJLGFBQWEsZUFBZTtBQUV4QztBQUFBLE1BQ0o7QUFFQSxhQUFPLFlBQVksSUFBSSxPQUFPLEtBQUssS0FB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
