import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TestLoadingCard } from ".";

const defaultSteps = [
  "Analyzing teaching material",
  "Extracting key concepts",
  "Generating questions for Section 1",
  "Generating questions for Section 2",
  "Finalizing and formatting test",
];

const meta = {
  title: "Features/Tests/TestLoadingCard",
  component: TestLoadingCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TestLoadingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Generating Your Test...",
    subtitle: "This may take a moment",
    steps: defaultSteps,
  },
};

export const FastSteps: Story = {
  args: {
    title: "Generating Your Test...",
    subtitle: "This may take a moment",
    steps: defaultSteps,
    stepDuration: 1000,
  },
};

export const ThreeSteps: Story = {
  args: {
    title: "Processing Upload...",
    subtitle: "Please wait",
    steps: ["Uploading file", "Parsing content", "Preparing results"],
    stepDuration: 2000,
  },
};
