import { DATA } from "@common/data";
import { List } from "antd";
import { FC } from "react";
import ApprovalListItem from "./approval.listItem";

const ApprovalsList: FC = () => {
  return (
    <div>
      <List
        dataSource={DATA.leaves.pending}
        renderItem={(item) => <ApprovalListItem item={item} />}
      />
    </div>
  );
};

export default ApprovalsList;
