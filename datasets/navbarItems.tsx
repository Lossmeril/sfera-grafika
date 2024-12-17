import Link from "next/link";

interface NavbarLinkProps {
  link: string;
  children: React.ReactNode;
  blank?: boolean;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, link, blank }) => {
  return (
    <Link href={link} className="menu-link" target={blank ? "_blank" : ""}>
      <li className="mx-auto">
        <span className="underline-link">{children}</span>
      </li>
    </Link>
  );
};

export const navbarItems = (
  <>
    <h4 className="menu-heading">Identita</h4>
    {/* <NavbarLink link={"/identita/logo"}>Logo</NavbarLink> */}
    <NavbarLink link={"/identita/nazev"}>Název instituce</NavbarLink>
    <NavbarLink link={"/identita/barvy"}>Barvy</NavbarLink>
    <NavbarLink link={"/identita/fonty"}>Fonty</NavbarLink>

    <h4 className="menu-heading">Prvky</h4>
    <NavbarLink link={"/prvky/sady"}>Sady prvků</NavbarLink>
    <NavbarLink link={"/prvky/zakazane-prvky"}>Zakázané prvky</NavbarLink>
    <NavbarLink link={"/prvky/sada-misc"}>Sada Misc.</NavbarLink>
    <NavbarLink link={"/prvky/unikatni-sady"}>Unikátní prvky</NavbarLink>

    <h4 className="menu-heading">Jak se to píše?</h4>
    <NavbarLink link={"/copy/sfera"}>SFÉRA</NavbarLink>
    <NavbarLink link={"/copy/dilny-laboratore"}>Dílny a laboratoře</NavbarLink>
    <NavbarLink link={"/copy/datumy"}>Datumy a časy</NavbarLink>

    <h4 className="menu-heading">Odkazy na SharePoint</h4>
    <NavbarLink
      link={
        "https://sferapardubice.sharepoint.com/:f:/s/SFERA/Es0LEpuZCf9PkOHb8IMDEosBaZhIxzIB1I0EofrNn9oUzg?e=QRNKWu"
      }
      blank
    >
      Sady obrázků
    </NavbarLink>
  </>
);
