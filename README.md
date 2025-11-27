# 🛠️ Mekanism - Landing Page

## Descrição

Este é o repositório front-end da Landing Page do **Mekanism**, uma plataforma de gestão móvel para oficinas mecânicas. Construída com **React**, **Vite** e estilizada com **Tailwind CSS**, esta página foi projetada com foco em alta conversão e uma abordagem *mobile-first*. Ela serve como a principal porta de entrada para apresentar as soluções do sistema, destacar seus diferenciais (como a gestão de O.S. pelo celular) e capturar novos usuários.

## 🚀 Funcionalidades

-   **Design Mobile-First:** Interface totalmente responsiva, otimizada para oferecer a melhor experiência em smartphones, onde o público-alvo opera.
-   **Seções de Alta Conversão:** Estrutura estratégica incluindo Hero Section, Apresentação de Problema/Solução, Lista de Funcionalidades e Planos de Preço.
-   **Estilização Moderna:** Layout limpo e profissional desenvolvido com a agilidade do **Tailwind CSS**.
-   **Ícones Dinâmicos:** Utilização da biblioteca **Lucide React** para ilustrar funcionalidades de forma visual e leve.
-   **Navegação Responsiva:** Navbar que se adapta a diferentes telas, incluindo um menu hambúrguer funcional para dispositivos móveis.
-   **Mockups Visuais:** Representações visuais das telas do aplicativo (Dashboard e O.S.) integradas ao design via CSS.
-   **Scroll Suave:** Navegação fluida ao clicar nos links do menu que direcionam para as seções da página.

## Tecnologias Utilizadas

-   **[React](https://react.dev/)**: Biblioteca JavaScript principal para a construção da interface de usuário baseada em componentes.
-   **[Vite](https://vitejs.dev/)**: Ferramenta de build de próxima geração, proporcionando um ambiente de desenvolvimento rápido e eficiente.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e responsiva diretamente no markup.
-   **[Lucide React](https://lucide.dev/guide/packages/lucide-react)**: Coleção de ícones open-source, limpos e consistentes.

## Pré-requisitos

Para rodar este projeto localmente, você precisará ter instalado em sua máquina:
-   [Node.js](https://nodejs.org/) (versão 14 ou superior, recomenda-se a LTS mais recente)
-   [npm](https://www.npmjs.com/) (geralmente vem instalado com o Node.js)

## 📂 Estrutura do projeto
````
📦 mekanism-lp
├── 📂 node\_modules
├── 📂 public
│   ├── logo.png // e outros assets estáticos
├── 📂 src
│   ├── App.jsx
│   ├── index.css // Configuração das diretivas do Tailwind
│   ├── LandingPage.jsx // Componente principal contendo toda a estrutura da LP
│   ├── main.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
````

## 📌 Como Rodar o Projeto

### 1️⃣ Clonar o repositório
```sh
git clone [URL_DO_SEU_REPOSITORIO_AQUI]
cd mekanism-lp
````

### 2️⃣ Instalar dependências

```sh
npm install
```

### 3️⃣ Rodar o servidor de desenvolvimento

```sh
npm run dev
```

Após executar o comando, acesse o link indicado no terminal (geralmente **http://localhost:5173**) em seu navegador.

## 📜 Padrões de Commit

Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para mensagens de commit claras e organizadas:

  - **feat:** Adicionar nova funcionalidade ou seção na página.
  - **fix:** Corrigir um bug ou erro de layout.
  - **docs:** Alterações na documentação (como este README).
  - **style:** Ajustes de formatação, CSS ou design que não afetam a lógica.
  - **refactor:** Melhorias no código React sem alterar o comportamento visual final.
  - **chore:** Atualizações de dependências, configurações de build, etc.
