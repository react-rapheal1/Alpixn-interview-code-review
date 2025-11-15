"use client";

import Image from "next/image";
import routes from "@/routes";
import Link from "next/link";
import { alpinx } from "@/assets/images";
import { NavItems } from "./NavItems";
import { Button } from "../ui/button";
import { useState } from "react";
import { SquareMenu } from 'lucide-react';
import { X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full fixed top-0 h-[72px] z-50">
      <div className="flex items-center justify-between h-full lg:px-20 px-10">

        <Link href={routes.REMOTE_HOME}>
          <Image src={alpinx} alt="alpinx_logo" />
        </Link>

        <div className="hidden xl:block">
          <NavItems />
        </div>

        <div className="hidden xl:block">
          <Button className="bg-blue-400">Contact Us</Button>
        </div>

        <SquareMenu 
          className="xl:hidden text-black text-3xl"
          onClick={() => setIsMenuOpen(true)}
        />  
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 w-[80%] h-full bg-[#0a0a0a] z-50 overflow-y-auto xl:hidden">
            <X
               className="absolute top-4 right-6 text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
            />

            <div className="pt-16 px-6">
              <NavItems mobile />
              <div className="mt-6">
                <Button className="bg-blue-400 w-full">Contact Us</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;