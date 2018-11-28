import SentenceData from "../common/SentenceData";

interface AppState {
  result: SentenceData[] | null;
  showResultModal: boolean;
}

export default AppState;
