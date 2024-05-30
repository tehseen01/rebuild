import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";
import CustomChip from "../shared/custom-chip";

const Hero = () => {
  return (
    <section className="w-full h-dvh">
      <div className="grid mx-auto px-2 sm:px-6 md:px-10 md:grid-cols-2 pt-10 gap-4">
        <div className="self-center space-y-4">
          <Link
            href="https://twitter.com/tehseen_type"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full px-4 bg-secondary"
            )}
            target="_blank"
          >
            <span className="mr-3">🎉</span> The Ultimate Resume Builder
          </Link>
          <h1 className="md:leading-[0.85]  text-5xl tracking-tight md:text-[4rem] font-extrabold">
            Build <CustomChip>ATS</CustomChip>-beating resume that get you
            <CustomChip>noticed</CustomChip>.
          </h1>
          <p className="mx-auto text-secondary-foreground md:text-xl">
            Our resume builder makes it easy to craft a standout resume that
            showcases your skills and experience.
          </p>
          <Button className="mt-6" size={"lg"}>
            <Link href="/builder" className="flex gap-2 items-center">
              Create My Resume <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/images/job-application-2.svg"}
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
