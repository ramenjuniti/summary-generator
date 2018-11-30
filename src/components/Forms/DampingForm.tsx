import { Form, InputNumber, Slider } from "antd";
import * as React from "react";

import FormItemLabel from "./FormItemLabel";

import FormProps from "../../types/props/FormProps";

const FormItem = Form.Item;

const DampingForm = (props: FormProps) => {
  const { isFirstTouched, getFieldDecorator } = props;
  return (
    <FormItem
      label={
        <FormItemLabel
          label="ダンピング・ファクター"
          description="ダンピング・ファクターでーす"
        />
      }
      validateStatus={isFirstTouched("damping") ? "error" : "success"}
      help={isFirstTouched("damping") || ""}
    >
      {getFieldDecorator("damping", {
        initialValue: 0.85
      })(<Slider min={0.0} max={1.0} step={0.01} />)}
      {getFieldDecorator("damping", {
        initialValue: 0.85,
        rules: [
          {
            message: "ダンピング・ファクターを入力して下さい",
            required: true
          }
        ]
      })(<InputNumber min={0.0} max={1.0} step={0.01} />)}
    </FormItem>
  );
};

export default DampingForm;
