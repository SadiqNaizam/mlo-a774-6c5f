import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AdminLoginPage from "./pages/AdminLoginPage";
import FinalProposalPage from "./pages/FinalProposalPage";
import JourneyLockedPage from "./pages/JourneyLockedPage";
import JourneyStepPage from "./pages/JourneyStepPage";
import ProposerDashboardPage from "./pages/ProposerDashboardPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<AdminLoginPage />} />
          <Route path="/final-proposal" element={<FinalProposalPage />} />
          <Route path="/journey-locked" element={<JourneyLockedPage />} />
          <Route path="/journey-step" element={<JourneyStepPage />} />
          <Route path="/proposer-dashboard" element={<ProposerDashboardPage />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
