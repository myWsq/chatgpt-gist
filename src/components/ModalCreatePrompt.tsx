import { createModal } from "@/utils/create-modal";
import { Input, Modal, Textarea } from "@geist-ui/core";
import clsx from "clsx";
import produce from "immer";
import { useState } from "react";

export const ModalCreatePrompt = createModal((control, props) => {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const isSubmitEnabled = Boolean(form.title && form.content);

  return (
    <Modal {...control}>
      <Modal.Title>Create Prompt</Modal.Title>
      <Modal.Content>
        <Input
          label="Title"
          width="100%"
          onChange={(e) =>
            setForm(
              produce((d) => {
                d.title = e.target.value;
              })
            )
          }
        ></Input>
        <div className="h-4"></div>
        <Textarea
          width="100%"
          placeholder="Enter the content of your prompt"
          resize="vertical"
          onChange={(e) =>
            setForm(
              produce((d) => {
                d.content = e.target.value;
              })
            )
          }
        ></Textarea>
      </Modal.Content>
      <Modal.Action passive onClick={() => control.onClose?.()}>
        Cancel
      </Modal.Action>
      <Modal.Action
        disabled={!isSubmitEnabled}
        className={clsx(!isSubmitEnabled && "text-geist-accent-1")}
      >
        Submit
      </Modal.Action>
    </Modal>
  );
});
