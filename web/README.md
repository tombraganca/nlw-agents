# NLW Agents

Projeto desenvolvido durante o evento da **Rocketseat** - NLW Agents, uma aplicação web construída com React e TypeScript.

## 🚀 Tecnologias

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento para React
- **TanStack Query** - Gerenciamento de estado assíncrono
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones
- **shadcn/ui** - Sistema de componentes

## 🛠️ Ferramentas de Desenvolvimento

- **Biome** - Linter e formatador de código
- **Ultracite** - Configuração padronizada do Biome

## 📦 Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção

## 🏗️ Estrutura do Projeto

```
src/
├── app.tsx          # Componente principal da aplicação
├── main.tsx         # Ponto de entrada da aplicação
├── index.css        # Estilos globais
├── lib/
│   └── utils.ts     # Utilitários e helpers
└── pages/
    ├── create-room.tsx  # Página de criação de sala
    └── room.tsx         # Página da sala
```

## ⚙️ Configurações

- **Aliases de importação**: Configurado `@/` para referenciar a pasta `src/`
- **Tailwind CSS**: Configurado com variáveis CSS e tema personalizado
- **shadcn/ui**: Configurado com estilo "new-york" e ícones Lucide

## 🚦 Desenvolvimento

O projeto utiliza o Vite como servidor de desenvolvimento, oferecendo:

- Hot Module Replacement (HMR)
- Build otimizada
- Suporte nativo ao TypeScript
- Plugins para React e Tailwind CSS

---

Desenvolvido com ❤️ durante o NLW Agents da Rocketseat
