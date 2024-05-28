import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-dvh">
      <div className="grid mx-auto px-4 sm:px-6 md:px-10 md:grid-cols-2 pt-10">
        <div className="self-center">
          <h1 className="lg:leading-[0.85] text-3xl tracking-tight sm:text-4xl md:text-[4rem] font-extrabold">
            Craft ATS friendly Resumes & Cover Letters that Land Interviews
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Our resume builder makes it easy to craft a standout resume that
            showcases your skills and experience.
          </p>
          <div className="space-x-4 mt-6">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/images/hero.svg"}
            width={500}
            height={500}
            alt="hero section"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
