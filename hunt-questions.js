const HUNT_QUESTION_GROUPS = [
  {
    id: "q=1",
    location: "People",
    questions: [
      {
        question: "Hoe beinvloeden structurele ongelijkheden in gezondheidszorgsystemen SDG 3?",
        hint: "Ongelijkheid zorgt ervoor dat sommige groepen slechtere zorg krijgen.",
        answers: [
          "A. Ze versnellen de toegang tot zorg voor iedereen",
          "B. Ze zorgen voor ongelijke gezondheidsuitkomsten tussen bevolkingsgroepen",
          "C. Ze verminderen automatisch de druk op ziekenhuizen",
          "D. Ze maken preventieve zorg altijd efficienter"
        ],
        correctAnswer: 1
      },
      {
        question: "In welke mate kan onderwijs (SDG 4) intergenerationele armoede doorbreken?",
        hint: "Onderwijs helpt sterk, maar niet los van de context.",
        answers: [
          "A. Altijd volledig en meteen",
          "B. Alleen in welvarende landen",
          "C. Sterk, maar afhankelijk van sociale en economische context",
          "D. Nauwelijks, want inkomen staat los van onderwijs"
        ],
        correctAnswer: 2
      },
      {
        question: "Welk risico kan opduiken bij het versterken van gendergelijkheid (SDG 5)?",
        hint: "Maatschappelijke verandering roept soms weerstand op.",
        answers: [
          "A. Overmatige economische groei",
          "B. Culturele weerstand en sociale backlash",
          "C. Minder participatie van vrouwen",
          "D. Lagere onderwijsniveaus"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom zijn basisvoorzieningen zo belangrijk voor sociale stabiliteit?",
        hint: "Toegang tot basisnoden verlaagt spanningen.",
        answers: [
          "A. Ze verhogen alleen de economische output",
          "B. Ze verminderen ongelijkheid en spanningen in gemeenschappen",
          "C. Ze hebben geen invloed op sociale relaties",
          "D. Ze vervangen politieke structuren"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "q=2",
    location: "Planet",
    questions: [
      {
        question: "Wat is een grote uitdaging bij klimaatneutraliteit (SDG 13)?",
        hint: "De spanning tussen groei en grenzen speelt hier mee.",
        answers: [
          "A. Overproductie van groene energie",
          "B. De balans tussen economische groei en ecologische grenzen",
          "C. Een volledig gebrek aan technologie",
          "D. Alleen een tekort aan internationale regels"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom mislukken sommige biodiversiteitsstrategien (SDG 15)?",
        hint: "Regels alleen zijn niet genoeg.",
        answers: [
          "A. Er is te veel financiering",
          "B. Handhaving blijft zwak en economische belangen wegen door",
          "C. Er is te veel publieke steun",
          "D. De wetgeving is altijd te streng"
        ],
        correctAnswer: 1
      },
      {
        question: "Welk ecologisch risico hangt samen met hernieuwbare energie?",
        hint: "Denk aan lithium, kobalt en andere grondstoffen.",
        answers: [
          "A. Er is geen enkel risico",
          "B. Overbevissing",
          "C. Intensieve grondstoffenwinning voor technologie",
          "D. Minder energie-efficiëntie"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een kernprobleem van de circulaire economie?",
        hint: "Ons huidige systeem is nog sterk lineair opgebouwd.",
        answers: [
          "A. Te lage productie",
          "B. Moeilijke integratie in lineaire industriesystemen",
          "C. Overconsumptie van duurzame goederen",
          "D. Gebrek aan consumenten"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "q=3",
    location: "Prosperity",
    questions: [
      {
        question: "Welk risico kan economische groei (SDG 8) met zich meebrengen?",
        hint: "Groei wordt niet altijd eerlijk verdeeld.",
        answers: [
          "A. Altijd dalende werkgelegenheid",
          "B. Een toename van ongelijkheid",
          "C. Minder innovatie",
          "D. Minder globalisering"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe beinvloedt technologie inclusieve welvaart?",
        hint: "Technologie heeft vaak een dubbel effect.",
        answers: [
          "A. Ze werkt ongelijkheid altijd volledig weg",
          "B. Ze versterkt ongelijkheid altijd",
          "C. Ze kan kansen creeren en tegelijk ongelijkheid vergroten",
          "D. Ze heeft geen echte impact"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een uitdaging voor duurzame steden (SDG 11)?",
        hint: "Steden moeten tegelijk leefbaar en betaalbaar blijven.",
        answers: [
          "A. Te weinig inwoners",
          "B. De balans tussen betaalbaarheid en leefbaarheid",
          "C. Overmatige ruimte",
          "D. Gebrek aan infrastructuur wereldwijd"
        ],
        correctAnswer: 1
      },
      {
        question: "Welke spanning zit vaak in SDG 9 rond industrie en innovatie?",
        hint: "Globale logica botst soms met lokale belangen.",
        answers: [
          "A. Lokale versus globale economische belangen",
          "B. Te weinig productie",
          "C. Overmatige regelgeving zonder effect",
          "D. Gebrek aan arbeid"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "q=4",
    location: "Peace",
    questions: [
      {
        question: "Wat is het effect van corruptie op SDG 16?",
        hint: "Corruptie tast vertrouwen en instellingen aan.",
        answers: [
          "A. Ze versnelt beleid",
          "B. Ze verzwakt instellingen en vertrouwen",
          "C. Ze verhoogt transparantie",
          "D. Ze verbetert rechtssystemen"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe kunnen sterke rechtsstelsels ongelijkheid beinvloeden?",
        hint: "Gelijke rechten maken een verschil.",
        answers: [
          "A. Ze vergroten ongelijkheid",
          "B. Ze hebben geen effect",
          "C. Ze kunnen ongelijkheid verminderen via gelijke rechten",
          "D. Ze beperken economische groei"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het effect van conflict op de SDG's?",
        hint: "Conflict raakt veel meer dan één domein.",
        answers: [
          "A. Geen impact",
          "B. Alleen een lokaal effect",
          "C. Het belemmert brede ontwikkeling en meerdere SDG's tegelijk",
          "D. Het verbetert samenwerking"
        ],
        correctAnswer: 2
      },
      {
        question: "Welke spanning zit in het debat rond digitale surveillance?",
        hint: "Het gaat om een bekende trade-off.",
        answers: [
          "A. Vrijheid versus veiligheid",
          "B. Technologie versus economie",
          "C. Privacy versus klimaat",
          "D. Werk versus innovatie"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "q=5",
    location: "Partnership",
    questions: [
      {
        question: "Wat is een grote uitdaging voor internationale samenwerking (SDG 17)?",
        hint: "Politieke belangen spelen altijd mee.",
        answers: [
          "A. Te weinig landen",
          "B. Geopolitieke spanningen",
          "C. Overmatige consensus",
          "D. Te veel middelen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een risico van publiek-private samenwerking?",
        hint: "Publieke en private belangen lopen niet altijd gelijk.",
        answers: [
          "A. Te weinig innovatie",
          "B. Onevenwichtige machtsverdeling en botsende belangen",
          "C. Gebrek aan financiering",
          "D. Te strikte regelgeving"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is essentieel bij kennisdeling?",
        hint: "Samenwerking werkt alleen als beide kanten winnen.",
        answers: [
          "A. Eenzijdige overdracht",
          "B. Wederzijds voordeel en respect",
          "C. Alleen focus op technologie",
          "D. Beperkte toegang"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is vaak een obstakel tussen globale en lokale doelen?",
        hint: "De praktijk loopt niet altijd gelijk met het beleid.",
        answers: [
          "A. Te veel lokale autonomie",
          "B. Moeilijke afstemming tussen beleid en uitvoering",
          "C. Gebrek aan internationale organisaties",
          "D. Te veel samenwerking"
        ],
        correctAnswer: 1
      }
    ]
  }
];

window.HUNT_QUESTIONS = HUNT_QUESTION_GROUPS.map((group) => {
  const question = group.questions[Math.floor(Math.random() * group.questions.length)];

  return {
    id: group.id,
    location: group.location,
    question: question.question,
    hint: question.hint,
    answers: question.answers,
    correctAnswer: question.correctAnswer,
    points: 20
  };
});
