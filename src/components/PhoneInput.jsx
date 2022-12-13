import React, { useState } from 'react';
import PropTypes from 'prop-types';

// This will be used to format the input
const formatValue = (str) => {

    // Use a regular expression to only allow alphanumeric characters
    const updatedValue = str.replace(/[^a-zA-Z0-9]/g, '');

    // Use a regular expression to insert a hyphen after the third and sixth characters
    //const formattedValue = updatedValue.replace(/(\d{3})(\d{3})(\d{1,})/, '$1-$2-$3');
    const formattedValue = updatedValue.replace(/(\w{3})(\w{3})(\w{1,})/, '$1-$2-$3');

    // Convert the value to uppercase
    const  upperCaseValue = formattedValue.toUpperCase();

    // Truncate string if too long
    return upperCaseValue.substring(0, 11)
}

function PhoneInput(props) {
  
    // Create a state variable to store the phone number
  const [phoneNumber, setPhoneNumber] = useState(formatValue(props.defaultValue));

  // Create an event handler for when the user types in the input field
  function handleChange(event) {
    
    // Get the current value of the input field
    const currentValue = event.target.value;

    const upperCaseValue = formatValue(currentValue)

    // Update the state with the formatted phone number
    setPhoneNumber(upperCaseValue);

    // call event handler
    if(props.onChange) {
        props.onChange(upperCaseValue)
    }

  }

  return (
    <input
      type="text"
      value={phoneNumber}
      onChange={handleChange}
      maxLength={11}
      placeholder="XXX-XXX-XXX"
    />
  )

}

PhoneInput.defaultProps = {
    defaultValue: '',
    onChange: undefined,
}

PhoneInput.propTypes = {
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
}

export default PhoneInput