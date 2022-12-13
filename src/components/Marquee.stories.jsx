import React from 'react';

import Marquee from './Marquee';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-Components/Marquee',
  component: Marquee,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
  //  backgroundColor: { control: 'color' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
    return (
        <div style={{
            //backgroundColor: 'pink',
            position: 'relative',
            width: '60%',
            height: '24px',
            overflow: 'hidden',
        }}>
            <Marquee {...args}>Merry Christmas!</Marquee>
        </div>
    )

}

export const DefaultMode = Template.bind({});

export const Need4Speed = Template.bind({});
Need4Speed.args = {
    speed: 10,
};

