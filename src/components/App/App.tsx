import { Form, message } from "antd";
import { FormComponentProps } from "antd/lib/form";
import * as React from "react";

import Forms from "../Forms";
import Header from "../Header";
import Result from "../Result";

import InputData from "../../types/InputData";
import SentenceData from "../../types/SentenceData";

interface AppState {
  input: InputData;
  result: SentenceData[] | null;
  showResultModal: boolean;
}

const api = process.env.REACT_APP_DEV_API_URL + "";
class App extends React.Component<FormComponentProps, AppState> {
  public state = {
    input: {
      text: "",
      maxLine: 0,
      maxCharacter: 0,
      threshold: 0.001,
      tolerance: 0.0001,
      damping: 0.85,
      lambda: 1
    },
    result: null,
    showResultModal: false
  };

  public componentDidMount = () => {
    // tslint:disable-next-line:no-console
    const input = {
      text: "",
      delimiter: "",
      maxLine: 0,
      maxCharacter: 0,
      threshold: 0.001,
      tolerance: 0.0001,
      damping: 0.85,
      lambda: 1
    };
    this.setState({ input });
  };

  public onChange = () => {
    const { getFieldValue } = this.props.form;
    const input = {
      text: getFieldValue("text"),
      maxLine: getFieldValue("maxLine"),
      maxCharacter: getFieldValue("maxCharacter"),
      threshold: getFieldValue("threshold"),
      tolerance: getFieldValue("tolerance"),
      damping: getFieldValue("damping"),
      lambda: getFieldValue("lambda")
    };
    // tslint:disable-next-line:no-console
    console.log(input);
    this.setState({ input });
    // tslint:disable-next-line:no-console
    console.log(this.state.input);
  };

  public handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState({ showResultModal: true });
    this.postData()
      .then(resultData => this.setState({ result: resultData }))
      .catch(error => message.error(error.message));
  };

  public postData = () => {
    const { input } = this.state;
    const form = new FormData();
    form.append("text", input.text);
    form.append("maxLine", input.maxLine + "");
    form.append("maxCharacter", input.maxCharacter + "");
    form.append("threshold", input.threshold + "");
    form.append("tolerance", input.tolerance + "");
    form.append("damping", input.damping + "");
    form.append("lambda", input.lambda + "");
    return fetch(api, {
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

  public handleModalCansel = () => {
    this.setState({ showResultModal: false });
  };

  public render() {
    const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { result, showResultModal } = this.state;
    return (
      <div>
        <Header />
        <Forms
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
          setFieldsValue={setFieldsValue}
          getFieldDecorator={getFieldDecorator}
        />
        <Result
          result={result}
          showResultModal={showResultModal}
          handleModalCansel={this.handleModalCansel}
        />
      </div>
    );
  }
}

export default Form.create()(App);
