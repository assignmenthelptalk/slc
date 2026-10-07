import type { Faq } from "./services";

export interface Location {
  slug: string;
  city: string;
  /** Approximate direction and distance from downtown Salt Lake City */
  position: string;
  zips: string[];
  /** Well-known areas/landmarks inside or beside the city */
  areas: string[];
  /** City-specific paragraph: housing stock and what it means for water treatment */
  character: string;
  /** City-specific benefit angle used in the second paragraph */
  angle: string;
  faqs: Faq[];
  /** Slugs of the closest sibling location pages */
  nearby: string[];
}

export const locations: Location[] = [
  {
    slug: "water-softener-west-valley-city-ut",
    city: "West Valley City",
    position: "about 8 miles southwest of downtown Salt Lake City",
    zips: ["84119", "84120", "84128"],
    areas: ["Granger", "Hunter", "Valley Fair area", "Redwood Road corridor"],
    character:
      "West Valley City is Utah's second-largest city, with a mix of mid-century neighborhoods in Granger and Hunter and newer subdivisions on the west side. Older homes often have original water heaters and galvanized or copper plumbing where scale has been quietly accumulating for decades.",
    angle:
      "For many West Valley City households the practical goals are protecting an aging water heater, stopping scale on fixtures, and sizing a softener for larger families without overspending. We size around your real household demand.",
    faqs: [
      {
        q: "Do you install water softeners in West Valley City homes with older plumbing?",
        a: "Yes. We inspect your shutoff valves, pipe material, and drain access during the free estimate and quote any required plumbing work up front.",
      },
      {
        q: "Which West Valley City ZIP codes do you serve?",
        a: "We serve 84119, 84120, 84128, and the surrounding area. If you are nearby but unsure, call and we will confirm.",
      },
    ],
    nearby: [
      "water-softener-taylorsville-ut",
      "water-softener-murray-ut",
      "water-softener-west-jordan-ut",
    ],
  },
  {
    slug: "water-softener-sandy-ut",
    city: "Sandy",
    position: "about 15 miles south of downtown Salt Lake City",
    zips: ["84070", "84092", "84093", "84094"],
    areas: ["Historic Sandy", "Willow Creek", "the Cottonwood foothills", "Quarry Bend area"],
    character:
      "Sandy stretches from the valley floor up the east bench toward the Wasatch foothills, so homes range from established 1970s and 80s neighborhoods to larger newer builds near the mountains. Hardness and water pressure can differ across that elevation range.",
    angle:
      "Sandy homeowners often want a quiet, low-maintenance system that fits a finished garage or utility room and protects higher-end fixtures, tile, and glass. We plan the install around that.",
    faqs: [
      {
        q: "Does elevation in Sandy affect water softener sizing?",
        a: "Sizing depends on hardness, household size, and flow rate rather than elevation, but water pressure and the pipe layout often differ in foothill homes. We check these during your estimate.",
      },
      {
        q: "Can you work around a finished basement or garage in Sandy?",
        a: "Yes. We choose a location with drain and power access that keeps the unit accessible for salt refills and service.",
      },
    ],
    nearby: [
      "water-softener-draper-ut",
      "water-softener-cottonwood-heights-ut",
      "water-softener-south-jordan-ut",
    ],
  },
  {
    slug: "water-softener-west-jordan-ut",
    city: "West Jordan",
    position: "about 15 miles southwest of downtown Salt Lake City",
    zips: ["84081", "84084", "84088"],
    areas: ["Jordan Landing", "Gardner Village area", "Copper Hills", "Oquirrh foothills"],
    character:
      "West Jordan has grown quickly over the past several decades, so many homes are 1990s to 2010s builds with standard builder-grade plumbing and water heaters that are now reaching mid-life. Hard water is a common reason these systems start to lose efficiency.",
    angle:
      "In West Jordan we often help families who just moved into a newer home and want to treat water from day one, or who are noticing scale on a water heater that is only ten to fifteen years old.",
    faqs: [
      {
        q: "Is a water softener worth it in a newer West Jordan home?",
        a: "Usually yes. Hardness does not depend on the age of the house, and scale accumulates from the first day. Treating early protects the water heater and appliances for their entire life.",
      },
      {
        q: "Do you offer free estimates in West Jordan?",
        a: "Yes. Every estimate includes an on-site hardness test and a written quote with no obligation.",
      },
    ],
    nearby: [
      "water-softener-south-jordan-ut",
      "water-softener-taylorsville-ut",
      "water-softener-herriman-ut",
    ],
  },
  {
    slug: "water-softener-south-jordan-ut",
    city: "South Jordan",
    position: "about 18 miles south of downtown Salt Lake City",
    zips: ["84009", "84095"],
    areas: ["Daybreak", "Old South Jordan", "River Park area", "Jordan River Parkway"],
    character:
      "South Jordan blends long-established neighborhoods with large master-planned communities such as Daybreak, where many homes are recent builds with modern plumbing and often a pre-planned spot for a softener loop.",
    angle:
      "For newer South Jordan homes the conversation is usually about getting the system sized right for a larger household and having it installed cleanly the first time, with a clean drain, air gap, and labeled bypass.",
    faqs: [
      {
        q: "Do new construction homes in South Jordan come with a softener loop?",
        a: "Some builders plumb a softener loop or leave a capped line, which makes installation simpler. We check what is already in place during the estimate.",
      },
      {
        q: "Does an HOA affect installing a softener in South Jordan?",
        a: "Water softeners are installed indoors, so HOA rules rarely apply. If you have concerns, check your community guidelines before scheduling.",
      },
    ],
    nearby: [
      "water-softener-riverton-ut",
      "water-softener-west-jordan-ut",
      "water-softener-draper-ut",
    ],
  },
  {
    slug: "water-softener-draper-ut",
    city: "Draper",
    position: "about 22 miles south of downtown Salt Lake City",
    zips: ["84020"],
    areas: ["Corner Canyon", "SunCrest", "South Mountain", "Draper Historic District"],
    character:
      "Draper climbs from the valley floor into the Corner Canyon foothills, and many homes are larger custom or semi-custom builds with multiple bathrooms, big water heaters, and finishes that suffer visibly from spotting and scale.",
    angle:
      "In Draper we often size larger systems for bigger households, protect expensive fixtures and glass, and pair softening with whole house filtration or a kitchen reverse osmosis tap.",
    faqs: [
      {
        q: "Do large Draper homes need a bigger softener?",
        a: "Often. More bathrooms and occupants mean higher peak demand, so we size capacity and valve flow to keep up without regenerating too frequently.",
      },
      {
        q: "Can you combine softening with filtration in one visit?",
        a: "Yes. We regularly install a softener, a whole house filter, and an RO system together so everything is plumbed and tested in a single visit.",
      },
    ],
    nearby: [
      "water-softener-sandy-ut",
      "water-softener-riverton-ut",
      "water-softener-south-jordan-ut",
    ],
  },
  {
    slug: "water-softener-murray-ut",
    city: "Murray",
    position: "about 7 miles south of downtown Salt Lake City",
    zips: ["84107", "84121", "84123"],
    areas: ["Murray Park", "Fashion Place area", "Cottonwood Street corridor", "Historic Murray"],
    character:
      "Murray is one of the valley's older suburbs, with many brick bungalows and mid-century homes. Original plumbing, older water heaters, and tight basement mechanical rooms are common, so careful planning matters.",
    angle:
      "Murray installs often involve fitting a softener into limited space and routing a drain through an older basement. We plan the layout in advance to avoid surprises on install day.",
    faqs: [
      {
        q: "Can a softener fit in a small Murray basement or utility closet?",
        a: "Usually. Compact twin-tank and slimline units fit tight spaces, and we measure during the estimate to confirm.",
      },
      {
        q: "Should I replace old galvanized pipes before installing a softener?",
        a: "Not necessarily, but corroded galvanized pipes can cause pressure and rust problems regardless of treatment. We will tell you what we see and what is optional.",
      },
    ],
    nearby: [
      "water-softener-millcreek-ut",
      "water-softener-taylorsville-ut",
      "water-softener-holladay-ut",
    ],
  },
  {
    slug: "water-softener-taylorsville-ut",
    city: "Taylorsville",
    position: "about 10 miles south-southwest of downtown Salt Lake City",
    zips: ["84129", "84118"],
    areas: ["Taylorsville City Center", "Bennion", "Redwood Road corridor", "Jordan River area"],
    character:
      "Taylorsville is a largely residential city with a mix of 1970s to 1990s homes. Many have original water heaters, dishwashers, and fixtures that show wear from years of hard water exposure.",
    angle:
      "Our Taylorsville customers frequently ask about replacing an old softener that has stopped working or adding one for the first time to slow scale damage to appliances.",
    faqs: [
      {
        q: "Do you replace old softeners in Taylorsville?",
        a: "Yes. We remove the old unit, reuse suitable plumbing, and install a right-sized replacement, including disposal of the old tank.",
      },
      {
        q: "How soon can I get an estimate in Taylorsville?",
        a: "Request a free estimate online or by phone and we will schedule a visit as soon as our calendar allows.",
      },
    ],
    nearby: [
      "water-softener-murray-ut",
      "water-softener-west-valley-city-ut",
      "water-softener-west-jordan-ut",
    ],
  },
  {
    slug: "water-softener-millcreek-ut",
    city: "Millcreek",
    position: "about 5 miles southeast of downtown Salt Lake City",
    zips: ["84106", "84109", "84124"],
    areas: ["Millcreek Canyon", "Canyon Rim", "Millcreek Common area", "Wasatch Boulevard corridor"],
    character:
      "Millcreek sits close to the Wasatch Mountains and mixes established mid-century neighborhoods with updated and remodeled homes. Many owners are renovating kitchens and baths and want their water treated to protect new fixtures and finishes.",
    angle:
      "A remodel is a good moment to add a softener, because walls are open and plumbing is accessible. We coordinate with your contractor or install on a standalone visit.",
    faqs: [
      {
        q: "Should I add a softener during a Millcreek remodel?",
        a: "It is an ideal time. Access is easier, and you can protect new faucets, tile, and glass from scale from the start.",
      },
      {
        q: "Do you work with contractors in Millcreek?",
        a: "Yes. We coordinate timing and rough-in details with general contractors and plumbers.",
      },
    ],
    nearby: [
      "water-softener-murray-ut",
      "water-softener-holladay-ut",
      "water-softener-cottonwood-heights-ut",
    ],
  },
  {
    slug: "water-softener-holladay-ut",
    city: "Holladay",
    position: "about 8 miles southeast of downtown Salt Lake City",
    zips: ["84117", "84121", "84124"],
    areas: ["Holladay Village", "Cottonwood Creek area", "Old Mill area", "Wasatch Boulevard corridor"],
    character:
      "Holladay is known for tree-lined streets, larger lots, and a mix of mid-century and custom homes close to the mountains. Many homeowners have invested heavily in fixtures, tile, and landscaping and want to protect them.",
    angle:
      "In Holladay we often pair a whole house softener with filtration or reverse osmosis, and we pay attention to a clean, tidy install in finished utility spaces.",
    faqs: [
      {
        q: "Is a salt-free system a good choice for Holladay homes?",
        a: "It can be for moderate hardness and low maintenance. If you want fully softened water that feels silky and eliminates scale, a salt-based system is the stronger option. We will help you decide.",
      },
      {
        q: "Do you install in homes with finished basements or custom utility rooms?",
        a: "Yes. We protect floors, keep the work area clean, and finish plumbing neatly.",
      },
    ],
    nearby: [
      "water-softener-cottonwood-heights-ut",
      "water-softener-millcreek-ut",
      "water-softener-murray-ut",
    ],
  },
  {
    slug: "water-softener-cottonwood-heights-ut",
    city: "Cottonwood Heights",
    position: "about 13 miles southeast of downtown Salt Lake City",
    zips: ["84121", "84093"],
    areas: ["Butler area", "Bonneville Hills", "Big Cottonwood Canyon base", "Fort Union corridor"],
    character:
      "Cottonwood Heights sits at the mouth of Big and Little Cottonwood Canyons, with homes spread across the east bench. Many are 1970s through 1990s builds with steep lots and basements that host the water heater and mechanical room.",
    angle:
      "We regularly install softeners in Cottonwood Heights basements where drain access, stairway carry, and power outlets need to be planned ahead. We scope this during your estimate.",
    faqs: [
      {
        q: "Can you install in a hillside home with a lower-level mechanical room?",
        a: "Yes. We plan the route, drain, and outlet access during the estimate so installation goes smoothly.",
      },
      {
        q: "Do you serve homes near the canyon mouths?",
        a: "Yes. We serve Cottonwood Heights and surrounding neighborhoods, including those near the canyon entrances.",
      },
    ],
    nearby: [
      "water-softener-holladay-ut",
      "water-softener-sandy-ut",
      "water-softener-millcreek-ut",
    ],
  },
  {
    slug: "water-softener-herriman-ut",
    city: "Herriman",
    position: "about 20 miles southwest of downtown Salt Lake City",
    zips: ["84096"],
    areas: ["Rosecrest", "Herriman Towne Center", "Anthem", "Oquirrh foothills"],
    character:
      "Herriman is one of the valley's newest and fastest-growing cities, with mostly recent single-family builds and many young families. Homes tend to have modern plumbing, but builder-grade water heaters and appliances are still exposed to hard water from day one.",
    angle:
      "New-home owners in Herriman often call us shortly after moving in, once they notice spotting on glass and scale on fixtures. We install the softener so the whole home is protected from the start.",
    faqs: [
      {
        q: "How soon after moving in should I install a softener in Herriman?",
        a: "As early as practical. Scale starts building immediately, and early protection extends the life of the water heater and appliances.",
      },
      {
        q: "Do you handle new construction installs in Herriman?",
        a: "Yes. We work with homeowners and builders, and can set up a softener loop and install on a schedule that fits your closing or move-in.",
      },
    ],
    nearby: [
      "water-softener-riverton-ut",
      "water-softener-west-jordan-ut",
      "water-softener-south-jordan-ut",
    ],
  },
  {
    slug: "water-softener-riverton-ut",
    city: "Riverton",
    position: "about 20 miles south of downtown Salt Lake City",
    zips: ["84065"],
    areas: ["Riverton Town Center", "Jordan River Parkway", "Oquirrh foothills", "Old Riverton"],
    character:
      "Riverton combines established neighborhoods with newer developments on its western edge. Homes tend to be family-sized with two to four bathrooms, which makes proper sizing important so the softener keeps up with morning shower demand.",
    angle:
      "In Riverton we focus on right-sizing for family households and giving homeowners clear guidance on salt use, settings, and ongoing maintenance.",
    faqs: [
      {
        q: "How big should a softener be for a Riverton family home?",
        a: "Capacity depends on household size and hardness. During the free estimate we test your water and calculate the right size so you are not over- or under-buying.",
      },
      {
        q: "Do you offer maintenance plans after installation in Riverton?",
        a: "We offer maintenance visits that include brine tank cleaning, hardness testing, and performance checks. Ask us about timing when you request your estimate.",
      },
    ],
    nearby: [
      "water-softener-south-jordan-ut",
      "water-softener-herriman-ut",
      "water-softener-draper-ut",
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
