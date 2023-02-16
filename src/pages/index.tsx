import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/icons/Loader';

const Home = lazy(() => import('./Home'));
const Fallback = lazy(() => import('./Fallback'));

const Pages: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<Fallback />} />
      </Routes>
    </Suspense>
  );
};

export default Pages;
