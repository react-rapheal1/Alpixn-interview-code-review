"use client";

import Image from "next/image";
import routes from "@/routes";
import Link from "next/link";
import { alpinx } from "@/assets/images";
import { NavItems } from "./NavItems";
import { Button } from "../ui/button";


const NavBar = () => {
  return (
    <nav className="bg-white w-full fixed top-0 h-[72px] z-102">
      <div className="grid grid-cols-[auto,auto] items-center h-full lg:px-20 px-10">
        <div className="lg:flex lg:items-center lg:gap-x-3 justify-between">
          <Link href={routes.REMOTE_HOME}>
            <Image src={alpinx} alt="alpinx_logo" />
          </Link>
          <div className="lg:block hidden">
            <NavItems />
          </div>
          <div>
            <Button className="bg-blue-400">
            Contact Us
          </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

