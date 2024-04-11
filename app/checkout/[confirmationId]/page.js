"use client";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { globalStore } from "@/app/store/store";
import { useEffect, useState } from "react";
import Link from "next/link"
import Card from "@/app/Components/Card";

export default function ConfirmationId() {
  const { checkoutPurchaseOrder, updateProductCart, singleProductCheckout } = globalStore((state) => state);
  const [orders, setOrders] = useState(null);
  const [userData, setUserData] = useState(null);
  const [purchases, setPurchases] = useState(null);

  useEffect(() => {
    if (checkoutPurchaseOrder && checkoutPurchaseOrder !== null) {
      setOrders(checkoutPurchaseOrder[0]);
      setUserData(checkoutPurchaseOrder[0].userData); 
      setPurchases(checkoutPurchaseOrder[0].products);
      if(singleProductCheckout.length <= 0) {
        updateProductCart(null)
      }
    }
  }, [checkoutPurchaseOrder, updateProductCart, singleProductCheckout]);

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col justify-center items-center gap-5 text-center w-full">
        <CheckCircleIcon className="text-green-600 text-4xl" />
        <p className="text-4xl">Thank you {userData?.firstName}!</p>
        <p className="text-lg">Your order has been confirmed.</p>
        <p className="text-lg">
          Your shipping order number is : {orders?.orderNumber}
        </p>
        <p className="text-md">You can now check your purchases in my orders.</p>
        <Link href="/orders" className="px-10 py-2 border-4 rounded-md">My orders</Link>

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
