export const responses = [
  {
    results: [{ metrics: [944, 1797], dimensions: [] }],
    meta: {},
  },
  {
    results: [{ metrics: [1140], dimensions: [] }],
    meta: {},
  },
  {
    results: [
      { metrics: [99, 98, 94], dimensions: ['Estonia', 'Tallinn'] },
      { metrics: [98, 82, 97], dimensions: ['Brazil', 'São Paulo'] },
      { metrics: [97, 77, 98], dimensions: ['Germany', 'Berlin'] },
      { metrics: [94, 86, 93], dimensions: ['Italy', 'Rome'] },
      { metrics: [89, 77, 96], dimensions: ['United States', 'San Francisco'] },
      { metrics: [82, 78, 92], dimensions: ['Poland', 'Warsaw'] },
    ],
    meta: {},
  },
  {
    results: [
      { metrics: [320, 382, 297], dimensions: ['(not set)', 'duckduckgo'] },
      { metrics: [302, 363, 296], dimensions: ['social', 'twitter'] },
      { metrics: [293, 342, 280], dimensions: ['social', 'facebook'] },
      { metrics: [288, 345, 292], dimensions: ['(not set)', 'google'] },
      { metrics: [169, 185, 147], dimensions: ['(not set)', '(not set)'] },
      { metrics: [159, 180, 153], dimensions: ['email', '(not set)'] },
    ],
    meta: {},
  },
  {
    results: [{ metrics: [10], dimensions: [] }],
    meta: {},
  },
  {
    results: [{ metrics: [10], dimensions: [] }],
    meta: {},
  },
  {
    results: [{ metrics: [0, 0], dimensions: [] }],
    meta: {},
  },
  {
    results: [
      { metrics: [129, 144], dimensions: ['2024-09-04'] },
      { metrics: [65, 68], dimensions: ['2024-09-05'] },
      { metrics: [72, 78], dimensions: ['2024-09-06'] },
      { metrics: [94, 98], dimensions: ['2024-09-07'] },
      { metrics: [44, 49], dimensions: ['2024-09-08'] },
      { metrics: [14, 14], dimensions: ['2024-09-09'] },
      { metrics: [12, 12], dimensions: ['2024-09-10'] },
    ],
    meta: {},
  },
  {
    results: [
      { metrics: [2], dimensions: ['2024-09-10 01:00:00'] },
      { metrics: [4], dimensions: ['2024-09-10 02:00:00'] },
      { metrics: [3], dimensions: ['2024-09-10 08:00:00'] },
      { metrics: [1], dimensions: ['2024-09-10 12:00:00'] },
      { metrics: [1], dimensions: ['2024-09-10 13:00:00'] },
      { metrics: [1], dimensions: ['2024-09-10 23:00:00'] },
    ],
    meta: {
      time_labels: [
        '2024-09-10 00:00:00',
        '2024-09-10 01:00:00',
        '2024-09-10 02:00:00',
        '2024-09-10 03:00:00',
        '2024-09-10 04:00:00',
        '2024-09-10 05:00:00',
        '2024-09-10 06:00:00',
        '2024-09-10 07:00:00',
        '2024-09-10 08:00:00',
        '2024-09-10 09:00:00',
        '2024-09-10 10:00:00',
        '2024-09-10 11:00:00',
        '2024-09-10 12:00:00',
        '2024-09-10 13:00:00',
        '2024-09-10 14:00:00',
        '2024-09-10 15:00:00',
        '2024-09-10 16:00:00',
        '2024-09-10 17:00:00',
        '2024-09-10 18:00:00',
        '2024-09-10 19:00:00',
        '2024-09-10 20:00:00',
        '2024-09-10 21:00:00',
        '2024-09-10 22:00:00',
        '2024-09-10 23:00:00',
      ],
    },
  },
  {
    results: [
      { metrics: [162], dimensions: ['2024-09-04', 'true'] },
      { metrics: [126], dimensions: ['2024-09-04', 'false'] },
      { metrics: [74], dimensions: ['2024-09-05', 'true'] },
      { metrics: [86], dimensions: ['2024-09-05', 'false'] },
      { metrics: [116], dimensions: ['2024-09-06', 'true'] },
      { metrics: [97], dimensions: ['2024-09-06', 'false'] },
      { metrics: [176], dimensions: ['2024-09-07', 'true'] },
      { metrics: [191], dimensions: ['2024-09-07', 'false'] },
      { metrics: [161], dimensions: ['2024-09-08', 'true'] },
      { metrics: [172], dimensions: ['2024-09-08', 'false'] },
      { metrics: [38], dimensions: ['2024-09-09', 'true'] },
      { metrics: [50], dimensions: ['2024-09-09', 'false'] },
      { metrics: [129], dimensions: ['2024-09-10', 'true'] },
      { metrics: [125], dimensions: ['2024-09-10', 'false'] },
    ],
    meta: {},
  },
  {
    results: [
      { metrics: [325, 397, 317], dimensions: ['(not set)', 'duckduckgo'] },
      { metrics: [311, 369, 295], dimensions: ['(not set)', 'google'] },
      { metrics: [296, 357, 292], dimensions: ['social', 'twitter'] },
    ],
    meta: { total_rows: 6 },
  },
  {
    results: [
      { metrics: [91349], dimensions: ['Direct / None'] },
      { metrics: [90901], dimensions: ['Twitter'] },
      { metrics: [90265], dimensions: ['Facebook'] },
      { metrics: [89511], dimensions: ['Google'] },
      { metrics: [89243], dimensions: ['DuckDuckGo'] },
    ],
    meta: { imports_included: true },
  },
  {
    results: [
      { metrics: [1192], dimensions: ['Google'] },
      { metrics: [1191], dimensions: ['Direct / None'] },
      { metrics: [1189], dimensions: ['DuckDuckGo'] },
      { metrics: [1186], dimensions: ['Facebook'] },
      { metrics: [1185], dimensions: ['Twitter'] },
    ],
    meta: {
      imports_included: false,
      imports_skip_reason: 'unsupported_query',
      imports_warning: 'Imported stats are not included in the results because query parameters are not supported. For more information, see: https://plausible.io/docs/stats-api#filtering-imported-stats',
    },
  },
  {
    results: [
      {
        dimensions: ['North America Purchases'],
        metrics: [
          {
            short: '$96.3M',
            value: 96336315,
            long: '$96,336,315.00',
            currency: 'USD',
          },
        ],
      },
      {
        dimensions: ['Visit /'],
        metrics: [null],
      },
    ],
    meta: {},
  },
  {
    results: [
      { metrics: [null], dimensions: ['Visit /'] },
    ],
    meta: {
      metric_warnings: {
        total_revenue: {
          code: 'no_single_revenue_currency',
          warning: 'Revenue metrics are null as there are multiple currencies for the selected event:goals.',
        },
      },
    },
  },
] as const
