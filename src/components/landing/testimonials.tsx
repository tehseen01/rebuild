import React from "react";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            What Our Users Say
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Hear from our satisfied customers about their experience with our
            resume builder.
          </p>
        </div>
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm transition-all hover:shadow-md">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/avatars/01.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Software Engineer
                  </p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                "The resume builder made it so easy to create a
                professional-looking resume. I was able to land my dream job in
                no time!"
              </p>
            </div>
          </Card>
          <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm transition-all hover:shadow-md">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/avatars/02.png" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Sarah Anderson</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Marketing Manager
                  </p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                "I was struggling to format my resume, but the resume builder
                made it a breeze. I'm so impressed with the results!"
              </p>
            </div>
          </Card>
          <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm transition-all hover:shadow-md">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/avatars/03.png" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Michael Rodriguez</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Project Manager
                  </p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                "I was able to create a resume that really showcased my skills
                and experience. The resume builder is a game-changer!"
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
