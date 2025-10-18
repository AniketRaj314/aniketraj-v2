import data from "../../content/wishlist.json";
import { z } from "zod";
import { WishlistItemSchema, type WishlistItem } from "@/types/wishlist";

export function getWishlist(): WishlistItem[] {
  const parsed = z.array(WishlistItemSchema).safeParse(data);
  if (!parsed.success) {
    console.error(parsed.error.flatten());
    return [];
  }
  return parsed.data.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function filterByCategory(items: WishlistItem[], category?: string) {
  if (!category || category === "All") return items;
  return items.filter((i) => i.category === category);
}

export function filterByStatus(items: WishlistItem[], status?: string) {
  if (!status || status === "All") return items;
  return items.filter((i) => i.status === status);
}

export function sortItems(items: WishlistItem[], sort: string) {
  switch (sort) {
    case "Most Wanted":
      return [...items].sort((a, b) => a.priority - b.priority);
    case "Price Low → High":
      return [...items].filter((i) => i.price).sort((a, b) => (a.price! - b.price!));
    case "Price High → Low":
      return [...items].filter((i) => i.price).sort((a, b) => (b.price! - a.price!));
    default:
      return [...items].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }
}
