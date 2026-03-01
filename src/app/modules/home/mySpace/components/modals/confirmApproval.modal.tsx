import { Button, Input, Modal, Space } from "antd";
import { Check, TriangleAlert } from "lucide-react";
import { FC } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  modalType?: "approve" | "reject";
};

const ConfirmApprovalModal: FC<Props> = (p) => {
  const ApproveIcon = (
    <div className="rounded-full h-16 w-16 bg-linear-60 shadow-sm shadow-green-600 from-green-700 to-green-500 flex items-center justify-center">
      <Check size={32} strokeWidth={3} className="text-white" />
    </div>
  );
  const RejectIcon = (
    <div className="rounded-full h-16 w-16 bg-linear-60 shadow-sm shadow-red-600 from-red-700 to-red-500 flex items-center justify-center">
      <TriangleAlert size={32} className="text-white" />
    </div>
  );
  return (
    <Modal footer={null} open={p.open} onCancel={p.onClose}>
      <div className="p-6 flex items-center justify-center">
        {p.modalType === "approve" ? ApproveIcon : RejectIcon}
      </div>
      <h1 className="text-center text-lg font-semibold">
        Do you want to {p.modalType === "approve" ? "approve" : "reject"}?
      </h1>
      <p className="text-center text-sm text-gray-500">
        Do you want to {p.modalType === "approve" ? "approve" : "reject"}{" "}
        selected request(s)? This action cannot be undone. Please confirm your
        choice.
      </p>
      <div className="my-4">
        <Input.TextArea
          rows={2}
          placeholder="[Optionally] Enter any comments..."
        />
      </div>
      <Space>
        <Button type="primary" danger={p.modalType === "reject"}>
          {p.modalType === "approve" ? "Approve" : "Reject"}
        </Button>
        <Button onClick={p.onClose}>Cancel</Button>
      </Space>
    </Modal>
  );
};

export default ConfirmApprovalModal;
