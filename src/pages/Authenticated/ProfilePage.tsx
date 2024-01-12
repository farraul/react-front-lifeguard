import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useAppSelector } from 'src/hooks/useApp';
import Card from '@mui/material/Card';

import { Link, Outlet } from 'react-router-dom';
import { PopUpEditProfile } from 'src/components/PopUp/PopUpEditProfile';

const ProfilePage = () => {
  const { name, lastName, email, age, location, experience } = useAppSelector(
    (state) => state.user.userInfo,
  );

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: 'grey',
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

  const [value, setValue] = React.useState(0);

  return (
    <div>
      <div className='w-1/2'>
        <div className='pb-10 flex flex-row items-center'>
          <div>
            <img src='/assets/images/icons/profile.svg' />
          </div>
          {/* revisar tamaños h1*/}
          <h1 className='text-2xl font-bold ml-3'>Mi perfil</h1>
        </div>

        <div className='p-10 max-w-md bg-gray-300 rounded-lg'>
          <Avatar {...stringAvatar(name)} />
          <div className='py-8'>
            <p>
              <b>Name: </b> {name}
            </p>

            <p>
              <b>Apellidos: </b> {lastName}
            </p>
            <p>
              <b>Email: </b> {email}
            </p>
            <p>
              <b>Edad: </b> {age}
            </p>
            <p>
              <b>Localidad: </b> {location}
            </p>
            <p>
              <b>Experiencia: </b> {experience}
            </p>
          </div>
          <PopUpEditProfile />
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
