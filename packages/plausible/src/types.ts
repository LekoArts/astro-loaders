export interface PlausibleLoaderOptions {
  /**
   * Your Plausible API key. Go to your Plausible Analytics account, navigating to "Account Settings" and click on the section called "API Keys".
   */
  api_key?: string
  /**
   * If you self-host Plausible, you can set the URL to your instance here.
   * @default 'https://plausible.io'
   * @example 'https://plausible.example.com'
   */
  api_url?: string
  /**
   * Your query against the [Stats API](https://plausible.io/docs/stats-api) of Plausible.
   */
  query: PlausibleQuery
}

type TYear = `${number}${number}${number}${number}`
type TMonth = `${number}${number}`
type TDay = `${number}${number}`
type THours = `${number}${number}`
type TMinutes = `${number}${number}`
type TSeconds = `${number}${number}`

/**
 * Represent a string like `2024-01-01`
 */
type TDateISODate = `${TYear}-${TMonth}-${TDay}`

/**
 * Represent a string like `15:59:59`
 */
type TDateISOTime = `${THours}:${TMinutes}:${TSeconds}`

/**
 * Represent a string like `2024-01-01T15:59:59+02:00` (format: ISO 8601).
 */
type TDateISO = `${TDateISODate}T${TDateISOTime}+${THours}:${TMinutes}`

type DateRangeUnit = 'day' | '7d' | '30d' | 'month' | '6mo' | '12mo' | 'year' | 'all'

type Metric = 'visitors' | 'visits' | 'pageviews' | 'views_per_visit' | 'bounce_rate' | 'visit_duration' | 'events' | 'scroll_depth' | 'percentage' | 'conversion_rate' | 'group_conversion_rate' | 'average_revenue' | 'total_revenue'

type Events = 'goal' | 'page' | 'hostname'
type EventDimensions = `event:${Events}`

type Visits = 'entry_page' | 'exit_page' | 'source' | 'referrer' | 'channel' | 'utm_medium' | 'utm_source' | 'utm_campaign' | 'utm_content' | 'utm_term' | 'device' | 'browser' | 'browser_version' | 'os' | 'os_version' | 'country' | 'region' | 'city' | 'country_name' | 'region_name' | 'city_name'
type VisitDimensions = `visit:${Visits}`

type Time = 'hour' | 'day' | 'week' | 'month'
type TimeDimensions = 'time' | `time:${Time}`

type CustomProperties = `event:props:${string}`

type Dimension = EventDimensions | VisitDimensions | TimeDimensions | CustomProperties

type FilterOperator = 'is' | 'is_not' | 'contains' | 'contains_not' | 'matches' | 'matches_not'

interface FilterModifiers {
  case_sensitive?: boolean
}

type SimpleFilter = [
  operator: FilterOperator,
  dimension: EventDimensions | VisitDimensions,
  clauses: string[],
  modifiers?: FilterModifiers,
]

type SegmentFilter = [
  operator: 'is',
  dimension: 'segment',
  clauses: Array<string | number>,
]

type LogicalAndOrFilter = [
  operator: 'and' | 'or',
  filters: Array<Filter>,
]

type LogicalNotFilter = [
  operator: 'not',
  filter: Filter,
]

type Filter = SimpleFilter | SegmentFilter | LogicalAndOrFilter | LogicalNotFilter

interface Revenue {
  short: string
  value: number
  long: string
  currency: string
}

export interface PlausibleQuery {
  /**
   * Domain of your site on Plausible to be queried.
   * @example 'example.com'
   */
  site_id: string
  /**
   * Date range to be queried.
   */
  date_range: DateRangeUnit | [TDateISO, TDateISO] | [TDateISODate, TDateISODate]
  /**
   * Metrics represent values to be calculated with the query.
   */
  metrics: Array<Metric>
  /**
   * List of dimensions to group by.
   *
   * Dimensions are attributes of your dataset. Using them in queries enables analyzing and compare multiple groups against each other. Think of them as `GROUP BY` in SQL.
   * @default []
   */
  dimensions?: Array<Dimension>
  /**
   * Filters allow limiting the data analyzed in a query.
   * Each simple filter is an array with three or four elements [operator, dimension, clauses] or [operator, dimension, clauses, modifiers].
   *
   * @default []
   */
  filters?: Array<Filter>
  /**
   * Allows for custom ordering of query results.
   *
   * List of tuples `[dimension_or_metric, direction]`, where:
   * - `dimension_or_metric` needs to be listed in query `metrics` or `dimensions` respectively.
   * - `direction` can be one of `"asc"` or `"desc"`
   *
   * When not specified, the default ordering is:
   * 1. If a time dimensions is present, `[time_dimension, "asc"]`
   * 2. By the first metric specified, descending.
   */
  order_by?: Array<[Metric | Dimension, 'asc' | 'desc']>
  /**
   * Additional options for the query as to what data to include.
   */
  include?: {
    /**
     * If true, tries to include imported data in the result.
     *
     * If set, `meta.imports_included` field will be set as a boolean. If the applied combination of filters and dimensions is not supported for imported stats, the results are still returned based only on native stats. Additionally, `meta.imports_skip_reason` and `meta.imports_warning` response fields will contain more information on why including imported data failed.
     * @default false
     */
    imports?: boolean
    /**
     * Requires a `time` dimension being set. If true, sets `meta.time_labels` in response containing all time labels valid for `date_range`.
     * @default false
     */
    time_labels?: boolean
    /**
     * Should be used for pagination. If true, sets `meta.total_rows` in response containing the total number of rows for this query.
     * @default false
     */
    total_rows?: boolean
  }
  /**
   * Pagination options for the query.
   * @default { limit: 1000, offset: 0 }
   */
  pagination?: {
    limit: number
    offset: number
  }
}

export interface PlausibleResponse {
  /**
   * Results is an ordered list query results.
   */
  results: Array<{
    /**
     * List of metric values, in the same order as query metrics
     */
    metrics: Array<number | Revenue | null>
    /**
     * Values for each dimension listed in query. In the same order as query dimensions, empty if no dimensions requested.
     */
    dimensions: Array<string>
  }>
  meta: {
    /**
     * Whether imported data was included. Only set if include.imports was set.
     */
    imports_included?: boolean
    /**
     * Information about why including imported data failed
     */
    imports_skip_reason?: string
    imports_warning?: string
    /**
     * Warnings about specific metrics. Currently only set if a revenue metric was used and was unable to be calculated.
     */
    metric_warnings?: {
      total_revenue: {
        code: string
        warning: string
      }
    }
    /**
     * Only set if include.time_labels was set
     */
    time_labels?: Array<string>
    /**
     * Only set if include.total_rows was set
     */
    total_rows?: number
  }
  query: PlausibleQuery
}
