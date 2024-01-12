import React from 'react';
import Lifeguard from 'src/components/Customer/Lifeguard';
import lifeguardsUsers from 'src/database/lifeguardsUsers.json';

const ReservationPage = () => {
  return (
    <>
      <div className='p-20 py-32'>
        <div>
          <h1 className='text-center text text-4xl'>Contacta con tu socorrista</h1>
          <div className='flex gap-x-6 gap-y-6 flex-wrap justify-center mt-20'>
            {lifeguardsUsers.map((lifeguard) => {
              return (
                <div className='' key={lifeguard.key}>
                  <Lifeguard
                    name={lifeguard.name}
                    age={lifeguard.age}
                    location={lifeguard.location}
                    experience={lifeguard.experience}
                    key={lifeguard.key}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
