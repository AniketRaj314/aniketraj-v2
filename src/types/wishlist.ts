import { z } from "zod";

export const WishlistItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  listImage: z.string(),
  modalImage: z.string(),
  category: z.enum([
    "Tech",
    "Books",
    "Design",
    "Collectibles",
    "Experiences",
    "Home Decor"
  ]),
  notes: z.string(),
  link: z.string().url(),
  price: z.number().optional(),
  currency: z.enum(["USD", "INR"]).optional(),
  status: z.enum(["dreaming", "gifted", "owned"]).default("dreaming"),
  priority: z.number().default(1),
  createdAt: z.string()
});

export type WishlistItem = z.infer<typeof WishlistItemSchema>;
