import { lazy, Suspense, useState } from 'react';
import Layout from './components/Layout.jsx';

const pages = [
  { id: 'home', Component: lazy(() => import('./pages/Home.jsx')) },
  { id: 'symptoms', Component: lazy(() => import('./pages/SymptomGuidance.jsx')) },
  { id: 'chat', Component: lazy(() => import('./pages/AIChat.jsx')) },
  { id: 'medication', Component: lazy(() => import('./pages/MedicationInfo.jsx')) },
  { id: 'prevention', Component: lazy(() => import('./pages/PreventiveTips.jsx')) },
  { id: 'disclaimer', Component: lazy(() => import('./pages/Disclaimer.jsx')) },
];

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [visitedPages, setVisitedPages] = useState(() => new Set(['home']));

  function handleNavigate(pageId) {
    setVisitedPages((current) => {
      if (current.has(pageId)) return current;
      const next = new Set(current);
      next.add(pageId);
      return next;
    });
    setActivePage(pageId);
  }

  return (
    <Layout activePage={activePage} onNavigate={handleNavigate}>
      <Suspense fallback={<div className="card text-muted">Memuat halaman...</div>}>
        {pages.map(({ id, Component }) =>
          visitedPages.has(id) ? (
            <section key={id} hidden={activePage !== id} aria-hidden={activePage !== id}>
              <Component onNavigate={handleNavigate} />
            </section>
          ) : null,
        )}
      </Suspense>
    </Layout>
  );
}
