"use client"
import { globalStore } from "@/app/store/store"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function CtaBtn({
  id,
  type,
  typeBtn,
  isEnable,
  confirmation,
  selectedProductwithStorage,
  summeryCheckout,
}) {
  const { updateSingleProductCheckout, updateProductCart, updateAllProductCheckout, updateCheckoutPurchaseOrder } =
    globalStore((state) => state)
  const [url, setUrl] = useState("")
  const [cartStatus, setCartStatus] = useState(false)

  useEffect(() => {
    if (isEnable && typeBtn !== "cart") {
      const params = { id, type }
      const queryString = new URLSearchParams(params).toString()

      let destinationUrl = "/checkout"
      if (confirmation) {
        destinationUrl += "/confirmation";
      } else if (selectedProductwithStorage) {
        destinationUrl += `?${queryString}`
      } else {
        destinationUrl += `?${queryString}`
      }

      setUrl(destinationUrl)
    }
  }, [id, type, isEnable, confirmation, selectedProductwithStorage, typeBtn])

  const handleClick = async () => {
    if (typeBtn === "cart") {
      await updateProductCart(selectedProductwithStorage)
      setCartStatus(true)
    }
    if (isEnable && selectedProductwithStorage) {
      updateCheckoutPurchaseOrder(null)
      if(summeryCheckout) {
        await updateSingleProductCheckout(null)
        await updateAllProductCheckout(selectedProductwithStorage);
      } else {
        await updateSingleProductCheckout(selectedProductwithStorage);
      }
    }
  };

  return (
    <Link
      href={url}
      className={`flex items-center justify-center text-lg font-bold px-8 py-3 text-white rounded-3xl cursor-pointer 
    ${!isEnable ? "bg-red-400" : typeBtn === "checkout" ? "bg-red-600" : "bg-black"}`}
      onClick={handleClick}
    >
      {typeBtn === "checkout" ? "Buy" : `${cartStatus? 'Added to Cart' : "Add to Cart"}`}
    </Link>
  )
}
