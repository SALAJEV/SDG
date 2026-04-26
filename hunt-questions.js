const HUNT_QUESTION_GROUPS = [
  {
    id: "GH-01",
    location: "People",
    questions: [
      {
        question: "Hoe beïnvloeden structurele ongelijkheden binnen gezondheidszorgsystemen SDG 3?",
        hint: "Ongelijkheid zorgt dat sommige groepen slechtere zorg krijgen.",
        answers: [
          "A. Ze versnellen toegang tot zorg voor iedereen",
          "B. Ze creëren disproportionele gezondheidsuitkomsten tussen bevolkingsgroepen",
          "C. Ze verminderen de druk op ziekenhuizen",
          "D. Ze verhogen de efficiëntie van preventieve zorg"
        ],
        correctAnswer: 1
      },
      {
        question: "In welke mate doorbreekt onderwijs (SDG 4) intergenerationele armoede?",
        hint: "Onderwijs helpt, maar is geen magische oplossing.",
        answers: [
          "A. Altijd volledig en direct",
          "B. Enkel in ontwikkelde landen",
          "C. Sterk, maar afhankelijk van economische en sociale context",
          "D. Nauwelijks, omdat inkomen onafhankelijk is van onderwijs"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een risico bij het implementeren van gendergelijkheid (SDG 5)?",
        hint: "Veranderingen botsen soms met tradities.",
        answers: [
          "A. Overmatige economische groei",
          "B. Culturele weerstand en sociale backlash",
          "C. Verminderde participatie van vrouwen",
          "D. Afname van onderwijsniveaus"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom zijn basisvoorzieningen cruciaal voor sociale stabiliteit?",
        hint: "Basisvoorzieningen zorgen voor minder conflict.",
        answers: [
          "A. Ze verhogen enkel economische output",
          "B. Ze verminderen ongelijkheid en spanningen binnen gemeenschappen",
          "C. Ze hebben geen effect op sociale relaties",
          "D. Ze vervangen politieke structuren"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "GH-02",
    location: "Planet",
    questions: [
      {
        question: "Wat is de grootste uitdaging bij klimaatneutraliteit (SDG 13)?",
        hint: "Groei tegenover duurzaamheid is de kern.",
        answers: [
          "A. Overproductie van groene energie",
          "B. Balans tussen economische groei en ecologische grenzen",
          "C. Gebrek aan technologie",
          "D. Te weinig internationale regelgeving"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom falen sommige biodiversiteitsstrategieën (SDG 15)?",
        hint: "Regels bestaan, maar worden niet altijd nageleefd.",
        answers: [
          "A. Te veel financiering",
          "B. Onvoldoende handhaving en economische belangen",
          "C. Overmatige publieke steun",
          "D. Te strikte wetgeving"
        ],
        correctAnswer: 1
      },
      {
        question: "Welk ecologisch risico brengt hernieuwbare energie met zich mee?",
        hint: "Denk aan lithium, kobalt en andere grondstoffen.",
        answers: [
          "A. Geen enkel risico",
          "B. Overbevissing",
          "C. Intensieve grondstoffenwinning voor technologie",
          "D. Verminderde energie-efficiëntie"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een kernprobleem bij de circulaire economie?",
        hint: "Ons systeem is nog lineair opgebouwd.",
        answers: [
          "A. Te lage productie",
          "B. Moeilijke integratie in lineaire industriële systemen",
          "C. Overconsumptie van duurzame goederen",
          "D. Gebrek aan consumenten"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "GH-03",
    location: "Prosperity",
    questions: [
      {
        question: "Wat is een risico van economische groei (SDG 8)?",
        hint: "Groei verdeelt zich niet altijd eerlijk.",
        answers: [
          "A. Altijd dalende werkgelegenheid",
          "B. Toename van ongelijkheid",
          "C. Verminderde innovatie",
          "D. Minder globalisering"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe beïnvloedt technologie inclusieve welvaart?",
        hint: "Technologie heeft een dubbel effect.",
        answers: [
          "A. Ze elimineert ongelijkheid volledig",
          "B. Ze versterkt altijd ongelijkheid",
          "C. Ze kan zowel kansen creëren als ongelijkheid vergroten",
          "D. Ze heeft geen impact"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een uitdaging voor duurzame steden (SDG 11)?",
        hint: "Steden moeten én leefbaar én betaalbaar blijven.",
        answers: [
          "A. Te weinig inwoners",
          "B. Balans tussen betaalbaarheid en leefbaarheid",
          "C. Overmatige ruimte",
          "D. Gebrek aan infrastructuur wereldwijd"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een spanning binnen SDG 9 (industrie & innovatie)?",
        hint: "Globalisering kan botsen met lokale economie.",
        answers: [
          "A. Lokale vs globale economische belangen",
          "B. Te weinig productie",
          "C. Overmatige regelgeving zonder effect",
          "D. Gebrek aan arbeid"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "GH-04",
    location: "Peace",
    questions: [
      {
        question: "Wat is het effect van corruptie op SDG 16?",
        hint: "Corruptie ondermijnt vertrouwen en instellingen.",
        answers: [
          "A. Versnelt beleid",
          "B. Verzwakt instituties en vertrouwen",
          "C. Verhoogt transparantie",
          "D. Verbetert rechtssystemen"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe beïnvloeden sterke rechtsstelsels ongelijkheid?",
        hint: "Iedereen gelijk voor de wet.",
        answers: [
          "A. Ze vergroten ongelijkheid",
          "B. Ze hebben geen effect",
          "C. Ze kunnen ongelijkheid verminderen door gelijke rechten",
          "D. Ze beperken economische groei"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het effect van conflict op SDG's?",
        hint: "Conflict veroorzaakt een domino-effect.",
        answers: [
          "A. Geen impact",
          "B. Enkel lokaal effect",
          "C. Belemmert brede ontwikkeling en meerdere SDG's",
          "D. Verbetert samenwerking"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de spanning rond digitale surveillance?",
        hint: "Dit is een klassieke trade-off.",
        answers: [
          "A. Vrijheid vs veiligheid",
          "B. Technologie vs economie",
          "C. Privacy vs klimaat",
          "D. Werk vs innovatie"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "GH-05",
    location: "Partnership",
    questions: [
      {
        question: "Wat is een uitdaging voor internationale samenwerking (SDG 17)?",
        hint: "Politiek speelt altijd mee.",
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
        hint: "Bedrijfsbelangen en publieke belangen kunnen botsen.",
        answers: [
          "A. Te weinig innovatie",
          "B. Onevenwichtige machtsverdeling en belangen",
          "C. Gebrek aan financiering",
          "D. Te strikte regelgeving"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is essentieel bij kennisdeling?",
        hint: "Anders werkt samenwerking niet.",
        answers: [
          "A. Eenzijdige overdracht",
          "B. Wederzijds voordeel en respect",
          "C. Enkel technologische focus",
          "D. Beperkte toegang"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een obstakel bij globale vs lokale doelen?",
        hint: "Er is vaak een verschil tussen theorie en praktijk.",
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
