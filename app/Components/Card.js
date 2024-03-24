import Image from "next/image";
import CtaBtn from "./Button/CtaBtn";

export default function Card() {
  return (
    <div className="flex flex-col justify-center mb-8">
      <div className="relative mb-2">
        <p className="absolute">iphone 15 pro max</p>
        <Image
          src="https://fastly.picsum.photos/id/443/200/300.jpg?hmac=lXwP6DouUwgwHCQ9ZcgkX6W237U8PAyS9o-YAD1zvN8"
          alt="iphone 15 pro max"
          width={200}
          height={300}
        />
      </div>
      <div className="mb-2">
        <p>aklsdhjfklasdjfklasdjflkaj</p>
        <p>sdafsdafasdfasdfasdfasdfas</p>
      </div>
      <CtaBtn />
    </div>
  );
}
