import Image from "next/image";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function Card({ title, description, imageUrl, id }) {
  return (
    <div className="flex relative flex-col shadow-2xl rounded-xl min-w-[350px] bg-white">
      <div className="absolute top-4 right-4 rounded-full border p-2 flex items-center justify-center shadow-lg">
        <ShoppingBagOutlinedIcon className="text-20" />
      </div>
      <div className="flex flex-col justify-center items-center overflow-hidden p-10">
        <Image
          className="w-full h-full object-contain"
          src={imageUrl}
          alt="iphone 15 pro max"
          height={1000}
          width={1000}
        />
      </div>
      <div className="flex justify-center items-center py-5 w-full border-t">
        <p>{title}</p>
      </div>
    </div>
  );
}
