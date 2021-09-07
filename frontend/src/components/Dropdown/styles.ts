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
  menu: (provided: any) => ({
    ...provided,
    color: 'black',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    background: state.isSelected ? '#F4A58A' : '0',
  }),
};