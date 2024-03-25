import Image from "next/image";
import CtaBtn from "./Button/CtaBtn";
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

export default function Card({ title, description, imageUrl, id }) {
  return (
    <div className="relative flex flex-col justify-center items-center mb-8 w-[300px] p-10" style={{ backgroundColor: 'red' }}>
      <ShoppingBasketRoundedIcon className="absolute top-2 right-2 p-1 text-3xl" style={{ color: 'white' }} />
      <div className="mb-2 flex items-center justify-center max-w-full w-100 h-[300px]">
        <Image
          className="w-100 h-100"
          src={imageUrl}
          alt="iphone 15 pro max"
          width={200}
          height={200}
        />
      </div>
      <div className="mb-2">
        <p>{title}</p>
      </div>
      <CtaBtn id={id}/>
    </div>
  );
}
