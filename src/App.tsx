
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudySpaces from "./pages/StudySpaces";
import StudyGroups from "./pages/StudyGroups";
import Planner from "./pages/Planner";
import Resources from "./pages/Resources";
import Settings from "./pages/Settings";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/study-spaces" element={
            <Layout>
              <StudySpaces />
            </Layout>
          } />
          <Route path="/study-groups" element={
            <Layout>
              <StudyGroups />
            </Layout>
          } />
          <Route path="/planner" element={
            <Layout>
              <Planner />
            </Layout>
          } />
          <Route path="/resources" element={
            <Layout>
              <Resources />
            </Layout>
          } />
          <Route path="/settings" element={
            <Layout>
              <Settings />
            </Layout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
