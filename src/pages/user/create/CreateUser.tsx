import { RouteChildrenProps } from "react-router";
import TitleComponent from "../../../components/titleComponent/Title";
import { Button, LayoutProps, Steps, message } from "antd";
import { useState } from "react";
import "./CreateUser.scss";
import Profile from "../../../components/views/user/content/profile/Profile";
import Account from "../../../components/views/user/content/account/Account";
import BackgroundUser from "../../../components/views/user/content/BackgroundUser/BackgroundUser";
interface Props extends RouteChildrenProps, LayoutProps {}

export default function CreateUser(props: Props) {
  const steps = [
    {
      title: "Tài khoản",
      content: <Account/>,
    },
    {
      title: "Hồ sơ",
      content: <Profile/>,
    },
    {
      title: "Xác nhận",
      content: <BackgroundUser/>,
    },
  ];
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <TitleComponent title="Tạo mới người dùng" isPrimary={false} />
      <div className="createUser">
      <Steps current={current} items={items} />
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
      </div>
      
    </>
  );
}
