import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000} />
    </div>
  );
};
