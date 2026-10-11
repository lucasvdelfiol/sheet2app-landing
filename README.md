# SheetCraft — Transforme Planilhas em Sistemas Web & Aplicativos

Landing page moderna e enxuta para serviço de desenvolvimento de software e sistemas web a partir de planilhas (Google Sheets, Excel, CSV), inspirada nos conceitos de arquitetura do vídeo:
👉 [Turn your spreadsheets into an APP using AI (YouTube)](https://www.youtube.com/watch?v=KrzDkBTauc0)

---

## 🎯 Proposta de Valor & Custo Operacional Mínimo

A arquitetura do serviço foi pensada para manter o **custo operacional próximo de zero para o desenvolvedor**, sem dependência de APIs pagas de IA ou servidores dedicados caros:

1. **Base de Dados Confiável (Google Sheets)**:
   - A empresa continua usando a planilha onde já confia.
   - Conexão nativa e sem custo via Google Apps Script e Google Sheets API.
2. **Camada de Sistema Web & PWA**:
   - Web App leve, moderno e responsivo, hospedável gratuitamente (Vercel, Netlify, Cloudflare Pages ou GitHub Pages).
   - Sem custos de certificados caros de instalação desktop (EV Code Signing).
   - Usuários podem fixar o sistema como aplicativo (PWA) na tela do celular ou na área de trabalho com 1 clique.
3. **Dashboards & Validações sem Custo Recorrente**:
   - Métricas, relatórios consolidados e gráficos gerados diretamente na interface via frontend (Chart.js / visualizações nativas).
   - Formulários com validação estrita para impedir erros humanos e fórmulas quebradas (`#REF!`).
4. **Controle de Acessos por Usuário**:
   - Regras de perfil (quem pode ver e editar cada informação).
5. **Orçamentos sob Medida**:
   - Escopo fechado e orçamento definido após análise prévia da planilha do cliente.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3**
- **Tailwind CSS** (via CDN)
- **Lucide Icons** (ícones vetoriais modernos)
- **Chart.js** (gráficos dinâmicos de performance)
- **Canvas-Confetti** (micro-interações no formulário de demonstração)
- **Vanilla JavaScript Modular (`app.js`)**

---

## 💻 Como Visualizar Localmente

Abra diretamente no navegador ou inicie um servidor local:

```bash
cd /Users/delfiol/Documents/Projetos/sheet2app-landing
open index.html
```

Ou via Python HTTP server:

```bash
cd /Users/delfiol/Documents/Projetos/sheet2app-landing
python3 -m http.server 8080
```
Acesse em: `http://localhost:8080`
