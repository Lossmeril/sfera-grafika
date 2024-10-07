import Navbar from "@/components/navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="m-[10vh] border">
      <div className="">
        <h1>Manuál pro práci se značkou SFÉRA</h1>
      </div>
      <div className="flex flex-row flex-nowrap ">
        <nav className="w-1/5 bg-blue-500">
          <Navbar />
        </nav>
        <main className="w-4/5 bg-red-500">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
