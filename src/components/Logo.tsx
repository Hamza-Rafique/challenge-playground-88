import { Code2 } from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Code2 className="h-6 w-6 text-primary" />
      <span className="font-bold text-xl text-primary">CodeMaster</span>
    </div>
  );
};