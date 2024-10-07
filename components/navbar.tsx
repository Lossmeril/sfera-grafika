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

const pages: Link[] = [
  { displayText: "Datumy a časy", link: "/datumy" },
  { displayText: "Učebny", link: "" },
];

const Navbar = () => {
  return (
    <ul className="">
      {pages.map((page) => (
        <NavbarLink key={page.link} link={page.link}>
          {page.displayText}
        </NavbarLink>
      ))}
    </ul>
  );
};

export default Navbar;
