import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import Editor from "@monaco-editor/react";
import { useState } from "react";

// Mock data - in a real app, this would come from an API
const mockChallenges = {
  "data-structures": [
    {
      id: 1,
      title: "Array Reversal",
      description: "Write a function that reverses an array without using built-in methods.",
      initialCode: {
        javascript: "function reverseArray(arr) {\n  // Your code here\n  return arr;\n}",
        python: "def reverse_array(arr):\n    # Your code here\n    return arr",
        typescript: "function reverseArray(arr: number[]): number[] {\n  // Your code here\n  return arr;\n}"
      },
      testCases: [
        { input: [1, 2, 3], expected: [3, 2, 1] },
        { input: [5, 4], expected: [4, 5] }
      ]
    },
    {
      id: 2,
      title: "Find Maximum",
      description: "Write a function that finds the maximum number in an array.",
      initialCode: {
        javascript: "function findMax(arr) {\n  // Your code here\n}",
        python: "def find_max(arr):\n    # Your code here",
        typescript: "function findMax(arr: number[]): number {\n  // Your code here\n}"
      },
      testCases: [
        { input: [1, 5, 3], expected: 5 },
        { input: [10, 2, 8], expected: 10 }
      ]
    }
  ]
};

const ModulePage = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentLanguage, setCurrentLanguage] = useState<"javascript" | "python" | "typescript">("javascript");
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [code, setCode] = useState("");
  const [progress, setProgress] = useState(0);

  const challenges = mockChallenges[moduleId as keyof typeof mockChallenges] || [];
  const currentChallenge = challenges[currentChallengeIndex];

  const handleLanguageChange = (newLanguage: "javascript" | "python" | "typescript") => {
    setCurrentLanguage(newLanguage);
    setCode(currentChallenge.initialCode[newLanguage]);
  };

  const runTests = (userCode: string) => {
    try {
      // Create a safe environment to run the code
      const testFunction = new Function("return " + userCode)();
      
      let passedTests = 0;
      const totalTests = currentChallenge.testCases.length;

      currentChallenge.testCases.forEach((testCase) => {
        const result = testFunction(testCase.input);
        if (JSON.stringify(result) === JSON.stringify(testCase.expected)) {
          passedTests++;
        }
      });

      const score = (passedTests / totalTests) * 100;
      setProgress(score);

      if (passedTests === totalTests) {
        toast({
          title: "Success! 🎉",
          description: "All test cases passed! You can move to the next challenge.",
        });
      } else {
        toast({
          title: "Keep trying!",
          description: `Passed ${passedTests} out of ${totalTests} test cases.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error in your code",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive",
      });
    }
  };

  const handleNextChallenge = () => {
    if (currentChallengeIndex < challenges.length - 1) {
      setCurrentChallengeIndex(prev => prev + 1);
      setProgress(0);
    } else {
      toast({
        title: "Congratulations! 🎉",
        description: "You've completed all challenges in this module!",
      });
      navigate("/modules");
    }
  };

  if (!currentChallenge) {
    return <div className="container py-8">Module not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-primary-foreground">
            {moduleId?.charAt(0).toUpperCase() + moduleId?.slice(1)}
          </h1>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => handleLanguageChange("javascript")}
              className={currentLanguage === "javascript" ? "bg-primary text-primary-foreground" : ""}
            >
              JavaScript
            </Button>
            <Button
              variant="outline"
              onClick={() => handleLanguageChange("python")}
              className={currentLanguage === "python" ? "bg-primary text-primary-foreground" : ""}
            >
              Python
            </Button>
            <Button
              variant="outline"
              onClick={() => handleLanguageChange("typescript")}
              className={currentLanguage === "typescript" ? "bg-primary text-primary-foreground" : ""}
            >
              TypeScript
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card p-6">
            <h2 className="text-xl font-semibold text-primary-foreground mb-4">
              {currentChallenge.title}
            </h2>
            <p className="text-muted-foreground mb-4">
              {currentChallenge.description}
            </p>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Progress</h3>
              <Progress value={progress} className="w-full" />
            </div>
          </Card>

          <Card className="bg-card p-6">
            <div className="h-[400px] mb-4">
              <Editor
                height="100%"
                defaultLanguage={currentLanguage}
                defaultValue={currentChallenge.initialCode[currentLanguage]}
                theme="vs-dark"
                onChange={(value) => setCode(value || "")}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>
            <div className="flex justify-between">
              <Button onClick={() => runTests(code)}>Run Tests</Button>
              <Button 
                onClick={handleNextChallenge}
                disabled={progress !== 100}
              >
                {currentChallengeIndex < challenges.length - 1 ? "Next Challenge" : "Complete Module"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModulePage;