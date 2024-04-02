import Image from "next/image";

export default function GalleryProduct({ galleryImg }) {
  return (
    <>
      {galleryImg && (
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-3 md:gap-5 md:flex-row rounded-3xl overflow-hidden shadow-2xl w-full">
            {galleryImg[0] && (
              <div className="flex items-center justify-center md:w-[60%] bg-white shadow-2xl">
                <Image
                  src={galleryImg[0]}
                  className="object-contain"
                  alt={`image`}
                  height={400}
                  width={400}
                />
              </div>
            )}
            <div className="flex justify-between md:grid md:grid-cols-1 gap-3 md:gap-5 md:grid-rows-2 md:flex-col md:w-[40%]">
              {galleryImg[1] && (
                <div className="flex items-center justify-center shadow-2xl bg-white">
                  <Image
                    src={galleryImg[1]}
                    className="object-contain"
                    alt={`image`}
                    height={400}
                    width={400}
                  />
                </div>
              )}
              {galleryImg[2] && (
                <div className="flex items-center justify-center bg-white shadow-2xl">
                  <Image
                    src={galleryImg[2]}
                    className="object-contain"
                    alt={`image`}
                    height={400}
                    width={400}
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
