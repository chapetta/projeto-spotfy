/* eslint-disable react/jsx-curly-spacing */
import { Routes, Route } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
