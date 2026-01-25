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
    text: "Your milk changes composition throughout the day — morning milk has more cortisol to energize baby, while evening milk contains more melatonin to promote sleep.",
    source: "Italianer et al., Nutrients, 2020",
    category: 'milk-composition'
  },
  {
    id: 2,
    text: "Breast milk contains over 200 different sugar molecules (oligosaccharides) that feed beneficial gut bacteria, not the baby directly.",
    source: "Bode, Glycobiology, 2012",
    category: 'milk-composition'
  },
  {
    id: 3,
    text: "Your milk's fat content increases as baby feeds — the 'hindmilk' at the end of a feed has 2-3 times more fat than the 'foremilk' at the start.",
    source: "Kent et al., Pediatrics, 2006",
    category: 'milk-composition'
  },
  {
    id: 4,
    text: "Breast milk is a living fluid containing up to 1 million white blood cells per milliliter — more than blood itself.",
    source: "Hassiotou et al., Clinical & Translational Immunology, 2013",
    category: 'milk-composition'
  },
  {
    id: 5,
    text: "When your baby is sick, your body detects pathogens through saliva backwash during nursing and creates targeted antibodies within hours.",
    source: "Riskin et al., Pediatric Research, 2012",
    category: 'milk-composition'
  },
  {
    id: 6,
    text: "Colostrum, your first milk, is so nutrient-dense that babies only need 1-2 teaspoons per feeding in the first days.",
    source: "WHO/UNICEF, 2009",
    category: 'milk-composition'
  },
  {
    id: 7,
    text: "Your milk contains stem cells that can cross into baby's bloodstream and develop into functional cells in their organs.",
    source: "Hassiotou et al., Stem Cells, 2012",
    category: 'milk-composition'
  },
  {
    id: 8,
    text: "Breast milk contains cannabinoids (endocannabinoids) that stimulate baby's appetite and suckling reflex.",
    source: "Fride et al., European Journal of Pharmacology, 2001",
    category: 'milk-composition'
  },
  {
    id: 9,
    text: "Breast milk is 87% water — staying hydrated is one of the most important things you can do to support milk production.",
    source: "Neville et al., Handbook of Milk Composition, 1995",
    category: 'milk-composition'
  },
  {
    id: 10,
    text: "Breast milk contains more than 1,000 different proteins — and scientists are still discovering new ones.",
    source: "Lonnerdal, American Journal of Clinical Nutrition, 2016",
    category: 'milk-composition'
  },
  {
    id: 11,
    text: "The bacteria in breast milk help establish baby's gut microbiome — there are 700+ species of bacteria in human milk.",
    source: "Hunt et al., PLoS ONE, 2011",
    category: 'milk-composition'
  },
  {
    id: 12,
    text: "Breast milk adjusts to your local environment — if you're exposed to pathogens in your area, your milk develops antibodies to protect baby.",
    source: "Brandtzaeg, Mucosal Immunology, 2010",
    category: 'milk-composition'
  },

  // HORMONES & PHYSIOLOGY
  {
    id: 13,
    text: "Oxytocin, the 'love hormone' released during breastfeeding, helps your uterus contract back to pre-pregnancy size up to 6 weeks faster.",
    source: "Uvnäs-Moberg, Psychoneuroendocrinology, 1998",
    category: 'hormones'
  },
  {
    id: 14,
    text: "Prolactin, the milk-making hormone, peaks during night feeds — which is why nighttime nursing is crucial for establishing supply.",
    source: "Cregan et al., British Journal of Nutrition, 2002",
    category: 'hormones'
  },
  {
    id: 15,
    text: "Stress hormones like cortisol and adrenaline can temporarily block the oxytocin reflex that releases milk (letdown).",
    source: "Newton & Newton, Journal of Pediatrics, 1948",
    category: 'hormones'
  },
  {
    id: 16,
    text: "Your breasts can produce milk independently — if baby nurses more on one side, that breast will produce more milk.",
    source: "Daly et al., Experimental Physiology, 1996",
    category: 'hormones'
  },
  {
    id: 17,
    text: "Skin-to-skin contact triggers 20+ hormones that support breastfeeding, bonding, and stress reduction in both mom and baby.",
    source: "Bigelow et al., Early Human Development, 2012",
    category: 'hormones'
  },
  {
    id: 18,
    text: "The hormone prolactin has a calming, anti-anxiety effect — which is why many mothers feel relaxed or sleepy while nursing.",
    source: "Groër, Biological Research for Nursing, 2005",
    category: 'hormones'
  },
  {
    id: 19,
    text: "Your nipples have Montgomery glands that secrete an oily substance with a scent similar to amniotic fluid, helping baby find the breast.",
    source: "Doucet et al., PLoS ONE, 2009",
    category: 'hormones'
  },
  {
    id: 20,
    text: "Night feeds are especially important because prolactin levels are highest between 2-5 AM, helping establish long-term supply.",
    source: "Cregan et al., British Journal of Nutrition, 2002",
    category: 'hormones'
  },
  {
    id: 21,
    text: "D-MER (Dysphoric Milk Ejection Reflex) affects 9-14% of breastfeeding mothers — it's caused by a sudden dopamine drop, not psychology.",
    source: "Heise & Wiessinger, International Breastfeeding Journal, 2011",
    category: 'hormones'
  },
  {
    id: 22,
    text: "Breastfeeding releases the same oxytocin as an orgasm or falling in love — your body rewards you for nurturing your baby.",
    source: "Uvnäs-Moberg, The Oxytocin Factor, 2003",
    category: 'hormones'
  },
  {
    id: 23,
    text: "Post-weaning depression is a real phenomenon caused by sudden drops in prolactin and oxytocin — gradual weaning helps prevent it.",
    source: "Gallup et al., Evolutionary Psychology, 2010",
    category: 'hormones'
  },

  // SUPPLY & DEMAND
  {
    id: 24,
    text: "Breast milk production works on supply and demand — the more milk removed, the more your body makes. Frequency matters more than duration.",
    source: "Kent, Journal of Midwifery & Women's Health, 2007",
    category: 'supply'
  },
  {
    id: 25,
    text: "Your breasts are never truly 'empty' — they continuously produce milk, like a river, not a reservoir.",
    source: "Daly & Hartmann, Experimental Physiology, 1995",
    category: 'supply'
  },
  {
    id: 26,
    text: "Most mothers produce 25-35 ounces of milk per day, regardless of breast size. Storage capacity varies, but daily production is similar.",
    source: "Kent et al., Pediatrics, 2006",
    category: 'supply'
  },
  {
    id: 27,
    text: "Perceived low milk supply is the #1 reason mothers stop breastfeeding, yet true insufficient supply affects only 1-5% of women.",
    source: "Neifert, Pediatric Clinics of North America, 2001",
    category: 'supply'
  },
  {
    id: 28,
    text: "Cluster feeding — when baby feeds frequently in short bursts — is normal and signals your body to increase supply for growth spurts.",
    source: "Kent et al., Pediatrics, 2006",
    category: 'supply'
  },

  // BABY BENEFITS
  {
    id: 29,
    text: "Breastfed babies have a 36% lower risk of SIDS (Sudden Infant Death Syndrome), with longer breastfeeding duration providing more protection.",
    source: "Thompson et al., Pediatrics, 2017",
    category: 'baby-benefits'
  },
  {
    id: 30,
    text: "Each month of breastfeeding reduces a child's risk of obesity by 4%.",
    source: "Harder et al., American Journal of Epidemiology, 2005",
    category: 'baby-benefits'
  },
  {
    id: 31,
    text: "Breastfed children score 3-7 points higher on IQ tests on average, with the effect stronger in premature infants.",
    source: "Horta et al., Acta Paediatrica, 2015",
    category: 'baby-benefits'
  },
  {
    id: 32,
    text: "Breast milk provides protection against ear infections, reducing otitis media by 50% in the first year.",
    source: "Bowatte et al., Acta Paediatrica, 2015",
    category: 'baby-benefits'
  },
  {
    id: 33,
    text: "The antibodies in breast milk coat baby's digestive tract, providing a protective barrier against infections for up to 6 months after weaning.",
    source: "Hanson, Annals of Allergy, Asthma & Immunology, 1998",
    category: 'baby-benefits'
  },
  {
    id: 34,
    text: "The act of breastfeeding stimulates baby's jaw development, reducing the risk of orthodontic problems later in childhood.",
    source: "Peres et al., Lancet, 2015",
    category: 'baby-benefits'
  },

  // MOTHER BENEFITS
  {
    id: 35,
    text: "Breastfeeding reduces your risk of breast cancer by 4.3% for every 12 months of nursing — the effect is cumulative across children.",
    source: "Collaborative Group on Hormonal Factors in Breast Cancer, Lancet, 2002",
    category: 'mother-benefits'
  },
  {
    id: 36,
    text: "Women who breastfeed have a 25% lower risk of developing ovarian cancer.",
    source: "Luan et al., American Journal of Obstetrics and Gynecology, 2013",
    category: 'mother-benefits'
  },
  {
    id: 37,
    text: "Breastfeeding burns 300-500 extra calories per day — equivalent to running 3-5 miles.",
    source: "Dewey, American Journal of Clinical Nutrition, 1997",
    category: 'mother-benefits'
  },
  {
    id: 38,
    text: "Mothers who breastfeed have lower rates of postpartum depression, with oxytocin release providing mood-stabilizing effects.",
    source: "Figueiredo et al., Journal of Affective Disorders, 2014",
    category: 'mother-benefits'
  },
  {
    id: 39,
    text: "Breastfeeding for 12+ months reduces your lifetime risk of Type 2 diabetes by up to 50%.",
    source: "Stuebe et al., JAMA Internal Medicine, 2005",
    category: 'mother-benefits'
  },
  {
    id: 40,
    text: "Each year of breastfeeding reduces a mother's risk of cardiovascular disease by 9%.",
    source: "Peters et al., Journal of the American Heart Association, 2017",
    category: 'mother-benefits'
  },

  // INTERESTING SCIENCE
  {
    id: 41,
    text: "Breast milk flavor changes based on what you eat — introducing baby to the tastes of your family's diet before solid foods begin.",
    source: "Mennella et al., Pediatrics, 2001",
    category: 'science'
  },
  {
    id: 42,
    text: "Breastfed babies can recognize their mother's milk from another mother's milk by smell alone.",
    source: "Marlier & Schaal, Child Development, 2005",
    category: 'science'
  },
  {
    id: 43,
    text: "The let-down reflex can be triggered by hearing any baby cry, seeing a photo of your baby, or even thinking about nursing.",
    source: "McNeilly et al., British Medical Journal, 1983",
    category: 'science'
  },
  {
    id: 44,
    text: "Your breast milk contains pain-relieving compounds (beta-endorphins) that help comfort baby during discomfort or illness.",
    source: "Zanardo et al., Pediatric Research, 2001",
    category: 'science'
  },
  {
    id: 45,
    text: "Newborns can see clearly at about 8-12 inches — exactly the distance to your face while nursing.",
    source: "Slater et al., Developmental Science, 1998",
    category: 'science'
  },
  {
    id: 46,
    text: "Your breasts can detect a one-degree change in your baby's body temperature and adjust accordingly.",
    source: "Ludington-Hoe et al., Neonatal Network, 2006",
    category: 'science'
  },
  {
    id: 47,
    text: "Looking at photos or videos of your baby while pumping can increase milk output by triggering oxytocin release.",
    source: "Keith et al., Breastfeeding Medicine, 2012",
    category: 'science'
  },

  // NUTRITION
  {
    id: 48,
    text: "You need about 500 extra calories per day while breastfeeding — that's more than during pregnancy (which only requires 300 extra).",
    source: "Institute of Medicine, Dietary Reference Intakes, 2005",
    category: 'nutrition'
  },
  {
    id: 49,
    text: "Galactagogues (foods believed to boost supply) like oats and fenugreek have limited scientific evidence — frequent nursing is what truly increases supply.",
    source: "Mortel & Mehta, Breastfeeding Medicine, 2013",
    category: 'nutrition'
  },
  {
    id: 50,
    text: "Alcohol passes into breast milk at about the same concentration as your blood — waiting 2 hours per drink allows it to metabolize.",
    source: "Ho et al., British Journal of Clinical Pharmacology, 2001",
    category: 'nutrition'
  },
  {
    id: 51,
    text: "Caffeine in breast milk peaks 1-2 hours after you drink it, but most babies tolerate moderate caffeine intake (200-300mg/day) without issues.",
    source: "Berlin et al., Pediatric Research, 1984",
    category: 'nutrition'
  },

  // PUMPING & STORAGE
  {
    id: 52,
    text: "Freshly expressed breast milk can safely stay at room temperature for up to 4 hours, in the refrigerator for 4 days, and frozen for 6-12 months.",
    source: "CDC Breastfeeding Guidelines, 2022",
    category: 'pumping'
  },
  {
    id: 53,
    text: "Hand expression can be as effective as pumping — and some mothers find they get more milk with hands than machines.",
    source: "Morton et al., Journal of Perinatology, 2009",
    category: 'pumping'
  },

  // GLOBAL PERSPECTIVE
  {
    id: 54,
    text: "The World Health Organization recommends breastfeeding for at least 2 years — the global average weaning age is 2-4 years.",
    source: "WHO Infant and Young Child Feeding Guidelines, 2021",
    category: 'global'
  },
  {
    id: 55,
    text: "If 90% of families breastfed exclusively for 6 months, the US would save $13 billion annually in healthcare costs.",
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
