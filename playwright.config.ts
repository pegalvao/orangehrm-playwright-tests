import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Roda os testes em paralelo
  fullyParallel: true,

  // Relatório em HTML após a execução
  reporter: 'html',

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    // Guarda trace apenas quando um teste falha e é re-executado
    trace: 'on-first-retry',

    // Screenshot apenas em falhas
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});