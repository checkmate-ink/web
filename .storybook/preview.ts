import type { Preview } from '@storybook/nextjs-vite'

import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },

  decorators: [
    (Story) => {
      // Load Google Fonts for Storybook (next/font/google doesn't work here)
      if (typeof document !== 'undefined' && !document.getElementById('storybook-google-fonts')) {
        const link = document.createElement('link')
        link.id = 'storybook-google-fonts'
        link.rel = 'stylesheet'
        link.href =
          'https://fonts.googleapis.com/css2?family=Besley:wght@400;500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap'
        document.head.appendChild(link)

        const style = document.createElement('style')
        style.textContent = `
          :root {
            --font-sans: "Work Sans", sans-serif;
            --font-heading: "Besley", serif;
          }
        `
        document.head.appendChild(style)
      }
      return Story()
    },
  ],
}

export default preview
