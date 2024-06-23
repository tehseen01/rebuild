'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import Link from 'next/link';
import { Icons } from '../shared/icons';

const Resume = () => {
    const { resume, personalDetails } = useAppSelector((state) => state.resume);

    return (
        <div className="h-screen w-full overflow-y-auto bg-background p-6">
            <div className="">
                <div
                    className="bg-white p-6 text-[15px] text-black drop-shadow-smooth"
                    style={{
                        width: '8.50in',
                        height: '11in',
                        transform: 'scale(0.9)',
                        transformOrigin: 'top left',
                    }}
                >
                    {/* ===HEADER=== */}

                    <div className="">
                        <h2 className="text-center text-5xl font-bold">
                            {personalDetails.firstName}{' '}
                            {personalDetails.lastName}
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex items-center gap-1">
                                <Icons.phone size={18} className="size-4" />
                                <span>{personalDetails.phone}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Icons.email size={18} className="size-4" />{' '}
                                <span>{personalDetails.email}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Icons.location className="size-4" size={18} />{' '}
                                <span>{personalDetails.address}</span>
                            </div>
                            <div></div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex items-center gap-1">
                                <Link
                                    className="flex items-center gap-1 underline underline-offset-2"
                                    href={personalDetails.linkedin}
                                >
                                    <Icons.linkedIn className="size-4" />
                                    <span>LinkedIn</span>
                                </Link>
                            </div>
                            <div className="flex items-center gap-1">
                                <Link
                                    className="flex items-center gap-1 underline underline-offset-2"
                                    href={''}
                                >
                                    <Icons.gitHub className="size-4" />
                                    Github
                                </Link>
                            </div>
                            <div className="flex items-center gap-1">
                                <Link
                                    className="flex items-center gap-1 underline underline-offset-2"
                                    href={''}
                                >
                                    <Icons.portfolio className="size-4" />
                                    Portfolio
                                </Link>
                            </div>
                            <div className="flex items-center gap-1">
                                <Link
                                    className="flex items-center gap-1 underline underline-offset-2"
                                    href={''}
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
                        <h3 className="border-b border-black/70 text-2xl">
                            Experience
                        </h3>
                        <div>
                            {resume.experience.map((exp, idx) => (
                                <div key={idx} className="pb-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-base font-semibold">
                                            {exp.jobTitle}
                                        </p>{' '}
                                        <span className="text-sm italic">
                                            {exp.startDate} - {exp.endDate}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-base">
                                            {exp.companyName}
                                        </p>{' '}
                                        <span className="italic">
                                            {exp.jobLocation}
                                        </span>
                                    </div>
                                    <ul className="list-inside list-disc pl-3">
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
                        <h3 className="border-b border-black/70 text-2xl">
                            Education
                        </h3>
                        {resume.education.map((edu, idx) => (
                            <div key={idx} className="pb-2">
                                <p className="font-semibold">
                                    {edu.institution}
                                </p>
                                <div className="flex items-center justify-between">
                                    <p>{edu.degree}</p>
                                    <span className="italic">
                                        {edu.graduationYear}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* ===PROJECTS=== */}
                    <div>
                        <h3 className="border-b border-black/70 text-2xl">
                            Projects
                        </h3>
                        <div>
                            {resume.projects.map((project, idx) => (
                                <div key={idx} className="pb-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-base font-semibold">
                                            {project.name}
                                        </p>{' '}
                                        <span className="text-sm italic">
                                            {project.url}
                                        </span>
                                    </div>
                                    <p className="">{project.description}</p>{' '}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* ===SKILLS=== */}
                    <div>
                        <h3 className="border-b border-black/70 text-2xl">
                            Skills
                        </h3>
                        <div className="flex flex-wrap items-center gap-2">
                            {resume.skills.map((skill, idx) => (
                                <div key={idx}>
                                    <span>{skill}, </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
