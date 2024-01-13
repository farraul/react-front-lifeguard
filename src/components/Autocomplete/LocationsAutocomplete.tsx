import React, { useState } from 'react';
import { render } from 'react-dom';
import { useCombobox } from 'downshift';
import locaties from 'src/configs/locaties.json';

const items = [
  'Neptunium',
  'Plutonium',
  'Americium',
  'Curium',
  'Berkelium',
  'Californium',
  'Einsteinium',
  'Fermium',
  'Mendelevium',
  'Nobelium',
  'Lawrencium',
  'Rutherfordium',
  'Dubnium',
  'Seaborgium',
  'Bohrium',
  'Hassium',
  'Meitnerium',
  'Darmstadtium',
  'Roentgenium',
  'Copernicium',
  'Nihonium',
  'Flerovium',
  'Moscovium',
  'Livermorium',
  'Tennessine',
  'Oganesson',
];

function DropdownCombobox({ selectedItem, handleSelectedItemChange, provinceSelected }: any) {
  console.log('DropdownCombobox  provinceSelected:', provinceSelected);

  const locatiesFormatted = locaties.filter((location, index) => {
    console.log(index);
    console.log(location.parent_code, provinceSelected.provinceSelected);
    if (location.parent_code == provinceSelected.provinceSelected) {
      console.log('in');

      return location.label;
    }
  });

  console.log({ locatiesFormatted });
  const [inputItems, setInputItems] = useState(locaties);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    selectedItem,
    onSelectedItemChange: handleSelectedItemChange,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase())),
      );
    },
  });
  return (
    <div>
      <label {...getLabelProps()}>Choose an element:</label>
      <div>
        <input {...getInputProps()} />
        <button type='button' {...getToggleButtonProps()} aria-label='toggle menu'>
          &#8595;
        </button>
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default function ControlledComboboxes(provinceSelected: any) {
  console.log('ControlledComboboxes  provinceSelected:', provinceSelected);

  const [selectedItem, setSelectedItem] = useState(null);

  function handleSelectedItemChange({ selectedItem }: any) {
    setSelectedItem(selectedItem);
  }

  return (
    <div>
      <DropdownCombobox
        selectedItem={selectedItem}
        handleSelectedItemChange={handleSelectedItemChange}
        provinceSelected={provinceSelected}
      />
    </div>
  );
}
