import { DATA } from "@common/data";
import { Avatar, Card } from "antd";
import { FC } from "react";

const OverviewProfileHeader: FC = () => {
  const user = DATA.currentUser;
  return (
    <div className="relative">
      <Card className="text-center">
        <div className="">
          <Avatar
            shape="square"
            className="z-10 absolute -top-24 h-32! w-32! bg-gray-200 flex items-center justify-center text-xl font-bold"
          >
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </Avatar>
        </div>
        <div className="text-sm/snug">
          <div>
            <span className="text-muted">{user.employeeCode}</span> -{" "}
            <strong>{user.name}</strong>
          </div>
          <span className="text-muted">{user.designation}</span>
        </div>
      </Card>
    </div>
  );
};

export default OverviewProfileHeader;
