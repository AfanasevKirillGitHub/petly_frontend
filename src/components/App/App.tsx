import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
// import { PrivateRout } from '../PrivateRoute/PrivateRoute';

const NewsPage = lazy(() =>
  import('../../pages/NewsPage/NewsPage').then(module => ({
    ...module,
    default: module.NewsPage,
  }))
);

const LoginPage = lazy(() =>
  import('../../pages/LoginPage/LoginPage').then(module => ({
    ...module,
    default: module.LoginPage,
  }))
);

const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage').then(module => ({
    ...module,
    default: module.RegisterPage,
  }))
);

const FindPetPage = lazy(() =>
  import('../../pages/FindPetPage/FindPetPage').then(module => ({
    ...module,
    default: module.FindPetPage,
  }))
);

const FriendsPage = lazy(() =>
  import('../../pages/FriendsPage/FriendsPage').then(module => ({
    ...module,
    default: module.FriendsPage,
  }))
);

const LostFoundPage = lazy(() =>
  import('../../pages/FindPetPage/LostFoundPage/LostFoundPage').then(
    module => ({
      ...module,
      default: module.LostFoundPage,
    })
  )
);

const InGoodHandPage = lazy(() =>
  import('../../pages/FindPetPage/InGoodHandPage/InGoodHandPage').then(
    module => ({
      ...module,
      default: module.InGoodHandPage,
    })
  )
);

const FavoritePage = lazy(() =>
  import('../../pages/FindPetPage/FavoritePage/FavoritePage').then(module => ({
    ...module,
    default: module.FavoritePage,
  }))
);

const MyAdsPage = lazy(() =>
  import('../../pages/FindPetPage/MyAdsPage/MyAdsPage').then(module => ({
    ...module,
    default: module.MyAdsPage,
  }))
);

const SellPage = lazy(() =>
  import('../../pages/FindPetPage/SellPage/SellPage').then(module => ({
    ...module,
    default: module.SellPage,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="news" />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/find-pet" element={<FindPetPage />}>
          <Route path="lost-found" element={<LostFoundPage />} />
          <Route path="good-hand" element={<InGoodHandPage />} />
          <Route path="sell" element={<SellPage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="my-ads" element={<MyAdsPage />} />
        </Route>
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
