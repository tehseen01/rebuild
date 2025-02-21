import Link from "next/link";
import React from "react";
import { Icons } from "../shared";

export const Footer = () => {
  return (
    <footer className="container-wrapper py-8">
      <div className="container space-y-4">
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <Link href={"/"}>Rebuild</Link>
            <p className="font-medium">
              Discover the easiest way to build your resume!
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link href={"/"}>
              <Icons.Twitter className="size-5" />
            </Link>
            <Link href={"/"}>
              <Icons.Instagram className="size-5" />
            </Link>
            <Link href={"/"}>
              <Icons.LinkedIn className="size-5" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Copyright © {new Date().getFullYear()} Rebuild. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <Link
              href={"/terms-of-service"}
              className="hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <Link
              href={"/privacy-policy"}
              className="hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
