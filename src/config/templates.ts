import { ResumeData } from '@/types';

export const resumeTemplate: ResumeData = {
    personalDetails: {
        firstName: 'John',
        lastName: 'Doe',
        title: 'Software Engineer',
        email: 'john.doe@email.com',
        phone: '(123) 456-7890',
        linkedin: 'https://www.linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe',
        website: 'https://johndoe.com',
        address: 'San Francisco, CA',
    },
    summary:
        'Experienced software engineer with a passion for creating high-quality, scalable applications. Proficient in React, Node.js, and Java. Committed to delivering innovative solutions and continuous learning.',
    experience: [
        {
            companyName: 'Acme Inc.',
            startDate: '2020-06-01',
            endDate: 'Present',
            jobTitle: 'Senior Software Engineer',
            jobLocation: 'San Francisco, CA',
            bulletPoints: [
                'Developed and maintained a large-scale e-commerce platform using React and Node.js',
                'Implemented RESTful APIs and integrated with third-party services',
                'Optimized application performance and conducted code reviews',
                'Mentored junior developers and contributed to team knowledge sharing',
            ],
        },
        {
            companyName: 'TechCorp',
            startDate: '2017-02-01',
            endDate: '2020-05-31',
            jobTitle: 'Software Engineer',
            jobLocation: 'New York, NY',
            bulletPoints: [
                'Built and maintained web applications using Java and Spring Framework',
                'Collaborated with cross-functional teams in an Agile environment',
                'Implemented automated testing frameworks and CI/CD pipelines',
                'Contributed to code refactoring and architectural decisions',
            ],
        },
    ],
    education: [
        {
            institution: 'University of California, Berkeley',
            degree: 'Bachelor of Science in Computer Science',
            graduationYear: 2016,
        },
    ],
    projects: [
        {
            name: 'Personal Portfolio Website',
            description:
                'A responsive and interactive personal portfolio website built with React and styled with Tailwind CSS.',
            url: 'https://johndoe.com',
        },
        {
            name: 'Expense Tracker',
            description:
                'A web application for tracking expenses, built with React and Node.js, featuring user authentication and data visualization.',
            url: 'https://github.com/johndoe/expense-tracker',
        },
    ],
    skills: [
        'React',
        'Node.js',
        'JavaScript',
        'Java',
        'Spring Framework',
        'RESTful APIs',
        'Git',
        'Agile Methodologies',
        'Test-Driven Development',
    ],
    languages: ['English (Native)', 'Spanish (Fluent)'],
    certifications: [
        'AWS Certified Developer - Associate',
        'Oracle Certified Professional, Java SE 8 Programmer',
    ],
    interests: ['Hiking', 'Photography', 'Reading'],
};
