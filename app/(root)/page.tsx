"use client";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Modal title="Test" description="test dec" isOpen onClose={() => {}}>
          Children
        </Modal>
        <Button className="p-4">Click Me</Button>
      </div>
    </main>
  );
}
