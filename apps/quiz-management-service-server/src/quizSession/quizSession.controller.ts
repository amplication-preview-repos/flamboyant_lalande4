import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuizSessionService } from "./quizSession.service";
import { QuizSessionControllerBase } from "./base/quizSession.controller.base";

@swagger.ApiTags("quizSessions")
@common.Controller("quizSessions")
export class QuizSessionController extends QuizSessionControllerBase {
  constructor(protected readonly service: QuizSessionService) {
    super(service);
  }
}
