import { Form, InputNumber } from "antd";
import * as React from "react";

import FormProps from "../../types/props/FormProps";

const FormItem = Form.Item;

const MaxLinesForm = (props: FormProps) => {
  const { isFirstTouched, getFieldDecorator } = props;
  return (
    <FormItem
      validateStatus={isFirstTouched("maxLines") ? "error" : "success"}
      help={isFirstTouched("maxLines") || ""}
    >
      {getFieldDecorator("maxLines", {
        initialValue: 0,
        rules: [
          {
            message: "文数を入力して下さい",
            required: true
          }
        ]
      })(<InputNumber min={0} step={1} />)}
    </FormItem>
  );
};

export default MaxLinesForm;
