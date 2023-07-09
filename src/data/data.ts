type GameItem = {
  title: string;
  cover: string;
  id: number;
  contributors?: {
    name: string;
    url: string;
  }[];
  url: string;
  game: string;
  description: string;
  width: number;
  height: number;
};

const gameData: GameItem[] = [
  {
    title: "Randomancer",
    cover: "https://img.itch.zone/aW1nLzk1MzgzOTcucG5n/300x240%23c/9DwMru.png",
    id: 333219,
    contributors: [
      {
        name: "Riuku",
        url: "https://riuku.itch.io",
      },
      {
        name: "Reaktori",
        url: "https://reaktori.itch.io",
      },
      {
        name: "Woffelson",
        url: "https://woffels.itch.io",
      },
    ],
    url: "https://riuku.itch.io/randomancer",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6266559/index.html",
    description:
      "A dice-rolling action-lane-defense game where your dice are your units!",
    width: 960,
    height: 540,
  },
  {
    title: "Holonomy",
    cover: "https://img.itch.zone/aW1nLzk1NDQ1NDAucG5n/300x240%23c/iEm5pj.png",
    id: 329311,
    url: "https://fuzzyzilla.itch.io/holonomy",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/7959084/Holonomy Web/index.html",
    description:
      "Explore the non-euclidean surface of a die, using the effects of holonomy to solve puzzles.",
    width: 800,
    height: 800,
  },
  {
    title: "Fire and Dice",
    cover: "https://img.itch.zone/aW1nLzk1OTEwODIuZ2lm/300x240%23cm/QIaxQm.gif",
    id: 328199,
    contributors: [
      {
        name: "Golen",
        url: "https://golen.itch.io",
      },
      {
        name: "Mato",
        url: "https://matojeje.itch.io",
      },
      {
        name: "ArcticFqx",
        url: "https://arcticfqx.itch.io",
      },
      {
        name: "LuxxArt",
        url: "https://luxxart.itch.io",
      },
    ],
    url: "https://golen.itch.io/fire-and-dice",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6248804/public/index.html",
    description:
      "Dice up the competition with some dragon dice! Mobile friendly.",
    width: 640,
    height: 360,
  },
  {
    title: "Oddwood",
    cover: "https://img.itch.zone/aW1nLzk1MzQ0MDkucG5n/300x240%23c/Z3Aexy.png",
    id: 335652,
    contributors: [
      {
        name: "Frogrammer",
        url: "https://frogrammer.itch.io",
      },
      {
        name: "Crase da Crise",
        url: "https://crasedacrise.itch.io",
      },
      {
        name: "PondGames",
        url: "https://pondgames.itch.io",
      },
      {
        name: "Bibiki",
        url: "https://bibikigarcia.itch.io",
      },
    ],
    url: "https://frogrammer.itch.io/oddwood",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6183575/index.html",
    description: "A chaotic arcade game. Made for GMTK2022.",
    width: 960,
    height: 540,
  },
  {
    title: "Dice with Kali",
    cover: "https://img.itch.zone/aW1nLzk1NDk4NDAuZ2lm/300x240%23cm/vh23Fx.gif",
    id: 330132,
    url: "https://ragtaggames.itch.io/dice-with-kali",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6162694-599403/index.html",
    description: "Play for your soul against the Goddess of Death.",
    width: 980,
    height: 660,
  },
  {
    title: "Pestidie - On a Roll",
    cover: "https://img.itch.zone/aW1nLzk3OTE3MTcucG5n/300x240%23c/vftBDW.png",
    id: 330388,
    url: "https://gangrue.itch.io/on-a-role",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6377109/index.html",
    description:
      "A roguelike with a cute twist and the roll of a dice. Elements of a shoot 'em up.",
    width: 960,
    height: 540,
  },
  {
    title: "Dice Catcher",
    cover: "https://img.itch.zone/aW1nLzk1NDg4MjcuZ2lm/300x240%23cm/frM4Qu.gif",
    id: 333395,
    url: "https://kultisti.itch.io/dice-catcher",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6249447/index.html",
    description: "Magic Dice!",
    width: 960,
    height: 720,
  },
  {
    title: "Where They Fall",
    cover: "https://img.itch.zone/aW1nLzk1NjQ4MDkucG5n/300x240%23c/SqRNTe.png",
    id: 334144,
    url: "https://manatea.itch.io/where-they-fall",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6236582/index.html",
    description: "Throw the runes and find out what the gods intent",
    width: 1280,
    height: 720,
  },
  {
    title: "Rolling for Royalty",
    cover:
      "https://img.itch.zone/aW1nLzk1ODAyMzQuZ2lm/300x240%23cm/%2FXpGE3.gif",
    id: 332763,
    url: "https://bas-hoogeboom.itch.io/rolling-for-royalty",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6239939/Build/index.html",
    description: "A Minimalistic Dice Engine Building Game",
    width: 1280,
    height: 720,
  },
  {
    title: "Not your Pawn!",
    cover: "https://img.itch.zone/aW1nLzk0ODU5ODMucG5n/300x240%23c/nN3YVh.png",
    id: 334883,
    contributors: [
      {
        name: "ButteredCoffee",
        url: "https://butteredcoffee.itch.io",
      },
      {
        name: "JustHellygar",
        url: "https://justhellygar.itch.io",
      },
      {
        name: "BENI-O",
        url: "https://beni-o.itch.io",
      },
    ],
    url: "https://butteredcoffee.itch.io/not-your-pawn",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6380615/WebBuild1/index.html",
    description: "Action-Arcade game where you use dice to fight chess pieces.",
    width: 980,
    height: 615,
  },
  {
    title: "Diepound",
    cover:
      "https://img.itch.zone/aW1nLzk0OTA0OTUucG5n/300x240%23c/FnVWk%2F.png",
    id: 331178,
    url: "https://lightpotato.itch.io/diepound",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6239777/index.html",
    description: "Roll the dice, land with impact.",
    width: 640,
    height: 360,
  },
  {
    title: "Roll N' Skate",
    cover: "https://img.itch.zone/aW1nLzk0NzQxOTAuZ2lm/300x240%23cm/dYnEFx.gif",
    id: 329126,
    url: "https://squishyturtlegames.itch.io/roll-n-skate",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6173271/WebglFinal2/index.html",
    description: "a puzzle game about Rollin' dice and Rollin' skates",
    width: 1152,
    height: 640,
  },
  {
    title: "Rolling World",
    cover: "https://img.itch.zone/aW1nLzk1NDY5MzIucG5n/300x240%23c/AySfox.png",
    id: 337306,
    contributors: [
      {
        name: "Coffe789",
        url: "https://coffe789.itch.io",
      },
      {
        name: "Impact",
        url: "https://impactos.itch.io",
      },
      {
        name: "Vertigofy",
        url: "https://vertigofy.itch.io",
      },
    ],
    url: "https://coffe789.itch.io/rolly-world",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6226555/index.html",
    description: "rolling the world!",
    width: 960,
    height: 540,
  },
  {
    title: "Roll - The Die",
    cover: "https://img.itch.zone/aW1nLzk0ODk4MTMucG5n/300x240%23c/SomT1X.png",
    id: 332176,
    contributors: [
      {
        name: "Nir Zaid",
        url: "https://nir-zaid.itch.io",
      },
      {
        name: "RetrOfir",
        url: "https://retrofir.itch.io",
      },
      {
        name: "Kheison",
        url: "https://kheison.itch.io",
      },
      {
        name: "Romaner811",
        url: "https://romaner811.itch.io",
      },
    ],
    url: "https://nir-zaid.itch.io/roll-the-die",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6322086/index.html",
    description: "Roll your way to the top of the great carpet dimension.",
    width: 960,
    height: 600,
  },
  {
    title: "Dice it Up",
    cover: "https://img.itch.zone/aW1nLzk0ODIwMjIucG5n/300x240%23c/lmZfdH.png",
    id: 330095,
    url: "https://ddrkirbyisq.itch.io/dice-it-up",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6152659-612442/index.html",
    description: "A dice-based cooking game",
    width: 1000,
    height: 600,
  },
  {
    title: "Rollemental",
    cover: "https://img.itch.zone/aW1nLzk1MzczMDIucG5n/300x240%23c/IZrQtu.png",
    id: 333054,
    contributors: [
      {
        name: "Trigonious",
        url: "https://trigonious.itch.io",
      },
      {
        name: "MattressD",
        url: "https://mattressd.itch.io",
      },
    ],
    url: "https://trigonious.itch.io/rollemental",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6180759/index.html",
    description: "An elemental dice clicker game made for GMTK 2022",
    width: 960,
    height: 540,
  },
  {
    title: "Paint Me Something, Will You?",
    cover: "https://img.itch.zone/aW1nLzk1NDY1NzYuZ2lm/300x240%23cm/29sOTt.gif",
    id: 333687,
    url: "https://part-time-maniac.itch.io/paint-me-something",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6184351/index.html",
    description: "Show me your inner creativity.",
    width: 960,
    height: 540,
  },
  {
    title: "trinket tower",
    cover: "https://img.itch.zone/aW1nLzk0NzI2NTQucG5n/300x240%23c/SHxqHD.png",
    id: 334525,
    contributors: [
      {
        name: "wormpod",
        url: "https://wormpod.itch.io",
      },
      {
        name: "Max Cordeiro",
        url: "https://cilerba.itch.io",
      },
    ],
    url: "https://wormpod.itch.io/trinket-tower",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6352684/TrinketTower-Web/index.html",
    description:
      "tabby the ragdoll climbs trinket tower in this micro roguelite for gmtk jam 2022!",
    width: 640,
    height: 360,
  },
  {
    title: "Dice duel",
    cover:
      "https://img.itch.zone/aW1nLzExMTY0ODM4LmdpZg==/300x240%23cm/6cTksu.gif",
    id: 332908,
    contributors: [
      {
        name: "Naej Doree",
        url: "https://naejdoree.itch.io",
      },
      {
        name: "Amelia",
        url: "https://ameliagreystone.itch.io",
      },
    ],
    url: "https://naejdoree.itch.io/dice-duel",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/7505544/DiceDuel-2023-03-12-1428/index.html",
    description:
      "Defy the patriarchy with your trusty rapier and a bit of math",
    width: 640,
    height: 400,
  },
  {
    title: "Murmurs",
    cover:
      "https://img.itch.zone/aW1nLzk2MzE1NjYuZ2lm/300x240%23cm/JjM9%2Fw.gif",
    id: 331949,
    url: "https://cookiecrayon.itch.io/murmurs",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6240399/Murmurs_HTML/index.html",
    description: "Mumblings and moanings",
    width: 640,
    height: 360,
  },
  {
    title: "Dicezilla",
    cover: "https://img.itch.zone/aW1nLzk0ODE3NzcuZ2lm/300x240%23cm/S1Nvr1.gif",
    id: 330202,
    url: "https://pixelage42.itch.io/dicezilla",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6162372/index.html",
    description:
      "Defend the city and fight Dicezilla in this card based PICO-8 game!",
    width: 640,
    height: 640,
  },
  {
    title: "Unlikely",
    cover: "https://img.itch.zone/aW1nLzk2MDk0MzMucG5n/300x240%23c/RF8BDl.png",
    id: 329650,
    url: "https://nachogames.itch.io/unlikely",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/7008888/index.html",
    description: "A short creepy game",
    width: 960,
    height: 540,
  },
  {
    title: "If God Wills It, a Die Can Dice",
    cover: "https://img.itch.zone/aW1nLzk1NDA4MjMucG5n/300x240%23c/0CaP1Q.png",
    id: 330169,
    url: "https://dancingengie.itch.io/even-a-die",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6173841/index.html",
    description: "Don't roll dice. Dice everyone else.",
    width: 960,
    height: 720,
  },
  {
    title: "Rogue Dice",
    cover: "https://img.itch.zone/aW1nLzk0ODE5NTIucG5n/300x240%23c/EbKnN7.png",
    id: 330098,
    url: "https://vimlark.itch.io/rogue-dice",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6162061/index.html",
    description:
      "This is a small rogue-like(ish) prototype where you use dice to move your player around a level.",
    width: 640,
    height: 480,
  },
  {
    title: "Rolling Racers",
    cover: "https://img.itch.zone/aW1nLzk2Mzc2OTEucG5n/300x240%23c/JrI2WG.png",
    id: 335012,
    url: "https://stevopineapple.itch.io/rolling-racers",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6243909/index.html",
    description: "Dice Rolling Racing Game",
    width: 960,
    height: 540,
  },
  {
    title: "Dead Dice Redemption",
    cover: "https://img.itch.zone/aW1nLzk2MTM2NTAuanBn/300x240%23c/WfbvyD.jpg",
    id: 334034,
    contributors: [
      {
        name: "Becher",
        url: "https://becher.itch.io",
      },
      {
        name: "Nahkriin",
        url: "https://nahkriid.itch.io",
      },
      {
        name: "Brikou",
        url: "https://brikou.itch.io",
      },
      {
        name: "Allifeur",
        url: "https://allifeur.itch.io",
      },
      {
        name: "Valentin di Domenico",
        url: "https://valentin-di-domenico.itch.io",
      },
    ],
    url: "https://becher.itch.io/dead-dice-redemption",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6182203/DeadDiceRedemption/index.html",
    description: "Shoot the Zombie Dices and grab your beer! (GMTK Jam 2022)",
    width: 960,
    height: 645,
  },
  {
    title: "That's a dice?!",
    cover:
      "https://img.itch.zone/aW1nLzk0NzU0ODcucG5n/300x240%23c/Ijoo%2BM.png",
    id: 329299,
    url: "https://asidert.itch.io/thats-a-dice",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6157319/index.html",
    description: "Maybe...   Nobody knowns...",
    width: 960,
    height: 640,
  },
  {
    title: "Dice Hero: The Unoriginal Story",
    cover:
      "https://img.itch.zone/aW1nLzExMjAxODAwLnBuZw==/300x240%23c/Ts2Uiv.png",
    id: 331081,
    url: "https://denaton.itch.io/dice-hero-the-unoriginal-story",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/7513955/index.html",
    description:
      "Use dice as energy to attack monsters and collect items and blessings in this exciting roguelike game.",
    width: 960,
    height: 650,
  },
  {
    title: "Dice Souls",
    cover: "https://img.itch.zone/aW1nLzk1MTU5MTkucG5n/300x240%23c/tgoBKw.png",
    id: 331864,
    url: "https://featurekreep.itch.io/dice-souls",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6229048/index.html",
    description: "A dice-based roguelike",
    width: 960,
    height: 540,
  },
  {
    title: "He loves you too!",
    cover:
      "https://img.itch.zone/aW1nLzk1MzYyMTUucG5n/300x240%23c/soF%2FZ8.png",
    id: 334604,
    url: "https://rocrac.itch.io/hlyt2",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6223915/index.html",
    description: "A short and creepy horror adventure with VHS-look.",
    width: 820,
    height: 620,
  },
  {
    title: "Flipjack",
    cover: "https://img.itch.zone/aW1nLzk1MTM1OTMucG5n/300x240%23c/fEPc8x.png",
    id: 335245,
    contributors: [
      {
        name: "Prifurin",
        url: "https://prifurin.itch.io",
      },
      {
        name: "Jon Topielski",
        url: "https://jontopielski.itch.io",
      },
    ],
    url: "https://prifurin.itch.io/flipjack",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6224491/Flipjack/index.html",
    description: "casino insanity",
    width: 960,
    height: 640,
  },
  {
    title: "Re.die",
    cover: "https://img.itch.zone/aW1nLzk0ODEwMTMuZ2lm/300x240%23cm/V5Scs9.gif",
    id: 332756,
    contributors: [
      {
        name: "Matthis Pillonel",
        url: "https://no0801.itch.io",
      },
      {
        name: "rhum",
        url: "https://rhum.itch.io",
      },
    ],
    url: "https://no0801.itch.io/redie",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6223831/WebGL_REDICE/index.html",
    description: "Turn-based rogue-like about dice rolling and Cyborgs",
    width: 640,
    height: 360,
  },
  {
    title: "Chancemancer",
    cover:
      "https://img.itch.zone/aW1nLzk1MTQ0NjcuZ2lm/300x240%23cm/%2FYIZM7.gif",
    id: 333275,
    url: "https://cakestorm.itch.io/chancemancer",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6171704/index.html",
    description: "A dice rolling,  dungeon crawling, adventure!",
    width: 960,
    height: 540,
  },
  {
    title: "Roll In Color",
    cover: "https://img.itch.zone/aW1nLzk0OTE5MDAuanBn/300x240%23c/PYFldp.jpg",
    id: 331337,
    url: "https://randomnes.itch.io/roll-in-color",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6224418/index.html",
    description:
      "A short puzzle game about rolling dices - Created for GMTK 2022 Jam (Solo)",
    width: 960,
    height: 780,
  },
  {
    title: "High Roller (GMTK 2022)",
    cover: "https://img.itch.zone/aW1nLzk0NzIwNDEucG5n/300x240%23c/g46UJ5.png",
    id: 328896,
    url: "https://blurofficial.itch.io/high-roller-gmtk-2022",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6153994/WebGL1.0/index.html",
    description: "Roll your way to victory!",
    width: 980,
    height: 652,
  },
  {
    title: "Contort. Ascend.",
    cover: "https://img.itch.zone/aW1nLzk0ODc5NTgucG5n/300x240%23c/hXxsKe.png",
    id: 330832,
    url: "https://gooseladdergames.itch.io/contort-ascend",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6166231/index.html",
    description: "Contort thyself and ascend",
    width: 960,
    height: 582,
  },
  {
    title: "The Blocky Diemen Inc. Team Bonding Dodgeball Bonanza",
    cover: "https://img.itch.zone/aW1nLzk0ODk5NjAuZ2lm/300x240%23cm/ugI3gX.gif",
    id: 331112,
    url: "https://anttihaavikko.itch.io/tbditbdb",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6166838-595190/index.html",
    description: "Just teams of dice playing Dodgeball",
    width: 920,
    height: 700,
  },
  {
    title: "All Bets Are Off",
    cover: "https://img.itch.zone/aW1nLzk1NDc2OTcuZ2lm/300x240%23cm/YdMpcQ.gif",
    id: 329188,
    contributors: [
      {
        name: "Sandtastegreat",
        url: "https://sandtastegreat.itch.io",
      },
      {
        name: "aislebsoupid",
        url: "https://aislebsoupid.itch.io",
      },
      {
        name: "DesyncDev",
        url: "https://desyncdev.itch.io",
      },
    ],
    url: "https://sandtastegreat.itch.io/all-bets-are-off",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6176850/All Bets Are Off (WebGL 2.0)/index.html",
    description: "Ya feelin' lucky today?",
    width: 960,
    height: 540,
  },
  {
    title: "PiP",
    cover: "https://img.itch.zone/aW1nLzk1Mzg1NDQucG5n/300x240%23c/f8xXx9.png",
    id: 332861,
    url: "https://mrld.itch.io/pip",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6182636/index.html",
    description:
      "PiP is a short puzzle game where you push and manipulate dice to solve puzzles. Made in 50 hours",
    width: 640,
    height: 360,
  },
  {
    title: "How to Dice Mushrooms",
    cover: "https://img.itch.zone/aW1nLzk1NDc5ODEuZ2lm/300x240%23cm/lbXshF.gif",
    id: 331612,
    contributors: [
      {
        name: "GuilloTeam",
        url: "https://guilloteam.itch.io",
      },
      {
        name: "Hajide",
        url: "https://hajide.itch.io",
      },
      {
        name: "Michael Assing",
        url: "https://michael-assing.itch.io",
      },
      {
        name: "JRevel",
        url: "https://jrevel.itch.io",
      },
      {
        name: "Delphin Casado",
        url: "https://delphin-casado.itch.io",
      },
    ],
    url: "https://guilloteam.itch.io/how-to-dice-mushrooms",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6268756/index.html",
    description: "A roguelite where you customize your dice to victory !",
    width: 640,
    height: 360,
  },
  {
    title: "A Tiny Chance",
    cover: "https://img.itch.zone/aW1nLzk1NzU0MDUucG5n/300x240%23c/Rmuz4e.png",
    id: 331713,
    contributors: [
      {
        name: "Those Awesome Guys",
        url: "https://thoseawesomeguys.itch.io",
      },
      {
        name: "summoningpixels",
        url: "https://summoningpixels.itch.io",
      },
      {
        name: "Arabong",
        url: "https://arabong.itch.io",
      },
    ],
    url: "https://thoseawesomeguys.itch.io/a-tiny-chance",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6228891/index.html",
    description: "When evolution is just a dice-throw away.",
    width: 960,
    height: 600,
  },
  {
    title: "Cube Compute",
    cover:
      "https://img.itch.zone/aW1nLzk0ODA2NjkucG5n/300x240%23c/%2Fx9S3S.png",
    id: 330337,
    contributors: [
      {
        name: "Marina TOO",
        url: "https://marina-too.itch.io",
      },
      {
        name: "KingRaj4826",
        url: "https://kingraj4826.itch.io",
      },
      {
        name: "vilanelle_00",
        url: "https://vilanelle-00.itch.io",
      },
    ],
    url: "https://marina-too.itch.io/cube-compute",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6326700/CubeComputeWeb/index.html",
    description: "Roll the dice to solve puzzles in Cube Compute!",
    width: 640,
    height: 360,
  },
  {
    title: "Roll The Path",
    cover: "https://img.itch.zone/aW1nLzk0ODk4NzIuanBn/300x240%23c/DagCCs.jpg",
    id: 335570,
    contributors: [
      {
        name: "troleoleo",
        url: "https://troleoleo.itch.io",
      },
      {
        name: "schouery",
        url: "https://schouery.itch.io",
      },
      {
        name: "Toffeevore",
        url: "https://toffeevore.itch.io",
      },
      {
        name: "flugudu",
        url: "https://flugudu.itch.io",
      },
    ],
    url: "https://troleoleo.itch.io/roll-the-path",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6184411/index.html",
    description: "Roll the dice, build the path and go out of the forest",
    width: 960,
    height: 600,
  },
  {
    title: "Cactus Block on adventure!",
    cover:
      "https://img.itch.zone/aW1nLzk1MzQ4MDkucG5n/300x240%23c/P%2Fy2GU.png",
    id: 335164,
    url: "https://sylvie.itch.io/cactus-block-on-adventure",
    game: "https://v6p9d9t4.ssl.hwcdn.net/html/6184553/riichi/index.html",
    description: "Let's adventure through 6 stages!",
    width: 960,
    height: 600,
  },
];
export default gameData;
export type { GameItem };
