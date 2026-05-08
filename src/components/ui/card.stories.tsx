import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-90">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>A short description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-cream-background h-20 rounded-xl" />
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Card className="w-90">
      <CardHeader>
        <CardTitle>Upload Tests</CardTitle>
        <CardDescription>
          Upload your test files for AI analysis.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="border-deep-brown/10 flex items-center justify-between rounded-lg border px-3 py-2">
            <span className="text-sm">auth.spec.ts</span>
            <span className="text-deep-brown/50 text-xs">12KB</span>
          </div>
          <div className="border-deep-brown/10 flex items-center justify-between rounded-lg border px-3 py-2">
            <span className="text-sm">login.spec.ts</span>
            <span className="text-deep-brown/50 text-xs">8KB</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Cancel</Button>
        <Button>Upload</Button>
      </CardFooter>
    </Card>
  ),
};

export const HeaderOnly: Story = {
  render: () => (
    <Card className="w-90">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
    </Card>
  ),
};
