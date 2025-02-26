
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AINews from "./pages/AINews";
import NewsDetail from "./pages/NewsDetail";
import AIModels from "./pages/AIModels";
import ModelDetail from "./pages/ModelDetail";
import Training from "./pages/Training";
import Marketplace from "./pages/Marketplace";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-news" element={<AINews />} />
          <Route path="/ai-news/:newsId" element={<NewsDetail />} />
          <Route path="/ai-models" element={<AIModels />} />
          <Route path="/ai-models/:modelId" element={<ModelDetail />} />
          <Route path="/training" element={<Training />} />
          <Route path="/marketplace" element={<Marketplace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
