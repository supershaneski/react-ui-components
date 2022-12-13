import React from 'react';

import PhoneInput from './PhoneInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-Components/PhoneInput',
  component: PhoneInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
  //  backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PhoneInput {...args} />;

export const NoDefaultValue = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoDefaultValue.args = {
    defaultValue: '',
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
    defaultValue: 'ab263d50s',
};

export const LongDefaultValue = Template.bind({});
LongDefaultValue.args = {
    defaultValue: 'ab263d50s9xw',
};

export const WithDisallowedCharacters = Template.bind({});
WithDisallowedCharacters.args = {
    defaultValue: 'w75xn#$6&s294aprq',
};
