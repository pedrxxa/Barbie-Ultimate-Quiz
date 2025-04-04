let perguntas = [
  {
    texto: "Qual dessas personagens troca de lugar com uma princesa em 'Barbie em A Princesa e a Popstar'?",
    opcoes: ["Keira", "Tori", "Genevieve", "Anneliese"],
    resposta: 0,
    explicacao: "Keira é a popstar que troca de lugar com a princesa Tori para viverem aventuras diferentes!"
  },
  {
    texto: "Qual é o nome do dragão roxinho amigo da Barbie em 'Barbie como Rapunzel'?",
    opcoes: ["Fang", "Penélope", "Spark", "Ruby"],
    resposta: 1,
    explicacao: "Penélope é a dragão mais fofinha e desastrada do reino da torre! 🐉"
  },
  {
    texto: "Em 'Barbie Fairytopia', como se chama o companheiro fofinho da Elina?",
    opcoes: ["Bibble", "Twinkle", "Zuzu", "Sparkle"],
    resposta: 0,
    explicacao: "Bibble é o mascote azulzinho que só fala 'bleeble' e 'boop'! Inesquecível!"
  },
  {
    texto: "Em qual filme Barbie vive uma bailarina que viaja para outro mundo através das sapatilhas?",
    opcoes: ["Barbie e as Doze Princesas Bailarinas", "Barbie e As Sapatilhas Mágicas", "Barbie Lago dos Cisnes", "Barbie no Castelo de Diamante"],
    resposta: 1,
    explicacao: "'As Sapatilhas Mágicas' levam Barbie (Kristyn) para dentro de balés mágicos como Giselle e Lago dos Cisnes!"
  },
  {
    texto: "Em 'Barbie e a Magia de Aladus', qual é o nome da princesa protagonista?",
    opcoes: ["Alexis", "Liana", "Anika", "Kara"],
    resposta: 2,
    explicacao: "Anika é a princesa corajosa que enfrenta a feiticeira Wenlock para salvar sua família!"
  },
  {
    texto: "Barbie interpreta qual princesa no filme 'Barbie: A Princesa da Ilha'?",
    opcoes: ["Rosella", "Amelia", "Luciana", "Odette"],
    resposta: 0,
    explicacao: "Rosella foi criada por animais da ilha e descobre sua verdadeira origem real com o tempo!"
  },
  {
    texto: "Qual é o talento especial de Barbie em 'Barbie Vida de Sereia'?",
    opcoes: ["Dança mágica", "Nadar como golfinho", "Controlar ondas", "Surfar"],
    resposta: 3,
    explicacao: "Barbie (Merliah) é uma surfista profissional que descobre ser parte sereia!"
  },
  {
    texto: "Em 'Barbie em A Christmas Carol', qual é o nome da personagem principal inspirada em Scrooge?",
    opcoes: ["Eden Starling", "Clara", "Lucinda", "Vanessa"],
    resposta: 0,
    explicacao: "Eden Starling é uma diva egoísta que recebe a visita dos três espíritos do Natal!"
  },
  {
    texto: "Qual dessas é uma princesa que luta como mosqueteira no filme 'Barbie e as Três Mosqueteiras'?",
    opcoes: ["Corinne", "Blair", "Lumina", "Keira"],
    resposta: 0,
    explicacao: "Corinne sonha em ser uma mosqueteira e prova que meninas também são destemidas espadachins!"
  },
  {
    texto: "Qual é o animal mágico que ajuda Barbie no filme 'Barbie: Escola de Princesas'?",
    opcoes: ["Um gato falante", "Um pônei mágico", "Um cavalo branco", "Uma coruja treinadora"],
    resposta: 2,
    explicacao: "Barbie monta um cavalo branco que a ajuda nos treinos e nas aventuras escolares reais!"
  },
  {
    texto: "Qual dessas é uma das <span style='font-family: Arial;'>12</span> irmãs dançarinas em 'Barbie e as Doze Princesas Bailarinas'?",
    opcoes: ["Genevieve", "Isabella", "Serena", "Bianca"],
    resposta: 0,
    explicacao: "Genevieve é a protagonista entre as doze irmãs que amam dançar juntas!"
  },
  {
    texto: "Em 'Barbie no Castelo de Diamante', qual é a profissão de Liana e Alexa antes da aventura?",
    opcoes: ["Camponesas", "Cozinheiras", "Floristas", "Ajudantes do castelo"],
    resposta: 2,
    explicacao: "As duas eram floristas e cantoras, antes de embarcarem na aventura com o espelho mágico!"
  },
  {
    texto: "Qual é o nome da cidade grande no filme 'Barbie: Big City, Big Dreams'?",
    opcoes: ["New York", "Barbieville", "Glittertown", "Sparkle City"],
    resposta: 0,
    explicacao: "Barbie viaja para Nova York e conhece outra Barbie com quem vive um musical inesquecível!"
  },
  {
    texto: "Em qual desses filmes a Barbie interpreta uma sereia chamada Lumina?",
    opcoes: ["Barbie e o Segredo das Fadas", "Barbie em Vida de Sereia", "Barbie: A Sereia das Pérolas", "Barbie e a Magia do Arco-Íris"],
    resposta: 2,
    explicacao: "Lumina é uma sereia que descobre ter o poder de controlar pérolas!"
  },
  {
    texto: "Qual desses é um amigo fiel da Barbie no filme 'Barbie como Rapunzel'?",
    opcoes: ["Hobie o coelho", "Bibble", "Melody", "Sparkle o rato"],
    resposta: 0,
    explicacao: "Hobie é o coelhinho inteligente que ajuda Rapunzel a escapar da torre! 🐰"
  },
  {
    texto: "Qual é o tema principal de 'Barbie e o Castelo de Diamante'?",
    opcoes: ["Viagem no tempo", "Magia e amizade", "Transformação real", "Reinos de gelo"],
    resposta: 1,
    explicacao: "O filme gira em torno da amizade verdadeira entre Liana e Alexa!"
  },
  {
    texto: "Em 'Barbie e a Porta Secreta', qual é o nome da princesa protagonista?",
    opcoes: ["Kara", "Alexa", "Elina", "Crystal"],
    resposta: 1,
    explicacao: "Alexa é uma princesa tímida que descobre um portal mágico escondido na biblioteca!"
  },
  {
    texto: "Qual filme mostra Barbie treinando para se tornar uma super-heroína?",
    opcoes: ["Barbie Super Princesa", "Barbie e as Agentes Secretas", "Barbie Spy Squad", "Barbie em o Portal Secreto"],
    resposta: 0,
    explicacao: "Em 'Barbie Super Princesa', ela ganha poderes e luta contra o vilão com estilo!"
  },
  {
    texto: "Em 'Barbie: Lago dos Cisnes', qual é o nome da protagonista?",
    opcoes: ["Odette", "Clara", "Anneliese", "Kristyn"],
    resposta: 0,
    explicacao: "Odette é a jovem que se transforma em cisne e entra em um conto de fadas clássico!"
  },
  {
    texto: "Barbie interpreta quem em 'Barbie e a Princesa da Ilha'?",
    opcoes: ["Rosella", "Elina", "Corinne", "Kara"],
    resposta: 0,
    explicacao: "Rosella é a menina que cresceu entre animais da ilha e canta com pássaros tropicais!"
  }
];

perguntas.push(
  {
    texto: "Em 'Barbie e o Portal Secreto', quem ajuda a princesa Alexa a salvar o reino mágico?",
    opcoes: ["Uma fada e uma sereia", "Duas rainhas do arco-íris", "Uma gárgula e um duende", "Bibble e Elina"],
    resposta: 0,
    explicacao: "Alexa é ajudada por Nori (sereia) e Romy (fada) na luta contra Malucia!"
  },
  {
    texto: "Qual dessas é a profissão da Barbie no filme 'Barbie e as Agentes Secretas'?",
    opcoes: ["Piloto", "Cantora", "Ginasta", "Veterinária"],
    resposta: 2,
    explicacao: "Ela começa como ginasta e vira uma agente secreta junto com suas amigas!"
  },
  {
    texto: "No filme 'Barbie e o Quebra-Nozes', qual é o nome do príncipe encantado?",
    opcoes: ["Stefan", "Eric", "Daniel", "George"],
    resposta: 1,
    explicacao: "O Príncipe Eric ajuda Clara a salvar o Reino dos Doces!"
  },
  {
    texto: "Quantas princesas aparecem no filme 'Barbie e as Doze Princesas Bailarinas'?",
    opcoes: ["<span style='font-family: Arial;'>10</span>", "<span style='font-family: Arial;'>11</span>", "<span style='font-family: Arial;'>12</span>", "<span style='font-family: Arial;'>13</span>"],
    resposta: 2,
    explicacao: "O título já diz tudo! São <span style='font-family: Arial;'>12</span> irmãs que vivem para dançar!"
  },
  {
    texto: "Em qual filme Barbie interpreta a princesa Odette?",
    opcoes: ["Barbie Lago dos Cisnes", "Barbie Fairytopia", "Barbie e a Sereia das Pérolas", "Barbie no Castelo de Diamante"],
    resposta: 0,
    explicacao: "Odette é a personagem do clássico 'Lago dos Cisnes', transformada em cisne por Rothbart!"
  },
  {
    texto: "Em 'Barbie e a Sereia das Pérolas', qual é o poder mágico da Barbie?",
    opcoes: ["Comandar golfinhos", "Controlar as pérolas", "Voar debaixo d’água", "Criar música mágica"],
    resposta: 1,
    explicacao: "Lumina, a Barbie sereia, tem o poder de mover e controlar pérolas!"
  },
  {
    texto: "Qual é o nome da vilã em 'Barbie como Rapunzel'?",
    opcoes: ["Gothel", "Malucia", "Wenlock", "Rowena"],
    resposta: 0,
    explicacao: "Gothel mantém Rapunzel presa em uma torre — bem estilo conto clássico!"
  },
  {
    texto: "Qual desses filmes tem duas Barbies com o mesmo nome?",
    opcoes: ["Barbie Aventura nas Estrelas", "Barbie Dreamtopia", "Barbie: Big City, Big Dreams", "Barbie e a Magia de Aladus"],
    resposta: 2,
    explicacao: "As duas Barbies se encontram em NY e têm o mesmo nome — uma do interior, outra da cidade!"
  },
  {
    texto: "Em 'Barbie e o Castelo de Diamante', o que as protagonistas encontram que muda tudo?",
    opcoes: ["Um mapa escondido", "Um espelho mágico", "Um anel de luz", "Um colar encantado"],
    resposta: 1,
    explicacao: "O espelho mágico com Melody leva as garotas à aventura para salvar o Castelo da Música!"
  },
  {
    texto: "Qual dessas Barbies é uma princesa e uma estrela do rock?",
    opcoes: ["Alexa", "Keira", "Tori", "Liana"],
    resposta: 2,
    explicacao: "Tori é a princesa que troca de lugar com a popstar Keira no filme musical!"
  },
  {
    texto: "Em 'Barbie e Suas Irmãs em Uma Aventura de Cachorrinhos', quantos filhotes elas precisam encontrar?",
    opcoes: ["<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>", "<span style='font-family: Arial;'>6</span>"],
    resposta: 1,
    explicacao: "Cada irmã tem um filhotinho e todos somem! Elas precisam encontrar <span style='font-family: Arial;'>4</span> filhotes perdidos."
  },
  {
    texto: "No filme 'Barbie e a Pop Star', qual é o estilo musical da Barbie?",
    opcoes: ["Rock alternativo", "Country", "Pop tradicional", "Jazz moderno"],
    resposta: 2,
    explicacao: "Ela representa a estrela pop clássica, enquanto Keira traz o estilo mais moderno!"
  },
  {
    texto: "Em 'Barbie Fairytopia', quem é o vilão?",
    opcoes: ["Laverna", "Wenlock", "Gothel", "Malucia"],
    resposta: 0,
    explicacao: "Laverna quer acabar com Fairytopia e Elina precisa impedi-la!"
  },
  {
    texto: "Quantos filmes fazem parte da trilogia 'Barbie Fairytopia'?",
    opcoes: ["<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>"],
    resposta: 1,
    explicacao: "A trilogia inclui: 'Fairytopia', 'Mermaidia' e 'Magic of the Rainbow'."
  },
  {
    texto: "Em 'Barbie: Aventura nas Estrelas', qual o meio de transporte usado pela Barbie?",
    opcoes: ["Tapete voador", "Skate de foguete", "Hoverboard cósmico", "Nuvem encantada"],
    resposta: 2,
    explicacao: "Ela viaja em um hoverboard rosa brilhante, claro! 💫"
  },
  {
    texto: "Qual é o nome do mundo mágico visitado em 'Barbie Dreamtopia'?",
    opcoes: ["Fantásia Fofa", "Reino das Nuvens", "Dreamtopia", "Glitterworld"],
    resposta: 2,
    explicacao: "Dreamtopia é criado pela imaginação de Chelsea e tem doces, nuvens e muito rosa!"
  },
  {
    texto: "Em 'Barbie em Vida de Sereia', como se chama a cidade subaquática?",
    opcoes: ["Aquaria", "Oceana", "Marina", "Atlântica"],
    resposta: 1,
    explicacao: "Oceana é o reino subaquático onde Merliah descobre ser uma princesa sereia!"
  },
  {
    texto: "Qual é o primeiro filme oficial da Barbie lançado?",
    opcoes: ["Barbie e o Quebra-Nozes", "Barbie Lago dos Cisnes", "Barbie como Rapunzel", "Barbie e a Princesa da Ilha"],
    resposta: 0,
    explicacao: "O primeiro filme da Barbie foi 'O Quebra-Nozes', lançado em <span style='font-family: Arial;'>2001</span>!"
  },
  {
    texto: "Qual é o nome da cidade onde Barbie mora na maioria dos filmes?",
    opcoes: ["Willowville", "Malibu", "Pinktown", "Fashion City"],
    resposta: 1,
    explicacao: "Malibu é a cidade natal mais clássica da Barbie!"
  },
  {
    texto: "Em 'Barbie Moda e Magia', qual o tema central do filme?",
    opcoes: ["Viagem ao passado", "Estilismo mágico", "Moda futurista", "Feitiço do guarda-roupa"],
    resposta: 1,
    explicacao: "Barbie vai a Paris e descobre que a moda também pode ser mágica!"
  }
);

perguntas.push(
  {
    texto: "Qual dessas irmãs da Barbie é conhecida por amar tecnologia?",
    opcoes: ["Chelsea", "Skipper", "Stacie", "Nikki"],
    resposta: 1,
    explicacao: "Skipper é a irmã tech: adora gadgets, redes sociais e cuida de tudo digital!"
  },
  {
    texto: "Em 'Barbie e Suas Irmãs em Uma Aventura de Cavalos', onde elas passam as férias?",
    opcoes: ["Nas montanhas", "Em um acampamento", "Em uma fazenda de equitação", "Na praia"],
    resposta: 2,
    explicacao: "As meninas vão para uma fazenda aprender a cavalgar e lidar com seus próprios cavalos!"
  },
  {
    texto: "Quantas irmãs a Barbie tem?",
    opcoes: ["<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>"],
    resposta: 2,
    explicacao: "Barbie tem <span style='font-family: Arial;'>3</span> irmãs: Skipper, Stacie e Chelsea 💕"
  },
  {
    texto: "Em 'Barbie: Aventura com Barbie', quantas versões da Barbie aparecem?",
    opcoes: ["<span style='font-family: Arial;'>1</span>", "<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>"],
    resposta: 1,
    explicacao: "São <span style='font-family: Arial;'>2</span> Barbies: uma loira (nossa clássica) e uma morena da cidade!"
  },
  {
    texto: "Em 'Barbie e a Sereia das Pérolas', qual é o nome da personagem principal?",
    opcoes: ["Merliah", "Lumina", "Elina", "Ariel"],
    resposta: 1,
    explicacao: "Lumina é a princesa do fundo do mar com poderes de controlar pérolas!"
  },
  {
    texto: "Qual dessas amigas da Barbie é conhecida por ser veterinária?",
    opcoes: ["Nikki", "Teresa", "Summer", "Barbie (ela mesma!)"],
    resposta: 3,
    explicacao: "A própria Barbie já foi veterinária, cuidando de filhotes em vários filmes!"
  },
  {
    texto: "Em 'Barbie Princesa e a Plebéia', qual dessas é a música tema principal?",
    opcoes: ["Sou como você", "Juntas podemos tudo", "Amigas até o fim", "Dueto encantado"],
    resposta: 0,
    explicacao: "A clássica 'Sou como você' é cantada por Anneliese e Erika, em um dueto inesquecível!"
  },
  {
    texto: "Quantos filmes fazem parte da franquia 'Barbie e suas Irmãs'?",
    opcoes: ["<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>"],
    resposta: 2,
    explicacao: "São <span style='font-family: Arial;'>4</span> filmes focados na Barbie e suas irmãs em aventuras diferentes!"
  },
  {
    texto: "Em 'Barbie e o Quebra-Nozes', quem é o vilão da história?",
    opcoes: ["Rei das Sombras", "Rei Rato", "Rothbart", "Wenlock"],
    resposta: 1,
    explicacao: "O Rei Rato é quem coloca Clara e o Príncipe Eric em perigo no Reino dos Doces!"
  },
  {
    texto: "Em 'Barbie Moda e Magia', a história se passa em qual cidade fashion?",
    opcoes: ["Milão", "Nova York", "Paris", "Londres"],
    resposta: 2,
    explicacao: "Barbie viaja para Paris e descobre fadas da moda escondidas num ateliê mágico!"
  },
  {
    texto: "No filme 'Barbie e o Lago dos Cisnes', qual animal guia Odette em sua jornada?",
    opcoes: ["Coruja", "Unicórnio", "Cisne branco", "Raposa mágica"],
    resposta: 1,
    explicacao: "Um unicórnio ajuda Odette a entender seus poderes e enfrentar Rothbart!"
  },
  {
    texto: "Quantas profissões diferentes a Barbie já teve em seus filmes?",
    opcoes: ["<span style='font-family: Arial;'>30+</span>", "<span style='font-family: Arial;'>50+</span>", "<span style='font-family: Arial;'>100+</span>", "<span style='font-family: Arial;'>200+</span>"],
    resposta: 2,
    explicacao: "Barbie já teve mais de <span style='font-family: Arial;'>100</span> profissões! Piloto, médica, astronauta, veterinária..."
  },
  {
    texto: "Qual dessas personagens NÃO é uma princesa interpretada pela Barbie?",
    opcoes: ["Anneliese", "Genevieve", "Merliah", "Alexa"],
    resposta: 2,
    explicacao: "Merliah é uma surfista/sereia, mas nunca foi princesa em sua história!"
  },
  {
    texto: "Em qual filme Barbie interpreta uma ginasta campeã que vira agente secreta?",
    opcoes: ["Barbie Spy Squad", "Barbie Super Princesa", "Barbie em Aventura nas Estrelas", "Barbie em A Princesa Popstar"],
    resposta: 0,
    explicacao: "'Barbie Spy Squad' mostra Barbie e suas amigas como agentes ultra estilosas!"
  },
  {
    texto: "Em 'Barbie e as Três Mosqueteiras', quantas meninas formam o grupo das heroínas?",
    opcoes: ["<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>", "<span style='font-family: Arial;'>6</span>"],
    resposta: 1,
    explicacao: "Apesar do nome, são <span style='font-family: Arial;'>4</span> garotas que lutam com espadas e muito poder!"
  },
  {
    texto: "Qual é a habilidade especial de Merliah em 'Barbie em Vida de Sereia'?",
    opcoes: ["Falar com peixes", "Criar bolhas mágicas", "Transformar a cauda", "Mudar de cabelo com o poder da água"],
    resposta: 2,
    explicacao: "Merliah pode alternar entre humana e sereia, mudando a cauda com estilo!"
  },
  {
    texto: "Em 'Barbie: Skipper e a Grande Aventura de Babysitting', quem é a protagonista?",
    opcoes: ["Chelsea", "Stacie", "Skipper", "Nikki"],
    resposta: 2,
    explicacao: "Skipper comanda a missão de cuidar de vários bebês em um caos total com muito humor!"
  },
  {
    texto: "Em qual desses filmes a Barbie não interpreta uma princesa?",
    opcoes: ["Barbie Fairytopia", "Barbie e as Agentes Secretas", "Barbie como Rapunzel", "Barbie e a Porta Secreta"],
    resposta: 1,
    explicacao: "Em 'Agentes Secretas' ela é espiã! Nada de coroa, só gadgets!"
  },
  {
    texto: "Quantas versões da Barbie aparecem no filme interativo 'Barbie: Epic Road Trip'?",
    opcoes: ["<span style='font-family: Arial;'>1</span>", "<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>"],
    resposta: 3,
    explicacao: "São <span style='font-family: Arial;'>4</span> Barbies no multiverso viajante!"
  },
  {
    texto: "Qual é a habilidade de Barbie em 'Barbie em a Magia do Arco-Íris'?",
    opcoes: ["Cantar encantamentos", "Voar com flores", "Criar arco-íris", "Fazer a primavera chegar"],
    resposta: 3,
    explicacao: "Ela ajuda a trazer a primavera com a Dança da Primavera em Fairytopia!"
  }
);

perguntas.push(
  {
    texto: "Em 'Barbie como a Princesa e a Plebéia', qual é o nome da plebéia?",
    opcoes: ["Tori", "Keira", "Erika", "Odette"],
    resposta: 2,
    explicacao: "Erika é a plebéia talentosa que troca de lugar com a princesa Anneliese. Música + confusão garantida!"
  },
  {
    texto: "No filme 'Barbie Lago dos Cisnes', o que Rothbart quer conquistar?",
    opcoes: ["O amor de Odette", "O Reino dos Elfos", "A Floresta Encantada", "O trono mágico da Rainha das Fadas"],
    resposta: 3,
    explicacao: "Rothbart quer dominar tudo com escuridão, inclusive o trono mágico da Rainha das Fadas!"
  },
  {
    texto: "Em 'Barbie Dreamtopia', quem é a irmãzinha que imagina tudo?",
    opcoes: ["Stacie", "Skipper", "Chelsea", "Melody"],
    resposta: 2,
    explicacao: "Chelsea solta a imaginação e cria Dreamtopia com doces, nuvens e muito rosa 💕"
  },
  {
    texto: "Em qual desses filmes Barbie viaja no espaço?",
    opcoes: ["Barbie em Aventura nas Estrelas", "Barbie: Aventura Intergaláctica", "Barbie e o Portal Cósmico", "Barbie Galaxy Mission"],
    resposta: 0,
    explicacao: "'Barbie em Aventura nas Estrelas' leva a boneca mais famosa do mundo direto para o cosmos!"
  },
  {
    texto: "Qual é o nome da vilã em 'Barbie e o Portal Secreto'?",
    opcoes: ["Laverna", "Gothel", "Malucia", "Rowena"],
    resposta: 2,
    explicacao: "Malucia quer roubar todos os poderes mágicos e dominar o reino secreto!"
  },
  {
    texto: "Em 'Barbie e as Agentes Secretas', quantas amigas formam o time espião?",
    opcoes: ["<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>"],
    resposta: 1,
    explicacao: "São <span style='font-family: Arial;'>3</span> amigas super ágeis, espiãs e fashionistas com estilo top-secret 🔍"
  },
  {
    texto: "Em 'Barbie e a Magia das Fadas', qual é o nome da terra encantada que Barbie visita?",
    opcoes: ["Fairytopia", "Gloss Angeles", "Dreamland", "Sparkleville"],
    resposta: 1,
    explicacao: "Gloss Angeles é onde vivem as fadas estilistas, com looks brilhantes e magia fashion!"
  },
  {
    texto: "Qual é o nome do cavalo mágico de Barbie em vários filmes?",
    opcoes: ["Pegasus", "Licorne", "Majesty", "Buttercup"],
    resposta: 0,
    explicacao: "Pegasus aparece em filmes como 'Barbie e a Magia de Aladus' e 'Barbie e Pegasus'!"
  },
  {
    texto: "Em qual filme Barbie vive em um castelo feito de música e pedras preciosas?",
    opcoes: ["Barbie Lago dos Cisnes", "Barbie e a Magia do Arco-Íris", "Barbie no Castelo de Diamante", "Barbie Dreamtopia"],
    resposta: 2,
    explicacao: "No Castelo de Diamante, tudo é musical e brilhante! ✨🎶"
  },
  {
    texto: "Quantos filmes da Barbie foram lançados até <span style='font-family: Arial;'>2023</span> oficialmente?",
    opcoes: ["<span style='font-family: Arial;'>25</span>", "<span style='font-family: Arial;'>38</span>", "<span style='font-family: Arial;'>42</span>", "<span style='font-family: Arial;'>50</span>"],
    resposta: 2,
    explicacao: "Foram <span style='font-family: Arial;'>42</span> lançamentos oficiais até <span style='font-family: Arial;'>2023</span>, sem contar curtas e interativos!"
  },
  {
    texto: "Qual dessas personagens tem um mascote chamado Bibble?",
    opcoes: ["Elina", "Odette", "Rapunzel", "Lumina"],
    resposta: 0,
    explicacao: "Bibble é o bichinho azul fofíssimo que acompanha Elina em Fairytopia! 💙"
  },
  {
    texto: "Em 'Barbie em Vida de Sereia', qual é o grande torneio que ela participa?",
    opcoes: ["Corrida das Ondas", "Festival de Surf", "Campeonato Oceano Azul", "Rainha da Praia"],
    resposta: 1,
    explicacao: "Ela participa de uma competição de surf — e ainda descobre que é princesa subaquática!"
  },
  {
    texto: "No filme 'Barbie Super Princesa', qual objeto concede os poderes?",
    opcoes: ["Tiara mágica", "Anel de luz", "Borboleta encantada", "Colar brilhante"],
    resposta: 2,
    explicacao: "Uma borboleta mágica pousa nela e ativa seus poderes super estilosos!"
  },
  {
    texto: "Em 'Barbie e as Doze Princesas Bailarinas', o pai delas é...",
    opcoes: ["Um mago", "Um rei viúvo", "Um comerciante rico", "Um treinador de dança"],
    resposta: 1,
    explicacao: "O rei é viúvo e pai das <span style='font-family: Arial;'>12</span> princesas dançarinas, cada uma com um estilo próprio!"
  },
  {
    texto: "Qual Barbie viaja entre mundos com a ajuda de uma pintura mágica?",
    opcoes: ["Genevieve", "Rapunzel", "Alexa", "Kristyn"],
    resposta: 1,
    explicacao: "Rapunzel usa um pincel encantado que permite entrar em outras realidades pela tela!"
  },
  {
    texto: "Qual dessas aventuras é focada em uma competição de moda?",
    opcoes: ["Barbie Fashion Fairytale", "Barbie Fairytopia", "Barbie Lago dos Cisnes", "Barbie Mermaid Power"],
    resposta: 0,
    explicacao: "Fashion Fairytale traz Barbie enfrentando a vilã Raquelle com a ajuda das fadas estilistas!"
  },
  {
    texto: "Em qual filme a Barbie se muda para a cidade grande para estudar música?",
    opcoes: ["Barbie e a Princesa e a Popstar", "Barbie Big City Big Dreams", "Barbie Escola de Princesas", "Barbie: Epic Road Trip"],
    resposta: 1,
    explicacao: "Em NYC, Barbie conhece outra Barbie e as duas disputam um papel principal num musical 🎤🎹"
  },
  {
    texto: "Qual é o nome do cachorro mais famoso da Barbie?",
    opcoes: ["Taffy", "Luna", "Fluffy", "Snickers"],
    resposta: 0,
    explicacao: "Taffy é a cadelinha amarela que aparece em vários filmes e episódios da Dreamhouse!"
  },
  {
    texto: "Em 'Barbie como a Princesa e a Plebéia', a Barbie faz dois papéis. Quais?",
    opcoes: ["Princesa e fada", "Cantora e princesa", "Princesa e plebéia", "Espiã e cantora"],
    resposta: 2,
    explicacao: "Barbie interpreta Anneliese (princesa) e Erika (plebéia) — um clássico duplo perfeito!"
  },
  {
    texto: "Em 'Barbie e as Três Mosqueteiras', o lema das meninas é:",
    opcoes: ["Brilho, força e magia!", "Uma por todas e todas por uma!", "Espada, salto e coração!", "Coragem é o novo rosa!"],
    resposta: 1,
    explicacao: "Homenagem direta aos Mosqueteiros originais, claro — com vestidos de gala e espadas rosa! 💗"
  }
);

perguntas.push(
  {
    texto: "Em 'Barbie e o Castelo de Diamante', quem é a melhor amiga da Barbie?",
    opcoes: ["Teresa", "Liana", "Alexa", "Melody"],
    resposta: 1,
    explicacao: "Liana e Barbie (como personagem) vivem aventuras musicais no castelo brilhante de diamante!"
  },
  {
    texto: "Qual filme mostra Barbie salvando filhotes perdidos com suas irmãs?",
    opcoes: ["Barbie: Vida de Sereia", "Barbie e Suas Irmãs em Uma Aventura de Cachorrinhos", "Barbie Dreamhouse", "Barbie e os Golfinhos Mágicos"],
    resposta: 1,
    explicacao: "Elas exploram uma cidadezinha com seus cachorrinhos em busca de uma surpresa peluda!"
  },
  {
    texto: "Em 'Barbie e as Sapatilhas Mágicas', onde a personagem principal vai parar?",
    opcoes: ["No Reino de Cristal", "Dentro de um espelho mágico", "Dentro do mundo dos balés", "No Palácio Real da Moda"],
    resposta: 2,
    explicacao: "Ela entra em balés clássicos como 'Lago dos Cisnes' usando as sapatilhas mágicas!"
  },
  {
    texto: "Em qual filme Barbie precisa assumir o trono e se preparar para ser rainha?",
    opcoes: ["Barbie Princesa e a Popstar", "Barbie Escola de Princesas", "Barbie: Aventura Real", "Barbie e o Portal Secreto"],
    resposta: 1,
    explicacao: "Ela treina na Escola de Princesas com direito a montaria, tiaras e um pouco de rebeldia real 👑"
  },
  {
    texto: "Qual personagem tem o cabelo que muda de cor com água em 'Fairytopia'?",
    opcoes: ["Elina", "Lumina", "Fira", "Nori"],
    resposta: 0,
    explicacao: "Elina tem cabelos mágicos e é uma fada sem asas no início da história!"
  },
  {
    texto: "Em 'Barbie e a Magia de Aladus', Anika tem que resgatar quem?",
    opcoes: ["Seu irmão", "Sua mãe", "Suas irmãs", "Seu reino"],
    resposta: 2,
    explicacao: "Ela precisa salvar suas irmãs das garras do feiticeiro Wenlock usando um Pegasus mágico!"
  },
  {
    texto: "No filme 'Barbie: Big City, Big Dreams', quantas Barbies são protagonistas?",
    opcoes: ["<span style='font-family: Arial;'>1</span>", "<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>"],
    resposta: 1,
    explicacao: "São <span style='font-family: Arial;'>2</span> Barbies com o mesmo nome e muito talento musical em Nova York!"
  },
  {
    texto: "Em 'Barbie: Skipper e a Grande Aventura de Babá', quem é a protagonista?",
    opcoes: ["Stacie", "Chelsea", "Skipper", "Tori"],
    resposta: 2,
    explicacao: "Skipper assume os cuidados das crianças em uma aventura cheia de trapalhadas e aprendizado 💼👶"
  },
  {
    texto: "Qual dessas opções é um filme interativo da Barbie?",
    opcoes: ["Barbie: Escolha Seu Caminho", "Barbie Dreamtopia: Quebra-Cabeça Mágico", "Barbie: Epic Road Trip", "Barbie Dance Party"],
    resposta: 2,
    explicacao: "'Barbie: Epic Road Trip' é um filme interativo onde o espectador decide o rumo da história!"
  },
  {
    texto: "Em 'Barbie Aventura nas Estrelas', qual é o poder secreto de Barbie?",
    opcoes: ["Voo com energia", "Mudar de forma", "Falar com animais galácticos", "Controlar a gravidade"],
    resposta: 3,
    explicacao: "Ela consegue controlar a gravidade e realiza coreografias espaciais de outro mundo! 🌌"
  },
  {
    texto: "No filme 'Barbie Mermaid Power', quantas sereias principais aparecem?",
    opcoes: ["<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>"],
    resposta: 2,
    explicacao: "São <span style='font-family: Arial;'>4</span> protagonistas, incluindo Barbie Malibu e Barbie Brooklyn em versão sereia!"
  },
  {
    texto: "Qual desses filmes mostra a Barbie em uma escola de magia?",
    opcoes: ["Barbie e o Portal Secreto", "Barbie: Aventura na Torre", "Barbie Magic Academy", "Barbie e a Magia do Arco-Íris"],
    resposta: 3,
    explicacao: "Ela visita uma escola mágica no Reino de Fairytopia em 'A Magia do Arco-Íris' 🌈"
  },
  {
    texto: "Em 'Barbie e a Sereia das Pérolas', qual é o nome da protagonista?",
    opcoes: ["Lumina", "Marina", "Coraline", "Ariel"],
    resposta: 0,
    explicacao: "Lumina é uma sereia com o dom de controlar pérolas — e arrasar nos penteados submarinos!"
  },
  {
    texto: "Em 'Barbie e as Irmãs em Busca dos Cachorrinhos', onde se passa a história?",
    opcoes: ["Itália", "Havaí", "Cidade costeira fictícia", "Paris"],
    resposta: 2,
    explicacao: "A aventura acontece em uma cidadezinha de litoral com muito mistério e cachorros perdidos 🐶"
  },
  {
    texto: "Qual dessas Barbies tem um talento especial com música e dança?",
    opcoes: ["Genevieve", "Liana", "Skipper", "Elina"],
    resposta: 0,
    explicacao: "Genevieve é uma das <span style='font-family: Arial;'>12</span> princesas e ama dançar em 'Barbie e as Doze Princesas Bailarinas'."
  },
  {
    texto: "Em qual filme Barbie tem cabelo azul?",
    opcoes: ["Barbie Dreamtopia", "Barbie e o Portal Secreto", "Barbie: Aventura nas Estrelas", "Barbie Mermaid Power"],
    resposta: 3,
    explicacao: "Em 'Mermaid Power', Barbie aparece com cabelo azul como parte da transformação sereia!"
  },
  {
    texto: "Quem ajuda a Barbie em 'Fairytopia' a conquistar suas asas?",
    opcoes: ["Bibble", "Dandelion", "Fungus", "Topaz"],
    resposta: 1,
    explicacao: "Dandelion é a fada guerreira que acompanha Elina na jornada pelas flores mágicas!"
  },
  {
    texto: "No filme 'Barbie e a Princesa da Ilha', qual é o dom especial de Rosella?",
    opcoes: ["Falar com animais", "Controlar o mar", "Enfeitiçar música", "Transformar flores"],
    resposta: 0,
    explicacao: "Rosella foi criada por animais e tem um vínculo especial com todos da ilha 🐦🦜"
  },
  {
    texto: "Em 'Barbie: A Princesa e a Popstar', o que cada uma deseja?",
    opcoes: ["Trocar de casa", "Trocar de roupas", "Trocar de vida", "Trocar de cabelo"],
    resposta: 2,
    explicacao: "Tori e Keira desejam viver a vida uma da outra — e o desejo vira realidade!"
  },
  {
    texto: "Qual foi o primeiro filme da Barbie lançado oficialmente?",
    opcoes: ["Barbie como Rapunzel", "Barbie Lago dos Cisnes", "Barbie: O Quebra-Nozes", "Barbie e a Princesa da Ilha"],
    resposta: 2,
    explicacao: "'Barbie: O Quebra-Nozes' foi o primeiro de todos, lançado em <span style='font-family: Arial;'>2001</span> — e é um clássico natalino com toque de ballet!"
  }
);

perguntas.push(
  {
    texto: "Qual dessas personagens vive entre o mar e a terra em 'Barbie em Vida de Sereia'?",
    opcoes: ["Merliah", "Lumina", "Odette", "Marissa"],
    resposta: 0,
    explicacao: "Merliah descobre que é uma sereia e precisa salvar o reino submarino de sua tia má!"
  },
  {
    texto: "Em 'Barbie e o Portal Secreto', qual é o nome da princesa que descobre um novo mundo?",
    opcoes: ["Alexa", "Isla", "Kara", "Skye"],
    resposta: 0,
    explicacao: "Alexa descobre o portal e um reino cheio de magia onde ela tem poderes secretos!"
  },
  {
    texto: "No filme 'Barbie e a Magia da Moda', onde a história se passa?",
    opcoes: ["Nova York", "Paris", "Milão", "Los Angeles"],
    resposta: 1,
    explicacao: "Barbie vai a Paris salvar a casa de moda da tia Millicent com a ajuda de fadas fashionistas!"
  },
  {
    texto: "Em 'Barbie: Escola de Princesas', o que a Barbie aprende a fazer?",
    opcoes: ["Governar", "Cavalgar", "Etiqueta real", "Todas as anteriores"],
    resposta: 3,
    explicacao: "Ela aprende tudo isso e ainda precisa lidar com uma vilã que quer roubar sua vaga no trono!"
  },
  {
    texto: "Qual Barbie protagoniza uma história de Natal inspirada em Dickens?",
    opcoes: ["Barbie como Scrooge", "Barbie em A Christmas Carol", "Barbie Natal Brilhante", "Barbie e o Espírito do Natal"],
    resposta: 1,
    explicacao: "'Barbie em A Christmas Carol' é inspirada na obra clássica e traz Barbie como Eden Starling."
  },
  {
    texto: "Em 'Barbie e a Sereia das Pérolas', Lumina é filha de quem?",
    opcoes: ["Rainha Lorelei", "Rei Neptune", "Rainha Serena", "Ninguém sabe no início"],
    resposta: 3,
    explicacao: "A origem real de Lumina é um mistério revelado só no final... com plot twist real 💎"
  },
  {
    texto: "Qual filme tem o mascote Puffball?",
    opcoes: ["Barbie Fairytopia", "Barbie e a Magia de Aladus", "Barbie Escola de Princesas", "Barbie Lago dos Cisnes"],
    resposta: 0,
    explicacao: "Puffball é o mascote fofo e peludo que ajuda Elina nas aventuras de Fairytopia!"
  },
  {
    texto: "Em 'Barbie e as Três Mosqueteiras', qual é o sonho da Barbie?",
    opcoes: ["Ser rainha", "Ser estilista", "Ser mosqueteira", "Ser cantora"],
    resposta: 2,
    explicacao: "Corinne quer ser uma mosqueteira e proteger a realeza com classe e coragem!"
  },
  {
    texto: "Quantas princesas aparecem em 'Barbie e as Doze Princesas Bailarinas'?",
    opcoes: ["<span style='font-family: Arial;'>10</span>", "<span style='font-family: Arial;'>12</span>", "<span style='font-family: Arial;'>14</span>", "<span style='font-family: Arial;'>8</span>"],
    resposta: 1,
    explicacao: "O nome já diz tudo: são <span style='font-family: Arial;'>12</span> irmãs, cada uma com um estilo de dança diferente!"
  },
  {
    texto: "Em qual desses filmes Barbie interpreta uma espiã?",
    opcoes: ["Barbie Fashion Fairytale", "Barbie e as Agentes Secretas", "Barbie Epic Mission", "Barbie no Mundo dos Jogos"],
    resposta: 1,
    explicacao: "Ela é uma espiã atlética e tecnológica com duas amigas super estilosas 💼🕶️"
  },
  {
    texto: "Em 'Barbie: Aventura nas Estrelas', qual animal de estimação flutua com ela?",
    opcoes: ["Gato estelar", "Cachorro flutuante", "Macaco cósmico", "Pônei com asas de plasma"],
    resposta: 1,
    explicacao: "Um cãozinho fofo flutua com ela durante as danças intergalácticas! 💫"
  },
  {
    texto: "No filme 'Barbie e o Quebra-Nozes', qual o nome do príncipe?",
    opcoes: ["Eric", "Nicholas", "Daniel", "Frederick"],
    resposta: 0,
    explicacao: "Eric é o príncipe encantado disfarçado de boneco no mundo mágico do Quebra-Nozes!"
  },
  {
    texto: "Qual desses filmes envolve golfinhos e segredos submarinos?",
    opcoes: ["Barbie e a Sereia das Pérolas", "Barbie Golfinhos Mágicos", "Barbie Vida de Sereia", "Barbie: Mermaid Secrets"],
    resposta: 1,
    explicacao: "'Barbie Golfinhos Mágicos' mostra uma aventura cheia de ação e uma sereia misteriosa!"
  },
  {
    texto: "Em 'Barbie e a Princesa da Ilha', qual animal acompanha Rosella?",
    opcoes: ["Um papagaio", "Um leão", "Um coala", "Uma coruja"],
    resposta: 0,
    explicacao: "Seu melhor amigo é um papagaio falante que canta com ela nas cenas musicais!"
  },
  {
    texto: "Em 'Barbie e a Magia de Aladus', qual objeto é mágico?",
    opcoes: ["Uma pedra", "Um espelho", "Um cajado", "Um livro"],
    resposta: 2,
    explicacao: "O cajado de Wenlock é o item mais poderoso e perigoso da história!"
  },
  {
    texto: "Qual dessas Barbies vive uma vida de surfista e sereia ao mesmo tempo?",
    opcoes: ["Alexa", "Merliah", "Corinne", "Isla"],
    resposta: 1,
    explicacao: "Merliah é uma campeã de surf que descobre ser filha de uma rainha do fundo do mar!"
  },
  {
    texto: "Qual o nome da fadinha azul em Fairytopia?",
    opcoes: ["Bibble", "Twinkle", "Flicker", "Puffy"],
    resposta: 0,
    explicacao: "Bibble é o mascote mais fofo da franquia, sempre resmungando e comilão 💙"
  },
  {
    texto: "No filme 'Barbie e as Irmãs em um Mundo de Aventuras', o que elas procuram?",
    opcoes: ["Tesouro perdido", "Cachorrinhos", "Um mapa mágico", "Um anel de família"],
    resposta: 1,
    explicacao: "Os cachorrinhos se perdem e as irmãs partem em uma caça divertida cheia de pistas!"
  },
  {
    texto: "Qual Barbie vive uma aventura no Havaí com suas irmãs?",
    opcoes: ["Barbie & Chelsea: O Aniversário Perdido", "Barbie e a Ilha Tropical", "Barbie e o Mistério dos Corais", "Barbie no Paraíso"],
    resposta: 0,
    explicacao: "Chelsea se perde no aniversário, e a família toda precisa unir forças no paraíso tropical 🌴"
  }
);

perguntas.push(
  {
    texto: "Em 'Barbie: Moda Mágica em Paris', quem são as ajudantes mágicas?",
    opcoes: ["Pixies da Moda", "Fadas do Estilo", "Glamourins", "Sprinkles"],
    resposta: 0,
    explicacao: "As Pixies da Moda ajudam Barbie a criar roupas mágicas pra salvar o ateliê da tia dela em Paris!"
  },
  {
    texto: "Qual é o talento especial da Barbie no filme 'Barbie e o Castelo de Diamante'?",
    opcoes: ["Esgrima mágica", "Canto encantado", "Voo com diamantes", "Poder da transformação"],
    resposta: 1,
    explicacao: "Ela e Liana têm vozes mágicas que salvam o reino através da música 💎🎶"
  },
  {
    texto: "Em 'Barbie e o Portal Secreto', qual criatura Barbie encontra primeiro?",
    opcoes: ["Unicórnio", "Fada", "Sereia", "Dragão"],
    resposta: 1,
    explicacao: "Alexa encontra uma fada atrapalhada que a apresenta ao mundo mágico do portal!"
  },
  {
    texto: "Quantos filmes da Barbie foram lançados no ano de <span style='font-family: Arial;'>2016</span>?",
    opcoes: ["<span style='font-family: Arial;'>1</span>", "<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>"],
    resposta: 2,
    explicacao: "Foram <span style='font-family: Arial;'>3</span>: 'Barbie e Suas Irmãs: Em Busca dos Cachorrinhos', 'Aventura nas Estrelas' e 'Agentes Secretas'."
  },
  {
    texto: "Qual é o principal desafio de Merliah em 'Barbie em Vida de Sereia <span style='font-family: Arial;'>2</span>'?",
    opcoes: ["Ganhar um campeonato de surf", "Aceitar seu destino como princesa do mar", "Derrotar uma feiticeira", "Salvar sua mãe da prisão submarina"],
    resposta: 1,
    explicacao: "Merliah precisa aceitar que ser metade humana e metade sereia é algo incrível e necessário!"
  },
  {
    texto: "Qual Barbie aparece com poderes de super-heroína?",
    opcoes: ["Barbie e o Poder da Estrela", "Barbie Super Princesa", "Barbie Força Pink", "Barbie Dream Sparkle"],
    resposta: 1,
    explicacao: "Ela ganha poderes após ser beijada por uma borboleta mágica. Clássico, né? 🦋"
  },
  {
    texto: "Em 'Barbie e o Lago dos Cisnes', o que Barbie é transformada?",
    opcoes: ["Fada", "Sereia", "Cisne", "Estátua de gelo"],
    resposta: 2,
    explicacao: "Ela vira um cisne durante o dia, e humana à noite, num clássico inspirado no balé famoso!"
  },
  {
    texto: "Em 'Barbie e a Princesa da Ilha', qual é a música tema inesquecível?",
    opcoes: ["'Here on My Island'", "'You Can Tell She's a Princess'", "'Island Queen'", "'Ocean Lullaby'"],
    resposta: 0,
    explicacao: "A música 'Here on My Island' abre o filme e gruda na cabeça como glitter em roupa preta 🎵"
  },
  {
    texto: "Qual personagem sonha em ser popstar em 'Barbie e a Princesa e a Popstar'?",
    opcoes: ["Tori", "Keira", "Genevieve", "Rosella"],
    resposta: 1,
    explicacao: "Keira quer trocar de vida com a princesa e vive o sonho do palácio por um tempo!"
  },
  {
    texto: "Quantos filmes a Barbie estrelou até o ano de <span style='font-family: Arial;'>2020</span>?",
    opcoes: ["<span style='font-family: Arial;'>30</span>", "<span style='font-family: Arial;'>36</span>", "<span style='font-family: Arial;'>38</span>", "<span style='font-family: Arial;'>40</span>"],
    resposta: 3,
    explicacao: "Até <span style='font-family: Arial;'>2020</span> foram lançados mais de <span style='font-family: Arial;'>40</span> filmes da Barbie oficialmente!"
  },
  {
    texto: "Qual dessas irmãs da Barbie é a mais nova?",
    opcoes: ["Stacie", "Skipper", "Chelsea", "Tori"],
    resposta: 2,
    explicacao: "Chelsea é a caçulinha adorável — e sempre metida em aventuras fofas 💗"
  },
  {
    texto: "Qual é o reino de origem de Elina em Fairytopia?",
    opcoes: ["Jardim Cristal", "Lago Arco-Íris", "Florapólis", "Fairyland"],
    resposta: 0,
    explicacao: "Elina vive no Jardim Cristal — um lugar lindo, mas ela nasce lá sem asas 🧚‍♀️"
  },
  {
    texto: "Em 'Barbie: Aventura nas Estrelas', qual dança ela pratica?",
    opcoes: ["Zumba Lunar", "Balé Gravitacional", "Coreodança Espacial", "Dança Galáctica"],
    resposta: 3,
    explicacao: "Ela treina com colegas de outro planeta a super fofa Dança Galáctica 💫"
  },
  {
    texto: "Quem é a vilã do filme 'Barbie e o Castelo de Diamante'?",
    opcoes: ["Glimmer", "Ramina", "Lyra", "Lydia"],
    resposta: 3,
    explicacao: "Lydia usa magia sombria para roubar o poder da música no castelo!"
  },
  {
    texto: "Em 'Barbie: Princesa & Popstar', qual é o nome da princesa?",
    opcoes: ["Tori", "Keira", "Rosella", "Mariposa"],
    resposta: 0,
    explicacao: "Tori é a princesa que deseja viver como uma estrela da música!"
  },
  {
    texto: "Qual filme da Barbie se passa numa floresta encantada?",
    opcoes: ["Barbie Lago dos Cisnes", "Barbie e o Castelo de Diamante", "Barbie e o Portal Secreto", "Todos os anteriores"],
    resposta: 3,
    explicacao: "A floresta mágica é palco em vários filmes encantados da Barbie 🌿"
  },
  {
    texto: "Em 'Barbie e as Agentes Secretas', quantas espiãs fazem parte do time?",
    opcoes: ["<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>"],
    resposta: 1,
    explicacao: "São <span style='font-family: Arial;'>3</span> amigas super ágeis, estilosas e high-tech! 🕶️"
  },
  {
    texto: "Qual desses filmes da Barbie tem competição de talentos?",
    opcoes: ["Barbie Super Princesa", "Barbie Dreamhouse", "Barbie Big City Big Dreams", "Barbie e o Mistério da Moda"],
    resposta: 2,
    explicacao: "Big City, Big Dreams mostra a Barbie competindo na escola de artes de NY!"
  },
  {
    texto: "Qual Barbie canta ópera em um dos filmes?",
    opcoes: ["Eden Starling", "Tori", "Genevieve", "Lumina"],
    resposta: 0,
    explicacao: "Eden Starling (em 'A Christmas Carol') é uma estrela de ópera super exigente!"
  }
);

perguntas.push(
  {
    texto: "Qual desses filmes da Barbie tem uma escola onde meninas treinam para serem princesas?",
    opcoes: ["Barbie: Escola de Princesas", "Barbie: Magia Real", "Barbie: Reinado Encantado", "Barbie: Princesas em Treinamento"],
    resposta: 0,
    explicacao: "Barbie entra numa escola de princesas e descobre que ser princesa vai muito além da coroa!"
  },
  {
    texto: "Quem é a vilã de 'Barbie e a Magia de Aladus'?",
    opcoes: ["Ramina", "Rowena", "Wenlock", "Azura"],
    resposta: 2,
    explicacao: "Wenlock é um feiticeiro cruel que transforma pessoas em animais e tenta dominar tudo!"
  },
  {
    texto: "Em 'Barbie e a Sereia das Pérolas', qual é o poder especial de Lumina?",
    opcoes: ["Comunicar com peixes", "Controlar o tempo", "Manipular pérolas", "Transformar em estrela-do-mar"],
    resposta: 2,
    explicacao: "Ela move pérolas com o pensamento e usa isso para criar vestidos lindíssimos!"
  },
  {
    texto: "Qual dessas princesas foi inspirada em uma bailarina real?",
    opcoes: ["Odette", "Genevieve", "Anneliese", "Rosella"],
    resposta: 0,
    explicacao: "Odette vem do clássico 'Lago dos Cisnes', um dos balés mais famosos do mundo!"
  },
  {
    texto: "Quantas irmãs a Barbie tem oficialmente?",
    opcoes: ["<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>"],
    resposta: 2,
    explicacao: "Ela tem <span style='font-family: Arial;'>3</span> irmãs: Skipper, Stacie e Chelsea — e às vezes uma 'irmã misteriosa' em alguns filmes."
  },
  {
    texto: "Quem é a melhor amiga da Barbie nos filmes modernos?",
    opcoes: ["Teresa", "Nikki", "Skipper", "Raquelle"],
    resposta: 1,
    explicacao: "Nikki aparece em vários filmes da Barbie Dreamhouse como a melhor amiga divertida e estilosa!"
  },
  {
    texto: "Qual filme se passa no mundo dos videogames?",
    opcoes: ["Barbie no Mundo dos Jogos", "Barbie Game Night", "Barbie Virtual", "Barbie Pixel Power"],
    resposta: 0,
    explicacao: "Barbie é sugada para dentro de um jogo e precisa vencer vários níveis com muita fofura digital!"
  },
  {
    texto: "Qual princesa Barbie toca violão com os animais?",
    opcoes: ["Rosella", "Anneliese", "Elina", "Kara"],
    resposta: 0,
    explicacao: "Rosella cresceu entre animais e se comunica com eles através da música 💕"
  },
  {
    texto: "Em qual desses filmes Barbie descobre que é adotada?",
    opcoes: ["Barbie Vida de Sereia", "Barbie e a Princesa da Ilha", "Barbie Lago dos Cisnes", "Barbie Dreamtopia"],
    resposta: 0,
    explicacao: "Merliah descobre que é metade sereia e que sua mãe é uma rainha subaquática!"
  },
  {
    texto: "Qual desses filmes se passa numa cidade grande?",
    opcoes: ["Barbie Big City, Big Dreams", "Barbie e o Castelo de Diamante", "Barbie e as Três Mosqueteiras", "Barbie e a Magia da Moda"],
    resposta: 0,
    explicacao: "Ela vai para Nova York estudar artes e viver um verdadeiro sonho urbano!"
  },
  {
    texto: "Qual o nome do cavalo mágico de 'Barbie e o Castelo de Diamante'?",
    opcoes: ["Brietta", "Sunburst", "Sparkle", "Melody"],
    resposta: 3,
    explicacao: "Melody é o cavalo que leva Barbie e sua amiga Liana em sua jornada musical!"
  },
  {
    texto: "Em 'Barbie e o Quebra-Nozes', quem ajuda Barbie na jornada mágica?",
    opcoes: ["Major Mint e Capitão Doce", "Rei de Açúcar e Eric", "Major Mint e o Príncipe", "Capitão Sorvete e Clara"],
    resposta: 0,
    explicacao: "Major Mint é o ajudante clássico com bigodinho, super formal e fofo!"
  },
  {
    texto: "Em qual desses filmes Barbie entra em um concurso de talentos canino?",
    opcoes: ["Barbie e o Mistério dos Cachorros", "Barbie e Suas Irmãs em Uma Aventura de Cachorrinhos", "Barbie Pups Talent Show", "Barbie e o Festival Animal"],
    resposta: 1,
    explicacao: "As irmãs participam de um concurso de talentos enquanto cuidam de filhotes perdidos!"
  },
  {
    texto: "Qual desses filmes tem dragões cor-de-rosa e um castelo flutuante?",
    opcoes: ["Barbie e o Portal Secreto", "Barbie Fairytopia", "Barbie Mariposa", "Barbie e a Magia de Aladus"],
    resposta: 1,
    explicacao: "Fairytopia traz criaturas mágicas, incluindo dragões cor-de-rosa que voam como balões!"
  },
  {
    texto: "Em 'Barbie e as Irmãs em Uma Aventura de Cachorrinhos', o que as irmãs procuram?",
    opcoes: ["Um mapa", "Cachorros perdidos", "Joias da coroa", "Uma carta misteriosa"],
    resposta: 1,
    explicacao: "Cachorrinhos fujões fazem as irmãs correrem a cidade inteira em busca dos pets!"
  },
  {
    texto: "Quantos filmes da Barbie envolvem princesas em reinos mágicos até <span style='font-family: Arial;'>2023</span>?",
    opcoes: ["<span style='font-family: Arial;'>10</span>", "<span style='font-family: Arial;'>15</span>", "<span style='font-family: Arial;'>20</span>", "<span style='font-family: Arial;'>25</span>"],
    resposta: 2,
    explicacao: "Mais de <span style='font-family: Arial;'>20</span> filmes da Barbie envolvem princesas, reinos encantados e magia!"
  },
  {
    texto: "Em 'Barbie Aventura nas Estrelas', qual planeta Barbie visita primeiro?",
    opcoes: ["Planeta Luz", "Planeta Zinna", "Planeta Prisma", "Planeta Coração"],
    resposta: 2,
    explicacao: "O Planeta Prisma é onde ela começa sua aventura intergaláctica 💫"
  },
  {
    texto: "Qual Barbie é uma princesa roqueira?",
    opcoes: ["Tori", "Keira", "Kara", "Barbie em Rock'n Royals"],
    resposta: 3,
    explicacao: "Em 'Barbie em Rock'n Royals', ela quebra todos os padrões no festival das princesas!"
  },
  {
    texto: "Em 'Barbie Dreamtopia', qual é o poder da Chelsea?",
    opcoes: ["Voa com doces", "Imagina reinos incríveis", "Controla arco-íris", "Muda a realidade"],
    resposta: 1,
    explicacao: "Chelsea sonha e cria reinos mágicos com cabelos de arco-íris, montanhas de cupcakes e mais 🍭"
  }
);

perguntas.push(
  {
    texto: "Qual dessas personagens é uma fada em 'Barbie Fairytopia'?",
    opcoes: ["Mariposa", "Elina", "Laverna", "Lumina"],
    resposta: 1,
    explicacao: "Elina é uma fada sem asas que sonha em voar e salvar Fairytopia!"
  },
  {
    texto: "Em 'Barbie Dreamhouse Adventures', qual é o nome da irmã mais velha?",
    opcoes: ["Skipper", "Stacie", "Barbie", "Chelsea"],
    resposta: 2,
    explicacao: "A própria Barbie é a irmã mais velha — responsável, criativa e fashionista 💕"
  },
  {
    texto: "Quantos filmes da Barbie envolvem sereias como protagonistas até <span style='font-family: Arial;'>2023</span>?",
    opcoes: ["<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>5</span>", "<span style='font-family: Arial;'>7</span>", "<span style='font-family: Arial;'>9</span>"],
    resposta: 2,
    explicacao: "Foram mais de <span style='font-family: Arial;'>7</span> filmes com sereias como tema principal ou coadjuvante!"
  },
  {
    texto: "Quem é a dubladora original da Barbie em muitos filmes?",
    opcoes: ["Kelly Sheridan", "Jennifer Hale", "Tara Strong", "Ashley Eckstein"],
    resposta: 0,
    explicacao: "Kelly Sheridan dublou a Barbie por anos e é uma das vozes mais icônicas da personagem!"
  },
  {
    texto: "Qual dessas não é uma vilã da Barbie?",
    opcoes: ["Laverna", "Raquelle", "Malucia", "Ramina"],
    resposta: 1,
    explicacao: "Raquelle é rivalzinha e às vezes vilã 'light' na Dreamhouse, mas não em grandes filmes clássicos."
  },
  {
    texto: "Em 'Barbie Princesa e a Plebéia', quem canta a música 'Sou Como Você'?",
    opcoes: ["Anneliese e Erika", "Tori e Keira", "Chelsea e Skipper", "Barbie e Nikki"],
    resposta: 0,
    explicacao: "É um dueto icônico entre Anneliese (princesa) e Erika (plebéia) — inesquecível!"
  },
  {
    texto: "Qual dessas personagens é uma vilã que se finge de boa?",
    opcoes: ["Rowena", "Lydia", "Malucia", "Glimmer"],
    resposta: 0,
    explicacao: "Rowena se faz de madrasta boazinha, mas quer roubar o trono em 'Escola de Princesas'!"
  },
  {
    texto: "Em 'Barbie e a Sereia das Pérolas', quem quer roubar o trono?",
    opcoes: ["Cora", "Scylla", "Calia", "Marisa"],
    resposta: 1,
    explicacao: "Scylla tenta tomar o lugar da rainha e causa muitos problemas pra Lumina!"
  },
  {
    texto: "Qual dessas é a profissão da Barbie em 'Barbie Dreamhouse Adventures'?",
    opcoes: ["Arquiteta", "Youtuber", "Engenheira", "Piloto"],
    resposta: 0,
    explicacao: "Ela estuda arquitetura e adora construir coisas, inclusive para as irmãs!"
  },
  {
    texto: "Qual filme mostra a Barbie trocando de lugar com outra Barbie de um mundo diferente?",
    opcoes: ["Barbie: Big City, Big Dreams", "Barbie e a Princesa e a Popstar", "Barbie Escolha Seu Destino", "Barbie Espelhos Mágicos"],
    resposta: 0,
    explicacao: "Em 'Big City, Big Dreams' as duas Barbies se conhecem e vivem experiências trocadas!"
  },
  {
    texto: "Qual dessas músicas é trilha marcante de 'Barbie e as Três Mosqueteiras'?",
    opcoes: ["'All for One'", "'Princess Dream'", "'Enchanted Sword'", "'Together We Shine'"],
    resposta: 0,
    explicacao: "Elas cantam 'All for One' no final do filme — hino da força feminina com espadas e glitter!"
  },
  {
    texto: "Quantos filmes a Barbie fez entre <span style='font-family: Arial;'>2001</span> e <span style='font-family: Arial;'>2010</span>?",
    opcoes: ["<span style='font-family: Arial;'>10</span>", "<span style='font-family: Arial;'>12</span>", "<span style='font-family: Arial;'>16</span>", "<span style='font-family: Arial;'>18</span>"],
    resposta: 2,
    explicacao: "Foram <span style='font-family: Arial;'>16</span> filmes nessa primeira década de ouro dos longas da Barbie!"
  },
  {
    texto: "Quem é o par romântico da Barbie em 'Barbie e o Castelo de Diamante'?",
    opcoes: ["Jeremy", "Carlos", "Julian", "Ele não existe nesse filme"],
    resposta: 3,
    explicacao: "Esse é um dos poucos filmes da Barbie sem par romântico! É sobre amizade e música 💖"
  },
  {
    texto: "Qual filme tem uma escola dividida entre princesas e roqueiras?",
    opcoes: ["Barbie: Rock'n Royals", "Barbie Pop Rock Battle", "Barbie Escola Dividida", "Barbie Power Music"],
    resposta: 0,
    explicacao: "Rock'n Royals une princesas e roqueiras em um acampamento cheio de reviravoltas musicais!"
  },
  {
    texto: "Qual Barbie é uma surfista que vive em Malibu?",
    opcoes: ["Brooklyn Barbie", "Merliah", "Chelsea", "Alexa"],
    resposta: 1,
    explicacao: "Merliah é campeã de surf, moderna e super confiante — antes de virar sereia!"
  },
  {
    texto: "Qual dessas vilãs usa um livro mágico para tentar dominar tudo?",
    opcoes: ["Lydia", "Scylla", "Malucia", "Gothel"],
    resposta: 2,
    explicacao: "Malucia rouba o livro mágico no 'Portal Secreto' e quer sugar todos os poderes!"
  },
  {
    texto: "Em qual desses filmes a Barbie canta com um animal?",
    opcoes: ["Barbie Lago dos Cisnes", "Barbie e a Princesa da Ilha", "Barbie Dreamtopia", "Barbie e a Magia de Aladus"],
    resposta: 1,
    explicacao: "Rosella canta junto com os pássaros e bichinhos que vivem com ela na ilha!"
  },
  {
    texto: "Qual filme tem uma competição de talentos musicais com cenário mágico?",
    opcoes: ["Barbie e a Princesa e a Popstar", "Barbie Big City Big Dreams", "Barbie Rock'n Royals", "Barbie Music Kingdom"],
    resposta: 2,
    explicacao: "Rock'n Royals tem shows, batalha de talentos e MUITA música eletrizante!"
  }
);

perguntas.push(
  {
    texto: "Em 'Barbie e a Princesa da Ilha', como Rosella chegou à ilha?",
    opcoes: ["Fugiu do castelo", "Caiu de paraquedas", "Naufrágio", "Veio por mágica"],
    resposta: 2,
    explicacao: "Ela era um bebê em um navio que naufragou e acabou sendo criada por animais na ilha!"
  },
  {
    texto: "Quem é a vilã em 'Barbie como Rapunzel'?",
    opcoes: ["Rowena", "Gothel", "Laverna", "Malucia"],
    resposta: 1,
    explicacao: "Gothel aprisiona Rapunzel em uma torre e mente sobre o mundo exterior 🏰"
  },
  {
    texto: "Quantas personagens principais existem em 'Barbie e as Agentes Secretas'?",
    opcoes: ["<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>"],
    resposta: 1,
    explicacao: "O trio de espiãs — Barbie, Teresa e Renee — arrasa em acrobacias e investigações com estilo!"
  },
  {
    texto: "Qual dessas amigas aparece com frequência como confidente da Barbie?",
    opcoes: ["Raquelle", "Skipper", "Teresa", "Kelly"],
    resposta: 2,
    explicacao: "Teresa é aquela amiga conselheira, divertida e que topa qualquer aventura 💬"
  },
  {
    texto: "Qual desses filmes tem um reino subterrâneo escondido sob um poço?",
    opcoes: ["Barbie e a Magia do Arco-Íris", "Barbie e as Doze Princesas Bailarinas", "Barbie Mariposa", "Barbie e o Portal Secreto"],
    resposta: 1,
    explicacao: "As <span style='font-family: Arial;'>12</span> princesas descobrem um mundo mágico e secreto embaixo do castelo!"
  },
  {
    texto: "Qual desses filmes se passa em Paris?",
    opcoes: ["Barbie e a Magia da Moda", "Barbie Princesa e Popstar", "Barbie Dreamtopia", "Barbie e o Castelo de Diamante"],
    resposta: 0,
    explicacao: "Barbie viaja para Paris e salva o ateliê da sua tia com a ajuda das fadas da moda! 💅"
  },
  {
    texto: "Em 'Barbie em Aventura nas Estrelas', qual é a cor principal do traje da Barbie?",
    opcoes: ["Rosa", "Prateado", "Roxo", "Azul-claro"],
    resposta: 1,
    explicacao: "O look espacial de Barbie é prateado com detalhes brilhantes — total vibes galácticas!"
  },
  {
    texto: "Em 'Barbie e a Magia de Aladus', quem é o cavalo alado?",
    opcoes: ["Brietta", "Pegasus", "Azura", "Shimmer"],
    resposta: 0,
    explicacao: "Brietta é a irmã da princesa transformada em cavalo alado pelo vilão Wenlock!"
  },
  {
    texto: "Qual desses filmes traz Barbie tentando equilibrar duas vidas?",
    opcoes: ["Barbie e a Popstar", "Barbie Rock'n Royals", "Barbie: Vida de Sereia", "Barbie Big City Big Dreams"],
    resposta: 2,
    explicacao: "Merliah precisa lidar com o mundo do surf e o reino subaquático ao mesmo tempo!"
  },
  {
    texto: "Em qual desses filmes Barbie NÃO é uma princesa?",
    opcoes: ["Barbie Vida de Sereia", "Barbie e a Princesa da Ilha", "Barbie como Rapunzel", "Barbie Lago dos Cisnes"],
    resposta: 0,
    explicacao: "Em 'Vida de Sereia', Barbie é uma surfista moderna que só depois descobre sua herança real 🏄‍♀️"
  },
  {
    texto: "Em 'Barbie Dreamhouse', qual personagem vive brigando com a Barbie?",
    opcoes: ["Chelsea", "Skipper", "Raquelle", "Ken"],
    resposta: 2,
    explicacao: "Raquelle vive competindo com a Barbie — mas no fundo, ela só quer atenção kkk"
  },
  {
    texto: "Em 'Barbie e o Portal Secreto', qual elemento do jardim leva ao portal?",
    opcoes: ["Um banco", "Uma flor", "Uma árvore mágica", "Um portão escondido"],
    resposta: 1,
    explicacao: "Uma flor mágica se abre e revela o portal secreto para o reino encantado!"
  },
  {
    texto: "Qual desses filmes mostra Barbie morando em Malibu?",
    opcoes: ["Barbie Dreamhouse Adventures", "Barbie Lago dos Cisnes", "Barbie Princesa Popstar", "Barbie Fairytopia"],
    resposta: 0,
    explicacao: "Dreamhouse Adventures mostra a vida da Barbie no estilo vlog em Malibu com as irmãs!"
  },
  {
    texto: "Em qual desses filmes Ken aparece com um papel importante?",
    opcoes: ["Barbie Lago dos Cisnes", "Barbie Dreamhouse", "Barbie e o Quebra-Nozes", "Barbie Super Princesa"],
    resposta: 1,
    explicacao: "Na Dreamhouse, Ken é fofo, desastrado e apaixonado — e aparece sempre tentando ajudar!"
  },
  {
    texto: "Em 'Barbie e a Magia do Arco-Íris', qual é o objetivo da jornada?",
    opcoes: ["Encontrar o cetro mágico", "Trazer a primavera", "Salvar as flores encantadas", "Ajudar uma fada doente"],
    resposta: 1,
    explicacao: "Elina participa da Dança da Primavera, que traz a nova estação para todo o reino! 🌸"
  },
  {
    texto: "Qual desses filmes envolve uma disputa de talentos entre reinos?",
    opcoes: ["Barbie Princesa e a Plebéia", "Barbie Rock'n Royals", "Barbie Fairytopia", "Barbie e o Portal Secreto"],
    resposta: 1,
    explicacao: "As princesas e roqueiras batalham num acampamento musical épico com shows e batalhas de canto!"
  },
  {
    texto: "Quantos filmes com temática de 'irmãs da Barbie' existem até <span style='font-family: Arial;'>2023</span>?",
    opcoes: ["<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>"],
    resposta: 2,
    explicacao: "São <span style='font-family: Arial;'>4</span> filmes onde Barbie vive aventuras com suas irmãs!"
  },
  {
    texto: "Em qual filme Barbie toca violino com mágica?",
    opcoes: ["Barbie e o Castelo de Diamante", "Barbie Princesa e a Popstar", "Barbie e o Portal Secreto", "Barbie e a Magia das Fadas"],
    resposta: 1,
    explicacao: "Keira e Tori trocam de vida e fazem apresentações incríveis — com violino encantado!"
  },
  {
    texto: "Qual é o animal companheiro de Mariposa?",
    opcoes: ["Zeenie", "Bibble", "Willa", "Zinzi"],
    resposta: 0,
    explicacao: "Zeenie é uma borboletinha engraçada que acompanha Mariposa nas aventuras de Flutterfield!"
  }
);

perguntas.push(
  {
    texto: "Qual dessas Barbies tem asas de borboleta?",
    opcoes: ["Elina", "Lumina", "Mariposa", "Genevieve"],
    resposta: 2,
    explicacao: "Mariposa é uma fada-borboleta que protege o reino de Flutterfield com coragem e charme! 🦋"
  },
  {
    texto: "Qual desses personagens é um príncipe em 'Barbie Lago dos Cisnes'?",
    opcoes: ["Daniel", "Eric", "Carlos", "Julian"],
    resposta: 0,
    explicacao: "Daniel é o príncipe que se apaixona por Odette na adaptação do famoso balé!"
  },
  {
    texto: "Qual dessas profissões Barbie NÃO teve em um filme?",
    opcoes: ["Astronauta", "Piloto de corrida", "Bailarina", "Chef de sushi"],
    resposta: 3,
    explicacao: "Chef de sushi ainda não rolou (quem sabe um dia!), mas astronauta e piloto já sim 🚀"
  },
  {
    texto: "Em qual filme Barbie ajuda uma sereia a salvar o reino?",
    opcoes: ["Barbie Lago dos Cisnes", "Barbie e a Sereia das Pérolas", "Barbie Dreamtopia", "Barbie Vida de Sereia 2"],
    resposta: 1,
    explicacao: "Barbie como Lumina descobre que tem poderes únicos e que pertence à realeza submarina!"
  },
  {
    texto: "Qual é a cor preferida da Barbie (como se a gente não soubesse, né)? 😅",
    opcoes: ["Roxo", "Azul", "Pink", "Dourado"],
    resposta: 2,
    explicacao: "PINK sempre! Até os foguetes dela teriam glitter rosa se dependesse da Barbie 💖"
  },
  {
    texto: "Qual desses animais aparece como ajudante em mais de um filme?",
    opcoes: ["Pegasus", "Bibble", "Unicórnio", "Golfinho"],
    resposta: 1,
    explicacao: "Bibble é o mascote oficial da fofura — aparece em vários filmes da saga Fairytopia!"
  },
  {
    texto: "Qual desses filmes se passa em um festival de verão?",
    opcoes: ["Barbie Rock'n Royals", "Barbie Dreamtopia", "Barbie e o Festival da Flor", "Barbie Big City Big Dreams"],
    resposta: 0,
    explicacao: "O acampamento musical de Rock’n Royals é como um grande festival entre reinos!"
  },
  {
    texto: "Em qual desses filmes a Barbie usa um vestido que brilha no escuro?",
    opcoes: ["Barbie e o Portal Secreto", "Barbie Fairytopia", "Barbie Moda Mágica", "Barbie e as Doze Princesas Bailarinas"],
    resposta: 0,
    explicacao: "No Portal Secreto, o vestido da Barbie acende com magia quando ela descobre seus poderes ✨"
  },
  {
    texto: "Qual dessas personagens da Barbie vive no reino das sereias?",
    opcoes: ["Elina", "Chelsea", "Lumina", "Kara"],
    resposta: 2,
    explicacao: "Lumina é a sereia que controla pérolas e descobre sua origem nobre no fundo do mar 🐚"
  },
  {
    texto: "Quantas irmãs dançam no mundo mágico em 'Barbie e as Doze Princesas Bailarinas'?",
    opcoes: ["<span style='font-family: Arial;'>8</span>", "<span style='font-family: Arial;'>10</span>", "<span style='font-family: Arial;'>12</span>", "<span style='font-family: Arial;'>14</span>"],
    resposta: 2,
    explicacao: "São <span style='font-family: Arial;'>12</span> princesas, cada uma com sua própria personalidade e talento para a dança!"
  },
  {
    texto: "Qual desses filmes tem um cavalo que fala?",
    opcoes: ["Barbie e Pegasus", "Barbie e o Castelo de Diamante", "Barbie Lago dos Cisnes", "Barbie e a Magia de Aladus"],
    resposta: 3,
    explicacao: "O cavalo mágico da Barbie em 'Magia de Aladus' tem personalidade forte e... fala! 🐴"
  },
  {
    texto: "Em 'Barbie Vida de Sereia', qual esporte Barbie pratica?",
    opcoes: ["Surfe", "Patinação artística", "Natação sincronizada", "Ciclismo"],
    resposta: 0,
    explicacao: "Merliah é uma surfista radical antes de descobrir seu lado sereia! 🏄‍♀️"
  },
  {
    texto: "Qual filme mostra Barbie como jornalista investigativa?",
    opcoes: ["Barbie e o Mistério dos Golfinhos", "Barbie Repórter Estrela", "Barbie Detetive em Malibu", "Esse filme ainda não existe (mas deveria!)"],
    resposta: 3,
    explicacao: "Infelizmente ainda não rolou... mas um filme da Barbie investigativa ia ser tudo! 🕵️‍♀️"
  },
  {
    texto: "Qual Barbie tem uma irmã chamada Isla?",
    opcoes: ["Merliah", "Rosella", "Alexa", "Nenhuma delas"],
    resposta: 1,
    explicacao: "Em 'Barbie e a Princesa da Ilha', Rosella descobre que Isla é sua irmã desaparecida!"
  },
  {
    texto: "Qual desses filmes traz Barbie como uma estilista?",
    opcoes: ["Barbie Moda Mágica em Paris", "Barbie Rock’n Royals", "Barbie Princesa da Ilha", "Barbie Dreamtopia"],
    resposta: 0,
    explicacao: "Ela usa seu talento fashion pra salvar a boutique da tia com a ajuda das fadas ✂️✨"
  },
  {
    texto: "Em 'Barbie Big City Big Dreams', onde se passa a história?",
    opcoes: ["Malibu", "Paris", "Nova York", "Tóquio"],
    resposta: 2,
    explicacao: "Duas Barbies se conhecem e brilham juntas num curso de música em Nova York!"
  }
);

perguntas.push(
  {
    texto: "Qual é o nome do reino onde Mariposa vive?",
    opcoes: ["Floralis", "Borboletópolis", "Flutterfield", "Wingdom"],
    resposta: 2,
    explicacao: "Flutterfield é o lar das fadas-borboleta e palco da história de Mariposa! 🦋"
  },
  {
    texto: "Em 'Barbie e o Portal Secreto', qual poder Barbie descobre?",
    opcoes: ["Falar com animais", "Mover objetos com a mente", "Lançar magia com as mãos", "Voar"],
    resposta: 2,
    explicacao: "Alexa descobre que pode lançar magia com as mãos ao entrar no reino secreto!"
  },
  {
    texto: "Qual dessas irmãs da Barbie é mais ligada à tecnologia?",
    opcoes: ["Skipper", "Chelsea", "Stacie", "Nikki"],
    resposta: 0,
    explicacao: "Skipper adora gadgets, tirar fotos e criar vídeos — ela é a tech girl do grupo!"
  },
  {
    texto: "Quantas irmãs aparecem com Barbie em 'Barbie e Suas Irmãs em Uma Aventura de Cachorrinhos'?",
    opcoes: ["<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>"],
    resposta: 1,
    explicacao: "São <span style='font-family: Arial;'>3</span> irmãs: Skipper, Stacie e Chelsea embarcam na aventura com ela! 🐶"
  },
  {
    texto: "Qual é o nome da rival da Barbie em 'Barbie e a Magia da Moda'?",
    opcoes: ["Delphine", "Raquelle", "Nikki", "Teresa"],
    resposta: 0,
    explicacao: "Delphine tenta sabotar o ateliê da tia de Barbie, mas magia + amizade vencem no final!"
  },
  {
    texto: "Em 'Barbie Fairytopia', qual é o objetivo de Elina?",
    opcoes: ["Encontrar sua família", "Salvar o Jardim Cristal", "Conquistar asas", "Ganhar um cetro mágico"],
    resposta: 2,
    explicacao: "Elina sonha em ter asas e ajudar as outras fadas — e descobre que sua diferença é o que a torna especial!"
  },
  {
    texto: "Qual é o nome do dragão rosa em 'Barbie e a Magia de Aladus'?",
    opcoes: ["Spark", "Shimmer", "Hue", "Wink"],
    resposta: 2,
    explicacao: "Hue é o dragão cor-de-rosa engraçado que ajuda Barbie em sua jornada!"
  },
  {
    texto: "Qual filme tem uma competição de dança entre escolas?",
    opcoes: ["Barbie Big City Big Dreams", "Barbie Rock'n Royals", "Barbie e as Sapatilhas Mágicas", "Barbie Dance-Off"],
    resposta: 0,
    explicacao: "Barbie e sua amiga disputam um papel principal numa peça musical com muita dança!"
  },
  {
    texto: "Em 'Barbie e a Magia do Arco-Íris', o que Elina deve ajudar a acontecer?",
    opcoes: ["O nascimento de um unicórnio", "A criação do arco-íris", "A chegada da primavera", "A restauração do trono das flores"],
    resposta: 2,
    explicacao: "Ela participa da Dança da Primavera, responsável por trazer a nova estação ao reino!"
  },
  {
    texto: "Quem é o par romântico de Barbie em 'Barbie e a Princesa da Ilha'?",
    opcoes: ["Daniel", "Julian", "Antonio", "Não há par romântico"],
    resposta: 0,
    explicacao: "O Príncipe Daniel se encanta por Rosella — com direito a cenas super fofas na floresta!"
  },
  {
    texto: "Qual dessas Barbies vive um conto de fadas reverso?",
    opcoes: ["Elina", "Alexa", "Tori", "Merliah"],
    resposta: 3,
    explicacao: "Merliah começa como garota normal e descobre ser princesa do mar — tipo um conto ao contrário!"
  },
  {
    texto: "Em 'Barbie: Aventura nas Estrelas', o que Barbie salva no final?",
    opcoes: ["Um planeta perdido", "Um portal galáctico", "A harmonia dos mundos", "A dança das constelações"],
    resposta: 3,
    explicacao: "Ela ajuda a restaurar a Dança das Constelações com sua leveza e energia cósmica 💫"
  },
  {
    texto: "Qual filme é baseado no balé 'O Quebra-Nozes'?",
    opcoes: ["Barbie e o Lago dos Cisnes", "Barbie como Rapunzel", "Barbie e o Quebra-Nozes", "Barbie e as Sapatilhas Mágicas"],
    resposta: 2,
    explicacao: "Foi o primeiro filme da Barbie, em <span style='font-family: Arial;'>2001</span>, e é uma releitura mágica do clássico natalino!"
  },
  {
    texto: "Em 'Barbie e o Castelo de Diamante', qual instrumento Barbie toca?",
    opcoes: ["Violino", "Guitarra", "Flauta", "Violão"],
    resposta: 3,
    explicacao: "Ela e Liana tocam violão e usam música para derrotar o mal!"
  },
  {
    texto: "Quem é a fada guia de Elina em 'Barbie Fairytopia'?",
    opcoes: ["Azura", "Topaz", "Dahlia", "Laverna"],
    resposta: 0,
    explicacao: "Azura é a guardiã que guia Elina em sua missão — uma fada de respeito!"
  }
);

perguntas.push(
  {
    texto: "Qual desses filmes mostra Barbie cuidando de um zoológico?",
    opcoes: ["Barbie e o Festival Animal", "Barbie Zoo Aventura", "Barbie em Aventura Animal", "Barbie e os Golfinhos Mágicos"],
    resposta: 0,
    explicacao: "No especial do Festival Animal, Barbie e suas irmãs ajudam a cuidar de um zoológico inteiro! 🐒"
  },
  {
    texto: "Quem é a princesa roqueira em 'Barbie em Rock'n Royals'?",
    opcoes: ["Keira", "Tori", "Erika", "Courtney"],
    resposta: 3,
    explicacao: "Courtney é a princesa que vai parar por engano no acampamento de rockstars!"
  },
  {
    texto: "Em 'Barbie Dreamhouse Adventures', quem é a vizinha competitiva da Barbie?",
    opcoes: ["Raquelle", "Nikki", "Tammy Bounceaway", "Skipper"],
    resposta: 2,
    explicacao: "Tammy vive tentando superar a Barbie, mas sempre se atrapalha no caminho! 😅"
  },
  {
    texto: "Qual desses filmes traz Barbie e suas irmãs em busca de um tesouro?",
    opcoes: ["Barbie e o Tesouro Perdido", "Barbie e Suas Irmãs em Busca dos Cachorrinhos", "Barbie e o Mistério da Ilha", "Barbie e Suas Irmãs em Aventura de Cavalos"],
    resposta: 1,
    explicacao: "A busca pelos cachorrinhos acaba revelando um verdadeiro mapa do tesouro!"
  },
  {
    texto: "Qual personagem da Barbie é conhecida por ser super organizada?",
    opcoes: ["Stacie", "Chelsea", "Skipper", "Barbie"],
    resposta: 0,
    explicacao: "Stacie adora planos, horários, competições... organização é com ela mesmo 📋"
  },
  {
    texto: "Em 'Barbie Fairytopia: Magic of the Rainbow', qual é a missão de Elina?",
    opcoes: ["Reunir as fadas guardiãs", "Aprender a controlar os elementos", "Participar da Dança da Primavera", "Salvar Bibble de uma maldição"],
    resposta: 2,
    explicacao: "Ela precisa participar da Dança da Primavera para restaurar o equilíbrio do reino!"
  },
  {
    texto: "Qual dessas vilãs tenta roubar o trono no lugar da Barbie?",
    opcoes: ["Gothel", "Malucia", "Rowena", "Lydia"],
    resposta: 2,
    explicacao: "Rowena finge ser aliada da Barbie, mas quer tomar o trono para si 😤"
  },
  {
    texto: "Qual dessas personagens é uma fada corajosa em 'Fairytopia'?",
    opcoes: ["Elina", "Topaz", "Azura", "Willa"],
    resposta: 0,
    explicacao: "Elina, mesmo sem asas no começo, mostra que coragem não depende de aparência!"
  },
  {
    texto: "Em 'Barbie em A Christmas Carol', qual valor Barbie aprende?",
    opcoes: ["Generosidade", "Alegria", "Coragem", "Determinação"],
    resposta: 0,
    explicacao: "Inspirado em Charles Dickens, o filme mostra Barbie aprendendo a importância de ser generosa!"
  },
  {
    texto: "Quantas versões diferentes de Barbie aparecem em 'Barbie: Epic Road Trip'?",
    opcoes: ["<span style='font-family: Arial;'>1</span>", "<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>"],
    resposta: 1,
    explicacao: "São <span style='font-family: Arial;'>2</span> Barbies principais: Malibu e Brooklyn — parceiras de aventura! 🚗"
  },
  {
    texto: "Qual desses filmes é interativo, com escolhas feitas pelo público?",
    opcoes: ["Barbie Dreamtopia", "Barbie Mermaid Power", "Barbie: Epic Road Trip", "Barbie e o Portal Secreto"],
    resposta: 2,
    explicacao: "Em 'Epic Road Trip', você escolhe os caminhos da Barbie — é quase um joguinho!"
  },
  {
    texto: "Quem é a mentora da Barbie em 'Barbie Escola de Princesas'?",
    opcoes: ["Professora Delphine", "Dama Matilda", "Lady Royale", "Millicent"],
    resposta: 1,
    explicacao: "Dama Matilda ensina a Barbie como agir como princesa... e ainda tem uma pegada fofa de Hogwarts kkk 👑"
  },
  {
    texto: "Qual desses filmes tem o Ken mais carismático e desastrado?",
    opcoes: ["Barbie Lago dos Cisnes", "Barbie e o Castelo de Diamante", "Barbie Dreamhouse Adventures", "Barbie Vida de Sereia"],
    resposta: 2,
    explicacao: "Na Dreamhouse, Ken vira meme ambulante! Sempre tentando ajudar e se declarando pra Barbie 😂"
  },
  {
    texto: "Em 'Barbie e a Sereia das Pérolas', quem tenta sabotar Lumina?",
    opcoes: ["Calia", "Nerissa", "Scylla", "Coralia"],
    resposta: 2,
    explicacao: "Scylla é a vilã que tenta roubar o trono e controlar o poder das pérolas!"
  },
  {
    texto: "Qual dessas Barbies vive em uma ilha tropical?",
    opcoes: ["Genevieve", "Rosella", "Alexa", "Keira"],
    resposta: 1,
    explicacao: "Rosella vive na floresta da ilha até conhecer o príncipe Daniel 🏝️"
  }
);

perguntas.push(
  {
    texto: "Qual desses filmes mostra Barbie com poderes elétricos?",
    opcoes: ["Barbie Super Princesa", "Barbie no Mundo dos Jogos", "Barbie Dreamtopia", "Barbie Poderes Secretos"],
    resposta: 0,
    explicacao: "Ela vira a Super Sparkle após ser beijada por uma borboleta mágica elétrica! ⚡🦋"
  },
  {
    texto: "Em 'Barbie e o Castelo de Diamante', qual é o nome da amiga da Barbie?",
    opcoes: ["Keira", "Liana", "Genevieve", "Isla"],
    resposta: 1,
    explicacao: "Liana é a parceira de jornada musical da Barbie nessa aventura cheia de canções e amizade 💎"
  },
  {
    texto: "Qual desses filmes mostra a Barbie com uma mochila que vira asas?",
    opcoes: ["Barbie Fairytopia", "Barbie Butterfly", "Barbie Dreamtopia", "Barbie e o Portal Secreto"],
    resposta: 1,
    explicacao: "Em 'Barbie Butterfly', a mochila dela se transforma em asas de fada — visual topíssimo!"
  },
  {
    texto: "Qual é o nome da diretora da escola em 'Barbie Escola de Princesas'?",
    opcoes: ["Dama Matilda", "Millicent", "Professora Privet", "Lady Royale"],
    resposta: 0,
    explicacao: "Dama Matilda é quem orienta a Barbie com muito estilo e classe real!"
  },
  {
    texto: "Em 'Barbie: Big City Big Dreams', de onde vem a outra Barbie?",
    opcoes: ["Texas", "Brooklyn", "Malibu", "Paris"],
    resposta: 1,
    explicacao: "A Barbie Brooklyn se junta à Barbie Malibu pra formarem uma dupla musical maravilhosa! 🎤"
  },
  {
    texto: "Qual desses filmes envolve uma pedra mágica em forma de coração?",
    opcoes: ["Barbie e o Castelo de Diamante", "Barbie Fairytopia", "Barbie Princesa e a Popstar", "Barbie e o Coração de Cristal"],
    resposta: 3,
    explicacao: "Esse filme (menos conhecido) mostra Barbie protegendo um cristal com forma de coração!"
  },
  {
    texto: "Em 'Barbie e a Princesa da Ilha', qual desses animais é amigo da Rosella?",
    opcoes: ["Urso", "Macaco", "Golfinho", "Canguru"],
    resposta: 1,
    explicacao: "O macaquinho Tika é super ciumento e tem um papel cômico e fofo na história 🐒"
  },
  {
    texto: "Qual desses filmes tem uma cena com desfile de moda mágico?",
    opcoes: ["Barbie Moda Mágica em Paris", "Barbie e as Três Mosqueteiras", "Barbie e o Portal Secreto", "Barbie Princesa e a Popstar"],
    resposta: 0,
    explicacao: "O desfile final é glamouroso, com vestidos criados por fadas e muita luz!"
  },
  {
    texto: "Quantos filmes oficiais da Barbie foram lançados entre <span style='font-family: Arial;'>2001</span> e <span style='font-family: Arial;'>2015</span>?",
    opcoes: ["<span style='font-family: Arial;'>25</span>", "<span style='font-family: Arial;'>30</span>", "<span style='font-family: Arial;'>33</span>", "<span style='font-family: Arial;'>36</span>"],
    resposta: 2,
    explicacao: "Foram <span style='font-family: Arial;'>33</span> filmes nesse período! Barbie não paraaaa!"
  },
  {
    texto: "Qual dessas princesas troca de lugar com uma popstar?",
    opcoes: ["Tori", "Keira", "Courtney", "Erika"],
    resposta: 0,
    explicacao: "Tori é a princesa que troca de lugar com Keira em 'Princesa e a Popstar'!"
  },
  {
    texto: "Em 'Barbie Dreamhouse Adventures', qual é o nome da casa da Barbie?",
    opcoes: ["Casa Malibu", "Casa dos Sonhos", "Dreamhouse", "Barbie Place"],
    resposta: 2,
    explicacao: "A clássica Dreamhouse é onde tudo acontece — festas, desafios, moda e caos com Ken!"
  },
  {
    texto: "Qual dessas personagens tem cabelo arco-íris?",
    opcoes: ["Alexa", "Lumina", "Chelsea", "Isla"],
    resposta: 2,
    explicacao: "Chelsea em Dreamtopia explora mundos onde seu cabelo muda de cor com a imaginação! 🌈"
  },
  {
    texto: "Em 'Barbie Lago dos Cisnes', qual animal ajuda Odette?",
    opcoes: ["Cisne falante", "Coruja mágica", "Unicórnio", "Pônei de gelo"],
    resposta: 0,
    explicacao: "O cisne que a transforma em Odette ajuda ela a entender seu novo papel na história encantada!"
  },
  {
    texto: "Qual desses filmes tem competição entre acampamentos?",
    opcoes: ["Barbie Rock'n Royals", "Barbie e as Três Mosqueteiras", "Barbie Fairytopia", "Barbie Big City Big Dreams"],
    resposta: 0,
    explicacao: "Princesas vs roqueiras disputam talentos, shows e o coração da plateia!"
  },
  {
    texto: "Em 'Barbie e a Magia de Aladus', quem é a fada guardiã?",
    opcoes: ["Liana", "Azura", "Willa", "Dahlia"],
    resposta: 3,
    explicacao: "Dahlia ajuda Barbie com dicas e sabedoria enquanto enfrenta Wenlock!"
  }
);

perguntas.push(
  {
    texto: "Em 'Barbie e a Magia de Aladus', o que o vilão Wenlock usa para lançar feitiços?",
    opcoes: ["Um livro antigo", "Um anel mágico", "Um cajado", "Uma pedra encantada"],
    resposta: 2,
    explicacao: "O cajado de Wenlock é a fonte do seu poder... e da confusão!"
  },
  {
    texto: "Qual dessas personagens é uma fada dos arco-íris?",
    opcoes: ["Isla", "Lumina", "Elina", "Sunburst"],
    resposta: 3,
    explicacao: "Sunburst aparece em Fairytopia e traz as cores e alegria com suas asas radiantes! 🌈"
  },
  {
    texto: "Qual filme da Barbie mostra um acampamento para treinadoras de cavalos?",
    opcoes: ["Barbie e as Irmãs em Aventura de Cavalos", "Barbie no Haras Real", "Barbie: Equitação Real", "Barbie e o Mistério dos Cavalos"],
    resposta: 0,
    explicacao: "Barbie e suas irmãs vão para o acampamento de verão no campo pra cuidar e montar cavalos 🐎"
  },
  {
    texto: "Qual o nome da fada azul que aparece em vários filmes de Fairytopia?",
    opcoes: ["Dahlia", "Bibble", "Azura", "Topaz"],
    resposta: 2,
    explicacao: "Azura é guardiã, sábia e uma das líderes do reino mágico. Rainha demais!"
  },
  {
    texto: "Em qual desses filmes a Barbie visita um planeta com gravidade invertida?",
    opcoes: ["Barbie Dreamtopia", "Barbie Aventura nas Estrelas", "Barbie Epic Road Trip", "Barbie Mundo Virtual"],
    resposta: 1,
    explicacao: "Ela dança flutuando em um planeta onde tudo é ao contrário — clássico sci-fi fofo!"
  },
  {
    texto: "Quantas irmãs Barbie tem oficialmente nos filmes?",
    opcoes: ["<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>"],
    resposta: 1,
    explicacao: "Chelsea, Stacie e Skipper são as irmãs que mais aparecem com Barbie!"
  },
  {
    texto: "Quem é a fadinha peluda e azul que aparece fazendo sons engraçados?",
    opcoes: ["Bibble", "Bubba", "Zeenie", "Flicker"],
    resposta: 0,
    explicacao: "Bibble é uma lenda viva no mundo das fadas — engraçado, fofo e um pouco caótico 💙"
  },
  {
    texto: "Em 'Barbie Princesa e a Plebéia', o que Erika deseja ser?",
    opcoes: ["Uma princesa", "Uma cantora famosa", "Uma compositora", "Livre para viver sua vida"],
    resposta: 3,
    explicacao: "Erika sonha com liberdade — e não com riqueza. Um verdadeiro espírito rebelde da Barbie!"
  },
  {
    texto: "Qual dessas personagens tem cabelo rosa choque e atitude forte?",
    opcoes: ["Nikki", "Raquelle", "Courtney", "Keira"],
    resposta: 3,
    explicacao: "Keira é a popstar que troca de lugar com Tori — atitude e voz poderosa!"
  },
  {
    texto: "Qual desses filmes se passa em um mundo feito de doces?",
    opcoes: ["Barbie e a Fábrica de Chocolate", "Barbie Dreamtopia", "Barbie Cupcake Kingdom", "Barbie e o Reino Doce"],
    resposta: 1,
    explicacao: "Dreamtopia tem reinos de algodão-doce, arco-íris e até cabelo que muda de sabor 😂"
  },
  {
    texto: "Em 'Barbie Vida de Sereia', quem é a mãe da Merliah?",
    opcoes: ["Lumina", "Isla", "Calissa", "Coraline"],
    resposta: 2,
    explicacao: "Rainha Calissa é a majestade subaquática — mãe de Merliah e símbolo de sabedoria no fundo do mar 🧜‍♀️"
  },
  {
    texto: "Qual é o vilão principal de 'Barbie Fairytopia'?",
    opcoes: ["Gothel", "Malucia", "Laverna", "Wenlock"],
    resposta: 2,
    explicacao: "Laverna quer acabar com a magia das fadas — mas Elina brilha mais forte!"
  },
  {
    texto: "Qual desses filmes tem uma personagem chamada Genevieve?",
    opcoes: ["Barbie e a Sereia das Pérolas", "Barbie e o Castelo de Diamante", "Barbie e as Doze Princesas Bailarinas", "Barbie Rock'n Royals"],
    resposta: 2,
    explicacao: "Genevieve é uma das doze irmãs bailarinas que dançam em um mundo mágico!"
  },
  {
    texto: "Em 'Barbie Princesa e a Popstar', qual instrumento Tori aprende a tocar?",
    opcoes: ["Violão", "Violino", "Teclado", "Guitarra"],
    resposta: 1,
    explicacao: "Tori aprende violino quando troca de vida com Keira — e surpreende todo mundo!"
  },
  {
    texto: "Quantos filmes da Barbie têm um personagem chamado Bibble?",
    opcoes: ["<span style='font-family: Arial;'>1</span>", "<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4+</span>"],
    resposta: 3,
    explicacao: "Bibble aparece em <span style='font-family: Arial;'>4+</span> filmes — e se tornou queridinho do público!"
  }
);

perguntas.push(
  {
    texto: "Qual dessas Barbies é uma dançarina apaixonada por balé clássico?",
    opcoes: ["Genevieve", "Elina", "Tori", "Isla"],
    resposta: 0,
    explicacao: "Genevieve é uma das doze princesas que encantam com sapatilhas mágicas no salão de dança real!"
  },
  {
    texto: "Em 'Barbie Fairytopia', o que impede Elina de voar?",
    opcoes: ["Ela tem medo de altura", "Ela perdeu suas asas", "Ela nunca teve asas", "Suas asas foram congeladas"],
    resposta: 2,
    explicacao: "Elina nasceu sem asas, e essa diferença é o que a torna tão inspiradora no mundo das fadas! 🧚‍♀️"
  },
  {
    texto: "Qual desses filmes mostra a Barbie como uma agente secreta estilosa?",
    opcoes: ["Barbie e o Mistério na Moda", "Barbie Super Princesa", "Barbie e as Agentes Secretas", "Barbie Missão Glam"],
    resposta: 2,
    explicacao: "Barbie e suas amigas viram espiãs com acrobacias, gadgets e MUITO brilho!"
  },
  {
    texto: "Qual animal acompanha Barbie em 'Barbie e o Quebra-Nozes'?",
    opcoes: ["Um rato falante", "Um cachorro de brinquedo", "Um cavalo mágico", "Um rato soldado"],
    resposta: 3,
    explicacao: "O rato soldado é parte da trama clássica baseada no balé do Quebra-Nozes!"
  },
  {
    texto: "Qual dessas amigas da Barbie é conhecida por ser super fashion?",
    opcoes: ["Skipper", "Raquelle", "Teresa", "Nikki"],
    resposta: 3,
    explicacao: "Nikki adora moda, estilo e sempre aparece com os melhores looks e opiniões 💁🏽‍♀️"
  },
  {
    texto: "Em 'Barbie e o Portal Secreto', qual vilã deseja roubar todos os poderes mágicos?",
    opcoes: ["Rowena", "Malucia", "Delphine", "Laverna"],
    resposta: 1,
    explicacao: "Malucia é uma garotinha mimada que quer sugar todos os poderes das criaturas mágicas!"
  },
  {
    texto: "Qual filme traz um mundo onde o cabelo das personagens muda de cor?",
    opcoes: ["Barbie Dreamtopia", "Barbie Cabelos Arco-Íris", "Barbie Pop Hair", "Barbie e a Sereia das Cores"],
    resposta: 0,
    explicacao: "Em Dreamtopia, Chelsea imagina reinos onde cabelo muda com emoção, clima... e até sabor 😂"
  },
  {
    texto: "Qual é o talento da Barbie no filme 'Barbie e o Castelo de Diamante'?",
    opcoes: ["Dança", "Magia", "Canto", "Design de moda"],
    resposta: 2,
    explicacao: "Ela e Liana usam a força da música para proteger o castelo encantado 💎"
  },
  {
    texto: "Quem é o personagem que aparece em todos os filmes da saga Fairytopia?",
    opcoes: ["Elina", "Azura", "Topaz", "Bibble"],
    resposta: 3,
    explicacao: "Bibble é o mascote icônico azul e fofo que acompanha Elina em todas as aventuras!"
  },
  {
    texto: "Em 'Barbie e a Princesa da Ilha', qual desses animais NÃO é companheiro da Rosella?",
    opcoes: ["Pavão", "Macaco", "Urso", "Elefante"],
    resposta: 3,
    explicacao: "Tika é um macaco, Azul um pavão... mas elefante não tem por lá não 🐘❌"
  },
  {
    texto: "Qual dessas frases combina com o lema dos filmes da Barbie?",
    opcoes: ["O amor vence tudo", "A coragem começa no coração", "Moda antes de magia", "Princesas governam com salto alto"],
    resposta: 1,
    explicacao: "Em vários filmes, como Fairytopia e Castelo de Diamante, a coragem interior é o que muda tudo!"
  },
  {
    texto: "Quantos filmes da Barbie envolvem música como tema principal até <span style='font-family: Arial;'>2023</span>?",
    opcoes: ["<span style='font-family: Arial;'>8</span>", "<span style='font-family: Arial;'>10</span>", "<span style='font-family: Arial;'>12</span>", "<span style='font-family: Arial;'>15+</span>"],
    resposta: 2,
    explicacao: "Foram mais de <span style='font-family: Arial;'>12</span> filmes com foco musical! Barbie canta MUITO!"
  },
  {
    texto: "Quem é a rainha do reino submarino em 'Barbie Vida de Sereia'?",
    opcoes: ["Lumina", "Calissa", "Merliah", "Delphina"],
    resposta: 1,
    explicacao: "Calissa é a mãe da Merliah e rainha das sereias 🧜‍♀️👑"
  },
  {
    texto: "Qual dessas Barbies é uma estrela de rock?",
    opcoes: ["Courtney", "Tori", "Elina", "Rosella"],
    resposta: 0,
    explicacao: "Courtney é a estrela rebelde em Rock’n Royals, com guitarra e atitude!"
  }
);

perguntas.push(
  {
    texto: "Em 'Barbie Rock’n Royals', qual acampamento Barbie deveria ir inicialmente?",
    opcoes: ["Camp Rock", "Camp Princess", "Camp Pop", "Camp Sparkle"],
    resposta: 1,
    explicacao: "Courtney, a princesa, foi enviada por engano ao Camp Pop, em vez do Camp Princess!"
  },
  {
    texto: "Qual dessas personagens tem uma flor no cabelo e fala com animais?",
    opcoes: ["Lumina", "Chelsea", "Rosella", "Elina"],
    resposta: 2,
    explicacao: "Rosella cresceu na ilha e tem uma conexão linda com os bichinhos do lugar 🐒🦜"
  },
  {
    texto: "Em qual filme Barbie tem um colar mágico que guia seu destino?",
    opcoes: ["Barbie e o Castelo de Diamante", "Barbie e a Magia do Arco-Íris", "Barbie Princesa e a Popstar", "Barbie e a Princesa da Ilha"],
    resposta: 3,
    explicacao: "O colar de Rosella brilha quando ela se aproxima da verdade sobre seu passado!"
  },
  {
    texto: "Quem são as personagens principais em 'Barbie e o Castelo de Diamante'?",
    opcoes: ["Barbie e Nikki", "Barbie e Teresa", "Liana e Alexa", "Keira e Tori"],
    resposta: 2,
    explicacao: "Liana e Alexa compartilham o poder da música e a força da amizade 🎶"
  },
  {
    texto: "Em 'Barbie Fairytopia: A Magia do Arco-Íris', quem é a fada malvada?",
    opcoes: ["Malucia", "Delphine", "Topaz", "Laverna"],
    resposta: 3,
    explicacao: "Laverna quer impedir que a primavera aconteça e espalhar escuridão pelo reino!"
  },
  {
    texto: "Qual dessas frases é dita em vários filmes da Barbie?",
    opcoes: ["Seja você mesma!", "Com poder vem estilo", "Nunca tire o salto alto!", "O glitter resolve tudo"],
    resposta: 0,
    explicacao: "‘Seja você mesma’ é a mensagem principal de vários filmes da Barbie ✨"
  },
  {
    texto: "Qual desses filmes traz Barbie como uma chef de cozinha?",
    opcoes: ["Barbie Chef Estrela", "Barbie e o Mistério da Cozinha", "Barbie Vida de Chef", "Nenhum dos anteriores"],
    resposta: 3,
    explicacao: "Apesar de tantas profissões, ainda não tivemos um filme onde Barbie é chef principal! 🍝"
  },
  {
    texto: "Em qual desses filmes Barbie NÃO vira princesa?",
    opcoes: ["Barbie Vida de Sereia", "Barbie e a Princesa da Ilha", "Barbie Princesa e a Plebéia", "Barbie Lago dos Cisnes"],
    resposta: 0,
    explicacao: "Merliah descobre que é filha de uma rainha, mas não adota o título real oficialmente."
  },
  {
    texto: "Em 'Barbie e as Agentes Secretas', o que Barbie faz fora das missões?",
    opcoes: ["É atleta", "É ginasta", "É programadora", "É patinadora"],
    resposta: 3,
    explicacao: "Ela e as amigas são patinadoras artísticas que viram espiãs disfarçadas!"
  },
  {
    texto: "Quantos filmes Barbie lançou em <span style='font-family: Arial;'>2022</span>?",
    opcoes: ["<span style='font-family: Arial;'>1</span>", "<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>"],
    resposta: 1,
    explicacao: "Foram <span style='font-family: Arial;'>2</span> filmes: 'Barbie Mermaid Power' e 'Barbie: Epic Road Trip'."
  },
  {
    texto: "Quem é a melhor amiga da Barbie no filme 'Barbie e o Mistério dos Golfinhos'?",
    opcoes: ["Teresa", "Nikki", "Isla", "Skipper"],
    resposta: 2,
    explicacao: "Isla é a garota misteriosa que depois se revela... uma sereia!"
  },
  {
    texto: "Qual dessas Barbies tem o poder de controlar pérolas?",
    opcoes: ["Elina", "Lumina", "Courtney", "Alexa"],
    resposta: 1,
    explicacao: "Lumina é uma sereia com o dom de controlar e criar com pérolas!"
  },
  {
    texto: "Qual o nome da cidade fictícia onde a Barbie mora em vários filmes?",
    opcoes: ["Barbieland", "Malibu", "Glitterville", "Rainbow Bay"],
    resposta: 1,
    explicacao: "Malibu é a cidade onde Barbie e suas irmãs vivem suas aventuras modernas!"
  }
);

perguntas.push(
  {
    texto: "Em 'Barbie e as Três Mosqueteiras', qual é o sonho da Barbie?",
    opcoes: ["Ser princesa", "Ser cantora", "Ser mosqueteira", "Ser estilista real"],
    resposta: 2,
    explicacao: "Corinne sonha em ser Mosqueteira e proteger a realeza com coragem e charme 🗡️"
  },
  {
    texto: "Qual dessas personagens é especialista em tecnologia em 'Barbie e as Agentes Secretas'?",
    opcoes: ["Renee", "Teresa", "Chelsea", "Skipper"],
    resposta: 0,
    explicacao: "Renee é super ágil e manda muito bem com aparelhos de espionagem e informática!"
  },
  {
    texto: "Em qual desses filmes a Barbie interpreta duas personagens diferentes?",
    opcoes: ["Barbie e a Princesa da Ilha", "Barbie Rock'n Royals", "Barbie Princesa e a Popstar", "Barbie Dreamtopia"],
    resposta: 2,
    explicacao: "Ela é Tori (princesa) e Keira (popstar) — uma dupla cheia de brilho e música 🎤👑"
  },
  {
    texto: "Qual dessas personagens vive em um mundo subterrâneo mágico?",
    opcoes: ["Lumina", "Elina", "Genevieve", "Alexa"],
    resposta: 2,
    explicacao: "Genevieve e suas irmãs descobrem um mundo mágico de dança embaixo do castelo!"
  },
  {
    texto: "Em 'Barbie Vida de Sereia', o que Merliah usa para respirar debaixo d'água?",
    opcoes: ["Uma pedra mágica", "Um colar da mãe", "Uma tiara encantada", "Ela descobre que consegue naturalmente"],
    resposta: 3,
    explicacao: "Ao entrar na água, ela descobre seus poderes de sereia — é natural dela! 🧜‍♀️"
  },
  {
    texto: "Qual dessas músicas é de um filme Barbie musical?",
    opcoes: ["All for One", "Let It Go", "Reflection", "Into the Unknown"],
    resposta: 0,
    explicacao: "‘All for One’ é o hino final de 'Barbie e as Três Mosqueteiras' 🎶"
  },
  {
    texto: "Qual desses filmes tem um pônei mágico como personagem?",
    opcoes: ["Barbie e o Pônei Encantado", "Barbie Fairytopia", "Barbie Dreamtopia", "Barbie Mundo dos Sonhos"],
    resposta: 2,
    explicacao: "Em Dreamtopia, Chelsea encontra criaturas incríveis — incluindo um pônei mágico voador 🦄"
  },
  {
    texto: "Quantas princesas aparecem em 'Barbie e as Doze Princesas Bailarinas'?",
    opcoes: ["<span style='font-family: Arial;'>10</span>", "<span style='font-family: Arial;'>11</span>", "<span style='font-family: Arial;'>12</span>", "<span style='font-family: Arial;'>13</span>"],
    resposta: 2,
    explicacao: "O nome já entrega: são <span style='font-family: Arial;'>12</span> princesas talentosas que dançam em um reino escondido!"
  },
  {
    texto: "Quem é o vilão de 'Barbie e o Castelo de Diamante'?",
    opcoes: ["Delphine", "Wenlock", "Lydia", "Gothel"],
    resposta: 2,
    explicacao: "Lydia tenta roubar o poder do castelo e é derrotada com a força da música e amizade!"
  },
  {
    texto: "Qual desses filmes da Barbie se passa parcialmente no fundo do mar?",
    opcoes: ["Barbie Fairytopia", "Barbie Vida de Sereia", "Barbie Lago dos Cisnes", "Barbie e o Castelo de Diamante"],
    resposta: 1,
    explicacao: "Merliah vai até o fundo do mar resgatar sua mãe e enfrentar desafios submarinos!"
  },
  {
    texto: "Qual dessas amigas da Barbie é fotógrafa em várias histórias?",
    opcoes: ["Skipper", "Nikki", "Raquelle", "Stacie"],
    resposta: 1,
    explicacao: "Nikki aparece como fotógrafa em Dreamhouse Adventures — com muito estilo sempre 📸"
  },
  {
    texto: "Qual filme mostra Barbie escolhendo entre dois caminhos diferentes?",
    opcoes: ["Barbie Dreamtopia", "Barbie Escolha Seu Destino", "Barbie Big City Big Dreams", "Barbie e o Portal Secreto"],
    resposta: 1,
    explicacao: "Um filme interativo da Netflix onde você escolhe o futuro da Barbie!"
  },
  {
    texto: "Qual dessas personagens é prima da Barbie em Dreamhouse Adventures?",
    opcoes: ["Tammy", "Isla", "Daisy", "Raquelle"],
    resposta: 2,
    explicacao: "Daisy aparece como prima da Barbie e sempre ajuda nas aventuras!"
  }
);

perguntas.push(
  {
    texto: "Em 'Barbie Fairytopia', o que acontece com as flores quando a magia desaparece?",
    opcoes: ["Elas murcham", "Elas ficam invisíveis", "Elas cantam triste", "Elas viram pedra"],
    resposta: 0,
    explicacao: "Sem magia, o Jardim Cristal e as flores perdem sua cor e vida 🌸"
  },
  {
    texto: "Qual dessas personagens tem cabelo azul e é super divertida?",
    opcoes: ["Chelsea", "Lumina", "Isla", "Daisy"],
    resposta: 3,
    explicacao: "Daisy é a prima da Barbie, cheia de estilo, música e cor 💙"
  },
  {
    texto: "Em 'Barbie e a Sereia das Pérolas', onde Lumina trabalha antes de saber sua origem?",
    opcoes: ["Palácio", "Salão de beleza", "Loja de conchas", "Aquário mágico"],
    resposta: 1,
    explicacao: "Lumina trabalha num salão onde usa pérolas para criar penteados mágicos!"
  },
  {
    texto: "Quem é a princesa que troca de lugar com a Barbie popstar?",
    opcoes: ["Courtney", "Tori", "Keira", "Genevieve"],
    resposta: 1,
    explicacao: "Tori troca de lugar com Keira em 'Barbie Princesa e a Popstar' 🎤👑"
  },
  {
    texto: "Qual dessas é uma fada malvada?",
    opcoes: ["Dahlia", "Willa", "Malucia", "Sunburst"],
    resposta: 2,
    explicacao: "Malucia aparece em 'Barbie e o Portal Secreto' querendo sugar todos os poderes!"
  },
  {
    texto: "Qual desses filmes envolve uma lenda antiga e um espelho mágico?",
    opcoes: ["Barbie e o Espelho Encantado", "Barbie e o Castelo de Diamante", "Barbie e o Espelho Mágico", "Barbie e o Mistério de Cristal"],
    resposta: 2,
    explicacao: "O Espelho Mágico guarda um segredo que muda o destino de Barbie!"
  },
  {
    texto: "Qual desses filmes é inspirado em um conto clássico de balé?",
    opcoes: ["Barbie Lago dos Cisnes", "Barbie Dreamtopia", "Barbie Rockstar", "Barbie e o Poder das Fadas"],
    resposta: 0,
    explicacao: "Inspirado no balé de Tchaikovsky, Barbie vive como Odette no mundo encantado dos cisnes!"
  },
  {
    texto: "Em 'Barbie Super Princesa', o que dá os poderes mágicos à Barbie?",
    opcoes: ["Poção secreta", "Beijo de borboleta", "Tiara mística", "Pulseira tecnológica"],
    resposta: 1,
    explicacao: "Ela recebe um beijo de uma borboleta mágica e se transforma em Super Sparkle! 🦋"
  },
  {
    texto: "Qual desses filmes tem o Ken sendo capturado por engano?",
    opcoes: ["Barbie e o Mistério da Moda", "Barbie Dreamhouse", "Barbie Princesa e a Popstar", "Barbie e as Espiãs"],
    resposta: 1,
    explicacao: "Na série Dreamhouse, Ken sempre entra em confusão tentando ajudar kkkk"
  },
  {
    texto: "Em 'Barbie Vida de Sereia <span style='font-family: Arial;'>2</span>', qual competição Merliah participa?",
    opcoes: ["Torneio de magia", "Desfile de coroas", "Campeonato de surf", "Corrida de sereias"],
    resposta: 2,
    explicacao: "Merliah compete em uma competição de surf enquanto equilibra sua vida de princesa marinha 🌊"
  },
  {
    texto: "Qual dessas vilãs tem um castelo sombrio cheio de armadilhas?",
    opcoes: ["Rowena", "Gothel", "Lydia", "Scylla"],
    resposta: 1,
    explicacao: "Em 'Barbie como Rapunzel', Gothel mora em um castelo escuro e cheio de segredos!"
  },
  {
    texto: "Qual é a habilidade mágica da Barbie em 'Barbie e o Portal Secreto'?",
    opcoes: ["Fazer flores nascerem", "Criar arco-íris", "Lançar magia com as mãos", "Mudar de forma"],
    resposta: 2,
    explicacao: "Alexa aprende a usar suas mãos para lançar feitiços mágicos no portal encantado!"
  },
  {
    texto: "Quem é o príncipe em 'Barbie Lago dos Cisnes'?",
    opcoes: ["Daniel", "Eric", "Julian", "Carlos"],
    resposta: 0,
    explicacao: "Daniel se apaixona por Odette e a ajuda a enfrentar Rothbart!"
  },
  {
    texto: "Qual desses filmes é interativo e permite o jogador escolher caminhos?",
    opcoes: ["Barbie Epic Road Trip", "Barbie Dreamtopia", "Barbie Princesa e a Popstar", "Barbie Vida de Sereia"],
    resposta: 0,
    explicacao: "‘Epic Road Trip’ é um filme interativo da Netflix onde o público decide o rumo da aventura!"
  }
);

perguntas.push(
  {
    texto: "Qual dessas personagens aparece como uma vilã disfarçada de dama da corte?",
    opcoes: ["Malucia", "Rowena", "Delphine", "Laverna"],
    resposta: 1,
    explicacao: "Rowena finge ser aliada em 'Barbie e a Princesa e a Plebéia', mas quer o trono!"
  },
  {
    texto: "Qual dessas Barbies é uma princesa que prefere música ao invés da realeza?",
    opcoes: ["Alexa", "Tori", "Keira", "Courtney"],
    resposta: 1,
    explicacao: "Tori quer viver como uma popstar em vez de seguir a etiqueta real 🎤"
  },
  {
    texto: "Em 'Barbie Dreamhouse Adventures', qual é o nome da irmã mais nova?",
    opcoes: ["Stacie", "Chelsea", "Skipper", "Nikki"],
    resposta: 1,
    explicacao: "Chelsea é a caçula — cheia de ideias, travessuras e muito brilho infantil!"
  },
  {
    texto: "Qual filme da Barbie envolve uma guerra de bandas em um acampamento?",
    opcoes: ["Barbie Rock'n Royals", "Barbie e a Popstar Rebelde", "Barbie e a Escola de Música", "Barbie e o Festival de Som"],
    resposta: 0,
    explicacao: "Princesas e roqueiras colidem com talento e glitter num acampamento épico!"
  },
  {
    texto: "Quem é o mascote de Elina em Fairytopia?",
    opcoes: ["Pegasus", "Hue", "Bibble", "Azul"],
    resposta: 2,
    explicacao: "Bibble é o serzinho azul que faz barulhos engraçados e derrete corações 💙"
  },
  {
    texto: "Qual dessas personagens é a fada que representa o outono?",
    opcoes: ["Topaz", "Azura", "Dahlia", "Sunburst"],
    resposta: 0,
    explicacao: "Topaz representa a beleza do outono em Fairytopia 🍂"
  },
  {
    texto: "Qual desses filmes tem um desfile de moda como parte da trama?",
    opcoes: ["Barbie Moda Mágica em Paris", "Barbie e o Castelo de Diamante", "Barbie Fairytopia", "Barbie e as Agentes Secretas"],
    resposta: 0,
    explicacao: "O desfile final em Paris mistura mágica + moda de um jeito bem icônico ✨"
  },
  {
    texto: "Qual é o vilão que transforma princesas em pedra?",
    opcoes: ["Gothel", "Wenlock", "Rothbart", "Lydia"],
    resposta: 1,
    explicacao: "Wenlock faz isso em 'Barbie e a Magia de Aladus'... nada simpático, né?"
  },
  {
    texto: "Em qual desses filmes Ken se disfarça para ajudar a Barbie?",
    opcoes: ["Barbie Princesa e a Popstar", "Barbie e o Mistério da Moda", "Barbie Dreamhouse Adventures", "Barbie e o Castelo de Diamante"],
    resposta: 2,
    explicacao: "Ken vive se disfarçando e se metendo em confusão na Dreamhouse kkk"
  },
  {
    texto: "Em 'Barbie Big City Big Dreams', Barbie representa qual cidade?",
    opcoes: ["Brooklyn", "Paris", "Malibu", "Nova York"],
    resposta: 2,
    explicacao: "Ela é a Barbie 'Malibu' e conhece a Barbie 'Brooklyn' durante a história 🎶"
  },
  {
    texto: "Qual dessas personagens tem um cabelo laranja flamejante?",
    opcoes: ["Sunburst", "Chelsea", "Raquelle", "Lumina"],
    resposta: 0,
    explicacao: "Sunburst tem cabelo laranja vibrante e representa a energia solar!"
  },
  {
    texto: "Quantos filmes da Barbie envolvem o uso de música mágica como elemento-chave?",
    opcoes: ["<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>5</span>", "<span style='font-family: Arial;'>8</span>", "<span style='font-family: Arial;'>10+</span>"],
    resposta: 3,
    explicacao: "São mais de <span style='font-family: Arial;'>10</span> filmes com música encantada mudando tudo!"
  },
  {
    texto: "Em 'Barbie e a Princesa da Ilha', o que Rosella descobre sobre seu passado?",
    opcoes: ["Ela é filha de uma rainha", "Ela tem uma irmã perdida", "Ela é uma sereia", "Ela tem poderes mágicos"],
    resposta: 1,
    explicacao: "Isla revela ser irmã da Rosella — separadas quando eram bebês!"
  },
  {
    texto: "Qual desses filmes tem personagens que duelam com guarda-chuvas?",
    opcoes: ["Barbie e as Três Mosqueteiras", "Barbie Dreamhouse", "Barbie Moda Mágica", "Barbie e o Portal Secreto"],
    resposta: 0,
    explicacao: "As mosqueteiras treinam com guarda-chuvas disfarçados de armas — chique e eficaz ☂️"
  }
);

perguntas.push(
  {
    texto: "Em 'Barbie Fairytopia', como Elina se move sem asas?",
    opcoes: ["Montando em Bibble", "Correndo", "Voando com magia", "Andando em uma flor flutuante"],
    resposta: 3,
    explicacao: "Ela usa uma flor flutuante como meio de transporte antes de conquistar suas asas! 🌸✨"
  },
  {
    texto: "Qual dessas amigas da Barbie é mais ligada a esportes?",
    opcoes: ["Stacie", "Skipper", "Chelsea", "Teresa"],
    resposta: 0,
    explicacao: "Stacie ama esportes, competições e está sempre se desafiando! 🏅"
  },
  {
    texto: "Em qual filme Barbie cuida de filhotes perdidos com suas irmãs?",
    opcoes: ["Barbie e o Festival Animal", "Barbie e os Golfinhos Mágicos", "Barbie e Suas Irmãs em Uma Aventura de Cachorrinhos", "Barbie e o Mistério do Filhote"],
    resposta: 2,
    explicacao: "As irmãs ajudam filhotes perdidos e descobrem pistas de um tesouro escondido! 🐶"
  },
  {
    texto: "Qual desses filmes se passa em um reino onde tudo é feito de doces?",
    opcoes: ["Barbie Dreamtopia", "Barbie no Reino Doce", "Barbie e o Festival do Chocolate", "Barbie e o Mundo Delícia"],
    resposta: 0,
    explicacao: "Em Dreamtopia, Chelsea visita reinos feitos de algodão-doce, bolo e arco-íris 🍭"
  },
  {
    texto: "Em 'Barbie e o Castelo de Diamante', o que salva as protagonistas no final?",
    opcoes: ["O poder da música", "Um colar mágico", "A espada de luz", "A ajuda de um dragão"],
    resposta: 0,
    explicacao: "A música das amigas é tão poderosa que vence a vilã Lydia!"
  },
  {
    texto: "Qual dessas personagens NÃO é uma princesa?",
    opcoes: ["Elina", "Tori", "Courtney", "Rosella"],
    resposta: 0,
    explicacao: "Elina é uma fada do campo mágico, não uma princesa!"
  },
  {
    texto: "Em 'Barbie Super Princesa', como Ken tenta ajudar?",
    opcoes: ["Com um robô", "Com um escudo mágico", "Com flores", "Com um drone"],
    resposta: 0,
    explicacao: "Ele cria um robô desengonçado que acaba ajudando... mais ou menos kkk 🤖"
  },
  {
    texto: "Quantos episódios tem a série 'Barbie Dreamhouse Adventures' (até <span style='font-family: Arial;'>2023</span>)?",
    opcoes: ["<span style='font-family: Arial;'>26</span>", "<span style='font-family: Arial;'>39</span>", "<span style='font-family: Arial;'>52</span>", "<span style='font-family: Arial;'>60+</span>"],
    resposta: 3,
    explicacao: "A série já passou dos <span style='font-family: Arial;'>60</span> episódios com muito humor, moda e Ken atrapalhado!"
  },
  {
    texto: "Qual dessas Barbies canta a música 'Hope Has Wings'?",
    opcoes: ["Keira", "Elina", "Tori", "Merliah"],
    resposta: 1,
    explicacao: "Essa música linda aparece em 'Barbie Fairytopia' quando Elina finalmente conquista suas asas 💫"
  },
  {
    texto: "Em 'Barbie e as Três Mosqueteiras', qual acessório se transforma em espada?",
    opcoes: ["Colar", "Tiara", "Guarda-chuva", "Sapato"],
    resposta: 2,
    explicacao: "Elas treinam com guarda-chuvas disfarçados que viram armas de defesa real ☂️"
  },
  {
    texto: "Quem é a vilã em 'Barbie Princesa e a Popstar'?",
    opcoes: ["Rowena", "Delphine", "Lydia", "Não tem vilã"],
    resposta: 3,
    explicacao: "Esse filme foca mais nos desafios pessoais e troca de identidade — não tem uma vilã clássica!"
  },
  {
    texto: "Qual desses personagens é um animal fofo e falante de Dreamtopia?",
    opcoes: ["Zane", "Zippy", "Zeenie", "Zebra"],
    resposta: 1,
    explicacao: "Zippy é um dos bichinhos encantados que aparece nos sonhos de Chelsea 🦓✨"
  }
);

perguntas.push(
  {
    texto: "Em 'Barbie e o Portal Secreto', como Alexa descobre que tem magia?",
    opcoes: ["Quando encontra um colar", "Ao tocar uma flor mágica", "Ao ler um livro antigo", "Por acidente, em um campo de flores"],
    resposta: 3,
    explicacao: "Ela tropeça e acidentalmente ativa sua magia — cena clássica de transformação 💖✨"
  },
  {
    texto: "Qual dessas personagens é conhecida por usar orelhas de coelho?",
    opcoes: ["Chelsea", "Tammy", "Isla", "Stacie"],
    resposta: 0,
    explicacao: "Chelsea adora fantasias e em Dreamhouse ela aparece com orelhinhas de coelho várias vezes 🐰"
  },
  {
    texto: "Em 'Barbie Fairytopia: Magic of the Rainbow', o que ameaça a primavera?",
    opcoes: ["Laverna", "Nevasca eterna", "Falta de arco-íris", "Fada traidora"],
    resposta: 0,
    explicacao: "Laverna quer impedir a Dança da Primavera e mergulhar o mundo na escuridão ❄️"
  },
  {
    texto: "Qual dessas versões da Barbie é uma surfista profissional?",
    opcoes: ["Alexa", "Tori", "Merliah", "Keira"],
    resposta: 2,
    explicacao: "Merliah é campeã de surf e princesa do mar em ‘Barbie Vida de Sereia’ 🌊"
  },
  {
    texto: "Em qual desses filmes Barbie NÃO tem uma irmã presente?",
    opcoes: ["Barbie e a Sereia das Pérolas", "Barbie Dreamhouse Adventures", "Barbie e Suas Irmãs em Uma Aventura de Cavalos", "Barbie e os Golfinhos Mágicos"],
    resposta: 0,
    explicacao: "Em 'Sereia das Pérolas', Barbie está sozinha como Lumina — sem irmãs nessa trama."
  },
  {
    texto: "Qual é o nome do unicórnio em 'Barbie Fairytopia: Mermaidia'?",
    opcoes: ["Luma", "Shiver", "Bibble", "Alina"],
    resposta: 1,
    explicacao: "Shiver é um bichinho de estimação fofo e peludinho, que parece uma mistura de foca e unicórnio 🦄"
  },
  {
    texto: "Quantos filmes Barbie existem oficialmente até o ano de <span style='font-family: Arial;'>2024</span>?",
    opcoes: ["<span style='font-family: Arial;'>38</span>", "<span style='font-family: Arial;'>42</span>", "<span style='font-family: Arial;'>45</span>", "<span style='font-family: Arial;'>50+</span>"],
    resposta: 3,
    explicacao: "Oficialmente já passaram de <span style='font-family: Arial;'>50</span> filmes — e ainda contando!"
  },
  {
    texto: "Qual dessas personagens é vilã em 'Barbie e o Castelo de Diamante'?",
    opcoes: ["Lydia", "Rowena", "Raquelle", "Delphine"],
    resposta: 0,
    explicacao: "Lydia usa espelhos mágicos para aprisionar e controlar as pessoas!"
  },
  {
    texto: "Qual dessas frases NÃO é comum nos filmes da Barbie?",
    opcoes: ["Acredite em si mesma", "Você é mais forte do que pensa", "Sempre use salto", "O poder está no coração"],
    resposta: 2,
    explicacao: "Barbie ama sapato, mas nunca disse que é obrigatório kkkk 👠❌"
  },
  {
    texto: "Em 'Barbie e o Quebra-Nozes', qual presente mágico Barbie recebe?",
    opcoes: ["Uma rosa encantada", "Uma caixa de música", "Um soldadinho de chumbo", "Um vestido mágico"],
    resposta: 2,
    explicacao: "Ela recebe o soldadinho que ganha vida e começa a aventura!"
  },
  {
    texto: "Qual é o maior medo de Elina em Fairytopia?",
    opcoes: ["Perder Bibble", "Nunca ganhar asas", "Ser banida", "Laverna"],
    resposta: 1,
    explicacao: "Ela sempre se sente diferente por não ter asas — até descobrir que isso é sua força 💪"
  },
  {
    texto: "Quem é a Barbie que interpreta uma sereia com cabelo que muda de cor?",
    opcoes: ["Lumina", "Isla", "Merliah", "Coralia"],
    resposta: 0,
    explicacao: "Lumina tem poderes com pérolas e cabelo que muda com a emoção 🌈"
  }
);

perguntas.push(
  {
    texto: "Em 'Barbie e o Mistério da Sereia', o que Isla esconde?",
    opcoes: ["Ela é uma sereia", "Ela é irmã da Barbie", "Ela é uma vilã", "Ela é uma fada"],
    resposta: 0,
    explicacao: "Isla é uma sereia que esconde sua identidade para ajudar os golfinhos mágicos!"
  },
  {
    texto: "Qual dessas Barbies vive uma aventura em um mundo de videogame?",
    opcoes: ["Merliah", "Tori", "Alexa", "Barbie em Um Mundo de Jogos"],
    resposta: 3,
    explicacao: "Esse filme leva Barbie pra dentro de um jogo cheio de níveis, poderes e obstáculos!"
  },
  {
    texto: "Qual o talento de Keira em 'Barbie Princesa e a Popstar'?",
    opcoes: ["Pintura", "Dança", "Canto", "Esgrima"],
    resposta: 2,
    explicacao: "Keira é uma estrela pop que troca de lugar com a princesa Tori 🎤"
  },
  {
    texto: "Qual filme tem uma competição de talentos em um castelo mágico?",
    opcoes: ["Barbie Rock'n Royals", "Barbie Escola de Princesas", "Barbie e o Portal Secreto", "Barbie Fairytopia"],
    resposta: 0,
    explicacao: "Rock’n Royals coloca duas escolas — uma de princesas e outra de rock — para competir com muito glitter!"
  },
  {
    texto: "Qual dessas personagens é uma vilã travessa em Dreamtopia?",
    opcoes: ["Zee", "Tammy", "Malucia", "Não tem vilã"],
    resposta: 3,
    explicacao: "Dreamtopia é um mundo imaginativo e não tem vilões — só maluquices da Chelsea 😄"
  },
  {
    texto: "Qual dessas amigas da Barbie ama tecnologia?",
    opcoes: ["Nikki", "Raquelle", "Skipper", "Daisy"],
    resposta: 2,
    explicacao: "Skipper é geek, adora robótica, programação e tecnologia em geral 💻"
  },
  {
    texto: "Qual desses filmes envolve criaturas místicas chamadas 'Crystal Fairies'?",
    opcoes: ["Barbie e o Reino de Cristal", "Barbie e o Castelo de Diamante", "Barbie e o Espelho Mágico", "Esse filme não existe"],
    resposta: 3,
    explicacao: "Pegadinha rosa! Esse título ainda não existe, mas parece real, né? Hehe 😅"
  },
  {
    texto: "Qual dessas Barbies participa de uma corrida mágica com escolhas do jogador?",
    opcoes: ["Alexa", "Courtney", "Barbie em Epic Road Trip", "Keira"],
    resposta: 2,
    explicacao: "Epic Road Trip é interativo e cheio de decisões durante a viagem de carro!"
  },
  {
    texto: "Qual é o nome do mascote da Barbie que aparece com frequência nos filmes?",
    opcoes: ["Bobby", "Taffy", "Sparkle", "Mocha"],
    resposta: 1,
    explicacao: "Taffy é a cadelinha amarela que aparece em vários filmes e séries 🐶"
  },
  {
    texto: "Em qual filme Barbie visita uma cidade chamada Zinnia?",
    opcoes: ["Barbie Dreamtopia", "Barbie em Um Mundo de Jogos", "Barbie Moda Mágica em Paris", "Barbie e o Mistério da Moda"],
    resposta: 3,
    explicacao: "Zinnia é a cidade onde acontece o desfile de moda no filme 'Mistério da Moda'."
  },
  {
    texto: "Qual dessas frases NÃO é dita em nenhum filme da Barbie?",
    opcoes: ["Tudo é possível com coragem", "Você pode ser o que quiser", "Penteado é poder", "Juntas somos mais fortes"],
    resposta: 2,
    explicacao: "‘Penteado é poder’ ainda não foi dita oficialmente... mas bem que poderia ser kkk 💇‍♀️✨"
  }
);

perguntas.push(
  {
    texto: "Qual dessas personagens possui asas transparentes com brilho em 'Fairytopia'?",
    opcoes: ["Elina", "Sunburst", "Topaz", "Azura"],
    resposta: 0,
    explicacao: "Elina conquista suas asas no final e elas são lindas, delicadas e super brilhantes! 🧚‍♀️"
  },
  {
    texto: "Quem é a melhor amiga da Barbie no filme 'Barbie e o Castelo de Diamante'?",
    opcoes: ["Alexa", "Liana", "Keira", "Courtney"],
    resposta: 1,
    explicacao: "Liana e Barbie dividem tudo — até um colar mágico que as guia na aventura musical!"
  },
  {
    texto: "Qual dessas não é uma personagem oficial dos filmes da Barbie?",
    opcoes: ["Skipper", "Stacie", "Tina", "Chelsea"],
    resposta: 2,
    explicacao: "Tina não existe nos filmes oficiais — só nos memes mesmo 😅"
  },
  {
    texto: "Em 'Barbie Dreamhouse Adventures', quem é o rival mais debochado da Barbie?",
    opcoes: ["Tammy", "Ken", "Raquelle", "Trey Reardon"],
    resposta: 3,
    explicacao: "Trey é rico, arrogante e vive tentando impressionar... sem sucesso kkk"
  },
  {
    texto: "Qual dessas Barbies vive uma jornada mágica com dragões?",
    opcoes: ["Elina", "Alexa", "Princess Rayla", "Lumina"],
    resposta: 2,
    explicacao: "Rayla é de ‘Barbie e os Dragões Mágicos’ e protege os bebês dragões do reino! 🐉"
  },
  {
    texto: "Qual dessas músicas NÃO existe nos filmes da Barbie?",
    opcoes: ["Connected", "Two Voices One Song", "This is Me", "We're Gonna Find It"],
    resposta: 2,
    explicacao: "‘This is Me’ é de Camp Rock — não da Barbie! Essa foi pegadinha Disney! 😅"
  },
  {
    texto: "Em 'Barbie e a Magia de Aladus', qual é a cor da pedra mágica?",
    opcoes: ["Verde", "Vermelha", "Rosa", "Azul"],
    resposta: 1,
    explicacao: "A pedra que dá poder à varinha do vilão Wenlock é vermelha e perigosa! 🔴"
  },
  {
    texto: "Qual dessas versões da Barbie usa um diário mágico?",
    opcoes: ["Alexa", "Keira", "Tori", "Liv"],
    resposta: 0,
    explicacao: "Alexa, em ‘Barbie e o Portal Secreto’, encontra um diário que a leva ao reino mágico!"
  },
  {
    texto: "Qual o nome da bailarina principal em 'Barbie e as Doze Princesas Bailarinas'?",
    opcoes: ["Genevieve", "Rowena", "Odette", "Lacey"],
    resposta: 0,
    explicacao: "Genevieve é a líder das irmãs e ama dançar mais que tudo 💃"
  },
  {
    texto: "Quantos irmãos a Barbie tem nas histórias oficiais?",
    opcoes: ["<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>4</span>", "<span style='font-family: Arial;'>5</span>"],
    resposta: 1,
    explicacao: "Ela tem <span style='font-family: Arial;'>3</span> irmãs: Skipper, Stacie e Chelsea — todas com personalidade única!"
  },
  {
    texto: "Qual dessas personagens aparece como uma fada do fogo?",
    opcoes: ["Elina", "Dahlia", "Sunburst", "Laverna"],
    resposta: 2,
    explicacao: "Sunburst tem uma personalidade intensa e representa o fogo mágico 🔥"
  },
  {
    texto: "Qual filme apresenta Barbie como princesa e amazona ao mesmo tempo?",
    opcoes: ["Barbie e a Escola de Princesas", "Barbie e Suas Irmãs em Aventura de Cavalos", "Barbie e a Aventura de Cavalaria", "Barbie e o Mistério do Haras"],
    resposta: 0,
    explicacao: "Ela aprende etiqueta real e equitação numa escola de princesas — chiquérrima!"
  }
);

perguntas.push(
  {
    texto: "Qual dessas versões da Barbie vive no mundo subaquático de Oceana?",
    opcoes: ["Lumina", "Merliah", "Isla", "Rayna"],
    resposta: 1,
    explicacao: "Merliah descobre ser filha da rainha Calissa e princesa de Oceana 🧜‍♀️"
  },
  {
    texto: "Qual dessas personagens é prima da Barbie e adora moda e música?",
    opcoes: ["Raquelle", "Daisy", "Skipper", "Tori"],
    resposta: 1,
    explicacao: "Daisy aparece bastante em Dreamhouse Adventures com estilo, batida e fofura 🎧"
  },
  {
    texto: "Qual é o nome da vilã que enfeitiça os animais em 'Barbie como Rapunzel'?",
    opcoes: ["Gothel", "Lydia", "Delphine", "Tammy"],
    resposta: 0,
    explicacao: "Gothel aprisiona Rapunzel e tenta controlar tudo com feitiçaria sombria 🖤"
  },
  {
    texto: "Em 'Barbie Rock’n Royals', qual o talento da princesa Courtney?",
    opcoes: ["Pintura", "Poesia", "Canto", "Acrobacias"],
    resposta: 2,
    explicacao: "Courtney surpreende a todos com sua voz e atitude no palco! 🎤"
  },
  {
    texto: "Qual filme tem um mapa secreto escondido em um colar?",
    opcoes: ["Barbie e o Castelo de Diamante", "Barbie e as Três Mosqueteiras", "Barbie e o Mistério dos Golfinhos", "Barbie e o Mistério da Sereia"],
    resposta: 2,
    explicacao: "O colar da Barbie mostra o caminho para um tesouro escondido no fundo do mar! 🐬"
  },
  {
    texto: "Quem é a fada da sabedoria em Fairytopia?",
    opcoes: ["Topaz", "Azura", "Laverna", "Lumina"],
    resposta: 1,
    explicacao: "Azura orienta Elina com calma, paciência e asas azuis maravilhosas 💙"
  },
  {
    texto: "Qual dessas Barbies vive uma aventura em Paris com moda e mágica?",
    opcoes: ["Keira", "Alexa", "Barbie em Moda Mágica em Paris", "Rosella"],
    resposta: 2,
    explicacao: "Ela ajuda a salvar um ateliê mágico com a ajuda de três fadas estilosas ✨"
  },
  {
    texto: "Quantas princesas existem no filme das Doze Irmãs Bailarinas?",
    opcoes: ["<span style='font-family: Arial;'>10</span>", "<span style='font-family: Arial;'>11</span>", "<span style='font-family: Arial;'>12</span>", "<span style='font-family: Arial;'>13</span>"],
    resposta: 2,
    explicacao: "Sim, são <span style='font-family: Arial;'>12</span>! Uma para cada ritmo e personalidade 💃"
  },
  {
    texto: "Qual personagem tem poderes de gelo em Dreamtopia?",
    opcoes: ["Chelsea", "Raquelle", "Isla", "A princesa de gelo"],
    resposta: 3,
    explicacao: "A princesa do Reino Gelado tem o poder de criar pontes de gelo e montanhas congeladas ❄️"
  },
  {
    texto: "Qual desses filmes envolve um vilão que usa espelhos mágicos?",
    opcoes: ["Barbie e o Castelo de Diamante", "Barbie e o Espelho Mágico", "Barbie e as Agentes Secretas", "Barbie Lago dos Cisnes"],
    resposta: 0,
    explicacao: "Lydia usa espelhos para manipular e aprisionar, mas a amizade vence no fim!"
  },
  {
    texto: "Qual desses filmes NÃO envolve magia diretamente?",
    opcoes: ["Barbie e a Escola de Princesas", "Barbie e o Portal Secreto", "Barbie Fairytopia", "Barbie Lago dos Cisnes"],
    resposta: 0,
    explicacao: "Escola de Princesas é mais realista — nada de varinhas ali, só salto alto e etiqueta 💅"
  },
  {
    texto: "Quem é a Barbie que vive uma vida dupla como surfista e sereia?",
    opcoes: ["Merliah", "Lumina", "Alexa", "Chelsea"],
    resposta: 0,
    explicacao: "Merliah é humana na superfície e sereia no mar — a Hannah Montana do oceano kkkk"
  },
  {
    texto: "Em qual filme Barbie canta 'To Be a Princess'?",
    opcoes: ["Barbie Princesa e a Popstar", "Barbie e as Três Mosqueteiras", "Barbie como Rapunzel", "Barbie Princesa e a Plebéia"],
    resposta: 3,
    explicacao: "Tori e Erika arrasam nesse dueto sobre o que significa ser uma princesa de verdade 👑"
  },
  {
    texto: "Qual dessas personagens NÃO tem asas?",
    opcoes: ["Elina", "Sunburst", "Isla", "Topaz"],
    resposta: 2,
    explicacao: "Isla é uma sereia! Nada de voar, só nadar 💦"
  },
  {
    texto: "Qual dessas princesas usa um vestido dourado com roxo em um baile real?",
    opcoes: ["Courtney", "Alexa", "Tori", "Genevieve"],
    resposta: 1,
    explicacao: "Alexa aparece belíssima no Portal Secreto com esse look marcante 💜💛"
  },
  {
    texto: "Quantos filmes da Barbie envolvem troca de identidade?",
    opcoes: ["<span style='font-family: Arial;'>2</span>", "<span style='font-family: Arial;'>3</span>", "<span style='font-family: Arial;'>5+</span>", "<span style='font-family: Arial;'>10</span>"],
    resposta: 2,
    explicacao: "Tori & Keira, Erika & Anneliese, Courtney & Rockstars… são <span style='font-family: Arial;'>5+</span> sim!"
  },
  {
    texto: "Qual é o nome do cavalo da Barbie em vários filmes clássicos?",
    opcoes: ["Starlight", "Buttercup", "Rose", "Peggy"],
    resposta: 0,
    explicacao: "Starlight é o cavalo branco que aparece em contos como Rapunzel e Mosqueteiras 🐎"
  },
  {
    texto: "Quem é a narradora de 'Barbie Lago dos Cisnes'?",
    opcoes: ["Chelsea", "Skipper", "Kelly", "Stacie"],
    resposta: 2,
    explicacao: "Kelly está contando a história com Barbie ao lado dela — bem conto de fadas mesmo!"
  }
);