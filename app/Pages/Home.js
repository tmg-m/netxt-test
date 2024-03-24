import Banner from "../Components/Banner";
import Card from "../Components/Card";
import SbMain from "../Components/SearchBar/SbMain";

export default function Home() {
  return (
    <div className="flex flex-col justify-center"> 
      <SbMain />
      <div class="mx-5">
        <p class="mb-8">Next js test home</p>
        <Card/>
        <Banner/>
      </div>
    </div>
  );
}
