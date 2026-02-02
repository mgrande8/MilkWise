export interface Fact {
  id: number;
  text: string;
  source: string;
  category: 'milk-composition' | 'hormones' | 'supply' | 'baby-benefits' | 'mother-benefits' | 'science' | 'nutrition' | 'pumping' | 'global';
}

export const facts: Fact[] = [
  // MILK COMPOSITION
  {
    id: 1,
    text: "Your body reads the time of day and adjusts your milk accordingly — energizing cortisol in the morning, sleep-promoting melatonin at night. You are your baby's personal circadian clock.",
    source: "Italianer et al., Nutrients, 2020",
    category: 'milk-composition'
  },
  {
    id: 2,
    text: "Your body creates over 200 unique sugar molecules in your milk — a complexity no laboratory has ever replicated. What you make is irreplaceable.",
    source: "Bode, Glycobiology, 2012",
    category: 'milk-composition'
  },
  {
    id: 3,
    text: "As your baby feeds, your milk gets richer — the fat content doubles and even triples by the end of a session. Your body paces the perfect meal every single time.",
    source: "Kent et al., Pediatrics, 2006",
    category: 'milk-composition'
  },
  {
    id: 4,
    text: "Your milk is alive. Each milliliter carries up to one million white blood cells — more than blood itself. You are delivering a living shield to your baby with every feed.",
    source: "Hassiotou et al., Clinical & Translational Immunology, 2013",
    category: 'milk-composition'
  },
  {
    id: 5,
    text: "When your baby gets sick, their saliva signals your body through the breast, and you create custom antibodies within hours. Your body listens, adapts, and protects — automatically.",
    source: "Riskin et al., Pediatric Research, 2012",
    category: 'milk-composition'
  },
  {
    id: 6,
    text: "Your very first milk — colostrum — is so perfectly concentrated that your newborn only needs a teaspoon or two per feeding. Small in volume, extraordinary in power.",
    source: "WHO/UNICEF, 2009",
    category: 'milk-composition'
  },
  {
    id: 7,
    text: "Your milk contains stem cells that can cross into your baby's body and become functional cells in their organs. You are literally helping build your baby from the inside out.",
    source: "Hassiotou et al., Stem Cells, 2012",
    category: 'milk-composition'
  },
  {
    id: 8,
    text: "Your body produces natural cannabinoids in your milk that gently stimulate your baby's hunger and suckling instinct. Nature built the perfect appetite system right into you.",
    source: "Fride et al., European Journal of Pharmacology, 2001",
    category: 'milk-composition'
  },
  {
    id: 9,
    text: "Your milk is 87% water — every sip you take helps fuel this incredible process. Staying hydrated is one of the most powerful things you can do for yourself and your baby.",
    source: "Neville et al., Handbook of Milk Composition, 1995",
    category: 'milk-composition'
  },
  {
    id: 10,
    text: "Your body produces over 1,000 unique proteins in your milk — and researchers are still discovering new ones. Science can study what you make, but it cannot fully recreate it.",
    source: "Lonnerdal, American Journal of Clinical Nutrition, 2016",
    category: 'milk-composition'
  },
  {
    id: 11,
    text: "You deliver over 700 species of beneficial bacteria in your milk, seeding your baby's gut with the microbiome they'll carry for life. You are their first ecosystem.",
    source: "Hunt et al., PLoS ONE, 2011",
    category: 'milk-composition'
  },
  {
    id: 12,
    text: "Your body scans the environment around you and builds antibodies against local threats, then delivers them straight to your baby. You are a walking, breathing immune system for two.",
    source: "Brandtzaeg, Mucosal Immunology, 2010",
    category: 'milk-composition'
  },

  // HORMONES & PHYSIOLOGY
  {
    id: 13,
    text: "Every time you nurse, your body releases oxytocin — the love hormone — which helps your uterus heal up to six weeks faster. Feeding your baby is healing you at the same time.",
    source: "Uvnäs-Moberg, Psychoneuroendocrinology, 1998",
    category: 'hormones'
  },
  {
    id: 14,
    text: "Your milk-making hormone, prolactin, peaks during the quiet of night. Those midnight feeds aren't just nourishing your baby — they're building your long-term supply. Every one counts.",
    source: "Cregan et al., British Journal of Nutrition, 2002",
    category: 'hormones'
  },
  {
    id: 15,
    text: "Stress can temporarily pause your letdown reflex — that's your body's way of protecting you. A few deep breaths can bring it back. Trust your body; it's waiting for the green light.",
    source: "Newton & Newton, Journal of Pediatrics, 1948",
    category: 'hormones'
  },
  {
    id: 16,
    text: "Each of your breasts responds independently to your baby's needs. If your baby nurses more on one side, that breast rises to the occasion and produces more. Your body is always paying attention.",
    source: "Daly et al., Experimental Physiology, 1996",
    category: 'hormones'
  },
  {
    id: 17,
    text: "When you hold your baby skin-to-skin, over 20 hormones activate at once — supporting your milk, deepening your bond, and calming you both. Your touch is medicine.",
    source: "Bigelow et al., Early Human Development, 2012",
    category: 'hormones'
  },
  {
    id: 18,
    text: "Prolactin doesn't just make milk — it wraps you in calm. That drowsy, peaceful feeling while nursing? That's your body thanking you for nurturing your baby.",
    source: "Groër, Biological Research for Nursing, 2005",
    category: 'hormones'
  },
  {
    id: 19,
    text: "Your body secretes a scent from tiny glands on your nipples that smells like the amniotic fluid your baby already knows. You are their compass — they will always find their way to you.",
    source: "Doucet et al., PLoS ONE, 2009",
    category: 'hormones'
  },
  {
    id: 20,
    text: "Between 2 and 5 AM, your prolactin surges to its highest levels. Those tired night feeds are your body's most productive building hours. You are laying the foundation while the world sleeps.",
    source: "Cregan et al., British Journal of Nutrition, 2002",
    category: 'hormones'
  },
  {
    id: 21,
    text: "If you feel a wave of sadness at letdown, you may be experiencing D-MER — a real, hormonal response caused by a dopamine drop, not your emotions. It's not your fault, and it can get better.",
    source: "Heise & Wiessinger, International Breastfeeding Journal, 2011",
    category: 'hormones'
  },
  {
    id: 22,
    text: "Breastfeeding floods your body with the same oxytocin as falling in love. Your biology literally rewards you for this act of nurturing. You deserve to feel that warmth.",
    source: "Uvnäs-Moberg, The Oxytocin Factor, 2003",
    category: 'hormones'
  },
  {
    id: 23,
    text: "Post-weaning sadness is real and hormonal — caused by the sudden drop in prolactin and oxytocin. Gradual weaning can soften the transition. Be gentle with yourself through every stage.",
    source: "Gallup et al., Evolutionary Psychology, 2010",
    category: 'hormones'
  },

  // SUPPLY & DEMAND
  {
    id: 24,
    text: "Your body follows your baby's lead — the more milk that's removed, the more you produce. Frequency matters more than duration. Every feed is a message to your body: 'Make more.'",
    source: "Kent, Journal of Midwifery & Women's Health, 2007",
    category: 'supply'
  },
  {
    id: 25,
    text: "Your breasts are never truly empty — they produce milk continuously, like a flowing river. There is always something there for your baby. Trust the flow.",
    source: "Daly & Hartmann, Experimental Physiology, 1995",
    category: 'supply'
  },
  {
    id: 26,
    text: "Most mothers produce 25 to 35 ounces of milk every day, regardless of breast size. Your body was made for this — size has nothing to do with your power.",
    source: "Kent et al., Pediatrics, 2006",
    category: 'supply'
  },
  {
    id: 27,
    text: "Worrying about low supply is the number one reason mothers stop — yet true insufficient supply affects only 1 to 5 percent of women. The odds are deeply in your favor.",
    source: "Neifert, Pediatric Clinics of North America, 2001",
    category: 'supply'
  },
  {
    id: 28,
    text: "When your baby cluster feeds — nursing in frequent, hungry bursts — they're sending your body a growth signal. It feels intense, but it means your system is working exactly as designed.",
    source: "Kent et al., Pediatrics, 2006",
    category: 'supply'
  },

  // BABY BENEFITS
  {
    id: 29,
    text: "Your milk reduces your baby's risk of SIDS by 36 percent. With every feed, you are wrapping your child in an invisible layer of protection that science can measure but never fully explain.",
    source: "Thompson et al., Pediatrics, 2017",
    category: 'baby-benefits'
  },
  {
    id: 30,
    text: "Each month you breastfeed lowers your child's risk of obesity by 4 percent. You are shaping their health trajectory one quiet feeding at a time.",
    source: "Harder et al., American Journal of Epidemiology, 2005",
    category: 'baby-benefits'
  },
  {
    id: 31,
    text: "Studies show breastfed children score 3 to 7 points higher on IQ tests. Your milk nourishes more than their body — it fuels the brain they'll think with for a lifetime.",
    source: "Horta et al., Acta Paediatrica, 2015",
    category: 'baby-benefits'
  },
  {
    id: 32,
    text: "Your milk cuts your baby's risk of ear infections in half during the first year. That's your antibodies standing guard, day and night, without you lifting a finger.",
    source: "Bowatte et al., Acta Paediatrica, 2015",
    category: 'baby-benefits'
  },
  {
    id: 33,
    text: "The antibodies in your milk coat your baby's entire digestive tract like armor, and they keep protecting for up to six months after weaning. Your gift keeps giving long after the last feed.",
    source: "Hanson, Annals of Allergy, Asthma & Immunology, 1998",
    category: 'baby-benefits'
  },
  {
    id: 34,
    text: "The physical act of nursing shapes your baby's jaw and palate, reducing the chance of orthodontic issues later. You're building their smile while you feed them.",
    source: "Peres et al., Lancet, 2015",
    category: 'baby-benefits'
  },

  // MOTHER BENEFITS
  {
    id: 35,
    text: "Every 12 months of breastfeeding reduces your breast cancer risk by 4.3 percent — and the effect builds across children. Your body remembers every feed and rewards you for it.",
    source: "Collaborative Group on Hormonal Factors in Breast Cancer, Lancet, 2002",
    category: 'mother-benefits'
  },
  {
    id: 36,
    text: "Women who breastfeed have a 25 percent lower risk of ovarian cancer. While you nourish your baby, your body is quietly protecting your future self.",
    source: "Luan et al., American Journal of Obstetrics and Gynecology, 2013",
    category: 'mother-benefits'
  },
  {
    id: 37,
    text: "Your body burns 300 to 500 extra calories a day while making milk — the equivalent of a long run, accomplished from the comfort of your nursing chair. Your body is working hard, even when you're still.",
    source: "Dewey, American Journal of Clinical Nutrition, 1997",
    category: 'mother-benefits'
  },
  {
    id: 38,
    text: "Breastfeeding releases oxytocin that steadies your mood and lowers the risk of postpartum depression. Every feed is a small act of healing for your mind as well as your baby's body.",
    source: "Figueiredo et al., Journal of Affective Disorders, 2014",
    category: 'mother-benefits'
  },
  {
    id: 39,
    text: "Breastfeeding for 12 or more months can cut your risk of Type 2 diabetes by up to 50 percent. This journey is an investment in your own health that pays dividends for decades.",
    source: "Stuebe et al., JAMA Internal Medicine, 2005",
    category: 'mother-benefits'
  },
  {
    id: 40,
    text: "Each year of breastfeeding reduces your risk of heart disease by 9 percent. You are strengthening your own heart every time you feed your baby. That is love made visible in data.",
    source: "Peters et al., Journal of the American Heart Association, 2017",
    category: 'mother-benefits'
  },

  // INTERESTING SCIENCE
  {
    id: 41,
    text: "The flavors of your meals travel into your milk, giving your baby a preview of your family's cuisine before they ever taste solid food. You are their very first chef.",
    source: "Mennella et al., Pediatrics, 2001",
    category: 'science'
  },
  {
    id: 42,
    text: "Your baby can distinguish your milk from any other mother's by scent alone. Among all the mothers in the world, your baby knows yours. That bond is chemical, primal, and unbreakable.",
    source: "Marlier & Schaal, Child Development, 2005",
    category: 'science'
  },
  {
    id: 43,
    text: "Your let-down reflex can be triggered by hearing a baby cry, seeing a photo of your little one, or simply thinking about nursing. Your body is always ready, always connected.",
    source: "McNeilly et al., British Medical Journal, 1983",
    category: 'science'
  },
  {
    id: 44,
    text: "Your milk contains natural pain-relieving compounds called beta-endorphins that comfort your baby during illness or teething. You carry your own pharmacy, and the prescription is always perfect.",
    source: "Zanardo et al., Pediatric Research, 2001",
    category: 'science'
  },
  {
    id: 45,
    text: "Newborns can see clearly at exactly 8 to 12 inches — the precise distance to your face while nursing. Nature designed this moment so your baby can gaze at the person who matters most.",
    source: "Slater et al., Developmental Science, 1998",
    category: 'science'
  },
  {
    id: 46,
    text: "Your breasts can detect a single degree of change in your baby's temperature and adjust accordingly. Your body is a thermostat, a pharmacy, and a shield — all in one.",
    source: "Ludington-Hoe et al., Neonatal Network, 2006",
    category: 'science'
  },
  {
    id: 47,
    text: "Looking at photos or videos of your baby while pumping can measurably increase your output by triggering oxytocin. Even when you're apart, your love has a physical effect.",
    source: "Keith et al., Breastfeeding Medicine, 2012",
    category: 'science'
  },

  // NUTRITION
  {
    id: 48,
    text: "Your body needs about 500 extra calories a day while breastfeeding — more than during pregnancy itself. Feeding yourself well is not indulgence; it is fuel for something extraordinary.",
    source: "Institute of Medicine, Dietary Reference Intakes, 2005",
    category: 'nutrition'
  },
  {
    id: 49,
    text: "While oats and fenugreek get all the credit, the most powerful galactagogue is already inside you: frequent nursing. Your baby at the breast is the best supply-builder science has ever found.",
    source: "Mortel & Mehta, Breastfeeding Medicine, 2013",
    category: 'nutrition'
  },
  {
    id: 50,
    text: "Alcohol clears from your milk at the same rate as your blood — about two hours per drink. You don't need to pump and dump; you just need to wait. Knowledge replaces guilt.",
    source: "Ho et al., British Journal of Clinical Pharmacology, 2001",
    category: 'nutrition'
  },
  {
    id: 51,
    text: "Most babies tolerate moderate caffeine in your milk with no issues — 200 to 300 mg a day is considered safe. Go ahead and enjoy that cup of coffee. You've earned it.",
    source: "Berlin et al., Pediatric Research, 1984",
    category: 'nutrition'
  },

  // PUMPING & STORAGE
  {
    id: 52,
    text: "Your expressed milk stays safe at room temperature for 4 hours, refrigerated for 4 days, and frozen for up to 12 months. The liquid gold you make today can nourish your baby months from now.",
    source: "CDC Breastfeeding Guidelines, 2022",
    category: 'pumping'
  },
  {
    id: 53,
    text: "Your own hands can be as effective as any pump — some mothers get even more milk with hand expression. Your body responds to your own touch in ways machines cannot replicate.",
    source: "Morton et al., Journal of Perinatology, 2009",
    category: 'pumping'
  },

  // GLOBAL PERSPECTIVE
  {
    id: 54,
    text: "The global average weaning age is 2 to 4 years, and the WHO recommends breastfeeding for at least two. Wherever you are on this timeline, you are part of an ancient, worldwide tradition.",
    source: "WHO Infant and Young Child Feeding Guidelines, 2021",
    category: 'global'
  },
  {
    id: 55,
    text: "If most families breastfed exclusively for six months, the US alone would save $13 billion in healthcare costs each year. What you do at home ripples outward in ways you may never see — but the world feels it.",
    source: "Bartick & Reinhold, Pediatrics, 2010",
    category: 'global'
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
