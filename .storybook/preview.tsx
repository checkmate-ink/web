import type { Preview } from "@storybook/nextjs-vite";
import { NextIntlClientProvider } from "next-intl";

import messages from "../messages/en.json";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
  },

  decorators: [
    (Story) => {
      // Load Google Fonts for Storybook (next/font/google doesn't work here)
      if (
        typeof document !== "undefined" &&
        !document.getElementById("storybook-google-fonts")
      ) {
        const link = document.createElement("link");
        link.id = "storybook-google-fonts";
        link.rel = "stylesheet";
        link.href =
          "https://fonts.googleapis.com/css2?family=Besley:wght@400;500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap";
        document.head.appendChild(link);

        const style = document.createElement("style");
        style.textContent = `
          :root {
            --font-sans: "Work Sans", sans-serif;
            --font-heading: "Besley", serif;
          }
        `;
        document.head.appendChild(style);
      }
      return (
        <NextIntlClientProvider locale="en" messages={messages}>
          <Story />
        </NextIntlClientProvider>
      );
    },
  ],
};

export default preview;
