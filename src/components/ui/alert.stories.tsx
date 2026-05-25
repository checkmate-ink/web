import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CircleCheck, CircleX, Info, TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "./alert";

const meta = {
  title: "UI/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["warning", "success", "error", "info"],
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[420px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {
  args: { variant: "warning" },
  render: (args) => (
    <Alert {...args}>
      <TriangleAlert />
      <AlertTitle>Warning Title</AlertTitle>
      <AlertDescription>Warning description goes here.</AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  args: { variant: "success" },
  render: (args) => (
    <Alert {...args}>
      <CircleCheck />
      <AlertTitle>Success Title</AlertTitle>
      <AlertDescription>Success description goes here.</AlertDescription>
    </Alert>
  ),
};

export const Error: Story = {
  args: { variant: "error" },
  render: (args) => (
    <Alert {...args}>
      <CircleX />
      <AlertTitle>Error Title</AlertTitle>
      <AlertDescription>Error description goes here.</AlertDescription>
    </Alert>
  ),
};

export const InfoVariant: Story = {
  args: { variant: "info" },
  render: (args) => (
    <Alert {...args}>
      <Info />
      <AlertTitle>Info Title</AlertTitle>
      <AlertDescription>Info description goes here.</AlertDescription>
    </Alert>
  ),
};

export const TitleOnly: Story = {
  args: { variant: "info" },
  render: (args) => (
    <Alert {...args}>
      <Info />
      <AlertTitle>Heads up — this is a single-line alert.</AlertTitle>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  args: { variant: "success" },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Saved</AlertTitle>
      <AlertDescription>Your test was saved to your library.</AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert variant="warning">
        <TriangleAlert />
        <AlertTitle>Warning Title</AlertTitle>
        <AlertDescription>Warning description goes here.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CircleCheck />
        <AlertTitle>Success Title</AlertTitle>
        <AlertDescription>Success description goes here.</AlertDescription>
      </Alert>
      <Alert variant="error">
        <CircleX />
        <AlertTitle>Error Title</AlertTitle>
        <AlertDescription>Error description goes here.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <Info />
        <AlertTitle>Info Title</AlertTitle>
        <AlertDescription>Info description goes here.</AlertDescription>
      </Alert>
    </div>
  ),
};
