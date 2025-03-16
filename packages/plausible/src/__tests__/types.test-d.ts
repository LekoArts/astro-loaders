import type { PlausibleQuery } from '../types.js'
import { describe, expectTypeOf, it } from 'vitest'

const site_id = 'example.com'

describe('plausibleQuery', () => {
  it('simple aggregate query', () => {
    const query: PlausibleQuery = {
      metrics: ['visitors', 'events'],
      date_range: '7d',
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('custom date range', () => {
    const query: PlausibleQuery = {
      metrics: ['visitors'],
      date_range: ['2024-08-01', '2024-08-15'],
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('country and city analysis', () => {
    const query: PlausibleQuery = {
      metrics: ['visitors', 'pageviews', 'bounce_rate'],
      date_range: '7d',
      filters: [
        ['is_not', 'visit:country_name', ['']],
      ],
      dimensions: ['visit:country_name', 'visit:city_name'],
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('uTM medium, source analysis', () => {
    const query: PlausibleQuery = {
      metrics: ['visitors', 'events', 'pageviews'],
      date_range: '7d',
      dimensions: ['visit:utm_medium', 'visit:utm_source'],
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('filtering by page and country', () => {
    const query: PlausibleQuery = {
      metrics: ['visitors'],
      date_range: '7d',
      filters: [
        ['contains', 'event:page', ['/docs', '/pricing']],
        ['or', [
          ['not', ['is', 'visit:utm_campaign', ['Referral']]],
          ['is', 'visit:country_name', ['Estonia', 'United States of America']],
        ]],
      ],
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('case insensitive filtering', () => {
    const query: PlausibleQuery = {
      metrics: ['visitors'],
      date_range: '7d',
      filters: [
        ['contains', 'event:page', ['blog'], { case_sensitive: false }],
      ],
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('filtering by segment', () => {
    const query: PlausibleQuery = {
      metrics: ['visitors', 'events'],
      filters: [['is', 'segment', [2]]],
      date_range: '7d',
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('timeseries query', () => {
    const query: PlausibleQuery = {
      metrics: ['visitors', 'events'],
      date_range: '7d',
      filters: [
        ['is', 'visit:os', ['GNU/Linux', 'Mac']],
      ],
      dimensions: ['time:day'],
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('timeseries query hourly, with labels', () => {
    const query: PlausibleQuery = {
      metrics: ['visitors'],
      date_range: 'day',
      dimensions: ['time:hour'],
      include: {
        time_labels: true,
      },
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('using custom properties', () => {
    const query: PlausibleQuery = {
      metrics: ['visitors'],
      date_range: '7d',
      dimensions: ['time:day', 'event:props:is_customer'],
      order_by: [['time:day', 'asc'], ['event:props:is_customer', 'desc']],
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('pagination', () => {
    const query: PlausibleQuery = {
      metrics: ['visitors', 'events', 'pageviews'],
      date_range: '7d',
      dimensions: ['visit:utm_medium', 'visit:utm_source'],
      include: { total_rows: true },
      pagination: { limit: 3, offset: 1 },
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('including imported data', () => {
    const query: PlausibleQuery = {
      metrics: ['visitors'],
      date_range: 'all',
      dimensions: ['visit:source'],
      include: {
        imports: true,
      },
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('including imported data failed', () => {
    const query: PlausibleQuery = {
      metrics: ['visitors'],
      date_range: 'all',
      dimensions: ['visit:source'],
      filters: [['is', 'visit:country_name', ['Estonia']]],
      include: {
        imports: true,
      },
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('revenue metrics', () => {
    const query: PlausibleQuery = {
      metrics: ['total_revenue'],
      date_range: 'all',
      dimensions: ['event:goal'],
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
  it('revenue metrics could not be calculated', () => {
    const query: PlausibleQuery = {
      metrics: ['total_revenue'],
      date_range: 'all',
      filters: [
        ['is', 'event:goal', ['PurchaseUSD', 'PurchaseEUR']],
      ],
      site_id,
    }
    expectTypeOf(query).toEqualTypeOf<PlausibleQuery>()
  })
})
