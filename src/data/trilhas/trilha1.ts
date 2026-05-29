import type { Trilha } from '../../types'

export const trilha1: Trilha = {
  id: 'trilha-1',
  titulo: 'Quem é Deus',
  descricao: 'Descubra quem é o Deus que se revela na criação e nas Escrituras.',
  icone: '✨',
  desbloqueada: true,
  semanas: [
    {
      id: 'semana-1-1',
      numero: 1,
      tema: 'Deus existe?',
      nucleoDoutrinario: 'Teologia natural e revelação geral',
      concluida: false,
      licaoCompleta: {
        id: 'licao-1-1',
        gancho:
          'Se alguém te perguntar hoje "como você sabe que Deus existe?", o que você responderia? A maioria dos cristãos fica sem resposta. Vamos mudar isso.',
        textoBiblicoPrincipal: {
          referencia: 'Romanos 1:19-20',
          texto:
            'O que de Deus se pode conhecer é manifesto entre eles, porque Deus lhes manifestou. Pois os atributos invisíveis de Deus, assim o seu eterno poder, como também a sua própria divindade, claramente se reconhecem, desde a criação do mundo, sendo percebidos por meio das coisas que foram criadas.',
          versao: 'NVI',
          palavrasChave: ['manifesto', 'atributos invisíveis', 'criação', 'eterno poder', 'divindade'],
        },
        textosBiblicosApoio: [
          {
            referencia: 'Salmo 19:1-2',
            texto:
              'Os céus declaram a glória de Deus; o firmamento proclama as obras das suas mãos. Um dia ao outro dia transmite essa mensagem; uma noite à outra noite revela esse conhecimento.',
            versao: 'NVI',
            palavrasChave: ['céus', 'glória', 'firmamento', 'proclama'],
          },
          {
            referencia: 'Atos 17:24-27',
            texto:
              'O Deus que fez o mundo e tudo o que nele existe é Senhor do céu e da terra e não habita em templos feitos por mãos humanas. E também não é servido por mãos humanas, como se necessitasse de alguma coisa, pois ele mesmo dá a todos a vida, o fôlego e todas as coisas. [...] Isso para que os homens buscassem a Deus e, porventura, tentando apalpá-lo, o achassem, ainda que ele não está longe de cada um de nós.',
            versao: 'NVI',
            palavrasChave: ['Senhor', 'vida', 'fôlego', 'buscassem', 'achassem'],
          },
        ],
        contextoHistorico:
          'Paulo escreve aos Romanos por volta de 57 d.C., numa cidade repleta de templos e deuses. Roma era o centro do mundo antigo — uma metrópole com mais de um milhão de habitantes e altares para dezenas de divindades. O argumento de Paulo não era voltado para cristãos convencidos, mas era uma análise radical da condição humana diante de um Deus que já se revelou. Neste contexto, dizer que Deus se manifesta na criação era ir contra a corrente de um mundo fragmentado em mil religiões. Paulo estabelece que não há desculpa para ignorar Deus — a criação fala por si mesma.',
        palavraOriginal: {
          palavra: 'φανερόν (phanerón)',
          idioma: 'grego',
          pronuncia: 'fah-neh-RON',
          significado: 'Manifesto, tornado visível, evidente. O que estava oculto sendo revelado ao olhar.',
          relevancia:
            'Paulo não diz que Deus pode ser deduzido com esforço intelectual — diz que Ele já se tornou visível. A revelação é ativa, não passiva. Deus não se esconde: Ele se mostra. A questão não é se Deus existe, mas por que os seres humanos resistem ao que já está diante deles.',
        },
        explicacaoDoutrina: `A teologia natural é a capacidade de conhecer algo sobre Deus por meio da criação, sem precisar da Bíblia. Paulo, em Romanos 1, afirma que essa revelação é suficiente para tornar os seres humanos sem desculpa diante de Deus.

Chamamos isso de revelação geral: Deus se revelou a todas as pessoas, em todos os tempos, por meio do mundo criado. A revelação especial é a Bíblia — um nível mais profundo e específico de conhecimento. Mas a revelação geral antecede e complementa a Escritura.

O que a criação revela? Pelo menos três coisas: que existe um Criador com poder eterno (a complexidade e grandiosidade do universo apontam para uma causa além dele mesmo), que esse Criador é inteligente e ordenado (as leis da física, da matemática, da biologia mostram design e coerência), e que esse Criador se importa com a vida (a abundância e a beleza do mundo vão além do necessário para a mera sobrevivência).

Para um jovem cristão, isso significa que a fé não exige desligar o cérebro. Pelo contrário: pensar honestamente sobre o universo é um ato de adoração. Cada vez que você se maravilha com algo na criação — um céu estrelado, a complexidade de uma célula, a força de uma cachoeira — você está sendo tocado pela voz de um Deus que escolheu se revelar.`,
        citacaoAutor: {
          autor: 'C.S. Lewis',
          citacao:
            'Acreditar em Deus não significa acreditar em algo sem evidências. Significa confiar naquele que tem dado evidências suficientes para um coração disposto a ver.',
          contextoAutor:
            'C.S. Lewis foi um dos maiores escritores e apologistas cristãos do século XX. Mas ele começou como ateu convicto — um homem que usava a razão para rejeitar Deus. Sua jornada intelectual de retorno à fé está narrada em "Surpreendido pela Alegria". Lewis se tornou cristão não por sentimento, mas por evidências que ele mesmo, a contragosto, não conseguiu mais ignorar.',
          relevanciaParaLicao:
            'Lewis viveu na pele a tensão entre razão e fé. Quando ele fala em "coração disposto a ver", está reconhecendo que o problema do ateísmo muitas vezes não é falta de evidências, mas uma resistência da vontade. Isso ressoa com o argumento de Paulo: a revelação geral existe, mas pode ser suprimida.',
        },
        evidenciaExterna: {
          tipo: 'pesquisa',
          titulo: 'Intuição Teísta Natural',
          descricao:
            'Estudo de 2018 conduzido pela Universidade de Oxford, dentro do projeto "Cognition, Religion and Theology" (financiado pela Fundação John Templeton), pesquisou mais de 57 países e indicou que seres humanos possuem uma tendência cognitiva natural a perceber intencionalidade e design no mundo ao redor. Pesquisadores chamaram esse fenômeno de "intuição teísta" — uma disposição cognitiva que parece ser universal e transcultural. Isso não prova a existência de Deus, mas demonstra que a ideia não é irracional nem artificial — pode ser a resposta natural da mente humana diante da criação.',
          fonte: 'Projeto Cognition, Religion and Theology — Universidade de Oxford (2018)',
        },
        aplicacaoPratica: [
          'Quando você olha para o céu estrelado ou para algo complexo na natureza — uma folha, um olho humano, o padrão das ondas —, o que passa pela sua cabeça? Isso é revelação geral em ação. Deus falando sem palavras.',
          'Se um amigo te desafiar com "como você sabe que Deus existe?", você pode apontar para o que a criação comunica antes mesmo de abrir a Bíblia. O mundo visível faz referência ao invisível.',
          'A fé cristã não pede que você desligue o cérebro. Ela convida a pensar com honestidade e abertura sobre o que o mundo ao redor comunica. Cada pergunta honesta te aproxima, não te afasta de Deus.',
        ],
        perguntaReflexao:
          'Tem alguma coisa na criação que, quando você vê ou experimenta, te faz sentir que há algo maior do que você mesmo? O que é, e por que você acha que isso acontece?',
        oracaoModelo: {
          adoracao:
            'Deus, tu te revelaste no que fizeste. Cada detalhe da criação fala de ti, e eu quero aprender a ouvir essa voz com mais atenção. Que eu nunca passe pelo mundo sem perceber tua presença nele.',
          confissao:
            'Confesso que muitas vezes passo pelo mundo sem notar tua presença. Deixo que a correria, as telas e os ruídos abafem o que tu colocaste visível ao meu redor. Perdoa-me por suprimir o que tu declaras.',
          pedido:
            'Me dá coragem para buscar respostas com honestidade e fé para confiar em ti no que ainda não entendo completamente. Que a criação não seja apenas cenário para minha vida, mas uma voz que me leva a ti todos os dias.',
        },
      },
      microInteracoes: [
        {
          id: 'micro-1-1-1',
          diaDaSemana: 1,
          tipo: 'versiculo',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            referencia: 'Salmo 19:1',
            texto: 'Os céus declaram a glória de Deus; o firmamento proclama as obras das suas mãos.',
            versao: 'NVI',
            reflexao:
              'O salmista diz que os céus "declaram" — é um verbo ativo. O universo não é silencioso: ele fala. Hoje, pause por 60 segundos olhando para o céu (ou para qualquer elemento da natureza) e ouça o que ele diz sobre quem o criou.',
          } as import('../../types').VersiculoConteudo,
        },
        {
          id: 'micro-1-1-2',
          diaDaSemana: 2,
          tipo: 'quiz',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            pergunta: 'Segundo Romanos 1:19-20, o que pode ser conhecido sobre Deus por meio da criação?',
            opcoes: [
              {
                id: 'a',
                texto: 'O plano de salvação completo',
                correta: false,
                explicacao:
                  'O plano de salvação pertence à revelação especial (a Bíblia), não à revelação geral. A criação revela atributos de Deus, mas não o Evangelho.',
              },
              {
                id: 'b',
                texto: 'Seu eterno poder e divindade',
                correta: true,
                explicacao:
                  'Paulo afirma que "os atributos invisíveis de Deus, assim o seu eterno poder, como também a sua própria divindade, claramente se reconhecem" pela criação. Essa é a revelação geral.',
              },
              {
                id: 'c',
                texto: 'Apenas que Deus é bom',
                correta: false,
                explicacao:
                  'A bondade de Deus pode ser percebida na criação, mas Paulo é mais específico: é o eterno poder e a divindade que ficam claros.',
              },
              {
                id: 'd',
                texto: 'Nada — Deus é incompreensível',
                correta: false,
                explicacao:
                  'Paulo diz exatamente o oposto: a revelação de Deus na criação é suficiente para deixar os seres humanos "sem desculpa". Não conhecer Deus não é um problema de ausência de evidências.',
              },
            ],
          } as import('../../types').QuizConteudo,
        },
        {
          id: 'micro-1-1-3',
          diaDaSemana: 3,
          tipo: 'desafio',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            descricao: 'Saia e observe algo na natureza hoje.',
            instrucao:
              'Escolha qualquer elemento natural — uma planta, o céu, um animal, a chuva, o vento. Observe por pelo menos 2 minutos. Depois, anote aqui o que esse detalhe te diz sobre quem o criou. Não precisa ser teológico — seja honesto com o que você sentiu ou pensou.',
          } as import('../../types').DesafioConteudo,
        },
        {
          id: 'micro-1-1-4',
          diaDaSemana: 4,
          tipo: 'citacao',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            autor: 'Agostinho de Hipona',
            citacao:
              'Nos fizeste para ti, e o nosso coração está inquieto enquanto não repousa em ti.',
            comentario:
              'Essa frase abre as Confissões, uma das obras mais importantes da história do pensamento cristão. Agostinho não está falando de uma inquietação patológica — ele está descrevendo algo que toda pessoa sente: que existe um vazio que o mundo não consegue preencher. Segundo ele, essa inquietação é ela mesma uma evidência de que fomos feitos para algo maior.',
            contextoAutor:
              'Agostinho (354-430 d.C.) foi um dos maiores teólogos da história da Igreja. Mas antes de ser cristão, ele buscou preenchimento em filosofia, prazer e poder. Sua conversão é uma das mais famosas da história. Nas Confissões, ele narra como tentou por anos fugir de Deus — e como Deus o encontrou mesmo assim. Assim como Paulo em Romanos 1, Agostinho acreditava que a busca por Deus está inscrita na própria natureza humana.',
          } as import('../../types').CitacaoConteudo,
        },
        {
          id: 'micro-1-1-5',
          diaDaSemana: 5,
          tipo: 'revisao',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            pergunta:
              'Depois dessa semana estudando Romanos 1 e o tema da revelação geral, como você responderia se alguém te perguntasse: "Como você sabe que Deus existe?"',
            dica: 'Use o que aprendeu sobre revelação geral, a palavra "phanerón" e o argumento de Paulo. Sua resposta não precisa ser perfeita — seja genuíno.',
          } as import('../../types').RevisaoConteudo,
        },
      ],
    },
    {
      id: 'semana-1-2',
      numero: 2,
      tema: 'Quem Deus diz que é',
      nucleoDoutrinario: 'Revelação especial e atributos divinos',
      concluida: false,
      licaoCompleta: {
        id: 'licao-1-2',
        gancho: 'Você já teve um amigo que todo mundo descrevia diferente? Às vezes a única forma de saber quem alguém realmente é — é deixar que ela mesma se apresente.',
        textoBiblicoPrincipal: {
          referencia: 'Êxodo 34:6-7',
          texto: 'O Senhor passou à sua frente, proclamando: O Senhor, o Senhor, Deus compassivo e misericordioso, tardio em irar-se e abundante em amor e fidelidade, que mantém o amor até a milésima geração e perdoa a iniquidade, a transgressão e o pecado.',
          versao: 'NVI',
          palavrasChave: ['compassivo', 'misericordioso', 'amor', 'fidelidade', 'perdoa'],
        },
        textosBiblicosApoio: [
          {
            referencia: 'João 14:9',
            texto: 'Quem me viu, viu o Pai.',
            versao: 'NVI',
            palavrasChave: ['viu', 'Pai', 'Jesus'],
          },
        ],
        contextoHistorico: 'Êxodo 34 acontece após um dos momentos mais dramáticos do Antigo Testamento: o pecado do bezerro de ouro. Moisés sobe o monte novamente, depois de ter quebrado as primeiras tábuas. Nesse contexto de falha humana e graça divina, Deus decide revelar o seu próprio nome e caráter. Não é um momento de punição — é um momento de auto-revelação. Deus escolhe se definir em termos de misericórdia, amor e fidelidade.',
        palavraOriginal: {
          palavra: 'חֶסֶד (hesed)',
          idioma: 'hebraico',
          pronuncia: 'KHE-sed',
          significado: 'Amor leal, bondade covenant, misericórdia comprometida. Não é amor sentimental — é amor fiel a um compromisso.',
          relevancia: 'Hesed é uma das palavras mais ricas do Antigo Testamento. Quando Deus usa essa palavra para se descrever, Ele está dizendo: "Meu amor por você não é baseado no seu desempenho. É baseado em quem eu sou."',
        },
        explicacaoDoutrina: `Deus não é apenas uma força ou um conceito filosófico — Ele é uma pessoa com caráter, e Ele escolheu se revelar. Isso é o que chamamos de revelação especial: Deus falando diretamente, seja por profecias, aparições, ou — culminando em Jesus — por se tornar humano.

Os atributos de Deus revelados em Êxodo 34 são o coração do Antigo Testamento. Compaixão, misericórdia, paciência, amor fiel, fidelidade, perdão. Esses não são atributos secundários — são o nome de Deus. É assim que Ele se apresenta.

Mas há uma tensão saudável: o mesmo texto fala que Deus não deixa o culpado sem punição. Os atributos de Deus não se contradizem — eles se complementam. A justiça de Deus é o que torna sua misericórdia tão extraordinária. Perdoar não é fazer de conta que o mal não aconteceu — é carregar o custo.

Para o cristão, a revelação mais completa do caráter de Deus é Jesus. Quando Jesus diz "quem me viu, viu o Pai" (João 14:9), ele está dizendo: se você quer saber como Deus age, olha para mim — como eu trato os marginalizados, os doentes, os pecadores. Isso é Deus em pessoa.`,
        citacaoAutor: {
          autor: 'A.W. Tozer',
          citacao: 'O que nos vem à mente quando pensamos em Deus é a coisa mais importante sobre nós.',
          contextoAutor: 'A.W. Tozer (1897-1963) foi um pastor e escritor americano que dedicou sua vida a aprofundar o conhecimento de Deus na Igreja. Seu livro "O Conhecimento do Santo" é um clássico sobre os atributos divinos.',
          relevanciaParaLicao: 'A ideia que temos de Deus molda tudo: nossa oração, nossa ética, nossa esperança. Se nossa imagem de Deus está distorcida, nossa vida espiritual fica distorcida também. Por isso estudar quem Deus diz que é — e não apenas o que achamos que Ele é — é fundamental.',
        },
        aplicacaoPratica: [
          'Qual é a sua primeira imagem mental quando pensa em Deus? Um juiz severo? Um vovô bonzinho? Um distante criador? Compare essa imagem com o que Êxodo 34 revela.',
          'O hesed (amor leal) de Deus é baseado no caráter Dele, não no seu desempenho. Isso muda como você se sente nos dias em que falha?',
          'Se Jesus é a revelação mais completa de Deus, passa os próximos dias relendo um capítulo dos Evangelhos com esta pergunta: "O que isso me diz sobre o caráter do Pai?"',
        ],
        perguntaReflexao: 'Que atributo de Deus revelado nessa semana (compaixão, amor fiel, paciência, perdão) você mais precisa acreditar para a sua vida agora? Por quê?',
        oracaoModelo: {
          adoracao: 'Senhor, tu não és um Deus distante ou indiferente. Tu te revelaste — em Moisés, nos profetas, em Jesus. Eu te adoro porque tu escolheste ser conhecido.',
          confissao: 'Confesso que às vezes projeto minhas próprias experiências sobre teu caráter, e esqueço de te conhecer como tu realmente és. Perdoa-me por reduzir quem tu és a uma ideia pequena.',
          pedido: 'Que teu hesed — teu amor leal — me alcance hoje. Que eu experimente concretamente a misericórdia que tu proclamaste a Moisés. E que isso mude como eu me relaciono com as pessoas ao meu redor.',
        },
      },
      microInteracoes: [
        {
          id: 'micro-1-2-1',
          diaDaSemana: 1,
          tipo: 'versiculo',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            referencia: 'Êxodo 34:6',
            texto: 'O Senhor, o Senhor, Deus compassivo e misericordioso, tardio em irar-se e abundante em amor e fidelidade.',
            versao: 'NVI',
            reflexao: 'Esta é a autodefinição de Deus. Ele escolheu essas palavras para se apresentar. Medite hoje em qual dessas palavras você mais precisa acreditar: compassivo, misericordioso, paciente, amoroso ou fiel.',
          } as import('../../types').VersiculoConteudo,
        },
        {
          id: 'micro-1-2-2',
          diaDaSemana: 2,
          tipo: 'quiz',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            pergunta: 'O que significa "hesed" em hebraico?',
            opcoes: [
              { id: 'a', texto: 'Amor romântico e apaixonado', correta: false, explicacao: 'Esse seria mais próximo de "eros" em grego. Hesed é diferente: é amor comprometido, baseado em aliança, não em sentimento.' },
              { id: 'b', texto: 'Amor leal e fiel baseado em compromisso', correta: true, explicacao: 'Hesed é o amor de aliança — baseado no caráter de Deus, não no desempenho humano. É por isso que ele "mantém o amor até a milésima geração".' },
              { id: 'c', texto: 'Perdão sem consequências', correta: false, explicacao: 'O hesed inclui perdão, mas o texto de Êxodo 34 também menciona que Deus "não deixa o culpado sem punição". Misericórdia e justiça coexistem.' },
              { id: 'd', texto: 'Força e poder divino', correta: false, explicacao: 'Força e poder são outros atributos de Deus. Hesed é especificamente sobre amor leal e bondade covenant.' },
            ],
          } as import('../../types').QuizConteudo,
        },
        {
          id: 'micro-1-2-3',
          diaDaSemana: 3,
          tipo: 'desafio',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            descricao: 'Mostre hesed para alguém hoje.',
            instrucao: 'Hesed é amor leal baseado em compromisso — não em como a outra pessoa está te tratando. Hoje, escolha uma pessoa na sua vida com quem você poderia demonstrar esse tipo de amor: uma ligação, uma mensagem, um gesto concreto. Faça isso sem esperar retorno. Anote aqui o que você fez.',
          } as import('../../types').DesafioConteudo,
        },
        {
          id: 'micro-1-2-4',
          diaDaSemana: 4,
          tipo: 'citacao',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            autor: 'A.W. Tozer',
            citacao: 'O que nos vem à mente quando pensamos em Deus é a coisa mais importante sobre nós.',
            comentario: 'Tozer estava dizendo que a teologia não é abstrata — ela é pessoal. A imagem que você tem de Deus molda sua oração, sua coragem, seu relacionamentos e sua esperança. Uma imagem distorcida de Deus produz uma fé distorcida. Por isso estudar os atributos de Deus não é só para teólogos — é para quem quer viver bem.',
            contextoAutor: 'A.W. Tozer viveu numa época em que a Igreja americana estava se tornando cada vez mais superficial. Ele nadou contra a corrente, insistindo que conhecer Deus profundamente é a tarefa central da vida cristã.',
          } as import('../../types').CitacaoConteudo,
        },
        {
          id: 'micro-1-2-5',
          diaDaSemana: 5,
          tipo: 'revisao',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            pergunta: 'Como o que você aprendeu sobre o caráter de Deus nessa semana (hesed, compaixão, fidelidade) muda a forma como você quer se relacionar com Ele?',
            dica: 'Pense em como a imagem que você tinha de Deus antes dessa semana pode ter sido diferente do que a Bíblia revela.',
          } as import('../../types').RevisaoConteudo,
        },
      ],
    },
    {
      id: 'semana-1-3',
      numero: 3,
      tema: 'A Trindade',
      nucleoDoutrinario: 'Doutrina trinitária e relacionamento intratrinitário',
      concluida: false,
      licaoCompleta: {
        id: 'licao-1-3',
        gancho: 'Um Deus, três pessoas. Não três deuses, não uma pessoa que usa três máscaras. A Trindade é a doutrina mais malcompreendida do cristianismo — e também a mais bonita.',
        textoBiblicoPrincipal: {
          referencia: 'Mateus 28:19',
          texto: 'Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo.',
          versao: 'NVI',
          palavrasChave: ['Pai', 'Filho', 'Espírito Santo', 'nome'],
        },
        textosBiblicosApoio: [
          {
            referencia: 'João 1:1',
            texto: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.',
            versao: 'NVI',
            palavrasChave: ['Verbo', 'princípio', 'Deus'],
          },
        ],
        contextoHistorico: 'A doutrina da Trindade não foi inventada nos primeiros concílios — ela foi descoberta a partir da experiência dos discípulos com Jesus. Eles eram judeus estritamente monoteístas, mas começaram a adorar Jesus como Deus. Essa tensão levou séculos de reflexão cuidadosa sobre o que a Escritura ensina.',
        palavraOriginal: {
          palavra: 'ὁμοούσιος (homoousios)',
          idioma: 'grego',
          pronuncia: 'ho-mo-OU-si-os',
          significado: 'Da mesma essência/substância. Palavra usada no Concílio de Niceia (325 d.C.) para afirmar que o Filho é da mesma essência que o Pai.',
          relevancia: 'Esta palavra foi central para proteger a fé cristã de heresias que diziam que Jesus era apenas uma criatura muito especial. Homoousios afirma que Jesus não é como Deus — Ele é Deus.',
        },
        explicacaoDoutrina: `A Trindade não é uma contradição matemática (1+1+1=3 não é a equação correta). É mais como dizer: um Ser divino existe em três centros pessoais de consciência, relacionamento e ação — Pai, Filho e Espírito Santo.

A beleza da Trindade é que Deus nunca foi solitário. Antes da criação, havia amor — o Pai amando o Filho, o Filho amando o Pai, no Espírito. Quando Deus cria, não é por necessidade de companhia: é por transbordamento de amor.

As heresias mais comuns sobre a Trindade são: modalismo (um Deus que se disfarça de três), triteísmo (três deuses separados) e arianismo (Jesus é criatura, não Criador). A Igreja levou séculos para articular com precisão o que a Escritura ensina.

Para o cristão prático: a Trindade significa que no centro da realidade há relacionamento. Você foi criado para comunhão porque o próprio Deus é comunhão. Solidão e isolamento não são o design original — são a ruptura. O Evangelho é o convite para entrar nesse amor eterno que existe entre as três pessoas divinas.`,
        citacaoAutor: {
          autor: 'Tim Keller',
          citacao: 'Se o Deus cristão é um Deus de amor trino — sempre em relacionamento, sempre dando e recebendo amor — então o amor não é uma característica que Deus adotou quando criou. O amor é o que Deus é.',
          contextoAutor: 'Tim Keller foi pastor em Manhattan por décadas e um dos maiores comunicadores do Evangelho para pessoas intelectualmente céticas. Seu livro "A Razão para Deus" aborda a Trindade de forma que ressoa com pessoas que nunca foram à Igreja.',
          relevanciaParaLicao: 'Keller mostra que a Trindade não é apenas uma doutrina abstrata — ela explica por que o amor é possível e real no universo. Um Deus solitário e unitário criando para ter companhia seria um Deus carente. O Deus trinitário cria por abundância.',
        },
        aplicacaoPratica: [
          'Quando você ora ao Pai, em nome do Filho, pelo Espírito — você está participando de uma conversa que acontece dentro da própria vida de Deus.',
          'A Trindade explica por que relacionamentos são sagrados: você foi feito à imagem de um Deus que é relacionamento em si mesmo.',
          'Se sentir solitário, lembre: o Espírito Santo habita em você — você nunca está verdadeiramente sozinho.',
        ],
        perguntaReflexao: 'Qual aspecto da Trindade você acha mais difícil de entender? E qual aspecto, quando você pensa nele, te faz sentir mais próximo de Deus?',
        oracaoModelo: {
          adoracao: 'Pai, Filho e Espírito Santo — um Deus, três pessoas, amor eterno. Eu te adoro não apenas pelo que fazes, mas pelo que és: uma comunhão de amor que existe desde antes do tempo.',
          confissao: 'Confesso que muitas vezes reduzo a oração a uma lista de pedidos, sem perceber que estou me dirigindo a um Deus que já é amor em si mesmo. Perdoa minha frieza.',
          pedido: 'Que o Espírito Santo me ajude a entrar mais profundamente nesse amor trinitário. Que meus relacionamentos aqui na terra reflitam algo do amor que existe entre o Pai e o Filho.',
        },
      },
      microInteracoes: [
        {
          id: 'micro-1-3-1',
          diaDaSemana: 1,
          tipo: 'versiculo',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            referencia: 'João 1:1',
            texto: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.',
            versao: 'NVI',
            reflexao: 'João diz duas coisas ao mesmo tempo: o Verbo "estava com Deus" (distinção) e "era Deus" (unidade). Essa tensão proposital é o coração da doutrina trinitária. Medite nisso hoje: Jesus está com o Pai e é o Pai.',
          } as import('../../types').VersiculoConteudo,
        },
        {
          id: 'micro-1-3-2',
          diaDaSemana: 2,
          tipo: 'quiz',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            pergunta: 'O que é modalismo?',
            opcoes: [
              { id: 'a', texto: 'A crença em três deuses separados', correta: false, explicacao: 'Três deuses separados seria triteísmo — uma heresia diferente. O modalismo é o oposto: só uma pessoa.' },
              { id: 'b', texto: 'A ideia de que Jesus foi criado por Deus', correta: false, explicacao: 'Essa é a heresia ariana — Arianismo. O modalismo é sobre um Deus que muda de forma, não sobre Jesus ser criatura.' },
              { id: 'c', texto: 'Um Deus que se apresenta em três modos ou máscaras diferentes', correta: true, explicacao: 'O modalismo diz que Deus é uma só pessoa que às vezes aparece como Pai, às vezes como Filho, às vezes como Espírito. Isso nega que as três pessoas existam simultaneamente — o que a Bíblia contradiz.' },
              { id: 'd', texto: 'A doutrina correta da Trindade', correta: false, explicacao: 'O modalismo é uma heresia, condenada pela Igreja nos primeiros séculos. A Trindade afirma três pessoas distintas e eternas, não três modos de um só.' },
            ],
          } as import('../../types').QuizConteudo,
        },
        {
          id: 'micro-1-3-3',
          diaDaSemana: 3,
          tipo: 'desafio',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            descricao: 'Explique a Trindade para si mesmo.',
            instrucao: 'Tente explicar a doutrina da Trindade em voz alta, como se estivesse explicando para um amigo que nunca ouviu falar. Você pode usar uma ilustração (água, sol, ovo) — mas cuidado: toda ilustração tem limites. Anote aqui como você explicaria.',
          } as import('../../types').DesafioConteudo,
        },
        {
          id: 'micro-1-3-4',
          diaDaSemana: 4,
          tipo: 'citacao',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            autor: 'C.S. Lewis',
            citacao: 'A vida cristã inteira consiste em aprender a orar ao Pai, por meio do Filho, com a ajuda do Espírito. Não é uma fórmula — é entrar no amor que já existe.',
            comentario: 'Lewis estava mostrando que a Trindade não é apenas uma doutrina para teólogos debaterem — ela molda como você ora e como você vive. Cada vez que você ora, você está participando de uma dinâmica de amor que existia antes da criação.',
            contextoAutor: 'Lewis escreveu sobre a Trindade em "Cristianismo Puro e Simples" de forma tão acessível que a obra continua sendo lida por milhões de pessoas décadas depois.',
          } as import('../../types').CitacaoConteudo,
        },
        {
          id: 'micro-1-3-5',
          diaDaSemana: 5,
          tipo: 'revisao',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            pergunta: 'Antes de estudar a Trindade, como você entendia a relação entre Pai, Filho e Espírito Santo? O que mudou na sua compreensão depois dessa semana?',
            dica: 'Seja honesto — não precisa ter uma resposta teologicamente perfeita. O que importa é o que essa doutrina agora significa para a sua fé pessoal.',
          } as import('../../types').RevisaoConteudo,
        },
      ],
    },
    {
      id: 'semana-1-4',
      numero: 4,
      tema: 'Deus é bom?',
      nucleoDoutrinario: 'Bondade e soberania divina diante do sofrimento',
      concluida: false,
      licaoCompleta: {
        id: 'licao-1-4',
        gancho: 'Se Deus é bom e todo-poderoso, por que o mundo está cheio de sofrimento? É a pergunta mais antiga e mais honesta que existe. Vamos encará-la de frente.',
        textoBiblicoPrincipal: {
          referencia: 'Romanos 8:28',
          texto: 'Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.',
          versao: 'NVI',
          palavrasChave: ['age', 'todas as coisas', 'bem', 'chamados', 'propósito'],
        },
        textosBiblicosApoio: [
          {
            referencia: 'João 16:33',
            texto: 'No mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo.',
            versao: 'NVI',
            palavrasChave: ['aflições', 'ânimo', 'venci'],
          },
        ],
        contextoHistorico: 'Paulo escreve Romanos 8 de dentro de uma realidade de perseguição real. Não é um filósofo em sua poltrona especulando sobre o sofrimento — é alguém que foi preso, açoitado e deixado para morrer. Quando ele diz que "todas as coisas cooperam para o bem", não é otimismo ingênuo. É uma convicção forjada no sofrimento.',
        palavraOriginal: {
          palavra: 'συνεργεῖ (synergei)',
          idioma: 'grego',
          pronuncia: 'si-ner-GEI',
          significado: 'Cooperar, trabalhar junto com. Raiz de "sinergia". Implica múltiplos agentes trabalhando em direção ao mesmo fim.',
          relevancia: 'Paulo não diz que coisas ruins são boas. Ele diz que Deus trabalha junto com todas as coisas — inclusive as dolorosas — para um bem maior. Deus não é o autor do mal, mas é soberano o suficiente para trabalhar através dele.',
        },
        explicacaoDoutrina: `O problema do mal é o argumento mais usado contra a existência de Deus. Mas ele não é novo: Jó o viveu, os Salmos o expressam, Paulo o enfrenta. A Bíblia não foge do sofrimento — ela o habita.

Existem diferentes tipos de mal: o natural (terremotos, doenças) e o moral (crueldade, injustiça humana). A origem do mal moral é a liberdade humana — Deus criou seres com capacidade de amar genuinamente, e amor genuíno exige liberdade, que inclui a possibilidade do abuso.

A resposta cristã ao sofrimento não é uma resposta filosófica — é uma resposta narrativa: Deus entrou no sofrimento em Jesus. A Cruz é Deus sofrendo conosco e por nós. Não é Deus observando de longe: é Deus gritando "Meu Deus, meu Deus, por que me abandonaste?" de dentro da dor.

Romanos 8:28 não promete que tudo será fácil. Promete que nada será desperdiçado. Deus não elimina o sofrimento nesta vida — mas o redime. E no fim, haverá restauração completa (Apocalipse 21).`,
        citacaoAutor: {
          autor: 'Tim Keller',
          citacao: 'Se você tem um Deus suficientemente grande para ser culpado pelo sofrimento, você tem um Deus suficientemente grande para resgatar você dele.',
          contextoAutor: 'Keller pastoreou pessoas em Manhattan — uma das cidades mais cínicas do mundo — por décadas. Ele desenvolveu uma das apologéticas mais sofisticadas sobre o problema do mal, especialmente em "Caminhando com Deus através da Dor e do Sofrimento".',
          relevanciaParaLicao: 'A ironia que Keller aponta é que exigir que Deus explique o sofrimento pressupõe que Deus existe e é responsável. E se isso é verdade, então esse mesmo Deus pode ser a solução.',
        },
        aplicacaoPratica: [
          'Se você está passando por algo difícil agora, a pergunta não é "por que Deus permite isso?" — mas "como Deus está trabalhando nisto?" Essas são perguntas muito diferentes.',
          'Quando alguém próximo sofre, a resposta cristã mais poderosa não é uma explicação teológica — é presença. Jesus não explicou o sofrimento de Lázaro; ele chorou.',
          'Leia Romanos 8:18-39 completo esta semana. É um dos textos mais poderosos da Bíblia sobre sofrimento e esperança.',
        ],
        perguntaReflexao: 'Há algo na sua vida — passado ou presente — que você tem dificuldade de acreditar que Deus pode trabalhar para o bem? O que tornaria mais fácil confiar nisso?',
        oracaoModelo: {
          adoracao: 'Senhor, tu és o Deus que entrou no sofrimento em Jesus. Tu não és um Deus distante que observa nossa dor — tu a habitaste. Eu te adoro por isso.',
          confissao: 'Confesso que às vezes me sinto abandonado quando a vida dói. Que eu encontre em minha própria raiva e confusão um caminho de volta à confiança — como Jó, como os salmistas.',
          pedido: 'Trabalha em cada coisa difícil da minha vida de forma que eu não consiga ver ainda. Que eu tenha fé para confiar no teu caráter mesmo quando não entendo tuas ações.',
        },
      },
      microInteracoes: [
        {
          id: 'micro-1-4-1',
          diaDaSemana: 1,
          tipo: 'versiculo',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            referencia: 'Romanos 8:28',
            texto: 'Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.',
            versao: 'NVI',
            reflexao: 'Paulo não diz "todas as coisas são boas" — diz que Deus "age em todas as coisas para o bem". Há uma diferença enorme. Uma afirma que o mal não é real. A outra afirma que Deus é mais real que o mal.',
          } as import('../../types').VersiculoConteudo,
        },
        {
          id: 'micro-1-4-2',
          diaDaSemana: 2,
          tipo: 'quiz',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            pergunta: 'Qual é a resposta central do Evangelho ao problema do sofrimento?',
            opcoes: [
              { id: 'a', texto: 'Deus não permite sofrimento para quem tem fé suficiente', correta: false, explicacao: 'Isso é a teologia da prosperidade — uma distorção que a Bíblia contradiz diretamente (Jó, Paulo, Jesus). Fé não é um escudo contra dificuldades.' },
              { id: 'b', texto: 'Deus observa o sofrimento de longe e aprende com ele', correta: false, explicacao: 'Isso seria um Deus limitado e não-soberano. A Bíblia apresenta um Deus que age na história, não um espectador passivo.' },
              { id: 'c', texto: 'Deus entrou no sofrimento em Jesus e promete redenção', correta: true, explicacao: 'A Cruz é a resposta de Deus ao mal — não uma explicação filosófica, mas uma ação divina. Deus não eliminou o sofrimento nesta vida, mas entrou nele e prometeu restauração.' },
              { id: 'd', texto: 'O sofrimento prova que Deus não existe', correta: false, explicacao: 'Este é o argumento do ateísmo, não do Evangelho. A Bíblia reconhece o sofrimento como real mas não como prova contra Deus.' },
            ],
          } as import('../../types').QuizConteudo,
        },
        {
          id: 'micro-1-4-3',
          diaDaSemana: 3,
          tipo: 'desafio',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            descricao: 'Leia Jó 1-2 e 38-42.',
            instrucao: 'Jó é a obra mais honesta da Bíblia sobre o sofrimento. Leia os dois primeiros capítulos (o contexto) e os últimos (a resposta de Deus). Anote: o que te surpreendeu na resposta de Deus a Jó? Ele respondeu o "por quê" do sofrimento?',
          } as import('../../types').DesafioConteudo,
        },
        {
          id: 'micro-1-4-4',
          diaDaSemana: 4,
          tipo: 'citacao',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            autor: 'Dostoyevski',
            citacao: 'O amor em ação é uma coisa dura e assustadora comparado ao amor nos sonhos. O amor nos sonhos é ganancioso por resultados imediatos. [...] O amor em ação quer resultados urgentes, com todos olhando.',
            comentario: 'Dostoyevski foi um dos maiores escritores da história e um cristão fervoroso que viveu a tragédia pessoal de perto. Em "Os Irmãos Karamazov", ele coloca nas mãos do personagem Ivã os argumentos mais poderosos contra Deus baseados no sofrimento de inocentes — e na mesma obra oferece a resposta mais bela: o amor concreto, não o teórico.',
            contextoAutor: 'Fiódor Dostoyevski viveu preso na Sibéria, perdeu filhos, sofreu epilepsia e pobreza. Mas sua fé sobreviveu e foi forjada pela dor, não destruída por ela.',
          } as import('../../types').CitacaoConteudo,
        },
        {
          id: 'micro-1-4-5',
          diaDaSemana: 5,
          tipo: 'revisao',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            pergunta: 'Depois de estudar o tema "Deus é bom?" esta semana, como você responderia a um amigo que dissesse: "Se Deus existisse, não deixaria crianças sofrerem"?',
            dica: 'Não precisa ter uma resposta completa — o importante é ser honesto sobre o que você acredita e o que ainda não entende.',
          } as import('../../types').RevisaoConteudo,
        },
      ],
    },
    {
      id: 'semana-1-5',
      numero: 5,
      tema: 'A Palavra de Deus',
      nucleoDoutrinario: 'Inspiração, autoridade e suficiência das Escrituras',
      concluida: false,
      licaoCompleta: {
        id: 'licao-1-5',
        gancho: 'Como você sabe se pode confiar em um livro escrito há mais de dois mil anos, por dezenas de autores, em três línguas diferentes? Essa é a pergunta certa. Vamos responder.',
        textoBiblicoPrincipal: {
          referencia: '2 Timóteo 3:16-17',
          texto: 'Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça, para que o homem de Deus seja apto e plenamente preparado para toda boa obra.',
          versao: 'NVI',
          palavrasChave: ['inspirada', 'útil', 'ensino', 'correção', 'apto', 'preparado'],
        },
        textosBiblicosApoio: [
          {
            referencia: '2 Pedro 1:20-21',
            texto: 'Sobretudo, saibam que nenhuma profecia da Escritura provém de interpretação particular, pois a profecia nunca teve como fonte a vontade humana, mas homens falaram da parte de Deus, sendo movidos pelo Espírito Santo.',
            versao: 'NVI',
            palavrasChave: ['profecia', 'Espírito Santo', 'movidos', 'Deus'],
          },
        ],
        contextoHistorico: 'Paulo escreve a Timóteo numa época em que não existia Novo Testamento completo — quando ele fala de "Escritura", está se referindo principalmente ao Antigo Testamento. Isso é importante: a autoridade que Paulo afirma para as Escrituras hebraicas, a Igreja apostólica estendeu ao Novo Testamento. O processo de reconhecimento do cânon levou séculos, mas era baseado em critérios concretos: origem apostólica, consistência doutrinária e uso nas igrejas.',
        palavraOriginal: {
          palavra: 'θεόπνευστος (theopneustos)',
          idioma: 'grego',
          pronuncia: 'the-OP-neus-tos',
          significado: 'Soprada por Deus, divinamente inspirada. Composta de "theos" (Deus) + "pneustos" (soprado/respirado).',
          relevancia: 'A inspiração não significa que Deus ditou cada palavra como um robô. Significa que Deus usou as personalidades, histórias e vocabulários dos autores humanos para comunicar exatamente o que Ele queria comunicar. É uma colaboração divino-humana que preservou a mensagem sem apagar a humanidade.',
        },
        explicacaoDoutrina: `A doutrina da inspiração afirma que a Bíblia é a Palavra de Deus — não apenas uma coleção de palavras sobre Deus. Mas isso levanta uma pergunta: se humanos escreveram, como pode ser Palavra de Deus?

A resposta é que Deus usou autores humanos com personalidades, vocabulários e estilos próprios, guiando-os pelo Espírito Santo para que o resultado final fosse exatamente o que Ele queria comunicar. Paulo tem um estilo diferente de João, que é diferente de Amós — mas todos falam com autoridade divina.

A suficiência das Escrituras afirma que a Bíblia contém tudo o que precisamos saber para salvação e vida piedosa. Isso não significa que a ciência ou a filosofia não têm nada a oferecer — mas que em questões de fé e prática, a Escritura é a autoridade final.

Para um jovem cristão, isso tem uma aplicação direta: a Bíblia não é um livro de respostas para todas as perguntas que você tem (qual faculdade fazer, com quem se casar). É uma história que revela o caráter de Deus e forma o caráter do leitor. Quando você lê a Bíblia regularmente, não está coletando informações — você está sendo formado.`,
        citacaoAutor: {
          autor: 'Martinho Lutero',
          citacao: 'A Bíblia é a cuna onde Cristo é colocado. Devemos ir à Bíblia, mas somente para encontrar Cristo nela.',
          contextoAutor: 'Lutero foi o estopim da Reforma Protestante no século XVI. Sua insistência na autoridade da Escritura (sola scriptura) mudou a história da Igreja e do mundo ocidental. Para ele, a Bíblia não era um conjunto de regras — era o lugar onde você encontrava o próprio Cristo.',
          relevanciaParaLicao: 'Lutero ajuda a equilibrar dois erros opostos: bibliolatria (adorar o livro em vez de Deus) e desprezo pela Escritura. A Bíblia é o meio pelo qual encontramos Cristo — não o fim em si mesma.',
        },
        aplicacaoPratica: [
          'Leia a Bíblia para encontrar Cristo — não apenas para coletar regras ou informações. Cada parte das Escrituras, de alguma forma, aponta para Jesus.',
          'Desenvolva uma rotina de leitura bíblica — não porque Deus vai te recompensar pela quantidade de capítulos, mas porque você está sendo formado pelo que lê.',
          'Quando a Bíblia disser algo que você não quer ouvir, esse é exatamente o momento em que você mais precisa dela. A autoridade das Escrituras não depende do seu conforto com elas.',
        ],
        perguntaReflexao: 'Qual é sua relação atual com a leitura da Bíblia? É obrigação, prazer, confusão, tédio, ou algo mais? O que você gostaria que ela fosse, e o que precisa mudar para chegar lá?',
        oracaoModelo: {
          adoracao: 'Senhor, tu falaste — e o universo existiu. Tu falaste novamente nas Escrituras — e o mundo foi transformado. Obrigado por não ser um Deus silencioso.',
          confissao: 'Confesso que muitas vezes leio a Bíblia como uma tarefa, sem realmente esperar encontrar tua voz nela. Abre meus ouvidos espirituais para ouvir o que tu queres me dizer.',
          pedido: 'Que a tua Palavra não seja apenas informação na minha cabeça, mas formação no meu coração. Que quando eu abrir a Bíblia, seja com expectativa de te encontrar ali.',
        },
      },
      microInteracoes: [
        {
          id: 'micro-1-5-1',
          diaDaSemana: 1,
          tipo: 'versiculo',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            referencia: '2 Timóteo 3:16-17',
            texto: 'Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça.',
            versao: 'NVI',
            reflexao: 'Paulo lista quatro funções da Escritura: ensino, repreensão, correção, instrução. Qual dessas funções a Bíblia tem exercido mais na sua vida ultimamente? Qual você gostaria que exercesse mais?',
          } as import('../../types').VersiculoConteudo,
        },
        {
          id: 'micro-1-5-2',
          diaDaSemana: 2,
          tipo: 'quiz',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            pergunta: 'O que a palavra "theopneustos" (inspirada) ensina sobre a relação entre Deus e os autores humanos da Bíblia?',
            opcoes: [
              { id: 'a', texto: 'Deus ditou cada palavra, os autores eram apenas estenógrafos', correta: false, explicacao: 'Isso seria inspiração mecânica — uma visão que apaga a personalidade dos autores. Paulo escreve diferente de João, que é diferente de Davi. Deus usou suas personalidades.' },
              { id: 'b', texto: 'Os autores escreveram sozinhos e Deus aprovou depois', correta: false, explicacao: 'Isso seria uma visão que reduz a inspiração a uma aprovação tardia. O processo foi guiado pelo Espírito desde o início, não apenas validado ao final.' },
              { id: 'c', texto: 'Deus guiou autores humanos pelo Espírito, preservando sua mensagem sem apagar sua humanidade', correta: true, explicacao: 'A inspiração orgânica afirma que Deus usou as personalidades, histórias e vocabulários dos autores humanos para comunicar exatamente o que queria. O resultado é divino-humano.' },
              { id: 'd', texto: 'A Bíblia é inspirada como qualquer grande obra de arte é inspirada', correta: false, explicacao: 'Isso rebaixa a inspiração bíblica a um nível meramente humano. A palavra "theopneustos" afirma algo mais específico: a origem é divina.' },
            ],
          } as import('../../types').QuizConteudo,
        },
        {
          id: 'micro-1-5-3',
          diaDaSemana: 3,
          tipo: 'desafio',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            descricao: 'Leia Salmo 119 por 10 minutos.',
            instrucao: 'O Salmo 119 é o capítulo mais longo da Bíblia — e é inteiramente sobre o amor do autor pela Palavra de Deus. Leia os primeiros 8 versículos (ou mais, se quiser). Anote aqui: que emoção o salmista sente pela Escritura? Você já sentiu algo parecido?',
          } as import('../../types').DesafioConteudo,
        },
        {
          id: 'micro-1-5-4',
          diaDaSemana: 4,
          tipo: 'citacao',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            autor: 'Martinho Lutero',
            citacao: 'A Bíblia é a cuna onde Cristo é colocado.',
            comentario: 'Lutero estava corrigindo dois erros opostos de sua época: aqueles que adoravam a Bíblia em si (bibliolatria) e aqueles que a desprezavam em favor da tradição da Igreja. A Bíblia, para ele, não é um fim em si mesma — é o lugar onde você encontra Cristo. Isso muda como você lê: não é uma caça a versículos, mas uma busca por Jesus em cada página.',
            contextoAutor: 'Lutero foi professor de Bíblia antes de ser reformador. Sua tradução da Bíblia para o alemão popular ajudou a formar a língua alemã moderna e colocou a Palavra de Deus nas mãos do povo comum pela primeira vez.',
          } as import('../../types').CitacaoConteudo,
        },
        {
          id: 'micro-1-5-5',
          diaDaSemana: 5,
          tipo: 'revisao',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            pergunta: 'Depois de estudar a doutrina da inspiração e autoridade da Bíblia, o que mudou ou reforçou na sua relação com as Escrituras? Como você quer ler a Bíblia daqui pra frente?',
            dica: 'Pense em algo concreto: frequência, método, expectativa. O que você vai fazer diferente?',
          } as import('../../types').RevisaoConteudo,
        },
      ],
    },
  ],
}
