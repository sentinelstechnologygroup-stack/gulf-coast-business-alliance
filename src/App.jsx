import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Join from '@/pages/Join';
import Directory from '@/pages/Directory';
import Sponsorships from '@/pages/Sponsorships';
import RequestService from '@/pages/RequestService';
import Events from '@/pages/Events';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import MemberDashboard from '@/pages/MemberDashboard';
import LeadDashboard from '@/pages/LeadDashboard';
import ContentManagement from '@/pages/ContentManagement';
import CategoriesHub from '@/pages/categories/CategoriesHub';
import CategoryDetail from '@/pages/categories/CategoryDetail';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-navy">
        <div className="w-8 h-8 border-4 border-gold/20 border-t-gold rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/join" element={<Join />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/sponsorships" element={<Sponsorships />} />
        <Route path="/request-service" element={<RequestService />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/member-dashboard" element={<MemberDashboard />} />
        <Route path="/lead-dashboard" element={<LeadDashboard />} />
        <Route path="/content-management" element={<ContentManagement />} />
        <Route path="/categories" element={<CategoriesHub />} />
        <Route path="/categories/:slug" element={<CategoryDetail />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App