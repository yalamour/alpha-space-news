import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Apod, ErrorMain, HomeLayout, Hubble, Landing, News, SingleHubble, SpaceX, Webb } from './pages';
import { ErrorElement } from './components';
import { newsPageLoader } from './loaders/news.loader';
import { hubblePageLoader } from './loaders/hubble.loader';
import { apodPageLoader } from './loaders/apod.loader';
import { webbPageLoader } from './loaders/webb.loader';
import { spaceXPageLoader } from './loaders/spacex.loader';
import { landingPageLoader } from './loaders/landing.loader';
import singleHubbleLoader from './loaders/singleHubble.loader';

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <HomeLayout />, 
    errorElement: <ErrorMain />,
    children: [
      { index: true, element: <Landing />, loader:landingPageLoader, errorElement: <ErrorElement />},
      { path: "news", element: <News />, loader:newsPageLoader, errorElement: <ErrorElement /> },
      { path: "webb", element: <Webb />, loader:webbPageLoader, errorElement: <ErrorElement /> },
      { path: "spacex", element: <SpaceX />, loader:spaceXPageLoader, errorElement: <ErrorElement /> },
      { path: "apod", element: <Apod />, loader:apodPageLoader, errorElement: <ErrorElement /> },
      { path: "hubble", element: <Hubble />, loader:hubblePageLoader, errorElement: <ErrorElement /> },
      { path: "hubble/:id", element: <SingleHubble />, loader:singleHubbleLoader, errorElement: <ErrorElement /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
