```markdown
## 🇧🇷 Versão em Português

# 🧪 Automação de Testes E2E — OrangeHRM (MVP)

[![Playwright Tests](https://github.com/pegalvao/orangehrm-playwright-tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/pegalvao/orangehrm-playwright-tests/actions)

Projeto focado na automação dos fluxos críticos (MVP) do sistema de RH [OrangeHRM](https://opensource-demo.orangehrmlive.com), desenvolvido para consolidar meus conhecimentos práticos em Qualidade de Software (QA).

A ideia principal aqui não é o volume de testes, mas sim aplicar **qualidade técnica e uma arquitetura escalável**. Utilizei **Playwright** com **TypeScript** para demonstrar na prática algumas das melhores práticas de mercado, incluindo a integração contínua.

### 🎯 Escopo do MVP

| Módulo | Status | Descrição |
|--------|--------|-----------|
| **Autenticação** | ✅ Concluído | Fluxos de login válido, login inválido e isolamento de sessão. |
| **Smoke Test** | ✅ Concluído | Teste de navegação validando a integridade dos menus principais. |
| **PIM (Funcionários)** | ✅ Concluído | Fluxo E2E focado na automação de criar, cadastrar e excluir funcionários. |

### 🗂️ Arquitetura do Projeto

O projeto segue o padrão **Page Object Model (POM)**, separando a lógica de interação da UI das regras de validação. Isso mantém o código organizado e fácil de dar manutenção:

```text
├── .github/workflows/        # Pipeline de CI/CD (GitHub Actions)
│   └── playwright.yml        # Configuração da execução automatizada na nuvem
├── pages/                    # Classes de mapeamento de elementos (Page Objects)
│   ├── BasePage.ts           # Mapeamento comum (ex: Menu lateral)
│   ├── NavigationMenu.ts     # Ações de navegação do sistema
│   └── LoginPage.ts          # Elementos da tela de login
├── tests/                    # Arquivos de testes (Specs focados nas regras de negócio)
│   ├── auth/
│   │   └── login.spec.ts     # Cenários de login
│   ├── navigation/
│   │   └── menu-navigation.spec.ts # Smoke test de menus
│   └── pim/
│       └── employee.spec.ts  # Cenários E2E de funcionários
├── config/                   
│   └── env.ts                # Configuração de variáveis de ambiente
├── global.setup.ts           # Autenticação global para otimizar tempo de execução
└── playwright.config.ts      # Configurações gerais do framework

```

### 🛠️ Tecnologias e Ferramentas

* **[Playwright](https://playwright.dev/)** — Framework de automação E2E.
* **TypeScript** — Tipagem estática para maior segurança e previsibilidade do código.
* **Page Object Model (POM)** — Padrão de projeto para estruturação.
* **GitHub Actions (CI/CD)** — Execução automatizada dos testes a cada novo commit.
* **Dotenv** — Gerenciamento seguro de variáveis de ambiente (nada de credenciais hardcoded).
* **Global Setup (`storageState`)** — Reaproveitamento do estado de sessão (cookies/tokens) para evitar logins repetitivos e acelerar os testes.

### 🚀 Como rodar o projeto localmente

**1. Clone o repositório**

```bash
git clone [https://github.com/pegalvao/orangehrm-playwright-tests.git](https://github.com/pegalvao/orangehrm-playwright-tests.git)
cd orangehrm-playwright-tests

```

**2. Instale as dependências**

```bash
npm install
npx playwright install

```

**3. Configure o ambiente**
Crie um arquivo `.env` na raiz do projeto com os seguintes dados de acesso:

```env
BASE_URL="[https://opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com)"
VALID_USERNAME="Admin"
VALID_PASSWORD="admin123"
INVALID_USERNAME="InvalidUser"
INVALID_PASSWORD="InvalidPassword"

```

**4. Execute os testes**

```bash
# Rodar em modo headless (sem abrir o navegador, padrão de CI)
npx playwright test

# Ver a execução visualmente (passo a passo)
npx playwright test --ui

# Visualizar o relatório gerado após a execução
npx playwright show-report

```

### 👨‍💻 Autor

**Pedro Galvão**

QA Junior focado em construir uma base sólida em automação de testes e engenharia de qualidade.

[LinkedIn](https://www.linkedin.com/in/pedro-evaristo-71a727216/) · [GitHub](https://github.com/pegalvao)

---

## 🇺🇸 English Version

# 🧪 E2E Test Automation — OrangeHRM (MVP)

Project focused on automating critical workflows (MVP) of the [OrangeHRM](https://www.google.com/search?q=https%3A%2F%2Fopensource-demo.orangehrmlive.com) HR system, developed to consolidate my practical knowledge in Software Quality Assurance (QA).

The main goal here is not test volume, but rather applying **technical quality and a scalable architecture**. I used **Playwright** with **TypeScript** to demonstrate some of the best market practices, including continuous integration.

### 🎯 MVP Scope

| Module | Status | Description |
| --- | --- | --- |
| **Authentication** | ✅ Completed | Valid login, invalid login, and session isolation workflows. |
| **Smoke Test** | ✅ Completed | Navigation test validating the integrity of the main menus. |
| **PIM (Employees)** | ✅ Completed | E2E workflow focused on automating the creation, registration, and deletion of employees. |

### 🗂️ Project Architecture

The project follows the **Page Object Model (POM)** pattern, separating UI interaction logic from validation rules. This keeps the code organized and easy to maintain:

```text
├── .github/workflows/        # CI/CD Pipeline (GitHub Actions)
│   └── playwright.yml        # Cloud automated execution configuration
├── pages/                    # Element mapping classes (Page Objects)
│   ├── BasePage.ts           # Common mapping (e.g., Sidebar menu)
│   ├── NavigationMenu.ts     # System navigation actions
│   └── LoginPage.ts          # Login screen elements
├── tests/                    # Test files (Specs focused on business rules)
│   ├── auth/
│   │   └── login.spec.ts     # Login scenarios
│   ├── navigation/
│   │   └── menu-navigation.spec.ts # Menu smoke test
│   └── pim/
│       └── employee.spec.ts  # Employee E2E scenarios
├── config/                   
│   └── env.ts                # Environment variables configuration
├── global.setup.ts           # Global authentication to optimize execution time
└── playwright.config.ts      # General framework configuration

```

### 🛠️ Technologies and Tools

* **[Playwright](https://playwright.dev/)** — E2E automation framework.
* **TypeScript** — Static typing for greater code security and predictability.
* **Page Object Model (POM)** — Design pattern for project structuring.
* **GitHub Actions (CI/CD)** — Automated test execution on every new commit.
* **Dotenv** — Secure environment variable management (no hardcoded credentials).
* **Global Setup (`storageState`)** — Session state reuse (cookies/tokens) to avoid repetitive logins and speed up tests.

### 🚀 How to run the project locally

**1. Clone the repository**

```bash
git clone [https://github.com/pegalvao/orangehrm-playwright-tests.git](https://github.com/pegalvao/orangehrm-playwright-tests.git)
cd orangehrm-playwright-tests

```

**2. Install dependencies**

```bash
npm install
npx playwright install

```

**3. Configure the environment**
Create a `.env` file in the root of the project with the following access data:

```env
BASE_URL="[https://opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com)"
VALID_USERNAME="Admin"
VALID_PASSWORD="admin123"
INVALID_USERNAME="InvalidUser"
INVALID_PASSWORD="InvalidPassword"

```

**4. Execute the tests**

```bash
# Run in headless mode (no browser UI, CI default)
npx playwright test

# View execution visually (step-by-step)
npx playwright test --ui

# View the generated report after execution
npx playwright show-report

```

### 👨‍💻 Author

**Pedro Galvão**

Junior QA focused on building a solid foundation in test automation and quality engineering.

[LinkedIn](https://www.linkedin.com/in/pedro-evaristo-71a727216/) · [GitHub](https://github.com/pegalvao)

```

```