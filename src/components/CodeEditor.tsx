import Editor from "@monaco-editor/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CodeEditorProps {
  code: string;
  language: string;
  onCodeChange: (value: string | undefined) => void;
  onRunTests: () => void;
  onNextChallenge: () => void;
  isComplete: boolean;
  isLastChallenge: boolean;
}

const CodeEditor = ({
  code,
  language,
  onCodeChange,
  onRunTests,
  onNextChallenge,
  isComplete,
  isLastChallenge,
}: CodeEditorProps) => {
  return (
    <Card className="bg-card p-6">
      <div className="h-[400px] mb-4">
        <Editor
          height="100%"
          defaultLanguage={language}
          value={code}
          theme="vs-dark"
          onChange={onCodeChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </div>
      <div className="flex justify-between">
        <Button onClick={onRunTests}>Run Tests</Button>
        <Button 
          onClick={onNextChallenge}
          disabled={!isComplete}
        >
          {isLastChallenge ? "Complete Module" : "Next Challenge"}
        </Button>
      </div>
    </Card>
  );
};

export default CodeEditor;