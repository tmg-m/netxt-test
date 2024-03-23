import Image from "next/image";

export default function Card() {
  return (
    <div className="flex flex-col justify-center mb-8">
      <div className="relative">
        <p className="absolute">iphone 15 pro max</p>
        <Image
          src="https://fastly.picsum.photos/id/443/200/300.jpg?hmac=lXwP6DouUwgwHCQ9ZcgkX6W237U8PAyS9o-YAD1zvN8"
          alt="iphone 15 pro max"
          width={200}
          height={300}
        />
      </div>
      <div>
        <p>aklsdhjfklasdjfklasdjflkaj</p>
        <p>sdafsdafasdfasdfasdfasdfas</p>
      </div>
    </div>
  );
}
