import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { ModuleContent } from '../components/ModuleContent';
import { Achievements } from '../components/Achievements';
import { Profile } from '../components/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/module/:moduleId',
    element: <ModuleContent />,
  },
  {
    path: '/achievements',
    element: <Achievements />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}