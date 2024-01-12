import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useAppSelector } from 'src/hooks/useApp';
import Card from '@mui/material/Card';

import { Link, Outlet } from 'react-router-dom';
import { PopUpEditProfile } from 'src/components/PopUp/EditProfilePopUp';

interface List {
  title: string;
  data: string;
}

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

  const listDataProfile: List[] = [
    {
      title: 'Nombre',
      data: name,
    },
    {
      title: 'Apellido',
      data: lastName,
    },
  ];

  return (
    <article>
      <section className='w-1/2'>
        <div className='pb-10 flex flex-row items-center'>
          <div>
            <img src='/assets/images/icons/profile.svg' />
          </div>
          {/* revisar tamaños h1*/}
          <h1 className='text-2xl font-bold ml-3'>Mi perfil</h1>
        </div>

        <div className='p-10 max-w-md bg-gray-300 rounded-lg'>
          <Avatar {...stringAvatar(name)} />

          <ul className='py-8'>
            {listDataProfile.map((field) => (
              <li key={field.title}>
                <b>{field.title}: </b> {field.data}
              </li>
            ))}
          </ul>
          <PopUpEditProfile />
        </div>

        <Outlet />
      </section>
    </article>
  );
};

export default ProfilePage;
