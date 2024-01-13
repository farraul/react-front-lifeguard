import React from 'react';
import { Avatar } from 'src/components/Avatar/Avatar';
import QuestionHoverCard from 'src/components/HoverCards/QuestionHoverCard';
interface LifeguardProps {
  name: string;
  age: number;
  experience: string;
  community: string;
  province: string;
  location: string;
  move: string;
  availability: string;
  id: string;
}

const Lifeguard = ({
  name,
  age,
  experience,
  community,
  province,
  location,
  move,
  availability,
  id,
}: LifeguardProps) => {
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
          <div>C.Autónoma : {community}</div>
          <div>Procincia : {province}</div>
          <div>Localidad : {location}</div>
          <div>Disponibilidad : {availability}</div>
          <div className='flex items-center'>
            Desplazamiento
            <QuestionHoverCard color='yellow'>
              <h4 className='text-sm font-semibold'>Desplazamiento</h4>
              <p className='text-sm'>¿El usuario estaría dispuesto a mudarse?</p>
            </QuestionHoverCard>
            : {move}
          </div>
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
