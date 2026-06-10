import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetailContent from "@/components/ProductDetailContent";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";
import {
  getProductById,
  getRelatedProducts,
  ALL_PRODUCTS,
} from "@/lib/collections";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product | Aurora Jewelers" };
  return {
    title: `${product.name} | Aurora Jewelers`,
    description: product.description ?? product.name,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  const product = getProductById(id);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product.id, product.category, 4);

  return (
    <>
      <Navbar />
      <ProductDetailContent product={product} relatedProducts={relatedProducts} />
      <Footer />
      <WhatsAppChatButton />
    </>
  );
}
