import Navbar from "@/components/navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="m-[10vh] ">
      <div className="px-20 py-10 bordered">
        <h1 className="font-youth font-bold text-4xl">
          Manuál pro práci se značkou SFÉRA
        </h1>
      </div>
      <div className="flex flex-row flex-nowrap ">
        {/* --- BOČNÍ MENU --- */}
        <nav className="w-1/5 p-20 bordered">
          <Navbar />
        </nav>

        {/* --- STRÁNKA --- */}
        <main className="w-4/5 p-20 bordered">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
