import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import LearingSession from './pages/LearingSession';
import './App.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/lerning-section-1',
          element: <LearingSession />,
        },
      ],
    },
  ],
  {
    basename: '/learn-svg', // Replace 'your-repo-name' with the actual name of your GitHub repository
  },
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
