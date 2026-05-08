import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox } from "./checkbox";
import { Label } from "./label";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {};

export const On: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Checkbox id="terms" />
      <Label htmlFor="terms">I agree to the terms and conditions</Label>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Checkbox />
        <Label>Unchecked</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked />
        <Label>Checked</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox disabled />
        <Label>Disabled</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked disabled />
        <Label>Disabled Checked</Label>
      </div>
    </div>
  ),
};
