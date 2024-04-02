"use client";
export default function CtaBtn({ id, type, typeBtn, isEnable }) {
  const handleClick = () => {
    const params = {
      id: id,
      type: type,
    };
    const queryString = new URLSearchParams(params).toString();
    if (isEnable) {
      typeBtn == "checkout"
        ? (window.location.href = `/checkout?${queryString}`)
        : console.log("here");
    }
    console.log(isEnable);
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
