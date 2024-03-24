import Banner from "../Components/Banner";
import Card from "../Components/Card";

export default function Home() {
  return (
    <div className="flex flex-col justify-center"> 
      <div class="mx-5">
        <p class="mb-8">My Home page</p>
        <Card/>
        <Banner/>
      </div>
    </div>
  );
}
