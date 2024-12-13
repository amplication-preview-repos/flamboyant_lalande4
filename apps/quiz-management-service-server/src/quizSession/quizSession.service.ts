import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuizSessionServiceBase } from "./base/quizSession.service.base";

@Injectable()
export class QuizSessionService extends QuizSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
