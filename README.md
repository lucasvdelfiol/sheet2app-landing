# SheetCraft AI — Transforme Planilhas em Sistemas Web & Aplicativos

Landing page moderna e realista para serviço de desenvolvimento de software e sistemas web a partir de planilhas (Google Sheets, Excel, CSV), inspirada nos conceitos do vídeo:
👉 [Turn your spreadsheets into an APP using AI (YouTube)](https://www.youtube.com/watch?v=KrzDkBTauc0)

---

## 🎯 Proposta de Valor Realista & Segura

Muitas empresas (PMEs, consultorias, indústrias, comércios e prestadores de serviço) operam processos críticos em planilhas que, com o tempo, geram retrabalho:
- Falta de controle de acessos (qualquer usuário pode ver ou editar tudo).
- Células apagadas acidentalmente ou fórmulas quebradas (`#REF!`).
- Dificuldade para operar no celular e registrar dados em campo.

### Como o serviço atende a essa dor sem promessas mirabolantes:
1. **Mantém o Google Sheets / Excel como base de dados**: Sem migrações traumáticas. Os dados continuam sob posse da empresa.
2. **Camada de Sistema Web & PWA**: Em vez de instaladores desktop pesados que exigem certificados caros de segurança (EV Code Signing) e atualizações manuais em cada máquina, a solução é entregue como um **Web App moderno e seguro**, compatível com computadores (Windows/Mac) e celulares (atalho PWA com 1 clique).
3. **Sincronização em Tempo Real**: Conexão estável com a planilha para registrar e recuperar informações de maneira confiável.
4. **Controle de Perfis**: Permissões de visualização e edição ajustadas conforme o papel de cada colaborador.
5. **Orçamentos e Prazos Transparentes**: Cada planilha possui peculiaridades e regras próprias; os projetos são orçados com escopo e prazos definidos após diagnóstico técnico prévio.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3**
- **Tailwind CSS** (via CDN)
- **Lucide Icons** (ícones vetoriais modernos)
- **Chart.js** (gráficos dinâmicos no showcase)
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
