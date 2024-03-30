import Card from "../Components/Card";

export default function Product() {
  const cardsData = Array.from({ length: 7 }, (_, index) => ({
    id: index + 1,
    imageUrl: "/iphone15test.png",
    title: "iphone 15 pro max",
    description: "This is iphone 15 pro max with amazing camera.",
  }));

  return (
    <div className="flex gap-4 justify-center items-center bg-ribbon">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 justify-center items-center px-5 py-10">
        {cardsData.map((card) => (
          <div key={card.id} className="mb-10">
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
  );
}

