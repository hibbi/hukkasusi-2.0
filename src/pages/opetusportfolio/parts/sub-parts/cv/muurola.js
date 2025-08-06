import Image from "next/image";

const Muurola = () => {
  return (
    <li className="flex flex-col overflow-hidden relative p-8 bg-violet dark:text-black">
      <h3 className="text-5xl leading-none md:absolute">Harjoittelu</h3>
      <div className="flex flex-col md:items-start md:flex-row justify-between pt-8 md:pt-[unset] gap-12 md:gap-10">
        <div className="flex flex-col md:flex-row md:self-end gap-8 md:gap-10 md:pt-[5.625rem] lg:gap-[7.5625rem] lg:pt-[unset] gap-x-8 font-normal leading-tight justify-between">
          <p className="text-base font-nib flex-1 lg:w-[31.5625rem]">
            Muurolassa opetin sekä ala- että yläkoululla. Alakoulussa pidin
            lumenveistoa sekä camera obscuran; yläkoulussa sommittelua ja
            valokuvausta. Ohjaava opettaja oli Tea Tuiskuvaara.
          </p>
          <p className="text-sm md:w-[16.25rem] lg:w-[17.625rem]">
            2021
            <br />
            lumenveisto
            <br />
            valokuvaus
            <br />
            sommittelu
          </p>
        </div>
        <figure className="w-full flex">
          <Image
            className="object-cover"
            src="/muurola.jpg"
            alt="Muurolan koulu"
            width={500}
            height={264}
          />
        </figure>
      </div>
    </li>
  );
};

export default Muurola;
