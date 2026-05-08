import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Progress, ProgressLabel, ProgressValue } from './progress'

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: 65,
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 65,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Progress {...args}>
        <ProgressLabel>Progress</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  ),
}

export const Empty: Story = {
  args: {
    value: 0,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Progress {...args}>
        <ProgressLabel>Not started</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  ),
}

export const Full: Story = {
  args: {
    value: 100,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Progress {...args}>
        <ProgressLabel>Complete</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  ),
}

export const AllVariations: Story = {
  args: {
    value: 65,
  },
  render: () => (
    <div className="flex w-[300px] flex-col gap-6">
      <Progress value={0}>
        <ProgressLabel>Upload</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Progress value={25}>
        <ProgressLabel>Processing</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Progress value={65}>
        <ProgressLabel>Generating</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Progress value={100}>
        <ProgressLabel>Complete</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  ),
}
