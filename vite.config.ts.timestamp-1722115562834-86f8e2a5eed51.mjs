// vite.config.ts
import * as path from "path";
import react from "file:///var/www/html/FaewoodPWA/react-pwa/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///var/www/html/FaewoodPWA/react-pwa/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///var/www/html/FaewoodPWA/react-pwa/node_modules/vite-plugin-pwa/dist/index.js";

// manifest.json
var manifest_default = {
  name: "React PWA",
  short_name: "reactpwa",
  description: "Starter kit for modern web applications",
  theme_color: "#ffffff",
  icons: [
    {
      src: "pwa-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "pwa-512x512.png",
      sizes: "512x512",
      type: "image/png"
    },
    {
      src: "pwa-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable"
    }
  ]
};

// vite.config.ts
var __vite_injected_original_dirname = "/var/www/html/FaewoodPWA/react-pwa";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: manifest_default,
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      // switch to "true" to enable sw on development
      devOptions: {
        enabled: false
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html}", "**/*.{svg,png,jpg,gif}"]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  test: {
    root: path.resolve(__vite_injected_original_dirname, "./src")
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAibWFuaWZlc3QuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi92YXIvd3d3L2h0bWwvRmFld29vZFBXQS9yZWFjdC1wd2FcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi92YXIvd3d3L2h0bWwvRmFld29vZFBXQS9yZWFjdC1wd2Evdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Zhci93d3cvaHRtbC9GYWV3b29kUFdBL3JlYWN0LXB3YS92aXRlLmNvbmZpZy50c1wiOy8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcblxuaW1wb3J0IG1hbmlmZXN0IGZyb20gJy4vbWFuaWZlc3QuanNvbic7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIG1hbmlmZXN0LFxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLnN2ZycsICdmYXZpY29uLmljbycsICdyb2JvdHMudHh0JywgJ2FwcGxlLXRvdWNoLWljb24ucG5nJ10sXG4gICAgICAvLyBzd2l0Y2ggdG8gXCJ0cnVlXCIgdG8gZW5hYmxlIHN3IG9uIGRldmVsb3BtZW50XG4gICAgICBkZXZPcHRpb25zOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2pzLGNzcyxodG1sfScsICcqKi8qLntzdmcscG5nLGpwZyxnaWZ9J10sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgfSxcbiAgfSxcbiAgdGVzdDoge1xuICAgIHJvb3Q6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICB9LFxufSk7XG4iLCAie1xuICBcIm5hbWVcIjogXCJSZWFjdCBQV0FcIixcbiAgXCJzaG9ydF9uYW1lXCI6IFwicmVhY3Rwd2FcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN0YXJ0ZXIga2l0IGZvciBtb2Rlcm4gd2ViIGFwcGxpY2F0aW9uc1wiLFxuICBcInRoZW1lX2NvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICBcImljb25zXCI6IFtcbiAgICB7XG4gICAgICBcInNyY1wiOiBcInB3YS0xOTJ4MTkyLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjE5MngxOTJcIixcbiAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcInB3YS01MTJ4NTEyLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjUxMng1MTJcIixcbiAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInNyY1wiOiBcInB3YS01MTJ4NTEyLnBuZ1wiLFxuICAgICAgXCJzaXplc1wiOiBcIjUxMng1MTJcIixcbiAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiYW55IG1hc2thYmxlXCJcbiAgICB9XG4gIF1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxZQUFZLFVBQVU7QUFDdEIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZTs7O0FDSnhCO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixZQUFjO0FBQUEsRUFDZCxhQUFlO0FBQUEsRUFDZixhQUFlO0FBQUEsRUFDZixPQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsS0FBTztBQUFBLE1BQ1AsT0FBUztBQUFBLE1BQ1QsTUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFPO0FBQUEsTUFDUCxPQUFTO0FBQUEsTUFDVCxNQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQU87QUFBQSxNQUNQLE9BQVM7QUFBQSxNQUNULE1BQVE7QUFBQSxNQUNSLFNBQVc7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUNGOzs7QUR2QkEsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ047QUFBQSxNQUNBLGVBQWUsQ0FBQyxlQUFlLGVBQWUsY0FBYyxzQkFBc0I7QUFBQTtBQUFBLE1BRWxGLFlBQVk7QUFBQSxRQUNWLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxjQUFjLENBQUMsc0JBQXNCLHdCQUF3QjtBQUFBLE1BQy9EO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBVSxhQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQVcsYUFBUSxrQ0FBVyxPQUFPO0FBQUEsRUFDdkM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
