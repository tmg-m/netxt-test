export default function ProductId({ params }) {
  const { productType, productId } = params;

  return (
    <div>
      Product Type: {productType}, Product ID: {productId}
    </div>
  );
}
