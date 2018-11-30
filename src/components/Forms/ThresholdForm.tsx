import { Form, InputNumber, Slider } from "antd";
import * as React from "react";

import FormItemLabel from "./FormItemLabel";

import FormProps from "../../types/props/FormProps";

const FormItem = Form.Item;

const ThresholdForm = (props: FormProps) => {
  const { isFirstTouched, getFieldDecorator } = props;
  return (
    <FormItem
      label={
        <FormItemLabel
          label="閾値"
          description="数値が大きいほど、他と文と類似度の高い文が要約に含まれます"
        />
      }
      validateStatus={isFirstTouched("threshold") ? "error" : "success"}
      help={isFirstTouched("threshold") || ""}
    >
      {getFieldDecorator("threshold", {
        initialValue: 0.1
      })(<Slider min={0.0} max={1.0} step={0.1} />)}
      {getFieldDecorator("threshold", {
        initialValue: 0.1,
        rules: [
          {
            message: "閾値を入力して下さい",
            required: true
          }
        ]
      })(<InputNumber min={0.0} max={1.0} step={0.1} />)}
    </FormItem>
  );
};

export default ThresholdForm;
