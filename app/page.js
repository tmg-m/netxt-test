import Card from "./Components/Card";
import Image from "next/image";
import GallerySlides from "./Components/Gallery/GallerySlides";
import HeroSlider from "./Components/Hero/HeroSlider";

export default function Home() {
  const cardsData = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    imageUrl: "/iphone15test.png",
    title: "iphone 15 pro max",
    description: "This is iphone 15 pro max with amazing camera.",
  }));

  const images = [
    "/airpodpro1.png",
    "/samsungairbuds.png",
    "/samsungTablet.png",
    "/samsungPhone1.png",
  ];

  return (
    <div className="flex flex-col w-full">
      <HeroSlider />

      <div className="flex items-center justify-start md:justify-center gap-4 overflow-scroll md:overflow-hidden bg-ribbon p-5">
        {cardsData.map((card) => (
          <div key={card.id} className="flex justify-center items-start">
            <div className="w-[250px]">
              <Card
                key={card.id}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-ribbon md:pl-60 md:pb-20">
        <div className="bg-white py-10 md:py-20 flex flex-col justify-center items-center">
          <div className="flex items-center justify-center relative">
            <span className="pulse md:pulse-md pulse-sm absolute"></span>
            <Image
              src="/ipad1.jpg"
              className="h-auto mb-20"
              alt="ipad1"
              height={2000}
              width={2000}
            />
          </div>
          <Image
            src="/ipadsm1.jpg"
            className="w-[50%] md:w-[40%] md:h-auto"
            alt="ipadsm1"
            height={600}
            width={600}
          />
        </div>
      </div>

      <GallerySlides />

      <div className="flex justify-center items-center pb-10 md:py-20 bg-ribbon">
        <div className="grid grid-cols-2 gap-10 px-5 md:w-[40%]">
          {images.map((src, index) => (
            <div key={index} className="flex justify-center items-center cursor-pointer">
              <Image
                src={src}
                className="object-contain bg-white rounded-3xl shadow-2xl w-full h-full"
                alt={`image-${index}`}
                height={400}
                width={400}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:max-h-[800px] flex justify-center items-center p-5 md:p-20">
        <Image
          src="/samsungtv.png"
          className=" object-cover w-100"
          alt="ipadsm1"
          height={1000}
          width={1000}
        />
      </div>
    </div>
  );
}
