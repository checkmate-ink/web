import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TriangleAlert } from "lucide-react";

import { Alert, AlertDescription } from "./alert";
import { Button } from "./button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SaveTestLocally: Story = {
  render: () => (
    <Dialog defaultOpen>
      <DialogTrigger render={<Button variant="default">Open</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Test Locally</DialogTitle>
          <DialogDescription>
            Your test will be saved to your browser&apos;s local storage. You
            can access it anytime from this device without an account.
          </DialogDescription>
        </DialogHeader>
        <Alert variant="warning">
          <TriangleAlert />
          <AlertDescription>
            Data is stored on this device only and is not synced across devices.
            Clearing your browser data will permanently delete all saved tests.
          </AlertDescription>
        </Alert>
        <DialogFooter>
          <DialogClose render={<Button variant="secondary">Cancel</Button>} />
          <Button>Save Test</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
