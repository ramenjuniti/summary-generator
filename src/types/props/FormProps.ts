import { GetFieldDecoratorOptions } from "antd/lib/form/Form";

interface FormProps {
  isFirstTouched: (field: string) => false | {}[];
  getFieldDecorator: <T extends {}>(
    id: keyof T,
    options?: GetFieldDecoratorOptions | undefined
  ) => (node: React.ReactNode) => React.ReactNode;
}

export default FormProps;
