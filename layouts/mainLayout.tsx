import Navbar from "@/components/navbar";
import Link from "next/link";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="border-b h-10">
        <div className="border-x h-10 mx-5 sm:mx-10 md:mx-20"></div>
      </div>
      <header className="border-b">
        <div className="px-20 py-10 border-x mx-5 sm:mx-10 md:mx-20">
          <Link href="">
            <h1 className="text-">Manuál pro práci se značkou SFÉRA</h1>
          </Link>
        </div>
      </header>
      <main className="border-b">
        <div className="grid grid-cols-5 mx-5 sm:mx-10 md:mx-20">
          {/* --- BOČNÍ MENU --- */}
          <nav className="col-span-5 border-x border-b md:col-span-1 md:border-b-0">
            <div className="">
              <Navbar />
            </div>
          </nav>

          {/* --- STRÁNKA --- */}
          <section className="col-span-5 border-r border-l md:col-span-4 md:border-l-0">
            <div className="">{children}</div>
          </section>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
