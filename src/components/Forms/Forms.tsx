import { Button, Card, Collapse, Form, Tabs } from "antd";
import * as React from "react";

import DampingForm from "./DampingForm";
import LambdaForm from "./LambdaForm";
import MaxCharactersForm from "./MaxCharactersForm";
import MaxLinesForm from "./MaxLinesForm";
import TextForm from "./TextForm";
import ThresholdForm from "./ThresholdForm";
import ToleranceForm from "./ToleranceForm";

import FormsProps from "../../types/props/FormsProps";

const FormItem = Form.Item;
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

const Forms = (props: FormsProps) => {
  const {
    handleChangeTab,
    hasErrors,
    isFirstTouched,
    handleSubmit,
    getFieldDecorator,
    getFieldsError
  } = props;
  return (
    <Card className="Forms">
      <Form hideRequiredMark={true} onSubmit={handleSubmit}>
        <TextForm
          isFirstTouched={isFirstTouched}
          getFieldDecorator={getFieldDecorator}
        />
        <Tabs defaultActiveKey="1" onChange={handleChangeTab}>
          <TabPane tab="文数" key="文数" forceRender={true}>
            <MaxLinesForm
              isFirstTouched={isFirstTouched}
              getFieldDecorator={getFieldDecorator}
            />
          </TabPane>
          <TabPane tab="文字数" key="文字数" forceRender={true}>
            <MaxCharactersForm
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
