import CtaBtn from "@/app/Components/Button/CtaBtn";
import Image from "next/image";

export default function ProductId({ params }) {
  /* const { productType, productId } = params; */

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row bg-ribbon w-full justify-center p-10 gap-10 md:gap-20">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-3 md:gap-5 md:flex-row rounded-3xl overflow-hidden shadow-2xl w-full">
            <div className="flex items-center justify-center md:w-[60%] bg-white shadow-2xl">
              <Image
                src={"/samsungPhone1.png"}
                className="object-contain bg-white"
                alt={`image`}
                height={400}
                width={400}
              />
            </div>
            <div className="flex justify-between md:grid md:grid-cols-1 gap-3 md:gap-5 md:grid-rows-2 md:flex-col md:w-[40%]">
              <div className="flex items-center justify-center shadow-2xl">
                <Image
                  src={"/samsungPhone1.png"}
                  className="object-contain bg-white"
                  alt={`image`}
                  height={400}
                  width={400}
                />
              </div>
              <div className="flex items-center justify-center bg-white shadow-2xl">
                <Image
                  src={"/samsungPhone1.png"}
                  className="object-contain bg-white"
                  alt={`image`}
                  height={400}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between md:min-w-[300px] md:max-w-[400px]">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <p>Apple</p>
              <p className="text-4xl">Iphone 15 pro max asdfasdf</p>
              <p className="text-2xl">$1500</p>
            </div>
            <div className="flex flex-col mt-10 gap-3">
              <div className="flex p-5 justify-between items-center bg-white shadow-md rounded-xl cursor-pointer">
                <p>128 GB</p>
                <p>$1000</p>
              </div>
              <div className="flex p-5 justify-between items-center bg-white shadow-md rounded-xl cursor-pointer">
                <p>256 GB</p>
                <p>$1200</p>
              </div>
              <div className="flex p-5 justify-between items-center bg-white shadow-md rounded-xl cursor-pointer">
                <p>512 GB</p>
                <p>$1500</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 gap-5">
            <CtaBtn id={1} typeBtn={"checkout"} />
            <CtaBtn id={1} typeBtn={"basket"} />
          </div>
        </div>
      </div>
      <div className="w-full p-20">
        <div>
          <p>discription</p>
        </div>
      </div>
    </div>
  );
}
