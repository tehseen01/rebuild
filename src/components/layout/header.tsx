import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-provider";

export const Header = () => {
  return (
    <header className="before:absolute before:bottom-0 before:h-px before:inset-x-10 before:bg-[linear-gradient(to_right,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))] relative">
      <div className="container-wrapper relative">
        <div className="before:absolute before:-left-0.5 before:-bottom-0.5 before:size-1 before:bg-ring after:absolute after:-right-0.5 after:-bottom-0.5 after:size-1 after:bg-ring" />
        <div className="flex container items-center justify-between py-4 h-14">
          <Link href="/" className="text-2xl font-bold">
            Rebuild
          </Link>
          <nav>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};
