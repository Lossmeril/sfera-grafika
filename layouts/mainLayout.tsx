import Navbar from "@/components/navbar";
import Link from "next/link";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="border-b h-[5vh]">
        <div className="border-x h-[5vh] mx-5 sm:mx-10 md:mx-20"></div>
      </div>
      <header className="border-b h-[13vh] flex flex-col justify-center">
        <div className="px-8 md:px-20 py-10 border-x mx-5 sm:mx-10 md:mx-20">
          <Link href="/">
            <h1 className="text-">Manuál pro práci se značkou SFÉRA</h1>
          </Link>
        </div>
      </header>
      <main className="">
        <div className="grid grid-cols-5 mx-5 sm:mx-10 md:mx-20">
          {/* --- BOČNÍ MENU --- */}
          <nav className="col-span-5 border-x border-b md:col-span-1">
            <Navbar />
          </nav>

          {/* --- STRÁNKA --- */}
          <section className="col-span-5 border-r border-l border-b md:col-span-4 md:border-l-0 h-auto md:h-[70vh] overflow-y-auto md:overflow-y-scroll">
            <div className="">{children}</div>
          </section>
        </div>
      </main>
      <footer className="border-b">
        <div className="px-8 md:px-20 border-x mx-5 sm:mx-10 md:mx-20 h-[7vh] flex flex-col justify-center">
          <p className="m-0 text-sm">Made with React, love and Cor-Ten</p>
        </div>
      </footer>
      <div className="border-b h-[5vh]">
        <div className="border-x h-[5vh] mx-5 sm:mx-10 md:mx-20"></div>
      </div>
    </>
  );
};

export default MainLayout;
