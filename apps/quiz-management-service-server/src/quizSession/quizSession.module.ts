import { Module } from "@nestjs/common";
import { QuizSessionModuleBase } from "./base/quizSession.module.base";
import { QuizSessionService } from "./quizSession.service";
import { QuizSessionController } from "./quizSession.controller";
import { QuizSessionResolver } from "./quizSession.resolver";

@Module({
  imports: [QuizSessionModuleBase],
  controllers: [QuizSessionController],
  providers: [QuizSessionService, QuizSessionResolver],
  exports: [QuizSessionService],
})
export class QuizSessionModule {}
