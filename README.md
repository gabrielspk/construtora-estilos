# Construtora Estilos

Site institucional moderno, responsivo e performático desenvolvido para apresentar a **Construtora Estilos**, seus serviços, obras executadas, clientes atendidos e canais de contato em uma experiência visual premium.

O projeto foi construído com foco em performance, experiência do usuário, organização de assets, galeria multimídia e deploy otimizado com **React, Vite e TailwindCSS**.

---

## Visão Geral

A aplicação entrega uma presença digital elegante para uma empresa do setor de construção civil, combinando design institucional, animações fluidas, navegação responsiva e uma galeria robusta de obras com imagens e vídeos.

### Destaques

- Interface moderna, responsiva e institucional
- Galeria de obras com imagens e vídeos
- Modal imersivo para visualização de mídias
- Cards animados com Framer Motion
- Logos de clientes carregados dinamicamente
- Assets otimizados em WebP
- Vídeos comprimidos e servidos pela pasta `public`
- Estrutura preparada para deploy na Vercel
- Código modular e organizado por responsabilidade

---

## Tecnologias Utilizadas

- React 19
- Vite 8
- TailwindCSS 3
- Framer Motion
- Lucide React
- ESLint
- JavaScript ES Modules

---

## Funcionalidades

### Página Inicial

Hero institucional com identidade visual da marca, chamada principal e navegação fluida para as principais seções do site.

### Sobre a Empresa

Seção dedicada à apresentação da Construtora Estilos, reforçando posicionamento, experiência e proposta de valor.

### Serviços

Cards de serviços com estrutura visual clara, utilizando componentes reutilizáveis e dados centralizados.

### Galeria de Obras

Galeria com projetos reais organizados por cliente ou obra, incluindo:

- Imagens de capa
- Múltiplas mídias por projeto
- Suporte para imagens e vídeos
- Organização por arrays de mídia
- Visualização em modal
- Navegação entre mídias
- Suporte responsivo para desktop e mobile

### Modal de Projeto

Modal multimídia para navegação detalhada das obras, com foco em uma experiência visual premium.

Recursos presentes:

- Imagem principal em destaque
- Vídeos integrados
- Thumbnails
- Navegação entre mídias
- Layout escuro imersivo
- Experiência responsiva
- Animações com Framer Motion

### Clientes

Seção com logos de clientes e parceiros, carregados de forma organizada a partir de `src/data/clients.js`.

### Contato e Rodapé

Footer completo com informações de contato, redes sociais e mapa incorporado.

---

## Organização do Projeto

```txt
src/
├── assets/
│   ├── brand/
│   ├── clientes/
│   └── obras/
├── components/
│   ├── Projects/
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   └── Projects.jsx
│   ├── About.jsx
│   ├── Clients.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   └── Services.jsx
├── data/
│   ├── clients.js
│   ├── projects.js
│   ├── services.jsx
│   └── stats.js
├── hooks/
├── utils/
├── App.jsx
└── main.jsx
```

---

## Estratégia de Assets

O projeto utiliza uma estrutura clara para separar mídia institucional, logos de clientes e obras.

### Imagens

As imagens das obras foram otimizadas em **WebP** para reduzir o peso dos arquivos sem comprometer a percepção visual.

### Vídeos

Os vídeos das obras são servidos pela pasta `public`, permitindo referência direta no projeto sem aumentar o bundle JavaScript.

### Galeria

A galeria trabalha com arrays de mídia, permitindo combinar imagens e vídeos dentro de um mesmo projeto.

Exemplo de mídia do tipo imagem:

```js
{
  type: "image",
  src: getImage("cliente/foto1.webp")
}
```

Exemplo de mídia do tipo vídeo:

```js
{
  type: "video",
  src: "/videos/cliente/video1.mp4"
}
```

---

## Performance

O projeto foi pensado com boas práticas modernas de performance:

- Vite para build rápido e otimizado
- Imagens em WebP
- Vídeos comprimidos
- Lazy loading em mídias relevantes
- Componentização por seção
- Assets organizados por contexto
- Animações pontuais com Framer Motion
- Separação entre dados e componentes visuais

---

## Responsividade

A interface foi construída com TailwindCSS e classes responsivas, garantindo boa experiência em:

- Desktop
- Notebooks
- Tablets
- Smartphones Android
- iPhone/Safari

A galeria, os cards e o modal foram estruturados para manter leitura, proporção visual e navegação confortável em diferentes tamanhos de tela.

---

## Scripts Disponíveis

Instalar dependências:

```bash
npm install
```

Rodar em desenvolvimento:

```bash
npm run dev
```

Gerar build de produção:

```bash
npm run build
```

Visualizar build localmente:

```bash
npm run preview
```

Rodar lint:

```bash
npm run lint
```

---

## Deploy

O projeto está preparado para deploy em plataformas modernas como a **Vercel**.

Fluxo recomendado:

```bash
npm run build
```

Diretório de saída:

```txt
dist/
```

Configuração esperada na Vercel:

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

---

## Pontos Fortes do Projeto

- Visual institucional premium
- Boa organização de componentes
- Dados centralizados em arquivos separados
- Galeria multimídia escalável
- Uso eficiente de imagens WebP
- Vídeos separados do bundle principal
- Código simples de manter
- Estrutura adequada para evolução futura
- Experiência responsiva bem direcionada
- Stack moderna e performática

---

## Possíveis Evoluções Futuras

- Criar thumbnails dedicadas para galerias muito grandes
- Adicionar metadados SEO avançados
- Implementar Open Graph para compartilhamento em redes sociais
- Adicionar `sitemap.xml` e `robots.txt`
- Integrar CMS para cadastro dinâmico de obras
- Usar CDN ou Vercel Blob para vídeos pesados
- Adicionar testes automatizados
- Melhorar acessibilidade com auditoria WCAG
- Criar páginas individuais para cada obra

---

## Autor

Projeto desenvolvido para a **Construtora Estilos** com foco em presença digital, performance e apresentação premium de obras e clientes.

---

## Licença

Este projeto é privado e destinado ao uso institucional da **Construtora Estilos**.
