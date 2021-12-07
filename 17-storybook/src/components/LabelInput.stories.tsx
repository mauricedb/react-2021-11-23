import { ComponentMeta } from '@storybook/react';
import { Form } from './Form';
import { LabelInput } from './LabelInput';

const meta: ComponentMeta<typeof LabelInput> = {
  title: 'Components/Atoms/LabelInput',
  component: LabelInput,
  argTypes: {
    // backgroundColor: { control: 'color' },
    setData: { action: 'setData' },
  },
  decorators: [
    (Story) => (
      <Form>
        <Story />
      </Form>
    ),
  ],
};
export default meta;

const noop = () => {};

export const Basic = (args: any) => (
  <LabelInput
    data={{ firstName: '' }}
    name="firstName"
    setData={noop}
    {...args}
  >
    The label
  </LabelInput>
);

export const NormalName = () => (
  <LabelInput data={{ firstName: 'Jack' }} name="firstName" setData={noop}>
    The label
  </LabelInput>
);

export const LongName = () => (
  <LabelInput
    data={{ firstName: 'JackJackJackJackJackJackJackJackJackJackJackJack' }}
    name="firstName"
    setData={noop}
  >
    The label
  </LabelInput>
);

export const NoLabel = () => (
  <LabelInput data={{ firstName: 'Jack' }} name="firstName" setData={noop}>
    {' '}
  </LabelInput>
);

export const LongLabel = () => (
  <LabelInput data={{ firstName: 'Jack' }} name="firstName" setData={noop}>
    The label The label The label The label The label The label
  </LabelInput>
);

export const InvalidName = () => (
  <LabelInput
    data={{ firstName: 'Jack' }}
    name="firstName"
    setData={noop}
    errorMessage="This name is not valid"
  >
    The label
  </LabelInput>
);
