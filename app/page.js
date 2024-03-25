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
            imageUrl={"https://fastly.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0"}
            title={'iphone 15 pro max'}
            description={'This is iphone 15 pro max with amazing camera.'}
          />
          <Card
            id={1}
            imageUrl={"https://fastly.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0"}
            title={'iphone 15 pro max'}
            description={'This is iphone 15 pro max with amazing camera.'}
          />
          <Card
            id={1}
            imageUrl={"https://fastly.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0"}
            title={'iphone 15 pro max'}
            description={'This is iphone 15 pro max with amazing camera.'}
          />
          <Card
            id={1}
            imageUrl={"https://fastly.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0"}
            title={'iphone 15 pro max'}
            description={'This is iphone 15 pro max with amazing camera.'}
          />
        </div>
        <Banner/>
      </div>
    </div>
  );
}