import { Provider } from 'src/models/auth';
import { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select';

import ccaa from 'src/configs/ccaa.json';
import provinces from 'src/configs/provinces.json';
import LocationsAutoComplete from 'src/components/Autocomplete/LocationsAutocomplete';

interface SearchCompany {
  community: string;
  province: string;
  location: string;
}

const initialState: SearchCompany = {
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
  const [ubication, setUbication] = useState({
    community: '',
    province: '',
  });
  console.log({ ubication });
  const [isDisabled, setIsDisabled] = useState({
    province: true,
    location: true,
  });
  const {
    control,
    setValue,
    formState: { errors },
  } = useForm<Provider>({
    defaultValues: initialState,
  });

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
                        // setCcaaSelected(e);
                        setUbication((prev) => ({ ...prev, community: e }));
                        setValue('province', '');

                        const nameCommunitySelected = ccaa.filter(
                          (comunity) => comunity.code === e,
                        )[0].label;
                        field.onChange(nameCommunitySelected);
                        setSearch((prev: any) => ({ ...prev, community: nameCommunitySelected }));
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
                          return province.code === e;
                        })[0].label;
                        field.onChange(nameProvinceSelected);
                        // setProvinceSelected(e);
                        setUbication((prev) => ({ ...prev, province: e }));

                        setIsDisabled({ ...isDisabled, location: false });
                        setSearch((prev: any) => ({ ...prev, province: nameProvinceSelected }));
                      }}
                    >
                      <SelectTrigger className='w-[100%] bg-white'>
                        <SelectValue placeholder='Provincias' />
                      </SelectTrigger>
                      <SelectContent>
                        {provinces.map((province) => {
                          console.log;
                          if (province.parent_code === ubication.community) {
                            console.log({ province });
                            console.log(ubication);
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
          <LocationsAutoComplete
            setSearch={setSearch}
            provinceSelected={ubication.province}
            isDisabled={isDisabled.location}
            control={control}
            reasonIn={ubication.province === '' && 'reset'}
          />
        </div>
      </div>
    </div>
  );
};
