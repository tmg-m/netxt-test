import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-10"> 
      <div class="flex flex-col w-full">
        <div className="flex justify-center items-center py-10 md:py-20 w-100">
          <Image src="/heroImg.jpg"
            alt="iphone 15 pro max"
            height={1000}
            width={1000}
          />
        </div>
        <div className="flex gap-10 justify-center items-center w-full bg-ribbon py-10">
          <Card
            id={1}
            imageUrl="/iphone15test.png"
            title={'iphone 15 pro max'}
            description={'This is iphone 15 pro max with amazing camera.'}
          />
          <Card
            id={1}
            imageUrl="/iphone15test.png"
            title={'iphone 15 pro max'}
            description={'This is iphone 15 pro max with amazing camera.'}
          />
          <Card
            id={1}
            imageUrl="/iphone15test.png"
            title={'iphone 15 pro max'}
            description={'This is iphone 15 pro max with amazing camera.'}
          />
          <Card
            id={1}
            imageUrl="/iphone15test.png"
            title={'iphone 15 pro max'}
            description={'This is iphone 15 pro max with amazing camera.'}
          />
        </div>
        <Banner/>
      </div>
    </div>
  );
}