"use client";

import React, { useState } from "react";
import CustomChip from "../shared/custom-chip";
import { faqData } from "@/config/landing";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQSection = () => {
  const [expendFAQ, setExpendFAQ] = useState(-1);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <CustomChip className="px-3 py-1 before:rotate-[-3deg]">
              FAQ
            </CustomChip>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get answers to the most common questions about our resume builder.
            </p>
          </div>
        </div>
        <ul className="md:px-32 flex flex-col">
          {faqData.map((faq, idx) => (
            <li
              key={idx}
              className={cn(
                "border-b overflow-hidden pb-3",
                expendFAQ === idx ? "max-h-full" : "md:h-16 h-20"
              )}
            >
              <div
                className="flex items-center justify-between py-4 cursor-pointer"
                onClick={() =>
                  setExpendFAQ((prev) => (prev === idx ? -1 : idx))
                }
              >
                <h5 className="text-lg md:text-xl font-medium">
                  {faq.question}
                </h5>
                <span>
                  <ChevronDown
                    className={cn(
                      "transition-transform duration-300",
                      expendFAQ === idx && "rotate-180"
                    )}
                  />
                </span>
              </div>
              <p className={cn("text-secondary-foreground")}>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
