export interface Symptom {
  id: string;
  name: string;
  category: 'physical' | 'emotional' | 'baby-related' | 'supply';
  alsoCalled: string[];
  whatItIs: string;
  whyItHappens: string;
  hormones?: string[];
  whatHelps: string[];
  redFlags: string[];
  affectsPercent?: string;
  isNormal: boolean;
}

export const symptoms: Symptom[] = [
  // ============================================
  // PHYSICAL SYMPTOMS (22)
  // ============================================
  {
    id: 'engorgement',
    name: 'Engorgement',
    category: 'physical',
    alsoCalled: ['Swollen breasts', 'Hard breasts', 'Painful fullness', 'Overfull breasts'],
    whatItIs: 'Engorgement is when your breasts become overly full, hard, and often painful. They may feel heavy, warm, and tight. The skin might appear shiny or stretched. It commonly occurs when milk "comes in" around days 3-5 postpartum, or when feedings are missed or delayed.',
    whyItHappens: 'When milk production ramps up (or when milk isn\'t removed frequently enough), both milk AND extra blood and fluid rush to your breasts. This combination of milk accumulation and vascular congestion creates the painful, rock-hard feeling. Your body is learning how much milk to make based on demand.',
    hormones: ['Prolactin', 'Progesterone withdrawal'],
    whatHelps: [
      'Nurse or pump frequently (every 2-3 hours)',
      'Apply cold compresses between feeds to reduce swelling',
      'Use warm compresses or shower right before feeding to encourage letdown',
      'Gentle breast massage while feeding',
      'Hand express a small amount before latching to soften the areola',
      'Reverse pressure softening around the nipple',
      'Wear a supportive (not tight) bra',
      'Cabbage leaves in your bra (surprisingly effective)'
    ],
    redFlags: [
      'Fever over 101°F (38.3°C)',
      'Red streaks on the breast',
      'Engorgement lasting more than 48 hours without improvement',
      'Flu-like symptoms (could indicate mastitis)'
    ],
    isNormal: true
  },
  {
    id: 'cracked-nipples',
    name: 'Cracked or Bleeding Nipples',
    category: 'physical',
    alsoCalled: ['Damaged nipples', 'Nipple wounds', 'Nipple trauma', 'Split nipples'],
    whatItIs: 'Cracks, fissures, or bleeding on or around the nipple. This can range from small surface cracks to deeper wounds. You may see blood in your pumped milk or baby\'s spit-up (this is safe for baby).',
    whyItHappens: 'Almost always caused by latch issues — baby is not taking enough breast tissue into their mouth, creating friction and compression on the nipple instead of the areola. Other causes include thrush, pump flanges that are too small or too large, or dry skin.',
    hormones: ['Oxytocin (affects skin elasticity)'],
    whatHelps: [
      'Get a latch assessment from an IBCLC',
      'Apply expressed breast milk to nipples after feeding',
      'Use medical-grade lanolin or nipple balm',
      'Let nipples air dry after feeding',
      'Try different nursing positions (laid-back nursing often helps)',
      'Check pump flange size — wrong size is a common culprit',
      'Hydrogel pads can provide relief and promote healing',
      'Saline rinses to keep wounds clean'
    ],
    redFlags: [
      'Signs of infection (pus, increasing redness, fever)',
      'Pain that doesn\'t improve with latch correction',
      'White patches on nipple (possible thrush)',
      'Cracks that won\'t heal after 1-2 weeks of treatment'
    ],
    isNormal: true
  },
  {
    id: 'nipple-pain',
    name: 'Nipple Pain',
    category: 'physical',
    alsoCalled: ['Sore nipples', 'Painful nursing', 'Nipple sensitivity', 'Burning nipples'],
    whatItIs: 'Pain in the nipple during, after, or between breastfeeding sessions. This can feel like burning, stinging, sharp pain, or deep aching. Some tenderness in the first 1-2 weeks is common, but severe or persistent pain is not normal.',
    whyItHappens: 'The most common cause is latch issues. Other causes include: tongue tie in baby, thrush (yeast infection), vasospasm (blood vessel spasms), bacterial infection, eczema or dermatitis, or pump-related damage.',
    hormones: ['Oxytocin', 'Prolactin'],
    whatHelps: [
      'First rule out latch issues with professional help',
      'Try laid-back breastfeeding positions',
      'Ensure baby\'s mouth opens wide before latching',
      'Break suction gently with your finger before unlatching',
      'Apply breast milk and let air dry',
      'Use appropriate nipple cream between feeds',
      'For vasospasm: keep nipples warm, avoid cold air',
      'For thrush: seek treatment for both you and baby'
    ],
    redFlags: [
      'Pain that gets worse over time instead of better',
      'Shooting or burning pain deep in the breast',
      'White, flattened, or misshapen nipple after feeding',
      'Color changes in nipple (white, blue, red cycle)',
      'Baby shows signs of oral thrush (white patches in mouth)'
    ],
    isNormal: true
  },
  {
    id: 'breast-pain',
    name: 'Breast Pain',
    category: 'physical',
    alsoCalled: ['Mastalgia', 'Sore breasts', 'Aching breasts', 'Tender breasts'],
    whatItIs: 'Pain that occurs in the breast tissue itself, rather than just the nipple. This can feel like aching, throbbing, sharp pain, or heavy soreness. The location and type of pain can help identify the cause.',
    whyItHappens: 'Can be caused by engorgement, clogged ducts, mastitis, letdown reflex, oversupply, or simply the breasts adjusting to milk production. Hormonal fluctuations throughout your cycle can also cause breast tenderness.',
    hormones: ['Prolactin', 'Estrogen', 'Progesterone', 'Oxytocin'],
    whatHelps: [
      'Feed frequently to prevent engorgement',
      'Vary nursing positions to drain all areas',
      'Gentle massage toward the nipple while feeding',
      'Warm compress before feeding, cold after',
      'Supportive (not restrictive) bra',
      'Check for clogged ducts — feel for hard lumps',
      'Anti-inflammatory medication if approved by your provider',
      'Lecithin supplements may help prevent clogs'
    ],
    redFlags: [
      'Fever combined with breast pain',
      'Red, hot, wedge-shaped area on breast',
      'Flu-like symptoms',
      'Hard lump that doesn\'t resolve after nursing',
      'Pain that is severe or rapidly worsening'
    ],
    isNormal: true
  },
  {
    id: 'clogged-ducts',
    name: 'Clogged Ducts',
    category: 'physical',
    alsoCalled: ['Plugged ducts', 'Blocked ducts', 'Milk blister', 'Bleb'],
    whatItIs: 'A clogged duct occurs when milk flow is blocked in part of the breast. You\'ll typically feel a firm, tender lump. The area may be red and warm. A milk blister (bleb) is a small white spot on the nipple where a duct opening is blocked.',
    whyItHappens: 'Milk ducts can become clogged due to: incomplete breast drainage, pressure on the breast (tight bra, sleeping position, baby carrier strap), skipped feedings, oversupply, or stress and fatigue which can affect milk flow.',
    hormones: ['Prolactin', 'Oxytocin'],
    whatHelps: [
      'Continue nursing frequently — this is the best treatment',
      'Start feeds on the affected side',
      'Apply heat before feeding (warm compress, shower)',
      'Massage the lump toward the nipple while feeding',
      'Try "dangle feeding" (nursing on all fours, gravity helps)',
      'Vibration can help — use an electric toothbrush on the area',
      'For blebs: soak nipple in warm water and gently exfoliate',
      'Lecithin supplements (3600-4800mg daily) may prevent recurrence',
      'Stay hydrated and rest'
    ],
    redFlags: [
      'Lump doesn\'t resolve within 24-48 hours',
      'Fever develops',
      'Red streaking appears',
      'You develop flu-like symptoms',
      'The area becomes increasingly painful'
    ],
    isNormal: true
  },
  {
    id: 'mastitis',
    name: 'Mastitis',
    category: 'physical',
    alsoCalled: ['Breast infection', 'Inflammatory mastitis', 'Infectious mastitis'],
    whatItIs: 'Mastitis is inflammation of the breast tissue that may or may not involve infection. Symptoms include: a painful, red, wedge-shaped area on the breast, fever (often sudden onset), flu-like symptoms (body aches, chills), and feeling generally unwell.',
    whyItHappens: 'Mastitis often develops from an untreated clogged duct. Bacteria can enter through cracked nipples. Risk factors include: incomplete breast drainage, fatigue, stress, damaged nipples, and tight clothing. It\'s more common in the first 6 weeks but can occur anytime.',
    hormones: ['Prolactin', 'Cortisol (stress response)'],
    whatHelps: [
      'Continue breastfeeding — this is crucial for recovery',
      'Rest as much as possible (this is medical advice, not just nice advice)',
      'Apply heat before feeding, cold after',
      'Gentle massage from the affected area toward the nipple',
      'Stay hydrated',
      'Anti-inflammatory pain relievers (ibuprofen is safe while nursing)',
      'Probiotics may help',
      'Antibiotics if symptoms don\'t improve in 12-24 hours or worsen'
    ],
    redFlags: [
      'Fever over 101°F that doesn\'t respond to treatment',
      'Symptoms worsen despite treatment',
      'Red area grows or becomes more painful',
      'Pus discharge from nipple',
      'You\'ve been on antibiotics for 48+ hours with no improvement',
      'Symptoms return shortly after completing antibiotics'
    ],
    affectsPercent: '10-20% of breastfeeding mothers',
    isNormal: true
  },
  {
    id: 'thrush',
    name: 'Thrush (Nipple/Breast)',
    category: 'physical',
    alsoCalled: ['Yeast infection', 'Candida', 'Nipple thrush', 'Breast thrush', 'Ductal thrush'],
    whatItIs: 'A fungal infection (Candida) that can affect the nipples and/or milk ducts. Symptoms include: shiny, flaky, or pink nipples; intense burning or shooting pain during and after feeds; pain that doesn\'t improve with latch correction; itching.',
    whyItHappens: 'Candida (yeast) naturally lives on our skin. It can overgrow after antibiotic use, in warm/moist environments, or when the immune system is stressed. Baby and mother pass it back and forth, which is why both must be treated.',
    hormones: ['Estrogen levels affect yeast growth'],
    whatHelps: [
      'See a healthcare provider — you\'ll need antifungal treatment',
      'Both mother and baby must be treated simultaneously',
      'Keep nipples dry between feeds',
      'Change breast pads frequently',
      'Wash bras daily in hot water',
      'Rinse nipples with a vinegar solution (1 tbsp per cup water)',
      'Probiotics may help restore balance',
      'Cut back on sugar and refined carbs',
      'Expose nipples to air and sunlight when possible'
    ],
    redFlags: [
      'Symptoms don\'t improve after 7-10 days of treatment',
      'Deep, shooting pains in the breast',
      'Baby has trouble feeding or refuses breast',
      'Symptoms keep recurring'
    ],
    isNormal: true
  },
  {
    id: 'vasospasm',
    name: 'Vasospasm (Nipple Blanching)',
    category: 'physical',
    alsoCalled: ['Raynaud\'s of the nipple', 'White nipple', 'Nipple blanching', 'Nipple color changes'],
    whatItIs: 'Vasospasm is when blood vessels in the nipple constrict, cutting off blood flow. The nipple turns white (or sometimes blue), then red as blood returns. This causes intense, burning or throbbing pain. Often triggered by cold or after baby unlatches.',
    whyItHappens: 'Blood vessels overreact and constrict, usually in response to cold, trauma from a poor latch, or an underlying tendency toward Raynaud\'s phenomenon. It\'s essentially a circulation issue in the nipple.',
    hormones: ['Adrenaline', 'Circulation affected by stress response'],
    whatHelps: [
      'Keep nipples warm — cover immediately after feeding',
      'Use breast warmers or heat packs',
      'Avoid cold air on nipples',
      'Massage the nipple when blanching occurs to restore blood flow',
      'Check for and correct any latch issues',
      'Avoid caffeine and nicotine (both constrict blood vessels)',
      'Magnesium and calcium supplements may help',
      'In severe cases, medications like nifedipine may be prescribed'
    ],
    redFlags: [
      'Color changes accompanied by extreme pain that doesn\'t resolve',
      'Signs of infection',
      'Vasospasm affecting other body parts (fingers, toes)',
      'Pain that makes breastfeeding unbearable despite interventions'
    ],
    isNormal: true
  },
  {
    id: 'letdown-pain',
    name: 'Letdown Pain',
    category: 'physical',
    alsoCalled: ['Painful letdown', 'Tingling letdown', 'Pins and needles', 'Milk ejection pain'],
    whatItIs: 'A tingling, prickling, or sometimes painful sensation when your milk lets down. Some women feel this as intense pressure or even sharp pain. The sensation usually lasts 30 seconds to 2 minutes.',
    whyItHappens: 'When oxytocin triggers the milk ejection reflex, the muscle cells around your milk glands contract to push milk toward the nipple. Some women feel this more intensely than others. It often becomes less noticeable over time.',
    hormones: ['Oxytocin', 'Prolactin'],
    whatHelps: [
      'Know that this often improves over the first few months',
      'Deep breathing when you feel letdown starting',
      'Warm compress on breasts',
      'Gentle massage before feeding',
      'Try not to tense up — relaxation helps',
      'Ensure baby is well-latched to optimize flow',
      'For painful oversupply letdown, express a bit before latching baby'
    ],
    redFlags: [
      'Pain that is severe and doesn\'t improve',
      'Pain accompanied by lumps or redness',
      'Shooting pains between feedings (may indicate thrush)',
      'Pain that makes you dread or avoid feeding'
    ],
    isNormal: true
  },
  {
    id: 'oversupply',
    name: 'Oversupply',
    category: 'physical',
    alsoCalled: ['Hyperlactation', 'Too much milk', 'Overproduction', 'Hypergalactia'],
    whatItIs: 'Producing more milk than your baby needs. Signs include: constantly engorged breasts, leaking heavily, forceful letdown that overwhelms baby, baby choking/gulping/pulling off during feeds, green frothy stools in baby, and recurrent clogged ducts.',
    whyItHappens: 'Oversupply can result from: hormonal factors, excessive pumping in addition to nursing, switching breasts too frequently before baby fully drains one side, or simply how your body responds to breastfeeding. Some women naturally produce more.',
    hormones: ['Prolactin (elevated)', 'Oxytocin'],
    whatHelps: [
      'Block feeding: nurse from one breast per feeding or for set time blocks',
      'Don\'t pump unless necessary (it signals more production)',
      'Let baby finish one breast completely before offering the other',
      'Laid-back or side-lying positions can help baby manage flow',
      'Express just enough to relieve discomfort, not to empty',
      'Cabbage leaves may help reduce supply',
      'Peppermint or sage tea may decrease supply (use carefully)',
      'Work with an IBCLC for a managed approach'
    ],
    redFlags: [
      'Baby not gaining weight despite plenty of milk',
      'Recurrent mastitis',
      'Baby is extremely fussy or has excessive gas/green stools',
      'You\'re in significant pain or distress'
    ],
    isNormal: true
  },
  {
    id: 'leaking',
    name: 'Leaking Breasts',
    category: 'physical',
    alsoCalled: ['Milk leaking', 'Spontaneous letdown', 'Dripping breasts'],
    whatItIs: 'Milk leaking from your breasts unexpectedly — when you hear a baby cry, think about your baby, during intimacy, or randomly. More common in early months and often occurs from the breast not being nursed when feeding from the other side.',
    whyItHappens: 'Your letdown reflex can be triggered by various stimuli (sound, smell, thoughts, touch). In early weeks, your body is still learning regulation. Leaking from the opposite breast during feeding is due to the oxytocin release affecting both breasts.',
    hormones: ['Oxytocin', 'Prolactin'],
    whatHelps: [
      'Wear breast pads (disposable or reusable)',
      'Press firmly on your nipple when you feel letdown starting in public',
      'Cross your arms and apply pressure to stop flow',
      'Keep an extra shirt handy',
      'Dark patterns hide leaks better',
      'Use a milk collector shell on the non-nursing side',
      'Know that leaking typically decreases after the first few months'
    ],
    redFlags: [
      'Leaking accompanied by breast pain or fever',
      'One breast leaking significantly more than the other with lumps',
      'Bloody discharge from nipple'
    ],
    isNormal: true
  },
  {
    id: 'uneven-breasts',
    name: 'Uneven Breast Size',
    category: 'physical',
    alsoCalled: ['Lopsided breasts', 'Asymmetrical breasts', 'One breast bigger'],
    whatItIs: 'One breast producing more milk and/or being noticeably larger than the other. This is extremely common. Many women have one "slacker" breast that produces less milk.',
    whyItHappens: 'Breast tissue and milk glands aren\'t always evenly distributed. Babies often prefer one side (better flow, easier latch). The preferred breast gets more stimulation and produces more milk. It\'s a feedback loop.',
    hormones: ['Prolactin (responds to demand)'],
    whatHelps: [
      'Start feeds on the smaller/lower-producing side when baby is hungriest',
      'Offer the smaller side more frequently',
      'Pump the smaller side after feeds for extra stimulation',
      'Don\'t obsess — your baby is likely getting plenty of milk',
      'The difference often evens out over time',
      'Accept that some asymmetry is normal and okay'
    ],
    redFlags: [
      'Sudden change in one breast\'s production',
      'Lump in the smaller breast',
      'Pain or redness in either breast',
      'Baby refusing one breast completely (could indicate an issue)'
    ],
    isNormal: true
  },
  {
    id: 'intense-thirst',
    name: 'Intense Thirst',
    category: 'physical',
    alsoCalled: ['Extreme thirst', 'Dehydration feeling', 'Constant thirst while nursing'],
    whatItIs: 'Feeling extremely thirsty, especially during or right after nursing. Many mothers describe a sudden, intense thirst the moment baby latches. You may feel like you can\'t drink enough water.',
    whyItHappens: 'Breast milk is about 87% water. Your body is using significant fluid to produce milk. The oxytocin released during letdown also triggers thirst as a biological signal to drink and replenish fluids.',
    hormones: ['Oxytocin', 'Antidiuretic hormone (ADH)'],
    whatHelps: [
      'Keep a large water bottle within reach during every feed',
      'Drink to thirst — your body knows what it needs',
      'Aim for about 100+ oz of fluids daily',
      'Water, milk, and electrolyte drinks all count',
      'Fruits and vegetables with high water content help too',
      'Set reminders if you forget to drink',
      'Note: you can\'t "drink more to make more milk" but dehydration can affect supply'
    ],
    redFlags: [
      'Signs of dehydration (dark urine, dizziness, headache)',
      'Excessive thirst with frequent urination (check blood sugar)',
      'Thirst that seems unquenchable despite drinking plenty'
    ],
    isNormal: true
  },
  {
    id: 'extreme-hunger',
    name: 'Extreme Hunger',
    category: 'physical',
    alsoCalled: ['Intense hunger', 'Insatiable appetite', 'Breastfeeding hunger', 'Nursing munchies'],
    whatItIs: 'Feeling ravenously hungry, often coming on suddenly and intensely. Many mothers describe a hunger unlike anything they\'ve experienced — a deep, urgent need to eat. This is especially common in the early months.',
    whyItHappens: 'Breastfeeding burns 300-500 extra calories per day. Your body is literally using food to create food for your baby. Hormones like prolactin and ghrelin drive hunger signals. This is biological and appropriate.',
    hormones: ['Prolactin', 'Ghrelin', 'Leptin', 'Insulin'],
    whatHelps: [
      'Eat when hungry — this is not the time for restriction',
      'Keep easy snacks everywhere (nightstand, nursing station, bag)',
      'Protein and healthy fats help you stay satisfied longer',
      'Prepare food in advance when possible',
      'One-handed snacks are your friend',
      'Complex carbs provide sustained energy',
      'Don\'t skip meals',
      'Accept help with meal prep'
    ],
    redFlags: [
      'Unable to feel satisfied no matter how much you eat',
      'Rapid weight loss despite eating well',
      'Dizziness, fainting, or extreme fatigue',
      'Signs of disordered eating patterns emerging'
    ],
    isNormal: true
  },
  {
    id: 'night-sweats',
    name: 'Night Sweats',
    category: 'physical',
    alsoCalled: ['Postpartum sweating', 'Sweating while sleeping', 'Hormonal sweating'],
    whatItIs: 'Waking up drenched in sweat, sometimes needing to change clothes or sheets. This is extremely common in the first few weeks postpartum and can continue while breastfeeding. You may also notice increased sweating during the day.',
    whyItHappens: 'Your body is eliminating the extra fluid retained during pregnancy. Dramatic hormone shifts (especially estrogen dropping) affect your body\'s temperature regulation. Prolactin and the work of milk production also contribute to sweating.',
    hormones: ['Estrogen (dropping)', 'Progesterone (dropping)', 'Prolactin'],
    whatHelps: [
      'Layer bedding so you can adjust easily',
      'Wear moisture-wicking sleepwear',
      'Keep the room cool',
      'Put a towel on your pillow',
      'Stay hydrated to replace lost fluids',
      'Know it typically improves after the first few weeks',
      'Keep a change of clothes nearby for nighttime'
    ],
    redFlags: [
      'Night sweats accompanied by fever',
      'Sweats continuing heavily beyond 6 weeks postpartum',
      'Sweats accompanied by unexplained weight loss',
      'Racing heart or anxiety with sweats'
    ],
    isNormal: true
  },
  {
    id: 'hair-loss',
    name: 'Postpartum Hair Loss',
    category: 'physical',
    alsoCalled: ['Hair shedding', 'Postpartum shedding', 'Hair falling out', 'Telogen effluvium'],
    whatItIs: 'Significant hair shedding that typically starts around 3-4 months postpartum. You may notice hair everywhere — in the shower drain, on your pillow, coming out in clumps when brushing. It can feel alarming but is temporary.',
    whyItHappens: 'During pregnancy, high estrogen levels keep hair in the growing phase longer than usual. After birth, estrogen plummets, and all that "extra" hair enters the shedding phase at once. You\'re not losing extra hair — you\'re losing what you would have shed over 9 months.',
    hormones: ['Estrogen (dropping)', 'Progesterone', 'Thyroid hormones'],
    whatHelps: [
      'Know that this is temporary — it peaks around 4-6 months and resolves',
      'Continue taking prenatal vitamins',
      'Eat protein-rich foods (hair is made of protein)',
      'Be gentle with hair — avoid tight styles and excessive heat',
      'A shorter haircut can make shedding less noticeable',
      'Volumizing products can help',
      'Get thyroid levels checked if shedding seems excessive'
    ],
    redFlags: [
      'Hair loss continuing past 12 months postpartum',
      'Bald patches (this is different from general shedding)',
      'Hair loss accompanied by extreme fatigue, weight changes, or cold intolerance',
      'Significant thinning that doesn\'t show regrowth'
    ],
    isNormal: true
  },
  {
    id: 'exhaustion',
    name: 'Exhaustion and Fatigue',
    category: 'physical',
    alsoCalled: ['Extreme tiredness', 'Bone-deep fatigue', 'Sleep deprivation effects'],
    whatItIs: 'Profound, persistent tiredness that goes beyond normal tiredness. You may feel like you can\'t function, have difficulty concentrating, feel weak, or experience "brain fog." This is one of the most universal experiences of new motherhood.',
    whyItHappens: 'Fragmented sleep, the physical demands of milk production (which happens 24/7), hormonal shifts, and the overall adjustment to caring for a newborn all contribute. Your body is doing an enormous amount of work.',
    hormones: ['Prolactin', 'Cortisol', 'Thyroid hormones', 'Iron levels'],
    whatHelps: [
      'Sleep when baby sleeps (yes, really)',
      'Accept all offers of help',
      'Keep baby close for easier night feeds',
      'Lower your standards for everything except rest',
      'Eat nutrient-dense foods',
      'Stay hydrated',
      'Get outside for fresh air and light when possible',
      'Consider having partner do a "shift" with pumped milk'
    ],
    redFlags: [
      'Fatigue accompanied by depression or inability to bond with baby',
      'Extreme fatigue with hair loss and cold intolerance (thyroid)',
      'Dizziness, shortness of breath, racing heart (anemia)',
      'Unable to get out of bed or care for baby'
    ],
    isNormal: true
  },
  {
    id: 'headaches',
    name: 'Headaches While Nursing',
    category: 'physical',
    alsoCalled: ['Letdown headaches', 'Breastfeeding migraines', 'Lactation headaches'],
    whatItIs: 'Headaches that occur during nursing, with letdown, or in the postpartum period generally. Some mothers experience a specific "letdown headache" right when milk releases.',
    whyItHappens: 'Dehydration is a common cause — you lose significant fluid through milk. Hormonal fluctuations can trigger migraines. Oxytocin release during letdown affects blood vessels. Tension from nursing posture, fatigue, and stress also contribute.',
    hormones: ['Oxytocin', 'Estrogen', 'Prolactin'],
    whatHelps: [
      'Drink water before and during every nursing session',
      'Keep a water bottle at your nursing station',
      'Check your posture — use supportive pillows',
      'Address neck and shoulder tension',
      'Take safe pain relievers (acetaminophen, ibuprofen)',
      'Caffeine in moderation may help (and can trigger — know your body)',
      'Ensure adequate rest',
      'Track patterns to identify triggers'
    ],
    redFlags: [
      'Sudden, severe headache ("worst headache of your life")',
      'Headache with vision changes, confusion, or slurred speech',
      'Headache with high blood pressure',
      'Headaches that don\'t respond to normal treatment'
    ],
    isNormal: true
  },
  {
    id: 'back-neck-pain',
    name: 'Back and Neck Pain',
    category: 'physical',
    alsoCalled: ['Nursing posture pain', 'Breastfeeding back pain', 'Shoulder pain'],
    whatItIs: 'Pain in the back, neck, and shoulders that develops from the positions and duration of breastfeeding. Often felt as muscle tension, stiffness, or aching. Can become chronic if not addressed.',
    whyItHappens: 'Looking down at baby, hunching shoulders, holding awkward positions for extended periods, carrying baby on one side, and using one arm more than the other all contribute. Weakened core muscles postpartum add to the strain.',
    whatHelps: [
      'Bring baby to breast, not breast to baby',
      'Use lots of pillows for support',
      'Keep your back straight and shoulders relaxed',
      'Try different nursing positions',
      'Stretch between feeds',
      'Gentle postpartum exercise when cleared',
      'Consider a nursing pillow that supports baby\'s weight',
      'Massage or physical therapy for persistent pain'
    ],
    redFlags: [
      'Pain radiating down arms or legs',
      'Numbness or tingling',
      'Pain that significantly limits movement',
      'Pain accompanied by other concerning symptoms'
    ],
    isNormal: true
  },
  {
    id: 'carpal-tunnel',
    name: 'Carpal Tunnel Symptoms',
    category: 'physical',
    alsoCalled: ['Wrist pain', 'Hand numbness', 'Mommy thumb', 'De Quervain\'s'],
    whatItIs: 'Numbness, tingling, or pain in the hands, wrists, and thumbs. This includes carpal tunnel syndrome (nerve compression in wrist) and De Quervain\'s tenosynovitis (tendon inflammation in thumb/wrist from baby holding).',
    whyItHappens: 'Fluid retention during pregnancy and postpartum can compress nerves. Repetitive motions of holding baby, latching, and pumping strain the wrists and hands. Hormones affect connective tissue elasticity.',
    hormones: ['Relaxin (still present postpartum)', 'Estrogen'],
    whatHelps: [
      'Wear wrist splints, especially at night',
      'Use pillows to support baby\'s weight instead of your hands',
      'Vary your holding positions',
      'Ice wrists to reduce inflammation',
      'Gentle stretching and range-of-motion exercises',
      'Avoid flexing wrists for extended periods',
      'Consider physical therapy',
      'Usually improves after weaning when fluid levels normalize'
    ],
    redFlags: [
      'Weakness or dropping things',
      'Symptoms affecting both hands severely',
      'Symptoms that don\'t improve or worsen significantly',
      'Loss of sensation'
    ],
    isNormal: true
  },
  {
    id: 'bleeding-changes',
    name: 'Postpartum Bleeding Changes',
    category: 'physical',
    alsoCalled: ['Lochia changes', 'Bleeding while nursing', 'Increased bleeding with nursing'],
    whatItIs: 'Changes in postpartum bleeding (lochia) patterns, especially increased bleeding or cramping during nursing. Many mothers notice more bleeding or clots passed during or after breastfeeding sessions in the early weeks.',
    whyItHappens: 'Oxytocin released during breastfeeding causes the uterus to contract, which helps it return to pre-pregnancy size (involution). These contractions can increase bleeding temporarily. This is actually beneficial — it helps prevent postpartum hemorrhage.',
    hormones: ['Oxytocin', 'Prolactin'],
    whatHelps: [
      'Know that increased bleeding/cramping with nursing is usually normal in first weeks',
      'Keep pain medication on hand for cramping',
      'Use appropriate postpartum pads',
      'Rest and don\'t overdo physical activity',
      'Track your bleeding patterns',
      'Bleeding should decrease overall over 4-6 weeks'
    ],
    redFlags: [
      'Soaking more than one pad per hour',
      'Large clots (bigger than a golf ball)',
      'Foul-smelling discharge',
      'Heavy bleeding returning after it had decreased',
      'Fever with bleeding changes',
      'Dizziness or faintness from blood loss'
    ],
    isNormal: true
  },

  // ============================================
  // EMOTIONAL/MENTAL SYMPTOMS (15)
  // ============================================
  {
    id: 'dmer',
    name: 'D-MER (Dysphoric Milk Ejection Reflex)',
    category: 'emotional',
    alsoCalled: ['Sad letdown', 'Depression during letdown', 'Negative feelings when nursing', 'Letdown dysphoria'],
    whatItIs: 'A sudden wave of negative emotions (sadness, anxiety, dread, irritability, or even nausea) that occurs in the 30-90 seconds BEFORE milk lets down. It\'s brief but can be intense. It is NOT the same as postpartum depression — it\'s a physiological response, not a psychological condition.',
    whyItHappens: 'When milk lets down, dopamine levels briefly drop to allow prolactin to rise. For some mothers, this dopamine drop triggers negative emotions. It\'s not your fault, it\'s not in your head, and it doesn\'t mean you don\'t love your baby.',
    hormones: ['Dopamine (drops)', 'Prolactin (rises)'],
    whatHelps: [
      'Know it\'s temporary — the feeling passes within 1-2 minutes',
      'Distraction during letdown (phone, TV, music, podcast)',
      'Track patterns to anticipate it',
      'Skin-to-skin contact can help some mothers',
      'Ensure adequate sleep and nutrition',
      'Some mothers find caffeine helps (dopamine boost)',
      'For severe cases, some medications can help — talk to your provider'
    ],
    redFlags: [
      'Feelings last longer than a few minutes',
      'You\'re experiencing depression or anxiety outside of nursing',
      'You\'re having thoughts of harming yourself or your baby',
      'D-MER is making you want to stop breastfeeding and you don\'t want to stop'
    ],
    affectsPercent: '9-14% of breastfeeding mothers',
    isNormal: true
  },
  {
    id: 'nursing-aversion',
    name: 'Nursing Aversion',
    category: 'emotional',
    alsoCalled: ['Breastfeeding aversion', 'Aversion and agitation', 'BAA', 'Touched out while nursing'],
    whatItIs: 'Intense feelings of irritation, skin-crawling, anger, or a strong urge to unlatch your baby while nursing. It can feel like you need to physically escape. Very different from D-MER — this can last throughout the feed.',
    whyItHappens: 'Can be triggered by pregnancy while nursing, nursing through menstruation, fatigue, depletion, nursing a toddler, or feeling "touched out." Hormonal shifts play a role. It\'s also believed to be a biological signal of depletion.',
    hormones: ['Estrogen', 'Progesterone', 'Oxytocin', 'Cortisol'],
    whatHelps: [
      'Shorten nursing sessions when possible',
      'Set boundaries around nursing (specific times, specific locations)',
      'Distraction — phone, TV, deep breathing',
      'Ensure you\'re not depleted (eating, sleeping, self-care)',
      'Address any resentment around feeding',
      'Know that weaning is an option if it\'s severely affecting you',
      'Talk to a therapist who understands breastfeeding'
    ],
    redFlags: [
      'Aversion causing thoughts of harming yourself or baby',
      'Complete inability to nurse with severe distress',
      'Severe depression or anxiety alongside',
      'Aversion accompanied by relationship breakdown'
    ],
    isNormal: true
  },
  {
    id: 'breastfeeding-anxiety',
    name: 'Breastfeeding Anxiety',
    category: 'emotional',
    alsoCalled: ['Nursing anxiety', 'Anxiety while feeding', 'Worrying about milk supply'],
    whatItIs: 'Persistent worry, fear, or anxiety related to breastfeeding. This might include: constant worry about supply, fear that baby isn\'t getting enough, checking diapers obsessively, pumping to "see" how much you make, or general anxiety that spikes around feeding.',
    whyItHappens: 'Hormonal changes affect mood regulation. Sleep deprivation amplifies anxiety. The pressure to breastfeed successfully combined with lack of visible measurement (unlike bottles) can drive worry. Past experiences and anxiety disorders can be exacerbated.',
    hormones: ['Cortisol', 'Prolactin', 'Oxytocin', 'Serotonin'],
    whatHelps: [
      'Focus on baby\'s output (wet and dirty diapers) not pump output',
      'Get baby weighed for reassurance if needed',
      'Limit Google searching — it often increases anxiety',
      'Talk to an IBCLC for professional reassurance',
      'Practice grounding techniques',
      'Connect with other breastfeeding mothers',
      'Consider therapy, especially if you have anxiety history',
      'Medication is safe to take while breastfeeding — talk to your provider'
    ],
    redFlags: [
      'Anxiety that prevents you from sleeping when baby sleeps',
      'Panic attacks',
      'Intrusive thoughts',
      'Anxiety affecting your ability to bond with or care for baby',
      'Physical symptoms (racing heart, difficulty breathing)'
    ],
    isNormal: true
  },
  {
    id: 'breastfeeding-rage',
    name: 'Breastfeeding Rage/Agitation',
    category: 'emotional',
    alsoCalled: ['Nursing rage', 'Anger while breastfeeding', 'Breastfeeding anger', 'Lactation rage'],
    whatItIs: 'Intense irritation, anger, or rage that surfaces during or after breastfeeding. This can feel shocking and shameful. You might feel furious at your baby, partner, or situation. It can be fleeting or persist after feeding ends.',
    whyItHappens: 'Hormonal fluctuations, touch overstimulation, sleep deprivation, feeling trapped or restricted, and depletion all contribute. It can also be related to D-MER or nursing aversion. It doesn\'t mean you\'re a bad mother.',
    hormones: ['Oxytocin', 'Dopamine', 'Cortisol', 'Prolactin'],
    whatHelps: [
      'Recognize that this is hormonal and real, not a character flaw',
      'Distraction during feeds (phone, TV)',
      'Ensure you\'re meeting basic needs (food, water, rest)',
      'Tag out with partner when possible',
      'Set limits on nursing if child is older',
      'Deep breathing and grounding',
      'Talk to someone who won\'t judge',
      'Consider if weaning or combo feeding might help'
    ],
    redFlags: [
      'Thoughts of harming yourself or baby',
      'Acting on anger (shaking, throwing things)',
      'Rage that doesn\'t pass after feeding ends',
      'Rage that is affecting your relationships',
      'Rage accompanied by depression or severe anxiety'
    ],
    isNormal: true
  },
  {
    id: 'touched-out',
    name: 'Feeling "Touched Out"',
    category: 'emotional',
    alsoCalled: ['Overstimulated', 'Touch aversion', 'Needing space', 'Sensory overload'],
    whatItIs: 'Feeling completely overwhelmed by physical touch. You may feel like you can\'t bear anyone touching you — not baby, partner, other children. Your skin might feel crawly. You might just need everyone to STOP.',
    whyItHappens: 'Your body is being touched constantly — nursing can be 8+ hours per day. Sensory overload is real. Sleep deprivation lowers your capacity to cope. You\'re a person, not just a food source, and bodily autonomy still matters.',
    whatHelps: [
      'This is completely valid — you\'re allowed to feel this way',
      'Communicate clearly with your partner about needing space',
      'Take "touch breaks" when possible — hand baby off',
      'Shower alone, even briefly',
      'Set boundaries around nursing (location, duration)',
      'Wear clothes that feel comfortable between feeds',
      'Recognize this as depletion and address root causes',
      'Consider babywearing vs. constant carrying for breaks'
    ],
    redFlags: [
      'Touched out feelings affecting your ability to care for baby',
      'Accompanied by severe depression or anxiety',
      'Causing significant relationship problems',
      'Making you want to hurt yourself or others'
    ],
    isNormal: true
  },
  {
    id: 'guilt',
    name: 'Breastfeeding Guilt',
    category: 'emotional',
    alsoCalled: ['Mom guilt', 'Formula guilt', 'Not enough milk guilt', 'Supplementing guilt'],
    whatItIs: 'Persistent guilt related to feeding choices or experiences — guilt about supplementing, about supply, about wanting to stop, about how long you\'ve nursed, about nursing "too long." This guilt can be consuming and exhausting.',
    whyItHappens: 'Societal pressure around breastfeeding is intense. "Breast is best" messaging doesn\'t account for individual circumstances. Comparison to other mothers, internal expectations, and lack of support all contribute. Guilt is often unfounded but feels very real.',
    whatHelps: [
      'Remember: fed is best, however that happens',
      'Your mental health matters as much as how baby is fed',
      'Any amount of breast milk provides benefits',
      'Combo feeding is valid and often the healthiest choice for the family',
      'Unfollow accounts that make you feel bad',
      'Talk to a therapist if guilt is overwhelming',
      'Write down facts: baby is fed, growing, loved',
      'Give yourself the compassion you\'d give a friend'
    ],
    redFlags: [
      'Guilt that prevents you from enjoying your baby',
      'Guilt that is part of a larger depression picture',
      'Guilt leading to dangerous feeding practices',
      'Inability to stop ruminating'
    ],
    isNormal: true
  },
  {
    id: 'sadness-nursing',
    name: 'Sadness During/After Nursing',
    category: 'emotional',
    alsoCalled: ['Crying while nursing', 'Tearful during letdown', 'Emotional when breastfeeding'],
    whatItIs: 'Feelings of sadness, tearfulness, or melancholy during or right after breastfeeding. This is different from D-MER (which occurs specifically before letdown) and from general postpartum depression (which occurs regardless of feeding).',
    whyItHappens: 'Hormonal fluctuations during nursing affect mood. Oxytocin release can bring up emotions. Exhaustion amplifies emotional responses. Unprocessed feelings about birth, motherhood, or loss may surface during quiet nursing moments.',
    hormones: ['Oxytocin', 'Prolactin', 'Dopamine', 'Serotonin'],
    whatHelps: [
      'Let yourself feel the feelings — suppressing them often makes it worse',
      'Distraction can help if emotions feel overwhelming',
      'Talk to someone about what you\'re experiencing',
      'Journal your feelings',
      'Consider if there are deeper issues to process',
      'Rest and self-care',
      'Distinguish between brief sadness and persistent depression'
    ],
    redFlags: [
      'Sadness that persists throughout the day, not just during nursing',
      'Inability to feel joy or bond with baby',
      'Thoughts of self-harm or harming baby',
      'Hopelessness or despair',
      'Sadness that is getting worse, not better'
    ],
    isNormal: true
  },
  {
    id: 'intrusive-thoughts',
    name: 'Intrusive Thoughts',
    category: 'emotional',
    alsoCalled: ['Scary thoughts', 'Unwanted thoughts', 'Disturbing images', 'What-if thoughts'],
    whatItIs: 'Unwanted, disturbing thoughts or images that pop into your mind — often about harm coming to your baby. These thoughts feel alien and distressing. They can include thoughts of accidentally or intentionally hurting baby, or of something bad happening.',
    whyItHappens: 'Intrusive thoughts are actually very common in new parents. They may be your brain\'s way of identifying dangers to protect baby. Sleep deprivation, hormonal changes, and anxiety amplify them. Having the thought does NOT mean you want to act on it.',
    hormones: ['Cortisol', 'Adrenaline', 'Serotonin'],
    whatHelps: [
      'Know that thoughts are not actions — having a thought doesn\'t make you dangerous',
      'The distress you feel about the thought is a sign you would never act on it',
      'Label it: "I\'m having an intrusive thought"',
      'Don\'t try to suppress or fight the thought — this makes it stronger',
      'Talk to a professional — this is very treatable',
      'Sleep helps significantly',
      'Limit disturbing media content'
    ],
    redFlags: [
      'You feel compelled to act on the thoughts',
      'Thoughts are becoming urges',
      'You\'re avoiding your baby due to fear of acting on thoughts',
      'You\'re unable to function due to the thoughts',
      'You have a plan to act on the thoughts (seek immediate help)'
    ],
    isNormal: true
  },
  {
    id: 'overwhelm',
    name: 'Feeling Overwhelmed',
    category: 'emotional',
    alsoCalled: ['Can\'t cope', 'Too much', 'Drowning', 'Survival mode'],
    whatItIs: 'The feeling that everything is too much — feeding schedules, baby care, household tasks, other children, work. It might feel like you\'re barely keeping your head above water. You may cry easily or feel paralyzed by simple decisions.',
    whyItHappens: 'New motherhood IS overwhelming — you\'re learning a new role while sleep-deprived and recovering from birth. Add cluster feeding, hormonal shifts, and societal expectations, and overwhelm is nearly universal.',
    hormones: ['Cortisol', 'Adrenaline', 'Prolactin'],
    whatHelps: [
      'Lower your expectations dramatically — survival mode is okay',
      'Ask for and accept help',
      'Do ONE thing at a time',
      'Let some things go completely',
      'Basic needs: keep baby fed, keep baby safe, keep yourself fed',
      'Fresh air helps — even a few minutes',
      'Connect with other new parents who understand',
      'Consider if this crosses into depression territory'
    ],
    redFlags: [
      'Overwhelm that prevents you from caring for baby',
      'Thoughts of escaping or running away',
      'Thoughts of harming yourself or baby',
      'Complete inability to make decisions or function',
      'Overwhelm that is getting worse, not better over time'
    ],
    isNormal: true
  },
  {
    id: 'loss-of-identity',
    name: 'Loss of Identity',
    category: 'emotional',
    alsoCalled: ['Not feeling like myself', 'Just a mom', 'Lost myself', 'Identity crisis'],
    whatItIs: 'Feeling like you don\'t know who you are anymore outside of being a mother and a food source. Your pre-baby interests, friendships, career, and sense of self may feel distant or impossible. You may feel reduced to your function.',
    whyItHappens: 'Matrescence — the process of becoming a mother — involves profound identity shifts. Breastfeeding intensifies this because you are literally physically tethered to your baby. Time for yourself feels nonexistent. This is a transition, not a permanent state.',
    whatHelps: [
      'Name it: matrescence is real and profound',
      'Find small moments for things that make you YOU',
      'Stay connected to friends, even via text',
      'Remember that all mothers have periods where they "just" mother',
      'This phase does not last forever',
      'Talk to other mothers who\'ve been through it',
      'Consider therapy to process the identity shift',
      'Give yourself grace — you\'re becoming someone new, and that\'s hard'
    ],
    redFlags: [
      'Complete disconnection from who you were',
      'Accompanied by depression or inability to feel joy',
      'Feeling like a robot with no emotions',
      'Resentment that is affecting your bond with baby'
    ],
    isNormal: true
  },
  {
    id: 'resentment',
    name: 'Resentment Toward Baby/Partner',
    category: 'emotional',
    alsoCalled: ['Anger at baby', 'Frustrated with partner', 'Why am I doing this alone', 'Relationship strain'],
    whatItIs: 'Feelings of resentment toward your baby (for the demands), your partner (for inequity or lack of understanding), or your situation. This can feel shameful but is very common and doesn\'t make you a bad mother.',
    whyItHappens: 'Breastfeeding often falls entirely on one parent. The physical and emotional toll is immense. Sleep deprivation shortens tempers. Partners may not understand the intensity. Unequal division of labor breeds resentment. Babies are demanding. This is reality, not failure.',
    whatHelps: [
      'Acknowledge your feelings as valid',
      'Communicate clearly with your partner about what you need',
      'Divide non-feeding tasks so you\'re not doing everything',
      'Partner can participate: burping, diaper changes, settling baby after feeds',
      'Take breaks from baby when possible',
      'Remember that resentment is often about unmet needs — identify them',
      'Couples therapy can help communication',
      'Remember: this stage is temporary'
    ],
    redFlags: [
      'Resentment that prevents you from caring for baby safely',
      'Thoughts of harming baby or partner',
      'Resentment that is destroying your relationship',
      'Unable to feel any positive feelings toward baby'
    ],
    isNormal: true
  },
  {
    id: 'public-nursing-fear',
    name: 'Fear of Public Breastfeeding',
    category: 'emotional',
    alsoCalled: ['Nursing in public anxiety', 'Embarrassed to breastfeed', 'Uncomfortable nursing out'],
    whatItIs: 'Anxiety or fear about breastfeeding in public places. This can range from mild discomfort to panic that prevents you from leaving the house around feeding times.',
    whyItHappens: 'Societal attitudes about women\'s bodies and public breastfeeding can be hostile. Fear of judgment, comments, or stares is real. Lack of exposure to normalized public breastfeeding means it feels unusual. Cultural and personal comfort levels vary.',
    whatHelps: [
      'Know your legal rights — breastfeeding in public is protected by law in most places',
      'Practice at home with a cover or nursing-friendly clothing if that helps',
      'Start in baby-friendly places (baby stores, family restaurants)',
      'Join a breastfeeding group to see others nurse publicly',
      'Many people don\'t even notice',
      'Nursing covers or shawls if they make you comfortable (optional)',
      'Feed baby before going out to reduce public nursing needs initially',
      'Your comfort matters — you don\'t have to push yourself'
    ],
    redFlags: [
      'Fear that prevents you from leaving the house',
      'Anxiety that is severely limiting your life',
      'Panic attacks related to the thought of public nursing'
    ],
    isNormal: true
  },
  {
    id: 'pumping-anxiety',
    name: 'Pumping Anxiety',
    category: 'emotional',
    alsoCalled: ['Pump stress', 'Obsessing over output', 'Watching the bottles', 'Low pump output panic'],
    whatItIs: 'Anxiety specifically related to pumping — watching output obsessively, feeling like a failure if you don\'t pump "enough," dreading pump sessions, or feeling like a machine. Output comparison and supply fears are common.',
    whyItHappens: 'Pumping provides a visible number, which can become an obsession. Pumps don\'t extract milk as efficiently as babies, so output seems lower. The mechanical nature can feel dehumanizing. Pressure to build a freezer stash adds stress.',
    whatHelps: [
      'Pump output does NOT equal supply — babies are more efficient than pumps',
      'Stop watching the bottles while pumping — cover them or distract yourself',
      'Focus on baby\'s weight gain and diapers, not pumped ounces',
      'Remember: 1-2oz per session (COMBINED) is normal',
      'You don\'t need a massive freezer stash — 1-3 days of backup is plenty',
      'Power pumping and obsessive pumping can backfire',
      'Consider if pumping is necessary or if direct nursing is an option'
    ],
    redFlags: [
      'Pumping anxiety preventing you from sleeping or eating',
      'Feeling worthless based on pump output',
      'Pumping to the point of pain or injury',
      'Unable to stop pumping despite wanting to'
    ],
    isNormal: true
  },
  {
    id: 'weaning-depression',
    name: 'Weaning Depression',
    category: 'emotional',
    alsoCalled: ['Post-weaning depression', 'Sad after weaning', 'Weaning hormones', 'Depression after stopping breastfeeding'],
    whatItIs: 'Depression, sadness, irritability, or mood swings that occur when you wean (partially or fully). This can happen whether weaning was your choice or not. It can feel like postpartum depression hitting again.',
    whyItHappens: 'Weaning causes a dramatic hormonal shift — prolactin and oxytocin drop rapidly. These hormones affect mood regulation. The faster the wean, the more abrupt the hormonal change and the more intense symptoms may be. Grief over the end of a chapter also contributes.',
    hormones: ['Prolactin (dropping)', 'Oxytocin (dropping)', 'Estrogen', 'Progesterone'],
    whatHelps: [
      'Wean gradually if possible (drop one feed every few days or week)',
      'Know this is hormonal and temporary — usually improves within weeks',
      'Maintain physical closeness with baby (cuddles, skin-to-skin)',
      'Self-compassion — weaning is emotional for any reason',
      'Exercise can help stabilize mood',
      'Talk to someone about what you\'re feeling',
      'If symptoms are severe or prolonged, seek professional support'
    ],
    redFlags: [
      'Depression lasting more than a few weeks after weaning completes',
      'Thoughts of self-harm or harming baby',
      'Inability to function',
      'Previous history of depression that this may be triggering'
    ],
    isNormal: true
  },
  {
    id: 'mood-swings',
    name: 'Mood Swings',
    category: 'emotional',
    alsoCalled: ['Emotional rollercoaster', 'Up and down', 'Crying then fine', 'Emotional volatility'],
    whatItIs: 'Rapid shifts in mood — crying one moment, fine the next. Happiness that turns to irritation without clear cause. Feeling like your emotions are unpredictable and out of your control.',
    whyItHappens: 'Postpartum hormone fluctuations are dramatic. Add sleep deprivation, which affects emotional regulation, and the massive life change of new motherhood. Your brain is literally being reshaped. Mood swings are expected.',
    hormones: ['Estrogen', 'Progesterone', 'Prolactin', 'Oxytocin', 'Cortisol'],
    whatHelps: [
      'Know that this is normal in the early weeks especially',
      'Sleep when you can — sleep deprivation makes everything worse',
      'Eat regularly and stay hydrated',
      'Let yourself feel the feelings without judgment',
      'Communicate with your support system',
      'Get outside daily if possible',
      'Track your mood to identify patterns',
      'If mood swings are severe or not improving, seek evaluation'
    ],
    redFlags: [
      'Mood swings that prevent you from functioning',
      'Extreme highs (possible postpartum mania/psychosis)',
      'Mood swings getting worse over time',
      'Mood swings accompanied by thoughts of harm'
    ],
    isNormal: true
  },

  // ============================================
  // BABY-RELATED CONCERNS (12)
  // ============================================
  {
    id: 'not-latching',
    name: 'Baby Not Latching',
    category: 'baby-related',
    alsoCalled: ['Latch refusal', 'Won\'t latch', 'Can\'t get baby on', 'Baby rejecting breast'],
    whatItIs: 'Baby is unable or unwilling to attach to the breast at all. This is different from a poor latch (where baby attaches but incorrectly). Baby may turn away, scream, or seem unable to open mouth wide enough.',
    whyItHappens: 'Can be caused by: birth interventions affecting baby\'s alertness, anatomical issues (tongue tie, recessed chin), breast/nipple shape challenges, engorgement making latch difficult, sensory overwhelm, or previous negative feeding experiences.',
    whatHelps: [
      'Skin-to-skin time — hours of it, not minutes',
      'Laid-back breastfeeding position (baby on your reclined chest)',
      'Try when baby is calm but alert, not frantic',
      'Express a few drops of milk onto nipple to entice',
      'Check for tongue tie with a pediatric dentist or IBCLC',
      'If engorged, hand express to soften before trying',
      'Protect supply by pumping until baby latches',
      'See an IBCLC — this is what they specialize in'
    ],
    redFlags: [
      'Baby hasn\'t latched at all by day 2-3 (seek immediate help)',
      'Baby is losing more than 10% of birth weight',
      'Signs of dehydration (fewer than 6 wet diapers by day 4+)',
      'You\'re in severe pain when trying to latch'
    ],
    isNormal: false
  },
  {
    id: 'shallow-latch',
    name: 'Shallow Latch',
    category: 'baby-related',
    alsoCalled: ['Poor latch', 'Nipple feeding', 'Bad latch', 'Painful latch'],
    whatItIs: 'Baby attaches to the breast but takes only the nipple, not a good mouthful of breast tissue. Signs include: pain throughout the feed (not just initial latch), clicking sounds, baby slipping off frequently, misshapen nipple after feeding (creased, flattened, lipstick-shaped).',
    whyItHappens: 'Baby may have oral restrictions (tongue or lip tie), learned habits from bottles, positioning issues, or be compensating for overactive letdown. Sometimes breast shape or engorgement contributes.',
    hormones: ['Affects milk transfer — not hormonal'],
    whatHelps: [
      'Aim baby\'s nose to nipple, wait for wide gape (like a yawn)',
      'Bring baby to breast quickly when mouth opens widest',
      'Baby\'s chin should touch breast first, head tilted back',
      'Ensure baby\'s lips are flanged out (fish lips)',
      'Try asymmetric latch technique',
      'Try different positions — laid-back often helps',
      'If pain persists, break latch and try again',
      'Get professional help — a single IBCLC visit can transform your experience'
    ],
    redFlags: [
      'Pain that doesn\'t improve despite trying to correct latch',
      'Baby not gaining weight appropriately',
      'Damaged nipples that won\'t heal',
      'Baby is frustrated and fussy at breast'
    ],
    isNormal: false
  },
  {
    id: 'sleepy-baby',
    name: 'Baby Falling Asleep at Breast',
    category: 'baby-related',
    alsoCalled: ['Sleepy nurser', 'Won\'t stay awake to eat', 'Lazy eater', 'Dozing while feeding'],
    whatItIs: 'Baby falls asleep after only a few minutes of nursing, before getting a full feed. This is very common in newborns, especially in the early days and weeks.',
    whyItHappens: 'Newborns are sleepy — they\'re adjusting to life outside the womb. Sucking is tiring work. Warmth and comfort of nursing makes them drowsy. Some babies are more efficient than they appear. However, jaundice, prematurity, or illness can also cause excess sleepiness.',
    whatHelps: [
      'Skin-to-skin keeps baby more alert',
      'Undress baby to their diaper — cooler = more alert',
      'Switch sides when sucking slows (switch nursing)',
      'Breast compression to keep milk flowing',
      'Tickle feet, rub back, blow gently on face',
      'Change diaper mid-feed',
      'Feed in a well-lit room',
      'Note the difference between nutritive and non-nutritive sucking'
    ],
    redFlags: [
      'Baby is difficult to wake for feeds',
      'Baby is jaundiced (yellowing of skin/eyes)',
      'Not enough wet/dirty diapers',
      'Weight loss exceeding 10% or not regaining birth weight by 2 weeks',
      'Baby seems lethargic, not just sleepy'
    ],
    isNormal: true
  },
  {
    id: 'always-hungry',
    name: 'Baby Always Hungry',
    category: 'baby-related',
    alsoCalled: ['Feeding constantly', 'Never satisfied', 'Wants to eat all the time', 'Insatiable baby'],
    whatItIs: 'Baby seems to want to nurse constantly, never seems satisfied, and shows hunger cues shortly after feeds. This can feel exhausting and can make you worry about your supply.',
    whyItHappens: 'In early weeks, frequent feeding is NORMAL and necessary — it establishes your supply. Growth spurts cause temporarily increased nursing (3 weeks, 6 weeks, 3 months, 6 months). Breastmilk digests quickly (every 1-2 hours in early weeks is normal). Babies also nurse for comfort, not just hunger.',
    whatHelps: [
      'Trust that frequent nursing is often normal, not a supply issue',
      'Check diaper output — 6+ wet, 3+ dirty diapers daily suggests adequate intake',
      'Ensure baby is effectively transferring milk (see IBCLC if unsure)',
      'Growth spurts last 2-3 days — ride it out',
      'Get comfortable — set up a nursing station with snacks and water',
      'Consider babywearing for comfort nursing between meals',
      'Get baby weighed if you\'re worried'
    ],
    redFlags: [
      'Baby isn\'t gaining weight appropriately',
      'Fewer than 6 wet diapers per day after day 4',
      'Baby is lethargic or difficult to rouse',
      'You never feel any breast fullness or letdown',
      'Baby is showing signs of dehydration'
    ],
    isNormal: true
  },
  {
    id: 'cluster-feeding',
    name: 'Cluster Feeding',
    category: 'baby-related',
    alsoCalled: ['Bunch feeding', 'Marathon nursing', 'Feeding every hour', 'Evening fussiness'],
    whatItIs: 'Periods where baby wants to nurse very frequently — sometimes every 30-60 minutes — for several hours. Most common in evenings ("witching hour"). Normal and temporary, but exhausting.',
    whyItHappens: 'Cluster feeding helps build your supply to meet baby\'s needs. It often precedes growth spurts. Evening cluster feeding may be "tanking up" before a longer sleep stretch. It\'s also comfort-seeking and helping baby regulate.',
    whatHelps: [
      'Know this is NORMAL and not a sign of low supply',
      'Get comfortable — you\'ll be nursing for a while',
      'Have snacks and water within reach',
      'Accept help with other tasks during cluster periods',
      'Babywearing can give you mobility during frequent feeds',
      'This phase passes — usually peaks around 6 weeks',
      'Don\'t supplement "because cluster feeding" — this can reduce supply'
    ],
    redFlags: [
      'Cluster feeding with poor weight gain',
      'Cluster feeding all day every day (not just in periods)',
      'Baby frantic and frustrated at breast consistently',
      'Cluster feeding with insufficient diapers'
    ],
    isNormal: true
  },
  {
    id: 'breast-refusal',
    name: 'Baby Refusing Breast',
    category: 'baby-related',
    alsoCalled: ['Breast rejection', 'Won\'t nurse', 'Pushing away', 'Nursing strike'],
    whatItIs: 'Baby who previously nursed well suddenly refuses to breastfeed. This is different from a baby who never latched. Baby may scream, arch away, or turn their head when offered the breast.',
    whyItHappens: 'Common causes include: illness (ear infection, thrush, cold), teething, change in milk taste (from foods, medication, or hormones), overactive letdown, previous negative experience, change in routine or environment, or preference for bottle flow.',
    whatHelps: [
      'Stay calm — baby picks up on stress',
      'Try different positions and locations',
      'Offer breast when baby is sleepy or just waking',
      'Lots of skin-to-skin',
      'Try nursing in motion (walking, rocking)',
      'Check for illness — ear infections are common culprits',
      'Don\'t force — offer, but don\'t fight',
      'Protect supply by pumping',
      'This usually resolves within a few days to a week'
    ],
    redFlags: [
      'Refusal accompanied by signs of illness (fever, lethargy)',
      'Baby won\'t take any food source',
      'Signs of dehydration',
      'Refusal lasting more than a few days with no improvement'
    ],
    isNormal: true
  },
  {
    id: 'nursing-strike',
    name: 'Nursing Strike',
    category: 'baby-related',
    alsoCalled: ['Breast strike', 'Sudden weaning', 'Refusing to nurse'],
    whatItIs: 'A sudden refusal to breastfeed in a baby who previously nursed well. A true nursing strike is temporary and different from self-weaning (which happens gradually, usually after 12 months). Baby seems to want to nurse but won\'t.',
    whyItHappens: 'Triggers include: ear infection or mouth pain, cold with stuffy nose, startle or scare while nursing, major changes (move, travel, mom back to work), change in deodorant or soap, menstruation changing milk taste, too much bottle use, or teething.',
    whatHelps: [
      'Don\'t panic — nursing strikes usually resolve in 2-5 days',
      'Maximize skin-to-skin contact',
      'Offer breast when baby is very sleepy (dreamfeeding)',
      'Try nursing in bath together',
      'Change positions and locations',
      'Reduce bottles if possible or use paced feeding',
      'Pump to maintain supply and comfort',
      'Rule out illness (especially ear infections)',
      'Stay patient and keep offering without pressure'
    ],
    redFlags: [
      'Strike lasting more than a week with no improvement',
      'Signs of illness',
      'Baby refusing all nutrition sources',
      'Baby under 12 months who stops nursing abruptly (self-weaning is rare before 12 months)'
    ],
    isNormal: true
  },
  {
    id: 'biting',
    name: 'Baby Biting',
    category: 'baby-related',
    alsoCalled: ['Biting while nursing', 'Nipple biting', 'Chomping'],
    whatItIs: 'Baby bites down on the nipple during or at the end of nursing. This often starts when teeth come in, but gummy bites happen too. It HURTS and can make you dread nursing.',
    whyItHappens: 'Teething babies bite for relief. Babies may bite at the end of a feed when flow slows. It can be a reaction to startle or an experiment. Some babies bite for attention or reaction.',
    whatHelps: [
      'Watch for bite cues — often happens when sucking slows or baby gets distracted',
      'Remove baby from breast IMMEDIATELY when they bite (calmly)',
      'Say "no biting" firmly but without yelling (can become a game)',
      'End the nursing session briefly if biting continues',
      'Offer teething toy before nursing to relieve teething urge',
      'Keep your finger ready to break suction if you sense a bite coming',
      'For baby who bites at end of feed, end session before they do',
      'Praise when nursing goes well'
    ],
    redFlags: [
      'Biting causing significant damage to nipple',
      'Biting making you unable or unwilling to nurse',
      'Signs that baby is in pain from oral issues'
    ],
    isNormal: true
  },
  {
    id: 'distracted-nursing',
    name: 'Distracted Baby While Nursing',
    category: 'baby-related',
    alsoCalled: ['Popping on and off', 'Can\'t focus', 'Distracted nurser', 'Pulling off to look around'],
    whatItIs: 'Baby constantly pops on and off the breast, looks around, gets distracted by sounds or movement. Common around 3-4 months when babies become more aware of their environment. Feeds take forever or feel incomplete.',
    whyItHappens: 'Around 3-4 months, babies have a developmental leap and become fascinated by the world. They don\'t want to miss anything! This doesn\'t mean they\'re weaning or your supply is dropping — they\'re just more interested in everything.',
    whatHelps: [
      'Nurse in a dark, quiet, boring room',
      'Use a nursing necklace to give baby something to focus on',
      'Nurse when baby is sleepy or just waking',
      'Cover with a light blanket (some babies)',
      'White noise can help block distracting sounds',
      'Accept that feeds may be shorter but more frequent',
      'This phase typically improves as they get used to their new awareness',
      'Know that babies often become more efficient and need shorter feeds anyway'
    ],
    redFlags: [
      'Distracted nursing with weight gain concerns',
      'Baby refusing to nurse enough to maintain supply',
      'Distraction that seems like breast refusal'
    ],
    isNormal: true
  },
  {
    id: 'green-poop',
    name: 'Green/Frothy Poop',
    category: 'baby-related',
    alsoCalled: ['Foremilk imbalance', 'Green stools', 'Foamy poop', 'Oversupply signs'],
    whatItIs: 'Baby\'s poop is green and/or frothy/foamy instead of the typical yellow, seedy breastfed baby stool. May also be accompanied by gassiness, fussiness, and explosive stools.',
    whyItHappens: 'Often attributed to "foremilk/hindmilk imbalance" — baby getting more of the lactose-rich foremilk and not enough fattier hindmilk. This can happen with oversupply, switching breasts too quickly, or fast letdown. Can also be caused by illness, food sensitivity, or medications.',
    whatHelps: [
      'Finish one breast before switching (let baby decide when done)',
      'If oversupply is the issue, try block feeding',
      'Ensure deep, effective latch for efficient milk transfer',
      'Green poop alone without other symptoms may not need intervention',
      'If baby is happy, gaining, and having enough wet diapers, occasional green is okay',
      'If persistent, consider food sensitivities (dairy is most common)'
    ],
    redFlags: [
      'Green poop with blood or mucus',
      'Poor weight gain',
      'Baby in obvious discomfort/pain',
      'Fever or signs of illness',
      'Significant decrease in wet diapers'
    ],
    isNormal: true
  },
  {
    id: 'lip-tie',
    name: 'Lip or Tongue Tie',
    category: 'baby-related',
    alsoCalled: ['Tongue tie', 'Lip tie', 'Oral restriction', 'Frenulum issue', 'Ankyloglossia'],
    whatItIs: 'A tongue tie (ankyloglossia) is when the tissue connecting the tongue to the floor of the mouth is tight or short, restricting tongue movement. A lip tie is similar, affecting the upper lip. These can affect breastfeeding.',
    whyItHappens: 'Ties are present from birth — the frenulum didn\'t recede as much during development. They run in families and may affect 4-10% of newborns (depending on diagnostic criteria).',
    whatHelps: [
      'Get evaluated by an IBCLC trained in oral restrictions',
      'See a pediatric dentist or ENT experienced with ties',
      'Not all ties need treatment — function matters more than appearance',
      'If feeding is going well, revision may not be necessary',
      'If revision is done, follow-up exercises and bodywork are important',
      'Work with an IBCLC before and after any revision',
      'Craniosacral therapy or infant bodywork may help'
    ],
    redFlags: [
      'Baby unable to latch or stay latched',
      'Painful nursing despite trying everything',
      'Poor weight gain',
      'Baby is unable to effectively extract milk'
    ],
    isNormal: true
  },
  {
    id: 'colic',
    name: 'Colic/Excessive Crying',
    category: 'baby-related',
    alsoCalled: ['Inconsolable crying', 'Fussy baby', 'Purple crying', 'Evening screaming'],
    whatItIs: 'Prolonged, intense crying in an otherwise healthy baby — often defined as crying 3+ hours per day, 3+ days per week, for 3+ weeks. Usually peaks around 6 weeks and improves by 3-4 months. Baby may seem in pain but has no identifiable cause.',
    whyItHappens: 'The honest answer: we don\'t fully know. Theories include immature nervous system, gut development, sensory overload, or milk protein sensitivity. It is NOT your fault and NOT a sign that your milk is "bad."',
    whatHelps: [
      'Rule out hunger, wet diaper, temperature, illness first',
      'The 5 S\'s: swaddle, side position, shush, swing, suck',
      'Babywearing',
      'White noise or rhythmic sounds',
      'Motion (car rides, stroller walks)',
      'Elimination diet IF you suspect food sensitivity (dairy first)',
      'Know this is temporary — colic resolves',
      'Tag team with partner — take breaks',
      'If you feel overwhelmed, put baby in safe space and step away'
    ],
    redFlags: [
      'Fever or signs of illness',
      'Vomiting or feeding problems',
      'Blood in stool',
      'Baby not gaining weight',
      'You feel at risk of harming baby (put baby down and call for help)'
    ],
    isNormal: true
  },

  // ============================================
  // SUPPLY CONCERNS (6)
  // ============================================
  {
    id: 'low-supply',
    name: 'Low Milk Supply',
    category: 'supply',
    alsoCalled: ['Not enough milk', 'Insufficient milk', 'Low production', 'Hypogalactia'],
    whatItIs: 'Actually producing insufficient milk to meet your baby\'s needs. Important: PERCEIVED low supply is much more common than TRUE low supply. Most mothers make enough — the worry is often unfounded.',
    whyItHappens: 'True low supply can result from: insufficient glandular tissue (IGT), hormonal issues (PCOS, thyroid, retained placenta), previous breast surgery, some medications, not enough feeding/pumping in early weeks, or certain health conditions. Supplementing without pumping also reduces supply.',
    hormones: ['Prolactin', 'Thyroid hormones', 'Insulin'],
    whatHelps: [
      'FIRST: Assess if you actually have low supply (check diapers, weight gain)',
      'Nurse/pump frequently — supply is built by demand',
      'Ensure effective milk removal (check latch, consider power pumping)',
      'Skin-to-skin increases prolactin',
      'Rest and reduce stress when possible',
      'Stay hydrated and well-nourished',
      'Galactagogues may help some mothers (oats, fenugreek with caution)',
      'See an IBCLC to identify the cause and create a plan'
    ],
    redFlags: [
      'Baby not back to birth weight by 2 weeks',
      'Fewer than 6 wet diapers per day after day 4',
      'Baby is lethargic or showing dehydration signs',
      'Breasts never feel full or have letdown sensation',
      'No breast changes during pregnancy (may indicate IGT)'
    ],
    isNormal: true
  },
  {
    id: 'perceived-low-supply',
    name: 'Perceived Low Supply',
    category: 'supply',
    alsoCalled: ['Worrying about supply', 'Thinking I don\'t make enough', 'Supply anxiety'],
    whatItIs: 'Believing you don\'t have enough milk when you actually do. This is EXTREMELY common and causes unnecessary supplementation, which can then actually reduce supply. Soft breasts, frequent nursing, and fussy evenings are NOT signs of low supply.',
    whyItHappens: 'Misconceptions about how breastfeeding works: soft breasts after the early weeks is normal (supply regulating). Cluster feeding is normal. Pump output doesn\'t reflect actual production. Weight checks at wrong times can be misleading.',
    whatHelps: [
      'Know the TRUE signs of adequate milk: 6+ wet diapers/day after day 4, steady weight gain, baby seems satisfied after most feeds',
      'Know what is NOT a sign of low supply: soft breasts, frequent nursing, cluster feeding, fussy evenings, low pump output',
      'Trust your body until given real evidence not to',
      'Get baby weighed if you need reassurance (at same time of day, same scale)',
      'Talk to an IBCLC before supplementing',
      'Stay off the Google rabbit hole'
    ],
    redFlags: [
      'This is more about reassurance — if baby is thriving, try to trust',
      'If anxiety about supply is overwhelming, consider talking to a therapist',
      'If you\'re supplementing "just in case" without confirmed need, this may affect actual supply'
    ],
    isNormal: true
  },
  {
    id: 'supply-regulation',
    name: 'Supply Regulation',
    category: 'supply',
    alsoCalled: ['Supply drop', 'Milk "drying up"', 'Softer breasts', 'Supply adjusting'],
    whatItIs: 'Around 6-12 weeks postpartum, your supply "regulates" — meaning it adjusts to match your baby\'s needs. Your breasts may feel much softer, less full, and you may not feel letdown as intensely. This feels like your milk is "drying up" but it\'s NORMAL.',
    whyItHappens: 'In early weeks, your body overproduces as it figures out how much milk to make. Around 6-12 weeks, it learns the exact demand and produces just that. This is actually a sign that breastfeeding is working well.',
    hormones: ['Prolactin levels stabilizing', 'Supply becoming demand-driven'],
    whatHelps: [
      'Know this is NORMAL — it\'s not your supply dropping, it\'s your supply adjusting',
      'Don\'t start pumping "to increase supply" unless there\'s an actual problem',
      'Continue nursing on demand',
      'Watch baby, not your breasts — if baby is thriving, supply is fine',
      'Trust the process',
      'This is often when pumping output decreases too — also normal'
    ],
    redFlags: [
      'If regulation coincides with true supply issues (poor weight gain, fewer diapers), investigate',
      'If supply drops and you\'ve been ill or stressed significantly, may need to boost demand'
    ],
    isNormal: true
  },
  {
    id: 'one-breast-less',
    name: 'One Breast Producing Less',
    category: 'supply',
    alsoCalled: ['Lopsided supply', 'Slacker boob', 'Asymmetric production'],
    whatItIs: 'One breast consistently produces less milk than the other. You may notice one is smaller, baby prefers the other side, or you pump significantly more from one breast. This is very common.',
    whyItHappens: 'Breast anatomy is often asymmetric — one may have more milk-producing tissue. Baby may prefer one side (creating more demand there). Previous injury, surgery, or infection may affect one breast. This becomes a self-perpetuating cycle based on demand.',
    whatHelps: [
      'Start feeds on the lower-producing side when baby is hungriest',
      'Offer the lower side more frequently',
      'Pump the lower side after feeds for extra stimulation',
      'Know that combined supply is what matters — one is often the "workhorse"',
      'Accept that some asymmetry is normal',
      'The difference often evens out somewhat over time'
    ],
    redFlags: [
      'Sudden change in one breast\'s production (could indicate clog or other issue)',
      'Lump in the lower-producing breast',
      'Pain or signs of infection in either breast'
    ],
    isNormal: true
  },
  {
    id: 'period-supply-dip',
    name: 'Supply Dip During Period',
    category: 'supply',
    alsoCalled: ['Menstrual supply drop', 'Period affecting milk', 'Cycle-related supply'],
    whatItIs: 'A temporary decrease in milk supply in the days leading up to and during your period. Baby may be fussier, nurse more, or seem unsatisfied. This is temporary and supply returns to normal after your period.',
    whyItHappens: 'Hormonal shifts during your menstrual cycle affect milk production. Estrogen and progesterone fluctuations can temporarily suppress prolactin. This is usually mild and temporary.',
    hormones: ['Estrogen', 'Progesterone', 'Prolactin'],
    whatHelps: [
      'Know this is temporary — supply rebounds after your period',
      'Don\'t start supplementing unless truly necessary',
      'Nurse/pump more frequently during this time if needed',
      'Calcium and magnesium supplements may help (500mg calcium, 250mg magnesium)',
      'Stay hydrated',
      'The dip often becomes less noticeable over cycles'
    ],
    redFlags: [
      'Supply dip that doesn\'t recover after period ends',
      'Severe supply drop that affects baby\'s intake significantly'
    ],
    isNormal: true
  },
  {
    id: 'supply-when-sick',
    name: 'Supply Changes When Sick',
    category: 'supply',
    alsoCalled: ['Milk drop when ill', 'Supply affected by illness'],
    whatItIs: 'A temporary decrease in milk supply when you\'re sick, dehydrated, or not eating well. This is usually temporary and recovers once you recover.',
    whyItHappens: 'Illness, dehydration, reduced eating, and certain medications can temporarily affect supply. Your body is fighting infection and may temporarily prioritize that over milk production. Stress hormones from being sick can also play a role.',
    whatHelps: [
      'Focus on recovering — supply usually returns',
      'Stay as hydrated as possible',
      'Eat when you can, even small amounts',
      'Continue nursing on demand — baby\'s sucking signals production',
      'Baby benefits from antibodies in your milk when you\'re sick',
      'Avoid decongestants containing pseudoephedrine (can reduce supply)',
      'Most medications are safe while breastfeeding — check LactMed database'
    ],
    redFlags: [
      'Supply doesn\'t recover after you recover from illness',
      'Significant, sudden supply drop'
    ],
    isNormal: true
  }
];

// Helper function to search symptoms
export function searchSymptoms(query: string): Symptom[] {
  const lowercaseQuery = query.toLowerCase().trim();
  if (!lowercaseQuery) return [];

  return symptoms.filter(symptom => {
    const searchableText = [
      symptom.name,
      ...symptom.alsoCalled,
      symptom.whatItIs,
      symptom.category
    ].join(' ').toLowerCase();

    return searchableText.includes(lowercaseQuery);
  });
}

// Get symptoms by category
export function getSymptomsByCategory(category: Symptom['category']): Symptom[] {
  return symptoms.filter(s => s.category === category);
}

// Get common searches
export const commonSearches = [
  'engorgement',
  'clogged duct',
  'mastitis',
  'low supply',
  'D-MER',
  'cluster feeding',
  'latch',
  'thrush',
  'anxiety',
  'exhaustion',
  'not latching',
  'biting'
];
