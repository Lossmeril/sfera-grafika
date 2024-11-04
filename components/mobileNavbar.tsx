"use client";

import { navbarItems } from "@/datasets/navbarItems";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

interface MobileMenuProps {
  active: boolean;
  menuToggle: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ active, menuToggle }) => {
  const handleMenuClose = () => {
    menuToggle(false);
  };

  const pathname = usePathname();

  useEffect(() => {
    handleMenuClose();
  }, [pathname]);

  return (
    <nav
      className="pb-12 list-none w-screen h-screen bg-black text-white fixed top-0 left-0 z-10 mobile-menu"
      style={{
        left: !active ? "-100vw" : "0",
        transition: "all ease-in-out 0.5s",
      }}
    >
      <div
        className="absolute top-12 right-12 cursor-pointer"
        onClick={() => handleMenuClose()}
      >
        <IoMdClose size={24} />
      </div>
      <ul className="flex flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        {navbarItems}
      </ul>
    </nav>
  );
};

const MobileNavbar = () => {
  const [mobileNavActive, setMobileNav] = useState(false);

  const handleMenuOpen = () => {
    setMobileNav(true);
  };

  return (
    <>
      <div className="inline-block lg:hidden">
        <div onClick={() => handleMenuOpen()}>
          <GiHamburgerMenu size={24} className="cursor-pointer" />
        </div>
        <MobileMenu active={mobileNavActive} menuToggle={setMobileNav} />
      </div>
    </>
  );
};

export default MobileNavbar;
