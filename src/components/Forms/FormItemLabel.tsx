import { Icon, Tooltip } from "antd";
import * as React from "react";

import FormItemLabelProps from "../../types/props/FormItemLabelProps";

const FormItemLabel = (props: FormItemLabelProps) => {
  const { label, description } = props;
  return (
    <span>
      {label}&nbsp;
      <Tooltip title={description}>
        <Icon type="question-circle-o" />
      </Tooltip>
    </span>
  );
};

export default FormItemLabel;
