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
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
