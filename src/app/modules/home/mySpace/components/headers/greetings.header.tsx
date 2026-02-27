import { DATA } from "@common/data";
import { Card } from "antd";
import { FC } from "react";
const { tenant, currentUser } = DATA;

const getGreeting = (): string => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
};

const getMessage = (): string => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Have a productive day ahead!";
  } else if (hour >= 12 && hour < 17) {
    return "Keep up the great work!";
  } else if (hour >= 17 && hour < 21) {
    return "Hope you had a wonderful day!";
  } else {
    return "Time to rest and recharge!";
  }
};

const GreetingsHeader: FC = () => {
  return (
    <Card size="small">
      <div className="flex items-center gap-default">
        <div className="px-2 py-4 rounded-lg border border-slate-500/20">
          <img className="h-6" src={tenant.compactLogoURL} alt={tenant.name} />
        </div>
        <div>
          <div className="space-x-2">
            <strong>{getGreeting()}</strong>
            <span>{currentUser.name}</span>
          </div>
          <div className="text-muted">{getMessage()}</div>
        </div>
      </div>
    </Card>
  );
};

export default GreetingsHeader;
