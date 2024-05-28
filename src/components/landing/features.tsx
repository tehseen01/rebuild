import React from "react";

const FeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Streamline Your Resume Creation
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our resume builder provides a range of features to help you create
              a professional resume quickly and easily.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <DeleteIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-bold">Customizable Templates</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Choose from a variety of professional resume templates to showcase
              your skills and experience.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <PenIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-bold">Easy Editing</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Easily update your resume with your latest achievements and
              experience.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <DownloadIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-bold">Download and Share</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Download your resume in various formats and share it with
              potential employers.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <CheckIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-bold">Resume Scoring</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Get instant feedback on your resume and suggestions for
              improvement.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-bold">Job Search Integration</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Easily apply to job listings directly from our platform.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <LayersIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-bold">Comprehensive Templates</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Choose from a wide range of resume templates to fit your industry
              and experience level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function DeleteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function LayersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function PenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}
