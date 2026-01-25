export interface CourseSection {
  title: string;
  content: string;
  imageDescription?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  readTime: string;
  isPro: boolean;
  color: string;
  sections: CourseSection[];
}

export const courses: Course[] = [
  // COURSE 1: Lactation 101 (FREE - Preview)
  {
    id: 'lactation-101',
    title: 'Lactation 101: How Your Body Makes Milk',
    description: 'Understanding the incredible biology behind milk production',
    icon: '🧬',
    readTime: '7 min',
    isPro: false,
    color: '#E8B4A6',
    sections: [
      {
        title: 'What is Lactation?',
        content: `Lactation is your body's remarkable ability to produce breast milk — a complete, living food designed specifically for your baby.

Here's what makes it extraordinary: **your body has been preparing for this since puberty**. During pregnancy, hormones triggered the growth of milk-producing tissue, and within days of birth, your breasts begin their 24/7 milk factory operation.

Lactation isn't just a physical process — it's a relationship between you and your baby. The more your baby nurses, the more milk you make. It's a conversation between supply and demand, hormones and instincts, biology and love.

**The Key Players:**
- **Alveoli**: Tiny grape-like clusters where milk is made
- **Milk ducts**: The highways that carry milk to your nipple
- **Myoepithelial cells**: Muscles that squeeze milk out during letdown
- **Hormones**: Prolactin (makes milk) and oxytocin (releases milk)`,
        imageDescription: 'Anatomical illustration showing breast cross-section with labeled alveoli, ducts, and nipple'
      },
      {
        title: 'The Supply and Demand System',
        content: `Your milk supply works on a simple but powerful principle: **the more milk that's removed, the more milk you make**.

Think of it like a factory that scales production based on orders. When your breast is emptied (through nursing or pumping), it sends a signal: "We need more!" Your body responds by ramping up production.

**This means:**
- Frequent nursing = more milk
- Skipping feeds (or pumping sessions) = less milk
- Baby going through a growth spurt and nursing more = supply increase to match

**Why the first 2-3 weeks matter so much:**
During this window, your body is setting your "baseline" supply. Frequent, effective nursing during this time establishes prolactin receptors — the more you have, the better your long-term milk-making capacity.

**Common misconception:** "My breasts feel soft/empty, so I must be out of milk."
**Truth:** Soft breasts usually mean your supply has regulated. Your breasts are now making milk on-demand rather than storing excess. This is a sign of efficiency, not failure.`,
        imageDescription: 'Infographic showing supply-demand cycle with arrows connecting baby nursing to milk production'
      },
      {
        title: 'How Milk is Made',
        content: `Let's follow the journey of a single drop of milk:

**Step 1: The Order Comes In**
When your baby nurses (or you pump), nerve signals travel from your nipple to your brain, triggering the release of prolactin.

**Step 2: The Factory Starts**
Prolactin tells the alveoli (milk-making cells) to pull nutrients from your blood and transform them into breast milk. This includes:
- Proteins (built from amino acids)
- Fats (drawn from your fat stores and diet)
- Lactose (the main carbohydrate/sugar)
- Vitamins and minerals
- Antibodies and immune factors
- Living cells (yes, your milk is alive!)

**Step 3: Storage and Delivery**
Milk collects in the alveoli and flows into the ducts that lead to your nipple.

**Step 4: The Letdown**
When oxytocin is released, the tiny muscles around the alveoli squeeze, pushing milk through the ducts and out your nipple. This is the "letdown" or "milk ejection reflex."

You might feel letdown as:
- Tingling or pins-and-needles
- Pressure or fullness
- A sudden thirst
- Nothing at all (many women don't feel it)`,
        imageDescription: 'Step-by-step diagram of milk production from blood supply through alveoli to nipple'
      },
      {
        title: 'The Three Stages of Milk',
        content: `Your breast milk evolves to meet your baby's changing needs:

**1. Colostrum (Days 1-5)**
- Thick, golden, sticky liquid
- Small in volume (perfect for tiny newborn stomachs)
- PACKED with antibodies and immune factors
- Acts as a laxative to help baby pass meconium
- Called "liquid gold" for good reason

**2. Transitional Milk (Days 5-14)**
- Your milk "comes in" — breasts become fuller
- Color shifts from golden to white/bluish
- Volume increases significantly
- Mix of colostrum and mature milk properties
- This transition can cause engorgement

**3. Mature Milk (Day 14+)**
- Thinner and more watery-looking than formula
- Contains the perfect balance of nutrients
- Composition still changes:
  - Throughout each feeding (foremilk → hindmilk)
  - Throughout the day (more melatonin at night)
  - When you or baby are sick (more antibodies)
  - As baby grows (adjusts to their age)

**Remember:** The "watery" appearance of mature milk is normal. It's not "weak" — it's exactly what your baby needs.`,
        imageDescription: 'Visual comparison of colostrum (golden), transitional, and mature milk (white/blue-ish) in containers'
      },
      {
        title: 'Why the First Two Weeks Matter',
        content: `The first 10-14 days postpartum are a critical window for establishing your milk supply. Here's why:

**Prolactin Receptors:**
In early breastfeeding, your body is growing "prolactin receptors" — the more you have, the more sensitive your breasts are to prolactin, and the easier it is to make milk long-term.

These receptors are developed through **frequent, effective milk removal** in the first few weeks. It's like setting a thermostat — you're programming your body's capacity.

**What This Means Practically:**
- Nurse (or pump) 8-12+ times per 24 hours
- Don't go longer than 3-4 hours without removing milk
- Wake your sleepy newborn to feed if needed
- Avoid unnecessary supplementation that reduces nursing
- Night feeds are especially important (prolactin is highest 1am-5am)

**Good news:** Even if the first weeks aren't perfect, many mothers successfully build supply later. But maximizing this window sets you up for success.

**The Bottom Line:**
Think of these early weeks as an investment. The work you put in now pays dividends for your entire breastfeeding journey.`,
        imageDescription: 'Timeline graphic showing "critical window" of first 14 days with key milestones marked'
      },
      {
        title: 'Establishing Your Supply',
        content: `Here's your action plan for building a strong milk supply:

**In the Hospital:**
✓ Skin-to-skin as much as possible
✓ Nurse within the first hour after birth if possible
✓ Keep baby rooming in with you
✓ Nurse whenever baby shows hunger cues (8-12+ times/day)
✓ Ask to see a lactation consultant

**First 2 Weeks at Home:**
✓ Continue frequent nursing (every 2-3 hours, or on cue)
✓ Don't watch the clock — watch your baby
✓ Offer both breasts at each feeding
✓ Prioritize rest, food, and hydration for yourself
✓ Hold off on pacifiers until nursing is established
✓ Avoid unnecessary supplementation

**Signs Your Supply is Good:**
✓ Baby has 6+ wet diapers per day (after day 4)
✓ Baby has 3+ yellow, seedy stools per day (after day 4)
✓ Baby is gaining weight
✓ You hear swallowing during feeds
✓ Baby seems satisfied after most feeds

**If You're Concerned:**
- See an IBCLC (International Board Certified Lactation Consultant)
- Get baby weighed to check gain
- Evaluate latch and milk transfer
- Rule out tongue tie or other issues

**Remember:** Most mothers make plenty of milk. Trust your body, feed your baby, and get help if something doesn't feel right.`
      }
    ]
  },

  // COURSE 2: Hormones 101 (PRO)
  {
    id: 'hormones-101',
    title: 'Hormones 101: Prolactin, Oxytocin & Cortisol',
    description: 'The hormonal symphony behind your milk supply',
    icon: '⚡',
    readTime: '8 min',
    isPro: true,
    color: '#B8D4B5',
    sections: [
      {
        title: 'The Three Key Hormones',
        content: `Your milk supply is orchestrated by three main hormones, working together in a delicate dance:

**1. Prolactin — The Milk Maker**
- Tells your breasts to MAKE milk
- Rises when baby nurses
- Highest at night (1am-5am)
- Also promotes feelings of calm and bonding

**2. Oxytocin — The Releaser**
- Tells your breasts to RELEASE milk (letdown)
- Triggered by baby's sucking, crying, even thinking about baby
- Also called the "love hormone"
- Creates feelings of warmth and connection

**3. Cortisol — The Inhibitor**
- The stress hormone
- HIGH cortisol = INHIBITED milk production and letdown
- Why relaxation matters for milk flow
- Why stress can temporarily affect supply

**Understanding this trio helps you understand:**
- Why night feeds matter for supply
- Why relaxation helps with letdown
- Why stress can feel like it's affecting your milk
- What you can do to support your hormones naturally`,
        imageDescription: 'Illustration of brain showing hormone pathways to breast, with prolactin, oxytocin, and cortisol labeled'
      },
      {
        title: 'Prolactin: The Milk-Making Hormone',
        content: `Prolactin is your milk production manager. Here's everything you need to know:

**How It Works:**
When your baby nurses, nerve signals travel from your nipple to your brain, triggering prolactin release. Prolactin then tells your milk-making cells (alveoli) to produce milk.

**Key Facts:**
- Prolactin levels spike with each nursing session
- Levels are highest at night (2am-4am) — this is why night feeds support supply
- More frequent nursing = more prolactin = more milk
- Prolactin has a short "shelf life" — levels drop between feeds

**What Affects Prolactin:**
✓ **Increases prolactin:** Nursing, pumping, skin-to-skin, certain medications/herbs
✗ **Decreases prolactin:** Long gaps between feeds, certain medications (some decongestants, some hormonal birth control)

**Prolactin and Your Mood:**
Prolactin doesn't just make milk — it also promotes a calm, nurturing state. Many mothers feel relaxed or even sleepy during nursing. This is prolactin at work.

**Practical Tips:**
- Embrace night feeds (or night pumping if exclusively pumping) — they're hormonal gold
- Frequent nursing, especially in early weeks, builds prolactin receptors
- Skin-to-skin contact naturally raises prolactin
- If supply concerns arise, look at frequency and effectiveness of milk removal first`,
        imageDescription: 'Graph showing prolactin levels over 24 hours with peak at night, and spike during nursing sessions'
      },
      {
        title: 'Oxytocin: The Letdown Hormone',
        content: `If prolactin is the factory worker, oxytocin is the delivery driver. It doesn't make milk — it releases it.

**The Letdown Reflex:**
When oxytocin is released, tiny muscles around your milk-making cells contract, squeezing milk into the ducts and out through your nipple. This is called "letdown" or "milk ejection reflex."

**What Triggers Oxytocin:**
- Your baby's sucking
- Hearing your baby cry
- Seeing or smelling your baby
- Even thinking about your baby
- Warm water (shower, compress)
- Relaxation and feeling safe

**What You Might Feel During Letdown:**
- Tingling, pins-and-needles sensation
- Sudden feeling of fullness or pressure
- Intense thirst
- Milk dripping from the other breast
- Cramping (especially in early weeks — oxytocin also contracts your uterus)
- Nothing at all — some women don't feel letdown, and that's normal

**Oxytocin and Bonding:**
Oxytocin is also called the "love hormone." It's released during breastfeeding, sex, hugging, and other bonding activities. Every nursing session floods both you and baby with this connection hormone.

**When Letdown Feels Stuck:**
If letdown seems difficult, try:
- Deep breathing before nursing
- Warm compress on breasts
- Looking at photos or videos of baby
- Relaxing music or dim lighting
- Pumping or nursing in a comfortable, private space`,
        imageDescription: 'Illustration showing letdown reflex with oxytocin triggering muscle contraction around alveoli'
      },
      {
        title: 'Cortisol: The Stress Hormone',
        content: `Cortisol is your body's alarm system — helpful in emergencies, but problematic when chronically elevated.

**How Stress Affects Milk:**
High cortisol levels can:
- Inhibit oxytocin release (blocking letdown)
- Temporarily reduce milk production
- Make feeds feel more difficult

**This explains why:**
- Milk flows better when you're relaxed
- Stressful situations can cause temporary supply dips
- Pumping at work (stressful!) often yields less than nursing at home
- Going back to work or major life changes can affect supply

**Important Note:**
Stress doesn't "dry up" your supply. Short-term stress causes temporary effects. Your supply bounces back. If you're experiencing chronic, severe stress, addressing that (with support, therapy, lifestyle changes) will help your milk AND your mental health.

**Cortisol-Lowering Strategies:**
- Deep breathing exercises
- Meditation (even 5 minutes helps)
- Physical touch and connection
- Time outside in nature
- Adequate sleep (do your best)
- Saying no to non-essential commitments
- Asking for and accepting help

**Remember:**
Some stress is unavoidable with a newborn. You don't need a perfect zen state to breastfeed. Your body is resilient. But chronically high stress is worth addressing for many reasons, milk supply being just one.`,
        imageDescription: 'Infographic showing stress response and its effect on milk letdown, with calming strategies listed'
      },
      {
        title: 'Supporting Your Hormones Naturally',
        content: `You can actively support your milk-making hormones with lifestyle choices:

**Boost Prolactin:**
- Nurse or pump frequently (8-12+ times per day in early weeks)
- Don't skip night sessions — prolactin peaks at night
- Lots of skin-to-skin contact
- Hold and cuddle your baby
- Avoid long stretches without milk removal

**Support Oxytocin:**
- Create a calm, comfortable nursing environment
- Deep breathing before and during feeds
- Look at your baby, smell their head
- Warm showers or compresses before nursing
- Avoid distractions and multitasking during feeds when possible
- Relaxing music or sounds
- Dim lighting
- Feeling safe and supported

**Lower Cortisol:**
- Prioritize rest (even if sleep is broken)
- Accept help — you don't have to do everything
- Fresh air and gentle movement
- Limit stressful media consumption
- Connect with supportive people
- Set boundaries on visitors and obligations
- Self-compassion (stress about stress makes it worse)

**The Big Picture:**
Your hormones want to work. They've been perfected over millions of years of evolution. Your job isn't to force them — it's to remove the barriers (stress, long gaps between feeds, discomfort) that prevent them from doing their job.

Trust your body. Support it. Feed your baby. The hormones will follow.`
      }
    ]
  },

  // COURSE 3: Breastfeeding Nutrition (PRO)
  {
    id: 'nutrition',
    title: 'Breastfeeding Nutrition: Feeding the Mother',
    description: 'What to eat (and not stress about) while nursing',
    icon: '🥗',
    readTime: '8 min',
    isPro: true,
    color: '#F5E6DC',
    sections: [
      {
        title: 'Caloric Needs While Breastfeeding',
        content: `Let's clear up confusion about eating while breastfeeding:

**The Basic Math:**
- Producing breast milk burns approximately 300-500 calories per day
- You need to EAT those calories (plus your normal intake) to fuel production
- This is not the time for dieting or restriction

**What This Means:**
If you normally eat around 2,000 calories, you need about 2,300-2,500 while exclusively breastfeeding. But don't obsess over counting — **eat when you're hungry**.

**The Hunger is Real:**
Many breastfeeding mothers experience intense hunger, especially in the early months. This is biological, not weakness. Your body is telling you it needs fuel.

**Weight Loss Expectations:**
- Some mothers lose weight quickly while breastfeeding
- Some hold onto weight until they wean (your body may protect fat stores for milk-making)
- Some gain weight
- ALL of these are normal

**The Bottom Line:**
Eat enough. Eat when hungry. Focus on nourishment, not restriction. Your body knows what it's doing.`,
        imageDescription: 'Visual comparison of caloric needs: normal vs breastfeeding, showing +300-500 additional calories'
      },
      {
        title: 'Key Macronutrients',
        content: `Your body needs all three macronutrients to make quality milk:

**Protein (aim for 65-75g daily)**
Why: Building blocks for your baby's growth; keeps you satisfied
Sources: Eggs, chicken, fish, beef, beans, lentils, Greek yogurt, nuts, tofu
Tip: Include protein at every meal and snack

**Healthy Fats (30-35% of calories)**
Why: Brain development for baby; hormone production; fat-soluble vitamin absorption
Sources: Avocado, olive oil, nuts, seeds, fatty fish (salmon, sardines), eggs
Tip: Don't fear fat — your baby's brain needs it

**Complex Carbohydrates**
Why: Sustained energy (you need it!); fiber for digestion; blood sugar stability
Sources: Oats, whole grains, sweet potatoes, quinoa, fruits, vegetables
Tip: Choose whole grains over refined when possible

**What About the Milk Fat Content?**
Your diet does affect the types of fats in your milk (omega-3s, for example). But your body will make sufficient milk regardless of your diet — it will pull from your stores if needed. That's why maternal nutrition matters: to protect YOUR health, not just baby's.`,
        imageDescription: 'Plate graphic showing balanced meal with protein, healthy fats, and complex carbs labeled'
      },
      {
        title: 'Essential Micronutrients',
        content: `These vitamins and minerals deserve extra attention while breastfeeding:

**Calcium (1,000mg/day)**
Why: Your body will pull calcium from your bones for milk if you don't eat enough
Sources: Dairy, fortified plant milks, leafy greens, sardines, tofu
Note: Your bones recover after weaning, but adequate intake protects you

**Iron**
Why: Many mothers are depleted after pregnancy and birth; prevents fatigue
Sources: Red meat, spinach, lentils, fortified cereals, beans
Tip: Pair with Vitamin C for better absorption

**Omega-3 Fatty Acids (especially DHA)**
Why: Critical for baby's brain and eye development; passes directly into milk
Sources: Fatty fish (salmon, sardines), fish oil supplements, walnuts, chia/flax seeds
Goal: 200-300mg DHA daily (2-3 servings of fatty fish per week OR a supplement)

**Vitamin D (600 IU minimum)**
Why: Breast milk is often low in Vitamin D; supports immune function
Sources: Sunlight, fortified foods, supplements
Note: Many pediatricians recommend Vitamin D drops for breastfed babies

**Vitamin B12 (2.8mcg/day)**
Why: Essential for baby's nervous system development
Sources: Animal products, fortified foods, supplements
Important: Vegans and vegetarians MUST supplement

**Iodine (290mcg/day)**
Why: Critical for baby's brain development
Sources: Iodized salt, dairy, seafood, seaweed
Tip: Check that your prenatal includes iodine`,
        imageDescription: 'Infographic showing key nutrients with food source icons for each'
      },
      {
        title: 'Hydration: Milk is 87% Water',
        content: `Staying hydrated is one of the simplest ways to support your milk supply.

**How Much to Drink:**
- Aim for about 100-128 ounces (3-4 liters) of fluids daily
- Don't force excessive water — drinking more than you need won't increase supply
- But dehydration CAN negatively impact supply

**Signs You Need More Fluids:**
- Dark yellow urine
- Headaches
- Dizziness
- Extreme fatigue (beyond normal new-mom tired)
- Reduced milk output

**Practical Tips:**
- Keep a large water bottle at every nursing station
- Drink a glass of water every time you nurse
- The intense thirst during letdown is your body's signal — honor it
- Water is ideal, but milk, herbal tea, and water-rich foods count too

**What About Coffee?**
- Moderate caffeine (200-300mg/day, or 2-3 cups of coffee) is considered safe
- Very little caffeine passes into milk
- Watch for baby sensitivity (fussiness, sleep issues)
- Best consumed after a nursing session rather than right before

**Alcohol:**
- Occasional moderate drinking is considered compatible with breastfeeding
- Alcohol clears from milk at the same rate as from blood
- "Pump and dump" doesn't speed alcohol clearance — time does
- General guideline: If you're sober enough to drive, you're sober enough to nurse`,
        imageDescription: 'Illustration of water glass with measurement markings and "aim for 100+ oz" label'
      },
      {
        title: 'Galactagogues: What Works?',
        content: `Galactagogues are foods, herbs, or medications believed to boost milk supply. Let's be honest about what the science says:

**The Truth:**
The single most effective galactagogue is **frequent, effective milk removal**. No food or herb can compensate for infrequent nursing or poor milk transfer.

**Foods Often Recommended:**
- **Oats:** Some mothers swear by them; minimal scientific evidence but harmless
- **Brewer's yeast:** No solid evidence, but contains B-vitamins
- **Fenugreek:** May help some mothers, but can cause GI issues and isn't for everyone
- **Fennel:** Traditional galactagogue; limited evidence
- **Lactation cookies:** Usually contain oats, brewer's yeast, flax — enjoyable, probably harmless, unproven

**What Actually Helps Supply:**
1. Nursing/pumping more frequently
2. Ensuring effective milk transfer (check latch, rule out tongue tie)
3. Adequate rest, food, and hydration
4. Skin-to-skin contact
5. Reducing stress when possible
6. Not supplementing unnecessarily

**If You're Trying Galactagogues:**
- Don't expect miracles
- Give them 1-2 weeks to see any effect
- Watch for side effects (fenugreek can cause maple syrup smell, GI issues)
- Don't replace frequent nursing with herbs
- If supply is truly low, see an IBCLC to identify the root cause`,
        imageDescription: 'Image of oats, fennel, and fenugreek with honest "evidence level" ratings'
      },
      {
        title: 'Foods to Include and Limit',
        content: `**Foods to Emphasize:**
- Fatty fish (salmon, sardines) — omega-3s
- Eggs — protein, choline, and versatile
- Leafy greens — iron, calcium, folate
- Nuts and seeds — healthy fats, protein
- Whole grains — sustained energy
- Legumes (beans, lentils) — protein, fiber, iron
- Greek yogurt — protein, calcium, probiotics
- Colorful vegetables — antioxidants, fiber
- Fruits — vitamins, quick energy
- Avocado — healthy fats, potassium

**Foods to Limit (Not Eliminate):**
- High-mercury fish (shark, swordfish, king mackerel, tilefish)
- Excessive caffeine (keep under 300mg/day)
- Alcohol (occasional and moderate is fine)

**Foods You DON'T Need to Avoid:**
Despite myths, there's no evidence you need to avoid:
- Spicy foods
- Garlic or onions
- Gassy foods (broccoli, beans)
- Chocolate
- Dairy (unless baby has a diagnosed allergy)

**If Baby Seems Reactive:**
True food sensitivities are less common than believed. If you suspect one:
- Dairy is the most common culprit
- Eliminate completely for 2-3 weeks (it takes time to clear)
- Work with a pediatrician or allergist for guidance
- Don't eliminate multiple foods without medical supervision

**Quick Meal/Snack Ideas:**
- Greek yogurt + berries + granola
- Avocado toast with eggs
- Oatmeal with nut butter and banana
- Cheese and whole grain crackers
- Hummus with veggies
- Smoothies with spinach, fruit, nut butter
- Overnight oats (prep the night before)
- Trail mix (nuts, seeds, dark chocolate)
- Hard-boiled eggs (prep in batches)
- Leftovers — always make extra dinner`
      }
    ]
  },

  // COURSE 4: Benefits of Breastfeeding (PRO)
  {
    id: 'benefits',
    title: 'The Benefits of Breastfeeding',
    description: 'Science-backed benefits for baby and mother',
    icon: '💛',
    readTime: '6 min',
    isPro: true,
    color: '#D4A574',
    sections: [
      {
        title: 'Benefits for Baby',
        content: `Breast milk provides your baby with advantages that extend far beyond basic nutrition:

**Immune Protection:**
- Antibodies (especially IgA) coat baby's gut and respiratory tract
- White blood cells actively fight infection
- Antibodies are customized — when you're exposed to a germ, your milk adapts
- Lower rates of ear infections, respiratory infections, and GI infections

**Brain Development:**
- DHA and ARA (fatty acids) support brain and eye development
- Studies show cognitive advantages that persist into adulthood
- Average IQ difference: 3-7 points higher in breastfed children

**Reduced Risk of:**
- SIDS (Sudden Infant Death Syndrome) — up to 50% lower risk
- Childhood obesity
- Type 1 and Type 2 diabetes
- Asthma and allergies (especially with family history)
- Childhood leukemia
- Necrotizing enterocolitis (especially for preemies)

**Gut Health:**
- Breast milk establishes healthy gut bacteria
- Oligosaccharides (sugars) feed beneficial bacteria
- This microbiome foundation affects lifelong health

**Bonding:**
- Skin-to-skin and nursing release oxytocin
- Eye contact and closeness during feeding
- Baby learns to trust that needs will be met

**Important Note:**
These are population-level statistics. A formula-fed baby can be perfectly healthy. Benefits exist on a spectrum, and ANY amount of breast milk provides some benefit.`,
        imageDescription: 'Infographic showing baby with labeled benefit categories around them'
      },
      {
        title: 'Benefits for Mother',
        content: `Breastfeeding isn't just about baby — it provides significant benefits for your health too:

**Immediate Postpartum:**
- Oxytocin helps your uterus contract and return to size faster
- Reduced postpartum bleeding
- May help with postpartum weight loss (but not always)

**Reduced Cancer Risk:**
- Lower risk of breast cancer (the longer you breastfeed, the lower the risk)
- Lower risk of ovarian cancer
- Lower risk of uterine cancer

**Metabolic Benefits:**
- Reduced risk of Type 2 diabetes
- Lower blood pressure
- Improved cholesterol levels
- Lower risk of cardiovascular disease later in life

**Bone Health:**
- While calcium is pulled from bones during breastfeeding, bones recover after weaning
- Long-term: lower risk of osteoporosis in breastfeeding mothers

**Convenience & Cost:**
- Breast milk is free (formula costs $1,200-$3,000/year)
- Always the right temperature
- No bottles to wash at 3am
- Portable — no packing supplies for outings

**Emotional Benefits:**
- Oxytocin promotes bonding and calm
- Prolactin supports nurturing behaviors
- Many mothers feel a sense of pride and accomplishment
- Quiet moments of connection in busy days

**Caution:**
Not all mothers feel these emotional benefits — struggling, pain, or difficulty can overshadow them. Your mental health matters more than any "benefit." If breastfeeding is harming your wellbeing, that matters too.`,
        imageDescription: 'Mother-focused infographic showing health benefits for the nursing mother'
      },
      {
        title: 'Long-Term Benefits',
        content: `The effects of breastfeeding extend far beyond infancy:

**For Your Child:**
- Lower obesity rates throughout childhood and into adulthood
- Reduced risk of developing Type 2 diabetes
- Lower rates of certain autoimmune conditions
- Some studies suggest lower rates of depression and anxiety
- Better jaw development and dental health

**For You:**
- Every year of breastfeeding reduces breast cancer risk by ~4%
- The protective effects against heart disease persist for decades
- Lower rates of rheumatoid arthritis in mothers who breastfed

**For the Planet:**
- No manufacturing, packaging, shipping, or waste
- Lower carbon footprint than formula production
- No water needed for preparation

**For Society:**
- Lower healthcare costs (fewer infections, chronic diseases)
- Less parental work absence due to sick children
- Economic productivity gains

**Perspective:**
These long-term benefits are real but represent statistical averages. They don't guarantee outcomes for individuals. A formula-fed child can be healthier than a breastfed one, and vice versa.

The benefits exist on a spectrum — even brief breastfeeding provides some advantage, and more provides more. But "more" breastfeeding at the expense of maternal mental health may not be the best choice for a particular family.`
      },
      {
        title: 'Combo Feeding is Okay',
        content: `Let's be clear: **supplementing with formula does not negate the benefits of breastfeeding.**

**The Reality:**
- Many families combo feed (breast milk + formula)
- Reasons include: supply challenges, returning to work, shared feeding, medical necessity, personal choice
- Combo feeding is not "failing" — it's feeding your baby

**Any Breast Milk Provides Benefit:**
- Antibodies from one feeding still work
- Even small amounts of breast milk support gut health
- You don't need to be "exclusive" to make a difference

**When Combo Feeding Makes Sense:**
- Baby needs more than you can currently produce
- You need to be away from baby
- Another caregiver wants to participate in feeding
- Breastfeeding exclusively is affecting your mental health
- You simply want to — that's a valid reason

**How to Combo Feed Successfully:**
- If protecting supply: nurse or pump when baby gets a bottle
- Paced bottle feeding helps baby switch between breast and bottle
- Breastfeed first, then supplement if needed
- Or designate certain feeds as bottle feeds
- Work with an IBCLC if you want to increase the breast milk portion

**The Real Message:**
Fed is best. How your baby receives nutrition matters less than THAT they receive it, and that both of you are thriving. A mentally healthy mother with a fed baby is the goal — however that's achieved.`
      }
    ]
  },

  // COURSE 5: Common Challenges & Solutions (PRO)
  {
    id: 'challenges',
    title: 'Common Challenges & Solutions',
    description: 'What to do when things get tough',
    icon: '🛠️',
    readTime: '9 min',
    isPro: true,
    color: '#C4887A',
    sections: [
      {
        title: 'Latch Issues',
        content: `A good latch is the foundation of comfortable, effective breastfeeding. Here's how to troubleshoot:

**Signs of a Good Latch:**
- Baby's mouth is wide open (like a yawn)
- Lips are flanged outward (fish lips)
- More areola visible above baby's top lip than below
- Baby's chin touches breast, nose is free or nearly touching
- You hear swallowing, not clicking
- It doesn't hurt (beyond initial sensitivity in first weeks)

**Signs of a Poor Latch:**
- Painful nursing that doesn't improve
- Clicking sounds
- Baby slipping off repeatedly
- Nipple looks creased, flattened, or lipstick-shaped after feeding
- Baby seems frustrated or not satisfied after feeds

**How to Improve Latch:**
1. **Position baby nose-to-nipple** — they'll tilt head back and reach up
2. **Wait for wide gape** — stroke lips with nipple until mouth opens wide
3. **Bring baby to breast quickly** when mouth is at widest point
4. **Chin hits first** — asymmetric latch, with more breast below nipple
5. **If it hurts, break suction and try again** — insert finger in corner of mouth

**Positions That Help:**
- **Laid-back breastfeeding:** Recline, place baby on your chest, let gravity help
- **Football hold:** Good for C-section recovery and nipple positioning
- **Cross-cradle:** Gives you control of baby's head for latch

**When to Get Help:**
If latch is still painful or ineffective after trying these tips, see an IBCLC. They can assess for issues like tongue tie, lip tie, or positioning problems that are hard to self-diagnose.`,
        imageDescription: 'Side-by-side comparison of good latch vs. shallow latch, with labeled anatomy'
      },
      {
        title: 'Engorgement',
        content: `Engorgement happens when your breasts become overly full, often when milk "comes in" around days 3-5, or when feeds are missed.

**What You'll Experience:**
- Breasts feel hard, heavy, and tight
- Skin may appear shiny or stretched
- Significant discomfort or pain
- Difficulty with latch (areola too firm for baby to grasp)

**Why It Happens:**
When milk production ramps up, both milk AND increased blood flow/fluid converge in your breasts. It's a combination of milk accumulation and vascular congestion.

**What Helps:**
- **Nurse frequently** — every 2-3 hours, don't skip feeds
- **Cold compresses between feeds** — reduces swelling
- **Warm compress or shower right before feeding** — encourages flow
- **Hand express a little** before latching to soften the areola
- **Reverse pressure softening** — gentle pressure around nipple to move fluid back
- **Cabbage leaves** — yes, really. Cold cabbage in your bra can help (phytoestrogens reduce swelling)
- **Gentle massage** while nursing, toward the nipple
- **Anti-inflammatory pain relief** (ibuprofen is safe)

**What to Avoid:**
- Pumping to full empty (signals more production)
- Tight bras that restrict flow
- Sleeping on your stomach

**When to Worry:**
If engorgement is accompanied by fever, red streaks, or flu-like symptoms, it may be developing into mastitis. Contact your provider.

**Good News:**
Engorgement is usually most intense in the first week and resolves as your supply regulates to meet baby's demand.`,
        imageDescription: 'Diagram showing engorged breast with recommended relief techniques illustrated'
      },
      {
        title: 'Clogged Ducts & Mastitis',
        content: `**Clogged Ducts:**
A clogged duct is a blocked area in your breast where milk can't flow freely.

*Signs:*
- Hard, tender lump in breast
- Localized pain or warmth
- May have a small white spot (bleb) on nipple

*Treatment:*
- Keep nursing/pumping — this is THE treatment
- Start feeds on affected side
- Apply heat before nursing
- Massage the lump toward nipple during feeds
- Try "dangle feeding" (nurse on all fours, gravity helps)
- Vibration can help (electric toothbrush on the area)
- Rest and hydrate

*Prevention:*
- Frequent nursing without long gaps
- Avoid restrictive bras
- Lecithin supplements (3600-4800mg daily) may prevent recurrence

---

**Mastitis:**
Mastitis is inflammation (and sometimes infection) of the breast tissue.

*Signs:*
- Red, hot, wedge-shaped area
- Fever (often sudden onset)
- Flu-like symptoms (body aches, chills)
- Feeling generally unwell

*Treatment:*
- **Continue nursing** — this is critical for recovery
- **Rest** — this is medical advice, not optional
- Heat before nursing, cold after
- Anti-inflammatory pain relief (ibuprofen)
- Antibiotics if symptoms don't improve in 12-24 hours OR if they worsen

*When to Call Your Provider:*
- Fever over 101°F
- Symptoms worsening despite home treatment
- Pus discharge
- Symptoms lasting more than 24 hours without improvement

**Important:**
Milk from a breast with mastitis is safe for baby. Don't stop nursing on the affected side — empty that breast!`,
        imageDescription: 'Comparison images of normal breast, clogged duct location, and mastitis warning signs'
      },
      {
        title: 'Supply Concerns',
        content: `Supply worries are the #1 reason mothers stop breastfeeding — and most of the time, supply is actually fine.

**Perceived Low Supply vs. True Low Supply:**

*Signs supply is FINE (despite your worries):*
- Baby has 6+ wet diapers per day (after day 4)
- Baby is gaining weight
- Baby seems satisfied after most feeds
- Your breasts feel softer (this is regulation, not failure)
- You don't pump much (pump output ≠ supply)

*Signs supply may actually be low:*
- Fewer than 6 wet diapers per day
- Baby is not gaining or is losing weight
- Baby is consistently fussy and unsatisfied after feeds
- No audible swallowing during nursing

**If Supply is Truly Low:**
1. **Check milk removal** — is baby latching well and transferring milk?
2. **Rule out anatomical issues** — tongue tie, recessed chin
3. **Increase frequency** — more nursing/pumping = more demand
4. **Power pumping** — pump 20 min on, 10 off, 10 on, 10 off, 10 on (mimics cluster feeding)
5. **Address underlying causes** — thyroid issues, PCOS, retained placenta, certain medications
6. **See an IBCLC** — they can assess and create a personalized plan

**What Usually Doesn't Help:**
- Obsessing over pump output
- Supplementing without increasing breast stimulation
- Extreme restriction of "bad" foods
- Expensive supplements without addressing fundamentals

**The Bottom Line:**
Most mothers make plenty of milk. If you have genuine concerns, get professional assessment rather than assuming the worst.`,
        imageDescription: 'Flowchart: "Worried about supply?" with decision tree for assessment'
      },
      {
        title: 'Pain During Nursing',
        content: `Pain is your body's signal that something needs attention. Breastfeeding shouldn't be significantly painful after the first week or two.

**Normal vs. Not Normal:**

*Normal (first 1-2 weeks):*
- Brief discomfort at initial latch (improves within 30 seconds)
- General tenderness as nipples adapt
- Uterine cramping during nursing (letdown triggers contractions)

*Not normal (at any time):*
- Pain that persists throughout the feeding
- Severe pain at latch that doesn't improve
- Bleeding, cracked, or blistered nipples
- Shooting or burning pain between feeds
- Pain that makes you dread or avoid nursing

**Common Causes and Solutions:**

*Shallow Latch:*
Solution: Improve positioning and latch; see an IBCLC

*Tongue or Lip Tie:*
Solution: Evaluation by trained provider; possible revision

*Thrush (Yeast):*
Signs: Shiny, pink nipples; burning pain; white patches in baby's mouth
Solution: Antifungal treatment for both mom and baby

*Vasospasm:*
Signs: Nipple turns white/blue/red after feeds; burning pain
Solution: Keep nipples warm; avoid cold; sometimes medication needed

*Clogged Duct:*
Signs: Localized painful lump
Solution: Frequent nursing, massage, heat, rest

**When to Seek Help:**
- Pain that doesn't improve with positioning corrections
- Nipple damage that isn't healing
- Pain that makes you want to quit breastfeeding
- ANY pain that concerns you — you deserve support

**The Takeaway:**
Pain is not a rite of passage. If it hurts, there's usually a reason and a solution. Don't suffer silently — get help.`,
        imageDescription: 'Pain scale visual with corresponding causes and when-to-get-help guidance'
      },
      {
        title: 'When to See an IBCLC',
        content: `An IBCLC (International Board Certified Lactation Consultant) is a credentialed specialist in breastfeeding medicine. They are the gold standard of lactation support.

**When to See One:**

*Immediately (hospital or first days):*
- Baby won't latch at all
- Significant pain with every latch
- Concerns about baby's weight loss
- Preemie or baby with health complications
- Previous breastfeeding difficulties

*Within First Few Weeks:*
- Persistent latch issues
- Ongoing pain that isn't improving
- Concerns about milk supply
- Baby not gaining weight as expected
- Recurrent clogged ducts or mastitis
- Returning to work and need pumping plan
- Supplementing and want to increase breastfeeding

*Anytime:*
- Something doesn't feel right
- You need reassurance or a second opinion
- Major changes (back to work, starting solids)
- Considering weaning and want guidance

**What They Do:**
- Observe a feeding and assess latch
- Weigh baby before and after feeding (weighted feed) to measure transfer
- Evaluate for tongue/lip tie
- Review your full health and feeding history
- Create a personalized care plan
- Refer to other specialists if needed

**How to Find One:**
- Ask your OB, midwife, or pediatrician
- Search ILCA.org (International Lactation Consultant Association)
- Many hospitals have outpatient lactation clinics
- Some offer telehealth visits

**Cost:**
- Many insurance plans cover lactation consultations
- Hospital-based IBCLCs may be included in your birth package
- Private IBCLCs charge $100-300/visit (often worth every penny)

**The Bottom Line:**
Seeing an IBCLC early can prevent weeks of struggle. Don't wait until you're desperate — proactive help is always easier than crisis intervention.`
      }
    ]
  },

  // COURSE 6: The Emotional Side (PRO)
  {
    id: 'emotional',
    title: 'The Emotional Side of Breastfeeding',
    description: 'Understanding your feelings and when to seek help',
    icon: '💭',
    readTime: '7 min',
    isPro: true,
    color: '#9B9299',
    sections: [
      {
        title: "It's Hormonal, Not Personal",
        content: `If you're experiencing intense, unexpected, or confusing emotions while breastfeeding, there's a good chance hormones are involved.

**What's Happening:**
- Your body is flooded with prolactin and oxytocin during nursing
- Dopamine fluctuates, especially around letdown
- Sleep deprivation amplifies emotional responses
- Your brain is literally being restructured (matrescence)

**Common Experiences:**
- Feeling suddenly sad or tearful during feeds
- Irritation or rage that seems to come from nowhere
- Overwhelming love mixed with overwhelming overwhelm
- Feeling "touched out" and needing space
- Anxiety about supply, about baby, about everything
- Mood swings that feel unpredictable

**Important Reframe:**
These feelings don't mean you're a bad mother. They don't mean you don't love your baby. They don't mean you're failing. They mean you're a human being undergoing one of the most significant hormonal and psychological transitions of your life.

**What Helps:**
- Naming what you're feeling ("This is hormonal")
- Self-compassion instead of self-judgment
- Talking to someone who understands (partner, friend, therapist)
- Adequate rest, food, and basic self-care
- Knowing that many of these feelings are temporary and will shift

**When It's More:**
If feelings are persistent, severe, or affecting your ability to function or care for your baby, this may be more than "normal hormonal adjustment." Postpartum depression, anxiety, and other mood disorders are common and treatable. There's no shame in needing help.`
      },
      {
        title: 'D-MER: Sadness at Letdown',
        content: `D-MER (Dysphoric Milk Ejection Reflex) is a condition where mothers experience sudden negative emotions right before milk letdown.

**What It Feels Like:**
- Wave of sadness, anxiety, or dread
- Hollow feeling in the stomach
- Sudden irritability or anger
- Brief nausea
- Homesickness or longing
- Typically lasts 30 seconds to 2 minutes

**Critical Understanding:**
D-MER is NOT postpartum depression. It is NOT psychological. It is a PHYSIOLOGICAL response to the dopamine drop that occurs when prolactin rises for letdown.

**Why This Matters:**
Mothers with D-MER often feel crazy, broken, or like bad mothers because they feel terrible when they "should" feel bonding and love. Understanding that this is a biological glitch — not an emotional failure — is transformative.

**What Helps:**
- Knowledge — knowing what it is makes it easier to ride out
- Distraction during letdown (phone, TV, music)
- Tracking patterns to anticipate it
- Adequate sleep and nutrition
- Caffeine may help (boosts dopamine)
- For severe cases, medication is available

**What Doesn't Help:**
- Pushing through and suffering in silence
- Feeling guilty about your feelings
- Advice to "just relax and enjoy nursing"

**When to Seek Help:**
If D-MER is severely affecting your nursing experience or mental health, talk to a provider familiar with the condition. Treatment options exist.

**Note:** D-MER is under-recognized. Many providers haven't heard of it. You may need to educate them or seek out specialized support.`,
        imageDescription: 'Timeline graphic showing dopamine drop before letdown correlating with D-MER symptoms'
      },
      {
        title: 'Anxiety, Rage, and Feeling "Touched Out"',
        content: `**Breastfeeding Anxiety:**
Persistent worry about milk supply, baby's intake, or something going wrong. May manifest as:
- Obsessive weighing or pump output tracking
- Unable to relax during feeds
- Constant worry baby isn't getting enough
- Difficulty sleeping even when baby sleeps

*What helps:* Focus on diaper output rather than ounces. Limit Google spiraling. Get professional assessment for actual supply concerns. Consider therapy if anxiety is overwhelming.

---

**Breastfeeding Rage/Agitation:**
Intense irritation or anger that surfaces during nursing. You might feel:
- Skin-crawling sensation
- Urge to push baby away
- Frustration that feels disproportionate
- Anger at partner, situation, or baby

*What helps:* Distraction, shortened sessions if possible, ensuring you're not depleted (food, rest, alone time), recognizing it as physiological, and talking to someone without judgment.

---

**Feeling "Touched Out":**
Complete overwhelm from physical contact. Your body is being touched constantly — nursing, holding, comforting — and you hit a wall.

*Signs:*
- Cringing when partner touches you
- Feeling like you want everyone OFF
- Skin feels sensitive or crawly
- Need to be alone feels urgent

*What helps:*
- This is valid and normal
- Communicate clearly with partner about needing space
- Take touch breaks when possible
- It doesn't mean you don't love your family
- It means you're overstimulated and depleted

**For All Three:**
These experiences are more common than acknowledged. You're not alone, and you're not broken. Talking about it helps reduce the shame and isolation.`,
        imageDescription: 'Three-panel illustration depicting anxiety, rage, and touched-out feelings with compassionate framing'
      },
      {
        title: 'The Mental Load of Feeding',
        content: `Beyond the physical act, breastfeeding carries an invisible mental load:

**The Cognitive Burden:**
- Tracking feeds, diapers, and weight gain
- Monitoring your own diet, hydration, and medication
- Scheduling around nursing/pumping
- Worrying about supply, freezer stash, transitions
- Planning for outings, work, childcare
- Being the only one who can feed (in exclusive breastfeeding)

**The Emotional Labor:**
- Fielding questions and advice from everyone
- Defending your choices (to feed too long, too short, in public, etc.)
- Managing your own feelings about the experience
- Supporting your baby's emotional needs while nursing
- Carrying the weight of "breast is best" messaging

**Why This Matters:**
Acknowledging the mental load helps explain why you might feel exhausted beyond the physical demands. It's not just the calories burned — it's the cognitive and emotional energy.

**What Helps:**
- Share the load where possible (partner tracks diapers, manages pump parts)
- Lower your standards for other areas of life
- Automate and simplify (feeding stations, pre-prepped snacks)
- Set boundaries on unsolicited advice
- Acknowledge that this load is real, even if invisible

**To Partners:**
You may not be able to breastfeed, but you can:
- Handle everything ELSE (diapers, laundry, cooking, other kids)
- Bring water and snacks during feeds
- Protect nursing parent's rest
- Offer emotional support without trying to "fix" it
- Recognize the enormity of what they're doing`
      },
      {
        title: 'When to Seek Mental Health Support',
        content: `Struggling emotionally during breastfeeding is common — but there's a line where it becomes something that needs professional support.

**Normal Adjustment:**
- Mood swings in the first few weeks
- Occasional overwhelm
- Brief sadness or irritability
- Feeling like a different person (matrescence)
- Needing time to bond with baby

**Time to Seek Help:**
- Persistent sadness or emptiness lasting more than 2 weeks
- Anxiety that interferes with daily functioning
- Intrusive thoughts that frighten you
- Feeling disconnected from baby or unable to bond
- Thoughts of harming yourself or baby
- Rage that feels out of control
- Inability to sleep even when baby sleeps
- Feeling hopeless or worthless
- Not eating or caring for yourself

**What Help Looks Like:**
- Talk therapy (especially with a perinatal specialist)
- Support groups for postpartum mothers
- Medication — MANY are safe while breastfeeding
- IBCLC support if breastfeeding difficulties are contributing
- Time and space for self-care

**Important Truths:**
- Postpartum depression/anxiety are medical conditions, not character flaws
- Treatment works — you don't have to feel this way
- Getting help makes you a GOOD mother, not a failing one
- Breastfeeding AND mental health treatment can coexist
- If breastfeeding is harming your mental health, stopping or reducing is valid

**Resources:**
- Postpartum Support International: postpartum.net
- Text HOME to 741741 (Crisis Text Line)
- Call 988 (Suicide & Crisis Lifeline)
- Talk to your OB, midwife, or primary care provider

**You deserve to feel okay. Help exists. Please reach out.**`
      }
    ]
  },

  // COURSE 7: Pumping & Working (PRO)
  {
    id: 'pumping-working',
    title: 'Pumping & Working',
    description: 'Building a stash, maintaining supply, and your rights',
    icon: '💼',
    readTime: '8 min',
    isPro: true,
    color: '#8BA888',
    sections: [
      {
        title: 'Building a Freezer Stash',
        content: `Let's set realistic expectations about freezer stashes:

**The Truth:**
You don't need a freezer full of milk. Instagram-worthy stashes are not the norm — and they're not necessary.

**How Much You Actually Need:**
- Enough for 1-3 days of separation (if you're returning to work)
- For most babies: 1-1.5 oz per hour of separation
- 8-hour workday ≈ 10-15 oz
- Building 30-50 oz before returning to work is plenty for most families

**When to Start:**
- Not too early — wait until breastfeeding is well-established (3-4 weeks)
- Adding pumping too early can lead to oversupply issues
- Start with 1-2 sessions per day, ideally when supply is highest (morning)

**How to Build a Stash:**
- Pump after morning nursing (when supply is typically highest)
- Pump one side while baby nurses the other
- Pump if baby sleeps through a usual feeding time
- Save any excess from pumping sessions

**What Output to Expect:**
- 1-2 oz TOTAL per pumping session (combined both breasts) is NORMAL
- You're getting "extra" — baby already took what they needed
- Pump output does NOT equal what baby gets from nursing
- Babies are more efficient than pumps

**Storage Guidelines:**
- Room temperature: 4 hours
- Refrigerator: 4 days
- Freezer: 6-12 months (back of freezer, not door)
- Thawed: 24 hours in refrigerator, don't refreeze

**Important Mindset:**
A "just enough" stash is a successful stash. You're pumping at work to replace what baby drinks — not to stockpile endlessly.`,
        imageDescription: 'Storage guidelines infographic with timing for room temp, fridge, and freezer'
      },
      {
        title: 'Pumping Schedule Basics',
        content: `**Pumping While at Work:**

Goal: Remove milk as often as your baby would nurse to maintain supply.

*General Guidelines:*
- Pump every 3-4 hours during a typical 8-hour workday (2-3 sessions)
- Each session: 15-20 minutes (or until milk stops flowing)
- Try to match the timing of when baby would normally nurse

**Sample Schedule (9-5 job, baby who typically nurses every 3 hours):**
- 6:30am: Nurse baby before leaving
- 9:30am: Pump at work
- 12:30pm: Pump at work
- 3:30pm: Pump at work (or skip if leaving soon)
- 5:30pm: Nurse baby at pickup
- Evening/night: Nurse on demand

**Power Pumping to Boost Supply:**
One session of: 20 min pump, 10 min rest, 10 min pump, 10 min rest, 10 min pump
Do this once daily if supply is dipping.

**Tips for Pumping at Work:**
- Get a hands-free pumping bra — game changer
- Keep duplicate pump parts at work
- Store parts in fridge between sessions (wash once daily)
- Bring photos or videos of baby to help letdown
- Use a nursing cover for privacy if space isn't ideal
- Bring a cooler bag with ice packs for transport

**Exclusive Pumping:**
If you're exclusively pumping (not nursing directly):
- Pump 8-12 times per day in the early weeks
- Gradually can reduce to 6-8 times once supply establishes
- Include at least one overnight pump
- This is HARD — you're doing the work of both nursing and pumping

**Remember:**
Pump output may be less than what baby takes at breast. That's normal. If you're pumping enough to replace what baby drinks while you're apart, you're succeeding.`,
        imageDescription: 'Sample pumping schedule visual with clock times and session durations'
      },
      {
        title: 'Pump Parts and Maintenance',
        content: `**Choosing a Pump:**

*Hospital-grade:*
- Most efficient, best for exclusive pumping or supply challenges
- Rent from hospital or buy/rent from medical supply

*Personal double electric:*
- Standard for working mothers
- Insurance covers one — call your insurer before buying
- Brands: Spectra, Medela, Motif, Elvie, Willow

*Manual:*
- Good for occasional use or travel
- Can be used alongside an electric pump

*Wearable:*
- Elvie, Willow, Mom Cozy, etc.
- Convenient but often less efficient
- Good supplement, may not fully replace a traditional pump

---

**Flange Size Matters:**

One of the most common pumping problems is wrong flange size.

*Signs your flange is too small:*
- Nipple rubbing against sides
- Pain during pumping
- Poor output

*Signs your flange is too big:*
- Too much areola being pulled in
- Nipple not centered
- Poor output

*How to measure:*
Measure nipple diameter at base (not areola). Add 2-3mm for flange size.

*Standard sizes:* 24mm, 27mm — but many women need 15mm, 17mm, or 19mm inserts

---

**Cleaning and Storage:**

*Daily:*
- Rinse parts after each use
- Wash with soap and water OR use dishwasher (top rack)
- Air dry on clean towel

*Between sessions at work:*
- Refrigerator hack: store parts in sealed bag in fridge between pumps (wash fully once at home)
- Some choose to wash between each session — your preference

*Deep cleaning:*
- Sanitize weekly (boiling, microwave sterilizer, or dishwasher sanitize cycle)
- Replace worn parts (membranes, valves) every 2-3 months or when suction decreases`,
        imageDescription: 'Visual guide to flange sizing with measurement instructions'
      },
      {
        title: 'Your Legal Rights at Work (US)',
        content: `**Federal Protection:**
The PUMP Act (2022) expanded protections for nursing employees.

*Who is covered:*
Most employees are covered, including previously exempt workers (teachers, nurses, farmworkers, airline employees).

*Your rights:*
- Reasonable break time to pump for one year after baby's birth
- Private space that is NOT a bathroom (shielded from view, free from intrusion)
- Time as needed — as often and for as long as you need

*Employer obligations:*
- Provide the space and time
- Cannot retaliate against you for exercising these rights
- Small employers (under 50 employees) may claim exemption if it creates "undue hardship"

---

**State Laws:**
Many states have additional protections that exceed federal law. Look up your specific state at breastfeedinglaw.com.

---

**What to Do:**

*Before returning to work:*
- Notify HR or your supervisor in writing about your pumping needs
- Ask where you'll pump and when breaks are accommodated
- Get everything in writing if possible

*If your employer isn't complying:*
- Document everything
- Remind them of federal PUMP Act requirements
- Contact the Department of Labor (dol.gov/agencies/whd/pump-at-work)
- Reach out to a breastfeeding law attorney if needed

---

**Know Your Worth:**
Your right to feed your baby is protected by law. You don't need to apologize for pumping. Many employers are supportive once they understand the requirements and realize accommodations are usually straightforward.`
      },
      {
        title: 'Traveling and Maintaining Supply',
        content: `**Traveling Without Baby:**

*Pumping while away:*
- Continue pumping on your usual schedule to maintain supply
- Store pumped milk properly if bringing home, or "pump and dump" if storage isn't possible

*Transporting milk:*
- Frozen milk can travel in a cooler with dry ice (check airline policies for dry ice limits)
- Refrigerated milk can stay cold in a cooler for 24 hours
- Ship frozen milk overnight with dry ice if extended travel

*TSA rules (US):*
- Breast milk is exempt from 3.4oz liquid limit
- Inform TSA agent you have breast milk before screening
- May request visual inspection instead of X-ray
- Ice packs and cooling accessories are permitted

---

**Pumping on the Go:**

*For occasional pumping:*
- Manual pump (small, quiet, no power needed)
- Battery pack for your electric pump

*For regular travel:*
- Wearable pump (Elvie, Willow) — pump in car, plane, meetings
- Car adapter for pump
- Portable pump bag with cooler compartment

---

**Maintaining Supply During Travel:**

*Short trips (1-3 days):*
- Pump on usual schedule
- Supply should maintain without issue

*Longer trips:*
- Pump consistently even if discarding milk
- May need to pump more frequently to make up for less efficient pump (vs. baby)
- Don't panic if output dips temporarily — it usually recovers with baby's nursing

---

**Tips:**
- Call hotels ahead to request a fridge or bring a cooler
- Build in extra time for airport pumping
- Know that single-day dips from stress or travel are temporary
- Bring backup pump parts (valves break at the worst times)

**Coming Home:**
Baby's nursing will quickly tell your body to regulate back to normal. Any temporary supply fluctuation from travel typically resolves within a day or two of resuming normal nursing.`
      }
    ]
  },

  // COURSE 8: Weaning (PRO)
  {
    id: 'weaning',
    title: 'Weaning: When & How',
    description: 'Ending your breastfeeding journey with intention',
    icon: '🌱',
    readTime: '7 min',
    isPro: true,
    color: '#4A3F4B',
    sections: [
      {
        title: 'Baby-Led vs. Mother-Led Weaning',
        content: `There's no single "right" way to wean. The best approach is the one that works for your family.

**Baby-Led Weaning:**
Baby gradually loses interest in breastfeeding and naturally stops on their own timeline.

*What it looks like:*
- Baby increasingly prefers solid foods
- Nursing sessions get shorter and less frequent
- Baby becomes easily distracted at breast
- Typically happens gradually after 12 months
- May take months or even years

*Pros:*
- Gentle and gradual
- Less hormonal shock to your system
- Baby leads the pace
- Less emotional for some mothers

*Cons:*
- Timeline is unpredictable
- May not align with mother's needs or preferences
- Can take longer than expected

---

**Mother-Led Weaning:**
Mother initiates the weaning process.

*Reasons mothers choose this:*
- Returning to work
- New pregnancy
- Medication that's not compatible with breastfeeding
- Physical exhaustion or depletion
- Mental health needs
- Personal readiness to stop
- Nursing aversion

*Important:*
Wanting to stop is a valid reason. You don't need medical justification to wean when you're ready.

---

**The Middle Ground:**
Most weaning is somewhere in between — mother guides the process, but at a pace baby can adapt to. "Don't offer, don't refuse" is a common gentle approach.

**Bottom Line:**
There's no perfect age or method. Whether weaning happens at 4 months, 2 years, or somewhere in between — and whether it's baby-led or mother-led — you're making the right choice for your family.`,
        imageDescription: 'Comparison chart of baby-led vs. mother-led weaning characteristics'
      },
      {
        title: 'Gradual Weaning to Prevent Mastitis',
        content: `If you're initiating weaning (mother-led), gradual is better than abrupt — for your body AND your emotions.

**Why Gradual Matters:**

*Physical reasons:*
- Sudden weaning can cause severe engorgement
- Risk of clogged ducts and mastitis
- Hormonal crash can be more intense

*Emotional reasons:*
- Gradual weaning gives you time to adjust
- Less intense hormonal drop
- Time to process the end of this chapter

---

**How to Wean Gradually:**

**Step 1:** Drop one feeding at a time
- Start with the feeding your baby is least attached to
- Wait 3-7 days before dropping another
- Your supply will adjust as demand decreases

**Step 2:** Replace with connection
- Offer a bottle or cup with milk/formula (if under 12 months)
- Extra cuddles, books, or other comfort
- Baby may need additional soothing as nursing is reduced

**Step 3:** Address discomfort
- If breasts feel full, express just enough to relieve pressure (not to empty)
- Cold compresses and ibuprofen for discomfort
- Cabbage leaves can help reduce supply

**Step 4:** Leave the most cherished feed for last
- Usually bedtime or morning nursing
- These can continue as long as you want, even as "only" nursing sessions
- There's no rush to eliminate them

---

**Timeline Examples:**
- Very gradual: Drop 1 feed every 1-2 weeks (weeks to months)
- Moderate: Drop 1 feed every 3-5 days (2-4 weeks)
- Faster (if needed): Drop 1 feed every 2-3 days (1-2 weeks)

---

**Emergency or Abrupt Weaning:**
Sometimes weaning must happen quickly. If so:
- Express just enough for comfort (not to empty)
- Ibuprofen for inflammation
- Ice packs and tight bra
- Watch closely for mastitis signs
- Be gentle with yourself emotionally`
      },
      {
        title: 'Weaning and Hormones',
        content: `Weaning isn't just physical — it's a hormonal event that can significantly affect how you feel.

**What's Happening:**
- Prolactin levels drop as nursing decreases
- Oxytocin (the bonding, calming hormone) is no longer being triggered by nursing
- Your body may shift toward pre-pregnancy hormonal patterns
- If abrupt weaning: these changes happen rapidly, like hitting a wall

---

**Common Experiences:**

*During weaning:*
- Mood swings
- Sadness or tearfulness (even if you wanted to wean)
- Irritability
- Anxiety
- Grief about the end of this chapter
- Relief (also valid!)

*After weaning:*
- Post-weaning depression is real and under-recognized
- May feel like postpartum depression hitting again
- Usually improves within 2-4 weeks
- If symptoms are severe or persist, seek professional support

---

**Hormonal Support:**

*If weaning gradually:*
- The slower the wean, the gentler the hormonal shift
- Your body has time to adjust

*If weaning quickly or suddenly:*
- Be prepared for emotional intensity
- Prioritize self-care
- Lean on your support system
- Consider therapy if feelings are overwhelming

---

**Important:**
Your feelings about weaning don't have to match what you "should" feel. You can feel:
- Grief, even if you chose to wean
- Relief, even if you loved breastfeeding
- Both at once
- Neither strongly

**All are valid.** Weaning marks the end of a profound relationship. Whatever you feel is okay.`
      },
      {
        title: 'The Emotional Aspects of Weaning',
        content: `Weaning is often more emotional than mothers expect — regardless of when or why it happens.

**Common Feelings:**

*Grief:*
- Mourning the end of a unique relationship
- Sadness that baby is growing up
- Feeling like you're losing something precious

*Guilt:*
- "I should have gone longer"
- "Baby wasn't ready"
- "I'm being selfish"

*Relief:*
- Getting your body back
- Freedom from pumping/nursing schedule
- Less touched out
- Returning to a pre-nursing sense of self

*Ambivalence:*
- Happy and sad at the same time
- Wanting your body back but missing the closeness
- Ready to wean but not ready to let go

---

**Normalizing All of It:**

Whatever you feel is valid. There's no "right" emotional response to weaning.

Grief doesn't mean you made the wrong choice.
Relief doesn't mean you didn't value breastfeeding.
Ambivalence is one of the most common experiences.

---

**Honoring the Transition:**

Some mothers find it helpful to:
- Have a "last nursing session" with intention (photos, journaling)
- Save a small amount of milk in a keepsake piece
- Write a letter to your baby about your nursing journey
- Allow yourself to cry
- Celebrate what you accomplished

---

**If You Didn't Wean by Choice:**

Weaning due to circumstances (medical, supply, returning to work) can carry extra grief. You may need to mourn the breastfeeding relationship you wanted alongside the one you had.

This is real grief. It deserves acknowledgment and space.

If you're struggling, talking to a therapist who specializes in perinatal mental health can help.`
      },
      {
        title: 'Your Body After Weaning',
        content: `Weaning brings physical changes as your body transitions out of lactation.

**Breast Changes:**

*Immediately:*
- Breasts may feel fuller, then gradually soften
- Possible leaking for weeks or even months after weaning
- Some engorgement (especially if weaning quickly)

*Over time:*
- Breasts will change size (may be larger, smaller, or different from pre-pregnancy)
- Breast tissue may feel softer or less firm
- Shape may change
- This is normal and not a reflection of how you fed your baby

**Menstrual Cycle:**
- If periods haven't returned, expect them soon after weaning
- Fertility typically returns quickly once nursing stops
- First periods may be irregular or heavier than usual

**Weight:**
- Some mothers lose weight after weaning (no longer need extra calories)
- Some gain weight (especially if body was holding onto stores for milk-making)
- Some stay the same
- All are normal

**Sleep:**
- Some mothers sleep better after night weaning
- Prolactin (which helps with nighttime calmness) will decrease, which may initially affect sleep
- Many feel more energetic once no longer breastfeeding

**Mood:**
- Watch for post-weaning depression (see previous section)
- If mood issues persist past a few weeks, seek support

---

**Caring for Your Post-Weaning Body:**

- Be patient — your body has been through a lot
- Bodies don't "bounce back" — they move forward
- Gentle movement, good nutrition, and rest support healing
- If you notice lumps or concerning changes in your breasts after weaning, see a provider

---

**A Final Note:**

Whether you breastfed for days, months, or years — your body did something extraordinary. However your journey ended, you nourished a human being. That deserves honor, not criticism.

Take care of yourself in this next chapter, too. You've earned it.`
      }
    ]
  }
];

// Get course by ID
export function getCourseById(id: string): Course | undefined {
  return courses.find(c => c.id === id);
}

// Get free courses
export function getFreeCourses(): Course[] {
  return courses.filter(c => !c.isPro);
}

// Get pro courses
export function getProCourses(): Course[] {
  return courses.filter(c => c.isPro);
}
