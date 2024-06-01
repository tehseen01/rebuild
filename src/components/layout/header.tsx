"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import useScrollPosition from "@/hooks/use-scroll-position";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const { isHeaderFixed, prevScrollPos } = useScrollPosition({
    initialPosition: 0,
    threshold: 50,
  });

  return (
    <header
      className={cn(
        "px-2 sm:px-6 md:px-10 h-14 flex items-center border-b transition-transform delay-150",
        isHeaderFixed
          ? "sticky top-0 inset-x-0 backdrop-blur-md z-20 translate-y-0"
          : prevScrollPos > 0 && "-translate-y-full"
      )}
    >
      <Link className="flex items-center justify-center z-20" href="/">
        <span className="text-xl font-bold font-grotesque">ReBuild</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 max-md:hidden">
        {links.map((link, idx) => (
          <Link
            key={idx}
            className="text-secondary-foreground hover:underline underline-offset-[22px]"
            href={link.path}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="ml-auto z-20 md:hidden">
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setShowNav(!showNav)}
          className="size-8"
        >
          {!showNav ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>
      <div
        className={cn(
          "fixed inset-0 bg-black/30 z-10 md:hidden transition-opacity",
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={(e) => e.target === e.currentTarget && setShowNav(false)}
      >
        <div
          className={cn(
            "w-10/12 bg-background h-dvh pt-[3.5rem] transition-transform",
            showNav ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className=" border-t px-2 pt-5">
            <ul className="flex items-center flex-col ">
              {links.map((link, idx) => (
                <li key={idx} className="w-full">
                  <Link
                    onClick={() => setShowNav(false)}
                    href={link.path}
                    className="hover:bg-gray-200 w-full block p-2 rounded-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const links = [
  {
    label: "Create Resume",
    path: "/builder",
  },
  {
    label: "Cover Letter",
    path: "/letter",
  },
  {
    label: "Feedback",
    path: "",
  },
];
