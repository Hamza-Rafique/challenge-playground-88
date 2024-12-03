import { Card } from "@/components/ui/card";
import ModuleCard from "@/components/ModuleCard";

const modules = [
  {
    title: "Linux Fundamentals",
    description: "Master essential Linux commands, file systems, and system administration",
    taskCount: 12,
    difficulty: "Beginner" as const,
  },
  {
    title: "Git Version Control",
    description: "Learn Git workflows, branching strategies, and collaboration best practices",
    taskCount: 15,
    difficulty: "Beginner" as const,
  },
  {
    title: "CI CD Pipeline",
    description: "Build and manage continuous integration and deployment pipelines",
    taskCount: 18,
    difficulty: "Intermediate" as const,
  },
  {
    title: "Docker Containers",
    description: "Master containerization with Docker, including networking and volumes",
    taskCount: 20,
    difficulty: "Intermediate" as const,
  },
  {
    title: "Kubernetes",
    description: "Deploy and manage containerized applications with Kubernetes",
    taskCount: 25,
    difficulty: "Advanced" as const,
  },
  {
    title: "Infrastructure as Code",
    description: "Learn Terraform and infrastructure automation techniques",
    taskCount: 22,
    difficulty: "Advanced" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">
          DevOps Learning Path
        </h1>
        <p className="text-muted-foreground mb-8">
          Master DevOps practices through hands-on challenges and real-world scenarios
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;