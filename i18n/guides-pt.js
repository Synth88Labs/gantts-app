/* ============================================================
   guides-pt.js — Brazilian Portuguese guides.

   Written for Brazilian search behaviour, not translated from the
   French. Two things drive the wording:

   "Gráfico de Gantt" outranks "diagrama de Gantt" in Brazilian queries
   by a wide margin, so it leads; "diagrama" appears where it reads
   more naturally rather than being avoided.

   "Cronograma" is the dominant word for a project schedule — "cronograma
   de obra", "cronograma de projeto" — and carries far more query volume
   than any Gantt phrasing. It is used wherever the sentence is really
   about the schedule rather than the chart.

   Terminology follows Brazilian project practice: precedências, folga,
   caminho crítico, marco, linha de base, tarefa resumo.

   Structure mirrors guides-es/de/fr exactly so the renderer needs no
   branch.
   ============================================================ */

const G = {

'what-is-a-gantt-chart': {
  h1: 'O que é um gráfico de Gantt? Estrutura, uso e limites',
  metaTitle: 'O que é um gráfico de Gantt?',
  metaDesc: 'O que é um gráfico de Gantt, quais são seus quatro elementos, para que serve de verdade e onde estão seus limites.',
  date: '2026-07-19',
  lead: 'Um <strong>gráfico de Gantt</strong> é um gráfico de barras que coloca as tarefas em uma linha do tempo: uma linha por tarefa, uma barra por duração. Ele responde a duas perguntas que uma lista de tarefas não alcança — o que acontece em paralelo e o que se desloca quando algo atrasa.',
  figIntro: 'Os quatro elementos de qualquer gráfico de Gantt:',
  sections: [
    ['Os quatro elementos', '<p>As <strong>tarefas</strong> representam o trabalho e têm duração. Os <strong>marcos</strong> têm duração zero e assinalam um momento: uma aprovação, uma entrega, uma decisão. As <strong>precedências</strong> ligam as tarefas e definem o que espera o quê. As <strong>tarefas resumo</strong> agrupam tarefas em fases e assumem automaticamente suas datas.</p>\n        <p>Separar bem esses quatro elementos já é a maior parte de um cronograma consistente.</p>'],
    ['Por que a linha do tempo muda tudo', '<p>Uma lista diz <em>o que</em> fazer. Um gráfico de Gantt acrescenta <em>quando</em> e <em>em que ordem</em>. Fica visível o que a lista esconde: que três tarefas caem na mesma semana e dependem da mesma pessoa, ou que um atraso no começo empurra o fim em duas semanas.</p>'],
    ['Precedências: o valor real', '<p>A utilidade de um gráfico de Gantt depende das ligações. Sem elas, é uma tabela colorida: se uma tarefa escorrega, todas as seguintes precisam ser ajustadas na mão — e isso, na prática, ninguém faz.</p>\n        <p>Com precedências, o cronograma recalcula sozinho. Você move uma barra e tudo que depende dela acompanha. É a diferença entre um cronograma vivo e um documento desatualizado em três semanas.</p>'],
    ['O caminho crítico', '<p>O caminho crítico é a cadeia mais longa de tarefas ligadas. A duração dele é a duração do projeto. Qualquer atraso nesse caminho empurra o fim na mesma medida; atrasos fora dele, muitas vezes, não empurram nada.</p>\n        <p>É o indicador mais útil de um cronograma: mostra onde a atenção faz diferença e onde ela se perde.</p>'],
    ['Quando usar', '<p>Em projetos com prazo, ordem e várias pessoas envolvidas: obras, lançamentos, eventos, mudanças de escritório, pesquisas, implantações de sistema. Onde a pergunta "o que depende do quê" pesa mais do que "o que faço agora".</p>'],
    ['Onde estão os limites', '<p>Para trabalho contínuo e recorrente, o Gantt é a ferramenta errada — Kanban serve melhor. Para um time em sprints de duas semanas com escopo deliberadamente aberto, também.</p>\n        <p>E ele deixa de funcionar quando desce demais: um cronograma de 400 linhas não é planejamento, é contabilidade. Regra prática: nenhuma tarefa com menos de um dia, nenhuma com mais de um mês.</p>'],
    ['De onde vem o nome', '<p>De Henry Gantt, que popularizou a representação por volta de 1910. Uma forma parecida já havia sido desenvolvida duas décadas antes pelo polonês Karol Adamiecki, cujo trabalho permaneceu desconhecido no Ocidente por muito tempo. A representação tem mais de um século — raro para algo que fosse apenas moda.</p>'],
    ['Por onde começar', '<p>Liste primeiro as tarefas, sem datas. Depois estime as durações. Ligue então o que realmente espera — não o que está em sequência por acaso. Por fim, defina de cinco a dez marcos. As datas saem desses três passos.</p>'],
  ],
  callout: 'Um gráfico de Gantt sem precedências é só uma tabela colorida. Todo o valor vem de o cronograma recalcular sozinho quando algo muda — e, em projeto real, algo sempre muda.',
  faq: [
    ['O que é um gráfico de Gantt de forma simples?', 'Um gráfico de barras sobre uma linha do tempo: cada linha é uma tarefa e o comprimento da barra é a duração. As ligações entre barras mostram o que espera o quê.'],
    ['Para que serve um gráfico de Gantt?', 'Para projetos com prazo definido, várias pessoas e dependências entre as etapas — obras, lançamentos, eventos, pesquisas, implantações.'],
    ['Qual a diferença entre gráfico de Gantt e cronograma?', 'O cronograma é o planejamento de prazos como um todo; o gráfico de Gantt é a forma visual mais comum de representá-lo.'],
    ['O gráfico de Gantt ainda faz sentido hoje?', 'Para projetos com ordem e prazo, sim. Para operação contínua ou escopo aberto, Kanban ou um quadro de sprint funcionam melhor.'],
  ],
  related: [['how-to-make-a-gantt-chart', 'Como fazer um gráfico de Gantt'], ['critical-path-method', 'O caminho crítico'], ['gantt-chart-dependencies', 'Os quatro tipos de precedência']],
},

'how-to-make-a-gantt-chart': {
  h1: 'Como fazer um gráfico de Gantt em sete passos',
  metaTitle: 'Como fazer um gráfico de Gantt',
  metaDesc: 'Como fazer um gráfico de Gantt em sete passos: tarefas, durações, precedências, marcos, recursos, folgas e validação.',
  date: '2026-07-19',
  lead: '<strong>Fazer um gráfico de Gantt</strong> leva menos tempo do que parece — desde que na ordem certa. O erro mais comum é começar pelas datas. Datas são resultado, não ponto de partida.',
  figIntro: 'A ordem em que um cronograma realmente se constrói:',
  sections: [
    ['1. Liste as tarefas, sem datas', '<p>Escreva primeiro o que precisa ser feito. Sem datas, sem ordem, sem responsáveis. Só o trabalho.</p>\n        <p>O tamanho certo fica entre um dia e um mês por tarefa. Menos que isso é lista de afazeres; mais que isso não é tarefa, é fase.</p>'],
    ['2. Agrupe em fases', '<p>Reúna as tarefas em quatro a oito fases. É esse agrupamento que torna o cronograma legível — para você e para quem for ver.</p>'],
    ['3. Estime as durações', '<p>Estime em dias úteis, não em dias corridos, e estime o trabalho real: esperas entram como tarefas próprias, não infladas dentro da duração.</p>\n        <p>Uma abordagem que funciona: estimar otimista, provável e pessimista, e ponderar. Quem dá um número só costuma dar o otimista.</p>'],
    ['4. Ligue as precedências', '<p>Ligue o que de fato espera. O teste: se A terminar antes, B pode começar antes? Se sim, a ligação é real. Se não, você apenas copiou a ordem da lista.</p>\n        <p>Não ligue tudo com tudo. Um cronograma em que cada tarefa depende da anterior é uma corrente sem paralelismo — e quase sempre irreal.</p>'],
    ['5. Defina os marcos', '<p>De cinco a dez para um projeto de vários meses. Um marco assinala uma decisão, uma aprovação ou uma condição cumprida — não o fim de uma tarefa qualquer.</p>'],
    ['6. Aloque e confira a carga', '<p>Só agora entram as pessoas — e então se verifica se alguém deveria trabalhar em três tarefas na mesma semana. Essa sobrecarga é o motivo mais comum de um cronograma correto no papel não se sustentar.</p>'],
    ['7. Reserve folga e valide', '<p>Coloque folga onde há incerteza — antes dos marcos e no fim do caminho crítico, não em cada tarefa. Folgas espalhadas somem sem que ninguém perceba; concentradas, ficam visíveis.</p>\n        <p>Por fim, revise o cronograma com quem vai executar. Um cronograma que só uma pessoa conhece não é cronograma, é opinião.</p>'],
    ['Com qual ferramenta?', '<p>Uma planilha resolve projetos pequenos, mas fica trabalhosa acima de umas vinte linhas, porque as precedências não recalculam sozinhas. Uma ferramenta dedicada assume isso — o <a href="/pt/app.html">gantts.app</a> roda direto no navegador, sem cadastro, e salva localmente no seu aparelho.</p>'],
    ['O erro mais comum', '<p>Detalhar demais. Um cronograma de 300 linhas não é mantido, e cronograma desatualizado é pior do que nenhum, porque ainda se confia nele.</p>'],
    ['E depois?', '<p>Cronograma é ferramenta, não documento. Atualize semanalmente, compare com a linha de base e ajuste o que mudou.</p>'],
  ],
  callout: 'Nunca comece pelas datas. Tarefas, durações e precedências produzem as datas sozinhas — e um cronograma feito assim se defende. Um cronograma calculado de trás para frente a partir de uma data desejada não sobrevive à primeira pergunta.',
  faq: [
    ['Como fazer um gráfico de Gantt?', 'Liste as tarefas, agrupe em fases, estime durações, ligue precedências, defina marcos, aloque recursos e reserve folga. As datas saem daí.'],
    ['Como fazer um gráfico de Gantt grátis?', 'No navegador, sem cadastro nem instalação — com o gantts.app, por exemplo. Ou em planilha, o que fica pesado acima de vinte tarefas.'],
    ['Quantas tarefas deve ter um cronograma?', 'O mínimo necessário. De 20 a 60 linhas continuam legíveis; acima de 150, ninguém mantém.'],
    ['Qual a duração ideal de uma tarefa?', 'Entre um dia e um mês. Menos vira lista de afazeres, mais é fase e precisa ser dividida.'],
  ],
  related: [['what-is-a-gantt-chart', 'O que é um gráfico de Gantt?'], ['gantt-chart-dependencies', 'Os quatro tipos de precedência'], ['gantt-chart-mistakes', 'Erros comuns de cronograma']],
},

'critical-path-method': {
  h1: 'Caminho crítico: método, cálculo e exemplo resolvido',
  metaTitle: 'Caminho crítico: cálculo e exemplo',
  metaDesc: 'Caminho crítico explicado: cálculo para frente, para trás, folga total e um exemplo resolvido com quatro tarefas.',
  date: '2026-07-19',
  lead: 'O <strong>caminho crítico</strong> é a cadeia mais longa de tarefas ligadas de um projeto. O comprimento dele é a menor duração possível — e cada dia de atraso nesse caminho é um dia de atraso no fim.',
  figIntro: 'Cálculo para frente, para trás e leitura das folgas:',
  sections: [
    ['A ideia central', '<p>Nem toda tarefa pesa igual no prazo. Algumas têm sobra: podem escorregar sem mover o fim. Outras não têm nenhuma — e são elas que formam o caminho crítico.</p>\n        <p>O método se chama Critical Path Method, ou CPM, e vem do fim dos anos 1950. Ele responde a duas perguntas: quanto tempo o projeto leva no mínimo, e quais tarefas não podem atrasar de jeito nenhum.</p>'],
    ['Cálculo para frente: as datas mais cedo', '<p>Comece no início e avance. Para cada tarefa: o início mais cedo é o maior dos términos mais cedo das predecessoras; o término mais cedo é o início mais cedo somado à duração.</p>\n        <p>Ao fim desse cálculo, você tem a menor duração possível do projeto.</p>'],
    ['Cálculo para trás: as datas mais tarde', '<p>Agora parta do fim. O término mais tarde é o menor dos inícios mais tarde das sucessoras; o início mais tarde é o término mais tarde menos a duração.</p>'],
    ['Folga e caminho crítico', '<p>A folga total de uma tarefa é o início mais tarde menos o início mais cedo. Tarefas com folga zero formam o caminho crítico. Sempre existe pelo menos um, e em cronogramas muito ligados costuma haver vários em paralelo.</p>'],
    ['Um exemplo com quatro tarefas', '<p>A dura 3 dias, B dura 5 e vem depois de A, C dura 2 e também vem depois de A, D dura 4 e vem depois de B e C.</p>\n        <p><strong>Para frente:</strong> A vai do dia 0 ao 3. B de 3 a 8, C de 3 a 5. D espera as duas, começa em 8 e termina em 12. Duração do projeto: 12 dias.</p>\n        <p><strong>Para trás:</strong> D precisa começar em 8. Logo B precisa terminar em 8 — início mais tarde 3, folga 0. C também precisa terminar em 8, mas dura só 2 dias: início mais tarde 6, início mais cedo real 3, <em>folga de 3 dias</em>.</p>\n        <p>O caminho crítico é A → B → D. C pode atrasar três dias sem afetar o fim.</p>'],
    ['O que isso muda na prática', '<p>Mostra onde o esforço rende. Colocar mais gente em C não antecipa nada. Ganhar um dia em B ganha um dia no fim do projeto.</p>\n        <p>E alerta para uma armadilha: se C atrasar quatro dias, C vira crítica. O caminho crítico não é propriedade fixa do cronograma, é um retrato do momento — ele se desloca assim que algo muda.</p>'],
  ],
  callout: 'O caminho crítico muda durante o projeto. Uma tarefa com três dias de folga que atrasa quatro passa a ser crítica. Por isso ele não se calcula uma vez no início, mas a cada atualização.',
  faq: [
    ['O que é o caminho crítico?', 'A cadeia mais longa de tarefas ligadas. A duração dela é a menor duração possível do projeto, e suas tarefas não têm folga.'],
    ['Como calcular o caminho crítico?', 'Cálculo para frente para as datas mais cedo, para trás para as mais tarde. As tarefas em que as duas coincidem — folga zero — formam o caminho crítico.'],
    ['O que é folga total?', 'O quanto uma tarefa pode atrasar sem mover o fim do projeto: início mais tarde menos início mais cedo.'],
    ['Pode haver mais de um caminho crítico?', 'Sim. Em cronogramas muito ligados, vários caminhos paralelos têm o mesmo comprimento e todos passam a ser críticos, o que aumenta bastante o risco.'],
  ],
  related: [['gantt-chart-dependencies', 'Os quatro tipos de precedência'], ['what-is-a-gantt-chart', 'O que é um gráfico de Gantt?'], ['gantt-baseline-variance', 'Linha de base e desvios']],
},

'gantt-chart-dependencies': {
  h1: 'Precedências no gráfico de Gantt: os quatro tipos',
  metaTitle: 'Precedências no gráfico de Gantt',
  metaDesc: 'Término-Início, Início-Início, Término-Término e Início-Término explicados, com antecipação e retardo.',
  date: '2026-07-19',
  lead: 'Uma <strong>precedência</strong> define o que espera o quê. Existem quatro tipos, mas a maioria dos cronogramas usa praticamente um só — e os outros costumam causar mais confusão do que ajuda.',
  figIntro: 'Os quatro tipos de ligação comparados:',
  sections: [
    ['Término-Início (TI)', '<p>O caso padrão: B começa quando A termina. "Pintar" começa quando "rebocar" acaba. Cerca de 90% das ligações em cronogramas reais são desse tipo, e ainda bem — é a única que todo mundo lê corretamente de primeira.</p>'],
    ['Início-Início (II)', '<p>B começa quando A começa. Útil para trabalhos que arrancam juntos: a fiscalização com a estrutura, o time de qualidade com o desenvolvimento. Frequentemente combinada com um retardo — a QA começa três dias após o início do desenvolvimento.</p>'],
    ['Término-Término (TT)', '<p>B termina quando A termina. Típico de atividades de apoio: a documentação fica pronta quando o desenvolvimento fica pronto. Não fixa data de início, apenas um fim comum.</p>'],
    ['Início-Término (IT)', '<p>B termina quando A começa. O caso mais raro, usado sobretudo em passagens de turno: a equipe anterior encerra quando a nova chega; o sistema antigo é desligado quando o novo entra. Se você usa muito, o cronograma costuma estar pensado ao contrário.</p>'],
    ['Antecipação e retardo', '<p>Toda ligação aceita um deslocamento. Um retardo empurra a sucessora — o concreto precisa curar sete dias antes de seguir. Uma antecipação faz começar antes — a segunda etapa começa quando a primeira está em 70%.</p>\n        <p>Uma observação sobre esperas: cura, secagem e prazos de aprovação ficam melhores como tarefas visíveis do que escondidos em um retardo. O que está na barra se vê; o que está na caixa de diálogo ninguém acha depois.</p>'],
  ],
  callout: 'Ligue apenas o que realmente espera. O teste: se A terminar antes, B pode começar antes? Se a resposta for não, não é precedência — é só a ordem em que você escreveu.',
  faq: [
    ['Quais são os tipos de precedência?', 'Quatro: Término-Início, Início-Início, Término-Término e Início-Término. O Término-Início cobre a grande maioria dos casos.'],
    ['Qual a diferença entre antecipação e retardo?', 'O retardo empurra a sucessora (tempo de cura); a antecipação faz começar antes que a predecessora termine por completo.'],
    ['Preciso ligar todas as tarefas?', 'Não, só as precedências reais. Um cronograma em que tudo se encadeia perde o paralelismo e reage demais a qualquer mudança.'],
    ['Por que minha tarefa não se desloca?', 'Normalmente falta a ligação, ou existe uma data fixa que sobrepõe o cálculo.'],
  ],
  related: [['critical-path-method', 'O caminho crítico'], ['what-is-a-gantt-chart', 'O que é um gráfico de Gantt?'], ['gantt-chart-mistakes', 'Erros comuns de cronograma']],
},

'gantt-chart-examples': {
  h1: 'Exemplos de gráfico de Gantt em oito setores',
  metaTitle: 'Exemplos de gráfico de Gantt',
  metaDesc: 'Oito exemplos de gráfico de Gantt: obra, software, marketing, evento, mudança, tese, lançamento e integração de pessoal.',
  date: '2026-07-19',
  lead: 'Um <strong>gráfico de Gantt</strong> muda de aparência conforme o setor — não pela forma, mas pelo agrupamento. Oito exemplos, com as fases realmente usadas e a tarefa que costuma aparecer no caminho crítico.',
  figIntro: 'A mesma representação, oito agrupamentos bem diferentes:',
  sections: [
    ['Obra', '<p>Fases: projeto e licenças, terraplenagem, estrutura, cobertura e vedação, acabamentos, instalações, entrega.</p>\n        <p>O caminho crítico passa quase sempre pelo licenciamento, não pela construção. Tarefas sensíveis a chuva pedem folga, e o acabamento só começa com a obra fechada.</p>'],
    ['Desenvolvimento de software', '<p>Fases: requisitos, arquitetura, desenvolvimento em iterações, integração, homologação, migração, produção.</p>\n        <p>A armadilha é a homologação: planejada como uma barra curta no fim, leva o dobro. Teste e correção formam um ciclo, não uma linha reta.</p>'],
    ['Campanha de marketing', '<p>Fases: estratégia, criação, produção, aprovações, veiculação, análise.</p>\n        <p>O gargalo são as aprovações. Entre a peça pronta e a publicação passam-se duas semanas com frequência — e ninguém planeja isso.</p>'],
    ['Evento', '<p>Fases: conceito, local, fornecedores, programação, inscrições, montagem, realização, desmontagem.</p>\n        <p>A data é fixa, então se planeja de trás para frente. O local é a primeira e mais determinante restrição.</p>'],
    ['Mudança de escritório', '<p>Fases: busca do imóvel, contrato, projeto, obra, infraestrutura de TI, mudança no fim de semana, ajustes.</p>\n        <p>Quem define a data é a TI, não o mobiliário: links e pontos de rede têm prazos de meses.</p>'],
    ['Tese acadêmica', '<p>Fases: projeto de pesquisa, revisão, método, coleta, análise, redação, correções, defesa.</p>\n        <p>Corre por anos, então precisa de marcos a cada seis ou oito semanas — sem eles, o atraso passa despercebido.</p>'],
    ['Lançamento de produto', '<p>Fases: pesquisa de mercado, desenvolvimento, embalagem e homologações, preparação comercial, campanha, lançamento, avaliação.</p>\n        <p>Homologações e certificações caem no caminho crítico com frequência e são quase sempre subestimadas.</p>'],
    ['Integração de novo colaborador', '<p>Fases: preparação antes do primeiro dia, primeira semana, primeiro mês, primeiros 90 dias.</p>\n        <p>Cronograma curto, mas de alto impacto: equipamento e acessos precisam estar prontos antes do primeiro dia, não durante.</p>'],
    ['O que todos têm em comum', '<p>Quatro a oito fases, de 20 a 60 tarefas, cinco a dez marcos. O setor muda o conteúdo, não a estrutura.</p>'],
    ['Por onde começar', '<p>Parta do exemplo mais próximo em vez de uma página em branco. Nossos <a href="/pt/templates.html">modelos</a> cobrem os oito casos e abrem direto no navegador.</p>'],
  ],
  callout: 'Copie o agrupamento em fases, não as durações. As fases de um setor são estáveis entre projetos; as durações nunca são. Um cronograma herdado de outro projeto é a causa mais comum de um plano errado desde o primeiro dia.',
  faq: [
    ['Como é um bom gráfico de Gantt?', 'Quatro a oito fases, de 20 a 60 tarefas, cinco a dez marcos e precedências reais. Cabe em uma página e se explica em um minuto.'],
    ['A partir de quantas tarefas é demais?', 'Acima de 150 ninguém mantém. Nesse ponto, divida em cronogramas menores.'],
    ['Posso aproveitar o cronograma de outro projeto?', 'O agrupamento sim, as durações não. Fases se transferem, estimativas não.'],
  ],
  related: [['what-is-a-gantt-chart', 'O que é um gráfico de Gantt?'], ['how-to-make-a-gantt-chart', 'Como fazer um gráfico de Gantt'], ['gantt-chart-mistakes', 'Erros comuns de cronograma']],
},

'gantt-chart-in-excel': {
  h1: 'Como fazer um gráfico de Gantt no Excel (e seus limites)',
  metaTitle: 'Gráfico de Gantt no Excel',
  metaDesc: 'Como fazer um gráfico de Gantt no Excel com barras empilhadas: passo a passo, formatação e onde a técnica esbarra.',
  date: '2026-07-19',
  lead: 'O Excel não tem um tipo de gráfico de Gantt. Ele é montado com um truque: um <strong>gráfico de barras empilhadas</strong> em que a primeira série fica invisível. Funciona e leva dez minutos — mas tem um limite claro.',
  figIntro: 'O truque em uma imagem: deslocamento invisível mais duração visível.',
  sections: [
    ['Preparar os dados', '<p>Três colunas bastam: tarefa, data de início e duração em dias. Acrescente uma coluna auxiliar com a diferença até o início do projeto — data de início menos a menor data de início.</p>'],
    ['Inserir o gráfico de barras empilhadas', '<p>Selecione tarefa, deslocamento e duração. Inserir → Gráfico → Barras → Barras empilhadas. Você terá duas séries por linha: o deslocamento e a duração.</p>'],
    ['Deixar a primeira série invisível', '<p>Clique na série de deslocamento e defina Preenchimento → Nenhum e Borda → Nenhuma. O que sobra parece uma barra de Gantt começando no ponto certo.</p>'],
    ['Inverter a ordem', '<p>O Excel coloca a primeira linha embaixo. Formatar eixo → Categorias em ordem inversa. Assim a primeira tarefa fica no topo, como se espera.</p>'],
    ['Ajustar o eixo de datas', '<p>O eixo horizontal mostra números no início. Defina mínimo e máximo com os valores seriais das datas de início e fim e formate o eixo como data.</p>'],
    ['Acabamento', '<p>Reduza o espaçamento entre barras para uns 20%, suavize as linhas de grade e diferencie as fases por cor. Marcos entram como série adicional com marcador de losango.</p>'],
    ['Onde a técnica termina', '<p>O Excel não conhece precedências. Se uma tarefa atrasa, cada data de início seguinte precisa ser ajustada na mão — e isso para de acontecer na segunda alteração.</p>\n        <p>Também faltam: caminho crítico, carga de recursos e percentual de avanço. Até umas vinte tarefas, o Excel é uma escolha razoável. Acima disso, a manutenção custa mais do que a ferramenta economiza — o <a href="/pt/app.html">gantts.app</a> recalcula sozinho e também dispensa instalação.</p>'],
  ],
  callout: 'A diferença decisiva não é a aparência, é o cálculo. Um Gantt no Excel parece certo, mas não se atualiza. Assim que as datas mudam — e elas sempre mudam — o cronograma vira desenho.',
  faq: [
    ['O Excel tem gráfico de Gantt?', 'Não. Ele é criado com um gráfico de barras empilhadas cuja primeira série é formatada como invisível.'],
    ['O Excel calcula precedências?', 'Não automaticamente. Cada deslocamento precisa ser repassado à mão para as sucessoras.'],
    ['Até que tamanho o Excel serve?', 'Até umas vinte tarefas. Acima disso, o esforço de manutenção supera o benefício.'],
    ['Existe modelo de Gantt para Excel?', 'Sim, nossos modelos são baixados em XLSX e já trazem as colunas auxiliares.'],
  ],
  related: [['gantt-chart-in-google-sheets', 'Gantt no Google Planilhas'], ['gantt-chart-in-powerpoint', 'Gantt no PowerPoint'], ['how-to-make-a-gantt-chart', 'Como fazer um gráfico de Gantt']],
},

'gantt-chart-in-google-sheets': {
  h1: 'Gráfico de Gantt no Google Planilhas: três caminhos',
  metaTitle: 'Gráfico de Gantt no Google Planilhas',
  metaDesc: 'Três formas de fazer um gráfico de Gantt no Google Planilhas: barras empilhadas, visualização Linha do tempo e formatação condicional.',
  date: '2026-07-19',
  lead: 'O Google Planilhas oferece três caminhos para um <strong>gráfico de Gantt</strong>, e eles diferem mais do que se imagina: um truque de gráfico, uma visualização de linha do tempo nativa e uma alternativa sem gráfico nenhum.',
  figIntro: 'Três caminhos, conforme o que você precisa:',
  sections: [
    ['Caminho 1: barras empilhadas', '<p>Mesmo princípio do Excel. Colunas para tarefa, deslocamento até o início do projeto e duração; depois Inserir → Gráfico → Barras empilhadas, deixando a série de deslocamento transparente.</p>\n        <p>Vantagem: é um gráfico de verdade e pode ser exportado. Desvantagem: nenhuma precedência, como em qualquer planilha.</p>'],
    ['Caminho 2: a visualização Linha do tempo', '<p>O Google Planilhas passou a oferecer Inserir → Linha do tempo. A visualização espera colunas de data de início, data de término e rótulo, e gera uma linha do tempo interativa com cartões.</p>\n        <p>É o caminho mais simples para uma visão geral e não exige truque algum. Mas não foi feita para um cronograma com precedências e caminho crítico.</p>'],
    ['Caminho 3: formatação condicional', '<p>Sem gráfico: crie uma coluna por dia ou semana e pinte as células por formatação condicional quando a data cair entre início e fim. O resultado é uma grade que se lê como um Gantt e vive dentro da planilha.</p>\n        <p>Prático para períodos curtos, confuso a partir de um trimestre.</p>'],
    ['Qual usar em cada caso', '<p>Linha do tempo para uma visão rápida, barras empilhadas para um gráfico que será compartilhado, formatação condicional para um cronograma que fica na planilha.</p>'],
    ['O limite comum', '<p>Nenhum dos três conhece precedências. A força do Planilhas é a edição simultânea: se você precisa disso e o cronograma é pequeno, é uma boa escolha. Quando o cronograma precisa calcular sozinho, é hora de uma ferramenta de planejamento.</p>'],
  ],
  callout: 'A visualização Linha do tempo não é um gráfico de Gantt, mesmo parecendo. Ela mostra períodos, mas ignora ligações e caminho crítico. Para uma visão geral basta; para um cronograma que repassa atrasos, não.',
  faq: [
    ['O Google Planilhas tem função de Gantt?', 'Existe a visualização Linha do tempo (Inserir → Linha do tempo). Ela mostra períodos, mas não trata precedências.'],
    ['Como criar um gráfico de Gantt no Google Planilhas?', 'O caminho mais flexível é o gráfico de barras empilhadas com a primeira série transparente.'],
    ['Dá para trabalhar em equipe no cronograma?', 'Sim, essa é a principal vantagem sobre o Excel: várias pessoas editam o mesmo arquivo ao mesmo tempo.'],
  ],
  related: [['gantt-chart-in-excel', 'Gantt no Excel'], ['gantt-chart-in-powerpoint', 'Gantt no PowerPoint'], ['best-free-gantt-chart-software', 'Ferramentas gratuitas comparadas']],
},

'gantt-chart-in-powerpoint': {
  h1: 'Gráfico de Gantt no PowerPoint: gráfico ou formas',
  metaTitle: 'Gráfico de Gantt no PowerPoint',
  metaDesc: 'Duas formas de fazer um gráfico de Gantt no PowerPoint: barras empilhadas ou formas, com as vantagens de cada uma.',
  date: '2026-07-19',
  lead: 'No PowerPoint, um <strong>gráfico de Gantt</strong> nasce de dois jeitos: como gráfico com planilha de dados, ou à mão com retângulos. A escolha depende apenas de os dados ainda mudarem ou não.',
  figIntro: 'Dois caminhos, duas formas de trabalhar:',
  sections: [
    ['Caminho 1: barras empilhadas', '<p>Inserir → Gráfico → Barras → Barras empilhadas. O PowerPoint abre uma pequena planilha. Preencha tarefa, deslocamento e duração e deixe a série de deslocamento transparente — a mesma técnica do Excel.</p>\n        <p>Vantagem: as barras seguem os dados. Muda a duração, muda a barra. Desvantagem: a liberdade visual é limitada.</p>'],
    ['Caminho 2: montar com formas', '<p>Desenhe uma linha do tempo e coloque um retângulo arredondado por tarefa. Use as guias de alinhamento e uma grade para que as barras correspondam ao eixo.</p>\n        <p>Vantagem: controle total sobre visual, rótulos e animação. Desvantagem: toda mudança é manual, e os comprimentos só ficam certos se você desenhar certo.</p>'],
    ['Quando usar cada um', '<p>Formas quando o cronograma está fechado e o slide serve para apresentar. Gráfico quando os números ainda se movem. Para um slide de diretoria com cinco fases, formas quase sempre são mais rápidas.</p>'],
    ['Projetar para a tela grande', '<p>Um slide comporta de seis a dez barras, não quarenta. Reduza ao nível de fase e destaque no máximo três marcos. O que precisa ser lido a dez metros não suporta detalhe de cronograma.</p>'],
    /* Links to the Portuguese templates HUB, not to a specific detail
       page. The pt template pages do not exist yet — check-links caught
       exactly this shape in the French guide. The hub is correct at any
       coverage level, so it needs no revisiting later. */
    ['O caminho prático', '<p>O mais rápido é manter o cronograma onde ele vive e exportar para o slide. Nossos <a href="/pt/templates.html">modelos</a> incluem um slide já formatado, onde só falta inserir suas tarefas.</p>'],
    ['O erro mais comum', '<p>Espremer o cronograma inteiro em um slide. Apresentação e planejamento têm níveis de detalhe diferentes — o slide conta a história, o cronograma carrega o trabalho.</p>'],
  ],
  callout: 'Um slide não é um cronograma. Mostre as fases e os três marcos que importam. Comprimir quarenta linhas em um slide consegue apenas uma coisa: que ninguém olhe.',
  faq: [
    ['Como fazer um gráfico de Gantt no PowerPoint?', 'Como gráfico de barras empilhadas com a primeira série transparente, ou à mão com retângulos sobre uma linha do tempo desenhada.'],
    ['Qual caminho é melhor?', 'Formas para cronogramas fechados e liberdade visual total; gráfico para dados que ainda mudam.'],
    ['Quantas tarefas cabem em um slide?', 'De seis a dez. Acima disso, não se lê da plateia.'],
  ],
  related: [['gantt-chart-in-excel', 'Gantt no Excel'], ['gantt-chart-examples', 'Exemplos por setor'], ['how-to-make-a-gantt-chart', 'Como fazer um gráfico de Gantt']],
},

'best-free-gantt-chart-software': {
  h1: 'Softwares de Gantt gratuitos: o que é grátis de verdade',
  metaTitle: 'Softwares de Gantt gratuitos',
  metaDesc: 'Comparativo de softwares de Gantt gratuitos: o que é realmente grátis, o que é freemium e o que verificar antes de escolher.',
  date: '2026-07-19',
  lead: 'Em software de gestão de projetos, "<strong>grátis</strong>" significa três coisas diferentes: grátis para sempre, grátis até um limite, ou grátis por um período de teste. A diferença normalmente só aparece com o projeto já em andamento.',
  figIntro: 'Três sentidos de "grátis" que convém conhecer antes:',
  sections: [
    ['Os três tipos de gratuidade', '<p><strong>Realmente grátis</strong>: funcionalidade completa, sem limite de usuários, sem prazo. Raro, e mais comum em ferramentas sem custo de servidor — as que calculam no navegador em vez da nuvem.</p>\n        <p><strong>Freemium</strong>: grátis até um limite. Normalmente três a cinco usuários, dois projetos ou um teto de tarefas. Ao ultrapassar, o plano passa a ser pago — e os dados já estão lá.</p>\n        <p><strong>Período de teste</strong>: tudo liberado por 14 ou 30 dias. Isso não é software gratuito, é demonstração.</p>'],
    ['O que verificar na escolha', '<p>Quatro perguntas resolvem quase tudo. <em>A ferramenta calcula precedências?</em> Sem isso, é um programa de desenho. <em>Mostra o caminho crítico?</em> <em>Os dados saem</em> em CSV, XLSX ou formato de projeto? <em>Onde ficam armazenados?</em> Para dados de projeto com informação pessoal, isso não é detalhe.</p>'],
    ['A questão do cadastro', '<p>A maioria das ferramentas gratuitas pede conta antes de mostrar a primeira barra. Quase nunca é necessidade técnica: é o preço. Ferramentas que rodam inteiramente no navegador e salvam localmente não precisam de conta nem de servidor, porque nada é enviado.</p>\n        <p>O <a href="/pt/app.html">gantts.app</a> funciona assim: sem cadastro, sem transmissão, o cronograma fica no seu aparelho. Isso também responde à questão de privacidade — o que não sai do aparelho não precisa de contrato.</p>'],
    ['Quando o pago compensa', '<p>Quando várias pessoas trabalham no mesmo cronograma ao mesmo tempo, quando os recursos são planejados entre vários projetos, ou quando há obrigações de prestação de contas a um contratante. Para um cronograma isolado de trinta tarefas, software pago é quase sempre exagero.</p>'],
  ],
  callout: 'Verifique a exportação antes de começar. Uma ferramenta da qual os dados não saem em formato aberto é cara independentemente do preço: a troca passa a custar refazer o cronograma inteiro.',
  faq: [
    ['Qual software de Gantt é realmente gratuito?', 'Ferramentas sem custo de servidor — as que calculam no navegador e salvam localmente — podem ser gratuitas de forma permanente. Serviços em nuvem quase sempre são freemium.'],
    ['Software de Gantt gratuito exige cadastro?', 'A maioria exige, mas isso só é tecnicamente necessário em serviços hospedados. Ferramentas totalmente no cliente dispensam.'],
    ['O que avaliar antes de escolher?', 'Precedências, caminho crítico, formatos de exportação e onde os dados ficam. O resto é conforto.'],
    ['Serve para empresa?', 'Para cronogramas isolados, sim. Para trabalho simultâneo, planejamento de recursos entre projetos e prestação de contas, normalmente não.'],
  ],
  related: [['what-is-a-gantt-chart', 'O que é um gráfico de Gantt?'], ['gantt-chart-in-excel', 'Gantt no Excel'], ['how-to-make-a-gantt-chart', 'Como fazer um gráfico de Gantt']],
},

'gantt-baseline-variance': {
  h1: 'Linha de base e desvios: o plano diante da realidade',
  metaTitle: 'Linha de base e desvios no Gantt',
  metaDesc: 'O que é linha de base, como ler desvios de prazo, quando refazer a linha de base e quais indicadores realmente ajudam.',
  date: '2026-07-19',
  lead: 'A <strong>linha de base</strong> é o estado congelado do seu cronograma no momento da aprovação. Sem ela, não dá para dizer depois se o projeto está atrasado — só quando ele deve terminar.',
  figIntro: 'Duas barras por tarefa: o plano de então e a situação de hoje.',
  sections: [
    ['O que é linha de base', '<p>Uma cópia das datas no momento da aprovação. O cronograma atual continua mudando; a linha de base fica parada. A diferença entre as duas é o desvio.</p>\n        <p>Sem linha de base não existe atraso — existe apenas uma nova data de término a cada vez, sem que ninguém consiga explicar como se chegou ali.</p>'],
    ['Quando congelar', '<p>Depois da aprovação e antes de começar o trabalho. Uma linha de base definida com o projeto já rodando há duas semanas não mede mais nada.</p>'],
    ['Ler os desvios', '<p>O desvio de prazo é o término real menos o término planejado, em dias. Positivo significa mais tarde que o previsto. O que importa não é o desvio de uma tarefa isolada, mas se ele está no caminho crítico — ali ele se transfere integralmente para o fim; fora dele, às vezes não afeta nada.</p>'],
    ['Medir o avanço corretamente', '<p>Percentuais de avanço são notoriamente pouco confiáveis; "90% pronto" é a resposta mais comum de qualquer projeto e continua assim por semanas. Mais sólido é perguntar a duração restante: quantos dias ainda faltam? Esse número dá para conferir.</p>'],
    ['Quando refazer a linha de base', '<p>Somente diante de uma mudança aprovada de escopo, orçamento ou prazo — não porque o cronograma antigo ficou feio. Quem refaz a cada atraso termina com um projeto sem desvios e sem nenhuma informação.</p>\n        <p>Guarde as linhas de base anteriores. A sequência delas mostra quantas vezes e por que houve replanejamento — muitas vezes a informação mais reveladora do projeto.</p>'],
    ['O que se aprende', '<p>Depois do encerramento, comparar linha de base e realizado é a melhor base disponível para a próxima estimativa. Se suas tarefas levam sistematicamente 30% a mais, isso não é azar seguido, é um viés de estimativa com fator conhecido.</p>'],
  ],
  callout: 'Não refaça a linha de base porque o cronograma parece ruim. Uma linha de base reajustada a cada atraso mostra permanentemente zero desvio e não explica nada — deixa de ser instrumento de medida e vira maquiagem.',
  faq: [
    ['O que é linha de base do cronograma?', 'O cronograma congelado no momento da aprovação. Serve de referência para todos os desvios medidos depois.'],
    ['Quando definir a linha de base?', 'Após a aprovação e antes do início dos trabalhos. Definida depois, perde o valor.'],
    ['Quando refazer a linha de base?', 'Apenas em mudança aprovada de escopo, orçamento ou prazo — não a cada atraso.'],
    ['O que é desvio de prazo?', 'A diferença em dias entre a data real e a planejada. No caminho crítico, ela se transfere integralmente para o fim do projeto.'],
  ],
  related: [['critical-path-method', 'O caminho crítico'], ['gantt-chart-mistakes', 'Erros comuns de cronograma'], ['milestones-vs-tasks', 'Marcos e tarefas']],
},

'gantt-chart-mistakes': {
  h1: 'Nove erros de cronograma — e como corrigir cada um',
  metaTitle: 'Erros comuns em cronogramas',
  metaDesc: 'Nove erros comuns em gráficos de Gantt: detalhe demais, sem precedências, sem folga, recursos ignorados — cada um com a correção.',
  date: '2026-07-19',
  lead: 'A maioria dos gráficos de Gantt não falha por causa da ferramenta, e sim por nove erros sempre iguais. Cada um se corrige em poucos minutos, uma vez identificado.',
  figIntro: 'Nove erros, na ordem em que costumam aparecer:',
  sections: [
    ['1. Detalhe demais', '<p>Um cronograma de 300 linhas não é mantido, e cronograma desatualizado é mais perigoso do que nenhum, porque ainda se acredita nele. <strong>Correção:</strong> nenhuma tarefa abaixo de um dia, nenhuma acima de um mês.</p>'],
    ['2. Sem precedências', '<p>Sem ligações, nada recalcula quando algo atrasa. <strong>Correção:</strong> ligue ao menos as tarefas do caminho crítico, mesmo que não registre todas as demais.</p>'],
    ['3. Tudo ligado a tudo', '<p>O oposto é igualmente ruim: uma corrente contínua elimina o paralelismo e reage demais a qualquer variação. <strong>Correção:</strong> ligue apenas o que realmente espera.</p>'],
    ['4. Sem folga', '<p>Um cronograma sem folga assume que nada dá errado. <strong>Correção:</strong> concentre a folga antes dos marcos e no fim do caminho crítico, em vez de distribuí-la por tarefa — espalhada, ela some sem que ninguém note.</p>'],
    ['5. Recursos ignorados', '<p>O cronograma fecha no papel, mas uma pessoa deveria estar em três tarefas na mesma semana. <strong>Correção:</strong> confira a carga depois de fechar as datas.</p>'],
    ['6. Marcos com duração', '<p>Marco tem duração zero. "Fase de testes" não é marco; "testes aprovados" é. <strong>Correção:</strong> formule marcos como resultado, não como atividade.</p>'],
    ['7. Planejar de trás para frente a partir da data desejada', '<p>Quando a data final vem primeiro e as durações são ajustadas para caber, o cronograma não convence ninguém. <strong>Correção:</strong> calcule para frente, mostre a diferença e então discuta escopo ou recursos.</p>'],
    ['8. Nunca atualizado', '<p>Cronograma é ferramenta, não documento. <strong>Correção:</strong> atualize semanalmente, compare com a linha de base, nomeie os desvios.</p>'],
    ['9. Conhecido por uma pessoa só', '<p>Um cronograma que não foi discutido é uma opinião sobre o futuro. <strong>Correção:</strong> revise com quem executa antes de ele valer — normalmente aparecem duas ou três tarefas esquecidas.</p>'],
  ],
  callout: 'Os dois erros mais frequentes são opostos: detalhe demais e estrutura de menos. O primeiro torna o cronograma impossível de manter, o segundo o torna inútil. Entre 20 e 60 tarefas em quatro a oito fases resolve os dois na maioria dos projetos.',
  faq: [
    ['Qual o erro mais comum em cronogramas?', 'Detalhe demais. Um cronograma de trezentas linhas deixa de ser atualizado em duas semanas.'],
    ['Quanta folga reservar?', 'De dez a vinte por cento, concentrada antes dos marcos e no fim do caminho crítico, e não espalhada por tarefa.'],
    ['Por que meu cronograma nunca fecha?', 'Normalmente porque foi calculado de trás para frente a partir de uma data desejada, ou porque a carga nunca foi conferida.'],
    ['Com que frequência atualizar?', 'Semanalmente. Menos que isso, o desvio só aparece quando não dá mais para recuperar.'],
  ],
  related: [['how-to-make-a-gantt-chart', 'Como fazer um gráfico de Gantt'], ['gantt-baseline-variance', 'Linha de base e desvios'], ['milestones-vs-tasks', 'Marcos e tarefas']],
},

'milestones-vs-tasks': {
  h1: 'Marcos e tarefas: qual é a diferença',
  metaTitle: 'Marco ou tarefa?',
  metaDesc: 'Diferença entre marco e tarefa, para que servem os marcos de verdade, quantos usar e os erros mais comuns.',
  date: '2026-07-19',
  lead: 'Uma <strong>tarefa</strong> ocupa tempo, um <strong>marco</strong> assinala um momento. Essa é toda a diferença técnica — e ainda assim, usar marcos de forma errada é um dos jeitos mais rápidos de tornar um cronograma ilegível.',
  figIntro: 'Barras para o trabalho, losangos para os momentos que importam:',
  sections: [
    ['A diferença em uma frase', '<p>Uma tarefa tem duração: começa em um dia e termina em outro. Um marco tem duração zero e aparece como losango. "Redigir o contrato" é tarefa; "contrato assinado" é marco.</p>'],
    ['Para que servem os marcos', '<p>Para três coisas. São <em>pontos de controle</em> em que se decide seguir ou não. São <em>a linguagem da diretoria</em> — o que um comitê retém do seu cronograma são cinco datas, não cinquenta barras. E são <em>travas de sequência</em>: ligando o trabalho seguinte a um marco, você impede que ele comece antes de a condição ser cumprida.</p>'],
    ['Quantos usar?', '<p>O suficiente para contar a história, sem diluí-la. De cinco a dez para um projeto de vários meses funciona bem. Com um marco por semana, o cronograma virou calendário e os losangos deixaram de indicar qualquer coisa.</p>'],
    ['Erros comuns', '<p><strong>Marcos que são tarefas disfarçadas.</strong> O que tem duração não é marco.</p>\n        <p><strong>Marcos sem ligações.</strong> Um losango solto no calendário é decoração. O valor dele vem de o trabalho seguinte depender dele.</p>\n        <p><strong>Marcos que ninguém decide.</strong> Se na data não há nada a aprovar, assinar ou verificar, era um lembrete, não um marco.</p>'],
    ['O terceiro tipo: tarefa resumo', '<p>Além de tarefas e marcos existem as tarefas resumo, ou fases. Elas agrupam as tarefas filhas e assumem automaticamente o início mais cedo e o término mais tarde. Não se editam diretamente — movem-se quando o conteúdo se move.</p>\n        <p>É essa hierarquia de três níveis — fase, tarefa, marco — que mantém um cronograma grande legível.</p>'],
  ],
  callout: 'Marco não é tarefa curta: é uma tarefa de duração zero que representa uma decisão ou uma condição cumprida. Se na data ninguém precisa aprovar, assinar ou verificar nada, você marcou um lembrete, não um marco.',
  faq: [
    ['O que é um marco no gráfico de Gantt?', 'Um ponto sem duração que assinala um momento relevante: uma aprovação, uma entrega ou o início de uma fase. Aparece como losango em vez de barra.'],
    ['Quantos marcos um projeto deve ter?', 'De cinco a dez ao longo de vários meses. Muitos marcos tiram deles a função de ponto de controle.'],
    ['Um marco pode ter duração?', 'Por definição não. Para representar um período — uma janela de revisão, por exemplo — trata-se de uma tarefa, que pode terminar em um marco.'],
    ['Qual a diferença entre marco e fase?', 'Fase é uma tarefa resumo que agrupa tarefas e assume as datas delas; marco é um instante sem duração. Costumam andar juntos: a fase encerra e o marco confirma o fechamento.'],
  ],
  related: [['what-is-a-gantt-chart', 'O que é um gráfico de Gantt?'], ['gantt-chart-mistakes', 'Erros comuns de cronograma'], ['gantt-chart-dependencies', 'Os quatro tipos de precedência']],
},

};

const UI = {
  home: 'Início',
  guides: 'Guias',
  backToGuides: 'Voltar aos guias',
  related: 'Leia também',
  faq: 'Perguntas frequentes',
  updated: 'Atualizado em',
  ctaH2: 'Crie seu gráfico de Gantt — grátis',
  ctaP: 'No navegador, sem cadastro. Seus dados ficam no seu aparelho.',
  ctaBtn: 'Abrir o editor',
  enNote: 'Este artigo também está disponível em inglês.',
  readingTime: 'min de leitura',
  byline: 'Redação gantts.app',
  onThisPage: 'Nesta página',
};

module.exports = { G, UI };
