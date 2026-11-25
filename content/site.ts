/**
 * ALL WEBSITE CONTENT LIVES HERE.
 * Edit this file to update the site; no component changes needed.
 *
 * Anything marked `placeholder: true` or left as an empty string ("")
 * is something your resume did not contain. Fill it in, or delete it.
 */

export const site = {
  name: "Lokesh Sawai",
  role: "Aspiring Python Developer",
  tagline: "Learn · Code · Grow",
  // Replace after deploying to Vercel (used for SEO / social previews).
  url: "https://lokesh-sawai.vercel.app",
  title: "Lokesh Sawai | Aspiring Python Developer",
  description:
    "Portfolio of Lokesh Sawai, a B.Sc. Computer Science student from Wardha, Maharashtra, building a career as a Python developer.",
  // Put a photo at /public/photo.jpg and set this to "/photo.jpg".
  photo: "",
  resumeFile: "/resume.pdf",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  greeting: "Hello, I'm",
  headline: "Learning to build software that is simple, clear and useful.",
  intro:
    "I'm a B.Sc. Computer Science student from Wardha with a strong interest in Python, problem solving and web development. I'm looking for my first opportunity to work on real-world projects with a professional team.",
};

export const about = {
  paragraphs: [
    "I study Computer Science at Bajaj College of Science, Wardha (RTM Nagpur University), and I've kept up consistent academic performance throughout the programme. Programming is where I feel most curious: I enjoy taking a problem, breaking it into logical steps, and turning it into working code.",
    "My foundation is in Python, Java, C and C++, supported by data structures and algorithms, basic SQL, and HTML and CSS for the web. I'm now looking to move from classroom practice to real-world work in Python and web development.",
  ],
  goal: "To build a successful career in the IT industry as a Python Developer, using my programming skills, learning new technologies, and contributing to innovative projects while growing professionally.",
  motto: "Committed to learn, innovate and grow in the field of technology.",
  facts: [
    { label: "Studying", value: "B.Sc. Computer Science" },
    { label: "Based in", value: "Wardha, Maharashtra, India" },
    { label: "Focus", value: "Python & Web Development" },
    { label: "Languages", value: "English, Hindi, Marathi" },
  ],
};

export const education = [
  {
    title: "B.Sc. Computer Science",
    institution: "Bajaj College of Science, Wardha",
    detail: "RTM Nagpur University",
    years: "2023 – 2026",
    note: "Core focus on programming, data structures and algorithms.",
  },
  {
    title: "Higher Secondary (12th)",
    institution: "State Board, Maharashtra",
    detail: "",
    years: "2021 – 2022",
    note: "",
  },
  {
    title: "Secondary (10th)",
    institution: "State Board, Maharashtra",
    detail: "",
    years: "2019 – 2020",
    note: "",
  },
];

export type SkillGroup = {
  title: string;
  icon: "code" | "globe" | "brain" | "database" | "languages";
  items: { name: string; hint?: string }[];
};

export const skills: SkillGroup[] = [
  {
    title: "Programming Languages",
    icon: "code",
    items: [
      { name: "Python", hint: "Primary focus" },
      { name: "Java" },
      { name: "C" },
      { name: "C++" },
    ],
  },
  {
    title: "Web Technologies",
    icon: "globe",
    items: [{ name: "HTML" }, { name: "CSS" }],
  },
  {
    title: "Computer Science Fundamentals",
    icon: "brain",
    items: [
      { name: "Data Structures & Algorithms" },
      { name: "Problem Solving" },
      { name: "Logic Building" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    items: [{ name: "SQL", hint: "Basics" }],
  },
  {
    title: "Spoken Languages",
    icon: "languages",
    items: [
      { name: "English", hint: "Fluent" },
      { name: "Hindi", hint: "Fluent" },
      { name: "Marathi", hint: "Basic" },
    ],
  },
];

export type Project = {
  title: string;
  status: string;
  description: string;
  tech: string[];
  contribution: string;
  outcome: string;
  github: string;
  live: string;
  placeholder?: boolean;
};

export const projectsIntro =
  "I'm at the start of my project journey and eager to build real-world applications in Python and web development. Here is what I'm working with so far, plus space for the projects to come.";

export const projects: Project[] = [
  {
    title: "This Portfolio Website",
    status: "Live",
    description:
      "A responsive personal portfolio that presents my education, skills and goals as a professional profile rather than a traditional CV.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    contribution:
      "Content, structure and deployment. All content is editable from a single file.",
    outcome: "Deployed online and shareable with recruiters and universities.",
    github: "", // e.g. "https://github.com/your-username/portfolio"
    live: "", // e.g. "https://lokesh-sawai.vercel.app"
  },
  {
    title: "Your Next Project",
    status: "Placeholder",
    description:
      "Describe a Python or web project here: the problem it solves and what it does.",
    tech: ["Python"],
    contribution: "What you personally designed, wrote or learned.",
    outcome: "What it achieved, or what you learned from it.",
    github: "",
    live: "",
    placeholder: true,
  },
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  description: string;
  placeholder?: boolean;
};

export const experienceIntro =
  "I haven't had a formal internship yet, and I'm actively looking for one.";

export const experience: TimelineItem[] = [
  {
    title: "Open to Internship & Training",
    org: "Professional IT environment",
    period: "Now",
    description:
      "Looking for opportunities to learn and contribute in a professional IT setting, ideally with Python or web development work.",
  },
  {
    title: "Your Experience Here",
    org: "Organisation / Club / Event",
    period: "Year",
    description:
      "Add internships, volunteering or leadership roles here when you have them, or delete this entry.",
    placeholder: true,
  },
];

export const achievements = [
  {
    title: "Consistent academic performance",
    description: "Steady results throughout the B.Sc. Computer Science programme.",
  },
  {
    title: "Strong problem-solving in programming",
    description:
      "Comfortable breaking down logic problems and turning them into working code.",
  },
];

// Add certifications here as you earn them, e.g. { title: "...", issuer: "...", year: "..." }
export const certifications: { title: string; issuer: string; year: string }[] = [];

export const interests = [
  {
    title: "Python Development",
    description: "The language I most want to build a career with.",
  },
  {
    title: "Web Development",
    description: "Turning ideas into pages people can use, with HTML and CSS as my base.",
  },
  {
    title: "Problem Solving",
    description: "Data structures, algorithms and logic building.",
  },
  {
    title: "Learning New Technologies",
    description: "Staying curious and growing with the field.",
  },
];

export const contact = {
  email: "lokeshsawaio5@gmail.com",
  phone: "8767100065",
  location: "Wardha, Maharashtra, India",
  // Fill these in; empty links are shown as "coming soon" instead of broken links.
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-id"
  github: "", // e.g. "https://github.com/your-username"
};
