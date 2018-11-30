import { Form, InputNumber, Slider } from "antd";
import * as React from "react";

import FormItemLabel from "./FormItemLabel";

import FormProps from "../../types/props/FormProps";

const FormItem = Form.Item;

const ToleranceForm = (props: FormProps) => {
  const { isFirstTouched, getFieldDecorator } = props;
  return (
    <FormItem
      label={
        <FormItemLabel
          label="許容誤差"
          description="数値が小さいほど正確な結果が得られますが、時間がかかります"
        />
      }
      validateStatus={isFirstTouched("tolerance") ? "error" : "success"}
      help={isFirstTouched("tolerance") || ""}
    >
      {getFieldDecorator("tolerance", {
        initialValue: 0.0001
      })(<Slider min={0.0} max={1.0} step={0.0001} />)}
      {getFieldDecorator("tolerance", {
        initialValue: 0.0001,
        rules: [
          {
            message: "許容誤差を入力して下さい",
            required: true
          }
        ]
      })(<InputNumber min={0.0} max={1.0} step={0.0001} />)}
    </FormItem>
  );
};

export default ToleranceForm;
