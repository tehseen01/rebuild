"use client";

import React, { useState } from "react";
import { testimonials } from "@/config/landing";
import Image from "next/image";
import useMediaQuery from "@/hooks/use-media-query";
import { Button } from "../ui/button";
import CustomChip from "../shared/custom-chip";

const Testimonials = () => {
  const { isMobile } = useMediaQuery();

  const [expendReview, setExpendReview] = useState(false);

  const reviewsLength = isMobile
    ? expendReview
      ? testimonials.length
      : 3
    : testimonials.length;

  return (
    <section className="w-full py-12 md:py-20">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <CustomChip className="px-3 py-1">Testimonials</CustomChip>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl/tight">
            What Our Users Say
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Hear from our satisfied customers about their experience with our
            resume builder.
          </p>
        </div>
        <div className="column-1 gap-5 space-y-5 md:columns-2 lg:columns-3 md:px-10 relative">
          {testimonials.slice(0, reviewsLength).map((item) => (
            <div
              className="break-inside-avoid bg-white border rounded-2xl"
              key={item.name}
            >
              <div className="relative">
                <div className="flex flex-col px-4 py-5 sm:p-6">
                  <div>
                    <div className="relative mb-4 flex items-center gap-3">
                      <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-full text-base">
                        <Image
                          width={100}
                          height={100}
                          className="size-full rounded-full border"
                          src={item.image}
                          alt={item.name}
                        />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.job}
                        </p>
                      </div>
                    </div>
                    <q className="text-muted-foreground">{item.review}</q>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {isMobile && !expendReview && (
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-center bg-gradient-to-t from-background to-transparent py-10">
              <Button onClick={() => setExpendReview(true)}>Expend</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
