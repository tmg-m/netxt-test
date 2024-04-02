import Image from "next/image";
import CtaBtn from "../Components/Button/CtaBtn";

export default function ConfirmationId() {
  const dataProducts = Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    type: "phone",
    price: "800",
    currency: "$",
    imageUrl: "/samsungPhone1.png",
    title: "samsung galaxy s21",
    description: "This is samsung galaxy s21 with amazing camera.",
  }));
  const prices = dataProducts.map((product) => parseFloat(product.price));
  const totalPrice = prices.reduce((acc, price) => acc + price, 0);
  return (
    <div className="flex flex-col justify-center gap-10 mb-10 p-5 md:p-20">
      <p className="text-4xl">Summery</p>
      <div className="flex flex-col gap-10 bg-ribbon p-10">
        {dataProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row justify-between items-end md:items-center pb-5 md:pb-10 border-b-2"
          >
            <div className="flex justify-between items-center gap-5">
              <div className="max-w-[150px] max-h-[150px]">
                <Image
                  src={product.imageUrl}
                  className="object-contain bg-white rounded-3xl shadow-2xl w-full h-full"
                  alt={`image-${product.id}`}
                  height={400}
                  width={400}
                />
              </div>
              <div>
                <p>{product.title}</p>
                <p>{product.description}</p>
              </div>
            </div>
            <p>
              <span>Price: </span>
              {product.currency}
              {product.price}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-10 px-10 md:px-20">
        <div className="flex flex-col justify-center items-center w-[400px] gap-3">
          <p className="text-2xl">Total</p>
          <p className="text-2xl">${totalPrice}</p>
          <div className="w-full">
            <CtaBtn
              isEnable={true}
              id={1}
              typeBtn={"checkout"}
              type={"phone"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
