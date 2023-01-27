import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { auth } from '../../firebase/Config';
import Home from '../../screen/home/Home';
import Login from '../../screen/login/Login';
import Profile from '../../screen/profile/Profile';
import { login, logout, selectUser } from '../userSlice';

function Router() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Login />} path='/login' />
        <Route element={<Profile />} path='/profile' />
      </Routes>
    </div>
  );
}

export default Router;
