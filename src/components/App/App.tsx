import { Form, message } from "antd";
import * as React from "react";
import Header from "../Header";
import Result from "../Result";
import TextForm from "../TextForm";

interface FormData {
  text: string;
  delimiter: string;
}

class App extends React.Component<any, any> {
  public state = {
    result: null
  };

  public handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values: FormData) => {
      if (!err) {
        this.postData(values)
          // tslint:disable-next-line:no-console
          .then(data => this.setState({ result: data }))
          .catch(error => message.error(error));
      }
    });
  };

  public postData = (data: FormData) => {
    const form = new FormData();
    form.append("text", data.text);
    form.append("delimiter", data.delimiter);
    return fetch("https://summary-generator.appspot.com/", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json"
      },
      body: form
    }).then(res => {
      return res.json();
    });
  };

  public render() {
    const { result } = this.state;
    return (
      <React.Fragment>
        <Header />
        <TextForm
          handleSubmit={this.handleSubmit}
          getFieldDecorator={this.props.form.getFieldDecorator}
        />
        {result && <Result {...result} />}
      </React.Fragment>
    );
  }
}

export default Form.create()(App);
