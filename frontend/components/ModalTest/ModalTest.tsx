import { Button, Text } from "@mantine/core";
import { modals } from "@mantine/modals";

function ModalTest() {
  const openModal = () =>
    modals.openConfirmModal({
      centered: true,
      title: "Please confirm your action",
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please click one of these buttons to proceed.
        </Text>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}

export default ModalTest;
