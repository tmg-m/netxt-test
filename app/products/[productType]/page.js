"use client"
import Card from "@/app/Components/Card";
import { useAppContext } from "@/app/context/index";
import { useEffect, useState } from "react";

export default function ProductType({ params }) {
  const { getProductByType} = useAppContext();
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProductByType(params.productType);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    getData();
  }, [getProductByType, params]);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex gap-4 justify-center items-center bg-ribbon">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 justify-center items-center px-5 py-10">
          {products?.map((card) => (
            <div key={card.id} className="flex justify-center items-center mb-10 max-w-[300px]">
              <Card
                key={card.id}
                id={card.id}
                imageUrl="/iphone15test.png"
                title={card.title}
                type = {card.type}
                description={card.description}
                showAddToCart
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
