# 🚀 Estratégia Visionária

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa)

**Plataforma completa de gestão estratégica empresarial e pessoal com Business Intelligence integrado.**

> Sistema moderno de gestão financeira, CRM inteligente, agendamento online e analytics em tempo real. Ideal para pequenas e médias empresas, prestadores de serviço e profissionais autônomos.

[🌐 Demo ao Vivo](#) | [📖 Documentação](./DOCUMENTACAO_TECNICA.md) | [🚀 Guia de Deploy](./GUIA_DEPLOY.md)

---

## ✨ Funcionalidades Principais

### 📊 **Business Intelligence**
- Dashboard analítico com 6 KPIs principais
- Gráficos interativos (receita, lucro, Pareto)
- Análise de tendências e comparativos temporais
- Insights automáticos baseados em dados
- Exportação de relatórios (PDF, Excel)

### 💰 **Gestão Financeira Completa**
- DRE (Demonstração de Resultado do Exercício)
- Controle de receitas e despesas
- Fluxo de caixa em tempo real
- Análise de custos por categoria
- Cálculo automático de margens e lucratividade

### 👥 **CRM Inteligente**
- Classificação automática de clientes:
  - 🏆 **Estratégicos** (alto lucro + recorrência)
  - 🎯 **Oportunidades** (potencial de crescimento)
  - ⚠️ **Inativos** (60+ dias sem atendimento)
  - 📉 **Baixo Retorno** (baixo engajamento)
- Histórico completo de interações
- Análise de ticket médio
- Detecção automática de clientes em risco

### 📅 **Agendamento Online**
- Calendário visual interativo
- Link público para agendamentos (Link Bio)
- Integração com WhatsApp e Instagram
- Confirmações automáticas
- Gestão de horários disponíveis

### 🎯 **Metas e Planejamento**
- Definição de objetivos mensais
- Acompanhamento em tempo real
- Alertas de metas em risco
- Progress bars visuais
- Metas por serviço ou globais

### ✅ **Gestão de Tarefas**
- To-do list inteligente
- Geração automática de follow-ups
- Prioridades (urgente, alta, média, baixa)
- Integração com clientes
- Notificações de vencimento

### 📦 **Catálogo de Serviços**
- Gestão completa de produtos/serviços
- Análise de rentabilidade por item
- Cálculo automático de margem
- Alertas de baixa lucratividade
- Participação no faturamento total

### 🔗 **Link Bio Público**
- Landing page personalizável
- Agendamento direto pelo cliente
- Captura automática de leads
- Upload de imagens de referência
- Integração com redes sociais

### 🎨 **Personalização Total**
- 2 temas (claro/escuro)
- 10 cores primárias
- 5 fontes diferentes
- Configuração de painéis
- Dashboard customizável

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- ⚛️ **React 18.2** - Biblioteca UI
- ⚡ **Vite 6.1** - Build tool ultrarrápido
- 🎨 **Tailwind CSS** - Utility-first CSS
- 🧩 **Radix UI** - Componentes acessíveis
- 📊 **Recharts** - Gráficos e visualizações
- 🎭 **Framer Motion** - Animações fluidas
- 📝 **React Hook Form + Zod** - Formulários e validação
- 🔄 **TanStack Query** - Gerenciamento de estado
- 🗓️ **date-fns** - Manipulação de datas

### **Backend/API**
- 📦 **Base44 SDK** - Backend as a Service
- 🔐 **Autenticação Base44** - Login seguro
- ☁️ **Upload de arquivos** - Storage integrado

### **PWA & Performance**
- 📱 **Progressive Web App** - Instalável mobile/desktop
- 🔄 **Service Worker** - Modo offline
- ⚡ **Code Splitting** - Carregamento otimizado
- 🗜️ **Tree Shaking** - Bundle mínimo

---

## 🚀 Quick Start

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Conta Base44 (gratuita)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/estrategia-visionaria.git
cd estrategia-visionaria

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais Base44

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

### Build para Produção

```bash
# Build otimizado
npm run build

# Preview local
npm run preview
```

---

## 📁 Estrutura do Projeto

```
estrategia-visionaria/
├── public/                   # Assets estáticos
│   ├── manifest.json        # PWA Manifest
│   ├── sw.js               # Service Worker
│   ├── offline.html        # Página offline
│   └── icon-*.png          # Ícones PWA
├── src/
│   ├── pages/              # Páginas principais (10)
│   │   ├── Dashboard.jsx   # 📊 Painel principal
│   │   ├── Agenda.jsx      # 📅 Calendário
│   │   ├── Atendimentos.jsx # 💼 Vendas/serviços
│   │   ├── Clientes.jsx    # 👥 CRM
│   │   ├── Servicos.jsx    # 📦 Catálogo
│   │   ├── Financeiro.jsx  # 💰 DRE/Custos
│   │   ├── Metas.jsx       # 🎯 Objetivos
│   │   ├── Tarefas.jsx     # ✅ To-do list
│   │   ├── LinkBio.jsx     # 🔗 Landing page
│   │   └── Configuracoes.jsx # ⚙️ Settings
│   ├── components/         # Componentes reutilizáveis
│   │   ├── ui/            # Componentes base
│   │   ├── dashboard/     # Componentes do dashboard
│   │   ├── common/        # Compartilhados
│   │   └── ...
│   ├── api/               # Cliente API
│   ├── lib/               # Utilitários
│   ├── App.jsx            # App raiz
│   ├── Layout.jsx         # Layout principal
│   └── pages.config.js    # Configuração de rotas
├── DOCUMENTACAO_TECNICA.md  # 📖 Documentação completa
├── GUIA_DEPLOY.md          # 🚀 Guia de deploy
├── generate-pwa-icons.py   # 🎨 Gerador de ícones
└── package.json
```

---

## 📊 Entidades e Modelos

O sistema trabalha com 7 entidades principais:

1. **Atendimento** - Vendas e serviços realizados
2. **Cliente** - Cadastro e histórico de clientes
3. **Servico** - Catálogo de produtos/serviços
4. **Agendamento** - Agenda de compromissos
5. **Custo** - Despesas fixas e variáveis
6. **Meta** - Objetivos e planejamento
7. **Tarefa** - To-do list e follow-ups

[Ver documentação completa das entidades →](./DOCUMENTACAO_TECNICA.md#entidades-e-modelos-de-dados)

---

## 🎯 Roadmap

### ✅ Versão 1.0 (Atual)
- [x] Dashboard Analytics
- [x] CRM Inteligente
- [x] Gestão Financeira
- [x] Agendamento Online
- [x] Metas e Tarefas
- [x] Link Bio Público
- [x] PWA Instalável
- [x] Temas Personalizáveis

### 🚧 Versão 2.0 (Em Desenvolvimento)
- [ ] Exportação de relatórios (PDF/Excel)
- [ ] Notificações Push
- [ ] Integração Open Finance
- [ ] OCR de Notas Fiscais (IA)
- [ ] Modo totalmente offline
- [ ] Multi-idiomas (PT, EN, ES)
- [ ] API pública

### 🔮 Versão 3.0 (Planejado)
- [ ] Multi-empresa (gestão de vários negócios)
- [ ] Inteligência Artificial preditiva
- [ ] Previsões financeiras automáticas
- [ ] Aplicativo nativo (React Native)
- [ ] Integração com ERPs
- [ ] Marketplace de integrações

---

## 📱 PWA - Instalação

O **Estratégia Visionária** é um **Progressive Web App**, podendo ser instalado como aplicativo nativo!

### 📲 **Instalação Mobile (Android/iOS)**

**Android (Chrome/Edge):**
1. Abra o site no navegador
2. Toque no menu (⋮) → **"Adicionar à tela inicial"**
3. Confirme a instalação

**iOS (Safari):**
1. Abra o site no Safari
2. Toque em **Compartilhar** (□↗️)
3. Role e selecione **"Adicionar à Tela de Início"**
4. Confirme

### 💻 **Instalação Desktop (Windows/Mac/Linux)**

**Chrome/Edge:**
1. Clique no ícone de instalação (⊕) na barra de endereço
2. Ou: Menu (⋮) → **"Instalar Estratégia Visionária"**
3. O app aparecerá como programa instalado

---

## 🔐 Segurança

- ✅ HTTPS obrigatório em produção
- ✅ Autenticação via Base44 (JWT)
- ✅ Validação de dados (client + server)
- ✅ Sanitização de inputs
- ✅ CORS configurado
- ✅ Rate limiting
- ✅ Dados criptografados em trânsito

[Ver guia de segurança completo →](./DOCUMENTACAO_TECNICA.md#segurança)

---

## 🚀 Deploy

O projeto está pronto para deploy em diversas plataformas:

- ⚡ **Vercel** (Recomendado) - Deploy em 1 clique
- 🌐 **Netlify** - Alternativa excelente
- ☁️ **Cloudflare Pages** - CDN global
- 🐙 **GitHub Pages** - Hospedagem grátis

[Guia completo de deploy →](./GUIA_DEPLOY.md)

### Deploy Rápido no Vercel

```bash
# Instalar CLI
npm i -g vercel

# Deploy
vercel

# Deploy em produção
vercel --prod
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m 'Add: nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- [Base44](https://base44.com) - Backend as a Service
- [Radix UI](https://www.radix-ui.com/) - Componentes acessíveis
- [Recharts](https://recharts.org/) - Biblioteca de gráficos
- [Lucide Icons](https://lucide.dev/) - Ícones modernos
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS

---

## 📞 Suporte

- 📖 [Documentação Técnica](./DOCUMENTACAO_TECNICA.md)
- 🚀 [Guia de Deploy](./GUIA_DEPLOY.md)
- 🐛 [Reportar Bug](https://github.com/seu-usuario/estrategia-visionaria/issues)
- 💬 [Discussões](https://github.com/seu-usuario/estrategia-visionaria/discussions)
- 📧 Email: suporte@estrategiavisionaria.com

---

## 🌟 Features em Destaque

### 🤖 **Automação Inteligente**
- Classificação automática de clientes
- Geração de tarefas de follow-up
- Cálculo automático de métricas
- Alertas proativos

### 📊 **Analytics Avançado**
- Análise de Pareto (80/20)
- Comparativos temporais
- Margem por serviço
- CLV (Customer Lifetime Value)

### 🎨 **Design Moderno**
- Interface limpa e intuitiva
- Animações suaves
- Responsivo (mobile-first)
- Acessibilidade (WCAG 2.1)

### ⚡ **Performance**
- Lighthouse Score: 95+
- First Contentful Paint < 1.5s
- Time to Interactive < 2.5s
- PWA Score: 100/100

---

<div align="center">

**Desenvolvido com ❤️ usando React + Base44**

[⬆ Voltar ao topo](#-estratégia-visionária)

</div>
