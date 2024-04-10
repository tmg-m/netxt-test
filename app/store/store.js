import { create } from "zustand";
import { data } from "@/data.json";

export const globalStore = create((set, get) => {
  const allProducts = data.products;
  const phone = allProducts.filter((product) => product.type === "phone");
  const accessories = allProducts.filter((product) => product.type === "accessories");
  const tablet = allProducts.filter((product) => product.type === "tablet");
  const tv = allProducts.filter((product) => product.type === "tv");

  const hotToday = [...phone.slice(0, 3), ...phone.slice(5, 6)];
  const mixDataCard = [
    ...accessories,
    ...tablet.slice(3, 5),
    ...phone.slice(7, 8)
  ];
  const purchaseOrders = []
  const productCart = []
  const singleProductCheckout = []
  const allProductCheckout = []
  const checkoutPurchaseOrder = []

  return {
    allProducts,
    phone,
    accessories,
    tablet,
    tv,
    mixDataCard,
    hotToday,
    purchaseOrders,
    checkoutPurchaseOrder,
    productCart,
    singleProductCheckout,
    allProductCheckout,
    updateSingleProductCheckout: (product) => {
      const currentState = get();
      const updatedCheckout = [product];
      set({ ...currentState, singleProductCheckout: product !== null ? updatedCheckout : [] });
      return updatedCheckout;
    },
    updateAllProductCheckout: (product) => {
      const currentState = get();
      const updatedCheckout = product;
      set({ ...currentState, allProductCheckout: updatedCheckout });
      return updatedCheckout;
    },
    updatePurchaseOrders: (submitData) => {
      const currentState = get();
      const updatedPurchaseOrders = [...currentState.purchaseOrders, submitData];
      set({ ...currentState, purchaseOrders: updatedPurchaseOrders });
      return updatedPurchaseOrders;
    },
    updateCheckoutPurchaseOrder: (submitData) => {
      const currentState = get();
      const updatedCheckoutPurchaseOrder = [submitData];
      set({ ...currentState, checkoutPurchaseOrder: submitData !== null ? updatedCheckoutPurchaseOrder : []});
      return updatedCheckoutPurchaseOrder;
    },    
    updateProductCart: (product) => {
      const currentState = get();
      const updatedProductCart = [...currentState.productCart, product];
      set({ ...currentState, productCart: product !== null ? updatedProductCart : []});
      return updatedProductCart;
    },    
  };
});
