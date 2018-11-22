import { Form, message } from "antd";
import { FormComponentProps } from "antd/lib/form";
import * as React from "react";
import Header from "../Header";
import Result from "../Result";
import TextForm from "../TextForm";

interface FormData {
  text: string;
  delimiter: string;
}

interface SentenceData {
  id: number;
  sentence: string;
  score: number;
}

interface AppState {
  result: SentenceData[] | null;
}

class App extends React.Component<FormComponentProps, AppState> {
  public state = {
    result: null
  };

  public handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values: FormData) => {
      if (!err) {
        this.postData(values)
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
