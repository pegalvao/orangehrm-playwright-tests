# 🧪 Automação de Testes — OrangeHRM

Projeto de testes automatizados E2E com **Playwright** cobrindo o site [OrangeHRM](https://opensource-demo.orangehrmlive.com). O objetivo é cobrir todos os módulos do sistema ao longo do tempo.

> 🚧 Projeto em andamento — novos testes sendo adicionados progressivamente.
> Migrado de Cypress para Playwright.

---

## 📋 Módulos cobertos

| Módulo | Status |
|--------|--------|
| Login  | ✅ Concluído |
| Logout | ✅ Concluído |
| Admin | 🔜 Em breve |

---

## 🗂️ Estrutura do projeto

```
tests/
├── auth/
│   ├── login.spec.js       # Testes de autenticação
│   └── logout.spec.js      # Testes de encerrar sessão
└── admin/

playwright.config.js
package.json
```

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm

---

## 🚀 Como rodar

**1. Clone o repositório**
```bash
git clone https://github.com/pegalvao/cypress-automatization-1.git
cd cypress-automatization-1
```

**2. Instale as dependências**
```bash
npm install
npx playwright install
```

**3. Rode os testes (modo headless)**
```bash
npm test
```

**4. Ou rode em modo visual (com navegador aberto)**
```bash
npm run test:headed
```

**5. Ou use a interface interativa do Playwright**
```bash
npm run test:ui
```

**6. Veja o relatório da última execução**
```bash
npm run report
```

---

## 🧪 Testes de Login

Localização: `tests/auth/login.spec.js`

| Cenário | Resultado esperado |
|---------|-------------------|
| Login com credenciais válidas | Redireciona para o dashboard |
| Login com credenciais inválidas | Exibe mensagem "Invalid credentials" |

---

## 🛠️ Tecnologias

- [Playwright](https://playwright.dev/) — automação E2E
- JavaScript
- [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com) — aplicação alvo

---

## 👨‍💻 Autor

**Pedro Galvão**  
[LinkedIn](https://www.linkedin.com/in/pedro-evaristo-71a727216/) · [GitHub](https://github.com/pegalvao)