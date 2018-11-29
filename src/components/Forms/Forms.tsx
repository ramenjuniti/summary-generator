import { Button, Card, Collapse, Form, Tabs } from "antd";
import * as React from "react";

import DampingForm from "./DampingForm";
import LambdaForm from "./LambdaForm";
import MaxCharacterForm from "./MaxCharacterForm";
import MaxLineForm from "./MaxLineForm";
import TextForm from "./TextForm";
import ThresholdForm from "./ThresholdForm";
import ToleranceForm from "./ToleranceForm";

import FormsProps from "../../types/props/FormsProps";

import "./Forms.css";

const FormItem = Form.Item;
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

const Forms = (props: FormsProps) => {
  const {
    hasErrors,
    isFirstTouched,
    handleSubmit,
    getFieldDecorator,
    getFieldsError
  } = props;
  return (
    <Card style={{ margin: "2em 3em 0 3em" }}>
      <Form hideRequiredMark={true} onSubmit={handleSubmit}>
        <TextForm
          isFirstTouched={isFirstTouched}
          getFieldDecorator={getFieldDecorator}
        />
        <Tabs defaultActiveKey="1">
          <TabPane tab="文数で要約" key="1" forceRender={true}>
            <MaxLineForm
              isFirstTouched={isFirstTouched}
              getFieldDecorator={getFieldDecorator}
            />
          </TabPane>
          <TabPane tab="文字数で要約" key="2" forceRender={true}>
            <MaxCharacterForm
              isFirstTouched={isFirstTouched}
              getFieldDecorator={getFieldDecorator}
            />
          </TabPane>
        </Tabs>
        <Collapse bordered={false} accordion={true}>
          <Panel
            header="詳細設定"
            key="1"
            forceRender={true}
            style={{ border: 0, marginBottom: "1.5em" }}
          >
            <ThresholdForm
              isFirstTouched={isFirstTouched}
              getFieldDecorator={getFieldDecorator}
            />
            <ToleranceForm
              isFirstTouched={isFirstTouched}
              getFieldDecorator={getFieldDecorator}
            />
            <DampingForm
              isFirstTouched={isFirstTouched}
              getFieldDecorator={getFieldDecorator}
            />
            <LambdaForm
              isFirstTouched={isFirstTouched}
              getFieldDecorator={getFieldDecorator}
            />
          </Panel>
        </Collapse>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            要約する
          </Button>
        </FormItem>
      </Form>
    </Card>
  );
};

export default Forms;
