import * as graphql from "@nestjs/graphql";
import { QuizSessionResolverBase } from "./base/quizSession.resolver.base";
import { QuizSession } from "./base/QuizSession";
import { QuizSessionService } from "./quizSession.service";

@graphql.Resolver(() => QuizSession)
export class QuizSessionResolver extends QuizSessionResolverBase {
  constructor(protected readonly service: QuizSessionService) {
    super(service);
  }
}
