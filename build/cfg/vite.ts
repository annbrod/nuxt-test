import type {NuxtConfig} from "nuxt/schema";

export const viteCfg: NuxtConfig["vite"] = {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '~/assets/scss/_variables.scss';
          @import '~/assets/scss/_mixins.scss';
        `,
        api: "modern-compiler",
      },
    },
  },
};
