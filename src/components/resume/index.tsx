"use client";

import { useAppSelector } from "@/lib/redux/hooks";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Icons } from "../shared/icons";

const Resume = () => {
  const { resume } = useAppSelector((state) => state.resume);

  return (
    <div className="w-full h-screen p-6 overflow-y-auto">
      <div
        className="bg-white drop-shadow-smooth p-6 text-[15px] text-black"
        style={{ width: "8.50in", height: "11in" }}
      >
        {/* ===HEADER=== */}

        <div className="">
          <h2 className="text-5xl font-bold text-center">{resume.name}</h2>
          <div className="flex items-center gap-4 justify-center">
            <div className="flex items-center gap-1">
              <Icons.phone size={18} className="size-4" />
              <span>{resume.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icons.email size={18} className="size-4" />{" "}
              <span>{resume.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icons.location className="size-4" size={18} />{" "}
              <span>{resume.address}</span>
            </div>
            <div></div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <div className="flex items-center gap-1">
              <Link
                className="flex items-center gap-1 underline underline-offset-2"
                href={resume.linkedin}
              >
                <Icons.linkedIn className="size-4" />
                <span>LinkedIn</span>
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <Link
                className="flex items-center gap-1 underline underline-offset-2"
                href={""}
              >
                <Icons.gitHub className="size-4" />
                Github
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <Link
                className="flex items-center gap-1 underline underline-offset-2"
                href={""}
              >
                <Icons.portfolio className="size-4" />
                Portfolio
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <Link
                className="flex items-center gap-1 underline underline-offset-2"
                href={""}
              >
                <Icons.twitter className="size-4" />
                Portfolio
              </Link>
            </div>
          </div>
        </div>
        {/* ===SUMMERY=== */}
        <div className="py-2">
          <p className="">{resume.summary}</p>
        </div>
        {/* ===EXPERIENCE=== */}
        <div>
          <h3 className="text-2xl border-b border-black/70">Experience</h3>
          <div>
            {resume.experience.map((exp, idx) => (
              <div key={idx} className="pb-2">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-base">{exp.jobTitle}</p>{" "}
                  <span className="italic text-sm">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base">{exp.companyName}</p>{" "}
                  <span className="italic">{exp.jobLocation}</span>
                </div>
                <ul className="list-disc list-inside pl-3">
                  {exp.bulletPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* ===EDUCATIONS=== */}
        <div>
          <h3 className="text-2xl border-b border-black/70">Education</h3>
          {resume.education.map((edu, idx) => (
            <div key={idx} className="pb-2">
              <p className="font-semibold">{edu.institution}</p>
              <div className="flex items-center justify-between">
                <p>{edu.degree}</p>
                <span className="italic">{edu.graduationYear}</span>
              </div>
            </div>
          ))}
        </div>
        {/* ===PROJECTS=== */}
        <div>
          <h3 className="text-2xl border-b border-black/70">Projects</h3>
          <div>
            {resume.projects.map((project, idx) => (
              <div key={idx} className="pb-2">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-base">{project.name}</p>{" "}
                  <span className="italic text-sm">{project.url}</span>
                </div>
                <p className="">{project.description}</p>{" "}
              </div>
            ))}
          </div>
        </div>
        {/* ===SKILLS=== */}
        <div>
          <h3 className="text-2xl border-b border-black/70">Skills</h3>
          <div className="flex items-center gap-2 flex-wrap">
            {resume.skills.map((skill, idx) => (
              <div key={idx}>
                <span>{skill}, </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
