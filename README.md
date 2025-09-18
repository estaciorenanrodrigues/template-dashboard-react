# Dashboard React

Um projeto moderno de dashboard construído com Vite, React, TypeScript e Material-UI, com visualizações de dados interativas e paleta de cores personalizada.

## 🚀 Tecnologias

- **Vite** - Build tool e dev server
- **React 18** - Biblioteca de interface de usuário
- **TypeScript** - Tipagem estática
- **Material-UI** - Componentes de interface
- **Emotion** - CSS-in-JS
- **React Router** - Roteamento
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **SWR** - Data fetching
- **Axios** - Cliente HTTP
- **ApexCharts** - Gráficos e visualizações
- **Tailwind CSS** - Framework CSS
- **ESLint** - Linting

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── card/           # Componente de card
│   ├── graphics/        # Componentes de gráficos
│   │   ├── areaCharts.tsx
│   │   ├── lineCharts.tsx
│   │   ├── columnCharts.tsx
│   │   └── SimpleDonutCharts.tsx
│   ├── navbar/          # Barra de navegação
│   ├── sidebar/         # Barra lateral
│   └── index.ts         # Exportações
├── pages/              # Páginas da aplicação
│   ├── Dashboard.tsx   # Página principal
│   └── index.tsx       # Exportações
├── routes/             # Configuração de rotas
│   ├── index.tsx       # Componente de rotas
│   └── routes.ts       # Constantes das rotas
├── shared/             # Recursos compartilhados
│   ├── data/           # Dados mockados
│   │   └── products.ts  # Dados dos produtos
│   ├── hooks/          # Custom hooks
│   │   └── useApi.ts   # Hook para API
│   ├── types/          # Definições de tipos TypeScript
│   │   ├── api.interface.ts
│   │   ├── dashboard.interface.ts
│   │   ├── user.Interface.ts
│   │   └── index.ts
│   └── utils/          # Funções utilitárias
│       └── validation.ts
├── theme/              # Sistema de temas
│   └── colors/         # Paleta de cores
│       └── colorsPalettes.ts  # 50 cores modernas
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🎨 Sistema de Cores

O projeto inclui uma paleta moderna e diversificada com **50 cores** organizadas em categorias:

### **Cores Principais:**
- **Primary** - 8 cores vibrantes (azul, verde, âmbar, vermelho, roxo, ciano, laranja, lima)
- **Secondary** - 8 cores secundárias suaves
- **Tertiary** - 8 tons neutros e elegantes
- **Pastel** - 8 cores suaves para gráficos delicados
- **Full** - 50 cores misturadas para máxima diversidade

### **Cores Específicas:**
- **Categorias**: Success, Warning, Error, Info, Neutral
- **Status**: Online, Offline, Pending, Error, Active, Inactive
- **Tipos de Dados**: Revenue, Expenses, Profit, Users, Orders, Products, Sales, Returns

### **Suporte a Temas:**
- **Modo Claro** - Cores escuras para contraste
- **Modo Escuro** - Cores claras para visibilidade

## 📊 Componentes de Gráficos

### **LineCharts**
- Gráficos de linha suaves
- Formatação automática de valores monetários (R$)
- Marcadores opcionais
- Tooltips interativos

### **AreaCharts**
- Gráficos de área preenchida
- Opacidade configurável
- Curvas suaves

### **ColumnCharts**
- Gráficos de colunas
- Cores personalizadas
- Legendas configuráveis

### **SimpleDonutCharts**
- Gráficos de rosca
- Percentuais automáticos
- Cores da paleta personalizada

## 🎯 Funcionalidades

- ✅ **Roteamento** com React Router
- ✅ **Interface moderna** com Material-UI
- ✅ **Formulários** com validação (React Hook Form + Zod)
- ✅ **Data fetching** com SWR
- ✅ **Gráficos interativos** com ApexCharts
- ✅ **Paleta de 50 cores** moderna e diversificada
- ✅ **Sistema de temas** claro/escuro
- ✅ **Tipagem completa** com TypeScript
- ✅ **Estilização** com Tailwind CSS
- ✅ **Linting** e formatação de código
- ✅ **Componentes reutilizáveis**
- ✅ **Dados mockados** para desenvolvimento

## 🚀 Como usar

1. Clone o repositório
2. Execute `npm install` para instalar as dependências
3. Execute `npm run dev` para iniciar o servidor de desenvolvimento
4. Acesse `http://localhost:5173` no seu navegador

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter


## 📈 Dados de Exemplo

O projeto inclui dados mockados em `src/shared/data/products.ts` com:
- Informações de produtos
- Vendas mensais
- Dados para visualizações

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.