"use client"
import { useState } from "react";
import CtaBtn from "../Components/Button/CtaBtn";
import { globalStore } from "@/app/store/store"

export default function Checkout() {
  const { singleProductCheckout } = globalStore((state) => state)
  const [products, setproducts] = useState(singleProductCheckout? singleProductCheckout : [])

  console.log(products)

  console.log(products)

  const prices = products.map((product) => parseFloat(product.storage_options[0].price));
  const totalPrice = prices.reduce((acc, price) => acc + price, 0);

  return (
    products && <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-20 bg-ribbon p-10 md:p-20">
      <div className="flex flex-col gap-10">
        <p className="text-4xl">Shipping Information</p>
        <div className="flex flex-col gap-3">
          <p>First Name</p>
          <input
            className="border-2 rounded-md p-2"
            type="text"
            name="firstName"
          />
          <p>Last Name</p>
          <input
            className="border rounded-md p-2"
            type="text"
            name="lastName"
          />
          <p>Address</p>
          <input className="border rounded-md p-2" type="text" name="address" />
          <p>Postal Code</p>
          <input
            className="border rounded-md p-2"
            type="text"
            name="postalCode"
          />
          <p>Country</p>
          <input className="border rounded-md p-2" type="text" name="country" />
          <p>Email</p>
          <input className="border rounded-md p-2" type="text" name="email" />
          <p>Phone</p>
          <input className="border rounded-md p-2" type="text" name="phone" />
          <div className="flex gap-2 mt-5">
            <input type="checkbox" name="agreeTerms" />
            <p>Agree to terms and conditions.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between md:min-w-[300px] md:max-w-[500px]">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-10">
            <p className="text-4xl">Order summery</p>
            <div className="flex flex-col gap-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex p-5 gap-10 justify-between items-center bg-white shadow-md rounded-xl cursor-pointer"
                >
                  <p>{product.title} </p>
                  <p>
                    {product.currency}
                    {product.storage_options[0].price}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-2xl">Total</p>
              <p className="text-2xl">{totalPrice}</p>
            </div>
            <CtaBtn
              isEnable={true}
              confirmation
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
