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
    ['Preparar os dados', `<p>Monte quatro colunas numa planilha limpa: <strong>Tarefa</strong> (A), <strong>Início</strong> (B), <strong>Término</strong> (C) e <strong>Duração</strong> (D). Digite datas reais em B e C, com formato de data, e calcule a duração em D com <code>=C2-B2</code>, arrastando para baixo. O Excel guarda datas como números seriais, então essa subtração devolve um número puro de dias — exatamente o que o gráfico precisa receber.</p>
        <p>Falta a quinta coluna, a que faz o truque funcionar: o <strong>deslocamento</strong> (E), quantos dias cada tarefa começa depois do início do projeto. Com a menor data de início travada em <code>$B$2</code>, use <code>=B2-$B$2</code>.</p>
        <p>Formate as colunas de deslocamento e duração como <strong>Número</strong> (Página Inicial → grupo Número → Geral), nunca como data. É o passo que mais gente pula, e o sintoma é inconfundível: o gráfico nasce com barras enormes que vão de 1900 até hoje, porque o Excel leu "37 dias" como "6 de fevereiro de 1900".</p>
        <p>Vale montar a tabela já na ordem em que as tarefas devem aparecer, porque reordenar depois obriga a mexer no intervalo de dados do gráfico. Cinco ou seis linhas bastam para validar o método antes de digitar o cronograma inteiro.</p>`],
    ['Inserir o gráfico de barras empilhadas', `<p>Selecione a coluna <strong>Tarefa</strong> e, segurando Ctrl, também as colunas de <strong>deslocamento</strong> e <strong>duração</strong> — deixe as datas de fora, o gráfico não as usa. Depois vá em <strong>Inserir → Gráficos → Barras → Barras Empilhadas 2D</strong>.</p>
        <p>O resultado inicial não parece um Gantt, e isso é esperado: você vê duas séries empilhadas por linha, todas começando no zero. Se o Excel interpretar mal o intervalo, clique com o botão direito no gráfico e use <strong>Selecionar Dados</strong> para conferir três coisas: a série 1 é o deslocamento, a série 2 é a duração, e os rótulos do eixo de categorias são os nomes das tarefas.</p>
        <p>A ordem das séries importa de verdade. Se a duração ficar em primeiro lugar, todas as barras colam na margem esquerda e nenhuma formatação posterior conserta isso — é preciso voltar em Selecionar Dados e subir o deslocamento.</p>`],
    ['Deixar a primeira série invisível', `<p>É o movimento que transforma a coisa toda. Clique <em>uma</em> vez em qualquer segmento da série de deslocamento — um clique seleciona a série inteira, dois cliques selecionam um único ponto —, botão direito, <strong>Formatar Série de Dados</strong>, ícone do balde de tinta, e marque <strong>Preenchimento → Sem preenchimento</strong>.</p>
        <p>Na mesma caixa, marque também <strong>Borda → Sem linha</strong>. Sem isso sobra o contorno do bloco invisível, e o cronograma fica com um retângulo fantasma antes de cada barra.</p>
        <p>As barras de duração passam a flutuar, cada uma no dia em que a tarefa começa. A partir daqui já é um gráfico de Gantt; o que falta é arrumar a leitura.</p>`],
    ['Inverter a ordem', `<p>O Excel desenha a primeira linha da tabela embaixo, então o cronograma nasce de cabeça para baixo. Clique no <strong>eixo vertical</strong> (a lista de nomes de tarefa), botão direito, <strong>Formatar Eixo</strong>, e em Opções de Eixo marque <strong>Categorias em ordem inversa</strong>.</p>
        <p>Na mesma caixa, mude <strong>O eixo horizontal cruza</strong> para <strong>Na categoria máxima</strong>. Sem esse segundo ajuste, a inversão joga o eixo de datas para o rodapé do gráfico e quem lê perde a referência de tempo logo na primeira olhada. Os dois andam juntos: um sem o outro sempre parece errado.</p>`],
    ['Ajustar o eixo de datas', `<p>Por padrão o eixo horizontal começa em zero, o cronograma fica espremido à direita e metade do gráfico sobra vazia. Clique no <strong>eixo horizontal</strong>, abra <strong>Formatar Eixo</strong> e defina os <strong>Limites</strong>: <strong>Mínimo</strong> igual ao número serial da data de início do projeto e <strong>Máximo</strong> igual ao da data de término.</p>
        <p>Para descobrir esses números, digite a data numa célula vazia e formate como <strong>Geral</strong>: o valor exibido é o serial. Em seguida defina a <strong>Unidade Principal</strong> — 7 dá linhas de grade semanais, 14 quinzenais, 30 mensais — e aplique um formato de número de data ao próprio eixo, algo como <code>dd/mm</code>, para não terminar com seriais impressos no gráfico.</p>
        <p>Cronogramas de vários meses ficam melhores com marcação semanal ou mensal; cronogramas de poucas semanas pedem unidade 1 e rótulos diários. Esse é o ajuste que mais muda a impressão de "gráfico profissional" versus "planilha improvisada".</p>`],
    ['Acabamento', `<p>Clique na série de duração e abra <strong>Formatar Série de Dados → Opções de Série</strong>. Reduza a <strong>Largura do Espaçamento</strong> para algo entre 20% e 50%: barras finas com muito ar em volta fazem o cronograma parecer vazio e desalinhado.</p>
        <p>Colorir por fase — um tom por fase, variações do mesmo matiz dentro dela — é o que dá estrutura visual. Cores diferentes por tarefa fazem o oposto: viram ruído. Apague a legenda, que só nomeia "deslocamento" e "duração" e não interessa a ninguém, suavize as linhas de grade para um cinza claro e dê um título ao gráfico.</p>
        <p>Marcos entram como uma série adicional de duração zero, formatada como <strong>Dispersão</strong> com marcador de losango, o que exige converter o gráfico em combinação (botão direito → <strong>Alterar Tipo de Gráfico de Série</strong>). Funciona, mas é o ponto em que a planilha começa a resistir: com muitos marcos, o esforço de manter a combinação cresce rápido.</p>`],
    ['Mostrar o percentual de avanço na barra', `<p>Dá para exibir o avanço dentro da própria barra usando colunas auxiliares. Acrescente <strong>% Concluído</strong> (F) e duas colunas calculadas: <strong>Avanço</strong> com <code>=D2*F2</code> e <strong>Restante</strong> com <code>=D2-(D2*F2)</code>.</p>
        <p>No gráfico, as séries passam a ser três, nesta ordem: deslocamento (invisível), avanço, restante. Pinte o avanço num tom escuro e o restante no mesmo matiz claro. O efeito é uma barra parcialmente preenchida, legível a distância, sem nenhum recurso extra do Excel.</p>
        <p>O preço é manutenção. Cada tarefa nova exige estender o intervalo de dados do gráfico e reconferir a ordem das três séries, e é comum a formatação se perder no caminho — o Excel recoloca cores padrão quando o intervalo muda.</p>`],
    ['Precedências: o que dá para improvisar', `<p>O Excel não tem precedências. Não existe seta término-início, e mover uma tarefa não move nada do que vem depois. O improviso conhecido é apontar a data de início de cada tarefa para o término da anterior: se C2 guarda o término da tarefa 1, B3 recebe <code>=C2</code>, e uma alteração desce em cascata pela coluna.</p>
        <p>Funciona enquanto o cronograma for uma corrente única. Quando uma tarefa tem duas predecessoras, é preciso <code>=MÁXIMO(C2;C5)</code>. Quando existe retardo, soma-se um número. Quando o calendário é de dias úteis, entram <code>DIATRABALHO</code> e <code>DIATRABALHOTOTAL</code>.</p>
        <p>Em vinte linhas isso já virou uma teia de fórmulas que só quem montou consegue auditar — e mesmo assim o gráfico continua sem uma única seta e sem qualquer indicação de <a href="/pt/blog/critical-path-method.html">caminho crítico</a>. A informação está na planilha; ela simplesmente não aparece no desenho.</p>`],
    ['A alternativa sem gráfico: formatação condicional', `<p>Existe um segundo método que dispensa o objeto gráfico por completo e costuma ser mais fácil de manter. Deixe tarefa, início e término nas colunas A, B e C, e monte um calendário na horizontal a partir da coluna E: uma coluna por dia ou por semana, com a data no cabeçalho da linha 1.</p>
        <p>Selecione toda a grade do calendário e vá em <strong>Página Inicial → Formatação Condicional → Nova Regra → Usar uma fórmula para determinar quais células devem ser formatadas</strong>. Com a seleção começando em E2, escreva <code>=E(E$1&gt;=$B2; E$1&lt;=$C2)</code> e escolha um preenchimento.</p>
        <p>As referências mistas são o detalhe que faz a regra funcionar: a linha do cabeçalho travada com <code>$1</code>, as colunas de datas travadas com <code>$B</code> e <code>$C</code>. Erre isso e a grade pinta em diagonal.</p>
        <p>O resultado é um Gantt em células que se redesenha sozinho quando uma data muda, imprime bem e aceita regras adicionais para destacar fins de semana, marcos ou tarefas atrasadas. Continua sem precedências e sem caminho crítico, mas elimina toda a briga com séries e eixos.</p>`],
    ['Onde a técnica termina', `<p>Se uma tarefa atrasa, cada data de início seguinte precisa ser ajustada na mão — e, na prática, isso para de acontecer na segunda alteração. O cronograma continua bonito e passa a estar errado, que é a pior combinação possível, porque ainda se confia nele.</p>
        <p>Também faltam caminho crítico, carga de recursos, <a href="/pt/blog/gantt-baseline-variance.html">linha de base</a> e histórico de desvios. Nada disso é acidente: o Excel é uma planilha, não um motor de cronograma, e cada um desses recursos exigiria uma camada de cálculo que ele não tem.</p>
        <p>Regra prática: até umas vinte tarefas, num cronograma que muda pouco e cujos dados já vivem numa planilha, o Excel é uma escolha razoável. Acima disso, o tempo de manutenção supera o que a familiaridade economiza.</p>
        <p>Uma ferramenta dedicada assume o recálculo. O <a href="/pt/app.html">gantts.app</a> liga precedências, marca o caminho crítico sozinho, roda no navegador sem cadastro e exporta em XLSX quando alguém pedir o arquivo em Excel — o que resolve o motivo mais comum de se montar o cronograma na planilha em primeiro lugar.</p>`],
  ],
  callout: 'A diferença decisiva não é a aparência, é o cálculo. Um Gantt no Excel parece certo, mas não se atualiza. Assim que as datas mudam — e elas sempre mudam — o cronograma vira desenho.',
  faq: [
    ['O Excel tem gráfico de Gantt?', 'Não existe um tipo de gráfico chamado Gantt no menu Inserir. O padrão é montar um gráfico de barras empilhadas com duas séries — deslocamento e duração — e formatar a primeira como Sem preenchimento, o que faz as barras de duração flutuarem na data certa.'],
    ['Por que minhas barras aparecem na ordem errada?', 'O Excel desenha a primeira linha da tabela embaixo. Clique no eixo vertical, abra Formatar Eixo e marque Categorias em ordem inversa; em seguida ajuste "O eixo horizontal cruza" para "Na categoria máxima", senão o eixo de datas vai para o rodapé.'],
    ['Como mostrar o percentual concluído nas barras?', 'Crie uma coluna Avanço igual à duração vezes o percentual e outra com o restante, e use três séries empilhadas: deslocamento invisível, avanço em tom escuro e restante em tom claro. A barra passa a aparecer parcialmente preenchida.'],
    ['O Excel calcula precedências?', 'Não. Não há setas nem recálculo automático. O improviso é fazer o início de cada tarefa referenciar o término da anterior, com MÁXIMO quando houver duas predecessoras — mas nada disso aparece no gráfico nem produz caminho crítico.'],
    ['Dá para fazer um Gantt no Excel sem gráfico?', 'Dá, por formatação condicional: um calendário na horizontal e uma regra por fórmula que pinta a célula quando a data do cabeçalho cai entre início e término. Atualiza sozinho quando as datas mudam e imprime melhor que o gráfico.'],
    ['Até que tamanho o Excel serve?', 'Até umas vinte tarefas num cronograma que muda pouco. Acima disso, o esforço de repassar datas à mão supera o benefício da familiaridade com a planilha.'],
    ['Existe modelo de Gantt para Excel?', 'Sim, nossos modelos são baixados em XLSX e já trazem as colunas auxiliares de deslocamento e duração, o eixo invertido e o eixo de datas formatado.'],
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
    ['Caminho 1: barras empilhadas', `<p>Mesmo princípio do Excel, com menus próprios. Monte a tabela com <strong>Tarefa</strong> em A, <strong>Início</strong> em B e <strong>Término</strong> em C, e acrescente duas colunas calculadas: <strong>Início no dia</strong> em D, com <code>=B2-$B$2</code>, e <strong>Duração</strong> em E, com <code>=C2-B2</code>.</p>
        <p>Selecione as duas colunas novas e aplique <strong>Formatar → Número → Número</strong>. Se elas continuarem formatadas como data, o Planilhas converte 12 em "12 de janeiro de 1900" e o gráfico sai com barras de um século. É o erro mais comum do método.</p>
        <p>Selecione as colunas A, D e E (segure Ctrl para pegar colunas não adjacentes) e vá em <strong>Inserir → Gráfico</strong>. No editor de gráficos, aba <strong>Configuração</strong>, escolha <strong>Gráfico de barras empilhadas</strong>.</p>
        <p>Depois, em <strong>Personalizar → Série</strong>, selecione a série <strong>Início no dia</strong> e defina a <strong>Cor de preenchimento</strong> como <strong>Nenhuma</strong>. As barras de duração passam a flutuar na posição correta. Ainda em Personalizar, abra <strong>Eixo vertical</strong> e marque <strong>Ordem inversa</strong>, para que a primeira tarefa fique no topo.</p>
        <p>Vantagem: é um objeto de gráfico de verdade, que pode ser copiado para o Apresentações, baixado como PNG ou incorporado num Documento com atualização automática. Desvantagem: nenhuma precedência, como em qualquer planilha.</p>`],
    ['Caminho 2: a visualização Linha do tempo', `<p>O Google Planilhas passou a oferecer <strong>Inserir → Linha do tempo</strong>. Selecione o intervalo com cabeçalhos, confirme na caixa de diálogo e uma nova aba de linha do tempo é criada.</p>
        <p>No painel de configurações à direita, você mapeia as colunas: <strong>Título do cartão</strong>, <strong>Data de início</strong>, <strong>Data de término</strong>, <strong>Cor do cartão</strong> e <strong>Agrupar por</strong>. O mínimo exigido é um título e as duas datas; as outras deixam a leitura muito melhor. Uma coluna de fase em "Agrupar por" já organiza o cronograma em faixas, sem nenhuma fórmula.</p>
        <p>A visualização tem zoom por dia, semana, mês, trimestre e ano, rola na horizontal e, ao clicar num cartão, mostra os detalhes e permite pular para a linha de origem na planilha. Como é uma visão ligada à tabela, editar uma data na aba de dados atualiza a linha do tempo na hora.</p>
        <p>É o caminho mais simples para uma visão geral e não exige truque nenhum. As limitações, porém, são reais: não é um objeto de gráfico, então não dá para colar como imagem editável num slide; não existem setas de precedência; e não há caminho crítico nem recálculo quando uma etapa atrasa.</p>`],
    ['Caminho 3: formatação condicional', `<p>Sem gráfico nenhum. Deixe tarefa, início e término à esquerda e crie um calendário na horizontal a partir da coluna E — uma coluna por dia ou por semana, com a data no cabeçalho.</p>
        <p>Selecione a grade e vá em <strong>Formatar → Formatação condicional</strong>. Em "Regras de formatação", escolha <strong>A fórmula personalizada é</strong> e escreva <code>=E(E$1&gt;=$B2; E$1&lt;=$C2)</code>, definindo a cor de preenchimento. As referências mistas fazem a regra andar corretamente pela grade: cabeçalho travado na linha 1, datas travadas nas colunas B e C.</p>
        <p>Uma segunda regra, aplicada antes da primeira, pode pintar fins de semana em cinza com <code>=OU(DIA.DA.SEMANA(E$1)=1; DIA.DA.SEMANA(E$1)=7)</code>. Uma terceira pode destacar em vermelho as tarefas cujo término já passou e o percentual não chegou a 100%.</p>
        <p>O resultado é uma grade que se lê como um Gantt, vive dentro da planilha, imprime bem e se redesenha sozinha quando uma data muda. Prático para períodos curtos; a partir de um trimestre, o número de colunas vira um problema de rolagem.</p>`],
    ['Deixar o cronograma legível', `<p>Independentemente do caminho escolhido, alguns ajustes mudam muito a leitura:</p>
        <ul>
          <li><strong>Agrupe por fase.</strong> Uma coluna "Fase" alimenta o campo <em>Agrupar por</em> da Linha do tempo e serve para ordenar a tabela nos outros dois métodos.</li>
          <li><strong>Marque os marcos.</strong> Tarefas de duração zero somem no gráfico de barras; dê a elas uma cor de destaque e um rótulo curto para que sejam lidas como pontos.</li>
          <li><strong>Mostre o avanço.</strong> Com uma coluna de % concluído e uma auxiliar de duração × percentual, o método das barras empilhadas aceita uma terceira série escura sobre a barra clara.</li>
          <li><strong>Acrescente uma linha de hoje.</strong> Na formatação condicional, uma regra com <code>=E$1=HOJE()</code> pinta a coluna do dia e resolve a pergunta "onde estamos" antes de qualquer explicação.</li>
        </ul>`],
    ['Começar de um modelo', `<p>O caminho mais rápido é não montar a mecânica. Uma planilha pronta já traz as colunas auxiliares calculadas, o gráfico configurado com a série transparente, o eixo invertido e as datas formatadas — basta digitar por cima das linhas de exemplo.</p>
        <p>Para usar um modelo compartilhado, abra-o e use <strong>Arquivo → Fazer uma cópia</strong>, senão você edita um arquivo somente leitura ou, pior, o original de outra pessoa. Depois de copiar, confira duas coisas antes de digitar: se o intervalo de dados do gráfico cobre linhas suficientes para o seu projeto, e se o formato de data da planilha está em <strong>dd/mm/aaaa</strong> (Arquivo → Configurações → Local: Brasil). Modelos criados em local americano interpretam 05/07 como 7 de maio, e o erro só aparece quando o cronograma já está montado.</p>
        <p>Se precisar de mais linhas, insira-as <em>no meio</em> do intervalo existente, nunca depois da última: linhas inseridas no meio entram automaticamente no intervalo do gráfico; linhas coladas no fim ficam de fora e você passa dez minutos procurando a tarefa que sumiu.</p>
        <p>Nossos <a href="/pt/templates.html">modelos</a> cobrem esse ponto de partida e também abrem direto no editor online, caso o cronograma cresça além do que a planilha aguenta.</p>`],
    ['Qual usar em cada caso', `<p>Linha do tempo quando o objetivo é uma visão geral rápida e o cronograma vai ser consultado dentro do próprio arquivo, por pessoas que já têm acesso à planilha. Barras empilhadas quando o gráfico precisa sair dali — para um slide, um relatório, um PDF enviado a um cliente. Formatação condicional quando o cronograma é o documento de trabalho e a equipe já vive na planilha o dia inteiro.</p>
        <p>Na dúvida entre os dois primeiros, o critério é simples: se alguém vai pedir "me manda a imagem", use barras empilhadas. A Linha do tempo não vira imagem editável, e a captura de tela que a substitui envelhece na semana seguinte.</p>
        <p>Um segundo critério é quem vai manter. As barras empilhadas dependem de duas colunas auxiliares que só fazem sentido para quem as criou — quem herdar a planilha vai apagar uma delas achando que é sobra. A Linha do tempo e a formatação condicional se explicam sozinhas para quem chega depois, o que em cronograma compartilhado vale mais do que parece.</p>`],
    ['Precedências improvisadas', `<p>O Planilhas não sabe que "B começa quando A termina". Dá para simular fazendo a data de início de uma tarefa referenciar o término da anterior — <code>=C2</code> — ou, com duas predecessoras, <code>=MÁXIMO(C2;C5)</code>. Para pular fins de semana existe <code>DIATRABALHO</code>.</p>
        <p>A cadeia funciona, mas é frágil: não há setas visíveis, ninguém consegue auditar quais ligações existem, e uma tarefa que recebe data digitada por engano quebra a cascata em silêncio. Se as precedências importam de verdade no seu projeto, esse é o sinal para sair da planilha — vale ler os <a href="/pt/blog/gantt-chart-dependencies.html">quatro tipos de precedência</a> antes de decidir.</p>`],
    ['Tirar o cronograma da planilha', `<p>Para levar o resultado adiante: <strong>Arquivo → Fazer o download → Microsoft Excel (.xlsx)</strong> preserva a tabela e o gráfico de barras empilhadas, mas não a visualização Linha do tempo, que não tem equivalente no Excel. Um gráfico pode ser copiado e colado no Google Apresentações com vínculo, de modo que atualizar a planilha atualiza o slide.</p>
        <p>A rota mais curta, quando o destino é um arquivo pronto, é montar o cronograma numa ferramenta de Gantt e exportar. O <a href="/pt/app.html">gantts.app</a> roda no navegador, sem cadastro, e gera XLSX, PPTX, PDF e PNG a partir do mesmo plano.</p>`],
    ['O limite comum', `<p>Nenhum dos três caminhos conhece precedências, nenhum calcula <a href="/pt/blog/critical-path-method.html">caminho crítico</a>, nenhum avisa que uma pessoa está alocada em três tarefas na mesma semana e nenhum guarda uma <a href="/pt/blog/gantt-baseline-variance.html">linha de base</a> para medir desvio.</p>
        <p>A força real do Planilhas é outra: várias pessoas editando o mesmo arquivo ao mesmo tempo, com histórico de versões e comentários por célula. Se é disso que o projeto precisa e o cronograma é pequeno, é uma escolha boa e honesta.</p>
        <p>Quando o cronograma precisa calcular sozinho — repassar um atraso pela cadeia, mostrar o que virou crítico, comparar com o plano aprovado —, a planilha deixa de ser a ferramenta certa, por mais bem montada que esteja.</p>`],
  ],
  callout: 'A visualização Linha do tempo não é um gráfico de Gantt, mesmo parecendo. Ela mostra períodos, mas ignora ligações e caminho crítico. Para uma visão geral basta; para um cronograma que repassa atrasos, não.',
  faq: [
    ['O Google Planilhas tem função de Gantt?', 'Não existe um tipo de gráfico chamado Gantt, mas há a visualização Linha do tempo (Inserir → Linha do tempo), que transforma uma tabela com datas em cartões sobre um eixo de tempo. Ela mostra períodos e agrupa por fase, porém não trata precedências nem caminho crítico.'],
    ['Como criar um gráfico de Gantt no Google Planilhas?', 'O caminho mais flexível é o gráfico de barras empilhadas: colunas de deslocamento e duração formatadas como Número, Inserir → Gráfico → Barras empilhadas, série de deslocamento com Cor de preenchimento Nenhuma e eixo vertical em Ordem inversa.'],
    ['Qual a diferença entre a Linha do tempo e um gráfico de Gantt?', 'A Linha do tempo é uma visão interativa presa à tabela: ótima para consulta, impossível de exportar como imagem editável. Um gráfico de Gantt de verdade também mostra ligações entre tarefas e recalcula datas, o que nenhum dos recursos do Planilhas faz.'],
    ['Por que minhas barras aparecem enormes ou em 1900?', 'Porque as colunas de deslocamento e duração continuam formatadas como data. Selecione as duas e aplique Formatar → Número → Número; elas precisam ser quantidades de dias, não datas.'],
    ['Dá para trabalhar em equipe no cronograma?', 'Sim, e essa é a principal vantagem sobre o Excel: várias pessoas editam o mesmo arquivo ao mesmo tempo, com histórico de versões e comentários por célula. O que a edição simultânea não resolve é o recálculo de datas quando algo atrasa.'],
    ['Como exporto o cronograma para o Excel?', 'Arquivo → Fazer o download → Microsoft Excel (.xlsx) leva a tabela e o gráfico de barras empilhadas, mas não a visualização Linha do tempo, que não tem equivalente no Excel.'],
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
    ['Caminho 1: barras empilhadas', `<p>No slide, vá em <strong>Inserir → Gráfico → Barras → Barras Empilhadas</strong> e confirme. O PowerPoint abre uma pequena planilha vinculada, com dados de exemplo.</p>
        <p>Substitua por três colunas: <strong>Tarefa</strong>, <strong>Deslocamento</strong> (quantos dias depois do início do projeto a tarefa começa) e <strong>Duração</strong> (em dias). Como a planilha embutida é pequena, o mais prático é calcular esses dois números no Excel e colar só o resultado. Feche a planilha quando terminar.</p>
        <p>Clique em qualquer segmento da série <strong>Deslocamento</strong> para selecionar a série inteira, abra <strong>Formatar Série de Dados</strong> e marque <strong>Preenchimento → Sem preenchimento</strong> e <strong>Borda → Sem linha</strong>. As barras de duração passam a flutuar na posição certa — é exatamente a técnica do Excel, dentro do motor de gráficos do PowerPoint.</p>
        <p>Falta arrumar a ordem: clique no eixo vertical, abra <strong>Formatar Eixo</strong> e marque <strong>Categorias em ordem inversa</strong>. Depois selecione o eixo horizontal e defina <strong>Mínimo</strong> e <strong>Máximo</strong> para o intervalo real do projeto, para o cronograma ocupar a largura toda do slide. Por fim, recolora a série de duração, escreva um título e apague a legenda.</p>
        <p>Vantagem: as barras seguem os dados. Botão direito → <strong>Editar Dados</strong> e o desenho se ajusta sozinho. Desvantagem: os deslocamentos continuam sendo números que você calcula, a liberdade visual é limitada e cada retoque briga com o tema do gráfico.</p>`],
    ['Caminho 2: montar com formas', `<p>Quando o slide precisa seguir a identidade visual à risca, desenhar é mais rápido do que domar o gráfico.</p>
        <ol>
          <li>Insira uma <strong>tabela</strong> (Inserir → Tabela) com uma coluna por semana ou por mês, ou desenhe linhas verticais finas, para servir de eixo de tempo.</li>
          <li>Escreva os nomes das tarefas na coluna da esquerda, uma por linha.</li>
          <li>Para cada tarefa, insira um <strong>retângulo de cantos arredondados</strong> (Inserir → Formas) e estique-o pelas colunas que correspondem ao início e à duração.</li>
          <li>Use <strong>losangos</strong> para os marcos e conectores finos para sugerir as ligações entre tarefas.</li>
          <li>Ative <strong>Exibir → Guias</strong> e use <strong>Formato da Forma → Alinhar → Distribuir Verticalmente</strong> para manter altura e espaçamento iguais.</li>
        </ol>
        <p>Dois hábitos evitam a bagunça. Primeiro, fixe uma altura única de barra e cole tudo na mesma grade — é o que separa um cronograma "desenhado à mão" de um que parece projetado. Segundo, abra o <strong>Painel de Seleção</strong> (Formato da Forma → Painel de Seleção) e nomeie as formas; num cronograma de dez tarefas você já tem trinta objetos, e sem nomes ninguém acha nada depois.</p>
        <p>Agrupe o conjunto (Ctrl+G) para movê-lo como uma peça só e para poder duplicar o slide numa comparação "planejado × atual".</p>
        <p>Vantagem: controle total sobre visual, rótulos e animação. Desvantagem: toda mudança é manual, e os comprimentos só ficam certos se você desenhar certo — nada valida se a barra de seis semanas tem mesmo seis colunas.</p>`],
    ['SmartArt: quando serve e quando não', `<p>Os gráficos de <strong>Processo</strong> e de linha do tempo do SmartArt (Inserir → SmartArt) produzem em segundos um visual de fases encadeadas, com estilos prontos e proporções coerentes. O texto entra por um painel lateral, e trocar o layout depois não desmonta o conteúdo — duas conveniências que as formas soltas não oferecem.</p>
        <p>O que eles não são: cronogramas em escala. As caixas têm todas o mesmo tamanho, independentemente da duração, então uma fase de duas semanas e outra de cinco meses aparecem idênticas. Use SmartArt para um "mapa de fases" de alto nível — abertura de apresentação, resumo executivo — e nunca para comunicar prazos, porque a plateia lê comprimento como tempo mesmo quando ele não significa nada.</p>
        <p>Se precisar do meio-termo, converta o SmartArt em formas (Formato → Converter → Converter em Formas) e ajuste as larguras à duração real. Você perde a edição pelo painel de texto, mas ganha um desenho em escala com o estilo já pronto.</p>`],
    ['Acrescentar avanço, marcos e a linha de hoje', `<p>Três acréscimos separam um cronograma de slide genérico de um que responde perguntas.</p>
        <p><strong>Avanço.</strong> No caminho do gráfico, acrescente uma quarta coluna na planilha vinculada dividindo a duração em "concluído" e "restante": três séries empilhadas, com o concluído em tom escuro. No caminho das formas, sobreponha um retângulo mais escuro sobre parte da barra e agrupe os dois — assim eles se movem juntos quando o slide for reorganizado.</p>
        <p><strong>Marcos.</strong> Um losango (Inserir → Formas → Losango) posicionado na data, com o rótulo acima ou abaixo da linha das barras para não competir com elas. No caminho do gráfico, marcos exigem uma série de dispersão e um gráfico de combinação, o que costuma ser mais trabalho do que desenhar três losangos.</p>
        <p><strong>Linha de hoje.</strong> Uma linha vertical fina, numa cor de destaque, atravessando todas as barras, com um rótulo pequeno no topo. É o elemento que mais economiza explicação numa reunião de status, e o mais fácil de esquecer — vale deixá-lo no modelo do slide.</p>
        <p>Todos os três precisam ser reposicionados à mão a cada revisão do plano. É a conta que se paga por manter o cronograma dentro do PowerPoint.</p>`],
    ['Quando usar cada um', `<p>Formas quando o cronograma está fechado e o slide serve para apresentar. Gráfico quando os números ainda se movem e alguém vai pedir uma atualização antes da reunião. SmartArt apenas para o desenho conceitual das fases.</p>
        <p>Para um slide de diretoria com cinco fases e três marcos, formas quase sempre são mais rápidas. Para um relatório mensal que se repete com dados novos, o gráfico paga o investimento inicial já na segunda edição.</p>
        <p>E vale dizer o que nenhum dos três resolve: precedências. Nenhum caminho do PowerPoint recalcula datas quando uma tarefa escorrega, e nenhum mostra <a href="/pt/blog/critical-path-method.html">caminho crítico</a>. O slide comunica um plano; ele não gerencia um.</p>`],
    ['Projetar para a tela grande', `<p>Um slide comporta de seis a dez barras, não quarenta. O que precisa ser lido a dez metros não suporta detalhe de cronograma. Algumas regras que funcionam:</p>
        <ul>
          <li><strong>Reduza ao nível de fase.</strong> Se o cronograma tem quarenta tarefas, o slide mostra as sete fases e o detalhe vai para o anexo.</li>
          <li><strong>Uma cor por fase.</strong> A plateia lê a estrutura antes do conteúdo; cores por tarefa destroem exatamente isso.</li>
          <li><strong>No máximo três marcos em destaque.</strong> Losango de cor contrastante e rótulo com a data. Mais que três e nenhum se destaca.</li>
          <li><strong>Uma linha vertical de hoje.</strong> Resolve sozinha a pergunta "onde estamos" antes de qualquer explicação.</li>
          <li><strong>Rótulos curtos.</strong> Duas ou três palavras na barra; o resto vai para as anotações do slide.</li>
          <li><strong>Fonte mínima de 14 pt.</strong> Se não couber, o problema é o número de linhas, não o tamanho da fonte.</li>
        </ul>`],
    /* Links to the Portuguese templates HUB, not to a specific detail
       page. The pt template pages do not exist yet — check-links caught
       exactly this shape in the French guide. The hub is correct at any
       coverage level, so it needs no revisiting later. */
    ['O caminho prático', `<p>O mais rápido é manter o cronograma onde ele vive e gerar o slide a partir dele, em vez de redesenhar retângulos toda vez que uma data muda.</p>
        <ol>
          <li>Monte o plano no <a href="/pt/app.html">gantts.app</a> — no navegador, sem cadastro e sem instalação.</li>
          <li>Acrescente tarefas, agrupe em fases e ligue as precedências. O cronograma se reprograma sozinho e o caminho crítico fica destacado.</li>
          <li>Use <strong>Exportar → PowerPoint</strong> e você recebe um arquivo .pptx com o cronograma no slide, pronto para apresentar.</li>
        </ol>
        <p>Quando o plano mudar, edite e exporte de novo: o slide se refaz em segundos, sem alinhar nada à mão. O mesmo menu gera PDF, PNG e XLSX, o que costuma cobrir os três pedidos que aparecem depois de qualquer reunião.</p>
        <p>Se preferir começar de um slide pronto, nossos <a href="/pt/templates.html">modelos</a> incluem uma linha do tempo já formatada, com cores de fase e marcadores de marco, onde só falta inserir suas tarefas.</p>`],
    ['O erro mais comum', `<p>Espremer o cronograma inteiro em um slide. Apresentação e planejamento têm níveis de detalhe diferentes — o slide conta a história, o cronograma carrega o trabalho.</p>
        <p>O segundo erro mais comum é colar uma captura de tela do cronograma. Ela nasce ilegível no projetor, não acompanha o tema do deck e, na próxima atualização, alguém cola uma segunda captura ao lado da primeira. Exportar um slide de verdade custa o mesmo e resolve os três problemas.</p>`],
  ],
  callout: 'Um slide não é um cronograma. Mostre as fases e os três marcos que importam. Comprimir quarenta linhas em um slide consegue apenas uma coisa: que ninguém olhe.',
  faq: [
    ['Como fazer um gráfico de Gantt no PowerPoint?', 'Use Inserir → Gráfico → Barras → Barras Empilhadas, preencha a planilha vinculada com tarefa, deslocamento e duração, e formate a série de deslocamento como Sem preenchimento. Depois marque Categorias em ordem inversa no eixo vertical. A alternativa é desenhar retângulos arredondados sobre uma linha do tempo.'],
    ['Qual caminho é melhor?', 'Formas para cronogramas fechados e liberdade visual total; gráfico para dados que ainda mudam, porque Editar Dados atualiza as barras sozinho. Se o cronograma for revisado semanalmente, nenhum dos dois: exporte o slide da ferramenta onde o plano vive.'],
    ['O SmartArt serve para cronograma?', 'Serve para um mapa de fases, não para prazos. As caixas do SmartArt têm todas o mesmo tamanho, então duas semanas e cinco meses aparecem idênticos — e a plateia lê comprimento como tempo mesmo quando ele não significa nada.'],
    ['Como mostrar marcos num slide?', 'Use losangos numa cor contrastante, posicionados na data, com um rótulo curto. Limite-se a três por slide: acima disso nenhum se destaca. No gantts.app os marcos já são nativos e saem na exportação.'],
    ['Dá para exportar um cronograma direto para o PowerPoint?', 'Dá. O gantts.app gera um arquivo .pptx em um clique, com o cronograma já no slide, e também exporta PDF, PNG e XLSX do mesmo plano. Quando as datas mudam, basta exportar de novo.'],
    ['Quantas tarefas cabem em um slide?', 'De seis a dez barras. Acima disso não se lê da plateia — reduza ao nível de fase e mande o detalhe para um anexo ou para um segundo slide por fase.'],
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
    ['Os três tipos de gratuidade', `<p><strong>Realmente grátis</strong>: funcionalidade completa, sem limite de usuários, sem prazo de validade. É raro, e quase sempre aparece em ferramentas sem custo de servidor — as que calculam no navegador ou no seu computador, em vez de na nuvem. Sem servidor para pagar, não há nada a monetizar depois.</p>
        <p><strong>Freemium</strong>: grátis até um limite. Normalmente três a cinco usuários, um ou dois projetos, ou um teto de tarefas. Com frequência o que fica no plano pago não é o volume, e sim o recurso decisivo: exportação, caminho crítico, linha de base. Ao ultrapassar o limite, o plano vira pago — e a essa altura os dados já estão lá dentro, o que é justamente o ponto do modelo.</p>
        <p><strong>Período de teste</strong>: tudo liberado por 14 ou 30 dias, depois cobrança. Isso não é software gratuito, é demonstração. Serve muito bem para avaliar antes de comprar e não serve para nada como solução permanente.</p>
        <p>Os três modelos são legítimos. O problema começa quando um teste de 14 dias ou um plano com teto apertado é anunciado apenas como "grátis" — e é por isso que vale identificar em qual dos três a ferramenta se encaixa antes de digitar a primeira tarefa.</p>`],
    ['Ferramentas que rodam no navegador', `<p><strong>gantts.app</strong> — declarando o óbvio: a ferramenta é nossa. É um editor de Gantt que roda inteiramente no navegador, <strong>sem cadastro e sem login</strong>, sem teto de tarefas ou de projetos, com precedências, marcos, caminho crítico automático e exportação para <strong>PDF, PNG, XLSX e PPTX</strong>. O cronograma fica salvo no seu próprio aparelho. A contrapartida é o escopo: é uma ferramenta de cronograma e exportação, não uma suíte de gestão com apontamento de horas, chat e faturamento de recursos. Serve bem a quem quer um gráfico de Gantt correto e rápido, sem conta.</p>
        <p><strong>Ferramentas web menores</strong> — existe um punhado de sites de propósito único que permitem esboçar um cronograma no navegador e baixar uma imagem ou PDF. Algumas dispensam cadastro. A profundidade varia muito: é comum faltar caminho crítico confiável, tipos de precedência além do término-início ou exportação para planilha. São ótimas para um gráfico descartável; confira os limites atuais antes de apoiar um projeto real em uma delas.</p>`],
    ['Aplicativos instalados e código aberto', `<p><strong>GanttProject</strong> — aplicativo de desktop maduro, livre e de código aberto, para Windows, macOS e Linux. Trata tarefas, precedências, caminho crítico, alocação de recursos e exporta em PDF, PNG e CSV. Como é um programa instalado, funciona sem internet e não exige conta nenhuma. Em troca, a interface tem cara de outra década e não há sincronização em nuvem embutida: o arquivo é seu para versionar e enviar.</p>
        <p><strong>Planilhas</strong> — Excel e Google Planilhas fazem um Gantt com barras empilhadas ou, no caso do Planilhas, com a visualização Linha do tempo. São grátis se você já paga pelo pacote, e o custo real é a manutenção: sem precedências, sem caminho crítico, cada atraso repassado à mão. Veja o <a href="/pt/blog/gantt-chart-in-excel.html">guia do Excel</a> e o do <a href="/pt/blog/gantt-chart-in-google-sheets.html">Google Planilhas</a>. Boa opção para planos pequenos e estáveis cujos dados já vivem numa planilha.</p>`],
    ['Plataformas freemium, de teste e pagas', `<p><strong>TeamGantt</strong> — ferramenta polida, voltada à colaboração. O plano gratuito é utilizável, mas apertado: costuma ficar em torno de um projeto e algumas dezenas de tarefas para poucos usuários, com caminho crítico e exportações mais ricas reservados aos planos pagos. Exige conta.</p>
        <p><strong>GanttPRO</strong> — plataforma comercial bem desenhada, com programação, carga de trabalho e colaboração. Oferece <strong>período de teste</strong>, não plano gratuito: passado o prazo, é assinatura. Exige conta. Faz sentido para quem já decidiu comprar e quer testar antes.</p>
        <p><strong>Instagantt</strong> — conhecida pela integração com o Asana e por linhas do tempo limpas. É <strong>freemium</strong>: existe camada gratuita, mas exportação avançada, caminho crítico e mais projetos ficam nos planos pagos. Exige conta.</p>
        <p><strong>Canva</strong> — produz um <em>gráfico</em> de Gantt bonito a partir de modelos, exportável em PNG ou PDF na camada gratuita, com conta. Não é um motor de cronograma: as barras são formas que você posiciona, sem precedências, sem reprogramação e sem caminho crítico. Ideal quando o objetivo é uma imagem para um slide e a exatidão do cronograma não é o ponto.</p>
        <p><strong>Microsoft Project</strong> — a referência corporativa para programação séria, com lógica de precedências profunda, nivelamento de recursos, linhas de base e caminho crítico. <strong>Não tem plano gratuito</strong>: é assinatura ou licença, com conta Microsoft. Faz sentido em organizações grandes, com programas complexos e orçamento compatível.</p>
        <p>Os números de plano gratuito mudam com frequência. Trate qualquer limite citado como indicativo e confirme na página de preços do fornecedor antes de decidir.</p>`],
    ['O que verificar na escolha', `<p>Quatro perguntas resolvem quase tudo.</p>
        <p><em>A ferramenta calcula precedências?</em> Sem isso, é um programa de desenho: quando uma tarefa atrasa, nada se move sozinho e o cronograma envelhece em silêncio. É o recurso que mais frequentemente está do lado pago da linha.</p>
        <p><em>Mostra o <a href="/pt/blog/critical-path-method.html">caminho crítico</a>?</em> Sem ele você não sabe quais atrasos importam. Vários produtos comerciais guardam essa marcação para os planos superiores, então confira antes de apoiar o acompanhamento nela.</p>
        <p><em>Os dados saem?</em> Em CSV, XLSX, PDF ou num formato de projeto. Exportação bloqueada no plano gratuito é o aperto mais comum, e é o que decide se você pode mudar de ferramenta depois.</p>
        <p><em>Onde os dados ficam armazenados?</em> Cronogramas costumam trazer nomes de pessoas, fornecedores e valores. Saber se isso vai para um servidor de terceiros, e sob qual contrato, não é detalhe jurídico — é o tipo de pergunta que aparece tarde e cara.</p>`],
    ['A questão do cadastro', `<p>A maioria das ferramentas gratuitas pede conta antes de mostrar a primeira barra. Quase nunca é necessidade técnica: é o preço. Um endereço de e-mail vale mais para o fornecedor do que a barra que você desenhou.</p>
        <p>Ferramentas que rodam inteiramente no navegador e salvam localmente não precisam de conta nem de servidor, porque nada é enviado. O <a href="/pt/app.html">gantts.app</a> funciona assim: sem cadastro, sem transmissão, o cronograma fica no seu aparelho. Isso também responde à questão de privacidade — o que não sai do aparelho não precisa de contrato.</p>
        <p>Na prática, a lista de opções sem cadastro é curta: ferramentas que calculam no cliente, aplicativos instalados como o GanttProject, e alguns sites pequenos. TeamGantt, GanttPRO, Instagantt e Canva exigem conta antes de qualquer coisa — o que é uma escolha legítima delas, e apenas convém saber de que lado da linha cada uma está.</p>`],
    ['Como escolher em uma frase', `<ul>
          <li><strong>Precisa de um Gantt rápido, grátis, com exportação?</strong> Uma ferramenta de navegador sem cadastro resolve, e o <a href="/pt/app.html">gantts.app</a> já inclui caminho crítico e saída em Excel e PowerPoint.</li>
          <li><strong>Prefere software instalado e de código aberto?</strong> GanttProject.</li>
          <li><strong>Vai adotar uma plataforma paga de equipe e cabe nos limites gratuitos?</strong> As camadas gratuitas de TeamGantt ou Instagantt servem de degrau.</li>
          <li><strong>Programa corporativo com nivelamento de recursos?</strong> Microsoft Project ou GanttPRO, ambos pagos.</li>
          <li><strong>Só quer uma imagem bonita para um slide?</strong> Canva, ou um PNG exportado de qualquer editor de Gantt.</li>
        </ul>
        <p>Decida antes de começar se você precisa de precedências, caminho crítico e exportação real. São exatamente os três pontos em que os planos "grátis" costumam decepcionar.</p>`],
    ['Quando o pago compensa', `<p>Quando várias pessoas trabalham no mesmo cronograma ao mesmo tempo e é preciso controlar quem alterou o quê. Quando os recursos são planejados entre vários projetos e alguém precisa enxergar a carga agregada. Quando existe obrigação de prestação de contas a um contratante, com <a href="/pt/blog/gantt-baseline-variance.html">linha de base</a> auditável e histórico de replanejamentos.</p>
        <p>Fora desses casos, o gasto raramente se paga. Para um cronograma isolado de trinta tarefas, mantido por uma pessoa, software pago é quase sempre exagero — e o tempo que se perde configurando a plataforma costuma ser maior do que o cronograma inteiro leva para ser montado.</p>
        <p>Um teste honesto antes de assinar: liste os três recursos que motivaram a compra e verifique se eles estão no plano cotado, e não dois níveis acima. Nivelamento de recursos, portfólio multiprojeto e relatórios personalizados costumam morar no degrau mais caro, e é comum descobrir isso depois de migrar o cronograma inteiro.</p>
        <p>Se você ainda está decidindo o que precisa, comece pelo básico — <a href="/pt/blog/what-is-a-gantt-chart.html">o que é um gráfico de Gantt</a> e <a href="/pt/blog/how-to-make-a-gantt-chart.html">como montar um</a> — e monte um cronograma de verdade numa ferramenta gratuita antes de comparar preços. A lista de exigências fica muito mais curta e muito mais concreta depois do primeiro plano real.</p>`],
  ],
  callout: 'Verifique a exportação antes de começar. Uma ferramenta da qual os dados não saem em formato aberto é cara independentemente do preço: a troca passa a custar refazer o cronograma inteiro.',
  faq: [
    ['Qual software de Gantt é realmente gratuito?', 'Ferramentas sem custo de servidor — as que calculam no navegador e salvam localmente, como o gantts.app — podem ser gratuitas de forma permanente, e o GanttProject é livre e de código aberto no desktop. Serviços hospedados em nuvem quase sempre são freemium, porque há um servidor a pagar todo mês.'],
    ['Qual a diferença entre grátis, freemium e período de teste?', 'Grátis é sem custo e sem prazo. Freemium dá um plano permanente, mas com teto de projetos, tarefas ou usuários, e costuma cobrar pelo recurso decisivo — exportação ou caminho crítico. Período de teste libera tudo por 14 ou 30 dias e depois cobra; não é software gratuito, é demonstração.'],
    ['Existe ferramenta de Gantt gratuita sem cadastro?', 'Existe. O gantts.app abre e funciona sem conta, com o cronograma salvo no próprio navegador, e o GanttProject dispensa conta porque é instalado. A maioria das plataformas web — TeamGantt, GanttPRO, Instagantt, Canva — exige cadastro antes de mostrar qualquer coisa.'],
    ['Quais ferramentas gratuitas incluem caminho crítico?', 'O gantts.app calcula o caminho crítico de graça e o GanttProject também o traz no desktop. Em várias plataformas comerciais ele fica reservado a planos pagos, então vale confirmar antes de apoiar o acompanhamento do projeto nesse recurso.'],
    ['O que avaliar antes de escolher?', 'Precedências, caminho crítico, formatos de exportação e onde os dados ficam armazenados. O resto é conforto. Esses quatro pontos são justamente os que os planos gratuitos costumam limitar.'],
    ['Serve para empresa?', 'Para cronogramas isolados, sim, inclusive em projetos grandes. Para edição simultânea com controle de quem alterou o quê, planejamento de recursos entre vários projetos e prestação de contas com linha de base auditável, normalmente é o momento de uma plataforma paga.'],
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

's-curve-project-management': {
  h1: 'Curva S e valor agregado: descobrir se o projeto está mesmo atrasado',
  metaTitle: 'Curva S e valor agregado no projeto',
  metaDesc: 'O que a curva S mostra, como ler o previsto contra o realizado e como o valor agregado transforma impressão em número. Gerador grátis, do seu cronograma.',
  date: '2026-07-19',
  lead: 'Um percentual concluído, sozinho, quase não informa nada. Sessenta por cento é ótimo na segunda semana e catastrófico na nona. A <strong>curva S</strong> resolve isso ao acumular o trabalho previsto ao longo do tempo: "quanto já andamos" vira "quanto <em>deveríamos</em> ter andado a esta altura" — e a distância entre as duas linhas é a resposta.',
  figIntro: 'Previsto contra realizado, e o que significa a distância entre eles:',
  sections: [
    ['Por que a curva tem forma de S', `<p>Projetos não consomem trabalho a ritmo constante. As primeiras semanas andam devagar — mobilização, definição de escopo, espera por aprovações —, o miolo acelera quando tudo corre em paralelo e a cauda desacelera de novo, com os últimos itens presos a aceites e pendências.</p>
        <p>Acumule o trabalho ao longo do tempo e sai um S achatado: suave, íngreme, suave. Ninguém desenhou essa meta. Ela é consequência de como o trabalho realmente chega.</p>
        <p>E é exatamente isso que a torna útil como régua. Uma linha reta suporia que o projeto está vinte por cento pronto em vinte por cento do prazo, e todo projeto da história pareceria "atrasado" no primeiro mês.</p>`],

    ['Ler o previsto contra o realizado', `<p>São duas curvas. A curva <strong>prevista</strong> vem da linha de base: distribua o peso de cada tarefa pelas datas planejadas e acumule. A curva <strong>realizada</strong> vem do avanço informado.</p>
        <p>Leia na vertical, na data de hoje:</p>
        <ul>
          <li><strong>Realizado abaixo do previsto</strong> — atrasado. A distância vertical é o tanto de trabalho que falta.</li>
          <li><strong>Realizado acima do previsto</strong> — adiantado, ou o apontamento de avanço está otimista. Os dois acontecem.</li>
          <li><strong>Curvas se afastando</strong> — o problema está piorando, não estabilizado. É a forma que mais importa e a que um percentual isolado nunca revela.</li>
        </ul>
        <p>Leia na <em>horizontal</em> e você obtém algo mais intuitivo para uma reunião de status: corra para a esquerda a partir do ponto realizado de hoje até encontrar a curva prevista, e você tem a data em que o plano esperava este avanço. A distância é o atraso em semanas — a unidade em que as pessoas realmente discutem.</p>`],

    ['Valor agregado, sem o jargão', `<p>O gerenciamento do valor agregado põe um número nessa distância. São três grandezas, e as siglas assustam mais do que as ideias:</p>
        <ul>
          <li><strong>VP</strong> (valor planejado, ou PV) — o trabalho que você disse que teria concluído até agora, valorado pelo orçamento.</li>
          <li><strong>VA</strong> (valor agregado, ou EV) — o trabalho que você <em>de fato</em> concluiu, valorado pelo mesmo orçamento. Uma tarefa de R$ 10.000 com 40% de avanço agregou R$ 4.000. Quanto ela custou é irrelevante aqui, de propósito.</li>
          <li><strong>CR</strong> (custo real, ou AC) — o que você realmente gastou.</li>
        </ul>
        <p>A partir desses três:</p>
        <ul>
          <li><strong>VPR = VA − VP</strong> — variação de prazo. Negativo significa atrasado.</li>
          <li><strong>VC = VA − CR</strong> — variação de custo. Negativo significa acima do orçamento.</li>
          <li><strong>IDP = VA ÷ VP</strong> — abaixo de 1,0 significa atrasado. Um IDP de 0,85 quer dizer que você entrega 85 centavos de avanço para cada real planejado.</li>
          <li><strong>IDC = VA ÷ CR</strong> — abaixo de 1,0 significa acima do orçamento.</li>
        </ul>
        <p>A separação é o ponto central. Um projeto pode estar perfeitamente no orçamento e muito atrasado, ou no prazo e queimando dinheiro, e um único "percentual concluído" esconde os dois casos.</p>`],

    ['Por que a nossa ferramenta às vezes se recusa a mostrar o IDC', `<p>Vale dizer isso com todas as letras, porque a maioria dos calculadores gratuitos de valor agregado faz o contrário.</p>
        <p>O custo real é o único dado que não se deduz de um cronograma. Ele precisa vir da contabilidade. O atalho tentador é supor que uma tarefa com 40% de avanço consumiu 40% do orçamento — e, se você faz isso, o CR passa a ser igual ao VA por construção, de modo que <strong>o IDC dá exatamente 1,00 para todo projeto que já existiu</strong>. O número parece confiável, não reage a nada e diria a alguém com o orçamento estourado que está tudo sob controle.</p>
        <p>Por isso o gantts.app deixa as métricas de custo em branco até você informar um valor real em "Gasto" nas tarefas. As métricas de prazo — VPR e IDP — continuam funcionando, porque dependem apenas de datas e avanço. Um número ausente é honesto. Um número errado e confiante não é.</p>
        <p>Pelo mesmo motivo, a curva agregada antes de hoje é reconstruída, e não registrada: a ferramenta guarda o seu avanço como ele está agora, não o histórico de cada apontamento passado. Ela é exata em hoje, onde os números são lidos, e aproximada atrás disso — e diz isso no próprio painel, não em uma nota de rodapé.</p>`],

    ['Você não precisa de orçamento para ter uma curva', `<p>A maioria dos planos não tem nenhum dado de custo, e uma curva S que exige custo é uma curva S que ninguém desenha.</p>
        <p>Se nenhuma tarefa tem custo, o gantts.app pondera cada uma pela duração em dias úteis. A forma é a mesma e o eixo passa a ler em porcentagem em vez de moeda — uma curva S de avanço puro. Acrescente custos depois e o mesmo painel vira uma curva de valor, sem que você mude mais nada.</p>
        <p>Uma coisa, porém, faz diferença: <strong>defina uma linha de base</strong>. Sem ela, "previsto" só pode significar as suas datas atuais, e as suas datas atuais já incorporam todo atraso que aconteceu. A variação de prazo vai marcar zero para sempre, o que é uma resposta muito tranquilizadora e completamente inútil. Linha de base ▸ Definir linha de base, uma vez, quando o plano for aprovado.</p>`],

    ['Como montar uma aqui', `<ol>
          <li>Monte ou importe o seu cronograma e acerte as datas em linhas gerais.</li>
          <li><strong>Linha de base ▸ Definir linha de base</strong> quando o plano estiver aprovado. Isso congela o significado de "previsto".</li>
          <li>Se quiser, dê um <strong>Orçamento</strong> às tarefas no painel, para a curva ler em dinheiro em vez de dias.</li>
          <li>Atualize o <strong>% concluído</strong> conforme o trabalho anda — é disso que a curva agregada é feita.</li>
          <li>Se quiser, informe o <strong>Gasto</strong> por tarefa para liberar o IDC, a variação de custo e a previsão de custo final.</li>
          <li>Clique em <strong>📈 Curva S</strong>.</li>
        </ol>
        <p>Tudo roda no seu navegador. Sem cadastro, sem envio de arquivos e sem planilha-modelo para manter na mão.</p>`],
  ],
  faq: [
    ['O que é a curva S em gerenciamento de projetos?', 'Um gráfico do trabalho previsto acumulado ao longo do tempo. Tem forma de S porque projetos começam devagar, aceleram no meio e desaceleram no fim. Comparada ao avanço real, a distância vertical entre as curvas é o quanto se está adiantado ou atrasado.'],
    ['Qual a diferença entre curva S e valor agregado?', 'A curva S é a imagem; o valor agregado é a conta por trás dela. O VA põe números na distância — VPR, IDP, VC e IDC — enquanto a curva mostra a forma e a direção.'],
    ['O que significa um IDP de 0,9?', 'Você agregou 90% do valor que o plano previa para esta altura, ou seja, está cerca de 10% atrasado. Abaixo de 1,0 é atraso, acima de 1,0 é adiantamento.'],
    ['Preciso de dados de custo para usar a curva S?', 'Não. Sem custos, as tarefas são ponderadas pela duração em dias úteis e você obtém uma curva de avanço — a mesma forma, lida em porcentagem. Os custos a transformam em curva de valor e liberam as métricas financeiras.'],
    ['Por que o IDC não aparece?', 'Porque nenhum custo real foi informado. O IDC exige gasto de verdade; deduzi-lo do percentual concluído o deixaria em exatamente 1,00 para qualquer projeto. Informe o Gasto nas tarefas e ele aparece.'],
    ['Dá para fazer a curva S no Excel?', 'Dá, e é o que a maioria faz — significa manter uma coluna acumulada e um gráfico na mão, e refazer tudo sempre que as datas mudam. Gerar a curva a partir do cronograma elimina essa etapa.'],
  ],
  related: [['gantt-baseline-variance', 'Linha de base e desvios'], ['critical-path-method', 'O caminho crítico'], ['3-week-lookahead-schedule', 'A programação de 3 semanas']],
},

'3-week-lookahead-schedule': {
  h1: 'A programação de 3 semanas — sem redigitar tudo toda segunda-feira',
  metaTitle: 'Programação de 3 semanas (lookahead)',
  metaDesc: 'O que é a programação de 3 semanas, por que as equipes de obra usam uma e como gerá-la direto do cronograma mestre em vez de redigitar numa planilha.',
  date: '2026-07-19',
  lead: 'Ninguém constrói a partir de um cronograma de dezoito meses. Constrói-se a partir das próximas três semanas dele. A <strong>programação de curto prazo</strong>, ou lookahead, é essa janela — a fatia do cronograma mestre que já está perto o bastante para ser real — e, na maioria das obras, ela ainda é produzida copiando linhas para uma planilha na mão, toda segunda-feira.',
  figIntro: 'O mesmo cronograma, filtrado para o trabalho que toca a janela:',
  sections: [
    ['O que a programação de curto prazo é de fato', `<p>É um extrato curto e rolante do cronograma mestre — normalmente três semanas, às vezes duas, quatro ou seis — mostrando apenas o trabalho que toca aquela janela. Ela avança uma semana por vez, de modo que a mesma tarefa aparece em vários lookaheads consecutivos, cada vez mais próxima e mais bem compreendida.</p>
        <p>Ela existe porque o cronograma mestre e o plano de trabalho são documentos diferentes com funções diferentes. O cronograma responde "vamos terminar no prazo"; o lookahead responde "o que acontece na terça-feira, e alguém já pediu o aço". Tentar conduzir uma reunião de obra com um cronograma de duzentas linhas é a razão de as pessoas imprimirem em A0 e depois ignorarem.</p>
        <p>Na lógica do Last Planner, o lookahead é onde as <em>restrições</em> aparecem: o trabalho está perto o suficiente para se perguntar se a licença, o material, a equipe e o serviço antecedente vão mesmo estar lá.</p>`],

    ['Sobreposição, não contenção — o detalhe que quase todo mundo erra', `<p>Esta é a regra que deixa um lookahead correto, e a que as planilhas feitas à mão mais quebram.</p>
        <p>Uma tarefa pertence à janela se ela <strong>se sobrepõe</strong> à janela — não se ela cabe dentro dela. O pacote de fundações de oito meses que começou em março e vai até novembro está acontecendo agora, e é justamente o trabalho que a equipe de campo mais precisa ter à frente. Filtre por tarefas que começam <em>e</em> terminam dentro das três semanas e você elimina todas as atividades longas da obra, deixando um lookahead arrumadinho que descreve um projeto em que ninguém está trabalhando.</p>
        <p>O teste são duas comparações, não quatro:</p>
        <p><code>tarefa.início ≤ janela.fim &nbsp;E&nbsp; tarefa.fim ≥ janela.início</code></p>
        <p>É essa a regra inteira, e é exatamente ela que o gantts.app aplica.</p>`],

    ['Por que a janela começa na segunda-feira', `<p>O lookahead é um ritual semanal preso a uma reunião semanal. Uma janela de quinta a quinta cortaria a semana de trabalho ao meio e seria inútil para quem a lê.</p>
        <p>Por isso a janela sempre volta para o início da semana. Abra a ferramenta numa quarta-feira e você recebe a janela que começou na segunda, não um bloco de três semanas iniciando no meio da semana. As setas avançam de semana em semana quando você precisa olhar mais longe, e "Esta semana" traz tudo de volta.</p>`],

    ['Gerar em vez de redigitar', `<p>Não faltam modelos de programação de três semanas — a Smartsheet publica um, meia dúzia de outros também, e existe até um formato padrão usado em obras da Marinha americana. Todos eles são uma grade em branco que você preenche na mão.</p>
        <p>É esse o problema real. O cronograma já contém a resposta; o trabalho semanal é copiá-la para fora, e é na cópia que nascem os erros e a desatualização. Esqueça uma tarefa, ou atualize o mestre e não o lookahead, e os dois documentos passam a discordar em silêncio.</p>
        <p>No gantts.app o lookahead é uma <em>visão</em> dos mesmos dados:</p>
        <ol>
          <li>Ajuste <strong>Visão</strong> para <strong>Lookahead</strong>.</li>
          <li>Escolha a janela — 1, 2, 3, 4, 6 ou 8 semanas.</li>
          <li>Avance com as setas, ou clique em "Esta semana" para voltar a hoje.</li>
          <li>Exporte em PDF ou PNG para a parede, ou em Excel para a reunião.</li>
        </ol>
        <p>O gráfico se ajusta à janela, de modo que três semanas ficam legíveis em vez de comprimidas num naco de um eixo de dezoito meses. Uma faixa no topo informa qual janela está sendo exibida e quantas tarefas ficaram ocultas, porque um gráfico filtrado que não avisa que está filtrado é lido como um plano com tarefas faltando.</p>
        <p>Mude uma data no cronograma mestre e o lookahead já está correto. Não há nada para copiar de novo.</p>`],

    ['Transformar o filtro em documento útil', `<ul>
          <li><strong>Ponha um nome em cada linha.</strong> Um lookahead sem responsável por tarefa é uma lista de esperanças. Ative a coluna Responsável.</li>
          <li><strong>Detalhe o trabalho próximo mais do que o distante.</strong> Uma tarefa que diz "Acabamento do 1º pavimento — 6 semanas" serve no cronograma mestre e não serve para nada num lookahead. Divida-a conforme ela se aproxima.</li>
          <li><strong>Revise restrições, não apenas datas.</strong> O valor de olhar três semanas à frente é que ainda há tempo de resolver o que está faltando.</li>
          <li><strong>Mantenha curto.</strong> Se o lookahead chega a sessenta linhas, ou a janela está longa demais, ou o plano está detalhado demais para esta reunião.</li>
        </ul>`],
  ],
  faq: [
    ['O que é a programação de 3 semanas?', 'Um extrato rolante do cronograma mestre mostrando apenas o trabalho que toca as próximas três semanas. É atualizado semanalmente e serve para coordenar o dia a dia e identificar restrições enquanto ainda dá tempo de resolvê-las.'],
    ['Por que três semanas?', 'É longo o bastante para que restrições — materiais, licenças, equipes — ainda possam ser resolvidas, e curto o bastante para que as datas sejam confiáveis. Janelas de duas, quatro e seis semanas também são comuns; a duração certa depende dos seus prazos de suprimento.'],
    ['Uma tarefa longa iniciada meses atrás deve aparecer no lookahead?', 'Sim. Tudo que se sobrepõe à janela pertence a ela. Filtrar apenas o que cabe inteiro dentro das três semanas elimina justamente o trabalho longo que está acontecendo agora.'],
    ['A programação de curto prazo é o mesmo que o cronograma mestre?', 'Não. O cronograma mestre responde se o projeto termina no prazo. O lookahead responde o que acontece esta semana e quem faz. Vêm dos mesmos dados, mas servem a reuniões diferentes.'],
    ['Dá para fazer um lookahead no Excel?', 'Dá, e é o que a maioria das equipes faz — redigitando linhas do cronograma toda semana. Gerá-lo como uma visão do cronograma elimina a redigitação e a divergência que vem junto.'],
    ['Como imprimo a programação de curto prazo?', 'Mude para a visão Lookahead e exporte em PDF ou PNG. A exportação reflete o que está na tela, então você obtém a janela e não o cronograma inteiro.'],
  ],
  related: [['critical-path-method', 'O caminho crítico'], ['s-curve-project-management', 'Curva S e valor agregado'], ['gantt-chart-dependencies', 'Precedências: FS, SS, FF, SF']],
},

'mermaid-gantt-chart': {
  h1: 'Gráfico de Gantt em Mermaid: sintaxe, armadilhas e ida e volta para um editor de verdade',
  metaTitle: 'Gantt em Mermaid: sintaxe e editor',
  metaDesc: 'A sintaxe gantt do Mermaid explicada — seções, tags, precedências, excludes — mais as armadilhas de contagem e como editar visualmente e colar de volta.',
  date: '2026-07-19',
  lead: 'Blocos gantt do Mermaid são renderizados nativamente no GitHub, no GitLab, no Notion e no Obsidian, o que os torna a forma mais fácil de colocar um cronograma onde o trabalho já acontece. Também são penosos de <em>editar</em>: mude uma data e você recalcula na mão toda a corrente de <code>after</code> abaixo dela. Aqui estão a sintaxe, as armadilhas e o passo que falta — editar visualmente e recuperar o texto.',
  figIntro: 'O mesmo cronograma, como texto e como barras:',
  sections: [
    ['A sintaxe de uma só passada', `<p>Um bloco gantt abre com <code>gantt</code> e algumas linhas de cabeçalho, depois vêm os títulos de <code>section</code> com as linhas de tarefa embaixo.</p>
        <p>Uma linha de tarefa é um nome, dois-pontos e então campos separados por vírgula:</p>
        <p><code>Nome da tarefa :tag, id, início, duração</code></p>
        <ul>
          <li><strong>Tags</strong> — qualquer uma entre <code>done</code>, <code>active</code>, <code>crit</code>, <code>milestone</code>. Opcionais.</li>
          <li><strong>id</strong> — uma palavra simples, necessária apenas se algo mais se referir a esta tarefa.</li>
          <li><strong>início</strong> — uma data, ou <code>after algumId</code>, ou omitido para continuar a partir da tarefa anterior.</li>
          <li><strong>duração</strong> — <code>5d</code>, <code>2w</code>, ou uma segunda data.</li>
        </ul>
        <p>Linhas de cabeçalho que vale conhecer: <code>dateFormat</code> (como as suas datas são escritas), <code>excludes weekends</code> (pular sábados e domingos), <code>title</code> e <code>axisFormat</code> (como o eixo é rotulado).</p>`],

    ['Quatro coisas que vão te pegar', `<p><strong>1. As durações incluem o dia de início.</strong> <code>5d</code> a partir de segunda, dia 5, vai até sexta, dia 9, e não até o dia 10. Um erro de um dia aqui desloca todas as tarefas do arquivo e mesmo assim ele renderiza perfeitamente.</p>
        <p><strong>2. <code>after</code> junto com <code>excludes weekends</code> é onde moram os bugs de verdade.</strong> Se uma antecessora termina numa sexta, a sucessora começa na <em>segunda</em> — não no sábado. Qualquer ferramenta que resolva o <code>after</code> somando um dia de calendário vai colocar tarefas em fins de semana num arquivo que os proíbe explicitamente. (A nossa fazia isso, por pouco tempo. O teste que pegou o problema agora garante que nenhuma data derivada caia num dia excluído.)</p>
        <p><strong>3. Não existe escape.</strong> Os dois-pontos iniciam a lista de campos e a vírgula separa campos, então uma tarefa chamada <code>Fase 2: projeto, revisão</code> vira outra coisa completamente diferente. Mantenha dois-pontos e vírgulas fora dos nomes de tarefa.</p>
        <p><strong>4. Uma duração ilegível vira zero em silêncio.</strong> Escreva <code>3dd</code> e você recebe uma barra de comprimento zero em vez de um erro.</p>`],

    ['O que o Mermaid não consegue expressar', `<p>É um formato de diagrama, não um motor de cronograma, e as lacunas importam se você vai fazer ida e volta:</p>
        <ul>
          <li><strong>Sem percentual de avanço.</strong> Apenas <code>done</code> e <code>active</code>. Uma tarefa com 40% e outra com 90% são as duas simplesmente "active".</li>
          <li><strong>Apenas término-início.</strong> <code>after</code> é FS sem defasagem. Início-início, término-término e defasagens não têm onde caber.</li>
          <li><strong>Seções planas.</strong> Sem grupos aninhados.</li>
          <li><strong>Sem recursos, custos ou linha de base.</strong></li>
        </ul>
        <p>Então a ida e volta perde informação de um jeito conhecido e sem surpresas. O gantts.app converte 100% em <code>done</code> e qualquer valor intermediário em <code>active</code> na saída, e reimporta <code>active</code> como 50% — um palpite, que ele informa em vez de deixar você descobrir num relatório de status. As ligações que não consegue escrever como <code>after</code> viram datas absolutas, que continuam corretas mesmo deixando de ser fáceis de manter.</p>
        <p>Uma assimetria deliberada: <code>crit</code> é escrito na exportação, mas ignorado na importação. A criticidade é <em>calculada</em> a partir do grafo de precedências, e confiar num valor afirmado por um diagrama possivelmente desatualizado permitiria pintar de vermelho uma cadeia que não é crítica.</p>`],

    ['Editar visualmente e colar o texto de volta', `<p>Muitas ferramentas renderizam Mermaid. O que faltava era o caminho inverso — arrastar barras e recuperar a sintaxe.</p>
        <ol>
          <li>Cole ou abra o seu diagrama no gantts.app — um arquivo <code>.mmd</code> ou um <code>.md</code> com bloco cercado, os dois funcionam. Ele detecta um bloco gantt pelo conteúdo, não pela extensão.</li>
          <li>Arraste, ligue e reprograme como em qualquer outro gráfico. O <code>excludes weekends</code> liga o calendário útil, de modo que as datas geradas concordam com o arquivo de origem.</li>
          <li><strong>Exportar ▸ Mermaid gantt</strong>, copie e cole de volta no seu README.</li>
        </ol>
        <p>Há também um efeito colateral simpático para quem usa um LLM para rascunhar cronogramas: peça a sintaxe gantt do Mermaid, cole a resposta e você tem um gráfico editável de verdade com caminho crítico — sem chave de API nem servidor no meio.</p>`],
  ],
  faq: [
    ['Como faço um gráfico de Gantt no Mermaid?', 'Inicie o bloco com gantt, acrescente dateFormat YYYY-MM-DD e então títulos de section com linhas de tarefa embaixo, no formato "Nome :tag, id, início, duração" — por exemplo "Pesquisa :done, pes, 2026-01-05, 5d".'],
    ['O 5d do Mermaid inclui o dia de início?', 'Sim. Uma tarefa de 5d começando na segunda, dia 5, termina na sexta, dia 9. Essa contagem inclusiva é a fonte mais comum de erros de um dia.'],
    ['Como funcionam as precedências no gantt do Mermaid?', 'Use "after algumId" no campo de início. É sempre término-início sem defasagem — início-início, término-término e defasagens não podem ser expressos.'],
    ['O Mermaid mostra percentual concluído?', 'Não. Ele tem apenas as tags done e active. Importar active como um percentual específico é um palpite; o gantts.app usa 50% e avisa que fez isso.'],
    ['Onde os gráficos de Gantt do Mermaid são renderizados?', 'GitHub, GitLab, Notion e Obsidian renderizam nativamente em Markdown, e o mermaid.live renderiza no navegador.'],
    ['Dá para converter um gantt do Mermaid em gráfico editável?', 'Dá. Abra o arquivo .mmd ou o Markdown no gantts.app, edite visualmente e use Exportar ▸ Mermaid gantt para copiar a sintaxe atualizada de volta.'],
  ],
  related: [['gantt-chart-dependencies', 'Precedências: FS, SS, FF, SF'], ['critical-path-method', 'O caminho crítico'], ['what-is-a-gantt-chart', 'O que é um gráfico de Gantt?']],
},

};

const UI = {
  templatesH: 'Modelos que usam isso',
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
