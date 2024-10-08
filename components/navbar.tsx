import Link from "next/link";

type Link = {
  displayText: string;
  link: string;
};

interface NavbarLinkProps {
  link: string;
  children: React.ReactNode;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, link }) => {
  return (
    <Link href={link} className="">
      <li className="w-fit mx-auto">
        <p className="underline-link">{children}</p>
      </li>
    </Link>
  );
};

const Navbar = () => {
  return (
    <ul className="p-20 text-center">
      <h3>Jak se to píše?</h3>
      <NavbarLink link={"/copy/sfera"}>SFÉRA</NavbarLink>
      <NavbarLink link={"/copy/datumy"}>Datumy a časy</NavbarLink>
    </ul>
  );
};

export default Navbar;
