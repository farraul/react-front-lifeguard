import { ClassNames } from '@emotion/react';
import React from 'react';
import { Avatar } from 'src/components/Avatar/Avatar';
import QuestionHoverCard from 'src/components/HoverCards/QuestionHoverCard';
interface LifeguardProps {
  name: string;
  namePersonContact: string;
  email: string;
  phone: string;
  price: number;
  yearsActive: number;
  availability: string;
  community: string;
  province: string;
  location: string;
  servicesAditionals: Array<string>;
  id: string;
  className?: string;
}

const ReserveLeadCard = ({
  name,
  namePersonContact,
  email,
  phone,
  price,
  yearsActive,
  availability,
  community,
  province,
  location,
  servicesAditionals,
  id,
  className,
}: LifeguardProps) => {
  return (
    <div
      key={id}
      className={`w-full bg-secondary rounded-md text-primary-generic shadow-slate-200 shadow-md ${className}  content-between  w-full max-w-5xl   `}
    >
      <div className=' p-10 flex flex-row'>
        <div className=' flex flex-col items-center w-96 bg-primary px-6 py-10 rounded-sm text-secondary-generic'>
          <Avatar height={'h-24'} width={'w-24'} />
          <div className='mt-6 text-center text-lg'>{name}</div>
          <div className='mt-6 flex gap-x-6'>
            <button className='bg-thirdary text-primary-generic px-4 py-1 rounded-sm w-28 h-8'>
              Llamar
            </button>
            <button className='bg-thirdary text-primary-generic px-4 py-1 rounded-sm w-28 h-8'>
              Email
            </button>
          </div>
        </div>
        <div className=' flex ml-6'>
          <div className='flex flex-col w-44'>
            <div className=' p-4 h-20 rounded-sm bg-white text-primary flex flex-col'>
              <p>Precio</p>
              <p className='text-xl font-bold '>{price}€/hora</p>
            </div>
            <div className='mt-2 p-4 rounded-sm bg-white text-primary'>
              <p>Disponibilidad</p>
              <p>{availability} </p>
            </div>
            <div className='mt-2 p-4 rounded-sm bg-white text-primary'>
              <p>Años activo</p>
              <p> {yearsActive} </p>
            </div>
          </div>
          <div className='flex flex-col ml-2 '>
            <div className='h-20 p-4  rounded-sm bg-white text-primary flex  flex-col'>
              <p>Donde estamos:</p>
              <p>
                {province}, {location}
              </p>
            </div>
            <div className='mt-2 p-4 min-h-20 rounded-sm bg-white text-primary'>
              <p> Servicios adicionales </p>
              <p> {servicesAditionals}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveLeadCard;
