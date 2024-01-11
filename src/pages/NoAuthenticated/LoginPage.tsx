import { Container } from '@mui/material';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/useApp';
import { SignIn } from 'src/models/auth';
import jwtService from 'src/auth/jwtService';
import { Button, CustomInput, Input } from 'src/components/PrimitiveElements';
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
import { object, string, number, AnyObject, ObjectSchema } from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { error } from 'console';

// type InputChangeEvent<T> = ChangeEvent<HTMLInputElement> & {
//   target: {
//     name: string;
//     value: T;
//   };
// };
// const initialState: SignIn = {
//   email: '',
//   password: '',
// };

type Inputs = {
  email: string;
  password: string;
  // example?: string;
  // exampleRequired: string;
  // phone: number;
  // lastName: string;
};
// const userSchema = object({
//   email: string().required(),
//   password: string().required(),
//   // example: string(),
//   // exampleRequired: string().required(),
//   // phone: number().required().integer(),
//   // lastName: string().required(),
// });

function LoginPage() {
  // const [value, setValue] = useState(initialState);
  const user = useAppSelector((state) => state.user);

  //register
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  console.log({ errors });
  // function handleChange<T>(e: InputChangeEvent<T>) {
  //   const valueSignIn = e.target.value as T;
  //   setValue({ ...value, [e.target.name]: valueSignIn });
  // }

  const onSubmit: SubmitHandler<Inputs> = (value) => {
    console.log('data: ', value);
  };
  //   if (value) {
  //     jwtService
  //       .signInWithEmailAndPassword(value.email, value.password, )
  //       .then((_user) => {
  //         // No need to do anything, user data will be set at app/auth/AuthContext
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //       .finally(() => {});
  //   }
  // }

  return (
    <>
      <img
        src='/assets/images/backgrounds/beach-background.jpg'
        alt='image of products'
        className='w-full h-screen z-[-1] fixed top-0 left-0'
        style={{ objectFit: 'cover' }}
      />
      <Container component='main' maxWidth='xs'>
        {/* <CssBaseline /> */}
        <div className='w-full bg-white rounded-lg shadow dark:border mt-4 md:mt-20 sm:max-w-md xl:p-0 z-20'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8 bg-primary'>
            <h4 className='text-center text-xl font-light leading-tight tracking-tight text-white md:text-4xl '>
              Iniciar sesión
            </h4>
            {errors.email?.message}
            {errors.password?.message}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-4 md:space-y-6 flex flex-col justify-center'
            >
              <CustomInput
                label='email'
                name='email'
                error={errors.email?.message as string}
                register={register}
                rules={{
                  required: true,
                  maxLength: {
                    value: 6,
                    message: 'This input exceed maxLength.',
                  },
                }}
                type='text'
                id='email'
                isRequired={true}
                placeholder='Email'
              />

              <CustomInput
                label='password'
                name='password'
                error={errors.password?.message as string}
                register={register}
                rules={{
                  required: true,

                  minLength: {
                    value: 6,
                    message: 'Password should be at-least 6 characters.',
                  },
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: 'Email is not valid.',
                  },
                }}
                type='password'
                id='password'
                isRequired={true}
                placeholder='Paswword'
              />
              <Button
                className='h-12 text-center hover:scale-110 active:scale-90 transition flex items-center text-black bg-white justify-center'
                type='submit'
                disabled={user.loading}
              >
                Loguearse
              </Button>
              <p className='text-sm font-light text-white dark:text-black flex gap-4'>
                ¿Aun no estas logueado?
                <Link
                  to='/register'
                  className='hover:scale-110 transition font-medium text-primary-600 hover:underline'
                >
                  Registrate
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default LoginPage;
