import { Form, InputNumber, Slider } from "antd";
import * as React from "react";

import FormItemLabel from "./FormItemLabel";

import FormProps from "../../types/props/FormProps";

const FormItem = Form.Item;

const LambdaForm = (props: FormProps) => {
  const { isFirstTouched, getFieldDecorator } = props;
  return (
    <FormItem
      label={
        <FormItemLabel
          label="λ"
          description="数値が小さいほど、要約に多様性が出ます"
        />
      }
      validateStatus={isFirstTouched("lambda") ? "error" : "success"}
      help={isFirstTouched("lambda") || ""}
    >
      {getFieldDecorator("lambda", {
        initialValue: 1.0
      })(<Slider min={0.0} max={1.0} step={0.001} />)}
      {getFieldDecorator("lambda", {
        initialValue: 1.0,
        rules: [
          {
            message: "λを入力して下さい",
            required: true
          }
        ]
      })(<InputNumber min={0.0} max={1.0} step={0.001} />)}
    </FormItem>
  );
};

export default LambdaForm;
