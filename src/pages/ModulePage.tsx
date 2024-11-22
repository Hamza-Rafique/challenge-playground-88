import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import CodeEditor from "@/components/CodeEditor";

const ModulePage = () => {
  const { moduleId } = useParams();

  // This would normally come from an API
  const moduleData = {
    title: moduleId?.charAt(0).toUpperCase() + moduleId?.slice(1),
    description: "Learn and practice through hands-on coding challenges",
    currentTask: {
      title: "Array Reversal",
      description: "Write a function that reverses an array without using built-in methods.",
      initialCode: "function reverseArray(arr) {\n  // Your code here\n}",
    },
  };

  const handleRunCode = (code: string) => {
    console.log("Running code:", code);
    // Here you would normally evaluate the code and run tests
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">
          {moduleData.title}
        </h1>
        <p className="text-muted-foreground mb-8">{moduleData.description}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card p-6">
            <h2 className="text-xl font-semibold text-primary-foreground mb-4">
              {moduleData.currentTask.title}
            </h2>
            <p className="text-muted-foreground">
              {moduleData.currentTask.description}
            </p>
          </Card>
          <CodeEditor
            initialCode={moduleData.currentTask.initialCode}
            onRun={handleRunCode}
          />
        </div>
      </div>
    </div>
  );
};

export default ModulePage;