const puzzles = [
  {
    id: 1,
    equations: [
      { left: ["🟥", "🟦"], result: 10 },
      { left: ["🟦", "🟨"], result: 14 },
      { left: ["🟥", "🟨"], result: null },
    ],
    solution: { "🟥": 6, "🟦": 4, "🟨": 10 },
  },
  {
    id: 2,
    equations: [
      { left: ["🍎", "🍌", "🍎"], result: 20 },
      { left: ["🍌", "🍌"], result: 16 },
      { left: ["🍎", "🍇"], result: null },
    ],
    solution: { "🍎": 6, "🍌": 8, "🍇": 7 },
  },
  {
    id: 3,
    equations: [
      { left: ["🐶", "🐶", "🐶"], result: 9 },
      { left: ["🐶", "🐱"], result: 5 },
      { left: ["🐱", "🐶"], result: null },
    ],
    solution: { "🐶": 3, "🐱": 2 },
  },
  {
    id: 4,
    equations: [
      { left: ["🍕", "🍕"], result: 10 },
      { left: ["🍕", "🍔"], result: 13 },
      { left: ["🍔", "🍔"], result: null },
    ],
    solution: { "🍕": 5, "🍔": 8 },
  },
  {
    id: 5,
    equations: [
      { left: ["🌟", "🌙"], result: 15 },
      { left: ["🌙", "☀️"], result: 18 },
      { left: ["🌟", "☀️"], result: null },
    ],
    solution: { "🌟": 7, "🌙": 8, "☀️": 10 },
  },
  {
    id: 6,
    equations: [
      { left: ["🍉", "🍉"], result: 12 },
      { left: ["🍉", "🍓"], result: 17 },
      { left: ["🍓", "🍓"], result: null },
    ],
    solution: { "🍉": 6, "🍓": 11 },
  },
  {
    id: 7,
    equations: [
      { left: ["🦄", "🦄", "🦄"], result: 15 },
      { left: ["🦄", "🌈"], result: 11 },
      { left: ["🌈", "🌈"], result: null },
    ],
    solution: { "🦄": 5, "🌈": 6 },
  },
  {
    id: 8,
    equations: [
      { left: ["⚽", "🏀"], result: 18 },
      { left: ["🏀", "🏈"], result: 22 },
      { left: ["⚽", "🏈"], result: null },
    ],
    solution: { "⚽": 10, "🏀": 8, "🏈": 14 },
  },
  {
    id: 9,
    equations: [
      { left: ["🍪", "🍪"], result: 10 },
      { left: ["🍪", "🍩"], result: 14 },
      { left: ["🍩", "🍩"], result: null },
    ],
    solution: { "🍪": 5, "🍩": 9 },
  },
  {
    id: 10,
    equations: [
      { left: ["🐸", "🐸"], result: 8 },
      { left: ["🐸", "🐵"], result: 11 },
      { left: ["🐵", "🐵"], result: null },
    ],
    solution: { "🐸": 4, "🐵": 7 },
  },
  {
    id: 11,
    equations: [
      { left: ["🍋", "🍋"], result: 6 },
      { left: ["🍋", "🍊"], result: 10 },
      { left: ["🍊", "🍊"], result: null },
    ],
    solution: { "🍋": 3, "🍊": 7 },
  },
  {
    id: 12,
    equations: [
      { left: ["⭐", "⭐", "⭐"], result: 12 },
      { left: ["⭐", "🌙"], result: 8 },
      { left: ["🌙", "🌙"], result: null },
    ],
    solution: { "⭐": 4, "🌙": 4 },
  },
  {
    id: 13,
    equations: [
      { left: ["🥕", "🥕"], result: 10 },
      { left: ["🥕", "🥦"], result: 14 },
      { left: ["🥦", "🥦"], result: null },
    ],
    solution: { "🥕": 5, "🥦": 9 },
  },
  {
    id: 14,
    equations: [
      { left: ["🎈", "🎈", "🎈"], result: 9 },
      { left: ["🎈", "🎁"], result: 7 },
      { left: ["🎁", "🎁"], result: null },
    ],
    solution: { "🎈": 3, "🎁": 4 },
  },
  {
    id: 15,
    equations: [
      { left: ["🐟", "🐟"], result: 6 },
      { left: ["🐟", "🦀"], result: 10 },
      { left: ["🦀", "🦀"], result: null },
    ],
    solution: { "🐟": 3, "🦀": 7 },
  },
  {
    id: 16,
    equations: [
      { left: ["🍔", "🍔"], result: 14 },
      { left: ["🍔", "🍟"], result: 20 },
      { left: ["🍟", "🍟"], result: null },
    ],
    solution: { "🍔": 7, "🍟": 13 },
  },
  {
    id: 17,
    equations: [
      { left: ["🐶", "🐱"], result: 9 },
      { left: ["🐱", "🐭"], result: 11 },
      { left: ["🐶", "🐭"], result: null },
    ],
    solution: { "🐶": 5, "🐱": 4, "🐭": 7 },
  },
  {
    id: 18,
    equations: [
      { left: ["🍩", "🍩"], result: 8 },
      { left: ["🍩", "🍪"], result: 13 },
      { left: ["🍪", "🍪"], result: null },
    ],
    solution: { "🍩": 4, "🍪": 9 },
  },
  {
    id: 19,
    equations: [
      { left: ["⚡", "⚡"], result: 14 },
      { left: ["⚡", "🔥"], result: 20 },
      { left: ["🔥", "🔥"], result: null },
    ],
    solution: { "⚡": 7, "🔥": 13 },
  },
  {
    id: 20,
    equations: [
      { left: ["🌹", "🌹"], result: 10 },
      { left: ["🌹", "🌻"], result: 16 },
      { left: ["🌻", "🌻"], result: null },
    ],
    solution: { "🌹": 5, "🌻": 11 },
  },
];
