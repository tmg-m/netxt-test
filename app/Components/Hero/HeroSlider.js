"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider({ id }) {
  const slides = ["/samsunghero.png", "/heroImg.jpg", "/samsungPhone.png"];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const switchToNextSlide = () => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
    const interval = setInterval(switchToNextSlide, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideClick = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="flex flex-col justify-center items-center py-5 md:py-10 md:pb-10 w-100">
      <div className="h-[300px] md:h-[500px] w-full relative overflow-hidden">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide}
            alt={`Image`}
            layout="fill"
            objectFit="contain"
            className={`absolute transition-opacity duration-500 ${
              index === currentSlideIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-5 md:mt-10">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`bg-stone-500 rounded-lg ${
              index === currentSlideIndex ? "bg-stone-700 p-1.5" : "p-1"
            }`}
            onClick={() => handleSlideClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

