import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Eye, Pencil, LayoutGrid, List, Columns } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from './toggle-group'

const meta = {
  title: 'UI/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ToggleGroup defaultValue={["preview"]}>
      <ToggleGroupItem value="preview">
        <Eye />
        Preview
      </ToggleGroupItem>
      <ToggleGroupItem value="edit">
        <Pencil />
        Edit
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const SecondActive: Story = {
  render: () => (
    <ToggleGroup defaultValue={["edit"]}>
      <ToggleGroupItem value="preview">
        <Eye />
        Preview
      </ToggleGroupItem>
      <ToggleGroupItem value="edit">
        <Pencil />
        Edit
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const ThreeTabs: Story = {
  render: () => (
    <ToggleGroup defaultValue={["grid"]}>
      <ToggleGroupItem value="grid">
        <LayoutGrid />
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list">
        <List />
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="columns">
        <Columns />
        Columns
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const TextOnly: Story = {
  render: () => (
    <ToggleGroup defaultValue={["all"]}>
      <ToggleGroupItem value="all">All</ToggleGroupItem>
      <ToggleGroupItem value="active">Active</ToggleGroupItem>
      <ToggleGroupItem value="archived">Archived</ToggleGroupItem>
    </ToggleGroup>
  ),
}
