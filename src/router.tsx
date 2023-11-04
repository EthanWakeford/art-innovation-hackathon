import { createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import Homepage from './homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Homepage /> },
      // { path: '/about', element: <About /> },
    ],
  },
]);

export default router;
