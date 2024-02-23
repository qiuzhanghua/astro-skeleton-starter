const { skeleton } = require("@skeletonlabs/tw-plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    skeleton({
      themes: { preset: ["modern"] },
    }),
  ],
};
