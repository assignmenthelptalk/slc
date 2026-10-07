export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  /** Short label used in nav and cards */
  label: string;
  h1: string;
  metaTitle: string;
  metaDesc: string;
  /** One-sentence card summary */
  summary: string;
  intro: string[];
  includedHeading: string;
  included: string[];
  signsHeading: string;
  signs: string[];
  faqs: Faq[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: "water-softener-installation-salt-lake-city",
    name: "Water Softener Installation",
    label: "Installation",
    h1: "Water Softener Installation in Salt Lake City, UT",
    metaTitle: "Water Softener Installation Salt Lake City | SLC Elite",
    metaDesc:
      "Professional water softener installation in Salt Lake City, UT. Right-sized systems, clean plumbing, and a free estimate from SLC Elite Water Softener.",
    summary: "Right-sized salt-based systems installed cleanly, tested, and explained before we leave.",
    intro: [
      "Salt Lake Valley homes see hard water at every tap, and a properly sized softener is the single most effective fix. SLC Elite Water Softener designs and installs systems around your household size, your water hardness, and the plumbing already in your home.",
      "We size every system to your actual demand rather than guessing. Too small and the unit regenerates constantly and wastes salt. Too large and you pay for capacity you never use. A free in-home hardness test gives us the numbers to get it right the first time.",
    ],
    includedHeading: "What a standard installation includes",
    included: [
      "Free in-home hardness test and system sizing",
      "Softener tank, resin, and control valve set up on a bypass for easy service",
      "Drain line routing and an air gap that meets plumbing code",
      "Outdoor hose bibs and cold-only fixtures left on untreated water when you want them",
      "Programming for your hardness, household size, and regeneration schedule",
      "A walkthrough covering salt, settings, and what normal operation looks like",
    ],
    signsHeading: "Signs it is time to install a softener",
    signs: [
      "White crusty scale on faucets, shower heads, and kettles",
      "Spotted glasses and film on shower doors no matter how you clean",
      "Dry skin and itchy scalp after showering",
      "Soap and shampoo that never seem to lather",
      "A water heater or dishwasher that is losing efficiency or failing early",
    ],
    faqs: [
      {
        q: "Will my existing plumbing work with a new softener?",
        a: "In most Salt Lake Valley homes, yes. We check pipe size, shutoff valves, drain access, and an electrical outlet near the install spot during your free estimate and tell you about any extra work before you commit.",
      },
      {
        q: "Where in the house does the softener go?",
        a: "Usually on the main water line in a garage, utility room, or basement, where it can reach a drain and a power outlet. We place it so outdoor spigots stay on untreated water.",
      },
    ],
    related: [
      "salt-free-water-softener-salt-lake-city",
      "water-softener-maintenance-salt-lake-city",
      "water-quality-testing-salt-lake-city",
    ],
  },
  {
    slug: "water-softener-repair-salt-lake-city",
    name: "Water Softener Repair & Service",
    label: "Repair & Service",
    h1: "Water Softener Repair in Salt Lake City, UT",
    metaTitle: "Water Softener Repair Salt Lake City | SLC Elite",
    metaDesc:
      "Fast water softener repair in Salt Lake City, UT. We diagnose control head, resin, brine tank, and valve problems. Request a free estimate today.",
    summary: "Diagnosis and repair for softeners that stopped softening, leak, or will not regenerate.",
    intro: [
      "When a softener stops working, hard water returns quietly. You notice scale on fixtures again, or the salt level never seems to drop. SLC Elite Water Softener diagnoses the real cause before replacing anything, so you only pay for the repair you need.",
      "We service the common brands found in Salt Lake Valley homes and can tell you honestly whether a repair makes sense or whether the unit is at the end of its life.",
    ],
    includedHeading: "Problems we repair",
    included: [
      "Control head and circuit board failures, including units that will not regenerate",
      "Worn seals, pistons, and valves that cause leaks or constant drain flow",
      "Salt bridges and mushing in the brine tank",
      "Clogged injectors and venturis that stop brine draw",
      "Exhausted or fouled resin that no longer removes hardness",
      "Bypass valve, drain line, and plumbing connection leaks",
    ],
    signsHeading: "Signs your softener needs service",
    signs: [
      "Hard water symptoms are back even though the unit has salt",
      "Water running to the drain continuously",
      "Salt that does not get used, or a tank full of water",
      "Error codes, a blank display, or a unit stuck mid-cycle",
      "Salty taste or a sudden drop in water pressure",
    ],
    faqs: [
      {
        q: "Is it worth repairing an older softener?",
        a: "Often yes. Control heads, seals, and injectors are inexpensive compared with replacing the whole system. If the resin tank is cracked or the resin is badly degraded, we will tell you when replacement is the better value.",
      },
      {
        q: "How do I know my softener has actually stopped working?",
        a: "A simple hardness test at a tap after the softener should read near zero. If it reads hard, or scale is returning, the unit needs service.",
      },
    ],
    related: [
      "water-softener-maintenance-salt-lake-city",
      "water-softener-installation-salt-lake-city",
      "water-quality-testing-salt-lake-city",
    ],
  },
  {
    slug: "salt-free-water-softener-salt-lake-city",
    name: "Salt-Free Water Softener Systems",
    label: "Salt-Free Systems",
    h1: "Salt-Free Water Softener Systems in Salt Lake City, UT",
    metaTitle: "Salt-Free Water Softener Salt Lake City | SLC Elite",
    metaDesc:
      "Salt-free water softener and scale-prevention systems for Salt Lake City homes. Learn how they work, what they do, and get a free estimate.",
    summary: "Template-assisted crystallization systems that reduce scale without salt, drain discharge, or electricity.",
    intro: [
      "Salt-free systems do not remove calcium and magnesium the way a salt-based softener does. They condition the minerals so they are far less likely to form hard scale on pipes, fixtures, and heating elements. Many homeowners like them because there is no salt to buy, no brine discharge, and almost no maintenance.",
      "They are not the right answer for every home. If your main goal is the slick, soap-friendly feel of truly softened water, or your hardness is on the high end, a salt-based system performs better. We will tell you which one fits your house instead of selling the most expensive option.",
    ],
    includedHeading: "What you get with a salt-free system",
    included: [
      "Scale prevention on pipes, water heaters, and fixtures",
      "No salt to haul and no brine discharge to the drain",
      "No electricity and no regeneration cycle to program",
      "A media cartridge replaced on a published schedule, typically every several years",
      "A pre-filter recommendation when sediment would shorten media life",
    ],
    signsHeading: "A salt-free system may suit you if",
    signs: [
      "You want to cut scale but do not need fully softened water",
      "You prefer not to add sodium or chloride to your water",
      "You want the lowest-maintenance option",
      "Your household avoids regular salt deliveries",
      "Your hardness is moderate rather than at the top of the Salt Lake Valley range",
    ],
    faqs: [
      {
        q: "Does a salt-free system actually soften water?",
        a: "Not in the strict sense. Hardness minerals stay in the water, but they are conditioned so they stay suspended instead of sticking to surfaces as scale. Water will not feel as slippery as it does from a salt-based softener.",
      },
      {
        q: "Will it protect my water heater?",
        a: "Template-assisted crystallization systems are designed to reduce scale buildup, which helps heaters and appliances. Results depend on your hardness, water temperature, and system sizing.",
      },
    ],
    related: [
      "water-softener-installation-salt-lake-city",
      "hard-water-treatment-salt-lake-city",
      "whole-house-water-filtration-salt-lake-city",
    ],
  },
  {
    slug: "whole-house-water-filtration-salt-lake-city",
    name: "Whole House Water Filtration",
    label: "Whole House Filtration",
    h1: "Whole House Water Filtration in Salt Lake City, UT",
    metaTitle: "Whole House Water Filtration Salt Lake City | SLC Elite",
    metaDesc:
      "Whole house water filtration for Salt Lake City homes. Reduce chlorine, sediment, and taste issues at every tap. Free estimate from SLC Elite Water Softener.",
    summary: "Filter every tap for chlorine taste, sediment, and odor, and pair it with a softener for complete treatment.",
    intro: [
      "A whole house filter treats water where it enters your home, so every tap, shower, and appliance gets the same improved water. Carbon-based filtration is the usual choice for chlorine taste and odor, and a sediment stage catches sand and rust particles before they reach your fixtures.",
      "Filtration and softening do different jobs. A filter improves taste and removes particulates and chemicals. A softener removes hardness. Many Salt Lake City homes benefit from both, installed in the right order so each unit protects the next.",
    ],
    includedHeading: "What we install",
    included: [
      "Sediment pre-filtration for sand, silt, and rust",
      "Catalytic or granular activated carbon for chlorine, chloramine reduction, taste, and odor",
      "Bypass and pressure-gauge setups so cartridges and media are easy to service",
      "Combined softener and filter packages sized to your household",
      "A written maintenance schedule for cartridge or media replacement",
    ],
    signsHeading: "Signs a whole house filter helps",
    signs: [
      "Tap water that smells or tastes like chlorine",
      "Visible grit, sand, or rust flecks in the water",
      "Dull-tasting coffee, tea, or ice",
      "Dry skin and hair even after fixing hardness",
      "Wanting cleaner water at the shower as well as the kitchen sink",
    ],
    faqs: [
      {
        q: "Does a whole house filter replace a softener?",
        a: "No. Standard carbon and sediment filters do not remove hardness minerals. If scale is your concern, you need a softener or a scale-prevention system alongside the filter.",
      },
      {
        q: "How often do filters need replacing?",
        a: "Sediment cartridges are usually changed every few months and carbon media every few years, depending on water quality and household usage. We give you a schedule specific to your system.",
      },
    ],
    related: [
      "reverse-osmosis-installation-salt-lake-city",
      "water-quality-testing-salt-lake-city",
      "water-softener-installation-salt-lake-city",
    ],
  },
  {
    slug: "hard-water-treatment-salt-lake-city",
    name: "Hard Water Treatment",
    label: "Hard Water Treatment",
    h1: "Hard Water Treatment in Salt Lake City, UT",
    metaTitle: "Hard Water Treatment Salt Lake City | SLC Elite",
    metaDesc:
      "Hard water treatment for Salt Lake City, UT homes. Stop limescale, spotting, and appliance wear with the right softener or conditioner. Free estimate.",
    summary: "A plan to stop limescale, spotting, and dry skin, matched to your hardness and budget.",
    intro: [
      "Hard water treatment starts with knowing how hard your water really is and what you want to fix. We test first, then recommend the lightest solution that solves your problem, whether that is a salt-based softener, a salt-free conditioner, or a combination.",
      "Left untreated, hardness builds scale inside water heaters, dishwashers, washing machines, and pipes. It shortens appliance life and raises energy use because scale insulates heating elements. Treating the water at the point of entry protects the whole house at once.",
    ],
    includedHeading: "How we treat hard water",
    included: [
      "On-site hardness test, plus iron and TDS checks when needed",
      "A recommendation between salt-based, salt-free, or combined treatment",
      "System sizing to your household and peak demand",
      "Installation with a bypass and clear service instructions",
      "Follow-up support if results are not what you expected",
    ],
    signsHeading: "Everyday effects of hard water",
    signs: [
      "Limescale rings on tubs, sinks, and shower glass",
      "Cloudy dishes and spotted glassware",
      "Stiff, scratchy laundry and faded fabrics",
      "Skin that feels tight or dry after bathing",
      "Reduced water flow as scale narrows pipes and aerators",
    ],
    faqs: [
      {
        q: "How do I measure hardness?",
        a: "Hardness is measured in grains per gallon (GPG). Water above roughly 7 GPG is considered hard and above 10 is very hard. We test your water for free at your estimate so you have a real number.",
      },
      {
        q: "Can I treat only the water heater?",
        a: "You can, but hardness would still affect fixtures, dishwashers, and skin. Treating water at the main line is more effective and often better value than protecting a single appliance.",
      },
    ],
    related: [
      "water-softener-installation-salt-lake-city",
      "salt-free-water-softener-salt-lake-city",
      "water-quality-testing-salt-lake-city",
    ],
  },
  {
    slug: "water-quality-testing-salt-lake-city",
    name: "Water Quality Testing",
    label: "Water Testing",
    h1: "Water Quality Testing in Salt Lake City, UT",
    metaTitle: "Water Quality Testing Salt Lake City | SLC Elite",
    metaDesc:
      "Free in-home water hardness testing and water quality testing in Salt Lake City, UT. Know exactly what is in your water before you buy any system.",
    summary: "A free on-site test for hardness, iron, TDS, and chlorine, so you buy only what your water needs.",
    intro: [
      "The right water treatment system depends on what is actually in your water. A hardness reading, a total dissolved solids reading, and a look for iron and chlorine tell us far more than guesses based on a neighbor's system.",
      "We offer a free on-site screening test as part of every estimate. If your results suggest contaminants we are not equipped to test for, we will point you to a certified lab rather than guessing.",
    ],
    includedHeading: "What we test for on-site",
    included: [
      "Total hardness in grains per gallon",
      "Iron and, where relevant, manganese",
      "Total dissolved solids (TDS)",
      "Chlorine and pH screening",
      "A plain-language explanation of every reading",
    ],
    signsHeading: "When to test your water",
    signs: [
      "You are moving into a new home and want a baseline",
      "You notice spots, scale, staining, or odd tastes",
      "You are considering a softener or filter and want to size it properly",
      "Your softener is installed and you want to confirm it is working",
      "You rely on a private well and have never tested",
    ],
    faqs: [
      {
        q: "Is the water test really free?",
        a: "Yes. The on-site screening that comes with your estimate has no charge and no obligation.",
      },
      {
        q: "Does an on-site test replace a lab test?",
        a: "No. Our screening is for sizing treatment equipment. If you are worried about specific contaminants such as bacteria, nitrates, arsenic, or lead, a certified laboratory test is the right tool.",
      },
    ],
    related: [
      "hard-water-treatment-salt-lake-city",
      "well-water-treatment-salt-lake-city",
      "whole-house-water-filtration-salt-lake-city",
    ],
  },
  {
    slug: "well-water-treatment-salt-lake-city",
    name: "Well Water Treatment",
    label: "Well Water Treatment",
    h1: "Well Water Treatment in Salt Lake City, UT",
    metaTitle: "Well Water Treatment Salt Lake City | SLC Elite",
    metaDesc:
      "Well water treatment in the Salt Lake City area. Testing, softening, iron removal, and filtration for private wells. Request a free estimate.",
    summary: "Testing and treatment for private wells: hardness, iron, sediment, and taste.",
    intro: [
      "Most Salt Lake Valley homes are on city or district water, but some properties, especially along the benches and in canyon areas, rely on private wells. Well water is not treated by a utility, so what comes out of the ground is what reaches your tap.",
      "Treatment starts with a proper test. Hardness, iron, sediment, and sulfur smell are all common on wells and each needs a different approach. We design a train of treatment steps for your specific results and recommend a certified lab for health-related contaminants.",
    ],
    includedHeading: "Common well water treatment components",
    included: [
      "Sediment filtration to protect downstream equipment",
      "Water softener for hardness and small amounts of dissolved iron",
      "Iron filtration for higher iron levels",
      "Carbon filtration for taste and odor",
      "Ultraviolet disinfection where lab results call for it",
    ],
    signsHeading: "Signs your well water needs treatment",
    signs: [
      "Orange or brown staining in sinks, tubs, and laundry",
      "Metallic taste or a rotten-egg smell",
      "Sand or silt in the water",
      "Heavy scale despite no softener",
      "Never having tested the well, or not in the last year",
    ],
    faqs: [
      {
        q: "Do I need a lab test before treating my well?",
        a: "We strongly recommend it. A certified lab can check for bacteria, nitrates, and metals that on-site screening cannot, and the results let us build the right treatment train.",
      },
      {
        q: "Can one system handle everything?",
        a: "Rarely. Wells usually need several steps in the right order, such as sediment filtration, iron removal, softening, and disinfection. We design the sequence around your test results.",
      },
    ],
    related: [
      "iron-filter-installation-salt-lake-city",
      "water-quality-testing-salt-lake-city",
      "water-softener-installation-salt-lake-city",
    ],
  },
  {
    slug: "reverse-osmosis-installation-salt-lake-city",
    name: "Reverse Osmosis Installation",
    label: "Reverse Osmosis",
    h1: "Reverse Osmosis Installation in Salt Lake City, UT",
    metaTitle: "Reverse Osmosis Installation Salt Lake City | SLC Elite",
    metaDesc:
      "Under-sink reverse osmosis installation in Salt Lake City, UT. Great-tasting drinking water at your kitchen tap. Free estimate from SLC Elite.",
    summary: "An under-sink RO system for the best-tasting drinking and cooking water in the house.",
    intro: [
      "Reverse osmosis pushes water through a very fine membrane that reduces dissolved solids, including many of the minerals that make Salt Lake Valley water taste heavy. Installed under the kitchen sink with its own faucet, an RO system gives you a dedicated tap for drinking, cooking, coffee, and ice.",
      "RO is a point-of-use system, so it complements a whole house softener rather than replacing it. Softening protects your pipes and appliances, and RO polishes the water you actually drink.",
    ],
    includedHeading: "What a typical RO installation includes",
    included: [
      "Multi-stage under-sink system with sediment, carbon, and RO membrane",
      "Dedicated drinking-water faucet mounted on your sink or counter",
      "Connection to your cold supply and a code-compliant drain saddle",
      "Optional remineralization stage and ice-maker line",
      "Filter and membrane replacement schedule",
    ],
    signsHeading: "Why homeowners add reverse osmosis",
    signs: [
      "The water tastes heavy, flat, or mineral-forward",
      "You want the cleanest water for drinking and cooking",
      "Coffee, tea, and ice taste better with filtered water",
      "You prefer not to buy bottled water",
      "You already have a softener and want a final polish at the kitchen tap",
    ],
    faqs: [
      {
        q: "Does RO waste water?",
        a: "RO systems send some water to the drain while producing drinking water. Modern units are much more efficient than older ones, and because the system only runs when you draw from the RO tap, the total is small compared with household use.",
      },
      {
        q: "Should I install RO before or after a softener?",
        a: "After. Softened water protects the RO membrane from scale and helps it last longer, so the softener goes on the main line and RO goes under the sink.",
      },
    ],
    related: [
      "whole-house-water-filtration-salt-lake-city",
      "water-softener-installation-salt-lake-city",
      "water-quality-testing-salt-lake-city",
    ],
  },
  {
    slug: "iron-filter-installation-salt-lake-city",
    name: "Iron Filter Installation",
    label: "Iron Filters",
    h1: "Iron Filter Installation in Salt Lake City, UT",
    metaTitle: "Iron Filter Installation Salt Lake City | SLC Elite",
    metaDesc:
      "Iron filter installation in Salt Lake City, UT. Stop rust stains and metallic taste with an iron removal system. Free estimate from SLC Elite.",
    summary: "Iron removal systems that end orange stains, metallic taste, and discolored laundry.",
    intro: [
      "Iron causes some of the most frustrating water problems: orange stains in sinks and tubs, laundry that comes out yellow or rust-colored, and a metallic taste in drinking water. It appears most often on private wells and in homes with older galvanized or cast-iron pipes.",
      "Which iron filter fits depends on the form of the iron, and a test tells us. Dissolved iron and particulate iron need different treatment, and high levels can quickly overwhelm an ordinary softener, so we test before recommending anything.",
    ],
    includedHeading: "How we approach iron removal",
    included: [
      "Iron and manganese testing to identify the type and level",
      "Air-injection or oxidizing filter media for higher iron levels",
      "Backwashing filter tanks sized to your flow rate",
      "A softener sized to follow the iron filter when hardness is also present",
      "Drain and backwash routing, plus maintenance guidance",
    ],
    signsHeading: "Signs you have iron in your water",
    signs: [
      "Orange or brown staining in toilets, tubs, and sinks",
      "Rust-colored or yellowed laundry",
      "Metallic taste or a sulfur smell",
      "Water that looks clear at first, then turns cloudy or rusty",
      "A softener resin bed that fouls quickly",
    ],
    faqs: [
      {
        q: "Can a regular softener remove iron?",
        a: "Only small amounts of dissolved iron. Higher levels coat the resin and shorten its life, so a dedicated iron filter ahead of the softener is the better design.",
      },
      {
        q: "How do I know the iron is in my water rather than my pipes?",
        a: "We test at the main line and at an interior tap. If readings are clean at the main and rust appears at the tap, the source is likely aging pipes rather than the incoming water.",
      },
    ],
    related: [
      "well-water-treatment-salt-lake-city",
      "water-quality-testing-salt-lake-city",
      "water-softener-installation-salt-lake-city",
    ],
  },
  {
    slug: "water-softener-maintenance-salt-lake-city",
    name: "Water Softener Maintenance",
    label: "Maintenance",
    h1: "Water Softener Maintenance in Salt Lake City, UT",
    metaTitle: "Water Softener Maintenance Salt Lake City | SLC Elite",
    metaDesc:
      "Water softener maintenance in Salt Lake City, UT. Brine tank cleaning, resin checks, and tune-ups that keep your system working. Free estimate.",
    summary: "Routine tune-ups, brine tank cleaning, and resin checks that keep your softener performing.",
    intro: [
      "A softener is a low-maintenance appliance, but not a no-maintenance one. Salt bridges, sludge in the brine tank, and resin that slowly loses capacity all reduce performance without any obvious warning. Regular attention keeps the system efficient and extends its life.",
      "A maintenance visit from SLC Elite Water Softener covers the checks that matter: salt and brine condition, injector and valve function, resin performance, and settings that have drifted since installation.",
    ],
    includedHeading: "What a maintenance visit covers",
    included: [
      "Brine tank inspection and cleaning when sludge has built up",
      "Salt bridge and mushing check",
      "Injector, screen, and valve inspection",
      "Hardness test before and after the softener to confirm performance",
      "Resin capacity assessment and cleaner treatment when it will help",
      "Settings review for current hardness and household size",
    ],
    signsHeading: "How often your softener needs attention",
    signs: [
      "Check the salt level monthly and refill before it runs low",
      "Clean the brine tank about once a year",
      "Schedule a professional tune-up every one to two years",
      "Test for hardness after the unit any time scale returns",
      "Call sooner if your household size or water use changes",
    ],
    faqs: [
      {
        q: "What type of salt should I use?",
        a: "High-purity pellets or crystals work well in most systems and reduce the chance of mushing or salt bridges. We can recommend the right product for your specific unit.",
      },
      {
        q: "How long does resin last?",
        a: "Quality resin typically lasts well over a decade, but chlorinated city water, iron, and neglect can shorten that. A hardness test before and after the softener shows when it is time to look at the resin.",
      },
    ],
    related: [
      "water-softener-repair-salt-lake-city",
      "water-softener-installation-salt-lake-city",
      "water-quality-testing-salt-lake-city",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
