export default function ProductType({ params }) {
    return (
      <div className="flex flex-col justify-center">
        <p className="mb-5">Products page { params.productType }</p>
      </div>
    );
  }
