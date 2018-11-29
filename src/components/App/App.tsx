import { Form, Layout, message } from "antd";
import * as React from "react";

import Forms from "../Forms";
import Result from "../Result";

import InputData from "../../types/common/InputData";
import AppProps from "../../types/props/AppProps";
import AppState from "../../types/state/AppState";

import "./App.scss";

const api = process.env.REACT_APP_DEV_API_URL + "";

const { Header, Content, Footer } = Layout;

class App extends React.Component<AppProps, AppState> {
  public state = {
    result: null,
    showResultModal: false
  };

  public componentDidMount() {
    this.props.form.validateFields();
  }

  public hasErrors = (fieldsError: {}) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  public isFirstTouched = (field: string) => {
    const { isFieldTouched, getFieldError } = this.props.form;
    return isFieldTouched(field) && getFieldError(field);
  };

  public handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setState({ result: null, showResultModal: true });

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.postData(values)
          .then(resultData => this.setState({ result: resultData }))
          .catch(error => message.error(error.message));
      }
    });
  };

  public postData = (input: InputData) => {
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
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const { result, showResultModal } = this.state;
    return (
      <Layout className="App">
        <Header className="App-Header">
          <h1>ニュース要約</h1>
        </Header>
        <Content className="App-Content">
          <Forms
            hasErrors={this.hasErrors}
            handleSubmit={this.handleSubmit}
            isFirstTouched={this.isFirstTouched}
            getFieldsError={getFieldsError}
            getFieldDecorator={getFieldDecorator}
          />
          <Result
            result={result}
            showResultModal={showResultModal}
            handleModalCansel={this.handleModalCansel}
          />
        </Content>
        <Footer className="App-Footer">
          <p>Summary Generator ©2018 Created by ramenjuniti</p>
        </Footer>
      </Layout>
    );
  }
}

export default Form.create()(App);
