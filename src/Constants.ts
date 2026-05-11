interface Experience {
    company: string;
    role: string;
    period: string;
    highlights: string[];
}

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
            company: "Private Company", role: "Tech Lead", period: "2025 — Present",
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
            company: "Private Company", role: "Senior Software Engineer", period: "2022 — 2025",
            highlights: [
                "Built core payment infrastructure from scratch",
                "Designed and implemented service for private object storage and retrieval",
                "Identified and developed solutions to automate manual procedures",
                "Mentored junior developers within the infrastructure team",
                "Maintained legacy systems while guiding their planned migration",
            ],
        },
        {
            company: "Private Company", role: "Software Engineer", period: "2019 — 2022",
            highlights: [
                "Built fully featured sales lead management system",
                "Implemented programmatic generation of roll-forming machine files",
                "Adopted C# as a primary programming language",
                "Learned and implemented IaC using Pulumi",
            ],
        },
        {
            company: "Private Company", role: "Junior Software Engineer", period: "2018 — 2019",
            highlights: [
                "Took ownership of existing PHP systems while learning company tribal knowledge",
                "Migrated shared hosting servers to AWS",
                "Moved company towards modern communication tools like Slack and GSuite",
            ],
        },
        {
            company: "Various Telecom Contractors", role: "DC Electrician", period: "2010 — 2018",
            highlights: [
                "Developed and documented conversion protocol for GE Galaxy power plants",
                "Installed emergency battery backup systems in cell towers",
                "Installed central office UPS and grounding systems",
            ],
        },
    ] as Experience[],
    currentlyLearning: ["Go", "Python"],
    readingList: [
        "Clean Code — Robert Martin",
        "Pragmatic Programmer — Dave Thomas",
        "Clean Architecture — Robert Martin",
        "Test Driven Development — Kent Beck",
        "Thinking in Systems — Donella Meadows",
        "Building Event-Driven Microservices — Adam Bellemare",
        "Monolith to Microservices — Sam Newman",
        "Staff Engineer — Will Larson",
        "Sea of Tranquility — Emily St. John Mandel",
        "Designing Interfaces — Jenifer Tidwell",
    ],
};

export const resumeCodeText = "{\n" +
    "  name: \"Preston Sparks\",\n" +
    "  title: \"Senior Full-Stack Software Engineer\",\n" +
    "  location: \"TX, USA\",\n" +
    "  \n" +
    "  skills: {\n" +
    "    languages: [\"C#\", \"TypeScript\", \"PHP\", \"SQL\", \"C++\"],\n" +
    "    frontend: [\"React\", \"Blazor UI\", \"Vue\", \"MaterializeCSS\"],\n" +
    "    backend: [\".NET\", \"Laravel\", \"PostgreSQL\", \"Redis\", \"RabbitMQ\", \"MySQL\"],\n" +
    "    tools: [\"Git\", \"Docker\", \"AWS\", \"Kubernetes\", \"Pulumi\", \"MartenDB\"],\n" +
    "    technologies: [\"Git\", \"Docker\", \"AWS\", \"Kubernetes\"],\n" +
    "  },\n" +
    "\n" +
    "  experience: [\n" +
    "    {\n" +
    "      company: \"Private Company\",\n" +
    "      role: \"Tech Lead\",\n" +
    "      period: \"2025 — Present\",\n" +
    "      highlights: [\n" +
    "        \"Led migration from monolithic legacy system to event driven microservices\",\n" +
    "        \"Mentored junior developers across multiple product teams\",\n" +
    "        \"Co-authored system architecture for future-proofed, scalable systems\",\n" +
    "        \"Enforced coding quality standards across DevOps and distributed systems development\",\n" +
    "        \"Coordinated with stakeholders, business analysts, and managers to clarify, prioritize and deliver features\",\n" +
    "        \"Provided cross-team expertise on technical design, debugging, and implementation\",\n" +
    "        \"Continued to enable all sectors of the business with client onboarding and technical support\",\n" +
    "      ],\n" +
    "    },\n" +
    "    {\n" +
    "      company: \"Private Company\",\n" +
    "      role: \"Senior Software Engineer\",\n" +
    "      period: \"2022 — 2025\",\n" +
    "      highlights: [\n" +
    "        \"Built core payment infrastructure from scratch\",\n" +
    "        \"Designed and implemented service for private object storage and retrieval\",\n" +
    "        \"Identified and developed solutions to automate manual procedures\",\n" +
    "        \"Mentored junior developers within the infrastructure team\",\n" +
    "        \"Maintained legacy systems while providing expertise in the design of their planned migration\",\n" +
    "        \"Enabled all sectors of the business with client onboarding and technical support\",\n" +
    "      ],\n" +
    "    },\n" +
    "    {\n" +
    "      company: \"Private Company\",\n" +
    "      role: \"Software Engineer\",\n" +
    "      period: \"2019 — 2022\",\n" +
    "      highlights: [\n" +
    "        \"Built fully featured sales lead management system\",\n" +
    "        \"Implemented programmatic generation of roll-forming machine files\",\n" +
    "        \"Adopted C# as a primary programming language\",\n" +
    "        \"Learned and implemented IaC using Pulumi\",\n" +
    "      ],\n" +
    "    },\n" +
    "    {\n" +
    "      company: \"Private Company\",\n" +
    "      role: \"Junior Software Engineer\",\n" +
    "      period: \"2018 — 2019\",\n" +
    "      highlights: [\n" +
    "        \"Took ownership of existing PHP systems while learning company tribal knowledge\",\n" +
    "        \"Migrated shared hosting servers to AWS\",\n" +
    "        \"Moved company towards modern communication tools like Slack and GSuite\",\n" +
    "      ],\n" +
    "    },\n" +
    "    {\n" +
    "      company: \"Various Telecom Contractors\",\n" +
    "      role: \"DC Electrician\",\n" +
    "      period: \"2010 — 2018\",\n" +
    "      highlights: [\n" +
    "        \"Developed and documented conversion protocol for GE Galaxy power plants\",\n" +
    "        \"Installed emergency battery backup systems in cell towers\",\n" +
    "        \"Installed central office UPS and grounding systems\",\n" +
    "      ],\n" +
    "    },\n" +
    "  ],\n" +
    "\n" +
    "  education: {\n" +
    "    degree: \"GED\",\n" +
    "    year: 2010,\n" +
    "  },\n" +
    "\n" +
    "  currentlyLearning: [\"Go\", \"Python\"],\n" +
    "\n" +
    "  readingList: [\n" +
    "    \"Clean Code by Robert Martin\",\n" +
    "    \"Pragmatic Programmer by Dave Thomas\",\n" +
    "    \"Clean Architecture by Robert Martin\",\n" +
    "    \"Test Driven Development by Kent Beck\",\n" +
    "    \"Thinking in Systems by Donella Meadows\",\n" +
    "    \"Building Event-Driven Microservices by Adam Bellemare\",\n" +
    "    \"Monolith to Microservices by Sam Newman\",\n" +
    "    \"Staff Engineer by Donella Will Larson\",\n" +
    "    \"Sea of Tranquility by Emily St John Mandel\",\n" +
    "    \"Designing Interfaces by Jenifer Tidwell\"\n" +
    "  ],\n" +
    "}";