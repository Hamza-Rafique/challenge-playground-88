import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl font-bold text-primary-foreground">
          Master Coding Through Practice
        </h1>
        
        <p className="text-xl text-muted-foreground">
          Join our platform to access interactive coding challenges and improve your programming skills
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="min-w-[200px]"
            onClick={() => console.log("Sign up clicked")}
          >
            Create Account
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="min-w-[200px]"
            onClick={() => console.log("Sign in clicked")}
          >
            Sign In
          </Button>
        </div>

        <Button 
          variant="ghost"
          className="mt-4"
          onClick={() => navigate("/modules")}
        >
          Continue as Guest
        </Button>
      </div>
    </div>
  );
};

export default Home;