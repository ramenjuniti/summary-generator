import { Form, InputNumber, Slider } from "antd";
import * as React from "react";

import FormProps from "../../types/props/FormProps";

const FormItem = Form.Item;

const ThresholdForm = (props: FormProps) => {
  const { isFirstTouched, getFieldDecorator } = props;
  return (
    <FormItem
      label="閾値"
      validateStatus={isFirstTouched("threshold") ? "error" : "success"}
      help={isFirstTouched("threshold") || ""}
    >
      {getFieldDecorator("threshold", {
        initialValue: 0.001
      })(<Slider min={0.0} max={1.0} step={0.001} />)}
      {getFieldDecorator("threshold", {
        initialValue: 0.001,
        rules: [
          {
            message: "閾値を入力して下さい",
            required: true
          }
        ]
      })(<InputNumber min={0.0} max={1.0} step={0.001} />)}
    </FormItem>
  );
};

export default ThresholdForm;
