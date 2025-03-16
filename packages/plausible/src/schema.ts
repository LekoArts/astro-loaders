import { z } from 'astro/zod'

export const PlausibleResponseSchema = z.object({
  results: z.array(z.object({
    metrics: z.array(z.union([z.number(), z.null(), z.object({
      short: z.string(),
      value: z.number(),
      long: z.string(),
      currency: z.string(),
    })])),
    dimensions: z.array(z.string()),
  })),
  meta: z.object({
    imports_included: z.boolean().optional(),
    imports_skip_reason: z.string().optional(),
    imports_warning: z.string().optional(),
    metric_warnings: z.object({
      total_revenue: z.object({
        code: z.string(),
        warning: z.string(),
      }),
    }).optional(),
    time_labels: z.array(z.string()).optional(),
    total_rows: z.number().optional(),
  }),
})
