import type { Faq } from "./services";
import { locations } from "./locations";

const servedCities = locations.map((l) => l.city);

export const homeFaqs: Faq[] = [
  {
    q: "How hard is Salt Lake City water?",
    a: "Salt Lake City water is generally considered hard to very hard, commonly in the range of roughly 10 to 18 grains per gallon (GPG), and it varies by neighborhood and by the mix of mountain stream and groundwater supplying your street. For your exact number, check your utility's latest water quality report or book our free in-home test.",
  },
  {
    q: "How much does water softener installation cost in Salt Lake City?",
    a: "Most Salt Lake City homes fall somewhere between about $1,500 and $4,500 installed for a standard salt-based system, depending on capacity, brand, and plumbing complexity. Salt-free conditioners, filtration, and reverse osmosis are priced separately. We give you a fixed written estimate after a free on-site visit.",
  },
  {
    q: "What is the best water softener for SLC hard water?",
    a: "For Salt Lake Valley hardness, a properly sized salt-based, metered (demand-initiated) softener with a high-quality control valve is the most effective choice. The best model is the one sized to your household and hardness, so we test first and recommend after.",
  },
  {
    q: "Salt-based vs salt-free water softener: which is better?",
    a: "A salt-based softener truly removes calcium and magnesium, so it prevents scale and gives the soft, silky feel. A salt-free system conditions minerals to reduce scale without removing them and needs far less maintenance. Choose salt-based for the strongest results and salt-free if you want minimal upkeep and moderate scale protection.",
  },
  {
    q: "How long does water softener installation take?",
    a: "Most standard installations take about three to five hours. Homes that need new shutoff valves, drain work, or a combined filter and softener setup can take longer, and we confirm the timeline in your estimate.",
  },
  {
    q: "Do I need a water softener if I'm on city water in SLC?",
    a: "Usually yes if you want to prevent scale. City water is treated for safety, not for hardness. If you see spotting, scale on fixtures, or dry skin, or you want to protect your water heater and appliances, a softener is worth considering even on municipal water.",
  },
  {
    q: "How often does a water softener need maintenance?",
    a: "Check the salt monthly, clean the brine tank about once a year, and have the system professionally checked every one to two years. Regular care prevents salt bridges, protects the resin, and keeps performance consistent.",
  },
  {
    q: "What areas of Salt Lake City do you serve?",
    a: `We serve Salt Lake City and the surrounding valley, including ${servedCities.slice(0, -1).join(", ")}, and ${servedCities[servedCities.length - 1]}. If you are nearby but do not see your city, call and ask.`,
  },
];
