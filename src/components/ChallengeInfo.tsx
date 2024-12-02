import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ChallengeInfoProps {
  title: string;
  description: string;
  progress: number;
}

const ChallengeInfo = ({ title, description, progress }: ChallengeInfoProps) => {
  return (
    <Card className="bg-card p-6">
      <h2 className="text-xl font-semibold text-primary-foreground mb-4">
        {title}
      </h2>
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Progress</h3>
        <Progress value={progress} className="w-full" />
      </div>
    </Card>
  );
};

export default ChallengeInfo;