import { Form, InputNumber } from "antd";
import * as React from "react";

import FormProps from "../../types/props/FormProps";

const FormItem = Form.Item;

const MaxCharacterForm = (props: FormProps) => {
  const { isFirstTouched, getFieldDecorator } = props;
  return (
    <FormItem
      label="文字数"
      validateStatus={isFirstTouched("maxCharacter") ? "error" : "success"}
      help={isFirstTouched("maxCharacter") || ""}
    >
      {getFieldDecorator("maxCharacter", {
        initialValue: 0,
        rules: [
          {
            message: "文字数を入力して下さい",
            required: true
          }
        ]
      })(<InputNumber min={0} step={1} />)}
    </FormItem>
  );
};

export default MaxCharacterForm;
