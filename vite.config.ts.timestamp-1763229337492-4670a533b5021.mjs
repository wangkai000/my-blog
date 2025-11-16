// vite.config.ts
import path, { resolve } from "node:path";
import { defineConfig } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite@5.3.4_@types+node@20.14.11_terser@5.31.3/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__vue@3.4.33_typescript@5.5.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import generateSitemap from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-ssg-sitemap@0.6.1/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__vue-route_ebb049f7a6af439b12cc3b3ae4a7e070/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.24.8_@nuxt+kit@3.12.4_rollup@4.19.0__rol_d90d6430ceb436d3413be93cccffffdd/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-auto-import@0.17.8_@nuxt+kit@3.12.4_rollup@4.19.0__@vueuse+core@10.11.0_vue@3._634f8d26d13946d46de4f17c88baf87e/node_modules/unplugin-auto-import/dist/vite.js";
import { NaiveUiResolver } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.24.8_@nuxt+kit@3.12.4_rollup@4.19.0__rol_d90d6430ceb436d3413be93cccffffdd/node_modules/unplugin-vue-components/dist/resolvers.js";
import Markdown from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-markdown@0.26.2_rollup@4.19.0_vite@5.3.4_@types+node@20.14.11_terser@5.31.3_/node_modules/unplugin-vue-markdown/dist/vite.js";
import VueI18n from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@intlify+unplugin-vue-i18n@4.0.0_rollup@4.19.0_vue-i18n@9.13.1_vue@3.4.33_typescript@5.5.3__/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-pwa@0.19.8_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__workbox-build@7.1.1_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
import LinkAttributes from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import WebfontDownload from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-webfont-dl@3.9.4_vite@5.3.4_@types+node@20.14.11_terser@5.31.3_/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import VueRouter from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.19.0_vue-router@4.4.0_vue@3.4.33_typescript@5.5.3___vue@3.4.33_typescript@5.5.3_/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.19.0_vue-router@4.4.0_vue@3.4.33_typescript@5.5.3___vue@3.4.33_typescript@5.5.3_/node_modules/unplugin-vue-router/dist/index.mjs";
import Pages from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-pages@0.32.3_@vue+compiler-sfc@3.4.33_vite@5.3.4_@types+node@20.14.11_terse_3c4a74e9d96691d440d47cc7a5cd9f4c/node_modules/vite-plugin-pages/dist/index.js";
import fs from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/fs-extra@11.2.0/node_modules/fs-extra/lib/index.js";
import matter from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js";
import { visualizer } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.19.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import MarkdownItShiki from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@shikijs+markdown-it@1.10.3/node_modules/@shikijs/markdown-it/dist/index.mjs";
import { rendererRich, transformerTwoslash } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@shikijs+twoslash@1.10.3_typescript@5.5.3/node_modules/@shikijs/twoslash/dist/index.mjs";
import tailwind from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/tailwindcss@3.4.6/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/autoprefixer@10.4.19_postcss@8.4.39/node_modules/autoprefixer/lib/autoprefixer.js";
import GitHubAlerts from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/markdown-it-github-alerts@0.3.0_markdown-it@14.1.0/node_modules/markdown-it-github-alerts/dist/index.mjs";
import { setup } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@css-render+vue3-ssr@0.15.14_vue@3.4.33_typescript@5.5.3_/node_modules/@css-render/vue3-ssr/lib/index.js";

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
        if (req.url?.startsWith("/createMd") || req.url?.startsWith("/deleteMd")) {
          const action = req.url.startsWith("/createMd") ? "create" : "delete";
          const { searchParams } = new URL(
            `http://${req.headers.host}${req.url}`
          );
          const name = searchParams.get("name");
          const type = searchParams.get("type");
          if (type !== "post" && type !== "weekly") return;
          let command = "";
          if (action === "create") {
            command = process.platform !== "win32" ? `touch blog/${type}/${name}.md` : `echo. > blog/${type}/${name}.md`;
          } else {
            command = `rimraf blog/${type}/${name}.md`;
          }
          execSync(command);
        }
        if (req.url?.startsWith("/updateMd")) {
          if (fse.existsSync(`blog/post/test.md`)) {
            const content = await fse.readFile(
              `blog/post/test.md`,
              "utf-8"
            );
            fse.writeFile(
              `blog/post/test.md`,
              JSON.stringify("777")
            );
          }
        }
        next();
      });
    }
  };
}

// vite.config.ts
var __vite_injected_original_dirname = "/Users/Shared/Previously Relocated Items/Security/myProjiect/my_blog/my-blog";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`,
      "@/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
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
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
        // manualChunks: {
        // vue vue-router合并打包
        // vue: ['vue', 'vue-router'],
        // },
      }
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
    chunkSizeWarningLimit: 2e3
    // 警告的 chunk 大小限制（以 KB 为单位）
  },
  plugins: [
    operateBlogPlugin(),
    visualizer({
      open: true,
      // 构建完成后自动打开报告
      filename: "stats.html",
      // 报告文件的名称
      gzipSize: true,
      // 收集gzip大小并显示
      brotliSize: true
      // 收集brotli大小并显示
    }),
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Pages({
      extensions: ["vue", "md"],
      dirs: [
        { dir: "src/pages", baseRoute: "" },
        // features dir for pages
        { dir: "blog", baseRoute: "blog" }
      ],
      extendRoute(route) {
        const path2 = resolve(__vite_injected_original_dirname, route.component.slice(1));
        if (!path2.includes("projects.md") && path2.endsWith(".md")) {
          const md = fs.readFileSync(path2, "utf-8");
          const { data } = matter(md);
          route.meta = Object.assign(route.meta || {}, {
            frontmatter: {
              ...data,
              description: data.desc
            }
          });
        }
        return route;
      }
    }),
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: [".vue", ".md"],
      dts: "src/typings/typed-router.d.ts"
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
          "vue-router/auto": ["useLink"]
        },
        {
          "naive-ui": [
            "useNotification",
            "NNotificationProvider"
          ]
        }
      ],
      dts: "src/typings/auto-imports.d.ts",
      dirs: ["src/composables", "src/stores"],
      vueTemplate: true
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/typings/components.d.ts",
      resolvers: [NaiveUiResolver()]
    }),
    // https://github.com/unplugin/unplugin-vue-markdown
    Markdown({
      wrapperComponent: (id) => id.includes("/demo/") ? "WrapperDemo" : "WrapperPost",
      wrapperClasses: (id, code) => code.includes("@layout-full-width") ? "" : "prose m-auto slide-enter-content",
      headEnabled: true,
      async markdownItSetup(md) {
        md.use(
          await MarkdownItShiki({
            themes: {
              dark: "github-dark",
              light: "catppuccin-latte"
            },
            defaultColor: false,
            cssVariablePrefix: "--s-",
            transformers: [
              transformerTwoslash({
                explicitTrigger: true,
                renderer: rendererRich()
              })
            ]
          })
        );
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
        md.use(GitHubAlerts);
      }
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
        name: "",
        short_name: "\u5929\u6E3Astudio\u7684\u5C0F\u7AD9",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
    }),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload()
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      reduceInlineStyles: false
    },
    onFinished() {
      generateSitemap();
    },
    async onBeforePageRender(_, __, appCtx) {
      const { collect } = setup(appCtx.app);
      appCtx.__collectStyle = collect;
      return void 0;
    },
    async onPageRendered(_, renderedHTML, appCtx) {
      return renderedHTML.replace(
        /<\/head>/,
        `${appCtx.__collectStyle()}</head>`
      );
    }
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ["workbox-window", /vue-i18n/, "naive-ui", "vueuc", "date-fns"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGx1Z2lucy9vcGVyYXRlLWJsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHkgUmVsb2NhdGVkIEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHkgUmVsb2NhdGVkIEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSUyMFJlbG9jYXRlZCUyMEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGgsIHsgYmFzZW5hbWUsIGRpcm5hbWUsIHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZ2VuZXJhdGVTaXRlbWFwIGZyb20gJ3ZpdGUtc3NnLXNpdGVtYXAnXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IHsgTmFpdmVVaVJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3VucGx1Z2luLXZ1ZS1tYXJrZG93bi92aXRlJ1xuaW1wb3J0IFZ1ZUkxOG4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgTGlua0F0dHJpYnV0ZXMgZnJvbSAnbWFya2Rvd24taXQtbGluay1hdHRyaWJ1dGVzJ1xuaW1wb3J0IFdlYmZvbnREb3dubG9hZCBmcm9tICd2aXRlLXBsdWdpbi13ZWJmb250LWRsJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcidcblxuaW1wb3J0IE1hcmtkb3duSXRTaGlraSBmcm9tICdAc2hpa2lqcy9tYXJrZG93bi1pdCdcbmltcG9ydCB7IHJlbmRlcmVyUmljaCwgdHJhbnNmb3JtZXJUd29zbGFzaCB9IGZyb20gJ0BzaGlraWpzL3R3b3NsYXNoJ1xuaW1wb3J0IHRhaWx3aW5kIGZyb20gJ3RhaWx3aW5kY3NzJ1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInXG5pbXBvcnQgYW5jaG9yIGZyb20gJ21hcmtkb3duLWl0LWFuY2hvcidcbmltcG9ydCBHaXRIdWJBbGVydHMgZnJvbSAnbWFya2Rvd24taXQtZ2l0aHViLWFsZXJ0cydcblxuaW1wb3J0IFRPQyBmcm9tICdtYXJrZG93bi1pdC10YWJsZS1vZi1jb250ZW50cydcbmltcG9ydCBzaGFycCBmcm9tICdzaGFycCdcbi8vIGltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICcuL3NjcmlwdHMvc2x1Z2lmeSdcbmltcG9ydCB7IHNldHVwIH0gZnJvbSAnQGNzcy1yZW5kZXIvdnVlMy1zc3InXG5pbXBvcnQgb3BlcmF0ZUJsb2dQbHVnaW4gZnJvbSAnLi9wbHVnaW5zL29wZXJhdGUtYmxvZydcbmltcG9ydCB7IFNJVEUgfSBmcm9tICdAL2NvbmZpZy9wYXJhbSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW3RhaWx3aW5kKCksIGF1dG9wcmVmaXhlcigpXSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICd+Lyc6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKX0vYCxcbiAgICAgICdALyc6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKX0vYCxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzMjAxOScsIC8vIDEgYnJvd3NlcnMgY2FuIGhhbmRsZSB0aGUgbGF0ZXN0IEVTIGZlYXR1cmVzXG4gICAgb3V0RGlyOiAnZG9jcycsXG4gICAgLy8gXHU2MjUzXHU1MzA1XHU1NDBFXHU3NTFGXHU2MjEwXHU3Njg0XHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwXHU1NDBEXHVGRjA4W25hbWVdIFx1NEYxQVx1ODhBQlx1NjZGRlx1NjM2Mlx1NEUzQVx1NjU4N1x1NEVGNlx1NTQwRFx1RkYwQ1toYXNoXSBcdTY2MkZcdTUxODVcdTVCQjlcdTc2ODQgaGFzaCBcdTUwM0NcdUZGMDlcbiAgICBhc3NldHNEaXI6ICdhc3NldHMnLFxuICAgIC8vIFx1NjI1M1x1NTMwNVx1NTQwRVx1NzUxRlx1NjIxMFx1NzY4NCBIVE1MIFx1NTE2NVx1NTNFM1x1NjU4N1x1NEVGNlx1NTQwRFxuICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgIC8vIFx1NjI1M1x1NTMwNVx1NTQwRVx1NzUxRlx1NjIxMFx1NzY4NCBDU1MgXHU2NTg3XHU0RUY2XHU1NDBEXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTYyNTNcdTUzMDVcdTU0MEVcdTc2ODQgY2h1bmsgXHU2NTg3XHU0RUY2XHU1NDBEXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnY2h1bmtzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTYyNTNcdTUzMDVcdTU0MEVcdTc2ODQgQ1NTIFx1NjU4N1x1NEVGNlx1NTQwRFxuICAgICAgICBhc3NldEZpbGVOYW1lczogJ2Fzc2V0cy9bZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdJyxcbiAgICAgICAgLy8gbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgIC8vIHZ1ZSB2dWUtcm91dGVyXHU1NDA4XHU1RTc2XHU2MjUzXHU1MzA1XG4gICAgICAgIC8vIHZ1ZTogWyd2dWUnLCAndnVlLXJvdXRlciddLFxuICAgICAgICAvLyB9LFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gXHU1NDJGXHU3NTI4L1x1OTE0RFx1N0Y2RVx1NTM4Qlx1N0YyOVxuICAgIG1pbmlmeTogJ3RlcnNlcicsIC8vIFx1NEY3Rlx1NzUyOCB0ZXJzZXIgXHU1MzhCXHU3RjI5IEpTXG4gICAgLy8gdGVyc2VyT3B0aW9uczoge30sIC8vIFx1NEY2MFx1NTNFRlx1NEVFNVx1NTcyOFx1OEZEOVx1OTFDQ1x1OTE0RFx1N0Y2RSB0ZXJzZXIgXHU3Njg0XHU5MDA5XHU5ODc5XG5cbiAgICAvLyBcdTU0MkZcdTc1MjgvXHU3OTgxXHU3NTI4IHNvdXJjZSBtYXBcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuXG4gICAgLy8gXHU1NDJGXHU3NTI4L1x1Nzk4MVx1NzUyOFx1Njc4NFx1NUVGQVx1NTQwRVx1NzY4NFx1NkUwNVx1NzQwNlx1RkYwOFx1NTIyMFx1OTY2NCBvdXREaXIgXHU3NkVFXHU1RjU1XHVGRjA5XG4gICAgY2xlYW5Dc3M6IHRydWUsXG5cbiAgICAvLyBcdTU0MkZcdTc1MjgvXHU3OTgxXHU3NTI4XHU2Nzg0XHU1RUZBXHU1NDBFXHU3Njg0XHU2NTg3XHU0RUY2XHU1OTI3XHU1QzBGXHU2MkE1XHU1NDRBXG4gICAgYnJvdGxpU2l6ZTogZmFsc2UsIC8vIFx1NTQyRlx1NzUyOCBCcm90bGkgXHU1MzhCXHU3RjI5XHU1OTI3XHU1QzBGXHU2MkE1XHU1NDRBXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDAwLCAvLyBcdThCNjZcdTU0NEFcdTc2ODQgY2h1bmsgXHU1OTI3XHU1QzBGXHU5NjUwXHU1MjM2XHVGRjA4XHU0RUU1IEtCIFx1NEUzQVx1NTM1NVx1NEY0RFx1RkYwOVxuICB9LFxuXG4gIHBsdWdpbnM6IFtcbiAgICBvcGVyYXRlQmxvZ1BsdWdpbigpLFxuICAgIHZpc3VhbGl6ZXIoe1xuICAgICAgb3BlbjogdHJ1ZSwgLy8gXHU2Nzg0XHU1RUZBXHU1QjhDXHU2MjEwXHU1NDBFXHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2MkE1XHU1NDRBXG4gICAgICBmaWxlbmFtZTogJ3N0YXRzLmh0bWwnLCAvLyBcdTYyQTVcdTU0NEFcdTY1ODdcdTRFRjZcdTc2ODRcdTU0MERcdTc5RjBcbiAgICAgIGd6aXBTaXplOiB0cnVlLCAvLyBcdTY1MzZcdTk2QzZnemlwXHU1OTI3XHU1QzBGXHU1RTc2XHU2NjNFXHU3OTNBXG4gICAgICBicm90bGlTaXplOiB0cnVlLCAvLyBcdTY1MzZcdTk2QzZicm90bGlcdTU5MjdcdTVDMEZcdTVFNzZcdTY2M0VcdTc5M0FcbiAgICB9KSxcbiAgICBWdWUoe1xuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxuICAgIH0pLFxuXG4gICAgUGFnZXMoe1xuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcbiAgICAgIGRpcnM6IFtcbiAgICAgICAgeyBkaXI6ICdzcmMvcGFnZXMnLCBiYXNlUm91dGU6ICcnIH0sXG4gICAgICAgIC8vIGZlYXR1cmVzIGRpciBmb3IgcGFnZXNcbiAgICAgICAgeyBkaXI6ICdibG9nJywgYmFzZVJvdXRlOiAnYmxvZycgfSxcbiAgICAgIF0sXG4gICAgICBleHRlbmRSb3V0ZShyb3V0ZSkge1xuICAgICAgICBjb25zdCBwYXRoID0gcmVzb2x2ZShfX2Rpcm5hbWUsIHJvdXRlLmNvbXBvbmVudC5zbGljZSgxKSlcblxuICAgICAgICBpZiAoIXBhdGguaW5jbHVkZXMoJ3Byb2plY3RzLm1kJykgJiYgcGF0aC5lbmRzV2l0aCgnLm1kJykpIHtcbiAgICAgICAgICBjb25zdCBtZCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLCAndXRmLTgnKVxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gbWF0dGVyKG1kKVxuICAgICAgICAgIHJvdXRlLm1ldGEgPSBPYmplY3QuYXNzaWduKHJvdXRlLm1ldGEgfHwge30sIHtcbiAgICAgICAgICAgIGZyb250bWF0dGVyOiB7XG4gICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2MsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm91dGVcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9zdmEvdW5wbHVnaW4tdnVlLXJvdXRlclxuICAgIFZ1ZVJvdXRlcih7XG4gICAgICBleHRlbnNpb25zOiBbJy52dWUnLCAnLm1kJ10sXG4gICAgICBkdHM6ICdzcmMvdHlwaW5ncy90eXBlZC1yb3V0ZXIuZC50cycsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNhbXBpb25Kci92aXRlLXBsdWdpbi12dWUtbGF5b3V0c1xuICAgIExheW91dHMoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1pMThuJyxcbiAgICAgICAgJ0B2dWV1c2UvaGVhZCcsXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgICBWdWVSb3V0ZXJBdXRvSW1wb3J0cyxcbiAgICAgICAge1xuICAgICAgICAgIC8vIGFkZCBhbnkgb3RoZXIgaW1wb3J0cyB5b3Ugd2VyZSByZWx5aW5nIG9uXG4gICAgICAgICAgJ3Z1ZS1yb3V0ZXIvYXV0byc6IFsndXNlTGluayddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ25haXZlLXVpJzogW1xuICAgICAgICAgICAgJ3VzZU5vdGlmaWNhdGlvbicsXG4gICAgICAgICAgICAnTk5vdGlmaWNhdGlvblByb3ZpZGVyJyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGR0czogJ3NyYy90eXBpbmdzL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICAgIGRpcnM6IFsnc3JjL2NvbXBvc2FibGVzJywgJ3NyYy9zdG9yZXMnXSxcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICAvLyBhbGxvdyBhdXRvIGxvYWQgbWFya2Rvd24gY29tcG9uZW50cyB1bmRlciBgLi9zcmMvY29tcG9uZW50cy9gXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuICAgICAgLy8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHMgdXNlZCBpbiBtYXJrZG93blxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICAgIGR0czogJ3NyYy90eXBpbmdzL2NvbXBvbmVudHMuZC50cycsXG4gICAgICByZXNvbHZlcnM6IFtOYWl2ZVVpUmVzb2x2ZXIoKV0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdW5wbHVnaW4vdW5wbHVnaW4tdnVlLW1hcmtkb3duXG4gICAgTWFya2Rvd24oe1xuICAgICAgd3JhcHBlckNvbXBvbmVudDogaWQgPT5cbiAgICAgICAgaWQuaW5jbHVkZXMoJy9kZW1vLycpID8gJ1dyYXBwZXJEZW1vJyA6ICdXcmFwcGVyUG9zdCcsXG4gICAgICB3cmFwcGVyQ2xhc3NlczogKGlkLCBjb2RlKSA9PlxuICAgICAgICBjb2RlLmluY2x1ZGVzKCdAbGF5b3V0LWZ1bGwtd2lkdGgnKVxuICAgICAgICAgID8gJydcbiAgICAgICAgICA6ICdwcm9zZSBtLWF1dG8gc2xpZGUtZW50ZXItY29udGVudCcsXG5cbiAgICAgIGhlYWRFbmFibGVkOiB0cnVlLFxuICAgICAgYXN5bmMgbWFya2Rvd25JdFNldHVwKG1kKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vc2hpa2kuc3R5bGUvZ3VpZGUvXG4gICAgICAgIG1kLnVzZShcbiAgICAgICAgICBhd2FpdCBNYXJrZG93bkl0U2hpa2koe1xuICAgICAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgICAgIGRhcms6ICdnaXRodWItZGFyaycsXG4gICAgICAgICAgICAgIGxpZ2h0OiAnY2F0cHB1Y2Npbi1sYXR0ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmYXVsdENvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgIGNzc1ZhcmlhYmxlUHJlZml4OiAnLS1zLScsXG4gICAgICAgICAgICB0cmFuc2Zvcm1lcnM6IFtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtZXJUd29zbGFzaCh7XG4gICAgICAgICAgICAgICAgZXhwbGljaXRUcmlnZ2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiByZW5kZXJlclJpY2goKSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pLFxuICAgICAgICApXG5cbiAgICAgICAgLy8gbWQudXNlKGFuY2hvciwge1xuICAgICAgICAvLyAgIHNsdWdpZnksXG4gICAgICAgIC8vICAgcGVybWFsaW5rOiBhbmNob3IucGVybWFsaW5rLmxpbmtJbnNpZGVIZWFkZXIoe1xuICAgICAgICAvLyAgICAgc3ltYm9sOiAnIycsXG4gICAgICAgIC8vICAgICByZW5kZXJBdHRyczogKCkgPT4gKHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0pLFxuICAgICAgICAvLyAgIH0pLFxuICAgICAgICAvLyB9KVxuXG4gICAgICAgIG1kLnVzZShMaW5rQXR0cmlidXRlcywge1xuICAgICAgICAgIG1hdGNoZXI6IChsaW5rOiBzdHJpbmcpID0+IC9eaHR0cHM/OlxcL1xcLy8udGVzdChsaW5rKSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgICAgIHJlbDogJ25vb3BlbmVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIG1kLnVzZShUT0MsIHtcbiAgICAgICAgLy8gICBpbmNsdWRlTGV2ZWw6IFsxLCAyLCAzLCA0XSxcbiAgICAgICAgLy8gICBzbHVnaWZ5LFxuICAgICAgICAvLyAgIGNvbnRhaW5lckhlYWRlckh0bWw6IGBcbiAgICAgICAgLy8gICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1vZi1jb250ZW50cy1hbmNob3IgaGlkZGVuXCI+XG4gICAgICAgIC8vICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zIDRoMTh2Mkgzem0wIDdoMTJ2Mkgzem0wIDdoMTh2MkgzelwiLz48L3N2Zz5cbiAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAvLyAgIGAsXG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgbWQudXNlKEdpdEh1YkFsZXJ0cylcbiAgICAgIH0sXG4gICAgICAvLyBmcm9udG1hdHRlclByZXByb2Nlc3MoZnJvbnRtYXR0ZXIsIG9wdGlvbnMsIGlkLCBkZWZhdWx0cykge1xuICAgICAgLy8gICAoKCkgPT4ge1xuICAgICAgLy8gICAgIGlmICghaWQuZW5kc1dpdGgoJy5tZCcpKVxuICAgICAgLy8gICAgICAgcmV0dXJuXG4gICAgICAvLyAgICAgY29uc3Qgcm91dGUgPSBiYXNlbmFtZShpZCwgJy5tZCcpXG4gICAgICAvLyAgICAgaWYgKFxuICAgICAgLy8gICAgICAgcm91dGUgPT09ICdpbmRleCdcbiAgICAgIC8vICAgICAgIHx8IGZyb250bWF0dGVyLmltYWdlXG4gICAgICAvLyAgICAgICB8fCAhZnJvbnRtYXR0ZXIudGl0bGVcbiAgICAgIC8vICAgICApIHtcbiAgICAgIC8vICAgICAgIHJldHVyblxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgICBjb25zdCBwYXRoID0gYG9nLyR7cm91dGV9LnBuZ2BcbiAgICAgIC8vICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgLy8gICAgICAgZnMuZXhpc3RzU3luYyhgJHtpZC5zbGljZSgwLCAtMyl9LnBuZ2ApXG4gICAgICAvLyAgICAgICAgID8gZnMuY29weShcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtpZC5zbGljZSgwLCAtMyl9LnBuZ2AsXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHB1YmxpYy8ke3BhdGh9YCxcbiAgICAgIC8vICAgICAgICAgKVxuICAgICAgLy8gICAgICAgICA6IGdlbmVyYXRlT2coXG4gICAgICAvLyAgICAgICAgICAgZnJvbnRtYXR0ZXIudGl0bGUhLnRyaW0oKSxcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgcHVibGljLyR7cGF0aH1gLFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb250bWF0dGVyLmRhdGUgYXMgc3RyaW5nLFxuICAgICAgLy8gICAgICAgICApLFxuICAgICAgLy8gICAgIClcbiAgICAgIC8vICAgICBmcm9udG1hdHRlci5pbWFnZSA9IGBodHRwczovL21tZW1lLm1lLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhdGgpfWBcbiAgICAgIC8vICAgICBmcm9udG1hdHRlci5kZXNjcmlwdGlvblxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgPSAoZnJvbnRtYXR0ZXI/LmRlc2MgYXMgc3RyaW5nKSB8fCAnJ1xuICAgICAgLy8gICB9KSgpXG4gICAgICAvLyAgIGNvbnN0IGhlYWQgPSBkZWZhdWx0cyhmcm9udG1hdHRlciwgb3B0aW9ucylcbiAgICAgIC8vICAgcmV0dXJuIHsgaGVhZCwgZnJvbnRtYXR0ZXIgfVxuICAgICAgLy8gfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1wd2FcbiAgICBWaXRlUFdBKHtcbiAgICAgIHNlbGZEZXN0cm95aW5nOiB0cnVlLCAvLyBcdTc5ODFcdTc1MjhcdTRFODZcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLnN2ZyddLFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHNob3J0X25hbWU6ICdcdTU5MjlcdTZFM0FzdHVkaW9cdTc2ODRcdTVDMEZcdTdBRDknLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy91bnBsdWdpbi12dWUtaTE4blxuICAgIFZ1ZUkxOG4oe1xuICAgICAgcnVudGltZU9ubHk6IHRydWUsXG4gICAgICBjb21wb3NpdGlvbk9ubHk6IHRydWUsXG4gICAgICBmdWxsSW5zdGFsbDogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IFtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbG9jYWxlcy8qKicpXSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWF0LWFnZW5jeS92aXRlLXBsdWdpbi13ZWJmb250LWRsXG4gICAgV2ViZm9udERvd25sb2FkKCksXG4gIF0sXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtc3NnXG4gIHNzZ09wdGlvbnM6IHtcbiAgICBzY3JpcHQ6ICdhc3luYycsXG4gICAgZm9ybWF0dGluZzogJ21pbmlmeScsXG4gICAgY3JpdHRlcnNPcHRpb25zOiB7XG4gICAgICByZWR1Y2VJbmxpbmVTdHlsZXM6IGZhbHNlLFxuICAgIH0sXG4gICAgb25GaW5pc2hlZCgpIHtcbiAgICAgIGdlbmVyYXRlU2l0ZW1hcCgpXG4gICAgfSxcbiAgICBhc3luYyBvbkJlZm9yZVBhZ2VSZW5kZXIoXywgX18sIGFwcEN0eCkge1xuICAgICAgY29uc3QgeyBjb2xsZWN0IH0gPSBzZXR1cChhcHBDdHguYXBwKVxuICAgICAgOyhhcHBDdHggYXMgYW55KS5fX2NvbGxlY3RTdHlsZSA9IGNvbGxlY3RcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGFzeW5jIG9uUGFnZVJlbmRlcmVkKF8sIHJlbmRlcmVkSFRNTCwgYXBwQ3R4KSB7XG4gICAgICByZXR1cm4gcmVuZGVyZWRIVE1MLnJlcGxhY2UoXG4gICAgICAgIC88XFwvaGVhZD4vLFxuICAgICAgICBgJHsoYXBwQ3R4IGFzIGFueSkuX19jb2xsZWN0U3R5bGUoKX08L2hlYWQ+YCxcbiAgICAgIClcbiAgICB9LFxuICB9LFxuXG4gIHNzcjoge1xuICAgIC8vIFRPRE86IHdvcmthcm91bmQgdW50aWwgdGhleSBzdXBwb3J0IG5hdGl2ZSBFU01cbiAgICBub0V4dGVybmFsOiBbJ3dvcmtib3gtd2luZG93JywgL3Z1ZS1pMThuLywgJ25haXZlLXVpJywgJ3Z1ZXVjJywgJ2RhdGUtZm5zJ10sXG4gIH0sXG59KVxuXG4vLyBjb25zdCBvZ1NWZyA9IGZzLnJlYWRGaWxlU3luYygnLi9zY3JpcHRzL29nLXRlbXBsYXRlLnN2ZycsICd1dGYtOCcpXG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlT2codGl0bGU6IHN0cmluZywgb3V0cHV0OiBzdHJpbmcsIGRhdGU6IHN0cmluZykge1xuLy8gICBpZiAoZnMuZXhpc3RzU3luYyhvdXRwdXQpKVxuLy8gICAgIHJldHVyblxuXG4vLyAgIGF3YWl0IGZzLm1rZGlyKGRpcm5hbWUob3V0cHV0KSwgeyByZWN1cnNpdmU6IHRydWUgfSlcbi8vICAgLy8gYnJlYWtsaW5lIGV2ZXJ5IDI1IGNoYXJzXG4vLyAgIGNvbnN0IGxpbmVzID0gdGl0bGVcbi8vICAgICAudHJpbSgpXG4vLyAgICAgLnNwbGl0KC8oLnswLDI1fSkoPzpcXHN8JCkvZylcbi8vICAgICAuZmlsdGVyKEJvb2xlYW4pXG5cbi8vICAgY29uc3QgZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbi8vICAgICBsaW5lMTogbGluZXNbMF0sXG4vLyAgICAgbGluZTI6IGxpbmVzWzFdIHx8IGRhdGUsXG4vLyAgICAgbGluZTM6IGxpbmVzWzJdIHx8IGRhdGUsXG4vLyAgIH1cbi8vICAgY29uc3Qgc3ZnID0gb2dTVmcucmVwbGFjZShcbi8vICAgICAvXFx7XFx7KFtefV0rKVxcfVxcfS9nLFxuLy8gICAgIChfLCBuYW1lKSA9PiBkYXRhW25hbWVdIHx8ICcnLFxuLy8gICApXG5cbi8vICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbi8vICAgY29uc29sZS5sb2coYEdlbmVyYXRpbmcgJHtvdXRwdXR9YClcbi8vICAgdHJ5IHtcbi8vICAgICBhd2FpdCBzaGFycChCdWZmZXIuZnJvbShzdmcpKVxuLy8gICAgICAgLnJlc2l6ZSgxMjAwICogMS4xLCA2MzAgKiAxLjEpXG4vLyAgICAgICAucG5nKClcbi8vICAgICAgIC50b0ZpbGUob3V0cHV0KVxuLy8gICB9XG4vLyAgIGNhdGNoIChlKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdlbmVyYXRlIG9nIGltYWdlJywgZSlcbi8vICAgfVxuLy8gfVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHkgUmVsb2NhdGVkIEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvbXlQcm9qaWVjdC9teV9ibG9nL215LWJsb2cvcGx1Z2lucy9vcGVyYXRlLWJsb2cudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5JTIwUmVsb2NhdGVkJTIwSXRlbXMvU2VjdXJpdHkvbXlQcm9qaWVjdC9teV9ibG9nL215LWJsb2cvcGx1Z2lucy9vcGVyYXRlLWJsb2cudHNcIjtpbXBvcnQgeyBleGVjU3luYyB9IGZyb20gXCJub2RlOmNoaWxkX3Byb2Nlc3NcIjtcbmltcG9ydCB7IFVSTCB9IGZyb20gXCJub2RlOnVybFwiO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSBcIm5vZGU6cHJvY2Vzc1wiO1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGZzZSBmcm9tIFwiZnMtZXh0cmFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3BlcmF0ZUJsb2dQbHVnaW4oKTogUGx1Z2luT3B0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBcIm9wZXJhdGUtYmxvZy1wbHVnaW5cIixcbiAgICAgICAgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBcdTU5ODJcdTY3OUNcdTRFMERcdTY2MkZcdTVGMDBcdTUzRDFcdTZBMjFcdTVGMEZcdUZGMENcdTUyMTlcdTc2RjRcdTYzQTVcdThGRDRcdTU2REVcdUZGMENcdTRFMERcdTVFOTRcdTc1MjhcdTYzRDJcdTRFRjZcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICByZXEudXJsPy5zdGFydHNXaXRoKFwiL2NyZWF0ZU1kXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgIHJlcS51cmw/LnN0YXJ0c1dpdGgoXCIvZGVsZXRlTWRcIilcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gcmVxLnVybC5zdGFydHNXaXRoKFwiL2NyZWF0ZU1kXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJkZWxldGVcIjtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChcbiAgICAgICAgICAgICAgICAgICAgICAgIGBodHRwOi8vJHtyZXEuaGVhZGVycy5ob3N0fSR7cmVxLnVybH1gLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gc2VhcmNoUGFyYW1zLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidHlwZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSAhPT0gXCJwb3N0XCIgJiYgdHlwZSAhPT0gXCJ3ZWVrbHlcIikgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21tYW5kID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJjcmVhdGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5wbGF0Zm9ybSAhPT0gXCJ3aW4zMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYHRvdWNoIGJsb2cvJHt0eXBlfS8ke25hbWV9Lm1kYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGBlY2hvLiA+IGJsb2cvJHt0eXBlfS8ke25hbWV9Lm1kYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQgPSBgcmltcmFmIGJsb2cvJHt0eXBlfS8ke25hbWV9Lm1kYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGV4ZWNTeW5jKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXEudXJsPy5zdGFydHNXaXRoKFwiL3VwZGF0ZU1kXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmc2UuZXhpc3RzU3luYyhgYmxvZy9wb3N0L3Rlc3QubWRgKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IGZzZS5yZWFkRmlsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYmxvZy9wb3N0L3Rlc3QubWRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXRmLThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmc2Uud3JpdGVGaWxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBibG9nL3Bvc3QvdGVzdC5tZGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXCI3NzdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFosT0FBTyxRQUEyQixlQUFlO0FBQzNjLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxn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
