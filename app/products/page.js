import Card from "../Components/Card";

export default function Product() {
  const cardsData = {
    phone: Array.from({ length: 5 }, (_, index) => ({
      type: "phone",
      id: index + 1,
      imageUrl: "/iphone15test.png",
      title: "iphone 15 pro max",
      description: "This is iphone 15 pro max with amazing camera.",
    })),
    tablet: Array.from({ length: 3 }, (_, index) => ({
      type: "tablet",
      id: index + 1,
      imageUrl: "/samsungTablet.png",
      title: "Samsung Tablet",
      description: "Samsung tablet with amazing features.",
    })),
    tv: Array.from({ length: 4 }, (_, index) => ({
      type: "tv",
      id: index + 1,
      imageUrl: "/iphone15test.png",
      title: "Samsung TV",
      description: "Samsung TV with amazing display.",
    })),
    extra: Array.from({ length: 3 }, (_, index) => ({
      type: "accessories",
      id: index + 1,
      imageUrl: "/samsungTablet.png",
      title: "Airbuds",
      description: "Samsung Airbuds with amazing sound quality.",
    })),
  };

  return (
    <div className="flex flex-col">
      <div>filters functionality</div>
      <div className="felx flex-col bg-ribbon p-2 md:px-60">
        {Object.keys(cardsData).map((type) => (
          <div key={type} className="px-5 py-5 md:py-10">
            <h1>{type}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 justify-center items-center mt-5">
              {cardsData[type]?.map((card) => (
                <div key={card.id}>
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
        ))}
      </div>
    </div>
  );
}
