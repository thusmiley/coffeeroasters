export const planData = [
  {
    id: "preference",
    question: "How do you drink your coffee?",
    options: [
      {
        id: "capsule",
        type: "Capsule",
        desc: "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: "filter",
        type: "Filter",
        desc: "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: "espresso",
        type: "Espresso",
        desc: "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: "bean",
    question: "What type of coffee?",
    options: [
      {
        id: "singleorigin",
        type: "Single Origin",
        desc: "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: "decaf",
        type: "Decaf",
        desc: "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: "blended",
        type: "Blended",
        desc: "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: "quantity",
    question: "How much would you like?",
    options: [
      {
        id: "250g",
        type: "250g",
        desc: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        id: "500g",
        type: "500g",
        desc: "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        id: "1000g",
        type: "1000g",
        desc: "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: "grind",
    question: "Want us to grind them?",
    options: [
      {
        id: "wholebean",
        type: "Wholebean",
        desc: "Best choice if you cherish the full sensory experience",
      },
      {
        id: "grindfilter",
        type: "Filter",
        desc: "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: "cafetiere",
        type: "Cafetiére",
        desc: "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: "delivery",
    question: "How often should we deliver?",
    options: [
      {
        id: "everyweek",
        type: "Every week",
        desc: "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        id: "every2week",
        type: "Every 2 weeks",
        desc: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        id: "everymonth",
        type: "Every month",
        desc: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  },
];
