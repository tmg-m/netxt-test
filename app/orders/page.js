"use client";
import { globalStore } from "@/app/store/store";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Orders() {
  const { purchaseOrders } = globalStore((state) => state);
  const [orders, setOrders] = useState();

  useEffect(() => {
    if (purchaseOrders) {
      setOrders(purchaseOrders.slice().reverse());
    }
  }, [purchaseOrders]);

  const totalPrices = orders?.products
    ?.flatMap((product) =>
      product.storage_options.map((option) => parseFloat(option.price))
    )
    .reduce((total, price) => total + price, 0);

  const handlePriceOrders = (products) => {
    return products?.reduce(
      (acc, product) =>
        product.storage_options
          .map((option) => option.price)
          .reduce((subtotal, price) => subtotal + price, 0)
          ?.toFixed(2),
      0
    );
  };

  return (
    <div className="flex flex-col justify-center gap-5 mb-10 p-5 md:p-20">
      <p className="text-4xl">My orders</p>
      {orders &&
        orders.map((order, index) => (
          <div key={index} className="flex flex-col gap-5 md:gap-10 bg-ribbon p-10">
            <p className="font-bold text-lg">
              Order number :{" "}
              <span className="font-normal">{order.orderNumber}</span>
            </p>
            {order.products && (
              <div className="flex flex-col gap-8">
                {order.products?.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col md:flex-row justify-between items-center gap-10 pb-5 md:pb-10 border-b-2"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                      <div className="max-w-[150px] md:max-w-[200px] max-h-[200px] md:max-h-[300px]">
                        <Image
                          src={product.image_url.main}
                          className="object-contain bg-white rounded-3xl shadow-2xl w-full h-full"
                          alt={`image-${product.id}`}
                          height={400}
                          width={400}
                        />
                      </div>
                      <div className="flex flex-col gap-3 w-full md:w-100">
                        <p className="text-lg font-bold">{product.title}</p>
                        <p>{product.storage_options_select[0].size}</p>
                      </div>
                    </div>
                    <p className="self-end">
                      <span className="text-xl">Price: </span>
                      <span className="text-xl">
                        {product.currency}
                        {product.storage_options[0].price}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-end md:justify-center items-center gap-5 md:gap-10 md:self-end">
              {order.products && (
                <div>
                  <p className="text-2xl mb-2">Total products</p>
                  {order.products?.map((product) => (
                    <div key={product.id}>
                      <p>{product.title}</p>
                    </div>
                  ))}
                  <p className="text-2xl mt-2 border-t-2 text-right px-3">
                    {order.products.length}
                  </p>
                  <p className="text-2xl mt-2 border-t-2 text-right px-3">
                    ${handlePriceOrders(order?.products)}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
