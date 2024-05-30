import React from "react";
import CustomChip from "../shared/custom-chip";
import { Icons } from "../shared/icons";
import { features } from "@/config/landing";

const FeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-10 ">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="">
              <CustomChip className="px-3 py-1 before:rotate-[-3deg]">
                Key Features
              </CustomChip>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Streamline Your Resume Creation
            </h2>
            <p className="max-w-[900px] text-secondary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our resume builder provides a range of features to help you create
              a professional resume quickly and easily.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = Icons[(feature.icon || "check") as keyof typeof Icons];
            return (
              <div key={idx} className="grid gap-1">
                <div className="flex items-center gap-2">
                  <Icon className="size-6 text-secondary-foreground" />
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                </div>
                <p className="text-sm text-secondary-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
