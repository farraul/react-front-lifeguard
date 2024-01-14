import locaties from 'src/configs/locaties.json';
import { useEffect, useState } from 'react';
import Autocomplete from '@mui/joy/Autocomplete';

export default function LocationsAutocomplete({ provinceSelected, isDisabled }: any) {
  let locatiesFormatted: any = [];
  const [inputValue, setInputValue] = useState('');

  if (provinceSelected) {
    locatiesFormatted = locaties[provinceSelected].map((location, index) => {
      return location.label;
    });
  }
  useEffect(() => {
    setInputValue('');
  }, [isDisabled]);

  return (
    <div>
      <Autocomplete
        placeholder='Choose a country'
        id='country-select-demo'
        disabled={isDisabled}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
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
    </div>
  );
}
