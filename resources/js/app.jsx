import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.min.css'; // dacă folosești Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; // pentru iconițe
import './components/SearchForm.css'; // sau orice alt CSS custom

const queryClient = new QueryClient();

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.jsx');
    return pages[`./Pages/${name}.jsx`]();
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <QueryClientProvider client={queryClient}>
        <App {...props} />
      </QueryClientProvider>
    );
  },
});
