"use client";
import { globalStore } from "@/app/store/store";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CtaBtn({
  id,
  type,
  typeBtn,
  isEnable,
  confirmation,
  selectedProductwithStorage
}) {
  const updateSingleProductCheckout = globalStore(
    (state) => state.updateSingleProductCheckout
  );
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (isEnable) {
      const params = { id, type };
      const queryString = new URLSearchParams(params).toString();

      let destinationUrl = "/checkout";
      if (confirmation) {
        destinationUrl += "/confirmation";
      } else if (selectedProductwithStorage) {
        destinationUrl += `?${queryString}`;
      } else {
        destinationUrl += `?${queryString}`;
      }

      setUrl(destinationUrl);
    }
  }, [id, type, isEnable, confirmation, selectedProductwithStorage]);

  const handleClick = () => {
    if (isEnable && selectedProductwithStorage) {updateSingleProductCheckout(selectedProductwithStorage);}
  }

  return (
    <Link
      href={url}
      className={`flex items-center justify-center px-8 py-3 text-white rounded-3xl cursor-pointer 
    ${!isEnable ? "bg-red-300" : ""}
    ${typeBtn === "checkout" ? "bg-red-600" : "bg-black"}`}
    onClick={handleClick}
    >
      {typeBtn === "checkout" ? "Buy" : "Add to Cart"}
    </Link>
  );
}
