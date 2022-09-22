import { defineConfig, UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((config: UserConfig) => {
  config.ssr = { ...config.ssr, target: "node", format: "cjs" };
  config.plugins = config.plugins ?? [];
  config.plugins.push(qwikCity());
  config.plugins.push(qwikVite());
  config.plugins.push(tsconfigPaths());
  return config;
});
