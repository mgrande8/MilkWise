export interface Fact {
  id: number;
  text: string;
  category: 'biology' | 'benefits' | 'history' | 'nutrition' | 'baby' | 'hormones' | 'surprising';
}

export const facts: Fact[] = [
  // Biology & Milk Composition
  {
    id: 1,
    text: "Your milk changes composition throughout the day — morning milk is different from evening milk.",
    category: 'biology'
  },
  {
    id: 2,
    text: "Your baby's saliva communicates with your breast to adjust milk composition in real-time.",
    category: 'biology'
  },
  {
    id: 3,
    text: "Colostrum is called 'liquid gold' because of its golden color and incredible concentration of nutrients and antibodies.",
    category: 'biology'
  },
  {
    id: 4,
    text: "Breast milk is about 87% water — that's why staying hydrated matters so much.",
    category: 'biology'
  },
  {
    id: 5,
    text: "Your milk contains over 200 different sugar molecules (oligosaccharides) that feed good gut bacteria.",
    category: 'biology'
  },
  {
    id: 6,
    text: "Evening breast milk contains more melatonin to help your baby sleep.",
    category: 'biology'
  },
  {
    id: 7,
    text: "When your baby is sick, your body creates custom antibodies that appear in your milk within hours.",
    category: 'biology'
  },
  {
    id: 8,
    text: "Your breast milk contains live stem cells that may help repair and regenerate your baby's tissues.",
    category: 'biology'
  },
  {
    id: 9,
    text: "The fat content of your milk changes during a single feeding — hindmilk is higher in fat than foremilk.",
    category: 'biology'
  },
  {
    id: 10,
    text: "Your breast milk contains cannabinoids (similar to those in cannabis) that stimulate your baby's appetite.",
    category: 'biology'
  },
  {
    id: 11,
    text: "Breast milk is a living fluid — it contains live white blood cells that fight infection.",
    category: 'biology'
  },
  {
    id: 12,
    text: "Your milk composition changes as your baby ages, perfectly matching their developmental needs.",
    category: 'biology'
  },

  // Benefits
  {
    id: 13,
    text: "Breastfeeding burns 300-500 calories per day — your body is working hard even when you're resting.",
    category: 'benefits'
  },
  {
    id: 14,
    text: "Breastfeeding reduces your risk of breast cancer, ovarian cancer, and type 2 diabetes.",
    category: 'benefits'
  },
  {
    id: 15,
    text: "The oxytocin released during breastfeeding helps your uterus shrink back to pre-pregnancy size faster.",
    category: 'benefits'
  },
  {
    id: 16,
    text: "Breastfed babies have a lower risk of SIDS (Sudden Infant Death Syndrome).",
    category: 'benefits'
  },
  {
    id: 17,
    text: "Breastfeeding can delay the return of your menstrual cycle, providing natural (though not foolproof) birth control.",
    category: 'benefits'
  },
  {
    id: 18,
    text: "Children who were breastfed have a lower risk of childhood obesity.",
    category: 'benefits'
  },
  {
    id: 19,
    text: "Breastfeeding is associated with higher IQ scores in children — even when controlling for other factors.",
    category: 'benefits'
  },
  {
    id: 20,
    text: "The longer you breastfeed, the more your breast cancer risk decreases.",
    category: 'benefits'
  },

  // Hormones
  {
    id: 21,
    text: "Prolactin, your main milk-making hormone, also promotes feelings of calm and bonding.",
    category: 'hormones'
  },
  {
    id: 22,
    text: "The same oxytocin that triggers your letdown is also called the 'love hormone' — it floods both you and baby during nursing.",
    category: 'hormones'
  },
  {
    id: 23,
    text: "Stress hormone cortisol can inhibit milk production — that's why relaxation helps with letdown.",
    category: 'hormones'
  },
  {
    id: 24,
    text: "Your prolactin levels are highest between 1am and 5am — that's why night feeds are important for supply.",
    category: 'hormones'
  },
  {
    id: 25,
    text: "The intense thirst you feel when nursing is triggered by oxytocin — it's your body telling you to hydrate.",
    category: 'hormones'
  },
  {
    id: 26,
    text: "Dopamine briefly drops right before letdown — this is what causes D-MER in some mothers.",
    category: 'hormones'
  },

  // Baby Facts
  {
    id: 27,
    text: "Newborns can smell their mother's breast milk and will turn toward it.",
    category: 'baby'
  },
  {
    id: 28,
    text: "A baby's stomach on day 1 is the size of a cherry — about 5-7ml. Colostrum is perfectly portioned.",
    category: 'baby'
  },
  {
    id: 29,
    text: "Babies are born with a natural rooting reflex — they instinctively search for the breast.",
    category: 'baby'
  },
  {
    id: 30,
    text: "Newborns can see clearly at about 8-12 inches — exactly the distance to your face while nursing.",
    category: 'baby'
  },
  {
    id: 31,
    text: "Skin-to-skin contact with mom stabilizes baby's heart rate, breathing, and blood sugar.",
    category: 'baby'
  },
  {
    id: 32,
    text: "Your baby recognizes your heartbeat from the womb — that's why being close calms them.",
    category: 'baby'
  },
  {
    id: 33,
    text: "Babies typically double their birth weight by 4-6 months, fueled entirely by milk.",
    category: 'baby'
  },
  {
    id: 34,
    text: "A baby's gut is essentially sterile at birth — breast milk provides the bacteria to colonize it.",
    category: 'baby'
  },

  // Surprising Facts
  {
    id: 35,
    text: "Your breasts can detect a one-degree change in your baby's body temperature and adjust accordingly.",
    category: 'surprising'
  },
  {
    id: 36,
    text: "Humans are the only mammals who face difficulties with breastfeeding — because we've lost the cultural knowledge.",
    category: 'surprising'
  },
  {
    id: 37,
    text: "Montgomery glands (the bumps on your areola) secrete oils that smell like amniotic fluid, guiding your newborn to the breast.",
    category: 'surprising'
  },
  {
    id: 38,
    text: "You can produce milk for as long as there's demand — some mothers nurse for years.",
    category: 'surprising'
  },
  {
    id: 39,
    text: "Looking at a photo of your baby or smelling their clothes can trigger letdown — even when they're not there.",
    category: 'surprising'
  },
  {
    id: 40,
    text: "The average breastfeeding mother produces about 25 ounces (750ml) of milk per day by one month postpartum.",
    category: 'surprising'
  },
  {
    id: 41,
    text: "Breast milk can be used topically to treat diaper rash, baby acne, and minor eye infections.",
    category: 'surprising'
  },
  {
    id: 42,
    text: "Your milk letdown can be triggered by hearing any baby cry — not just your own.",
    category: 'surprising'
  },
  {
    id: 43,
    text: "Pumped breast milk separates into layers when stored — this is normal and it mixes back together with gentle swirling.",
    category: 'surprising'
  },
  {
    id: 44,
    text: "Your right and left breasts often produce different amounts of milk — having a 'slacker boob' is common.",
    category: 'surprising'
  },

  // History
  {
    id: 45,
    text: "Wet nurses (women who breastfed other women's babies) were employed throughout human history up until the 20th century.",
    category: 'history'
  },
  {
    id: 46,
    text: "The first commercial infant formula was developed in 1865 — before that, breastfeeding was the only option.",
    category: 'history'
  },
  {
    id: 47,
    text: "In many cultures throughout history, breastfeeding for 2-4 years was the norm.",
    category: 'history'
  },
  {
    id: 48,
    text: "The World Health Organization recommends breastfeeding for at least 2 years.",
    category: 'history'
  },

  // Nutrition
  {
    id: 49,
    text: "You need about 500 extra calories per day while exclusively breastfeeding — that's not a lot more than usual.",
    category: 'nutrition'
  },
  {
    id: 50,
    text: "Most medications are safe while breastfeeding — very little actually passes into milk.",
    category: 'nutrition'
  },
  {
    id: 51,
    text: "Your body will prioritize your baby's nutrition over yours — that's why maternal nutrition matters.",
    category: 'nutrition'
  },
  {
    id: 52,
    text: "The flavor of your breast milk changes based on what you eat — this helps your baby accept new foods later.",
    category: 'nutrition'
  },
  {
    id: 53,
    text: "There's no evidence that eating spicy or gassy foods affects your baby through breast milk.",
    category: 'nutrition'
  },
  {
    id: 54,
    text: "Alcohol clears from breast milk at the same rate as from blood — 'pump and dump' isn't necessary after moderate drinking.",
    category: 'nutrition'
  },

  // Additional facts to reach 55+
  {
    id: 55,
    text: "Breast milk contains more than 1,000 different proteins — and we're still discovering new ones.",
    category: 'biology'
  },
  {
    id: 56,
    text: "The act of breastfeeding helps develop your baby's jaw and facial muscles.",
    category: 'baby'
  },
  {
    id: 57,
    text: "Your breast milk contains lactoferrin, a protein that helps baby absorb iron and fights bacteria.",
    category: 'biology'
  },
  {
    id: 58,
    text: "Breastfed babies are less likely to need orthodontics later in life.",
    category: 'benefits'
  },
  {
    id: 59,
    text: "Each of your breasts operates independently — they can have different supplies and letdown patterns.",
    category: 'surprising'
  },
  {
    id: 60,
    text: "The World Health Organization estimates that breastfeeding could prevent 823,000 child deaths annually.",
    category: 'benefits'
  }
];

// Get random fact
export function getRandomFact(): Fact {
  return facts[Math.floor(Math.random() * facts.length)];
}

// Get daily fact (based on date)
export function getDailyFact(): Fact {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  return facts[dayOfYear % facts.length];
}

// Get facts by category
export function getFactsByCategory(category: Fact['category']): Fact[] {
  return facts.filter(f => f.category === category);
}
