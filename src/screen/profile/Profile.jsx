import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../../components/navBar/Nav';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase/Config';
import Plans from './Plans';
import './Profile.css';
const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className='profile'>
      <Nav />
      <div className='profile__body'>
        <h1>Edit Profile</h1>
        <div className='profile__info'>
          <img
            className=''
            alt=''
            src='https://avatars.githubusercontent.com/u/6759280?v=4'
          />
          <div className='profile__details'>
            <h2>{user?.email}</h2>
            <div className='profile__plans'>
              <h3>Plans</h3>
              <Plans />
              <button
                onClick={() => auth.signOut()}
                className='profile_signout'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
