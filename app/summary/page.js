"use client";
import Image from "next/image";
import CtaBtn from "../Components/Button/CtaBtn";
import { globalStore } from "@/app/store/store";
import { useEffect, useState } from "react";

export default function ConfirmationId() {
  const { productCart } = globalStore((state) => state);
  const [products, setProducts] = useState(null);
  const [hasProducts, sethasProducts] = useState(false);

  useEffect(() => {
    if (productCart.length > 0) {
      setProducts(productCart);
      sethasProducts(true);
    }
  }, [productCart]);

  const prices = products?.map((product) =>
    parseFloat(product.storage_options_select[0]?.price)
  );
  const totalPrice = prices?.reduce((acc, price) => acc + price, 0)?.toFixed(2);

  const handlePriceChange = ({ product, options }) => {
    const productMatch = products.find((p) => p.id === product.id);
    const updateMatchedProduct = {
      ...productMatch,
      storage_options_select: [options],
    };
    const replaceObjectById = (products, newObj) => {
      return products.map((obj) =>
        obj.id === updateMatchedProduct.id ? newObj : obj
      );
    };
    const updatedProducts = replaceObjectById(products, updateMatchedProduct);
    setProducts(updatedProducts);
  };

  return (
    <div className="flex flex-col justify-center gap-5 mb-10 p-5 md:p-20">
      <p className="text-4xl">Summery</p>
      {!hasProducts && (
        <p className="flex flex-col items-center justify-center bg-ribbon p-20 md:p-40 text-lg font-bold">
          Add Products
        </p>
      )}
      {products && hasProducts && (
        <>
          <div className="flex flex-col gap-10 bg-ribbon p-10">
            {products?.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row justify-between gap-10 items-end md:items-center pb-5 md:pb-10 border-b-2"
              >
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full md:w-100">
                  <div className="md:max-w-[200px] md:max-h-[300px] p-10 bg-white rounded-3xl shadow-2xl">
                    <Image
                      src={product.image_url.main}
                      className="object-contain bg-white w-full h-full"
                      alt={`image-${product.id}`}
                      height={400}
                      width={400}
                    />
                  </div>
                  <div className="flex flex-col gap-5 md:gap-10 self-end w-full md:w-100">
                    <p className="text-lg font-bold">{product.title}</p>
                    {product.storage_options.length && (
                      <div className="flex flex-col md:flex-row gap-5 md:gap-2 flex-wrap w-full">
                        {product.storage_options.map((options, index) => (
                          <div
                            onClick={() =>
                              handlePriceChange({ product, options })
                            }
                            key={index}
                            className={`border-2 px-5 py-2 flex md:gap-20 items-center justify-around md:justify-center rounded-2xl bg-white ${
                              product.storage_options_select[0].size ===
                                options.size && "border-2 border-stone-500"
                            }`}
                          >
                            <p>{options.size}</p>
                            <p>${options.price}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <p className="self-end text-xl">
                  {product.storage_options_select && (
                    <p className="w-max">
                      Price :{" "}
                      <span className="font-normal text-xl">
                        {product.currency}
                        {product.storage_options_select[0].price}
                      </span>
                    </p>
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-10 px-5 md:px-10">
            {products && (
              <div className="flex flex-col justify-center items-center md:items-start w-full md:w-max">
                <p className="text-2xl mb-2">Total products</p>
                {products?.map((product) => (
                  <div key={product.id}>
                    <p>{product.title}</p>
                  </div>
                ))}
                <p className="text-2xl mt-3 pt-2 border-t-2 text-center px-3 w-full md:w-100">
                  {products.length}
                </p>
              </div>
            )}
            <div className="flex flex-col justify-between items-center w-full md:w-[400px] gap-5">
              <p className="text-2xl text-center">Total Ammount</p>
              <p className="text-2xl ">${totalPrice}</p>
              <div className="w-full">
                <CtaBtn
                  isEnable
                  id={1}
                  typeBtn={"checkout"}
                  type={"phone"}
                  selectedProductwithStorage={products}
                  summeryCheckout
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
