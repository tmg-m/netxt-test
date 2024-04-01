import Card from "@/app/Components/Card";

export default function ProductType({ params }) {
  const cardsData = {
    phone: Array.from({ length: 5 }, (_, index) => ({
      type: "phone",
      id: index + 1,
      imageUrl: "/iphone15test.png",
      title: "iphone 15 pro max",
      description: "This is iphone 15 pro max with amazing camera.",
    })),
    tablets: Array.from({ length: 6 }, (_, index) => ({
      type: "tablet",
      id: index + 1,
      imageUrl: "/samsungTablet.png",
      title: "Samsung Tablet",
      description: "Samsung tablet with amazing features.",
    })),
    tv: Array.from({ length: 7 }, (_, index) => ({
      type: "tv",
      id: index + 1,
      imageUrl: "/iphone15test.png",
      title: "Samsung TV",
      description: "Samsung TV with amazing display.",
    })),
    accessories: Array.from({ length: 3 }, (_, index) => ({
      type: "accessories",
      id: index + 1,
      imageUrl: "/airpodpro1.png",
      title: "Airbuds",
      description: "Apple Airpods with amazing sound quality.",
    })),
  };

  const productType = params.productType;

  return (
    <div className="flex flex-col justify-center">
      <p className="mb-5">Products page {productType}</p>
      <div className="flex gap-4 justify-center items-center bg-ribbon">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 justify-center items-center px-5 py-10">
          {cardsData[productType]?.map((card) => (
            <div key={card.id} className="flex justify-center items-center mb-10 max-w-[300px]">
              <Card
                key={card.id}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
