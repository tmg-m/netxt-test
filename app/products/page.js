"use client";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useAppContext } from "@/app/context/index";

export default function Product() {
  const { getProduct } = useAppContext();
  const [allProducts, setAllProducts] = useState();
  const [productType, setProductType] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct();
        setAllProducts(data.products);
        const types = ["phone", "tablet", "tv", "accessories"];
        const filteredProducts = {};
        types.forEach((type) => {
          filteredProducts[type] = data.products.filter(
            (product) => product.type === type
          );
        });
        setProductType(filteredProducts);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [getProduct]);

  return (
    <div className="flex flex-col">
      <div>filters functionality</div>
      <div className="felx flex-col bg-ribbon p-2 md:px-60">
        {Object.keys(productType).map((type) => (
          <div key={type} className="px-5 py-5 md:py-10">
            <p className="border-b-2 text-lg font-medium mb-8 md:mb-10 pb-1">
              {type}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 justify-center items-center mt-5">
              {productType[type]?.map((card) => (
                <div key={card.id}>
                  <Card
                    key={card.id}
                    id={card.id}
                    type={card.type}
                    imageUrl={`/iphone15test.png`}
                    title={card.title}
                    description={card.description}
                    showAddToCart
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
