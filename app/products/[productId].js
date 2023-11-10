// pages/products/[productId].js
import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      <h1>Product ID: {productId}</h1>
      {/* Fetch and display details for the given productId */}
    </div>
  );
}
