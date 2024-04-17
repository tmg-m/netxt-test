"use client";
import Card from "./Components/Card";
import Image from "next/image";
import GallerySlides from "./Components/Gallery/GallerySlides";
import HeroSlider from "./Components/Hero/HeroSlider";
import { globalStore } from "@/app/store/store";
import Banner from "./Components/Banner";
import Link from "next/link";

export default function Home() {
  const { hotToday, mixDataCard } = globalStore((state) => state);
  return (
    <div className="flex flex-col w-full">
      <Banner />
      <HeroSlider />
      <div className="flex items-center justify-start md:justify-center gap-4 overflow-scroll md:overflow-hidden bg-ribbon p-5 h-[300px] md:h-[400px]">
        {hotToday?.map((phone) => (
          <div
            key={phone.id}
            className="flex justify-center items-start h-full"
          >
            <div className="w-[200px] md:w-[250px] h-full">
              <Card
                key={phone.id}
                id={phone.id}
                type={phone.type}
                imageUrl={phone.image_url.main}
                title={phone.title}
                description={phone.description}
                showAddToCart
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-ribbon md:pl-60 md:pb-20">
        <div className="bg-white py-10 md:py-20 flex flex-col justify-center items-center">
          <div className="flex items-center justify-center relative">
            <span className="pulse md:pulse-md pulse-sm absolute"></span>
            <Link href="/products/tablet/45782">
              <Image
                src="/ipad1.jpg"
                className="h-auto mb-20"
                alt="ipad1"
                height={2000}
                width={2000}
              />
            </Link>
          </div>
          <Image
            src="/ipadsm1.jpg"
            className="w-[50%] md:w-[40%] md:h-auto"
            alt="ipadsm1.jpg"
            height={600}
            width={600}
          />
        </div>
      </div>

      <GallerySlides />

      <div className="flex justify-center items-center pb-10 md:py-20 bg-ribbon">
        <div className="grid grid-cols-2 gap-5 md:gap-10 px-5">
          {mixDataCard.map((src, index) => (
            <Card
              key={index}
              imageUrl={src.image_url.main}
              id={src.id}
              type={src.type}
              showAddToCart
            />
          ))}
        </div>
      </div>

      <div className="w-full md:max-h-[800px] flex justify-center items-center p-5 md:p-20">
        <Link href="/products/tv/49275">
          <Image
            src="/tvsamsungtv.png"
            className=" object-cover w-100"
            alt="tvsamsungtv.png"
            height={1000}
            width={1000}
          />
        </Link>
      </div>
    </div>
  );
}
