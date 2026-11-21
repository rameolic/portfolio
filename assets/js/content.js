/**
 * Central portfolio content — single source of truth for homepage + case studies.
 * Keep verified facts here; do not invent metrics, features, or claims.
 */
window.PORTFOLIO = {
  profile: {
    name: "Ramkumar Koppula",
    headline: "Frontend UI Engineering Lead | Senior Flutter Developer",
    location: "Kakinada, Andhra Pradesh, India",
    relocation: "Open to relocation",
    email: "dev.ramkumarkoppula@gmail.com",
    phone: "+91 9490167800",
    phoneHref: "tel:+919490167800",
    linkedin: "https://linkedin.com/in/rameolic",
    portfolio: "https://rameolic.github.io/portfolio/",
    github: "https://github.com/rameolic",
    resumeLocal: "./assets/pdf/resume.pdf",
    resumeFallback:
      "https://drive.google.com/file/d/1-He0u-U2OzViAtpq0_muwoRdpvkxphUb/view?usp=drive_link",
  },

  highlights: [
    { value: "Nearly 6", label: "Years of professional experience", note: "Since December 2020" },
    { value: "60,000+", label: "Monthly active users", note: "Across the InsightsE ecosystem" },
    { value: "3", label: "Integrated Flutter applications", note: "Built from scratch" },
    { value: "~100", label: "GPS-equipped buses tracked", note: "Real-time school transport" },
    { value: "1 month", label: "Desktop POS delivery", note: "Independent Canteen build" },
    { value: "2", label: "Flutter developers led", note: "Hands-on technical leadership" },
    { value: "CI/CD", label: "Android & iOS pipelines", note: "Built from scratch in GitLab" },
    { value: "White-label", label: "Shared Flutter architecture", note: "Flavors & branding variants" },
  ],

  education: {
    degree: "Bachelor of Technology — Electronics and Communication Engineering",
    school: "Pragati Engineering College, Surampalem, Andhra Pradesh",
    years: "2016–2020",
    cgpa: "7.3",
  },

  experience: [
    {
      id: "rubrix",
      company: "Rubrix Analytics Private Limited",
      location: "Kochi, Kerala",
      period: "August 2021 – Present",
      role: "Frontend UI Engineering Lead / Flutter Developer",
      progression:
        "Joined as a junior Flutter developer and progressed into frontend UI engineering leadership while remaining hands-on in architecture and implementation.",
      responsibilities: [
        "Frontend architecture and technical decision-making across mobile, desktop, and web",
        "Flutter mobile and desktop development; production web UI with HTML, CSS, and JavaScript",
        "Leading two Flutter developers: task allocation, mentoring, code reviews, and merge approvals",
        "BLoC architecture standardization and reusable UI component patterns",
        "Figma-to-Flutter implementation and UI quality consistency",
        "REST API and WebSocket integrations; Firebase Authentication, Firestore, and FCM",
        "Git branching strategies and GitLab CI/CD for Android and iOS",
        "Android and iOS production releases; stakeholder and backend collaboration",
        "AI-assisted engineering workflows using Cursor and ChatGPT as productivity tools",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "BLoC/Cubit",
        "Firebase",
        "REST",
        "WebSockets",
        "Google Maps",
        "GitLab CI/CD",
        "HTML/CSS/JS",
      ],
    },
    {
      id: "ttf",
      company: "The Thought Factory DMCC",
      location: "Vellore, Tamil Nadu",
      period: "December 2020 – August 2021",
      role: "Application Developer (Flutter)",
      progression:
        "Built two Flutter applications from scratch and gained production experience with device APIs, REST integration, and cross-platform delivery.",
      responsibilities: [
        "Developed Rhapsody Merchandising and Halo CRM from scratch",
        "Cross-platform UI development for Android and iOS",
        "REST API and device API integration (camera, geolocation, file system)",
        "Debugging, deployment, application maintenance, and junior developer guidance",
      ],
      technologies: ["Flutter", "Dart", "REST APIs", "Device APIs"],
    },
  ],

  projects: [
    {
      id: "insightse",
      title: "InsightsE Education Management Ecosystem",
      period: "August 2021 – Present",
      role: "Independent developer from scratch; later frontend lead",
      summary:
        "Three integrated Flutter applications for parents/students, teachers, and management — collectively supporting more than 60,000 monthly active users.",
      technologies: ["Flutter", "Dart", "BLoC/Cubit", "Firebase", "REST APIs", "Google Maps"],
      images: [
        {
          src: "insightse",
          alt: "InsightsE parent application interface showing school information screens",
          caption: "Parent / student application",
        },
        {
          src: "teacher",
          alt: "InsightsE teacher application interface for classroom workflows",
          caption: "Teacher application",
        },
        {
          src: "management",
          alt: "InsightsE management application interface for school administration",
          caption: "Management application",
        },
      ],
      links: [
        {
          label: "Parent App Store",
          href: "https://apps.apple.com/in/app/csms-parent/id1626799014",
        },
        {
          label: "Teacher App Store",
          href: "https://apps.apple.com/in/app/insightse-teacher/id1644059119",
        },
        {
          label: "Management App Store",
          href: "https://apps.apple.com/us/app/insightse-management/id6457255722",
        },
      ],
      areas: {
        parent: [
          "Attendance information",
          "Homework and assignments",
          "Examination information",
          "Academic performance and report cards",
          "School notices and announcements",
          "Push notifications",
          "School communication and messaging",
          "School bus tracking",
          "Learning resources",
          "Gallery and school updates",
        ],
        teacher: [
          "Attendance marking and management",
          "Homework creation and management",
          "Examination-related workflows",
          "Student information",
          "Messaging and communication",
          "Academic reporting",
          "Classroom-related operations",
        ],
        management: [
          "School administration workflows",
          "Academic and operational information",
          "Management reporting",
          "Communication and oversight",
          "Role-specific interfaces",
        ],
      },
    },
    {
      id: "canteen",
      title: "InsightsE Canteen — Flutter Desktop POS",
      badge: "Delivered in 1 month",
      summary:
        "Independently designed, developed, and delivered a production Flutter desktop POS with wallet payments, NFC/RFID, thermal printing, and offline synchronization.",
      technologies: ["Flutter Desktop", "BLoC", "NFC/RFID", "Thermal Printing", "ERPNext APIs"],
      caseStudy: "case-studies/canteen-pos.html",
      placeholder: true,
    },
    {
      id: "bus-tracking",
      title: "Real-Time School Bus Tracking",
      summary:
        "Architecture and implementation for approximately 100 GPS-equipped buses using REST for initial data, Firestore listeners for live updates, and Google Maps visualization.",
      technologies: ["REST APIs", "Cloud Firestore", "Google Maps", "Flutter"],
      caseStudy: "case-studies/bus-tracking.html",
      placeholder: true,
    },
    {
      id: "white-label",
      title: "White-Label Flutter Architecture",
      summary:
        "Shared Flutter architecture supporting multiple organizations through flavors, build variants, branding, and feature-specific configuration.",
      technologies: ["Flutter Flavors", "Build Variants", "Shared Codebase"],
      caseStudy: "case-studies/white-label.html",
      placeholder: true,
    },
    {
      id: "rhapsody",
      title: "Rhapsody Merchandising",
      period: "December 2020 – August 2021",
      role: "Built from scratch",
      summary:
        "Flutter application for field merchandisers covering store visits, reporting, store-level data capture, and offline-capable synchronization.",
      technologies: ["Flutter", "Dart", "REST APIs", "Camera", "Geolocation"],
      images: [
        {
          src: "rms",
          alt: "Rhapsody Merchandising mobile screens for field store reporting",
          caption: "Field merchandising workflows",
        },
      ],
      links: [
        {
          label: "Play Store",
          href: "https://play.google.com/store/apps/details?id=rameolic.merchandising",
        },
      ],
      features: [
        "Store visit workflows",
        "Field reporting",
        "Store-level data capture",
        "Camera integration",
        "Geolocation",
        "File system access",
        "Offline-capable workflows",
        "Backend synchronization",
      ],
    },
    {
      id: "halo",
      title: "Halo CRM",
      period: "December 2020 – August 2021",
      role: "Built from scratch",
      summary:
        "Flutter CRM application for lead tracking, delivery scheduling, and rider-related workflows with REST API integrations.",
      technologies: ["Flutter", "Dart", "REST APIs"],
      images: [
        {
          src: "halo",
          alt: "Halo CRM mobile application screens for leads and deliveries",
          caption: "CRM mobile interfaces",
        },
      ],
      links: [
        {
          label: "Play Store",
          href: "https://play.google.com/store/apps/details?id=ae.ttf.halo_crm&pcampaignid=web_share",
        },
      ],
      features: [
        "Lead tracking",
        "Delivery scheduling",
        "Rider-related workflows",
        "Cross-platform mobile interfaces",
        "REST API integrations",
      ],
    },
  ],

  caseStudies: [
    {
      id: "canteen-pos",
      slug: "canteen-pos.html",
      title: "InsightsE Canteen Desktop POS",
      subtitle: "Independent one-month delivery of a production Flutter desktop POS",
      path: "case-studies/canteen-pos.html",
    },
    {
      id: "bus-tracking",
      slug: "bus-tracking.html",
      title: "Real-Time School Bus Tracking",
      subtitle: "REST + Firestore listeners + Google Maps for ~100 buses",
      path: "case-studies/bus-tracking.html",
    },
    {
      id: "white-label",
      slug: "white-label.html",
      title: "White-Label Flutter Architecture",
      subtitle: "Shared codebase with flavors, branding, and feature configuration",
      path: "case-studies/white-label.html",
    },
    {
      id: "gitlab-cicd",
      slug: "gitlab-cicd.html",
      title: "GitLab CI/CD for Android & iOS",
      subtitle: "Tag-triggered pipelines built from scratch",
      path: "case-studies/gitlab-cicd.html",
    },
  ],

  challenges: [
    {
      id: "bus",
      title: "Real-Time School Bus Tracking",
      context: "Approximately 100 GPS-equipped school buses needed reliable live location visibility in the parent experience.",
      approach: [
        "REST APIs for initial location retrieval",
        "Cloud Firestore snapshot listeners for real-time updates",
        "Google Maps visualization",
        "Stale-location detection",
        "Application lifecycle handling",
        "Listener management, cleanup, and reconnection handling",
      ],
      why: "Real-time listeners must be carefully scoped to the app lifecycle. Without cleanup and reconnection handling, apps can leak listeners, show stale markers, or miss updates after backgrounding.",
      caseStudy: "case-studies/bus-tracking.html",
      note: "Bus tracking does not use WebSockets; live updates rely on Firestore snapshot listeners after an initial REST fetch.",
    },
    {
      id: "offline",
      title: "Offline Desktop Transactions",
      context: "The Canteen POS must support wallet transaction workflows during intermittent connectivity.",
      approach: [
        "Offline transaction queuing",
        "Automatic synchronization when connectivity returns",
        "Unique transaction identifiers",
        "Backend acknowledgment handling",
        "Duplicate prevention mechanisms",
      ],
      why: "Desktop POS environments cannot assume continuous network access. Queuing, acknowledgments, and unique IDs reduce sync conflicts without requiring inventing guarantees about zero data loss.",
      caseStudy: "case-studies/canteen-pos.html",
    },
    {
      id: "white-label",
      title: "Maintaining Multiple Branded Applications",
      context: "Multiple organizations require differently branded Flutter applications with shared product capabilities.",
      approach: [
        "Shared Flutter codebase",
        "Flutter flavors and build variants",
        "Different application identifiers",
        "Branding configurations (names, icons, splash, themes)",
        "Feature-specific settings",
      ],
      why: "A shared architecture with flavors reduces duplicated app code while keeping organization-specific branding and configuration manageable across releases.",
      caseStudy: "case-studies/white-label.html",
    },
    {
      id: "complexity",
      title: "Managing Flutter Application Complexity",
      context: "Large production applications with multiple functional modules require consistent patterns to stay maintainable.",
      approach: [
        "BLoC / Cubit state management",
        "Separation of concerns",
        "Reusable widgets and shared UI patterns",
        "Modular development",
        "Code reviews and merge approvals",
      ],
      why: "Consistent architecture and review practices help teams add modules without fragmenting UI patterns or state-management approaches.",
    },
  ],

  skills: [
    {
      group: "Mobile and Desktop Engineering",
      level: "core",
      items: ["Flutter", "Dart", "Android", "iOS", "Flutter Desktop"],
    },
    {
      group: "Architecture",
      level: "core",
      items: ["BLoC", "Cubit", "Clean Architecture", "MVVM", "Reusable Components"],
    },
    {
      group: "Cloud and Real-Time",
      level: "core",
      items: [
        "Firebase Authentication",
        "Cloud Firestore",
        "Firebase Cloud Messaging",
        "REST APIs",
        "WebSockets",
        "Google Maps",
      ],
    },
    {
      group: "Hardware Integrations",
      level: "core",
      items: ["NFC/RFID", "Thermal Printing", "GPS", "Camera", "File System"],
    },
    {
      group: "DevOps and Release Engineering",
      level: "core",
      items: ["Git", "GitLab", "GitHub", "GitLab CI/CD", "Flutter Flavors", "Release Management"],
    },
    {
      group: "Web Frontend",
      level: "core",
      items: ["HTML", "CSS", "JavaScript"],
    },
    {
      group: "AI-Assisted Development",
      level: "core",
      items: ["Cursor", "ChatGPT"],
    },
    {
      group: "Additional Familiarity",
      level: "familiar",
      items: [
        "Provider",
        "Riverpod",
        "GetX",
        "SQLite",
        "Hive",
        "MySQL",
        "Unit Testing",
        "Widget Testing",
        "Integration Testing",
      ],
    },
  ],

  hardware: [
    { name: "NFC/RFID", where: "InsightsE Canteen desktop POS identification and payment-related workflows" },
    { name: "Thermal receipt printers", where: "Canteen POS receipt generation on Flutter desktop" },
    { name: "GPS and location services", where: "School bus tracking and field merchandising geolocation" },
    { name: "Google Maps", where: "Real-time bus location visualization" },
    { name: "Camera", where: "Rhapsody Merchandising store and field capture" },
    { name: "File system access", where: "Merchandising offline-capable capture and sync workflows" },
    { name: "Firebase push notifications", where: "InsightsE school communication and updates" },
    { name: "Android and iOS platforms", where: "Production Flutter mobile releases across products" },
    { name: "Flutter desktop", where: "Canteen POS production application" },
  ],

  leadership: [
    "Sprint planning and delivery coordination",
    "Task allocation across two Flutter developers",
    "Technical guidance and architecture discussions",
    "Code reviews and merge approvals",
    "UI quality standards and reusable component practices",
    "Mentoring so developers can deliver modules independently under review",
    "Collaboration with backend engineers and stakeholders",
    "Production release oversight while remaining hands-on in implementation",
  ],

  workflow: [
    "Requirement Gathering",
    "Documentation",
    "UI Design and Figma Review",
    "API Design Collaboration",
    "API Validation",
    "Branch Management",
    "UI Development",
    "API Integration",
    "Unit Testing Where Applicable",
    "AI-Assisted Code Review",
    "Module Testing",
    "Bug Fixing and Validation",
    "Deployment",
    "Code Commit and Repository Management",
  ],

  gallery: [
    {
      src: "insightse",
      alt: "InsightsE parent application screens",
      caption: "InsightsE — Parent / student experience",
    },
    {
      src: "teacher",
      alt: "InsightsE teacher application screens",
      caption: "InsightsE — Teacher workflows",
    },
    {
      src: "management",
      alt: "InsightsE management application screens",
      caption: "InsightsE — Management overview",
    },
    {
      src: "rms",
      alt: "Rhapsody Merchandising field app screens",
      caption: "Rhapsody Merchandising — field reporting",
    },
    {
      src: "halo",
      alt: "Halo CRM application screens",
      caption: "Halo CRM — leads and delivery workflows",
    },
  ],
};
