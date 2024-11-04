import { navbarItems } from "@/datasets/navbarItems";

const Navbar = () => {
  return (
    <ul className="px-8 py-4 lg:py-10 text-center hidden lg:flex flex-col">
      {navbarItems}
    </ul>
  );
};

export default Navbar;
