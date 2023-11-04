import { createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import Homepage from './components/homepage';
import Proposals from './components/proposals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/proposals', element: <Proposals /> },
    ],
  },
]);

export default router;
