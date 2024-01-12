import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useAppSelector } from 'src/hooks/useApp';
import Card from '@mui/material/Card';

import { Link, Outlet } from 'react-router-dom';
import { Box, Tab, Tabs } from '@mui/material';

const ProfilePage = () => {
  const { name, email } = useAppSelector((state) => state.user.userInfo);

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: 'grey',
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='p-20 py-32'>
      <div>
        <div className='w-1/2'>
          <div className='pb-10 flex flex-row items-center'>
            <div>
              <img src='/public/assets/images/icons/profile.svg' />
            </div>
            {/* revisar tamaños h1*/}
            <h1 className='text-2xl font-bold ml-3'>Your profile</h1>
          </div>

          <Card className='p-10 max-w-md ' style={{ backgroundColor: '#f0f0f0' }}>
            <Avatar {...stringAvatar(name)} />
            <div className='py-8'>
              <p>
                <b>Name: </b> {name}
              </p>
              <p>
                {' '}
                <b>Email: </b> {email}
              </p>
            </div>
          </Card>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
