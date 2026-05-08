import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Check, Heart, Info, Star } from 'lucide-react'

import { Badge } from './badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['yellow', 'blue', 'green', 'pink'],
    },
    hasIcon: { control: 'boolean' },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Yellow: Story = {
  args: {
    variant: 'yellow',
    children: 'Badge',
  },
}

export const Blue: Story = {
  args: {
    variant: 'blue',
    children: 'Badge',
  },
}

export const Green: Story = {
  args: {
    variant: 'green',
    children: 'Badge',
  },
}

export const Pink: Story = {
  args: {
    variant: 'pink',
    children: 'Badge',
  },
}

export const YellowWithIcon: Story = {
  name: 'Yellow with Icon',
  render: () => (
    <Badge variant="yellow" hasIcon>
      <Star />
      Badge
    </Badge>
  ),
}

export const BlueWithIcon: Story = {
  name: 'Blue with Icon',
  render: () => (
    <Badge variant="blue" hasIcon>
      <Info />
      Badge
    </Badge>
  ),
}

export const GreenWithIcon: Story = {
  name: 'Green with Icon',
  render: () => (
    <Badge variant="green" hasIcon>
      <Check />
      Badge
    </Badge>
  ),
}

export const PinkWithIcon: Story = {
  name: 'Pink with Icon',
  render: () => (
    <Badge variant="pink" hasIcon>
      <Heart />
      Badge
    </Badge>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-3">
        <Badge variant="yellow">Badge</Badge>
        <Badge variant="blue">Badge</Badge>
        <Badge variant="green">Badge</Badge>
        <Badge variant="pink">Badge</Badge>
      </div>
      <div className="flex items-center gap-3">
        <Badge variant="yellow" hasIcon>
          <Star />
          Badge
        </Badge>
        <Badge variant="blue" hasIcon>
          <Info />
          Badge
        </Badge>
        <Badge variant="green" hasIcon>
          <Check />
          Badge
        </Badge>
        <Badge variant="pink" hasIcon>
          <Heart />
          Badge
        </Badge>
      </div>
    </div>
  ),
}
