# 🎬 Cinetag

Catálogo interativo de filmes de Alfred Hitchcock desenvolvido com React.

O projeto teve como base um curso de React da Alura e foi posteriormente expandido com novas funcionalidades desenvolvidas para fins de aprendizado, incluindo integração com a OMDb API, gerenciamento de favoritos com Context API e enriquecimento das informações dos filmes.

## 🛠️ Tecnologias Utilizadas

- React
- React Router DOM
- Context API
- CSS Modules
- JavaScript
- OMDb API

## 🚀 Funcionalidades

- Listagem de filmes de Alfred Hitchcock
- Sistema de favoritos utilizando Context API
- Integração com OMDb API
- Exibição de:
  - Nota IMDb
  - Gêneros
  - Duração
- Tradução automática dos gêneros para português
- Componentização com React
- Estilização com CSS Modules

## 🎯 Aprendizados

Durante o desenvolvimento foram praticados conceitos como:

- Componentização
- Props
- Hooks (useState, useEffect e useContext)
- Context API
- Consumo de APIs REST
- Gerenciamento de estado global
- CSS Modules
- React Router DOM
- Organização de projetos React
- Manipulação de dados externos

## ✨ Melhorias implementadas

Além da proposta original do curso, foram adicionadas:

- Integração com a OMDb API
- Sistema de favoritos utilizando Context API
- Contexto global para carregamento dos filmes
- Tradução dos gêneros para português
- Exibição de nota IMDb
- Exibição de duração dos filmes
- Estrutura preparada para utilização de diretor, elenco e ano de lançamento fornecidos pela OMDb API
- Reorganização da estrutura do projeto

## 🚧 Próximas melhorias

- Página de detalhes do filme
- Exibição de diretor e elenco
- Exibição do ano de lançamento
- Trailer automático
- Informações sobre onde assistir
- Deploy da aplicação

## 📁 Estrutura do Projeto

```txt
src
├── components
├── contextos
│   ├── Favoritos.js
│   └── Filmes.js
├── json
├── pages
│   ├── Home
│   └── Favoritos
├── services
│   └── omdb.js
└── utils
```

## ⚙️ Configuração

Clone o repositório:

```bash
git clone https://github.com/BruBF/cinetag.git
```

Acesse a pasta:

```bash
cd cinetag
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_OMDB_API_KEY=SUA_CHAVE
```

Inicie a aplicação:

```bash
npm start
```

A aplicação estará disponível em:

```txt
http://localhost:3000
```


## 👩‍💻 Autora

Bruna Borges Freire

GitHub: https://github.com/BruBF

## 📚 Créditos

Projeto desenvolvido a partir do curso "React: praticando React com JS" da Alura e posteriormente expandido com funcionalidades próprias para estudo, prática de desenvolvimento frontend e consumo de APIs externas.