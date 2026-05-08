import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FormField } from "./form-field";
import { Input } from "./input";
import { Label } from "./label";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="default">Label</Label>
        <Input id="default" placeholder="Placeholder..." />
      </div>
    </div>
  ),
};

export const WithValue: Story = {
  render: () => (
    <div className="w-80">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="value">Email</Label>
        <Input id="value" defaultValue="user@example.com" />
      </div>
    </div>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <div className="w-80">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="error">Label</Label>
        <Input id="error" aria-invalid defaultValue="Invalid value" />
        <p className="text-error text-xs">This field is required</p>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-80">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="disabled">Label</Label>
        <Input id="disabled" disabled placeholder="Disabled..." />
      </div>
    </div>
  ),
};

export const FormFieldDefault: Story = {
  name: "FormField - Default",
  render: () => (
    <div className="w-80">
      <FormField label="Email" placeholder="Enter your email..." />
    </div>
  ),
};

export const FormFieldError: Story = {
  name: "FormField - Error",
  render: () => (
    <div className="w-80">
      <FormField
        label="Email"
        defaultValue="invalid"
        error="This field is required"
      />
    </div>
  ),
};
