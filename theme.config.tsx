import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/stream-protocol/stream-connect-documentation',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/stream-protocol/stream-connect-documentation',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
