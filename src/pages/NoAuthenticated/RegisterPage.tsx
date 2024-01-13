import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { CssBaseline, Container } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
// import { userRegister } from 'src/store/user/userActions';
import { useAppDispatch, useAppSelector } from 'src/hooks/useApp';
import { SignUp } from 'src/models/auth';
import { CustomInput, Input } from 'src/components/PrimitiveElements/Input';
import { Button } from 'src/components/PrimitiveElements/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select';

import ccaa from 'src/configs/ccaa.json';
import provinces from 'src/configs/provinces.json';
import locaties from 'src/configs/locaties.json';
import LocationsAutoCompelte from 'src/components/Autocomplete/LocationsAutocomplete';

const initialState: SignUp = {
  name: '',
  lastName: '',
  email: '',
  age: 0,
  community: '',
  province: '',
  location: '',
  experience: '',
  move: '',
  password: '',
  confirmPassword: '',
};

type Inputs = {
  email: string;
  password: string;
};

export default function RegisterPage() {
  const [value, setValue] = useState(initialState);
  const navigate = useNavigate();
  const { loading, success } = useAppSelector((state) => state.user);

  const [ccaaSelected, setCcaaSelected] = useState('');
  const [provinceSelected, setProvinceSelected] = useState('');
  const [locationSelected, setLocationSelected] = useState('');

  type InputChangeEvent<T> = ChangeEvent<HTMLInputElement> & {
    target: {
      name: string;
      value: T;
    };
  };

  console.log('render');
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUp>();

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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-4 md:space-y-6 flex flex-col justify-center'
            >
              <CustomInput
                name='name'
                error={errors.name?.message as string}
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
                name='lastName'
                error={errors.lastName?.message as string}
                register={register}
                rules={{
                  required: true,
                  minLength: {
                    value: 3,
                    message: 'Mínimo 3 caracteres.',
                  },
                }}
                type='text'
                id='lastName'
                isRequired={true}
                placeholder='Apellidos'
              />
              <CustomInput
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
                name='age'
                error={errors.age?.message as string}
                register={register}
                rules={{
                  required: true,
                }}
                type='number'
                id='age'
                isRequired={true}
                placeholder='Edad'
              />

              <div className=''>
                <Select
                  onValueChange={(e) => {
                    setCcaaSelected(e);
                  }}
                >
                  <SelectTrigger className='w-[100%] bg-white'>
                    <SelectValue placeholder='Comunidad autonóma' />
                  </SelectTrigger>

                  <SelectContent>
                    {ccaa.map((community) => (
                      <SelectItem key={community.label} value={community.code}>
                        {community.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className=''>
                <Select
                  disabled={ccaaSelected === '' ? true : false}
                  onValueChange={(e) => {
                    setProvinceSelected(e);
                  }}
                >
                  <SelectTrigger className='w-[100%] bg-white'>
                    <SelectValue placeholder='Provincias' />
                  </SelectTrigger>
                  <SelectContent>
                    {provinces.map((province) => {
                      if (province.parent_code === ccaaSelected) {
                        return (
                          <SelectItem key={province.label} value={province.code}>
                            {province.label}
                          </SelectItem>
                        );
                      }
                    })}
                  </SelectContent>
                </Select>
              </div>

              {/* <div>
                <Select
                  disabled={provinceSelected === '' ? true : false}
                  onValueChange={(e) => {
                    setLocationSelected(e);
                  }}
                >
                  <SelectTrigger className='w-[100%] bg-white'>
                    <SelectValue placeholder='Localidades' />
                  </SelectTrigger>
                  <SelectContent>
                    {locaties.map((location) => {
                      if (location.parent_code === provinceSelected) {
                        return (
                          <SelectItem key={location.label} value={location.code}>
                            {location.label}
                          </SelectItem>
                        );
                      }
                    })}
                  </SelectContent>
                </Select>
              </div> */}
              {provinceSelected && <LocationsAutoCompelte provinceSelected={provinceSelected} />}

              <CustomInput
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
                placeholder='Contraseña'
              />
              <CustomInput
                name='confirmPassword'
                error={errors.confirmPassword?.message as string}
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
                placeholder='Repetir contraseña'
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
