import { z, defineCollection } from "astro:content"

const recipesCollection = defineCollection({
  type: "content",
  schema: z.object({
    mainImage: z.string(),
    title: z.string(),
    description: z.string(),
    // preparationTime: z.object({
    //   total: z.string(),
    //   preparation: z.string(),
    //   cooking: z.string(),
    // }),
    // ingredients: z.array(z.string()),
    // instructions: z.array(z.object({ title: z.string(), process: z.string() })),
    // nutrition: z.array(z.object({ key: z.string(), value: z.string() })),
  }),
})

export const collections = {
  recipes: recipesCollection,
}
