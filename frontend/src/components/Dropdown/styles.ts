export const DropdownStyles = {
  control: (provided: any) => ({
    ...provided,
    border: '1px solid white',
    display: 'flex',
    backgroundColor: '0',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: 'white',
  }),
  singleValue: (provided: any) => ({
    color: 'white',
  }),
};