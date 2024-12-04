import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { filterBySurface } from '@src/backend.js'

export const server = {
  getGreeting: defineAction({
    input: z.object({
      minSurface: z.number(),
    }),
    handler: async (input) => {
      return await filterBySurface(input.minSurface);
    }
  })
}