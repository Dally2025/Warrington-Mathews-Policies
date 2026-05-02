import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import PoliciesIndex from "@/pages/policies/index";
import TermsPolicy from "@/pages/policies/terms";
import PrivacyPolicy from "@/pages/policies/privacy";
import ComplaintsPolicy from "@/pages/policies/complaints";
import PublicationSchemePolicy from "@/pages/policies/publication-scheme";

// Layout
import { Layout } from "@/components/Layout";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/policies" component={PoliciesIndex} />
        <Route path="/policies/terms" component={TermsPolicy} />
        <Route path="/policies/privacy" component={PrivacyPolicy} />
        <Route path="/policies/complaints" component={ComplaintsPolicy} />
        <Route path="/policies/publication-scheme" component={PublicationSchemePolicy} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;