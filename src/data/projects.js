const projects = [
    {
        slug: 'dc-crowd',
        title: 'DC Crowd',
        description: 'Team-based Flutter + Firebase app for real-time campus crowd monitoring with secure auth, live maps, analytics, and personalized settings. Led UI/UX and navigation.',
        longDescription: 'A collaborative Flutter and Firebase app built for Durham College to visualize real-time campus crowding, provide analytics, and deliver secure, role-based access. I focused on UI/UX, navigation, and supporting core logic.',
        image: '/images/DCCrowd.jpeg',
        tech: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Google Maps SDK', 'UI/UX'],
        github: '#',
        live: '#'
    },
    {
        slug: 'bug-testing-system',
        title: 'Bug Testing System',
        description: 'Python and Selenium-based bug tracking system that automated test execution, surfaced 39 defects, and organized logging/triage for a production website.',
        longDescription: 'A Python + Selenium automation suite that discovered and logged 39 issues, with structured bug tracking, reporting, and prioritization workflows.',
        image: '/images/Bug Testing System.png',
        tech: ['Python', 'Selenium IDE', 'Automation', 'Test Reporting', 'Bug Tracking'],
        github: '#',
        live: '#'
    },
    {
        slug: 'college-tracking-system',
        title: 'College Tracking System',
        description: 'Web-based platform built with XAMPP to streamline attendance, assignment submissions, grading, and parent visibility for student progress.',
        longDescription: 'A PHP/MySQL system (XAMPP) that centralizes attendance, assignments, grading, and parent access to student progress, improving transparency and accountability.',
        image: '/images/College Tracking System.png',
        tech: ['PHP', 'MySQL', 'XAMPP', 'HTML/CSS', 'JavaScript'],
        github: '#',
        live: '#'
    },
    {
        slug: 'product-showcase-website',
        title: 'Product Showcase Website',
        description: 'Secure product showcase app with JWT-based auth, httpOnly sessions, and role-based dashboards. Integrated Contentful Management API for author permissions and dynamic content control.',
        longDescription: 'A secure product showcase with JWT/RBAC, httpOnly cookies, and Contentful Management API integration. Authors manage their own products, while admins have full control.',
        image: '/images/product showcase.png',
        tech: ['React', 'Node.js', 'JWT', 'RBAC', 'Contentful API', 'Tailwind CSS'],
        github: 'https://gitlab.com/nirmal6120-group/assignment1productshowcase',
        live: 'https://product-showcase-website.netlify.app/'
    },
    {
        slug: 'harvesthub',
        title: 'HarvestHub',
        description: 'Marketplace platform connecting farmers directly with consumers. Supports secure buying/selling workflows with role-based access for consumer, farmer, and admin users.',
        longDescription: 'HarvestHub is a full-stack web platform where farmers can list produce directly and consumers can buy without middlemen. It implements RBAC with three roles (consumer, farmer, admin), uses Contentful to manage and serve product images/content, and MongoDB for user and account data.',
        image: '/images/HarvestHub.png',
        tech: ['React', 'Node.js', 'RBAC', 'Contentful', 'MongoDB', 'Netlify'],
        github: 'https://github.com/Nirmal6120/HarvestHub',
        live: 'https://harvesthub-platform.netlify.app/'
    },
    {
        slug: 'my-portfolio',
        title: 'My Portfolio',
        description: 'Personal portfolio website to showcase my projects, skills, and contact details with smooth animations, responsive layouts, and interactive project pages.',
        longDescription: 'This portfolio is a modern React and Tailwind CSS web app built to present my work in a clean and engaging way. It includes animated sections, reusable project cards, detailed project pages, and a responsive experience across mobile and desktop.',
        image: '/images/image Nirmal.jpeg',
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
        github: '#',
        live: '#'
    }
];

export default projects;