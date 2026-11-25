import React, { Suspense, lazy } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AppShell } from './components/AppShell';
import { CurriculumPage } from './pages/CurriculumPage';

const DashboardPage = lazy(() =>
  import('./pages/DashboardPage').then((m) => ({ default: m.DashboardPage }))
);
const JobsPage = lazy(() =>
  import('./pages/JobsPage').then((m) => ({ default: m.JobsPage }))
);
const LanguageLabPage = lazy(() =>
  import('./pages/LanguageLabPage').then((m) => ({ default: m.LanguageLabPage }))
);
const ToolsPage = lazy(() =>
  import('./pages/ToolsPage').then((m) => ({ default: m.ToolsPage }))
);
const ProfilePage = lazy(() =>
  import('./pages/ProfilePage').then((m) => ({ default: m.ProfilePage }))
);

const PageFallback: React.FC = () => (
  <div className="py-16 text-center text-sm text-ink-500">正在加载板块内容...</div>
);

const KiwiPathRoutes: React.FC = () => {
  const { activeTab, loaded } = useApp();

  if (!loaded) {
    return (
      <div className="min-h-screen bg-alps-50 flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="text-3xl">🌿</div>
          <div className="text-sm font-semibold text-fern-900">正在加载 KiwiPath 离线百科知识库...</div>
        </div>
      </div>
    );
  }

  return (
    <AppShell>
      <Suspense fallback={<PageFallback />}>
        {activeTab === 'dashboard' && <DashboardPage />}
        {activeTab === 'curriculum' && <CurriculumPage />}
        {activeTab === 'jobs' && <JobsPage />}
        {activeTab === 'language' && <LanguageLabPage />}
        {activeTab === 'tools' && <ToolsPage />}
        {activeTab === 'profile' && <ProfilePage />}
      </Suspense>
    </AppShell>
  );
};

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <KiwiPathRoutes />
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
