import type { Meta, StoryObj } from "@storybook/react";
import Light from "./Light";

const meta: Meta<typeof Light> = {
  component: Light,
  //You can define something like Buttons/Light
  //to define some category in the storybook UI
  title: "Light",
  //optional, for defining the type of control in UI
  //for example for providing an input to change a
  //label in a button, etc
  argTypes: {
    variant: {
      control: { type: "select" },
      //just for do it explicit, not necesary
      options: ["green", "yellow", "red"],
    },
  },
  //This add the docs
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

//you can define here the different stories
//of your component
export const Base: Story = {
  args: {
    variant: "green",
  },
};
//storie
export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};
//storie
/** Coment from story, this should be visible in docs */
//is mandatory to use /** */ and not just /*
export const Red: Story = {
  args: {
    variant: "red",
  },
};
//other way
export const AnotherSintaxisA: Story = {
  //if you want you can define args here
  args: { variant: "green" },
  render: (args) => <Light {...args} />,
};
//this sintaxis could be used for cases like this
export const AnotherSintaxisB: Story = {
  render: (args) => (
    <div
      style={{
        padding: 20,
        border: "1px solid gray",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Light variant="red" />
      <Light variant="green" />
      <Light variant="yellow" />
    </div>
  ),
};
