import React from 'react';
import ReservationCard from 'src/components/Cards/ReservationCard';
import lifeguardsUsers from 'src/database/lifeguardsUsers.json';

const ReservationPage = () => {
  return (
    <>
      <div>
        <h1 className='text-center text text-4xl'>Contacta con tu socorrista</h1>
        <div className='flex gap-x-6 gap-y-6 flex-wrap justify-center mt-20'>
          {lifeguardsUsers.map((lifeguard) => {
            return (
              <ReservationCard
                name={lifeguard.name}
                age={lifeguard.age}
                location={lifeguard.location}
                experience={lifeguard.experience}
                id={lifeguard.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
