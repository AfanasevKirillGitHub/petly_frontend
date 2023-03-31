import {
  // Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { Layout } from '../Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Navigate to="news" />} /> */}
      </Route>
    </Routes>
  );
};
