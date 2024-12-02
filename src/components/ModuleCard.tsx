import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface ModuleCardProps {
  title: string;
  description: string;
  taskCount: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const ModuleCard = ({ title, description, taskCount, difficulty }: ModuleCardProps) => {
  const navigate = useNavigate();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Advanced":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const formatUrlTitle = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <Card 
      className="hover:scale-105 transition-transform cursor-pointer bg-card"
      onClick={() => navigate(`/module/${formatUrlTitle(title)}`)}
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl text-primary-foreground">{title}</CardTitle>
          <Badge className={`${getDifficultyColor(difficulty)} text-white`}>
            {difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <p className="text-sm text-primary">{taskCount} tasks</p>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;