/* ============================================================
   templates-pt.js — Brazilian Portuguese template detail pages.

   "Cronograma" leads throughout: it is what Brazilian searchers type
   ("cronograma de obra", "cronograma de projeto") and carries far more
   volume than any Gantt phrasing. "Gráfico de Gantt" is used where the
   page is genuinely about the chart.

   Domain vocabulary follows Brazilian practice: canteiro de obras,
   habite-se and alvará on the construction pages, TR/RT and ANVISA
   where regulatory steps matter, ICMS-free wording avoided since
   nothing here is transactional.

   metaTitle budget is 47 characters — the renderer appends the 13-char
   " | gantts.app" suffix.
   ============================================================ */

const T = {

'project-management': {
  card: 'Plano genérico em cinco fases, da abertura ao encerramento.',
  h1: 'Modelo de cronograma de projeto (gráfico de Gantt)',
  metaTitle: 'Modelo de cronograma de projeto',
  metaDesc: 'Modelo gratuito de cronograma de projeto: iniciação, planejamento, execução, monitoramento e encerramento.',
  lead: 'Um <strong>modelo de cronograma de projeto</strong> genérico, em cinco fases clássicas. Serve quando o projeto não pertence a um setor específico e o que falta é um formato limpo para começar.',
  intro: 'Cinco fases, da abertura ao encerramento:',
  phases: [
    ['Iniciação', 'Objetivos, escopo, partes interessadas, orçamento preliminar. <em>Marco: projeto autorizado.</em>'],
    ['Planejamento', 'Divisão em pacotes, estimativas, precedências, recursos e riscos.'],
    ['Execução', 'Realização dos pacotes, reuniões de acompanhamento, tratamento de desvios.'],
    ['Monitoramento', 'Controle de prazo e custo, decisões, pedidos de mudança.'],
    ['Encerramento', 'Entrega, documentação, lições aprendidas. <em>Marco: projeto encerrado.</em>'],
  ],
  callout: 'Monitoramento não é uma fase depois da execução: corre em paralelo do começo ao fim. Representá-lo como barra separada ao final é o erro mais comum neste modelo — e passa a impressão de que o controle só começa quando o trabalho acaba.',
  customize: [
    'Renomeie as fases conforme a metodologia interna, se ela impuser vocabulário próprio.',
    'Acrescente uma linha por pacote de trabalho sob cada fase.',
    'Coloque marcos de aprovação onde um comitê realmente decide.',
    'Estenda a barra de monitoramento por toda a duração, não só no final.',
  ],
  tips: [
    '<strong>Cinco a dez marcos bastam</strong> para um projeto de vários meses.',
    '<strong>Ligue o que realmente espera</strong>, não o que está em sequência na lista.',
    '<strong>Confira a carga depois de fechar as datas</strong>, nunca antes.',
    '<strong>Guarde a linha de base</strong> para medir os desvios mais adiante.',
  ],
  faq: [
    ['Este modelo serve para qualquer projeto?', 'Serve para projetos com prazo e sequência. Para operação contínua ou escopo aberto, um quadro Kanban é mais adequado.'],
    ['Quantos pacotes de trabalho usar?', 'De 20 a 60 linhas continuam legíveis. Acima de 150, o cronograma deixa de ser mantido.'],
    ['Preciso de uma fase separada de monitoramento?', 'O monitoramento é contínuo. Represente-o como barra paralela, não como etapa final.'],
  ],
  related: [['simple', 'Modelo simples'], ['product-launch', 'Lançamento de produto'], ['construction', 'Cronograma de obra']],
},

'product-launch': {
  card: 'Pesquisa, preparação do produto, materiais, campanha e dia do lançamento.',
  h1: 'Modelo de cronograma para lançamento de produto',
  metaTitle: 'Cronograma de lançamento de produto',
  metaDesc: 'Modelo gratuito para lançamento de produto: pesquisa de mercado, preparação, materiais comerciais, campanha e lançamento.',
  lead: 'Um <strong>cronograma de lançamento de produto</strong> se planeja de trás para frente: tudo se ajusta à data de entrada no mercado, porque é a única data que não se move sem custo.',
  intro: 'Quatro fases convergindo para o dia do lançamento:',
  phases: [
    ['Pesquisa e posicionamento', 'Mercado, concorrência, público, mensagem e preço. <em>Marco: posicionamento aprovado.</em>'],
    ['Preparação do produto', 'Finalização, versão beta, correções, embalagem e homologações quando aplicável.'],
    ['Materiais e preparação comercial', 'Site, documentação, argumentário, treinamento do time de vendas.'],
    ['Campanha e lançamento', 'Assessoria, campanha, dia do lançamento, primeiros retornos. <em>Marco: produto no mercado.</em>'],
  ],
  callout: 'Homologações e certificações entram cedo e com folga. Não dependem de você, são sistematicamente subestimadas e aparecem no caminho crítico da maioria dos lançamentos de produto físico.',
  customize: [
    'Mova a data de lançamento: todo o cronograma recua junto.',
    'Acrescente uma linha por praça se o lançamento for escalonado por região.',
    'Coloque o treinamento comercial antes da campanha, não depois.',
    'Inclua uma fase de acompanhamento pós-lançamento — quase sempre esquecida.',
  ],
  tips: [
    '<strong>Planeje a partir do dia do lançamento.</strong> É a data menos negociável.',
    '<strong>A beta precisa terminar antes da campanha</strong>, senão você promete o que não existe.',
    '<strong>O time comercial precisa de tempo</strong> para absorver um discurso novo.',
    '<strong>Deixe duas semanas de folga antes</strong> do lançamento, não depois.',
  ],
  faq: [
    ['Quanto tempo leva um lançamento de produto?', 'De três a nove meses conforme a complexidade. Homologações e produção alongam bastante o prazo.'],
    ['O que costuma ficar no caminho crítico?', 'Normalmente a disponibilidade real do produto e as homologações, raramente a campanha.'],
    ['Preciso planejar o pós-lançamento?', 'Sim. Os primeiros retornos, correções e ajustes de discurso chegam em até quatro semanas e merecem estar no plano.'],
  ],
  related: [['marketing', 'Campanha de marketing'], ['product-roadmap', 'Roadmap de produto'], ['content-calendar', 'Calendário editorial']],
},

'event-planning': {
  card: 'Local, fornecedores, inscrições, montagem e desmontagem em torno de uma data fixa.',
  h1: 'Modelo de cronograma para organização de eventos',
  metaTitle: 'Cronograma de evento — modelo',
  metaDesc: 'Modelo gratuito para organizar eventos: local, fornecedores, programação, inscrições, montagem, realização e desmontagem.',
  lead: 'Um <strong>cronograma de evento</strong> parte de uma data que não se move. Tudo se calcula de trás para frente a partir do dia do evento, porque essa é a única restrição realmente inegociável.',
  intro: 'Seis fases, do conceito à desmontagem:',
  phases: [
    ['Conceito e local', 'Objetivos, orçamento, público estimado, data e reserva do espaço. <em>Marco: local confirmado.</em>'],
    ['Fornecedores', 'Buffet, som e imagem, mobiliário, segurança, transporte — contratados por ordem de escassez.'],
    ['Programação e palestrantes', 'Roteiro, confirmações, materiais e ensaios.'],
    ['Comunicação e inscrições', 'Site, campanha, abertura das inscrições e lembretes.'],
    ['Montagem e ensaio geral', 'Produção, montagem, teste técnico, passagem de som. <em>Marco: tudo pronto.</em>'],
    ['Realização e desmontagem', 'Evento, desmontagem, prestação de contas e pesquisa de satisfação.'],
  ],
  callout: 'O teste técnico merece barra própria, não uma nota de rodapé. A falha mais comum e mais visível de um evento é de som ou projeção — e ela sempre aparece quando já não há tempo.',
  customize: [
    'Altere a data do evento: todo o cronograma se reposiciona sozinho.',
    'Acrescente uma linha por sala se houver sessões simultâneas.',
    'Coloque o encerramento das inscrições como marco — ele define buffet e montagem.',
    'Mantenha desmontagem e prestação de contas no cronograma: fazem parte do projeto.',
  ],
  tips: [
    '<strong>O local primeiro.</strong> Define capacidade, data e boa parte do orçamento.',
    '<strong>As confirmações chegam tarde.</strong> Encerre as inscrições antes do prazo que o buffet precisa.',
    '<strong>O dia do evento merece um roteiro por horário</strong>, separado do cronograma geral.',
    '<strong>Deixe folga na véspera.</strong> É quando os problemas de montagem aparecem.',
  ],
  faq: [
    ['Com quanta antecedência organizar um evento?', 'De três a seis meses para um evento corporativo médio; um congresso pode exigir um ano. O local é o fator limitante.'],
    ['O que fica no caminho crítico?', 'O local e depois os fornecedores mais escassos. O restante costuma se ajustar.'],
    ['Preciso planejar a desmontagem?', 'Sim. Desmontagem, devolução de equipamento alugado e prestação de contas são as tarefas mais esquecidas.'],
  ],
  related: [['wedding-planning', 'Casamento'], ['marketing', 'Campanha de marketing'], ['project-management', 'Cronograma de projeto']],
},

'simple': {
  card: 'O essencial: poucas fases, tarefas e marcos.',
  h1: 'Modelo simples de gráfico de Gantt',
  metaTitle: 'Modelo simples de gráfico de Gantt',
  metaDesc: 'Modelo simples e gratuito de gráfico de Gantt: poucas fases, tarefas e marcos, sem complexidade desnecessária.',
  lead: 'Um <strong>modelo simples</strong>, propositalmente enxuto: três fases, cerca de quinze tarefas e alguns marcos. É o ponto de partida certo para quem está começando ou para projetos curtos.',
  intro: 'Três fases e nada supérfluo:',
  phases: [
    ['Preparação', 'Definições iniciais, decisões e organização. <em>Marco: começou.</em>'],
    ['Execução', 'O grosso do trabalho, dividido em tarefas de um dia a uma semana.'],
    ['Encerramento', 'Conferência, entrega e avaliação. <em>Marco: concluído.</em>'],
  ],
  callout: 'Comece mais simples do que parece necessário. É fácil acrescentar linhas a um cronograma que funciona; é muito difícil tornar legível um que nasceu com duzentas tarefas.',
  customize: [
    'Acrescente uma fase se houver uma etapa de aprovação externa.',
    'Renomeie as fases com o vocabulário da sua equipe.',
    'Ligue apenas as tarefas que realmente esperam umas pelas outras.',
    'Apague sem hesitar o que não serve — é justamente a vantagem de um modelo simples.',
  ],
  tips: [
    '<strong>De quinze a vinte e cinco tarefas bastam</strong> para a maioria dos projetos curtos.',
    '<strong>Nenhuma tarefa abaixo de um dia.</strong> Mais fino que isso é lista de afazeres.',
    '<strong>Três marcos valem mais que dez</strong> num cronograma curto.',
    '<strong>Acrescente complexidade quando ela fizer falta</strong>, não por antecipação.',
  ],
  faq: [
    ['Para quem é este modelo?', 'Para projetos curtos e para quem está começando com gráficos de Gantt. Cabe em uma página e se explica em um minuto.'],
    ['Dá para ampliar depois?', 'Sim. Acrescentar fases, tarefas e ligações não exige refazer o cronograma.'],
    ['Quanto tempo leva para preencher?', 'Cerca de vinte minutos se você já souber o que precisa ser feito.'],
  ],
  related: [['project-management', 'Cronograma de projeto'], ['weekly', 'Cronograma semanal'], ['monthly', 'Cronograma mensal']],
},

'construction': {
  card: 'Licenças, terraplenagem, estrutura, acabamentos e entrega.',
  h1: 'Modelo de cronograma de obra (gráfico de Gantt)',
  metaTitle: 'Cronograma de obra — modelo Gantt',
  metaDesc: 'Modelo gratuito de cronograma de obra: projeto, licenças, terraplenagem, estrutura, vedação, acabamentos e entrega.',
  lead: 'Um <strong>cronograma de obra</strong> quase sempre esbarra no mesmo ponto: quem define a data não é a construção, é o licenciamento. A parte visível do projeto é também a mais previsível.',
  intro: 'Seis fases, do projeto à entrega:',
  phases: [
    ['Projeto e licenças', 'Projeto executivo, protocolo, análise, alvará de construção. <em>A etapa mais longa e menos controlável.</em>'],
    ['Canteiro e terraplenagem', 'Instalação do canteiro, terraplenagem, fundações, redes enterradas.'],
    ['Estrutura', 'Estrutura, lajes, alvenaria estrutural, cobertura.'],
    ['Vedação e cobertura', 'Telhado, esquadrias externas, impermeabilização. <em>Marco: obra fechada.</em>'],
    ['Acabamentos e instalações', 'Divisórias, elétrica, hidráulica, climatização, revestimentos, pintura.'],
    ['Entrega', 'Testes, correção de pendências, vistoria e habite-se. <em>Marco: obra entregue.</em>'],
  ],
  callout: 'O acabamento não começa antes de a obra estar fechada. É a precedência mais determinante de todo o cronograma, e a que transforma um atraso de cobertura em atraso de entrega.',
  customize: [
    'Acrescente uma linha por disciplina se houver várias empreiteiras.',
    'Marque as tarefas sensíveis à chuva e dê folga a elas no período chuvoso.',
    'Coloque a emissão do alvará como precedência de qualquer atividade em campo.',
    'Separe entrega e correção de pendências: são etapas distintas.',
  ],
  tips: [
    '<strong>Licenciamento se planeja em meses</strong>, não em semanas.',
    '<strong>Obra fechada é o marco de virada</strong> do cronograma.',
    '<strong>A simultaneidade de equipes se resolve por recursos</strong>, não só por datas.',
    '<strong>Preveja a correção de pendências.</strong> Ela sempre aparece.',
  ],
  faq: [
    ['Quanto tempo dura uma obra?', 'A construção em si costuma levar de 8 a 18 meses para uma edificação comum. Com projeto e licenças, bem mais.'],
    ['O que fica no caminho crítico?', 'Quase sempre o licenciamento, e depois a sequência estrutura — vedação — acabamento.'],
    ['Como lidar com a chuva?', 'Marcando as tarefas afetadas e dando folga sazonal a elas, em vez de torcer por um ano seco.'],
  ],
  related: [['home-renovation', 'Reforma'], ['data-center-build-schedule', 'Data center'], ['office-relocation-project-plan', 'Mudança de escritório']],
},

'marketing': {
  card: 'Estratégia, criação, produção, aprovações, veiculação e análise.',
  h1: 'Modelo de cronograma para campanha de marketing',
  metaTitle: 'Cronograma de campanha de marketing',
  metaDesc: 'Modelo gratuito para campanha de marketing: estratégia, criação, produção, aprovações, veiculação multicanal e análise.',
  lead: 'Um <strong>cronograma de campanha</strong> raramente falha na criação. Falha nas aprovações — o tempo morto entre a peça pronta e a publicação, que quase nenhum plano prevê.',
  intro: 'Cinco fases, da estratégia à análise:',
  phases: [
    ['Estratégia', 'Objetivos, público, mensagem, canais e verba. <em>Marco: briefing aprovado.</em>'],
    ['Criação', 'Conceitos, desdobramentos, textos e peças visuais.'],
    ['Produção', 'Execução das peças por canal — cada um com seu prazo.'],
    ['Aprovações', 'Revisão, aprovação da área, jurídico quando necessário. <em>A etapa mais subestimada.</em>'],
    ['Veiculação e análise', 'Publicação, mídia paga, acompanhamento de resultados, relatório. <em>Marco: campanha no ar.</em>'],
  ],
  callout: 'Dê às aprovações uma barra visível. Na maioria das organizações, uma peça pronta fica três dias esperando uma assinatura — isso não é tempo de produção, é tempo de espera, e precisa aparecer no cronograma.',
  customize: [
    'Uma linha por canal: cada um tem prazo de produção próprio.',
    'Coloque as datas de veiculação como restrições fixas e planeje de trás para frente.',
    'Preveja um ciclo extra de aprovação em campanhas de setores regulados.',
    'Acrescente uma fase de análise de quatro a seis semanas após o lançamento.',
  ],
  tips: [
    '<strong>Vídeo leva mais tempo que texto.</strong> Comece em paralelo, não depois.',
    '<strong>Conte com dois ciclos de aprovação</strong>, não um.',
    '<strong>Reserve 20% do cronograma</strong> para imprevisto e oportunidade.',
    '<strong>A análise faz parte da campanha</strong>, não da próxima.',
  ],
  faq: [
    ['Quanto tempo para preparar uma campanha?', 'De quatro a doze semanas conforme o número de canais e o peso das aprovações.'],
    ['Qual o principal motivo de atraso?', 'As aprovações internas, à frente da própria produção.'],
    ['Preciso de um cronograma por canal?', 'Uma linha por canal num cronograma único basta, desde que os prazos próprios de cada um apareçam.'],
  ],
  related: [['content-calendar', 'Calendário editorial'], ['product-launch', 'Lançamento de produto'], ['event-planning', 'Evento']],
},

'software-development': {
  card: 'Requisitos, arquitetura, desenvolvimento, homologação e produção.',
  h1: 'Modelo de cronograma para projeto de software',
  metaTitle: 'Cronograma de projeto de software',
  metaDesc: 'Modelo gratuito para projeto de software: requisitos, arquitetura, desenvolvimento, integração, homologação e produção.',
  lead: 'Um <strong>cronograma de projeto de software</strong> tem uma armadilha recorrente: a homologação é planejada como uma barra curta no fim e leva o dobro. Teste e correção formam um ciclo, não uma linha reta.',
  intro: 'Seis fases, dos requisitos à produção:',
  phases: [
    ['Requisitos', 'Necessidades, casos de uso, critérios de aceite. <em>Marco: escopo congelado.</em>'],
    ['Arquitetura', 'Decisões técnicas, modelo de dados, integrações, ambientes.'],
    ['Desenvolvimento', 'Execução em iterações, revisão de código, integração contínua.'],
    ['Integração e homologação', 'Montagem, testes funcionais, correções — em ciclo com o desenvolvimento.'],
    ['Migração de dados', 'Extração, mapeamento, migrações de ensaio. <em>Várias rodadas, nunca uma só.</em>'],
    ['Entrada em produção', 'Virada, monitoramento reforçado, estabilização. <em>Marco: em produção.</em>'],
  ],
  callout: 'Conte com várias migrações de ensaio, não com uma. A qualidade dos dados existentes é quase sempre pior do que o previsto, e cada rodada revela casos ausentes da especificação. Uma única migração na noite da virada é a forma clássica de errar uma entrada em produção.',
  customize: [
    'Acrescente uma linha por módulo ou por equipe se houver trabalho em paralelo.',
    'Represente a homologação em ciclo com o desenvolvimento, não em sequência.',
    'Preveja uma fase de estabilização após a virada — de duas a seis semanas.',
    'Coloque o congelamento de escopo como marco: o que entra depois empurra a produção.',
  ],
  tips: [
    '<strong>A homologação leva o dobro do previsto.</strong> Planeje assim.',
    '<strong>Teste a migração cedo</strong>, com dados reais.',
    '<strong>Evite virada na sexta-feira</strong> ou em período de fechamento.',
    '<strong>Estabilização é fase</strong>, não imprevisto.',
  ],
  faq: [
    ['O Gantt serve para projeto ágil?', 'Para o sprint, o quadro continua sendo a ferramenta. O Gantt serve para marcos, dependências externas e alinhamento com áreas não ágeis.'],
    ['Quando congelar o escopo?', 'Antes da arquitetura. Qualquer acréscimo posterior empurra a produção, e isso precisa ficar visível.'],
    ['Quantas migrações de ensaio?', 'De três a cinco conforme a qualidade dos dados atuais. Uma só nunca basta.'],
  ],
  related: [['agile', 'Projeto ágil'], ['sprint', 'Cronograma de sprint'], ['erp-implementation-schedule', 'Implantação de ERP']],
},

'agile': {
  card: 'Iterações, incrementos e marcos para um projeto ágil.',
  h1: 'Modelo de gráfico de Gantt para projeto ágil',
  metaTitle: 'Modelo de Gantt para projeto ágil',
  metaDesc: 'Modelo gratuito para projeto ágil: iterações, incrementos, marcos de entrega e dependências externas.',
  lead: 'Um <strong>projeto ágil</strong> não precisa de Gantt para conduzir os sprints — o quadro dá conta. Precisa dele para o que o quadro não mostra: dependências externas e compromissos de data.',
  intro: 'Quatro níveis que convivem:',
  phases: [
    ['Preparação', 'Visão, backlog inicial, arquitetura de partida. <em>Marco: time em operação.</em>'],
    ['Iterações', 'Sprints sucessivos de duração fixa, representados como barras regulares.'],
    ['Incrementos entregáveis', 'O que de fato sai ao fim de cada série de sprints. <em>Os marcos visíveis para fora.</em>'],
    ['Dependências externas', 'Fornecedores, aprovações, outras equipes — a razão de existir deste cronograma.'],
  ],
  callout: 'Não tente planejar o conteúdo dos sprints com seis meses de antecedência. Este cronograma serve para sustentar datas de entrega e dependências externas; o conteúdo de cada sprint se decide no último momento responsável, e é exatamente esse o ponto do método.',
  customize: [
    'Ajuste a duração das iterações à do seu time.',
    'Acrescente uma linha por dependência externa, com o responsável nomeado.',
    'Coloque os incrementos entregáveis como marcos — é o que interessa à diretoria.',
    'Deixe o conteúdo dos sprints distantes propositalmente vazio.',
  ],
  tips: [
    '<strong>O quadro conduz o sprint, o Gantt conduz os compromissos.</strong>',
    '<strong>Dependências externas são o risco real</strong> de um projeto ágil.',
    '<strong>Detalhe apenas a iteração atual e a seguinte.</strong>',
    '<strong>Um incremento entregável vale mais que um percentual de avanço.</strong>',
  ],
  faq: [
    ['Ágil e Gantt são compatíveis?', 'Sim, desde que o conteúdo dos sprints não seja planejado com antecedência. O Gantt carrega marcos e dependências, não o detalhe do backlog.'],
    ['Como representar um sprint?', 'Como uma barra de duração fixa e regular. O conteúdo se decide no início de cada sprint.'],
    ['O que mostrar à diretoria?', 'Os incrementos entregáveis e suas datas, não a velocidade nem o detalhe das tarefas.'],
  ],
  related: [['sprint', 'Cronograma de sprint'], ['software-development', 'Projeto de software'], ['product-roadmap', 'Roadmap de produto']],
},

'excel': {
  card: 'Baixe em XLSX: tabela, barras e marcos prontos para usar.',
  h1: 'Modelo de gráfico de Gantt para Excel',
  metaTitle: 'Modelo de Gantt para Excel — grátis',
  metaDesc: 'Modelo gratuito de gráfico de Gantt para Excel: arquivo XLSX com tabela de tarefas, barras e marcos já montados.',
  lead: 'Um <strong>modelo de Gantt para Excel</strong> pronto para preencher: a tabela de tarefas, as colunas auxiliares e a formatação das barras já estão montadas, resta inserir suas datas.',
  intro: 'O que o arquivo contém:',
  phases: [
    ['Tabela de tarefas', 'Tarefa, início, duração e responsável — as colunas de que tudo o mais decorre.'],
    ['Colunas auxiliares', 'O cálculo de deslocamento até o início do projeto, que viabiliza o truque das barras empilhadas.'],
    ['Gráfico', 'O gráfico de barras empilhadas já formatado, com a primeira série oculta.'],
    ['Marcos', 'Uma série separada com marcador de losango.'],
  ],
  callout: 'O Excel não recalcula precedências. Se uma tarefa atrasa, cada data de início seguinte precisa ser ajustada na mão — viável até umas vinte linhas, não além. Se o cronograma precisa se recalcular sozinho, abra-o direto no editor.',
  customize: [
    'Amplie o intervalo de datas do eixo se o projeto passar do período do modelo.',
    'Acrescente uma coluna de avanço e formatação condicional se acompanhar o realizado.',
    'Duplique a planilha por fase em projetos grandes.',
    'Proteja as colunas de cálculo se o arquivo circular.',
  ],
  tips: [
    '<strong>Preencha durações, não datas de término.</strong> Os términos se calculam.',
    '<strong>Confira a ordem inversa do eixo</strong> para a primeira tarefa ficar no topo.',
    '<strong>Acima de vinte tarefas</strong>, a manutenção manual custa mais do que rende.',
    '<strong>Exporte em PDF para distribuir</strong> em vez de enviar a planilha.',
  ],
  faq: [
    ['O modelo funciona em versões antigas do Excel?', 'Sim, usa apenas funções e gráficos padrão, sem macros.'],
    ['Dá para abrir no Google Planilhas?', 'Sim, por Arquivo → Importar. Alguns detalhes de formatação do gráfico precisam de ajuste.'],
    ['O Excel calcula caminho crítico?', 'Não. É preciso uma ferramenta de planejamento para isso.'],
  ],
  related: [['google-sheets', 'Modelo Google Planilhas'], ['powerpoint', 'Modelo PowerPoint'], ['simple', 'Modelo simples']],
},

'powerpoint': {
  card: 'Um slide pronto para apresentar: fases, barras e marcos.',
  h1: 'Modelo de gráfico de Gantt para PowerPoint',
  metaTitle: 'Modelo de Gantt para PowerPoint',
  metaDesc: 'Modelo gratuito de gráfico de Gantt para PowerPoint: slide pronto para apresentar com fases, barras e marcos.',
  lead: 'Um <strong>modelo de Gantt para PowerPoint</strong> feito para ser projetado: de seis a dez barras, rótulos legíveis à distância e três marcos em destaque. Não é um cronograma, é um slide.',
  intro: 'O que o slide contém:',
  phases: [
    ['Linha do tempo', 'Uma graduação por mês ou trimestre, conforme a duração do projeto.'],
    ['Barras de fase', 'No máximo seis a dez barras — acima disso, nada se lê da plateia.'],
    ['Marcos', 'Três losangos para os momentos que importam.'],
    ['Legenda', 'Discreta, e só se as cores carregarem informação.'],
  ],
  callout: 'Não comprima o cronograma inteiro em um slide. Apresentação e planejamento têm níveis de detalhe diferentes: o slide conta a história, o cronograma carrega o trabalho. Quarenta linhas projetadas conseguem apenas que ninguém olhe.',
  customize: [
    'Ajuste o eixo à duração real do projeto.',
    'Use as cores da sua identidade visual nas fases.',
    'Acrescente animação por fase se for apresentar em etapas.',
    'Exporte como imagem para inserir em um documento.',
  ],
  tips: [
    '<strong>De seis a dez barras no máximo</strong> em um slide projetado.',
    '<strong>Escreva os rótulos sobre as barras</strong>, não numa legenda.',
    '<strong>Três marcos em destaque</strong> bastam para sustentar a mensagem.',
    '<strong>Mantenha o cronograma em outro lugar</strong> e exporte para apresentar.',
  ],
  faq: [
    ['Dá para editar as barras facilmente?', 'Sim, são formas padrão: movem-se e redimensionam-se diretamente.'],
    ['Como manter o slide atualizado?', 'Mantenha o cronograma numa ferramenta de planejamento e reexporte o slide quando ele mudar.'],
    ['Qual tamanho de fonte usar?', 'No mínimo 14 pontos para projeção. O que parece pequeno na tela fica ilegível numa sala.'],
  ],
  related: [['excel', 'Modelo Excel'], ['one-page-gantt-chart', 'Cronograma em uma página'], ['printable-gantt-chart', 'Versão para impressão']],
},

'weekly': {
  card: 'Uma semana dia a dia, para uma equipe ou um projeto curto.',
  h1: 'Modelo de cronograma semanal (gráfico de Gantt)',
  metaTitle: 'Cronograma semanal — modelo',
  metaDesc: 'Modelo gratuito de cronograma semanal em gráfico de Gantt: cinco dias, tarefas por pessoa e marco de fechamento.',
  lead: 'Um <strong>cronograma semanal</strong> em gráfico de Gantt mostra o que uma lista não mostra: quem faz o quê ao mesmo tempo, e em que dia a semana já está cheia.',
  intro: 'Cinco dias, divididos em meios-períodos:',
  phases: [
    ['Segunda — alinhamento', 'Reunião de abertura, prioridades da semana, distribuição.'],
    ['Terça a quinta — produção', 'O grosso do trabalho, uma barra por tarefa e por pessoa.'],
    ['Sexta — fechamento', 'Conferência, entrega, reunião de encerramento. <em>Marco: semana fechada.</em>'],
  ],
  callout: 'Não preencha os cinco dias a 100%. Uma semana planejada no limite não absorve nenhuma urgência, e sempre aparece uma. De setenta a oitenta por cento de carga planejada é um ritmo sustentável.',
  customize: [
    'Passe para meios-períodos ou horas se as tarefas forem curtas.',
    'Acrescente uma linha por pessoa para enxergar a carga real.',
    'Bloqueie as reuniões recorrentes como tarefas fixas.',
    'Duplique a semana como ponto de partida da seguinte.',
  ],
  tips: [
    '<strong>Planeje 70 a 80% da capacidade</strong>, não 100%.',
    '<strong>Bloqueie as reuniões primeiro</strong>, elas não se movem.',
    '<strong>Uma linha por pessoa</strong> torna a sobrecarga imediatamente visível.',
    '<strong>Feche na sexta:</strong> o que não terminou se replaneja, não se arrasta.',
  ],
  faq: [
    ['Vale a pena um Gantt para uma semana?', 'Sim, sempre que houver várias pessoas ou tarefas que esperam umas pelas outras. Para uma lista individual, uma to-do basta.'],
    ['Qual granularidade usar?', 'Meio-período serve à maioria das equipes. Hora a hora só se justifica em intervenções curtas.'],
    ['O que fazer com tarefas não concluídas?', 'Replanejá-las explicitamente na semana seguinte, em vez de deixá-las escorrer.'],
  ],
  related: [['monthly', 'Cronograma mensal'], ['simple', 'Modelo simples'], ['sprint', 'Cronograma de sprint']],
},

'monthly': {
  card: 'Um mês em semanas: marcos, prazos e carga por pessoa.',
  h1: 'Modelo de cronograma mensal (gráfico de Gantt)',
  metaTitle: 'Cronograma mensal — modelo',
  metaDesc: 'Modelo gratuito de cronograma mensal em gráfico de Gantt: quatro a cinco semanas, marcos, prazos e carga.',
  lead: 'Um <strong>cronograma mensal</strong> trabalha em semanas. É a granularidade certa para coordenar uma equipe: fina o bastante para ser acionável, larga o bastante para um mês caber em uma página.',
  intro: 'Quatro a cinco semanas e os prazos do mês:',
  phases: [
    ['Semana 1', 'Início das frentes do mês, retomada do que sobrou do anterior.'],
    ['Semanas 2 e 3', 'Produção, ponto de meio de mês, ajuste de prioridades.'],
    ['Semana 4', 'Finalização, entregas, fechamento. <em>Marco: prazos do mês cumpridos.</em>'],
  ],
  callout: 'Coloque os prazos fixos do mês antes de tudo. Faturamento, relatórios, comitês e fechamento contábil não se movem — o trabalho se organiza em torno deles, não o contrário.',
  customize: [
    'Acrescente uma linha por pessoa ou por equipe para enxergar a carga.',
    'Marque feriados e férias como períodos indisponíveis.',
    'Coloque os prazos recorrentes como marcos já no início do mês.',
    'Duplique o mês para preparar o seguinte.',
  ],
  tips: [
    '<strong>Trabalhe em semanas</strong>, não em dias, num cronograma mensal.',
    '<strong>Prazos fixos primeiro</strong>, o resto depois.',
    '<strong>Um ponto de meio de mês</strong> basta para corrigir a rota.',
    '<strong>Guarde uma semana de reserva</strong> nos meses cheios.',
  ],
  faq: [
    ['Qual a diferença para o cronograma semanal?', 'A granularidade: o mensal trabalha em semanas e serve para coordenar; o semanal, em meios-períodos, e serve para executar.'],
    ['Quantas linhas usar?', 'De quinze a trinta continuam legíveis num mês. Acima disso, divida por equipe.'],
    ['Preciso replanejar todo mês?', 'Sim, partindo do cronograma anterior em vez de uma página em branco.'],
  ],
  related: [['weekly', 'Cronograma semanal'], ['annual', 'Cronograma anual'], ['project-management', 'Cronograma de projeto']],
},

'employee-onboarding': {
  card: 'Antes do primeiro dia, primeira semana, primeiro mês, 90 dias.',
  h1: 'Modelo de cronograma para integração de novos colaboradores',
  metaTitle: 'Cronograma de integração (onboarding)',
  metaDesc: 'Modelo gratuito para integração de novos colaboradores: preparação, primeira semana, primeiro mês e primeiros 90 dias.',
  lead: 'Um <strong>cronograma de integração</strong> é curto mas de alto impacto. O essencial acontece antes do primeiro dia: equipamento, acessos e interlocutores precisam estar prontos na chegada, não solicitados na manhã em que a pessoa entra.',
  intro: 'Quatro etapas, da preparação aos 90 dias:',
  phases: [
    ['Antes do primeiro dia', 'Contrato, equipamento, acessos, posto de trabalho, agenda da primeira semana. <em>Marco: tudo pronto.</em>'],
    ['Primeira semana', 'Recepção, apresentação da equipe, ferramentas, primeiras tarefas simples.'],
    ['Primeiro mês', 'Ganho de autonomia, treinamento técnico, primeiros temas acompanhados. <em>Marco: conversa de 30 dias.</em>'],
    ['Primeiros 90 dias', 'Assunção de responsabilidade, metas, avaliação de fim do período de experiência. <em>Marco: balanço de 90 dias.</em>'],
  ],
  callout: 'Equipamento e acessos se solicitam na assinatura do contrato, não na chegada. Quem passa a primeira semana sem computador e sem acesso forma uma impressão duradoura da organização — e isso é inteiramente evitável.',
  customize: [
    'Ajuste a duração se o período de experiência da sua empresa for diferente.',
    'Acrescente uma linha por área para as conversas a agendar.',
    'Coloque os pontos de 30, 60 e 90 dias como marcos com responsável nomeado.',
    'Duplique o plano por tipo de cargo: técnico, comercial, liderança.',
  ],
  tips: [
    '<strong>Prepare tudo antes da chegada.</strong> É o único ponto que não se recupera.',
    '<strong>Nomeie um padrinho</strong>, diferente do gestor direto.',
    '<strong>Tarefas reais já na primeira semana</strong>, mesmo que simples.',
    '<strong>A conversa de 30 dias é a mais útil</strong>: ainda dá tempo de corrigir.',
  ],
  faq: [
    ['Quanto tempo dura uma integração?', 'Os primeiros 90 dias estruturam a entrada. A autonomia plena costuma levar seis meses.'],
    ['Quem conduz o plano?', 'O RH cuida do formato, o gestor direto do conteúdo. O plano existe justamente para nada cair entre os dois.'],
    ['Preciso de um plano por cargo?', 'A base é comum; só a parte técnica muda. Duplicar e adaptar resolve.'],
  ],
  related: [['30-60-90-day-plan', 'Plano de 30-60-90 dias'], ['project-management', 'Cronograma de projeto'], ['monthly', 'Cronograma mensal']],
},


  'refinery-turnaround-schedule': {
    card: "Parada, esvaziamento, inspeção, reparo e partida, planejados por turno.",
    h1: "Cronograma de parada de refinaria",
    metaTitle: "Cronograma de parada de refinaria",
    metaDesc: "Modelo gratuito de cronograma de parada de refinaria: preparação, parada, esvaziamento, inspeção, reparo e partida.",
    lead: "Um <strong>cronograma de parada</strong> se distingue de qualquer outro cronograma industrial em um ponto: a unidade não produz nada durante esse período. Cada dia de atraso custa produção, o que obriga a planejar por turno e não por semana.",
    intro: "Seis fases, da preparação à devolução à operação:",
    phases: [
      [
        "Preparação (M-12 a M-1)",
        "Congelamento do escopo, suprimentos, contratadas, andaimes e içamento. <em>Marco: escopo congelado.</em>"
      ],
      [
        "Parada e bloqueio",
        "Redução de carga, parada, esvaziamento, lavagem, inertização e permissões. Nenhum trabalho em campo antes disso."
      ],
      [
        "Inspeção",
        "Abertura, limpeza, exame. É aqui que aparece o serviço extra que ninguém conhecia."
      ],
      [
        "Reparo e substituição",
        "Catalisador, trocadores, válvulas, tubulação — o caminho crítico quase sempre está em uma única coluna."
      ],
      [
        "Testes e recomposição",
        "Fechamento, teste de pressão, calibração, isolamento. <em>Marco: conclusão mecânica.</em>"
      ],
      [
        "Partida",
        "Inertização, aquecimento, estabilização e devolução à operação."
      ]
    ],
    callout: "Planeje o serviço extra antes de conhecê-lo. Entre 10 e 30% das horas de uma parada nascem de constatações feitas na abertura. Um cronograma sem essa reserva não é otimista, é incompleto.",
    customize: [
      "Passe para turnos se a frente trabalhar 24 horas — a granularidade diária é grossa demais.",
      "Uma linha por equipamento ou coluna: avançam em paralelo e disputam as mesmas equipes.",
      "Represente permissões e bloqueio como tarefas separadas da parada, não embutidas nela.",
      "Reserve uma linha de contingência por fase e deixe-a visível."
    ],
    tips: [
      "<strong>O congelamento de escopo é o marco decisivo.</strong> O que entra depois empurra a partida.",
      "<strong>O caminho crítico é curto.</strong> Poucas tarefas governam a duração: proteja essas.",
      "<strong>Contratadas são recurso</strong>, não apenas data.",
      "<strong>A partida faz parte do cronograma.</strong> A parada termina com produto em especificação."
    ],
    faq: [
      [
        "Quanto tempo dura uma parada de refinaria?",
        "De 20 a 60 dias de parada conforme o escopo. A preparação começa 12 a 18 meses antes."
      ],
      [
        "Por que planejar por turno?",
        "Porque a frente costuma operar em regime contínuo. A granularidade diária esconde justamente as passagens de turno, onde o tempo se perde."
      ],
      [
        "Qual a causa mais comum de atraso?",
        "Serviço extra vindo da inspeção e permissões liberadas tarde. Ambos se planejam, mas não se evitam."
      ]
    ],
    related: [
      ["construction", "Cronograma de obra"],
      ["project-management", "Cronograma de projeto"],
      ["data-center-build-schedule", "Data center"]
    ]
  },

  'hotel-pre-opening-critical-path': {
    card: "Do recebimento da obra ao primeiro hóspede: equipe, sistemas, licenças.",
    h1: "Cronograma de pré-abertura de hotel",
    metaTitle: "Pré-abertura de hotel — cronograma",
    metaDesc: "Modelo gratuito de cronograma de pré-abertura hoteleira: licenças, equipe, sistemas, distribuição, testes e abertura.",
    lead: "Um <strong>cronograma de pré-abertura</strong> começa onde o cronograma de obra termina. Entre o prédio pronto e o primeiro hóspede pagante há de seis a nove meses de trabalho que precisam correr em paralelo à construção.",
    intro: "Seis frentes convergindo para a abertura:",
    phases: [
      [
        "Licenças e alvarás",
        "Alvará de funcionamento, licença sanitária, AVCB, alvará de bebidas. <em>O prazo mais longo.</em>"
      ],
      [
        "Equipe",
        "Gerência primeiro, depois chefias, depois times: recrutamento, contratação, treinamento."
      ],
      [
        "Sistemas",
        "PMS, PDV, channel manager, fechaduras, wi-fi, telefonia — com integrações e reservas de teste."
      ],
      [
        "Distribuição e vendas",
        "Estrutura tarifária, conexão com OTAs, site, fotos e primeiras campanhas. <em>Marco: hotel vendável.</em>"
      ],
      [
        "Suprimentos e enxoval",
        "Fornecedores, enxoval, louça, A&B, produtos de limpeza."
      ],
      [
        "Testes e abertura assistida",
        "Testes por área, operação para convidados, correção de pendências. <em>Marco: primeiro hóspede.</em>"
      ]
    ],
    callout: "Estar vendável é um marco cedo, não tarde. Os quartos precisam estar à venda meses antes da abertura, caso contrário o hotel entra na primeira temporada com o calendário vazio — o erro evitável mais caro de uma inauguração.",
    customize: [
      "Mova a data de abertura: a cadeia de licenças mostra na hora se ela se sustenta.",
      "Acrescente uma linha de treinamento por área: recepção, governança, cozinha, restaurante, manutenção.",
      "Coloque o recebimento da obra como precedência dos testes.",
      "Trate a abertura assistida como fase, não como um dia."
    ],
    tips: [
      "<strong>Calcule primeiro a cadeia de licenças de trás para frente.</strong> Prazos de órgãos públicos não negociam.",
      "<strong>Contrate a gerência cedo.</strong> É ela que monta o time que fará o resto.",
      "<strong>Reservas de teste são tarefas reais.</strong> Integração não testada aparece no dia da abertura.",
      "<strong>Conte com atraso de obra.</strong> Deixe de duas a quatro semanas entre recebimento e abertura."
    ],
    faq: [
      [
        "Quando começa a pré-abertura?",
        "De seis a doze meses antes, conforme porte e categoria. Distribuição e licenças começam primeiro."
      ],
      [
        "O que fica no caminho crítico?",
        "Normalmente a cadeia de licenças ou a integração de sistemas — raramente a obra, ainda que ela seja a parte mais visível."
      ],
      [
        "Vale a pena uma abertura assistida?",
        "É a forma mais barata de achar defeitos. De duas a quatro semanas evitam avaliações que ficam anos no ar."
      ]
    ],
    related: [
      ["construction", "Cronograma de obra"],
      ["restaurant-opening-timeline", "Abertura de restaurante"],
      ["event-planning", "Evento"]
    ]
  },

  'solar-farm-construction-schedule': {
    card: "Terreno, conexão, módulos e comissionamento, com folga de clima e rede.",
    h1: "Cronograma de construção de usina solar",
    metaTitle: "Cronograma de usina solar",
    metaDesc: "Modelo gratuito de cronograma para usina fotovoltaica: terreno, licenças, conexão, montagem e comissionamento.",
    lead: "Um <strong>cronograma de usina solar</strong> raramente é governado pela montagem. Instalar módulos é rápido; licenciamento e conexão levam anos — e é aí que está o caminho crítico.",
    intro: "Seis fases, do terreno à injeção na rede:",
    phases: [
      [
        "Desenvolvimento",
        "Garantia do terreno, arrendamentos, parecer de acesso, estudo de geração. <em>Marco: parecer de acesso emitido.</em>"
      ],
      [
        "Licenciamento",
        "Licença prévia, estudo ambiental, fauna e flora, licença de instalação — a etapa mais longa e incerta."
      ],
      [
        "Suprimentos e financiamento",
        "Módulos, inversores, subestação, estruturas, contratação do EPC. <em>Marco: fechamento financeiro.</em>"
      ],
      [
        "Infraestrutura",
        "Acessos, canteiro, sondagem, cravação de estacas e valas de cabos."
      ],
      [
        "Montagem",
        "Estruturas, módulos, cabeamento CC, inversores, subestação e cercamento."
      ],
      [
        "Conexão e comissionamento",
        "Conexão, ensaios, liberação, operação assistida. <em>Marco: primeira injeção.</em>"
      ]
    ],
    callout: "A conexão é a tarefa que data o projeto. O parecer da distribuidora e a data de disponibilização fogem ao seu controle e frequentemente estão anos à frente — planeje todo o resto de trás para frente a partir dessa data.",
    customize: [
      "Acrescente uma linha por etapa se a usina for construída em blocos.",
      "Marque cravação e valas como sensíveis ao clima e dê folga no período chuvoso.",
      "Coloque o fechamento financeiro como marco rígido: sem ele, nenhuma compra começa.",
      "Declare os períodos de restrição ambiental como indisponíveis no calendário."
    ],
    tips: [
      "<strong>Licenciamento e conexão correm em paralelo</strong>, mas só um define a data.",
      "<strong>A subestação tem prazo longo.</strong> Compre antes dos módulos.",
      "<strong>Cravação exige solo firme.</strong> Meses chuvosos custam semanas.",
      "<strong>Comissionamento não é um dia.</strong> Ensaios e liberações levam semanas."
    ],
    faq: [
      [
        "Quanto tempo leva construir uma usina solar?",
        "A obra leva de três a nove meses. Do terreno à injeção, normalmente de dois a cinco anos."
      ],
      [
        "O que fica no caminho crítico?",
        "Quase sempre licenciamento ou conexão. A montagem é a fase mais curta e mais controlada."
      ],
      [
        "Como lidar com restrições ambientais sazonais?",
        "Declarando-as indisponíveis no calendário: o cronograma desloca a terraplenagem sozinho em vez de planejá-la de forma irreal."
      ]
    ],
    related: [
      ["wind-farm-construction-schedule", "Parque eólico"],
      ["construction", "Cronograma de obra"],
      ["ev-charging-installation-schedule", "Eletropostos"]
    ]
  },

  'dissertation-gantt-chart': {
    card: "Projeto, revisão, campo, capítulos, correções e defesa.",
    h1: "Gráfico de Gantt para dissertação ou tese",
    metaTitle: "Cronograma de dissertação/tese",
    metaDesc: "Modelo gratuito de cronograma de dissertação: projeto, revisão bibliográfica, método, coleta, análise, redação e defesa.",
    lead: "Um <strong>cronograma de dissertação</strong> tem um problema que nenhuma obra tem: você é o único recurso e o prazo está a anos de distância. Sem marcos intermediários, o atraso só aparece quando já não dá para recuperar.",
    intro: "Seis fases ao longo de três a quatro anos:",
    phases: [
      [
        "Projeto e orientação",
        "Tema, pergunta de pesquisa, aceite do orientador, qualificação do projeto. <em>Marco: projeto aprovado.</em>"
      ],
      [
        "Revisão bibliográfica",
        "Busca sistemática, estado da arte, referencial teórico — segue em segundo plano."
      ],
      [
        "Método e acesso ao campo",
        "Desenho da pesquisa, comitê de ética, instrumentos, pré-teste e acesso."
      ],
      [
        "Coleta",
        "Levantamento, tabulação, limpeza dos dados. <em>A fase de menor controle.</em>"
      ],
      [
        "Análise e redação",
        "Tratamento, capítulos de resultados, discussão; introdução e conclusão por último."
      ],
      [
        "Correções e defesa",
        "Revisão, formatação, depósito, pareceres, defesa. <em>Marco: defesa.</em>"
      ]
    ],
    callout: "Coloque um marco de capítulo a cada seis ou oito semanas. Uma dissertação raramente falha por um grande problema: falha por muitos atrasos pequenos que ninguém mede, porque o primeiro prazo real está a três anos.",
    customize: [
      "Passe para semestres se o trabalho for de quatro anos.",
      "Inclua encargos de docência e congressos: custam semanas reais.",
      "Coloque o comitê de ética como precedência da coleta — é o prazo mais subestimado.",
      "Reserve folga antes do depósito: revisão e formatação levam o dobro do previsto."
    ],
    tips: [
      "<strong>Escreva cedo, não no fim.</strong> Um capítulo por fase vale mais que um ano de redação.",
      "<strong>A coleta é a tarefa mais arriscada.</strong> Tenha um segundo acesso ao campo.",
      "<strong>Introdução por último.</strong> Ela só se escreve com os resultados prontos.",
      "<strong>Inclua o tempo da orientação.</strong> Devolutivas levam semanas."
    ],
    faq: [
      [
        "Quanto tempo leva uma dissertação?",
        "Mestrado costuma levar dois anos; doutorado, de três a cinco. Trabalhos empíricos ficam no topo da faixa."
      ],
      [
        "Qual o nível de detalhe?",
        "Fases ao longo dos anos, tarefas no semestre corrente. Além disso é ficção e desatualiza em semanas."
      ],
      [
        "E se a coleta não der certo?",
        "Por isso ela entra cedo. Descobrir no segundo ano que o campo não se sustenta ainda deixa alternativas."
      ]
    ],
    related: [
      ["phd-research-gantt-chart", "Projeto de doutorado"],
      ["research", "Projeto de pesquisa"],
      ["grant-proposal-gantt-chart", "Projeto de fomento"]
    ]
  },

  'home-renovation': {
    card: "Demolição, instalações, vedações e acabamentos — na ordem que evita retrabalho.",
    h1: "Cronograma de reforma residencial",
    metaTitle: "Cronograma de reforma — modelo",
    metaDesc: "Modelo gratuito de cronograma de reforma: demolição, instalações, vedações, revestimentos e acabamentos, na ordem certa.",
    lead: "Um <strong>cronograma de reforma</strong> vale sobretudo pela ordem. Colocar o piso antes de refazer a elétrica significa refazer o piso — e é daí que vem a maior parte dos estouros, não dos preços.",
    intro: "Seis fases na ordem que evita retrabalho:",
    phases: [
      [
        "Projeto e aprovações",
        "Levantamento, projeto, orçamentos, anuência do condomínio e alvará quando necessário."
      ],
      [
        "Demolição e estrutura",
        "Remoções, aberturas, reforços estruturais, retirada de entulho."
      ],
      [
        "Instalações",
        "Elétrica, hidráulica, gás, climatização — antes de fechar qualquer parede. <em>Marco: instalações passadas.</em>"
      ],
      [
        "Vedações e contrapisos",
        "Isolamento, drywall, reboco, contrapiso, impermeabilização."
      ],
      [
        "Revestimentos",
        "Porcelanato, madeira, pintura, azulejos — nessa ordem, conforme o caso."
      ],
      [
        "Acabamentos e entrega",
        "Cozinha, louças e metais, marcenaria, limpeza, correção de pendências. <em>Marco: entrega.</em>"
      ]
    ],
    callout: "Tudo que passa dentro da parede passa antes de fechá-la. É a regra que estrutura o cronograma: um conduíte esquecido depois do drywall custa rasgo, reboco novo e pintura refeita.",
    customize: [
      "Acrescente uma linha por ambiente se a reforma for por cômodo com a casa ocupada.",
      "Marque os tempos de cura como tarefas visíveis: contrapiso, reboco, pintura.",
      "Coloque o prazo de entrega da marcenaria e das esquadrias como tarefas — passam de dois meses com frequência.",
      "Reserve de 10 a 15% de folga: reforma sempre revela algo."
    ],
    tips: [
      "<strong>Instalações antes das vedações</strong>, sempre.",
      "<strong>Tempo de cura é tarefa</strong>, não atraso.",
      "<strong>Encomende a marcenaria cedo.</strong> O prazo costuma passar da obra.",
      "<strong>Separe entrega de correção de pendências.</strong>"
    ],
    faq: [
      [
        "Quanto tempo leva uma reforma?",
        "De seis a doze semanas para um apartamento comum, mais se estrutura ou instalações forem refeitas por completo."
      ],
      [
        "Qual a ordem correta?",
        "Demolição, instalações, vedações, revestimentos, acabamentos. O inverso leva a refazer o que já foi feito."
      ],
      [
        "Quanta folga reservar?",
        "De dez a quinze por cento no prazo. Reforma quase sempre descobre algo atrás de uma parede."
      ]
    ],
    related: [
      ["construction", "Cronograma de obra"],
      ["office-relocation-project-plan", "Mudança de escritório"],
      ["restaurant-opening-timeline", "Abertura de restaurante"]
    ]
  },

  'wedding-planning': {
    card: "Local, cerimônia, fornecedores, convidados e roteiro do dia.",
    h1: "Cronograma de casamento (gráfico de Gantt)",
    metaTitle: "Cronograma de casamento — modelo",
    metaDesc: "Modelo gratuito de cronograma de casamento: local, cerimônia, fornecedores, convites, trajes e roteiro do dia.",
    lead: "Um <strong>cronograma de casamento</strong> parte de uma data fixa. De doze a dezoito meses parecem confortáveis — até se descobrir que os bons espaços e fotógrafos são reservados com dois anos de antecedência.",
    intro: "Seis fases, da data ao dia seguinte:",
    phases: [
      [
        "Definições",
        "Data, orçamento, número de convidados, estilo e local. <em>Marco: local reservado.</em>"
      ],
      [
        "Cerimônia",
        "Habilitação no cartório, documentos, cerimônia religiosa ou celebrante."
      ],
      [
        "Fornecedores",
        "Fotógrafo, buffet, música, flores, bolo, transporte — por ordem de escassez."
      ],
      [
        "Convidados e papelaria",
        "Save the date, convites, confirmações, mapa de mesas, escolha do menu. <em>Marco: confirmações fechadas.</em>"
      ],
      [
        "Trajes e detalhes",
        "Vestido, terno, provas, alianças, decoração, lembrancinhas, teste de beleza."
      ],
      [
        "Reta final e dia do casamento",
        "Roteiro, confirmações, montagem, casamento, desmontagem e devoluções."
      ]
    ],
    callout: "O dia do casamento merece um roteiro por horário, separado do cronograma anual. Chegada das flores, sessão de fotos, recepção e serviço dependem uns dos outros no minuto — um roteiro em granularidade semanal não serve a ninguém.",
    customize: [
      "Mude a data: todos os prazos se reposicionam e os fornecedores indisponíveis aparecem na hora.",
      "Uma linha por fornecedor, com sinal e saldo como marcos.",
      "Coloque o prazo de confirmação como precedência do mapa de mesas e do número final do buffet.",
      "Passe o dia do casamento para granularidade de hora, em uma seção à parte."
    ],
    tips: [
      "<strong>Local e fotógrafo primeiro.</strong> São os que esgotam mais rápido.",
      "<strong>As confirmações chegam tarde e incompletas.</strong> Feche duas semanas antes do que o buffet precisa.",
      "<strong>Conte com três provas</strong>, não uma.",
      "<strong>Planeje o dia seguinte.</strong> Desmontagem e devoluções faltam em quase todo plano."
    ],
    faq: [
      [
        "Com quanta antecedência organizar um casamento?",
        "De doze a dezoito meses normalmente. Para um local ou estação específicos, conte dois anos."
      ],
      [
        "O que fica no caminho crítico?",
        "Local, data da cerimônia e fotógrafo. Quase tudo o mais se ajusta."
      ],
      [
        "Quanta folga no dia?",
        "Ao menos trinta minutos entre os grandes blocos. O dia sempre atrasa, e a folga impede que se acumule."
      ]
    ],
    related: [
      ["event-planning", "Evento"],
      ["monthly", "Cronograma mensal"],
      ["project-management", "Cronograma de projeto"]
    ]
  },

  'research': {
    card: "Submissão, ética, coleta, análise, publicação e prestação de contas.",
    h1: "Gráfico de Gantt para projeto de pesquisa",
    metaTitle: "Cronograma de projeto de pesquisa",
    metaDesc: "Modelo gratuito para projeto de pesquisa: submissão, ética, coleta, análise, publicações e prestação de contas.",
    lead: "Um <strong>cronograma de projeto de pesquisa</strong> precisa carregar dois calendários ao mesmo tempo: o andamento científico e as obrigações de prestação de contas da agência. O segundo é inegociável e é regularmente esquecido.",
    intro: "Seis pacotes de trabalho, como uma submissão espera:",
    phases: [
      [
        "Concepção e submissão",
        "Pergunta, estado da arte, plano de trabalho, orçamento, submissão. <em>Marco: projeto aprovado.</em>"
      ],
      [
        "Montagem do projeto",
        "Contratação de bolsistas, comitê de ética, plano de gestão de dados, convênios, infraestrutura."
      ],
      [
        "Coleta",
        "Instrumentos, pré-teste, acesso ao campo, levantamento — em geral a fase mais longa."
      ],
      ["Análise", "Tratamento, análise, validação e interpretação."],
      [
        "Publicação",
        "Manuscritos, submissão, avaliação, revisões. <em>Conte com vários ciclos.</em>"
      ],
      [
        "Relatórios e encerramento",
        "Relatórios parciais, prestação de contas, arquivamento, relatório final."
      ]
    ],
    callout: "A avaliação por pares é uma tarefa com duração, não um evento. Entre a submissão e o aceite passam-se de seis a doze meses e de um a três ciclos de revisão — um cronograma que termina na publicação termina cedo demais.",
    customize: [
      "Uma linha por pacote de trabalho, espelhando a divisão da submissão: o mesmo cronograma serve de base aos relatórios.",
      "Coloque os prazos da agência como marcos e planeje de trás para frente.",
      "Ponha comitê de ética e autorização de dados como precedência da coleta.",
      "Inclua as linhas de bolsistas se as vigências forem determinadas — é a restrição mais dura."
    ],
    tips: [
      "<strong>O cronograma da submissão vira o cronograma do projeto.</strong> Construa-o para se sustentar.",
      "<strong>Contratação leva tempo.</strong> De três a seis meses entre aprovação e bolsista em atividade.",
      "<strong>As publicações correm em paralelo</strong> ao projeto, não depois.",
      "<strong>Arquivamento é tarefa.</strong> Agências exigem cada vez mais."
    ],
    faq: [
      [
        "Qual o nível de detalhe de um plano de pesquisa?",
        "Pacotes ao longo de toda a vigência, tarefas nos próximos seis meses. O restante será revisto de qualquer forma."
      ],
      [
        "Como planejar a avaliação por pares?",
        "Como tarefa de seis a doze meses, com ao menos um ciclo de revisão."
      ],
      [
        "Qual o erro mais comum?",
        "Começar a coleta tarde demais e não planejar as obrigações de prestação de contas."
      ]
    ],
    related: [
      ["dissertation-gantt-chart", "Dissertação"],
      ["grant-proposal-gantt-chart", "Projeto de fomento"],
      ["clinical-trial-gantt-chart", "Estudo clínico"]
    ]
  },

  'content-calendar': {
    card: "Pautas, produção, aprovações e publicação em todos os canais.",
    h1: "Calendário editorial em gráfico de Gantt",
    metaTitle: "Calendário editorial — modelo",
    metaDesc: "Modelo gratuito de calendário editorial: pautas, produção, aprovação, publicação e atualização de conteúdos.",
    lead: "Um <strong>calendário editorial</strong> em gráfico de Gantt mostra o que uma planilha esconde: o tempo de produção antes de cada data de publicação. O fechamento não é o dia da publicação, é duas semanas antes.",
    intro: "Cinco fases recorrentes por publicação:",
    phases: [
      [
        "Pauta",
        "Pesquisa, palavras-chave, reunião de pauta, plano do trimestre. <em>Marco: plano aprovado.</em>"
      ],
      [
        "Produção",
        "Briefing, texto, imagem, vídeo ou infográfico — cada formato com seu prazo."
      ],
      [
        "Aprovação",
        "Revisão, aprovação da área, jurídico. <em>A etapa mais subestimada.</em>"
      ],
      [
        "Publicação",
        "Inserção, metadados, agendamento, distribuição por newsletter e redes."
      ],
      [
        "Análise e atualização",
        "Alcance, posições, ajustes e atualização de conteúdos antigos."
      ]
    ],
    callout: "Dê à aprovação uma barra própria. Na maioria dos times, um texto pronto fica três dias esperando uma assinatura — não é tempo de produção, é tempo de espera, e precisa aparecer.",
    customize: [
      "Uma linha por canal: blog, newsletter, LinkedIn, vídeo. Os prazos diferem.",
      "Crie os formatos recorrentes como série e fixe o ritmo no calendário.",
      "Coloque o fechamento como marco por conteúdo, não a data de publicação.",
      "Ponha datas sazonais e campanhas como datas fixas e planeje de trás para frente."
    ],
    tips: [
      "<strong>Planeje a partir da publicação.</strong> É assim que o prazo aparece.",
      "<strong>Imagem e vídeo levam mais que texto.</strong> Comece em paralelo.",
      "<strong>Atualizar é produzir.</strong> Revisar conteúdo existente rende mais que criar novo, muitas vezes.",
      "<strong>Deixe 20% livre</strong> para o que não estava no plano do trimestre."
    ],
    faq: [
      [
        "Com quanta antecedência montar um calendário editorial?",
        "Um trimestre em pautas, quatro a seis semanas em tarefas concretas. Além disso, desatualiza mais rápido do que serve."
      ],
      [
        "Por que Gantt em vez de planilha?",
        "Porque mostra o tempo de produção antes da publicação e revela as semanas em que três conteúdos se atropelam."
      ],
      [
        "Como absorver assuntos de última hora?",
        "Deixando folga. Um calendário 100% preenchido quebra na primeira urgência."
      ]
    ],
    related: [
      ["marketing", "Campanha de marketing"],
      ["monthly", "Cronograma mensal"],
      ["product-launch", "Lançamento de produto"]
    ]
  },

  '30-60-90-day-plan': {
    card: "Entrada no cargo em três etapas: entender, contribuir, entregar.",
    h1: "Plano de 30-60-90 dias em gráfico de Gantt",
    metaTitle: "Plano de 30-60-90 dias — modelo",
    metaDesc: "Modelo gratuito de plano de 30-60-90 dias: entender, contribuir e assumir responsabilidade, com marcos de avaliação.",
    lead: "Um <strong>plano de 30-60-90 dias</strong> responde à pergunta feita em toda entrada em um cargo novo: o que você faz primeiro? Em gráfico de Gantt, ele também mostra o que corre em paralelo e o que depende do quê.",
    intro: "Três etapas de natureza bem diferente:",
    phases: [
      [
        "Dia 1 a 30 — entender",
        "Integração, conversas com equipe e áreas, produto, clientes, números, processos. <em>Marco: diagnóstico apresentado.</em>"
      ],
      [
        "Dia 31 a 60 — contribuir",
        "Primeiros temas próprios, assunção de assuntos em curso, propostas de melhoria, primeiros resultados visíveis."
      ],
      [
        "Dia 61 a 90 — entregar",
        "Temas sob sua responsabilidade, uma frente concluída, plano para os seis meses seguintes. <em>Marco: avaliação de 90 dias.</em>"
      ]
    ],
    callout: "Resista à vontade de mudar algo nos primeiros trinta dias. O erro mais comum de novos gestores é uma reorganização decidida antes do diagnóstico — ela custa mais confiança do que o resultado rápido devolve.",
    customize: [
      "Três a cinco objetivos por etapa em vez de uma lista longa: não se conquista mais que isso em trinta dias.",
      "Coloque as conversas com pessoas-chave como tarefas nas duas primeiras semanas.",
      "Ponha os pontos de 30, 60 e 90 dias como marcos.",
      "Estenda para 100 dias se o período de experiência for de seis meses."
    ],
    tips: [
      "<strong>Ouvir é tarefa.</strong> Agende as conversas em vez de deixá-las acontecer.",
      "<strong>Um resultado visível até o dia 60</strong> pesa mais que cinco frentes iniciadas.",
      "<strong>Anote o que estranhar na primeira semana.</strong> Em dois meses você não verá mais.",
      "<strong>Combine o plano com seu gestor.</strong> Um plano que só você conhece não mede nada."
    ],
    faq: [
      [
        "Para quem serve um plano de 30-60-90 dias?",
        "Para entradas em novos cargos, mudanças de responsabilidade e como preparação para entrevistas em que a pergunta aparece."
      ],
      [
        "Quão específicos devem ser os objetivos?",
        "Específicos o bastante para outra pessoa julgar se foram atingidos. \"Conhecer a equipe\" não é objetivo; \"ter conversado com os doze integrantes\" é."
      ],
      [
        "E se a realidade atropelar o plano?",
        "Ajuste-o. O valor está em orientar as primeiras semanas, não em cumprir uma barra."
      ]
    ],
    related: [
      ["employee-onboarding", "Integração de novos colaboradores"],
      ["project-management", "Cronograma de projeto"],
      ["monthly", "Cronograma mensal"]
    ]
  },

  'product-roadmap': {
    card: "Temas, versões e dependências por trimestre, não por semana.",
    h1: "Roadmap de produto em gráfico de Gantt",
    metaTitle: "Roadmap de produto — modelo",
    metaDesc: "Modelo gratuito de roadmap de produto: temas, iniciativas, versões, dependências e planejamento trimestral.",
    lead: "Um <strong>roadmap de produto</strong> não é um cronograma de sprint. Trabalha em trimestres e temas, não em tickets — e seu valor real é mostrar dependências entre iniciativas antes que virem problema.",
    intro: "Quatro níveis que sustentam um roadmap:",
    phases: [
      [
        "Temas",
        "Os dois a quatro eixos estratégicos do ano. Todo o resto se subordina a eles."
      ],
      [
        "Iniciativas",
        "As frentes por tema, com duração aproximada em semanas e um resultado claro. <em>As barras de fato do roadmap.</em>"
      ],
      ["Versões", "Entregas com data, betas e anúncios públicos, como marcos."],
      [
        "Dependências e pré-requisitos",
        "Trabalho de plataforma, migrações, parceiros externos — tudo que bloqueia outras iniciativas."
      ]
    ],
    callout: "Não coloque data exata no terceiro e quarto trimestres. Um roadmap que promete datas precisas para doze meses à frente ou é rompido ou é cumprido reduzindo o escopo em silêncio. Barras aproximadas são mais honestas e duram mais.",
    customize: [
      "Um grupo por tema, com as iniciativas abaixo.",
      "Passe para granularidade trimestral — semanas sugerem uma precisão que não existe.",
      "Ligue as iniciativas entre si: dependências são a principal causa de deslocamento.",
      "Mantenha uma linha para plataforma e manutenção, senão ela some do plano e continua consumindo tempo."
    ],
    tips: [
      "<strong>No máximo quatro temas.</strong> Um roadmap com doze prioridades não tem nenhuma.",
      "<strong>Mantenha os trimestres distantes grosseiros.</strong> Precisão sem base é promessa, não plano.",
      "<strong>Mostre as dependências.</strong> Elas explicam deslocamentos antes que sejam cobrados.",
      "<strong>Reserve 20% da capacidade</strong> para manutenção e correções."
    ],
    faq: [
      [
        "Qual a diferença para o cronograma de sprint?",
        "O roadmap trabalha em trimestres e temas; o sprint, em dias e tickets. Respondem a perguntas diferentes."
      ],
      [
        "Roadmap deve ter datas?",
        "Para o trimestre corrente sim, para os seguintes apenas períodos. O resto é compromisso sem base."
      ],
      [
        "Com que frequência atualizar?",
        "Uma revisão profunda por trimestre e ajustes mensais."
      ]
    ],
    related: [
      ["sprint", "Cronograma de sprint"],
      ["software-development", "Projeto de software"],
      ["product-launch", "Lançamento de produto"]
    ]
  },

  'annual': {
    card: "Um ano em uma página: trimestres, iniciativas e prazos fixos.",
    h1: "Cronograma anual em gráfico de Gantt",
    metaTitle: "Cronograma anual — modelo",
    metaDesc: "Modelo gratuito de cronograma anual: trimestres, iniciativas, prazos fixos e marcos, tudo em uma página.",
    lead: "Um <strong>cronograma anual</strong> mostra doze meses em uma página. Trabalha em trimestres e iniciativas, não em tarefas — assim que pacotes de trabalho aparecem, deixa de ser um plano anual e vira um cronograma ilegível.",
    intro: "Quatro trimestres e os blocos que sustentam o ano:",
    phases: [
      [
        "T1 — arranque e definições",
        "Metas, aprovação orçamentária, continuidade das frentes em curso. <em>Marco: plano aprovado.</em>"
      ],
      [
        "T2 — execução",
        "As grandes iniciativas engrenam; primeiros resultados e correção de rota."
      ],
      [
        "T3 — meio de ano",
        "Balanço semestral, ajuste orçamentário, repriorização para o fim do ano."
      ],
      [
        "T4 — fechamento e preparação",
        "Fechamento, avaliação, preparação do ano seguinte. <em>Marco: plano do próximo ano pronto.</em>"
      ]
    ],
    callout: "Fique no nível de iniciativa. Um plano anual com 200 tarefas deixa de ser mantido em março e de ser acreditado em junho. De doze a vinte barras bastam para contar um ano.",
    customize: [
      "Passe para granularidade trimestral ou mensal — semana é fina demais para um ano.",
      "Coloque primeiro as datas fixas: feiras, fechamentos, picos sazonais, férias coletivas.",
      "Acrescente uma linha por área se o plano for transversal.",
      "Marque as viradas de trimestre como marcos: é ali que se corrige a rota."
    ],
    tips: [
      "<strong>No máximo cinco grandes iniciativas.</strong> Nenhuma organização entrega mais em um ano.",
      "<strong>As datas fixas formam a moldura.</strong> O resto se ajusta a elas.",
      "<strong>Mantenha o T4 aproximado.</strong> O que se define em janeiro para outubro raramente se confirma.",
      "<strong>Revise por trimestre</strong>, não uma vez por ano."
    ],
    faq: [
      [
        "Qual o nível de detalhe de um plano anual?",
        "Nível de iniciativa: de doze a vinte barras. Tarefas pertencem ao plano trimestral ou mensal."
      ],
      [
        "Quando montar o plano anual?",
        "No último trimestre do ano anterior, com o orçamento definido. Sem orçamento, é lista de desejos."
      ],
      [
        "Com que frequência revisar?",
        "Uma vez por trimestre em profundidade. Mais que isso não rende nessa granularidade."
      ]
    ],
    related: [
      ["monthly", "Cronograma mensal"],
      ["product-roadmap", "Roadmap de produto"],
      ["project-management", "Cronograma de projeto"]
    ]
  },

  'sprint': {
    card: "Duas semanas, do planejamento à retrospectiva.",
    h1: "Cronograma de sprint em gráfico de Gantt",
    metaTitle: "Cronograma de sprint — modelo",
    metaDesc: "Modelo gratuito de cronograma de sprint: planejamento, desenvolvimento, testes, review e retrospectiva em duas semanas.",
    lead: "Um <strong>cronograma de sprint</strong> em formato Gantt não substitui o quadro — mostra o que o quadro não mostra: quais tarefas dependem umas das outras e em que ponto as duas semanas realmente apertam.",
    intro: "Um sprint de duas semanas com seus ritos fixos:",
    phases: [
      [
        "Planejamento (dia 1)",
        "Objetivo, estimativa e compromisso com os itens do backlog. <em>Marco: objetivo do sprint definido.</em>"
      ],
      [
        "Desenvolvimento (dias 1 a 8)",
        "Execução com daily; dependências entre tarefas mantidas visíveis."
      ],
      [
        "Integração e testes (dias 7 a 9)",
        "Montagem, testes, correções — propositalmente sobrepostos ao desenvolvimento."
      ],
      [
        "Review e retrospectiva (dia 10)",
        "Demonstração, feedback, melhoria do processo. <em>Marco: incremento aceito.</em>"
      ]
    ],
    callout: "Não preencha os dois últimos dias. Todo sprint traz seu imprevisto, e um sprint sem reserva termina com tarefas inacabadas empurradas para o seguinte — o que destrói a previsibilidade dos dois.",
    customize: [
      "Ajuste a duração se seus sprints forem de uma ou três semanas.",
      "Uma linha por pessoa se quiser conferir a carga.",
      "Ligue os itens de backlog entre si: é exatamente o que justifica o formato Gantt aqui.",
      "Coloque os ritos recorrentes como série: daily, refinamento."
    ],
    tips: [
      "<strong>O objetivo do sprint vale mais que a lista.</strong> É ele que diz o que pode cair.",
      "<strong>Testes correm em paralelo</strong>, não no fim.",
      "<strong>Deixe 15 a 20% da capacidade livre.</strong>",
      "<strong>O quadro segue como ferramenta do dia a dia</strong>; este plano serve a dependências e conversas."
    ],
    faq: [
      [
        "Gantt combina com Scrum?",
        "Para o sprint em si, o quadro é melhor. O Gantt ajuda em dependências, planejamento de versões e alinhamento com áreas não ágeis."
      ],
      [
        "Qual a duração de um sprint?",
        "De uma a quatro semanas, normalmente duas. Mais curto aumenta a proporção de ritos, mais longo atrasa o feedback."
      ],
      [
        "O que fazer com tarefas inacabadas?",
        "Devolvê-las ao backlog e repriorizar, em vez de empurrá-las automaticamente ao sprint seguinte."
      ]
    ],
    related: [
      ["agile", "Projeto ágil"],
      ["software-development", "Projeto de software"],
      ["product-roadmap", "Roadmap de produto"]
    ]
  },

  'wind-farm-construction-schedule': {
    card: "Licenças, fundações, torres, conexão e comissionamento.",
    h1: "Cronograma de construção de parque eólico",
    metaTitle: "Cronograma de parque eólico",
    metaDesc: "Modelo gratuito de cronograma para parque eólico: desenvolvimento, licenças, fundações, montagem, conexão e comissionamento.",
    lead: "Um <strong>cronograma de parque eólico</strong> é governado por três coisas fora do canteiro: o licenciamento, a conexão à rede e a disponibilidade de guindastes de grande porte.",
    intro: "Seis fases, do terreno ao primeiro megawatt-hora:",
    phases: [
      [
        "Desenvolvimento",
        "Terreno, medição de vento, estudo de geração, solicitação de acesso. <em>Marco: parecer de acesso.</em>"
      ],
      [
        "Licenciamento",
        "Licença prévia, estudo de impacto, fauna, ruído e sombreamento — a etapa mais longa."
      ],
      [
        "Suprimentos e financiamento",
        "Compra dos aerogeradores, logística de içamento, contratação do EPC. <em>Marco: fechamento financeiro.</em>"
      ],
      [
        "Infraestrutura",
        "Acessos, praças de montagem, valas de cabos, subestação — prontos antes da entrega das máquinas."
      ],
      [
        "Montagem",
        "Fundações, cura, seções de torre, nacele, pás. <em>Depende do vento e do guindaste.</em>"
      ],
      [
        "Comissionamento",
        "Conexão elétrica, ensaios, operação em teste, recebimento. <em>Marco: primeira injeção.</em>"
      ]
    ],
    callout: "A montagem depende do vento, não só do tempo. Acima de cerca de 8 a 12 m/s na altura do rotor, o guindaste para — em um sítio escolhido justamente porque venta. Conte esses dias parados em vez de tratá-los como atraso.",
    customize: [
      "Uma linha por aerogerador: a montagem é sequencial, com o guindaste se deslocando entre eles.",
      "Represente a cura das fundações como tarefa (28 dias), não como atraso oculto.",
      "Declare os períodos de restrição ambiental como indisponíveis no calendário.",
      "Coloque as janelas de guindaste como datas fixas: são reservadas com meses de antecedência."
    ],
    tips: [
      "<strong>O guindaste define a ordem.</strong> Planeje as máquinas pelo trajeto dele.",
      "<strong>Os acessos são subestimados.</strong> Cargas especiais exigem raio de curva e capacidade de carga.",
      "<strong>Licenciamento e conexão correm juntos</strong>, mas só um define a data.",
      "<strong>Inverno não é perdido por definição</strong>: fundações sim, içamento nem sempre."
    ],
    faq: [
      [
        "Quanto tempo leva construir um parque eólico?",
        "A obra leva de seis a doze meses. Do terreno à injeção, de três a sete anos."
      ],
      [
        "O que fica no caminho crítico?",
        "Quase sempre o licenciamento e depois a conexão. A montagem é a fase mais curta."
      ],
      [
        "Por que o içamento para com vento forte?",
        "Pás e naceles não podem ser içadas com segurança acima de 8 a 12 m/s. É parâmetro de planejamento, não incidente."
      ]
    ],
    related: [
      ["solar-farm-construction-schedule", "Usina solar"],
      ["construction", "Cronograma de obra"],
      ["ev-charging-installation-schedule", "Eletropostos"]
    ]
  },

  'ev-charging-installation-schedule': {
    card: "Local, conexão, obra civil, instalação e conformidade metrológica.",
    h1: "Cronograma de instalação de eletropostos",
    metaTitle: "Eletropostos — cronograma de obra",
    metaDesc: "Modelo gratuito de cronograma para eletropostos: local, conexão, obra civil, instalação, conformidade e energização.",
    lead: "Um <strong>cronograma de eletropostos</strong> raramente falha na técnica. Falha na conexão à rede e na conformidade metrológica — duas tarefas que precisam começar cedo e não dependem do instalador.",
    intro: "Seis fases, do estudo do local à energização:",
    phases: [
      [
        "Local e dimensionamento",
        "Fluxo, vagas, potência necessária, número de pontos, modelo de operação."
      ],
      [
        "Conexão à rede",
        "Solicitação à distribuidora, parecer de acesso, subestação quando necessária. <em>O prazo mais longo.</em>"
      ],
      [
        "Licenças e incentivos",
        "Alvará, regras de estacionamento, enquadramento em programas de incentivo."
      ],
      [
        "Obra civil",
        "Valas, bases, eletrodutos, sinalização horizontal e vertical."
      ],
      [
        "Instalação e ligação",
        "Montagem dos carregadores, ligação elétrica, gestão de carga, integração com o backend."
      ],
      [
        "Conformidade e energização",
        "Ensaio elétrico, conformidade metrológica, roaming, carga de teste. <em>Marco: aberto ao público.</em>"
      ]
    ],
    callout: "A conexão se solicita no início, não durante a obra. Entre o pedido e o parecer de acesso passam-se de três a dezoito meses conforme a distribuidora e a potência — mais do que todo o resto do projeto somado.",
    customize: [
      "Um grupo de linhas por local se você estiver equipando vários pontos em paralelo.",
      "Coloque prazos de programas de incentivo como datas fixas: expiram e não se deslocam.",
      "Trate a conformidade metrológica como tarefa própria: sem ela não há faturamento.",
      "Dê folga à obra civil no período chuvoso."
    ],
    tips: [
      "<strong>Solicite a conexão antes mesmo de fechar o local.</strong>",
      "<strong>Dimensione com realismo.</strong> Superdimensionar encarece muito a conexão.",
      "<strong>Backend e roaming precisam de prazo</strong>, não do dia da energização.",
      "<strong>Incentivos amarram datas.</strong> Leia os prazos antes de montar o cronograma."
    ],
    faq: [
      [
        "Quanto tempo leva instalar eletropostos?",
        "A obra leva semanas. Com conexão e licenças, de seis a dezoito meses."
      ],
      [
        "Qual a causa mais comum de atraso?",
        "A conexão à rede, solicitada tarde e com o prazo menos controlável."
      ],
      [
        "O que é conformidade metrológica?",
        "Os pontos de recarga precisam medir a energia entregue de forma juridicamente válida para permitir cobrança por kWh. Sem essa aprovação, a venda não é permitida."
      ]
    ],
    related: [
      ["solar-farm-construction-schedule", "Usina solar"],
      ["construction", "Cronograma de obra"],
      ["office-relocation-project-plan", "Mudança de escritório"]
    ]
  },

  'mining-project-schedule': {
    card: "Exploração, estudos, licenciamento, implantação e produção.",
    h1: "Cronograma de projeto de mineração",
    metaTitle: "Projeto de mineração — cronograma",
    metaDesc: "Modelo gratuito de cronograma para mineração: exploração, estudos de viabilidade, licenciamento, implantação e produção.",
    lead: "Um <strong>projeto de mineração</strong> corre por décadas e se planeja por níveis de estudo. Cada nível refina a estimativa e decide se o projeto segue — o cronograma é uma cadeia de pontos de decisão, não uma sequência contínua de obras.",
    intro: "Seis níveis, da primeira sondagem à produção:",
    phases: [
      [
        "Exploração",
        "Geofísica, campanha de sondagem, modelo de recursos. <em>Marco: recurso classificado.</em>"
      ],
      [
        "Estudo de escopo e pré-viabilidade",
        "Primeira avaliação econômica, método de lavra, estimativa preliminar."
      ],
      [
        "Estudo de viabilidade",
        "Engenharia detalhada, reservas, estimativa com faixa estreita. <em>Marco: decisão de investimento.</em>"
      ],
      [
        "Licenciamento e comunidades",
        "Estudo de impacto, outorga de água, licença de operação, acordos com comunidades e órgãos."
      ],
      [
        "Implantação",
        "Acessos, energia, água, planta de beneficiamento, barragem ou disposição a seco, alojamentos."
      ],
      [
        "Partida e produção",
        "Decapeamento, testes, ramp-up. <em>Marco: produção comercial.</em>"
      ]
    ],
    callout: "Licenciamento e aceitação social não são frente acessória. São a causa real do abandono da maioria dos projetos de mineração que não vingam — não a geologia, não a técnica. Planeje-os com a mesma seriedade da planta de beneficiamento.",
    customize: [
      "Passe para anos em vez de meses: um projeto de mineração cobre uma década.",
      "Coloque os níveis de estudo como marcos com decisão de interromper.",
      "Torne visíveis os prazos longos de moinhos e britadores como tarefas próprias.",
      "Faça as frentes de licenciamento e relacionamento correrem em paralelo à técnica, não depois."
    ],
    tips: [
      "<strong>Cada nível de estudo pode encerrar o projeto.</strong> Um plano sem ponto de parada não é plano.",
      "<strong>A faixa de custo pertence ao nível.</strong> Escopo ±35%, viabilidade ±15%.",
      "<strong>Água costuma ser a restrição</strong>, não o minério.",
      "<strong>O ramp-up leva mais que o previsto</strong>: de doze a vinte e quatro meses."
    ],
    faq: [
      [
        "Quanto tempo da descoberta à produção?",
        "Normalmente de dez a vinte anos, conforme o minério e o marco regulatório."
      ],
      [
        "O que são os pontos de decisão entre estudos?",
        "Marcos em que se decide continuar, ajustar ou encerrar, à luz da estimativa refinada."
      ],
      [
        "O que mais atrasa projetos de mineração?",
        "Processos de licenciamento e oposição local, seguidos de financiamento. Razões técnicas vêm depois."
      ]
    ],
    related: [
      ["refinery-turnaround-schedule", "Parada de refinaria"],
      ["construction", "Cronograma de obra"],
      ["shipbuilding-project-schedule", "Construção naval"]
    ]
  },

  'shipbuilding-project-schedule': {
    card: "Projeto, blocos, armação, provas de mar e entrega.",
    h1: "Cronograma de construção naval",
    metaTitle: "Construção naval — cronograma",
    metaDesc: "Modelo gratuito de cronograma de construção naval: projeto, blocos, pré-armação, armação, provas de mar e entrega.",
    lead: "Um <strong>projeto de construção naval</strong> não se planeja por compartimentos, e sim por blocos. O navio nasce em seções construídas em paralelo e depois unidas — e a ordem desses blocos é o cronograma de verdade.",
    intro: "Seis fases, do contrato à entrega:",
    phases: [
      [
        "Contrato e projeto básico",
        "Especificação, sociedade classificadora, plano geral, dimensões principais. <em>Marco: congelamento do projeto.</em>"
      ],
      [
        "Projeto de detalhamento e compras",
        "Desenhos de fabricação, pedidos, motor principal e grandes equipamentos de prazo longo."
      ],
      [
        "Fabricação de blocos",
        "Corte, painéis, blocos, pré-armação — quanto mais cedo, mais barato."
      ],
      [
        "Montagem",
        "União dos blocos, batimento de quilha, lançamento. <em>Marco: navio flutuando.</em>"
      ],
      [
        "Armação e comissionamento",
        "Ligação dos sistemas, acabamento interno, ensaios no cais."
      ],
      [
        "Provas de mar e entrega",
        "Provas, correção de pendências, recebimento pela classificadora. <em>Marco: entrega ao armador.</em>"
      ]
    ],
    callout: "A pré-armação no bloco custa uma fração da armação no navio pronto. O que só é instalado após a união precisa passar por acessos estreitos, em espaço confinado e muitas vezes acima da cabeça — o índice de pré-armação é a alavanca mais importante de todo o cronograma.",
    customize: [
      "Uma linha por bloco: são as unidades reais de planejamento.",
      "Trate os prazos de motor, hélice e redutor como tarefas próprias — de um a dois anos.",
      "Coloque as vistorias da classificadora como datas fixas.",
      "Confira a ocupação do dique e do cais como recurso se houver várias construções simultâneas."
    ],
    tips: [
      "<strong>O congelamento do projeto é o marco decisivo.</strong> Mudanças depois custam múltiplo.",
      "<strong>O dique é o recurso mais escasso.</strong> É ele que define a ordem.",
      "<strong>Preveja correção de pendências após as provas.</strong> Sempre aparece.",
      "<strong>Compre os itens de prazo longo primeiro</strong>, muitas vezes antes de fechar o detalhamento."
    ],
    faq: [
      [
        "Quanto tempo leva uma construção naval?",
        "De doze a trinta e cinco meses após o contrato, conforme tipo e porte; navios especiais levam mais."
      ],
      [
        "O que é pré-armação?",
        "A instalação de tubulação, cabos e equipamentos no bloco antes de ele ser unido — bem mais barata do que depois."
      ],
      [
        "O que fica no caminho crítico?",
        "Normalmente o motor principal e outros grandes componentes de prazo longo, seguidos da ocupação do dique."
      ]
    ],
    related: [
      ["mining-project-schedule", "Projeto de mineração"],
      ["construction", "Cronograma de obra"],
      ["refinery-turnaround-schedule", "Parada de refinaria"]
    ]
  },

  'apparel-production-calendar': {
    card: "Da coleção às peças-piloto, aos pedidos e à entrega.",
    h1: "Calendário de produção para moda e confecção",
    metaTitle: "Calendário de produção — moda",
    metaDesc: "Modelo gratuito de calendário de produção têxtil: coleção, peças-piloto, pedidos, insumos, produção e entrega.",
    lead: "Um <strong>calendário de produção têxtil</strong> se calcula de trás para frente a partir da data de entrega ao varejo. Uma coleção que perde a janela não vende depois — vende com desconto.",
    intro: "Seis fases por estação:",
    phases: [
      [
        "Construção da coleção",
        "Tendências, mix de produtos, precificação, cartela de cores. <em>Marco: coleção aprovada.</em>"
      ],
      [
        "Desenvolvimento e peças-piloto",
        "Desenhos, modelagem, protótipos, ajustes de caimento — várias rodadas são normais."
      ],
      [
        "Mostruário e pedidos",
        "Coleção de venda, showroom ou feira, registro de pedidos. <em>Marco: fechamento de pedidos.</em>"
      ],
      [
        "Compra de insumos",
        "Tecidos, aviamentos, etiquetas — os prazos mais longos de toda a cadeia."
      ],
      ["Produção", "Corte, costura, acabamento, controle de qualidade na fábrica."],
      [
        "Expedição e entrega",
        "Transporte, desembaraço, recebimento, distribuição às lojas. <em>Marco: na loja.</em>"
      ]
    ],
    callout: "A compra de tecido começa antes do fechamento dos pedidos, não depois. Comprar só então custa de seis a dez semanas de prazo e perde a janela comercial. Por isso parte dos insumos é comprada por previsão — com o risco que isso carrega.",
    customize: [
      "Um grupo de linhas por coleção: alto-verão e inverno se sobrepõem.",
      "Trate o transporte como tarefa: de quatro a seis semanas por mar, dias por via aérea.",
      "Declare o Ano Novo chinês e as férias coletivas como períodos indisponíveis.",
      "Planeje um número realista de rodadas de prova — normalmente duas a três."
    ],
    tips: [
      "<strong>Calcule de trás para frente a partir da entrega.</strong> A janela do varejo não negocia.",
      "<strong>Tecido é o prazo mais longo</strong>, não a costura.",
      "<strong>Inclua as férias de fábrica.</strong> O Ano Novo chinês para a produção por uma a duas semanas.",
      "<strong>Coloque a folga antes do embarque</strong>, não depois: a data do navio é fixa."
    ],
    faq: [
      [
        "Quanto dura um ciclo de produção na moda?",
        "Da construção da coleção à entrega, de nove a dezoito meses conforme o segmento."
      ],
      [
        "Por que comprar tecido antes de fechar os pedidos?",
        "Porque o prazo faria perder a janela. Parte é comprada por previsão, com risco assumido."
      ],
      [
        "Quantas rodadas de prova são normais?",
        "De duas a três. Planejar com uma só é irreal."
      ]
    ],
    related: [
      ["content-calendar", "Calendário editorial"],
      ["product-launch", "Lançamento de produto"],
      ["annual", "Cronograma anual"]
    ]
  },

  'phd-research-gantt-chart': {
    card: "Doutorado em três a quatro anos, com marcos de etapa.",
    h1: "Gráfico de Gantt para projeto de doutorado",
    metaTitle: "Cronograma de doutorado — modelo",
    metaDesc: "Modelo gratuito de cronograma de doutorado: projeto, revisão, método, coleta, publicações, docência e defesa.",
    lead: "Um <strong>cronograma de doutorado</strong> difere do cronograma da tese porque contém mais que o texto: docência, congressos, publicações e fomento entram nele e custam meses reais.",
    intro: "Seis frentes ao longo de três a quatro anos:",
    phases: [
      [
        "Ano 1 — fundamentos",
        "Projeto, plano de estudos, base bibliográfica, disciplinas e formação em método. <em>Marco: matrícula consolidada.</em>"
      ],
      [
        "Anos 1 a 2 — desenho da pesquisa",
        "Delineamento, comitê de ética, instrumentos, pré-teste e acesso ao campo."
      ],
      [
        "Anos 2 a 3 — coleta e análise",
        "Levantamento, tabulação, análise. <em>A fase de maior risco.</em>"
      ],
      [
        "Contínuo — publicações",
        "Comunicações e artigos; o núcleo do trabalho se a tese for por artigos."
      ],
      [
        "Contínuo — docência e encargos",
        "Estágio docente, comissões, orientação de trabalhos — previsível e consumidor de tempo."
      ],
      [
        "Anos 3 a 4 — fechamento",
        "Consolidação, qualificação, depósito, pareceres, defesa. <em>Marco: defesa.</em>"
      ]
    ],
    callout: "Entre o depósito e a defesa passam-se meses, não semanas. A emissão de pareceres leva de três a seis meses na maioria dos programas — um cronograma que termina no depósito termina um semestre cedo demais.",
    customize: [
      "Passe para semestres: semanas não fazem sentido em quatro anos.",
      "Para tese por artigos, um grupo de linhas por artigo com submissão e revisão.",
      "Registre o estágio docente como bloco recorrente, não como nota de rodapé.",
      "Represente a vigência da bolsa como limite rígido."
    ],
    tips: [
      "<strong>Publique cedo.</strong> A avaliação leva mais tempo do que qualquer cronograma prevê.",
      "<strong>A coleta é a fase mais arriscada.</strong> Tenha um acesso alternativo.",
      "<strong>A docência consome um terço do tempo</strong> se não for delimitada.",
      "<strong>Inclua o tempo dos pareceres</strong>: está fora do seu controle."
    ],
    faq: [
      [
        "Quanto tempo dura um doutorado?",
        "De três a cinco anos conforme a área, o fomento e a carga de docência."
      ],
      [
        "Tese tradicional ou por artigos?",
        "A tese por artigos distribui o risco e produz resultados visíveis mais cedo, mas depende mais dos prazos de avaliação."
      ],
      [
        "O que acontece após o depósito?",
        "A emissão de pareceres pela banca e depois a defesa. De três a seis meses é o usual."
      ]
    ],
    related: [
      ["dissertation-gantt-chart", "Dissertação"],
      ["research", "Projeto de pesquisa"],
      ["grant-proposal-gantt-chart", "Projeto de fomento"]
    ]
  },

  'grant-proposal-gantt-chart': {
    card: "Plano de trabalho para submissão: pacotes, marcos e entregáveis.",
    h1: "Gráfico de Gantt para projeto de fomento",
    metaTitle: "Projeto de fomento — plano de trabalho",
    metaDesc: "Modelo gratuito de plano de trabalho para projeto de fomento: pacotes de trabalho, marcos, entregáveis e relatórios.",
    lead: "Quase toda <strong>submissão a agências de fomento</strong> exige um plano de trabalho em forma de diagrama. Não é formalidade: os avaliadores leem nele se o projeto foi pensado — e, após a aprovação, é sobre essa base que se presta contas.",
    intro: "A estrutura que a maioria dos editais espera:",
    phases: [
      [
        "PT 1 — coordenação",
        "Gestão, relatórios, prestação de contas. Corre por toda a vigência."
      ],
      [
        "PT 2 — concepção e preparação",
        "Revisão, delineamento, ética e dados pessoais, recrutamento."
      ],
      [
        "PT 3 — execução",
        "O núcleo científico, geralmente dividido em subpacotes."
      ],
      [
        "PT 4 — análise",
        "Tratamento, validação, interpretação. <em>Marco: resultados disponíveis.</em>"
      ],
      ["PT 5 — difusão", "Publicações, divulgação, arquivamento de dados."],
      [
        "Obrigações de relatório",
        "Relatório parcial, prestação de contas, relatório final. <em>Datas impostas pela agência.</em>"
      ]
    ],
    callout: "Numere pacotes, marcos e entregáveis de forma contínua e use exatamente a mesma numeração no corpo do projeto. Os avaliadores alternam entre o texto e o diagrama; se as denominações divergirem, a proposta parece inacabada.",
    customize: [
      "Ajuste a estrutura de pacotes às exigências do edital: variam bastante.",
      "Registre os entregáveis como marcos com número e mês (E1, M12).",
      "Trabalhe em meses de projeto em vez de datas: a data de início é desconhecida na submissão.",
      "Em projetos em rede, uma linha por instituição e por pacote."
    ],
    tips: [
      "<strong>Planeje em meses de projeto</strong>, M1 a M36, não em datas de calendário.",
      "<strong>Um marco precisa ser verificável.</strong> \"Avanço obtido\" não é.",
      "<strong>Coordenação é pacote próprio</strong>, com esforço próprio.",
      "<strong>Preveja o tempo de partida.</strong> Meses separam a aprovação do bolsista em atividade."
    ],
    faq: [
      [
        "Como apresentar o plano de trabalho na submissão?",
        "Como diagrama em meses de projeto, com pacotes, marcos e entregáveis numerados e coerentes com o texto."
      ],
      [
        "Por que meses de projeto em vez de datas?",
        "Porque a data de aprovação é desconhecida. M1 a M36 continua válido independentemente de quando o projeto começar."
      ],
      [
        "Quantos pacotes de trabalho?",
        "De quatro a sete. Mais fica ilegível, menos parece pouco elaborado."
      ]
    ],
    related: [
      ["research", "Projeto de pesquisa"],
      ["phd-research-gantt-chart", "Projeto de doutorado"],
      ["clinical-trial-gantt-chart", "Estudo clínico"]
    ]
  },

  'erp-implementation-schedule': {
    card: "Análise, parametrização, migração, testes, treinamento e virada.",
    h1: "Cronograma de implantação de ERP",
    metaTitle: "Implantação de ERP — cronograma",
    metaDesc: "Modelo gratuito de cronograma de implantação de ERP: análise, desenho, parametrização, migração, testes, treinamento e virada.",
    lead: "Uma <strong>implantação de ERP</strong> não é um projeto de TI com participação das áreas: é um projeto de organização com parte de TI. O cronograma trava quase sempre nos mesmos dois pontos — a migração de dados e a disponibilidade das áreas.",
    intro: "Sete fases até a operação estabilizada:",
    phases: [
      [
        "Análise e diagnóstico",
        "Processos atuais, requisitos, escolha da solução. <em>Marco: solução definida.</em>"
      ],
      [
        "Desenho",
        "Processos futuros, análise de aderência, decisão entre padrão e customização."
      ],
      [
        "Parametrização e desenvolvimento",
        "Configuração, customizações, integrações com sistemas satélites."
      ],
      [
        "Migração de dados",
        "Higienização, mapeamento, migrações de ensaio. <em>Várias rodadas, nunca uma só.</em>"
      ],
      ["Testes", "Testes unitários, integrados e homologação pelas áreas."],
      [
        "Treinamento",
        "Usuários-chave primeiro, depois usuários finais — próximo à virada."
      ],
      [
        "Virada e estabilização",
        "Go-live, acompanhamento reforçado, estabilização. <em>Marco: operação transferida.</em>"
      ]
    ],
    callout: "Conte com três a cinco migrações de ensaio, não com uma. A qualidade dos dados legados é quase sempre pior do que se supõe, e cada rodada revela casos ausentes do desenho. Uma única migração no fim de semana da virada é a forma clássica de errar um go-live.",
    customize: [
      "Um grupo de linhas por módulo ou área: financeiro, compras, produção, vendas.",
      "Registre as migrações de ensaio como tarefas repetidas, com ciclos de higienização entre elas.",
      "Confira a disponibilidade dos usuários-chave como recurso: eles mantêm a rotina.",
      "Trate a estabilização como fase, tipicamente de quatro a oito semanas."
    ],
    tips: [
      "<strong>Padrão antes de customização.</strong> Cada desenvolvimento alonga projeto e manutenção.",
      "<strong>Treine perto da virada.</strong> Treinamento cedo demais se perde.",
      "<strong>Evite virada em período de fechamento contábil.</strong>",
      "<strong>Os usuários-chave são o gargalo</strong>, não a consultoria."
    ],
    faq: [
      [
        "Quanto tempo leva implantar um ERP?",
        "De seis a dezoito meses em empresas médias, bem mais em grandes grupos. Escopo e nível de customização determinam a duração."
      ],
      [
        "Qual a causa mais comum de atraso?",
        "A migração de dados e a qualidade do legado, seguidas de perto pela indisponibilidade das áreas."
      ],
      [
        "Virada única ou faseada?",
        "A virada única é mais rápida e mais arriscada; a faseada reduz o risco mas exige integrações temporárias entre o velho e o novo."
      ]
    ],
    related: [
      ["software-development", "Projeto de software"],
      ["post-merger-integration-plan", "Integração pós-fusão"],
      ["data-center-build-schedule", "Data center"]
    ]
  },

  'post-merger-integration-plan': {
    card: "Os 100 primeiros dias após o fechamento, por área.",
    h1: "Plano de integração pós-aquisição",
    metaTitle: "Integração pós-fusão — plano",
    metaDesc: "Modelo gratuito de plano de integração pós-aquisição: Dia 1, 100 primeiros dias, áreas, sistemas e sinergias.",
    lead: "Um <strong>plano de integração</strong> não começa no fechamento, e sim bem antes. O que precisa funcionar no Dia 1 — folha de pagamento, acessos, comunicação a clientes — se prepara com semanas de antecedência, muitas vezes sob restrições concorrenciais.",
    intro: "Seis frentes, da preparação às sinergias:",
    phases: [
      [
        "Preparação antes do fechamento",
        "Time de integração, visão-alvo, checklist do Dia 1, regras de clean team. <em>O que é permitido antes do fechamento é limitado.</em>"
      ],
      [
        "Dia 1",
        "Comunicação a colaboradores e clientes, acessos, folha, bases jurídicas. <em>Marco: fechamento.</em>"
      ],
      [
        "100 primeiros dias",
        "Estrutura de liderança, linhas de reporte, ganhos rápidos, retenção de pessoas-chave."
      ],
      [
        "Integração funcional",
        "Financeiro, RH, vendas, compras, produção — cada área no seu ritmo."
      ],
      [
        "Integração de sistemas",
        "ERP, CRM, redes, e-mail. <em>A frente mais longa e mais cara.</em>"
      ],
      [
        "Sinergias e encerramento",
        "Execução das medidas, medição contra o business case, passagem para a rotina."
      ]
    ],
    callout: "Integração cultural não é tema secundário para depois. A causa mais frequente de uma aquisição não atingir o business case é a saída de pessoas-chave nos primeiros seis meses — planeje retenção com a mesma concretude da migração de sistemas.",
    customize: [
      "Um grupo de linhas por área, com responsável identificado.",
      "Trate as tarefas do Dia 1 em uma seção por horário, à parte.",
      "Coloque as aprovações concorrenciais como precedência de tudo que é vedado antes do fechamento.",
      "Associe cada medida de sinergia a uma data e um valor, senão continua sendo intenção."
    ],
    tips: [
      "<strong>Comunique internamente antes do externo no Dia 1.</strong> Colaboradores não devem saber pela imprensa.",
      "<strong>Integração de sistemas leva anos</strong>, não meses. Preveja uma solução intermediária.",
      "<strong>Retenha pessoas-chave cedo.</strong> Depois de seis meses costuma ser tarde.",
      "<strong>Meça sinergias contra o business case</strong>, não contra o plano."
    ],
    faq: [
      [
        "Quando começa o planejamento da integração?",
        "Antes do fechamento, assim que a aquisição se desenha, respeitando os limites concorrenciais para troca de informações."
      ],
      [
        "Por que os 100 primeiros dias importam?",
        "Porque estrutura, comunicação e retenção se definem nessa janela. Depois, tudo fica mais difícil."
      ],
      [
        "O que leva mais tempo?",
        "A integração de sistemas, sobretudo ERP e CRM. Dois a três anos não são raros."
      ]
    ],
    related: [
      ["erp-implementation-schedule", "Implantação de ERP"],
      ["office-relocation-project-plan", "Mudança de escritório"],
      ["project-management", "Cronograma de projeto"]
    ]
  },

  'office-relocation-project-plan': {
    card: "Busca do imóvel, obra, TI e mudança no fim de semana.",
    h1: "Plano de projeto para mudança de escritório",
    metaTitle: "Mudança de escritório — plano",
    metaDesc: "Modelo gratuito de plano para mudança de escritório: busca do imóvel, contrato, obra, TI e mudança.",
    lead: "Em uma <strong>mudança de escritório</strong>, quem define a data é a TI, não o mobiliário. Links e pontos de rede se contratam com meses de antecedência, enquanto mesas chegam em dias.",
    intro: "Seis fases, da busca ao primeiro dia:",
    phases: [
      [
        "Necessidade e busca",
        "Área necessária, critérios, visitas, negociação. <em>Marco: contrato assinado.</em>"
      ],
      [
        "Projeto e aprovações",
        "Layout, postos de trabalho, AVCB, aprovações do condomínio."
      ],
      ["Obra", "Divisórias, elétrica, piso, iluminação, copa e sanitários."],
      [
        "TI e telecom",
        "Contratação do link, sala técnica, rede, wi-fi, telefonia. <em>O prazo mais longo do projeto.</em>"
      ],
      [
        "Preparação da mudança",
        "Compra de mobiliário, transportadora, etiquetagem, comunicação interna."
      ],
      [
        "Mudança e ajustes",
        "Mudança no fim de semana, montagem, pendências, devolução do imóvel antigo. <em>Marco: primeiro dia de trabalho.</em>"
      ]
    ],
    callout: "Contrate o link assim que o contrato for assinado. É a única tarefa que dinheiro não acelera: entre o pedido e a ativação passam-se de oito a vinte semanas conforme o tipo de acesso e o endereço — e sem ele o espaço não é utilizável.",
    customize: [
      "Uma linha por andar ou área se a mudança for em ondas.",
      "Coloque o aviso prévio do imóvel antigo como data fixa e planeje de trás para frente.",
      "Planeje o fim de semana da mudança por hora, separado do plano geral.",
      "Mantenha a restauração e devolução do imóvel antigo: costumam ser esquecidas."
    ],
    tips: [
      "<strong>TI primeiro, mobiliário depois.</strong> É a ordem dos prazos, não a da visibilidade.",
      "<strong>Duas semanas de folga entre obra e mudança.</strong> A obra nunca fica pronta na data.",
      "<strong>Teste a rede antes da mudança</strong>, não na segunda de manhã.",
      "<strong>Comunique cedo e de forma concreta.</strong> O incômodo está nos detalhes: estacionamento, acesso, transporte."
    ],
    faq: [
      [
        "Quanto tempo para preparar uma mudança de escritório?",
        "De seis a doze meses a partir do contrato, conforme o nível de obra. A busca vem antes."
      ],
      [
        "O que fica no caminho crítico?",
        "Quase sempre a ativação do link, e depois a obra interna."
      ],
      [
        "Quando fazer a mudança?",
        "Em um fim de semana ou feriado prolongado, para restar um dia de folga para ajustes."
      ]
    ],
    related: [
      ["home-renovation", "Reforma"],
      ["construction", "Cronograma de obra"],
      ["employee-onboarding", "Integração de novos colaboradores"]
    ]
  },

  'data-center-build-schedule': {
    card: "Terreno, envoltória, energia, refrigeração e comissionamento.",
    h1: "Cronograma de construção de data center",
    metaTitle: "Data center — cronograma de obra",
    metaDesc: "Modelo gratuito de cronograma para data center: terreno, licenças, estrutura, energia, refrigeração e comissionamento.",
    lead: "A <strong>construção de um data center</strong> é em grande parte um projeto elétrico dentro de um prédio. A data depende da conexão e dos prazos de transformadores, geradores e nobreaks — não do concreto.",
    intro: "Seis fases até a entrega à operação:",
    phases: [
      [
        "Terreno e estudos preliminares",
        "Área, potência disponível, conectividade, nível de redundância pretendido. <em>Marco: parecer de acesso.</em>"
      ],
      [
        "Licenças e projeto",
        "Alvará, licenciamento de geradores, projeto detalhado de elétrica e climatização."
      ],
      [
        "Suprimentos",
        "Transformadores, nobreaks, geradores, sistemas de refrigeração — prazos de doze a vinte e quatro meses são comuns."
      ],
      [
        "Estrutura e envoltória",
        "Fundações, estrutura, cobertura, fachada, compartimentação."
      ],
      [
        "Sistemas prediais",
        "Média tensão, nobreaks, geradores, refrigeração, detecção e combate a incêndio, segurança, cabeamento."
      ],
      [
        "Comissionamento e entrega",
        "Testes integrados até o nível 5, ensaios com carga, cenários de contingência. <em>Marco: pronto para operar.</em>"
      ]
    ],
    callout: "Comissionamento é fase, não data de recebimento. Um teste integrado completo pelos cinco níveis — até a queda de rede simulada sob carga — leva de semanas a meses. Planejá-lo como a última semana antes da entrega significa entregar um data center não testado.",
    customize: [
      "Um grupo de linhas por sala se a construção for por etapas.",
      "Torne visíveis os prazos dos grandes equipamentos como tarefas, com data de compra.",
      "Trate os níveis 1 a 5 de comissionamento como tarefas separadas.",
      "Coloque conexão e sistema de energia de emergência como marcos iniciais."
    ],
    tips: [
      "<strong>Compre transformadores e geradores primeiro</strong>, muitas vezes antes de iniciar a obra.",
      "<strong>A refrigeração define a sala</strong>, não o contrário.",
      "<strong>Planeje o comissionamento em semanas</strong>, não em dias.",
      "<strong>Envolva a operação desde o projeto</strong>: é ela que vai receber a obra."
    ],
    faq: [
      [
        "Quanto tempo leva construir um data center?",
        "De dezoito a trinta e seis meses a partir do alvará, muito dependente dos prazos dos equipamentos elétricos."
      ],
      [
        "O que fica no caminho crítico?",
        "A conexão e o suprimento de transformadores, nobreaks e geradores — os prazos mais longos do mercado atual."
      ],
      [
        "O que são testes integrados?",
        "A verificação por etapas de todos os sistemas em conjunto, até a simulação de queda de rede sob carga plena."
      ]
    ],
    related: [
      ["construction", "Cronograma de obra"],
      ["erp-implementation-schedule", "Implantação de ERP"],
      ["refinery-turnaround-schedule", "Parada de refinaria"]
    ]
  },

  'restaurant-opening-timeline': {
    card: "Conceito, ponto, obra, alvarás, equipe e abertura assistida.",
    h1: "Cronograma de abertura de restaurante",
    metaTitle: "Abertura de restaurante — cronograma",
    metaDesc: "Modelo gratuito de cronograma de abertura de restaurante: conceito, ponto, obra, alvarás, equipe e abertura assistida.",
    lead: "Em uma <strong>abertura de restaurante</strong>, a cozinha raramente é o problema. A data depende dos alvarás, da exaustão e da contratação — três frentes que precisam começar cedo e que dinheiro nenhum acelera.",
    intro: "Seis fases, do conceito ao primeiro serviço:",
    phases: [
      [
        "Conceito e viabilidade",
        "Posicionamento, cardápio, precificação, plano de negócio e financiamento."
      ],
      [
        "Ponto e contrato",
        "Busca, verificação de uso permitido, contrato de locação. <em>Marco: contrato assinado.</em>"
      ],
      [
        "Alvarás e licenças",
        "Alvará de funcionamento, licença sanitária, AVCB, mesas na calçada, exigências de exaustão. <em>O prazo mais longo.</em>"
      ],
      [
        "Obra e cozinha",
        "Obra civil, exaustão, caixa de gordura, equipamentos de cozinha, salão e balcão."
      ],
      [
        "Equipe e fornecedores",
        "Chef primeiro, depois cozinha e salão; fornecedores, bebidas, PDV e controle de estoque."
      ],
      [
        "Abertura assistida",
        "Serviços de teste, noite para convidados, ajuste de cardápio, imprensa. <em>Marco: abertura.</em>"
      ]
    ],
    callout: "A exaustão é a tarefa que empurra a data. Exigências de lançamento de ar e de odor aparecem tarde, envolvem a vizinhança e só se resolvem com obra pesada. Verifique antes de assinar o contrato de locação.",
    customize: [
      "Coloque o processo de alvará como precedência da abertura, não em paralelo.",
      "Trate os testes de cardápio como tarefas: exigem várias rodadas.",
      "Comece o recrutamento cedo; cozinha é a posição mais disputada.",
      "Preveja de duas a quatro semanas de abertura assistida com cardápio reduzido."
    ],
    tips: [
      "<strong>Alvará antes da obra.</strong> Uma cozinha pronta sem licença não serve.",
      "<strong>Contrate o chef primeiro.</strong> Ele define cardápio, compras e equipe.",
      "<strong>Conte com atraso de obra.</strong> Não marque a abertura logo após o recebimento.",
      "<strong>Abertura assistida é controle de qualidade</strong>, não ação de marketing."
    ],
    faq: [
      [
        "Quanto tempo para abrir um restaurante?",
        "De seis a dezoito meses a partir do conceito, conforme o estado do ponto e a situação regulatória."
      ],
      ["O que mais atrasa?", "Alvarás e a exaustão, seguidos da contratação."],
      [
        "Vale a pena abertura assistida?",
        "Sim. De duas a quatro semanas com cardápio reduzido revelam os defeitos antes que as avaliações os fixem."
      ]
    ],
    related: [
      ["hotel-pre-opening-critical-path", "Abertura de hotel"],
      ["event-planning", "Evento"],
      ["home-renovation", "Reforma"]
    ]
  },

  'clinical-trial-gantt-chart': {
    card: "Protocolo, ética, centros, recrutamento, análise e relatório.",
    h1: "Gráfico de Gantt para estudo clínico",
    metaTitle: "Estudo clínico — cronograma",
    metaDesc: "Modelo gratuito de cronograma de estudo clínico: protocolo, ética, abertura de centros, recrutamento, análise e relatório.",
    lead: "O cronograma de um <strong>estudo clínico</strong> depende inteiramente do recrutamento. Todas as outras fases são planejáveis; a velocidade com que os participantes são incluídos não é — e é ela que determina a duração total.",
    intro: "Seis fases, da concepção ao relatório:",
    phases: [
      [
        "Concepção e protocolo",
        "Pergunta, delineamento, cálculo amostral, protocolo e brochura do investigador."
      ],
      [
        "Regulatório e ética",
        "CEP e CONEP, autorização da ANVISA, seguro, contratos. <em>Marco: aprovação obtida.</em>"
      ],
      [
        "Abertura de centros",
        "Seleção, contratos, treinamento, visitas de iniciação. <em>Marco: primeiro centro ativo.</em>"
      ],
      [
        "Recrutamento e seguimento",
        "Inclusão, tratamento, acompanhamento, monitoria. <em>A fase mais longa e incerta.</em>"
      ],
      [
        "Gestão e análise de dados",
        "Fechamento de banco, limpeza, quebra de cegamento, análise estatística."
      ],
      [
        "Relatório e publicação",
        "Relatório do estudo, comunicação regulatória, registro, publicação."
      ]
    ],
    callout: "Planeje com metade da velocidade de recrutamento esperada. A experiência de praticamente todos os centros é que a inclusão real fica bem abaixo da previsão — e um atraso aqui empurra cada fase seguinte na mesma medida.",
    customize: [
      "Uma linha por centro para iniciação e recrutamento: eles começam de forma escalonada.",
      "Coloque a aprovação ética como precedência rígida de qualquer atividade com participante.",
      "Registre análises intermediárias e comitês de monitoramento como datas fixas.",
      "Represente corretamente o seguimento por participante: ele corre após a última inclusão."
    ],
    tips: [
      "<strong>Recrutamento é o caminho crítico.</strong> O resto é calculável.",
      "<strong>Mais centros cedo</strong> vale mais que corrigir quando já travou.",
      "<strong>Fechamento de banco precisa de prazo.</strong> Resolver pendências leva semanas.",
      "<strong>Entre o último participante e o relatório há meses</strong>, não dias."
    ],
    faq: [
      [
        "Quanto tempo dura um estudo clínico?",
        "De um a cinco anos conforme a fase e a indicação. A duração do recrutamento é o maior fator isolado."
      ],
      [
        "O que mais atrasa estudos clínicos?",
        "O recrutamento, com folga. Depois, os trâmites regulatórios e a negociação de contratos com os centros."
      ],
      [
        "O que significa última visita do último participante?",
        "O momento da última visita prevista em protocolo. Só depois começam o fechamento de banco e a análise."
      ]
    ],
    related: [
      ["research", "Projeto de pesquisa"],
      ["grant-proposal-gantt-chart", "Projeto de fomento"],
      ["phd-research-gantt-chart", "Projeto de doutorado"]
    ]
  },

  'google-sheets': {
    card: "Gráfico de Gantt no Google Planilhas: importar e editar em equipe.",
    h1: "Modelo de gráfico de Gantt para Google Planilhas",
    metaTitle: "Modelo de Gantt — Google Planilhas",
    metaDesc: "Modelo gratuito de gráfico de Gantt para Google Planilhas: baixe em XLSX ou CSV, importe e edite em equipe.",
    lead: "Um <strong>modelo de Gantt para Google Planilhas</strong> é a escolha certa quando várias pessoas precisam trabalhar no cronograma ao mesmo tempo. Baixe o arquivo em XLSX ou CSV e importe por <em>Arquivo → Importar</em>.",
    intro: "O modelo traz quatro fases com tarefas e marcos:",
    phases: [
      [
        "Tabela de tarefas",
        "Tarefa, início, duração e responsável — as colunas de que tudo decorre."
      ],
      ["Linha do tempo", "Uma barra por tarefa ao longo das semanas do projeto."],
      [
        "Fases",
        "Quatro grupos que reúnem as tarefas e mantêm o cronograma legível."
      ],
      ["Marcos", "Pontos fixos para aprovações e entregas."]
    ],
    callout: "O Google Planilhas não calcula precedências. Se uma tarefa atrasa, cada data de início seguinte precisa ser ajustada na mão — viável em vinte linhas, não além. Se o cronograma precisa se recalcular sozinho, abra-o direto no editor.",
    customize: [
      "Após baixar, escolha Arquivo → Importar → Fazer upload e confirme \"Substituir planilha\".",
      "Ajuste a largura das colunas da linha do tempo se o projeto passar do período do modelo.",
      "Acrescente formatação condicional para o dia atual e acompanhe o avanço.",
      "Compartilhe como \"Comentarista\" para quem só precisa acompanhar."
    ],
    tips: [
      "<strong>Planilhas é forte para trabalho conjunto</strong>, fraco para precedências.",
      "<strong>A visualização Linha do tempo não é um Gantt</strong> — ignora ligações.",
      "<strong>Proteja as colunas de cálculo</strong> se muitas pessoas tiverem acesso.",
      "<strong>Acima de vinte tarefas</strong>, migre para uma ferramenta que calcula."
    ],
    faq: [
      [
        "Como importar o modelo no Google Planilhas?",
        "Baixe o arquivo e, no Planilhas, use Arquivo → Importar → Fazer upload, escolhendo \"Substituir planilha\"."
      ],
      [
        "O Google Planilhas trata precedências?",
        "Não automaticamente. Os deslocamentos precisam ser repassados à mão para cada sucessora."
      ],
      [
        "O modelo é gratuito?",
        "Sim, sem cadastro e sem marca d'água — em XLSX, CSV ou PowerPoint."
      ]
    ],
    related: [
      ["excel", "Modelo Excel"],
      ["powerpoint", "Modelo PowerPoint"],
      ["simple", "Modelo simples"]
    ]
  },

  'printable-gantt-chart': {
    card: "Feito para imprimir: uma página, texto legível, margens corretas.",
    h1: "Gráfico de Gantt para imprimir",
    metaTitle: "Gráfico de Gantt para imprimir",
    metaDesc: "Modelo gratuito de gráfico de Gantt para impressão: cabe em uma página, legível em preto e branco, em PDF, Excel ou PowerPoint.",
    lead: "Um <strong>gráfico de Gantt para imprimir</strong> tem exigências diferentes das da tela: precisa caber em uma página, continuar legível em preto e branco e dispensar dicas de contexto — tudo que importa está no papel.",
    intro: "O modelo foi construído em torno destes quatro pontos:",
    phases: [
      [
        "Uma página",
        "Cerca de vinte linhas e um trimestre de linha do tempo — o limite em que um A4 deitado ainda se lê."
      ],
      [
        "Contraste em vez de cor",
        "As fases se distinguem por tom e trama, não apenas por matiz."
      ],
      [
        "Barras rotuladas",
        "Nomes de tarefa e datas ficam sobre as barras, não em uma legenda."
      ],
      [
        "Margens de impressão",
        "Margens e cabeçalho ajustados para que nada seja cortado."
      ]
    ],
    callout: "Confira a legibilidade em escala de cinza antes de imprimir cem cópias. Cores bem distintas na tela viram três cinzas quase idênticos na impressão em preto e branco — o erro mais comum em cronogramas destinados à parede.",
    customize: [
      "Mude para A3 acima de umas 25 linhas.",
      "Exporte em PDF em vez de imprimir da planilha: a quebra de página fica sob controle.",
      "Oculte as colunas desnecessárias antes de imprimir; cada coluna economizada libera linha do tempo.",
      "Coloque a data da versão no cabeçalho, para não ficar um cronograma vencido na parede."
    ],
    tips: [
      "<strong>Formato paisagem</strong> — linha do tempo precisa de largura.",
      "<strong>Fonte mínima de 9 pontos.</strong> O que parece pequeno na tela fica ilegível impresso.",
      "<strong>Um trimestre por página.</strong> Um ano inteiro em A4 ninguém lê.",
      "<strong>Deixe a data da versão visível</strong>, senão fica o cronograma do mês passado."
    ],
    faq: [
      [
        "Como imprimir um gráfico de Gantt em uma página?",
        "Formato paisagem, cerca de vinte linhas e um trimestre de linha do tempo, exportando em PDF em vez de imprimir direto da planilha."
      ],
      [
        "Qual formato de papel?",
        "A4 deitado até cerca de vinte linhas, A3 para cronogramas maiores ou para afixar."
      ],
      [
        "O modelo é legível em preto e branco?",
        "Sim, as fases se distinguem por tom e trama, não apenas por cor."
      ]
    ],
    related: [
      ["one-page-gantt-chart", "Cronograma em uma página"],
      ["simple", "Modelo simples"],
      ["powerpoint", "Modelo PowerPoint"]
    ]
  },

  'one-page-gantt-chart': {
    card: "O projeto inteiro em uma página, no nível das fases.",
    h1: "Gráfico de Gantt em uma página",
    metaTitle: "Gráfico de Gantt em uma página",
    metaDesc: "Modelo gratuito de gráfico de Gantt em uma página: o projeto inteiro no nível das fases, para diretoria e comitês.",
    lead: "Um <strong>gráfico de Gantt em uma página</strong> não é um cronograma reduzido: é um cronograma resumido. Mostra fases e marcos e deixa o detalhe no cronograma de trabalho — porque uma página não comporta os dois.",
    intro: "O que a página contém:",
    phases: [
      ["Fases", "De quatro a oito barras cobrindo todo o projeto."],
      ["Marcos", "De cinco a dez losangos para decisões e entregas."],
      ["Eixo", "Graduação mensal ou trimestral conforme a duração."],
      [
        "Situação",
        "Uma marca do dia atual e, se útil, um indicador de avanço por fase."
      ]
    ],
    callout: "Uma página obriga a escolher, e é justamente esse o valor. Se você não consegue reduzir o projeto a oito barras, normalmente não é problema de diagramação: é um projeto cuja estrutura ainda não foi definida.",
    customize: [
      "Junte fases vizinhas se o cronograma passar de oito barras.",
      "Mantenha apenas os marcos que um comitê guardaria.",
      "Acrescente uma linha de situação por fase se a página servir para acompanhamento.",
      "Exporte em PDF ou imagem para inserir em um documento."
    ],
    tips: [
      "<strong>De quatro a oito fases no máximo.</strong> Acima disso, a página perde o sentido.",
      "<strong>Deixe o detalhe em outro lugar.</strong> Esta página remete ao cronograma, não o substitui.",
      "<strong>Date a versão.</strong> Uma página resumida circula e vence rápido.",
      "<strong>Uma marca de \"hoje\"</strong> vale mais que um percentual de avanço."
    ],
    faq: [
      [
        "Para que serve um Gantt em uma página?",
        "Para apresentar o projeto a uma diretoria ou comitê e servir de referência comum. O acompanhamento se faz no cronograma detalhado."
      ],
      [
        "Quantas fases cabem?",
        "De quatro a oito. Se o projeto exigir mais, agrupe antes de reduzir o tamanho da fonte."
      ],
      [
        "Como manter atualizada?",
        "Gerando-a novamente a partir do cronograma detalhado, em vez de editá-la à parte."
      ]
    ],
    related: [
      ["printable-gantt-chart", "Versão para impressão"],
      ["powerpoint", "Modelo PowerPoint"],
      ["simple", "Modelo simples"]
    ]
  },

  '3-week-lookahead-template': {
    card: "As três próximas semanas de obra, com restrições e inspeções.",
    h1: "Programação de três semanas (lookahead)",
    metaTitle: "Programação de 3 semanas — modelo",
    metaDesc: "Modelo gratuito de programação de 3 semanas para obra: equipes, inspeções, restrições e prazos de suprimento por semana.",
    lead: `Um modelo gratuito de <strong>programação de três semanas</strong> montado do jeito que a obra roda a reunião de segunda-feira — esta semana, a próxima e a seguinte, com equipes, inspeções, restrições e itens de prazo longo à vista em cada uma. Baixe para o quadro do canteiro ou abra no <a href="/pt/app.html">editor gratuito</a> e use <strong>Exibição ▸ Próximas semanas</strong> para recortar a janela direto do cronograma mestre, em vez de redigitá-la numa planilha toda semana.`,
    intro: "Um lookahead não é um plano à parte. É uma fatia de três semanas do cronograma mestre com as restrições anexadas, atualizada semanalmente. O modelo segue exatamente essa lógica:",
    phases: [
      [
        "Semana 1 — trabalho comprometido",
        "Serviço livre de restrições, que será executado nesta semana: equipe, material e acesso já confirmados. <em>Marco: liberação da armação antes da concretagem.</em>"
      ],
      [
        "Semana 2 — trabalho liberado",
        "Serviço com restrições removidas, mas ainda não iniciado. É o pulmão que mantém as equipes ocupadas quando a semana 1 escorrega."
      ],
      [
        "Semana 3 — trabalho previsto",
        "Serviço ainda em preparação. Qualquer item aqui com restrição em aberto é justamente a razão de a reunião existir."
      ],
      [
        "Restrições e prazos de suprimento",
        "Aprovações de projeto, submissões, entregas e licenças que precisam chegar antes do serviço que travam. Correm ao longo das três semanas, não dentro de uma delas."
      ],
      [
        "Inspeções e pontos de parada",
        "Liberações de terceiros que interrompem o serviço se forem perdidas — armação, enterrado, estrutura. Cada uma é um marco, não uma tarefa."
      ],
      [
        "Atualização semanal",
        "O gráfico gira toda segunda-feira: entra o percentual concluído, a janela avança uma semana e o registro de restrições é revisto."
      ]
    ],
    callout: `O objetivo do lookahead é remover restrições, não gerar relatório. Se uma tarefa da semana 3 tem uma aprovação pendente ou um material não entregue, é só disso que vale falar na segunda-feira — o resto já está preparado. Nosso <a href="/pt/blog/3-week-lookahead-schedule.html">guia da programação de três semanas</a> mostra como conduzir a reunião a partir do gráfico.`,
    customize: [
      "Ajuste a janela para a sua segunda-feira de início — a exibição Próximas semanas ancora na segunda e aceita de 1 a 8 semanas.",
      "Use uma linha por equipe ou subempreiteira, em vez de por atividade, se a obra é organizada por frente de serviço; cada encarregado precisa enxergar a própria linha.",
      "Mantenha as restrições como barras reais, com duração real. Uma aprovação registrada como nota de zero dia simplesmente é ignorada.",
      "Marque toda inspeção como marco, para que nada a jusante seja programado atravessando um ponto de parada.",
      "Gire o gráfico inteiro uma semana a cada segunda-feira em vez de refazê-lo — o cronograma mestre é a fonte, o lookahead é a exibição."
    ],
    tips: [
      "<strong>Gere, não redigite.</strong> Lookahead mantido à parte do cronograma mestre diverge dele em menos de um mês. Abra o mestre no editor e use <strong>Exibição ▸ Próximas semanas</strong> para recortar a janela.",
      "<strong>A semana 1 não deve ter restrição alguma.</strong> Se tiver, o serviço não está comprometido: é intenção, e o lugar dele é na semana 2.",
      "<strong>Meça o PPC (percentual do plano concluído).</strong> Contar quantos compromissos da semana 1 realmente terminaram é o número mais útil que um lookahead produz.",
      "<strong>Coloque os itens de prazo longo no gráfico com meses de antecedência.</strong> Estrutura metálica, painéis elétricos e elevadores não respeitam sua janela de três semanas: precisam aparecer nela na data de chegada e ser comprados muito antes.",
      "<strong>Imprima no tamanho que o quadro do canteiro exige.</strong> Um lookahead que ninguém lê a um metro de distância não muda a segunda-feira de ninguém."
    ],
    faq: [
      [
        "O que é uma programação de três semanas?",
        `É um planejamento de curto prazo, móvel, que mostra as próximas três semanas de serviço extraídas do cronograma mestre, com restrições e inspeções anexadas. É atualizado toda semana, em geral na reunião de coordenação de segunda-feira. Veja nosso <a href="/pt/blog/3-week-lookahead-schedule.html">guia da programação de três semanas</a>.`
      ],
      [
        "O gantts.app gera o lookahead a partir do meu cronograma?",
        `Sim. Abra seu cronograma no <a href="/pt/app.html">editor gratuito</a> e escolha <strong>Exibição ▸ Próximas semanas</strong>. A janela ancora na segunda-feira e vai de uma a oito semanas, de modo que o lookahead é sempre uma exibição do cronograma vivo, e não uma segunda cópia dele.`
      ],
      [
        "Por que três semanas, e não quatro ou seis?",
        "Três semanas é prazo suficiente para remover a maior parte das restrições e curto o bastante para que as datas ainda sejam críveis. Obras com suprimentos de prazo longo costumam usar seis; a exibição aceita até oito, então use o que o seu ciclo de preparação exigir."
      ],
      [
        "O que entra no lookahead e não está no cronograma mestre?",
        "As restrições — aprovações de projeto, esclarecimentos técnicos, entregas, licenças, inspeções e disponibilidade de equipe. O mestre carrega o serviço; o lookahead carrega os motivos pelos quais ele pode não acontecer."
      ],
      [
        "O modelo de programação de três semanas é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, além de edição online gratuita, sem cadastro e sem marca d'água."
      ]
    ]
  },

  's-curve-template': {
    card: "Avanço acumulado planejado vs real, com VP, VA e IDP.",
    h1: "Modelo de curva S (planejado vs real)",
    metaTitle: "Curva S — modelo planejado vs real",
    metaDesc: "Modelo gratuito de curva S: defina a linha de base e leia VP, VA, VPR e IDP no painel Curva S do editor.",
    lead: `Um modelo gratuito de <strong>curva S</strong> — um projeto desenhado para que a curva de planejado contra real signifique alguma coisa, com partida lenta, meio pesado e cauda longa. Baixe para o relatório de avanço ou abra no <a href="/pt/app.html">editor gratuito</a>, defina uma linha de base e abra o painel <strong>📈 Curva S</strong> para ler valor planejado, valor agregado, variação de prazo e IDP a partir das suas próprias datas e percentuais.`,
    intro: "A curva S é apenas o avanço acumulado ao longo do tempo. Ela tem esse formato porque projetos sobem devagar, aceleram no meio e desaceleram no comissionamento. O modelo já vem com um cronograma nesse formato:",
    phases: [
      [
        "Início e linha de base",
        "Termo de abertura, escopo, orçamento e a própria linha de base — o pé achatado da curva, em que passa muito calendário e se agrega muito pouco valor. <em>Marco: linha de base definida.</em>"
      ],
      [
        "Projeto e engenharia",
        "Do conceito ao projeto executivo. O avanço começa a acumular, mas o desembolso ainda corre à frente do valor entregue."
      ],
      [
        "Suprimentos",
        "Pedidos colocados, itens de prazo longo acompanhados, entregas recebidas. O comprometido sobe forte aqui, mesmo sem avanço físico correspondente."
      ],
      [
        "Construção e montagem",
        "O centro íngreme da curva, onde se gera a maior parte do valor agregado e onde vale acompanhar o IDP semanalmente."
      ],
      [
        "Testes e comissionamento",
        "A desaceleração. O que resta vale pouco em valor e é teimoso em duração — daí as curvas achatarem antes de terminar. <em>Marco: comissionamento concluído.</em>"
      ],
      [
        "Entrega e encerramento",
        "Documentação, pendências, conta final e lições aprendidas — os últimos pontos percentuais, que sempre levam mais do que deveriam."
      ]
    ],
    callout: `Uma curva sozinha não diz nada. O valor está na distância entre a curva planejada e a real: se a real está abaixo, você está atrasado, e a distância vertical é a variação de prazo em valor, enquanto a horizontal é aproximadamente o atraso em tempo. Nosso <a href="/pt/blog/s-curve-project-management.html">guia da curva S</a> mostra como ler VP, VA, VPR e IDP no gráfico.`,
    customize: [
      "Defina a linha de base assim que o plano for aprovado — sem ela não existe curva planejada, e o painel Curva S não tem contra o que comparar.",
      "Mantenha o percentual concluído honesto e atualizado; a curva real vale exatamente o que valer a última atualização.",
      "Dê peso ao miolo do cronograma. Se as durações estão distribuídas de forma uniforme, a curva sai como uma reta — sinal de que o plano ainda não está detalhado o bastante.",
      "Informe custo ou homem-hora por tarefa se você quiser uma curva carregada por custo, e não ponderada por duração.",
      "Só refaça a linha de base em mudança formal. Refazer para esconder variação é como um projeto perde o único sistema de alerta que tinha."
    ],
    tips: [
      "<strong>Leia o IDP, não o desenho.</strong> IDP abaixo de 1,0 significa que você agregou menos valor do que o planejado até hoje. A tendência ao longo de quatro ou cinco medições importa muito mais do que qualquer leitura isolada.",
      "<strong>Espere uma partida lenta.</strong> Curva que sobe forte desde o primeiro dia quase sempre está medindo desembolso ou esforço, e não avanço entregue.",
      "<strong>Observe o ponto de achatamento.</strong> Curvas que estacionam em 85–90 por cento são a assinatura clássica do projeto cheio de serviço quase pronto.",
      "<strong>Atualize em cadência fixa.</strong> Semanal ou quinzenal, sempre no mesmo dia — atualizações irregulares deixam a curva ilegível.",
      "<strong>Apresente a curva junto do Gantt.</strong> A curva diz que você está atrasado; o gráfico de barras diz quais tarefas causaram isso. Mantenha os dois no relatório."
    ],
    faq: [
      [
        "O que é uma curva S em gestão de projetos?",
        `É o gráfico do avanço acumulado planejado contra o avanço acumulado real ao longo do tempo. Tem forma de S porque o trabalho sobe devagar, atinge o pico no meio e desacelera no fim. Nosso <a href="/pt/blog/s-curve-project-management.html">guia da curva S</a> explica como montar e ler uma.`
      ],
      [
        "O gantts.app desenha a curva S para mim?",
        `Sim. Defina a linha de base e abra o painel <strong>📈 Curva S</strong> no <a href="/pt/app.html">editor gratuito</a>. Ele calcula valor planejado, valor agregado, variação de prazo e o índice de desempenho de prazo a partir das suas tarefas, e atualiza conforme você muda o percentual concluído.`
      ],
      [
        "O que são VP, VA, VPR e IDP?",
        "Valor planejado é o trabalho que você disse que já teria feito até agora; valor agregado é o que de fato foi feito; a variação de prazo é VA menos VP; e o IDP é VA dividido por VP. Acima de 1,0 é adiantado, abaixo de 1,0 é atrasado."
      ],
      [
        "Por que minha curva parece uma reta?",
        "Em geral porque todas as tarefas têm duração e peso parecidos, então o avanço acumula de forma uniforme. Detalhe mais as fases centrais, ou carregue as tarefas com custo ou homem-hora, e o formato em S aparece."
      ],
      [
        "Preciso de linha de base para usar isto?",
        "Para planejado contra real, sim. Sem linha de base você ainda vê o avanço real acumulado, mas não há contra o que compará-lo e não existe IDP."
      ],
      [
        "O modelo de curva S é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'cloud-migration-project-plan': {
    card: "Descoberta, landing zone, ondas de migração, virada e desativação.",
    h1: "Plano de projeto de migração para nuvem",
    metaTitle: "Migração para nuvem — plano",
    metaDesc: "Modelo gratuito de plano de migração para nuvem: descoberta, landing zone, ondas, virada, hypercare e desativação do legado.",
    lead: "Um modelo gratuito de <strong>plano de migração para nuvem</strong> cobrindo a mudança de aplicações e cargas de trabalho de ponta a ponta — descoberta e avaliação do parque, construção da <em>landing zone</em> (a base de nuvem), planejamento de ondas, onda piloto e ondas produtivas, virada, hypercare (suporte reforçado) e desativação do que ficou para trás.",
    intro: "Migração para nuvem não é um projeto só: é a construção de uma base mais uma onda que se repete. O modelo separa as duas coisas, para que a landing zone esteja pronta antes que as ondas dependam dela:",
    phases: [
      [
        "Descoberta e avaliação",
        "Inventário de aplicações, mapeamento de dependências, criticidade para o negócio e uma decisão dos 7Rs por carga — <em>rehost</em>, <em>replatform</em>, <em>refactor</em>, <em>repurchase</em>, <em>relocate</em>, aposentar ou manter. <em>Marco: destino das aplicações acordado.</em>"
      ],
      [
        "Landing zone e fundação",
        "Contas e assinaturas, rede e conectividade híbrida, identidade, guardrails de segurança, observabilidade e modelo de custos. Tudo a jusante depende disso. <em>Marco: landing zone em operação.</em>"
      ],
      [
        "Planejamento de ondas e piloto",
        "Agrupar aplicações em ondas por dependência, e não por área, e comprovar o runbook numa onda piloto de baixo risco."
      ],
      [
        "Ondas de migração",
        "Ciclos repetidos de preparação, migração, teste e virada por onda. O padrão é o mesmo a cada vez; o que muda é o perfil de risco."
      ],
      [
        "Virada e hypercare",
        "Viradas produtivas, troca de DNS e de tráfego, janelas de rollback e o período de suporte reforçado após cada onda. <em>Marco: virada produtiva concluída.</em>"
      ],
      [
        "Desativação e otimização",
        "Desligar o ambiente de origem, encerrar o contrato de data center ou hospedagem e então dimensionar recursos e contratar capacidade reservada. É aqui que o business case realmente se realiza."
      ]
    ],
    callout: "O business case só se realiza quando o ambiente antigo é desligado. Migrações param rotineiramente depois da última virada, deixando os dois ambientes ligados e a economia só no papel. Coloque a desativação no gráfico como trabalho datado e com responsável, e ponha a data de saída do contrato de hospedagem ao lado dela como marco fixo.",
    customize: [
      "Fixe primeiro a data de saída do data center ou do contrato de hospedagem e trabalhe de trás para frente — essa data costuma ser contratual e inegociável.",
      "Acrescente uma linha por aplicação quando o inventário estiver pronto, agrupada sob a onda que a carrega.",
      "Duplique a fase de onda para cada onda adicional; a estrutura interna permanece idêntica.",
      "Tire os candidatos a refactor do plano de ondas: são projetos de desenvolvimento, não migrações, e misturá-los destrói a cadência das ondas.",
      "Marque landing zone em operação, piloto concluído, cada virada produtiva e a desativação da origem como marcos."
    ],
    tips: [
      "<strong>Não inicie ondas antes de a landing zone estar concluída.</strong> Migrar para uma fundação que ainda muda significa migrar duas vezes, e é a maior fonte de retrabalho nesses programas.",
      "<strong>Agrupe ondas por dependência, não por departamento.</strong> Aplicações que conversam entre si devem migrar juntas, ou você pagará pela latência entre dois ambientes enquanto estiverem separadas.",
      "<strong>Faça uma onda piloto de verdade.</strong> A função dela é comprovar o runbook e expor as surpresas, então escolha aplicações de baixo risco mas genuinamente representativas, não as três mais fáceis da lista.",
      "<strong>Preveja orçamento para operação em paralelo.</strong> Os dois ambientes rodam juntos durante toda a migração; esse custo de sobreposição é real e pertence ao business case desde o primeiro dia.",
      "<strong>Mantenha janela de rollback em toda virada.</strong> Virada sem rollback documentado e ensaiado é uma porta de mão única atravessada sem que ninguém tenha decidido atravessá-la."
    ],
    faq: [
      [
        "Quanto tempo leva uma migração para nuvem?",
        "Em geral de 9 a 24 meses para um parque de porte médio, dependendo sobretudo do número de aplicações, da complexidade das dependências e de quanto refactor está no escopo. O modelo usa um cronograma de cerca de quinze meses, que você pode comprimir ou estender."
      ],
      [
        "O que são os 7Rs da migração para nuvem?",
        "Rehost (mover como está), replatform (ajustar), refactor (reescrever), repurchase (trocar por SaaS), relocate (transferir a plataforma), retire (aposentar) e retain (manter). São as opções de destino atribuídas a cada aplicação durante a avaliação, e defini-las cedo é o que torna o planejamento de ondas possível."
      ],
      [
        "Como sequenciar as ondas de migração?",
        "Primeiro por grupo de dependência, depois por risco. Aplicações que compartilham dados ou se chamam entre si devem migrar na mesma onda, e a onda piloto deve ser de baixo risco mas representativa o bastante para comprovar o runbook."
      ],
      [
        "O plano cobre a desativação do ambiente antigo?",
        "Sim — é uma fase inteira, porque é onde a economia prevista no business case efetivamente aparece, e é a fase mais frequentemente abandonada depois da última virada."
      ],
      [
        "O modelo de migração para nuvem é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'retail-store-opening-timeline': {
    card: "Da locação à inauguração: obra, licenças, estoque e equipe.",
    h1: "Cronograma de abertura de loja",
    metaTitle: "Abertura de loja — cronograma",
    metaDesc: "Modelo gratuito de cronograma de abertura de loja: locação, obra, licenças, PDV, estoque, visual merchandising e inauguração.",
    lead: "Um modelo gratuito de <strong>cronograma de abertura de loja</strong> que vai da escolha do ponto à inauguração — locação e aprovações do locador, projeto e obra, licenças e vistorias, PDV e sistemas, pedido inicial e visual merchandising, contratação e treinamento, e então o soft opening e o fim de semana de inauguração.",
    intro: "Uma abertura de loja é uma obra, um processo seletivo e um ciclo de compras acontecendo ao mesmo tempo, todos apontando para uma data que o shopping já anunciou. O modelo os organiza como frentes paralelas:",
    phases: [
      [
        "Ponto e locação",
        "Análise de área de influência e fluxo, lista curta de pontos, projeção de vendas, negociação da locação e condições de obra do locador. <em>Marco: contrato assinado.</em>"
      ],
      [
        "Projeto e aprovações",
        "Layout dentro do padrão da marca, projeto de fachada e comunicação visual, aprovação da administração do shopping e alvarás de obra."
      ],
      [
        "Obra e instalação",
        "Entrega da unidade pelo locador, marcenaria e divisórias, piso e iluminação, mobiliário e prateleiras, instalação da fachada e da comunicação visual e, por fim, as pendências."
      ],
      [
        "Licenças, sistemas e prevenção de perdas",
        "Alvará de funcionamento, vistorias de bombeiros e acessibilidade, PDV e maquininhas, rede, CFTV e etiquetas antifurto. <em>Marco: liberada para operar.</em>"
      ],
      [
        "Estoque e visual merchandising",
        "Pedido de abertura colocado contra o prazo real dos fornecedores, recebimento e organização da retaguarda, montagem do planograma e instalação do visual merchandising."
      ],
      [
        "Contratação, treinamento e inauguração",
        "Primeiro o gerente da loja, depois a equipe de vendas, treinamento de produto e de PDV, os dias de soft opening e a inauguração. <em>Marco: inauguração.</em>"
      ]
    ],
    callout: "O pedido de abertura é o que não dá para apressar. Mobiliário se acelera e equipe se treina em uma semana, mas uma primeira entrega comprada em cima da hora chega atrasada, e uma loja que abre com vãos na parede passa o fim de semana de inauguração pedindo desculpas. Coloque a compra contra os prazos reais dos fornecedores e trate a data de entrega como precedência rígida do visual merchandising.",
    customize: [
      "Ancore na data de entrega da unidade pelo locador — é quando começa o seu prazo de obra e, muitas vezes, o aluguel.",
      "Acrescente uma linha por pacote de mobiliário se a marcenaria vem de um fornecedor central em vez de ser feita no local.",
      "Estenda a fase de licenças se você vende algo regulado: bebidas, farmácia e tabaco têm cada um o seu próprio prazo.",
      "Separe o visual merchandising em montagem do planograma e instalação em loja; são trabalhos diferentes, feitos por pessoas diferentes.",
      "Mantenha o soft opening como dias reais de venda com clientes reais, não como um passeio da equipe."
    ],
    tips: [
      "<strong>Leia as condições de obra do locador antes de projetar.</strong> Aprovações da administração, horários permitidos e regras de acesso para entregas reorganizam o cronograma, e descobrir isso durante a instalação custa semanas.",
      "<strong>Compre fachada e comunicação visual cedo.</strong> Letreiro sob medida tem prazo longo e costuma ser a última coisa instalada, o que o coloca direto no caminho crítico da inauguração.",
      "<strong>Contrate o gerente bem antes da equipe.</strong> É ele que conduz seleção, treinamento e a aprovação do pedido de abertura, então essa contratação é uma dependência, e não apenas uma linha de quadro de pessoal.",
      "<strong>Teste o PDV com vendas reais.</strong> Maquininhas, tabela de preços e estoque só se comprovam num dia de operação de verdade — que é justamente para isso que serve o soft opening.",
      "<strong>Proteja a janela de visual merchandising.</strong> É o último trabalho a ser espremido e a primeira coisa que o cliente vê; comprimi-lo abaixo de alguns dias aparece na loja."
    ],
    faq: [
      [
        "Quanto tempo leva para abrir uma loja?",
        "Em geral de 4 a 9 meses da escolha do ponto à inauguração para uma unidade de shopping ou de rua, com a negociação da locação e a obra ocupando a maior parte. O modelo usa um cronograma de cerca de sete meses, que você pode comprimir ou estender."
      ],
      [
        "O que costuma atrasar a abertura de uma loja?",
        "Aprovações do locador e da administração do shopping, licenças e comunicação visual entregue tarde. Os três são durações de terceiros, e por isso o modelo trata aprovações e licenças como frentes próprias, e não como parte da obra."
      ],
      [
        "Quando devo comprar o estoque de abertura?",
        "Cedo o bastante para que a entrega chegue antes de começar o visual merchandising, contando de trás para frente a partir do prazo informado pelos fornecedores. O modelo liga a instalação do visual à entrega, para que a dependência fique visível."
      ],
      [
        "Dá para usar em quiosque ou corner?",
        "Sim. Tire as linhas de alvará e fachada no caso de um corner dentro de outra loja e comprima a fase de obra — as frentes de licenças, sistemas, estoque e contratação continuam iguais."
      ],
      [
        "O modelo de abertura de loja é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'film-production-schedule': {
    card: "Desenvolvimento, pré, filmagem, montagem, som, cor e entrega.",
    h1: "Cronograma de produção de filme",
    metaTitle: "Produção de filme — cronograma",
    metaDesc: "Modelo gratuito de cronograma de produção de filme: desenvolvimento, pré-produção, filmagem, pós, som, cor e entrega.",
    lead: "Um modelo gratuito de <strong>cronograma de produção de filme</strong> cobrindo o filme inteiro — desenvolvimento e financiamento, pré-produção e elenco, a filmagem em si, a pós até o corte travado, som e cor, e o pacote de entrega que o distribuidor efetivamente exige. Baixe para o dossiê de financiamento ou abra online para ligar as dependências que decidem se a sua data de entrega sobrevive.",
    intro: "Todo departamento trabalha em função das datas de filmagem, e tudo que vem depois trabalha em função da data de entrega. O modelo coloca os dois pontos fixos no gráfico e deixa o resto se arrumar em volta:",
    phases: [
      [
        "Desenvolvimento",
        "Versões de roteiro, direitos e opção, orçamento e decupagem, captação e a decisão de sinal verde. <em>Marco: sinal verde.</em>"
      ],
      [
        "Pré-produção",
        "Elenco, chefes de equipe, locações e autorizações, direção de arte e construção de cenário, figurino, testes de câmera e equipamento, e o próprio plano de filmagem."
      ],
      [
        "Filmagem",
        "As diárias, divididas em blocos de estúdio e de locação, com a data de encerramento como o centro imóvel de todo o plano. <em>Marco: encerramento das filmagens.</em>"
      ],
      [
        "Pós-produção — imagem",
        "Copiões e primeira montagem durante a filmagem, corte do montador, corte do diretor, notas e travamento do corte. <em>Marco: corte travado.</em>"
      ],
      [
        "Pós-produção — som e finalização de imagem",
        "Dublagem (ADR), foley, desenho de som, trilha, mixagem, entrega dos planos de VFX, correção de cor e conformação."
      ],
      [
        "Entrega e distribuição",
        "DCP e masters, controle de qualidade, legendas e localização, materiais de divulgação, inscrições em festivais e o pacote de entrega. <em>Marco: entrega aceita.</em>"
      ]
    ],
    callout: "A filmagem é a única fase que não se estica sem gastar dinheiro real por dia. Tudo que vem antes existe para tornar a filmagem possível, e tudo que vem depois herda o que a filmagem produziu. Fixe primeiro as datas de filmagem e depois verifique se a pré-produção tem prazo suficiente atrás delas — não o contrário.",
    customize: [
      "Defina as datas de início e de encerramento das filmagens primeiro e deixe a pré-produção contar de trás para frente a partir delas.",
      "Use uma linha por bloco de filmagem ou locação, para que as diárias de mudança fiquem visíveis; mudanças de locação não previstas comem diárias.",
      "Estenda as linhas de VFX e comece-as mais cedo se o número de planos for relevante — VFX costuma correr da filmagem até a mixagem final.",
      "Coloque os prazos de inscrição em festivais no gráfico como marcos; são datas fixas que puxam todo o cronograma de pós para a frente.",
      "Mantenha as diárias de contingência dentro da filmagem, e não no fim, onde ficam indistinguíveis de atraso."
    ],
    tips: [
      "<strong>Comece copiões e montagem durante a filmagem.</strong> Um montador trabalhando em paralelo faz com que a primeira montagem exista no dia do encerramento, em vez de começar ali.",
      "<strong>Trave o corte antes de contratar som e cor.</strong> Remontar depois de a mixagem ter começado é o erro evitável mais caro da pós-produção.",
      "<strong>Trate locações e autorizações como itens de prazo longo.</strong> Licenças, interdições de via e contratos de locação têm durações de terceiros que não se comprimem com esforço.",
      "<strong>Feche o elenco principal antes de fechar o plano de filmagem.</strong> A disponibilidade dos atores reescreve o plano, então é uma dependência da programação, e não uma tarefa paralela.",
      "<strong>Leia a lista de entrega no começo, não no fim.</strong> As exigências de entrega são longas, específicas e inegociáveis, e descobri-las no último mês acrescenta semanas."
    ],
    faq: [
      [
        "Quanto dura um cronograma de produção de filme?",
        "Num longa independente, em geral de 12 a 18 meses do sinal verde à entrega — cerca de dois a três meses de pré-produção, de quatro a oito semanas de filmagem e de seis a nove meses de pós e entrega. O modelo usa um cronograma nessa faixa."
      ],
      [
        "Quais são as fases de uma produção audiovisual?",
        "Desenvolvimento, pré-produção, filmagem, pós-produção e entrega. Este modelo divide a pós em imagem e som/finalização, porque o travamento do corte é o portão que separa as duas."
      ],
      [
        "De quanta pré-produção eu preciso?",
        "Do suficiente para escalar elenco, prospectar locações, obter autorizações e construir cenários antes da primeira diária. De oito a doze semanas é comum num longa modesto, e encurtar isso aparece como diárias perdidas na filmagem, não como economia."
      ],
      [
        "O modelo inclui VFX?",
        "Sim — a entrega dos planos de VFX fica na fase de finalização e começa durante a pós. Se o número de planos for grande, antecipe essas linhas para que o trabalho do fornecedor se sobreponha à montagem."
      ],
      [
        "O modelo de produção de filme é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro e sem marca d'água."
      ]
    ]
  },

  'bridge-construction-schedule': {
    card: "Sondagem, aprovações, estacas, mesoestrutura, tabuleiro e liberação.",
    h1: "Cronograma de construção de ponte",
    metaTitle: "Construção de ponte — cronograma",
    metaDesc: "Modelo gratuito de cronograma de ponte: sondagem, aprovações, estacas, mesoestrutura, tabuleiro, prova de carga e liberação.",
    lead: "Um modelo gratuito de <strong>cronograma de construção de ponte</strong> montado sobre um programa de obra de arte especial real — investigação geotécnica e projeto, licenciamento e aprovações, estaqueamento e fundações, mesoestrutura, montagem do tabuleiro, pavimentação e defensas, prova de carga e liberação ao tráfego. Baixe para uma proposta de licitação ou para o relatório ao cliente, ou abra online para ligar as janelas de interdição e as operações condicionadas ao clima que de fato mandam na data.",
    intro: "Um programa de ponte é governado por coisas que não são suas: o rio, a via abaixo, o clima e o órgão aprovador. O modelo dá a cada uma delas um lugar visível, em vez de enterrá-las dentro de uma barra de construção:",
    phases: [
      [
        "Levantamento e investigação geotécnica",
        "Levantamento topográfico e batimétrico, sondagens e interpretação geotécnica, pesquisa de interferências e diagnóstico ambiental. <em>Marco: relatório de sondagem emitido.</em>"
      ],
      [
        "Projeto e aprovações",
        "Projeto básico e executivo, projeto das obras provisórias, aprovação técnica pelo órgão rodoviário ou ferroviário, licenças ambientais e outorga para intervenção no curso d'água. <em>Marco: aprovação técnica.</em>"
      ],
      [
        "Serviços preliminares e interdições",
        "Instalação do canteiro, acessos e caminhos de serviço, remanejamento de interferências, ensecadeira ou aterro provisório, e as janelas de interdição de via ou de navegação já reservadas."
      ],
      [
        "Fundações e estaqueamento",
        "Estacas em cada pilar e encontro, ensaios em estacas, blocos de coroamento e concretagem das fundações — a operação mais exposta ao risco geotécnico e ao nível do rio."
      ],
      [
        "Mesoestrutura",
        "Encontros e alas, pilares e travessas, berços e instalação dos aparelhos de apoio. <em>Marco: mesoestrutura concluída.</em>"
      ],
      [
        "Superestrutura e tabuleiro",
        "Fabricação e transporte das vigas, lançamento com guindaste ou por deslocamento dentro da interdição, fôrmas, armação e concretagem do tabuleiro."
      ],
      [
        "Pavimentação, ensaios e liberação",
        "Impermeabilização, pavimentação, guarda-corpos e defensas, drenagem, prova de carga, pendências e liberação ao tráfego. <em>Marco: liberada ao tráfego.</em>"
      ]
    ],
    callout: "A janela de interdição é o cronograma. O lançamento das vigas sobre via em operação, ferrovia ou rio navegável quase sempre acontece dentro de uma interdição solicitada meses antes e que não se muda. Coloque a solicitação, a confirmação e a própria janela no gráfico como tarefas separadas — tudo a montante existe para tornar aquele fim de semana viável.",
    customize: [
      "Lance primeiro as datas de interdição já confirmadas e trabalhe de trás para frente; quase todas as outras datas de uma ponte negociam em torno delas.",
      "Acrescente uma linha por pilar e por encontro quando a sequência da mesoestrutura estiver definida, para acompanhar estacas e concretagens individualmente.",
      "Sinalize as operações condicionadas ao clima — concretagem do tabuleiro, impermeabilização e pavimentação têm limites de temperatura ou de chuva que vale mostrar.",
      "Estenda a barra de aprovação técnica para o prazo real de análise do seu órgão, incluindo o ciclo de resposta a comentários.",
      "Mantenha o projeto das obras provisórias como tarefa própria; cimbramento, ensecadeira e esquema de lançamento aprovados condicionam a obra definitiva.",
      "Insira o período de cheia ou a piracema como barras de bloqueio, se você está intervindo em curso d'água."
    ],
    tips: [
      "<strong>Solicite as interdições antes de terminar o projeto.</strong> Os prazos para interdição de via e de ferrovia se contam em meses, e as janelas vão para quem reservou primeiro.",
      "<strong>Trate obra provisória como obra definitiva.</strong> Cimbramento, ensecadeira e sistemas de lançamento precisam de projeto, verificação e aprovação, e ficam diretamente no caminho crítico do tabuleiro.",
      "<strong>Não programe concretagem que você não consegue controlar termicamente.</strong> Grandes concretagens de tabuleiro empurradas para o pico do frio ou do calor são abandonadas na manhã do dia; planeje-as para uma janela climática viável.",
      "<strong>Modele o rio, não a média.</strong> Fundação em curso d'água deve ser programada em torno do período histórico de cheia, com folga para perder um mês, e não uma semana.",
      "<strong>Reserve prazo real para a prova de carga.</strong> Ensaio, instrumentação e a certificação que vem depois são um portão para a liberação, não uma vistoria de fim de obra.",
      "<strong>Estabeleça a linha de base na aprovação técnica.</strong> Tudo antes disso é estimativa; depois, acompanhe a variação para que mudanças de escopo pedidas pelo órgão fiquem visíveis."
    ],
    faq: [
      [
        "Quanto tempo leva para construir uma ponte?",
        "Uma ponte rodoviária pequena, de vão único, costuma levar de 9 a 18 meses a partir do início da obra; uma travessia importante leva anos. Este modelo usa um programa de cerca de dois anos, que você comprime ou estica movendo a data de liberação."
      ],
      [
        "O que costuma atrasar uma obra de ponte?",
        "As condições de solo encontradas no estaqueamento, os ciclos de aprovação técnica com o órgão rodoviário ou ferroviário e as janelas de interdição perdidas. As três são frentes separadas aqui, para que a exposição fique visível antes de doer."
      ],
      [
        "Como represento uma interdição de via ou de ferrovia no gráfico?",
        "Coloque a solicitação, a confirmação e a própria janela como três tarefas, e faça o lançamento das vigas depender da janela. Assim, qualquer atraso a montante ameaça visivelmente uma data que você não pode mudar."
      ],
      [
        "Serve para uma passarela ou a substituição de um bueiro?",
        "Sim. Mantenha as fases de levantamento, aprovações, fundações e superestrutura e reduza as linhas de pilar — a sequência é a mesma em escala menor."
      ],
      [
        "O modelo de construção de ponte é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, além de edição online gratuita, sem cadastro e sem marca d'água."
      ]
    ]
  },

  'new-product-development-plan': {
    card: "Conceito, viabilidade, protótipo, validação, ferramental e piloto.",
    h1: "Plano de desenvolvimento de novo produto",
    metaTitle: "Desenvolvimento de produto — plano",
    metaDesc: "Modelo gratuito de plano de desenvolvimento de produto: conceito, viabilidade, protótipos, validação, ferramental e piloto.",
    lead: "Um modelo gratuito de <strong>plano de desenvolvimento de novo produto</strong> montado como um programa de portões de decisão — conceito, viabilidade, projeto detalhado, prototipagem, validação e ensaios, ferramental, produção piloto e passagem para o lançamento. É a linha de engenharia que produz algo para vender; para o lado comercial do mesmo programa há o plano de lançamento de produto, e para o horizonte mais longo, o roadmap de produto.",
    intro: "Cronogramas de desenvolvimento não erram nas tarefas: erram nos portões. O modelo separa cada etapa para que um portão seja uma decisão com evidência atrás dela, e não uma data que passa em silêncio:",
    phases: [
      [
        "Conceito",
        "Definição da oportunidade, necessidades e requisitos do cliente, esboços de conceito, business case inicial e o portão de conceito. <em>Portão 1: conceito aprovado.</em>"
      ],
      [
        "Viabilidade",
        "Estudos de viabilidade técnica, análise de fazer ou comprar, varredura regulatória, modelo de custo e avaliação de riscos. <em>Portão 2: viabilidade aprovada.</em>"
      ],
      [
        "Projeto detalhado",
        "Arquitetura e detalhamento, projeto voltado à manufatura e à montagem (DFMA), lista de materiais, engajamento de fornecedores e a análise crítica de projeto. <em>Portão 3: congelamento do projeto.</em>"
      ],
      [
        "Prototipagem",
        "Construção alfa, avaliação de engenharia, iterações de projeto e a construção beta usada na validação."
      ],
      [
        "Validação e ensaios",
        "Verificação de projeto, ensaios ambientais e de vida, submissões de certificação e conformidade, e testes com usuários. <em>Portão 4: projeto validado.</em>"
      ],
      [
        "Ferramental e industrialização",
        "Projeto e fabricação de ferramental, inspeção da primeira peça, desenvolvimento de processo, dispositivos e qualificação de fornecedores."
      ],
      [
        "Produção piloto e passagem",
        "Lote piloto, aprovação de peça de produção, plano de rampa, pacote de documentação e passagem para operações e para o time de lançamento. <em>Portão 5: liberação para produção.</em>"
      ]
    ],
    callout: "O congelamento do projeto é o marco caro. Toda mudança depois dele custa dinheiro de ferramental, e toda mudança depois da inspeção da primeira peça custa dinheiro de ferramental duas vezes. Fazer do congelamento um portão de verdade — com evidência de ensaio atrás dele, e não uma data otimista — é a decisão isolada que preserva o orçamento do programa.",
    customize: [
      "Defina a data exigida de liberação para produção e trabalhe de trás para frente; o prazo de ferramental costuma decidir se o plano é sequer possível.",
      "Compre o ferramental de prazo longo contra prazos realmente cotados, e coloque a tarefa de pedido antes do congelamento do projeto se você estiver assumindo esse risco de forma deliberada.",
      "Acrescente uma linha por organismo certificador se o produto exige várias aprovações — elas correm em paralelo e cada uma tem a sua própria fila.",
      "Expanda a prototipagem para quantas construções você realmente precisa; duas é otimismo para qualquer coisa com peça móvel.",
      "Mantenha a qualificação de fornecedores visível — uma peça qualificada vinda de fornecedor não qualificado não é uma peça liberável.",
      "Marque os cinco portões como marcos, para que o comitê veja decisões, e não barras de avanço."
    ],
    tips: [
      "<strong>Não sobreponha ferramental a mudanças de projeto.</strong> Abrir molde antes do congelamento é a forma mais comum de um programa gastar toda a contingência em uma semana.",
      "<strong>Comece a certificação cedo.</strong> Fila de laboratório e análise regulatória são durações de terceiros que não se comprimem com esforço, então reserve as vagas assim que existir uma amostra ensaiável.",
      "<strong>Dê barra própria à validação.</strong> Tempo de ensaio é tempo decorrido real — ensaio de vida, em especial, roda por semanas independentemente de quantos engenheiros você alocar.",
      "<strong>Engaje fornecedores durante o projeto, não depois.</strong> Retorno de manufaturabilidade que chega depois do congelamento vira pedido de mudança, e não entrada de projeto.",
      "<strong>Separe este plano do plano de lançamento.</strong> As datas de marketing devem pender da liberação para produção, e não de uma estimativa de engenharia feita na fase de conceito.",
      "<strong>Estabeleça a linha de base no congelamento do projeto.</strong> Acompanhe a variação a partir do projeto congelado, para que mudanças tardias apareçam como custo de prazo, e não sejam absorvidas em silêncio."
    ],
    faq: [
      [
        "Qual a diferença entre este modelo e o de lançamento de produto?",
        "Este é a linha de engenharia, que termina na liberação para produção — do conceito ao ferramental e à produção piloto. O plano de lançamento de produto começa mais ou menos onde este termina e cobre posicionamento, preço, prontidão de canal e a campanha de entrada no mercado."
      ],
      [
        "Quanto tempo leva desenvolver um produto novo?",
        "Varia com a complexidade: um acessório de consumo simples pode levar de 6 a 9 meses, enquanto um produto regulado ou com muito ferramental costuma levar de 18 a 36. O modelo usa um programa de dezoito meses, que você pode comprimir ou estender."
      ],
      [
        "Quais são os portões deste modelo?",
        "Conceito aprovado, viabilidade aprovada, congelamento do projeto, projeto validado e liberação para produção. Cada um é um marco, com as tarefas que produzem a evidência como precedências."
      ],
      [
        "Dá para usar em produto de software?",
        "Em parte — as fases de conceito, viabilidade, projeto e validação transferem bem, mas você tiraria ferramental e produção piloto. Para software, o modelo de projeto de software é mais adequado."
      ],
      [
        "O modelo de desenvolvimento de produto é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'trade-show-planning-timeline': {
    card: "Contratação de área, estande, frete, equipe e follow-up de leads.",
    h1: "Cronograma de planejamento de feira",
    metaTitle: "Participação em feira — cronograma",
    metaDesc: "Modelo gratuito de cronograma de feira: contratação de área, estande, frete, marketing pré-feira, equipe, dias de feira e follow-up.",
    lead: "Um modelo gratuito de <strong>cronograma de participação em feira</strong> em contagem regressiva até o evento — escolha e contratação da área, projeto e montagem do estande, prazos de frete e de despacho, marketing pré-feira e agendamento de reuniões, escala e briefing da equipe, os dias de feira e o follow-up dos leads, que é o que decide se tudo aquilo se pagou. Para eventos que não são feiras, use o modelo geral de planejamento de eventos.",
    intro: "Expor é uma contagem regressiva, não um projeto. Três ou quatro datas são realmente imóveis e todo o resto se organiza em volta delas, por isso o modelo as mostra como marcos, e não como tarefas:",
    phases: [
      [
        "Escolha e contratação da área",
        "Seleção da feira, aprovação de orçamento, análise da planta, escolha da área na data de prioridade e assinatura do contrato. <em>Marco: área contratada.</em>"
      ],
      [
        "Projeto e montagem do estande",
        "Briefing, projeto conceitual, escolha da montadora, aprovação do projeto pela organização da feira, fabricação, comunicação visual e pré-montagem."
      ],
      [
        "Serviços do evento e logística",
        "Pedido de energia, rigging, internet e mobiliário na tarifa antecipada, contratação de frete, o prazo de embarque e o horário de montagem atribuído. <em>Marco: prazo de embarque.</em>"
      ],
      [
        "Marketing pré-feira",
        "Lista de contas-alvo, campanha de convites, agendamento de reuniões, assessoria de imprensa e vagas de palestra, e redes sociais e site nas últimas semanas."
      ],
      [
        "Equipe e treinamento",
        "Escala do estande, passagens e hospedagem, briefing de produto e de mensagem, treinamento de captura de leads e ensaio da demonstração."
      ],
      [
        "Dias de feira",
        "Montagem, abertura, reuniões e demonstrações, revisão diária de leads, desmontagem e frete de retorno. <em>Marco: abertura da feira.</em>"
      ],
      [
        "Follow-up e avaliação",
        "Carga dos leads em dias, não semanas, follow-up por prioridade, atribuição de pipeline, análise de custo e a decisão sobre a próxima edição."
      ]
    ],
    callout: "Três prazos deste gráfico não se movem: a data de escolha de área, que define onde você fica na próxima edição; o prazo da tarifa antecipada, depois do qual todo serviço custa mais; e o prazo de embarque, depois do qual o seu estande chega tarde ou não chega. Todo o resto é negociável. Marque os três e faça o plano caber em volta deles.",
    customize: [
      "Defina a data de abertura da feira e deixe o plano inteiro contar de trás para frente — é assim que o planejamento de feira funciona de fato.",
      "Substitua os prazos genéricos pelas datas reais do manual do expositor assim que ele for publicado.",
      "Acrescente linhas por embarque se você envia estande, produto e material impresso separadamente; os prazos são diferentes.",
      "Estenda a barra de marketing pré-feira se você depende de reuniões agendadas; a agenda enche de seis a oito semanas antes, não na semana anterior.",
      "Inclua uma tarefa de despacho aduaneiro e carnê ATA em feiras internacionais — tem prazo próprio e pode deixar o estande parado na alfândega.",
      "Mantenha o follow-up no gráfico com tarefas datadas; lead perde valor rápido, e plano de follow-up sem data não é plano."
    ],
    tips: [
      "<strong>Contrate a próxima edição durante a feira atual.</strong> A escolha de área costuma acontecer no local, com prioridade por tempo de casa e investimento, e é por isso que ela abre este modelo em vez de fechá-lo.",
      "<strong>Peça os serviços na tarifa antecipada.</strong> Energia, rigging e internet pedidos depois do prazo custam sistematicamente muito mais pela mesma coisa.",
      "<strong>Cumpra o prazo de embarque com folga.</strong> Cargas atrasadas vão para o fim da fila de descarga, e o seu horário de montagem não espera por elas.",
      "<strong>Aprove o projeto do estande com a organização cedo.</strong> Altura, placas suspensas e estruturas de dois pisos exigem aprovação e são barrados no local se nunca foram submetidos.",
      "<strong>Ensaie a demonstração antes de viajar.</strong> Descobrir que a demo precisa de uma banda que você não contratou é um problema de piso de feira sem solução no piso da feira.",
      "<strong>Faça o follow-up em até 48 horas.</strong> O maior fator isolado de retorno em feiras é a velocidade do follow-up, então programe-o antes de viajar, não depois de voltar."
    ],
    faq: [
      [
        "Com quanta antecedência começar o planejamento de uma feira?",
        "De seis a nove meses para uma feira grande, e mais ainda se você quer boa posição na planta — a área da próxima edição costuma ser escolhida durante a atual. Este modelo cobre cerca de oito meses até a abertura."
      ],
      [
        "Qual a diferença para o modelo de planejamento de eventos?",
        "Este é específico de exposição: contrato de área, montagem de estande, prazos de frete e despacho, pedidos na tarifa antecipada e follow-up de leads. O modelo de planejamento de eventos cobre a realização do seu próprio evento — local, programação, palestrantes e público."
      ],
      [
        "Quais são os prazos imóveis de quem expõe?",
        "A escolha de área, o prazo da tarifa antecipada no manual do expositor, o prazo de frete e despacho, e o horário de montagem atribuído. Os quatro aparecem aqui como marcos."
      ],
      [
        "Serve tanto para um estande de congresso quanto para uma feira grande?",
        "Sim. Mantenha a estrutura e reduza as linhas de montagem se você vai usar estande básico da organização ou apenas uma mesa."
      ],
      [
        "O modelo de feira é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'recruitment-hiring-plan': {
    card: "Da requisição de vaga ao aviso prévio e à data de início.",
    h1: "Plano de recrutamento e seleção",
    metaTitle: "Recrutamento e seleção — plano",
    metaDesc: "Modelo gratuito de plano de recrutamento e seleção: aprovação da vaga, divulgação, triagem, entrevistas, proposta e aviso prévio.",
    lead: "Um modelo gratuito de <strong>plano de recrutamento e seleção</strong> cobrindo uma vaga de ponta a ponta — definição do cargo e aprovação de quadro, divulgação, triagem, o ciclo de entrevistas, avaliação e referências, proposta e negociação, o aviso prévio do candidato e a data de início. Ele termina exatamente onde começa a integração de novos colaboradores.",
    intro: "A maioria dos planos de contratação subestima as mesmas duas coisas: quanto tempo leva a aprovação no começo e quanto leva o aviso prévio no fim. O modelo dá barra real às duas, para que a data de início seja honesta:",
    phases: [
      [
        "Definição do cargo e aprovação",
        "Justificativa, descrição da vaga, nível e faixa salarial, aprovação de quadro e abertura da requisição. <em>Marco: requisição aprovada.</em>"
      ],
      [
        "Divulgação e captação",
        "Publicação do anúncio, campanha de indicações, busca ativa e abordagem direta, briefing de consultoria quando houver, e formação do funil até o número-alvo de candidatos."
      ],
      [
        "Triagem",
        "Análise de currículos, entrevistas de triagem com o recrutador, conversas com o gestor e a definição da lista curta. <em>Marco: lista curta definida.</em>"
      ],
      [
        "Ciclo de entrevistas",
        "Entrevistas estruturadas com o painel, exercício técnico ou funcional, logística de agendamento e as reuniões de alinhamento após cada rodada."
      ],
      [
        "Avaliação e decisão",
        "Estudo de caso ou amostra de trabalho, painel final, consolidação das avaliações, referências e verificações. <em>Marco: decisão de contratação.</em>"
      ],
      [
        "Proposta e negociação",
        "Aprovação da remuneração, proposta verbal, contrato por escrito, negociação e assinatura. <em>Marco: proposta aceita.</em>"
      ],
      [
        "Aviso prévio e pré-início",
        "Pedido de demissão e aviso prévio do candidato, contato de manutenção do vínculo, equipamento e acessos, e o primeiro dia. <em>Marco: data de início.</em>"
      ]
    ],
    callout: "O aviso prévio não é burocracia — muitas vezes é a barra mais longa do gráfico. Uma contratação sênior com três meses de aviso significa que a requisição aprovada hoje só produz alguém trabalhando daqui a cinco ou seis meses. Planos que param em \"proposta aceita\" prometem capacidade um trimestre antes de ela existir.",
    customize: [
      "Trabalhe de trás para frente a partir de quando você precisa da pessoa produtiva, e não de quando quer que ela assine.",
      "Ajuste a barra de aviso prévio à norma real do cargo e do país — um mês, três meses e seis meses produzem planos muito diferentes.",
      "Duplique as fases de divulgação até proposta por vaga se você está contratando um time, e escalone-as contra a disponibilidade dos entrevistadores.",
      "Acrescente uma frente de consultoria ou headhunter com marcos próprios, se houver; as datas de briefing e de lista curta são contratuais.",
      "Insira etapas de visto ou de autorização de trabalho como tarefas próprias quando aplicável — podem passar do aviso prévio.",
      "Mantenha no gráfico as tarefas de manutenção do vínculo. É entre a assinatura e o início que candidatos aceitos recebem contraproposta e somem."
    ],
    tips: [
      "<strong>Aprove o quadro antes de publicar a vaga.</strong> Uma requisição que chega ao painel final sem orçamento aprovado desperdiça o tempo do candidato e a sua credibilidade.",
      "<strong>Reserve a agenda do painel com antecedência.</strong> O agendamento, e não a decisão, é a maior fonte de atraso na maioria dos processos.",
      "<strong>Comprima o ciclo, não a triagem.</strong> Bons candidatos costumam estar em mais de um processo; um ciclo que passa de três semanas os perde para quem foi mais rápido.",
      "<strong>Peça referências antes da decisão final quando puder.</strong> Elas exigem uma semana de cobrança e ficam exatamente entre a decisão e a proposta.",
      "<strong>Trate a proposta como negociação com duração.</strong> Prever alguns dias para contraproposta e resposta é mais realista do que supor aceite no mesmo dia.",
      "<strong>Passe para a integração na assinatura, não no primeiro dia.</strong> Equipamento, acessos e o plano da primeira semana precisam de prazo dentro do aviso prévio."
    ],
    faq: [
      [
        "Quanto tempo leva para contratar alguém?",
        "Em geral de 6 a 12 semanas da requisição aprovada até a proposta assinada, mais o aviso prévio por cima. Este modelo cobre cerca de cinco meses da justificativa à data de início, o que é realista para um cargo com aviso de um a três meses."
      ],
      [
        "Como isso se encaixa com o modelo de integração?",
        "Este plano termina na data de início; o modelo de integração de novos colaboradores parte do primeiro dia e vai até os noventa dias. Use os dois em sequência para ter o quadro completo."
      ],
      [
        "Qual a causa mais comum de um processo lento?",
        "O agendamento de entrevistas e as decisões internas lentas, e não a captação. Por isso o ciclo de entrevistas e as reuniões de alinhamento são tarefas separadas aqui, em vez de um bloco único."
      ],
      [
        "Dá para planejar várias contratações ao mesmo tempo?",
        "Sim — duplique as fases de divulgação até proposta por vaga e escalone os ciclos de entrevista para não agendar o mesmo painel duas vezes na mesma semana."
      ],
      [
        "O modelo de recrutamento é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'internal-audit-plan': {
    card: "Plano anual, escopo, trabalho de campo, achados e acompanhamento.",
    h1: "Plano de auditoria interna",
    metaTitle: "Auditoria interna — plano",
    metaDesc: "Modelo gratuito de plano de auditoria interna: avaliação de riscos, escopo, trabalho de campo, achados, resposta e acompanhamento.",
    lead: "Um modelo gratuito de <strong>plano de auditoria interna</strong> cobrindo um ciclo completo — avaliação anual de riscos e universo auditável, aprovação do plano pelo comitê, escopo e planejamento do trabalho, trabalho de campo e testes de controles, achados e resposta da administração, emissão do relatório e acompanhamento da remediação. Baixe para o material do comitê de auditoria ou abra online para distribuir vários trabalhos ao longo do ano.",
    intro: "Um plano de auditoria tem duas camadas: o programa anual e o trabalho individual dentro dele. O modelo mostra as duas, para que o comitê veja cobertura enquanto a equipe vê o trabalho:",
    phases: [
      [
        "Planejamento anual",
        "Avaliação de riscos, atualização do universo auditável, entrevistas com partes interessadas, plano de recursos e orçamento e a minuta do plano anual. <em>Marco: plano aprovado pelo comitê.</em>"
      ],
      [
        "Escopo do trabalho",
        "Comunicação de abertura, pesquisa prévia, entendimento dos processos, matriz de riscos e controles e o escopo acordado no termo de referência."
      ],
      [
        "Trabalho de campo e testes",
        "Avaliação do desenho dos controles, seleção de amostras, testes de efetividade e substantivos, coleta de evidências e papéis de trabalho."
      ],
      [
        "Achados e validação",
        "Minuta das constatações, verificação de exatidão factual com os donos do processo, classificação e priorização, e a reunião de encerramento. <em>Marco: reunião de encerramento realizada.</em>"
      ],
      [
        "Resposta da administração",
        "Acordo dos planos de ação, responsáveis nomeados e prazos, e escalonamento de tudo que a administração optar por não aceitar."
      ],
      [
        "Relatório",
        "Minuta do relatório, revisão de qualidade, emissão da versão final e apresentação ao comitê de auditoria. <em>Marco: relatório emitido.</em>"
      ],
      [
        "Acompanhamento",
        "Monitoramento da remediação contra os prazos acordados, reteste das ações encerradas e reporte dos itens vencidos de volta ao comitê."
      ]
    ],
    callout: "O acompanhamento é onde o valor da auditoria se realiza e é justamente onde os planos costumam parar. Um relatório emitido sem tarefa datada de verificação atrás dele é uma opinião; um prazo de remediação monitorado com reteste no gráfico é um controle que de fato mudou. Mantenha as barras de acompanhamento no plano e dimensione equipe para elas.",
    customize: [
      "Coloque vários trabalhos lado a lado ao longo do ano para ver se a equipe está realmente disponível para todos eles.",
      "Fixe primeiro as datas das reuniões do comitê de auditoria — elas são imóveis, e toda data de relatório conta de trás para frente a partir de uma delas.",
      "Acrescente uma linha por entidade auditável se você reporta ao comitê a cobertura do universo auditável.",
      "Estenda o trabalho de campo em auditorias com visitas a unidades ou extrações de dados; ambas levam mais tempo que o teste de escritório.",
      "Inclua uma reserva para contingência ou investigações especiais; trabalho não planejado é normal, e trabalho não planejado sem orçamento destrói o plano.",
      "Acompanhe o prazo de remediação de cada achado como tarefa própria depois da emissão do relatório, em vez de numa planilha à parte."
    ],
    tips: [
      "<strong>Construa o plano sobre risco e depois confira a cobertura.</strong> Um plano priorizado por risco que deixa uma unidade inteira de fora por três anos é exatamente o achado que a auditoria externa fará sobre você.",
      "<strong>Comunique cedo e agende os entendimentos de processo.</strong> A disponibilidade do auditado é a causa mais comum de estouro no trabalho de campo, e é inteiramente previsível.",
      "<strong>Valide os fatos antes de classificar os achados.</strong> Um erro factual descoberto depois da classificação custa a autoridade do relatório e acrescenta um ciclo inteiro de revisão.",
      "<strong>Não deixe a resposta da administração se arrastar.</strong> Dê a ela uma barra delimitada, com prazo; períodos de resposta em aberto são como relatórios perdem a data do comitê.",
      "<strong>Retestar, não perguntar de novo.</strong> A verificação de uma ação encerrada exige evidência, o que pede tempo no cronograma, e não apenas um e-mail de confirmação.",
      "<strong>Estabeleça a linha de base na aprovação do plano.</strong> Acompanhe a variação contra o plano aprovado, para que o trabalho não planejado apareça como deslocamento, e não seja absorvido em silêncio."
    ],
    faq: [
      [
        "O que deve conter um plano de auditoria interna?",
        "Uma avaliação de riscos e o universo auditável, uma lista priorizada de trabalhos com os recursos correspondentes e, para cada trabalho, escopo, trabalho de campo, achados, resposta da administração, relatório e acompanhamento. As sete fases já vêm prontas."
      ],
      [
        "Quanto tempo leva um trabalho de auditoria interna?",
        "Em geral de 6 a 12 semanas da comunicação de abertura à emissão do relatório numa revisão de porte médio, com o acompanhamento correndo por meses depois. O trabalho deste modelo leva cerca de quatro meses de ponta a ponta."
      ],
      [
        "Com que frequência revisar o plano anual?",
        "A maioria das áreas aprova o plano anualmente e o revisita ao menos semestralmente, já que os perfis de risco e o trabalho não planejado mudam. Deixar contingência no plano é o que torna essa revisão administrável."
      ],
      [
        "Serve para uma auditoria externa ou de certificação?",
        "Em parte. Escopo, trabalho de campo, achados e acompanhamento transferem bem; você substituiria a fase de planejamento anual pelo ciclo de auditoria do próprio organismo certificador."
      ],
      [
        "O modelo de plano de auditoria interna é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'hospital-department-opening': {
    card: "Projeto, obra, equipamentos, CCIH, equipe e primeiro paciente.",
    h1: "Plano de abertura de setor hospitalar",
    metaTitle: "Abertura de setor hospitalar — plano",
    metaDesc: "Modelo gratuito de plano de abertura de setor hospitalar: obra, equipamentos, CCIH, licenciamento sanitário, equipe e primeiro paciente.",
    lead: "Um modelo gratuito de <strong>plano de abertura de setor hospitalar</strong> cobrindo o comissionamento de uma nova unidade assistencial — estudo de viabilidade e aprovação do investimento, projeto arquitetônico e de instalações conforme a RDC 50 da Anvisa, obra e acabamento, aquisição de equipamentos médico-assistenciais, parecer da CCIH, dimensionamento e capacitação da equipe, governança da informação e a reta final até o primeiro paciente.",
    intro: "Abrir uma área assistencial não é uma obra com um pedaço clínico no fim. É uma sequência de portões regulatórios, e qualquer um deles impede a porta de abrir no dia em que ela ficou pronta. O modelo dá a cada portão uma linha visível:",
    phases: [
      [
        "Estudo de viabilidade e aprovação",
        "Necessidade assistencial e modelo de atendimento, projeção de demanda e de força de trabalho, plano de investimento e aprovação pela diretoria e pela fonte pagadora. <em>Marco: investimento aprovado.</em>"
      ],
      [
        "Projeto e adequações",
        "Programa de necessidades, projeto executivo conforme a RDC 50 e as normas técnicas, adequações justificadas onde a estrutura existente não atende, e aprovação do projeto arquitetônico na vigilância sanitária. <em>Marco: projeto congelado.</em>"
      ],
      [
        "Obra e acabamento",
        "Serviços preliminares e remanejamento de atividades, estrutura e instalações prediais, rede de gases medicinais, climatização e quartos de isolamento, acabamentos e entrega. <em>Marco: obra concluída.</em>"
      ],
      [
        "Equipamentos médico-assistenciais",
        "Relação de equipamentos e orçamento, processo de compra, itens de prazo longo como imagem e equipamentos de grande porte, entrega, instalação, testes de aceitação e calibração."
      ],
      [
        "Controle de infecção e validação",
        "Análise do projeto pela CCIH, plano de segurança da água e regime de descarga, validação da climatização, amostragem ambiental e microbiológica. <em>Marco: parecer favorável da CCIH.</em>"
      ],
      [
        "Equipe e capacitação",
        "Dimensionamento e quadro de pessoal, recrutamento, credenciamento do corpo clínico, integração e validação de competências."
      ],
      [
        "Governança da informação",
        "Parametrização dos sistemas assistenciais, avaliação de impacto à proteção de dados exigida pela LGPD, testes de prontuário e de integrações, e o parecer final de governança."
      ],
      [
        "Comissionamento e abertura",
        "Protocolos e procedimentos operacionais, simulações e dias de operação assistida, licenciamento sanitário e vistoria da vigilância, decisão de abrir ou não abrir e primeiro paciente. <em>Marco: primeiro paciente.</em>"
      ]
    ],
    callout: "Validação não é pendência de obra. Verificação da climatização, coleta de água e testes de aceitação dos equipamentos acontecem depois que o construtor sai e antes que um paciente possa ser internado, e cada um deles tem um prazo de laboratório que você não controla. Deixe de seis a oito semanas entre a conclusão da obra e a data de abertura, e coloque cada ensaio no gráfico como tarefa com data de resultado.",
    customize: [
      "Fixe a data exigida de abertura e trabalhe de trás para frente a partir do parecer da CCIH — é esse portão, e não o fim da obra, que realmente libera o espaço.",
      "Acrescente uma linha por adequação assim que a análise de projeto começar; cada uma é uma aceitação formal de risco com um aprovador nomeado.",
      "Desdobre a fase de equipamentos em uma linha por item de investimento, com prazos realmente cotados — imagem e equipamentos cirúrgicos costumam ultrapassar a obra.",
      "Estenda o recrutamento se você precisa de enfermagem especializada ou de contratação de médico titular; são essas as vagas que escorregam.",
      "Insira a janela de vistoria da vigilância sanitária como barra fixa e faça o primeiro paciente depender dela.",
      "Mantenha um dia de simulação antes da abertura — é a forma mais barata de encontrar as falhas de processo."
    ],
    tips: [
      "<strong>Inicie o plano de segurança da água no dia em que a tubulação for carregada.</strong> Os regimes de descarga e coleta duram semanas, e uma amostra reprovada zera o relógio em vez de atrasar um dia.",
      "<strong>Compre equipamento de prazo longo contra o plano de investimento, e não contra a obra.</strong> Se o pedido espera o início da obra, a entrega chega depois da unidade pronta.",
      "<strong>Trate o credenciamento como dependência.</strong> Um médico sem credenciamento não atende, por mais pronta que a unidade esteja.",
      "<strong>Comece cedo a avaliação de impacto de proteção de dados.</strong> Parametrizar o sistema assistencial é rápido; a aprovação de governança em volta dela não é.",
      "<strong>Faça a decisão de abrir com os donos dos portões na sala.</strong> CCIH, governança da informação, engenharia clínica e a direção técnica têm poder de veto — juntar essas decisões no próprio dia é como aberturas são adiadas.",
      "<strong>Estabeleça a linha de base no congelamento do projeto.</strong> Tudo antes disso é estimativa; depois, toda mudança tem custo e caminho de aprovação."
    ],
    faq: [
      [
        "Quanto tempo leva para abrir um novo setor hospitalar?",
        "Em geral de 18 a 24 meses do estudo de viabilidade ao primeiro paciente numa reforma, e mais que isso em construção nova. O modelo usa um cronograma de dezoito meses que você comprime ou estica movendo a data de abertura."
      ],
      [
        "O que costuma atrasar a abertura de uma unidade assistencial?",
        "Validação e regulação, muito mais que a obra — verificação da climatização, coleta de água, testes de aceitação dos equipamentos, credenciamento e licenciamento sanitário ficam todos depois do construtor, e cada um tem prazo de terceiros."
      ],
      [
        "O que é uma adequação de projeto nesse contexto?",
        "É um afastamento documentado e aprovado de uma exigência da RDC 50 ou de norma técnica, quando a estrutura existente não consegue atender. Precisa ser acordado no projeto e assinado por um responsável, por isso aparece como tarefa e não como premissa."
      ],
      [
        "Serve para a reforma de uma enfermaria em vez de um setor novo?",
        "Sim. Descarte as linhas de serviços preliminares e remanejamento se você não vai transferir um serviço, e mantenha as fases de CCIH, equipamentos e governança — são idênticas nos dois casos."
      ],
      [
        "O modelo de abertura de setor hospitalar é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro e sem marca d'água."
      ]
    ]
  },

  'school-year-planning-calendar': {
    card: "Grade horária, matrículas, avaliações, conselhos e orçamento.",
    h1: "Calendário de planejamento do ano letivo",
    metaTitle: "Calendário do ano letivo — modelo",
    metaDesc: "Modelo gratuito de calendário do ano letivo: grade horária, quadro docente, matrículas, avaliações, conselhos de classe e orçamento.",
    lead: "Um modelo gratuito de <strong>calendário de planejamento do ano letivo</strong> montado no nível da escola, e não da sala de aula — desenho curricular e montagem da grade horária, quadro docente e substituições, matrículas e rematrículas, calendário escolar e recessos, períodos de avaliação e exames externos, conselhos de classe e reuniões de pais, autoavaliação institucional, e o ciclo orçamentário que corre por baixo de tudo.",
    intro: "Um ano letivo é planejado duas vezes: uma antes de começar e outra semana a semana enquanto acontece. O modelo mostra as duas, com as fases de planejamento antes do primeiro dia de aula:",
    phases: [
      [
        "Currículo e grade horária",
        "Matriz curricular e blocos de eletivas, atribuição de disciplinas, montagem e validação da grade horária, alocação de salas e recursos. <em>Marco: grade horária publicada.</em>"
      ],
      [
        "Quadro docente e contratos",
        "Revisão do quadro, desligamentos e processos seletivos, contratação, banco de substituições e integração dos novos professores."
      ],
      [
        "Matrículas e rematrículas",
        "Portas abertas, período de inscrição, resultados e recursos, matrícula e rematrícula, e dias de acolhimento das novas turmas. <em>Marco: número de alunos confirmado.</em>"
      ],
      [
        "Calendário escolar",
        "Datas de início e fim de bimestre, recessos e feriados, dias de formação continuada, o calendário de eventos publicado e a comunicação disso tudo às famílias."
      ],
      [
        "Avaliação e exames",
        "Períodos de avaliação interna, simulados, inscrições e prazos de exames externos, a aplicação das provas, condições especiais de atendimento e a divulgação de resultados. <em>Marco: divulgação de resultados.</em>"
      ],
      [
        "Conselhos de classe e famílias",
        "Janelas de lançamento de notas, fechamento de boletins, conselhos de classe, reuniões de pais e definição de metas para o ano seguinte."
      ],
      [
        "Avaliação institucional e governança",
        "Autoavaliação, calendário de reuniões do conselho escolar, preparação para supervisão da rede, auditoria de proteção ao estudante e revisão de regimento e políticas."
      ],
      [
        "Ciclo orçamentário",
        "Repasse e receita prevista, elaboração e aprovação do orçamento, acompanhamento ao longo do ano e a prestação de contas de encerramento."
      ]
    ],
    callout: "Grade horária e quadro docente são um problema só, não dois. Você não fecha a grade sem saber quem leciona, e não confirma o quadro sem saber o que a grade exige. Programe os dois como barras sobrepostas com um prazo comum, e coloque no gráfico a data-limite de desligamento — é a única data que decide se a grade será montada uma vez ou três.",
    customize: [
      "Coloque o dia zero no início do período de planejamento, e não no primeiro dia de aula — a maior parte das decisões é tomada antes.",
      "Substitua as janelas de exame pelas datas reais dos seus exames externos; elas são fixas e tudo em volta negocia.",
      "Acrescente uma linha por segmento ou série onde os ciclos de avaliação e de boletim forem diferentes.",
      "Insira as datas das reuniões do conselho escolar como marcos — são os portões de aprovação de orçamento e de regimento.",
      "Estenda a fase de matrículas se você opera processo seletivo concorrido com período de recursos.",
      "Marque os dias de formação continuada explicitamente, para que a capacitação seja planejada no calendário e não espremida em volta dele."
    ],
    tips: [
      "<strong>Coloque a data-limite de desligamento no gráfico.</strong> É a data dura que separa uma grade horária que você consegue montar de outra que você vai refazer nas férias.",
      "<strong>Proteja as janelas de lançamento de notas.</strong> O boletim depende de a nota entrar no prazo; uma janela perdida move o conselho de classe e a reunião de pais, não só a planilha.",
      "<strong>Organize cedo a aplicação das provas.</strong> Convocação de aplicadores e avaliação de condições especiais têm prazo próprio, e as duas condicionam o período de exames.",
      "<strong>Programe as portas abertas contra a data de inscrição.</strong> Uma porta aberta depois do prazo é evento de marketing, não de captação.",
      "<strong>Mantenha o ciclo orçamentário visível.</strong> Decisões de quadro docente tomadas sem a posição orçamentária à vista são o erro mais caro que uma escola comete.",
      "<strong>Planeje o próximo ano ainda dentro deste.</strong> Tudo o que está neste gráfico antes do início das aulas pertence ao ano que ainda está correndo."
    ],
    faq: [
      [
        "O que deve conter um calendário de planejamento do ano letivo?",
        "Currículo e grade horária, quadro docente, matrículas, calendário escolar, avaliação e exames externos, conselhos de classe e reuniões de pais, avaliação institucional e o ciclo orçamentário. As oito frentes já vêm prontas como faixas separadas."
      ],
      [
        "Quando começar a planejar o próximo ano letivo?",
        "Normalmente no meio do ano anterior, porque a data-limite de desligamento, os blocos de eletivas e o orçamento acontecem meses antes do primeiro dia de aula. O modelo começa aí, e não no início das aulas."
      ],
      [
        "Dá para adaptar para uma faculdade ou universidade?",
        "Sim. Mantenha a estrutura e troque os exames externos pelos seus períodos de avaliação, e as linhas de matrícula pelo seu processo de ingresso — o formato do ano é o mesmo."
      ],
      [
        "Como lidar com duas ou três entradas por ano?",
        "Duplique as linhas de matrícula por entrada e mantenha uma única faixa de grade horária e de orçamento. O modelo dá o padrão para a entrada principal."
      ],
      [
        "O modelo de calendário do ano letivo é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'nonprofit-fundraising-campaign': {
    card: "Viabilidade, prospecção, fase silenciosa, lançamento e prestação de contas.",
    h1: "Plano de campanha de captação de recursos",
    metaTitle: "Campanha de captação — plano",
    metaDesc: "Modelo gratuito de plano de campanha de captação: viabilidade, prospecção, fase silenciosa, lançamento público, doação pareada e relacionamento.",
    lead: "Um modelo gratuito de <strong>plano de campanha de captação de recursos</strong> montado do jeito que campanhas institucionais realmente funcionam — estudo de viabilidade e documento de causa, prospecção e construção do funil, cultivo de grandes doadores numa fase silenciosa, o lançamento público, eventos e janelas de doação pareada, e o relacionamento e a prestação de contas que decidem se o doador volta a doar.",
    intro: "Uma campanha não é um lançamento seguido de doações. A maior parte do dinheiro é comprometida antes de qualquer anúncio público, e é por isso que a fase silenciosa ocupa a maior fatia do gráfico:",
    phases: [
      [
        "Viabilidade e documento de causa",
        "Diagnóstico da necessidade, definição da meta, entrevistas de viabilidade com prováveis doadores principais, documento de causa e aprovação pelo conselho. <em>Marco: meta aprovada.</em>"
      ],
      [
        "Prospecção e funil",
        "Higienização da base, análise de capacidade de doação, classificação de prospects, distribuição de carteiras e a tabela de faixas de doação."
      ],
      [
        "Liderança e fase silenciosa",
        "Formação do comitê da campanha, doação do conselho, solicitação das doações principais e de grande porte, e formalização das promessas de doação — tudo antes de qualquer anúncio. <em>Marco: meta da fase silenciosa atingida.</em>"
      ],
      [
        "Lançamento público",
        "Materiais de lançamento e resumo da causa, plano de imprensa e redes, evento de lançamento e a campanha ampla junto à base de doadores. <em>Marco: lançamento público.</em>"
      ],
      [
        "Eventos e campanhas",
        "Jantar beneficente ou eventos da campanha, mala direta e e-mails, captação comunitária e entre pares, e os empurrões de dia de doar."
      ],
      [
        "Doação pareada",
        "Patrocinador do pareamento assegurado, divulgação da janela, o período de pareamento em si e a conciliação dos valores pareados."
      ],
      [
        "Relacionamento e prestação de contas",
        "Agradecimento e emissão de recibos, reconhecimento dos doadores, relatório de impacto, cobrança das promessas de doação e o relatório de encerramento. <em>Marco: campanha encerrada.</em>"
      ]
    ],
    callout: "Não lance publicamente antes de a fase silenciosa ter garantido a maior parte da meta. Campanhas que anunciam com quarenta por cento passam a fase pública explicando por que estão atrasadas; campanhas que anunciam com setenta por cento passam a fase pública construindo entusiasmo. A data de lançamento deve ser consequência do funil, e não uma data no calendário de marketing.",
    customize: [
      "Monte primeiro a tabela de faixas de doação e depois dimensione a fase silenciosa pelo número de conversas de doação principal que ela implica — esse número define a duração.",
      "Acrescente uma linha por prospect principal assim que as carteiras forem distribuídas, para que o cultivo seja acompanhado e não presumido.",
      "Mova o marco de lançamento público para o ponto em que o total da fase silenciosa realmente cruza o limite que você definiu.",
      "Estenda a barra de cobrança de promessas para o seu prazo real; compromissos plurianuais sobrevivem à campanha por anos.",
      "Acrescente linhas de dia de doar ou de campanha de fim de ano onde elas caem no seu calendário — essas datas são fixas e o resto se organiza em torno delas.",
      "Mantenha o relacionamento correndo depois do encerramento; ele é o funil da próxima campanha."
    ],
    tips: [
      "<strong>Entrevista de viabilidade é cultivo.</strong> As pessoas a quem você pede uma opinião honesta sobre a meta são normalmente as mesmas a quem você vai pedir uma doação principal, então programe-as com esse cuidado.",
      "<strong>Peça de cima para baixo.</strong> As doações principais definem a escala para todo o resto; começar pela base média limita a campanha ao que essa base der.",
      "<strong>Garanta o pareamento antes de divulgá-lo.</strong> Uma janela de doação pareada anunciada sem compromisso assinado do patrocinador é uma promessa que você não pode cumprir.",
      "<strong>Coloque o agradecimento no gráfico com prazo.</strong> Agradecer em poucos dias é a atividade de maior retorno na captação e a primeira a ser abandonada quando a campanha aperta.",
      "<strong>Acompanhe promessas separadas do caixa.</strong> Totais divulgados não significam nada para o fluxo de caixa enquanto você não mostrar o cronograma de recebimento ao lado.",
      "<strong>Estabeleça a linha de base na aprovação da meta.</strong> Depois que o conselho fixa o número, acompanhe o funil contra ele semanalmente, em vez de reportar só em eventos."
    ],
    faq: [
      [
        "Quanto tempo leva uma campanha de captação?",
        "Campanhas institucionais de grande porte costumam durar de dois a três anos, incluindo a fase silenciosa e a cobrança das promessas. O modelo usa um cronograma de cerca de dois anos, que você comprime para uma campanha anual."
      ],
      [
        "Quanto se deve captar antes do lançamento público?",
        "A prática usual é chegar ao anúncio com a maior parte da meta já comprometida na fase silenciosa — costuma-se citar algo em torno de 70 por cento. O modelo posiciona o marco de lançamento depois da meta silenciosa, e não numa data fixa."
      ],
      [
        "O que é a tabela de faixas de doação e onde ela entra?",
        "É a tabela de quantas doações de cada valor você precisa para atingir a meta. Ela pertence à fase de prospecção, porque diz quantos prospects cultivar em cada faixa antes de você se comprometer com o número."
      ],
      [
        "Serve para uma campanha anual em vez de uma campanha institucional?",
        "Sim. Encurte a fase silenciosa, retire as linhas de comitê da campanha e mantenha as fases de campanhas, doação pareada e relacionamento — esse é o formato de uma campanha anual."
      ],
      [
        "O modelo de campanha de captação é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, além de edição online gratuita, sem necessidade de cadastro."
      ]
    ]
  },

  'warehouse-setup-project-plan': {
    card: "Imóvel, porta-paletes, WMS, empilhadeiras e transferência de estoque.",
    h1: "Plano de implantação de armazém",
    metaTitle: "Implantação de armazém — plano",
    metaDesc: "Modelo gratuito de plano de implantação de armazém: escolha do imóvel, locação, porta-paletes, WMS, empilhadeiras, transferência e rampa.",
    lead: "Um modelo gratuito de <strong>plano de implantação de armazém</strong> cobrindo um novo centro de distribuição de ponta a ponta — estudo de malha e escolha do imóvel, locação e obras do proprietário, projeto e montagem dos porta-paletes, seleção e integração do WMS (sistema de gestão de armazém), aquisição de empilhadeiras e demais equipamentos de movimentação, transferência de estoque do site antigo e uma rampa de entrada em operação que não deixe o cliente na mão.",
    intro: "Um projeto de armazém são três projetos dividindo um galpão: a obra física, a integração de sistemas e a mudança do estoque. Têm prazos e modos de falha diferentes, por isso o modelo os trata como frentes separadas:",
    phases: [
      [
        "Requisitos e estudo de malha",
        "Perfil de volume e de SKUs, modelagem de capacidade de processamento, análise de malha e de localização, e o business case do investimento. <em>Marco: investimento aprovado.</em>"
      ],
      [
        "Escolha do imóvel e locação",
        "Busca e lista curta de imóveis, vistoria do galpão, verificação de capacidade de piso e de energia, proposta de locação, negociação do contrato e obras a cargo do proprietário. <em>Marco: contrato assinado.</em>"
      ],
      [
        "Leiaute e porta-paletes",
        "Estratégia de armazenagem e endereçamento, leiaute dos porta-paletes e licenças, projeto de combate a incêndio e sprinklers, fabricação e montagem das estruturas, mezanino e módulos de separação."
      ],
      [
        "Seleção e integração do WMS",
        "Requisitos e escolha do fornecedor, parametrização, integrações com ERP e transportadoras, migração de dados e testes de aceitação. <em>Marco: WMS homologado.</em>"
      ],
      [
        "Equipamentos de movimentação",
        "Compra de empilhadeiras e de empilhadeiras retráteis, esteiras e sorters onde houver, bancadas de embalagem, coletores, impressão e aplicação de etiquetas e a infraestrutura de recarga de baterias."
      ],
      [
        "Obras e infraestrutura",
        "Energia e iluminação, cabeamento e levantamento de cobertura wi-fi, docas e niveladoras, área administrativa e vestiários, segurança e controle de acesso."
      ],
      [
        "Contratação e treinamento",
        "Contratação da liderança do site, recrutamento de operadores, treinamento em WMS e em processo, e certificação dos operadores de empilhadeira."
      ],
      [
        "Transferência de estoque e entrada em operação",
        "Saneamento do estoque, ondas de transferência, inventário rotativo, operação em paralelo, virada e rampa de volume. <em>Marco: volume total.</em>"
      ]
    ],
    callout: "O levantamento de cobertura wi-fi é uma dependência, não um detalhe. Todo processo por coletor no galpão pressupõe sinal em cada corredor e em toda a altura do porta-palete, e a estrutura montada muda completamente o ambiente de rádio. Faça o levantamento depois da montagem e antes da entrada em operação, com prazo para acrescentar pontos de acesso — quem mede o galpão vazio descobre os corredores mortos no primeiro pico.",
    customize: [
      "Ancore o plano na data em que você precisa deixar o site atual ou cumprir um compromisso com cliente; isso fixa a entrada em operação e tudo corre de trás para frente.",
      "Ajuste o prazo de fabricação dos porta-paletes ao número realmente cotado — costuma ser o item isolado mais longo depois da locação.",
      "Acrescente uma linha por integração (ERP, transportadoras, marketplace, logística reversa) assim que o fornecedor do WMS for escolhido; cada uma tem seu próprio ciclo de teste.",
      "Divida a transferência de estoque em ondas por giro de SKU, para que os itens de alto giro cheguem primeiro e o site já opere enquanto a cauda chega.",
      "Estenda a barra de operação em paralelo se você não pode arriscar uma virada seca; manter dois sites custa dinheiro, mas protege o nível de serviço.",
      "Marque assinatura do contrato, porta-paletes montados, homologação do WMS, primeiro pedido expedido e volume total como marcos."
    ],
    tips: [
      "<strong>Verifique capacidade de piso e de energia antes da proposta de locação.</strong> Um galpão que não suporta a carga dos seus porta-paletes ou a demanda das recargas não é mais barato, é o galpão errado.",
      "<strong>Escolha o WMS antes de congelar o leiaute.</strong> Endereçamento, nomenclatura de posições e lógica de rota de separação seguem o sistema, e adaptá-los a estruturas já montadas sai caro.",
      "<strong>Compre equipamento de movimentação contra prazos reais.</strong> A entrega de empilhadeiras passou a ser contada em meses; a data do pedido pertence ao gráfico.",
      "<strong>Faça rampa, não virada de chave.</strong> Planeje as primeiras semanas com volume deliberadamente reduzido, para que os problemas de processo apareçam enquanto ainda há capacidade para absorvê-los.",
      "<strong>Saneie o estoque antes de mover.</strong> Transferir item obsoleto custa dinheiro duas vezes — uma para mover e outra para guardar.",
      "<strong>Estabeleça a linha de base na assinatura do contrato.</strong> Antes disso tudo é opcional; depois, o aluguel já corre e cada semana de atraso tem um número."
    ],
    faq: [
      [
        "Quanto tempo leva para implantar um novo armazém?",
        "Em geral de 9 a 15 meses do business case à entrada em operação num centro de distribuição de porte médio, puxado principalmente pela busca do imóvel, pelo prazo dos porta-paletes e pela integração do WMS. O modelo usa um cronograma de doze meses."
      ],
      [
        "Qual costuma ser o prazo mais longo?",
        "Fabricação dos porta-paletes e equipamentos de movimentação, ambos hoje contados em meses. A própria negociação de locação frequentemente dura mais que os dois, e é por isso que a escolha do imóvel abre o plano."
      ],
      [
        "O WMS deve entrar no ar junto com o galpão?",
        "Não necessariamente. Muitos operadores rodam o galpão novo no sistema atual e viram o sistema depois, para mudar uma variável de cada vez. O modelo mantém as frentes separadas para que você escolha."
      ],
      [
        "Como planejar a transferência de estoque?",
        "Em ondas por giro de SKU, com inventário rotativo depois de cada onda e um período de operação em paralelo antes de fechar o site antigo. Essas linhas já vêm prontas na última fase."
      ],
      [
        "O modelo de implantação de armazém é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'road-construction-schedule': {
    card: "Projeto, licenças, interferências, terraplenagem, pavimento e liberação.",
    h1: "Cronograma de obra rodoviária",
    metaTitle: "Obra rodoviária — cronograma",
    metaDesc: "Modelo gratuito de cronograma de obra rodoviária: projeto, licenças, interferências, terraplenagem, drenagem, pavimento, sinalização e liberação.",
    lead: "Um modelo gratuito de <strong>cronograma de obra rodoviária</strong> montado ao longo de um programa real — levantamento e projeto, desapropriação e licenciamento, remanejamento de interferências das concessionárias, terraplenagem e drenagem, reforço do subleito, sub-base e as camadas asfálticas, sinalização e defensas, desvios e sinalização de obra em etapas, e a entrega ao órgão gestor da via.",
    intro: "Numa obra rodoviária o pavimento é a parte fácil. Quem manda na data é o que precisa sair da frente antes de escavar: as redes das concessionárias, a faixa de domínio que você ainda não possui e o tráfego que precisa continuar passando. O modelo dá a cada um deles uma frente própria:",
    phases: [
      [
        "Levantamento e projeto",
        "Levantamento topográfico e sondagens, cadastro de interferências e poços de inspeção, projeto básico e executivo, projeto de drenagem e auditoria de segurança viária. <em>Marco: projeto aprovado.</em>"
      ],
      [
        "Faixa de domínio e licenças",
        "Cadastro de imóveis, desapropriação ou posse provisória, licença de instalação, aprovações ambientais e as autorizações de acesso e de vias marginais. <em>Marco: licenças emitidas.</em>"
      ],
      [
        "Remanejamento de interferências",
        "Orçamentos de cada concessionária, projeto do remanejamento, programação junto às concessionárias e os remanejamentos em si — gás, água, energia e telecomunicações, cada um no seu prazo."
      ],
      [
        "Desvios e sinalização de obra",
        "Projeto e aprovação do plano de sinalização de obra, reserva de bloqueio junto ao órgão gestor, acordo das rotas de desvio, e os bloqueios, mão dupla provisória e restrições de faixa dentro dos quais a obra acontece."
      ],
      [
        "Terraplenagem e drenagem",
        "Limpeza do terreno e retirada da camada vegetal, corte e aterro, reforço do subleito, galerias e bocas de lobo, bacias de amortecimento e dissipadores."
      ],
      [
        "Pavimentação",
        "Sub-base, base, camada de ligação e camada de rolamento, meios-fios, calçadas e ajuste de tampões. <em>Marco: pavimentação concluída.</em>"
      ],
      [
        "Sinalização e entrega",
        "Sinalização horizontal e tachas, placas e pórticos, iluminação, defensas metálicas, auditoria final de segurança viária, pendências e entrega ao órgão gestor. <em>Marco: via liberada ao tráfego.</em>"
      ]
    ],
    callout: "O remanejamento de interferências é o cronograma. As concessionárias trabalham no prazo delas, exigem aviso prévio longo e não vão comprimir nada pela sua data — e cada uma precisa terminar antes de você escavar naquele trecho. Peça os orçamentos ainda durante o projeto, e não depois da assinatura do contrato, e coloque cada concessionária no gráfico como barra separada com duração própria.",
    customize: [
      "Lance primeiro as datas de bloqueio já confirmadas; em via em operação elas são os pontos fixos aos quais o resto do programa se ajusta.",
      "Acrescente uma linha por concessionária — gás, água, energia e cada operadora de telecomunicações têm prazos de aviso e equipes diferentes.",
      "Divida a obra em trechos ou estacas assim que o faseamento da sinalização de obra estiver definido, para acompanhar terraplenagem e pavimento por etapa.",
      "Tire a camada de rolamento do período chuvoso onde for possível; a aplicação de asfalto tem limites de temperatura e umidade que param o serviço no dia.",
      "Insira períodos de restrição ambiental — reprodução de fauna, defeso, supressão vegetal — como barras de bloqueio, se as suas licenças os impuserem.",
      "Mantenha as duas auditorias de segurança viária no gráfico; a auditoria pós-obra é portão de liberação, e não uma revisão posterior."
    ],
    tips: [
      "<strong>Peça os orçamentos das concessionárias durante o projeto.</strong> Só o processo de orçamento e aprovação pode levar meses antes de um único remanejamento ser escavado, e ele fica na frente de todo o resto do caminho crítico.",
      "<strong>Reserve o bloqueio antes de precisar dele.</strong> As agendas de interdição e de autorização do órgão gestor são atendidas por ordem de chegada, e um pedido negado desloca a etapa inteira.",
      "<strong>Drenagem antes do pavimento, sempre.</strong> Refazer uma boca de lobo esquecida através de pista pronta custa várias vezes o que custaria antes.",
      "<strong>Observe a janela climática das camadas asfálticas.</strong> Camada de rolamento aplicada abaixo da temperatura especificada falha cedo, e o órgão não recebe a obra.",
      "<strong>Programe as etapas de sinalização de obra como tarefas com duração.</strong> Cada troca de etapa é uma noite de trabalho com recursos próprios; tratar o faseamento como gratuito é como programas perdem duas semanas.",
      "<strong>Estabeleça a linha de base na emissão das licenças.</strong> Antes disso o programa é condicional; depois, acompanhe a variação para que atraso de concessionária apareça cedo."
    ],
    faq: [
      [
        "Quanto tempo leva uma obra rodoviária?",
        "Uma melhoria urbana curta pode levar de 6 a 9 meses; uma via nova ou uma duplicação importante leva dois anos ou mais. O modelo usa um programa de cerca de dezoito meses que você comprime ou estende a partir da data de liberação."
      ],
      [
        "O que costuma atrasar obras rodoviárias?",
        "Remanejamento de interferências e licenciamento, muito mais que a construção. Os dois dependem de terceiros com prazos próprios, e é por isso que cada um tem frente separada em vez de uma linha dentro dos serviços."
      ],
      [
        "Como represento a sinalização de obra no gráfico?",
        "Como barras por etapa, com o projeto e a reserva de bloqueio como predecessores, e cada etapa construtiva dependendo da sua própria etapa de sinalização. Assim, um bloqueio negado ou atrasado ameaça visivelmente o serviço que ele protege."
      ],
      [
        "Cobre uma ponte ou obra de arte dentro do trecho?",
        "Só em nível de resumo. Se o seu trecho tem uma obra de arte especial, rode o nosso <a href=\"/templates/bridge-construction-schedule.html\">cronograma de construção de ponte</a> em paralelo e ligue as janelas de interdição."
      ],
      [
        "Dá para usar em recapeamento em vez de obra nova?",
        "Sim. Retire as fases de faixa de domínio, licenças e terraplenagem e mantenha sinalização de obra, camadas do pavimento e sinalização horizontal — esse é o formato de um programa de recapeamento."
      ],
      [
        "O modelo de obra rodoviária é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro e sem marca d'água."
      ]
    ]
  },

  'mobile-app-launch-plan': {
    card: "Estabilização, beta, ficha da loja, revisão e lançamento gradual.",
    h1: "Plano de lançamento de aplicativo móvel",
    metaTitle: "Lançamento de aplicativo — plano",
    metaDesc: "Modelo gratuito de plano de lançamento de app: estabilização, beta, ficha da loja, revisão da App Store, lançamento gradual e correção do dia um.",
    lead: "Um modelo gratuito de <strong>plano de lançamento de aplicativo móvel</strong> montado em torno da aprovação nas lojas, e não de marketing genérico — estabilização da build e candidata a versão, TestFlight e faixa interna do Google Play, ficha da loja e capturas de tela, envio à App Store e ao Google Play, a espera da revisão em si, lançamento gradual e a janela de correção do dia um. Baixe para uma revisão de prontidão, ou abra online para ver o que de fato condiciona a sua data.",
    intro: "Publicar um aplicativo não é subir software para um servidor. Outra pessoa decide quando a sua build entra no ar, e o plano precisa mostrar isso. O modelo separa o trabalho que você controla da espera que você não controla:",
    phases: [
      [
        "Estabilização da build",
        "Congelamento de escopo, triagem de travamentos e ANRs, trabalho de desempenho e memória, testes de acessibilidade e de matriz de aparelhos, e a build candidata a versão. <em>Marco: candidata a versão pronta.</em>"
      ],
      [
        "Testes beta",
        "Envio ao TestFlight e à faixa interna do Google Play, beta interno, recrutamento de testadores externos, a rodada externa e a triagem dos retornos. <em>Marco: critérios de saída do beta atendidos.</em>"
      ],
      [
        "Ficha da loja e materiais",
        "Pesquisa de palavras-chave e categoria, nome e descrição do app, capturas de tela e vídeo de prévia, ícone e artes, a declaração de privacidade dos dados e o questionário de classificação indicativa."
      ],
      [
        "Envio e revisão nas lojas",
        "Checagem de conformidade antes do envio, submissão nas duas lojas, a espera da revisão e uma folga real para uma reprovação e novo envio. <em>Marco: aprovado e pronto para publicar.</em>"
      ],
      [
        "Lançamento gradual",
        "Publicação escalonada em 1%, 10% e 50%, com a taxa de sessões sem travamento verificada em cada degrau antes de ampliar para todos. <em>Marco: disponibilidade total.</em>"
      ],
      [
        "Correção do dia um e monitoramento",
        "Monitoramento de travamentos e ANRs, a janela de correção reservada, resposta às avaliações na loja e a leitura de retenção da primeira semana."
      ]
    ],
    callout: "Preveja uma reprovação. Primeiras submissões são reprovadas com frequência suficiente para que um plano sem folga de reenvio seja um plano com uma moeda jogada dentro — e o relógio recomeça do zero a cada novo envio. Coloque a espera da revisão e a folga de reprovação como duas barras separadas, e marque a data do anúncio depois da segunda, não da primeira.",
    customize: [
      "Fixe a data de submissão e trabalhe para frente, não para trás — a duração da revisão não é sua para comprimir.",
      "Separe as linhas de envio e revisão por loja se as suas builds de iOS e Android têm cadências diferentes; as durações de revisão são distintas.",
      "Estenda a folga de reprovação se esta é a primeira submissão, se o app tem assinatura, ou se ele toca exclusão de conta, dados de saúde ou conteúdo gerado por usuário.",
      "Ajuste os percentuais do lançamento gradual à plataforma; o lançamento escalonado do Google Play e o lançamento em fases da App Store não avançam do mesmo jeito.",
      "Mantenha a janela de correção do dia um no gráfico com gente nomeada nela — uma janela sem equipe alocada é só uma semana vazia.",
      "Marque candidata a versão, saída do beta, aprovação na loja e disponibilidade total como marcos; são as quatro datas que todo mundo pergunta."
    ],
    tips: [
      "<strong>Prepare os metadados da ficha antes de a build estar final.</strong> Capturas de tela, descrições e declaração de privacidade podem ser feitas e revisadas em paralelo, e nunca deveriam ser o que segura o dia do envio.",
      "<strong>Não anuncie data de lançamento presa a uma aprovação que você ainda não tem.</strong> Faça o marketing depender do marco de aprovação, para que uma reprovação desloque a campanha automaticamente em vez de constranger você.",
      "<strong>Acompanhe a taxa de sessões sem travamento em cada degrau.</strong> O sentido de um lançamento gradual é poder parar entre os degraus; se ninguém está escalado para olhar os números, o escalonamento não serve para nada.",
      "<strong>Reserve a janela de correção antes do lançamento, não depois.</strong> As pessoas que construiriam a correção do dia um são as mesmas que você alocaria à próxima sprint no dia do lançamento.",
      "<strong>Recrute testadores externos com semanas de antecedência.</strong> Conseguir um número útil de testadores em aparelhos reais leva mais tempo do que os times planejam, e um beta magro não encontra nada.",
      "<strong>Estabeleça a linha de base na candidata a versão.</strong> Tudo antes disso é estimativa; depois, o cronograma é basicamente fila dos outros e deve ser acompanhado como variação."
    ],
    faq: [
      [
        "Quanto tempo leva a revisão nas lojas de aplicativos?",
        "A maioria das revisões da App Store sai em um ou dois dias, e as do Google Play costumam ser mais rápidas, mas as duas podem demorar bem mais numa primeira submissão ou num app de categoria sensível. O modelo reserva dez dias mais uma folga de reprovação."
      ],
      [
        "O que deve conter um plano de lançamento de aplicativo?",
        "Estabilização da build, testes beta, ficha da loja e materiais, envio e revisão, lançamento gradual e uma janela de correção do dia um. As seis fases já vêm prontas, com a espera da revisão modelada como dependência e não como premissa."
      ],
      [
        "Qual a diferença para um plano de lançamento de produto?",
        "Este é moldado pelas lojas — gira em torno de envio, revisão e publicação escalonada. Para o trabalho comercial mais amplo de preço, posicionamento e campanha, use o <a href=\"/templates/product-launch.html\">modelo de lançamento de produto</a> em paralelo."
      ],
      [
        "Devo fazer lançamento gradual ou publicar para todo mundo?",
        "Faça gradual, a menos que haja motivo para não fazer. A publicação escalonada permite parar em 1% quando a taxa de sessões sem travamento cai, o que é muito mais barato que uma reversão de emergência para toda a base."
      ],
      [
        "O modelo de lançamento de aplicativo é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro e sem marca d'água."
      ]
    ]
  },

  'iso-9001-certification-plan': {
    card: "Diagnóstico, manual da qualidade, auditoria interna e certificação.",
    h1: "Plano de certificação ISO 9001",
    metaTitle: "Certificação ISO 9001 — plano",
    metaDesc: "Modelo gratuito de plano ISO 9001: diagnóstico, manual da qualidade, auditoria interna, análise crítica, auditorias fase 1 e 2 e manutenção.",
    lead: "Um modelo gratuito de <strong>plano de certificação ISO 9001</strong> montado ao longo do caminho real até o certificado — diagnóstico de lacunas, mapeamento de processos, documentação do sistema de gestão da qualidade, implantação e treinamento, o ciclo de auditoria interna, a análise crítica pela direção e as ações corretivas, depois a auditoria de certificação em duas fases e a primeira auditoria de manutenção. Baixe para o material da análise crítica, ou abra online para ligar os portões que não dá para pular.",
    intro: "Certificação ISO 9001 não é um projeto de documentação. O organismo certificador precisa ver registros de um sistema que já esteve rodando, e é por isso que a auditoria interna e a análise crítica ficam antes da auditoria externa, e não ao lado dela:",
    phases: [
      [
        "Diagnóstico e planejamento",
        "Escopo e contexto da organização, escolha do organismo certificador, um diagnóstico estruturado contra a norma e o plano de projeto que sai dele. <em>Marco: diagnóstico concluído.</em>"
      ],
      [
        "Mapeamento de processos e riscos",
        "Mapeamento dos processos principais, partes interessadas e seus requisitos, matriz de riscos e oportunidades, e objetivos da qualidade com indicadores mensuráveis."
      ],
      [
        "Documentação do sistema",
        "Política e manual da qualidade, procedimentos documentados, instruções de trabalho e formulários, controle de documentos e tabela de retenção de registros. <em>Marco: documentação liberada.</em>"
      ],
      [
        "Implantação e treinamento",
        "Treinamento de conscientização para todos, capacitação dos donos de processo e um período rodando os processos de verdade, para que haja registros a auditar."
      ],
      [
        "Auditoria interna e ações corretivas",
        "Formação de auditores internos, o programa completo de auditoria interna, relatórios de não conformidade e ações corretivas encerradas com evidência."
      ],
      [
        "Análise crítica pela direção",
        "Compilação das entradas da análise crítica, a própria reunião de análise crítica e as ações dela decorrentes. <em>Marco: prontidão para certificação confirmada.</em>"
      ],
      [
        "Auditoria de certificação",
        "Auditoria fase 1 de documentação e prontidão, tratamento dos apontamentos da fase 1, auditoria fase 2 de implementação, encerramento das não conformidades e a decisão de certificação. <em>Marco: certificado emitido.</em>"
      ],
      [
        "Manutenção",
        "O ciclo de melhoria contínua, uma segunda rodada de auditoria interna e a auditoria de manutenção do primeiro ano, que mantém o certificado válido."
      ]
    ],
    callout: "O intervalo entre a fase 1 e a fase 2 é o sentido inteiro da auditoria em duas etapas, e é aí que a maioria dos planos erra. A fase 1 diz se o seu sistema está pronto; a fase 2 testa se ele funciona. Organismos certificadores normalmente querem semanas entre as duas para que os apontamentos sejam tratados, e marcar a fase 2 colada na fase 1 é como se acaba pagando uma visita repetida.",
    customize: [
      "Escolha cedo o organismo certificador e lance a disponibilidade real dele — as agendas de auditoria são fechadas com meses de antecedência e definem a sua data limite.",
      "Estenda o período de implantação se os seus processos têm ciclos longos; você precisa de registros cobrindo um período representativo, e não duas semanas.",
      "Acrescente uma linha por área de processo no mapeamento e na auditoria interna, para que a cobertura fique visível em vez de presumida.",
      "Insira uma linha de ação corretiva por não conformidade maior assim que os apontamentos da fase 1 chegarem; cada uma tem evidência e data de encerramento próprias.",
      "Marque documentação liberada, prontidão confirmada, fase 2 concluída e certificado emitido como marcos — são as datas que a direção acompanha.",
      "Se você já tem outro certificado de sistema de gestão, encurte a fase de documentação e reaproveite as cláusulas comuns em vez de reescrevê-las."
    ],
    tips: [
      "<strong>Não escreva documento que você não vai seguir.</strong> O auditor testa o sistema contra os seus próprios procedimentos, então um manual detalhado demais gera não conformidades que um mais simples não geraria.",
      "<strong>Faça a auditoria interna como se fosse a de verdade.</strong> É o ensaio mais barato possível, e um achado levantado internamente é melhoria, e não não conformidade.",
      "<strong>Deixe tempo real entre a fase 1 e a fase 2.</strong> De quatro a oito semanas é o normal; encerrar apontamentos direito custa menos que uma auditoria repetida.",
      "<strong>Reúna as entradas da análise crítica com antecedência.</strong> A reunião é um registro obrigatório com lista de entradas definida, e montá-la no dia produz um registro magro que o auditor vai notar.",
      "<strong>Mantenha o ciclo de manutenção no gráfico.</strong> A certificação é o começo de um ritmo anual, e quem larga o cronograma depois do certificado corre atrás doze meses depois.",
      "<strong>Estabeleça a linha de base na liberação da documentação.</strong> Tudo antes disso é preparação; depois, o que importa é a variação contra as datas de auditoria."
    ],
    faq: [
      [
        "Quanto tempo leva a certificação ISO 9001?",
        "Normalmente de 6 a 12 meses para uma organização começando do zero, e menos onde já existe um sistema documentado. Este modelo leva cerca de dezoito meses porque vai até a primeira auditoria de manutenção; o certificado em si sai por volta do mês doze."
      ],
      [
        "Qual a diferença entre auditoria fase 1 e fase 2?",
        "A fase 1 é em boa parte uma análise de documentação e prontidão, que verifica se o seu sistema tem condição de ser auditado. A fase 2 testa se ele está de fato implementado e é eficaz, usando registros e entrevistas. As duas são fases separadas aqui, com um período de tratamento entre elas."
      ],
      [
        "Preciso de auditoria interna antes da certificação?",
        "Sim. A norma exige que auditorias internas e a análise crítica pela direção já tenham acontecido, e o organismo certificador procura esses registros já na fase 1. É por isso que as duas ficam antes da auditoria externa neste plano."
      ],
      [
        "E se o auditor levantar uma não conformidade?",
        "Apontamentos menores costumam ser encerrados com plano de ação e evidência dentro de um prazo definido; não conformidades maiores podem exigir nova visita. O modelo traz uma barra de tratamento depois de cada fase justamente para isso."
      ],
      [
        "O modelo de plano ISO 9001 é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'soc2-compliance-timeline': {
    card: "Escopo, controles, remediação, período de observação e relatório.",
    h1: "Cronograma de conformidade SOC 2",
    metaTitle: "SOC 2 — cronograma de conformidade",
    metaDesc: "Modelo gratuito de cronograma SOC 2: escopo, desenho de controles, remediação, evidências, período de observação do Type II e emissão do relatório.",
    lead: "Um modelo gratuito de <strong>cronograma de conformidade SOC 2</strong> cobrindo o trabalho inteiro — escopo e escolha dos critérios dos trust services, desenho de controles, remediação, coleta de evidências, avaliação de prontidão, o período de observação do Type II, o trabalho de campo do auditor e a emissão do relatório. Baixe para uma avaliação de segurança pedida por cliente, ou abra online para entender por que a data do relatório é aquela.",
    intro: "Quase toda pergunta sobre prazo de SOC 2 é, no fundo, uma pergunta sobre o período de observação. Um Type I é uma opinião sobre um ponto no tempo; um Type II cobre um período durante o qual os seus controles precisam realmente operar. O modelo transforma esse período numa barra visível, para que ninguém prometa um relatório que a aritmética proíbe:",
    phases: [
      [
        "Escopo e critérios",
        "Definição da fronteira do sistema, seleção dos critérios dos trust services, contratação do auditor e a decisão entre Type I e Type II. <em>Marco: escopo acordado.</em>"
      ],
      [
        "Desenho de controles",
        "Avaliação de riscos, mapeamento dos controles contra os critérios escolhidos, redação do conjunto de políticas e nomeação dos donos de controle. <em>Marco: matriz de controles aprovada.</em>"
      ],
      [
        "Remediação",
        "Controle e revisão de acessos, portões de gestão de mudança, registro e monitoramento, risco de fornecedores, treinamento de segurança e um teste de resposta a incidentes — o trabalho de engenharia propriamente dito."
      ],
      [
        "Evidências e prontidão",
        "Ferramental de coleta de evidências, alimentação do repositório, uma avaliação de prontidão e o fechamento das lacunas que ela encontrar. <em>Marco: prontidão aprovada.</em>"
      ],
      [
        "Relatório Type I (opcional)",
        "Trabalho de campo em um ponto no tempo e um relatório Type I, útil quando um cliente precisa de algo em mãos enquanto o período de observação corre."
      ],
      [
        "Período de observação",
        "O período coberto pela opinião Type II — controles operando continuamente, checkpoints mensais de evidência e revisões trimestrais de acesso. De três a doze meses, e não comprimível."
      ],
      [
        "Trabalho de campo e relatório",
        "Pedidos de amostra do auditor, envio de evidências, testes, exceções e resposta da administração, revisão da minuta e emissão do relatório. <em>Marco: relatório Type II emitido.</em>"
      ]
    ],
    callout: "Não dá para encurtar o período de observação. Um relatório Type II afirma que os seus controles operaram ao longo de um período, então três meses de janela são três meses de calendário que nenhum orçamento compra de volta. A única alavanca é quando ele começa — e é por isso que a aprovação da prontidão, e não a data do relatório, é o marco pelo qual vale brigar.",
    customize: [
      "Escolha primeiro a duração do período de observação — três meses para um primeiro relatório, de seis a doze quando você já está em ciclo anual — e dimensione a barra da janela conforme isso.",
      "Retire a fase de Type I por completo se nenhum cliente precisa de um relatório intermediário; muitas organizações vão direto ao Type II.",
      "Acrescente uma linha por categoria de trust services além de Segurança; disponibilidade, confidencialidade, integridade de processamento e privacidade acrescentam controles e evidências cada uma.",
      "Desdobre a remediação em uma linha por lacuna assim que a avaliação de prontidão chegar, para que o trabalho de engenharia seja acompanhado e não amontoado.",
      "Coloque os checkpoints mensais de evidência como linhas recorrentes ao longo da janela — mês faltando é a origem mais comum de exceção na auditoria.",
      "Marque escopo acordado, prontidão aprovada, início e fim da janela e emissão do relatório como marcos."
    ],
    tips: [
      "<strong>Não abra a janela antes de a remediação estar de fato pronta.</strong> Um controle que falhou no primeiro mês do período de observação vira exceção no relatório; começar duas semanas depois custa duas semanas, e começar cedo demais pode custar o relatório.",
      "<strong>Automatize a coleta de evidências antes de a janela abrir, e não durante.</strong> Reconstruir três meses de revisão de acesso depois do fato é a tarefa mais dolorosa de um SOC 2, e o auditor normalmente percebe.",
      "<strong>Faça escopo estreito no primeiro relatório.</strong> Segurança sozinha é escopo válido e a maioria dos clientes aceita; acrescentar categorias multiplica controles e alonga todas as fases.",
      "<strong>Contrate o auditor cedo.</strong> A disponibilidade dele para o trabalho de campo é uma restrição real, e uma firma contratada no fim da janela não começa na semana em que ela fecha.",
      "<strong>Trate exceções como esperadas.</strong> Quase todo relatório tem alguma; o que importa é a resposta da administração, que precisa de tempo no gráfico antes de a minuta ser fechada.",
      "<strong>Estabeleça a linha de base na aprovação da prontidão.</strong> Tudo antes disso é remediação; depois, o cronograma é aritmética somada à agenda do auditor."
    ],
    faq: [
      [
        "Quanto tempo leva a conformidade SOC 2?",
        "Para um primeiro Type II, normalmente de 8 a 12 meses de ponta a ponta: de três a seis meses de preparação e remediação, depois um período de observação de três a doze meses, depois trabalho de campo e relatório. O modelo usa cerca de dezesseis meses com janela de seis."
      ],
      [
        "Qual a diferença entre SOC 2 Type I e Type II?",
        "O Type I é uma opinião sobre o desenho dos controles num único ponto no tempo; o Type II é uma opinião sobre a efetividade operacional ao longo de um período. O Type II exige o período de observação, e é por isso que demora muito mais e que a janela tem fase própria aqui."
      ],
      [
        "Qual deve ser a duração do período de observação?",
        "Três meses é o mínimo usual para um primeiro Type II, e de seis a doze meses é o padrão quando você já está em ciclo anual. Janelas mais curtas saem mais rápido, mas alguns clientes as descontam."
      ],
      [
        "Dá para conseguir um relatório SOC 2 mais rápido?",
        "Dá para encurtar a preparação, e dá para emitir um Type I enquanto a janela corre. Não dá para encurtar a janela em si — é a parte do cronograma que ninguém controla."
      ],
      [
        "O modelo de cronograma SOC 2 é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'manufacturing-production-schedule': {
    card: "Demanda, materiais, setup, corridas, qualidade e expedição.",
    h1: "Cronograma de produção industrial",
    metaTitle: "Cronograma de produção industrial",
    metaDesc: "Modelo gratuito de cronograma de produção: plano de demanda, prazos de materiais, setup, corridas de produção, estoque bloqueado e expedição.",
    lead: "Um modelo gratuito de <strong>cronograma de produção industrial</strong> para manufatura discreta — plano de demanda e programa mestre, compra de materiais contra prazos reais de fornecedor, sequenciamento da linha e trocas de ferramenta, as corridas de produção em si, qualidade em processo e final, depois embalagem e expedição. Baixe para a reunião de planejamento, ou abra online para ver se os seus materiais chegam antes de a linha ficar livre.",
    intro: "Um cronograma de produção são dois cronogramas que precisam se encontrar: material chegando e capacidade disponível. O modelo corre os dois como frentes separadas, para que a colisão apareça antes de acontecer no chão de fábrica:",
    phases: [
      [
        "Planejamento de demanda e capacidade",
        "Revisão da previsão, entrada de pedidos firmes, o programa mestre de produção e uma verificação grosseira de capacidade e mão de obra. <em>Marco: capacidade confirmada.</em>"
      ],
      [
        "Compra de materiais",
        "Explosão da lista de materiais e rodada de MRP, ordens de compra, entregas de itens de prazo longo e de itens padrão, recebimento e inspeção de entrada, e a separação junto à linha. <em>Marco: disponibilidade de materiais.</em>"
      ],
      [
        "Programação da linha e setup",
        "Sequenciamento detalhado, plano de troca de ferramenta, preparação de ferramental e dispositivos, o setup em si e a inspeção da primeira peça. <em>Marco: primeira peça aprovada.</em>"
      ],
      [
        "Corridas de produção",
        "As corridas propriamente ditas, com as trocas de ferramenta entre produtos programadas como tarefas reais em vez de simplesmente ignoradas."
      ],
      [
        "Controle de qualidade",
        "Inspeção em processo e CEP, estoque bloqueado por não conformidade e sua destinação, inspeção e ensaio final, e a documentação de liberação do lote. <em>Marco: lote liberado.</em>"
      ],
      [
        "Embalagem e expedição",
        "Embalagem e rotulagem, paletização e plano de carga, contratação do frete e emissão dos documentos de transporte. <em>Marco: pedido expedido.</em>"
      ]
    ],
    callout: "Troca de ferramenta é tempo de produção. Um cronograma que mostra três corridas coladas e nenhuma barra de setup está reivindicando capacidade que não existe — e numa linha com muitas trocas de produto o setup pode consumir uma fatia de dois dígitos das horas disponíveis. Coloque cada troca no gráfico com a duração medida, e não com a desejada.",
    customize: [
      "Lance os prazos reais de cada fornecedor por componente; o mais longo deles, e não a programação da linha, normalmente define a data mais cedo possível de início.",
      "Acrescente uma linha por centro de trabalho ou linha se você programa mais de uma, para que a disputa por recurso fique visível.",
      "Defina as durações de troca de ferramenta a partir de tempos realmente medidos, e mantenha-as separadas das corridas de cada lado.",
      "Insira uma barra de estoque bloqueado onde um lote espera destinação — essa espera é estoque parado de verdade.",
      "Acrescente barras de estoque de segurança antes das corridas que alimentam um compromisso firme com cliente.",
      "Marque disponibilidade de materiais, primeira peça aprovada, lote liberado e pedido expedido como marcos."
    ],
    tips: [
      "<strong>Programe de trás para frente a partir da data de embarque.</strong> O compromisso com o cliente é o ponto fixo; tudo a montante deve ser derivado dele, e não empurrado para frente a partir de hoje.",
      "<strong>Não programe corrida antes de a inspeção de entrada liberar.</strong> Material no pátio não é material disponível, e começar sobre estoque não verificado é como um lote inteiro acaba bloqueado.",
      "<strong>Sequencie para minimizar trocas e depois confira as datas.</strong> A sequência mais eficiente e a que cumpre os prazos raramente são a mesma; o gráfico é onde essa troca fica visível.",
      "<strong>Dê barra própria à inspeção da primeira peça.</strong> Ela é um portão, e uma corrida que começou antes da aprovação é uma corrida que você pode ter que sucatear.",
      "<strong>Deixe folga antes da expedição.</strong> Contratação de frete e janela de carregamento são externas, e um lote liberado na manhã da coleta não tem espaço para um retrabalho.",
      "<strong>Estabeleça a linha de base no programa congelado.</strong> Uma vez congelado o programa do período, acompanhe a variação em vez de reescrevê-lo em silêncio."
    ],
    faq: [
      [
        "O que deve conter um cronograma de produção?",
        "Planejamento de demanda e capacidade, compra de materiais com prazos reais, programação da linha e trocas de ferramenta, as corridas de produção, controle de qualidade e bloqueios, e embalagem e expedição. As seis fases já vêm prontas como blocos separados."
      ],
      [
        "Como represento uma troca de ferramenta no gráfico?",
        "Como barras curtas próprias entre as corridas, com cada corrida dependendo do setup anterior. Esconder a troca dentro da barra da corrida superestima a capacidade disponível, que é o erro mais comum num cronograma de produção."
      ],
      [
        "Serve para indústria de processo contínuo?",
        "Funciona melhor para manufatura discreta — lotes, unidades e trocas de ferramenta. Para operações contínuas, mantenha as fases de compra e expedição e substitua as linhas de corrida por barras de campanha."
      ],
      [
        "Qual a diferença para o calendário de produção de vestuário?",
        "O <a href=\"/templates/apparel-production-calendar.html\">calendário de vestuário</a> é moldado pela coleção, com amostragem e reserva de tecido contra a data de entrada em loja. Este é um cronograma geral de manufatura discreta, construído em torno de prazos, trocas e expedição."
      ],
      [
        "O modelo de cronograma de produção é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'website-redesign-project-plan': {
    card: "Descoberta, arquitetura, design, migração, redirecionamentos e QA.",
    h1: "Plano de projeto de reformulação de site",
    metaTitle: "Reformulação de site — plano",
    metaDesc: "Modelo gratuito de plano de reformulação de site: descoberta, auditoria de conteúdo, design, migração, mapa de redirecionamentos, QA e monitoramento.",
    lead: "Um modelo gratuito de <strong>plano de projeto de reformulação de site</strong> cobrindo o projeto inteiro — descoberta, arquitetura da informação e auditoria de conteúdo, design, desenvolvimento, migração de conteúdo, mapa de redirecionamentos para SEO, QA e monitoramento pós-publicação. Baixe para o escopo de uma agência ou para uma reunião de abertura interna, ou abra online para dar ao mapa de redirecionamentos e à migração o espaço de que eles realmente precisam.",
    intro: "Reformulações raramente falham no design. Falham nas duas frentes sem glamour que ninguém dimensiona direito — mover o conteúdo e mapear as URLs — por isso o modelo dá a cada uma delas fase própria com dependências próprias:",
    phases: [
      [
        "Descoberta",
        "Entrevistas com as áreas, análise dos dados de tráfego e do Search Console, pesquisa de concorrentes e de usuários, e os requisitos e métricas de sucesso acordados. <em>Marco: descoberta aprovada.</em>"
      ],
      [
        "Arquitetura e auditoria de conteúdo",
        "Inventário completo de URLs e rastreamento do site, uma decisão de manter, unir ou aposentar para cada página, desenho do mapa do site e da navegação, e wireframes dos gabaritos principais. <em>Marco: arquitetura aprovada.</em>"
      ],
      [
        "Design",
        "Direção visual, design system e componentes, telas das páginas principais e a revisão de responsividade e acessibilidade. <em>Marco: design aprovado.</em>"
      ],
      [
        "Desenvolvimento",
        "Ambientes e configuração do CMS, desenvolvimento de gabaritos e componentes, integrações e formulários, e instrumentação de analytics. <em>Marco: escopo funcional concluído.</em>"
      ],
      [
        "Migração de conteúdo",
        "A planilha de mapeamento da migração, reescrita e otimização dos textos, migração de imagens e arquivos e a carga efetiva no CMS. <em>Marco: congelamento de conteúdo no site antigo.</em>"
      ],
      [
        "SEO e mapa de redirecionamentos",
        "Mapeamento de URL antiga para URL nova em cada página que muda, regras de redirecionamento construídas e testadas, metadados e dados estruturados, canônicas e o sitemap XML. <em>Marco: mapa de redirecionamentos aprovado.</em>"
      ],
      [
        "QA",
        "Testes em navegadores e dispositivos, auditoria de acessibilidade, Core Web Vitals, um rastreamento completo dos redirecionamentos em homologação e a validação pelas áreas. <em>Marco: QA aprovado.</em>"
      ],
      [
        "Publicação e monitoramento",
        "Decisão de publicar ou não publicar, virada de DNS, verificação dos redirecionamentos em produção, envio do sitemap e trinta dias de monitoramento de erros de rastreamento e de posições."
      ]
    ],
    callout: "O mapa de redirecionamentos é o projeto. Cada URL que muda sem um 301 no lugar é tráfego que você pagou para conquistar e depois jogou fora, e o estrago aparece semanas depois, quando as posições já foram embora. Monte o mapa a partir de um rastreamento completo do site antigo — e não do sitemap novo — e teste em homologação antes da publicação, e não depois.",
    customize: [
      "Comece o inventário de URLs na primeira semana; o rastreamento do site atual é a entrada da auditoria de conteúdo, da planilha de migração e do mapa de redirecionamentos.",
      "Acrescente uma linha por tipo de conteúdo ou seção se você vai migrar milhares de páginas — uma única barra de migrar conteúdo sempre esconde um mês.",
      "Estenda honestamente a barra de reescrita de conteúdo; é normalmente a tarefa mais subestimada do projeto inteiro, e ela precisa de redatores, e não de desenvolvedores.",
      "Mantenha um marco de congelamento de conteúdo no site antigo, para que a migração não persiga um alvo em movimento.",
      "Faça do rastreamento de redirecionamentos em homologação um predecessor rígido da decisão de publicar, e não um item simpático de QA.",
      "Estenda a barra de monitoramento pós-publicação para pelo menos trinta dias — buscadores levam semanas para rastrear e reprocessar um site que mudou."
    ],
    tips: [
      "<strong>Rastreie o site antigo antes de qualquer outra coisa.</strong> Você não audita, migra nem redireciona o que não inventariou, e a maioria das organizações tem bem mais URLs no ar do que imagina.",
      "<strong>Não publique numa sexta-feira.</strong> Problemas de redirecionamento e de indexação aparecem em horas e exigem gente disponível para corrigir.",
      "<strong>Teste os redirecionamentos em homologação com o mapa real.</strong> Conferir dez URLs por amostragem não prova nada; rastreie a lista completa de URLs antigas contra a homologação e confira cada código de resposta.",
      "<strong>Mantenha a medição antiga rodando em paralelo.</strong> Sem uma linha de base comparável você não consegue dizer se a queda de tráfego pós-publicação é sazonal ou culpa sua.",
      "<strong>Escreva o conteúdo antes de os gabaritos ficarem prontos.</strong> Conteúdo esperando design é a causa mais comum de uma data de publicação escorregar duas vezes.",
      "<strong>Estabeleça a linha de base na aprovação do design.</strong> Antes disso o escopo ainda se move; depois, a variação é o que o comitê deve estar olhando."
    ],
    faq: [
      [
        "Quanto tempo leva a reformulação de um site?",
        "Normalmente de 4 a 9 meses num site de porte médio, puxado principalmente pelo volume de conteúdo, e não pelo design ou pelo desenvolvimento. O modelo usa um cronograma de cerca de nove meses, que você comprime cortando escopo, e não tempo de migração."
      ],
      [
        "O que é um mapa de redirecionamentos e por que ele importa?",
        "É um mapeamento linha a linha de cada endereço antigo para o novo, implementado como redirecionamentos 301. Sem ele, cada URL alterada perde a autoridade de busca acumulada e os links externos que apontavam para ela. Por isso ele tem fase própria aqui."
      ],
      [
        "Quando começar a migração de conteúdo?",
        "Assim que a auditoria de conteúdo terminar e a planilha de mapeamento existir — bem antes de o desenvolvimento acabar. Conteúdo é o item mais longo, e começá-lo depois de os gabaritos ficarem prontos acrescenta meses."
      ],
      [
        "O que monitorar depois da publicação?",
        "Erros de rastreamento e 404, cobertura de indexação, posições dos termos prioritários e tráfego orgânico contra a linha de base anterior, por pelo menos trinta dias. Os quatro estão no gráfico como tarefas reais."
      ],
      [
        "O modelo de reformulação de site é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro e sem marca d'água."
      ]
    ]
  },

  'hotel-refurbishment-schedule': {
    card: "Fechamento por andar, diárias perdidas, ruído e áreas sociais.",
    h1: "Cronograma de reforma de hotel",
    metaTitle: "Cronograma de reforma de hotel",
    metaDesc: "Modelo gratuito de cronograma de reforma de hotel: fechamento por andar, diárias perdidas, janelas de ruído, elevadores e áreas de serviço.",
    lead: "Um modelo gratuito de <strong>cronograma de reforma de hotel</strong> para um hotel que segue vendendo enquanto é reconstruído — fechamentos faseados andar a andar, a receita de diárias perdida em cada um deles, janelas de ruído respeitando o horário dos hóspedes, o sequenciamento de elevadores e das áreas de serviço, e as áreas sociais programadas para a baixa temporada. Baixe para o proprietário ou para a gestora do ativo, ou abra online para enxergar quantas unidades habitacionais você está de fato tirando do inventário a cada mês.",
    intro: "A reforma de um hotel em operação é uma obra com um contador de receita girando ao lado. O modelo sequencia os serviços em torno da ocupação, e não da disponibilidade das frentes de trabalho:",
    phases: [
      [
        "Viabilidade e planejamento de receita",
        "Levantamento das condições do prédio, escopo e padrão de acabamento, o modelo de deslocamento de diárias e a estratégia de fechamento que decorre dele. <em>Marco: capital aprovado.</em>"
      ],
      [
        "Projeto e compras",
        "Conceito e projeto executivo, especificação de mobiliário e enxoval, um apartamento-modelo completo, e as compras contra prazos de entrega que definem quando o primeiro andar pode fechar. <em>Marco: apartamento-modelo aprovado.</em>"
      ],
      [
        "Áreas de serviço e elevadores",
        "Levantamento de prumadas e instalações, modernização dos elevadores um carro por vez, áreas de funcionários, casa de máquinas e troca de chillers — os serviços que afetam todos os andares e não podem ser feitos duas vezes."
      ],
      [
        "Fechamento dos andares de hóspedes",
        "Andares retirados do inventário em sequência, demolidos, reformados, revisados na lista de pendências e devolvidos à venda. <em>Marco: último andar devolvido.</em>"
      ],
      [
        "Áreas sociais e alimentos e bebidas",
        "Lobby, restaurante, bar, salas de evento e spa, programados para a baixa temporada com solução provisória para os hóspedes no intervalo."
      ],
      [
        "Entrega e reposicionamento",
        "Comissionamento, retreinamento da equipe no produto novo, fotografia, reposicionamento de tarifa e a volta ao inventário completo. <em>Marco: inventário integralmente restabelecido.</em>"
      ]
    ],
    callout: "Precifique cada fechamento em diárias antes de sequenciar qualquer coisa. Um andar de 30 unidades fechado por oito semanas equivale a cerca de 1.700 diárias de inventário perdidas, e mudar esse fechamento de janeiro para junho pode valer mais do que toda a economia que você negociava com a construtora. O modelo de deslocamento pertence ao começo do cronograma, e não a um anexo.",
    customize: [
      "Troque as linhas de andar pela sua própria contagem de unidades e pela duração real de cada fechamento, depois some as diárias perdidas por mês contra a sua previsão.",
      "Empurre as obras das áreas sociais para a sua baixa temporada de verdade — na maioria dos hotéis ela é uma janela mais estreita do que o orçamento anual sugere.",
      "Defina a janela de serviços ruidosos nas horas que a operação consegue realmente defender, e mantenha perfuração e demolição dentro dela.",
      "Acrescente uma linha por carro de elevador; modernizar todos ao mesmo tempo quase nunca é aceitável num hotel em operação.",
      "Insira um plano de remanejamento se você precisar transferir hóspedes no meio da estadia, e dimensione gente para ele — é trabalho real de recepção, não erro de arredondamento.",
      "Marque aprovação do capital, aprovação do apartamento-modelo, devolução do último andar e inventário restabelecido como marcos."
    ],
    tips: [
      "<strong>Construa o apartamento-modelo antes de comprar qualquer coisa.</strong> É a única oportunidade barata de descobrir que a marcenaria não encaixa, que as tomadas estão no lugar errado e que o detalhe do banheiro vaza — e a equipe de operações deveria dormir nele.",
      "<strong>Não feche dois andares ao mesmo tempo sem que o modelo diga que dá para vender em volta.</strong> Compressão de tarifa funciona até você não ter mais quartos para comprimir.",
      "<strong>Sequencie na vertical, e não na horizontal.</strong> Prumadas, tubulações de esgoto e poços de elevador atravessam todos os andares, então planeje os serviços de instalação como uma campanha vertical contínua em vez de repeti-los andar por andar.",
      "<strong>Proteja o percurso do hóspede.</strong> Acesso da obra, tapumes, retirada de entulho e elevador de carga precisam de um caminho que nunca cruze o lobby no horário de check-in; ponha essas restrições no gráfico, porque elas vão moldar os turnos.",
      "<strong>Mantenha sempre um elevador para hóspedes.</strong> A modernização de elevador é o item de obra que mais gera reclamação e reembolso, e fazer um carro por vez custa semanas mas salva a nota nas avaliações.",
      "<strong>Estabeleça a linha de base na aprovação do apartamento-modelo.</strong> Antes disso o escopo ainda se move; depois, cada semana de atraso tem um custo conhecido em diárias que você consegue reportar."
    ],
    faq: [
      [
        "Quanto tempo leva a reforma de um hotel?",
        "Uma reforma faseada de um hotel de porte médio em operação costuma levar de 12 a 24 meses, porque os andares são fechados em sequência e não todos de uma vez. O modelo usa um cronograma de dezoito meses que você comprime fechando mais unidades por vez — a um custo de receita."
      ],
      [
        "Não seria melhor fechar o hotel inteiro?",
        "Às vezes sim, e é o modelo de deslocamento que responde isso. O fechamento total é mais rápido e mais barato de construir, mas abre mão de toda a receita e arrisca perder contas corporativas e equipe. Modele os dois cenários antes de decidir; este modelo foi feito para a opção faseada."
      ],
      [
        "Como programar serviços ruidosos num hotel em operação?",
        "Acorde uma janela diária fixa — normalmente do meio da manhã ao fim da tarde — e trate isso como restrição rígida do cronograma, e não como um pedido à construtora. Perfuração, demolição e corte de concreto fora dessa janela são o que gera reclamação e compensação de tarifa."
      ],
      [
        "Qual a diferença para o modelo de pré-abertura?",
        "Este é para um hotel que já está vendendo hoje. Se você está comissionando um empreendimento novo, sem hóspedes a proteger, use o <a href=\"/templates/hotel-pre-opening-critical-path.html\">caminho crítico de pré-abertura de hotel</a> — ele é organizado em torno da prontidão para abrir, e não em torno de fechamentos."
      ],
      [
        "O modelo de reforma de hotel é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro e sem marca d'água."
      ]
    ]
  },

  'port-terminal-construction-schedule': {
    card: "Dragagem, aterro, cais, portêineres, pátio e sistema operacional.",
    h1: "Cronograma de obra de terminal portuário",
    metaTitle: "Cronograma de obra de terminal portuário",
    metaDesc: "Modelo gratuito de cronograma de terminal portuário: dragagem, aterro, cais, trilhos, portêineres, pavimentação do pátio e sistema operacional.",
    lead: "Um modelo gratuito de <strong>cronograma de obra de terminal portuário</strong> que cobre as frentes marítima e terrestre juntas — licenciamento de dragagem e de despejo do material, aterro hidráulico, construção do cais, trilhos de portêiner e melhoria do solo, entrega e comissionamento dos portêineres, pavimentação do pátio e o sistema operacional do terminal (TOS). Baixe para um pacote de conselho ou para a autoridade da concessão, ou abra online para alinhar os serviços às suas janelas de tempo bom.",
    intro: "Um terminal de contêineres são três projetos dividindo o mesmo canteiro: uma obra marítima, uma obra civil e um projeto de sistemas. O modelo mantém os três visíveis como frentes separadas, porque são restringidos por coisas completamente diferentes:",
    phases: [
      [
        "Estudos e licenças",
        "Levantamento batimétrico e geotécnico, estudo de impacto ambiental, licenças de dragagem e de área de despejo junto ao órgão ambiental e à autoridade marítima, e a anuência da ANTAQ. <em>Marco: licença de dragagem emitida.</em>"
      ],
      [
        "Dragagem e aterro",
        "Dragagem de aprofundamento dentro da janela climática sazonal, despejo na área licenciada, aterro hidráulico, e o período de sobrecarga e recalque que ninguém consegue encurtar."
      ],
      [
        "Cais e berço",
        "Estaqueamento ou lançamento de caixões, viga de coroamento, defensas e cabeços, e a dragagem do berço até a profundidade de projeto. <em>Marco: berço disponível.</em>"
      ],
      [
        "Trilhos e pátio",
        "Melhoria do solo, vigas e trilhos dos portêineres, pavimentação do pátio, drenagem, torres de iluminação, tomadas de contêiner refrigerado e o complexo de gate."
      ],
      [
        "Portêineres e equipamentos",
        "Fabricação dos guindastes, a viagem do navio de carga pesada e sua janela de atracação, descarga, montagem, ensaio de carga e entrega dos equipamentos de pátio. <em>Marco: guindastes aceitos.</em>"
      ],
      [
        "TOS e início de operação",
        "Configuração do sistema operacional do terminal, integração do gate e do OCR, cobertura de rede e rádio, treinamento, escala de teste com um navio e a abertura comercial. <em>Marco: primeiro navio comercial.</em>"
      ]
    ],
    callout: "A draga e o navio de carga pesada não são seus. Ambos estão encaixados numa escala de frota global fechada com meses de antecedência, e ambos precisam de janela climática e de um berço pronto no dia. Perder o encaixe não custa uma semana — custa esperar a próxima mobilização, o que pode significar uma estação inteira. Ponha as janelas de chegada das embarcações no gráfico como barras fixas e construa o resto de trás para frente a partir delas.",
    customize: [
      "Coloque a campanha de dragagem dentro da janela sazonal real da sua costa, depois confira se o volume de fato cabe nela à taxa de produção da draga.",
      "Alongue a barra de sobrecarga e recalque para o que o relatório geotécnico exigir; é um processo físico, e pressão de cronograma não o altera.",
      "Acrescente uma linha por guindaste se eles chegarem em viagens separadas, e marque cada chegada de navio como marco.",
      "Divida o pátio em módulos se a operação vai entrar progressivamente em vez de abrir o terminal inteiro de uma vez.",
      "Antecipe as linhas de integração do TOS — o trabalho de software não depende de concreto e é rotineiramente iniciado tarde demais.",
      "Marque licença de dragagem, berço disponível, guindastes aceitos e primeiro navio comercial como marcos; são as quatro datas que o poder concedente acompanha."
    ],
    tips: [
      "<strong>As licenças condicionam a dragagem, e a dragagem condiciona tudo que é marítimo.</strong> O licenciamento da área de despejo, em particular, é um processo longo de terceiros sem acelerador, e por isso deve começar antes de o projeto estar concluído.",
      "<strong>Não sobreponha a chegada do navio de guindastes à conclusão do cais.</strong> Os trilhos precisam ser levantados, alinhados e provados sob carga antes de um portêiner poder ser caminhado para terra, e esse levantamento é uma predecessora rígida.",
      "<strong>Programe o recalque, não o presuma.</strong> Terreno aterrado sob um pátio de contêineres precisa de um período monitorado de sobrecarga; pavimentar cedo demais produz um pátio que falha em dois anos.",
      "<strong>Comece a configuração do TOS durante a obra civil.</strong> Sistemas de terminal precisam de cadastros mestres, layout de pátio, regras de gate e interfaces com armadores e com a Receita — nada disso depende de a pavimentação estar pronta.",
      "<strong>Planeje uma escala de teste.</strong> Uma atracação ensaiada com um armador parceiro encontra os problemas de gate, guindaste, TOS e mão de obra que uma primeira escala comercial encontraria caro.",
      "<strong>Estabeleça a linha de base no berço disponível.</strong> As obras marítimas carregam a maior faixa de incerteza do projeto; existindo o berço, o programa terrestre fica muito mais previsível e vale ser acompanhado contra uma linha de base fixa."
    ],
    faq: [
      [
        "Quanto tempo leva construir um terminal de contêineres?",
        "Um terminal novo em área virgem costuma levar de 3 a 5 anos da licença ao primeiro navio comercial, com dragagem, recalque do aterro e entrega dos guindastes definindo o limite superior. O modelo usa um cronograma de cerca de três anos que você estende alongando as fases marítimas."
      ],
      [
        "O que costuma comandar o caminho crítico num projeto portuário?",
        "As licenças de dragagem e a janela de disponibilidade da draga no início, depois o recalque do aterro, depois a fabricação dos portêineres e a viagem do navio de carga pesada. Quase nada disso está sob controle da construtora, e é por isso que cada item tem barra própria no gráfico."
      ],
      [
        "Quanto tempo leva a entrega de portêineres?",
        "A fabricação costuma levar de 12 a 18 meses a partir do pedido, mais a viagem e várias semanas de montagem, ensaio de carga e comissionamento por guindaste. Encomendá-los é uma decisão de cronograma, e não de suprimentos."
      ],
      [
        "Dá para usar numa ampliação em vez de um terminal novo?",
        "Dá. Tire as linhas de aterro e mantenha a dragagem do berço, os trilhos, a entrega dos guindastes e o TOS — é aí que vive a maior parte de um programa de ampliação, com a restrição adicional de trabalhar ao lado da operação em curso."
      ],
      [
        "O modelo de terminal portuário é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'rail-signalling-upgrade-plan': {
    card: "Projeto, dados de intertravamento, FAT, bloqueios, testes e entrada em serviço.",
    h1: "Plano de modernização de sinalização ferroviária",
    metaTitle: "Plano de modernização de sinalização",
    metaDesc: "Modelo gratuito de plano de sinalização ferroviária: projeto, dados de intertravamento, FAT, bloqueios de via, instalação, testes e entrada em serviço.",
    lead: "Um modelo gratuito de <strong>plano de modernização de sinalização ferroviária</strong> construído em torno dos bloqueios de via — projeto do esquema, preparação dos dados de intertravamento, ensaios de aceitação em fábrica, solicitação e reserva dos intervalos de manutenção, instalação dentro de cada bloqueio, testes de princípios e testes integrados, e a entrada em serviço. Baixe para uma revisão de portão de fase, ou abra online para conferir se o serviço que você planejou de fato cabe nas horas que lhe foram concedidas.",
    intro: "Um projeto de ressinalização é um trabalho de escritório com um punhado de fins de semana no meio onde tudo o que é físico acontece. O modelo trata esses fins de semana como recipientes fixos e inegociáveis, e organiza todo o resto em torno deles:",
    phases: [
      [
        "Projeto do esquema",
        "Viabilidade, arranjo de sinalização e planta do esquema, tabelas de controle, interfaces com via permanente, energia e telecomunicações, e a garantia de projeto. <em>Marco: projeto aceito.</em>"
      ],
      [
        "Preparação de dados e FAT",
        "Preparação dos dados de intertravamento, verificação independente conforme norma, simulação, e o ensaio de aceitação em fábrica do intertravamento antes de qualquer coisa sair da oficina. <em>Marco: FAT aprovado.</em>"
      ],
      [
        "Planejamento dos bloqueios",
        "Pedidos de bloqueio protocolados no prazo de grade horária junto ao gestor da infraestrutura, acesso à via reservado, planejamento de desvio e de transporte substituto, e a aprovação da estratégia de bloqueios. <em>Marco: bloqueios confirmados.</em>"
      ],
      [
        "Serviços preparatórios e instalação",
        "Rotas de cabos, casas de equipamento, canaletas e obras civis de lado de via em acessos de meio de semana, depois instalação dos equipamentos e cabeamento de transferência dentro dos bloqueios reservados."
      ],
      [
        "Testes e comissionamento",
        "Conferência de fiação e de instalação, teste de princípios, testes funcionais e integrados, reconhecimento de trecho pelos maquinistas e o próprio fim de semana de comissionamento. <em>Marco: sistema comissionado.</em>"
      ],
      [
        "Entrada em serviço",
        "Passagem do centro de controle, arranjos de contingência e de retorno ao sistema anterior, o período de operação sem falhas e o encerramento do dossiê de segurança. <em>Marco: entrada em serviço.</em>"
      ]
    ],
    callout: "O bloqueio de via é o cronograma. O acesso para manutenção é solicitado contra prazos de grade horária com um ano ou mais de antecedência, e depois de reservado a pergunta deixa de ser \"quando instalamos\" e passa a ser \"o serviço cabe nas horas que recebemos\". Planeje cada bloqueio de trás para frente a partir da hora de devolução da via, com os testes ao final e um plano de contingência para o ponto em que você precisa parar e devolver a ferrovia de qualquer maneira.",
    customize: [
      "Lance primeiro as suas datas reais de bloqueio e trave-as; todas as outras barras do gráfico negociam em torno delas.",
      "Acrescente uma linha por bloqueio com a duração real em horas, e não em dias — um fim de semana de 52 horas e um de 29 horas são projetos diferentes.",
      "Tire do bloqueio tudo que for possível e leve para o meio de semana ou para fora da via; o que puder ser pré-cabeado, pré-testado ou pré-instalado, deve ser.",
      "Alongue as barras de preparação e verificação de dados se o seu intertravamento for grande — a verificação independente é um processo lento e normatizado, e não pode ser paralelizada consigo mesma.",
      "Insira um go/no-go formal duas semanas antes de cada bloqueio de comissionamento, tendo FAT, prontidão de testes e competência da equipe como predecessoras.",
      "Marque aceitação do projeto, aprovação no FAT, bloqueios confirmados, comissionamento e entrada em serviço como marcos."
    ],
    tips: [
      "<strong>Peça os bloqueios antes de o projeto estar concluído.</strong> O prazo de solicitação não espera o seu cronograma, e um esquema que perde a janela da grade horária perde um ano, não um mês.",
      "<strong>Teste na fábrica, não na ferrovia.</strong> Cada falha encontrada no FAT é uma falha que você não vai diagnosticar às três da manhã com a hora de devolução da via se aproximando.",
      "<strong>Escreva primeiro o plano de devolução.</strong> Cada bloqueio precisa de um ponto de não retorno definido, a partir do qual você para de instalar e começa a restabelecer o sistema existente — decida isso no escritório, e não na madrugada.",
      "<strong>Proteja o teste de princípios.</strong> É a etapa crítica de segurança mais exposta a compressão quando a instalação estoura, e é justamente a que nunca pode ser encurtada.",
      "<strong>Programe cedo o reconhecimento de trecho.</strong> Habilitação e familiarização exigem maquinistas liberados da escala, o que é uma negociação de recurso com prazo longo próprio.",
      "<strong>Estabeleça a linha de base nos bloqueios confirmados.</strong> Antes disso as datas são aspirações; depois, os pontos fixos são reais e a variação contra eles é o que importa."
    ],
    faq: [
      [
        "Quanto tempo leva um projeto de ressinalização?",
        "A renovação de um único intertravamento costuma levar de 18 a 36 meses da viabilidade à entrada em serviço, com apenas alguns fins de semana disso passados fisicamente na via. O modelo usa um cronograma de cerca de dois anos que você estende acrescentando bloqueios."
      ],
      [
        "O que é um bloqueio de via?",
        "É um período reservado durante o qual um trecho da ferrovia é fechado ao tráfego para que se possa trabalhar nele — o que a prática britânica chama de <em>possession</em>. Os bloqueios são solicitados contra prazos de planejamento da grade horária com muitos meses de antecedência, e por isso se comportam como restrições fixas, e não como tarefas programáveis."
      ],
      [
        "Por que a preparação de dados de intertravamento está no caminho crítico?",
        "Porque os dados precisam ser preparados, verificados de forma independente e provados em simulação e em ensaio de fábrica antes de poderem ser instalados, e cada uma dessas etapas é sequencial e normatizada. É trabalho lento de escritório que decide se o fim de semana de comissionamento pode acontecer."
      ],
      [
        "Dá para usar em passagem de nível ou em um projeto de estação?",
        "Dá. A estrutura centrada em bloqueios é a mesma — reduza as linhas de dados de intertravamento e mantenha projeto, planejamento de bloqueios, instalação, testes e entrada em serviço."
      ],
      [
        "O modelo de sinalização ferroviária é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'pharma-product-launch-plan': {
    card: "Registro na Anvisa, lotes de validação, preço CMED e ondas de lançamento.",
    h1: "Plano de lançamento de medicamento",
    metaTitle: "Plano de lançamento de medicamento",
    metaDesc: "Modelo gratuito de plano de lançamento farmacêutico: dossiê e registro na Anvisa, lotes de validação, rastreabilidade, preço CMED e ondas por país.",
    lead: "Um modelo gratuito de <strong>plano de lançamento de medicamento</strong> cobrindo o trecho entre um estudo concluído e o produto na prateleira — dossiê e petição de registro, o prazo de análise do órgão regulador, escalonamento de produção e lotes de validação, rastreabilidade e rotulagem por mercado, definição de preço e dossiês de acesso e reembolso, assuntos médicos, e o sequenciamento de lançamento país a país. Baixe para uma revisão de prontidão de lançamento, ou abra online para ver de que a sua data de primeiro mercado realmente depende.",
    intro: "Tudo que é comercial num lançamento farmacêutico está condicionado a duas coisas que você não controla: uma aprovação de registro e uma decisão de preço e reembolso. O modelo coloca as duas no gráfico como barras com dependentes, em vez de como premissas num slide:",
    phases: [
      [
        "Registro sanitário",
        "Compilação do dossiê, reunião pré-submissão, protocolo da petição no primeiro mercado, o prazo de análise, exigências e respostas. <em>Marco: registro concedido.</em>"
      ],
      [
        "Produção e prontidão fabril",
        "Escalonamento do processo, prontidão da planta, três lotes de validação, dados de estabilidade, inspeção de boas práticas de fabricação e liberação do estoque de lançamento. <em>Marco: estoque de lançamento liberado.</em>"
      ],
      [
        "Rastreabilidade e rotulagem",
        "Arte de embalagem por mercado, traduções, serialização e agregação, conexão aos repositórios nacionais de rastreabilidade — o SNCM no Brasil, o repositório europeu em outros mercados — e qualificação da linha de embalagem."
      ],
      [
        "Preço e acesso",
        "Dossiês de avaliação de tecnologia em saúde, pleito de preço junto à CMED, negociação com operadoras e com o comprador público, e as decisões de incorporação por mercado — a fase que decide se um produto aprovado está de fato disponível. <em>Marco: primeira incorporação ou listagem.</em>"
      ],
      [
        "Assuntos médicos e evidência",
        "Plano de publicações, conselhos consultivos, relacionamento com formadores de opinião, educação médica, evidência de mundo real e a função de informação médica."
      ],
      [
        "Lançamento comercial por país",
        "Contratação e treinamento da força de vendas, convenção de lançamento, lançamento no primeiro mercado, depois as ondas dois e três conforme registros e incorporações chegam. <em>Marco: primeira venda comercial.</em>"
      ]
    ],
    callout: "Aprovação não é lançamento. Em muitos mercados um produto não pode ser vendido de forma relevante enquanto não tiver preço e cobertura definidos, e esse processo começa depois do registro e corre por meses no calendário dele. Planeje duas datas por mercado — autorização e disponibilidade — e nunca deixe uma projeção comercial supor silenciosamente que são o mesmo dia.",
    customize: [
      "Fixe a data de protocolo e deixe o prazo de análise correr a partir dela; a duração do regulador é dada, e só o seu tempo de resposta dentro dela é seu.",
      "Duplique as linhas de preço, rotulagem e lançamento por mercado, já que cada um tem autoridade, idioma e caminho de reembolso próprios.",
      "Antecipe os lotes de validação se o seu processo for novo — três lotes bem-sucedidos mais dados de estabilidade formam uma cadeia longa e sem atalho.",
      "Acrescente uma janela de inspeção com tempo real de preparação; um apontamento na inspeção da planta é a forma mais rápida de perder um trimestre de lançamento.",
      "Faça a contratação da força de vendas depender do marco de aprovação, a menos que você consiga bancar o custo de um time esperando decisão.",
      "Marque protocolo, aprovação, liberação do estoque de lançamento, primeira incorporação e primeira venda comercial como marcos."
    ],
    tips: [
      "<strong>Produza o estoque de lançamento antes da aprovação, e assuma o risco de perda conscientemente.</strong> Esperar o registro para só então fabricar acrescenta meses de prateleira vazia; comprometer-se cedo é uma decisão que a diretoria deve tomar explicitamente, e não uma que o cronograma toma por omissão.",
      "<strong>Rode o dossiê de acesso em paralelo com a análise regulatória.</strong> A evidência se sobrepõe, mas o público não, e começar o trabalho de preço e reembolso depois da aprovação é o que transforma um lançamento em uma espera.",
      "<strong>Trate a rastreabilidade como um projeto de sistemas.</strong> Codificação por mercado, agregação e conexão aos repositórios precisam ser testadas com embalagens reais; isso falha em silêncio e é descoberto no primeiro embarque.",
      "<strong>Sequencie os mercados de propósito.</strong> Lançar cedo num mercado de preço baixo usado como referência pode ancorar preços em outros países por anos, então a ordem de lançamento é uma decisão comercial que pertence ao gráfico.",
      "<strong>Mantenha assuntos médicos à frente do comercial.</strong> Publicações, conselhos consultivos e educação precisam de tempo de preparo e não se comprimem nas semanas seguintes à aprovação, quando a promoção começa.",
      "<strong>Estabeleça a linha de base no protocolo.</strong> Tudo antes disso é estimativa de desenvolvimento; depois, o cronograma é uma fila que você consegue acompanhar com precisão."
    ],
    faq: [
      [
        "Quanto tempo leva o lançamento de um medicamento?",
        "Normalmente de 18 a 30 meses do protocolo de registro à primeira venda comercial, com a análise levando cerca de um ano nos mercados maiores e o acesso somando vários meses em cima. O modelo usa um cronograma de cerca de dois anos que você ajusta por mercado."
      ],
      [
        "Onde este modelo começa em relação ao estudo clínico?",
        "Ele começa onde o estudo termina. Fechamento de banco de dados, análise e relatório do estudo pertencem ao <a href=\"/templates/clinical-trial-gantt-chart.html\">gráfico de Gantt de estudo clínico</a>; este modelo parte da compilação do dossiê e vai até a primeira venda."
      ],
      [
        "Por que preço e acesso são uma fase separada?",
        "Porque o registro concede apenas o direito de vender, e não a capacidade de fazê-lo. A avaliação de tecnologia em saúde, o teto de preço definido pela CMED e a negociação com pagadores são processos separados, com prazos próprios, e na maioria dos mercados são eles que determinam quando o produto está de fato disponível."
      ],
      [
        "Como planejar um lançamento em vários países?",
        "Duplique as linhas de rotulagem, acesso e lançamento comercial por mercado e escalone-as em ondas. O modelo mostra um primeiro mercado mais duas ondas, que é o formato usual."
      ],
      [
        "Qual o risco de produzir estoque antes da aprovação?",
        "Perda total se o produto não for aprovado ou se a bula mudar. A maioria dos lançamentos aceita parte desse risco porque os prazos de fabricação excedem o intervalo entre aprovação e primeiros pedidos — mas isso deve ser uma decisão declarada, com um número ao lado."
      ],
      [
        "O modelo de lançamento farmacêutico é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'ma-due-diligence-timeline': {
    card: "NDA, data room, frentes de diligência, SPA, assinatura e fechamento.",
    h1: "Cronograma de due diligence em M&amp;A",
    metaTitle: "Cronograma de due diligence em M&A",
    metaDesc: "Modelo gratuito de cronograma de due diligence: NDA, data room, frentes contábil, jurídica, fiscal e de TI, contrato, assinatura e fechamento.",
    lead: "Um modelo gratuito de <strong>cronograma de due diligence em M&amp;A</strong> cobrindo a operação do primeiro contato ao fechamento — acordo de confidencialidade, teaser e memorando de informações, abertura do data room, as frentes paralelas de diligência, apresentações da administração e o processo de perguntas e respostas, negociação do contrato de compra e venda, assinatura e as condições precedentes até o fechamento. Baixe para o comitê de investimentos, ou abra online para conferir se cada frente termina dentro do seu período de exclusividade.",
    intro: "Diligência não é uma sequência. São seis ou sete frentes lendo o mesmo data room ao mesmo tempo, contra um relógio que foi acertado na carta de exclusividade. O modelo as dispõe como raias paralelas para que o gargalo fique visível:",
    phases: [
      [
        "Abordagem e confidencialidade",
        "Identificação do alvo, abordagem, acordo de confidencialidade, teaser e o memorando de informações. <em>Marco: NDA assinado.</em>"
      ],
      [
        "Oferta indicativa e acesso",
        "Análise da primeira rodada, oferta indicativa ou carta de intenções, exclusividade acordada e data room aberto. <em>Marco: início da exclusividade.</em>"
      ],
      [
        "Frentes de diligência",
        "Diligência contábil, jurídica, fiscal, comercial, de TI e de recursos humanos rodando em paralelo sobre o mesmo data room, cada uma produzindo um relatório e um conjunto de apontamentos."
      ],
      [
        "Administração e perguntas",
        "Apresentações da administração, visitas às instalações, o log de perguntas e respostas e os pedidos complementares — o processo que determina com que velocidade as frentes conseguem de fato terminar."
      ],
      [
        "Apontamentos e termos da operação",
        "Relatório de pontos críticos, ajuste de valuation, posições de declarações e garantias, seguro de garantias e indenizações (W&amp;I) e a aprovação final do comitê de investimentos. <em>Marco: aprovação do comitê.</em>"
      ],
      [
        "Contrato, assinatura e fechamento",
        "Negociação do contrato de compra e venda de participação, carta de divulgação, assinatura, condições precedentes incluindo aprovação do CADE, e a conclusão da operação. <em>Marco: fechamento.</em>"
      ]
    ],
    callout: "Exclusividade é contagem regressiva, não conforto. Ela expira numa data fixa, tendo ou não a frente fiscal recebido suas respostas, e pedir prorrogação é o momento em que um vendedor reabre preço. Trabalhe de trás para frente a partir do fim da exclusividade: a negociação do contrato precisa de semanas, o relatório de pontos críticos precisa de dias, e tudo que sobra antes disso é o que as frentes realmente têm.",
    customize: [
      "Fixe primeiro a data de término da exclusividade e disponha as frentes de trás para frente a partir dela — é a restrição dentro da qual o plano inteiro vive.",
      "Acrescente ou remova raias conforme a operação; um alvo intensivo em ativos exige frentes ambiental e imobiliária, um alvo de software exige propriedade intelectual e revisão de código aberto.",
      "Dê ao log de perguntas e respostas uma linha própria com um responsável. Ele é o gargalo compartilhado entre todas as frentes e o vendedor.",
      "Alongue a barra de condições precedentes se a operação exigir aprovação concorrencial ou setorial; essas durações são definidas pela autoridade, e não pelas partes.",
      "Insira um ponto formal de seguir ou parar depois do relatório de pontos críticos, para que um achado ruim tenha uma decisão programada em vez de uma conversa de corredor.",
      "Marque NDA, início da exclusividade, aprovação do comitê, assinatura e fechamento como marcos — são as datas que um comitê de operações acompanha."
    ],
    tips: [
      "<strong>Abra o data room completo antes de a diligência começar.</strong> Uma sala pela metade faz cada frente queimar a primeira semana abrindo pedidos em vez de lendo, e essa semana não volta.",
      "<strong>Rode um único log de perguntas, e não seis.</strong> Perguntas duplicadas e contraditórias ao vendedor são a forma mais rápida de esgotar a boa vontade da administração e atrasar todas as respostas.",
      "<strong>Comece a minuta do contrato antes de a diligência terminar.</strong> Os advogados conseguem montar a estrutura enquanto os apontamentos ainda chegam; esperar um relatório limpo é o que empurra a assinatura para além da exclusividade.",
      "<strong>Agende cedo as apresentações da administração.</strong> Os executivos do alvo ainda têm um negócio para tocar, e a agenda deles costuma ser o recurso mais escasso do processo.",
      "<strong>Separe assinatura de fechamento no gráfico.</strong> As condições precedentes — aprovação do CADE, anuências contratuais, liberação do financiamento — ficam entre as duas e podem correr por meses numa operação grande.",
      "<strong>Entregue o plano no fechamento.</strong> O planejamento da integração já deveria estar em curso; o <a href=\"/templates/post-merger-integration-plan.html\">plano de integração pós-fusão</a> começa onde este modelo termina."
    ],
    faq: [
      [
        "Quanto tempo leva uma due diligence de M&A?",
        "Numa operação de middle market, tipicamente de 6 a 12 semanas de diligência dentro de um período de exclusividade de duração parecida, seguidas da negociação do contrato e depois das condições precedentes até o fechamento. O modelo usa um cronograma de cerca de cinco meses da abordagem ao fechamento."
      ],
      [
        "Que frentes devem existir num plano de diligência?",
        "Contábil, jurídica, fiscal, comercial, de TI e de recursos humanos como padrão, somando ambiental, imobiliária, de seguros ou de propriedade intelectual conforme o alvo. As seis raias principais correm aqui em paralelo sobre um único data room."
      ],
      [
        "Por que a exclusividade pesa tanto no cronograma?",
        "Porque é o único período em que um comprador pode gastar dinheiro de verdade com assessores sem risco competitivo. Quando ela expira, o vendedor pode reabrir o processo ou repactuar preço, e por isso o plano de diligência é, na prática, um projeto de duração fixa."
      ],
      [
        "Qual a diferença entre assinatura e fechamento?",
        "A assinatura é quando as partes celebram o contrato de compra e venda; o fechamento é quando a propriedade efetivamente se transfere, depois de cumpridas as condições precedentes, como a aprovação do CADE e as anuências de terceiros. Em algumas operações é o mesmo dia, em outras há meses entre eles."
      ],
      [
        "O que acontece depois do fechamento?",
        "Integração. Este modelo termina na conclusão; o <a href=\"/templates/post-merger-integration-plan.html\">plano de integração pós-fusão</a> cobre a prontidão do dia um, as frentes de trabalho e o acompanhamento de sinergias ao longo do primeiro ano."
      ],
      [
        "O modelo de due diligence é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'data-migration-project-plan': {
    card: "Perfilagem, mapeamento, higienização, cargas de ensaio e virada.",
    h1: "Plano de projeto de migração de dados",
    metaTitle: "Plano de projeto de migração de dados",
    metaDesc: "Modelo gratuito de plano de migração de dados: perfilagem, mapeamento, higienização, cargas de ensaio, reconciliação, virada e verificação.",
    lead: "Um modelo gratuito de <strong>plano de projeto de migração de dados</strong> cobrindo a frente inteira — perfilagem das origens, mapeamento e regras de transformação, higienização, construção do ETL, cargas de ensaio sucessivas, reconciliação, a carga de virada em si e a verificação pós-carga. Esta é a frente de dados que roda dentro de um programa maior, seja uma <a href=\"/templates/erp-implementation-schedule.html\">implantação de ERP</a> ou uma <a href=\"/templates/cloud-migration-project-plan.html\">migração para a nuvem</a>, e normalmente é ela que decide se a data de entrada em produção se sustenta.",
    intro: "Planos de migração dão errado quando a carga é tratada como uma tarefa única no fim. Não é uma tarefa — é a mesma tarefa executada várias vezes até a reconciliação bater, e cada execução custa uma janela de indisponibilidade:",
    phases: [
      [
        "Descoberta e perfilagem",
        "Inventário dos sistemas de origem, volumes de dados, donos da informação, perfilagem de nulos, duplicidades e quebras de formato, e a decisão de escopo sobre o que de fato migra. <em>Marco: escopo e origens acordados.</em>"
      ],
      [
        "Mapeamento e regras",
        "Mapeamento campo a campo por objeto, regras de transformação e de valor padrão, alinhamento dos dados de referência e as regras de reconciliação contra as quais você vai testar. <em>Marco: mapeamento aprovado.</em>"
      ],
      [
        "Higienização",
        "Regras de higienização, correção pelos donos do negócio dos registros que as regras não conseguem resolver, e a rodada de deduplicação — trabalho que corre em paralelo porque não depende da construção."
      ],
      [
        "Construção e teste unitário",
        "Construção do ETL ou da ferramenta de migração por objeto, scripts de extração e carga, tratamento de erro, lógica de reinício e os próprios relatórios de reconciliação."
      ],
      [
        "Cargas de ensaio e reconciliação",
        "Três cargas de ensaio completas com reconciliação e correção de defeitos entre elas, mais o ensaio geral cronometrado que prova que a carga cabe na janela de indisponibilidade. <em>Marco: ensaio geral aprovado.</em>"
      ],
      [
        "Virada e verificação",
        "Congelamento da origem, extração do delta, a carga em produção, aprovação da reconciliação, verificação pelo negócio e decisão de retorno. <em>Marco: dados aceitos.</em>"
      ]
    ],
    callout: "Você precisa de três cargas de ensaio, e não de uma, e cada uma consome uma janela de indisponibilidade inteira. A primeira prova que o mapeamento está errado. A segunda prova que a higienização funcionou. A terceira — rodada em volume de produção e cronometrada de ponta a ponta — prova que a carga de fato cabe na janela que lhe foi concedida. Planos que orçam uma única carga descobrem os três problemas no fim de semana da virada, quando não sobra tempo para corrigir nenhum deles.",
    customize: [
      "Fixe primeiro a data de virada e conte de trás para frente; a última carga de ensaio precisa terminar pelo menos duas semanas antes dela.",
      "Desdobre as linhas em uma por objeto de dados — clientes, fornecedores, produtos, transações em aberto, histórico — assim que o mapeamento começar.",
      "Reserve cada carga de ensaio como uma janela de indisponibilidade de verdade, com as mesmas pessoas que vão operar a virada, e não com uma parte delas.",
      "Acrescente uma linha para a extração do delta se a sua origem continuar viva entre o último ensaio e a virada.",
      "Mantenha a decisão de retorno como um marco datado com critérios nomeados, e não como uma opção implícita.",
      "Encaixe este plano inteiro como subplano do seu cronograma de <a href=\"/templates/erp-implementation-schedule.html\">ERP</a> ou de <a href=\"/templates/cloud-migration-project-plan.html\">migração para a nuvem</a>."
    ],
    tips: [
      "<strong>As regras de reconciliação vêm antes da construção.</strong> Se você não sabe dizer como vai provar que a carga está correta, também não sabe quando ela terminou.",
      "<strong>Cronometre cada carga de ensaio de ponta a ponta.</strong> O número de que você precisa não é \"funcionou\", e sim \"quantas horas\", porque é contra isso que a janela de virada é dimensionada.",
      "<strong>Comece a higienização cedo.</strong> Ela depende da perfilagem, e não da construção, então pode correr por meses em paralelo — e sempre leva mais tempo do que o esperado, porque exige gente do negócio, e não do time de dados.",
      "<strong>Migre menos.</strong> Histórico é a parte mais cara de qualquer migração; uma decisão de arquivar em vez de migrar vale mais cronograma do que qualquer esforço de otimização.",
      "<strong>Estabeleça a linha de base na aprovação do mapeamento.</strong> Tudo antes disso é estimativa; tudo depois deve ser acompanhado como variação."
    ],
    faq: [
      [
        "Quanto tempo leva uma migração de dados?",
        "Para a substituição de um sistema de porte médio, normalmente de quatro a oito meses da perfilagem à virada verificada. O modelo usa um cronograma de cerca de sete meses; o ciclo de cargas de ensaio no fim é a parte que resiste a compressão."
      ],
      [
        "Quantas cargas de ensaio são necessárias?",
        "Três é o mínimo de trabalho. A primeira testa o mapeamento, a segunda testa a higienização, e a terceira é um ensaio geral cronometrado em volume de produção que prova que a carga cabe na sua janela de indisponibilidade. Cada uma precisa de janela própria e de reconciliação própria."
      ],
      [
        "Qual a diferença para os modelos de ERP ou de nuvem?",
        "Esta é a frente de dados que roda dentro de qualquer um dos dois. Use o <a href=\"/templates/erp-implementation-schedule.html\">cronograma de implantação de ERP</a> ou o <a href=\"/templates/cloud-migration-project-plan.html\">plano de migração para a nuvem</a> para o programa inteiro, e este quando os dados precisarem de plano detalhado e responsável próprios."
      ],
      [
        "O que costuma atrasar uma migração?",
        "Qualidade de dados descoberta tarde, durante a primeira carga de ensaio, e diferenças de reconciliação que ninguém consegue explicar. As duas são encontradas carregando cedo, e não planejando com mais afinco."
      ],
      [
        "O modelo de migração de dados é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro e sem marca d'água."
      ]
    ]
  },

  'conference-production-schedule': {
    card: "Local, chamada de trabalhos, palestrantes, patrocínio, ingressos e produção.",
    h1: "Cronograma de produção de congresso",
    metaTitle: "Cronograma de produção de congresso",
    metaDesc: "Modelo gratuito de cronograma de congresso: local, chamada de trabalhos, palestrantes, patrocínio, lotes de ingresso, produção e pós-evento.",
    lead: "Um modelo gratuito de <strong>cronograma de produção de congresso</strong> para conduzir um evento de várias trilhas — definição de local e data, chamada de trabalhos e montagem da programação, gestão de palestrantes, venda de patrocínio, lotes de inscrição, áudio e vídeo e produção, o roteiro do show e tudo que precisa acontecer depois da última sessão. Baixe para o pacote do comitê organizador, ou abra online para enxergar de qual prazo a sua programação realmente depende.",
    intro: "Um congresso são quatro negócios rodando ao mesmo tempo: uma programação, um funil de patrocínio, um funil de ingressos e uma montagem de produção. Eles compartilham uma data e quase nada mais, por isso o modelo dá a cada um a sua raia:",
    phases: [
      [
        "Local e datas",
        "Escolha da data contra o calendário do setor, busca de locais e visitas técnicas, contrato e sinal, bloqueio de hotelaria e a decisão de capacidade contra a qual todo o resto é dimensionado. <em>Marco: local contratado.</em>"
      ],
      [
        "Chamada de trabalhos e programação",
        "Temas e trilhas, abertura da chamada de trabalhos, prazo de submissão, avaliação e seleção, aceites e recusas, e a agenda publicada. <em>Marco: agenda publicada.</em>"
      ],
      [
        "Palestrantes",
        "Convites e confirmações de keynote, contratos com palestrantes, passagens e hospedagem, briefings, prazo de entrega das apresentações e ensaios."
      ],
      [
        "Patrocínio e exposição",
        "Prospecto comercial, precificação por cota, prospecção e renovações, contratação, coleta das entregas de cada patrocinador e a planta da área de exposição. <em>Marco: meta de patrocínio atingida.</em>"
      ],
      [
        "Inscrições e marketing",
        "Montagem da plataforma de ingressos, lotes promocional, cheio e de última hora, campanha de lançamento, ondas de e-mail e a sequência de comunicação com os inscritos."
      ],
      [
        "Produção e roteiro do show",
        "Briefing de áudio, vídeo e cenografia, especificação de sala por trilha, sinalização e impressos, equipe e briefings, dias de montagem, o evento em si e o pós-evento. <em>Marco: abertura das portas.</em>"
      ]
    ],
    callout: "O prazo da chamada de trabalhos define tudo o que vem depois. Avaliadores precisam de semanas, palestrantes precisam ser avisados antes de comprar passagem, e a agenda precisa estar pública antes de o lote promocional fechar, ou você vende menos ingressos pelo preço maior. Atrase o prazo de submissão em um mês e você não perdeu um mês — perdeu de uma vez o lote promocional, o tempo de marketing e o orçamento de viagem dos palestrantes.",
    customize: [
      "Fixe primeiro a data do evento e conte de trás para frente; todo prazo aqui é um tempo de antecedência contra essa data, e não uma estimativa somada a partir de hoje.",
      "Acrescente uma linha por trilha se você roda programações paralelas com coordenações e bancas de avaliação separadas.",
      "Ajuste as datas dos lotes de ingresso à sua própria política de preço — o modelo usa promocional, cheio e de última hora.",
      "Desdobre o patrocínio em uma linha por cota ou por conta-alvo assim que a prospecção começar.",
      "Divida os dias de montagem por sala se o local entrega os espaços em horários diferentes.",
      "Acrescente prazos de publicação de resumos ou de artigos se o seu congresso gera anais."
    ],
    tips: [
      "<strong>Publique a agenda antes de o lote promocional fechar.</strong> As pessoas compram uma programação, e não uma data; um lote promocional encerrado sem palestrantes anunciados é dinheiro deixado na mesa.",
      "<strong>Confirme os keynotes antes de abrir a chamada de trabalhos.</strong> Um nome forte eleva a qualidade e o volume das submissões, e é a âncora de que o marketing precisa desde o primeiro dia.",
      "<strong>Estabeleça um prazo de apresentações que você realmente faça valer.</strong> A equipe técnica não testa o que não recebeu, e apresentações de última hora são a causa mais comum de sessões estourando o horário.",
      "<strong>Rode o patrocínio no calendário dele.</strong> Orçamentos de patrocinador são definidos anualmente, então uma prospecção que começa seis meses antes está falando com um orçamento já fechado.",
      "<strong>Agende a reunião de avaliação antes do evento.</strong> A semana seguinte é quando todo mundo desaparece, e é o único momento em que os detalhes ainda estão frescos."
    ],
    faq: [
      [
        "Com quanta antecedência planejar um congresso?",
        "Doze meses é o usual para um evento de várias trilhas com chamada de trabalhos, e nove já é apertado. O modelo usa um cronograma de doze meses ancorado na data do evento; local e keynotes são travados primeiro porque todo o resto é dimensionado contra eles."
      ],
      [
        "Qual a diferença para o modelo de planejamento de eventos?",
        "O <a href=\"/templates/event-planning.html\">modelo de planejamento de eventos</a> é genérico e serve para qualquer evento único. Este foi feito para conduzir um congresso de várias trilhas — chamada de trabalhos, ciclo de avaliação, gestão de palestrantes, cotas de patrocínio e roteiro do show. Use aquele para uma festa ou um lançamento, e este quando você tem uma programação."
      ],
      [
        "E se eu for expositor em vez de organizador?",
        "Use o <a href=\"/templates/trade-show-planning-timeline.html\">cronograma de planejamento de feira</a> — ele cobre a contratação do espaço, a montagem do estande, a captura de contatos e o follow-up. Este modelo é do lado de quem organiza."
      ],
      [
        "Quando a chamada de trabalhos deve fechar?",
        "Com antecedência suficiente para que avaliação, aceite, publicação da agenda e compra de passagens dos palestrantes caibam todos. O modelo deixa cerca de cinco meses entre o prazo de submissão e a abertura das portas, o que é realista quando os avaliadores são voluntários."
      ],
      [
        "O modelo de cronograma de congresso é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro e sem marca d'água."
      ]
    ]
  },

  'call-center-setup-plan': {
    card: "Telefonia, dimensionamento, ondas de contratação, treinamento e rampa.",
    h1: "Plano de implantação de call center",
    metaTitle: "Plano de implantação de call center",
    metaDesc: "Modelo gratuito de plano de call center: contratação de telefonia, dimensionamento, ondas de recrutamento, treinamento, piloto, go-live e rampa.",
    lead: "Um modelo gratuito de <strong>plano de implantação de call center</strong> cobrindo a montagem inteira — modelo de operação presencial ou remoto, contratação de telefonia e de plataforma em nuvem, dimensionamento e escala de força de trabalho, ondas de recrutamento, a academia de treinamento, construção da base de conhecimento, chamadas piloto, go-live e a rampa até o regime permanente. Baixe para um comitê de operações, ou abra online para alinhar as suas ondas de contratação à curva de volume.",
    intro: "Uma central de atendimento vive ou morre em função de haver gente treinada em operação na semana em que o volume chega. O modelo trata contratação e treinamento como a sequência que comanda, e todo o resto como apoio a ela:",
    phases: [
      [
        "Modelo de operação e site",
        "Mix de canais, horário de funcionamento, decisão entre presencial, remoto ou híbrido, escolha de localidade ou política de trabalho em casa, e o modelo de quadro e de custo. <em>Marco: modelo de operação aprovado.</em>"
      ],
      [
        "Tecnologia e telefonia",
        "Seleção da plataforma de atendimento em nuvem e da telefonia, obtenção e portabilidade de números junto à operadora, integração com o CRM e com o sistema de chamados, desenho da URA e do roteamento, ferramentas de gestão de força de trabalho e de qualidade, além da logística de conectividade e headsets."
      ],
      [
        "Dimensionamento",
        "Previsão de volume por intervalo, premissas de tempo médio de atendimento, modelo de Erlang, absenteísmo e improdutividade, padrões de turno e o número de contratações que cada onda precisa entregar."
      ],
      [
        "Ondas de recrutamento",
        "Desenho do cargo e faixa salarial, captação, dinâmicas de seleção e propostas, conduzidas em ondas sucessivas cronometradas para que cada turma termine o treinamento antes de chegar o volume para o qual foi contratada."
      ],
      [
        "Treinamento e conhecimento",
        "Construção do currículo, base de conhecimento e respostas prontas, treinamento de sistemas e comportamental por turma, período de acompanhamento em chamadas reais e certificação. <em>Marco: turma 1 certificada.</em>"
      ],
      [
        "Piloto, go-live e rampa",
        "Chamadas piloto numa fila limitada, calibração de qualidade, go-live, rampa escalonada de volume por turma, e a passagem ao nível de serviço de regime. <em>Marco: regime permanente.</em>"
      ]
    ],
    callout: "Trabalhe de trás para frente a partir da curva de volume, e não para frente a partir de hoje. Uma turma leva semanas para ser recrutada e mais semanas para ser treinada e acompanhada, então um atendente que precisa estar produtivo na primeira semana de operação tem de receber a proposta cerca de dois meses antes. Desistência durante o treinamento é normal, então cada onda precisa ser sobrecontratada. Se as ondas de contratação não estiverem desenhadas no mesmo gráfico que a rampa de volume, a lacuna só fica visível no dia em que a fila também fica.",
    customize: [
      "Fixe primeiro as datas de go-live e da rampa de volume, depois recue cada onda de contratação pela duração completa de recrutar, treinar e acompanhar.",
      "Sobrecontrate cada onda para cobrir a desistência no treinamento — use o percentual que a sua operação realmente observa, em vez de supor que todos se certificam.",
      "Acrescente uma linha por turma se você for rodar mais do que as três ondas mostradas.",
      "Ajuste a duração do acompanhamento à complexidade do seu produto; filas técnicas ou reguladas precisam de mais tempo com apoio em chamada ao vivo.",
      "Antecipe a portabilidade dos números se você estiver migrando linhas existentes — a portabilidade é uma espera de terceiros que você não comprime.",
      "Acrescente linhas de idioma ou de canal se você for lançar chat e e-mail junto com a voz."
    ],
    tips: [
      "<strong>Peça a portabilidade cedo.</strong> Ela é o único item deste plano com relógio de terceiros, e condiciona todo teste de roteamento que dependa do número real.",
      "<strong>Construa a base de conhecimento antes do treinamento, e não durante.</strong> Instrutor escrevendo conteúdo enquanto ensina é como a primeira turma acaba treinada em material que a segunda nunca vê.",
      "<strong>Proteja o período de acompanhamento.</strong> É na fase supervisionada em chamadas reais que o tempo de atendimento e a qualidade de fato assentam; cortá-la para cumprir uma data reaparece como problema de nível de serviço por um trimestre inteiro.",
      "<strong>Faça o piloto numa fila real, porém limitada.</strong> Roteamento, códigos de tabulação e caminhos de escalonamento só falham direito com gente de verdade na linha.",
      "<strong>Suba o volume em degraus.</strong> Passe ao degrau seguinte apenas quando qualidade e tempo de atendimento se sustentarem no atual — a rampa é uma série de portões, e não uma ladeira.",
      "<strong>Confira os prazos regulatórios de atendimento.</strong> Serviços regulados têm exigências de acessibilidade, gravação e prazos de resposta que precisam estar configuradas no go-live, e não depois."
    ],
    faq: [
      [
        "Quanto tempo leva montar um call center?",
        "Normalmente de quatro a seis meses da aprovação do modelo de operação até o go-live, com a rampa até o regime permanente consumindo mais dois ou três. O modelo usa uma montagem de cerca de seis meses e uma rampa escalonada depois dela."
      ],
      [
        "O que comanda o cronograma?",
        "Contratação e treinamento. A tecnologia pode ser comprada e configurada em paralelo, mas uma turma leva semanas para ser recrutada e mais semanas para ser treinada e acompanhada, então a academia fica no caminho crítico até o go-live."
      ],
      [
        "Quantos atendentes devem estar na primeira onda?",
        "O suficiente para cobrir o volume de abertura mais o absenteísmo e a desistência no treinamento, o que normalmente significa recrutar bem mais do que o número de posições. O modelo mostra três ondas justamente para que as turmas seguintes sejam dimensionadas com o que a primeira ensinou."
      ],
      [
        "Serve para uma central remota ou híbrida?",
        "Serve. Tire as linhas de obra do site e mantenha a logística de equipamentos, os testes de conectividade e as tarefas de integração remota — a sequência de contratação e treinamento é idêntica."
      ],
      [
        "O modelo de implantação de call center é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'franchise-rollout-plan': {
    card: "COF, territórios, seleção de pontos, obras, treinamento e ondas de abertura.",
    h1: "Plano de expansão de rede de franquias",
    metaTitle: "Plano de expansão de franquia",
    metaDesc: "Modelo gratuito de plano de expansão de franquia: COF, mapeamento de território, seleção de ponto, obra, treinamento, marketing e ondas de abertura.",
    lead: "Um modelo gratuito de <strong>plano de expansão de rede de franquias</strong> construído em torno da sequência por unidade que você vai repetir em cada loja — recrutamento e aprovação do franqueado, mapeamento de território, seleção do ponto, obra e implantação, padrões de marca e manual de operações, treinamento, marketing de inauguração, abertura e suporte pós-abertura. O modelo mostra o trabalho de sistema uma única vez e depois três ondas de abertura sobrepostas, que é como uma expansão de fato acontece.",
    intro: "Uma expansão de franquia não é um projeto; é um projeto-modelo executado muitas vezes com os inícios escalonados. O gráfico separa as duas coisas:",
    phases: [
      [
        "Prontidão do sistema",
        "Circular de Oferta de Franquia e o pacote jurídico exigido pela Lei de Franquia, modelo de economia da unidade, manual de operações, padrões de marca, acordos com fornecedores e o modelo de consultoria de campo. <em>Marco: sistema pronto para vender.</em>"
      ],
      [
        "Território e funil",
        "Mapeamento de territórios e dimensionamento de mercado, meta de unidades por praça, marketing para candidatos, inscrições, reuniões de apresentação, qualificação financeira e aprovação. <em>Marco: primeiros contratos assinados.</em>"
      ],
      [
        "Unidades da onda 1",
        "A sequência completa por unidade da primeira turma: seleção de ponto e locação, projeto e licenças, obra, equipamentos, treinamento, marketing de inauguração e abertura."
      ],
      [
        "Unidades da onda 2",
        "A mesma sequência, iniciada quando a onda 1 já está em obra, para que consultoria de campo e gestão de obra não sejam obrigadas a estar em dois lugares ao mesmo tempo."
      ],
      [
        "Unidades da onda 3",
        "A terceira turma, dimensionada com o que as ondas 1 e 2 revelaram sobre duração e custo reais por unidade."
      ],
      [
        "Suporte e evolução do sistema",
        "Visitas de campo pós-abertura, análises de desempenho contra o modelo de economia da unidade, e atualizações de manual e de treinamento realimentadas pelo que as primeiras unidades aprenderam."
      ]
    ],
    callout: "A restrição não é nenhuma abertura em particular — é quantas aberturas a sua equipe de suporte consegue carregar ao mesmo tempo. Seleção de ponto, acompanhamento de obra, entrega de treinamento e suporte na semana de inauguração puxam todos o mesmo time central pequeno, e cada unidade precisa dele por semanas. Desenhe as ondas de modo que essas janelas não se empilhem. Uma expansão que promete dez aberturas num trimestre com um consultor de campo é um plano para abrir dez unidades mal.",
    customize: [
      "Ajuste primeiro a sequência por unidade às suas durações reais, depois copie-a por onda — o padrão é a parte reaproveitável.",
      "Mude a sobreposição das ondas conforme o tamanho da sua equipe de campo; mais gente de suporte permite escalonamento mais apertado.",
      "Passe a usar uma linha por unidade, em vez de por onda, assim que os pontos específicos forem definidos.",
      "Estenda as durações de alvará e licenciamento por município — a mesma marca leva tempos muito diferentes em cidades diferentes.",
      "Mantenha o treinamento do franqueado como predecessora rígida da abertura; é a linha mais comprimida com mais frequência e a mais visível para o cliente.",
      "Acompanhe as visitas de suporte pós-abertura como trabalho realmente programado, e não como uma capacidade presumida."
    ],
    tips: [
      "<strong>Não abra as unidades da onda 2 antes de a onda 1 ter operado por um mês.</strong> É nas primeiras lojas que você descobre o que o manual de operações errou, e esse aprendizado vale mais do que uma segunda onda mais rápida.",
      "<strong>Aprove franqueados devagar.</strong> Um franqueado errado é muito mais caro do que uma abertura atrasada, e desfazer isso leva anos.",
      "<strong>Termine o manual de operações antes do primeiro contrato.</strong> Você está vendendo um sistema; se o sistema não estiver escrito, cada unidade inventa o seu.",
      "<strong>Sequencie locação e licenças por unidade, e não por programa.</strong> Cada ponto tem o seu próprio relógio de aprovação, e eles não correm juntos.",
      "<strong>Reserve suporte de semana de inauguração por unidade.</strong> A primeira semana de operação define os hábitos da loja, e suporte remoto não substitui alguém no salão.",
      "<strong>Entregue a COF no prazo legal antes da assinatura.</strong> O prazo mínimo entre entrega da circular e assinatura do contrato é uma restrição jurídica real, e ela pertence ao gráfico como uma barra, não como uma suposição."
    ],
    faq: [
      [
        "Quanto tempo leva expandir uma rede de franquias?",
        "A prontidão do sistema costuma levar de quatro a seis meses, e depois cada unidade leva de seis a nove meses da aprovação do franqueado à inauguração. O modelo mostra a montagem do sistema mais três ondas sobrepostas ao longo de cerca de dois anos."
      ],
      [
        "Quantas unidades devem entrar em cada onda?",
        "Quantas a sua equipe de campo conseguir sustentar de verdade em seleção de ponto, acompanhamento de obra, treinamento e semana de inauguração ao mesmo tempo — normalmente bem menos do que o plano comercial gostaria. É por isso que o modelo usa ondas pequenas."
      ],
      [
        "Qual é a sequência por unidade?",
        "Aprovação do franqueado, território e seleção de ponto, locação, projeto e licenças, obra, equipamentos, treinamento, marketing de inauguração, abertura e suporte pós-abertura. Ela se repete de forma idêntica por unidade, o que é justamente o que a torna programável."
      ],
      [
        "Dá para usar em expansão de lojas próprias?",
        "Dá. Tire as linhas de recrutamento e aprovação de franqueado e mantenha a sequência por unidade — para um ponto único, o <a href=\"/templates/retail-store-opening-timeline.html\">cronograma de abertura de loja</a> se encaixa melhor."
      ],
      [
        "O modelo de expansão de franquia é gratuito?",
        "Sim. Downloads gratuitos em Excel, PowerPoint e CSV, e edição online gratuita, sem cadastro."
      ]
    ]
  },

  'okr-quarterly-planning': {
    card: "Rascunho, alinhamento, avaliação do trimestre, compromisso e retrospectiva.",
    h1: "Planejamento trimestral de OKRs",
    metaTitle: "Planejamento trimestral de OKRs",
    metaDesc: "Modelo gratuito de planejamento trimestral de OKRs: rascunho de objetivos, alinhamento, nota do trimestre, compromisso, check-in e retrospectiva.",
    lead: "Um modelo gratuito de <strong>planejamento trimestral de OKRs</strong> disposto como o ciclo recorrente que ele de fato é — rascunho dos objetivos, alinhamento entre times, avaliação do trimestre que está terminando, compromisso e publicação, o check-in de meio de trimestre, e o fechamento e a retrospectiva que alimentam a rodada seguinte. Baixe para uma reunião de abertura de planejamento, ou abra online para ver onde o fechamento deste trimestre se sobrepõe ao rascunho do próximo.",
    intro: "O motivo de o planejamento de OKRs parecer sempre corrido é que ele nunca começa do zero. Você está avaliando um trimestre enquanto rascunha o seguinte, e os dois precisam das mesmas pessoas nas mesmas semanas. O modelo mostra essa sobreposição em vez de fingir que o ciclo é sequencial:",
    phases: [
      [
        "Direção da empresa",
        "Revisão de estratégia e das metas anuais pela liderança, os dois ou três objetivos de empresa do trimestre, e a orientação contra a qual os times vão rascunhar. <em>Marco: OKRs de empresa rascunhados.</em>"
      ],
      [
        "Fechamento do trimestre anterior",
        "Coleta final dos dados de resultados-chave, autoavaliação dos times, calibração entre times e a apresentação das notas — rodando em paralelo com o rascunho do trimestre seguinte."
      ],
      [
        "Rascunho dos times",
        "Cada time rascunha objetivos e resultados-chave contra a direção da empresa, com uma sessão de trabalho e um primeiro rascunho escrito por time."
      ],
      [
        "Alinhamento",
        "Revisão cruzada de dependências, negociação onde dois times precisam da mesma capacidade, e resolução de conflitos antes do compromisso. <em>Marco: alinhamento concluído.</em>"
      ],
      [
        "Compromisso e abertura",
        "Revisão pela liderança, ajustes finais, publicação na ferramenta de acompanhamento, reunião geral de abertura e o início da cadência semanal de check-in. <em>Marco: OKRs assumidos.</em>"
      ],
      [
        "Execução no trimestre",
        "Atualizações semanais de confiança, o check-in de meio de trimestre em que objetivos podem ser ajustados ou abandonados, e o fechamento e a retrospectiva ao final. <em>Marco: trimestre encerrado.</em>"
      ]
    ],
    callout: "O ciclo se sobrepõe a si mesmo, e é aí que mora todo o problema de programação. Você não consegue avaliar o trimestre passado depois de começar o próximo, porque os dados envelhecem e ninguém lembra do contexto — mas também não consegue rascunhar o próximo sem as notas. Então os dois correm juntos por cerca de três semanas, e as mesmas lideranças são necessárias nos dois. Reserve essa sobreposição explicitamente. Times que tratam planejamento como um encontro de dois dias na primeira semana estão na verdade fazendo quatro semanas de trabalho em dois dias e chamando o resultado de compromisso.",
    customize: [
      "Coloque o dia zero cerca de três semanas antes do fim do trimestre e o ciclo inteiro se encaixa corretamente em torno da virada.",
      "Acrescente uma linha de rascunho por time para enxergar quem está atrasado sem precisar cobrar.",
      "Ajuste o check-in de meio de trimestre à cadência que você realmente pratica — mensal funciona melhor do que trimestral para times de ritmo rápido.",
      "Encurte a fase de alinhamento se você tem menos de cinco times; alongue-a bastante se os times dividem capacidade de engenharia.",
      "Mantenha avaliação e rascunho visivelmente sobrepostos, em vez de sequenciados — a sobreposição é o retrato honesto.",
      "Copie o bloco inteiro para frente para montar o trimestre seguinte; o ciclo é idêntico todas as vezes."
    ],
    tips: [
      "<strong>Avalie antes de assumir.</strong> Definir metas novas sem saber como as anteriores terminaram é como o mesmo objetivo ambicioso demais acaba escrito três trimestres seguidos.",
      "<strong>Limite o número de objetivos.</strong> Três por time é um plano; sete é uma lista. A fase de alinhamento fica dramaticamente mais fácil quando há menos coisa a alinhar.",
      "<strong>Explicite as dependências durante o alinhamento.</strong> A maior parte das falhas de OKR é um time dependendo silenciosamente de uma capacidade de outro time que nunca foi assumida.",
      "<strong>Trate o check-in de meio de trimestre como ponto de decisão.</strong> Ele existe para abandonar ou redimensionar objetivos que não vão se concretizar, e não para reportar status.",
      "<strong>Faça a retrospectiva sobre o processo, e não apenas sobre os resultados.</strong> Se o rascunho pareceu corrido neste trimestre, vai parecer corrido no próximo, a menos que o calendário mude."
    ],
    faq: [
      [
        "Quando começar o planejamento trimestral de OKRs?",
        "Cerca de três a quatro semanas antes de o trimestre começar. O modelo inicia o rascunho enquanto o trimestre anterior ainda está correndo, porque direção da empresa e rascunhos dos times precisam de tempo antes do compromisso, e os dados de avaliação só estão frescos na virada."
      ],
      [
        "Qual a diferença para o modelo de planejamento anual?",
        "O <a href=\"/templates/annual.html\">plano anual</a> cobre um ano inteiro de atividade do negócio. Este é o ritmo trimestral recorrente dentro dele — o ciclo de quatro semanas de rascunhar, alinhar, assumir, acompanhar e fechar que se repete a cada trimestre."
      ],
      [
        "Como isso se relaciona com o roadmap de produto?",
        "O <a href=\"/templates/product-roadmap.html\">roadmap de produto</a> mostra o que você está construindo e quando. OKRs são os resultados com que você se compromete num trimestre. O roadmap costuma ser uma das entradas do rascunho dos times, e não um substituto dele."
      ],
      [
        "Por que avaliação e rascunho se sobrepõem?",
        "Porque os dois precisam das mesmas pessoas e dos mesmos dados ao mesmo tempo. Avaliar depois de rascunhar significa assumir compromissos às cegas; rascunhar depois de avaliar significa começar o trimestre duas semanas atrasado. O modelo sobrepõe os dois de propósito e mostra o quanto."
      ],
      [
        "Dá para reaproveitar todo trimestre?",
        "Dá — é exatamente essa a ideia. Copie o bloco, desloque as datas em um trimestre e a sequência se mantém. Só os objetivos mudam."
      ]
    ]
  },
};

const UI = {
  home: 'Início',
  templates: 'Modelos',
  xlsx: 'Excel (.xlsx)',
  pptx: 'PowerPoint',
  csv: 'CSV',
  edit: 'Editar online grátis',
  included: 'O que o modelo contém',
  customize: 'Como adaptar',
  tips: 'Dicas de cronograma',
  related: 'Modelos relacionados',
  browseAll: 'Ver todos os modelos de gráfico de Gantt',
  faq: 'Perguntas frequentes',
  ctaH2: 'Planeje online — grátis',
  ctaP: 'Abra o modelo no editor, ajuste as barras às suas datas e exporte em PDF, Excel ou PowerPoint. Sem cadastro e sem marca d\'água.',
  ctaBtn: 'Abrir o editor gratuito',
  imgAlt: 'Prévia do modelo com as fases em uma linha do tempo',
  enNote: 'Este modelo está em português. Páginas relacionadas ainda não traduzidas abrem em inglês.',
  /* A function, not a string — feeds the HowTo schema name and takes the
     page h1. JSON.stringify hides functions, so a UI audit that dumps
     the block as JSON will not show it; omitting it throws at render
     time for every template page in the locale. */
  howTo: (name) => `Como usar o modelo: ${name}`,
};

module.exports = { T, UI };
