import Select, { components } from 'react-select';
import { useState } from 'react';
import './Filter.css';

// Custom MultiValueRemove component to render cross button
const MultiValueRemove = (props: any) => {
    const handleOnClick = (event: any) => {
      props.removeProps.onClick(event);
      props.setValue(props.data);
    };
  
    return (
      <components.MultiValueRemove {...props}>
        {props.isSelected ? (
          <div className="redCrossButton" onClick={handleOnClick}>
            &#10005; {/* Unicode character for cross symbol */}
          </div>
        ) : null}
      </components.MultiValueRemove>
    );
  };

// Component representing a Dropdown Filter
export default function Filter(props: any) {
  // Get available options for the filter
  let optionsArray = props.options[props.title];

  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle the change in selected option
  let handleChange = (selectedOption: any) => {
    // Update the selected option, which updates the filter UI
    setSelectedOption(selectedOption);
    
    // Clone the filter configurations
    let filterConfigs = { ...props.filterConfigs };
    
    // Update the filter value, which will be used to change the visibility of jobs based on filters
    filterConfigs[props.title] = selectedOption['value'];
    props.setFilterConfigs(filterConfigs);
  };

  return (
    <div key={props.index} className='Filter'>
      {/* Dropdown component */}
      <Select
        className='dropdownFilter'
        value={selectedOption}
        options={optionsArray}
        placeholder={props.title}
        onChange={handleChange}
        components={{ MultiValueRemove }}
        isMulti
      />
    </div>
  );
}
