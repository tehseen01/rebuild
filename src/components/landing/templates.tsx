import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const Templates = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Resume Templates
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Showcase Your Unique Style
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose from a variety of professionally designed resume templates
              to make your application stand out.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
          <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm transition-all hover:shadow-md">
            <div className="space-y-4">
              <img
                alt="Resume Template 1"
                className="rounded-md"
                height={500}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/500",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Modern Template</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A clean and contemporary design that showcases your
                  qualifications.
                </p>
              </div>
              <Button>Use Template</Button>
            </div>
          </Card>
          <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm transition-all hover:shadow-md">
            <div className="space-y-4">
              <img
                alt="Resume Template 2"
                className="rounded-md"
                height={500}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/500",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Creative Template</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A visually striking design that highlights your unique skills.
                </p>
              </div>
              <Button>Use Template</Button>
            </div>
          </Card>
          <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm transition-all hover:shadow-md">
            <div className="space-y-4">
              <img
                alt="Resume Template 3"
                className="rounded-md"
                height={500}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/500",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Traditional Template</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A classic design that emphasizes your professional experience.
                </p>
              </div>
              <Button>Use Template</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Templates;
