"use client";
import { globalStore } from "@/app/store/store";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Orders() {
  const { purchaseOrders } = globalStore((state) => state);
  const [orders, setOrders] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    if (purchaseOrders) {
      setOrders(purchaseOrders);
      setProducts(purchaseOrders[0]?.products);
    }
  }, [purchaseOrders]);

  const totalPrices = products?.flatMap(product =>
    product.storage_options.map(option => parseFloat(option.price))
  ).reduce((total, price) => total + price, 0);

  return (
    <div className="flex flex-col justify-center gap-5 mb-10 p-5 md:p-20">
      <p className="text-4xl">My orders</p>
      {orders &&
        orders.map((order, index) => (
          <div key={index} className="flex flex-col gap-10 bg-ribbon p-10">
            <p className="font-bold">
              Order number :{" "}
              <span className="font-normal">{order.orderNumber}</span>
            </p>
            {products && (
              <div>
                {products?.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col md:flex-row justify-between items-center gap-10 pb-5 md:pb-10 border-b-2"
                  >
                    <div className="flex justify-between items-center gap-5">
                      <div className="max-w-[150px] max-h-[150px]">
                        <Image
                          src={product.image_url.main}
                          className="object-contain bg-white rounded-3xl shadow-2xl w-full h-full"
                          alt={`image-${product.id}`}
                          height={400}
                          width={400}
                        />
                      </div>
                      <div>
                        <p>{product.title}</p>
                      </div>
                    </div>
                    <p className="self-end">
                      <span>Price: </span>
                      {product.currency}
                      {product.storage_options[0].price}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center items-center gap-5 md:gap-10 md:self-end">
              {products && (
                <div>
                  <p className="text-2xl mb-2">Total products</p>
                  {products?.map((product) => (
                    <div key={product.id}>
                      <p>{product.title}</p>
                    </div>
                  ))}
                  <p className="text-2xl mt-2 border-t-2 text-right px-3">
                    {products.length}
                  </p>
                  <p className="text-2xl mt-2 border-t-2 text-right px-3">
                    {totalPrices}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
