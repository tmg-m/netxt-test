"use client";
import { useState, useEffect, useRef } from "react";

export default function Filter({ productTypes, onFilteredProducts }) {
  const [products, setProducts] = useState([]);
  const lastFilteredProducts = useRef({});
  const [checkedTypes, setCheckedTypes] = useState({
    phone: false,
    tablet: false,
    tv: false,
    accessories: false,
  });
  const [filteredProducts, setfilteredProducts] = useState({
    phone: [],
    tablet: [],
    tv: [],
    accessories: [],
  });

  useEffect(() => {
    if (productTypes) {
      setProducts(productTypes);
    }
  }, [productTypes]);

  const handleCheckboxChange = (type, isChecked) => {
    setCheckedTypes((prevCheckedTypes) => ({
      ...prevCheckedTypes,
      [type]: !prevCheckedTypes[type],
    }));

    setfilteredProducts((prevFilteredProducts) => ({
      ...prevFilteredProducts,
      [type]: isChecked ? products[type] : [],
    }));
  };

  const handleProviderCheckboxChange = (type, provider, isChecked) => {
    if (products) {
      const newCheckedTypes = { ...checkedTypes };

      if (isChecked) {
        newCheckedTypes[type] = Array.isArray(newCheckedTypes[type])
          ? [...newCheckedTypes[type], provider]
          : [provider];
      } else {
        newCheckedTypes[type] = Array.isArray(newCheckedTypes[type])
          ? newCheckedTypes[type].filter((item) => item !== provider)
          : false;
      }
      const filtered = products[type].filter((product) => {
        const typeMatch = product.type === type;
        const providerList = Array.isArray(newCheckedTypes[type])
          ? newCheckedTypes[type]
          : [];
        const providerMatch = providerList.includes(product.provider);
        return typeMatch && providerMatch;
      });
      setCheckedTypes(newCheckedTypes);
      setfilteredProducts((prevFilteredProducts) => ({
        ...prevFilteredProducts,
        [type]: filtered.length > 0 ? filtered : products[type],
      }));
    }
  };

  useEffect(() => {
  const nonEmptyFilteredProducts = Object.fromEntries(
    Object.entries(filteredProducts).filter(([type, products]) => products.length > 0)
  );
  const hasChanged = JSON.stringify(nonEmptyFilteredProducts) !== JSON.stringify(lastFilteredProducts.current);
  if (hasChanged) {
    const filteredData = Object.keys(nonEmptyFilteredProducts).length > 0 ? nonEmptyFilteredProducts : false;
    onFilteredProducts(filteredData);
    lastFilteredProducts.current = filteredData;
  }
}, [filteredProducts, onFilteredProducts]);


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
                  onChange={(e) => handleCheckboxChange(type, e.target.checked)}
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
                      onChange={(e) =>
                        handleProviderCheckboxChange(
                          type,
                          provider,
                          e.target.checked
                        )
                      }
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
