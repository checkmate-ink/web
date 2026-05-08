import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Label } from './label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[320px]">
      <div className="flex flex-col gap-1.5">
        <Label>Label</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option-1">Option One</SelectItem>
            <SelectItem value="option-2">Option Two</SelectItem>
            <SelectItem value="option-3">Option Three</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}

export const WithPreselected: Story = {
  render: () => (
    <div className="w-[320px]">
      <div className="flex flex-col gap-1.5">
        <Label>Difficulty</Label>
        <Select defaultValue="intermediate">
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-[320px]">
      <div className="flex flex-col gap-1.5">
        <Label>Subject</Label>
        <Select disabled>
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="biology">Biology</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}
