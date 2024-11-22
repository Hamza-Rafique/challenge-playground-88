import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface CodeEditorProps {
  initialCode: string;
  onRun: (code: string) => void;
}

const CodeEditor = ({ initialCode, onRun }: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const { toast } = useToast();

  const handleRun = () => {
    try {
      onRun(code);
      toast({
        title: "Code executed successfully!",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error executing code",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="bg-card p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-primary-foreground">Code Editor</h3>
        <Button onClick={handleRun}>Run Code</Button>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="flex-1 bg-background text-foreground p-4 font-mono text-sm resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        spellCheck="false"
      />
    </Card>
  );
};

export default CodeEditor;