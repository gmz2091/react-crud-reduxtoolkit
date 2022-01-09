/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  // const [session, setSession] = useState(false);
  const { session } = useSelector((state) => state.sessions);
  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <Router>
      <Navbar session={session} />
      <Routes>
        <Route path="/" element={<Home />} />
        {session ? (
          <Route path="/users" element={<UserList />} />
        ) : (
          <Route path="/login" element={<LoginForm />} />
        )}
        <Route
          path="*"
          element={(
            <main style={{ padding: '1rem' }}>
              <p>There&apos;s nothing here!</p>
            </main>
      )}
        />
      </Routes>
    </Router>
  );
};

export default App;
