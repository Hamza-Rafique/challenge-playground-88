import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
import ChallengeInfo from "../components/ChallengeInfo";
import LanguageSelector from "../components/LanguageSelector";

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

  const formattedModuleId = moduleId?.toLowerCase().replace(/\s+/g, '-');
  const challenges = mockChallenges[formattedModuleId as keyof typeof mockChallenges] || [];
  const currentChallenge = challenges[currentChallengeIndex];

  useEffect(() => {
    if (currentChallenge) {
      setCode(currentChallenge.initialCode[currentLanguage]);
    }
  }, [currentChallenge, currentLanguage]);

  useEffect(() => {
    setCurrentChallengeIndex(0);
    setProgress(0);
  }, [moduleId]);

  const handleLanguageChange = (newLanguage: "javascript" | "python" | "typescript") => {
    setCurrentLanguage(newLanguage);
    if (currentChallenge) {
      setCode(currentChallenge.initialCode[newLanguage]);
    }
  };

  const runTests = () => {
    try {
      const testFunction = new Function("return " + code)();
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
      setCode(challenges[currentChallengeIndex + 1].initialCode[currentLanguage]);
    } else {
      toast({
        title: "Congratulations! 🎉",
        description: "You've completed all challenges in this module!",
      });
      navigate("/modules");
    }
  };

  if (!currentChallenge || !challenges.length) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">Module not found</h2>
          <Button onClick={() => navigate("/modules")}>Return to Modules</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-primary-foreground">
            {moduleId?.charAt(0).toUpperCase() + moduleId?.slice(1)}
          </h1>
          <LanguageSelector
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChallengeInfo
            title={currentChallenge.title}
            description={currentChallenge.description}
            progress={progress}
          />
          <CodeEditor
            code={code}
            language={currentLanguage}
            onCodeChange={(value) => setCode(value || "")}
            onRunTests={runTests}
            onNextChallenge={handleNextChallenge}
            isComplete={progress === 100}
            isLastChallenge={currentChallengeIndex === challenges.length - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default ModulePage;
