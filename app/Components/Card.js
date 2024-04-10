"use client";
import Image from "next/image";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "next/link";
import { globalStore } from "@/app/store/store";
import { useEffect, useState } from "react";

export default function Card({
  title,
  description,
  imageUrl,
  id,
  type,
  showAddToCart,
}) {
  const { updateProductCart, productCart, removeProductFromCart, allProducts } = globalStore((state) => state);

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productMatch = productCart.find((p) => p.id === id && true);
    const isMatchFound = !!productMatch;
    if (isMatchFound) {
      setIsInCart(true);
    }
  }, [productCart, id, type]);

  const handleClick = async () => {
    const typeAndId = { productType: type, productId: id };
    if (isInCart) {
      setIsInCart(false);
      const products = [...productCart.filter(product => product.id !== id)];
      removeProductFromCart(products)

    } else {
      try {
        setIsInCart(true);
        const findProduct = allProducts.find(item => item.id === id);
        const product = {
          ...findProduct,
          storage_options_select: [findProduct.storage_options[0]],
        };
        await updateProductCart(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
  };
  return (
    <div className="relative">
      {showAddToCart && (
        <>
          {!isInCart ? (
            <div
              onClick={handleClick}
              className="absolute top-2 md:top-4 right-2 md:right-4 rounded-full border p-1 md:p-2 flex items-center justify-center shadow-2xl bg-white"
            >
              <ShoppingBagOutlinedIcon className="text-gray-500" />
            </div>
          ) : (
            <div
              onClick={handleClick}
              className="absolute top-2 md:top-4 right-2 md:right-4 rounded-full border p-1 md:p-2 flex items-center justify-center shadow-2xl bg-white"
            >
              <CheckCircleOutlineRoundedIcon className="text-green-600" />
            </div>
          )}
        </>
      )}
      <Link
        href={`/products/${type}/${id}`}
        className="flex flex-col shadow-2xl rounded-xl bg-white cursor-pointer"
      >
        <div className="flex flex-col justify-center items-center overflow-hidden p-5">
          <Image
            className="w-full h-full object-contain"
            src={imageUrl}
            alt="iphone 15 pro max"
            height={1000}
            width={1000}
          />
        </div>
        {title && (
          <>
            <div className="flex justify-center items-center py-3 md:py-5 w-full border-t">
              <p>{title}</p>
            </div>
          </>
        )}
      </Link>
    </div>
  );
}
