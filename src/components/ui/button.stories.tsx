import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Download, FileUp, Sparkles } from "lucide-react";

import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    children: "Button",
    disabled: true,
  },
};

export const PrimaryWithIcon: Story = {
  render: () => (
    <Button>
      <Sparkles />
      Generate
    </Button>
  ),
};

export const SecondaryWithIcon: Story = {
  render: () => (
    <Button variant="secondary">
      <Download />
      Export
    </Button>
  ),
};

export const BrowseFiles: Story = {
  render: () => (
    <Button variant="secondary" size="sm">
      <FileUp />
      Browse files
    </Button>
  ),
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex items-center gap-3">
        <Button>
          <Sparkles />
          Generate
        </Button>
        <Button variant="secondary">
          <Download />
          Export
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>
          Secondary Disabled
        </Button>
      </div>
    </div>
  ),
};
