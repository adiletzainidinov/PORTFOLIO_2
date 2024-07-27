import { Outlet } from 'react-router';
import Footer from '../components/home-page-components/footer/Footer';
import Header from '../components/home-page-components/header/Header';

const Layout = () => {
  return (
    <>
      <Header style={{display: 'flex'}} />
      <main style={{marginTop: 70}}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
