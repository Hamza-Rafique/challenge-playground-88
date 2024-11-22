import { Card } from "@/components/ui/card";
import ModuleCard from "@/components/ModuleCard";

const modules = [
  {
    title: "Data Structures",
    description: "Learn fundamental data structures like arrays, linked lists, trees, and graphs",
    taskCount: 15,
    difficulty: "Beginner" as const,
  },
  {
    title: "Algorithms",
    description: "Master essential algorithms including sorting, searching, and dynamic programming",
    taskCount: 20,
    difficulty: "Intermediate" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">
          Learn to Code
        </h1>
        <p className="text-muted-foreground mb-8">
          Master programming concepts through hands-on challenges
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