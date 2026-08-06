import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',

  // Roda os testes em paralelo
  fullyParallel: true,

  // Falha o build no CI se algum test.only ficar esquecido no código
  forbidOnly: !!process.env.CI,

  // Retries automáticos no CI
  retries: process.env.CI ? 2 : 0,

  // Relatório em HTML após a execução
  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL,

    // Guarda trace apenas quando um teste falha e é re-executado
    trace: 'on-first-retry',

    // Screenshot apenas em falhas
    screenshot: 'only-on-failure',
  },

  projects: [

    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },

    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json', 
      },
      dependencies: ['setup'], 
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});