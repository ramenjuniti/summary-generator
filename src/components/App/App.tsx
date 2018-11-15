import { Button, Form, Input } from "antd";
import * as React from "react";
import Header from "../Header";

const FormItem = Form.Item;
const TextArea = Input.TextArea;

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Form>
            <FormItem>
              <TextArea placeholder="Please input your name" rows={5} />
            </FormItem>
            <FormItem>
              <Input placeholder="delimiter" />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                submit
              </Button>
            </FormItem>
          </Form>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
