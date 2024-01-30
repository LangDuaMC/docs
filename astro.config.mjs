import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Làng Dừa",
      social: {
        github: "https://github.com/LangDuaMC",
        discord: "https://langdua.net/discord"
      },
      sidebar: [
        {
          label: "Hướng dẫn",
					autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
