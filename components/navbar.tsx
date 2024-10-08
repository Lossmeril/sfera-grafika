import Link from "next/link";

interface NavbarLinkProps {
  link: string;
  children: React.ReactNode;
  blank?: boolean;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, link, blank }) => {
  return (
    <Link href={link} className="" target={blank ? "_blank" : ""}>
      <li className="w-fit mx-auto">
        <span className="underline-link">{children}</span>
      </li>
    </Link>
  );
};

const Navbar = () => {
  return (
    <ul className="px-8 py-4 lg:py-20 text-center hidden lg:block">
      <h4>Prvky</h4>
      <NavbarLink link={"/"}>Sady prvků</NavbarLink>
      <NavbarLink link={"/"}>Zakázané prvky</NavbarLink>

      <h4 className="mt-10">Jak se to píše?</h4>
      <NavbarLink link={"/copy/sfera"}>SFÉRA</NavbarLink>
      <NavbarLink link={"/copy/datumy"}>Datumy a časy</NavbarLink>

      <h4 className="mt-10">Odkazy na SharePoint</h4>
      <NavbarLink
        link={
          "https://sferapardubice.sharepoint.com/:f:/s/SFERA/Es0LEpuZCf9PkOHb8IMDEosBaZhIxzIB1I0EofrNn9oUzg?e=QRNKWu"
        }
        blank
      >
        Sady obrázků
      </NavbarLink>
    </ul>
  );
};

export default Navbar;
