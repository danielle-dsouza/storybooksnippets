// Replace MyComponent with the name of your component \n
// Replace pathNameTo with path to your component \n\n

import React from 'react';\n
import {Meta, StoryFn} from '@storybook/react';\n\n

import MyComponent, {Props} from './MyComponent';\n\n 

export default {\n
  title: 'pathNameTo/MyComponent',\n 
  component: MyComponent,\n
} as Meta;\n\n

export const Basic: StoryFn<Props> = (args) => <MyComponent {...args} />;\n\n

// See examples at https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};\n\n

Basic.argTypes = {};\n\n