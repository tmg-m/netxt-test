import Banner from "../Components/Banner";
import Card from "../Components/Card";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center"> 
      <p class="mb-8">Next js test home</p>
      <Card/>
      <Banner/>
    </div>
  );
}
