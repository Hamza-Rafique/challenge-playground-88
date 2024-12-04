import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Modules from "./pages/Modules";
import ModulePage from "./pages/ModulePage";
import LearningPage from "./pages/LearningPage";
import Forum from "./pages/Forum";
import Leaderboard from "./pages/Leaderboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/module/:moduleId" element={<ModulePage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;