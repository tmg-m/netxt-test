import Banner from "./Components/Banner";
import Card from "./Components/Card";

export default function Home() {
  return (
    <div className="flex flex-col justify-center"> 
      <div class="mx-5">
        <p class="mb-8">My Home page</p>
        <div className="flex gap-10 justify-center">
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