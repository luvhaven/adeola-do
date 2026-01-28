export interface ExperienceItem {
    company: string;
    role: string;
    duration: string;
    location: string;
    achievements: string[];
    technologies: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    year: string;
    status: 'completed' | 'in-progress';
}

export interface MetricItem {
    icon: string;
    value: string;
    label: string;
    description: string;
}

export interface SkillCategory {
    category: string;
    skills: string[];
}

// Hero Section Data
export const heroData = {
    statusText: "Open to remote work and sponsored relocation",
    headline: "ADEOLA DANIEL-ORIAZOWAN",
    subtitle: "(IBRAHIM)",
    jobTitle: "Cloud Infrastructure Engineer | DevOps Engineer",
    location: "Lagos, Nigeria",
    valueProposition: "5+ years of hands-on experience designing, building, and automating secure, scalable cloud-native infrastructures across AWS, Azure, and GCP. Expertise in Infrastructure as Code, container orchestration, distributed systems, and CI/CD pipelines.",
    yearsExperience: 5,
    email: "adeifeib@gmail.com",
    phone: "+234 8160806303",
    githubUrl: "https://github.com/ayanfe5",
    linkedinUrl: "https://www.linkedin.com/in/adeoladaniel-oriazowan/",
};

// Metrics Data
export const metricsData: MetricItem[] = [
    {
        icon: "Cloud",
        value: "5+",
        label: "Years Experience",
        description: "Building cloud-native solutions"
    },
    {
        icon: "Award",
        value: "4+",
        label: "Certifications",
        description: "AWS & Microsoft certified"
    },
    {
        icon: "Boxes",
        value: "3",
        label: "Cloud Platforms",
        description: "AWS, Azure, GCP expertise"
    },
    {
        icon: "Rocket",
        value: "100+",
        label: "Deployments",
        description: "Automated CI/CD pipelines"
    }
];

// Professional Experience
export const experienceData: ExperienceItem[] = [
    {
        company: "CapitalSage Holdings (Ercas)",
        role: "Lead DevOps Engineer",
        duration: "May 2025 – Present",
        location: "Lagos, Nigeria",
        achievements: [
            "Architected and managed Kubernetes deployments on GCP using Helm and Rancher for mission-critical fintech applications",
            "Built and maintained distributed systems integrating Kafka, RabbitMQ, and Redis for efficient messaging and caching",
            "Implemented IaC using Terraform and AWS CloudFormation for automated, secure infrastructure provisioning",
            "Developed monitoring solutions with New Relic and CloudWatch, ensuring high availability and performance",
            "Conducted container security scans (Trivy) and code quality assessments (SonarQube) as part of DevOps practices"
        ],
        technologies: ["GCP", "Kubernetes", "Helm", "Rancher", "Kafka", "RabbitMQ", "Redis", "Terraform", "CloudFormation", "New Relic", "CloudWatch", "Trivy", "SonarQube"]
    },
    {
        company: "Seamfix",
        role: "Cloud & Infrastructure Engineer",
        duration: "April 2024 – May 2025",
        location: "Lagos, Nigeria",
        achievements: [
            "Designed and automated cloud infrastructure on AWS with Terraform and Ansible",
            "Managed CI/CD pipelines, automated deployments, and performed system patching/upgrades",
            "Supported large-scale infrastructure operations, optimizing uptime and stability",
            "Implemented caching strategies using Redis to improve application performance"
        ],
        technologies: ["AWS", "Terraform", "Ansible", "CI/CD", "Redis", "System Administration"]
    },
    {
        company: "Prunedge Development Technology Ltd.",
        role: "Lead Cloud Infrastructure Engineer",
        duration: "July 2021 – April 2024",
        location: "Lagos, Nigeria",
        achievements: [
            "Managed multi-cloud infrastructure (AWS, Azure, GCP) and orchestrated containerized applications with EKS/AKS",
            "Integrated distributed messaging systems (Kafka, RabbitMQ) for scalable backend services",
            "Developed CI/CD pipelines integrating ArgoCD, GitHub Actions, and Azure DevOps for continuous deployment",
            "Applied IaC principles using Terraform and Ansible, streamlining provisioning and upgrades",
            "Provided technical support across multiple countries, resolving complex infrastructure challenges"
        ],
        technologies: ["AWS", "Azure", "GCP", "EKS", "AKS", "Kafka", "RabbitMQ", "ArgoCD", "GitHub Actions", "Azure DevOps", "Terraform", "Ansible"]
    },
    {
        company: "Tech4Dev",
        role: "Cloud Infrastructure Engineer",
        duration: "Dec 2020 – Aug 2022",
        location: "Lagos, Nigeria",
        achievements: [
            "Configured virtual machines, storage, and networking on AWS and Azure",
            "Automated infrastructure deployment using CloudFormation and ARM templates",
            "Migrated on-premise Windows applications to AWS EC2, improving performance by 60%",
            "Implemented DevOps best practices across CI/CD pipelines, container orchestration, and monitoring"
        ],
        technologies: ["AWS", "Azure", "EC2", "CloudFormation", "ARM Templates", "DevOps", "CI/CD", "Container Orchestration"]
    },
    {
        company: "HAATROB Technical Services",
        role: "Technical Support Engineer",
        duration: "Oct 2017 – Nov 2020",
        location: "Lagos, Nigeria",
        achievements: [
            "Delivered technical support for software and infrastructure issues",
            "Managed cloud resources and performed hands-on deployments",
            "Installed and configured IIS web servers on Windows environments"
        ],
        technologies: ["Cloud Administration", "IIS", "Windows Server", "Technical Support"]
    }
];

// Skills organized by category
export const skillsData: SkillCategory[] = [
    {
        category: "Cloud Platforms",
        skills: ["AWS", "Azure", "GCP", "DigitalOcean", "Linode"]
    },
    {
        category: "Infrastructure as Code (IaC)",
        skills: ["Terraform", "AWS CloudFormation", "ARM Templates", "Bicep", "Ansible"]
    },
    {
        category: "Distributed & Streaming Systems",
        skills: ["Kafka", "Celery", "RabbitMQ", "Redis"]
    },
    {
        category: "Containerization & Orchestration",
        skills: ["Docker", "Kubernetes (EKS, AKS, GKE)", "Helm", "Rancher"]
    },
    {
        category: "CI/CD & Automation",
        skills: ["GitHub Actions", "ArgoCD", "Jenkins", "AWS CodePipeline", "Azure Pipelines", "Bitbucket Pipelines"]
    },
    {
        category: "Scripting & Programming",
        skills: ["Python", "Shell/Bash", "YAML", "JSON"]
    },
    {
        category: "Monitoring & Observability",
        skills: ["Prometheus", "Grafana", "New Relic", "AWS CloudWatch", "Datadog"]
    },
    {
        category: "Networking & Security",
        skills: ["IAM", "RBAC", "Security Groups", "Load Balancing", "Auto Scaling", "Disaster Recovery"]
    },
    {
        category: "Databases",
        skills: ["SQL", "MySQL", "PostgreSQL", "MSSQL", "OracleDB", "MongoDB"]
    },
    {
        category: "Operating Systems",
        skills: ["Linux (Ubuntu, CentOS)", "Windows"]
    }
];

// Certifications
export const certificationsData: Certification[] = [
    {
        name: "AWS Certified SysOps Administrator Associate",
        issuer: "Udemy",
        year: "2025",
        status: "completed"
    },
    {
        name: "AWS Cloud DevOps Engineer Nanodegree",
        issuer: "Udacity",
        year: "2023",
        status: "completed"
    },
    {
        name: "Microsoft Teams Administrator Associate",
        issuer: "Microsoft",
        year: "2022",
        status: "completed"
    },
    {
        name: "Microsoft Security, Compliance & Identity Fundamentals",
        issuer: "Microsoft",
        year: "2022",
        status: "completed"
    },
    {
        name: "AWS Certified Solutions Architect Associate",
        issuer: "AWS",
        year: "2025",
        status: "in-progress"
    },
    {
        name: "Microsoft Certified: DevOps Engineer Expert",
        issuer: "Microsoft",
        year: "2025",
        status: "in-progress"
    }
];

// Education
export const educationData = {
    degree: "B.Sc. in Chemistry",
    institution: "University of Ilorin",
    location: "Kwara State, Nigeria",
    duration: "2012 – 2016"
};

// Contact Information
export const contactData = {
    email: "adeifeib@gmail.com",
    phone: "+234 8160806303",
    location: "Lagos, Nigeria",
    linkedin: "https://www.linkedin.com/in/adeoladaniel-oriazowan/",
    github: "https://github.com/ayanfe5",
    availability: "Open to remote work and sponsored relocation"
};
