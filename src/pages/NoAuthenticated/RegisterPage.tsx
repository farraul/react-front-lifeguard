import { CssBaseline, Container } from '@mui/material';

import { FormRegister } from 'src/components/Forms/FormRegister';

export default function RegisterPage() {
  return (
    <>
      <img
        src='/assets/images/backgrounds/beach-background.jpg'
        alt='image of products'
        className='w-full h-screen z-[-1] fixed top-0 left-0'
      />
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className='w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 z-20'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8 bg-primary'>
            <h4 className='text-center text-xl font-light leading-tight tracking-tight md:text-4xl  text-white'>
              Registra tu cuenta
            </h4>
            <FormRegister />
          </div>
        </div>
      </Container>
    </>
  );
}
