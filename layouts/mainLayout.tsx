import Navbar from "@/components/navbar";
import Link from "next/link";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="bordered h-10">
        <div className="bordered mx-20 h-10"></div>
      </div>
      <header className="bordered">
        <div className="px-20 py-10 mx-20 bordered">
          <Link href="">
            <h1 className="text-">Manuál pro práci se značkou SFÉRA</h1>
          </Link>
        </div>
      </header>
      <main className="bordered">
        <div className="grid grid-cols-5 mx-20">
          {/* --- BOČNÍ MENU --- */}
          <nav className="col-span-5 bordered md:col-span-1">
            <div className="p-20">
              <Navbar />
            </div>
          </nav>

          {/* --- STRÁNKA --- */}
          <section className="col-span-5 bordered second md:col-span-4">
            <div className="p-20">{children}</div>
          </section>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
