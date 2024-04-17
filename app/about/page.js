import { Link } from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function About() {
  const images = [
    {
      src: "/tailwind-logo.png",
      alt: "tailwind-logo.png",
      height: 500,
      width: 500,
    },
    { src: "/git-logo.png", alt: "git-logo.png", height: 1000, width: 1000 },
    {
      src: "/github-logo.png",
      alt: "github-logo.png",
      height: 500,
      width: 500,
    },
    {
      src: "/zustand-logo.png",
      alt: "zustand-logo.png",
      height: 500,
      width: 500,
    },
    { src: "/react-logo.png", alt: "react-logo.png", height: 150, width: 150 },
    {
      src: "/nextjs-logo.png",
      alt: "nextjs-logo.png",
      height: 500,
      width: 500,
    },
    { src: "/js-logo.png", alt: "js-logo.png", height: 500, width: 500 },
    { src: "/html-logo.png", alt: "html-logo.png", height: 90, width: 90 },
    { src: "/css-logo.png", alt: "css-logo.png", height: 115, width: 115 },
    { src: "/mui-logo.png", alt: "css-logo.png", height: 115, width: 115 },
  ];

  return (
    <div className="flex flex-col justify-center gap-5 mb-20">
      <div className="flex flex-col justify-center items-center bg-ribbon py-20">
        <div className="flex flex-col gap-10 mb-10">
          <p className="border-2 border-stone-500 px-10 py-3 font-bold bg-white">
            Next shop
          </p>
          <p className="text-2xl text-center font-bold">Hi!</p>
        </div>
        <div className="flex gap-20 justify-center items-center text-center">
          <div className="flex flex-col gap-5">
            <p>Thank your for checking out my website.</p>
            <p>
              This website is all about showcasing my few learned understanding
              on web development.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center p-10">
        <div className="w-[300px] rounded-2xl overflow-hidden border shadow-2xl">
          <Image
            src="/aboutDesktop1.png"
            alt="aboutDesktop1.png"
            height={500}
            width={500}
          />
        </div>
        <div className="flex flex-col gap-10 max-w-[650px]">
          <p>
            Showcasing my design and concepts with development on new up to date
            remastered websites of 2024.
          </p>
          <p>
            In this website i am showcasing my understanding on development on
            e-comerce websites which is inspired by Apple and Samsung.
          </p>
          <p>
            In this website i am showcasing my understanding on development on
            e-comerce websites which is inspired by Apple and Samsung.
          </p>
        </div>
      </div>
      <div className="px-10 py-5 md:px-20 md:py-10 bg-ribbon ">
        <div className="grid grid-cols-5 md:grid-cols-10 justify-center items-center gap-5">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                className="object-contain h-full"
                src={image.src}
                alt={image.alt}
                height={image.height}
                width={image.width}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center m-10 gap-2">
        <p>
          This Web Application is developed using NEXT.JS 14, utilizing its
          server side and client side capebilities with its great features as
          per update.
        </p>
        <p>
          Web application is based on SPA and no localstorage, sesson storage or
          cookies are included for state management.
        </p>
        <p>
          Designed and developed in just less than a month with professional
          carrier in mind.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-ribbon md:w-[80%] flex flex-col gap-10 text-center px-20 py-10">
          <p className="text-2xl font-bold">My Contact</p>
          <div className="flex flex-col gap-5 ">
            <p className="text-xl font-bold">Mahendra Tamang</p>
            <p>
              <GitHubIcon fontSize="large" />{" "}
              <Link href="https://github.com/tmg-m">tmg-m</Link>
            </p>
            <p>
              <LinkedInIcon fontSize="large" /> {" "}
              <Link href="https://www.linkedin.com/in/mahendra-tamang/">
                tmg-m
              </Link>
            </p>
            <p>
              <EmailIcon fontSize="large" /> bus.mahendrat@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
