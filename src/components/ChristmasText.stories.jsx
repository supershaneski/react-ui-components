import React from 'react';

import ChristmasText from './ChristmasText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-Components/ChristmasText',
  component: ChristmasText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
  //  backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ChristmasText {...args}>Merry Christmas!</ChristmasText>;

export const DefaultMode = Template.bind({});

export const WithSpeedValue = Template.bind({});
WithSpeedValue.args = {
    speed: 100,
};
