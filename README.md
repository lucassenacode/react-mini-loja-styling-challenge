# Desafio de Estilização em React: A Mini Loja 🛍️

Este repositório contém a implementação de uma interface de "Mini Loja" desenvolvida com React, utilizando quatro abordagens de estilização diferentes. O objetivo do desafio é demonstrar e comparar as metodologias: **CSS Global**, **CSS Modules**, **Tailwind CSS** e **Styled-Components**.

## 🚀 Demos ao Vivo (Vercel)

Cada uma das quatro abordagens foi publicada como um site independente. Explore e compare os resultados:

* **[Versão 1: CSS Global](https://react-mini-loja-styling-challenge-css-global-c.vercel.app/)**
* **[Versão 2: CSS Modules](https://react-mini-loja-styling-challenge-css-modules-c.vercel.app/)**
* **[Versão 3: Tailwind CSS](https://react-mini-loja-styling-challenge-tailwind.vercel.app/)**
* **[Versão 4: Styled-Components](https://react-mini-loja-styling-challenge-styled-component.vercel.app/)**

![Screenshot do projeto Mini Loja](./img/Mini-Loja.png)
*(Este é um screenshot da versão final, que é visualmente idêntica em todas as implementações)*

## 🎯 O Desafio

O objetivo era construir uma interface de e-commerce com as seguintes funcionalidades e requisitos:

* **Navbar Fixa:** Com logo, toggle de tema (claro/escuro) e badge de carrinho.
* **Grade de Produtos Responsiva:** Com breakpoints específicos para diferentes tamanhos de tela.
* **Card de Produto Detalhado:** Com imagem, título, preço, avaliação, tags "Novo"/"Promo" e variantes de botão.
* **Estados Interativos:** Efeitos de `hover`, `focus` visível, estado `disabled` para botões e um estado de carregamento com "skeleton".
* **Tema Claro/Escuro:** Com persistência da preferência do usuário no `localStorage`.
* **Acessibilidade e Performance:** Incluindo atributos `aria-*`, navegação por teclado e `lazy loading` para imagens.

## 🛠️ As Quatro Versões

Este repositório está organizado como um **Monorepo**, com cada abordagem de estilização em sua própria pasta.

### 1. [CSS Global](./01-css-global/)
* **Metodologia:** Utiliza uma única folha de estilos global (`global.css`) para toda a aplicação, com classes nomeadas seguindo a convenção BEM (Block, Element, Modifier).
* **Demo:** [Ver ao vivo](https://react-mini-loja-styling-challenge-css-global-c.vercel.app/)

### 2. [CSS Modules](./02-css-modules/)
* **Metodologia:** Cada componente React tem seu próprio arquivo de estilo (`.module.css`). As classes são "escopadas" localmente para evitar conflitos de nome.
* **Demo:** [Ver ao vivo](https://react-mini-loja-styling-challenge-css-modules-c.vercel.app/)

### 3. [Tailwind CSS](./03-tailwind/)
* **Metodologia:** Um framework "utility-first". Os estilos são aplicados diretamente no JSX através de um grande conjunto de classes de utilitário, eliminando a necessidade de escrever CSS customizado.
* **Demo:** [Ver ao vivo](https://react-mini-loja-styling-challenge-tailwind.vercel.app/)

### 4. [Styled-Components](./04-styled-components/)
* **Metodologia:** Uma abordagem "CSS-in-JS". Os estilos são escritos em JavaScript dentro dos arquivos de componente, criando componentes React que já vêm estilizados. Inclui um `ThemeProvider` para o tema global.
* **Demo:** [Ver ao vivo](https://react-mini-loja-styling-challenge-styled-component.vercel.app/)

## 🚀 Como Executar Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/lucassenacode/react-mini-loja-styling-challenge.git](https://github.com/lucassenacode/react-mini-loja-styling-challenge.git)
    cd react-mini-loja-styling-challenge
    ```

2.  **Escolha a versão que deseja executar e entre na pasta:**
    ```bash
    # Exemplo para a versão com Tailwind CSS
    cd 03-tailwind
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
A aplicação estará disponível em `http://localhost:5173`.