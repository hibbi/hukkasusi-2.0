import Image from "next/image";

const DogPhoto = () => {
  return (
    <figure className="w-screen md:w-full relative flex">
      <Image
        className="object-cover w-full"
        src={"/master-kansi.jpg"}
        width={1024}
        height={683}
        alt="Koiraphoto"
      />
    </figure>
  );
}

export default DogPhoto;