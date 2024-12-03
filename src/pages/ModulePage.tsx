import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
import ChallengeInfo from "../components/ChallengeInfo";
import LanguageSelector from "../components/LanguageSelector";

const mockChallenges = {
  "linux-fundamentals": [
    {
      id: 1,
      title: "File System Navigation",
      description: "Practice essential Linux commands for navigating and managing files.",
      initialCode: {
        javascript: "// Write shell commands here\n",
        python: "# Write shell commands here\n",
        typescript: "// Write shell commands here\n"
      },
      testCases: [
        { input: "ls -la", expected: "Successfully listed files" },
        { input: "cd /home", expected: "Changed directory" }
      ]
    },
    {
      id: 2,
      title: "User Management",
      description: "Learn to manage users and permissions in Linux.",
      initialCode: {
        javascript: "// Write user management commands\n",
        python: "# Write user management commands\n",
        typescript: "// Write user management commands\n"
      },
      testCases: [
        { input: "useradd newuser", expected: "User created" },
        { input: "chmod 755 file.txt", expected: "Permissions updated" }
      ]
    }
  ],
  "git-version-control": [
    {
      id: 1,
      title: "Git Basics",
      description: "Practice fundamental Git commands and workflows.",
      initialCode: {
        javascript: "// Write git commands here\n",
        python: "# Write git commands here\n",
        typescript: "// Write git commands here\n"
      },
      testCases: [
        { input: "git init", expected: "Repository initialized" },
        { input: "git add .", expected: "Files staged" }
      ]
    }
  ],
  "ci-cd-pipeline": [
    {
      id: 1,
      title: "Jenkins Pipeline",
      description: "Create a basic Jenkins pipeline for automated testing.",
      initialCode: {
        javascript: "// Write Jenkinsfile content\n",
        python: "# Write Jenkinsfile content\n",
        typescript: "// Write Jenkinsfile content\n"
      },
      testCases: [
        { input: "pipeline { }", expected: "Pipeline created" },
        { input: "stage('Build')", expected: "Stage added" }
      ]
    }
  ],
  "docker-containers": [
    {
      id: 1,
      title: "Dockerfile Creation",
      description: "Write a Dockerfile for a web application.",
      initialCode: {
        javascript: "// Write Dockerfile commands\n",
        python: "# Write Dockerfile commands\n",
        typescript: "// Write Dockerfile commands\n"
      },
      testCases: [
        { input: "FROM node:14", expected: "Base image set" },
        { input: "COPY . .", expected: "Files copied" }
      ]
    }
  ],
  "kubernetes": [
    {
      id: 1,
      title: "Pod Configuration",
      description: "Create and configure Kubernetes pods.",
      initialCode: {
        javascript: "// Write K8s manifest\n",
        python: "# Write K8s manifest\n",
        typescript: "// Write K8s manifest\n"
      },
      testCases: [
        { input: "kind: Pod", expected: "Pod defined" },
        { input: "containers:", expected: "Containers configured" }
      ]
    }
  ],
  "infrastructure-as-code": [
    {
      id: 1,
      title: "Terraform Resources",
      description: "Define infrastructure resources using Terraform.",
      initialCode: {
        javascript: "// Write Terraform configuration\n",
        python: "# Write Terraform configuration\n",
        typescript: "// Write Terraform configuration\n"
      },
      testCases: [
        { input: "resource \"aws_instance\"", expected: "Resource defined" },
        { input: "provider \"aws\"", expected: "Provider configured" }
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
