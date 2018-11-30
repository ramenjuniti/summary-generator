import SentenceData from "../common/SentenceData";

interface AppState {
  requestLineSummary: boolean;
  result: SentenceData[] | null;
  showResultModal: boolean;
}

export default AppState;
