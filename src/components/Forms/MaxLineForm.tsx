import { Form, InputNumber } from "antd";
import * as React from "react";

import FormProps from "../../types/props/FormProps";

const FormItem = Form.Item;

const MaxLineForm = (props: FormProps) => {
  const { isFirstTouched, getFieldDecorator } = props;
  return (
    <FormItem
      validateStatus={isFirstTouched("maxLine") ? "error" : "success"}
      help={isFirstTouched("maxLine") || ""}
    >
      {getFieldDecorator("maxLine", {
        initialValue: 0,
        rules: [
          {
            message: "文の数を入力して下さい",
            required: true
          }
        ]
      })(<InputNumber min={0} step={1} />)}
    </FormItem>
  );
};

export default MaxLineForm;
