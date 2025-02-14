"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Download, Layout, FileOutput } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background container-wrapper">
      {/* Hero Section */}
      <div className="container py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm">
              ⚡ Discover the easiest way to build your resume!
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Online Resume Builder with Creative Templates.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Build and manage a free professional resume in minutes using our
              easy-to-use platform. Get hired faster with our modern templates.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Create My Resume</Button>
              <Button size="lg" variant="outline">
                Watch Video
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800"
              alt="Resume Builder"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
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

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Join over 14,442,444 users</h2>
        <p className="text-muted-foreground mb-8">from worldwide</p>
        <p className="text-lg mb-8">
          Start for free - try our resume builder now
        </p>
        <Button size="lg">Create My Resume</Button>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">
              Privacy
            </a>
            <a href="#" className="hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary">
              Legal Documents
            </a>
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary">
              Right of Withdrawal
            </a>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            Copyright 2024 - SimpleCV
          </div>
        </div>
      </footer>
    </main>
  );
}
