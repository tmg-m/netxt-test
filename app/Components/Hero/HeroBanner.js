import Image from "next/image";

export default function HeroBanner({ id }) {
  return (
    <div className="flex justify-center items-center py-10 md:pb-20 w-100">
      <Image
        src="/heroImg.jpg"
        alt="iphone 15 pro max"
        height={1000}
        width={1000}
      />
    </div>
  );
}
