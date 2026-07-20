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
    ['Como ele é, na prática', `<p>Imagine uma planilha. À esquerda ficam as colunas de leitura: nome da tarefa, início, término, duração, responsável. À direita, as colunas viram um calendário — dias, semanas ou meses, conforme o tamanho do projeto. Para cada tarefa, uma barra colorida ocupa exatamente as células do período em que ela acontece.</p>
        <p>Uma tarefa de dois dias vira uma barra curta; uma de três semanas, uma barra três vezes mais larga. De cima para baixo você lê todo o trabalho; da esquerda para a direita, a passagem do tempo. Essa é a inteira mecânica da representação, e é por ela ser tão simples que funciona em obra, em laboratório e em agência sem nenhuma adaptação.</p>
        <p>Um cronograma típico de projeto de três a seis meses tem entre 20 e 60 linhas, agrupadas em quatro a oito fases, com cinco a dez marcos. Cabe em uma página A4 na horizontal, que é o teste informal mais confiável de que o nível de detalhe está certo.</p>`],
    ['Os quatro elementos', `<p>As <strong>tarefas</strong> representam o trabalho e têm duração. Os <strong>marcos</strong> têm duração zero e assinalam um momento: uma aprovação, uma entrega, uma decisão — desenhados como losango, não como barra. As <strong>precedências</strong> ligam as tarefas e definem o que espera o quê. As <strong>tarefas resumo</strong> agrupam tarefas em fases e assumem automaticamente as datas do conjunto: começam com a primeira filha e terminam com a última.</p>
        <p>A maioria dos cronogramas acrescenta mais três coisas, todas opcionais e todas úteis: o <strong>percentual concluído</strong>, mostrado como preenchimento dentro da barra; a <strong>linha de hoje</strong>, uma vertical que responde "onde estamos" antes de qualquer explicação; e o <strong>caminho crítico</strong> destacado em outra cor.</p>
        <p>Separar bem esses quatro elementos já é a maior parte de um cronograma consistente. O engano mais comum é transformar tudo em tarefa: "aprovação da diretoria" vira uma barra de cinco dias em vez de um marco, e a fase inteira perde o ponto de decisão que deveria destacar.</p>`],
    ['Por que a linha do tempo muda tudo', `<p>Uma lista diz <em>o que</em> fazer. Um gráfico de Gantt acrescenta <em>quando</em> e <em>em que ordem</em>. Fica visível o que a lista esconde: que três tarefas caem na mesma semana e dependem da mesma pessoa, ou que um atraso no começo empurra o fim em duas semanas.</p>
        <p>Um exemplo concreto. Uma lista com "contratar fotógrafo", "produzir as peças", "aprovar com o cliente" e "veicular" parece uma sequência tranquila de quatro itens. Colocada na linha do tempo, com produção de 10 dias, aprovação de 8 e veiculação marcada para o dia 20, a lista revela que não fecha: 10 mais 8 já são 18 dias úteis e a contratação ainda nem começou.</p>
        <p>É sempre a mesma descoberta. A lista mede quantidade de trabalho; o gráfico mede se ele cabe no calendário. São perguntas diferentes, e só a segunda decide se o prazo é real.</p>
        <p>A segunda coisa que a linha do tempo revela é o paralelismo. Numa lista, quatro itens parecem quatro etapas em fila; no gráfico, três deles ocupam a mesma semana e um único responsável aparece em duas barras simultâneas. Nenhuma soma de horas mostra isso — só a posição das barras.</p>`],
    ['Precedências: o valor real', `<p>A utilidade de um gráfico de Gantt depende das ligações. Sem elas, é uma tabela colorida: se uma tarefa escorrega, todas as seguintes precisam ser ajustadas na mão — e isso, na prática, ninguém faz depois da segunda vez.</p>
        <p>Com precedências, o cronograma recalcula sozinho. Você move uma barra e tudo que depende dela acompanha. É a diferença entre um cronograma vivo e um documento desatualizado em três semanas.</p>
        <p>O tipo dominante é <strong>Término-Início</strong>: B começa quando A termina. Ele cobre em torno de 90% das ligações reais. Existem outros três — Início-Início, Término-Término e Início-Término —, úteis em casos específicos, e vale conhecer os <a href="/pt/blog/gantt-chart-dependencies.html">quatro tipos de precedência</a> antes de sair usando.</p>
        <p>O teste para saber se uma ligação é real: se A terminar antes do previsto, B pode começar antes? Se a resposta for não, você não criou uma precedência — apenas repetiu a ordem em que digitou a lista, e o cronograma vai reagir a atrasos que não existem.</p>`],
    ['O caminho crítico', `<p>O caminho crítico é a cadeia mais longa de tarefas ligadas. A duração dele é a duração do projeto. Qualquer atraso nesse caminho empurra o fim na mesma medida; atrasos fora dele, muitas vezes, não empurram nada.</p>
        <p>O número que importa aqui chama-se <strong>folga</strong>: quantos dias uma tarefa pode atrasar sem mover a entrega. Tarefas do caminho crítico têm folga zero. Uma tarefa com quatro dias de folga que atrasa dois continua irrelevante para o prazo; a mesma tarefa atrasando cinco dias vira crítica e passa a comandar a entrega.</p>
        <p>É o indicador mais útil de um cronograma: mostra onde a atenção faz diferença e onde ela se perde. O <a href="/pt/blog/critical-path-method.html">método de cálculo</a> é uma soma para frente e uma subtração para trás, e qualquer ferramenta séria faz isso sozinha a cada alteração.</p>`],
    ['Quando usar', `<p>Em projetos com prazo, ordem e várias pessoas envolvidas: obras, lançamentos, eventos, mudanças de escritório, pesquisas, implantações de sistema. Onde a pergunta "o que depende do quê" pesa mais do que "o que faço agora".</p>
        <p>Três sinais de que o Gantt é a ferramenta certa: existe uma data de entrega que não se negocia; pelo menos algumas tarefas só podem começar depois de outras terminarem; e mais de uma pessoa ou equipe precisa combinar o próprio calendário com o das demais. Com os três presentes, nenhuma outra representação entrega a mesma informação em uma tela.</p>
        <p>Vale para escalas muito diferentes. Uma obra de doze meses num eixo semanal, um lançamento de seis semanas num eixo diário e um plano de uma semana num eixo de horas usam a mesma estrutura — o que muda é a densidade e a unidade de tempo, não a ideia. Os <a href="/pt/blog/gantt-chart-examples.html">exemplos por setor</a> mostram como as fases mudam de nome sem que a estrutura mude.</p>
        <p>Cinco usos aparecem em praticamente todo projeto: montar o cronograma; combinar o calendário entre equipes; enxergar as dependências antes que elas virem atraso; acompanhar o avanço comparando o planejado com o realizado; e apresentar o plano a quem financia ou aprova. Esse último não é acessório — na maioria das organizações, o Gantt é o único documento de projeto que a diretoria lê inteiro.</p>`],
    ['Onde estão os limites', `<p>Para trabalho contínuo e recorrente, o Gantt é a ferramenta errada — Kanban serve melhor. Para um time em sprints de duas semanas com escopo deliberadamente aberto, também.</p>
        <p>Há mais três limitações honestas. A barra mostra <strong>duração, não esforço</strong>: uma tarefa de dez dias pode consumir duas horas por dia ou o dia inteiro, e o desenho é idêntico — por isso o Gantt sozinho não substitui um plano de recursos. Ele <strong>exige manutenção</strong>: um cronograma que ninguém atualiza é pior do que nenhum, porque continua sendo levado a sério. E ele <strong>não mostra custo</strong>, a não ser que se acrescente uma <a href="/pt/blog/s-curve-project-management.html">curva S</a> ao lado.</p>
        <p>E ele deixa de funcionar quando desce demais: um cronograma de 400 linhas não é planejamento, é contabilidade. Regra prática: nenhuma tarefa com menos de um dia, nenhuma com mais de um mês. Acima de 150 linhas, o caminho é dividir em cronogramas por fase, com um cronograma-mestre só de resumos por cima.</p>`],
    ['Gantt, linha do tempo e Kanban', `<p>As três representações são confundidas com frequência, e cada uma responde a uma pergunta diferente.</p>
        <p>A <strong>linha do tempo</strong> é uma sequência de datas sobre um eixo, sem durações nem ligações. Serve para comunicar cinco ou seis momentos a uma diretoria. Todo Gantt contém uma linha do tempo; nenhuma linha do tempo é um Gantt.</p>
        <p>O <strong>Kanban</strong> mostra estado, não calendário: colunas de "a fazer", "fazendo" e "feito", com cartões atravessando. Responde "o que vem agora", que é a pergunta certa quando o trabalho é contínuo e não há uma data única para defender.</p>
        <p>O <strong>Gantt</strong> responde "isso cabe até a data prometida". Regra de bolso: com prazo fixo e ordem definida, Gantt; com fluxo contínuo e prioridades móveis, Kanban; para mostrar meia dúzia de datas a quem não vai executar nada, uma linha do tempo basta.</p>`],
    ['De onde vem o nome', `<p>De Henry Gantt, engenheiro mecânico e consultor americano que popularizou a representação por volta de 1910 a 1915, aplicando-a a planejamento de produção e, mais tarde, à construção naval durante a guerra. Uma forma parecida já havia sido desenvolvida duas décadas antes pelo polonês Karol Adamiecki, que a chamou de harmonograma, mas publicou em polonês e russo — e o trabalho permaneceu praticamente desconhecido no Ocidente.</p>
        <p>Foi a versão de Gantt que circulou pela indústria americana e europeia, e por isso é o nome dele que ficou. A representação tem mais de um século e continua sendo a visão padrão de praticamente toda ferramenta de projeto — raro para algo que fosse apenas moda.</p>`],
    ['Por onde começar', `<p>Liste primeiro as tarefas, sem datas. Depois estime as durações em dias úteis. Ligue então o que realmente espera — não o que está em sequência por acaso. Por fim, defina de cinco a dez marcos. As datas saem desses quatro passos; elas são resultado, não ponto de partida.</p>
        <p>Para um cronograma pequeno e estável, uma planilha resolve, e há um <a href="/pt/blog/gantt-chart-in-excel.html">método conhecido no Excel</a> com barras empilhadas. Acima de umas vinte tarefas, o custo de repassar datas à mão supera a familiaridade da planilha, porque nenhuma delas calcula precedências.</p>
        <p>Uma ferramenta dedicada assume o recálculo. O <a href="/pt/app.html">gantts.app</a> roda direto no navegador, sem cadastro, salva localmente no seu aparelho e exporta em PDF, PNG, XLSX e PPTX. O passo a passo completo está em <a href="/pt/blog/how-to-make-a-gantt-chart.html">como fazer um gráfico de Gantt</a>.</p>`],
  ],
  callout: 'Um gráfico de Gantt sem precedências é só uma tabela colorida. Todo o valor vem de o cronograma recalcular sozinho quando algo muda — e, em projeto real, algo sempre muda.',
  faq: [
    ['O que é um gráfico de Gantt de forma simples?', 'Um gráfico de barras sobre uma linha do tempo: cada linha é uma tarefa e o comprimento da barra é a duração. As ligações entre as barras mostram o que espera o quê, e a posição de cada barra no eixo mostra em que semana o trabalho acontece.'],
    ['Quais são os elementos de um gráfico de Gantt?', 'Quatro essenciais: tarefas com duração, marcos de duração zero, precedências ligando o que espera o quê e tarefas resumo agrupando as fases. Acrescentam-se com frequência o percentual concluído dentro da barra, uma linha de hoje e o caminho crítico destacado.'],
    ['Para que serve um gráfico de Gantt?', 'Para projetos com prazo definido, várias pessoas e dependências entre as etapas — obras, lançamentos, eventos, pesquisas, implantações. Ele mostra o que corre em paralelo, o que espera o quê e o que se desloca quando uma etapa atrasa.'],
    ['Qual a diferença entre gráfico de Gantt e cronograma?', 'O cronograma é o planejamento de prazos como um todo, incluindo durações, precedências e responsáveis. O gráfico de Gantt é a forma visual mais comum de representá-lo — o mesmo cronograma poderia ser apresentado como tabela, mas ninguém enxergaria o paralelismo.'],
    ['Qual a diferença entre gráfico de Gantt e linha do tempo?', 'A linha do tempo é uma sequência de datas num eixo, sem durações nem ligações, feita para comunicar meia dúzia de momentos. O gráfico de Gantt mostra tarefas em paralelo com duração, precedências, responsáveis e avanço, e por isso serve para gerir o trabalho, não só para ilustrá-lo.'],
    ['O gráfico de Gantt ainda faz sentido hoje?', 'Para projetos com ordem e prazo, sim, e continua sendo a visão padrão de praticamente toda ferramenta de projeto. Para operação contínua ou escopo deliberadamente aberto, um quadro Kanban ou de sprint funciona melhor, porque a pergunta ali é o que vem agora, não em que data.'],
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
    ['O que ter em mãos antes de começar', `<p>Três coisas, e nenhuma delas é uma data. Primeiro, o <strong>objetivo e o prazo</strong>: o que significa "pronto" e até quando. Segundo, quem decide — porque aprovações consomem calendário e quase nunca aparecem no plano inicial. Terceiro, uma noção grosseira do <strong>tamanho do trabalho</strong>, em semanas, não em horas.</p>
        <p>Estimativas perfeitas não são pré-requisito. Um cronograma é feito para ser revisado; o que ele precisa no dia um é estar completo em escopo, não preciso em números. Se a representação ainda é nova para você, vale ler antes <a href="/pt/blog/what-is-a-gantt-chart.html">o que é um gráfico de Gantt</a>, porque os passos abaixo usam os quatro elementos direto.</p>`],
    ['1. Liste as tarefas, sem datas', `<p>Escreva primeiro o que precisa ser feito. Sem datas, sem ordem, sem responsáveis. Só o trabalho. Nessa etapa a única meta é não esquecer nada — ordenar é trivial depois, lembrar não é.</p>
        <p>O tamanho certo fica entre um dia e um mês por tarefa. Menos que isso é lista de afazeres; mais que isso não é tarefa, é fase. Um teste rápido: você consegue nomear uma pessoa responsável e descrever "pronto" em uma frase? Se não consegue, ou a tarefa é grande demais e precisa ser dividida, ou é vaga demais e precisa ser definida.</p>
        <p>Escreva com verbo: "redigir o texto da página inicial", "revisar com o jurídico", "publicar em produção". "Página inicial" não é tarefa, é assunto — e assunto não tem duração. Para um projeto de três meses, espere chegar entre 25 e 50 itens nessa primeira varredura.</p>`],
    ['2. Agrupe em fases', `<p>Reúna as tarefas em quatro a oito fases. É esse agrupamento que torna o cronograma legível — para você e para quem for ver. Fases típicas de um projeto de software: concepção, projeto, desenvolvimento, homologação, implantação. De uma obra: licenças, terraplenagem, estrutura, instalações, acabamentos, entrega.</p>
        <p>Cada fase vira uma <strong>tarefa resumo</strong>, cujas datas são calculadas pelas filhas: começa com a primeira e termina com a última. Nunca digite datas numa tarefa resumo — se você conseguiu, a ferramenta não está tratando aquilo como resumo, e o cronograma vai mentir na primeira mudança.</p>
        <p>O ganho aparece na hora de apresentar: com as fases recolhidas, um projeto de 40 tarefas cabe em seis linhas na tela de uma reunião de diretoria, e a mesma estrutura se expande para o detalhe da equipe.</p>`],
    ['3. Estime as durações', `<p>Estime em dias úteis, não em dias corridos, e estime o trabalho real: esperas entram como tarefas próprias, não infladas dentro da duração. "Aguardar aprovação do cliente: 5 dias" é uma tarefa legítima e visível; cinco dias escondidos dentro de "produzir peça" simplesmente somem.</p>
        <p>Uma abordagem que funciona: estimar otimista, provável e pessimista, e ponderar por (otimista + 4 × provável + pessimista) dividido por 6. Uma tarefa estimada em 3, 5 e 13 dias dá 6 dias, não 5 — a cauda pessimista pesa e a média simples esconde isso. Quem dá um número só costuma dar o otimista.</p>
        <p>Não some folga de proteção em cada tarefa. Se cada uma leva 20% de gordura, o cronograma inteiro fica 20% maior, ninguém enxerga onde está a reserva e ela é consumida sem que se perceba. A folga entra concentrada, no passo 7.</p>`],
    ['4. Ligue as precedências', `<p>Ligue o que de fato espera. O teste: se A terminar antes, B pode começar antes? Se sim, a ligação é real. Se não, você apenas copiou a ordem da lista, e o cronograma vai propagar atrasos que não existem.</p>
        <p>O tipo padrão é <strong>Término-Início</strong> e ele cobre a grande maioria dos casos. Início-Início serve para trabalhos que arrancam juntos, normalmente com retardo — a homologação começa três dias depois do início do desenvolvimento. Os <a href="/pt/blog/gantt-chart-dependencies.html">quatro tipos</a> existem, mas usar os raros sem necessidade só dificulta a leitura.</p>
        <p>Não ligue tudo com tudo. Um cronograma em que cada tarefa depende da anterior é uma corrente sem paralelismo — quase sempre irreal e sempre pessimista, porque impede que trabalhos independentes corram lado a lado. Uma pista concreta: se o cronograma tem 40 tarefas e 39 ligações numa única linha, ele foi montado no automático.</p>
        <p>E não digite datas fixas para conseguir o resultado que você quer. Uma data travada não se move quando a predecessora atrasa, e é a causa mais comum de um cronograma que continua bonito depois de ter deixado de ser verdadeiro.</p>`],
    ['5. Defina os marcos', `<p>De cinco a dez para um projeto de vários meses. Um marco assinala uma decisão, uma aprovação ou uma condição cumprida — não o fim de uma tarefa qualquer. "Contrato assinado", "projeto aprovado", "sistema em produção" são marcos. "Terminar de redigir" não é.</p>
        <p>Marcos têm duração zero e aparecem como losango. Dois lugares em que sempre valem a pena: no fim de cada fase, para que a passagem entre fases seja um evento e não uma transição silenciosa, e na data de entrega final, para que a linha de chegada esteja sempre visível no desenho.</p>
        <p>Eles também servem de âncora para precedências: ligar cinco tarefas ao marco "projeto aprovado" é mais legível, e mais fácil de manter, do que ligar cada uma delas às três tarefas de aprovação individualmente.</p>`],
    ['6. Aloque e confira a carga', `<p>Só agora entram as pessoas — e então se verifica se alguém deveria trabalhar em três tarefas na mesma semana. Essa sobrecarga é o motivo mais comum de um cronograma correto no papel não se sustentar: as precedências fecham, a aritmética fecha, e a pessoa não se divide em três.</p>
        <p>Duas verificações resolvem a maior parte dos casos. Percorra o cronograma semana a semana e conte quantas barras simultâneas cada responsável tem; mais de duas em paralelo é bandeira vermelha. E desconte a realidade: férias, feriados, e o fato de que ninguém dedica cinco dias por semana a um único projeto — 60% a 70% do tempo já é uma alocação alta e honesta.</p>
        <p>Quando houver conflito, prefira mover as tarefas <em>com folga</em>, porque elas absorvem o deslocamento sem tocar na data de entrega. Mover uma tarefa do caminho crítico para resolver carga empurra o projeto inteiro.</p>`],
    ['7. Reserve folga e valide', `<p>Coloque folga onde há incerteza — antes dos marcos e no fim do caminho crítico, não em cada tarefa. Folgas espalhadas somem sem que ninguém perceba; concentradas, ficam visíveis e podem ser defendidas em reunião. Uma reserva de 10% a 15% da duração do caminho crítico, como uma barra explícita antes da entrega, é um ponto de partida razoável.</p>
        <p>Ative então o <a href="/pt/blog/critical-path-method.html">caminho crítico</a> e leia o resultado. Se a data final não cabe no prazo, o ajuste tem que acontecer nesse caminho: encurtar uma tarefa dele, dividir uma barra longa em duas que rodem em paralelo ou remover escopo. Apertar tarefas com folga não antecipa um único dia.</p>
        <p>Por fim, revise o cronograma com quem vai executar. Um cronograma que só uma pessoa conhece não é cronograma, é opinião. E grave uma <a href="/pt/blog/gantt-baseline-variance.html">linha de base</a> antes de começar: sem ela, daqui a dois meses não haverá como dizer o quanto o plano mudou.</p>`],
    ['Com qual ferramenta?', `<p>Uma planilha resolve projetos pequenos. Há um <a href="/pt/blog/gantt-chart-in-excel.html">método conhecido no Excel</a>, com barras empilhadas e uma série invisível, e ele funciona bem até umas vinte linhas. Acima disso fica trabalhoso, porque as precedências não recalculam sozinhas e cada atraso vira uma rodada de digitação manual.</p>
        <p>O PowerPoint serve para apresentar, não para planejar: um cronograma feito de retângulos é rápido de montar e impossível de manter. Ferramentas corporativas resolvem tudo, ao custo de licença, instalação e uma curva de aprendizado desproporcional a um projeto de trinta tarefas.</p>
        <p>Uma ferramenta dedicada e leve assume o recálculo. O <a href="/pt/app.html">gantts.app</a> roda direto no navegador, sem cadastro, salva localmente no seu aparelho, marca o caminho crítico sozinho e exporta em PDF, PNG, XLSX e PPTX quando alguém pedir o arquivo.</p>`],
    ['O erro mais comum', `<p>Detalhar demais. Um cronograma de 300 linhas não é mantido, e cronograma desatualizado é pior do que nenhum, porque ainda se confia nele. Se o projeto realmente exige esse nível, divida em cronogramas por fase e mantenha um cronograma-mestre só com os resumos.</p>
        <p>Os outros quatro erros recorrentes: começar pelas datas em vez de pelas tarefas; ligar tudo numa corrente única e perder o paralelismo; esconder esperas dentro das durações; e não gravar linha de base, o que torna impossível medir desvio depois. Todos aparecem em <a href="/pt/blog/gantt-chart-mistakes.html">erros comuns de cronograma</a>.</p>`],
    ['E depois?', `<p>Cronograma é ferramenta, não documento. Atualize semanalmente, sempre no mesmo dia: percentual concluído das tarefas em andamento, datas reais das concluídas, e o que mudou de estimativa nas que ainda não começaram.</p>
        <p>A leitura que importa em cada atualização é dupla: o caminho crítico ainda é o mesmo, e quanta folga já foi consumida nos outros caminhos. Uma tarefa com três dias de folga que atrasou quatro acabou de virar crítica, e isso muda onde a atenção precisa estar na semana seguinte.</p>
        <p>Compare com a linha de base uma vez por mês. Não para justificar desvio, mas para descobrir o padrão: se as tarefas de aprovação atrasam sistematicamente, o próximo cronograma já nasce com estimativas melhores.</p>`],
  ],
  callout: 'Nunca comece pelas datas. Tarefas, durações e precedências produzem as datas sozinhas — e um cronograma feito assim se defende. Um cronograma calculado de trás para frente a partir de uma data desejada não sobrevive à primeira pergunta.',
  faq: [
    ['Como fazer um gráfico de Gantt?', 'Liste as tarefas sem datas, agrupe em quatro a oito fases, estime as durações em dias úteis, ligue as precedências reais, defina de cinco a dez marcos, aloque responsáveis e confira a carga, e por fim reserve folga concentrada e valide com quem vai executar. As datas saem desses sete passos.'],
    ['O que preciso ter antes de montar o cronograma?', 'Três coisas: o objetivo e o prazo, a lista do trabalho necessário e uma noção grosseira de tamanho. Nenhuma delas é uma data de tarefa. Estimativas perfeitas não são pré-requisito — o que o cronograma precisa no dia um é estar completo em escopo, não preciso em números.'],
    ['Como fazer um gráfico de Gantt grátis?', 'No navegador, sem cadastro nem instalação — com o gantts.app, por exemplo, que calcula precedências e caminho crítico e exporta em PDF, PNG, XLSX e PPTX. A alternativa é uma planilha, que funciona bem até umas vinte tarefas e fica pesada depois disso.'],
    ['Quantas tarefas deve ter um cronograma?', 'O mínimo necessário. De 20 a 60 linhas continuam legíveis e cabem numa página; acima de 150, ninguém mantém. Quando o projeto exige mais detalhe, divida em cronogramas por fase com um cronograma-mestre só de resumos por cima.'],
    ['Qual a duração ideal de uma tarefa?', 'Entre um dia e um mês. Menos vira lista de afazeres, mais é fase e precisa ser dividida. O teste prático: dá para nomear um responsável e descrever "pronto" em uma frase? Se não dá, a tarefa é grande demais ou vaga demais.'],
    ['Onde colocar folga no cronograma?', 'Concentrada, antes dos marcos e no fim do caminho crítico — algo em torno de 10% a 15% da duração desse caminho, como uma barra explícita. Espalhar folga dentro de cada tarefa faz o cronograma inchar sem que ninguém consiga ver quanto de reserva ainda existe.'],
  ],
  related: [['what-is-a-gantt-chart', 'O que é um gráfico de Gantt?'], ['gantt-chart-dependencies', 'Os quatro tipos de precedência'], ['gantt-chart-mistakes', 'Erros comuns de cronograma']],
},

'critical-path-method': {
  h1: 'Caminho crítico: método, cálculo e exemplo resolvido',
  metaTitle: 'Caminho crítico: cálculo e exemplo',
  metaDesc: 'Caminho crítico explicado: cálculo para frente, para trás, folga total e um exemplo resolvido com seis tarefas e a conta completa.',
  date: '2026-07-19',
  lead: 'O <strong>caminho crítico</strong> é a cadeia mais longa de tarefas ligadas de um projeto. O comprimento dele é a menor duração possível — e cada dia de atraso nesse caminho é um dia de atraso no fim.',
  figIntro: 'Cálculo para frente, para trás e leitura das folgas:',
  sections: [
    ['A ideia central', `<p>Nem toda tarefa pesa igual no prazo. Algumas têm sobra: podem escorregar uma semana sem que a data de entrega se mexa. Outras não têm nenhuma — e são exatamente essas que formam o caminho crítico.</p>
        <p>O método se chama Critical Path Method, ou CPM, e foi formalizado no fim dos anos 1950 por Morgan Walker e James Kelley, que planejavam paradas de manutenção industrial. Ele responde a duas perguntas objetivas: qual a menor duração possível do projeto, e quais tarefas não podem atrasar de jeito nenhum.</p>
        <p>O valor prático está no recorte. Num cronograma de 60 tarefas, talvez 12 sejam críticas. As outras 48 têm folga e não merecem a mesma vigilância. Sem esse recorte, a atenção se distribui por igual entre todas — e acaba faltando justamente onde o prazo é decidido.</p>`],
    ['O vocabulário mínimo', `<p>São seis termos, e o cálculo inteiro sai deles:</p>
        <ul>
          <li><strong>Duração</strong> — quantos dias úteis a tarefa consome.</li>
          <li><strong>Início mais cedo</strong> e <strong>término mais cedo</strong> — o mais adiantado que a tarefa pode começar e terminar. <code>término mais cedo = início mais cedo + duração</code>.</li>
          <li><strong>Início mais tarde</strong> e <strong>término mais tarde</strong> — o mais tardar que ela pode começar e terminar sem empurrar o fim do projeto. <code>início mais tarde = término mais tarde − duração</code>.</li>
          <li><strong>Folga total</strong> — <code>início mais tarde − início mais cedo</code>, que dá no mesmo que <code>término mais tarde − término mais cedo</code>.</li>
          <li><strong>Caminho crítico</strong> — a cadeia de tarefas com folga total zero, ligada do início ao fim.</li>
        </ul>
        <p>Uma convenção evita metade da confusão: conte em dias decorridos a partir do dia 0. O projeto começa no instante 0, uma tarefa de 3 dias termina no instante 3, e a seguinte começa no instante 3. As datas reais entram só no fim. Misturar as duas contagens durante o cálculo é a origem do clássico erro de um dia.</p>`],
    ['Cálculo para frente: as datas mais cedo', `<p>Comece no início e avance da esquerda para a direita. A primeira tarefa tem início mais cedo 0. Para cada tarefa seguinte, o início mais cedo é o <strong>maior</strong> dos términos mais cedo das predecessoras — a tarefa espera a última que chegar, não a primeira — e o término mais cedo é o início mais cedo somado à duração.</p>
        <p>Esse "maior" é o ponto em que quase todo cálculo manual erra. Se uma tarefa depende de duas outras que terminam nos dias 11 e 8, ela começa no dia 11. Usar a média, ou simplesmente a primeira que aparece na lista, produz um cronograma otimista que não sobrevive à primeira semana.</p>
        <p>Ao terminar essa varredura, o maior término mais cedo de todo o cronograma é a duração mínima do projeto. Não é uma meta nem uma estimativa: é o que as durações e as precedências que você digitou implicam. Se esse número não cabe no prazo prometido, o problema está no escopo ou nas durações, não na disposição da equipe.</p>`],
    ['Cálculo para trás: as datas mais tarde', `<p>Agora parta do fim e volte da direita para a esquerda. A última tarefa recebe término mais tarde igual à duração do projeto — o mesmo número que o cálculo para frente produziu. O início mais tarde dela é o término mais tarde menos a duração.</p>
        <p>Para as demais, o término mais tarde é o <strong>menor</strong> dos inícios mais tarde das sucessoras. A lógica é espelhada: uma tarefa que alimenta duas outras precisa estar pronta a tempo da mais apertada das duas. Onde no cálculo para frente você toma o máximo, aqui toma o mínimo — trocar os dois é o segundo erro clássico.</p>
        <p>Se em alguma tarefa o início mais tarde sair menor que o início mais cedo, o cronograma tem folga negativa: existe uma data fixa em algum lugar exigindo algo aritmeticamente impossível. Não é um detalhe para corrigir depois; é o cronograma avisando que a promessa e a conta não fecham.</p>`],
    ['Folga total e folga livre', `<p>A folga total de uma tarefa é o início mais tarde menos o início mais cedo: quanto ela pode atrasar sem mover o fim do projeto. Tarefas com folga zero formam o caminho crítico. Sempre existe pelo menos um caminho, e em cronogramas muito ligados costuma haver vários em paralelo.</p>
        <p>Existe uma segunda folga, menos citada e mais útil no dia a dia: a <strong>folga livre</strong>, que é quanto a tarefa pode atrasar sem mover a <em>sucessora imediata</em>. Ela é sempre menor ou igual à folga total. A diferença importa porque a folga total costuma ser compartilhada: se três tarefas em sequência têm 5 dias de folga total cada, não são 15 dias disponíveis — são os mesmos 5 dias, e quem gastar primeiro deixa as outras em zero.</p>
        <p>Daí a regra prática: folga total é um número para quem cuida do cronograma inteiro; folga livre é o número que se pode prometer a quem executa uma tarefa específica.</p>`],
    ['Um exemplo resolvido com seis tarefas', `<p>Um projeto pequeno, seis tarefas, durações em dias úteis. As predecessoras indicam o que precisa terminar antes.</p>
        <table>
          <thead><tr><th>Tarefa</th><th>Duração</th><th>Predecessoras</th></tr></thead>
          <tbody>
            <tr><td>A — Levantamento</td><td>3</td><td>—</td></tr>
            <tr><td>B — Projeto detalhado</td><td>4</td><td>A</td></tr>
            <tr><td>C — Compras</td><td>2</td><td>A</td></tr>
            <tr><td>D — Execução</td><td>5</td><td>B</td></tr>
            <tr><td>E — Preparação do local</td><td>6</td><td>C</td></tr>
            <tr><td>F — Instalação e testes</td><td>3</td><td>D, E</td></tr>
          </tbody>
        </table>
        <p>Há dois caminhos do início ao fim: <strong>A → B → D → F</strong> = 3 + 4 + 5 + 3 = <strong>15 dias</strong>, e <strong>A → C → E → F</strong> = 3 + 2 + 6 + 3 = <strong>14 dias</strong>. O mais longo dá o prazo. Mas o valor do método não é achar o maior número: é saber quanta folga cada tarefa fora dele realmente tem.</p>
        <p><strong>Cálculo para frente</strong> (início mais cedo, depois término mais cedo):</p>
        <ul>
          <li>A: começa em 0, termina em 3.</li>
          <li>B: começa em 3, termina em 7. C: começa em 3, termina em 5.</li>
          <li>D: começa em 7, termina em 12. E: começa em 5, termina em 11.</li>
          <li>F: espera D (12) e E (11); começa no maior dos dois, 12, e termina em 15. <strong>Duração do projeto: 15 dias.</strong></li>
        </ul>
        <p><strong>Cálculo para trás</strong> (término mais tarde, depois início mais tarde), partindo de F com término mais tarde 15:</p>
        <ul>
          <li>F: termina em 15, começa em 12.</li>
          <li>D: precisa terminar em 12, o início de F, então começa em 7. E: também precisa terminar em 12, e dura 6, então começa em 6.</li>
          <li>B: precisa terminar em 7, o início de D, então começa em 3. C: precisa terminar em 6, o início de E, então começa em 4.</li>
          <li>A: alimenta B (que começa em 3) e C (que começa em 4); toma o menor, 3, e começa em 0.</li>
        </ul>
        <p>A folga total sai da subtração <code>início mais tarde − início mais cedo</code>:</p>
        <table>
          <thead><tr><th>Tarefa</th><th>Mais cedo</th><th>Mais tarde</th><th>Folga</th><th>Crítica?</th></tr></thead>
          <tbody>
            <tr><td>A</td><td>0 → 3</td><td>0 → 3</td><td><strong>0</strong></td><td>sim</td></tr>
            <tr><td>B</td><td>3 → 7</td><td>3 → 7</td><td><strong>0</strong></td><td>sim</td></tr>
            <tr><td>C</td><td>3 → 5</td><td>4 → 6</td><td>1</td><td>não</td></tr>
            <tr><td>D</td><td>7 → 12</td><td>7 → 12</td><td><strong>0</strong></td><td>sim</td></tr>
            <tr><td>E</td><td>5 → 11</td><td>6 → 12</td><td>1</td><td>não</td></tr>
            <tr><td>F</td><td>12 → 15</td><td>12 → 15</td><td><strong>0</strong></td><td>sim</td></tr>
          </tbody>
        </table>
        <p>O caminho crítico é <strong>A → B → D → F</strong>, exatamente o caminho de 15 dias. C e E têm <strong>um dia de folga cada</strong> — e é um dia só, compartilhado pela cadeia inteira: se C atrasar um dia, E perde a folga dela na mesma hora.</p>
        <p>Traduzindo para o calendário, com início na segunda-feira 3 de agosto de 2026 e semana de cinco dias úteis: A vai de 3 a 5 de agosto, B de 6 a 11, D de 12 a 18 e F de 19 a 21. Entrega na sexta-feira, 21 de agosto. C ocupa 6 e 7 de agosto e E vai de 10 a 17 — um dia antes do que seria estritamente necessário.</p>`],
    ['O que isso muda na prática', `<p>Mostra onde o esforço rende. Colocar mais duas pessoas em E não antecipa nada: E já tem folga e terminaria antes de F começar de qualquer jeito. Ganhar um dia em D ganha um dia no fim do projeto. É a mesma quantidade de esforço com resultados completamente diferentes.</p>
        <p>Muda também o acompanhamento: em vez de percorrer todas as tarefas, basta perguntar se as quatro críticas estão no prazo e quanto da folga de C e E já foi consumido.</p>
        <p>E alerta para a armadilha central: se C atrasar dois dias, o caminho A → C → E → F passa a durar 16 dias e se torna o novo caminho crítico, enquanto B e D ganham folga. O caminho crítico não é propriedade fixa do cronograma, é um retrato do momento — ele se desloca assim que alguma duração muda.</p>`],
    ['CPM, PERT e corrente crítica', `<p>Três métodos que se confundem com frequência:</p>
        <ul>
          <li><strong>CPM</strong> usa uma duração única por tarefa e se concentra em caminho crítico e folga. Adequado quando as durações são razoavelmente conhecidas.</li>
          <li><strong>PERT</strong> usa três estimativas por tarefa — otimista, provável e pessimista — e as pondera, normalmente por (otimista + 4 × provável + pessimista) dividido por 6. Serve para incerteza alta: uma tarefa estimada em 4, 6 e 14 dias tem média ponderada 7, não 6. Na prática, muita equipe estima em PERT e calcula o caminho em CPM.</li>
          <li><strong>Corrente crítica</strong> acrescenta a restrição de recursos e junta as folgas individuais num único pulmão no fim da cadeia. Faz sentido quando o que limita o cronograma não é a precedência, mas a mesma equipe disputada por três frentes ao mesmo tempo.</li>
        </ul>`],
    ['Os erros que invalidam o cálculo', `<p>Quatro coisas fazem o caminho crítico sair errado sem nenhum aviso na tela:</p>
        <ul>
          <li><strong>Datas fixas digitadas à mão.</strong> Uma tarefa com data travada não se move e mascara a folga real de tudo que vem antes dela.</li>
          <li><strong>Tarefas soltas.</strong> Uma tarefa sem predecessora e sem sucessora fica fora de qualquer caminho e nunca aparece como crítica, por mais essencial que seja para a entrega.</li>
          <li><strong>Folga escondida dentro da duração.</strong> Inflar cada tarefa em 30% para se proteger destrói o cálculo: todas as folgas ficam invisíveis e o caminho crítico deixa de significar alguma coisa.</li>
          <li><strong>Esperas embutidas em retardos.</strong> Cura de concreto e prazo de aprovação consomem calendário. Como tarefas visíveis, entram no cálculo e aparecem no desenho; como retardo dentro de uma caixa de diálogo, ninguém encontra depois.</li>
        </ul>`],
    ['Calcular sem fazer as passagens à mão', `<p>Fazer as duas passagens no papel uma vez é o melhor jeito de entender o método. Refazer a cada mudança de estimativa é inviável: seis tarefas cabem numa folha, sessenta não.</p>
        <p>O <a href="/pt/app.html">gantts.app</a> marca o caminho crítico sozinho assim que existem tarefas e precedências, roda no navegador sem cadastro e exporta em PDF, PNG, XLSX e PPTX. Mude uma duração e o caminho se redesenha na hora — inclusive quando ele muda de lugar. Se as precedências ainda não estão claras, comece pelos <a href="/pt/blog/gantt-chart-dependencies.html">quatro tipos de precedência</a>.</p>`],
  ],
  callout: 'O caminho crítico muda durante o projeto. Uma tarefa com três dias de folga que atrasa quatro passa a ser crítica, e outra que era crítica ganha folga. Por isso ele não se calcula uma vez no início, mas a cada atualização do cronograma.',
  faq: [
    ['O que é o caminho crítico?', 'A cadeia mais longa de tarefas ligadas do início ao fim do projeto. A duração dela é a menor duração possível do projeto, e todas as suas tarefas têm folga zero: cada dia de atraso em qualquer uma delas é um dia de atraso na entrega.'],
    ['Como calcular o caminho crítico?', 'Faça o cálculo para frente, tomando sempre o maior término mais cedo das predecessoras, para obter as datas mais cedo e a duração do projeto. Depois o cálculo para trás, tomando sempre o menor início mais tarde das sucessoras. As tarefas em que as duas datas coincidem — folga zero — formam o caminho crítico.'],
    ['O que é folga total?', 'O quanto uma tarefa pode atrasar sem mover o fim do projeto: início mais tarde menos início mais cedo. Atenção porque ela costuma ser compartilhada por uma cadeia inteira — três tarefas com cinco dias de folga total não somam quinze dias, são os mesmos cinco.'],
    ['Qual a diferença entre folga total e folga livre?', 'A folga total mede o atraso possível sem mover o fim do projeto; a folga livre mede o atraso possível sem mover a sucessora imediata. A folga livre é sempre menor ou igual à total, e é a única que se pode prometer com segurança a quem executa a tarefa.'],
    ['Pode haver mais de um caminho crítico?', 'Sim. Em cronogramas muito ligados, vários caminhos paralelos têm o mesmo comprimento e todos passam a ser críticos. Isso aumenta bastante o risco, porque um atraso em qualquer um deles empurra a entrega e não há folga em lugar nenhum para absorver.'],
    ['Qual a diferença entre CPM e PERT?', 'O CPM usa uma duração única por tarefa e se concentra em caminho crítico e folga. O PERT usa três estimativas — otimista, provável e pessimista — ponderadas para lidar com incerteza. Na prática muita equipe estima as durações em PERT e calcula o caminho em CPM.'],
    ['Por que o caminho crítico do meu cronograma parece errado?', 'Quase sempre por uma destas quatro causas: datas fixas digitadas à mão, tarefas sem nenhuma ligação, folga inflada dentro das durações ou esperas escondidas em retardos em vez de tarefas visíveis. Qualquer uma delas quebra o cálculo sem gerar aviso.'],
  ],
  related: [['gantt-chart-dependencies', 'Os quatro tipos de precedência'], ['what-is-a-gantt-chart', 'O que é um gráfico de Gantt?'], ['gantt-baseline-variance', 'Linha de base e desvios']],
},

'gantt-chart-dependencies': {
  h1: 'Precedências no gráfico de Gantt: os quatro tipos explicados',
  metaTitle: 'Precedências no gráfico de Gantt',
  metaDesc: 'Término-Início, Início-Início, Término-Término e Início-Término explicados com exemplo real, mais antecipação, retardo, folga total e folga livre.',
  date: '2026-07-19',
  lead: 'Quatro tipos de ligação dão conta de qualquer precedência que se possa desenhar num gráfico de Gantt. Um deles resolve uns noventa por cento do trabalho; os outros três existem justamente para os casos que ele resolve mal. Aqui está o que cada um significa, aplicado a um projeto real do começo ao fim, mais as duas coisas que quase toda explicação deixa de fora: a diferença entre retardo e antecipação, e a diferença entre folga total e folga livre.',
  figIntro: 'Os quatro tipos de precedência, mostrados como se comportam no cronograma:',
  sections: [
    ['O projeto que vamos usar do início ao fim', `<p>Diagrama de precedência é fácil de entender e difícil de aplicar. Para evitar a explicação no vácuo, todos os tipos abaixo serão aplicados ao mesmo projeto: a ampliação de um centro de distribuição, com datas em dias úteis e números que fecham.</p>
        <div class="worked">
          <p><strong>Ampliação do CD da Zanetti Logística em Extrema (MG). Seis tarefas, dias úteis, junho e julho de 2026. Responsável técnica: engenheira Camila Nakagawa, com ART registrada no CREA-MG.</strong></p>
          <table>
            <thead><tr><th>#</th><th>Tarefa</th><th>Início</th><th>Fim</th><th>Dias</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Executar fundações e blocos</td><td>seg 08/06</td><td>sex 19/06</td><td>10</td></tr>
              <tr><td>2</td><td>Concretar o piso industrial</td><td>seg 22/06</td><td>sex 26/06</td><td>5</td></tr>
              <tr><td>3</td><td>Montar estrutura metálica e cobertura</td><td>seg 06/07</td><td>sex 17/07</td><td>10</td></tr>
              <tr><td>4</td><td>Instalar a rede de combate a incêndio</td><td>seg 22/06</td><td>sex 17/07</td><td>20</td></tr>
              <tr><td>5</td><td>Treinar a operação no novo layout</td><td>seg 06/07</td><td>sex 10/07</td><td>5</td></tr>
              <tr><td>6</td><td>Manter o galpão antigo em operação</td><td>seg 08/06</td><td>ter 21/07</td><td>32</td></tr>
            </tbody>
          </table>
          <p>Seis barras, nenhuma ligação. Do jeito que está, o desenho não diz absolutamente nada sobre o que espera o quê — diz apenas quando alguém teve a intenção de fazer cada coisa. É a diferença entre um calendário bonito e um cronograma que reage.</p>
        </div>
        <p>O período foi escolhido sem feriado nacional no meio, para que a conta feche na mão numa semana de cinco dias úteis. Num projeto real você não tem essa sorte: Tiradentes e Corpus Christi entram no calendário e empurram tudo — motivo de sobra para a data de entrega sair de uma cadeia de precedências e não da memória de ninguém.</p>`],
    ['Término-Início (TI) — a que você vai usar quase sempre', `<p>A tarefa B não pode começar antes de a tarefa A terminar. Concretar a fundação, depois subir a estrutura. É a relação que todo mundo tem na cabeça quando diz a palavra dependência.</p>
        <p>No nosso projeto, a tarefa 2 é TI depois da tarefa 1: não se concreta piso sobre bloco que ainda não existe. A tarefa 3 é TI depois da tarefa 2, porque a estrutura metálica é montada sobre o piso — e, como veremos adiante, com um retardo de cura no meio. Essa corrente, 1 para 2 para 3, é a espinha dorsal do projeto: dez dias mais cinco, mais a cura, mais dez, e é ela que fixa o fim em sex 17/07.</p>
        <p>Término-Início é o tipo padrão em qualquer ferramenta de cronograma, e se você está em dúvida sobre qual usar, quase certamente é este. Vontade de usar um tipo exótico costuma ser sintoma de outra coisa: a tarefa foi mal decomposta. Quando uma atividade grande demais precisa de uma ligação criativa para se encaixar, o remédio de verdade é quebrá-la em duas, não sofisticar a ligação.</p>
        <p>Existe um segundo teste, mais duro, que separa precedência de preferência. Pergunte: se a tarefa A terminasse duas semanas antes, a tarefa B poderia começar duas semanas antes? Se a resposta for sim, é precedência. Se for não, o que existe ali é a ordem em que alguém digitou as linhas, e ligar as duas só serve para congelar o cronograma.</p>`],
    ['Início-Início (II) — trabalho que corre junto', `<p>A tarefa B não pode começar antes de a tarefa A começar. A partir daí, as duas correm em paralelo.</p>
        <p>A rede de combate a incêndio, tarefa 4, é II depois da concretagem do piso. O instalador precisa do piso liberado para posicionar equipamento e marcar prumadas, mas esperar a concretagem <em>terminar</em> jogaria fora uma semana inteira de uma tarefa que já é a mais longa do plano. Então as duas arrancam na mesma segunda-feira, 22/06.</p>
        <p>Use Início-Início quando B espera apenas que A comece. O indício é um gatilho comum, não um prazo comum: liberação de frente de serviço, chegada de material, mobilização de equipe. Vale registrar uma limitação que quase ninguém percebe na hora de desenhar. A ligação II observa o <em>início</em> da predecessora e só ele. Se a concretagem do piso atrasar dois dias para começar, a rede de incêndio anda junto. Se a concretagem começar na data e levar o dobro do tempo para terminar, a rede de incêndio não se mexe um milímetro — e nem deveria, porque foi isso que você pediu ao desenhar a ligação. O problema aparece quando a intenção era outra.</p>`],
    ['Término-Término (TT) — trabalho que precisa fechar junto', `<p>A tarefa B não pode terminar antes de a tarefa A terminar.</p>
        <p>A rede de combate a incêndio também tem uma ligação TT com a tarefa 3, a montagem da estrutura e da cobertura. O motivo é físico e contratual ao mesmo tempo: parte dos ramais de sprinkler é fixada na própria estrutura da cobertura, e o teste de estanqueidade que a Vialta Engenharia precisa apresentar para o processo de AVCB no Corpo de Bombeiros só vale com o sistema completo. Ou seja, a rede começa cedo, junto com o piso, mas não pode fechar antes da estrutura. Ela vai até sex 17/07 — aberta pelo piso, fechada pela cobertura. Essa é a assinatura típica de uma atividade de apoio.</p>
        <p>Teste que não pode terminar antes do desenvolvimento, documentação que fecha com a funcionalidade, fiscalização que envolve toda a obra, comissionamento que acompanha a montagem: tudo isso é Término-Término. A tarefa B pode começar quando quiser; ela só não pode cruzar a linha de chegada primeiro.</p>
        <p>Uma consequência prática do TT merece atenção. Como ele não fixa data de início, uma tarefa ligada só por TT parece capaz de começar absurdamente cedo — o cronograma não vai reclamar se alguém arrastar a barra para o começo do projeto. Na maioria dos casos, uma atividade de apoio bem modelada leva duas ligações, e não uma: II com quem a destrava e TT com quem a fecha. É exatamente o par que a tarefa 4 tem.</p>`],
    ['Início-Término (IT) — a rara de verdade', `<p>A tarefa B não pode terminar antes de a tarefa A começar. Lê-se ao contrário, soa errado na primeira leitura, e muito planejador atravessa a carreira inteira sem precisar dela uma vez.</p>
        <p>A tarefa 6 é o caso para o qual ela foi inventada. O galpão antigo precisa continuar operando até que o novo assuma a operação: o <em>fim</em> dele está preso ao <em>início</em> da virada. Ligada como IT ao marco de virada, a barra do galpão antigo se estica sozinha até encostar na data que a virada acabar assumindo, sem depender de alguém lembrar de arrastá-la. É essa a economia que o tipo oferece — não elegância teórica, e sim uma barra que se corrige sem manutenção.</p>
        <p>O teste é sempre o mesmo: existe uma passagem de bastão, em que a coisa que sai termina porque a coisa que entra começa? Turno anterior e turno novo, contrato de locação e mudança, sistema legado e sistema novo, equipe terceirizada e equipe própria. Fora desse formato, reordenar as tarefas quase sempre diz a mesma coisa com um Término-Início comum, que qualquer pessoa lê sem hesitar.</p>`],
    ['Os quatro tipos lado a lado', `<table>
          <thead><tr><th>Tipo</th><th>Gatilho no mundo real</th><th>Com que frequência aparece</th><th>O erro que ele convida</th></tr></thead>
          <tbody>
            <tr><td><strong>TI</strong><br>Término → Início</td><td>A saída de A é a entrada de B — uma lista de pendências, um projeto aprovado, uma laje curada</td><td>Cerca de 90% das ligações</td><td>Usado por preferência e não por restrição, até que toda data esteja presa a algo que nunca foi obrigatório</td></tr>
            <tr><td><strong>II</strong><br>Início → Início</td><td>Duas atividades compartilham um gatilho e depois correm juntas</td><td>Comum; quase todo plano tem algumas</td><td>Reage só ao <em>início</em> da predecessora: se o fim de A escorregar, B não se move</td></tr>
            <tr><td><strong>TT</strong><br>Término → Término</td><td>Uma atividade que envolve outra e não pode fechar antes dela — teste, documentação, comissionamento</td><td>Ocasional, quase sempre em tarefas de apoio</td><td>Deixa o início de B solto, e a barra parece poder começar cedo demais</td></tr>
            <tr><td><strong>IT</strong><br>Início → Término</td><td>Uma passagem de bastão — o turno ou o sistema antigo acaba porque o novo começa</td><td>Rara; muitos planos corretos não têm nenhuma</td><td>Um TI desenhado ao contrário, que quem revisa vai ler errado</td></tr>
          </tbody>
        </table>
        <p>Se você guardar uma linha dessa tabela, guarde a coluna da direita. Nenhum dos quatro tipos é errado em si; o que produz cronograma ruim é usar um tipo cujo modo de reagir não é o que você imaginava. A ligação faz exatamente o que foi pedida, em silêncio, inclusive quando o pedido estava errado.</p>`],
    ['Quando o tipo errado faz o cronograma mentir', `<p>Agora a tarefa 5, o treinamento da operação. O planejador ligou ela como <strong>II depois da tarefa 3</strong>: o treinamento começa quando a montagem da estrutura começa. Parece razoável e o desenho fica bonito — as duas barras arrancam em seg 06/07, a equipe está treinada em sex 10/07, bem antes da virada de ter 21/07.</p>
        <div class="worked">
          <p><strong>Aí a montagem encontra desaprumo nos pilares</strong> e a tarefa 3 cresce de dez para quinze dias úteis, empurrando o fim de sex 17/07 para sex 24/07.</p>
          <ul>
            <li><strong>Tarefa 4 (rede de incêndio, TT)</strong> — se move. O fim acompanha e vai para sex 24/07. Correto: sem cobertura montada não há teste de estanqueidade, e sem teste não há protocolo no Corpo de Bombeiros.</li>
            <li><strong>Marco de virada (TI+1d)</strong> — se move. De ter 21/07 para ter 28/07, mantendo o dia útil livre de seg 27/07 para a transferência de estoque. Correto.</li>
            <li><strong>Tarefa 6 (galpão antigo, IT)</strong> — se estica até ter 28/07 sozinha. Correto, e é para isso que o IT existe.</li>
            <li><strong>Tarefa 5 (treinamento, II)</strong> — <em>não se move nem um dia.</em> A ligação II observa o início da predecessora, e o início não mudou. O plano continua mostrando a equipe treinada em sex 10/07.</li>
          </ul>
          <p>O gráfico não está quebrado. Ele está respondendo com precisão à pergunta que lhe fizeram. Só que a operação passou a ser treinada num galpão que ainda vai levar duas semanas para ficar de pé, o treinamento vira uma apresentação de slides sobre um layout que ninguém pode percorrer, e o relatório de status marca essa tarefa como verde. A ligação certa era <strong>TI depois da tarefa 3</strong>. Uma letra errada transformou um problema de duas semanas em problema nenhum — no papel.</p>
          <p>O custo dá para estimar. Treinar 22 operadores fora de hora, de novo, na semana da virada, com hora extra e um instrutor externo, ficou orçado em R$ 18.400 no aditivo. Nada disso apareceu no cronograma antes de acontecer, porque a barra que deveria ter se mexido estava presa ao lugar errado.</p>
        </div>
        <p>Existe um teste barato para isso e ele leva cinco minutos. Pegue a tarefa com maior chance de estourar, aumente a duração dela em uma semana e veja o que andou. Tudo que você esperava que se movesse e não se moveu é uma ligação de tipo errado, encontrada enquanto ainda é de graça consertar. Depois desfaça a alteração e siga a vida.</p>`],
    ['Retardo e antecipação — retardo não é folga', `<p>Um <strong>retardo</strong> acrescenta tempo de espera dentro da ligação. TI mais três dias significa que B começa três dias depois de A terminar. No nosso projeto o retardo mais importante é a cura do concreto: a tarefa 3 é TI depois da tarefa 2 com sete dias corridos de cura antes de liberar o piso para carga de montagem. A concretagem termina em sex 26/06; a cura corre até sex 03/07; a montagem começa no primeiro dia útil seguinte, seg 06/07. Como o campo de retardo trabalha em dias úteis, o número digitado é 5.</p>
        <!--FIG:lag|Retardo é espera já comprometida dentro da ligação, não espaço sobrando em volta dela.-->
        <p>E aqui está a coisa que quase todo mundo entende errado: <strong>retardo não é folga.</strong> Folga é espaço que você pode gastar quando algo escorrega. Retardo é tempo já comprometido — concreto curando, tinta secando, prazo de análise da prefeitura, janela contratual de revisão. Ninguém consegue gastar um retardo quando está atrasado; o concreto vai curar exatamente os mesmos sete dias, com ou sem pressão do cliente. Encher as ligações de retardo porque a tarefa talvez estoure cria uma reserva que ninguém encontra e ninguém consegue cortar quando precisa negociar prazo.</p>
        <p>Há ainda uma escolha de modelagem por trás do exemplo. Cura de concreto, secagem, quarentena de material e prazo de análise em órgão público cabem em duas formas: escondidos num retardo, ou visíveis como tarefa própria na barra. Se a espera é curta e ninguém precisa gerenciá-la, o retardo resolve. Se ela é longa, tem responsável ou pode ser negociada — sete dias de cura que viram três com aditivo, trinta dias de análise que a prefeitura às vezes devolve em quarenta e cinco —, ela merece uma barra. O que está na barra todo mundo vê na reunião; o que está dentro da caixa de diálogo ninguém abre.</p>
        <p>Uma <strong>antecipação</strong> é o retardo negativo: TI menos dois dias faz B invadir o final de A. Antecipações comprimem cronograma — é isso que se chama fast-tracking, e o termo em inglês continua sendo o usado no mercado — mas compram tempo pagando com risco. Sobreposição que ninguém raciocinou é fila de retrabalho: B está sendo construído sobre um A inacabado, e quando A muda, B refaz. Antecipação boa é aquela em que você sabe dizer qual parte de A já está congelada.</p>
        <p>As duas se escrevem na mesma notação, do tipo <code>3FS+2d</code> — linha 3, término-início, dois dias de retardo. Vale um aviso: mesmo com a interface em português, a notação usa as siglas em inglês <code>FS</code>, <code>SS</code>, <code>FF</code> e <code>SF</code>, que correspondem a TI, II, TT e IT nessa ordem. É a convenção que veio das ferramentas americanas e ficou.</p>`],
    ['Folga total e folga livre não são o mesmo número', `<p>Com as ligações no lugar, cada tarefa passa a ter folga: quanto ela pode atrasar antes de machucar alguma coisa. Só que existem dois tipos de folga, e confundir os dois sai caro.</p>
        <!--FIG:float|A folga total pertence à cadeia. A folga livre pertence à tarefa.-->
        <p><strong>Folga total</strong> é quanto a tarefa pode atrasar antes de mover o fim do projeto. <strong>Folga livre</strong> é quanto ela pode atrasar antes de mover a sucessora imediata. A folga livre nunca é maior que a total, e é justamente na diferença entre as duas que mora o problema.</p>
        <p>O treinamento tem folga. Ele termina em sex 10/07 e só precisa estar pronto antes da virada de ter 21/07, então cabem seis dias úteis de atraso — 13, 14, 15, 16, 17 e 20 de julho — antes de a virada ser afetada. Seis dias de folga total parecem um convite: dá para adiar o treinamento uma semana e usar a equipe em outra frente.</p>
        <p>O problema é que folga total é <em>compartilhada</em>. Se três tarefas em sequência mostram seis dias cada uma, não existem dezoito dias entre elas: existem seis, e a primeira que gastar deixa as outras duas em zero. Um coordenador que lê só esse número e atrasa uma semana gastou sozinho uma reserva que pertencia à cadeia inteira, e a próxima pessoa a olhar o cronograma vai encontrar tarefas críticas que ontem não eram. A folga livre é a única que se pode prometer com segurança a quem executa a tarefa, porque ela é mesmo daquela tarefa.</p>
        <!--FIG:cpm|Folga total zero é a definição de crítico: cada dia de atraso empurra a data de entrega.-->
        <p>Folga total igual a zero é a definição de caminho crítico. Marque <strong>Caminho crítico</strong> no gantts.app e essa corrente aparece listrada — a legenda diz literalmente listrado = caminho crítico. No nosso projeto ela passa por fundações, piso, cura, estrutura e virada. É ali que os tipos de ligação precisam estar certos, porque é essa cadeia que define a data de entrega, o pedido de habite-se na prefeitura e, no caso da Zanetti, a multa por dia de atraso na desocupação do galpão alugado.</p>`],
    ['Criar e editar uma precedência no gantts.app', `<ol>
          <li><strong>Arraste de barra para barra.</strong> Pegue o pontinho na borda de uma barra, arraste até a barra que deve esperar e solte. A ligação nasce como Término-Início com retardo zero.</li>
          <li><strong>Mude o tipo.</strong> Clique na seta entre as duas barras. O editor de ligação abre com a escolha entre os quatro tipos — TI, II, TT e IT.</li>
          <li><strong>Acrescente um retardo.</strong> No mesmo editor, informe o retardo em dias: 5 para a cura do concreto do exemplo, ou um número negativo para uma antecipação. Ctrl+Z desfaz qualquer um dos dois.</li>
          <li><strong>Ou digite direto na tabela.</strong> A coluna <strong>Depois de</strong> aceita as predecessoras pelo número da linha: <code>3</code>, <code>2SS</code>, <code>3FF</code>, <code>3FS+2d</code>, separadas por vírgula. É de longe o caminho mais rápido para ligar um plano inteiro que você acabou de colar.</li>
          <li><strong>Ou use a gaveta da tarefa.</strong> Dê duplo clique na linha e abra <strong>Depois de (predecessoras)</strong>. Ali também ficam <strong>Início</strong>, <strong>Fim</strong>, <strong>Duração</strong>, <strong>Responsável</strong> e <strong>Notas</strong> — bom lugar para registrar por que aquela ligação existe.</li>
          <li><strong>Remova uma ligação.</strong> Pelo editor de ligação ou pelo ✕ na gaveta. Aparece o aviso <em>Dependência removida</em>, e Ctrl+Z traz de volta.</li>
          <li><strong>Ou monte tudo colando texto.</strong> Em <strong>✨ Colar no Gantt</strong>, uma linha terminada em <code>!</code> vira marco, <code>(10d)</code> define a duração, <code>after Nome</code> cria a predecessora e <code>#</code> no começo abre uma fase. A palavra <code>after</code> é sintaxe literal e continua em inglês mesmo na interface em português.</li>
          <li><strong>Confira o resultado.</strong> Ligue <strong>Caminho crítico</strong> para ver a cadeia listrada, <strong>Fins de semana</strong> para conferir onde as durações caem e <strong>Linha de base</strong> depois de congelar o plano aprovado.</li>
        </ol>
        <p>Um comportamento que vale conhecer antes de estranhar: <strong>acrescentar uma precedência aqui só empurra a tarefa para depois, nunca puxa para antes.</strong> O cálculo é as-placed, ou seja, parte de onde a barra foi colocada: a tarefa começa na mais tardia entre a data onde você a arrastou e a data que as predecessoras permitem. Ligue uma tarefa cuja barra já esteja bem depois da predecessora e nada se move; o vão continua ali. Isso é intencional. Uma barra que você posicionou de propósito — porque a equipe só está disponível naquela semana, porque o caminhão da estrutura só chega no dia 6 — não deve ser sugada para trás por uma ligação que você criou para efeito de relatório.</p>
        <p>Quando quiser mesmo compactar, use <strong>Reprogramar</strong>. Ele ignora onde as tarefas dependentes estão e puxa cada uma para a data mais cedo que as predecessoras permitem, deixando as tarefas sem ligação como âncoras. É a ferramenta certa para responder à pergunta clássica de reunião de obra: se tudo correr no limite do possível, qual é a data mais cedo de virada? Rode, olhe, e desfaça se a resposta era só informativa.</p>
        <p>Duas notas finais para quem exporta. O <strong>⬇ Exportar</strong> gera <strong>🧜 Mermaid gantt (texto)</strong> com a marcação <code>crit</code> nas tarefas críticas, mas essa marcação é só de saída: ao importar, a criticidade é sempre recalculada a partir das ligações, nunca lida de um rótulo. E o módulo de valor agregado não deduz custo realizado a partir do percentual de progresso; se você não preencher <strong>Orçamento</strong> e <strong>Gasto</strong> na gaveta, ele cai para a ponderação por duração — útil como tendência, mas não é dinheiro.</p>`],
  ],
  callout: 'Uma precedência deve descrever uma restrição real, não uma preferência. "Preferimos fazer B depois de A" é escolha de sequenciamento e pertence à ordem das linhas. "B não pode começar enquanto A não terminar" é precedência. Cronograma cheio do primeiro caso não pode ser replanejado: cada data está presa a algo que nunca foi obrigatório, e ninguém consegue distinguir quais ligações realmente sustentam a estrutura.',
  faq: [
    ['Quais são os quatro tipos de precedência num gráfico de Gantt?', 'Término-Início (TI), Início-Início (II), Término-Término (TT) e Início-Término (IT). O Término-Início cobre a grande maioria das relações reais; o Início-Término é raro, e muitos cronogramas corretos não têm nenhum. Na notação de texto as siglas aparecem em inglês: FS, SS, FF e SF, nessa ordem.'],
    ['Qual a diferença entre antecipação e retardo?', 'Retardo é tempo de espera acrescentado à ligação: TI mais três dias faz a sucessora começar três dias depois do término da predecessora, como nos sete dias de cura do concreto. Antecipação é o retardo negativo, sobrepondo as duas tarefas. Retardo é tempo já comprometido, não reserva: você não consegue gastá-lo quando está atrasado.'],
    ['Qual a diferença entre folga total e folga livre?', 'Folga total é quanto a tarefa pode atrasar antes de mover o fim do projeto; folga livre é quanto ela pode atrasar antes de mover a sucessora imediata. A folga total é compartilhada ao longo da cadeia — três tarefas mostrando seis dias cada uma não somam dezoito dias entre si, são os mesmos seis.'],
    ['Qual tipo devo usar por padrão?', 'Término-Início. Se outro tipo parece necessário, verifique antes se as tarefas estão bem decompostas: ligação exótica costuma ser sintoma de uma atividade grande demais, que deveria ter sido dividida em duas com um marco no meio.'],
    ['O que acontece com minhas datas quando eu crio uma precedência no gantts.app?', 'A precedência só empurra a tarefa para depois, nunca puxa para antes: ela começa na data mais tardia entre onde você a posicionou e onde as predecessoras permitem. Se quiser compactar o plano até as datas mais cedo possíveis, use Reprogramar, que trata as tarefas sem ligação como âncoras.'],
    ['Como faço para criar precedências no gantts.app?', 'Arraste do pontinho na borda de uma barra até outra barra, ou digite na coluna Depois de uma notação como 3FS+2d. Clique na seta entre as barras para mudar o tipo ou o retardo, e use Depois de (predecessoras) na gaveta da tarefa para revisar tudo de uma vez. O aviso Dependência removida confirma quando uma ligação é apagada.'],
  ],
  related: [['critical-path-method', 'O caminho crítico'], ['what-is-a-gantt-chart', 'O que é um gráfico de Gantt?'], ['gantt-chart-mistakes', 'Erros comuns de cronograma']],
},

'gantt-chart-examples': {
  h1: 'Exemplos de gráfico de Gantt em oito setores',
  metaTitle: 'Exemplos de gráfico de Gantt',
  metaDesc: 'Oito exemplos de gráfico de Gantt: obra, software, marketing, evento, mudança, tese, lançamento e integração de pessoal.',
  date: '2026-07-19',
  lead: 'Um <strong>gráfico de Gantt</strong> muda de aparência conforme o setor — não pela forma, mas pelo agrupamento. Oito exemplos, com as fases realmente usadas, a escala de tempo adequada e a tarefa que costuma aparecer no caminho crítico.',
  figIntro: 'A mesma representação, oito agrupamentos bem diferentes:',
  sections: [
    ['Obra', `<p>Fases: projeto e licenças, terraplenagem, estrutura, cobertura e vedação, acabamentos, instalações, entrega. Escala semanal, horizonte de 8 a 24 meses, tipicamente de 40 a 80 tarefas.</p>
        <p>O caminho crítico passa quase sempre pelo licenciamento, não pela construção. Aprovação de projeto na prefeitura e alvará levam de 30 a 120 dias e não aceleram com mais gente na obra — são as duas barras que decidem a entrega, e são exatamente as que costumam entrar no cronograma como "15 dias" por otimismo.</p>
        <p>Particularidades que se repetem: cura de concreto entra como tarefa visível de 7 a 28 dias, nunca escondida num retardo; tarefas sensíveis a chuva pedem folga explícita, e num cronograma que atravessa o verão do Sudeste isso significa reserva concreta em janeiro e fevereiro; acabamento só começa com a obra fechada, o que faz de "obra fechada" um marco obrigatório. Marcos típicos: alvará emitido, fundação concluída, obra fechada, habite-se.</p>`],
    ['Desenvolvimento de software', `<p>Fases: requisitos, arquitetura, desenvolvimento em iterações, integração, homologação, migração de dados, produção. Escala semanal ou quinzenal, horizonte de 3 a 9 meses, de 25 a 50 tarefas.</p>
        <p>A altitude é o que decide se esse cronograma serve. Uma sprint de duas semanas é <em>uma</em> barra com um marco de revisão no fim, não trinta barras de história — o detalhe fino vive no rastreador de tarefas, e duplicá-lo no Gantt garante que os dois fiquem desatualizados. O Gantt aqui existe para quem está fora do backlog: patrocinador, cliente, áreas que precisam se preparar para a virada.</p>
        <p>A armadilha é a homologação: planejada como uma barra curta no fim, leva o dobro. Teste e correção formam um ciclo, não uma linha reta, e é mais honesto modelar duas ou três rodadas de "testar e corrigir" do que uma barra única de UAT. Marcos: escopo congelado, integração concluída, aceite do cliente, entrada em produção.</p>`],
    ['Campanha de marketing', `<p>Fases: estratégia, criação, produção, aprovações, veiculação, análise. Escala diária ou semanal, horizonte de 6 a 12 semanas, de 20 a 40 tarefas — o cronograma mais curto e mais paralelo dos oito.</p>
        <p>Várias trilhas correm ao mesmo tempo: conteúdo, design, mídia paga, e-mail e páginas de destino avançam lado a lado e só se encontram na data de veiculação. Agrupar por trilha, e não por ordem cronológica, é o que mantém o desenho legível quando dez barras ocupam a mesma semana.</p>
        <p>O gargalo são as aprovações. Entre a peça pronta e a publicação passam-se duas semanas com frequência — jurídico, marca, cliente — e ninguém planeja isso. A correção é simples e quase nunca feita: cada rodada de aprovação vira uma tarefa própria, com duração realista e um responsável nomeado. Marcos: conceito aprovado, peças finalizadas, campanha no ar, relatório de resultados.</p>`],
    ['Evento', `<p>Fases: conceito, local, fornecedores, programação, inscrições, montagem, realização, desmontagem. Escala semanal virando diária no último mês, horizonte de 3 a 9 meses.</p>
        <p>A data é fixa, então se planeja de trás para frente: parte-se do dia do evento e cada tarefa recebe o prazo que a cadeia de precedências impõe. Esse cálculo reverso é o valor central aqui, porque revela na primeira hora se ainda há pista — se ao voltar do dia do evento a tarefa "fechar contrato do local" cai numa data já passada, o problema é estrutural, não de execução.</p>
        <p>O local é a primeira e mais determinante restrição: ele define capacidade, orçamento, fornecedores possíveis e o próprio formato. Contrato de local costuma ser a primeira barra do caminho crítico. Marcos: contrato assinado, inscrições abertas, programação fechada, dia do evento como marco de prazo rígido.</p>`],
    ['Mudança de escritório', `<p>Fases: busca do imóvel, contrato, projeto de layout, obra, infraestrutura de TI, mudança no fim de semana, ajustes. Escala semanal, horizonte de 4 a 9 meses.</p>
        <p>Quem define a data é a TI, não o mobiliário: link dedicado e cabeamento estruturado têm prazos de contratação e instalação de 60 a 120 dias, e nenhum deles encurta com urgência. Móveis chegam em quatro semanas; internet, não. Cronogramas de mudança que falham quase sempre falharam por terem tratado a TI como detalhe final.</p>
        <p>A mudança física em si é curta e brutal: um fim de semana, com hora marcada, sem margem. Isso faz dela um bloco de duração fixa ao qual tudo mais precisa chegar pronto — e o cronograma existe basicamente para garantir que chegue. Marcos: contrato de locação assinado, obra entregue, link ativo e testado, primeiro dia de operação no novo endereço.</p>`],
    ['Tese acadêmica', `<p>Fases: projeto de pesquisa, revisão de literatura, método, coleta, análise, redação, correções, defesa. Escala mensal, horizonte de 12 a 48 meses, poucas tarefas e muitos marcos.</p>
        <p>Corre por anos, então precisa de marcos a cada seis ou oito semanas — sem eles, o atraso passa despercebido até ficar grande demais para recuperar. É o caso em que a densidade de marcos importa mais do que a densidade de tarefas.</p>
        <p>Duas barras são subestimadas de forma sistemática: aprovação no comitê de ética, que trava a coleta e leva de 30 a 90 dias, e as rodadas de revisão do orientador, que raramente cabem numa semana. Ambas pertencem ao caminho crítico e ambas dependem de terceiros. Marcos: projeto aprovado, ética aprovada, coleta concluída, primeira versão completa, entrega, defesa.</p>`],
    ['Lançamento de produto', `<p>Fases: pesquisa de mercado, desenvolvimento, embalagem e homologações, preparação comercial, campanha, lançamento, avaliação. Escala semanal, horizonte de 6 a 18 meses.</p>
        <p>Homologações e certificações caem no caminho crítico com frequência e são quase sempre subestimadas: registros sanitários, certificações técnicas e homologações de órgão regulador têm prazos de meses e dependem de fila alheia. Uma barra de "certificação: 3 semanas" num cronograma de lançamento é quase sempre um erro de estimativa, não uma aposta.</p>
        <p>O outro traço marcante são as precedências cruzadas entre áreas: treinamento comercial depende de material pronto, que depende de preço definido, que depende de custo final, que depende do fornecedor escolhido. Uma decisão isolada de compras empurra o treinamento comercial três semanas — e é isso que o Gantt torna visível antes de acontecer. Marcos: escopo congelado, certificação obtida, equipe treinada, lançamento, revisão de 30 dias.</p>`],
    ['Integração de novo colaborador', `<p>Fases: preparação antes do primeiro dia, primeira semana, primeiro mês, primeiros 90 dias. Escala diária na primeira semana e semanal depois, tipicamente de 15 a 25 tarefas.</p>
        <p>Cronograma curto, mas de alto impacto e altamente repetível: equipamento, contas de acesso, crachá e estação de trabalho precisam estar prontos <em>antes</em> do primeiro dia, não durante. A cadeia de TI costuma levar de 5 a 10 dias úteis, então a barra de preparação começa duas semanas antes da data de entrada — e é a única do plano que corre em data negativa em relação ao dia um.</p>
        <p>Por ser repetível, é o caso em que copiar o cronograma anterior funciona de verdade: as fases, as durações e os responsáveis são praticamente os mesmos a cada contratação. Marcos: acessos liberados, primeiro dia, fim do primeiro mês, avaliação de 90 dias.</p>`],
    ['Quatro exemplos rápidos a mais', `<ul>
          <li><strong>Produção industrial</strong> — sourcing, ferramental, produção, qualidade e expedição; cada etapa é travada pela anterior e os marcos marcam primeira peça aprovada e embarque.</li>
          <li><strong>Consultoria</strong> — diagnóstico, análise, recomendações e entrega, com marcos de revisão com o cliente entre as fases e data final contratual.</li>
          <li><strong>Implantação de sistema</strong> — levantamento, parametrização, carga de dados, treinamento e virada, com a carga de dados quase sempre no caminho crítico.</li>
          <li><strong>Projeto com verba pública ou de edital</strong> — fases longas, ditadas por prazos de prestação de contas e relatórios que se comportam como precedências rígidas.</li>
        </ul>
        <p>Repare como as escalas diferem: uma obra ocupa meses num eixo semanal, um lançamento ocupa semanas num eixo diário e um plano semanal desce até horas. A representação absorve todos; o que muda é a unidade de tempo e a densidade, não a ideia.</p>`],
    ['O que todos têm em comum', `<p>Quatro a oito fases, de 20 a 60 tarefas, cinco a dez marcos. O setor muda o conteúdo, não a estrutura. E os bons exemplos compartilham cinco traços:</p>
        <ul>
          <li><strong>Fases claras.</strong> O cronograma se lê como uma sequência de etapas, não como uma parede de barras.</li>
          <li><strong>Precedências reais.</strong> Só o que de fato espera está ligado, para que um atraso desça pela cadeia sem propagar ficção.</li>
          <li><strong>Marcos visíveis.</strong> Aprovações, entregas e datas rígidas aparecem como pontos, não diluídas em tarefas.</li>
          <li><strong>Caminho crítico destacado.</strong> Sabe-se quais tarefas comandam a entrega, e portanto quais proteger.</li>
          <li><strong>Densidade legível.</strong> De 10 a 30 barras por tela; o resto recolhido em resumos de fase.</li>
        </ul>
        <p>Igualmente importante é o que fica de fora. Um gráfico de Gantt é instrumento de comunicação, não banco de dados de tarefas: subtarefas de meio dia, checklists e itens de controle pertencem a outro lugar. Cada linha acrescentada custa legibilidade, e legibilidade é o que faz alguém abrir o arquivo na semana seguinte.</p>`],
    ['Por onde começar', `<p>Parta do exemplo mais próximo em vez de uma página em branco — mas copie o agrupamento em fases, não os números. Nossos <a href="/pt/templates.html">modelos</a> cobrem os oito casos e abrem direto no navegador, com as fases e os marcos já montados.</p>
        <p>Depois de escolher a base, o trabalho é sempre o mesmo: substituir as tarefas pelas do seu projeto, reestimar cada duração e refazer as precedências. Se você nunca montou um do zero, o <a href="/pt/blog/how-to-make-a-gantt-chart.html">passo a passo em sete etapas</a> cobre a ordem correta, e <a href="/pt/blog/what-is-a-gantt-chart.html">o que é um gráfico de Gantt</a> explica os elementos usados aqui.</p>`],
  ],
  callout: 'Copie o agrupamento em fases, não as durações. As fases de um setor são estáveis entre projetos; as durações nunca são. Um cronograma herdado de outro projeto é a causa mais comum de um plano errado desde o primeiro dia.',
  faq: [
    ['Como é um bom gráfico de Gantt?', 'Quatro a oito fases, de 20 a 60 tarefas, cinco a dez marcos e precedências reais, com o caminho crítico destacado. Cabe em uma página, mostra entre 10 e 30 barras por tela e se explica em um minuto para quem nunca viu o projeto.'],
    ['Quais são os exemplos mais comuns de gráfico de Gantt?', 'Obra, desenvolvimento de software, campanha de marketing, evento, mudança de escritório, tese acadêmica, lançamento de produto e integração de novo colaborador. A estrutura é a mesma em todos; mudam as fases, a escala de tempo e quais tarefas caem no caminho crítico.'],
    ['A partir de quantas tarefas é demais?', 'Acima de 150 ninguém mantém, e cronograma desatualizado é pior do que nenhum. Nesse ponto, divida em cronogramas menores por fase e mantenha um cronograma-mestre só com as tarefas resumo, para que a visão geral continue cabendo em uma tela.'],
    ['Posso aproveitar o cronograma de outro projeto?', 'O agrupamento sim, as durações não. Fases e marcos se transferem bem porque descrevem como o setor trabalha; estimativas dependem de equipe, escopo e fornecedores específicos daquele projeto. Reaproveitar durações é a causa mais frequente de um plano errado desde o primeiro dia.'],
    ['Qual escala de tempo usar?', 'Depende do horizonte. Projetos de mais de seis meses ficam legíveis num eixo semanal ou mensal; campanhas e lançamentos de poucas semanas pedem eixo diário; planos de uma semana descem a horas. Se as barras ficam finas demais para ler o rótulo, a escala está errada.'],
    ['Onde encontro modelos gratuitos e editáveis?', 'Nossos modelos cobrem obra, software, marketing, eventos e mais, abrem direto no navegador sem cadastro e podem ser exportados em PDF, PNG, XLSX ou PPTX. Substitua as tarefas de exemplo pelas suas, reestime as durações e refaça as precedências.'],
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
  metaDesc: 'O que é linha de base, como ler os desvios de prazo, quando refazer a linha de base e quais indicadores realmente ajudam no acompanhamento.',
  date: '2026-07-19',
  lead: 'Um gráfico de Gantt mostra onde o projeto está. A linha de base mostra onde ele deveria estar. Sem ela você consegue informar avanço, mas não atraso — e atraso é justamente o que interessa a quem paga a conta, assina a medição ou responde pela obra.',
  figIntro: 'A linha de base aparece como uma barra fantasma, mais fina, embaixo da tarefa ativa. Onde a barra atual passa da barra fantasma, aquela distância é o seu desvio:',
  sections: [
    ['O que é, de fato, uma linha de base', `<p>Linha de base é uma cópia congelada do cronograma tirada no momento em que todos concordaram que ele estava certo — normalmente na aprovação do plano. Ela guarda o início previsto, o término previsto e o avanço de cada tarefa, e a partir dali para de mudar.</p>
        <p>Essa última parte é o ponto inteiro. Sem linha de base, editar o plano no lugar reescreve a história em silêncio: toda semana parece estar em dia, porque a referência anda junto com a realidade. As datas escorregam um dia de cada vez, e um cronograma que absorveu trinta ajustes de um dia fica visualmente idêntico a outro que nunca se moveu. A linha de base é o que faz essas edições virarem um número.</p>
        <p>Há um efeito colateral cultural, e ele é maior do que o técnico. Quando existe uma referência estável, a conversa da reunião muda de qualidade. Ninguém precisa lembrar de cabeça o que foi combinado em março, nem confiar na memória seletiva de quem apresenta. A pergunta deixa de ser "está indo bem?" e passa a ser "quantos dias, em qual tarefa, e por quê?" — que é uma pergunta respondível.</p>`],
    ['Quando congelar — e quando não congelar', `<p>Defina a linha de base <strong>depois</strong> de o plano ser acordado e <strong>antes</strong> de o trabalho começar. Uma linha de base capturada com a obra rodando há três semanas embute todo o atraso que já aconteceu e passa a subestimar o desvio real de forma permanente.</p>
        <p>E não congele um plano que você sabe que está errado só para ter uma linha de base. Um cronograma fictício produz números precisos, confiantes e sem significado nenhum — o que é pior do que não ter número, porque gente séria toma decisão em cima deles. Se ainda há tarefas com datas de espaço reservado, com duração chutada para fechar a soma ou com precedências que ninguém validou com quem executa, resolva isso primeiro. Meia hora revisando o plano com o mestre de obras ou com o líder técnico vale mais do que um trimestre de relatórios bem formatados.</p>
        <p>Em contrato público sob a Lei 14.133/2021 o momento costuma ser óbvio: a linha de base é o cronograma físico-financeiro anexo ao contrato, e é contra ele que as medições mensais são conferidas. Em obra privada o marco natural é a emissão da ordem de serviço.</p>`],
    ['Exemplo prático: uma obra em três medições', `<p>Reforma e ampliação de uma unidade básica de saúde, contratada pela prefeitura junto à Construtora Serra Azul. O cronograma físico-financeiro foi aprovado na sexta, 27/02/2026, e a linha de base foi definida na segunda, 02/03, antes de qualquer frente entrar em campo. Cinco linhas, todas término-início, todas no caminho crítico. Semana de cinco dias úteis, sem feriados no período considerado.</p>
        <div class="worked">
          <p><strong>Linha de base, definida em 02/03/2026</strong></p>
          <ul>
            <li>Projeto executivo e ART no CREA — 02/03 a 13/03 (10 dias úteis) — R$ 120.000,00</li>
            <li>Demolição e estrutura — 16/03 a 03/04 (15 dias) — R$ 420.000,00</li>
            <li>Instalações e acabamentos — 06/04 a 15/05 (30 dias) — R$ 760.000,00</li>
            <li>Ensaios e vistoria do Corpo de Bombeiros (AVCB) — 18/05 a 29/05 (10 dias) — R$ 150.000,00</li>
            <li>Entrega e habite-se — 01/06 (marco)</li>
          </ul>
          <p>Orçamento no término (BAC): <strong>R$ 1.450.000,00</strong>.</p>

          <p><strong>Medição 1 — sexta, 20/03</strong></p>
          <p>A ART saiu no prazo, mas a análise do projeto executivo na prefeitura levou quatro dias úteis a mais do que o previsto. O projeto encerrou em 19/03 em vez de 13/03: <strong>desvio de término +4 dias</strong>. A demolição começou em 20/03 — <strong>desvio de início +4 dias</strong> — e, com a estimativa de 15 dias mantida, o término projetado vai para 09/04, também +4. Toda a cadeia à jusante carrega os mesmos +4, e a entrega passa a ler 05/06.</p>
          <p>Leia isso pelo que é: um problema de <em>início</em>, herdado de uma análise externa, e não um erro de estimativa da equipe. São conversas diferentes, com pessoas diferentes.</p>

          <p><strong>Medição 2 — sexta, 10/04</strong></p>
          <p>A demolição e a estrutura encerraram em 09/04, exatamente como projetado: desvio de término +4, desvio de duração 0. As instalações começaram em 10/04, desvio de início +4. Só que o fornecedor de esquadrias de alumínio confirmou atraso de entrega, e a frente foi reestimada de 30 para 37 dias úteis, jogando o término de 15/05 para 01/06: <strong>desvio de término +11 dias</strong> — sendo <strong>4 herdados</strong> e <strong>7 de desvio de duração</strong>, que é a notícia ruim genuinamente nova.</p>
          <p>Essa separação é a razão de se acompanhar início e término em colunas distintas. Dizer "as instalações estão 11 dias atrasadas" leva a reunião para o lugar errado. Dizer "herdaram 4 e cresceram 7 por causa do fornecedor" aponta para uma decisão de suprimentos que ainda dá tempo de tomar.</p>

          <p><strong>Medição 3 — sexta, 01/05</strong></p>
          <p>As instalações estão com 52% de avanço contra 67% previstos pela linha de base — ou seja, a própria reestimativa de 37 dias já nasceu otimista. Em vez de deixar a entrega escorregar de novo, a construtora comprime a frente de ensaios: contrata uma segunda equipe de laboratório e protocola a vistoria do Corpo de Bombeiros com antecedência, reduzindo a fase de 10 para 6 dias úteis. Os ensaios passam a mostrar <strong>desvio de duração −4 dias</strong> e <strong>desvio de término +7 dias</strong>. A entrega cai em 10/06.</p>
          <p>Repare no que aquele desvio de duração negativo <em>não</em> significa. Nada ficou mais rápido. Quatro dias foram comprados com o tempo de mais gente, e uma coluna que mede apenas dias não tem como mostrar isso.</p>

          <p><strong>Os números de valor agregado na data de status (01/05)</strong></p>
          <ul>
            <li>Valor agregado (EV) — projeto 100%, estrutura 100%, instalações 52%: R$ 935.200,00</li>
            <li>Valor planejado (PV), pela linha de base — instalações com 20 dos 30 dias úteis decorridos: R$ 1.046.666,67</li>
            <li>Variação de prazo (SV) = EV − PV = <strong>−R$ 111.466,67</strong>; desempenho de prazo (SPI) = 0,89</li>
            <li>Custo real (AC), lançado tarefa a tarefa no campo Gasto: R$ 132.000,00 + R$ 445.000,00 + R$ 430.000,00 = R$ 1.007.000,00</li>
            <li>Variação de custo (CV) = EV − AC = <strong>−R$ 71.800,00</strong>; desempenho de custo (CPI) = 0,93</li>
            <li>Previsão de custo final (EAC) = BAC ÷ CPI ≈ <strong>R$ 1.561.300,00</strong></li>
          </ul>
          <p>Isso é cerca de R$ 111.000,00 acima do orçamento contratado. É exatamente o tipo de número que precisa existir antes da conversa sobre aditivo contratual, e não depois.</p>
        </div>
        <p>O resumo honesto cabe em uma frase: sete dias úteis de atraso na entrega — quatro vindos da análise do projeto executivo, sete acrescentados pelo atraso do fornecedor em abril, quatro recomprados com equipe extra de ensaios; e um CPI de 0,93 que projeta estouro de orçamento.</p>`],
    ['Quatro desvios, e o que cada um esconde', `<p>"Desvio" não é um número só. São quatro que valem acompanhamento, e cada um é cego para algo que outro enxerga.</p>
        <table>
          <thead>
            <tr><th>Desvio</th><th>O que é</th><th>O que só ele revela</th><th>Onde ele engana</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Desvio de início</strong></td>
              <td>Início real menos início da linha de base.</td>
              <td>Se o atraso foi herdado — começar tarde aponta para algo à montante ou para um recurso que não estava livre.</td>
              <td>Nada diz sobre o término. Uma tarefa pode começar cinco dias tarde e ainda assim fechar na data, à custa de hora extra.</td>
            </tr>
            <tr>
              <td><strong>Desvio de término</strong></td>
              <td>Término real ou projetado menos término da linha de base.</td>
              <td>O impacto à jusante. É este o número que se propaga pela rede de precedências.</td>
              <td>Mistura atraso herdado com atraso novo. Os +11 dias das instalações eram 4 herdados e 7 novos: dois problemas em um número.</td>
            </tr>
            <tr>
              <td><strong>Desvio de duração</strong></td>
              <td>Duração real menos duração da linha de base.</td>
              <td>Se a estimativa estava errada — é o desvio de término com a parte herdada removida.</td>
              <td>Fica negativo quando a tarefa é comprimida, e negativo se lê como adiantamento. Os −4 dias dos ensaios custaram uma equipe inteira.</td>
            </tr>
            <tr>
              <td><strong>Desvio de trabalho / custo</strong></td>
              <td>Esforço ou gasto consumido contra o orçado.</td>
              <td>Quanto custou a recuperação. É o único que captura a compressão de prazo.</td>
              <td>Exige apontamento real. Sem gasto informado ele não é um número pequeno — ele simplesmente não existe.</td>
            </tr>
          </tbody>
        </table>
        <p>O desvio de duração é o que a maioria das equipes pula e o único que muda comportamento: é a única medida de prazo que separa "nós atrasamos" de "nós erramos a conta".</p>
        <!--FIG:baseline|As barras fantasma carregam a linha de base; a distância até a barra atual é o desvio.-->`],
    ['Desvio no caminho crítico é o único que pesa muito', `<p>Um escorregão de cinco dias numa tarefa com quinze dias de folga não custa nada. Um dia perdido no caminho crítico move a data de entrega.</p>
        <p>Ordene pelo desvio de término e depois confira quais dessas tarefas são críticas. Essa lista curta é o seu relatório de situação de verdade. Informar quantidade de tarefas atrasadas sem olhar folga é como projetos conseguem estar "80% em dia" e três semanas atrasados ao mesmo tempo.</p>
        <p>A armadilha inversa também é real e menos comentada: uma tarefa fora do caminho crítico com +12 dias de desvio e 14 dias de folga está tranquila hoje e crítica amanhã. Vale registrar também como o nosso caminho crítico é calculado: ele é "como posicionado", ou seja, uma precedência só consegue empurrar uma tarefa para frente, nunca puxá-la para trás. Se você arrastou uma barra para uma data mais tarde do que a rede exigiria, nós respeitamos a sua decisão em vez de reescrevê-la.</p>`],
    ['Refazer a linha de base: aditivo aprovado ou apagar o rastro', `<p>Esta é a decisão mais consequente que você vai tomar a respeito de uma linha de base, e quase nunca é uma decisão técnica. Refazer a linha de base zera a comparação: todos os desvios vão a zero e o registro do que foi originalmente prometido deixa de estar visível. Três situações tornam isso a escolha certa:</p>
        <ul>
          <li><strong>Mudança de escopo aprovada.</strong> Alguém com competência para isso acrescentou ou retirou serviço, por escrito — um aditivo contratual, um termo aditivo de prazo, uma alteração de projeto formalizada. Medir contra um plano que já não descreve a obra dá um desvio correto e inútil.</li>
          <li><strong>Replanejamento formal.</strong> Os números pararam de orientar decisão: toda tarefa lê +30 dias e ninguém consegue dizer quais estão piorando.</li>
          <li><strong>Retomada depois de paralisação.</strong> As datas antigas passam a medir a paralisação, não o serviço.</li>
        </ul>
        <p>Todo outro motivo é sempre o mesmo motivo, com roupa diferente: o desvio ficou feio e o relatório vence na quinta. Refazer a linha de base na semana anterior à reunião do comitê é o sinal clássico. No nosso exemplo, resetar em 01/05 faria a entrega ler zero dia de atraso — continuando a acontecer em 10/06.</p>
        <p>O teste é simples e você pode aplicá-lo em voz alta. Se a nova linha de base é legítima, você consegue nomear a decisão, a data e quem aprovou. Se não consegue, você está apagando a evidência de que algo deu errado.</p>
        <p>E quando refizer, guarde a anterior: salve o plano em arquivo antes, porque o arquivo leva a linha de base junto. A distância entre a linha de base 1 e a linha de base 3 costuma ser a descrição mais honesta que existe de um projeto — e é exatamente o que se perde quando a linha de base é sobrescrita no lugar.</p>`],
    ['Onde entra o valor agregado — e o que a nossa curva S de fato informa', `<p>Desvio em dias responde "quão atrasado". Valor agregado responde "quanto trabalho conseguimos depositar pelo tempo e pelo dinheiro que gastamos". E depende da linha de base: sem ela, o valor planejado não tem o que seguir. A nossa curva S é deliberadamente explícita sobre os próprios limites — conheça-os antes de citar os números em ata:</p>
        <ul>
          <li><strong>O valor planejado segue a linha de base salva, se houver uma.</strong> Sem linha de base, o plano são as suas datas atuais, então a variação de prazo lê zero por mais que a obra tenha andado. O painel diz isso na cara, em vez de exibir um zero lisonjeiro.</li>
          <li><strong>O custo real nunca é deduzido do avanço.</strong> Ele vem apenas do que você lançar em Gasto, tarefa a tarefa. O atalho tentador — supor que uma tarefa com 40% de avanço consumiu 40% do orçamento — faria o CPI dar exatamente 1,00 em todo projeto que já existiu. Por isso, sem apontamento real, o CPI, a variação de custo e a previsão de custo final simplesmente não são exibidos.</li>
          <li><strong>Não ter custo é o caso normal.</strong> As tarefas passam então a ser ponderadas pela duração em dias úteis, e o resultado é uma curva de avanço pura — a mesma forma, lida em porcentagem em vez de reais.</li>
          <li><strong>A curva agregada em datas passadas é reconstruída.</strong> Guardamos o avanço como ele está hoje, não o histórico de cada apontamento, então o trecho anterior assume acúmulo uniforme ao longo dos dias úteis decorridos. Exata na data de status, aproximada atrás dela, e rotulada como tal.</li>
        </ul>
        <p>Vale insistir num ponto que confunde muita gente: prazo e custo são eixos independentes. Estar atrasado e abaixo do orçamento é um lugar real, e normalmente significa que a equipe está subdimensionada. Estar no prazo e acima do orçamento também é real, e costuma significar que alguém comprou tempo com hora extra sem avisar ninguém.</p>
        <!--FIG:evmquad|Prazo e custo são eixos independentes: atrasado e abaixo do orçamento é um lugar real.-->`],
    ['Como fazer isso no gantts.app', `<p>O ciclo inteiro leva cerca de um minuto. Usando a reforma da unidade de saúde como exemplo:</p>
        <ol>
          <li>Acerte o plano primeiro. Datas, precedências e durações devem ser aquilo que você quer que seja medido daqui em diante.</li>
          <li>Ative <strong>Linha de base</strong> nas opções de exibição e defina a linha de base a partir do plano atual. Aparece o aviso <em>Linha de base definida — os atrasos passam a ser medidos em relação a este plano</em>.</li>
          <li>As barras fantasma passam a acompanhar cada tarefa. O mesmo controle desliga a exibição quando você quiser um gráfico limpo para apresentação, sem apagar a linha de base.</li>
          <li>Trabalhe o plano. A cada medição, arraste as barras ou ajuste <strong>Início</strong> e <strong>Fim</strong> no painel da tarefa para refletir a realidade — 19/03 no projeto executivo, 09/04 na estrutura.</li>
          <li>Abra <strong>Colunas</strong> e traga as colunas de linha de base e variação para a grade. Você verá a mensagem <em>Mostrando as colunas de linha de base e variação</em>; atraso aparece em vermelho, adiantamento em verde.</li>
          <li>Percorra a coluna de variação de término e cruze com <strong>Caminho crítico</strong> ligado — a legenda <em>listrado = caminho crítico</em> indica quais escorregões movem a entrega. O desvio de duração é a diferença entre a duração da linha de base e o valor atual em <strong>Dias</strong>.</li>
          <li>Preencha <strong>Orçamento</strong> e <strong>Gasto</strong> em cada tarefa e abra <strong>Curva S</strong>. O painel mostra <em>Orçamento no término</em>, <em>Valor planejado</em>, <em>Valor agregado</em>, <em>Variação de prazo</em>, <em>Desempenho de prazo</em>, <em>Custo real</em>, <em>Variação de custo</em>, <em>Desempenho de custo</em> e <em>Previsão de custo final</em>, com o detalhamento em <em>Como isto é calculado</em>.</li>
          <li>Antes de qualquer nova linha de base, use <strong>💾 Salvar</strong> para guardar uma cópia do arquivo — ele leva a linha de base junto. Só então atualize a linha de base para o plano atual.</li>
          <li>Para a reunião, use <strong>⬇ Exportar</strong> e escolha <strong>📄 Documento PDF</strong> ou <strong>📊 Excel (.xlsx)</strong>; as colunas de variação vão junto na planilha.</li>
        </ol>
        <p>Se o cronograma ainda estiver numa ata ou num e-mail, cole o texto em <strong>✨ Colar no Gantt</strong>: linha terminada em <code>!</code> vira marco, <code>(10d)</code> define duração, <code>after Nome</code> cria a precedência e <code>#</code> no início abre uma fase. Aí sim congele a linha de base.</p>`],
  ],
  callout: 'O erro mais comum com linha de base não é técnico. A equipe define a linha de base, vê o desvio crescer até ficar desconfortável e, sem combinar nada, para de olhar. Uma linha de base que ninguém lê é pior do que nenhuma: cria a aparência de acompanhamento sem a substância. Coloque o desvio na pauta da reunião semanal ou não se dê ao trabalho de definir uma.',
  faq: [
    ['O que é linha de base em um gráfico de Gantt?', 'É uma cópia congelada do cronograma aprovado — início previsto, término previsto e avanço de cada tarefa — mantida sem alteração para que se possa medir o quanto o plano vivo se afastou dela.'],
    ['O que significa desvio de prazo?', 'É a diferença em dias úteis entre a data da linha de base de uma tarefa e a data atual dela. Positivo significa mais tarde que o planejado, negativo significa mais cedo, zero significa em dia com o plano.'],
    ['Quando devo definir a linha de base?', 'Depois de o plano ser aprovado e antes de o trabalho começar. Congelar com a obra em andamento esconde o atraso que já aconteceu e faz todo desvio posterior parecer menor do que é. Em contrato público, o momento natural é a assinatura do cronograma físico-financeiro.'],
    ['Qual a diferença entre desvio de início, de término e de duração?', 'O desvio de início mostra se o atraso foi herdado de algo à montante. O desvio de término mostra o impacto sobre tudo que vem depois. O desvio de duração remove a parte herdada e mostra se a sua estimativa é que estava errada — é o que separa "atrasamos" de "erramos a conta".'],
    ['Devo refazer a linha de base quando o projeto atrasa?', 'Apenas em caso de mudança de escopo aprovada, replanejamento formal ou retomada após paralisação. Se você não consegue nomear a decisão, a data e quem aprovou — um aditivo contratual, por exemplo —, está apagando o registro do que foi combinado. De todo modo, salve uma cópia do arquivo antes.'],
    ['Por que o desempenho de custo (CPI) não aparece?', 'Porque nenhum custo real foi informado. O CPI exige gasto lançado no campo Gasto das tarefas; deduzi-lo do percentual de avanço o deixaria em exatamente 1,00 para qualquer projeto, o que soaria confiável e não reagiria a nada. Os indicadores de prazo, variação e desempenho, continuam funcionando só com datas e avanço.'],
  ],
  related: [['critical-path-method', 'O caminho crítico'], ['gantt-chart-mistakes', 'Erros comuns de cronograma'], ['milestones-vs-tasks', 'Marcos e tarefas']],
},

'gantt-chart-mistakes': {
  h1: 'Nove erros de cronograma — e como corrigir cada um',
  metaTitle: 'Erros comuns em cronogramas',
  metaDesc: 'Os erros mais comuns em gráficos de Gantt: detalhe demais, sem precedências, sem folga, carga ignorada, avanço medido em dias corridos — cada um com a correção, antes e depois.',
  date: '2026-07-19',
  lead: 'Quase nenhum cronograma ruim é ruim por causa da ferramenta. Ele pode estar bonito, colorido, exportado toda sexta-feira e ainda assim mentir sobre a data de término. Os erros são sempre os mesmos meia dúzia, e a maioria deles não é de desenho: é de decisão. Abaixo estão eles, o que cada um custa em dias úteis num plano real e a revisão que os pega antes de o projeto pagar a conta.',
  figIntro: 'O problema mais comum de todos, antes e depois. O mesmo projeto, planejado duas vezes:',
  sections: [
    ['Um plano que comete quase todos os erros de uma vez', `<p>Um projeto comum: a reforma de uma clínica de diagnóstico por imagem em Campinas, tocada pela Construtora Ribamar, com início na segunda-feira 02/03/2026. Primeiro do jeito que as pessoas desenham. Depois do jeito honesto.</p>
        <div class="worked">
          <p><strong>Como foi planejado.</strong> Seis linhas, tudo ligado término-início, nenhum marco, nenhuma folga:</p>
          <ul>
            <li>Projeto executivo — seg 02/03 a sex 13/03 (10 dias) — Marina Sobral</li>
            <li>Instalações elétricas e hidráulicas — seg 16/03 a sex 10/04 (20 dias) — Jefferson Alencar</li>
            <li>Montagem dos equipamentos — seg 16/03 a sex 03/04 (15 dias) — Jefferson Alencar</li>
            <li>Alvenaria e acabamento — seg 13/04 a sex 08/05 (20 dias) — Jefferson Alencar</li>
            <li>Vistorias e ensaios — seg 11/05 a sex 22/05 (10 dias)</li>
            <li>Inauguração — seg 25/05</li>
          </ul>
          <p><strong>O que ele não diz.</strong> Três coisas, todas já verdadeiras no dia em que o plano foi impresso. A primeira: o projeto executivo precisa de ART registrada no CREA e de análise na prefeitura, e essa análise leva dez dias úteis que não aparecem em lugar nenhum. A segunda: Jefferson Alencar está alocado a cem por cento nas instalações e a cem por cento na montagem dos equipamentos nas mesmas três semanas — o cronograma assume, em silêncio, duzentos por cento de uma pessoa só. A terceira: o calendário ignora quatro feriados que caem dentro da obra (Sexta-feira Santa em 03/04, Tiradentes em 21/04, Dia do Trabalho em 01/05 e Corpus Christi em 04/06). E, como tudo está numa corrente única, toda linha é crítica — o que equivale a dizer que nenhuma é.</p>
          <p><strong>Corrigido.</strong> Entra um marco <em>Projeto aprovado — ART registrada</em> carregando os dez dias de análise: ele cai em sex 27/03. As instalações passam a rodar de seg 30/03 a ter 28/04, já descontados a Sexta-feira Santa e o Tiradentes. A alvenaria segue de qua 29/04 a qua 27/05, com o feriado de 1º de maio dentro. A montagem, que não pode mais concorrer com as instalações enquanto Jefferson responder pelas duas, vai de qui 28/05 a qui 18/06, com Corpus Christi no meio. Vistorias e ensaios internos ocupam de sex 19/06 a qui 02/07. Aí entra o segundo marco esquecido: <em>AVCB protocolado</em>, com quinze dias úteis de espera pela vistoria do Corpo de Bombeiros, até qui 23/07. Cinco dias de folga visível antes da abertura, e a inauguração cai em <strong>sex 31/07</strong>.</p>
          <p><strong>A consequência.</strong> O cronograma dizia 25/05. A data honesta era 31/07 — <strong>48 dias úteis depois</strong>, descobertos no primeiro rascunho em vez de em plena segunda quinzena de maio, com convite de inauguração já impresso. Nada mudou no escopo. Só foram escritas três coisas que já eram verdade e dois marcos que já existiam na vida real.</p>
          <p><strong>E o apontamento.</strong> Na sexta 15/05 o relatório de status deu 60% na alvenaria, porque 12 dos 20 dias tinham passado. A equipe havia entregue 3 dos 9 ambientes. Avanço real: 33%.</p>
          <p><strong>E o custo.</strong> A alvenaria estava orçada em R$ 184.000. Com 3 de 9 ambientes concluídos, o valor agregado é R$ 61.333. O gasto lançado até ali era R$ 96.000, o que dá um IDC de 0,64 — o número que interessava, e que só existe porque alguém digitou o gasto real. Nossa ferramenta nunca deduz custo real a partir do percentual de avanço: se deduzisse, o IDC daria exatamente 1,00 em todo projeto que já existiu.</p>
        </div>`],
    ['1. Detalhe demais', `<p>É o erro mais frequente por uma larga margem, e o mais fácil de cometer com boa intenção. Um cronograma que carrega toda subtarefa fica ilegível e impossível de manter: ninguém atualiza sessenta linhas por semana, então ele envelhece em dias. E cronograma desatualizado é pior do que cronograma nenhum, porque ainda se acredita nele.</p>
        <p><strong>Correção:</strong> planeje no nível em que você relata. Se uma atividade é mais curta que o seu ciclo de reporte, ela pertence ao interior de uma tarefa, não a uma linha do gráfico. Agrupe o detalhe em fases e deixe a lista operacional onde a equipe já trabalha. Entre 20 e 60 linhas em quatro a oito fases resolve a maior parte dos projetos.</p>`],
    ['2. Sem precedências', `<p>Um punhado de barras paralelas sem ligação nenhuma é um desenho, não um plano. Quando alguma coisa atrasa, nada se move — porque nada está conectado. O gráfico continua bonito e continua errado, e essa combinação é justamente a que ninguém percebe.</p>
        <p><strong>Correção:</strong> ligue o que de fato condiciona e depois teste. Arraste uma barra três semanas para a direita e observe. Se nada anda atrás dela, o plano não está modelando o seu projeto; está listando-o.</p>`],
    ['3. Tudo ligado término-início numa corrente só', `<p>O erro oposto, e mais sutil, porque parece rigor. Enfileire todas as tarefas e todas elas caem no caminho crítico — sessenta linhas dizendo "urgente", o que dá no mesmo que não dizer nada. Pior: o plano fica impossível de replanejar, porque cada data está presa por uma preferência que alguém teve numa reunião e ninguém mais lembra.</p>
        <!--FIG:cpm|Só o caminho mais longo pela rede define a data de término.-->
        <p><strong>Correção:</strong> ligue apenas o que fisicamente impede. Se B poderia começar hoje com as pessoas e os materiais que existem, B não depende de A. Um caminho crítico saudável cobre de um quarto à metade das tarefas. Se cobre todas, você desenhou uma fila, não uma rede.</p>
        <p>Vale lembrar como o nosso cálculo funciona, porque muda o que você deve esperar ao ligar as coisas: o caminho crítico aqui é calculado sobre as datas como elas estão. Uma precedência só empurra uma tarefa para frente, nunca puxa para trás. Se você quer que uma tarefa comece mais cedo depois de ligar, mova-a você mesmo ou use <strong>Reprogramar</strong>.</p>`],
    ['4. Tratar estimativa como compromisso', `<p>Todas as barras parecem igualmente certas. Uma tarefa de três dias que a equipe já fez cinquenta vezes e outra de três dias que ninguém nunca tentou são desenhadas exatamente do mesmo jeito, com a mesma cor e a mesma borda.</p>
        <p><strong>Correção:</strong> ponha folga onde está a incerteza, e diga em voz alta que ela está ali. Um plano que admite quais partes são chute sobrevive ao contato com a realidade, porque o chute ganhou espaço para estar errado. Um plano que apresenta tudo como compromisso quebra na primeira semana e leva junto a credibilidade de quem o assinou.</p>`],
    ['5. Nenhuma folga em lugar nenhum', `<p>Um cronograma em que toda tarefa começa no instante em que a anterior termina não absorve nada. O primeiro atraso de dois dias é um atraso de dois dias no projeto inteiro, e o segundo também.</p>
        <!--FIG:float|Folga é o espaço que uma tarefa tem antes de empurrar a data final.-->
        <p><strong>Correção:</strong> reserve folga onde o risco se concentra — antes de prazos duros, depois de qualquer coisa que dependa de terceiro, em volta de aprovações e vistorias. De dez a vinte por cento do prazo é uma faixa razoável, mas o formato importa mais que o número: uma folga visível de cinco dias antes da inauguração vale mais que cinco dias diluídos invisivelmente em dez tarefas, porque a diluída é gasta sem que ninguém decida gastá-la.</p>`],
    ['6. Ignorar o caminho crítico', `<p>Se você não sabe quais tarefas governam a data final, não tem como saber quais atrasos importam. É assim que uma equipe passa uma semana correndo atrás de uma atividade com três semanas de folga enquanto a restrição real escorrega duas linhas abaixo, sem ninguém olhar.</p>
        <p><strong>Correção:</strong> ligue o <strong>Caminho crítico</strong> e confira de novo depois de cada mudança. Ele não é fixo: uma tarefa com oito dias de folga vira crítica no instante em que atrasa nove.</p>`],
    ['7. Sem responsável — e responsáveis a cem por cento', `<p>Tarefa sem responsável nomeado é tarefa de todo mundo, o que na prática significa de ninguém. Uma pessoa por tarefa, não uma equipe: só uma pessoa pode ser perguntada.</p>
        <p>Menos óbvio, e mais caro, é o outro lado. Alocar a mesma pessoa em tarefas sobrepostas com carga cheia é o mesmo erro com roupa melhor. Jefferson a cem por cento e a cem por cento não é ambição, é impossibilidade aritmética — e o gráfico não vai reclamar, porque barras se sobrepõem sem nenhum atrito. No exemplo acima, essa sobreposição sozinha valia semanas.</p>
        <p><strong>Correção:</strong> confira a carga de cada pessoa ao longo de toda a linha do tempo, não tarefa por tarefa. E lembre que a carga real brasileira tem descontos previstos: férias de CLT, feriados municipais, treinamento de NR-18 na entrada de novos operários. Alguém a 140% durante três semanas é um cronograma que já falhou; só ainda não avisou.</p>`],
    ['8. Deixar envelhecer', `<p>Um gráfico de Gantt é documento vivo com prazo de validade curto. Três semanas sem atualização e as pessoas param de confiar; logo depois param de ler; e a partir daí o cronograma existe só para ser anexado ao e-mail mensal.</p>
        <p><strong>Correção:</strong> atualize numa cadência fixa — semanal no ritmo normal, diária em crise — e mantenha o cronograma pequeno o bastante para que isso leve minutos, não uma tarde. A cadência importa mais que a frequência: previsível e sustentável vence heroica e esporádica.</p>`],
    ['9. Sem marcos', `<p>Uma parede de barras não dá ao leitor onde se apoiar. Marcos são o modo como alguém de fora do projeto encontra os pontos de decisão sem precisar ler cinquenta linhas.</p>
        <p><strong>Correção:</strong> marque aprovações, entregas, vistorias e liberações como marcos de duração zero e pendure o trabalho seguinte neles. De quatro a oito costuma ser o número certo. E formule o marco como resultado, não como atividade: "fase de testes" não é marco, "AVCB emitido" é. No exemplo, os marcos faltantes não eram enfeite — era exatamente ali que se escondiam dez dias de análise da prefeitura e quinze de espera pelo Corpo de Bombeiros.</p>`],
    ['10. Medir avanço em dias decorridos', `<p>Este produz o relatório errado mais confiante de toda a lista. Derive o avanço da duração decorrida e uma tarefa que ninguém começou informa 60% no décimo segundo dia de vinte — exatamente o que aconteceu na sexta 15/05 acima. O número é preciso, verificável, calculado por máquina, e não tem relação nenhuma com o mundo.</p>
        <p><strong>Correção:</strong> informe fração de trabalho — ambientes entregues, pranchas emitidas, casos de teste aprovados, metros de tubulação lançados — e não fração de calendário. Se uma tarefa não tem unidade contável, ela está grossa demais para ser acompanhada e precisa ser quebrada.</p>`],
    ['11. Refazer a linha de base a cada desvio', `<p>A linha de base registra o que você prometeu. Regravá-la sempre que o desvio fica incômodo transforma-a num registro do que você fez por último — ou seja, num número que você já tinha.</p>
        <p>Feito mensalmente, o resultado é um projeto perfeitamente dentro do plano contra a sua nona linha de base e quatro meses atrasado contra a primeira. Todo mundo fica verde e ninguém entende por que a obra não abre.</p>
        <p><strong>Correção:</strong> refaça a linha de base apenas diante de mudança aprovada de escopo, prazo ou orçamento, e guarde as anteriores. A distância entre a linha de base 1 e a linha de base 5 costuma ser a descrição mais honesta do projeto que existe em qualquer lugar.</p>`],
    ['12. Usar gráfico de Gantt para a coisa errada', `<p>Gantt serve para trabalho com sequência, precedências e datas. Serve mal para fluxo contínuo e péssimo para um backlog repriorizado toda segunda-feira.</p>
        <p><strong>Correção:</strong> Gantt quando ordem e prazo importam, quadro quando não importam. Usar os dois é normal e não é sinal de indecisão: quadro para a semana, Gantt para o trimestre. Sinal claro de ferramenta errada é reescrever o cronograma inteiro toda segunda — se ele muda tanto assim, não era um cronograma.</p>`],
    ['O sintoma de cada erro', `<p>Na prática é mais fácil reconhecer pelo sintoma do que pela definição. Se alguma linha desta tabela descreve a sua semana, o erro correspondente já está no seu plano:</p>
        <table>
          <thead><tr><th>O que você percebe</th><th>O erro</th><th>A correção</th></tr></thead>
          <tbody>
            <tr><td>Sem atualização há três semanas</td><td>Detalhe demais</td><td>Planeje no nível em que relata</td></tr>
            <tr><td>Uma tarefa atrasa e nenhuma data anda</td><td>Sem precedências</td><td>Ligue o que condiciona; arraste para testar</td></tr>
            <tr><td>Toda tarefa é crítica</td><td>Tudo em corrente término-início</td><td>Apague as ligações que são só preferência</td></tr>
            <tr><td>Atrasos pequenos movem o término</td><td>Sem folga</td><td>Folgas visíveis antes dos prazos duros</td></tr>
            <tr><td>Você acelerou a tarefa errada</td><td>Caminho crítico ignorado</td><td>Ligue o realce e reveja após cada mudança</td></tr>
            <tr><td>Ninguém responde quando você pergunta</td><td>Sem responsável</td><td>Uma pessoa nomeada por tarefa</td></tr>
            <tr><td>As tarefas de uma pessoa atrasam juntas</td><td>Alocação acima de 100%</td><td>Confira a carga em toda a linha do tempo</td></tr>
            <tr><td>"Afinal, o que acontece quando?"</td><td>Sem marcos</td><td>De quatro a oito portões, com trabalho atrás</td></tr>
            <tr><td>90% concluído há um mês</td><td>Avanço por dias decorridos</td><td>Informe fração de trabalho</td></tr>
            <tr><td>Verde toda semana, meses atrasado</td><td>Linha de base regravada a cada desvio</td><td>Refazer só em replanejamento aprovado</td></tr>
            <tr><td>Reescrito toda segunda-feira</td><td>Ferramenta errada</td><td>Use um quadro para fluxo</td></tr>
          </tbody>
        </table>`],
    ['Uma revisão de vinte minutos, aqui no gantts.app', `<p>Passe isto num cronograma que você já tem, nesta ordem. Cada passo é uma coisa que se vê, não uma coisa que se julga.</p>
        <ol>
          <li>Abra o cronograma e ligue <strong>Tabela</strong>. Conte as linhas. Mais do que você vai atualizar toda semana? Agrupe o detalhe em <strong>▣ Grupo</strong> antes de qualquer outra coisa e recue as filhas com o botão de indentar, mostrado como uma seta.</li>
          <li>Arraste a última tarefa da primeira fase duas semanas para a direita. O que não se mexer não está ligado. Desfaça e preencha as ligações na coluna <strong>Depois de</strong> da tabela, ou no campo <strong>Depois de (predecessoras)</strong> do painel da tarefa.</li>
          <li>Ligue <strong>Caminho crítico</strong>. A legenda diz "listrado = caminho crítico". Se tudo estiver listrado, você ligou demais; se nada estiver, você não ligou nada.</li>
          <li>Em <strong>Exibição</strong>, escolha <strong>Próximas semanas</strong>. O filtro é por sobreposição, não por contenção: tarefas que apenas atravessam a janela também aparecem, e é isso que você quer ver. Se essa lista não parece com o que as pessoas estão fazendo, o cronograma já está velho.</li>
          <li>Ligue <strong>Carga de trabalho</strong>. Qualquer pessoa acima da capacidade em qualquer dia é uma promessa impossível dentro de um gráfico plausível.</li>
          <li>Ligue <strong>Calendário</strong> e <strong>Fins de semana</strong> e confira os feriados. Um plano brasileiro que atravessa Carnaval, Semana Santa e Corpus Christi sem descontar nada está simplesmente errado, e por vários dias.</li>
          <li>Procure os losangos. Todo ponto em que alguém de fora aprova, entrega ou vistoria deveria ser um <strong>◆ Marco</strong>, com o tempo de espera representado na sequência — prefeitura, CREA, Corpo de Bombeiros, ANVISA, INMETRO.</li>
          <li>Olhe a linha imediatamente anterior a cada prazo duro. Se ela termina no próprio dia do prazo, insira uma tarefa com <strong>＋ Tarefa</strong>, chame-a de folga e deixe-a visível.</li>
          <li>Ligue <strong>Linha de base</strong> uma única vez, agora que o plano está honesto. O aviso confirma: os atrasos passam a ser medidos em relação a este plano, e as colunas de linha de base e variação ficam visíveis.</li>
          <li>Peça a cada responsável o avanço em unidades de trabalho, não em porcentagem, e lance em <strong>Progresso</strong>. Onde a resposta e a barra discordarem, a barra é que está errada.</li>
          <li>Para montar rápido do zero, use <strong>✨ Colar no Gantt</strong> e cole texto simples: <code>#</code> no início cria fase, <code>(10d)</code> define duração, <code>after Nome</code> liga uma predecessora e uma linha terminada em <code>!</code> vira marco.</li>
          <li>Feche mandando o resultado para quem precisa ver: <strong>⬇ Exportar</strong> e então <strong>🔗 Link de compartilhamento</strong>, <strong>📄 Documento PDF</strong> ou <strong>📅 Calendário (.ics)</strong>, conforme a plateia.</li>
        </ol>`],
  ],
  callout: 'Repare em quantos destes erros não são erros de desenho. Trocar de ferramenta não corrige quase nenhum: uma precedência que ninguém registrou, uma pessoa alocada em duas frentes ao mesmo tempo e uma linha de base regravada em silêncio são decisões, e decisões acompanham você para dentro de qualquer software que você adote em seguida.',
  faq: [
    ['Qual é o erro mais comum em gráficos de Gantt?', 'Detalhe demais. Cronogramas que listam toda subtarefa ficam ilegíveis e são abandonados em poucas semanas, porque mantê-los atualizados custa mais do que eles devolvem.'],
    ['Quantas tarefas um cronograma deve ter?', 'Poucas o bastante para que você realmente o mantenha: de 20 a 60 linhas serve para a maioria dos projetos, distribuídas em quatro a oito fases. Qualquer atividade mais curta que o seu ciclo de reporte pertence ao interior de uma tarefa, não a uma linha do gráfico.'],
    ['Toda tarefa deve ser ligada término-início?', 'Não. Enfileirar tudo numa corrente só coloca o projeto inteiro no caminho crítico e torna o replanejamento impossível. Ligue apenas o que fisicamente impede: se uma tarefa poderia começar hoje com as pessoas e os materiais disponíveis, ela não depende da anterior.'],
    ['Por que meu projeto atrasa se o cronograma parecia certo?', 'Quase sempre por três motivos, e em geral pelos três juntos: nenhuma folga, alguém alocado acima de cem por cento em tarefas sobrepostas e avanço medido em dias decorridos em vez de trabalho entregue. Feriados não descontados são o quarto motivo, e num ano brasileiro isso pesa.'],
    ['É errado refazer a linha de base?', 'É correto diante de mudança aprovada de escopo, prazo ou orçamento. Não é correto regravá-la a cada desvio incômodo: o relatório fica permanentemente verde enquanto a data de entrega continua andando, e você perde a única régua que tinha.'],
    ['Com que frequência atualizar o cronograma?', 'Semanalmente no ritmo normal e diariamente em crise. A regularidade importa mais que a frequência — uma cadência fixa e sustentável revela desvio cedo; atualizações heroicas e esporádicas revelam quando já não dá para recuperar.'],
  ],
  related: [['how-to-make-a-gantt-chart', 'Como fazer um gráfico de Gantt'], ['gantt-baseline-variance', 'Linha de base e desvios'], ['milestones-vs-tasks', 'Marcos e tarefas']],
},

'milestones-vs-tasks': {
  h1: 'Marcos e tarefas: qual é a diferença',
  metaTitle: 'Marco ou tarefa?',
  metaDesc: 'Diferença entre marco e tarefa, para que servem os marcos de verdade, quantos usar e os erros mais comuns.',
  date: '2026-07-19',
  lead: 'Uma <strong>tarefa</strong> ocupa tempo. Um <strong>marco</strong> assinala um momento. Essa distinção de uma linha explica por que uma é desenhada como barra e o outro como losango — e ela tem consequências mensuráveis: um marco modelado como tarefa de três dias empurra silenciosamente o término do projeto em três dias e esconde justamente o atraso a que você está mais exposto.',
  figIntro: 'Os símbolos que você encontra em praticamente qualquer gráfico de Gantt: barras para o trabalho, losangos para os momentos que importam.',
  sections: [
    ['A diferença em uma frase', `<p>Uma tarefa consome tempo e recursos: tem início, tem fim e tem duração. Um marco não tem duração nenhuma — é um ponto que registra que algo aconteceu. É por isso que marcos são desenhados como losangos: não há extensão sobre a qual desenhar uma barra.</p>
        <p>O teste prático leva um segundo. <em>Alguém consegue trabalhar nisso?</em> Dá para trabalhar em "redigir o memorial descritivo". Não dá para trabalhar em "memorial aprovado": ou aconteceu, ou não aconteceu. Não existe meio-termo, não existe tarde de trabalho, não existe percentual.</p>
        <p>Essa é a razão de a distinção não ser cosmética. Ela muda o cálculo do cronograma, muda o que a precedência transmite e muda quem consegue ler o gráfico sem explicação. Um cronograma bem construído tem tarefas para quem executa e marcos para quem cobra.</p>
        <!--FIG:milestone|O marco fica em um único ponto no tempo; a barra de cada lado dele é o trabalho.-->`],
    ['Um exemplo trabalhado: a troca de embalagens da Nutriva Alimentos', `<p>Um projeto acompanhado do começo ao fim. A Nutriva Alimentos, de Campinas, vai refazer a arte de uma linha de 40 SKUs para se adequar à rotulagem nutricional frontal exigida pela ANVISA. Semana útil de cinco dias, início na segunda, 2 de março de 2026. Marina Toledo responde pelo marketing; Rafael Queiroz, pela produção gráfica.</p>
        <div class="worked">
          <table>
            <thead><tr><th>Linha</th><th>Tipo</th><th>Duração</th><th>Início</th><th>Fim</th></tr></thead>
            <tbody>
              <tr><td>Conceitos de arte</td><td>Tarefa</td><td>10 d</td><td>seg 02/03</td><td>sex 13/03</td></tr>
              <tr><td>Revisão interna e ajustes</td><td>Tarefa</td><td>4 d</td><td>seg 16/03</td><td>qui 19/03</td></tr>
              <tr><td><strong>Arte congelada</strong></td><td>Marco</td><td>0 d</td><td colspan="2">qui 19/03</td></tr>
              <tr><td>Análise de rotulagem (laboratório externo)</td><td>Tarefa</td><td>8 d</td><td>sex 20/03</td><td>ter 31/03</td></tr>
              <tr><td><strong>Rótulo aprovado</strong></td><td>Marco</td><td>0 d</td><td colspan="2">ter 31/03</td></tr>
              <tr><td>Provas de impressão do fornecedor</td><td>Tarefa</td><td>6 d</td><td>qua 01/04</td><td>qua 08/04</td></tr>
              <tr><td><strong>Prova aprovada</strong></td><td>Marco</td><td>0 d</td><td colspan="2">qua 08/04</td></tr>
              <tr><td>Tiragem</td><td>Tarefa</td><td>15 d</td><td>qui 09/04</td><td>qua 29/04</td></tr>
              <tr><td>Transporte ao centro de distribuição</td><td>Tarefa</td><td>7 d</td><td>qui 30/04</td><td>sex 08/05</td></tr>
              <tr><td><strong>Troca nas gôndolas</strong></td><td>Marco</td><td>0 d</td><td colspan="2">seg 11/05</td></tr>
            </tbody>
          </table>
          <p>Cinco marcos, cinco tarefas. Três deles — arte congelada, rótulo aprovado, prova aprovada — são momentos em que alguém <em>de fora</em> da equipe precisa agir. É exatamente essa a razão de existirem como marcos.</p>
          <p>Leia só as linhas de marco e você tem o projeto inteiro em um fôlego: arte congelada em 19/03, rótulo aprovado em 31/03, prova aprovada em 08/04, produto na gôndola em 11/05. Nenhum diretor comercial da Nutriva precisa de mais do que isso, e nenhuma dessas quatro datas exigiu que ele lesse uma barra sequer.</p>
          <p>Repare também no que <em>não</em> virou marco. "Tiragem" são quinze dias de máquina, o item mais longo do plano — significativo, caríssimo, e ainda assim uma tarefa, porque tem duração. Significância decide se algo entra no cronograma; duração decide o formato.</p>
        </div>`],
    ['O que acontece quando um marco escorrega', `<p>O laboratório externo cotou oito dias e levou treze. A análise de rotulagem passa a terminar na terça, 07/04, em vez de terça, 31/03.</p>
        <div class="worked">
          <table>
            <thead><tr><th>Marco</th><th>Planejado</th><th>Previsto</th><th>Desvio</th></tr></thead>
            <tbody>
              <tr><td>Arte congelada</td><td>qui 19/03</td><td>qui 19/03</td><td>0 d</td></tr>
              <tr><td>Rótulo aprovado</td><td>ter 31/03</td><td>ter 07/04</td><td>5 d</td></tr>
              <tr><td>Prova aprovada</td><td>qua 08/04</td><td>qua 15/04</td><td>5 d</td></tr>
              <tr><td>Troca nas gôndolas</td><td>seg 11/05</td><td>seg 18/05</td><td>5 d</td></tr>
            </tbody>
          </table>
          <p>Não há folga nessa corrente, então os cinco dias inteiros caem sobre a data de lançamento. Essas quatro linhas são o relatório de status completo — e só existem porque aqueles pontos foram modelados como marcos.</p>
          <p>Note que o desvio é de cinco dias úteis, não de sete dias corridos. O laboratório levou cinco dias úteis a mais do que prometeu; o calendário mostra uma semana de diferença. Confundir as duas unidades é a fonte mais comum de discussão inútil em reunião de acompanhamento.</p>
        </div>
        <p>Uma tarefa que atrasa significa que o trabalho está demorando mais e talvez ainda seja absorvido. Um marco que atrasa significa que um compromisso se moveu. Ninguém fora do projeto se importa que as provas levaram sete dias em vez de seis; todos se importam que a data de gôndola agora é 18/05.</p>
        <p>Essa é, no fundo, a diferença de audiência. O desvio de tarefa é uma conversa interna entre Marina e Rafael. O desvio de marco é uma conversa com o comprador da rede varejista, e ela acontece com ou sem o seu gráfico.</p>`],
    ['Tarefa ou marco: as dimensões que realmente mudam', `<p>A distinção não é uma convenção de desenho. Ela altera comportamento em seis lugares diferentes.</p>
        <table>
          <thead><tr><th>Dimensão</th><th>Tarefa</th><th>Marco</th></tr></thead>
          <tbody>
            <tr><td>Duração</td><td>Um dia ou mais. Consome calendário e esforço.</td><td>Zero. Início e fim são a mesma data.</td></tr>
            <tr><td>Precedências</td><td>Predecessoras e sucessoras, quase sempre término-início.</td><td>Precisa de pelo menos uma de cada, ou vira enfeite.</td></tr>
            <tr><td>O que um desvio significa</td><td>O trabalho demorou mais; folga ou recursos podem recuperar.</td><td>Um compromisso mudou. Recuperar exige replanejar, não empenho.</td></tr>
            <tr><td>Alocação</td><td>Um responsável executando, normalmente com custo associado.</td><td>Um dono que cobra. O esforço costuma ser zero.</td></tr>
            <tr><td>Como exporta</td><td>Barra em PDF, PNG e PowerPoint; término real e contagem de dias em Excel e CSV; evento de vários dias no calendário.</td><td>Losango nas exportações visuais; término em branco e duração 0 em Excel e CSV; evento de um único dia no calendário.</td></tr>
            <tr><td>Quem lê</td><td>Quem faz o trabalho e o gestor direto.</td><td>Patrocinadores, clientes, órgãos reguladores, o slide de resumo.</td></tr>
          </tbody>
        </table>
        <p>A linha da exportação costuma surpreender. Coloque a exibição em somente marcos, exporte, e você tem um cronograma de uma página para o comitê sem construir um segundo gráfico — mas isso só funciona se os seus marcos forem marcos de verdade. Se metade deles for tarefa disfarçada, a exportação sai com barras onde deveria haver losangos e a página perde exatamente a qualidade que a tornava útil.</p>`],
    ['Quanto custa errar isso', `<p>Agora modele "Rótulo aprovado" do jeito que quase todo mundo escreve na primeira versão: uma tarefa chamada "obter aprovação do rótulo", três dias, entre a análise do laboratório e as provas de impressão.</p>
        <div class="worked">
          <ol>
            <li><strong>A data final se move.</strong> Três dias de duração inventada empurram a troca nas gôndolas de seg 11/05 para qui 14/05. O trabalho não mudou; o modelo mudou. E o pior: essa data errada é a que vai para o e-mail do comprador.</li>
            <li><strong>O portão desaparece.</strong> "Obter aprovação do rótulo" soa como algo que você faz; "Rótulo aprovado" soa como algo que o laboratório entrega. A primeira formulação não convida ninguém a cobrar, porque parece que a bola está com você.</li>
            <li><strong>O resumo quebra.</strong> Filtre por marcos e aparecem quatro linhas em vez de cinco, faltando justamente o ponto de maior dependência externa — o único que você não controla e o único que de fato atrasou.</li>
          </ol>
        </div>
        <p>O erro inverso sai mais barato, mas é real: transformar "Tiragem" em marco porque parece importante. Quinze dias de máquina somem do cálculo e o caminho crítico passa a contornar o item mais longo do plano. Vale repetir a regra: significância decide se algo entra no gráfico; duração decide o formato dele.</p>
        <p>Há ainda um terceiro caso, mais sutil, que aparece muito em obra e em projeto de engenharia: o marco composto. "ART emitida e obra liberada" parece um ponto único, mas embute duas condições com donos diferentes e prazos diferentes. Quando uma delas atrasa, o losango não consegue dizer qual. Dois marcos separados custam uma linha a mais e economizam uma reunião.</p>`],
    ['Para que servem os marcos de verdade', `<p>Marcos existem para quem lê, não para quem executa. São o modo como alguém que não vive dentro do seu projeto encontra os momentos que importam: aprovações, entregas, portões de decisão, entrada em operação.</p>
        <p>Eles também tornam o cronograma exigível. "Arte congelada", com a análise de rotulagem dependendo dele, diz o que "congelar a arte" não diz: nada a jusante avança até isso acontecer. Quando um designer envia uma revisão em 24 de março, o gráfico mostra uma regra sendo quebrada, e não apenas uma data escorregando. A diferença de tom nessa conversa é enorme.</p>
        <!--FIG:deps|O marco ganha o lugar dele por ficar entre coisas: predecessoras que precisam terminar, sucessoras que não podem começar.-->
        <p>Um marco sem ligação de nenhum dos lados merece ser apagado. Se nada espera por ele, é uma anotação de margem — e anotação pertence ao campo de notas, não à linha do tempo.</p>
        <p>Vale um esclarecimento sobre como o nosso cálculo se comporta. O caminho crítico aqui é "como posicionado": uma precedência só consegue empurrar uma tarefa para depois, nunca puxá-la para antes. Se você digitou uma data otimista para "Prova aprovada" e a tiragem depende dela, o marco não vai sozinho recuar para a data mais cedo possível — ele fica onde você o colocou até que a corrente o empurre. Isso é deliberado: preserva datas negociadas em vez de sobrescrevê-las. Quem quiser o cálculo puro para frente usa a reprogramação e compara.</p>`],
    ['Quantos marcos um projeto deve ter?', `<p>Os suficientes para contar a história, poucos o bastante para que cada um signifique algo. De quatro a oito é uma faixa razoável; cem marcos são apenas tarefas usando outro formato.</p>
        <p>Um teste honesto: você conseguiria descrever o andamento usando somente os marcos? A Nutriva tem cinco para um projeto de dez semanas — o limite superior da faixa, justificado porque quatro deles são passagens de bastão externas.</p>
        <p>O jeito mais comum de exagerar é colocar um losango no fim de cada fase por simetria. Fases já têm barra de resumo; o losango repetido não acrescenta informação, só ruído. O segundo jeito mais comum é transformar reuniões recorrentes em marcos. Uma reunião semanal de status não é um portão de decisão, é uma rotina — e rotina não pertence ao cronograma do projeto.</p>
        <p>Em projetos regulados, a conta costuma se resolver sozinha: os marcos são exatamente os pontos em que um terceiro carimba alguma coisa. Protocolo na ANVISA, emissão do AVCB pelo Corpo de Bombeiros, habite-se na prefeitura, homologação do INMETRO. Se você listar esses e nada mais, dificilmente vai errar por excesso.</p>`],
    ['Fazendo isso no gantts.app', `<p>O plano da Nutriva dentro do editor, com os botões como eles realmente aparecem.</p>
        <ol>
          <li>Clique em <strong>✨ Colar no Gantt</strong> e cole o roteiro em texto. Uma linha terminada em <code>!</code> vira marco, <code>(10d)</code> define a duração, <code>after Nome</code> liga uma predecessora e um <code>#</code> no início cria uma fase — por exemplo: <code>Arte congelada ! after Revisão interna</code>. A palavra <code>after</code> é sintaxe literal e permanece em inglês.</li>
          <li>Preferindo montar à mão: <strong>＋ Tarefa</strong> para linhas de trabalho, <strong>◆ Marco</strong> para os losangos, <strong>▣ Grupo</strong> para uma fase e <strong>→|</strong> para recuar uma linha sob ela.</li>
          <li>Digitou um marco como tarefa? Dê duplo clique na linha e mude <strong>Tipo</strong> de tarefa para marco. O fim colapsa sobre o início; não é preciso apagar e recriar.</li>
          <li>No mesmo painel preencha <strong>Depois de (predecessoras)</strong>, senão o marco não se move quando o trabalho à frente dele se move. Aproveite para preencher <strong>Responsável</strong> — o dono do marco é quem faz o telefonema quando a data fica em risco.</li>
          <li>Clique em <strong>Reprogramar</strong> para empurrar cada linha para a data mais cedo que as precedências permitem. É assim que você descobre se as datas dos seus marcos eram desejos ou consequências.</li>
          <li>Ative <strong>Caminho crítico</strong> para confirmar que a corrente que passa pelos seus portões é a que define o término. A legenda diz: listrado = caminho crítico.</li>
          <li>Abra <strong>Linha de base</strong> e salve o plano antes de o trabalho começar. As colunas de desvio passam a informar o atraso de cada marco em dias — é exatamente daí que sai o número de cinco dias da tabela acima.</li>
          <li>Coloque <strong>Exibição</strong> em <strong>Somente marcos</strong> para a versão do patrocinador e use <strong>⬇ Exportar</strong> → <strong>📄 Documento PDF</strong> ou <strong>📽 PowerPoint (.pptx)</strong>. Depois volte para <strong>Todas as tarefas</strong> para tocar a execução.</li>
        </ol>
        <p>Uma coisa que o editor não faz: arrastar um marco para deixá-lo mais largo. Marcos se movem, mas nunca são redimensionados, porque marco com duração não é marco.</p>
        <p>Dois detalhes que economizam confusão. O filtro de <strong>Próximas semanas</strong> trabalha por sobreposição, não por contenção: uma tarefa que começou em fevereiro e termina em abril aparece na janela de março, mesmo sem estar inteiramente contida nela. E, na exportação para Mermaid, a marcação <code>crit</code> é escrita na saída, mas nunca lida na entrada — a criticidade aqui é sempre calculada a partir das precedências e das durações, nunca declarada por você.</p>`],
    ['Erros comuns', `<p><strong>Marcos com duração.</strong> Se leva três dias, é tarefa. Dê a ela uma barra e coloque um marco no fim, se a conclusão importar a alguém de fora.</p>
        <p><strong>Marcos sem dono.</strong> O dono é quem faz a ligação quando a data fica em risco, não quem assina a aprovação. São papéis diferentes e frequentemente pessoas diferentes.</p>
        <p><strong>Marcos datados por esperança.</strong> Se "Rótulo aprovado" está em 31/03 porque foi isso que se prometeu ao varejo, e não porque oito dias de laboratório terminam ali, o gráfico registra uma ambição. Reprograme primeiro, veja a diferença e então negocie o vão de forma deliberada.</p>
        <p><strong>Marcos reportados em percentual.</strong> Um marco está em 0% ou em 100%. "A aprovação do rótulo está 60% pronta" significa que a tarefa subjacente está 60% pronta e que o portão não aconteceu.</p>
        <p><strong>Marcos usados como capa de custo.</strong> Tentador colocar os R$ 180.000 da tiragem no marco "Prova aprovada", porque é ali que o dinheiro é liberado. Não faça isso: o módulo de valor agregado nunca infere custo realizado a partir do avanço, e um marco de duração zero carregando todo o orçamento distorce a curva. Se nenhum custo for informado, o cálculo recai sobre a ponderação por duração — o que é razoável para tarefas e sem sentido para um losango.</p>`],
    ['Tarefas resumo e a hierarquia', `<p>O terceiro símbolo é a barra de resumo, ou fase, que abrange as tarefas filhas. Ela é calculada, não digitada: as datas vêm do início mais cedo e do término mais tarde abaixo dela, e é por isso que editá-las diretamente costuma estar desabilitado. Para mover uma fase, mova o que ela contém.</p>
        <p>A barra de resumo mostra <em>quando o trabalho acontece</em>; o marco mostra <em>quando um compromisso vence</em>. Uma fase "Pré-impressão" indo de 02/03 a 08/04 é útil para a equipe da Nutriva e completamente inútil para o comprador da rede, que só pergunta sobre 11/05.</p>
        <p>É essa hierarquia de três níveis — fase, tarefa, marco — que mantém um cronograma grande legível. Recolha as fases e você tem a visão de comitê. Expanda uma delas e você tem a visão de execução. Os marcos permanecem visíveis nos dois modos, e é justamente por isso que eles carregam o resumo do projeto.</p>`],
  ],
  callout: 'Um hábito para levar deste guia: coloque um marco em todo ponto em que alguém de fora da equipe precisa aprovar, entregar, inspecionar ou assinar. São as dependências que você menos controla e os atrasos sobre os quais mais vão lhe cobrar explicação. Três dos cinco marcos da Nutriva são exatamente isso — e o que atrasou foi um deles.',
  faq: [
    ['Qual a diferença entre tarefa e marco?', 'A tarefa tem duração: um início, um fim e trabalho no meio. O marco tem duração zero e assinala um momento, como uma aprovação ou uma entrega. Teste rápido: se alguém pode passar uma tarde trabalhando nisso, é tarefa.'],
    ['O que significa o losango no gráfico de Gantt?', 'Um marco: um marcador de duração zero para um evento relevante, como um aceite, uma entrega ou a entrada em operação. Como não tem extensão, ele pode ser movido, mas nunca redimensionado.'],
    ['Quantos marcos um projeto deve ter?', 'Normalmente de quatro a oito — o bastante para contar a história, poucos o suficiente para que cada um carregue significado. Se ler a lista inteira não descreve o projeto, os marcos escolhidos foram os errados.'],
    ['Um marco pode ter duração?', 'Não: por definição é zero. Se a coisa realmente leva tempo, como uma análise de rotulagem de cinco dias, modele como tarefa e coloque um marco no término dela. A data do compromisso passa a ser calculada em vez de afirmada.'],
    ['O que acontece com o cronograma quando um marco atrasa?', 'Tudo o que estiver ligado depois dele se move na mesma medida, descontada a folga da corrente. No exemplo da embalagem, um desvio de cinco dias em "Rótulo aprovado" empurrou a troca nas gôndolas de 11/05 para 18/05 por inteiro, porque nada a jusante tinha folga.'],
    ['O que é uma tarefa resumo?', 'Uma barra que representa uma fase ou grupo. As datas dela vêm do início mais cedo e do término mais tarde do que está abaixo, então ela se move quando as filhas se movem. Não substitui um marco: o resumo mostra quando o trabalho acontece, o marco mostra quando um compromisso vence.'],
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
    ['Por que a curva tem forma de S', `<p>Projetos não consomem trabalho a ritmo constante. As primeiras semanas andam devagar — mobilização, instalação de canteiro, definição de escopo, espera por aprovações e licenças —, o miolo acelera quando várias frentes correm em paralelo e a cauda desacelera de novo, com os últimos itens presos a comissionamento, aceites e pendências.</p>
        <p>Acumule o trabalho ao longo do tempo e sai um S achatado: suave, íngreme, suave. Ninguém desenhou essa meta. Ela é consequência de como o trabalho realmente chega, e é exatamente isso que a torna uma régua justa. Uma linha reta suporia que o projeto está vinte por cento pronto em vinte por cento do prazo, e todo projeto da história pareceria "atrasado" no primeiro mês.</p>
        <p>No Brasil essa curva raramente aparece sozinha. Ela vem em par, no <strong>cronograma físico-financeiro</strong>: uma curva de <em>avanço físico acumulado</em>, em percentual dos serviços executados, e uma curva financeira acumulada, em reais desembolsados. As duas nascem da mesma planilha de quantitativos, e a distância entre elas já conta uma história — quando a financeira sobe mais rápido que a física, ou você antecipou material, ou está pagando por serviço que ainda não foi medido.</p>`],
    ['Ler o previsto contra o realizado', `<p>São duas curvas. A curva <strong>prevista</strong> vem da linha de base: distribua o peso de cada tarefa pelas datas planejadas e acumule. A curva <strong>realizada</strong> vem do avanço informado — na obra, do boletim de medição.</p>
        <p>Leia na vertical, na data de hoje:</p>
        <ul>
          <li><strong>Realizado abaixo do previsto</strong> — atrasado. A distância vertical é o tanto de trabalho que falta.</li>
          <li><strong>Realizado acima do previsto</strong> — adiantado, ou o apontamento de avanço está otimista. Os dois acontecem, e o segundo é mais comum do que se admite em reunião.</li>
          <li><strong>Curvas se afastando</strong> — o problema está piorando, não estabilizado. É a forma que mais importa e a que um percentual isolado nunca revela.</li>
        </ul>
        <p>Leia na <em>horizontal</em> e você obtém a versão que uma reunião de status entende sem tradução: corra para a esquerda a partir do ponto realizado de hoje até encontrar a curva prevista, e você tem a data em que o plano esperava este avanço. A distância é o atraso em dias ou semanas — a unidade em que as pessoas de fato discutem, e a única que serve para instruir um pedido de <strong>aditivo de prazo</strong>.</p>
        <p>Vale um alerta de leitura. A inclinação da curva muda muito ao longo do projeto, então a mesma distância vertical significa coisas diferentes conforme onde você está. No miolo íngreme, meia semana de atraso vale uma montanha de reais; na cauda, um mês inteiro pode valer quase nada em dinheiro e ainda assim estourar a data de entrega. Por isso as duas leituras — vertical e horizontal — precisam andar juntas.</p>`],
    ['Valor agregado, sem o jargão', `<p>O gerenciamento do valor agregado põe um número nessa distância. São três grandezas, e as siglas assustam mais do que as ideias:</p>
        <ul>
          <li><strong>VP</strong> (valor planejado, <em>PV</em> em inglês) — o trabalho que você disse que teria concluído até agora, valorado pelo orçamento.</li>
          <li><strong>VA</strong> (valor agregado, <em>EV</em>) — o trabalho que você <em>de fato</em> concluiu, valorado pelo mesmo orçamento. Um serviço de R$ 120.000,00 com 40% executado agregou R$ 48.000,00. Quanto ele custou é irrelevante aqui, de propósito.</li>
          <li><strong>CR</strong> (custo real, <em>AC</em>) — o que você realmente gastou.</li>
        </ul>
        <p>A partir desses três:</p>
        <ul>
          <li><strong>VPR = VA − VP</strong> — variação de prazo. Negativo significa atrasado.</li>
          <li><strong>VC = VA − CR</strong> — variação de custo. Negativo significa acima do orçamento.</li>
          <li><strong>IDP = VA ÷ VP</strong> (<em>SPI</em>) — abaixo de 1,0 significa atrasado. Um IDP de 0,85 quer dizer que você entrega 85 centavos de avanço para cada real de plano.</li>
          <li><strong>IDC = VA ÷ CR</strong> (<em>CPI</em>) — abaixo de 1,0 significa acima do orçamento.</li>
          <li><strong>ONT</strong> (orçamento no término, <em>BAC</em>) e <strong>EPT</strong> (estimativa no término, <em>EAC</em>) — o valor do contrato e a projeção de onde ele vai parar.</li>
        </ul>
        <p>A separação é o ponto central. Um projeto pode estar perfeitamente no orçamento e muito atrasado, ou rigorosamente no prazo e queimando dinheiro, e um único "percentual concluído" esconde os dois casos. Como dois eixos independentes, há quatro lugares possíveis para se estar:</p>
        <!--FIG:evmquad|Desempenho de prazo e de custo são independentes. Um percentual concluído único achata os dois eixos em um número só.-->
        <p>Repare que o quadrante confortável — adiantado e barato — é raro, e quase sempre merece desconfiança antes de comemoração. Ele costuma sair de medição inflada ou de serviço executado fora de sequência.</p>`],
    ['Um exemplo trabalhado, com as contas na mesa', `<p>Reforma e ampliação de um centro administrativo, contrato de <strong>R$ 2.400.000,00</strong> com a Construtora Vale Verde Engenharia, dez meses de prazo, início em <strong>seg 2/3</strong> (02/03/2026) e medições mensais fechadas no último dia útil de cada mês. Responsável técnica: eng.ª Renata Albuquerque, com ART registrada no CREA. O desembolso previsto segue o desenho clássico de obra: devagar na mobilização e fundações, pesado no miolo de estrutura e instalações, afinando em acabamento e comissionamento.</p>
        <div class="worked">
          <p><strong>Cronograma físico-financeiro previsto, acumulado em VP:</strong></p>
          <table>
            <thead><tr><th>Medição</th><th>Previsto no mês</th><th>VP acumulado</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>R$ 72.000,00</td><td>R$ 72.000,00</td></tr>
              <tr><td>2</td><td>R$ 156.000,00</td><td>R$ 228.000,00</td></tr>
              <tr><td>3</td><td>R$ 228.000,00</td><td>R$ 456.000,00</td></tr>
              <tr><td>4</td><td>R$ 300.000,00</td><td>R$ 756.000,00</td></tr>
              <tr><td>5</td><td>R$ 372.000,00</td><td>R$ 1.128.000,00</td></tr>
              <tr><td>6</td><td>R$ 396.000,00</td><td>R$ 1.524.000,00</td></tr>
              <tr><td>7</td><td>R$ 324.000,00</td><td>R$ 1.848.000,00</td></tr>
              <tr><td>8</td><td>R$ 252.000,00</td><td>R$ 2.100.000,00</td></tr>
              <tr><td>9</td><td>R$ 180.000,00</td><td>R$ 2.280.000,00</td></tr>
              <tr><td>10</td><td>R$ 120.000,00</td><td>R$ 2.400.000,00</td></tr>
            </tbody>
          </table>
          <p><strong>Cinco boletins de medição fechados.</strong> O VA é o valor de orçamento do que foi efetivamente medido; o CR é o que saiu do caixa, incluindo mão de obra, insumos e equipamento.</p>
          <table>
            <thead><tr><th>Medição</th><th>VP acumulado</th><th>VA acumulado</th><th>CR acumulado</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>R$ 72.000,00</td><td>R$ 54.000,00</td><td>R$ 66.000,00</td></tr>
              <tr><td>2</td><td>R$ 228.000,00</td><td>R$ 186.000,00</td><td>R$ 222.000,00</td></tr>
              <tr><td>3</td><td>R$ 456.000,00</td><td>R$ 372.000,00</td><td>R$ 420.000,00</td></tr>
              <tr><td>4</td><td>R$ 756.000,00</td><td>R$ 606.000,00</td><td>R$ 690.000,00</td></tr>
              <tr><td>5</td><td>R$ 1.128.000,00</td><td>R$ 936.000,00</td><td>R$ 1.056.000,00</td></tr>
            </tbody>
          </table>
          <p><strong>Leitura na quinta medição</strong> (31/07/2026): VP = R$ 1.128.000,00, VA = R$ 936.000,00, CR = R$ 1.056.000,00.</p>
          <ul>
            <li><strong>VPR = VA − VP</strong> = 936.000 − 1.128.000 = <strong>−R$ 192.000,00</strong> de serviço orçado que deveria estar medido e não está.</li>
            <li><strong>IDP = VA ÷ VP</strong> = 936.000 ÷ 1.128.000 = <strong>0,83</strong>. O plano está virando avanço físico a 83% do ritmo suposto.</li>
            <li><strong>VC = VA − CR</strong> = 936.000 − 1.056.000 = <strong>−R$ 120.000,00</strong>. O serviço custou cento e vinte mil a mais do que vale em orçamento.</li>
            <li><strong>IDC = VA ÷ CR</strong> = 936.000 ÷ 1.056.000 = <strong>0,89</strong>. Cada real gasto compra 89 centavos de valor orçado.</li>
            <li><strong>Avanço físico = VA ÷ ONT</strong> = 936.000 ÷ 2.400.000 = <strong>39%</strong>, contra <strong>47%</strong> previstos. Trinta e nove por cento soa razoável até você saber que quarenta e sete estavam contratados.</li>
            <li><strong>EPT = ONT ÷ IDC</strong> = 2.400.000 ÷ 0,8864 = <strong>R$ 2.707.700,00</strong> aproximadamente. Mantido o desempenho de custo, a obra de R$ 2.400.000,00 termina cerca de <strong>R$ 307.700,00 acima</strong>, restando algo como <strong>R$ 1.651.700,00</strong> a gastar.</li>
          </ul>
          <p><strong>Agora a leitura horizontal, que é a que vai para a reunião.</strong> Onde o plano cruzou R$ 936.000,00? Entre a quarta medição (R$ 756.000,00) e a quinta (R$ 1.128.000,00): faltavam R$ 180.000,00 dentro de um incremento mensal de R$ 372.000,00, ou seja, 180 ÷ 372 = 0,48 do mês. O previsto passou por R$ 936.000,00 na <strong>medição 4,48</strong> — a obra está <strong>pouco mais de meio mês atrás do plano, cerca de onze dias úteis</strong>.</p>
          <p>Onze dias úteis e um IDP de 0,83 são o mesmo fato dito de dois jeitos. O índice parece mais dramático porque estamos no trecho mais íngreme da curva, onde poucos dias valem muito dinheiro. Leve os dois números juntos: o índice justifica a preocupação, os onze dias dizem o tamanho do plano de recuperação.</p>
          <p>Um detalhe que costuma sumir: o IDC de 0,89 só existe porque alguém digitou R$ 1.056.000,00 de gasto real. Nenhum cronograma sabe esse número — ele vem do razão contábil, das notas fiscais e da folha, não do Gantt.</p>
        </div>`],
    ['Os sete números, e o jeito específico de errar cada um', `<p>Cada indicador tem uma leitura errada padrão, e os erros de leitura fazem mais estrago do que não medir nada.</p>
        <table>
          <thead><tr><th>Indicador</th><th>Fórmula</th><th>O que responde</th><th>Como costuma ser lido errado</th></tr></thead>
          <tbody>
            <tr><td><strong>VP</strong> (PV)</td><td>custo orçado do trabalho programado</td><td>Quanto deveria estar pronto agora?</td><td>Tirado das datas atuais em vez da linha de base. As datas atuais absorvem todo atraso, então o VP persegue você e a variação dá zero.</td></tr>
            <tr><td><strong>VA</strong> (EV)</td><td>ONT × % executado</td><td>Quanto está pronto, valorado pelo orçamento?</td><td>Vale o que vale o apontamento por trás dele — é o clássico serviço que fica "90% pronto" por três medições seguidas.</td></tr>
            <tr><td><strong>CR</strong> (AC)</td><td>custo efetivamente incorrido</td><td>Quanto já custou?</td><td>Lido antes de as notas entrarem. O CR atrasa, o que embeleza o IDC no começo e o castiga depois.</td></tr>
            <tr><td><strong>VPR</strong> (SV)</td><td>VA − VP</td><td>Quanto trabalho está faltando?</td><td>Ouvido como estouro de orçamento. É medido em reais, mas é uma afirmação sobre <em>prazo</em>.</td></tr>
            <tr><td><strong>VC</strong> (CV)</td><td>VA − CR</td><td>Estamos pagando mais do que o serviço vale?</td><td>Comparado com o orçamento consumido em vez do valor agregado; "já usamos 44% da verba" não diz nada sem o VA ao lado.</td></tr>
            <tr><td><strong>IDP</strong> (SPI)</td><td>VA ÷ VP</td><td>Ritmo de converter plano em avanço</td><td>Tende a 1,0 no fim aconteça o que acontecer — toda obra acaba agregando o ONT inteiro, inclusive a que atrasou um ano.</td></tr>
            <tr><td><strong>IDC</strong> (CPI)</td><td>VA ÷ CR</td><td>Quanto valor cada real comprou</td><td>Aparece como exatamente 1,00 em ferramentas que deduzem o custo real do avanço. Um IDC vindo de uma calculadora que nunca perguntou quanto você gastou é aritmética, não informação.</td></tr>
          </tbody>
        </table>
        <p>Falta um alerta que custa data de entrega a muita obra: o valor agregado pondera tudo por dinheiro, e o <strong>caminho crítico</strong> ignora dinheiro por completo. Uma aprovação de dois dias, barata e sem material envolvido, pode estar exatamente na cadeia que empurra a entrega — e o IDP mal se mexe com ela. Dá para ler 1,05 e entregar atrasado. Olhe os dois painéis, nunca um só.</p>`],
    ['Por que a nossa ferramenta às vezes se recusa a mostrar o IDC', `<p>Vale dizer isso com todas as letras, porque a maioria dos calculadores gratuitos de valor agregado faz o contrário. O custo real é o único dado que não se deduz de um cronograma: ele vem da contabilidade. O atalho tentador é supor que uma tarefa com 40% de avanço consumiu 40% do orçamento — e, se você faz isso, o CR passa a ser igual ao VA por construção, de modo que <strong>o IDC dá exatamente 1,00 para todo projeto que já existiu</strong>. O número parece confiável, não reage a nada e diria a um gerente com o orçamento estourado que está tudo sob controle.</p>
        <p>Por isso o gantts.app tira o custo real de um lugar só: o campo <strong>Gasto</strong> que você preenche na tarefa. Se nenhuma tarefa tiver esse valor, as métricas de custo — custo real, variação de custo, desempenho de custo e previsão de custo final — voltam vazias, e o painel simplesmente as omite em vez de chutar. A variação de prazo e o desempenho de prazo continuam funcionando, porque dependem apenas de datas e avanço. Um número ausente é honesto; um número errado e confiante não é.</p>
        <p>Pelo mesmo motivo, a curva agregada <em>antes</em> de hoje é reconstruída, e não registrada. A ferramenta guarda uma leitura de avanço por tarefa, não o histórico de cada medição passada, então uma curva realizada fiel ao passado não é recuperável a partir do que existe salvo. Em vez de se recusar a desenhá-la, nós a reconstruímos sob uma premissa declarada: o avanço se acumulou de forma uniforme ao longo dos dias úteis já decorridos de cada tarefa. Isso é exato na data de status, que é onde os números são lidos, e aproximado atrás dela. O painel diz isso na cara, não em nota de rodapé.</p>
        <p>Se você quiser a curva histórica de verdade — a que audita medição por medição, como pede a fiscalização de um contrato regido pela Lei 14.133/2021 —, ela mora nos boletins de medição assinados, não em nenhuma ferramenta de cronograma. A curva S serve para prever e negociar; o boletim serve para comprovar.</p>`],
    ['Você não precisa de orçamento para ter uma curva', `<p>A maioria dos planos não tem nenhum dado de custo, e uma curva S que exige custo é uma curva S que ninguém desenha.</p>
        <p>Se nenhuma tarefa tem custo, o gantts.app pondera cada uma pela duração em dias úteis. A forma é a mesma e o eixo passa a ler avanço físico em vez de moeda — uma curva de progresso pura. A variação e o desempenho de prazo significam exatamente o que significavam acima, só que em dias em vez de reais. Acrescente orçamentos depois e o mesmo painel vira uma curva de valor, sem você mexer em mais nada.</p>
        <p>Dois detalhes mudam os números e passam despercebidos. Primeiro, só as tarefas-folha contam: uma barra de grupo já soma o custo dos filhos, então contar as duas infla o orçamento no término conforme a profundidade da sua estrutura analítica. Segundo, marcos têm duração zero e, portanto, não contribuem com peso nenhum — o que é correto, mas surpreende quem marcou "Entrega do bloco B" como marco e esperava vê-lo puxar a curva.</p>
        <p>Uma coisa importa mais do que tudo isso: <strong>defina uma linha de base</strong>. Sem ela, "previsto" só pode significar as suas datas atuais, e as suas datas atuais já incorporam todo atraso que aconteceu. A variação de prazo vai marcar zero para sempre — uma resposta tranquilizadora e completamente inútil.</p>
        <!--FIG:baseline|Barras previstas contra barras reais. A linha de base é a cópia congelada de onde sai a curva prevista; sem ela, o plano se move toda vez que você se move.-->
        <p>Clique em <strong>Linha de base</strong> uma vez, quando o plano for aprovado. A ferramenta informa qual origem usou, de modo que você consegue distinguir um desvio real de uma comparação das suas datas com elas mesmas.</p>`],
    ['Como montar uma aqui', `<ol>
          <li>Monte o cronograma. Você pode digitar em <strong>＋ Tarefa</strong> e <strong>▣ Grupo</strong>, ou jogar a lista inteira em <strong>✨ Colar no Gantt</strong> — uma linha por serviço, <code>(10d)</code> para a duração, <code>after Nome</code> para a precedência, <code>#</code> no início da linha para virar fase e <code>!</code> no fim para virar marco.</li>
          <li>Ajuste as datas em <strong>Início</strong> e <strong>Fim</strong> na gaveta da tarefa, ou ligue <strong>Reprogramar</strong> para as precedências acomodarem tudo sozinhas.</li>
          <li>Clique em <strong>Linha de base</strong> quando o plano for aprovado. É isso que congela o significado de "previsto" e faz a variação de prazo deixar de ser zero.</li>
          <li>Se quiser a curva em reais, preencha <strong>Orçamento</strong> em cada tarefa-folha. Sem isso a curva lê avanço físico, ponderado por dias úteis.</li>
          <li>Atualize <strong>Progresso</strong> a cada medição — é disso que a curva agregada é feita.</li>
          <li>Preencha <strong>Gasto</strong> por tarefa para liberar o custo real, a variação de custo, o desempenho de custo e a previsão de custo final.</li>
          <li>Abra <strong>Curva S</strong>. O painel <strong>Curva S — planejado vs real</strong> traz as séries <strong>Previsto</strong>, <strong>Agregado (avanço real)</strong> e <strong>Custo real</strong>, o veredito em texto e o link <strong>Como isto é calculado</strong>, que mostra a base de ponderação usada.</li>
          <li>Confira o <strong>Caminho crítico</strong> antes de fechar o diagnóstico, porque o valor agregado não enxerga a cadeia que define a data de entrega.</li>
          <li>Exporte em <strong>⬇ Exportar</strong>: <strong>📄 Documento PDF</strong> para anexar ao relatório mensal, <strong>📊 Excel (.xlsx)</strong> para a planilha de medição ou <strong>📽 PowerPoint (.pptx)</strong> para a reunião com o cliente.</li>
        </ol>
        <p>Tudo roda no seu navegador. Sem cadastro, sem envio de arquivo para servidor e sem planilha-modelo para manter na mão.</p>
        <p>Uma última observação sobre o caminho crítico daqui: ele é calculado "como posicionado". Uma precedência só consegue empurrar uma tarefa para a frente, nunca puxá-la para trás — então, se você arrastou uma barra para uma data que a lógica não sustenta, a ferramenta respeita o que você desenhou em vez de reescrever o seu plano por conta própria.</p>`],
  ],
  faq: [
    ['O que é a curva S em gerenciamento de projetos?', 'Um gráfico do trabalho previsto acumulado ao longo do tempo. Tem forma de S porque projetos começam devagar, aceleram no meio e desaceleram no fim. Comparada ao avanço real, a distância vertical entre as curvas é o quanto se está adiantado ou atrasado.'],
    ['Qual a diferença entre curva S e valor agregado?', 'A curva S é a imagem; o valor agregado é a conta por trás dela. O valor agregado põe números na distância — variação de prazo, IDP, variação de custo, IDC — enquanto a curva mostra a forma e a direção, que é o que um número isolado nunca mostra.'],
    ['O que significa um IDP de 0,9?', 'Você agregou 90% do valor que o plano previa para esta altura, ou seja, está cerca de 10% atrás em termos de valor. Abaixo de 1,0 é atraso. Ele não diz quantos dias de atraso você tem — para isso, faça a leitura horizontal da curva.'],
    ['Como calculo IDP e IDC na mão?', 'Três números na mesma data de status: VP, o valor orçado do que estava programado; VA, o valor orçado do que foi medido; CR, o que você gastou. IDP é VA ÷ VP e IDC é VA ÷ CR. Com VP de R$ 1.128.000,00, VA de R$ 936.000,00 e CR de R$ 1.056.000,00: IDP 0,83 e IDC 0,89.'],
    ['Preciso de dados de custo para usar a curva S?', 'Não. Sem custos, as tarefas são ponderadas pela duração em dias úteis e você obtém uma curva de avanço físico — a mesma forma, lida em percentual. Os orçamentos a transformam em curva de valor e liberam as métricas financeiras.'],
    ['Por que o IDC não aparece?', 'Porque nenhum custo real foi informado. O IDC exige gasto de verdade; deduzi-lo do percentual concluído o deixaria em exatamente 1,00 para qualquer projeto, sempre. Preencha o campo Gasto nas tarefas e ele aparece, junto com a variação de custo e a previsão de custo final.'],
    ['Dá para fazer a curva S no Excel?', 'Dá, e é o que a maioria faz — uma coluna acumulada e um gráfico mantidos na mão, refeitos sempre que as datas mudam. Como o cronograma já contém a resposta, gerar a curva a partir dele elimina a etapa de cópia e a divergência que vem junto.'],
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
        <p>Ela existe porque o cronograma mestre e o plano de trabalho são documentos diferentes, com funções diferentes. O cronograma responde "vamos entregar no prazo do contrato"; o lookahead responde "o que acontece na terça-feira, e alguém já pediu o aço". Tentar conduzir uma reunião semanal de obra com um cronograma de duzentas linhas é exatamente a razão de as pessoas imprimirem em A0 e depois ignorarem o painel.</p>
        <p>Na lógica do Last Planner — que no Brasil chega às obras sob o nome de planejamento de médio prazo, entre o plano de longo prazo e a programação semanal — o lookahead é onde as <em>restrições</em> aparecem. E as três semanas não são três semanas iguais: elas endurecem conforme se aproximam.</p>
        <ul>
          <li><strong>A semana 1 está congelada.</strong> As equipes estão contratadas, o material está no canteiro, a frente de serviço está liberada. Só um imprevisto de verdade muda uma linha.</li>
          <li><strong>A semana 2 está comprometida, mas ainda é macia.</strong> As restrições foram removidas, ou têm um responsável com nome e uma data. É a semana em que ainda dá tempo de consertar.</li>
          <li><strong>A semana 3 é planejamento.</strong> O trabalho está identificado e sendo analisado, não prometido. Aqui as tarefas podem se mexer; é para isso que essa semana serve.</li>
        </ul>
        <p>Essa gradação é o que separa um lookahead de uma lista de desejos com três semanas de comprimento. Se tudo na janela tem o mesmo peso, a equipe aprende rápido que nenhuma data ali significa alguma coisa.</p>
        <!--FIG:rolling|A cada segunda-feira a janela avança: a semana 3 vira semana 2, a semana 2 congela e uma nova semana de planejamento aparece.-->`],

    ['Sobreposição, não contenção — o detalhe que quase todo mundo erra', `<p>Esta é a regra que deixa um lookahead correto, e a que as planilhas feitas à mão mais quebram.</p>
        <p>Uma tarefa pertence à janela se ela <strong>se sobrepõe</strong> à janela — não se ela cabe dentro dela. O pacote de fundações de oito meses que começou em março e vai até novembro está acontecendo agora, e é justamente o trabalho que a equipe de campo mais precisa ter à frente. Filtre por tarefas que começam <em>e</em> terminam dentro das três semanas e você elimina todas as atividades longas da obra, deixando um lookahead arrumadinho que descreve um projeto em que ninguém está trabalhando.</p>
        <p>O teste são duas comparações, não quatro:</p>
        <p><code>tarefa.início ≤ janela.fim &nbsp;E&nbsp; tarefa.fim ≥ janela.início</code></p>
        <p>É essa a regra inteira, e é exatamente ela que o gantts.app aplica. Uma consequência que vale explicitar: uma <strong>fase nunca entra pelas próprias datas</strong>. Grupos qualificam apenas como <em>contexto</em> — quando uma tarefa dentro de uma fase cai na janela, os pais dela vêm junto, desenhados como título e não como serviço que você está prometendo. É isso que impede as linhas de chegarem órfãs numa lista plana, em que "Fechamento da ala leste" aparece sem dizer de qual pavimento.</p>
        <!--FIG:lookahead|Só as barras que cruzam a faixa sombreada sobrevivem ao filtro; os títulos das fases vêm junto como contexto.-->`],

    ['Por que a janela começa na segunda-feira', `<p>O lookahead é um ritual semanal preso a uma reunião semanal. Uma janela de quinta a quinta cortaria a semana de trabalho ao meio e seria inútil para quem a lê no barracão.</p>
        <p>Por isso a janela sempre volta para o início da semana. Abra a ferramenta numa quarta-feira e você recebe a janela que começou na segunda, não um bloco de três semanas iniciando no meio da semana. As setas avançam de semana em semana quando você precisa olhar mais longe, e <strong>Esta semana</strong> traz tudo de volta para hoje.</p>
        <p>E são semanas de calendário, não semanas úteis: "três semanas à frente" quer dizer vinte e um dias corridos, não quinze dias úteis. A diferença aparece de forma bem concreta no Brasil, onde uma janela de três semanas pode conter um feriado nacional, um feriado municipal e uma emenda — e continuar tendo vinte e um dias.</p>`],

    ['Um exemplo trabalhado: Residencial Aldeia do Sol, Torre B', `<div class="worked">
        <p><strong>A obra.</strong> Residencial Aldeia do Sol, Torre B, em Goiânia: sete pavimentos-tipo, estrutura concluída, acabamento correndo do 3º ao 5º pavimento. Contrato de R$ 18.400.000,00 e 214 tarefas no cronograma mestre. A engenheira Priscila Fontenele conduz o planejamento com dois encarregados — Edvaldo Nascimento, nas instalações, e Wanderson Ribeiro, no gesso e drywall. <strong>A janela abriu na segunda, 25/05/2026, e foi até domingo, 14/06/2026</strong>: treze das 214 tarefas se sobrepunham a ela.</p>
        <p><em>Semana 1 — congelada, 25 a 31/05.</em> Elétrica do 4º pavimento (Edvaldo, cinco oficiais; eletrodutos no canteiro desde 18/05). Marcação de drywall do 4º (Wanderson, seis oficiais). Impermeabilização do reservatório superior — iniciada em 09/03 e com término previsto para 07/07, e portanto uma tarefa que aparece na janela sem começar nem terminar dentro dela.</p>
        <p><em>Semana 2 — comprometida, 01 a 07/06.</em> Prumadas hidráulicas do 4º (Edvaldo), fechamento de drywall da ala leste (Wanderson) e marcação de elétrica do 5º. Duas restrições abertas: a prumada dependia do projeto compatibilizado revisado — a solicitação estava aberta desde 12/05, sem resposta — e as chapas de drywall dependiam de uma entrega prometida para 28/05. Priscila pôs nome e data em cada uma: o projeto com o coordenador Aurélio Sarmento, para 29/05; a entrega com o comprador, para 28/05.</p>
        <p><em>E essa semana tem quatro dias úteis, não cinco.</em> Quinta-feira, 04/06/2026, é Corpus Christi, e a sexta seguinte é dia de emenda: a subempreiteira de gesso já havia avisado que só voltaria na segunda. A produção da semana foi dimensionada em 80% e nenhuma promessa foi feita para 05/06 — o que é a única forma honesta de tratar um feriado que a obra inteira sabe que vai acontecer e que o cronograma mestre, sem calendário de trabalho configurado, insistia em preencher.</p>
        <p><em>Semana 3 — planejamento, 08 a 14/06.</em> Fechamento de drywall do 5º, segunda fase de elétrica do 4º e o marco "Liberação do 4º pavimento para pintura", em 11/06. Nada prometido; a semana serviu para nomear o que travaria o serviço.</p>
        <p><strong>Uma semana depois, a janela rolou para 01/06 a 21/06.</strong> Priscila clicou uma vez na seta; nada foi redigitado. A semana comprometida virou semana congelada — e a prumada hidráulica não ficou liberada. O projeto compatibilizado não voltou em 29/05: a resposta chegou em 03/06, pedindo mudança de traçado no shaft. A prumada <em>não</em> foi promovida assim mesmo. Foi para a semana de 15/06, com o código de motivo "projeto pendente", e os cinco oficiais de Edvaldo foram para a marcação de elétrica do 5º, serviço que já estava liberado desde a semana 3 anterior. As chapas chegaram em 28/05 e o fechamento começou no prazo.</p>
        <p><strong>O placar.</strong> Seis tarefas prometidas para a semana de 01/06, cinco concluídas como prometido: <strong>PPC de 83%</strong>, um código de motivo. E esse código já tinha aparecido três vezes em nove semanas — que é o que de fato mudou a obra. Priscila passou a rastrear solicitações de projeto numa janela de seis semanas, porque três semanas eram menores que o prazo real de resposta do escritório de projetos, e cadastrou os feriados de 2026 no calendário de trabalho antes da rodada seguinte, para o cronograma parar de prometer produção em dias em que ninguém sobe na obra.</p>
      </div>`],

    ['O que uma reunião de remoção de restrições realmente checa', `<p>Esta é uma reunião de triagem, não de acompanhamento de avanço: para cada tarefa que entra na semana 2, pergunte se aquilo de que ela precisa vai estar lá — e, se não vai, quem está buscando. Sete categorias cobrem praticamente tudo.</p>
        <table>
          <thead><tr><th>Restrição</th><th>A pergunta que se faz</th><th>Quem resolve</th></tr></thead>
          <tbody>
            <tr><td>Material</td><td>Pedido colocado? O prazo de entrega cabe na folga? Existe lugar para descarregar e estocar?</td><td>Suprimentos / comprador</td></tr>
            <tr><td>Projeto e informação</td><td>Prancha liberada para execução, e a solicitação de esclarecimento já voltou?</td><td>Coordenador de projetos</td></tr>
            <tr><td>Mão de obra</td><td>Ofício certo, efetivo certo, contratado e com integração de segurança feita para aquela semana?</td><td>Encarregado da subempreiteira</td></tr>
            <tr><td>Equipamento</td><td>Grua, elevador cremalheira ou balancim no canteiro, testados e não disputados por outra frente?</td><td>Engenheiro de campo</td></tr>
            <tr><td>Licenças e aprovações</td><td>Solicitada — e o prazo real do órgão ou da fiscalização cabe dentro da janela?</td><td>Quem tem a relação com o órgão</td></tr>
            <tr><td>Serviço antecedente</td><td>A frente anterior terminou e foi entregue de verdade, ou está "quase pronta"?</td><td>Planejamento / dono do pacote</td></tr>
            <tr><td>Frente e acesso</td><td>A equipe consegue chegar lá, com andaime, iluminação e rota segura?</td><td>Engenheiro de campo</td></tr>
          </tbody>
        </table>
        <p>Uma tarefa com restrição aberta não entra na semana congelada. Promovê-la assim mesmo é exatamente como um lookahead vira enfeite de parede.</p>`],

    ['PPC: dar nota à promessa', `<p>Um lookahead que ninguém pontua é só um gráfico de Gantt mais curto. O produto da reunião não são as linhas filtradas — é um <strong>compromisso</strong>, e compromisso que ninguém mede é torcida.</p>
        <p>O indicador é o <strong>PPC</strong>, percentual de programação concluída. No fim da semana congelada, divida as atividades concluídas conforme prometido pelas atividades prometidas. Seis prometidas, cinco entregues: 83%. Não existe nota parcial — uma atividade 90% pronta vale zero, porque o ofício seguinte continua sem poder começar.</p>
        <p>Essa dureza é o ponto. O PPC mede o quanto o seu plano é confiável, não o quanto de trabalho foi feito. Uma semana de esforço enorme e não planejado que entregou metade das promessas é uma semana ruim, porque todo mundo a jusante se programou em cima da promessa.</p>
        <p>O <em>motivo</em> anexado a cada falha importa mais do que o número. Um código por atividade não cumprida — projeto pendente, material atrasado, serviço antecedente inacabado, chuva, mudança de escopo, falta de efetivo. Depois de dez semanas eles se empilham e apontam sozinhos a única coisa que vale a pena consertar.</p>
        <p>Equipes novas ficam entre 50% e 60%; remoção sistemática de restrições leva a faixa para 75% a 85%. Semanas seguidas acima de 90% quase sempre querem dizer plano folgado. Acompanhe a tendência e os códigos, não o número absoluto de uma semana.</p>
        <!--FIG:milestone|Pontue a semana contra o que foi prometido, e não contra o que acabou dando certo.-->`],

    ['Gerar em vez de redigitar', `<p>Não faltam modelos de programação de três semanas — a Smartsheet publica um, meia dúzia de outros também, e existe até um formato padrão usado em obras públicas. Todos eles são uma grade em branco que você preenche na mão, e é aí que mora o problema. O cronograma já contém a resposta; o trabalho semanal é copiá-la para fora, e é na cópia que nascem os erros. Atualize o mestre, esqueça o lookahead, e os dois documentos passam a discordar em silêncio.</p>
        <p>No gantts.app o lookahead é uma <em>visão</em> dos mesmos dados:</p>
        <ol>
          <li>Abra o seu plano e ajuste <strong>Exibição</strong> para <strong>Próximas semanas</strong>.</li>
          <li>Escolha o tamanho da janela — 1, 2, 3, 4, 6 ou 8 semanas.</li>
          <li>Avance com as setas para olhar mais longe, ou clique em <strong>Esta semana</strong> para voltar a hoje.</li>
          <li>Ative a coluna <strong>Responsável</strong> em <strong>Colunas</strong>, para que cada linha da janela tenha dono.</li>
          <li>Confira o <strong>Calendário</strong> de trabalho e cadastre os feriados antes de prometer qualquer coisa.</li>
          <li>Exporte em <strong>⬇ Exportar</strong>: <strong>📄 Documento PDF</strong> ou <strong>🖼 Imagem PNG</strong> para o quadro do barracão, <strong>📊 Excel (.xlsx)</strong> para a reunião.</li>
          <li>Volte a <strong>Mostrar todas as tarefas</strong> quando precisar do cronograma inteiro de novo.</li>
        </ol>
        <p>O gráfico se ajusta à janela, de modo que três semanas ficam legíveis em vez de comprimidas num naco de um eixo de dezoito meses. Uma faixa no topo informa qual janela está sendo exibida e a contagem — "lookahead de 3 semanas · 25/05 a 14/06 — mostrando 13 de 214 tarefas" — porque um gráfico filtrado que não avisa que está filtrado é lido como um plano com tarefas faltando.</p>
        <p>A janela acompanha o dia de hoje por padrão, então ela rola sozinha entre uma visita e outra; as setas a prendem numa segunda-feira específica até você clicar em Esta semana. Mude uma data no cronograma mestre e o lookahead já está correto. Não há nada para copiar de novo.</p>`],

    ['Transformar o filtro em documento útil', `<ul>
          <li><strong>Ponha um nome em cada linha.</strong> Um lookahead sem responsável por tarefa é uma lista de esperanças. Ative a coluna Responsável e escreva pessoas, não empresas.</li>
          <li><strong>Detalhe o trabalho próximo mais do que o distante.</strong> Uma tarefa que diz "Acabamento do 4º pavimento — 6 semanas" serve no cronograma mestre e não serve para nada num lookahead. Divida-a conforme ela se aproxima.</li>
          <li><strong>Mantenha curto.</strong> Se o lookahead chega a sessenta linhas, ou a janela está longa demais, ou o plano está detalhado demais para esta reunião.</li>
          <li><strong>Analise os itens de prazo longo num horizonte maior.</strong> Se um órgão leva cinco semanas para aprovar, uma triagem de três semanas encontra o problema sempre — e sempre tarde demais.</li>
          <li><strong>Registre as falhas.</strong> Um código de motivo escrito no quadro branco desaparece na quinta-feira. Ele precisa sair da reunião num arquivo.</li>
          <li><strong>Trate feriado e emenda como restrição.</strong> Corpus Christi, 7 de setembro, o feriado municipal do padroeiro e a sexta enforcada não são imprevistos: estão no calendário desde janeiro. Cadastre-os no calendário de trabalho e a janela para de prometer produção que não existe.</li>
        </ul>`],
  ],
  faq: [
    ['O que é a programação de 3 semanas?', 'Um extrato rolante do cronograma mestre mostrando apenas o trabalho que toca as próximas três semanas. É atualizado semanalmente e serve para coordenar o dia a dia e identificar restrições enquanto ainda dá tempo de resolvê-las.'],
    ['Por que três semanas?', 'É longo o bastante para que restrições — materiais, licenças, equipes, projeto — ainda possam ser resolvidas, e curto o bastante para que as datas sejam confiáveis. Janelas de duas, quatro e seis semanas também são comuns; a duração certa depende dos seus prazos de suprimento e de aprovação.'],
    ['Uma tarefa longa iniciada meses atrás deve aparecer no lookahead?', 'Sim. Tudo que se sobrepõe à janela pertence a ela. Filtrar apenas o que cabe inteiro dentro das três semanas elimina justamente o trabalho longo que está acontecendo agora, e as fases nunca entram pelas próprias datas — vêm junto como contexto das tarefas filhas.'],
    ['O que é PPC e qual é um bom resultado?', 'Atividades concluídas conforme prometido divididas pelas atividades prometidas, sem nota parcial. Equipes novas ficam em 50% a 60%; de 75% a 85% é bom. Acima de 90% por várias semanas costuma indicar plano folgado. Os códigos de motivo dizem mais do que o número.'],
    ['O que acontece com uma tarefa que não fica liberada?', 'Ela sai da semana congelada em vez de ser prometida assim mesmo, o motivo é registrado e a equipe é remanejada para um serviço já liberado. Promover uma tarefa com restrição aberta destrói justamente a confiabilidade que o lookahead existe para construir.'],
    ['Dá para fazer um lookahead no Excel, e como imprimo?', 'Dá, e é o que a maioria das equipes faz — redigitando linhas do cronograma toda semana. Gerá-lo como uma visão elimina a redigitação e a divergência que vem junto. Para imprimir, mude a Exibição para Próximas semanas e exporte em PDF ou PNG: a exportação reflete o que está na tela, então você obtém a janela e não o cronograma inteiro.'],
  ],
  related: [['critical-path-method', 'O caminho crítico'], ['s-curve-project-management', 'Curva S e valor agregado'], ['gantt-chart-dependencies', 'Precedências: FS, SS, FF, SF']],
},

'mermaid-gantt-chart': {
  h1: 'Gráfico de Gantt em Mermaid: sintaxe, armadilhas e ida e volta para um editor de verdade',
  metaTitle: 'Gantt em Mermaid: sintaxe e editor',
  metaDesc: 'A sintaxe gantt do Mermaid explicada — seções, tags, precedências, excludes — mais as armadilhas de contagem e como editar visualmente e colar de volta.',
  date: '2026-07-19',
  lead: 'Blocos gantt do Mermaid são renderizados nativamente no GitHub, no GitLab, no Notion e no Obsidian, o que os torna a forma mais fácil de colocar um cronograma onde o trabalho já acontece — dentro do repositório, revisável num pull request. Também são penosos de <em>editar</em>: mude uma data e você recalcula na mão toda a corrente de <code>after</code> abaixo dela. Aqui estão a sintaxe campo a campo, um exemplo completo para colar num README, as armadilhas que renderizam perfeitamente estando erradas, e o passo que falta — editar visualmente e recuperar o texto.',
  figIntro: 'O mesmo cronograma, como texto e como barras:',
  sections: [
    ['A sintaxe de uma só passada', `<p>Um bloco gantt abre com a palavra <code>gantt</code> e algumas linhas de cabeçalho; depois vêm os títulos de <code>section</code> com as linhas de tarefa embaixo. A indentação é convenção, não gramática — o Mermaid não se importa, mas quem lê o diff se importa muito.</p>
        <p>Uma linha de tarefa é um nome, dois-pontos e então campos separados por vírgula:</p>
        <p><code>Nome da tarefa :tag, id, início, duração</code></p>
        <ul>
          <li><strong>Tags</strong> — qualquer uma entre <code>done</code>, <code>active</code>, <code>crit</code> e <code>milestone</code>, em qualquer ordem, e dá para empilhar mais de uma. Opcionais.</li>
          <li><strong>id</strong> — uma palavra simples, sem espaço nem pontuação, necessária apenas se algo mais precisar se referir a esta tarefa.</li>
          <li><strong>início</strong> — uma data, ou <code>after algumId</code>, ou omitido para continuar a partir da tarefa de cima.</li>
          <li><strong>duração</strong> — <code>5d</code>, <code>2w</code>, ou uma segunda data absoluta.</li>
        </ul>
        <p>Linhas de cabeçalho que vale conhecer: <code>dateFormat</code> (como as datas do <em>seu</em> arquivo estão escritas), <code>excludes weekends</code>, <code>title</code> e <code>axisFormat</code> (como o eixo é rotulado, em códigos no estilo strftime). Os campos são classificados pelo formato, e não estritamente pela posição — é por isso que <code>:done, aud, 2026-03-02, 5d</code> e <code>:aud, done, 2026-03-02, 5d</code> funcionam igualmente bem.</p>
        <!--FIG:syntax|Cada campo de uma linha de tarefa do Mermaid, e quais deles são opcionais.-->`],

    ['Um exemplo completo para colar num README', `<p>Um bloco válido e inteiro, para trabalho de verdade: a migração de um gateway de cobrança para o Pix Automático. Ele usa seções, datas absolutas, correntes de <code>after</code>, todas as tags, um marco e fins de semana excluídos. Cole num bloco cercado <code>mermaid</code> em qualquer arquivo Markdown do GitHub e ele renderiza.</p>
        <div class="worked">
        <pre><code>gantt
    title Migração para o Pix Automático
    dateFormat YYYY-MM-DD
    axisFormat %d/%m
    excludes weekends

    section Descoberta
    Auditoria dos fluxos atuais :done, aud, 2026-03-02, 5d
    Especificação OpenAPI       :done, esp, after aud, 4d
    Revisão da especificação    :active, rev, after esp, 2d

    section Construção
    Serviço de autenticação     :crit, auth, after rev, 10d
    Endpoints de cobrança       :cob, after auth, 12d
    Regerar o SDK do cliente    :sdk, after cob, 3d

    section Virada
    Homologação com o PSP       :hom, after sdk, 5d
    Beta público                :milestone, beta, 2026-05-04, 0d
    Descontinuar a v1           :desc, after beta, 2w</code></pre>
        <p>Lendo linha a linha:</p>
        <ul>
          <li><code>dateFormat YYYY-MM-DD</code> diz ao Mermaid como <em>ler</em> as datas que você digitou. É formato de entrada, não de saída — mexer nele não muda o eixo.</li>
          <li><code>axisFormat %d/%m</code> é o lado da saída, e é o que faz o eixo aparecer como "02/03" em vez de uma data ISO — a convenção de data que o leitor brasileiro espera. Use <code>%V</code> para número de semana em qualquer coisa maior que um trimestre.</li>
          <li><code>excludes weekends</code> faz todas as barras pularem sábado e domingo, no diagrama inteiro — não existe exceção por tarefa. A mesma diretiva aceita datas específicas, como <code>excludes 2026-04-03</code> para a Sexta-feira Santa, e nomes de dias da semana. É o único lugar onde feriado brasileiro cabe neste formato.</li>
          <li><code>Auditoria dos fluxos atuais :done, aud, 2026-03-02, 5d</code> — tag, id, um início absoluto (uma segunda-feira) e cinco dias. As durações incluem o dia de início, então esta termina na sexta, 06/03.</li>
          <li><code>after aud</code> quer dizer "comece quando <code>aud</code> terminar" — com fins de semana excluídos, isso é segunda, 09/03, e não sábado, dia 07.</li>
          <li><code>:crit, auth, ...</code> pinta a barra com a cor de caminho crítico. Repare no verbo: <em>pinta</em>. Veja os limites mais abaixo.</li>
          <li><code>Endpoints de cobrança :cob, after auth, 12d</code> não tem tag nenhuma; o primeiro campo é só um id. Sem tag significa trabalho futuro.</li>
          <li><code>Beta público :milestone, beta, 2026-05-04, 0d</code> é um marcador de comprimento zero numa data fixa. Marcos ganham id como qualquer outra linha, então o <code>after beta</code> da última linha é perfeitamente legal.</li>
          <li><code>2w</code> são duas semanas. O Mermaid também aceita <code>h</code> e <code>m</code>, raramente úteis aqui.</li>
        </ul>
        <p>As linhas em branco entre as seções são decorativas — o Mermaid as ignora, e o nosso importador também. Mantenha assim mesmo: um bloco de quarenta tarefas sem elas é ilegível num diff.</p>
        </div>`],

    ['Referência da linha de tarefa', `<p>Cada campo e modificador, o que ele faz e como aparece na prática.</p>
        <table>
          <thead><tr><th>Campo ou modificador</th><th>Exemplo</th><th>O que faz</th></tr></thead>
          <tbody>
            <tr><td><code>id</code></td><td><code>aud</code></td><td>Uma palavra simples que nomeia a tarefa para que <code>after</code> possa se referir a ela. Sem espaços nem pontuação. Opcional, a menos que algo dependa da tarefa.</td></tr>
            <tr><td><code>after</code></td><td><code>after aud</code></td><td>Começa quando a tarefa nomeada termina. Só término-início, sem defasagem. Aceita vários ids — <code>after a b</code> espera pelo que terminar mais tarde.</td></tr>
            <tr><td><code>done</code></td><td><code>:done, aud, …</code></td><td>Desenha a barra como concluída. Sem percentual: 100% e "praticamente pronto" ficam idênticos.</td></tr>
            <tr><td><code>active</code></td><td><code>:active, rev, …</code></td><td>Desenha a barra como em andamento. De novo, sem número por trás.</td></tr>
            <tr><td><code>crit</code></td><td><code>:crit, auth, …</code></td><td>Colore a barra como crítica. É uma afirmação que você digita, não algo que o Mermaid deduza — nada confere isso contra a cadeia de precedências.</td></tr>
            <tr><td><code>milestone</code></td><td><code>:milestone, beta, …</code></td><td>Desenha um losango no lugar da barra. Use junto com <code>0d</code>.</td></tr>
            <tr><td>Unidades de duração</td><td><code>5d</code> · <code>2w</code> · <code>8h</code></td><td>Dias, semanas, horas (também <code>m</code>). Incluem o dia de início: <code>5d</code> a partir de segunda termina na sexta.</td></tr>
            <tr><td>Data de término</td><td><code>2026-03-02, 2026-03-06</code></td><td>Uma segunda data no lugar da duração, para um término fixado por fora.</td></tr>
            <tr><td><code>dateFormat</code></td><td><code>dateFormat YYYY-MM-DD</code></td><td>Como as datas do arquivo são interpretadas. Linha de cabeçalho, uma vez por diagrama.</td></tr>
            <tr><td><code>axisFormat</code></td><td><code>axisFormat %d/%m</code></td><td>Como o eixo é rotulado, em códigos strftime. Puramente cosmético.</td></tr>
            <tr><td><code>excludes</code></td><td><code>excludes weekends</code></td><td>Dias não trabalhados. Aceita também datas específicas (<code>excludes 2026-04-03</code>) e nomes de dias da semana. Vale para o diagrama inteiro.</td></tr>
          </tbody>
        </table>`],

    ['Quatro coisas que vão te pegar', `<p><strong>1. As durações incluem o dia de início.</strong> <code>5d</code> a partir de segunda, dia 5, vai até sexta, dia 9, e não até o dia 10. Um erro de um dia aqui desloca todas as tarefas do arquivo e mesmo assim ele renderiza perfeitamente — que é o pior modo de falha possível, porque nada parece quebrado.</p>
        <p><strong>2. <code>after</code> junto com <code>excludes weekends</code> é onde moram os bugs de verdade.</strong> Se uma antecessora termina numa sexta, a sucessora começa na <em>segunda</em> — não no sábado. Qualquer ferramenta que resolva o <code>after</code> somando um dia de calendário vai colocar tarefas em fins de semana num arquivo que os proíbe explicitamente, e todas as datas seguintes derivam a partir dali. A nossa fazia isso, por pouco tempo. A correção passa a aritmética pelo calendário útil, para que a importação concorde com o que o Mermaid desenha, e o teste que protege isso afirma a propriedade em vez de datas específicas: nenhum início ou término <em>derivado</em> pode cair num dia excluído. Datas que você digitou à mão ficam onde você as pôs, fim de semana ou não — mover em silêncio a data explícita de um autor é o tipo errado de ajuda.</p>
        <p><strong>3. Não existe escape.</strong> Os dois-pontos iniciam a lista de campos e a vírgula separa campos, então uma tarefa chamada <code>Fase 2: projeto, revisão</code> vira uma tarefa "Fase 2" com campos sem sentido. Mantenha dois-pontos, vírgulas e ponto e vírgula fora dos nomes; na exportação nós trocamos esses caracteres por espaço em vez de emitir uma linha que não vai ser interpretada.</p>
        <p><strong>4. Uma duração ilegível vira zero em silêncio.</strong> Escreva <code>3dd</code> e você recebe uma barra de comprimento zero em vez de um erro. Depois de uma edição em massa, procure tarefas invisíveis.</p>
        <!--FIG:deps|"after" é término-início com defasagem zero — o único tipo de ligação que o formato tem.-->`],

    ['Os limites de um formato de diagrama', `<p>O gantt do Mermaid é uma linguagem de desenho, não um motor de cronograma, e a diferença aparece no instante em que você quer que o gráfico <em>responda</em> a uma pergunta em vez de ilustrar uma resposta já conhecida.</p>
        <ul>
          <li><strong>Sem recursos.</strong> Não há campo para quem faz o serviço, nem custo, nem esforço, nem unidade. Não dá para superalocar alguém no Mermaid porque o Mermaid não sabe que alguém existe.</li>
          <li><strong>Sem folga e sem caminho crítico calculado.</strong> <code>crit</code> é uma cor que você aplica na mão. Nada percorre o grafo de precedências, calcula datas cedo e tarde ou diz qual cadeia comanda a data de entrega. Um diagrama com todas as barras marcadas como <code>crit</code> é tão válido quanto um sem nenhuma.</li>
          <li><strong>Sem linha de base.</strong> Não há onde registrar o que o plano dizia no mês passado, então não existe desvio para mostrar nem atraso para medir.</li>
          <li><strong>Apenas término-início.</strong> <code>after</code> é FS com defasagem zero. Início-início, término-término, início-término e qualquer defasagem ou antecipação não têm onde caber. Planos reais estão cheios de "começar o teste três dias depois que o desenvolvimento começar" — no Mermaid isso vira uma data fixa, e a ligação some.</li>
          <li><strong>Sem percentual de avanço.</strong> Uma tarefa com 40% e outra com 90% são as duas simplesmente "active".</li>
          <li><strong>Seções planas.</strong> Sem grupos aninhados, então uma estrutura analítica com mais de um nível achata na entrada.</li>
        </ul>
        <p>Nada disso faz dele um formato ruim. Faz dele um formato de <em>publicação</em>: ótimo para mostrar um cronograma, inútil para derivar um. É exatamente por isso que a ida e volta importa.</p>`],

    ['Editar visualmente e colar o texto de volta', `<p>Muitas ferramentas renderizam Mermaid. O que faltava era o caminho inverso — arrastar barras e recuperar a sintaxe.</p>
        <ol>
          <li>Cole o diagrama em <strong>✨ Colar no Gantt</strong>, ou use <strong>📂 Abrir</strong> para carregar um arquivo <code>.mmd</code> ou um <code>.md</code> com bloco cercado. A detecção é pelo conteúdo, não pela extensão.</li>
          <li>Confira o aviso de importação: ele diz quantas tarefas entraram e o que foi adivinhado no caminho.</li>
          <li>Arraste, ligue e reprograme como em qualquer outro gráfico. O <code>excludes weekends</code> liga o <strong>Calendário</strong> de trabalho, de modo que as datas geradas concordam com o arquivo de origem.</li>
          <li>Ative <strong>Reprogramar</strong> se quiser que as precedências acomodem tudo sozinhas ao mover uma barra.</li>
          <li>Ligue <strong>Caminho crítico</strong> para ver a cadeia que o Mermaid nunca calculou.</li>
          <li>Vá em <strong>⬇ Exportar ▸ 🧜 Mermaid gantt (texto)</strong> e escolha <strong>Copiar para a área de transferência</strong> ou <strong>Baixar .mmd</strong>.</li>
          <li>Cole de volta no seu README e faça o commit do diff.</li>
        </ol>
        <p>A ida e volta perde informação de um jeito conhecido e sem surpresas. O avanço mapeia 100% para <code>done</code> e de 1% a 99% para <code>active</code> na saída; <code>active</code> volta como 50% na entrada — um palpite sobre o qual você é avisado, em vez de descobrir num relatório de status. As ligações que não conseguem ser escritas como <code>after</code> — qualquer uma com defasagem, e qualquer SS, FF ou SF — viram datas absolutas, que continuam corretas mesmo deixando de ser fáceis de manter.</p>
        <p>Uma assimetria deliberada, e não um defeito: <strong><code>crit</code> é escrito na exportação e nunca lido na importação.</strong> Na saída ele é derivado — o editor calculou o caminho crítico a partir do grafo de precedências, então a tag é verdadeira no momento em que é escrita. Na entrada, ele é uma palavra que alguém digitou num arquivo que pode estar semanas desatualizado, e confiar nela permitiria que um diagrama velho pintasse de vermelho uma cadeia que não é crítica. Então ele é escrito e depois ignorado: o caminho crítico que você vê depois de uma importação foi recalculado, não afirmado.</p>
        <p>Vale lembrar como esse recálculo funciona aqui: o caminho crítico é "como posicionado". Uma precedência só consegue empurrar uma tarefa para a frente, nunca puxá-la para trás — então uma barra que você arrastou para uma data mais tardia fica onde você a colocou, e a criticidade é calculada em cima do desenho real e não de um plano ideal que ninguém aprovou.</p>
        <p>Há também um efeito colateral simpático para quem usa um LLM para rascunhar cronogramas: peça a sintaxe gantt do Mermaid, cole a resposta e você tem um gráfico editável de verdade, com caminho crítico calculado — sem chave de API e sem servidor no meio.</p>`],
  ],
  faq: [
    ['Como faço um gráfico de Gantt no Mermaid?', 'Inicie o bloco com gantt, acrescente dateFormat YYYY-MM-DD e então títulos de section com linhas de tarefa embaixo, no formato "Nome :tag, id, início, duração" — por exemplo "Auditoria :done, aud, 2026-03-02, 5d".'],
    ['O 5d do Mermaid inclui o dia de início?', 'Sim. Uma tarefa de 5d começando na segunda, dia 2, termina na sexta, dia 6. Essa contagem inclusiva é a fonte mais comum de erros de um dia, e produz um diagrama que renderiza perfeitamente com todas as datas erradas em um dia por tarefa.'],
    ['Como funcionam as precedências no gantt do Mermaid?', 'Use "after algumId" no campo de início. É sempre término-início sem defasagem — início-início, término-término e defasagens não podem ser expressos. Dá para nomear várias antecessoras, como em "after a b", e a tarefa espera pela que terminar mais tarde.'],
    ['O after pula os fins de semana?', 'Pula quando o diagrama declara "excludes weekends". A sucessora de uma tarefa que termina na sexta começa na segunda, e a duração é contada em dias úteis. Ferramentas que resolvem o after somando um dia de calendário acabam colocando tarefas no sábado num arquivo que proíbe sábado.'],
    ['O Mermaid calcula o caminho crítico?', 'Não. A tag crit é uma cor que você aplica na mão; nada no Mermaid percorre o grafo de precedências nem calcula folga. É por isso que o gantts.app exporta crit e o ignora na importação — a criticidade é recalculada a partir das precedências em vez de ser aceita de um arquivo possivelmente desatualizado.'],
    ['Dá para converter um gantt do Mermaid em gráfico editável?', 'Dá. Abra o arquivo .mmd ou o Markdown no gantts.app, edite visualmente e use ⬇ Exportar ▸ 🧜 Mermaid gantt (texto) para copiar a sintaxe atualizada de volta.'],
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
