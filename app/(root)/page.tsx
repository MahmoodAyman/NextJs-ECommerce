import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { Metadata } from "next";
/* Sample data  */
import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/product/product-list";
/* Simulate Delays */
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const metadata: Metadata = {
  title: {
    template: `%s | EStore`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};
export default async function Home() {
  // await delay(5000);
  // loading products
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts.map(product => ({
        ...product,
        isFeatures: product.isFeatured
      }))} title="Newest Arrivals" limit={4} />
    </>
  );
}
