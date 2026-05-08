import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import { DropZone } from "./drop-zone";

const meta = {
  title: "UI/DropZone",
  component: DropZone,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onFileDrop: fn(),
  },
} satisfies Meta<typeof DropZone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-90">
      <DropZone {...args} />
    </div>
  ),
};

export const CustomDescription: Story = {
  render: (args) => (
    <div className="w-90">
      <DropZone {...args} description="PNG, JPG up to 5MB" />
    </div>
  ),
};

export const Wide: Story = {
  render: (args) => (
    <div className="w-150">
      <DropZone {...args} />
    </div>
  ),
};
