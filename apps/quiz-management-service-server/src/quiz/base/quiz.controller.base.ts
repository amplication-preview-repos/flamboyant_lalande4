/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { QuizService } from "../quiz.service";
import { QuizCreateInput } from "./QuizCreateInput";
import { Quiz } from "./Quiz";
import { QuizFindManyArgs } from "./QuizFindManyArgs";
import { QuizWhereUniqueInput } from "./QuizWhereUniqueInput";
import { QuizUpdateInput } from "./QuizUpdateInput";

export class QuizControllerBase {
  constructor(protected readonly service: QuizService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Quiz })
  async createQuiz(@common.Body() data: QuizCreateInput): Promise<Quiz> {
    return await this.service.createQuiz({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Quiz] })
  @ApiNestedQuery(QuizFindManyArgs)
  async quizzes(@common.Req() request: Request): Promise<Quiz[]> {
    const args = plainToClass(QuizFindManyArgs, request.query);
    return this.service.quizzes({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Quiz })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async quiz(
    @common.Param() params: QuizWhereUniqueInput
  ): Promise<Quiz | null> {
    const result = await this.service.quiz({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Quiz })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateQuiz(
    @common.Param() params: QuizWhereUniqueInput,
    @common.Body() data: QuizUpdateInput
  ): Promise<Quiz | null> {
    try {
      return await this.service.updateQuiz({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Quiz })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteQuiz(
    @common.Param() params: QuizWhereUniqueInput
  ): Promise<Quiz | null> {
    try {
      return await this.service.deleteQuiz({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
