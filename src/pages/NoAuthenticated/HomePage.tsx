import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReserveBusinessCard from 'src/components/Cards/ReserveBusinessCard';
import ReserveLeadCard from 'src/components/Cards/ReserveLeadCard';
import ReserveLifeguardCard from 'src/components/Cards/ReserveLifeguardCard';
import business from 'src/stub/businessStub.json';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <img
        src='/assets/images/backgrounds/beach-water-background.png'
        alt='image of products'
        className='w-full h-screen z-[-1] fixed top-0 left-0 brightness-50'
        style={{ objectFit: 'cover' }}
      /> */}
      <article>
        <section className='flex items-center flex-col justify-center bg-primary text-secondary-generic'>
          <h1 className='text-center text-5xl'>La plataforma para socorristas</h1>
          <h2 className='text-center text-2xl mt-24'>Selecciona lo que estas buscando</h2>
        </section>
        <section className='py-10 bg-slate-400'>Buscador</section>
        <section className=' items-center flex-col flex justify-center'>
          <div>
            {business.map((company) => (
              <ReserveBusinessCard
                name={company.name}
                community={company.community}
                province={company.province}
                location={company.location}
                id={company.id}
                namePersonContact={company.namePersonContact}
                email={company.email}
                phone={company.phone}
                price={company.price}
                yearsActive={company.yearsActive}
                availability={company.availability}
                servicesAditionals={company.servicesAditionals}
                key={company.id}
              />
            ))}
          </div>
        </section>
        <section className='flex items-center flex-col justify-center'></section>
      </article>
    </>
  );
};

export default HomePage;
