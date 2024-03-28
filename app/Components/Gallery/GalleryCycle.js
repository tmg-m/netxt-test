import Image from "next/image";

export default function GalleryCycle() {
  const ImagesURL = [
    "https://fastly.picsum.photos/id/121/800/500.jpg?hmac=gLwxO0vi9Z0866UIQuisCQ2hU_EcFDOwDPcHaraYzgs",
    "https://fastly.picsum.photos/id/197/800/500.jpg?hmac=_1FsJF7nVOh_947d0rS9fXa-_cMGn7WyK0D2GRlv9Mo",
    "https://fastly.picsum.photos/id/77/800/500.jpg?hmac=t0e6z0Dz5ikZyOHngyNIjZv9l2PbT0DM1UVwFLFvSeQ",
    "https://fastly.picsum.photos/id/193/800/500.jpg?hmac=BGVYvUv0Zp3x25HD6lFCMR8VhOWE6YitVnV0in4WvTk",
    "https://fastly.picsum.photos/id/219/800/500.jpg?hmac=XNeOJOXGPiaifsmBtcVYMDutANQJirvAhFgXmeYTs2Y",
    "https://fastly.picsum.photos/id/59/800/500.jpg?hmac=8a-15mf0CC224f-fb6ZVmwCQ21iKL9K_YVWFW3HtysA",
    "https://fastly.picsum.photos/id/103/800/500.jpg?hmac=KZ6dkXxlup8OONCF8sDQcAQt2zo9B6FNf5CBywHU8Rg",
    "https://fastly.picsum.photos/id/144/800/500.jpg?hmac=yezG8mHf_22wI-UZ4ah6UkzpaZfZ3DIhoIT4nUTg9ZI",
    "https://fastly.picsum.photos/id/1002/800/500.jpg?hmac=HB2dsrXHS8TFUYRMgPfd0qZZKqxA5EBsibOmmd8iU4o",
    "https://fastly.picsum.photos/id/656/800/500.jpg?hmac=VsO7TVUR4hlp5-gvjA0yPvDIbVJl4RdRWhhYyj8vGuY"
  ];

  const allImages = ImagesURL.concat(ImagesURL); // Duplicate the images

  return (
    <div className="overflow-hidden whitespace-nowrap bg-ribbon">
      <div className="flex logos-slides">
        {allImages.map((url, index) => (
          <Image className="mr-5" key={index} src={url} alt={`Image ${index + 1}`} width={400} height={400} />
        ))}
      </div>
    </div>
  );
}
