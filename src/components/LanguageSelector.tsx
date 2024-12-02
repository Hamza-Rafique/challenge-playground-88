import { Button } from "@/components/ui/button";

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: "javascript" | "python" | "typescript") => void;
}

const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={() => onLanguageChange("javascript")}
        className={currentLanguage === "javascript" ? "bg-primary text-primary-foreground" : ""}
      >
        JavaScript
      </Button>
      <Button
        variant="outline"
        onClick={() => onLanguageChange("python")}
        className={currentLanguage === "python" ? "bg-primary text-primary-foreground" : ""}
      >
        Python
      </Button>
      <Button
        variant="outline"
        onClick={() => onLanguageChange("typescript")}
        className={currentLanguage === "typescript" ? "bg-primary text-primary-foreground" : ""}
      >
        TypeScript
      </Button>
    </div>
  );
};

export default LanguageSelector;