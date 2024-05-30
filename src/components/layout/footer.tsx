import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-sm">
        © {new Date().getFullYear()} ReBuild. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-sm hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
        <Link className="text-sm hover:underline underline-offset-4" href="#">
          About
        </Link>
        <Link className="text-sm hover:underline underline-offset-4" href="#">
          Contact
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
