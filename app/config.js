/* const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getProducts = async () => {
  return await fetchData("/api/products");
};

export const getProductTypes = async () => {
  return await fetchData("/api/product-types");
};
 */
export const getProductById = async ({ productType, productId }) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/products/${productType}/${productId}`
    );
    if (response.ok) {
      const [data] = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

