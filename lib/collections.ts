/**
 * Shared collection metadata and products by category.
 * Used by CollectionGrid (links) and collection pages (filtered products).
 */

export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  badge?: string;
  modelPath?: string;
  category: string;
  description?: string;
  material?: string;
  size?: string;
  images?: string[];
};

export const COLLECTION_SLUGS = [
  "rings",
  "necklaces",
  "earrings",
  "bracelets",
  "watches",
  "anklets",
] as const;

export type CollectionSlug = (typeof COLLECTION_SLUGS)[number];

export const COLLECTIONS: {
  id: CollectionSlug;
  name: string;
  description: string;
  image: string;
}[] = [
  {
    id: "rings",
    name: "Rings",
    description: "Sculpted bands that catch every glint of light.",
    image: "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Fluid chains and pendants framing the collarbone.",
    image: "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  },
  {
    id: "earrings",
    name: "Earrings",
    description: "Soft silhouettes, bold sparkle, effortless lift.",
    image: "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  },
  {
    id: "bracelets",
    name: "Bracelets",
    description: "Stackable cuffs and bangles in warm metals.",
    image: "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  },
  {
    id: "watches",
    name: "Watches",
    description: "Polished timepieces with soft, luminous dials.",
    image: "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  },
  {
    id: "anklets",
    name: "Anklets",
    description: "Delicate chains that trace the ankle with light.",
    image: "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  },
];

const IMG =
  "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg";

/** All products with category. Filter by category for collection pages. */
export const ALL_PRODUCTS: Product[] = [
  // Rings
  {
    id: "aurora-band",
    name: "Aurora Halo Band",
    price: "From ₹2,450",
    image: IMG,
    badge: "New",
    category: "rings",
    description: "A sculpted band that catches every glint of light. Hand-finished in our studio for a luminous, spa-like calm.",
    material: "18K gold, conflict-free diamonds",
    size: "Sizes 5–9. Resizable within 30 days.",
  },
  {
    id: "dawn-stack",
    name: "Dawn Stack Set",
    price: "From ₹2,890",
    image: IMG,
    category: "rings",
    description: "Designed to stack and layer. Minimal silhouettes that work alone or together.",
    material: "14K gold, recycled gold option",
    size: "Sizes 5–9. Set of 3 bands.",
  },
  {
    id: "solitaire-classic",
    name: "Solitaire Classic",
    price: "From ₹3,200",
    image: IMG,
    category: "rings",
    description: "Timeless solitaire setting. Ethically sourced stone, expert craftsmanship.",
    material: "Platinum or 18K gold, lab-grown or natural diamond",
    size: "Sizes 4–10. Stone carat varies.",
  },
  {
    id: "eternity-band",
    name: "Eternity Band",
    price: "From ₹1,650",
    image: IMG,
    category: "rings",
    description: "Full circle of light. Perfect for pairing or wearing alone.",
    material: "18K gold, conflict-free diamonds",
    size: "Sizes 5–9.",
  },
  // Necklaces
  {
    id: "cascade-necklace",
    name: "Cascade Light Necklace",
    price: "From ₹3,120",
    image: IMG,
    badge: "Editor's Pick",
    category: "necklaces",
    description: "Fluid chains and pendants framing the collarbone. A modern take on evening wear.",
    material: "18K gold, sterling silver option",
    size: "Chain 16–18”. Pendant 12mm.",
  },
  {
    id: "veil-pendant",
    name: "Veil Pendant",
    price: "From ₹1,950",
    image: IMG,
    category: "necklaces",
    description: "Soft, luminous pendant on a delicate chain. Layered or solo.",
    material: "14K gold, cultured pearl or diamond",
    size: "Chain 16”. Pendant 10mm.",
  },
  {
    id: "midnight-choker",
    name: "Midnight Silk Choker",
    price: "From ₹2,150",
    image: IMG,
    badge: "Bestseller",
    category: "necklaces",
    description: "Satin-finished choker for a cinematic evening look.",
    material: "18K gold, silk cord option",
    size: "One size. 14” length.",
  },
  {
    id: "lunar-pendant",
    name: "Lunar Glow Pendant",
    price: "From ₹2,020",
    image: IMG,
    category: "necklaces",
    description: "Moon-inspired pendant with a soft glow. Ethically sourced materials.",
    material: "14K gold, lab-grown diamond",
    size: "Chain 18”. Pendant 14mm.",
  },
  // Earrings
  {
    id: "serenity-hoops",
    name: "Serenity Spa Hoops",
    price: "From ₹1,380",
    image: IMG,
    category: "earrings",
    description: "Soft silhouettes, bold sparkle. Lightweight for all-day wear.",
    material: "14K gold, hypoallergenic",
    size: "Small 20mm / Medium 25mm.",
  },
  {
    id: "halo-studs",
    name: "Halo Diamond Studs",
    price: "From ₹1,120",
    image: IMG,
    category: "earrings",
    description: "Classic halo setting with a modern finish. Everyday elegance.",
    material: "14K gold, conflict-free diamonds",
    size: "0.25 ct – 1 ct total weight.",
  },
  {
    id: "drop-earrings",
    name: "Drop Pearl Earrings",
    price: "From ₹980",
    image: IMG,
    category: "earrings",
    description: "Delicate drops with cultured pearls. Minimal and refined.",
    material: "14K gold, cultured pearls",
    size: "Drop length 25mm.",
  },
  {
    id: "statement-hoops",
    name: "Statement Hoops",
    price: "From ₹1,450",
    image: IMG,
    category: "earrings",
    description: "Larger hoops for a bold yet effortless look.",
    material: "14K gold, lightweight construction",
    size: "30mm diameter.",
  },
  // Bracelets
  {
    id: "lumen-cuff",
    name: "Lumen Cuff Bracelet",
    price: "From ₹1,980",
    image: IMG,
    category: "bracelets",
    description: "Stackable cuff with a soft, luminous finish. Wears alone or layered.",
    material: "18K gold, rhodium option",
    size: "S/M and M/L. Adjustable.",
  },
  {
    id: "cascade-bracelet",
    name: "Cascade Chain Bracelet",
    price: "From ₹1,780",
    image: IMG,
    category: "bracelets",
    description: "Fluid chain bracelet. Secure clasp, comfortable for all-day wear.",
    material: "14K gold",
    size: "7” length. Extender included.",
  },
  {
    id: "tennis-bracelet",
    name: "Tennis Bracelet",
    price: "From ₹2,400",
    image: IMG,
    category: "bracelets",
    description: "Classic line of diamonds. Expertly set for maximum sparkle.",
    material: "14K–18K gold, conflict-free diamonds",
    size: "7”–8”. Sizing available.",
  },
  {
    id: "bangle-set",
    name: "Bangle Set",
    price: "From ₹1,290",
    image: IMG,
    category: "bracelets",
    description: "Set of three thin bangles. Stack or wear one.",
    material: "14K gold",
    size: "One size. Fits wrist 6–7.5”.",
  },
  // Watches
  {
    id: "luminous-dial",
    name: "Luminous Dial Watch",
    price: "From ₹1,890",
    image: IMG,
    category: "watches",
    description: "Polished timepiece with a soft, luminous dial. Swiss movement.",
    material: "Stainless steel, sapphire crystal",
    size: "Case 36mm. Leather or metal strap.",
  },
  {
    id: "minimalist-watch",
    name: "Minimalist Dress Watch",
    price: "From ₹2,100",
    image: IMG,
    category: "watches",
    description: "Clean dial, slim case. For everyday and evening.",
    material: "Stainless steel, Italian leather strap",
    size: "Case 34mm. Unisex.",
  },
  {
    id: "sport-luxury",
    name: "Sport Luxury Watch",
    price: "From ₹2,550",
    image: IMG,
    category: "watches",
    description: "Sporty yet refined. Water-resistant, durable, elegant.",
    material: "Stainless steel, ceramic bezel",
    size: "Case 40mm. 100m water resistance.",
  },
  // Anklets
  {
    id: "delicate-anklet",
    name: "Delicate Anklet",
    price: "From ₹420",
    image: IMG,
    category: "anklets",
    description: "Delicate chain that traces the ankle with light. Adjustable length.",
    material: "14K gold filled, sterling silver",
    size: "9”–10”. Adjustable.",
  },
  {
    id: "chain-anklet",
    name: "Chain Anklet",
    price: "From ₹380",
    image: IMG,
    category: "anklets",
    description: "Simple chain for a subtle, luminous look.",
    material: "Sterling silver, 14K gold filled",
    size: "9.5” length.",
  },
  {
    id: "bead-anklet",
    name: "Bead Anklet",
    price: "From ₹350",
    image: IMG,
    category: "anklets",
    description: "Lightweight beads on a soft chain. Casual or dressed up.",
    material: "Sterling silver, glass beads",
    size: "One size. 9”.",
  },
];

export function getProductsByCategory(slug: CollectionSlug): Product[] {
  return ALL_PRODUCTS.filter((p) => p.category === slug);
}

export function getCollectionBySlug(slug: string) {
  return COLLECTIONS.find((c) => c.id === slug) ?? null;
}

export function getProductById(id: string): Product | null {
  return ALL_PRODUCTS.find((p) => p.id === id) ?? null;
}

export function getRelatedProducts(
  productId: string,
  category: string,
  limit = 4
): Product[] {
  return ALL_PRODUCTS.filter(
    (p) => p.category === category && p.id !== productId
  ).slice(0, limit);
}
