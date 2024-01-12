import React from 'react';
import ReservationCard from 'src/components/Cards/ReservationCard';
import lifeguardsUsers from 'src/stub/lifeguardsStub.json';

const ReservationPage = () => {
  return (
    <>
      <article>
        <h1 className='text-center text text-4xl'>Contacta con tu socorrista</h1>
        <section className='flex gap-x-6 gap-y-6 flex-wrap justify-center mt-20'>
          {lifeguardsUsers.map((lifeguard) => (
            <ReservationCard
              key={lifeguard.id}
              name={lifeguard.name}
              age={lifeguard.age}
              location={lifeguard.location}
              experience={lifeguard.experience}
              id={lifeguard.id}
            />
          ))}
        </section>
      </article>
    </>
  );
};

export default ReservationPage;
