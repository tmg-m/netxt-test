"use client";
import { useEffect, useState } from "react";

export default function Filter({ productTypes }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (productTypes) {
      setProducts(productTypes);
    }
  }, [productTypes]);

  const [checkedTypes, setCheckedTypes] = useState({
    phone: false,
    tablet: false,
    tv: false,
    accessories: false,
  });

  const handleCheckboxChange = (type, provider) => {
    setCheckedTypes((prevCheckedTypes) => ({
      ...prevCheckedTypes,
      [provider]: !prevCheckedTypes[provider]
    }));
  };

  useEffect(() => {
    if (checkedTypes) {
      const filteredProducts = Object.keys(checkedTypes).reduce((acc, type) => {
        if (checkedTypes[type]) {
          return {
            ...acc,
            [type]: products[type]
          };
        }
        return acc;
      }, {});
      console.log(filteredProducts);
    }
  }, [checkedTypes, products]);

  return (
    <div className="flex flex-col items-start gap-8">
      <p className="text-2xl">Filter</p>
      {products &&
        Object.keys(products).map((type) => {
          const uniqueProviders = {};
          products[type].forEach((product) => {
            uniqueProviders[product.provider] = product;
          });
          return (
            <div key={type} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name={type}
                  value={type}
                  checked={checkedTypes[type]}
                  onChange={() => handleCheckboxChange(type, type)}
                  className="w-5 h-5 rounded-full"
                />
                <p className="text-md font-bold">{type}</p>
              </div>
              <div className="flex flex-col gap-2 ml-5">
                {Object.keys(uniqueProviders).map((provider) => (
                  <div key={provider} className="flex gap-2">
                    <input
                      type="checkbox"
                      name={type}
                      value={provider}
                      className="w-5 h-5 rounded-full"
                    />
                    <p>{provider}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}
