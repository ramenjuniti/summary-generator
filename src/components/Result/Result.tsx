import { Modal, Spin } from "antd";
import * as React from "react";

import SentenceData from "../../types/SentenceData";

interface ResultProps {
  result: SentenceData[] | null;
  showResultModal: boolean;
  handleModalCansel: () => void;
}

const Result = (props: ResultProps) => {
  const { result, showResultModal, handleModalCansel } = props;
  return (
    <Modal title="結果" visible={showResultModal} onCancel={handleModalCansel}>
      {result ? JSON.stringify(result) : <Spin size="large" tip="要約生成中" />}
    </Modal>
  );
};

export default Result;
