import React from 'react';
import { Avatar } from 'src/components/Avatar/Avatar';
interface LifeguardProps {
  name: string;
  age: number;
  experience: string;
  location: string;
  key: string;
}

const Lifeguard = ({ name, age, experience, location, key }: LifeguardProps) => {
  return (
    <div
      key={key}
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
      <div className='bg-secondary text-primary rounded-b-md h-9 flex justify-center items-center '>
        <div className='flex w-48 justify-evenly'>
          <div className=''>Teléfono:</div>
          <div className=' blur-sm'>666666666</div>
        </div>
      </div>
    </div>
  );
};

export default Lifeguard;
