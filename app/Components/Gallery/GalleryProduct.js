"use client"
import Image from "next/image";

export default function GalleryProduct({ galleryImg }) {
  
  return (
    <>
      {galleryImg && (
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-3 md:gap-5 md:flex-row rounded-3xl overflow-hidden shadow-2xl w-full max-h-[600px]">
            {galleryImg && (
              <div className="flex items-center justify-center md:w-[60%] bg-white shadow-2xl p-3">
                <Image
                  src={galleryImg.main}
                  className="object-contain p-5"
                  alt={`image`}
                  height={300}
                  width={300}
                />
              </div>
            )}
            <div className="flex justify-between md:grid md:grid-cols-1 gap-3 md:gap-5 md:grid-rows-2 md:flex-col md:w-[40%]">
              {galleryImg.sub.primary && (
                <div className="flex items-center justify-center shadow-2xl bg-white p-3 w-[50%] md:w-full">
                  <Image
                    src={galleryImg.sub.primary}
                    className="object-contain h-full"
                    alt={`image`}
                    height={300}
                    width={300}
                  />
                </div>
              )}
              {galleryImg.sub.secondary && (
                <div className="flex items-center justify-center bg-white shadow-2xl p-3 w-[50%] md:w-full">
                  <Image
                    src={galleryImg.sub.secondary}
                    className="object-contain h-full"
                    alt={`image`}
                    height={300}
                    width={300}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
