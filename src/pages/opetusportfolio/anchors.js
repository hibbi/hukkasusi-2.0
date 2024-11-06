import Link from "next/link";

const Menu = () => {
  return (
    <div className="md:col-span-12 flex flex-col pt-8 pb-20">
      <ul className="border-b-2 border-b-black">
        <li className="relative text-center font-thin text-[6.666vw] py-4 flex border-t-2 border-t-black">
          <div className="flex justify-center leading-tight flex-grow text-center tracking-tighter">
            <Link href="#epilogue">Johdanto</Link>
          </div>
        </li>
        <li className="relative text-center font-thin text-[6.666vw] py-4 flex border-t-2 border-t-black">
          <div className="flex justify-center leading-tight flex-grow text-center tracking-tighter">
            <Link href="#teacher_of_art">1.1. Kuvataiteen opettajana</Link>
          </div>
        </li>
        <li className="relative text-center font-thin text-[6.666vw] py-4 flex border-t-2 border-t-black">
          <div className="flex justify-center leading-tight flex-grow text-center tracking-tighter">
            <Link href="#teacher_of_photography">
              1.2. Valokuvan opettajana
            </Link>
          </div>
        </li>
        <li className="relative text-center font-thin text-[6.666vw] py-4 flex border-t-2 border-t-black">
          <div className="flex justify-center leading-tight flex-grow text-center tracking-tighter">
            <Link href="#who_am_i">2. Taiteilija, opettaja vai tutkija</Link>
          </div>
        </li>
        <li className="relative text-center font-thin text-[6.666vw] py-4 flex border-t-2 border-t-black">
          <div className="flex justify-center leading-tight flex-grow text-center tracking-tighter">
            <Link href="#ecological_thinking">
              3. Ekologisista katastrofeista
            </Link>
          </div>
        </li>
        <li className="relative text-center font-thin text-[6.666vw] py-4 flex border-t-2 border-t-black">
          <div className="flex justify-center leading-tight flex-grow text-center tracking-tighter">
            <Link href="#critic">4. Palaute / kritiikki</Link>
          </div>
        </li>
        <li className="relative text-center font-thin text-[6.666vw] py-4 flex border-t-2 border-t-black">
          <div className="flex justify-center leading-tight flex-grow text-center tracking-tighter">
            <Link href="#in_the_end">
              5. Lopuksi: tulevaisuudesta ja sen odottamattomuudesta
            </Link>
          </div>
        </li>
        <li className="relative text-center font-thin text-[6.666vw] py-4 flex border-t-2 border-t-black">
          <div className="flex justify-center leading-tight flex-grow text-center tracking-tighter">
            <Link href="#list_of_sources">
              Lähteet
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Menu;