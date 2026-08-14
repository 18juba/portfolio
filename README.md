# Jorge Lucas — Portfólio

<p align="center">
  <strong>Portfólio pessoal desenvolvido com SvelteKit, Svelte 5 e Tailwind CSS.</strong>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/jorge-lucas-silva" target="_blank">LinkedIn</a>
  ·
  <a href="./static/Curriculo_Jorge_Lucas_Engenharia.pdf" target="_blank">Currículo</a>
</p>

---

## Sobre

Este repositório contém meu portfólio pessoal, desenvolvido para apresentar minha formação acadêmica, experiência profissional, projetos e conhecimentos técnicos.

O projeto foi construído com foco em uma interface simples, responsiva e acessível, com suporte aos idiomas português e inglês.

## Tecnologias

* Svelte 5
* SvelteKit
* Tailwind CSS
* JavaScript
* Vite
* HTML semântico

## Principais recursos

* 🌐 Suporte a **Português** e **Inglês**
* 📱 Design responsivo
* ♿ Interface com recursos de acessibilidade
* 🔍 SEO e metadados para mecanismos de busca e compartilhamento
* 💼 Apresentação de projetos pessoais, acadêmicos e profissionais
* 🧩 Interface baseada em componentes reutilizáveis

## Estrutura

```text
.
├── src/
│   ├── lib/
│   │   ├── components/
│   │   ├── data/
│   │   └── i18n/
│   │
│   └── routes/
│       └── [[lang]]/
│
├── static/
│   ├── icons/
│   ├── illustrations/
│   └── projects/
│
├── package.json
├── svelte.config.js
└── vite.config.ts
```

## Executando localmente

Clone o repositório:

```bash
git clone https://github.com/18juba/portfolio
cd portfolio
```

Instale as dependências:

```bash
bun install
```

Inicie o ambiente de desenvolvimento:

```bash
bun run dev
```

A aplicação estará disponível, por padrão, em:

```text
http://localhost:5173
```

## Build de produção

Para gerar a versão de produção:

```bash
bun run build
```

Para visualizar a build localmente:

```bash
bun run preview
```

## Internacionalização

| Idioma         | Rota  |
| -------------- | ----- |
| 🇧🇷 Português | `/`   |
| 🇺🇸 English   | `/en` |

O conteúdo é organizado por idioma, permitindo que textos e informações do portfólio sejam apresentados adequadamente para cada versão.

## SEO

O projeto possui uma estrutura preparada para SEO, incluindo:

* `title` e `meta description`
* Canonical URLs
* `hreflang`
* `robots.txt`
* Metadados específicos por idioma

---

<p align="center">
  Desenvolvido por <strong>Jorge Lucas</strong>
</p>
