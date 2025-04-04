import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import { ComponentFactory } from './components';

import contentData from './contentData';
import './App.css';

type sectionType = {
  navigation: {
    to: string;
    linkName: string;
  };
  content: {
    title: string;
    code: string;
    details: string;
    componentType: string;
  };
};

type sectionsType = {
  sections: sectionType[];
};

const createChildrens = ({ sections }: sectionsType) => {
  return sections.map((section: sectionType) => {
    const { navigation, content } = section;

    return {
      path: navigation.to,
      element: <ComponentFactory type={content.componentType} />,
    };
  });
};

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
        ...createChildrens(contentData as sectionsType),
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
