import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import locaties from 'src/configs/locaties.json';
import { useEffect, useState } from 'react';
const options = ['Option 1', 'Option 2'];

export default function LocationsAutocomplete({ provinceSelected, isDisabled }: any) {
  console.log({ provinceSelected });
  let locatiesFormatted: any = [];
  const [inputValue, setInputValue] = useState(locatiesFormatted[0]);
  console.log('LocationsAutocomplete  inputValue:', inputValue);

  if (provinceSelected) {
    locatiesFormatted = locaties[provinceSelected].map((location, index) => {
      return location.label;
    });

    // useEffect(() => {
    //   if (provinceSelected) {
    //     setInputValue(locatiesFormatted[0]);
    //   }
    // }, [provinceSelected]);
  }

  console.log({ inputValue });

  return (
    <div>
      <Autocomplete
        disabled={isDisabled}
        className='bg-white w-full h-10 flex items-center rounded-md'
        value={locatiesFormatted[0] || 'Localidad'}
        // onChange={(event: any, newValue: string | null) => {
        //   setValue(newValue);
        // }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id='controllable-states-demo'
        options={locatiesFormatted || ''}
        sx={{}}
        renderInput={(params) => <TextField {...params} label='' />}
      />
    </div>
  );
}
