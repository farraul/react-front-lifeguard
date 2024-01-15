import React from 'react';
import { Avatar } from 'src/components/Avatar/Avatar';
import QuestionHoverCard from 'src/components/HoverCards/QuestionHoverCard';
interface LifeguardProps {
  name: string;
  community: string;
  province: string;
  location: string;
  weeklyhours: string;
  numberworkers: string;
  start: string;
  end: string;
  id: string;
}

const ReserveLeadCard = ({
  name,
  community,
  province,
  location,
  weeklyhours,
  numberworkers,
  start,
  end,
  id,
}: LifeguardProps) => {
  return (
    <div
      key={id}
      className='w-80 bg-theme-primary rounded-md text-theme-primary  shadow-slate-200 shadow-md'
    >
      <div className=' p-10 '>
        <div className=' flex items-center '>
          <Avatar />
          <div className='ml-4 text-lg'>{name}</div>
        </div>
        <div className='mt-6'>
          <div className='mt-2'>C. Autónoma : {community}</div>
          <div>Provincia : {province}</div>
          <div>Localidad : {location}</div>
          <div className='mt-4'>Fecha inicio : {start}</div>
          <div className=''>Fecha fin : {end}</div>
          <div className='mt-4'>Horas semanales: {weeklyhours} </div>
          <div className=''>Número trabjadores: {numberworkers} </div>

          {/* <div className='flex items-center'>
            Desplazamiento
            <QuestionHoverCard color='yellow'>
              <h4 className='text-sm font-semibold'>Desplazamiento</h4>
              <p className='text-sm'>¿El usuario estaría dispuesto a mudarse?</p>
            </QuestionHoverCard>
            : {}
          </div> */}
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

export default ReserveLeadCard;
