/* eslint-disable node/prefer-global/process */
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'website',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: process.env.IS_BUILD ? 'pnpm run website:preview' : 'pnpm run website:dev',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
  },
})
