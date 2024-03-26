import Image from "next/image";
import CtaBtn from "./Button/CtaBtn";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function Card({ title, description, imageUrl, id }) {
  return (
    <div className="shadow-2xl relative flex flex-col justify-center items-center mb-8 w-[300px] p-10 rounded-xl">
      <ShoppingBagOutlinedIcon className="absolute top-2 right-2 p-1 text-3xl"/>
      <div className="mb-2 flex items-center justify-center max-w-full w-100 h-[300px] rounded-md overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={imageUrl}
          alt="iphone 15 pro max"
          height={100}
          width={100}
        />
      </div>
      <div className="mb-2">
        <p>{title}</p>
      </div>
      <CtaBtn id={id}/>
    </div>
  );
}