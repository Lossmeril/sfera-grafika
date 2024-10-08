import Navbar from "@/components/navbar";
import Link from "next/link";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="border-b h-[5vh]">
        <div className="border-x h-[5vh] mx-5 sm:mx-10 lg:mx-20"></div>
      </div>

      {/* --- HLAVIČKA --- */}
      <header className="border-b h-auto lg:h-[13vh] flex flex-col justify-center overflow-hidden">
        <div className=" mx-5 sm:mx-10 lg:mx-20 grid grid-cols-5">
          {/* --- LOGO V HLAVIČCE --- */}
          <div className="border-b border-x lg:border-b-0 col-span-5 lg:col-span-1 flex flex-col justify-center items-start lg:items-center">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/logo.svg"
                alt="logo SFÉRA"
                className="px-5 lg:px-5 xl:px-10 py-2 lg:py-10 w-[150px] md:w-[250px] lg:w-[300px]"
              />
            </Link>
          </div>
          {/* --- NÁZEV STRÁNKY --- */}
          <div className="px-8 lg:px-20 py-4 lg:py-10 flex flex-col justify-center col-span-5 lg:col-span-4 border-x lg:border-l-0 lg:border-r">
            <Link href="/">
              <h1 className="">Manuál pro práci se značkou SFÉRA</h1>
            </Link>
          </div>
        </div>
      </header>

      {/* --- HLAVNÍ STRÁNKA --- */}
      <main className="">
        <div className="grid grid-cols-5 mx-5 sm:mx-10 lg:mx-20">
          {/* --- BOČNÍ MENU --- */}
          <nav className="col-span-5 border-x border-b lg:col-span-1">
            <Navbar />
            <div className="flex flex-row items-center w-full h-10 lg:hidden px-8 py-4 lg:py-20">
              Mobile menu here
            </div>
          </nav>

          {/* --- STRÁNKA --- */}
          <section className="col-span-5 border-r border-l border-b lg:col-span-4 lg:border-l-0 h-auto lg:h-[70vh] overflow-y-auto lg:overflow-y-scroll">
            <div className="">{children}</div>
          </section>
        </div>
      </main>
      <footer className="border-b">
        <div className="px-8 lg:px-20 border-x mx-5 sm:mx-10 lg:mx-20 h-[7vh] flex flex-col justify-center">
          <p className="m-0 text-sm">Made with React, love and Cor-Ten</p>
        </div>
      </footer>
      <div className="border-b h-[5vh]">
        <div className="border-x h-[5vh] mx-5 sm:mx-10 lg:mx-20"></div>
      </div>
    </>
  );
};

export default MainLayout;
