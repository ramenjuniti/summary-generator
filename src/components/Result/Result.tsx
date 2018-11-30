import { List, Modal, Row, Spin } from "antd";
import * as React from "react";

import SentenceData from "../../types/common/SentenceData";
import ResultProps from "../../types/props/ResultProps";

const Result = (props: ResultProps) => {
  const { result, showResultModal, handleModalCansel } = props;
  return (
    <Modal
      title="要約"
      visible={showResultModal}
      onCancel={handleModalCansel}
      footer={null}
      bodyStyle={{ paddingTop: "1.2em" }}
    >
      <Row type="flex" justify="center" style={{ paddingTop: 0 }}>
        {result ? (
          result.length !== 0 ? (
            <List
              itemLayout="horizontal"
              dataSource={result}
              renderItem={(item: SentenceData) => (
                <List.Item>
                  <List.Item.Meta
                    title={`文番号: ${item.id + 1}`}
                    description={item.sentence}
                  />
                </List.Item>
              )}
            />
          ) : (
            <React.Fragment>
              <p>指定された条件では、要約を生成できませんでした。</p>
              <p>条件を変更してもう一度行ってみてください。</p>
            </React.Fragment>
          )
        ) : (
          <Spin size="large" tip="要約生成中" />
        )}
      </Row>
    </Modal>
  );
};

export default Result;
