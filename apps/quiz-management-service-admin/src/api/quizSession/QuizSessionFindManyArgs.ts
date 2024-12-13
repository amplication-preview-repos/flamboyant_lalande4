import { QuizSessionWhereInput } from "./QuizSessionWhereInput";
import { QuizSessionOrderByInput } from "./QuizSessionOrderByInput";

export type QuizSessionFindManyArgs = {
  where?: QuizSessionWhereInput;
  orderBy?: Array<QuizSessionOrderByInput>;
  skip?: number;
  take?: number;
};
