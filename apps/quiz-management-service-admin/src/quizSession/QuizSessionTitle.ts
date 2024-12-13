import { QuizSession as TQuizSession } from "../api/quizSession/QuizSession";

export const QUIZSESSION_TITLE_FIELD = "id";

export const QuizSessionTitle = (record: TQuizSession): string => {
  return record.id?.toString() || String(record.id);
};
