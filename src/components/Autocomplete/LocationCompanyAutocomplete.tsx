import locaties from 'src/configs/locaties.json';
import { useEffect, useState } from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import { Controller } from 'react-hook-form';

export default function LocationConpanyAutocomplete({
  provinceSelected,
  isDisabled,
  control,
  // setSearch,
}: any) {
  let locatiesFormatted: any = [];
  const [inputValue, setInputValue] = useState('');
  const locatiesMap = locaties as any;

  if (provinceSelected) {
    locatiesFormatted = locatiesMap[provinceSelected].map((location: any) => {
      return location.label;
    });
  }
  // useEffect(() => {
  //   setInputValue('');
  // }, [isDisabled]);

  return (
    <div>
      <Controller
        name='location'
        control={control}
        render={({ field }) => (
          <Autocomplete
            required
            placeholder='Localidad'
            id='country-select-demo'
            disabled={isDisabled}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              // console.log({ newInputValue });
              field.onChange(newInputValue);
              // setSearch((prev: any) => ({ ...prev, location: newInputValue }));
            }}
            options={locatiesFormatted}
            sx={{
              '&.Mui-disabled': {
                background: ' ',
                color: '',
                fontWeight: '',
                opacity: 0.5,
                cursor: '',
              },
              color: 'black',
            }}
          />
        )}
      />
    </div>
  );
}
