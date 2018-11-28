import { Form, Input } from "antd";
import { GetFieldDecoratorOptions } from "antd/lib/form/Form";
import * as React from "react";

const FormItem = Form.Item;
const TextArea = Input.TextArea;

interface TextFormProps {
  isFirstTouched: (field: string) => false | {}[];
  getFieldDecorator: <T extends {}>(
    id: keyof T,
    options?: GetFieldDecoratorOptions | undefined
  ) => (node: React.ReactNode) => React.ReactNode;
}

const TextForm = (props: TextFormProps) => {
  const { isFirstTouched, getFieldDecorator } = props;
  return (
    <FormItem
      label="文書"
      validateStatus={isFirstTouched("text") ? "error" : "success"}
      help={isFirstTouched("text") || ""}
    >
      {getFieldDecorator("text", {
        rules: [
          {
            message: "文書を入力して下さい",
            required: true
          }
        ]
      })(<TextArea placeholder="要約する文書を入力して下さい" rows={5} />)}
    </FormItem>
  );
};

export default TextForm;
