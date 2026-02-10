export interface QuizQuestion {
  id: string;
  courseId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // ─────────────────────────────────────────────
  // LACTATION 101: How Your Body Makes Milk
  // ─────────────────────────────────────────────
  {
    id: 'lac-1',
    courseId: 'lactation-101',
    question: 'What are the tiny grape-like clusters in the breast where milk is actually produced?',
    options: ['Milk ducts', 'Alveoli', 'Myoepithelial cells', 'Mammary lobules'],
    correctIndex: 1,
    explanation: 'Alveoli are the small, grape-like clusters of milk-producing cells in the breast. They pull nutrients from your blood and transform them into breast milk.'
  },
  {
    id: 'lac-2',
    courseId: 'lactation-101',
    question: 'Milk production works on which fundamental principle?',
    options: ['Breast size determines output', 'Supply and demand', 'Maternal weight determines supply', 'Genetics alone control production'],
    correctIndex: 1,
    explanation: 'Milk production operates on supply and demand: the more milk that is removed from the breast (through nursing or pumping), the more milk your body produces.'
  },
  {
    id: 'lac-3',
    courseId: 'lactation-101',
    question: 'What is the thick, golden first milk called?',
    options: ['Mature milk', 'Transitional milk', 'Colostrum', 'Foremilk'],
    correctIndex: 2,
    explanation: 'Colostrum is the thick, golden milk produced in the first few days after birth. It is packed with antibodies and immune factors and is often called "liquid gold."'
  },
  {
    id: 'lac-4',
    courseId: 'lactation-101',
    question: 'Why are the first 10-14 days of breastfeeding considered a critical window?',
    options: [
      'Baby cannot digest formula before 14 days',
      'Prolactin receptors are being established during this period',
      'Milk ducts are not fully formed until day 14',
      'The baby cannot latch properly until day 14'
    ],
    correctIndex: 1,
    explanation: 'During the first 10-14 days, frequent milk removal helps establish prolactin receptors. The more receptors you develop, the better your long-term milk-making capacity.'
  },
  {
    id: 'lac-5',
    courseId: 'lactation-101',
    question: 'What does it typically mean when your breasts feel softer after the first few weeks?',
    options: [
      'You are running out of milk',
      'Your supply has regulated and milk is now made on demand',
      'You need to supplement with formula',
      'Baby is not nursing enough'
    ],
    correctIndex: 1,
    explanation: 'Soft breasts usually indicate your supply has regulated. Your breasts are now efficiently producing milk on demand rather than storing excess, which is a sign of a well-functioning system.'
  },
  {
    id: 'lac-6',
    courseId: 'lactation-101',
    question: 'How many times per 24 hours should a newborn typically nurse in the early weeks?',
    options: ['4-6 times', '6-8 times', '8-12 or more times', 'Only when they cry'],
    correctIndex: 2,
    explanation: 'Newborns should nurse 8-12 or more times per 24 hours in the early weeks. Frequent nursing helps establish your milk supply and ensures baby gets adequate nutrition.'
  },
  {
    id: 'lac-7',
    courseId: 'lactation-101',
    question: 'Which of the following is a reliable sign that your baby is getting enough milk?',
    options: [
      'Baby sleeps through the night',
      '6 or more wet diapers per day after day 4',
      'Your breasts always feel full',
      'You can pump 8 oz at a time'
    ],
    correctIndex: 1,
    explanation: 'Six or more wet diapers per day (after day 4) is a reliable indicator that baby is getting enough milk. Diaper output is one of the best ways to track adequate intake.'
  },
  {
    id: 'lac-8',
    courseId: 'lactation-101',
    question: 'What is the "letdown" or milk ejection reflex?',
    options: [
      'The feeling of milk drying up',
      'When small muscles squeeze milk through the ducts and out the nipple',
      'The initial sensation of baby latching',
      'A sign that breastfeeding is not going well'
    ],
    correctIndex: 1,
    explanation: 'Letdown occurs when oxytocin causes the myoepithelial cells (tiny muscles) around the alveoli to contract, squeezing milk through the ducts and out the nipple.'
  },
  {
    id: 'lac-9',
    courseId: 'lactation-101',
    question: 'During which stage does breast milk begin to change from golden to white or bluish in color?',
    options: ['Colostrum stage', 'Transitional milk stage', 'Mature milk stage', 'It does not change color'],
    correctIndex: 1,
    explanation: 'Transitional milk (days 5-14) marks the shift from golden colostrum to the whiter appearance of mature milk, as volume increases and composition changes.'
  },
  {
    id: 'lac-10',
    courseId: 'lactation-101',
    question: 'How does mature breast milk change during a single feeding session?',
    options: [
      'It stays exactly the same throughout',
      'Fat content increases from foremilk to hindmilk',
      'It becomes less nutritious as the feeding goes on',
      'Only water content changes'
    ],
    correctIndex: 1,
    explanation: 'During a feeding, the fat content of breast milk increases as it transitions from the thinner foremilk at the start to the fattier hindmilk toward the end.'
  },

  // ─────────────────────────────────────────────
  // HORMONES 101: Prolactin, Oxytocin & Cortisol
  // ─────────────────────────────────────────────
  {
    id: 'hor-1',
    courseId: 'hormones-101',
    question: 'Which hormone is primarily responsible for telling your breasts to MAKE milk?',
    options: ['Oxytocin', 'Estrogen', 'Prolactin', 'Cortisol'],
    correctIndex: 2,
    explanation: 'Prolactin is the milk-making hormone. It rises when baby nurses and signals the alveoli to produce milk.'
  },
  {
    id: 'hor-2',
    courseId: 'hormones-101',
    question: 'Which hormone triggers the letdown (milk ejection) reflex?',
    options: ['Prolactin', 'Cortisol', 'Progesterone', 'Oxytocin'],
    correctIndex: 3,
    explanation: 'Oxytocin triggers the letdown reflex by causing tiny muscles around the alveoli to contract and squeeze milk into the ducts. It is also known as the "love hormone."'
  },
  {
    id: 'hor-3',
    courseId: 'hormones-101',
    question: 'When do prolactin levels peak during the day?',
    options: ['Early morning (6-8am)', 'Midday (12-2pm)', 'Early evening (5-7pm)', 'Nighttime (approximately 1am-5am)'],
    correctIndex: 3,
    explanation: 'Prolactin levels are highest at night, roughly between 1am and 5am. This is why night feeds are especially important for building and maintaining milk supply.'
  },
  {
    id: 'hor-4',
    courseId: 'hormones-101',
    question: 'How does high cortisol (stress) affect breastfeeding?',
    options: [
      'It permanently destroys milk supply',
      'It can temporarily inhibit oxytocin release and letdown',
      'It increases milk production',
      'It has no effect on breastfeeding'
    ],
    correctIndex: 1,
    explanation: 'High cortisol can temporarily inhibit oxytocin release, making letdown more difficult. However, this effect is temporary, and supply typically bounces back once stress is managed.'
  },
  {
    id: 'hor-5',
    courseId: 'hormones-101',
    question: 'Besides making milk, what other effect does prolactin have on nursing mothers?',
    options: [
      'It increases energy levels',
      'It promotes calm and nurturing feelings',
      'It causes hunger',
      'It raises body temperature'
    ],
    correctIndex: 1,
    explanation: 'Prolactin promotes a calm, nurturing state. Many mothers feel relaxed or even sleepy during nursing sessions, which is prolactin at work.'
  },
  {
    id: 'hor-6',
    courseId: 'hormones-101',
    question: 'What can trigger oxytocin release even when baby is not physically nursing?',
    options: [
      'Hearing your baby cry or looking at their photo',
      'Drinking cold water',
      'Exercising vigorously',
      'Eating a large meal'
    ],
    correctIndex: 0,
    explanation: 'Oxytocin can be triggered by hearing your baby cry, seeing or smelling your baby, or even thinking about them. This is why looking at baby photos while pumping can help with letdown.'
  },
  {
    id: 'hor-7',
    courseId: 'hormones-101',
    question: 'Which of the following strategies can help support oxytocin release during nursing?',
    options: [
      'Multitasking and staying busy during feeds',
      'Nursing in a bright, stimulating environment',
      'Deep breathing and creating a calm, comfortable space',
      'Drinking ice-cold water right before feeding'
    ],
    correctIndex: 2,
    explanation: 'Relaxation supports oxytocin release. Deep breathing, warm compresses, dim lighting, and a comfortable environment all encourage letdown by reducing stress hormones that block oxytocin.'
  },
  {
    id: 'hor-8',
    courseId: 'hormones-101',
    question: 'Skin-to-skin contact with your baby naturally raises levels of which hormone?',
    options: ['Cortisol', 'Adrenaline', 'Prolactin', 'Testosterone'],
    correctIndex: 2,
    explanation: 'Skin-to-skin contact naturally raises prolactin levels, supporting milk production. It also triggers oxytocin release, promoting bonding and letdown.'
  },
  {
    id: 'hor-9',
    courseId: 'hormones-101',
    question: 'If you feel a sudden wave of sadness right at letdown, what might explain it?',
    options: [
      'Postpartum depression',
      'A poor latch',
      'D-MER (Dysphoric Milk Ejection Reflex), caused by a dopamine drop',
      'Low milk supply'
    ],
    correctIndex: 2,
    explanation: 'D-MER is a physiological response caused by the rapid drop in dopamine that occurs when prolactin rises to trigger letdown. It is not an emotional failure; it is a hormonal reflex.'
  },
  {
    id: 'hor-10',
    courseId: 'hormones-101',
    question: 'What is the best approach if stress is temporarily affecting your milk supply?',
    options: [
      'Switch to formula immediately',
      'Address the stress and continue frequent nursing; supply typically recovers',
      'Take galactagogue supplements only',
      'Stop all night feeds to catch up on sleep'
    ],
    correctIndex: 1,
    explanation: 'Short-term stress causes temporary effects on milk supply. Addressing the stress while continuing frequent nursing or pumping allows your body to recover its output.'
  },

  // ─────────────────────────────────────────────
  // NUTRITION FOR LACTATION
  // ─────────────────────────────────────────────
  {
    id: 'nut-1',
    courseId: 'nutrition',
    question: 'Approximately how many extra calories per day does milk production require?',
    options: ['100-200 calories', '300-500 calories', '700-900 calories', '1,000+ calories'],
    correctIndex: 1,
    explanation: 'Producing breast milk burns approximately 300-500 extra calories per day. Breastfeeding mothers need to eat these additional calories to fuel production and maintain their own health.'
  },
  {
    id: 'nut-2',
    courseId: 'nutrition',
    question: 'Why is DHA (an omega-3 fatty acid) particularly important during breastfeeding?',
    options: [
      'It prevents mastitis',
      'It is critical for baby\'s brain and eye development',
      'It increases milk volume',
      'It helps with weight loss'
    ],
    correctIndex: 1,
    explanation: 'DHA is critical for baby\'s brain and eye development and passes directly into breast milk. Aim for 200-300mg daily through fatty fish or supplements.'
  },
  {
    id: 'nut-3',
    courseId: 'nutrition',
    question: 'How much fluid should breastfeeding mothers aim to drink daily?',
    options: ['32-48 ounces', '48-64 ounces', '100-128 ounces (3-4 liters)', '200+ ounces'],
    correctIndex: 2,
    explanation: 'Breastfeeding mothers should aim for about 100-128 ounces (3-4 liters) of fluid daily. Breast milk is 87% water, so adequate hydration is essential for production.'
  },
  {
    id: 'nut-4',
    courseId: 'nutrition',
    question: 'What is the most effective galactagogue (milk supply booster)?',
    options: ['Fenugreek capsules', 'Lactation cookies', 'Frequent and effective milk removal', 'Brewer\'s yeast'],
    correctIndex: 2,
    explanation: 'The single most effective galactagogue is frequent, effective milk removal through nursing or pumping. No food or herb can compensate for infrequent nursing or poor milk transfer.'
  },
  {
    id: 'nut-5',
    courseId: 'nutrition',
    question: 'How much caffeine is generally considered safe while breastfeeding?',
    options: ['None at all', '50-100mg per day', '200-300mg per day (2-3 cups of coffee)', '500mg+ per day'],
    correctIndex: 2,
    explanation: 'Moderate caffeine intake of 200-300mg per day (about 2-3 cups of coffee) is considered safe while breastfeeding. Very little caffeine passes into breast milk.'
  },
  {
    id: 'nut-6',
    courseId: 'nutrition',
    question: 'Which micronutrient is breast milk often low in, leading pediatricians to recommend drops for breastfed babies?',
    options: ['Iron', 'Vitamin D', 'Calcium', 'Zinc'],
    correctIndex: 1,
    explanation: 'Breast milk is often low in Vitamin D regardless of maternal diet. Many pediatricians recommend Vitamin D drops (400 IU daily) for exclusively breastfed infants.'
  },
  {
    id: 'nut-7',
    courseId: 'nutrition',
    question: 'Which group of breastfeeding mothers MUST supplement with Vitamin B12?',
    options: ['Mothers over 35', 'Vegan and vegetarian mothers', 'Mothers of twins', 'First-time mothers'],
    correctIndex: 1,
    explanation: 'Vegan and vegetarian mothers must supplement with Vitamin B12, as it is primarily found in animal products. B12 is essential for baby\'s nervous system development.'
  },
  {
    id: 'nut-8',
    courseId: 'nutrition',
    question: 'Is there scientific evidence that breastfeeding mothers need to avoid spicy foods, garlic, or "gassy" foods like broccoli?',
    options: [
      'Yes, these foods always upset the baby',
      'No, there is no evidence these foods need to be avoided',
      'Yes, but only in the first month',
      'Only gassy foods need to be avoided'
    ],
    correctIndex: 1,
    explanation: 'Despite common myths, there is no evidence that breastfeeding mothers need to avoid spicy foods, garlic, onions, or gassy vegetables. True food sensitivities in breastfed babies are less common than often believed.'
  },
  {
    id: 'nut-9',
    courseId: 'nutrition',
    question: 'What happens to your body if you do not eat enough calcium while breastfeeding?',
    options: [
      'Milk production stops',
      'Your body pulls calcium from your bones to put in the milk',
      'The baby does not get any calcium',
      'Nothing; calcium is not needed for milk'
    ],
    correctIndex: 1,
    explanation: 'Your body will pull calcium from your bones to maintain adequate calcium levels in breast milk. Your bones typically recover after weaning, but adequate calcium intake (1,000mg/day) protects your own health.'
  },
  {
    id: 'nut-10',
    courseId: 'nutrition',
    question: 'How does alcohol clear from breast milk?',
    options: [
      'By pumping and dumping',
      'By drinking extra water',
      'At the same rate as it clears from your blood (time is the only factor)',
      'It never fully clears'
    ],
    correctIndex: 2,
    explanation: 'Alcohol clears from breast milk at the same rate as it clears from your blood. "Pumping and dumping" does not speed this process; only time does.'
  },

  // ─────────────────────────────────────────────
  // BENEFITS OF BREASTFEEDING
  // ─────────────────────────────────────────────
  {
    id: 'ben-1',
    courseId: 'benefits',
    question: 'Breastfeeding can reduce a baby\'s risk of SIDS (Sudden Infant Death Syndrome) by up to what percentage?',
    options: ['10%', '25%', '50%', '75%'],
    correctIndex: 2,
    explanation: 'Studies show that breastfeeding can reduce the risk of SIDS by up to 50%. This is one of the most significant protective benefits breast milk provides.'
  },
  {
    id: 'ben-2',
    courseId: 'benefits',
    question: 'Which type of antibody in breast milk coats the baby\'s gut and respiratory tract?',
    options: ['IgG', 'IgE', 'IgA', 'IgM'],
    correctIndex: 2,
    explanation: 'Secretory IgA is the primary antibody in breast milk. It coats the baby\'s gut and respiratory tract, forming a protective barrier against pathogens.'
  },
  {
    id: 'ben-3',
    courseId: 'benefits',
    question: 'How does breastfeeding benefit a mother\'s breast cancer risk?',
    options: [
      'It has no effect on breast cancer risk',
      'The longer you breastfeed, the lower your breast cancer risk',
      'Only breastfeeding for more than 2 years has an effect',
      'It increases breast cancer risk slightly'
    ],
    correctIndex: 1,
    explanation: 'Breastfeeding reduces breast cancer risk, and the benefit increases with duration. Each year of breastfeeding reduces breast cancer risk by approximately 4%.'
  },
  {
    id: 'ben-4',
    courseId: 'benefits',
    question: 'What are oligosaccharides in breast milk?',
    options: [
      'Proteins that build muscle',
      'Fats for brain development',
      'Complex sugars that feed beneficial gut bacteria',
      'Vitamins for bone growth'
    ],
    correctIndex: 2,
    explanation: 'Human milk oligosaccharides (HMOs) are complex sugars that serve as prebiotics, feeding beneficial bacteria in the baby\'s gut. This microbiome foundation affects lifelong health.'
  },
  {
    id: 'ben-5',
    courseId: 'benefits',
    question: 'Does supplementing with formula negate the benefits of breastfeeding?',
    options: [
      'Yes, it completely cancels out breast milk benefits',
      'No, any amount of breast milk provides some benefit',
      'Only if formula is given before 6 months',
      'Only if more formula than breast milk is given'
    ],
    correctIndex: 1,
    explanation: 'Any amount of breast milk provides benefit. Even small amounts support immune function and gut health. Combo feeding is a valid approach, and breast milk benefits exist on a spectrum.'
  },
  {
    id: 'ben-6',
    courseId: 'benefits',
    question: 'Which of the following is a documented metabolic benefit of breastfeeding for mothers?',
    options: [
      'Higher cholesterol levels',
      'Increased blood pressure',
      'Reduced risk of Type 2 diabetes',
      'Increased risk of osteoporosis'
    ],
    correctIndex: 2,
    explanation: 'Breastfeeding is associated with a reduced risk of Type 2 diabetes in mothers, along with lower blood pressure, improved cholesterol levels, and lower cardiovascular disease risk.'
  },
  {
    id: 'ben-7',
    courseId: 'benefits',
    question: 'How does breast milk adapt when a baby or mother is sick?',
    options: [
      'It does not change',
      'It becomes less nutritious to conserve energy',
      'It increases the amount of antibodies it contains',
      'Production stops temporarily'
    ],
    correctIndex: 2,
    explanation: 'When you or your baby are exposed to illness, your breast milk adapts by increasing the concentration of specific antibodies. Your body creates customized immune protection.'
  },
  {
    id: 'ben-8',
    courseId: 'benefits',
    question: 'What immediate postpartum benefit does breastfeeding provide for the mother?',
    options: [
      'Instant return to pre-pregnancy weight',
      'Oxytocin helps the uterus contract and reduces postpartum bleeding',
      'Complete pain relief after delivery',
      'Immediate return of menstrual cycle'
    ],
    correctIndex: 1,
    explanation: 'Breastfeeding triggers oxytocin release, which helps the uterus contract and return to its pre-pregnancy size faster, reducing postpartum bleeding.'
  },
  {
    id: 'ben-9',
    courseId: 'benefits',
    question: 'Studies show breastfed children score how many points higher on average IQ tests?',
    options: ['0-1 points', '3-7 points', '10-15 points', '20+ points'],
    correctIndex: 1,
    explanation: 'Studies consistently show an average IQ difference of 3-7 points higher in breastfed children, likely due to the DHA and other fatty acids that support brain development.'
  },
  {
    id: 'ben-10',
    courseId: 'benefits',
    question: 'What is the recommended approach if exclusive breastfeeding is affecting a mother\'s mental health?',
    options: [
      'Continue exclusive breastfeeding no matter what',
      'Stop breastfeeding entirely',
      'Combo feeding or reducing breastfeeding is valid; maternal mental health matters',
      'Wait it out for at least 6 months'
    ],
    correctIndex: 2,
    explanation: 'A mentally healthy mother with a fed baby is the goal. If exclusive breastfeeding is harming your wellbeing, combo feeding, reducing sessions, or stopping entirely are all valid choices.'
  },

  // ─────────────────────────────────────────────
  // COMMON CHALLENGES
  // ─────────────────────────────────────────────
  {
    id: 'cha-1',
    courseId: 'challenges',
    question: 'What does a nipple that looks flattened or "lipstick-shaped" after feeding usually indicate?',
    options: ['A normal latch', 'A shallow or poor latch', 'Oversupply', 'Tongue tie in the baby'],
    correctIndex: 1,
    explanation: 'A nipple that looks creased, flattened, or lipstick-shaped after feeding is a common sign of a shallow latch. Breaking suction and re-latching with a wider gape can help.'
  },
  {
    id: 'cha-2',
    courseId: 'challenges',
    question: 'What is the recommended first-line treatment for engorgement?',
    options: [
      'Stop breastfeeding to let breasts rest',
      'Pump to completely empty both breasts',
      'Nurse frequently and use cold compresses between feeds',
      'Take hot baths for 30+ minutes'
    ],
    correctIndex: 2,
    explanation: 'Frequent nursing (every 2-3 hours) combined with cold compresses between feeds is the recommended approach for engorgement. Pumping to full empty can signal more production and worsen the issue.'
  },
  {
    id: 'cha-3',
    courseId: 'challenges',
    question: 'What should you do if you develop a hard, tender lump in your breast (clogged duct)?',
    options: [
      'Stop nursing on that side',
      'Continue nursing and start feeds on the affected side',
      'Only pump, never nurse directly',
      'Apply ice continuously for 24 hours'
    ],
    correctIndex: 1,
    explanation: 'Continuing to nurse is THE treatment for a clogged duct. Starting feeds on the affected side, applying heat before nursing, and massaging the lump toward the nipple during feeds all help clear the blockage.'
  },
  {
    id: 'cha-4',
    courseId: 'challenges',
    question: 'Which symptoms suggest a clogged duct may have progressed to mastitis?',
    options: [
      'Mild breast fullness',
      'Fever, flu-like symptoms, and a red hot wedge-shaped area on the breast',
      'Leaking from the other breast',
      'Baby refusing to latch on that side'
    ],
    correctIndex: 1,
    explanation: 'Mastitis is characterized by fever (often sudden), flu-like symptoms (body aches, chills), and a red, hot, wedge-shaped area on the breast. It requires prompt attention and possibly antibiotics.'
  },
  {
    id: 'cha-5',
    courseId: 'challenges',
    question: 'True or false: Low pump output means you have low milk supply.',
    options: [
      'True, pump output directly reflects supply',
      'False, pump output does not equal supply; babies extract milk more efficiently than pumps',
      'True, but only for double electric pumps',
      'False, but only if you are using a hospital-grade pump'
    ],
    correctIndex: 1,
    explanation: 'Pump output does NOT equal milk supply. Babies are significantly more efficient at extracting milk than any pump. Diaper output and weight gain are much better indicators of adequate supply.'
  },
  {
    id: 'cha-6',
    courseId: 'challenges',
    question: 'What percentage of women actually experience true insufficient milk supply?',
    options: ['20-30%', '10-15%', '1-5%', '50% or more'],
    correctIndex: 2,
    explanation: 'True insufficient milk supply affects only about 1-5% of women. Supply worries are the number one reason mothers stop breastfeeding, but most of the time supply is actually adequate.'
  },
  {
    id: 'cha-7',
    courseId: 'challenges',
    question: 'In the first 1-2 weeks, brief discomfort at initial latch that improves within 30 seconds is considered:',
    options: ['A sign of tongue tie', 'Normal while nipples adapt', 'A reason to stop nursing immediately', 'A sign of mastitis'],
    correctIndex: 1,
    explanation: 'Brief discomfort at initial latch that resolves within about 30 seconds is considered normal during the first 1-2 weeks as nipples adapt. Pain that persists throughout the feeding is not normal.'
  },
  {
    id: 'cha-8',
    courseId: 'challenges',
    question: 'What does "reverse pressure softening" help with?',
    options: [
      'Increasing milk supply',
      'Treating thrush',
      'Softening the areola during engorgement so baby can latch',
      'Weaning'
    ],
    correctIndex: 2,
    explanation: 'Reverse pressure softening involves gentle pressure around the nipple to move fluid back, softening the areola during engorgement so that the baby can achieve a proper latch.'
  },
  {
    id: 'cha-9',
    courseId: 'challenges',
    question: 'What is an IBCLC?',
    options: [
      'A type of breast pump',
      'An International Board Certified Lactation Consultant',
      'A breastfeeding supplement',
      'A government breastfeeding program'
    ],
    correctIndex: 1,
    explanation: 'An IBCLC (International Board Certified Lactation Consultant) is a credentialed specialist in breastfeeding medicine and the gold standard of lactation support.'
  },
  {
    id: 'cha-10',
    courseId: 'challenges',
    question: 'Is milk from a breast with mastitis safe for the baby to drink?',
    options: [
      'No, you must pump and dump from that side',
      'Yes, it is safe and continuing to nurse helps recovery',
      'Only if you are on antibiotics',
      'Only after the fever has broken'
    ],
    correctIndex: 1,
    explanation: 'Milk from a breast with mastitis is safe for your baby. In fact, continuing to nurse on the affected side is critical for recovery because it helps drain the breast and clear the infection.'
  },
  {
    id: 'cha-11',
    courseId: 'challenges',
    question: 'What is "power pumping" designed to mimic?',
    options: [
      'A full night of sleep',
      'Cluster feeding, to signal the body to increase supply',
      'Weaning the baby off the breast',
      'A normal single feeding session'
    ],
    correctIndex: 1,
    explanation: 'Power pumping (20 min on, 10 off, 10 on, 10 off, 10 on) mimics the pattern of cluster feeding. This signals your body to increase milk production by simulating increased demand.'
  },

  // ─────────────────────────────────────────────
  // EMOTIONAL WELLNESS
  // ─────────────────────────────────────────────
  {
    id: 'emo-1',
    courseId: 'emotional',
    question: 'What is D-MER (Dysphoric Milk Ejection Reflex)?',
    options: [
      'Postpartum depression caused by breastfeeding',
      'A physiological response causing negative emotions right before letdown, due to a dopamine drop',
      'An allergic reaction to breast milk',
      'A sign of insufficient milk supply'
    ],
    correctIndex: 1,
    explanation: 'D-MER is a physiological condition where a rapid dopamine drop before letdown triggers brief negative emotions such as sadness, anxiety, or dread. It is not psychological; it is hormonal.'
  },
  {
    id: 'emo-2',
    courseId: 'emotional',
    question: 'What is "matrescence"?',
    options: [
      'A vitamin deficiency after birth',
      'The psychological and neurological transition of becoming a mother',
      'A type of postpartum infection',
      'The process of milk coming in'
    ],
    correctIndex: 1,
    explanation: 'Matrescence refers to the significant psychological and neurological restructuring that occurs as you become a mother. Your brain is literally changing, which can explain the intense and sometimes confusing emotions.'
  },
  {
    id: 'emo-3',
    courseId: 'emotional',
    question: 'What does it mean to feel "touched out"?',
    options: [
      'Your baby does not want to be held',
      'You have a skin condition from breastfeeding',
      'You feel overwhelmed by constant physical contact and need space',
      'You are unable to feel your letdown reflex'
    ],
    correctIndex: 2,
    explanation: 'Feeling "touched out" is the experience of being overwhelmed by constant physical contact (nursing, holding, comforting). It is a valid, normal response to overstimulation and does not mean you love your family any less.'
  },
  {
    id: 'emo-4',
    courseId: 'emotional',
    question: 'If you are experiencing persistent sadness lasting more than 2 weeks postpartum, what should you do?',
    options: [
      'Wait for it to pass on its own',
      'Stop breastfeeding immediately',
      'Seek professional help; it may be postpartum depression, which is treatable',
      'Increase breastfeeding frequency to boost oxytocin'
    ],
    correctIndex: 2,
    explanation: 'Persistent sadness lasting more than 2 weeks may indicate postpartum depression, which affects about 1 in 7 mothers. It is a medical condition, not a character flaw, and effective treatments are available.'
  },
  {
    id: 'emo-5',
    courseId: 'emotional',
    question: 'Are many psychiatric medications considered safe to take while breastfeeding?',
    options: [
      'No, all psychiatric medications are unsafe during breastfeeding',
      'Yes, many medications are compatible with breastfeeding',
      'Only herbal supplements are safe',
      'Only if the baby is older than 6 months'
    ],
    correctIndex: 1,
    explanation: 'Many psychiatric medications are considered safe while breastfeeding. Breastfeeding and mental health treatment can coexist. A provider can help choose medications compatible with nursing.'
  },
  {
    id: 'emo-6',
    courseId: 'emotional',
    question: 'Which of the following is NOT considered normal postpartum adjustment?',
    options: [
      'Mood swings in the first few weeks',
      'Occasional overwhelm',
      'Intrusive thoughts that frighten you and interfere with daily functioning',
      'Needing time to bond with baby'
    ],
    correctIndex: 2,
    explanation: 'While mood swings and occasional overwhelm are part of normal adjustment, intrusive frightening thoughts that interfere with functioning warrant professional support. This may indicate a postpartum mood disorder.'
  },
  {
    id: 'emo-7',
    courseId: 'emotional',
    question: 'What is the "mental load" of feeding?',
    options: [
      'The physical weight of full breasts',
      'The invisible cognitive and emotional labor of tracking feeds, supply, scheduling, and managing expectations',
      'The number of calories burned during breastfeeding',
      'A condition that only affects first-time mothers'
    ],
    correctIndex: 1,
    explanation: 'The mental load includes tracking feeds and diapers, monitoring diet and medications, scheduling around nursing, managing advice from others, and the emotional labor of the entire breastfeeding experience.'
  },
  {
    id: 'emo-8',
    courseId: 'emotional',
    question: 'How can partners best support a breastfeeding mother even though they cannot nurse?',
    options: [
      'Offer frequent advice on breastfeeding technique',
      'Handle everything else: diapers, cooking, laundry, and emotional support',
      'Discourage the mother from seeking outside help',
      'Suggest formula whenever breastfeeding seems difficult'
    ],
    correctIndex: 1,
    explanation: 'Partners can provide crucial support by handling non-nursing tasks (diapers, meals, laundry), bringing water and snacks during feeds, protecting rest time, and offering emotional support without trying to "fix" everything.'
  },
  {
    id: 'emo-9',
    courseId: 'emotional',
    question: 'Breastfeeding agitation or rage during nursing is:',
    options: [
      'A sign that you should never breastfeed',
      'Extremely rare and always indicates a serious problem',
      'More common than acknowledged and has physiological components',
      'Caused only by a poor latch'
    ],
    correctIndex: 2,
    explanation: 'Breastfeeding agitation or rage is more common than widely acknowledged and can have physiological origins. It does not mean something is fundamentally wrong with you. Distraction, rest, and professional support can help.'
  },
  {
    id: 'emo-10',
    courseId: 'emotional',
    question: 'How long does D-MER typically last per episode?',
    options: [
      '30 seconds to 2 minutes',
      '1-2 hours',
      'The entire nursing session',
      'Several days'
    ],
    correctIndex: 0,
    explanation: 'D-MER episodes typically last 30 seconds to 2 minutes, coinciding with the dopamine drop that occurs right before letdown. The feelings are brief but can be intense.'
  },

  // ─────────────────────────────────────────────
  // PUMPING & WORKING
  // ─────────────────────────────────────────────
  {
    id: 'pum-1',
    courseId: 'pumping-working',
    question: 'How much frozen breast milk do most families need before returning to work?',
    options: ['100-200 ounces', '200+ ounces', '30-50 ounces', '500+ ounces'],
    correctIndex: 2,
    explanation: 'Building 30-50 ounces before returning to work is plenty for most families. You will continue pumping at work to replace what baby drinks each day; a massive freezer stash is not necessary.'
  },
  {
    id: 'pum-2',
    courseId: 'pumping-working',
    question: 'What is a normal pump output per session when pumping "extra" milk (after baby has nursed)?',
    options: ['4-6 ounces per breast', '1-2 ounces total from both breasts', '8-10 ounces total', '6 ounces minimum'],
    correctIndex: 1,
    explanation: 'Getting 1-2 ounces total (combined from both breasts) when pumping after nursing is completely normal. You are collecting "extra" milk that baby did not take, so smaller volumes are expected.'
  },
  {
    id: 'pum-3',
    courseId: 'pumping-working',
    question: 'How often should you pump during a typical 8-hour workday to maintain supply?',
    options: ['Once', 'Every 3-4 hours (2-3 sessions)', 'Every hour', 'Only at lunch'],
    correctIndex: 1,
    explanation: 'Pumping every 3-4 hours during a workday (typically 2-3 sessions) mimics the frequency your baby would nurse and helps maintain your supply.'
  },
  {
    id: 'pum-4',
    courseId: 'pumping-working',
    question: 'What is the most common pumping problem that affects output?',
    options: ['Using the wrong brand of pump', 'Wrong flange size', 'Pumping too frequently', 'Using a manual pump'],
    correctIndex: 1,
    explanation: 'Wrong flange size is one of the most common pumping problems. A flange that is too large or too small can cause pain and significantly reduce output. Measure your nipple diameter and add 2-3mm for proper flange size.'
  },
  {
    id: 'pum-5',
    courseId: 'pumping-working',
    question: 'Under the US federal PUMP Act, what are employers required to provide?',
    options: [
      'A bathroom for pumping',
      'A private space (not a bathroom) and reasonable break time to pump',
      'A breast pump for each employee',
      'Paid time off for breastfeeding'
    ],
    correctIndex: 1,
    explanation: 'The PUMP Act requires employers to provide reasonable break time and a private space that is NOT a bathroom (shielded from view, free from intrusion) for nursing employees to pump for one year after birth.'
  },
  {
    id: 'pum-6',
    courseId: 'pumping-working',
    question: 'How long can expressed breast milk safely stay at room temperature?',
    options: ['1 hour', '4 hours', '8 hours', '12 hours'],
    correctIndex: 1,
    explanation: 'Expressed breast milk can safely remain at room temperature for up to 4 hours. After that, it should be refrigerated (up to 4 days) or frozen (up to 6-12 months).'
  },
  {
    id: 'pum-7',
    courseId: 'pumping-working',
    question: 'When should you start building a freezer stash for returning to work?',
    options: [
      'Immediately after birth',
      'After breastfeeding is well-established, around 3-4 weeks',
      'Only in the last week before returning',
      'At 6 months postpartum'
    ],
    correctIndex: 1,
    explanation: 'Wait until breastfeeding is well-established (around 3-4 weeks) before adding pumping sessions. Starting too early can lead to oversupply issues and interfere with establishing the nursing relationship.'
  },
  {
    id: 'pum-8',
    courseId: 'pumping-working',
    question: 'Are TSA rules different for breast milk when flying?',
    options: [
      'No, the 3.4 oz liquid rule applies',
      'Yes, breast milk is exempt from the 3.4 oz liquid limit',
      'Only frozen breast milk is allowed',
      'Breast milk is not allowed through security'
    ],
    correctIndex: 1,
    explanation: 'Breast milk is exempt from the TSA 3.4 oz liquid limit. You should inform the TSA agent that you have breast milk before screening, and ice packs and cooling accessories are also permitted.'
  },
  {
    id: 'pum-9',
    courseId: 'pumping-working',
    question: 'How often should pump membranes and valves be replaced?',
    options: [
      'Never, they last forever',
      'Every 2-3 months, or when suction decreases',
      'Only if they visibly break',
      'Once a year'
    ],
    correctIndex: 1,
    explanation: 'Pump membranes and valves should be replaced every 2-3 months, or sooner if you notice decreased suction. Worn parts are a common cause of reduced pump output.'
  },
  {
    id: 'pum-10',
    courseId: 'pumping-working',
    question: 'Can you store pump parts in the refrigerator between sessions at work instead of washing each time?',
    options: [
      'No, parts must be sterilized between every session',
      'Yes, storing parts in a sealed bag in the fridge between sessions and washing once daily is a common practice',
      'Only if you have a hospital-grade pump',
      'Only for the first 3 months'
    ],
    correctIndex: 1,
    explanation: 'The "fridge hack" of storing pump parts in a sealed bag in the refrigerator between sessions and washing thoroughly once at home is a common and widely used practice among working mothers.'
  },

  // ─────────────────────────────────────────────
  // WEANING GUIDE
  // ─────────────────────────────────────────────
  {
    id: 'wea-1',
    courseId: 'weaning',
    question: 'What is the "don\'t offer, don\'t refuse" approach to weaning?',
    options: [
      'Never feeding the baby at all',
      'Refusing to breastfeed when the baby asks',
      'Not initiating nursing but also not refusing when baby wants to nurse',
      'Only offering one breast per session'
    ],
    correctIndex: 2,
    explanation: '"Don\'t offer, don\'t refuse" is a gentle middle-ground weaning approach where the mother does not initiate nursing sessions but does not refuse when the baby seeks to nurse, allowing a gradual transition.'
  },
  {
    id: 'wea-2',
    courseId: 'weaning',
    question: 'Why is gradual weaning generally recommended over abrupt weaning?',
    options: [
      'It is the only medically acceptable method',
      'It reduces the risk of engorgement, clogged ducts, mastitis, and intense hormonal shifts',
      'Abrupt weaning is illegal in most countries',
      'Babies cannot handle any change in feeding'
    ],
    correctIndex: 1,
    explanation: 'Gradual weaning is recommended because it allows your body to slowly adjust production, reducing the risk of engorgement, clogged ducts, and mastitis. It also softens the hormonal transition for your mood.'
  },
  {
    id: 'wea-3',
    courseId: 'weaning',
    question: 'When dropping feeds during weaning, how long should you wait between dropping each feeding?',
    options: [
      'Drop all feeds at once',
      '3-7 days between dropping each feed',
      'At least 1 month between each',
      '24 hours between each'
    ],
    correctIndex: 1,
    explanation: 'Waiting 3-7 days between dropping each feeding gives your body time to adjust production gradually and reduces the risk of complications like engorgement and mastitis.'
  },
  {
    id: 'wea-4',
    courseId: 'weaning',
    question: 'What is post-weaning depression?',
    options: [
      'A myth with no scientific basis',
      'A real condition caused by the drop in prolactin and oxytocin after weaning',
      'Depression that only occurs if you wean before 1 year',
      'A condition caused by the baby missing breastfeeding'
    ],
    correctIndex: 1,
    explanation: 'Post-weaning depression is a real and under-recognized condition caused by the rapid drop in prolactin and oxytocin when breastfeeding ends. It usually improves within 2-4 weeks, but professional help should be sought if symptoms are severe.'
  },
  {
    id: 'wea-5',
    courseId: 'weaning',
    question: 'Is wanting to stop breastfeeding a valid reason to wean?',
    options: [
      'No, you should only wean for medical reasons',
      'Only if a doctor recommends it',
      'Yes, wanting to stop is a completely valid reason',
      'Only after the baby is 2 years old'
    ],
    correctIndex: 2,
    explanation: 'Wanting to stop is a completely valid reason to wean. You do not need medical justification. The right time to wean is whenever it is right for you and your family.'
  },
  {
    id: 'wea-6',
    courseId: 'weaning',
    question: 'What typically happens to fertility after weaning?',
    options: [
      'Fertility does not return for several months',
      'Fertility typically returns quickly once nursing stops',
      'Fertility is not affected by breastfeeding',
      'You cannot conceive for a year after weaning'
    ],
    correctIndex: 1,
    explanation: 'Fertility typically returns quickly once nursing frequency drops or stops entirely. If your period has not yet returned during breastfeeding, expect it soon after weaning. First periods may be irregular.'
  },
  {
    id: 'wea-7',
    courseId: 'weaning',
    question: 'Is it normal for breasts to leak for weeks or months after weaning?',
    options: [
      'No, this indicates a problem',
      'Only if you weaned abruptly',
      'Yes, occasional leaking for weeks or even months is normal',
      'Only during the first week'
    ],
    correctIndex: 2,
    explanation: 'Some leaking for weeks or even months after weaning is completely normal. It does not mean anything is wrong; it simply takes time for milk production to fully shut down.'
  },
  {
    id: 'wea-8',
    courseId: 'weaning',
    question: 'Which feed is usually recommended to drop LAST during gradual weaning?',
    options: [
      'The first morning feed',
      'The midday feed',
      'The bedtime or most emotionally cherished feed',
      'The feed with the highest volume'
    ],
    correctIndex: 2,
    explanation: 'The most emotionally cherished feed (usually bedtime or morning) is typically recommended to drop last. These sessions can continue as the "only" nursing sessions for as long as you want.'
  },
  {
    id: 'wea-9',
    courseId: 'weaning',
    question: 'If you feel grief about weaning even though you chose to stop, is that normal?',
    options: [
      'No, you should feel only relief if it was your choice',
      'Yes, grief is completely normal and does not mean you made the wrong decision',
      'Only if you stopped before 6 months',
      'No, grief means you should continue breastfeeding'
    ],
    correctIndex: 1,
    explanation: 'Grief about weaning is completely normal, even when it was your choice. Grief does not mean you made the wrong decision. Breastfeeding marks a unique relationship, and it is natural to mourn its ending.'
  },
  {
    id: 'wea-10',
    courseId: 'weaning',
    question: 'During abrupt or emergency weaning, what should you do for breast comfort?',
    options: [
      'Pump to completely empty breasts each time',
      'Express just enough for comfort (not to empty), use ibuprofen and ice packs',
      'Bind breasts tightly with bandages',
      'Take hot showers for extended periods'
    ],
    correctIndex: 1,
    explanation: 'During abrupt weaning, express only enough milk for comfort (not to empty, which signals more production). Ibuprofen helps with inflammation, and ice packs reduce swelling. Watch closely for signs of mastitis.'
  },

  // ─────────────────────────────────────────────
  // POSTPARTUM UPLIFT
  // ─────────────────────────────────────────────
  {
    id: 'upl-1',
    courseId: 'postpartum-uplift',
    question: 'After delivery, estrogen and progesterone drop by up to what percentage within 48 hours?',
    options: ['25%', '50%', '75%', '90%'],
    correctIndex: 3,
    explanation: 'Estrogen and progesterone drop by up to 90% within 48 hours of delivery. This is one of the steepest hormonal shifts the human body ever experiences and contributes to the "baby blues."'
  },
  {
    id: 'upl-2',
    courseId: 'postpartum-uplift',
    question: 'What percentage of new mothers experience the "baby blues" in the first two weeks?',
    options: ['About 20%', 'About 40%', 'About 60%', 'Up to 80%'],
    correctIndex: 3,
    explanation: 'Up to 80% of new mothers experience the "baby blues" (mood swings, crying, anxiety) in the first two weeks. This is normal and typically resolves on its own as hormones stabilize.'
  },
  {
    id: 'upl-3',
    courseId: 'postpartum-uplift',
    question: 'According to research, what is the single strongest predictor of postpartum depression?',
    options: ['Poor diet', 'Lack of exercise', 'Sleep deprivation', 'Breastfeeding difficulty'],
    correctIndex: 2,
    explanation: 'Research published in Sleep Medicine Reviews identifies sleep deprivation as the single strongest predictor of postpartum depression. Even one extra hour of sleep per night significantly reduces PPD risk.'
  },
  {
    id: 'upl-4',
    courseId: 'postpartum-uplift',
    question: 'How can morning sunlight benefit a new mother?',
    options: [
      'It increases milk supply directly',
      'It helps regulate circadian rhythm, boosts serotonin, and supports Vitamin D levels',
      'It reduces breast engorgement',
      'It helps the baby sleep better at night only'
    ],
    correctIndex: 1,
    explanation: 'Morning sunlight (15-20 minutes) helps regulate your circadian clock, boosts serotonin production, and supports Vitamin D levels. Low Vitamin D has been linked to increased risk of postpartum depression.'
  },
  {
    id: 'upl-5',
    courseId: 'postpartum-uplift',
    question: 'Breastfeeding mothers have lower cortisol responses to stress compared to non-breastfeeding mothers. Which hormone is responsible?',
    options: ['Prolactin', 'Estrogen', 'Oxytocin', 'Progesterone'],
    correctIndex: 2,
    explanation: 'Oxytocin, released during every breastfeeding session, has been shown to lower cortisol responses to stress. Your nursing sessions are literally helping rewire your brain for calm.'
  },
  {
    id: 'upl-6',
    courseId: 'postpartum-uplift',
    question: 'How does social support affect postpartum depression risk?',
    options: [
      'It has no measurable effect',
      'Mothers with strong social support have up to 60% lower rates of PPD',
      'Only professional support helps, not personal relationships',
      'Social support only matters in the first week'
    ],
    correctIndex: 1,
    explanation: 'Research shows that mothers with strong social support have up to 60% lower rates of postpartum depression. Even a brief phone call with a friend provides measurable benefit.'
  },
  {
    id: 'upl-7',
    courseId: 'postpartum-uplift',
    question: 'What did a 2019 study in the British Journal of Sports Medicine find about walking?',
    options: [
      'Walking has no effect on mood',
      'Only running provides mood benefits',
      'Just 10 minutes of brisk walking can significantly improve mood for up to 2 hours',
      'You need to walk at least 60 minutes for any benefit'
    ],
    correctIndex: 2,
    explanation: 'A 2019 study found that just 10 minutes of brisk walking can significantly improve mood for up to two hours. Walking with your baby provides fresh air, sunlight, and gentle exercise without strain.'
  },
  {
    id: 'upl-8',
    courseId: 'postpartum-uplift',
    question: 'Which herb has been shown in a randomized controlled trial to significantly increase breast milk volume?',
    options: ['Chamomile', 'Moringa', 'Lavender', 'Peppermint'],
    correctIndex: 1,
    explanation: 'A 2016 randomized controlled trial published in the Journal of Medicinal Food found that moringa leaf supplements significantly increased milk volume in breastfeeding mothers. Moringa is also rich in iron, calcium, and vitamins.'
  },
  {
    id: 'upl-9',
    courseId: 'postpartum-uplift',
    question: 'What type of therapy does research strongly support for postpartum mood disorders?',
    options: [
      'Only medication, not therapy',
      'Cognitive Behavioral Therapy (CBT) and Interpersonal Therapy (IPT)',
      'Only group therapy',
      'Aromatherapy exclusively'
    ],
    correctIndex: 1,
    explanation: 'Research strongly supports Cognitive Behavioral Therapy (CBT) and Interpersonal Therapy (IPT) for treating postpartum mood disorders. Many therapists offer telehealth sessions that can be attended while baby naps or nurses.'
  },
  {
    id: 'upl-10',
    courseId: 'postpartum-uplift',
    question: 'Postpartum depression affects approximately how many mothers?',
    options: ['1 in 50', '1 in 20', '1 in 7', '1 in 3'],
    correctIndex: 2,
    explanation: 'Postpartum depression affects approximately 1 in 7 mothers. It is a medical condition, not a character flaw, and is highly treatable with professional support.'
  },
  {
    id: 'upl-11',
    courseId: 'postpartum-uplift',
    question: 'Why is bone broth recommended in many postpartum traditions around the world?',
    options: [
      'It directly increases milk supply',
      'It is warm, nourishing, and rich in collagen, glycine, and minerals',
      'It replaces the need for prenatal vitamins',
      'It prevents all postpartum complications'
    ],
    correctIndex: 1,
    explanation: 'Bone broth is recommended in many postpartum traditions because it is warm, nourishing, and rich in collagen, glycine, and minerals. The warmth itself supports relaxation and can aid letdown.'
  }
];

// Get quiz questions for a specific course
export function getQuizByCourseId(courseId: string): QuizQuestion[] {
  return quizQuestions.filter(q => q.courseId === courseId);
}

// Get a random selection of quiz questions from across all courses
export function getRandomQuiz(count: number): QuizQuestion[] {
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, quizQuestions.length));
}

// Get a single random question for a specific course
export function getRandomQuestionForCourse(courseId: string): QuizQuestion | undefined {
  const courseQuestions = quizQuestions.filter(q => q.courseId === courseId);
  if (courseQuestions.length === 0) return undefined;
  return courseQuestions[Math.floor(Math.random() * courseQuestions.length)];
}
