"use client";
import CtaBtn from "@/app/Components/Button/CtaBtn";
import GalleryProduct from "@/app/Components/Gallery/GalleryProduct";
import { useEffect, useState } from "react";
import { useAppContext } from "@/app/context/index";

export default function ProductId({ params }) {
  const { getProductById } = useAppContext();
  const [isLoaded, setIsLoaded] = useState(false);
  const { productType, productId } = params;
  const [product, setProduct] = useState(null);
  const [selectStorage, setSelectStorage] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProductById({ productType, productId });
        setProduct(data);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    getData();
  }, [getProductById, productType, productId]);

  useEffect(() => {
    if (product && isLoaded && product.storage_options) {
      const firstStorageOption = product.storage_options[0];
      setSelectStorage(firstStorageOption);
    }
  }, [product, isLoaded]);

  const handleSizeChange = ({ size, price }) => {
    setSelectStorage({ size: size, price: price });
  };

  return (
    isLoaded && (
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row bg-ribbon w-full justify-center p-10 md:p-20 gap-10 md:gap-20">
          <GalleryProduct galleryImg={product.image_url} />

          <div className="flex flex-col justify-between md:min-w-[300px] md:max-w-[400px]">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-5">
                <p>{product?.type}</p>
                <p className="text-4xl">{product?.title}</p>
                <p className="text-2xl">
                  {product.currency}
                  {selectStorage?.price}
                </p>
              </div>
              <div className="flex flex-col mt-10 gap-3">
                {product.storage_options &&
                  product.storage_options.map(({ size, price }) => (
                    <div
                      key={size}
                      className="flex p-5 justify-between items-center bg-white shadow-md rounded-xl cursor-pointer"
                      onClick={() => handleSizeChange({ size, price })}
                    >
                      <p>{size}</p>
                      <p>
                        {product.currency}
                        {price}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex flex-col mt-10 gap-5">
              <CtaBtn
                id={productId}
                typeBtn={"checkout"}
                type={productType}
                singleProduct={product}
                isEnable
              />
              <CtaBtn
                id={productId}
                typeBtn={"basket"}
                type={productType}
                isEnable
              />
            </div>
          </div>
        </div>
        <div className="w-full p-10 md:p-20">
          <div className="flex flex-col gap-5">
            <p className="text-3xl">{product?.title}</p>
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    )
  );
}
