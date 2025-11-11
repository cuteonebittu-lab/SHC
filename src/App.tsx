import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ContentProvider } from './contexts/ContentContext';
import AdminPanel from './components/AdminPanel';
import { router } from './router';

function App() {
  return (
    <HelmetProvider>
      <ContentProvider>
        <RouterProvider router={router} />
        <AdminPanel />
      </ContentProvider>
    </HelmetProvider>
  );
}

export default App
