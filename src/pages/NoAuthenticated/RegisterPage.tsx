import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { CssBaseline, Container } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
// import { userRegister } from 'src/store/user/userActions';
import { useAppDispatch, useAppSelector } from 'src/hooks/useApp';
import { SignUp } from 'src/models/auth';
import { CustomInput, Input } from 'src/components/PrimitiveElements/Input';
import { Button } from 'src/components/PrimitiveElements/Button';
import { SubmitHandler, useForm } from 'react-hook-form';

const initialState: SignUp = {
  firstName: '',
  email: '',
  password: '',
};

type Inputs = {
  email: string;
  password: string;
};

export default function RegisterPage() {
  const [value, setValue] = useState(initialState);
  const navigate = useNavigate();
  const { loading, success } = useAppSelector((state) => state.user);

  type InputChangeEvent<T> = ChangeEvent<HTMLInputElement> & {
    target: {
      name: string;
      value: T;
    };
  };
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (value) => {
    console.log('data: ', value);
  };

  // useEffect(() => {
  //   if (success) {
  //     navigate('/login');
  //   }
  // }, [navigate, success]);

  return (
    <>
      <img
        src='/assets/background.webp'
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-4 md:space-y-6 flex flex-col justify-center'
            >
              <CustomInput
                label='name'
                name='name'
                error={errors.password?.message as string}
                register={register}
                rules={{
                  required: true,
                  minLength: {
                    value: 6,
                    message: 'Mínimo 3 caracteres.',
                  },
                }}
                type='text'
                id='name'
                isRequired={true}
                placeholder='Nombre'
              />
              <CustomInput
                label='lastname'
                name='lastname'
                error={errors.password?.message as string}
                register={register}
                rules={{
                  required: true,
                  minLength: {
                    value: 6,
                    message: 'Mínimo 3 caracteres.',
                  },
                }}
                type='text'
                id='lastname'
                isRequired={true}
                placeholder='Apellidos'
              />
              <CustomInput
                label='email'
                name='email'
                error={errors.email?.message as string}
                register={register}
                rules={{
                  required: true,

                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: 'No es un email válido.',
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
                    message: 'Mínimo 6 caracteres.',
                  },
                }}
                type='password'
                id='password'
                isRequired={true}
                placeholder='Paswword'
              />
              <CustomInput
                label='confirmPassword'
                name='confirmPassword'
                error={errors.password?.message as string}
                register={register}
                rules={{
                  required: true,
                  validate: (value) => {
                    const { password } = getValues();
                    console.log(value, password);
                    if (password !== value) return 'Your password does not match';
                  },
                }}
                type='password'
                id='confirmPassword'
                isRequired={true}
                placeholder='Repeat password'
              />
              <Button
                className='h-12 text-center hover:scale-110 active:scale-90 transition flex items-center text-black bg-white justify-center'
                type='submit'
              >
                Loguearse
              </Button>
              <p className='text-sm font-light text-white dark:text-black flex gap-4'>
                ¿Ya tienes sesión?
                <Link
                  to='/'
                  className='hover:scale-110 transition font-medium text-primary-600 hover:underline'
                >
                  Iniciar sesión
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
