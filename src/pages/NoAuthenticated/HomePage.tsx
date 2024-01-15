import React from 'react';
import { useNavigate } from 'react-router-dom';

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
        <h1 className='text-center text-5xl '>Benvenidos a Lifeguard</h1>
        <section className='w-full items-center flex-col flex justify-center  mt-20'>
          <h2 className='text-center text-2xl '>Selecciona lo que estas buscando</h2>
          <div className='w-full flex justify-center gap-20 max-w-7xl mt-10'>
            <div className='w-1/3 bg-primary text-secondary-generic p-10 text-center rounded-2xl '>
              <p className=''>Para empresas de socorrismo</p>
              <p className='text-3xl mt-4'>Consigue clientes</p>
              {/* <p className='mt-8'>Quiero conseguir clientes o contratar socorristas.</p> */}
              <button
                className='mt-8 bg-secondary text-primary-generic text-lg px-4 py-2 rounded-md'
                onClick={() => navigate('/reserve-lead')}
              >
                Buscar clientes
              </button>
            </div>
            <div className='w-1/3 bg-primary text-secondary-generic p-10 text-center rounded-2xl '>
              <p>Para administradores de pisicinas</p>

              <p className='text-3xl mt-4'>Encuentra socorrista</p>
              {/* <p className='mt-8'> Administro una piscina y necesito un socorristas.</p> */}
              <button
                className='mt-8 bg-secondary text-primary-generic text-lg px-4 py-2 rounded-md'
                onClick={() => navigate('/reserve-lifeguard')}
              >
                Buscar socorrista
              </button>
            </div>
            <div className='w-1/3 bg-primary text-secondary-generic p-10 text-center rounded-2xl '>
              <p>Para socorristas</p>

              <p className='text-3xl mt-4'>Consigue empleo</p>
              {/* <p className='mt-8'> Estoy buscando empleo para trabajar en una pisicina</p> */}
              <button
                className='mt-8 bg-secondary text-primary-generic text-lg px-4 py-2 rounded-md'
                onClick={() => navigate('/reserve-lifeguard')}
              >
                Registro gratuito
              </button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default HomePage;