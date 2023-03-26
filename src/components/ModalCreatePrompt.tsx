import { cn } from "@/utils/cn";
import { createModal } from "@/utils/create-modal";
import produce from "immer";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ModalCreatePrompt = createModal((control, props) => {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const isSubmitEnabled = Boolean(form.title && form.content);

  return (
    <Dialog
      open={control.visible}
      onOpenChange={(val) => !val && control.onClose?.()}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Prompt</DialogTitle>
          <DialogDescription>
            Create a new prompt to use in your session.
          </DialogDescription>
        </DialogHeader>
        <div className="h-2"></div>
        <Input
          placeholder="Title"
          autoFocus
          onChange={(e) =>
            setForm(
              produce((d) => {
                d.title = e.target.value;
              })
            )
          }
        ></Input>
        <Textarea
          placeholder="Enter the content of your prompt"
          onChange={(e) =>
            setForm(
              produce((d) => {
                d.content = e.target.value;
              })
            )
          }
        ></Textarea>
        <DialogFooter>
          <Button
            onClick={() => control.onClose?.()}
            className={cn("mt-2 sm:mt-0")}
            variant="outline"
          >
            Cancel
          </Button>
          <Button disabled={!isSubmitEnabled}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
