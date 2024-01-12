import React from 'react';
import { Avatar } from 'src/components/Avatar/Avatar';
interface LifeguardProps {
  name: string;
  age: number;
  experience: string;
  location: string;
  id: string;
}

const Lifeguard = ({ name, age, experience, location, id }: LifeguardProps) => {
  return (
    <div
      key={id}
      className='w-96 bg-theme-primary rounded-md text-theme-primary  shadow-slate-200 shadow-md'
    >
      <div className='flex px-6 py-8 '>
        <div className='w-20 flex items-center '>
          <Avatar />
        </div>
        <div className=''>
          <div className='text-lg'>{name}</div>
          <div className='mt-2'>Edad:{age} </div>
          <div>Experiencia: {experience} </div>
          <div>Ubicación: {location}</div>
        </div>
      </div>
      <div className='text-primary rounded-b-md h-9 flex justify-center items-center bg-thirdary'>
        <div className='flex w-48 justify-evenly text-white'>
          <div className=''>Teléfono:</div>
          <div className='blur-1' style={{ filter: 'blur(2.5px)' }}>
            685262068
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lifeguard;
