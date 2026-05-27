# 🧪 Automação de Testes — OrangeHRM

Projeto de testes automatizados E2E com **Cypress** cobrindo o site [OrangeHRM](https://opensource-demo.orangehrmlive.com). O objetivo é cobrir todos os módulos do sistema ao longo do tempo.

> 🚧 Projeto em andamento — novos testes sendo adicionados progressivamente.

---

## 📋 Módulos cobertos

| Módulo | Status |
|--------|--------|
| Login  | ✅ Concluído |
| Dashboard | 🔜 Em breve |
| Funcionários | 🔜 Em breve |
| Recrutamento | 🔜 Em breve |

---

## 🗂️ Estrutura do projeto

```
cypress/
├── e2e/
│   └── Auth/
│       └── login.cy.js       # Testes de autenticação
├── fixtures/
│   └── users.json            # Credenciais de teste
└── support/
    └── e2e.js
cypress.config.js
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
```

**3. Abra o Cypress (modo visual)**
```bash
npx cypress open
```

**4. Ou rode em modo headless**
```bash
npx cypress run
```

---

## 🧪 Testes de Login

Localização: `cypress/e2e/Auth/login.cy.js`

| Cenário | Resultado esperado |
|---------|-------------------|
| Login com credenciais válidas | Redireciona para o dashboard |
| Login com credenciais inválidas | Exibe mensagem "Invalid credentials" |

---

## 🛠️ Tecnologias

- [Cypress](https://www.cypress.io/) — automação E2E
- JavaScript
- [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com) — aplicação alvo

---

## 👨‍💻 Autor

**Pedro Galvão**  
[LinkedIn](https://www.linkedin.com/in/pedro-evaristo-71a727216/) · [GitHub](https://github.com/pegalvao)