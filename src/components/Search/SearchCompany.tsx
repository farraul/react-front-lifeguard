import React from 'react';
import { Provider } from 'src/models/auth';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CustomInput, Input } from 'src/components/PrimitiveElements/Input';
import { Button } from 'src/components/PrimitiveElements/Button';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select';

import ccaa from 'src/configs/ccaa.json';
import provinces from 'src/configs/provinces.json';
import LocationsAutoCompelte from 'src/components/Autocomplete/LocationsAutocomplete';
import experiences from 'src/configs/experiences';

interface SearchProvider {
  community: string;
  province: string;
  location: string;
}

const initialState: SearchProvider = {
  community: '',
  province: '',
  location: '',
};

type Inputs = {
  email: string;
  password: string;
  community: string;
  province: string;
};
export const SearchCompany = ({ setSearch }: any) => {
  console.log({ setSearch });
  const [ccaaSelected, setCcaaSelected] = useState('');
  const [provinceSelected, setProvinceSelected] = useState('');
  const [isDisabled, setIsDisabled] = useState({
    province: true,
    location: true,
  });
  const {
    register,
    handleSubmit,
    getValues,
    control,
    setValue,
    resetField,
    reset,
    getFieldState,
    formState: { errors },
  } = useForm<Provider>({
    defaultValues: initialState,
  });

  const onSubmit: SubmitHandler<Inputs> = (value) => {
    console.log('data: ', value);
  };

  return (
    <div className='flex justify-center '>
      <div className='flex max-w-7xl items-center justify-center gap-x-6'>
        <div className='text-2xl font-bold'>Busca empresa de socorrismo</div>
        <div className='flex flex-row gap-x-2'>
          <div>
            <Controller
              name='community'
              rules={{
                required: {
                  value: true,
                  message: 'Este campo es requerido',
                },
              }}
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <>
                    <Select
                      required
                      onValueChange={(e) => {
                        setIsDisabled({ province: false, location: true });
                        setCcaaSelected(e);
                        setValue('province', '');

                        const nameCommunitySelected = ccaa.filter(
                          (comunity) => comunity.code === e,
                        )[0].label;
                        console.log({ nameCommunitySelected });
                        field.onChange(nameCommunitySelected);
                        console.log({ nameCommunitySelected });
                        setSearch(nameCommunitySelected);
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
                    {fieldState.error?.message && (
                      <p className='mt-3 ml-1 text-xs text-red-500 self-start '>
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>
          <div className=''>
            <Controller
              name='province'
              rules={{
                required: {
                  value: true,
                  message: 'Este campo es requerido',
                },
              }}
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <>
                    <Select
                      required
                      disabled={isDisabled.province}
                      onValueChange={(e) => {
                        const nameProvinceSelected = provinces.filter((province) => {
                          console.log({ province });
                          console.log({ e });
                          return province.code === e;
                        })[0].label;
                        console.log({ nameProvinceSelected });
                        field.onChange(nameProvinceSelected);
                        setProvinceSelected(e);
                        setIsDisabled({ ...isDisabled, location: false });
                      }}
                    >
                      <SelectTrigger className='w-[100%] bg-white'>
                        <SelectValue placeholder='Provincias' />
                      </SelectTrigger>
                      <SelectContent>
                        {provinces.map((province) => {
                          console.log;
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

                    {fieldState.error?.message && (
                      <p className='mt-3 ml-1 text-xs text-red-500 self-start '>
                        {fieldState.error.message}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>
          {/* {errors && (
        <p className='mt-3 ml-1 text-xs text-red-500 self-start '>{errors.community?.message}</p>
      )} */}
          <LocationsAutoCompelte
            provinceSelected={provinceSelected}
            isDisabled={isDisabled.location}
            control={control}
            reasonIn={provinceSelected === '' && 'reset'}
          />
        </div>
      </div>
    </div>
  );
};
