import Image from "next/image";
import CtaBtn from "./Button/CtaBtn";

export default function Banner() {
  return (
    <div className="flex items-center">
      <Image
          src="https://fastly.picsum.photos/id/269/1000/500.jpg?hmac=Es_1r5dB5ny8OfpgyDNCXMZwYmhG6KLtfYrP6-kmg4E"
          alt="iphone 15 pro max"
          width={500}
          height={200}
        />
      <p>Banner for products</p>
      <CtaBtn />
    </div>
  );
}
