import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Label } from './label'
import { Switch } from './switch'

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Off: Story = {}

export const On: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Enable notifications</Label>
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch />
        <Label>Off</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked />
        <Label>On</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch disabled />
        <Label>Disabled Off</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch defaultChecked disabled />
        <Label>Disabled On</Label>
      </div>
    </div>
  ),
}
