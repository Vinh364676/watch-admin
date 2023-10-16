import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { RouteChildrenProps } from "react-router";
import { Link } from "react-router-dom";
import "./sign-in.scss";
import { useAuthContext } from "../../hooks/useAuthContext";
import banner from "../../assets/images/login.svg";
import { UserOutlined,LinkOutlined } from '@ant-design/icons';
interface Props extends RouteChildrenProps {}

export default function SignIn() {
  const { login } = useAuthContext();

  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // login(,"bl");
  };
  

  return (
    <div className="signIn">
      <Row>
        <Col span={12} className="signIn__banner">
			<img src={banner} alt="" />
		</Col>
        <Col span={12} className="signIn__content">
          <h2 className="signIn__content--title">Welcome</h2>
          <p className="signIn__content--desc">Login with Email</p>
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
			requiredMark ={"optional"}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
			className="signIn__form"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tài khoản!",
                },
              ]}
            >
              <Input allowClear bordered={false} placeholder="Nhập tài khoản" prefix={<UserOutlined />} className="signIn__form__input"/>
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password allowClear bordered={false} placeholder="Nhập mật khẩu" prefix={<LinkOutlined />} className="signIn__form__input"/>
            </Form.Item>
			  <div className="signIn__form__option">
				
				<Checkbox>Remember me</Checkbox>
					<p className="signIn__form__option--forgot">Forgot Password?</p>
				
			  </div>
			  <Button className="signIn__button" type="primary" htmlType="submit">
                Login
              </Button>
          </Form>
		  
		  <p className="signIn__register">Don’t have account? <span>Register Now</span></p>
        </Col>
      </Row>
    </div>
  );
}
