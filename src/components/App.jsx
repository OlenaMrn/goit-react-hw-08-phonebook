import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Home } from '../pages/Home/Home';

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
