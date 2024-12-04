import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube, Github } from "lucide-react";
import { Logo } from "./Logo";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card mt-20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground">
              Empowering developers through interactive learning and community engagement.
            </p>
          </div>

          {/* Learning Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Learning</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/modules" className="text-muted-foreground hover:text-primary">
                  All Modules
                </Link>
              </li>
              <li>
                <Link to="/learning" className="text-muted-foreground hover:text-primary">
                  Learning Path
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-muted-foreground hover:text-primary">
                  DevOps Forum
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-muted-foreground hover:text-primary">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Community</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground">
              Join our community for real-time discussions and support.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CodeMaster. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;