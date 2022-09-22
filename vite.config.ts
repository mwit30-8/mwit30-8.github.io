import { defineConfig, UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import ViteRadar from 'vite-plugin-radar';

export default defineConfig((config: UserConfig) => {
  config.ssr = { ...config.ssr, target: "node", format: "cjs" };
  config.plugins = config.plugins ?? [];
  config.plugins.push(qwikCity());
  config.plugins.push(qwikVite());
  config.plugins.push(tsconfigPaths());
  if (process.env.ANALYTICS_MEASUREMENT_ID)
    config.plugins.push(
      ViteRadar({
        analytics: {
          id: process.env.ANALYTICS_MEASUREMENT_ID
        }
      })
    );
  return config;
});
