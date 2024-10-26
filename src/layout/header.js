import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between my-4 mx-8">
      <div className="flex flex-col">
        <Link href="/">Samuli Susihukka</Link>
        <span>kuvataiteilija</span>
      </div>
      <div className="flex flex-col">
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/cv">Curriculum</Link>
      </div>
    </header>
  );
};

export default Header;
