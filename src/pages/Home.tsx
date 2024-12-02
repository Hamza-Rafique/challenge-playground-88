import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CreateAccountDialog } from "@/components/CreateAccountDialog";
import { SignInDialog } from "@/components/SignInDialog";
import { Terminal, Code2, GitBranch } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl font-bold text-primary-foreground mb-6">
              Master Coding Through Practice
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our platform to access interactive coding challenges and improve your programming skills
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <CreateAccountDialog />
              <SignInDialog />
            </div>

            <Button 
              variant="ghost"
              className="mt-4 hover:bg-primary/20"
              onClick={() => navigate("/modules")}
            >
              Continue as Guest
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-card/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg hover:bg-card/80 transition-colors duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Terminal className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Challenges</h3>
              <p className="text-muted-foreground">Practice with real-world coding scenarios and improve your skills.</p>
            </div>

            <div className="p-6 rounded-lg hover:bg-card/80 transition-colors duration-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Code2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multiple Languages</h3>
              <p className="text-muted-foreground">Write code in your preferred programming language with full support.</p>
            </div>

            <div className="p-6 rounded-lg hover:bg-card/80 transition-colors duration-300 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <GitBranch className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Version Control</h3>
              <p className="text-muted-foreground">Learn best practices for managing code and collaborating with teams.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;