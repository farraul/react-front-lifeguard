import locaties from 'src/configs/locaties.json';
import { useEffect, useState } from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import { Controller } from 'react-hook-form';

export default function LocationsAutocomplete({ provinceSelected, isDisabled, control }: any) {
  let locatiesFormatted: any = [];
  const [inputValue, setInputValue] = useState('');

  const selectedLocations = locaties[provinceSelected];
  if (provinceSelected) {
    locatiesFormatted = selectedLocations.map((location: any) => {
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
            placeholder='Localidad'
            id='country-select-demo'
            disabled={isDisabled}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              field.onChange(newInputValue);
            }}
            options={locatiesFormatted}
            sx={{
              '&.Mui-disabled': {
                background: '#80979e',
                color: '#041b23',
              },
              color: 'black',
            }}
          />
        )}
      />
    </div>
  );
}
