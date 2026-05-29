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
      nucleoDoutrinario: 'Revelação geral e teologia natural',
      concluida: false,
      licaoCompleta: {
        id: 'licao-1-1',
        gancho:
          'Se alguém te perguntar hoje "como você sabe que Deus existe?", o que você responderia? A maioria dos cristãos fica sem resposta. Não porque a resposta não existe, mas porque nunca parou para pensar nisso. Vamos mudar isso agora.',
        textoBiblicoPrincipal: {
          referencia: 'Romanos 1:19-20',
          texto:
            'O que se pode conhecer a respeito de Deus é manifesto entre eles, pois o próprio Deus lhes manifestou. Porque os atributos invisíveis de Deus, o seu eterno poder e sua natureza divina, têm sido vistos claramente desde a criação do mundo, sendo compreendidos por meio das coisas criadas, de forma que tais homens são indesculpáveis.',
          versao: 'NVI',
          palavrasChave: ['manifesto', 'atributos invisíveis', 'claramente', 'criação', 'indesculpáveis'],
        },
        textosBiblicosApoio: [
          {
            referencia: 'Salmo 19:1-2',
            texto:
              'Os céus proclamam a glória de Deus; o firmamento anuncia as obras das suas mãos. Um dia transmite essa palavra ao outro dia; uma noite revela esse conhecimento à outra noite.',
            versao: 'NVI',
            palavrasChave: ['proclamam', 'glória', 'anuncia', 'transmite', 'revela'],
          },
          {
            referencia: 'Atos 17:24-27',
            texto:
              'O Deus que fez o mundo e tudo o que nele existe é o Senhor do céu e da terra e não habita em templos feitos por mãos humanas. Ele mesmo dá a todos a vida, o fôlego e todas as coisas. De um só fez todos os povos para que habitassem sobre toda a face da terra, a fim de que buscassem a Deus e, talvez, ainda que tateando, o encontrassem — embora não esteja longe de cada um de nós.',
            versao: 'NVI',
            palavrasChave: ['Senhor', 'vida', 'fôlego', 'buscassem', 'encontrassem'],
          },
        ],
        contextoHistorico:
          'Paulo escreve a carta aos Romanos por volta de 57 d.C., de Corinto, antes de visitar Roma pela primeira vez. A cidade de Roma era o centro do mundo conhecido: cheia de templos, estátuas de deuses e uma cultura que misturava religião com política e poder. Os romanos não eram ateus — eles acreditavam em muitos deuses e achavam que isso era completamente racional.\n\nO argumento de Paulo em Romanos 1 não era uma defesa da existência de Deus para céticos modernos. Era uma análise da condição humana: Paulo dizia que todo ser humano, em qualquer cultura e em qualquer tempo, já recebeu evidências suficientes da existência de Deus através da própria criação. A questão não era falta de evidência, mas o que cada pessoa faz com ela.',
        palavraOriginal: {
          palavra: 'φανερόν (phanerón)',
          idioma: 'grego',
          pronuncia: 'fah-neh-RON',
          significado: 'Manifesto, tornado visível, evidente. A raiz da palavra carrega a ideia de algo que foi ativamente revelado — não algo que você deduz com esforço, mas algo que se apresenta diante de você.',
          relevancia:
            'Paulo não diz que Deus "pode ser encontrado" se você procurar bastante. Ele diz que Deus já se tornou visível. A revelação é ativa: Deus está agindo, comunicando. A criação não é um quebra-cabeça que exige solução — é uma mensagem que já está sendo transmitida.',
        },
        explicacaoDoutrina: `Existe uma distinção clássica na teologia cristã entre dois tipos de revelação de Deus. A revelação especial é a Bíblia — Deus falando diretamente através das Escrituras, dos profetas e de Jesus. A revelação geral é tudo o que Deus comunica através da criação, da história e da própria consciência humana. Romanos 1 fala desse segundo tipo.

A ideia é simples, mas poderosa: você não precisa de uma Bíblia para saber que existe um Criador. O próprio universo comunica isso. Quando você olha para a complexidade de uma célula, para a precisão das órbitas planetárias ou para a beleza de uma montanha ao entardecer, está recebendo uma mensagem. Não uma mensagem que prova Deus como uma equação matemática, mas uma mensagem que aponta para além do próprio universo.

Os filósofos chamaram esse raciocínio de "argumento do design" ou "argumento cosmológico". A ideia básica: onde há ordem complexa e específica, há informação. Onde há informação, há inteligência por trás dela. O universo tem os dois em abundância. Isso não resolve todas as perguntas sobre Deus, mas aponta para uma conclusão racional: esse nível de organização não emergiu do nada.

O ponto mais importante de Romanos 1, porém, não é filosófico — é pessoal. Paulo diz que Deus "manifestou" essas coisas a todos os seres humanos. Isso significa que você já está em contato com evidências de Deus, mesmo sem perceber. A questão que fica é: o que você faz com isso? A fé cristã não pede que você desligue a razão. Ela convida você a levar a sério o que já está diante dos seus olhos.`,
        citacaoAutor: {
          autor: 'C.S. Lewis',
          citacao:
            'Eu acreditei que o sol havia nascido — não porque eu pudesse prová-lo, mas porque por sua luz eu era capaz de ver tudo o mais.',
          contextoAutor:
            'Clive Staples Lewis (1898–1963) foi professor em Oxford e Cambridge, e é um dos escritores cristãos mais influentes do século XX. O detalhe que poucos sabem: ele era ateu convicto até os 32 anos. Sua conversão foi lenta, racional e custosa. Ele descreve todo o processo no livro "Surpreendido pela Alegria". Lewis não se tornou cristão por emoção — foi convencido pelos argumentos e por uma honestidade intelectual que o impediu de continuar ignorando o que a evidência apontava.',
          relevanciaParaLicao:
            'Lewis não está falando de uma fé cega — está falando de uma fé que funciona como uma luz que torna tudo mais visível e inteligível. Assim como você não precisa provar a existência do sol antes de usá-lo para enxergar, você não precisa de uma prova matemática de Deus para começar a ver o mundo através da perspectiva que a fé oferece. A revelação geral é esse ponto de partida: algo que já ilumina, mesmo antes de você nomear de onde vem a luz.',
        },
        evidenciaExterna: {
          tipo: 'pesquisa',
          titulo: 'Intuição Teísta — Cognition, Religion and Theology Project',
          descricao:
            'Um dos maiores projetos acadêmicos sobre religião e cognição foi desenvolvido pela Universidade de Oxford entre 2007 e 2012. Uma das descobertas centrais: seres humanos têm uma tendência cognitiva natural de perceber intencionalidade e agência em fenômenos do mundo. Os pesquisadores chamaram isso de "intuição teísta". Essa tendência aparece em crianças de culturas completamente diferentes, mesmo sem educação religiosa explícita. O estudo não prova a existência de Deus — mas mostra que a crença em um Criador não é uma superstição irracional. Ela corresponde a algo na estrutura cognitiva humana que percebe design onde há design. Isso é exatamente o que Paulo chama de algo que foi "manifesto" em todos.',
          fonte: 'Barrett, J. L. (2012). Born Believers: The Science of Children\'s Religious Belief. Free Press. / Universidade de Oxford (2007–2012)',
        },
        aplicacaoPratica: [
          'Quando você olhar para o céu estrelado, para um animal complexo ou para qualquer coisa na natureza que te deixar sem palavras, reconheça: você está recebendo uma mensagem. Isso é revelação geral em ação. Não é misticismo — é o que Romanos 1 chama de "claramente visível".',
          'Se um amigo ou colega te desafiar com "mas você tem prova de que Deus existe?", você já tem um ponto de partida honesto: a criação aponta para algo além de si mesma. Você não precisa ter todas as respostas. Basta ser honesto sobre o que o universo comunica.',
          'A fé cristã não pede que você abandone o pensamento crítico. Ela pede que você leve a sério as evidências que já estão diante de você. Começar a estudar a Bíblia não é substituir a razão pela fé — é aprofundar uma conversa que a criação já iniciou.',
        ],
        perguntaReflexao:
          'Tem alguma coisa na criação — uma paisagem, um animal, um fenômeno da natureza, ou até algo complexo que você estudou — que, quando você vê ou experimenta, te faz sentir que há algo maior do que você mesmo? O que é essa coisa e por que acha que ela provoca isso em você?',
        oracaoModelo: {
          adoracao:
            'Deus, tu te revelaste no que fizeste. Cada detalhe da criação fala de ti — a complexidade de um ser vivo, a imensidão do universo, a ordem que sustenta tudo. Eu quero aprender a ouvir essa voz com mais atenção e reconhecer a tua presença no que está ao meu redor todos os dias.',
          confissao:
            'Confesso que muitas vezes passo pelo mundo sem notar o que ele comunica. Deixo o barulho do dia a dia cobrir uma mensagem que tu já estás enviando. Que os meus olhos se abram para o que sempre esteve visível, e que a minha mente esteja disposta a levar a sério o que encontrar.',
          pedido:
            'Me dá coragem para buscar respostas com honestidade e sem medo do que vou descobrir. E me dá fé para confiar em ti no que ainda não entendo completamente, sabendo que tu não és um Deus escondido, mas um Deus que escolheu se mostrar.',
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
            texto: 'Os céus proclamam a glória de Deus; o firmamento anuncia as obras das suas mãos.',
            versao: 'NVI',
            reflexao:
              'O salmista usa dois verbos ativos: "proclamam" e "anuncia". O céu não é passivo — ele está o tempo todo transmitindo algo. Hoje, em algum momento do dia, olhe para cima ou para qualquer coisa na natureza e faça uma pausa de 30 segundos. O que você consegue "ouvir"?',
          } as import('../../types').VersiculoConteudo,
        },
        {
          id: 'micro-1-1-2',
          diaDaSemana: 2,
          tipo: 'quiz',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            pergunta: 'O que Paulo chama de "revelação geral" em Romanos 1?',
            opcoes: [
              {
                id: 'a',
                texto: 'A Bíblia e os ensinamentos de Jesus',
                correta: false,
                explicacao:
                  'A Bíblia é a revelação especial — mais específica e direta. A revelação geral é anterior à Escritura e chega a todos os seres humanos através da criação.',
              },
              {
                id: 'b',
                texto: 'O que Deus comunica através da criação e da consciência humana',
                correta: true,
                explicacao:
                  'Revelação geral é o que Deus comunica a todos os seres humanos através da criação, da história e da consciência — independente de terem acesso à Bíblia. É por isso que Paulo diz que todos são "indesculpáveis".',
              },
              {
                id: 'c',
                texto: 'As visões e sonhos dos profetas do Antigo Testamento',
                correta: false,
                explicacao:
                  'Visões e sonhos dos profetas fazem parte da revelação especial — Deus comunicando algo específico a pessoas específicas. A revelação geral é universal e contínua, disponível a todos.',
              },
              {
                id: 'd',
                texto: 'Os milagres registrados nos Evangelhos',
                correta: false,
                explicacao:
                  'Os milagres dos Evangelhos são revelação especial — eventos históricos únicos. A revelação geral não depende de milagres: ela está na estrutura ordinária da criação.',
              },
            ],
          } as import('../../types').QuizConteudo,
        },
        {
          id: 'micro-1-1-2b',
          diaDaSemana: 2,
          tipo: 'quiz',
          xpRecompensa: 10,
          concluida: false,
          conteudo: {
            pergunta: 'O que a palavra grega "phanerón" significa no contexto de Romanos 1:19?',
            opcoes: [
              {
                id: 'a',
                texto: 'Algo escondido que precisa ser descoberto com muito esforço',
                correta: false,
                explicacao:
                  '"Phanerón" é o oposto disso. Paulo não está dizendo que Deus se esconde e exige uma busca árdua. Ele está dizendo que Deus já se apresentou — a iniciativa foi dele.',
              },
              {
                id: 'b',
                texto: 'Uma hipótese filosófica sobre a origem do universo',
                correta: false,
                explicacao:
                  'Paulo não está fazendo filosofia abstrata. "Phanerón" descreve algo concreto e já realizado: Deus se tornando visível através da criação. Não é uma teoria — é uma declaração de fato.',
              },
              {
                id: 'c',
                texto: 'Algo tornado visível e manifesto ativamente',
                correta: true,
                explicacao:
                  '"Phanerón" carrega a ideia de algo que foi ativamente revelado — não que você deduz com muito esforço, mas que se apresenta diante de você. Paulo está dizendo que Deus age ativamente para se comunicar através da criação.',
              },
              {
                id: 'd',
                texto: 'Um mistério reservado apenas para os estudiosos',
                correta: false,
                explicacao:
                  'Pelo contrário: "phanerón" indica exatamente que não há restrição de acesso. O que Deus comunicou através da criação está disponível a todos — não apenas aos eruditos ou religiosos.',
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
            descricao: 'Saia do ambiente fechado por pelo menos 5 minutos.',
            instrucao:
              'Pode ser uma calçada, uma praça, uma janela com vista para o céu — qualquer coisa que te coloque em contato com o mundo exterior. Deixe o celular no bolso. Observe algo específico: uma planta, um inseto, as nuvens, a luz do sol. Depois, anote em uma ou duas frases o que você observou e o que aquilo te comunicou.',
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
              'Nos fizeste para ti, Senhor, e o nosso coração está inquieto enquanto não repousa em ti.',
            comentario:
              'A "inquietação" que Agostinho descreve tem tudo a ver com a revelação geral que estudamos essa semana. Existe algo no ser humano que não se satisfaz com nada do que o mundo oferece — riqueza, prazer, reconhecimento — porque foi feito para algo maior. Esse vazio não é um defeito. É uma bússola apontando para Deus.',
            contextoAutor:
              'Agostinho (354–430 d.C.) nasceu no norte da África, filho de uma mãe cristã chamada Mônica. Por anos viveu longe da fé — inteligente, ambicioso e em busca de prazer e reconhecimento. Mas essa inquietação nunca o deixou. Depois de uma longa jornada, foi se tornar um dos maiores teólogos da história cristã. Essa frase abre suas "Confissões", um dos livros mais importantes já escritos.',
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
              'Depois de estudar essa semana sobre revelação geral e o que a criação comunica sobre Deus: se um amigo te perguntasse "como você sabe que Deus existe?", o que você responderia agora? Escreva como se estivesse explicando para alguém que nunca pensou sobre isso.',
            dica: 'Use o que aprendeu sobre revelação geral, a palavra "phanerón" e o argumento de Paulo. Não precisa ser uma resposta perfeita — seja genuíno e honesto sobre onde você está.',
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
