import { Button, Card, Form, Input, InputNumber, Slider } from "antd";
import { GetFieldDecoratorOptions } from "antd/lib/form/Form";
import * as React from "react";

interface FormsProps {
  onChange: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  getFieldDecorator: <T extends {}>(
    id: keyof T,
    options?: GetFieldDecoratorOptions | undefined
  ) => (node: React.ReactNode) => React.ReactNode;
  setFieldsValue: (obj: {}) => void;
}

const FormItem = Form.Item;
const TextArea = Input.TextArea;

const Forms = (props: FormsProps) => {
  const { onChange, handleSubmit, getFieldDecorator } = props;
  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <FormItem label="文書">
          {getFieldDecorator("text", {
            rules: [
              {
                message: "文書を入力してください",
                required: true
              }
            ]
          })(
            <TextArea
              placeholder="Please input text"
              rows={5}
              onChange={onChange}
            />
          )}
        </FormItem>
        <FormItem label="文の数">
          {getFieldDecorator("maxLine", {
            initialValue: 0,
            rules: [
              {
                message: "文の数を入力してください",
                required: true
              }
            ]
          })(<InputNumber min={0} step={0} onChange={onChange} />)}
        </FormItem>
        <FormItem label="文字数">
          {getFieldDecorator("maxCharacter", {
            initialValue: 0,
            rules: [
              {
                message: "文字数を入力してください",
                required: true
              }
            ]
          })(<InputNumber min={0} step={0} onChange={onChange} />)}
        </FormItem>
        <FormItem label="閾値">
          {getFieldDecorator("threshold", {
            initialValue: 0.001
          })(<Slider min={0.0} max={1.0} step={0.001} onChange={onChange} />)}
          {getFieldDecorator("threshold", {
            initialValue: 0.001,
            rules: [
              {
                message: "閾値を入力してください",
                required: true
              }
            ]
          })(
            <InputNumber min={0.0} max={1.0} step={0.001} onChange={onChange} />
          )}
        </FormItem>
        <FormItem label="許容誤差">
          {getFieldDecorator("tolerance", {
            initialValue: 0.0001
          })(<Slider min={0.0} max={1.0} step={0.0001} onChange={onChange} />)}
          {getFieldDecorator("tolerance", {
            initialValue: 0.0001,
            rules: [
              {
                message: "許容誤差を入力してください",
                required: true
              }
            ]
          })(
            <InputNumber
              min={0.0}
              max={1.0}
              step={0.0001}
              onChange={onChange}
            />
          )}
        </FormItem>
        <FormItem label="ダンピング・ファクター">
          {getFieldDecorator("damping", {
            initialValue: 0.85
          })(<Slider min={0.0} max={1.0} step={0.01} onChange={onChange} />)}
          {getFieldDecorator("damping", {
            initialValue: 0.85,
            rules: [
              {
                message: "ダンピング・ファクターを入力してください",
                required: true
              }
            ]
          })(
            <InputNumber min={0.0} max={1.0} step={0.01} onChange={onChange} />
          )}
        </FormItem>
        <FormItem label="λ">
          {getFieldDecorator("lambda", {
            initialValue: 1.0
          })(<Slider min={0.0} max={1.0} step={0.001} onChange={onChange} />)}
          {getFieldDecorator("lambda", {
            initialValue: 1.0,
            rules: [
              {
                message: "λを入力してください",
                required: true
              }
            ]
          })(
            <InputNumber min={0.0} max={1.0} step={0.001} onChange={onChange} />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            要約する
          </Button>
        </FormItem>
      </Form>
    </Card>
  );
};

export default Forms;
