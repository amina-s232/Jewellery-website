import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollectionPageContent from "@/components/CollectionPageContent";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";
import {
  getCollectionBySlug,
  getProductsByCategory,
  COLLECTION_SLUGS,
  type CollectionSlug,
} from "@/lib/collections";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return COLLECTION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Collection | Aurora Jewelers" };
  return {
    title: `${collection.name} | Aurora Jewelers`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;

  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const products = getProductsByCategory(slug as CollectionSlug);

  return (
    <>
      <Navbar />
      <CollectionPageContent collection={collection} products={products} />
      <Footer />
      <WhatsAppChatButton />
    </>
  );
}
