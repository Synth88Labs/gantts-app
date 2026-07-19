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
