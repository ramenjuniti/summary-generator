import SentenceData from "../common/SentenceData";

interface ResultProps {
  result: SentenceData[] | null;
  showResultModal: boolean;
  handleModalCansel: () => void;
}

export default ResultProps;
