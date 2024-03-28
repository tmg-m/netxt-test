import Card from "./Components/Card";
import Image from "next/image";
import GalleryCycle from "./Components/Gallery/GalleryCycle";
import HeroSlider from "./Components/Hero/HeroSlider";

export default function Home() {
  const cardsData = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    imageUrl: "/iphone15test.png",
    title: "iphone 15 pro max",
    description: "This is iphone 15 pro max with amazing camera.",
  }));
  return (
    <div className="">
      <div class="flex flex-col w-full">
        <HeroSlider />

        <div className="flex gap-10 justify-start px-5 md:justify-center items-center w-full overflow-scroll bg-ribbon py-10 md:py-20">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* <Banner/> */}
        <div className="bg-ribbon md:pl-60 pb-20">
          <div className="bg-white py-10 md:py-20 flex flex-col justify-center items-center">
            <Image
              src="/ipad1.jpg"
              className="h-auto mb-20"
              alt="ipad1"
              height={2000}
              width={2000}
            />
            <Image
              src="/ipadsm1.jpg"
              className="w-[50%] md:w-[40%] md:h-auto"
              alt="ipadsm1"
              height={600}
              width={600}
            />
          </div>
        </div>

        <div className="flex justify-center items-center bg-ribbon">
          <div className="grid grid-cols-2 gap-10 pb-20 px-5 md:w-[40%]">
            <div className="flex justify-center items-center">
              <Image
                src="/airpodpro1.png"
                className="object-contain bg-white rounded-3xl shadow-2xl w-full h-full"
                alt="airpodpro1"
                height={400}
                width={400}
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/samsungairbuds.png"
                className="object-contain bg-white rounded-3xl shadow-2xl w-full h-full"
                alt="samsungairbuds"
                height={400}
                width={400}
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/airpodpro1.png"
                className="object-contain bg-white rounded-3xl shadow-2xl w-full h-full"
                alt="airpodpro1"
                height={400}
                width={400}
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/samsungairbuds.png"
                className="object-contain bg-white rounded-3xl shadow-2xl w-full h-full"
                alt="samsungairbuds"
                height={400}
                width={400}
              />
            </div>
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
        <GalleryCycle />
      </div>
    </div>
  );
}
