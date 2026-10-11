// SheetCraft - Interactive Application Logic

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- DATASETS FOR INTERACTIVE DEMO & BEFORE/AFTER ---
  const demoDatasets = {
    crm: {
      name: "CRM & Funil Comercial",
      sheetTitle: "Leads_Comercial_2026_FINAL_v3.xlsx",
      kpis: [
        { label: "Leads Ativos", value: "148", change: "+24% este mês", isPositive: true },
        { label: "Pipeline Ponderado", value: "R$ 482.500", change: "+18% vs meta", isPositive: true },
        { label: "Taxa de Conversão", value: "28.4%", change: "+4.1% no período", isPositive: true },
        { label: "Tempo Médio Fechamento", value: "12 dias", change: "-5 dias economizados", isPositive: true }
      ],
      chartTitle: "Evolução de Oportunidades & Vendas",
      chartLabels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Atual"],
      chartData: [45, 68, 92, 120, 148],
      sheetRows: [
        ["João Silva", "TechCorp", "R$ 45.000", "Proposta Enviada", "joao@techcorp.com", "#REF! erro fml", "Aguardando"],
        ["Mariana Costa", "Inova Saúde", "R$ 82.000", "Negociação", "mariana@inovasaude.com", "Sim", "Urgente"],
        ["Carlos Mendes", "AgroMax", "R$ 120.000", "Fechado Ganho", "carlos@agromax.com", "R$ 120.000", "Aprovado"],
        ["Beatriz Lima", "Logix Brasil", "R$ 34.000", "Qualificação", "beatriz@logix.com", "#VALUE!", "Sem retorno"],
        ["Lucas Rocha", "Fintech Nova", "R$ 67.000", "Reunião Agendada", "lucas@ftnova.com", "R$ 67.000", "Follow-up"]
      ],
      sheetHeaders: ["Nome Lead", "Empresa", "Valor Estimado", "Etapa Funil", "E-mail", "Comissão Calculada", "Status Obs."],
      appRows: [
        { name: "João Silva", company: "TechCorp", value: "R$ 45.000", stage: "Proposta Enviada", stageColor: "bg-blue-500/20 text-blue-400 border-blue-500/30", owner: "Lucas M.", lastContact: "Hoje, 14:20", score: "94/100" },
        { name: "Mariana Costa", company: "Inova Saúde", value: "R$ 82.000", stage: "Negociação", stageColor: "bg-amber-500/20 text-amber-400 border-amber-500/30", owner: "Carla S.", lastContact: "Ontem", score: "88/100" },
        { name: "Carlos Mendes", company: "AgroMax", value: "R$ 120.000", stage: "Fechado Ganho", stageColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", owner: "Lucas M.", lastContact: "3 dias atrás", score: "100/100" },
        { name: "Beatriz Lima", company: "Logix Brasil", value: "R$ 34.000", stage: "Qualificação", stageColor: "bg-purple-500/20 text-purple-400 border-purple-500/30", owner: "Roberto A.", lastContact: "4 dias atrás", score: "62/100" },
        { name: "Lucas Rocha", company: "Fintech Nova", value: "R$ 67.000", stage: "Reunião Agendada", stageColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30", owner: "Carla S.", lastContact: "Hoje, 09:15", score: "85/100" }
      ]
    },
    estoque: {
      name: "Controle de Estoque & Produtos",
      sheetTitle: "Estoque_Geral_Almoxarifado_2026.xlsx",
      kpis: [
        { label: "Itens em Estoque", value: "3.420 un.", change: "98% auditado", isPositive: true },
        { label: "Valor Imobilizado", value: "R$ 724.890", change: "-8% ociosidade", isPositive: true },
        { label: "Produtos em Alerta", value: "4 itens", change: "Reposição imediata", isPositive: false },
        { label: "Giro Médio", value: "18 dias", change: "Otimizado", isPositive: true }
      ],
      chartTitle: "Curva ABC e Movimentação Semanal",
      chartLabels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Atual"],
      chartData: [2800, 3100, 2950, 3300, 3420],
      sheetRows: [
        ["SKU-0012", "Sensor Industrial X4", "45 un", "10 un", "R$ 380,00", "#REF! erro custo", "Estoque OK"],
        ["SKU-0089", "Cabo Blindado 50m", "3 un", "15 un", "R$ 145,00", "R$ 435,00", "COMPRAR URGENTE"],
        ["SKU-0104", "Controlador PLC-200", "28 un", "5 un", "R$ 1.850,00", "R$ 51.800,00", "Normal"],
        ["SKU-0221", "Válvula Pneumática", "0 un", "8 un", "R$ 290,00", "#VALUE!", "RUPTURA"],
        ["SKU-0315", "Módulo Relé 8CH", "92 un", "20 un", "R$ 95,00", "R$ 8.740,00", "Excedente"]
      ],
      sheetHeaders: ["Código SKU", "Descrição Produto", "Saldo Físico", "Estoque Mínimo", "Preço Custo", "Total R$", "Situação"],
      appRows: [
        { name: "Sensor Industrial X4", company: "SKU-0012", value: "45 un (R$ 17.100)", stage: "Normal", stageColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", owner: "Almoxarifado 01", lastContact: "Hoje, 11:30", score: "96% Disp." },
        { name: "Cabo Blindado 50m", company: "SKU-0089", value: "3 un (R$ 435)", stage: "Crítico (Abaixo Min.)", stageColor: "bg-rose-500/20 text-rose-400 border-rose-500/30", owner: "Almoxarifado 02", lastContact: "Hoje, 08:45", score: "Repor 12 un" },
        { name: "Controlador PLC-200", company: "SKU-0104", value: "28 un (R$ 51.800)", stage: "Normal", stageColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", owner: "Almoxarifado 01", lastContact: "Ontem", score: "100% Disp." },
        { name: "Válvula Pneumática", company: "SKU-0221", value: "0 un (R$ 0)", stage: "Esgotado / Ruptura", stageColor: "bg-rose-500/20 text-rose-400 border-rose-500/30", owner: "Fornecedor Notificado", lastContact: "Hoje, 10:12", score: "Ordem Aberta" },
        { name: "Módulo Relé 8CH", company: "SKU-0315", value: "92 un (R$ 8.740)", stage: "Excedente", stageColor: "bg-blue-500/20 text-blue-400 border-blue-500/30", owner: "Almoxarifado 03", lastContact: "3 dias atrás", score: "Alto Estoque" }
      ]
    },
    financeiro: {
      name: "Fluxo de Caixa & Despesas",
      sheetTitle: "Controle_Financeiro_Geral_Caixa_2026.xlsx",
      kpis: [
        { label: "Receita Realizada", value: "R$ 318.400", change: "+14.2% vs mês ant.", isPositive: true },
        { label: "Despesas Operacionais", value: "R$ 142.120", change: "-6% economia", isPositive: true },
        { label: "Margem Líquida", value: "55.3%", change: "+4.5 pts perc.", isPositive: true },
        { label: "Títulos a Vencer (7d)", value: "R$ 18.250", change: "3 faturas", isPositive: false }
      ],
      chartTitle: "DRE Sintético e Projeção de Caixa",
      chartLabels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Atual"],
      chartData: [180, 215, 260, 290, 318],
      sheetRows: [
        ["03/10/2026", "Mensalidade Contrato #402", "Receita", "R$ 18.500", "Banco Inter", "Confirmado", "OK"],
        ["05/10/2026", "Servidores AWS & Cloud", "Despesa", "R$ 4.820", "Cartão Corp.", "#REF! cotação", "Pendente"],
        ["08/10/2026", "Folha de Pagamento Equipe", "Despesa", "R$ 94.000", "Itaú", "R$ 94.000", "Pago"],
        ["10/10/2026", "Licença Software CRM", "Despesa", "R$ 1.950", "Cartão Corp.", "#VALUE!", "Agendado"],
        ["11/10/2026", "Consultoria Empresa Alfa", "Receita", "R$ 35.000", "Bradesco", "R$ 35.000", "Liquidado"]
      ],
      sheetHeaders: ["Data", "Descrição da Transação", "Tipo", "Valor Bruto", "Conta/Banco", "Conciliação", "Status"],
      appRows: [
        { name: "Mensalidade Contrato #402", company: "Cliente Enterprise", value: "+ R$ 18.500,00", stage: "Receita Confirmada", stageColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", owner: "Banco Inter", lastContact: "Hoje, 08:30", score: "NF #891" },
        { name: "Servidores AWS & Cloud", company: "Infraestrutura TI", value: "- R$ 4.820,00", stage: "Despesa Agendada", stageColor: "bg-amber-500/20 text-amber-400 border-amber-500/30", owner: "Cartão Corp.", lastContact: "Hoje, 13:00", score: "Débito Automático" },
        { name: "Folha de Pagamento Equipe", company: "Recursos Humanos", value: "- R$ 94.000,00", stage: "Liquidado", stageColor: "bg-blue-500/20 text-blue-400 border-blue-500/30", owner: "Itaú PJ", lastContact: "08/10/2026", score: "Comp. Enviado" },
        { name: "Licença Software CRM", company: "Operações", value: "- R$ 1.950,00", stage: "Aprovado p/ Pagamento", stageColor: "bg-purple-500/20 text-purple-400 border-purple-500/30", owner: "Diretoria", lastContact: "Hoje, 15:40", score: "Aprovação OK" },
        { name: "Consultoria Empresa Alfa", company: "Contrato Projeto", value: "+ R$ 35.000,00", stage: "Receita Confirmada", stageColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", owner: "Bradesco PJ", lastContact: "Hoje, 16:10", score: "NF #892" }
      ]
    }
  };

  let currentPreset = 'crm';
  let currentMode = 'app'; // 'app' or 'sheet'
  let chartInstance = null;

  // DOM Elements for Before/After Showcase
  const btnToggleSheet = document.getElementById('btn-mode-sheet');
  const btnToggleApp = document.getElementById('btn-mode-app');
  const containerSheetView = document.getElementById('view-sheet');
  const containerAppView = document.getElementById('view-app');
  const presetSelectorButtons = document.querySelectorAll('[data-preset]');

  // Initialize Showcase Views
  function renderShowcase() {
    const data = demoDatasets[currentPreset];
    if (!data) return;

    // Update active preset button styling
    presetSelectorButtons.forEach(btn => {
      const preset = btn.getAttribute('data-preset');
      if (preset === currentPreset) {
        btn.classList.add('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/40');
        btn.classList.remove('bg-gray-800/60', 'text-gray-400', 'border-gray-700/50');
      } else {
        btn.classList.remove('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/40');
        btn.classList.add('bg-gray-800/60', 'text-gray-400', 'border-gray-700/50');
      }
    });

    // 1. Render Spreadsheet (Antes)
    const sheetTitleEl = document.getElementById('sheet-filename');
    if (sheetTitleEl) sheetTitleEl.textContent = data.sheetTitle;

    const sheetTableHead = document.getElementById('sheet-table-head');
    if (sheetTableHead) {
      sheetTableHead.innerHTML = `<tr>
        <th class="spreadsheet-header w-10">#</th>
        ${data.sheetHeaders.map(h => `<th class="spreadsheet-header px-3 py-2 text-left">${h}</th>`).join('')}
      </tr>`;
    }

    const sheetTableBody = document.getElementById('sheet-table-body');
    if (sheetTableBody) {
      sheetTableBody.innerHTML = data.sheetRows.map((row, idx) => {
        return `<tr class="hover:bg-gray-800/40 transition">
          <td class="spreadsheet-cell text-center text-gray-500 bg-gray-900/50 font-bold">${idx + 1}</td>
          ${row.map(cell => {
            let errorClass = "";
            if (cell.includes('#REF!') || cell.includes('#VALUE!')) {
              errorClass = "bg-rose-950/60 text-rose-300 font-bold border-rose-800 animate-pulse";
            }
            return `<td class="spreadsheet-cell text-gray-300 ${errorClass}">${cell}</td>`;
          }).join('')}
        </tr>`;
      }).join('');
    }

    // 2. Render App (Depois)
    const appTitleEl = document.getElementById('app-system-title');
    if (appTitleEl) appTitleEl.textContent = data.name;

    // Render KPIs
    const kpisContainer = document.getElementById('app-kpis-container');
    if (kpisContainer) {
      kpisContainer.innerHTML = data.kpis.map(k => `
        <div class="bg-gray-800/50 border border-gray-700/60 rounded-xl p-3.5 backdrop-blur-sm">
          <p class="text-xs text-gray-400 font-medium">${k.label}</p>
          <div class="flex items-baseline justify-between mt-1.5">
            <h4 class="text-xl font-bold text-white tracking-tight">${k.value}</h4>
            <span class="text-xs font-semibold px-2 py-0.5 rounded-full ${k.isPositive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}">${k.change}</span>
          </div>
        </div>
      `).join('');
    }

    // Render App Rows
    const appTableBody = document.getElementById('app-table-body');
    if (appTableBody) {
      appTableBody.innerHTML = data.appRows.map(row => `
        <tr class="hover:bg-gray-800/40 border-b border-gray-800/60 transition group">
          <td class="py-3 px-4 font-semibold text-white flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">
              ${row.name.charAt(0)}
            </div>
            <div>
              <div>${row.name}</div>
              <div class="text-xs text-gray-400 font-normal">${row.company}</div>
            </div>
          </td>
          <td class="py-3 px-4 text-emerald-300 font-mono font-bold">${row.value}</td>
          <td class="py-3 px-4">
            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${row.stageColor}">
              <span class="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
              ${row.stage}
            </span>
          </td>
          <td class="py-3 px-4 text-xs text-gray-400">${row.owner}</td>
          <td class="py-3 px-4 text-xs text-gray-400">${row.lastContact}</td>
          <td class="py-3 px-4 text-right">
            <span class="text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-800/50">
              ${row.score}
            </span>
          </td>
        </tr>
      `).join('');
    }

    // Update Chart.js if canvas exists
    updateMiniChart(data);

    // Refresh icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function updateMiniChart(data) {
    const canvas = document.getElementById('app-kpi-chart');
    if (!canvas || !window.Chart) return;

    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = canvas.getContext('2d');
    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.chartLabels,
        datasets: [{
          label: data.chartTitle,
          data: data.chartData,
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.12)',
          fill: true,
          tension: 0.4,
          borderWidth: 2,
          pointBackgroundColor: '#10b981',
          pointBorderColor: '#ffffff',
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0f172a',
            titleColor: '#f8fafc',
            bodyColor: '#10b981',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            padding: 10,
            displayColors: false
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#64748b', font: { size: 10 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#64748b', font: { size: 10 } }
          }
        }
      }
    });
  }

  // Toggle Mode Events
  if (btnToggleSheet && btnToggleApp) {
    btnToggleSheet.addEventListener('click', () => {
      currentMode = 'sheet';
      btnToggleSheet.classList.add('bg-gray-800', 'text-white', 'shadow-md');
      btnToggleSheet.classList.remove('text-gray-400');
      btnToggleApp.classList.remove('bg-emerald-500', 'text-white', 'shadow-lg');
      btnToggleApp.classList.add('text-gray-400');

      containerSheetView.classList.remove('hidden');
      containerAppView.classList.add('hidden');
    });

    btnToggleApp.addEventListener('click', () => {
      currentMode = 'app';
      btnToggleApp.classList.add('bg-emerald-500', 'text-white', 'shadow-lg');
      btnToggleApp.classList.remove('text-gray-400');
      btnToggleSheet.classList.remove('bg-gray-800', 'text-white', 'shadow-md');
      btnToggleSheet.classList.add('text-gray-400');

      containerAppView.classList.remove('hidden');
      containerSheetView.classList.add('hidden');
      renderShowcase();
    });
  }

  // Preset Selection Events
  presetSelectorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentPreset = btn.getAttribute('data-preset');
      renderShowcase();
    });
  });

  // Initial render of showcase
  renderShowcase();


  // --- INTERACTIVE ROI CALCULATOR ---
  const teamSizeInput = document.getElementById('roi-team-size');
  const hoursPerWeekInput = document.getElementById('roi-hours-week');
  const hourlyRateInput = document.getElementById('roi-hourly-rate');

  const teamSizeVal = document.getElementById('roi-team-size-val');
  const hoursPerWeekVal = document.getElementById('roi-hours-week-val');
  const hourlyRateVal = document.getElementById('roi-hourly-rate-val');

  const resAnnualHours = document.getElementById('roi-annual-hours');
  const resAnnualSavings = document.getElementById('roi-annual-savings');
  const resMonthlySavings = document.getElementById('roi-monthly-savings');

  function calculateROI() {
    if (!teamSizeInput || !hoursPerWeekInput || !hourlyRateInput) return;

    const team = parseInt(teamSizeInput.value, 10);
    const hours = parseInt(hoursPerWeekInput.value, 10);
    const rate = parseInt(hourlyRateInput.value, 10);

    teamSizeVal.textContent = `${team} ${team === 1 ? 'colaborador' : 'colaboradores'}`;
    hoursPerWeekVal.textContent = `${hours} horas / semana`;
    hourlyRateVal.textContent = `R$ ${rate},00 / hora`;

    // 48 working weeks per year, 75% efficiency gain with specialized software
    const hoursWastedYear = team * hours * 48;
    const hoursSavedYear = Math.round(hoursWastedYear * 0.75);
    const annualMoneySaved = hoursSavedYear * rate;
    const monthlyMoneySaved = Math.round(annualMoneySaved / 12);

    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

    if (resAnnualHours) resAnnualHours.textContent = `${hoursSavedYear.toLocaleString('pt-BR')} horas`;
    if (resAnnualSavings) resAnnualSavings.textContent = formatter.format(annualMoneySaved);
    if (resMonthlySavings) resMonthlySavings.textContent = formatter.format(monthlyMoneySaved);
  }

  if (teamSizeInput && hoursPerWeekInput && hourlyRateInput) {
    teamSizeInput.addEventListener('input', calculateROI);
    hoursPerWeekInput.addEventListener('input', calculateROI);
    hourlyRateInput.addEventListener('input', calculateROI);
    calculateROI();
  }


  // --- INTERACTIVE FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerEl = item.querySelector('.faq-answer');
    const iconEl = item.querySelector('.faq-icon');

    if (questionBtn && answerEl) {
      questionBtn.addEventListener('click', () => {
        const isOpen = !answerEl.classList.contains('hidden');

        // Close all other FAQs
        faqItems.forEach(otherItem => {
          otherItem.querySelector('.faq-answer')?.classList.add('hidden');
          otherItem.querySelector('.faq-icon')?.classList.remove('rotate-180');
        });

        // Toggle this FAQ
        if (!isOpen) {
          answerEl.classList.remove('hidden');
          iconEl?.classList.add('rotate-180');
        }
      });
    }
  });


  // --- QUICK MODAL FOR CREATING NEW RECORD IN SANDBOX ---
  const btnNewRecord = document.getElementById('btn-sandbox-new-record');
  const modalNewRecord = document.getElementById('modal-new-record');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const formNewRecord = document.getElementById('form-new-record');
  const toastSync = document.getElementById('toast-sync');

  if (btnNewRecord && modalNewRecord) {
    btnNewRecord.addEventListener('click', () => {
      modalNewRecord.classList.remove('hidden');
      modalNewRecord.classList.add('flex');
    });
  }

  if (btnCloseModal && modalNewRecord) {
    btnCloseModal.addEventListener('click', () => {
      modalNewRecord.classList.add('hidden');
      modalNewRecord.classList.remove('flex');
    });
  }

  if (formNewRecord) {
    formNewRecord.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('input-rec-name')?.value || "Novo Registro";
      const company = document.getElementById('input-rec-company')?.value || "Empresa Exemplo";
      const value = document.getElementById('input-rec-value')?.value || "R$ 15.000";

      // Add record to current dataset
      demoDatasets[currentPreset].appRows.unshift({
        name,
        company,
        value,
        stage: "Recém Adicionado",
        stageColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        owner: "Você (Admin)",
        lastContact: "Agora",
        score: "100/100"
      });

      // Close modal
      modalNewRecord.classList.add('hidden');
      modalNewRecord.classList.remove('flex');
      formNewRecord.reset();

      // Rerender
      renderShowcase();

      // Show instant Google Sheets sync toast
      showSyncToast("Registro gravado e sincronizado com a planilha em tempo real!");

      // Fire confetti
      if (window.confetti) {
        window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      }
    });
  }

  function showSyncToast(message) {
    if (!toastSync) return;
    const msgEl = document.getElementById('toast-sync-msg');
    if (msgEl) msgEl.textContent = message;

    toastSync.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    toastSync.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toastSync.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
      toastSync.classList.remove('translate-y-0', 'opacity-100');
    }, 4500);
  }


  // --- LEAD DIAGNOSTIC FORM SUBMISSION ---
  const leadForm = document.getElementById('lead-diagnostic-form');
  const leadSuccessModal = document.getElementById('lead-success-modal');
  const btnCloseSuccess = document.getElementById('btn-close-lead-success');

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('lead-name')?.value || "";
      const phone = document.getElementById('lead-phone')?.value || "";
      const sheetType = document.getElementById('lead-sheet-type')?.value || "Geral";

      // Trigger Confetti
      if (window.confetti) {
        window.confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      // Populate WhatsApp link on success modal
      const btnWhatsapp = document.getElementById('btn-lead-whatsapp');
      if (btnWhatsapp) {
        const text = encodeURIComponent(`Olá! Me chamo ${name}. Gostaria de solicitar um diagnóstico gratuito para transformar minha planilha de ${sheetType} em um aplicativo profissional.`);
        btnWhatsapp.href = `https://api.whatsapp.com/send?phone=5511999999999&text=${text}`;
      }

      if (leadSuccessModal) {
        leadSuccessModal.classList.remove('hidden');
        leadSuccessModal.classList.add('flex');
      }

      leadForm.reset();
    });
  }

  if (btnCloseSuccess && leadSuccessModal) {
    btnCloseSuccess.addEventListener('click', () => {
      leadSuccessModal.classList.add('hidden');
      leadSuccessModal.classList.remove('flex');
    });
  }

  // --- MOBILE MENU TOGGLE ---
  const btnMobileMenu = document.getElementById('btn-mobile-menu');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');

  if (btnMobileMenu && mobileNavMenu) {
    btnMobileMenu.addEventListener('click', () => {
      mobileNavMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileNavMenu.querySelectorAll('a');
    mobileLinks.forEach(l => {
      l.addEventListener('click', () => {
        mobileNavMenu.classList.add('hidden');
      });
    });
  }
});
