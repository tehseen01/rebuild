import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import CustomChip from "../shared/custom-chip";
import Image from "next/image";

const Templates = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div>
              <CustomChip className="px-3 py-1">Resume Templates</CustomChip>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Showcase Your Unique Style
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose from a variety of ATS-friendly designed resume templates to
              make your application stand out.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:max-w-6xl">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Card
              key={idx}
              className="bg-white dark:bg-gray-950 shadow-sm transition-all hover:shadow-lg group relative overflow-hidden"
            >
              <div className="space-y-4">
                <Image
                  alt="Resume Template 1"
                  className="rounded-md"
                  height={500}
                  src="/images/cv-template.webp"
                  width={500}
                />
              </div>
              <div className="absolute top-0 left-0 size-full backdrop-blur-sm flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity">
                <Button size={"lg"}>Use Template</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
