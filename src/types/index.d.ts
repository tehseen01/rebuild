export type TFeature = {
    title: string;
    description: string;
    icon: keyof typeof Icons;
};

export type ResumeData = {
    personalDetails: PersonalDetails;
    summary: string;
    experience: Experience[];
    education: Education[];
    projects: Project[];
    skills: string[];
    languages?: string[];
    certifications?: string[];
    interests?: string[];
};

export type PersonalDetails = {
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website: string;
    address: string;
    twitter: string;
};

export type Experience = {
    id: string;
    companyName: string;
    startDate: string; // Format: "YYYY-MM-DD"
    endDate: string | 'Present'; // Format: "YYYY-MM-DD" or "Present"
    jobTitle: string;
    jobLocation: string;
    bulletPoints: string[];
};

export type Education = {
    institution: string;
    degree: string;
    graduationYear: number;
};

export type Project = {
    name: string;
    description: string;
    url: string;
};
