"use client";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { globalStore } from "@/app/store/store";
import { useEffect, useState } from "react";
import Card from "@/app/Components/Card";

export default function ConfirmationId() {
  const { purchaseOrders } = globalStore((state) => state);
  const [orders, setOrders] = useState();
  const [userData, setUserData] = useState(null);
  const [purchases, setPurchases] = useState(null);

  useEffect(() => {
    if (purchaseOrders && purchaseOrders.length > 0) {
      setOrders(purchaseOrders[0]);
      setUserData(purchaseOrders[0].userData);
      setPurchases(purchaseOrders[0].products);
    }
  }, [purchaseOrders]);

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col justify-center items-center gap-5 text-center w-full">
        <CheckCircleIcon className="text-green-600 text-4xl" />
        <p className="text-4xl">Thank you {userData?.firstName}!</p>
        <p className="text-lg">Your order has been confirmed.</p>
        <p className="text-lg">
          Your shipping order number is : {orders?.orderNumber}
        </p>
        <p className="text-md">You can now check your purchases in my shipping.</p>

        <div className="flex flex-col justify-center items-center w-full bg-ribbon gap-5 p-10 md:p-20 mt-5 md:mt-10">
          <p className="text-2xl mb-5">Your have purchased</p>
          <div className="flex flex-column md:flex-row gap-5 md:gap-10">
            {purchases &&
              purchases.map((product) => {
                return (
                  <div key={product.id} className="w-[250px]">
                    <Card
                      id={product.id}
                      type={product.type}
                      imageUrl={product.image_url.main}
                      title={product.title}
                      showAddToCart={false}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
