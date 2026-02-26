import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BuyPage from "./pages/BuyPage";
import AreasPage from "./pages/AreasPage";
import ContactPage from "./pages/ContactPage";
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
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/rent" element={<BuyPage />} />
          <Route path="/areas" element={<AreasPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<BuyPage />} />
          <Route path="/developers" element={<AreasPage />} />
          <Route path="/services" element={<ContactPage />} />
          <Route path="/blog" element={<AreasPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
