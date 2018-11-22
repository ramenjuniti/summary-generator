import { Button, Form, Input } from "antd";
import { GetFieldDecoratorOptions } from "antd/lib/form/Form";
import * as React from "react";

interface TextFromProps {
  handleSubmit: (e: React.FormEvent) => void;
  getFieldDecorator: <T extends {}>(
    id: keyof T,
    options?: GetFieldDecoratorOptions | undefined
  ) => (node: React.ReactNode) => React.ReactNode;
}

const FormItem = Form.Item;
const TextArea = Input.TextArea;

const TextForm = (props: TextFromProps) => {
  const { handleSubmit, getFieldDecorator } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormItem label="text">
        {getFieldDecorator("text", {
          rules: [
            {
              message: "Please input text",
              required: true
            }
          ]
        })(<TextArea placeholder="Please input your text" rows={5} />)}
      </FormItem>
      <FormItem label="Delimiter">
        {getFieldDecorator("delimiter", {
          rules: [
            {
              message: "Please input delimiter",
              required: true
            }
          ]
        })(<Input placeholder="delimiter" />)}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </FormItem>
    </Form>
  );
};

export default TextForm;
