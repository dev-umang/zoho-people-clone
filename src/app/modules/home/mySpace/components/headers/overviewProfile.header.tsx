import { DATA } from "@common/data";
import { Avatar, Card } from "antd";
import { FC } from "react";

const OverviewProfileHeader: FC = () => {
  const user = DATA.currentUser;
  return (
    <div className="relative">
      <Card size="small" className="text-center">
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <Avatar
            shape="square"
            src={user.photoURL}
            className="z-10 bg-slate-600! h-24! w-24! flex items-center justify-center text-xl font-bold"
          >
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </Avatar>
        </div>
        <div className="text-sm/snug mt-8 mb-2">
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
