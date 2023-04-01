import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const NewsPage = lazy(() =>
  import('../../pages/NewsPage/NewsPage').then(module => ({
    ...module,
    default: module.NewsPage,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="news" />} />
        <Route path="/news" element={<NewsPage />} />
      </Route>
    </Routes>
  );
};
