import Image from "next/image";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "next/link";

export default function Card({ title, description, imageUrl, id, type, showAddToCart }) {
  const handleClick = () => {
    router.push(`/products/${type}/${id}`);
  }
  return (
    <Link href={`/products/${type}/${id}`} className="flex relative flex-col shadow-2xl rounded-xl bg-white cursor-pointer">
      {showAddToCart && <div className="absolute top-2 md:top-4 right-2 md:right-4 rounded-full border p-1 md:p-2 flex items-center justify-center shadow-2xl bg-white">
        <ShoppingBagOutlinedIcon className="text-gray-500" />
      </div>}
      <div className="flex flex-col justify-center items-center overflow-hidden p-5">
        <Image
          className="w-full h-full object-contain"
          src={imageUrl}
          alt="iphone 15 pro max"
          height={1000}
          width={1000}
        />
      </div>
      {title && <>
        <div className="flex justify-center items-center py-3 md:py-5 w-full border-t">
          <p>{title}</p>
        </div>  
      </> 
      }
    </Link>
  );
}
