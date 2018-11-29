import { Modal, Spin } from "antd";
import * as React from "react";

import ResultProps from "../../types/props/ResultProps";

const Result = (props: ResultProps) => {
  const { result, showResultModal, handleModalCansel } = props;
  return (
    <Modal title="要約" visible={showResultModal} onCancel={handleModalCansel}>
      {result ? JSON.stringify(result) : <Spin size="large" tip="要約生成中" />}
    </Modal>
  );
};

export default Result;
