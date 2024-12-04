import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserRound, LogOut, MessageSquare, Trophy, Home, Info, Mail } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const Header = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Demo User");

  useEffect(() => {
    const checkLoginStatus = () => {
      const isDemo = localStorage.getItem("demoUser") === "demo";
      setIsLoggedIn(isDemo);
      
      if (isDemo && window.location.pathname === "/") {
        navigate("/learning");
      }
    };

    checkLoginStatus();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("demoUser");
    setIsLoggedIn(false);
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    navigate("/");
  };

  const handleLoginClick = () => {
    localStorage.setItem("demoUser", "demo");
    setIsLoggedIn(true);
    navigate("/learning");
    toast({
      title: "Logged in successfully",
      description: "Welcome back!",
    });
  };

  return (
    <header className="w-full bg-primary shadow-sm mb-8 fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="mr-8">
              <Logo />
            </Link>
            <div className="flex space-x-8">
              <Link 
                to="/" 
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <Info className="h-4 w-4" />
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </Link>
              <Link 
                to="/forum" 
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Forum
              </Link>
              <Link 
                to="/leaderboard" 
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <Trophy className="h-4 w-4" />
                Leaderboard
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <UserRound className="h-6 w-6 text-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                {isLoggedIn ? (
                  <>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center">
                      <UserRound className="mr-2 h-4 w-4" />
                      <span>{userName}</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="flex items-center text-red-600 focus:text-red-600" 
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem onClick={handleLoginClick}>
                    <UserRound className="mr-2 h-4 w-4" />
                    <span>Log in</span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;