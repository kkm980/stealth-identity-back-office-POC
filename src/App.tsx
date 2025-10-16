/**
 * Main App Component
 * Sets up routing and wraps the app with necessary providers
 */

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { setCurrentModule } from './store/selectedModuleSlice';
import { getModuleKeyFromUrl } from './utils/route-name-extractor';

import { Layout } from './components/Layout';
import { Dashboard, RoleManagement, UserGroupManagement, ConfigurationManagement, Enrollment, Identification, ManageIdentity, Reports, Verification, RulesConfiguration, BulkImport, VerificationStore, VerificationStatus, IdentificationStatus, DiagnosticsTool, PendingUpload, NotFound } from './pages/index';

function App() {
  const dispatch = useDispatch();

  return (
    <Router>
      <AppRoutes dispatch={dispatch} />
    </Router>
  );
}

// Separate component to use useLocation
function AppRoutes({ dispatch }: { dispatch: any }) {
  const location = useLocation();

  useEffect(() => {
    const currentUrl = window.location.href;
    const moduleKey = getModuleKeyFromUrl(currentUrl);
    if (moduleKey) {
      dispatch(setCurrentModule(moduleKey));
    } else {
      // Fallback if URL is invalid
      // window.location.href = '/';
    }
  }, [location.pathname, dispatch]); // Runs on path change

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/role-management" element={<RoleManagement />} />
        <Route path="/user-group-management" element={<UserGroupManagement />} />
        <Route path="/configuration-management" element={<ConfigurationManagement />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/identification" element={<Identification />} />
        <Route path="/manage-identity" element={<ManageIdentity />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/rules-configuration" element={<RulesConfiguration />} />
        <Route path="/bulk-import" element={<BulkImport />} />
        <Route path="/verification-store" element={<VerificationStore />} />
        <Route path="/verification-status" element={<VerificationStatus />} />
        <Route path="/identification-status" element={<IdentificationStatus />} />
        <Route path="/diagnostics-tool" element={<DiagnosticsTool />} />
        <Route path="/pending-upload" element={<PendingUpload />} />

         {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;

