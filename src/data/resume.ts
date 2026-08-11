export const profile = {
  name: "Kuldeep Gupta",
  title: "Cloud & DevOps Engineer",
  location: "Noida, Uttar Pradesh",
  email: "guptakuldeep9090@gmail.com",
  phone: "+91-8269099419",
  linkedin: "https://linkedin.com/in/kuldeepguptaazure",
  github: "https://github.com/kuldeepgupta-devops",
  githubUser: "kuldeepgupta-devops",
  projectsRepo: "https://github.com/kuldeepgupta-devops/DevOps-Projects",
  subtitle:
    "Building and automating Microsoft Azure infrastructure with Terraform, CI/CD, Docker, Kubernetes, and DevSecOps practices.",
  summary:
    "Cloud & DevOps Engineer with hands-on experience in Microsoft Azure, Terraform, Azure DevOps, GitHub Actions, and CI/CD automation. Skilled in Infrastructure as Code (IaC), Docker, Kubernetes (AKS), Azure Networking, cloud security, monitoring, and DevSecOps practices. Experienced in provisioning Azure infrastructure, developing reusable Terraform modules, implementing multi-stage CI/CD pipelines, supporting production deployments, and troubleshooting cloud infrastructure.",
};

export const skillGroups: { category: string; icon: string; items: string[] }[] = [
  { category: "Cloud", icon: "Cloud", items: ["Microsoft Azure", "Azure Resource Management"] },
  {
    category: "Infrastructure as Code",
    icon: "Boxes",
    items: ["Terraform", "Terraform Modules", "Remote Backend", "State Locking", "Workspaces"],
  },
  {
    category: "CI/CD",
    icon: "GitBranch",
    items: ["Azure DevOps", "Azure Pipelines", "GitHub Actions", "YAML Pipelines"],
  },
  {
    category: "Containers",
    icon: "Container",
    items: ["Docker", "Kubernetes (AKS)", "Azure Container Registry (ACR)"],
  },
  {
    category: "Azure Networking",
    icon: "Network",
    items: [
      "VNet",
      "Subnet",
      "NSG",
      "UDR",
      "Load Balancer",
      "Application Gateway",
      "VPN Gateway",
      "Azure DNS",
    ],
  },
  {
    category: "Identity & Security",
    icon: "ShieldCheck",
    items: ["Microsoft Entra ID", "Azure RBAC", "Managed Identity", "Azure Key Vault"],
  },
  {
    category: "Monitoring",
    icon: "Activity",
    items: ["Azure Monitor", "Log Analytics", "Network Watcher", "Alerts"],
  },
  {
    category: "DevSecOps",
    icon: "ScanLine",
    items: ["tfsec", "TFLint", "Terratest", "TruffleHog", "Super-Linter"],
  },
  { category: "Version Control", icon: "GitFork", items: ["Git", "GitHub", "Azure Repos"] },
  { category: "Scripting", icon: "Terminal", items: ["PowerShell", "Python", "Bash"] },
  { category: "Operating Systems", icon: "MonitorCog", items: ["Linux (Ubuntu)", "Windows Server"] },
];

export const experience = {
  role: "Cloud & DevOps Engineer",
  company: "Appmentro Private Limited",
  location: "Noida",
  duration: "June 2024 – Present",
  responsibilities: [
    "Provision and manage Microsoft Azure infrastructure using Terraform, following Infrastructure as Code (IaC) best practices.",
    "Develop and maintain reusable Terraform modules with Remote Backend, State Locking, Workspaces, Variables, Outputs, Lifecycle Blocks, and Data Sources.",
    "Build and maintain multi-stage Azure DevOps YAML CI/CD pipelines across Development, QA, UAT, and Production environments.",
    "Automate infrastructure provisioning and application deployments using Azure DevOps, GitHub Actions, PowerShell, and Python.",
    "Deploy and manage containerized workloads using Docker, Azure Kubernetes Service (AKS), and Azure Container Registry (ACR).",
    "Configure and manage Azure networking components including VNet, Subnet, NSG, UDR, Load Balancer, Application Gateway, VPN Gateway, and Azure DNS.",
    "Implement Azure security and access controls using Microsoft Entra ID, Azure RBAC, Managed Identity, and Azure Key Vault.",
    "Configure Azure Monitor, Log Analytics, Alerts, and Network Watcher for infrastructure monitoring, troubleshooting, and operational visibility.",
    "Collaborate with Development, QA, and Infrastructure teams for production deployments, release management, incident resolution, RCA, and infrastructure improvements.",
  ],
};

export const projects = [
  {
    title: "Azure Network Operations & Infrastructure Management",
    description:
      "Managed Azure production network infrastructure and supported day-to-day cloud operations.",
    responsibilities: [
      "Configured VNet, Subnet, NSG, UDR, Load Balancer, Application Gateway, VPN Gateway, Azure DNS, and related networking components.",
      "Monitored Azure infrastructure using Azure Monitor, Log Analytics, and Network Watcher.",
      "Troubleshot routing, DNS, VPN, NSG, firewall, and VM connectivity issues.",
      "Supported production deployments, infrastructure maintenance, and incident management.",
    ],
    technologies: [
      "Microsoft Azure",
      "Terraform",
      "Azure Networking",
      "Azure Monitor",
      "Log Analytics",
      "PowerShell",
    ],
    architecture: [
      "VNet / Subnet segmentation",
      "NSG + UDR traffic control",
      "Load Balancer & Application Gateway",
      "VPN Gateway connectivity",
      "Azure DNS resolution",
      "Azure Monitor + Log Analytics + Network Watcher",
    ],
  },
  {
    title: "Azure Cloud Infrastructure for Learning Management System (LMS)",
    description:
      "Designed and provisioned secure Azure infrastructure for a cloud-based Learning Management System (LMS).",
    responsibilities: [
      "Provisioned Azure resources using reusable Terraform modules following IaC practices.",
      "Developed Azure DevOps YAML CI/CD pipelines for automated application deployments.",
      "Integrated Azure Key Vault and Microsoft Entra ID for secure authentication and secrets management.",
      "Configured Azure App Service, Azure SQL Database, Azure Storage Account, Azure Monitor, and Log Analytics.",
      "Automated deployment and operational tasks using PowerShell.",
    ],
    technologies: [
      "Microsoft Azure",
      "Terraform",
      "Azure DevOps",
      "Azure App Service",
      "Azure SQL Database",
      "Azure Storage Account",
      "Azure Key Vault",
      "Azure Monitor",
      "Log Analytics",
      "PowerShell",
    ],
    architecture: [
      "Terraform modules provisioning Azure resources",
      "Azure DevOps YAML CI/CD pipelines",
      "Azure App Service application tier",
      "Azure SQL Database + Storage Account",
      "Azure Key Vault + Microsoft Entra ID",
      "Azure Monitor + Log Analytics",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (Cloud Computing)",
    school: "Chandigarh University",
    detail: "Mode: Online",
    duration: "January 2026 – Present",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Awadhesh Pratap Singh University",
    detail: "",
    duration: "2021 – 2024",
  },
];

export const certification = {
  name: "Microsoft Certified: Azure Administrator Associate",
  code: "AZ-104",
};

export const architectureFlow = [
  { label: "Developer", icon: "User", note: "Code, IaC and pipeline definitions" },
  { label: "Git / GitHub", icon: "GitBranch", note: "Version control and collaboration" },
  {
    label: "Azure DevOps / GitHub Actions",
    icon: "Workflow",
    note: "Multi-stage YAML CI/CD pipelines",
  },
  { label: "Terraform", icon: "Boxes", note: "Reusable modules, remote backend, state locking" },
  { label: "Azure Infrastructure", icon: "Cloud", note: "Provisioned Azure resources" },
  { label: "Docker", icon: "Container", note: "Containerized workloads" },
  { label: "AKS / ACR", icon: "Ship", note: "Kubernetes workloads and container registry" },
  { label: "Azure Monitoring", icon: "Activity", note: "Azure Monitor and Network Watcher" },
  { label: "Log Analytics / Alerts", icon: "BellRing", note: "Operational visibility" },
];
