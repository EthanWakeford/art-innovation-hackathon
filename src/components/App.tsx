import Header from './header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
