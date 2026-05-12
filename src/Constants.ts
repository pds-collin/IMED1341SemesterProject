import type { CollectionItem } from './components/Collection.tsx';

import designPatterns from './assets/design-patterns.jpg';
import databaseDesign from './assets/database-design.jpg';
import cleanCode from './assets/clean-code.jpg';
import pragProg from './assets/prag-prog.jpg';
import cleanArchitecture from './assets/clean-architecture.jpg';
import tdd from './assets/tdd.jpg';
import thinkingInSystems from './assets/thinking-in-systems.jpg';
import eventDrivenMicroservices from './assets/event-driven-microservices.jpg';
import monolithToMicroservices from './assets/monolith-to-microservices.jpg';
import staffEngineer from './assets/staff-engineer.jpg';
import seaOfTranquility from './assets/sea-of-tranquility.jpg';
import designingInterfaces from './assets/designing-interfaces.jpg';
import portrait from './assets/portrait.png';

export interface Experience {
    company: string;
    role: string;
    period: string;
    highlights: string[];
}

export const profilePicture = portrait;

export const resumeData = {
    name: "Preston Sparks",
    title: "Senior Full-Stack Software Engineer",
    location: "TX, USA",
    skills: {
        Languages:   ["C#", "TypeScript", "PHP", "SQL", "C++"],
        Frontend:    ["React", "Blazor UI", "Vue", "MaterializeCSS"],
        Backend:     [".NET", "Laravel", "PostgreSQL", "Redis", "RabbitMQ", "MySQL"],
        Tools:       ["Git", "Docker", "AWS", "Kubernetes", "Pulumi", "MartenDB"],
    },
    experience: [
        {
            company: "ACT Building Systems", role: "Tech Lead", period: "2025 — Present",
            highlights: [
                "Led migration from monolithic legacy system to event-driven microservices",
                "Mentored junior developers across multiple product teams",
                "Co-authored system architecture for future-proofed, scalable systems",
                "Enforced coding quality standards across DevOps and distributed systems",
                "Coordinated with stakeholders and managers to clarify, prioritize, and deliver features",
                "Provided cross-team expertise on technical design, debugging, and implementation",
            ],
        },
        {
            company: "ACT Building Systems", role: "Senior Software Engineer", period: "2023 — 2025",
            highlights: [
                "Built core payment infrastructure from scratch",
                "Designed and implemented service for private object storage and retrieval",
                "Identified and developed solutions to automate manual procedures",
                "Mentored junior developers within the infrastructure team",
                "Maintained legacy systems while guiding their planned migration",
            ],
        },
        {
            company: "ACT Building Systems", role: "Software Engineer", period: "2019 — 2023",
            highlights: [
                "Built fully featured sales lead management system",
                "Implemented programmatic generation of roll-forming machine files",
                "Adopted C# as a primary programming language",
                "Learned and implemented IaC using Pulumi",
            ],
        },
        {
            company: "ACT Building Systems", role: "Junior Software Engineer", period: "2018 — 2019",
            highlights: [
                "Took ownership of existing PHP systems while learning company tribal knowledge",
                "Migrated shared hosting servers to AWS",
                "Moved company towards modern communication tools like Slack and GSuite",
            ],
        },
        {
            company: "Various Contractors", role: "DC Electrician", period: "2010 — 2018",
            highlights: [
                "Developed and documented conversion protocol for GE Galaxy power plants",
                "Installed emergency battery backup systems in cell towers",
                "Installed central office UPS and grounding systems",
            ],
        },
    ] as Experience[],
    readingList: [
        {
            title: "Design Patterns", subtitle: "Gang of Four", image: designPatterns,
            links: [
                { label: "Goodreads", href: "https://www.goodreads.com/book/show/85009.Design_Patterns" },
                { label: "Amazon", href: "https://www.amazon.com/dp/0201633612" },
            ],
        },
        {
            title: "Database Design for Mere Mortals", subtitle: "Michael J. Hernandez", image: databaseDesign,
            links: [
                { label: "Goodreads", href: "https://www.goodreads.com/book/show/150062.Database_Design_for_Mere_Mortals" },
                { label: "Amazon", href: "https://www.amazon.com/dp/0136788041" },
            ],
        },
        {
            title: "Clean Code", subtitle: "Robert Martin", image: cleanCode,
            links: [
                { label: "Goodreads", href: "https://www.goodreads.com/book/show/3735293-clean-code" },
                { label: "Amazon", href: "https://www.amazon.com/dp/0132350882" },
            ],
        },
        {
            title: "The Pragmatic Programmer", subtitle: "Dave Thomas", image: pragProg,
            links: [
                { label: "Goodreads", href: "https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer" },
                { label: "Amazon", href: "https://www.amazon.com/dp/0135957052" },
            ],
        },
        {
            title: "Clean Architecture", subtitle: "Robert Martin", image: cleanArchitecture,
            links: [
                { label: "Goodreads", href: "https://www.goodreads.com/book/show/18043011-clean-architecture" },
                { label: "Amazon", href: "https://www.amazon.com/dp/0134494164" },
            ],
        },
        {
            title: "Test Driven Development", subtitle: "Kent Beck", image: tdd,
            links: [
                { label: "Goodreads", href: "https://www.goodreads.com/book/show/387190.Test_Driven_Development" },
                { label: "Amazon", href: "https://www.amazon.com/dp/0321146530" },
            ],
        },
        {
            title: "Thinking in Systems", subtitle: "Donella Meadows", image: thinkingInSystems,
            links: [
                { label: "Goodreads", href: "https://www.goodreads.com/book/show/3828902-thinking-in-systems" },
                { label: "Amazon", href: "https://www.amazon.com/dp/1603580557" },
            ],
        },
        {
            title: "Building Event-Driven Microservices", subtitle: "Adam Bellemare", image: eventDrivenMicroservices,
            links: [
                { label: "Goodreads", href: "https://www.goodreads.com/book/show/51163447-building-event-driven-microservices" },
                { label: "Amazon", href: "https://www.amazon.com/dp/1492057894" },
            ],
        },
        {
            title: "Monolith to Microservices", subtitle: "Sam Newman", image: monolithToMicroservices,
            links: [
                { label: "Goodreads", href: "https://www.goodreads.com/book/show/44144499-monolith-to-microservices" },
                { label: "Amazon", href: "https://www.amazon.com/dp/1492047848" },
            ],
        },
        {
            title: "Staff Engineer", subtitle: "Will Larson", image: staffEngineer,
            links: [
                { label: "Goodreads", href: "https://www.goodreads.com/book/show/56481725-staff-engineer" },
                { label: "Amazon", href: "https://www.amazon.com/dp/1736417916" },
            ],
        },
        {
            title: "Sea of Tranquility", subtitle: "Emily St. John Mandel", image: seaOfTranquility,
            links: [
                { label: "Goodreads", href: "https://www.goodreads.com/book/show/58446227-sea-of-tranquility" },
                { label: "Amazon", href: "https://www.amazon.com/dp/0593321448" },
            ],
        },
        {
            title: "Designing Interfaces", subtitle: "Jenifer Tidwell", image: designingInterfaces,
            links: [
                { label: "Goodreads", href: "https://www.goodreads.com/book/show/344724.Designing_Interfaces" },
                { label: "Amazon", href: "https://www.amazon.com/dp/1492051969" },
            ],
        },
    ] as CollectionItem[],
};

export const resumeCodeText = `{
  name: "Preston Sparks",
  title: "Software Engineer",
  location: "TX, USA",

  skills: {
    languages: [
      "C#",
      "TypeScript",
      "PHP",
      "SQL",
      "C++"
    ],
    frontend: [
      "React",
      "Blazor UI",
      "Vue",
      "MaterializeCSS"
    ],
    backend: [
      ".NET",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "MySQL"
    ],
    tools: [
      "Git",
      "Docker",
      "AWS",
      "Kubernetes",
      "Pulumi",
      "MartenDB"
    ],
  },

  education: {
    degree: "GED",
    year: 2010,
  },
}`;