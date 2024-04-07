export default function CtaBtn({
  id,
  type,
  typeBtn,
  isEnable,
  confirmation,
  singleProduct,
}) {

  const handleClick = () => {
    const params = {
      id: id,
      type: type,
    };
    const queryString = new URLSearchParams(params).toString();
    if (isEnable) {
      if (confirmation) {
        window.location.href = `/checkout/confirmation?${queryString}`;
      } else if (singleProduct) {
        window.location.href = `/checkout/?${queryString}&singleProduct=${singleProduct}`;
      } else {
        typeBtn == "checkout"
          ? (window.location.href = `/checkout/?${queryString}`)
          : console.log("here");
      }
    }
  };

  return (
    <div
      className={`flex items-  justify-center px-8 py-3 text-white rounded-3xl cursor-pointer 
      ${!isEnable ? "bg-red-300" : ""}
      ${typeBtn === "checkout" ? "bg-red-600" : "bg-black"}`}
      onClick={handleClick}
    >
      {typeBtn === "checkout" ? "Buy" : "Add to Cart"}
    </div>
  );
}
