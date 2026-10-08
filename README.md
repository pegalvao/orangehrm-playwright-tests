```markdown
# 🧪 Automação de Testes E2E — OrangeHRM (MVP)

Primeiro projeto do meu portfólio de Qualidade de Software (QA), focado na automação dos fluxos críticos (MVP) do sistema de RH [OrangeHRM](https://opensource-demo.orangehrmlive.com).

Em vez de focar em quantidade, este projeto prioriza **qualidade técnica e arquitetura**. Utilizei **Playwright** com **TypeScript** para demonstrar a aplicação de boas práticas de engenharia de testes no mercado atual.

---

## 🎯 Escopo do MVP (Produto Mínimo Viável)

| Módulo | Status | Descrição do Escopo |
|--------|--------|---------------------|
| **Autenticação** | ✅ Concluído | Fluxos de login válido, login inválido e isolamento de sessão. |
| **Smoke Test** | ✅ Concluído | Teste rápido de navegação horizontal validando a integridade dos menus principais. |
| **PIM (Funcionários)** | 🚧 Em desenvolvimento | Fluxo de CRUD (Cadastro e Busca). *Atualmente mapeando elementos e estudando a fundo as interações na UI.* |

---

## 🗂️ Arquitetura do Projeto (Page Object Model)

O projeto foi estruturado utilizando o padrão **POM**, separando a lógica de interação com a UI das validações (asserções) dos testes. Isso garante um código limpo, escalável e de fácil manutenção:

```text
├── pages/                    # Classes de mapeamento de elementos (Page Objects)
│   ├── BasePage.ts           # Mapeamento de elementos comuns (ex: Menu lateral)
│   ├── NavigationMenu.ts     # Ações de navegação do sistema
│   └── LoginPage.ts          # Elementos da tela de login
├── tests/                    # Arquivos de testes (Specs focados na regra de negócio)
│   ├── auth/
│   │   └── login.spec.ts     # Cenários de login
│   ├── navigation/
│   │   └── menu-navigation.spec.ts # Smoke test de menus
│   └── pim/
│       └── employee.spec.ts  # (Em breve) Cenários E2E de funcionários
├── config/                   
│   └── env.ts                # Configuração de variáveis de ambiente
├── global.setup.ts           # Autenticação global para otimização de tempo de execução
└── playwright.config.ts      # Configurações gerais do framework

```

---

## 🛠️ Tecnologias e Boas Práticas Aplicadas

* **[Playwright](https://playwright.dev/)** — Framework moderno de automação E2E.
* **TypeScript** — Tipagem estática para evitar erros em tempo de execução.
* **Page Object Model (POM)** — Arquitetura para separação de responsabilidades.
* **Dotenv** — Gerenciamento seguro de variáveis de ambiente e dados sensíveis (senhas não ficam no código).
* **Global Setup (`storageState`)** — Salva os cookies/tokens da sessão de login uma única vez, acelerando a execução dos testes subsequentes.

---

## 🚀 Como inspecionar e rodar o projeto

**1. Clone o repositório e acesse a pasta**

```bash
git clone (https://github.com/pegalvao/orangehrm-playwright-tests.git)
cd orangehrm-playwright-tests

```

**2. Instale as dependências**

```bash
npm install
npx playwright install

```

**3. Configure as variáveis de ambiente**
Crie um arquivo `.env` na raiz do projeto contendo:

```env
BASE_URL="https://opensource-demo.orangehrmlive.com"
VALID_USERNAME="Admin"
VALID_PASSWORD="admin123"
INVALID_USERNAME="TestQA"
INVALID_PASSWORD="senhaerrada"

```

**4. Execute os testes**

```bash
# Rodar em modo headless (sem abrir o navegador)
npx playwright test

# Ver a execução visualmente (passo a passo)
npx playwright test --ui

# Visualizar o relatório HTML de qualidade
npx playwright show-report

```

---

## 👨‍💻 Autor

**Pedro Galvão**

QA Junior apaixonado por qualidade de software, focado em aprender a base sólida da automação de testes.

[LinkedIn](https://www.linkedin.com/in/pedro-evaristo-71a727216/) · [GitHub](https://github.com/pegalvao)
