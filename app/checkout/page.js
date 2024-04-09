"use client";
import { useEffect, useState } from "react";
import { globalStore } from "@/app/store/store";
import CtaBtn from "../Components/Button/CtaBtn";

export default function Checkout() {
  const { singleProductCheckout, updatePurchaseOrders, allProductCheckout } =
    globalStore((state) => state);
  const [products, setproducts] = useState(
    singleProductCheckout.length > 0 ?  singleProductCheckout : allProductCheckout
  );
  const [isFormValid, setIsFormValid] = useState(false);

  const prices = products.map((product) =>
    parseFloat(product.storage_options[0].price)
  );
  const totalPrice = prices.reduce((acc, price) => acc + price, 0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    country: "",
    email: "",
    phone: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let filteredValue = value;
    if (name === "phone" || name === "postalCode") {
      filteredValue = value.replace(/\D/g, ""); // Remove any non-numeric characters
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : filteredValue,
    }));
  };

  useEffect(() => {
    const isFormDataValid = () => {
      for (const value of Object.values(formData)) {
        if (!value || value === "") {
          return false;
        }
      }
      return true;
    };
    setIsFormValid(isFormDataValid());
  }, [formData]);

  const handleConfirmation = async (e) => {
    if (isFormValid) {
      updatePurchaseOrders({
        orderNumber: Math.floor(10000000 + Math.random() * 90000000).toString(),
        userData: formData,
        products: products,
      });
    }
  };

  return (
    products && (
      <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-20 bg-ribbon p-10 md:p-20">
        <form className="flex flex-col gap-10 md:gap-8">
          <p className="text-4xl">Shipping Information</p>
          <div className="flex flex-col gap-3">
            <p>First Name</p>
            <input
              className="border-2 rounded-md p-2"
              type="text"
              name="firstName"
              placeholder="Your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <p>Last Name</p>
            <input
              className="border rounded-md p-2"
              type="text"
              name="lastName"
              placeholder="Your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <p>Address</p>
            <input
              className="border rounded-md p-2"
              type="text"
              name="address"
              placeholder="Your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <p>Postal Code</p>
            <input
              className="border rounded-md p-2"
              type="text"
              name="postalCode"
              placeholder="00000"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
            <p>Country</p>
            <input
              className="border rounded-md p-2"
              type="text"
              name="country"
              placeholder="Your country"
              value={formData.country}
              onChange={handleChange}
              required
            />
            <p>Email</p>
            <input
              className="border rounded-md p-2"
              type="email"
              name="email"
              placeholder="example@test.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <p>Phone</p>
            <input
              className="border rounded-md p-2"
              type="tel"
              name="phone"
              placeholder="+00 123456789"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <div className="flex gap-2 mt-5">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
              <p>Agree to terms and conditions.</p>
            </div>
          </div>
        </form>
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
              <div onClick={handleConfirmation}>
                <CtaBtn
                  isEnable={isFormValid ? true : false}
                  confirmation={isFormValid ? true : false}
                  id={1}
                  typeBtn={"checkout"}
                  type={"phone"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
