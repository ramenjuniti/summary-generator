import { GetFieldDecoratorOptions } from "antd/lib/form/Form";

interface FormsProps {
  handleChangeTab: (key: string) => void;
  hasErrors: (fieldsError: {}) => boolean;
  isFirstTouched: (field: string) => false | {}[];
  handleSubmit: (e: React.FormEvent) => void;
  getFieldsError: (names?: string[] | undefined) => {};
  getFieldDecorator: <T extends {}>(
    id: keyof T,
    options?: GetFieldDecoratorOptions | undefined
  ) => (node: React.ReactNode) => React.ReactNode;
}

export default FormsProps;
