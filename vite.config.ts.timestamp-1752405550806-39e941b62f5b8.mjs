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
import { rendererRich, transformerTwoslash } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@shikijs+twoslash@1.10.3_typescript@5.5.3/node_modules/@shikijs/twoslash/dist/index.mjs";
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
    // visualizer({
    //   open: false, // 构建完成后自动打开报告
    //   filename: 'stats.html', // 报告文件的名称
    //   gzipSize: true, // 收集gzip大小并显示
    //   brotliSize: true, // 收集brotli大小并显示
    //   // 其他可选配置...
    // }),
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
      dts: "src/typings/components.d.ts"
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
    }
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ["workbox-window", /vue-i18n/]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGx1Z2lucy9vcGVyYXRlLWJsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHkgUmVsb2NhdGVkIEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHkgUmVsb2NhdGVkIEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSUyMFJlbG9jYXRlZCUyMEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGgsIHsgYmFzZW5hbWUsIGRpcm5hbWUsIHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZ2VuZXJhdGVTaXRlbWFwIGZyb20gJ3ZpdGUtc3NnLXNpdGVtYXAnXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3VucGx1Z2luLXZ1ZS1tYXJrZG93bi92aXRlJ1xuaW1wb3J0IFZ1ZUkxOG4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgTGlua0F0dHJpYnV0ZXMgZnJvbSAnbWFya2Rvd24taXQtbGluay1hdHRyaWJ1dGVzJ1xuaW1wb3J0IFdlYmZvbnREb3dubG9hZCBmcm9tICd2aXRlLXBsdWdpbi13ZWJmb250LWRsJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcidcblxuaW1wb3J0IE1hcmtkb3duSXRTaGlraSBmcm9tICdAc2hpa2lqcy9tYXJrZG93bi1pdCdcbmltcG9ydCB7IHJlbmRlcmVyUmljaCwgdHJhbnNmb3JtZXJUd29zbGFzaCB9IGZyb20gJ0BzaGlraWpzL3R3b3NsYXNoJ1xuaW1wb3J0IHRhaWx3aW5kIGZyb20gJ3RhaWx3aW5kY3NzJ1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInXG5pbXBvcnQgYW5jaG9yIGZyb20gJ21hcmtkb3duLWl0LWFuY2hvcidcbmltcG9ydCBHaXRIdWJBbGVydHMgZnJvbSAnbWFya2Rvd24taXQtZ2l0aHViLWFsZXJ0cydcblxuaW1wb3J0IFRPQyBmcm9tICdtYXJrZG93bi1pdC10YWJsZS1vZi1jb250ZW50cydcbmltcG9ydCBzaGFycCBmcm9tICdzaGFycCdcbi8vIGltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICcuL3NjcmlwdHMvc2x1Z2lmeSdcbmltcG9ydCBvcGVyYXRlQmxvZ1BsdWdpbiBmcm9tICcuL3BsdWdpbnMvb3BlcmF0ZS1ibG9nJ1xuaW1wb3J0IHsgU0lURSB9IGZyb20gJ0AvY29uZmlnL3BhcmFtJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmQoKSwgYXV0b3ByZWZpeGVyKCldLFxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ34vJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gLFxuICAgICAgJ0AvJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXMyMDE5JywgLy8gMSBicm93c2VycyBjYW4gaGFuZGxlIHRoZSBsYXRlc3QgRVMgZmVhdHVyZXNcbiAgICBvdXREaXI6ICdkb2NzJyxcbiAgICAvLyBcdTYyNTNcdTUzMDVcdTU0MEVcdTc1MUZcdTYyMTBcdTc2ODRcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTU0MERcdUZGMDhbbmFtZV0gXHU0RjFBXHU4OEFCXHU2NkZGXHU2MzYyXHU0RTNBXHU2NTg3XHU0RUY2XHU1NDBEXHVGRjBDW2hhc2hdIFx1NjYyRlx1NTE4NVx1NUJCOVx1NzY4NCBoYXNoIFx1NTAzQ1x1RkYwOVxuICAgIGFzc2V0c0RpcjogJ2Fzc2V0cycsXG4gICAgLy8gXHU2MjUzXHU1MzA1XHU1NDBFXHU3NTFGXHU2MjEwXHU3Njg0IEhUTUwgXHU1MTY1XHU1M0UzXHU2NTg3XHU0RUY2XHU1NDBEXG4gICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgLy8gXHU2MjUzXHU1MzA1XHU1NDBFXHU3NTFGXHU2MjEwXHU3Njg0IENTUyBcdTY1ODdcdTRFRjZcdTU0MERcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjI1M1x1NTMwNVx1NTQwRVx1NzY4NCBjaHVuayBcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdjaHVua3MvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjI1M1x1NTMwNVx1NTQwRVx1NzY4NCBDU1MgXHU2NTg3XHU0RUY2XHU1NDBEXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnYXNzZXRzL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nLFxuICAgICAgICAvLyBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgLy8gdnVlIHZ1ZS1yb3V0ZXJcdTU0MDhcdTVFNzZcdTYyNTNcdTUzMDVcbiAgICAgICAgLy8gdnVlOiBbJ3Z1ZScsICd2dWUtcm91dGVyJ10sXG4gICAgICAgIC8vIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBcdTU0MkZcdTc1MjgvXHU5MTREXHU3RjZFXHU1MzhCXHU3RjI5XG4gICAgbWluaWZ5OiAndGVyc2VyJywgLy8gXHU0RjdGXHU3NTI4IHRlcnNlciBcdTUzOEJcdTdGMjkgSlNcbiAgICAvLyB0ZXJzZXJPcHRpb25zOiB7fSwgLy8gXHU0RjYwXHU1M0VGXHU0RUU1XHU1NzI4XHU4RkQ5XHU5MUNDXHU5MTREXHU3RjZFIHRlcnNlciBcdTc2ODRcdTkwMDlcdTk4NzlcblxuICAgIC8vIFx1NTQyRlx1NzUyOC9cdTc5ODFcdTc1Mjggc291cmNlIG1hcFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG5cbiAgICAvLyBcdTU0MkZcdTc1MjgvXHU3OTgxXHU3NTI4XHU2Nzg0XHU1RUZBXHU1NDBFXHU3Njg0XHU2RTA1XHU3NDA2XHVGRjA4XHU1MjIwXHU5NjY0IG91dERpciBcdTc2RUVcdTVGNTVcdUZGMDlcbiAgICBjbGVhbkNzczogdHJ1ZSxcblxuICAgIC8vIFx1NTQyRlx1NzUyOC9cdTc5ODFcdTc1MjhcdTY3ODRcdTVFRkFcdTU0MEVcdTc2ODRcdTY1ODdcdTRFRjZcdTU5MjdcdTVDMEZcdTYyQTVcdTU0NEFcbiAgICBicm90bGlTaXplOiBmYWxzZSwgLy8gXHU1NDJGXHU3NTI4IEJyb3RsaSBcdTUzOEJcdTdGMjlcdTU5MjdcdTVDMEZcdTYyQTVcdTU0NEFcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwMDAsIC8vIFx1OEI2Nlx1NTQ0QVx1NzY4NCBjaHVuayBcdTU5MjdcdTVDMEZcdTk2NTBcdTUyMzZcdUZGMDhcdTRFRTUgS0IgXHU0RTNBXHU1MzU1XHU0RjREXHVGRjA5XG4gIH0sXG5cbiAgcGx1Z2luczogW1xuICAgIG9wZXJhdGVCbG9nUGx1Z2luKCksXG4gICAgLy8gdmlzdWFsaXplcih7XG4gICAgLy8gICBvcGVuOiBmYWxzZSwgLy8gXHU2Nzg0XHU1RUZBXHU1QjhDXHU2MjEwXHU1NDBFXHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2MkE1XHU1NDRBXG4gICAgLy8gICBmaWxlbmFtZTogJ3N0YXRzLmh0bWwnLCAvLyBcdTYyQTVcdTU0NEFcdTY1ODdcdTRFRjZcdTc2ODRcdTU0MERcdTc5RjBcbiAgICAvLyAgIGd6aXBTaXplOiB0cnVlLCAvLyBcdTY1MzZcdTk2QzZnemlwXHU1OTI3XHU1QzBGXHU1RTc2XHU2NjNFXHU3OTNBXG4gICAgLy8gICBicm90bGlTaXplOiB0cnVlLCAvLyBcdTY1MzZcdTk2QzZicm90bGlcdTU5MjdcdTVDMEZcdTVFNzZcdTY2M0VcdTc5M0FcbiAgICAvLyAgIC8vIFx1NTE3Nlx1NEVENlx1NTNFRlx1OTAwOVx1OTE0RFx1N0Y2RS4uLlxuICAgIC8vIH0pLFxuICAgIFZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgfSksXG5cbiAgICBQYWdlcyh7XG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuICAgICAgZGlyczogW1xuICAgICAgICB7IGRpcjogJ3NyYy9wYWdlcycsIGJhc2VSb3V0ZTogJycgfSxcbiAgICAgICAgLy8gZmVhdHVyZXMgZGlyIGZvciBwYWdlc1xuICAgICAgICB7IGRpcjogJ2Jsb2cnLCBiYXNlUm91dGU6ICdibG9nJyB9LFxuICAgICAgXSxcbiAgICAgIGV4dGVuZFJvdXRlKHJvdXRlKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSByZXNvbHZlKF9fZGlybmFtZSwgcm91dGUuY29tcG9uZW50LnNsaWNlKDEpKVxuXG4gICAgICAgIGlmICghcGF0aC5pbmNsdWRlcygncHJvamVjdHMubWQnKSAmJiBwYXRoLmVuZHNXaXRoKCcubWQnKSkge1xuICAgICAgICAgIGNvbnN0IG1kID0gZnMucmVhZEZpbGVTeW5jKHBhdGgsICd1dGYtOCcpXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBtYXR0ZXIobWQpXG4gICAgICAgICAgcm91dGUubWV0YSA9IE9iamVjdC5hc3NpZ24ocm91dGUubWV0YSB8fCB7fSwge1xuICAgICAgICAgICAgZnJvbnRtYXR0ZXI6IHtcbiAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzYyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb3V0ZVxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N2YS91bnBsdWdpbi12dWUtcm91dGVyXG4gICAgVnVlUm91dGVyKHtcbiAgICAgIGV4dGVuc2lvbnM6IFsnLnZ1ZScsICcubWQnXSxcbiAgICAgIGR0czogJ3NyYy90eXBpbmdzL3R5cGVkLXJvdXRlci5kLnRzJyxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Kb2huQ2FtcGlvbkpyL3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXG4gICAgTGF5b3V0cygpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgICd2dWUnLFxuICAgICAgICAndnVlLWkxOG4nLFxuICAgICAgICAnQHZ1ZXVzZS9oZWFkJyxcbiAgICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLFxuICAgICAgICB7XG4gICAgICAgICAgLy8gYWRkIGFueSBvdGhlciBpbXBvcnRzIHlvdSB3ZXJlIHJlbHlpbmcgb25cbiAgICAgICAgICAndnVlLXJvdXRlci9hdXRvJzogWyd1c2VMaW5rJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZHRzOiAnc3JjL3R5cGluZ3MvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgICAgZGlyczogWydzcmMvY29tcG9zYWJsZXMnLCAnc3JjL3N0b3JlcyddLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIC8vIGFsbG93IGF1dG8gbG9hZCBtYXJrZG93biBjb21wb25lbnRzIHVuZGVyIGAuL3NyYy9jb21wb25lbnRzL2BcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgICAvLyBhbGxvdyBhdXRvIGltcG9ydCBhbmQgcmVnaXN0ZXIgY29tcG9uZW50cyB1c2VkIGluIG1hcmtkb3duXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuICAgICAgZHRzOiAnc3JjL3R5cGluZ3MvY29tcG9uZW50cy5kLnRzJyxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bnBsdWdpbi91bnBsdWdpbi12dWUtbWFya2Rvd25cbiAgICBNYXJrZG93bih7XG4gICAgICB3cmFwcGVyQ29tcG9uZW50OiBpZCA9PlxuICAgICAgICBpZC5pbmNsdWRlcygnL2RlbW8vJykgPyAnV3JhcHBlckRlbW8nIDogJ1dyYXBwZXJQb3N0JyxcbiAgICAgIHdyYXBwZXJDbGFzc2VzOiAoaWQsIGNvZGUpID0+XG4gICAgICAgIGNvZGUuaW5jbHVkZXMoJ0BsYXlvdXQtZnVsbC13aWR0aCcpXG4gICAgICAgICAgPyAnJ1xuICAgICAgICAgIDogJ3Byb3NlIG0tYXV0byBzbGlkZS1lbnRlci1jb250ZW50JyxcblxuICAgICAgaGVhZEVuYWJsZWQ6IHRydWUsXG4gICAgICBhc3luYyBtYXJrZG93bkl0U2V0dXAobWQpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9zaGlraS5zdHlsZS9ndWlkZS9cbiAgICAgICAgbWQudXNlKFxuICAgICAgICAgIGF3YWl0IE1hcmtkb3duSXRTaGlraSh7XG4gICAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgICAgZGFyazogJ2dpdGh1Yi1kYXJrJyxcbiAgICAgICAgICAgICAgbGlnaHQ6ICdjYXRwcHVjY2luLWxhdHRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0Q29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgY3NzVmFyaWFibGVQcmVmaXg6ICctLXMtJyxcbiAgICAgICAgICAgIHRyYW5zZm9ybWVyczogW1xuICAgICAgICAgICAgICB0cmFuc2Zvcm1lclR3b3NsYXNoKHtcbiAgICAgICAgICAgICAgICBleHBsaWNpdFRyaWdnZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyZXI6IHJlbmRlcmVyUmljaCgpLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSksXG4gICAgICAgIClcblxuICAgICAgICAvLyBtZC51c2UoYW5jaG9yLCB7XG4gICAgICAgIC8vICAgc2x1Z2lmeSxcbiAgICAgICAgLy8gICBwZXJtYWxpbms6IGFuY2hvci5wZXJtYWxpbmsubGlua0luc2lkZUhlYWRlcih7XG4gICAgICAgIC8vICAgICBzeW1ib2w6ICcjJyxcbiAgICAgICAgLy8gICAgIHJlbmRlckF0dHJzOiAoKSA9PiAoeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSksXG4gICAgICAgIC8vICAgfSksXG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgbWQudXNlKExpbmtBdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgbWF0Y2hlcjogKGxpbms6IHN0cmluZykgPT4gL15odHRwcz86XFwvXFwvLy50ZXN0KGxpbmspLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgICAgICAgcmVsOiAnbm9vcGVuZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gbWQudXNlKFRPQywge1xuICAgICAgICAvLyAgIGluY2x1ZGVMZXZlbDogWzEsIDIsIDMsIDRdLFxuICAgICAgICAvLyAgIHNsdWdpZnksXG4gICAgICAgIC8vICAgY29udGFpbmVySGVhZGVySHRtbDogYFxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzcz1cInRhYmxlLW9mLWNvbnRlbnRzLWFuY2hvciBoaWRkZW5cIj5cbiAgICAgICAgLy8gICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMgNGgxOHYySDN6bTAgN2gxMnYySDN6bTAgN2gxOHYySDN6XCIvPjwvc3ZnPlxuICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgYCxcbiAgICAgICAgLy8gfSlcblxuICAgICAgICBtZC51c2UoR2l0SHViQWxlcnRzKVxuICAgICAgfSxcbiAgICAgIC8vIGZyb250bWF0dGVyUHJlcHJvY2Vzcyhmcm9udG1hdHRlciwgb3B0aW9ucywgaWQsIGRlZmF1bHRzKSB7XG4gICAgICAvLyAgICgoKSA9PiB7XG4gICAgICAvLyAgICAgaWYgKCFpZC5lbmRzV2l0aCgnLm1kJykpXG4gICAgICAvLyAgICAgICByZXR1cm5cbiAgICAgIC8vICAgICBjb25zdCByb3V0ZSA9IGJhc2VuYW1lKGlkLCAnLm1kJylcbiAgICAgIC8vICAgICBpZiAoXG4gICAgICAvLyAgICAgICByb3V0ZSA9PT0gJ2luZGV4J1xuICAgICAgLy8gICAgICAgfHwgZnJvbnRtYXR0ZXIuaW1hZ2VcbiAgICAgIC8vICAgICAgIHx8ICFmcm9udG1hdHRlci50aXRsZVxuICAgICAgLy8gICAgICkge1xuICAgICAgLy8gICAgICAgcmV0dXJuXG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICAgIGNvbnN0IHBhdGggPSBgb2cvJHtyb3V0ZX0ucG5nYFxuICAgICAgLy8gICAgIHByb21pc2VzLnB1c2goXG4gICAgICAvLyAgICAgICBmcy5leGlzdHNTeW5jKGAke2lkLnNsaWNlKDAsIC0zKX0ucG5nYClcbiAgICAgIC8vICAgICAgICAgPyBmcy5jb3B5KFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2lkLnNsaWNlKDAsIC0zKX0ucG5nYCxcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgcHVibGljLyR7cGF0aH1gLFxuICAgICAgLy8gICAgICAgICApXG4gICAgICAvLyAgICAgICAgIDogZ2VuZXJhdGVPZyhcbiAgICAgIC8vICAgICAgICAgICBmcm9udG1hdHRlci50aXRsZSEudHJpbSgpLFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBwdWJsaWMvJHtwYXRofWAsXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbnRtYXR0ZXIuZGF0ZSBhcyBzdHJpbmcsXG4gICAgICAvLyAgICAgICAgICksXG4gICAgICAvLyAgICAgKVxuICAgICAgLy8gICAgIGZyb250bWF0dGVyLmltYWdlID0gYGh0dHBzOi8vbW1lbWUubWUvJHtlbmNvZGVVUklDb21wb25lbnQocGF0aCl9YFxuICAgICAgLy8gICAgIGZyb250bWF0dGVyLmRlc2NyaXB0aW9uXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICA9IChmcm9udG1hdHRlcj8uZGVzYyBhcyBzdHJpbmcpIHx8ICcnXG4gICAgICAvLyAgIH0pKClcbiAgICAgIC8vICAgY29uc3QgaGVhZCA9IGRlZmF1bHRzKGZyb250bWF0dGVyLCBvcHRpb25zKVxuICAgICAgLy8gICByZXR1cm4geyBoZWFkLCBmcm9udG1hdHRlciB9XG4gICAgICAvLyB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxuICAgIFZpdGVQV0Eoe1xuICAgICAgc2VsZkRlc3Ryb3lpbmc6IHRydWUsIC8vIFx1Nzk4MVx1NzUyOFx1NEU4NlxuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1x1NTkyOVx1NkUzQXN0dWRpb1x1NzY4NFx1NUMwRlx1N0FEOScsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaW50bGlmeS9idW5kbGUtdG9vbHMvdHJlZS9tYWluL3BhY2thZ2VzL3VucGx1Z2luLXZ1ZS1pMThuXG4gICAgVnVlSTE4bih7XG4gICAgICBydW50aW1lT25seTogdHJ1ZSxcbiAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcbiAgICAgIGZ1bGxJbnN0YWxsOiB0cnVlLFxuICAgICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdsb2NhbGVzLyoqJyldLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZlYXQtYWdlbmN5L3ZpdGUtcGx1Z2luLXdlYmZvbnQtZGxcbiAgICBXZWJmb250RG93bmxvYWQoKSxcbiAgXSxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1zc2dcbiAgc3NnT3B0aW9uczoge1xuICAgIHNjcmlwdDogJ2FzeW5jJyxcbiAgICBmb3JtYXR0aW5nOiAnbWluaWZ5JyxcbiAgICBjcml0dGVyc09wdGlvbnM6IHtcbiAgICAgIHJlZHVjZUlubGluZVN0eWxlczogZmFsc2UsXG4gICAgfSxcbiAgICBvbkZpbmlzaGVkKCkge1xuICAgICAgZ2VuZXJhdGVTaXRlbWFwKClcbiAgICB9LFxuICB9LFxuXG4gIHNzcjoge1xuICAgIC8vIFRPRE86IHdvcmthcm91bmQgdW50aWwgdGhleSBzdXBwb3J0IG5hdGl2ZSBFU01cbiAgICBub0V4dGVybmFsOiBbJ3dvcmtib3gtd2luZG93JywgL3Z1ZS1pMThuL10sXG4gIH0sXG59KVxuXG4vLyBjb25zdCBvZ1NWZyA9IGZzLnJlYWRGaWxlU3luYygnLi9zY3JpcHRzL29nLXRlbXBsYXRlLnN2ZycsICd1dGYtOCcpXG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlT2codGl0bGU6IHN0cmluZywgb3V0cHV0OiBzdHJpbmcsIGRhdGU6IHN0cmluZykge1xuLy8gICBpZiAoZnMuZXhpc3RzU3luYyhvdXRwdXQpKVxuLy8gICAgIHJldHVyblxuXG4vLyAgIGF3YWl0IGZzLm1rZGlyKGRpcm5hbWUob3V0cHV0KSwgeyByZWN1cnNpdmU6IHRydWUgfSlcbi8vICAgLy8gYnJlYWtsaW5lIGV2ZXJ5IDI1IGNoYXJzXG4vLyAgIGNvbnN0IGxpbmVzID0gdGl0bGVcbi8vICAgICAudHJpbSgpXG4vLyAgICAgLnNwbGl0KC8oLnswLDI1fSkoPzpcXHN8JCkvZylcbi8vICAgICAuZmlsdGVyKEJvb2xlYW4pXG5cbi8vICAgY29uc3QgZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbi8vICAgICBsaW5lMTogbGluZXNbMF0sXG4vLyAgICAgbGluZTI6IGxpbmVzWzFdIHx8IGRhdGUsXG4vLyAgICAgbGluZTM6IGxpbmVzWzJdIHx8IGRhdGUsXG4vLyAgIH1cbi8vICAgY29uc3Qgc3ZnID0gb2dTVmcucmVwbGFjZShcbi8vICAgICAvXFx7XFx7KFtefV0rKVxcfVxcfS9nLFxuLy8gICAgIChfLCBuYW1lKSA9PiBkYXRhW25hbWVdIHx8ICcnLFxuLy8gICApXG5cbi8vICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbi8vICAgY29uc29sZS5sb2coYEdlbmVyYXRpbmcgJHtvdXRwdXR9YClcbi8vICAgdHJ5IHtcbi8vICAgICBhd2FpdCBzaGFycChCdWZmZXIuZnJvbShzdmcpKVxuLy8gICAgICAgLnJlc2l6ZSgxMjAwICogMS4xLCA2MzAgKiAxLjEpXG4vLyAgICAgICAucG5nKClcbi8vICAgICAgIC50b0ZpbGUob3V0cHV0KVxuLy8gICB9XG4vLyAgIGNhdGNoIChlKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdlbmVyYXRlIG9nIGltYWdlJywgZSlcbi8vICAgfVxuLy8gfVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHkgUmVsb2NhdGVkIEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvbXlQcm9qaWVjdC9teV9ibG9nL215LWJsb2cvcGx1Z2lucy9vcGVyYXRlLWJsb2cudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5JTIwUmVsb2NhdGVkJTIwSXRlbXMvU2VjdXJpdHkvbXlQcm9qaWVjdC9teV9ibG9nL215LWJsb2cvcGx1Z2lucy9vcGVyYXRlLWJsb2cudHNcIjtpbXBvcnQgeyBleGVjU3luYyB9IGZyb20gXCJub2RlOmNoaWxkX3Byb2Nlc3NcIjtcbmltcG9ydCB7IFVSTCB9IGZyb20gXCJub2RlOnVybFwiO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSBcIm5vZGU6cHJvY2Vzc1wiO1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGZzZSBmcm9tIFwiZnMtZXh0cmFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3BlcmF0ZUJsb2dQbHVnaW4oKTogUGx1Z2luT3B0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBcIm9wZXJhdGUtYmxvZy1wbHVnaW5cIixcbiAgICAgICAgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBcdTU5ODJcdTY3OUNcdTRFMERcdTY2MkZcdTVGMDBcdTUzRDFcdTZBMjFcdTVGMEZcdUZGMENcdTUyMTlcdTc2RjRcdTYzQTVcdThGRDRcdTU2REVcdUZGMENcdTRFMERcdTVFOTRcdTc1MjhcdTYzRDJcdTRFRjZcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICByZXEudXJsPy5zdGFydHNXaXRoKFwiL2NyZWF0ZU1kXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgIHJlcS51cmw/LnN0YXJ0c1dpdGgoXCIvZGVsZXRlTWRcIilcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gcmVxLnVybC5zdGFydHNXaXRoKFwiL2NyZWF0ZU1kXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJkZWxldGVcIjtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChcbiAgICAgICAgICAgICAgICAgICAgICAgIGBodHRwOi8vJHtyZXEuaGVhZGVycy5ob3N0fSR7cmVxLnVybH1gLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gc2VhcmNoUGFyYW1zLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidHlwZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSAhPT0gXCJwb3N0XCIgJiYgdHlwZSAhPT0gXCJ3ZWVrbHlcIikgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21tYW5kID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJjcmVhdGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5wbGF0Zm9ybSAhPT0gXCJ3aW4zMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYHRvdWNoIGJsb2cvJHt0eXBlfS8ke25hbWV9Lm1kYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGBlY2hvLiA+IGJsb2cvJHt0eXBlfS8ke25hbWV9Lm1kYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQgPSBgcmltcmFmIGJsb2cvJHt0eXBlfS8ke25hbWV9Lm1kYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGV4ZWNTeW5jKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXEudXJsPy5zdGFydHNXaXRoKFwiL3VwZGF0ZU1kXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmc2UuZXhpc3RzU3luYyhgYmxvZy9wb3N0L3Rlc3QubWRgKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IGZzZS5yZWFkRmlsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYmxvZy9wb3N0L3Rlc3QubWRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXRmLThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmc2Uud3JpdGVGaWxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBibG9nL3Bvc3QvdGVzdC5tZGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXCI3NzdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFosT0FBTyxRQUEyQixlQUFlO0FBQzNjLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sYUFBYTtBQUNwQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sV0FBVztBQUNsQixPQUFPLFFBQVE7QUFDZixPQUFPLFlBQVk7QUFHbkIsT0FBTyxxQkFBcUI7QUFDNUIsU0FBUyxjQUFjLDJCQUEyQjtBQUNsRCxPQUFPLGNBQWM7QUFDckIsT0FBTyxrQkFBa0I7QUFFekIsT0FBTyxrQkFBa0I7OztBQ3hCMlosU0FBUyxnQkFBZ0I7QUFDN2MsU0FBUyxXQUFXO0FBQ3BCLE9BQU8sYUFBYTtBQUVwQixPQUFPLFNBQVM7QUFFRCxTQUFSLG9CQUFtRDtBQUN0RCxTQUFPO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixnQkFBZ0IsUUFBUTtBQUNwQixVQUFJLFFBQVEsSUFBSSxhQUFhLGVBQWU7QUFFeEM7QUFBQSxNQUNKO0FBRUEsYUFBTyxZQUFZLElBQUksT0FBTyxLQUFLLEtBQUssU0FBUztBQUM3QyxZQUNJLElBQUksS0FBSyxXQUFXLFdBQVcsS0FDL0IsSUFBSSxLQUFLLFdBQVcsV0FBVyxHQUNqQztBQUNFLGdCQUFNLFNBQVMsSUFBSSxJQUFJLFdBQVcsV0FBVyxJQUN2QyxXQUNBO0FBRU4sZ0JB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
