import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Image from "next/image";
import HeroBanner from "./Components/Hero/HeroBanner";

export default function Home() {
  return (
    <div className="pt-10">
      <div class="flex flex-col w-full">
        <HeroBanner/>
        <div className="flex gap-10 justify-center items-center w-full bg-ribbon py-20">
          <Card
            id={1}
            imageUrl="/iphone15test.png"
            title={"iphone 15 pro max"}
            description={"This is iphone 15 pro max with amazing camera."}
          />
          <Card
            id={1}
            imageUrl="/iphone15test.png"
            title={"iphone 15 pro max"}
            description={"This is iphone 15 pro max with amazing camera."}
          />
          <Card
            id={1}
            imageUrl="/iphone15test.png"
            title={"iphone 15 pro max"}
            description={"This is iphone 15 pro max with amazing camera."}
          />
          <Card
            id={1}
            imageUrl="/iphone15test.png"
            title={"iphone 15 pro max"}
            description={"This is iphone 15 pro max with amazing camera."}
          />
        </div>
        {/* <Banner/> */}
        <div className="bg-ribbon pl-60 pb-20">
          <div className="bg-white py-20 flex flex-col justify-center items-center">
            <Image
              src="/ipad1.jpg"
              className="w-full h-full mb-20 object-fill"
              alt="ipad1"
              height={2000}
              width={2000}
            />
            <Image
              src="/ipadsm1.jpg"
              className="ml-40"
              alt="ipadsm1"
              height={600}
              width={600}
            />
          </div>
        </div>
        <div className="flex justify-center gap-10 pb-20 bg-ribbon">
          <Image
            src="/airpodpro1.png"
            className="object-fill bg-white rounded-3xl shadow-2xl"
            alt="airpodpro1"
            height={400}
            width={400}
          />
          <Image
            src="/samsungairbuds.png"
            className="object-fill bg-white rounded-3xl shadow-2xl"
            alt="samsungairbuds"
            height={400}
            width={400}
          />
        </div>
        <div className="w-full max-h-[800px] flex justify-center items-center p-20">
          <Image
            src="/samsungtv.png"
            className=" object-cover w-100"
            alt="ipadsm1"
            height={1000}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
}
