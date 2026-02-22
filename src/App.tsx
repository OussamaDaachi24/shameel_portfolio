import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import AiEngineerPage from "./pages/AiEngineerPage";
import FullstackDevPage from "./pages/FullstackDevPage";
import FilmmakerPage from "./pages/FilmmakerPage";
import ManagerPage from "./pages/ManagerPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio/ai-engineer" element={<AiEngineerPage />} />
            <Route path="/portfolio/fullstack-dev" element={<FullstackDevPage />} />
            <Route path="/portfolio/filmmaker" element={<FilmmakerPage />} />
            <Route path="/portfolio/manager" element={<ManagerPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
