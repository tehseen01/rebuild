"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FileText, Download, Layout, FileOutput } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background container-wrapper">
      {/* Hero Section */}
      <div className="container py-16 md:py-24">
        <div className="flex items-center justify-center gap-4 flex-col">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm">
            ⚡ Discover the easiest way to build your resume!
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center max-w-3xl mx-auto">
            Online Resume Builder with Creative Templates.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl text-center max-w-3xl mx-auto">
            Build and manage a free professional resume in minutes using our
            easy-to-use platform. Get hired faster with our modern templates.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Create My Resume</Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create professional resumes in minutes with our easy-to-use builder.
            Choose from our collection of ATS-friendly templates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Layout className="h-6 w-6" />,
              title: "Easy to use editor",
              description: "Make a resume that wins interviews",
            },
            {
              icon: <FileText className="h-6 w-6" />,
              title: "Professional resume",
              description: "Create your professional resume with us",
            },
            {
              icon: <Download className="h-6 w-6" />,
              title: "100+ Templates",
              description: "Hand-picked beautiful templates for all",
            },
            {
              icon: <FileOutput className="h-6 w-6" />,
              title: "Export to anything",
              description: "Export your resume to any format you need",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Templates Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Creative Templates</h2>
            <p className="text-muted-foreground">
              Choose from our collection of professionally designed templates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((template) => (
              <div
                key={template}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={`https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=400`}
                  alt={`Template ${template}`}
                  width={400}
                  height={560}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="container">
        <div className="flex justify-between">
          <div className="mb-16">
            <span className="text-primary font-bold">Testimonials</span>
            <h2 className="text-5xl font-semibold mb-4">What our users say</h2>
            <p className="text-lg max-w-2xl">
              We love to hear feedbacks from our customers. Get to know what
              they are saying about us :)
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              {Array.from({ length: 4 }).map((_, index) => (
                <figure key={index} className="">
                  <Image
                    src={"/images/testimonial.avif"}
                    width={50}
                    height={50}
                    alt="testimonial"
                  />
                </figure>
              ))}
            </div>
            <p>Trusted by more then 1000+ users</p>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground">
            Can't find what you're looking for? Please reach out to us
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="max-w-4xl mx-auto space-y-3"
        >
          {faqs.map((faq) => (
            <AccordionItem
              value={faq.question}
              key={faq.question}
              className="border-none data-[state=open]:bg-accent px-4 rounded-xl"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="py-10">
          <div className="flex flex-col items-center bg-accent rounded-xl gap-3 p-6">
            <div className="rounded-full flex items-center justify-center">
              {Array.from({ length: 3 }).map((_, index) => (
                <Image
                  key={index}
                  className={cn(
                    "border-2 rounded-full p-1 flex items-center justify-center border-white",
                    index === 0 && "-mr-2 bg-[#ebe3dc]",
                    index === 2 && "-ml-2 bg-[#ebdcdc]",
                    index === 1 && "mb-2 size-14 bg-[#e3ebdc]",
                  )}
                  src={"/images/testimonial.avif"}
                  width={50}
                  height={50}
                  alt="testimonial"
                />
              ))}
            </div>
            <h3 className="text-2xl font-semibold">Still have questions?</h3>
            <p className="text-muted-foreground">
              Can't find what you're looking for? Please reach out to us
            </p>
            <Button size="lg">Get in touch</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

const faqs = [
  {
    question: "What is ReBuild?",
    answer:
      "ReBuild is an online resume builder that helps you create professional and impactful resumes quickly and easily.  We provide templates, formatting tools, and expert tips to help you showcase your skills and experience effectively.",
  },
  {
    question: "What resume templates do you offer?",
    answer:
      "ReBuild offers a wide variety of modern and professional resume templates, suitable for different industries and experience levels.  You can browse our template gallery [link to template gallery] to find the perfect one for you.",
  },
  {
    question: "Can I customize the templates?",
    answer:
      "Absolutely!  ReBuild allows you to customize every aspect of your resume, including fonts, colors, section order, and more.  You have full control over the look and feel of your resume.",
  },
  {
    question: "Can I download my resume in different formats?",
    answer:
      "Yes, you can download your resume in various formats, including PDF (.pdf), DOCX (.docx), and TXT (.txt).  PDF is generally recommended for its consistent formatting across different devices.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take data security very seriously.  We use industry-standard encryption and security measures to protect your information.  You can review our privacy policy [link to privacy policy] for more details.",
  },
  {
    question: "What if I need help?",
    answer:
      "We offer comprehensive support through our help center [link to help center], including FAQs, tutorials, and email support.  You can also contact our support team directly at [support email address].",
  },
  {
    question: "Can I use ReBuild on my mobile device?",
    answer:
      "Yes, ReBuild is designed to be responsive, meaning it works well on desktops, laptops, tablets, and smartphones.  You can create and edit your resume from anywhere.",
  },
  {
    question: "Do you offer any tips or advice on resume writing?",
    answer:
      "Yes, we have a blog [link to blog] with articles and resources on resume writing best practices, job search tips, and career advice.  We also provide context-sensitive tips within the resume builder itself.",
  },
  {
    question: "Can I create multiple resumes with one account?",
    answer:
      "Yes, you can create and save multiple resumes with a single ReBuild account. This is useful for tailoring your resume to different job applications.",
  },
];
