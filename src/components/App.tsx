import { GlobalStyle } from '../GlobalStyle';
import Header from './header';
import { Outlet } from 'react-router-dom';
import { MyWallet } from '../near/near-wallet';

function App() {
  console.log(new MyWallet());

  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
