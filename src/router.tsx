// import React from 'react';
import { createHashRouter } from 'react-router-dom';
import { ContentProvider } from './contexts/ContentContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Treatments from './pages/Treatments';
import Appointment from './pages/Appointment';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage'; // Import the new ErrorPage component

export const router = createHashRouter([
  {
    path: '/',
    element: (
      <ContentProvider>
        <MainLayout />
      </ContentProvider>
    ),
    errorElement: <ErrorPage />, // Add the ErrorPage here
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'treatments',
        element: <Treatments />,
      },
      {
        path: 'appointment',
        element: <Appointment />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);
