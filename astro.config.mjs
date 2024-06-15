import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://starlight.hisam.dev",
  integrations: [
    starlight({
      title: "Hisam's Starlight",
      social: {
        github: "https://github.com/hisamafahri/template-starlight",
      },
      components: {
        Header: "./src/components/Header.astro",
        Sidebar: "./src/components/Sidebar.astro",
      },
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
