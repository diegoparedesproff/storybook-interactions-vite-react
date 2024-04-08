import { Meta, StoryObj } from "@storybook/react";
//imports for interactions
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
//all this works too if you import from @storybook/test

import FormDemo from "./Form";
//import { Form } from "@radix-ui/react-form";

const meta: Meta<typeof FormDemo> = {
  tags: ["autodocs"],
  component: FormDemo,
  title: "FormDemo",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    //const submitBtn = canvas.getByText("Post question");
    //or better
    const submitBtn = canvas.getByRole("button", {
      name: "Post question",
      // /Post/ (for the elements that contain that word)
      // /post/i (for case insensitive)
    });
    const email = canvas.getByLabelText(/email/i);
    const question = canvas.getByLabelText(/question/i);

    await expect(submitBtn).toBeInTheDocument();
    await expect(email).toBeInTheDocument();
    await expect(question).toBeInTheDocument();
  },
};

export const EmptySubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitBtn = canvas.getByRole("button", {
      name: "Post question",
    });

    await userEvent.click(submitBtn);
    const emailValidation = canvas.getByText("Please enter your email");
    const questionValidation = canvas.getByText("Please enter a question");

    await expect(emailValidation).toBeInTheDocument();
    await expect(questionValidation).toBeInTheDocument();
  },
};
/** 
- Given a login form
- When the user enters an invalid email
- And enters a valid question
- And click in submit button
- Then the screen shows an email input error message
*/
export const InvalidEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const email = canvas.getByLabelText(/email/i);
    const question = canvas.getByLabelText(/question/i);
    const submitBtn = canvas.getByRole("button", {
      name: /post/i,
    });

    await userEvent.type(email, "bademailtextblabla");
    await userEvent.type(question, "is this a valid question?");

    await userEvent.click(submitBtn);

    await expect(
      canvas.getByText("Please provide a valid email")
    ).toBeInTheDocument();
    await expect(
      canvas.queryByText("Please enter a question")
    ).not.toBeInTheDocument();
  },
};

export const ValidForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const email = canvas.getByLabelText(/email/i);
    const question = canvas.getByLabelText(/question/i);
    const submitBtn = canvas.getByRole("button", {
      name: /post/i,
    });

    await userEvent.type(email, "diego@gmail.com");
    await userEvent.type(question, "is this a valid question?");

    await userEvent.click(submitBtn);

    const successMessage = canvas.getByText(/Question successfully submited/i);

    await expect(successMessage).toBeInTheDocument();
  },
};
